/**
 * Small helpers shared by the blog detail page:
 *  - slugifyHeading: turns heading text into a URL-safe anchor id
 *  - prepareArticleHtml: injects id="" attributes onto every <h2> in the
 *    article HTML so the Table of Contents can deep-link/scroll to them
 *  - extractHeadings: pulls out { id, text } pairs for the Table of Contents
 */

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function extractHeadings(html: string): { id: string; text: string }[] {
  const matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
  return matches.map((m) => {
    const text = m[1].replace(/<[^>]+>/g, '').trim();
    return { id: slugifyHeading(text), text };
  });
}

export function prepareArticleHtml(html: string): string {
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (_match, attrs, inner) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    const id = slugifyHeading(text);
    return `<h2${attrs} id="${id}">${inner}</h2>`;
  });
}
