const fs = require('fs');
const path = require('path');

const ORDER = [
  'technology-sector',
  'software-saas',
  'emerging-technologies-innovation',
  'ites-bpo',
  'gcc-sector',
  'manufacturing-industries',
  'industrial-automation',
  'electronics-semiconductor',
  'chemicals-fertilizers',
  'mining-steel',
  'automotive-industry',
  'aerospace-defence',
  'bfsi-sector',
  'healthcare-pharmaceuticals',
  'fmcg-sector',
  'retail-business',
  'logistics-supply-chain',
  'infrastructure-sector',
  'telecom-services',
  'energy-sector',
  'agriculture-agribusiness',
  'hospitality-tourism',
  'wine-spirits',
  'media-entertainment',
  'education-training',
  'environmental-services',
  'legal-professional',
  'startups-high-growth-enterprises',
];

const filePath = path.join(__dirname, '..', 'src', 'industries.js');
const raw = fs.readFileSync(filePath, 'utf8');
const m = raw.match(/const INDUSTRIES = (\[[\s\S]*\]);\s*\nexport default INDUSTRIES;/);
if (!m) {
  console.error('Could not locate INDUSTRIES array in industries.js');
  process.exit(1);
}
const data = Function(`"use strict"; return (${m[1]});`)();

const bySlug = new Map(data.map((it) => [it.slug, it]));

if (bySlug.size !== ORDER.length) {
  console.error(`Mismatch: file has ${bySlug.size} industries, ORDER has ${ORDER.length}`);
}
const missing = ORDER.filter((slug) => !bySlug.has(slug));
const extra = [...bySlug.keys()].filter((slug) => !ORDER.includes(slug));
if (missing.length) console.error('ORDER references unknown slugs:', missing);
if (extra.length) console.error('Industries not covered by ORDER (would be dropped!):', extra);
if (missing.length || extra.length) process.exit(1);

const reordered = ORDER.map((slug) => bySlug.get(slug));

const out = raw.slice(0, m.index) +
  `const INDUSTRIES = ${JSON.stringify(reordered, null, 2)};\n\nexport default INDUSTRIES;` +
  raw.slice(m.index + m[0].length);

fs.writeFileSync(filePath, out, 'utf8');
console.log(`Reordered ${reordered.length} industries.`);
