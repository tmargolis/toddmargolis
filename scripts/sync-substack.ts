/**
 * Fetches the Substack RSS feed and writes src/data/substack-posts.json.
 * Run manually with `npm run sync-substack`, or by the daily
 * .github/workflows/substack-sync.yml GitHub Action.
 *
 * On any failure, logs a warning and exits 0 without touching the existing
 * JSON file — a bad fetch should never wipe out good data.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_PATH = path.resolve(__dirname, '..', 'src', 'data', 'substack-posts.json');
const FEED_URL = 'https://toddmargolis.substack.com/feed';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  guid: string;
}

function extractTag(block: string, tag: string): string | null {
  // Prefer CDATA-wrapped content (title/description), fall back to plain text (link/guid/pubDate).
  const cdataMatch = block.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
  if (cdataMatch) return cdataMatch[1].trim();
  const plainMatch = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return plainMatch ? plainMatch[1].trim() : null;
}

function parseFeed(xml: string): SubstackPost[] {
  const itemBlocks = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  const posts: SubstackPost[] = [];

  for (const block of itemBlocks) {
    const title = extractTag(block, 'title');
    const link = extractTag(block, 'link');
    const pubDateRaw = extractTag(block, 'pubDate');
    const description = extractTag(block, 'description') ?? '';
    const guid = extractTag(block, 'guid') ?? link;

    if (!title || !link || !pubDateRaw) continue;

    const pubDate = new Date(pubDateRaw);
    if (isNaN(pubDate.getTime())) continue;

    posts.push({
      title,
      link,
      pubDate: pubDate.toISOString(),
      excerpt: description,
      guid: guid ?? link,
    });
  }

  return posts;
}

async function main() {
  let xml: string;
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; toddmargolis.net substack-sync)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xml = await res.text();
  } catch (err) {
    console.warn(`[sync-substack] Fetch failed, leaving existing data untouched: ${err}`);
    process.exit(0);
  }

  const posts = parseFeed(xml);
  if (posts.length === 0) {
    console.warn('[sync-substack] Parsed 0 posts from feed, leaving existing data untouched.');
    process.exit(0);
  }

  posts.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(posts, null, 2) + '\n');
  console.log(`[sync-substack] Wrote ${posts.length} posts to ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

main();
