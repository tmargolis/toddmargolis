/** Truncate text to a meta-description-friendly length at a word boundary. */
export function metaDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const truncated = clean.slice(0, max);
  const lastSpace = truncated.lastIndexOf(' ');
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + '…';
}

/** Derive a sitemap lastmod date from a project year string (e.g. "2021-2026", "1999-2003"). */
export function yearToLastmod(year: string): string {
  const years = [...year.matchAll(/\b(19|20)\d{2}\b/g)].map((m) => parseInt(m[0], 10));
  if (years.length) {
    return `${Math.max(...years)}-06-01`;
  }
  return new Date().toISOString().split('T')[0];
}
