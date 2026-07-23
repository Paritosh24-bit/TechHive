export function cleanImportedHtml(html = '') {
  if (typeof window === 'undefined') return html;
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  // Helper: find the nearest ancestor "block" wrapper for an element,
  // whether that block happens to be a <section> tag or a plain <div>
  // carrying the elementor "e-parent" class. Using closest() here (instead
  // of a fixed-depth ancestor walk) means this works no matter how deeply a
  // given page happens to nest its content — some pages nest a level or two
  // deeper than others, which previously caused the fixed-depth walk to give
  // up before reaching the real wrapper, leaving broken covenantindia.net
  // images/icons visible on the page.
  // IMPORTANT: this must run BEFORE the elementor class-stripping pass below,
  // since that pass removes the "e-parent" class (and everything else) from
  // any element whose class list contains "elementor".
  const removeContainingBlock = (el, fallbackToSelf = false) => {
    const container = el.closest('section, div.e-parent');
    if (container) {
      container.remove();
      return true;
    }
    if (fallbackToSelf) el.remove();
    return false;
  };

  // Remove breadcrumb navs from raw content
  doc.querySelectorAll('.rank-math-breadcrumb, nav[aria-label="breadcrumbs"]').forEach(el => el.remove());

  // FIX #1: Remove "Industries We Serve" + "What we offer / Recruitment Services" trailing sections
  // These are h2 elements with specific text patterns that appear at the bottom
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

  // Remove "Industries We Serve" grid sections (axtra-service__list, icon boxes)
  doc.querySelectorAll('.axtra-service__list, .axtra-service__item').forEach(el => el.remove());

  // Remove wcf icon-boxes (the grid of industry cards that appear at bottom)
  doc.querySelectorAll('.wcf__iconbox').forEach(el => {
    const parent = el.closest('.wcf--image-box');
    if (!parent) el.remove();
  });

  // Remove CTA button wrappers (wcf-btn-circle "Services" button, wcf-btn-underline links)
  doc.querySelectorAll('.wcf__btn, .wcf-btn-underline, .wcf-btn-circle').forEach(el => {
    const href = el.href || (el.querySelector('a') && el.querySelector('a').href) || '';
    if (!href || href.includes('covenantindia') || href === '#') {
      el.remove();
    }
  });

  // FIX #3: Remove the crowdytheme arrow-down-big.png image (and counter section)
  // that appears at the top of each service page as a dark decorative block
  doc.querySelectorAll('img').forEach(img => {
    const src = img.src || img.getAttribute('src') || '';
    if (src.includes('crowdytheme.com') || src.includes('arrow-down-big')) {
      removeContainingBlock(img, true);
    }
  });

  // Remove brand/text sliders (scrolling marquee text strips)
  doc.querySelectorAll('.wcf--brand-slider-wrapper, .wcf__slider-wrapper').forEach(el => {
    removeContainingBlock(el, true);
  });

  // Remove FAQ accordion sections from service content (these are raw Elementor FAQs)
  doc.querySelectorAll('.elementor-accordion').forEach(el => {
    removeContainingBlock(el, false);
  });

  // Remove "Jobseekers / Work for Us" CTA panels
  doc.querySelectorAll('h5.wcf--title').forEach(el => {
    const text = el.textContent.trim();
    if (text === 'Jobseekers' || text === 'Work for Us' || text === 'New') {
      removeContainingBlock(el, false);
    }
  });

  // Remove the partner head-shot photo cards on the Executive Search page
  // (".wcf--image-box" is only ever used for these two portrait cards — nowhere
  // else across any industry or service page — so this selector is safe and
  // won't affect any other content).
  doc.querySelectorAll('.wcf--image-box').forEach(el => {
    const container = el.closest('.elementor-widget-wcf--image-box, section, div.e-parent') || el;
    container.remove();
  });

  // Remove elementor data attributes and classes (must run AFTER the
  // structural removals above, since those rely on the "e-parent" class
  // still being present to find the right containing block).
  doc.querySelectorAll('*').forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith('data-elementor')) el.removeAttribute(attr.name);
    });
    if (el.className && typeof el.className === 'string' && el.className.includes('elementor')) {
      el.removeAttribute('class');
    }
  });

  // Flatten elementor layout wrappers
  ['.elementor-section','.elementor-container','.elementor-widget','.elementor-column'].forEach(sel => {
    doc.querySelectorAll(sel).forEach(node => {
      const p = node.parentNode; if (!p) return;
      while (node.firstChild) p.insertBefore(node.firstChild, node);
      p.removeChild(node);
    });
  });

  // Elementor originally laid these image pairs out side-by-side (two divs,
  // each wrapping a single image). Left completely untouched, both images
  // land glued together wherever that pair happened to sit in the source
  // content — usually right at the end of the article — instead of being
  // spread out between paragraphs the way single images are on the industry
  // pages. Split the pair apart: move the first image up to sit right after
  // the article's opening paragraph, in between the intro copy and the
  // sections that follow, and leave the second image at the pair's original
  // spot so it reads as its own standalone in-text photo rather than a
  // second image stacked directly under the first.
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

  // Remove srcset/sizes and constrain remaining images. Each image's box is
  // sized to match its own natural aspect ratio (from its width/height
  // attributes) rather than a fixed 4:3 crop, so tall portrait photos and
  // extra-wide banner photos both display in full instead of getting
  // cropped down to fit a mismatched frame.
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

  // Remove empty divs / sections left after cleanup
  doc.querySelectorAll('div, section').forEach(el => {
    if (!el.textContent.trim() && !el.querySelector('img')) el.remove();
  });

  return doc.body.innerHTML;
}
