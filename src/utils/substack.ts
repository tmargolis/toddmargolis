import type { Project } from '../data/projects';
import postsData from '../data/substack-posts.json';

export interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  guid: string;
}

const STOPWORDS = new Set([
  'a', 'an', 'the', 'of', 'to', 'in', 'on', 'for', 'and', 'or', 'is', 'are',
  'was', 'were', 'be', 'been', 'being', 'with', 'as', 'at', 'by', 'from',
  'into', 'this', 'that', 'these', 'those', 'it', 'its', "it's", 'their',
  'his', 'her', 'they', 'he', 'she', 'we', 'you', 'your', 'our', 'not', 'no',
  'but', 'if', 'than', 'then', 'what', 'which', 'who', 'whom', 'will',
  'would', 'can', 'could', 'should', 'may', 'might', 'must', 'do', 'does',
  'did', 'done', 'have', 'has', 'had', 'having', 'about', 'across', 'over',
  'under', 'between', 'within', 'without', 'more', 'most', 'less', 'least',
  'very', 'just', 'also', 'new', 'way', 'ways',
]);

/** Lowercased, stopword-filtered significant words (3+ letters) from free text. */
function significantWords(text: string): Set<string> {
  const words = (text.toLowerCase().match(/[a-z][a-z-]+/g) ?? []).filter(
    (w) => w.length > 2 && !STOPWORDS.has(w)
  );
  return new Set(words);
}

/** Prose fields worth matching against — categorical projectTag values are deliberately
 *  excluded; see writings.md for why they produced zero matches in testing. */
function projectProse(project: Project): string {
  return [project.title, project.quote, project.description, project.description2, project.description3]
    .filter(Boolean)
    .join(' ');
}

let allPostsCache: SubstackPost[] | null = null;

/** All Substack posts, newest first. */
export function getAllPosts(): SubstackPost[] {
  if (!allPostsCache) {
    allPostsCache = [...(postsData as SubstackPost[])].sort(
      (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    );
  }
  return allPostsCache;
}

/**
 * Posts related to a project, scored by shared significant words between the
 * project's prose (title/quote/description*) and each post's title+excerpt.
 * Excludes posts already present in project.links (avoids duplicating hand-picked
 * "Research" entries), drops anything below minScore, ties broken by recency.
 */
export function getRelatedPosts(
  project: Project,
  { limit = 3, minScore = 2 }: { limit?: number; minScore?: number } = {}
): SubstackPost[] {
  const projectWords = significantWords(projectProse(project));
  if (projectWords.size === 0) return [];

  const existingLinks = new Set((project.links ?? []).map((l) => l.url));

  return getAllPosts()
    .filter((post) => !existingLinks.has(post.link))
    .map((post) => {
      const postWords = significantWords(`${post.title} ${post.excerpt}`);
      let score = 0;
      for (const w of postWords) if (projectWords.has(w)) score++;
      return { post, score };
    })
    .filter((scored) => scored.score >= minScore)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.post.pubDate).getTime() - new Date(a.post.pubDate).getTime();
    })
    .slice(0, limit)
    .map((scored) => scored.post);
}
