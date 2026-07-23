/**
 * Every industry/service detail page embeds one content image, hosted on
 * ik.imagekit.io. None of those URLs had any resize/compression transform
 * on them, so the browser was downloading the raw original file every time
 * — for AI-generated (ChatGPT/DALL-E) PNGs in particular, those originals
 * can be several MB each, since PNG doesn't compress photographic detail
 * well. The ITES/BPO image is a PNG from that same batch.
 *
 * This rewrites every ik.imagekit.io src to request an auto-format,
 * compressed, width-capped version via ImageKit's URL-based transforms
 * (?tr=...), which ImageKit generates and edge-caches on first request.
 * ik.imagekit.io serves that resized file directly — no code changes to
 * how images render, just a much smaller file going over the wire.
 */
const fs = require('fs');
const path = require('path');

const TRANSFORM = 'tr=w-900,q-70,f-auto';

function optimize(content) {
  return content.replace(
    /(<img[^>]*\bsrc=")(https:\/\/ik\.imagekit\.io\/[^"]*)(")/g,
    (full, pre, url, post) => {
      if (url.includes('tr=')) return full; // already has a transform
      const sep = url.includes('?') ? '&' : '?';
      return `${pre}${url}${sep}${TRANSFORM}${post}`;
    }
  );
}

for (const file of ['industries.js', 'services.js']) {
  const filePath = path.join(__dirname, '..', 'src', file);
  const raw = fs.readFileSync(filePath, 'utf8');
  const varName = file === 'industries.js' ? 'INDUSTRIES' : 'SERVICES';
  const re = new RegExp(`const ${varName} = (\\[[\\s\\S]*\\]);\\s*\\nexport default ${varName};`);
  const m = raw.match(re);
  if (!m) {
    console.error(`Could not locate ${varName} array in ${file}`);
    continue;
  }
  const data = Function(`"use strict"; return (${m[1]});`)();

  let changed = 0;
  for (const item of data) {
    if (item && typeof item.content === 'string') {
      const optimized = optimize(item.content);
      if (optimized !== item.content) changed++;
      item.content = optimized;
    }
  }

  const out = raw.slice(0, m.index) +
    `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nexport default ${varName};` +
    raw.slice(m.index + m[0].length);

  fs.writeFileSync(filePath, out, 'utf8');
  console.log(`${file}: optimized images in ${changed} entries`);
}
