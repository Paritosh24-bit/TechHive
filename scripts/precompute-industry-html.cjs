/**
 * Runs the exact same cleaning logic that used to run in the browser on
 * every click (src/utils/cleanImportedHtml.js) ONE TIME, here at build time,
 * and bakes the already-cleaned HTML back into src/industries.js.
 *
 * This is what removes the "white screen / long pause" when opening an
 * industry page: the browser no longer has to parse+scrub ~40KB of HTML
 * with DOMParser + several full-tree querySelectorAll passes before it can
 * paint anything.
 */
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const industriesPath = path.join(__dirname, '..', 'src', 'industries.js');
const raw = fs.readFileSync(industriesPath, 'utf8');

// The file is `const INDUSTRIES = [ ... ];\n\nexport default INDUSTRIES;`
// Extract + eval just the array literal safely via Function (no other code).
const arrayMatch = raw.match(/const INDUSTRIES = (\[[\s\S]*\]);\s*\nexport default INDUSTRIES;/);
if (!arrayMatch) {
  console.error('Could not locate INDUSTRIES array literal in industries.js');
  process.exit(1);
}
const INDUSTRIES = Function(`"use strict"; return (${arrayMatch[1]});`)();

const dom = new JSDOM('<!doctype html><html><body></body></html>');
const { DOMParser } = dom.window;

// ---- exact same logic as src/utils/cleanImportedHtml.js ----
function cleanImportedHtml(html = '') {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const removeContainingBlock = (el, fallbackToSelf = false) => {
    const container = el.closest('section, div.e-parent');
    if (container) {
      container.remove();
      return true;
    }
    if (fallbackToSelf) el.remove();
    return false;
  };

  doc.querySelectorAll('.rank-math-breadcrumb, nav[aria-label="breadcrumbs"]').forEach(el => el.remove());

  doc.querySelectorAll('h2.wcf--title, h4.wcf--title').forEach(el => {
    const text = el.textContent.trim();
    if (
      text.startsWith('Industries We Serve') ||
      text === 'What we offer' ||
      text === 'Recruitment Services'
    ) {
      removeContainingBlock(el, true);
    }
  });

  doc.querySelectorAll('.axtra-service__list, .axtra-service__item').forEach(el => el.remove());

  doc.querySelectorAll('.wcf__iconbox').forEach(el => {
    const parent = el.closest('.wcf--image-box');
    if (!parent) el.remove();
  });

  doc.querySelectorAll('.wcf__btn, .wcf-btn-underline, .wcf-btn-circle').forEach(el => {
    const href = el.href || (el.querySelector('a') && el.querySelector('a').href) || '';
    if (!href || href.includes('covenantindia') || href === '#') {
      el.remove();
    }
  });

  doc.querySelectorAll('img').forEach(img => {
    const src = img.src || img.getAttribute('src') || '';
    if (src.includes('crowdytheme.com') || src.includes('arrow-down-big')) {
      removeContainingBlock(img, true);
    }
  });

  doc.querySelectorAll('.wcf--brand-slider-wrapper, .wcf__slider-wrapper').forEach(el => {
    removeContainingBlock(el, true);
  });

  doc.querySelectorAll('.elementor-accordion').forEach(el => {
    removeContainingBlock(el, false);
  });

  doc.querySelectorAll('h5.wcf--title').forEach(el => {
    const text = el.textContent.trim();
    if (text === 'Jobseekers' || text === 'Work for Us' || text === 'New') {
      removeContainingBlock(el, false);
    }
  });

  doc.querySelectorAll('.wcf--image-box').forEach(el => {
    const container = el.closest('.elementor-widget-wcf--image-box, section, div.e-parent') || el;
    container.remove();
  });

  doc.querySelectorAll('*').forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith('data-elementor')) el.removeAttribute(attr.name);
    });
    if (el.className && typeof el.className === 'string' && el.className.includes('elementor')) {
      el.removeAttribute('class');
    }
  });

  ['.elementor-section', '.elementor-container', '.elementor-widget', '.elementor-column'].forEach(sel => {
    doc.querySelectorAll(sel).forEach(node => {
      const p = node.parentNode; if (!p) return;
      while (node.firstChild) p.insertBefore(node.firstChild, node);
      p.removeChild(node);
    });
  });

  doc.querySelectorAll('div').forEach((el) => {
    const children = [...el.children].filter((c) => c.tagName === 'DIV');
    if (children.length !== 2) return;
    const imgs = children.map((c) => c.querySelectorAll('img'));
    if (imgs[0].length !== 1 || imgs[1].length !== 1) return;
    const hasOnlyImg = (child, imgList) =>
      child.textContent.trim() === '' && child.contains(imgList[0]);
    if (!hasOnlyImg(children[0], imgs[0]) || !hasOnlyImg(children[1], imgs[1])) return;

    const heroImg = imgs[0][0];
    const introPara = doc.querySelector('p');
    if (introPara && introPara.parentNode) {
      introPara.parentNode.insertBefore(heroImg, introPara.nextSibling);
    }
  });

  doc.querySelectorAll('img').forEach(img => {
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
    img.style.display = 'block';
    img.style.borderRadius = '12px';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.margin = '1.5rem auto';

    const w = parseFloat(img.getAttribute('width'));
    const h = parseFloat(img.getAttribute('height'));
    if (w && h) {
      img.style.aspectRatio = `${w} / ${h}`;
      img.style.objectFit = 'cover';
      img.style.maxWidth = h > w ? '380px' : '560px';
    } else {
      img.style.maxWidth = '480px';
    }
  });

  doc.querySelectorAll('div, section').forEach(el => {
    if (!el.textContent.trim() && !el.querySelector('img')) el.remove();
  });

  return doc.body.innerHTML;
}
// ---- end ported logic ----

let changed = 0;
for (const industry of INDUSTRIES) {
  if (industry && typeof industry.content === 'string') {
    industry.content = cleanImportedHtml(industry.content);
    industry.__precleaned = true; // marker, stripped below isn't needed since we control serialization
    delete industry.__precleaned;
    changed++;
  }
}

const header = `/**
 * Industries data source.
 *
 * This file is the single source of truth for every /industries/:slug page.
 * IndustryPage.jsx reads from this array purely by \`slug\` — it has no
 * knowledge of how many industries exist or what they're called.
 *
 * NOTE: \`content\` below is PRE-CLEANED HTML (see scripts/precompute-industry-html.cjs).
 * The old approach ran DOMParser-based cleanup in the browser on every
 * click, which blocked the page from painting until it finished. That
 * cleanup now happens once, here at build time, so the page opens
 * immediately. If you re-import/scrape new raw content, re-run:
 *   node scripts/precompute-industry-html.cjs
 */

const INDUSTRIES = ${JSON.stringify(INDUSTRIES, null, 2)};

export default INDUSTRIES;
`;

fs.writeFileSync(industriesPath, header, 'utf8');
console.log(`Pre-cleaned ${changed} industries. Wrote ${(fs.statSync(industriesPath).size / 1024).toFixed(1)} KB to src/industries.js`);
