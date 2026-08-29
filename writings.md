# Substack integration plan — toddmargolis.net

Written by Claude (Cowork session) on 2026-08-29 as a handoff brief for a Claude Code
session to implement. Everything below reflects the actual repo, not assumptions —
I read `src/data/projects.ts`, `src/components/Footer.astro`,
`src/pages/works/[slug].astro`, `src/layouts/Layout.astro`, `src/utils/seo.ts`,
`src/pages/sitemap.xml.ts`, `astro.config.mjs`, `package.json`, `wrangler.toml`, and
`.github/workflows/deploy.yml` directly from the local repo before writing this.

## Goal (as Todd specified it)

- Pull toddmargolis.substack.com's RSS feed and surface posts on the site.
- Refresh automatically — originally weekly, now **daily** — via a GitHub Action.
- Placement: a link in the **footer** (not a homepage widget — Todd likes the current
  minimal homepage as-is), a full **/writing** archive page, and a **related-writing
  block on relevant project pages**, starting with `/works/interlock/` and
  `/works/j-space/`.
- Matching project pages to posts: **keyword matching** (Todd's choice — no manual
  per-post mapping, no reliance on Substack tags).

## What's already in the repo (read this before touching anything)

- **Static Astro 5 site** (`output: 'static'`), Tailwind v4 via `@tailwindcss/vite`,
  deployed by `.github/workflows/deploy.yml` — `withastro/action@v5` builds, then
  `actions/deploy-pages@v4` publishes. It really is GitHub Pages (my earlier assumption
  was right), not Cloudflare — `wrangler.toml` only configures a small Cloudflare
  Worker (`workers/link-headers.js`) for response headers on the custom domain, it
  doesn't touch the Pages deploy.
- **`src/data/projects.ts`** (1546 lines) exports `projects: Project[]`. Relevant
  fields on `Project`:
  - `projectTag?: string[]` — short categorical tags, e.g. Interlock has
    `['research', 'AI-ML', 'infrastructure', '0-to-1', 'cross-functional']` and J-Space
    has `['research', 'AI-ML', 'data-viz', 'prototype', 'hands-on', '0-to-1']`.
  - `links?: { label: string; url: string }[]` — "Labeled external links (e.g. research
    posts, publications)" per the interface comment. **Interlock already has two
    Substack posts manually listed here**: "Four Ways Behavioral Governance Fails" and
    "One Boundary Is Not Governance". This is the exact same use case we're about to
    automate — see "Important finding" below for why this matters.
  - `related?: string[]` — slugs of cross-referenced projects (J-Space and Interlock
    already list each other).
- **`src/pages/works/[slug].astro`** (733 lines) is the shared per-project template
  (dynamic route via `getStaticPaths()`). The right-column `<aside>` sidebar renders,
  in order: Status/Year, Medium, Dimensions, Weight, Collaborators, `projectTag` pills,
  `website`, then two bordered blocks in this exact pattern (around line 387-434):

  ```astro
  {project.links && project.links.length > 0 && (
    <div class="pt-6 border-t border-white/10 space-y-3">
      <span class="block text-gray-600">Research</span>
      <ul class="space-y-1 normal-case tracking-normal">
        {project.links.map((link) => (
          <li><a href={link.url} target="_blank" rel="noopener noreferrer"
                 class="text-indigo-300 hover:text-white underline">{link.label}</a></li>
        ))}
      </ul>
    </div>
  )}
  {relatedProjects.length > 0 && (
    <div class="pt-6 border-t border-white/10 space-y-3">
      <span class="block text-gray-600">Related Work</span>
      <ul class="space-y-1 normal-case tracking-normal">
        {relatedProjects.map((rp) => (
          <li><a href={`/works/${rp.slug}/`}
                 class="text-indigo-300 hover:text-white underline">{rp.title}</a></li>
        ))}
      </ul>
    </div>
  )}
  ```

  This is exactly the visual pattern the new "Writing" block should follow — same
  border-top/uppercase-label/indigo-link structure, inserted directly after the
  "Related Work" block (before the hidden `#protected-meta` Logistics section).

- **`src/components/Footer.astro`** is tiny and shared across every page:
  `Connect | About | CV` then `© 2026 Todd Margolis`. Adding `Writing` to that flex
  list is the entire footer change.
- **`src/layouts/Layout.astro`** takes `{ title, fullTitle?, description?, ogImage?,
  canonical?, noindex?, hideFooter?, activeCategories?, agentDiscovery? }`. New pages
  (like `/writing`) should use it the same way `src/pages/bio.astro` etc. do.
- **`src/utils/seo.ts`** has `metaDescription(text, max)` for truncating excerpts to a
  meta-description-safe length — reuse this for post excerpts instead of writing a new
  truncator.
- **`src/pages/sitemap.xml.ts`** has a hardcoded `staticRoutes` array that needs
  `/writing/` appended, or the new page won't be in the sitemap.
- Dark theme conventions: `bg-obs-black`, `font-mono text-xs uppercase tracking-widest
  text-gray-400` for labels, `text-indigo-300`/`text-indigo-400` for links,
  `border-white/10` for dividers, `Space Mono` / `Playfair Display` fonts.

## The actual Substack feed (fetched live, not guessed)

`https://toddmargolis.substack.com/feed` — fetched directly via curl (Substack 429'd
WebFetch specifically; a GitHub Actions runner should be fine, worth confirming on
first real run). Channel description: "Writing on multi-agent systems, Context
Engineering, and structural AI governance... Documenting real-world agent failures to
build auditable, enterprise-grade control planes." **4 items currently, zero
`<category>` tags on any of them** — confirms tag-based matching from the Substack side
isn't possible; it has to be keyword matching against post text, which is what Todd
already chose.

1. "The Control Plane Has an Intent Problem" — Aug 26 —
   `/p/the-control-plane-has-an-intent-problem`
2. "One Boundary Is Not Governance" — Aug 25 — `/p/one-boundary-is-not-governance`
3. "Four Ways Behavioral Governance Fails" — Aug 25 —
   `/p/four-ways-behavioral-governance-fails`
4. "Why Rules Fail at the Prompt" — Aug 25 — `/p/why-rules-fail-at-the-prompt`

Each item has `title`, `link`, `guid` (same as link), `pubDate`, `description` (short
plain excerpt), and `content:encoded` (full HTML body — not needed for the site, only
for the archive page's excerpt/date/link).

## Important finding: projectTag words don't overlap with post text — match on
## description prose instead

I simulated the matching before recommending an approach, because "match Substack post
tags to my projectTag array" (as originally phrased) doesn't actually work: there are
no Substack tags, and separately, **`projectTag` values are categorical/methodological
(`research`, `AI-ML`, `hands-on`, `0-to-1`, `cross-functional`) while post titles and
excerpts are topical (`control plane`, `governance`, `boundary`, `agentic`)** — they
share almost no vocabulary. Matching Interlock's and J-Space's `projectTag` arrays
against all 4 real posts (stopword-filtered significant-word overlap) produced **zero
matches for both projects, on every post.** That's a bad first pass, and would leave
both target pages with an empty (hidden) Writing block despite genuinely relevant
content existing.

Matching against each project's actual prose instead — `title + quote + description +
description2 + description3`, which is where the real topical vocabulary lives — did
much better:

**Interlock** (shared significant words in parentheses):
- "One Boundary Is Not Governance" — 4 shared (`boundary`, `evaluation`, `governance`,
  `replace`)
- "The Control Plane Has an Intent Problem" — 3 shared (`agent`, `control`, `plane`)
- "Four Ways Behavioral Governance Fails" — 1 shared (`governance`)
- "Why Rules Fail at the Prompt" — 1 shared (`governance`)

**J-Space:**
- "The Control Plane Has an Intent Problem" — 1 shared (`agent`)
- "One Boundary Is Not Governance" — 1 shared (`depth`)
- "Four Ways Behavioral Governance Fails" — 0 shared
- "Why Rules Fail at the Prompt" — 0 shared

**Recommendation:** match against project prose (title/quote/description*), not
`projectTag`. Use `projectTag` only as a minor bonus signal if you want, not the
primary source. With a minimum-match threshold of **2 shared significant words**
(tunable), Interlock would show "One Boundary Is Not Governance" and "The Control
Plane Has an Intent Problem" — J-Space would show **nothing yet**, which is honest:
J-Space's actual description is about interpretability/activations/traces vocabulary
that genuinely doesn't overlap with these 4 posts. That's exactly the kind of signal
Todd asked to be told about ("lemme know i need to adjust on the project or substack
sides") — not a bug to route around.

Also: since Interlock's manual `links` field already contains "Four Ways Behavioral
Governance Fails" and "One Boundary Is Not Governance", **the auto-matched Writing
block must dedupe against `project.links` URLs** so posts don't appear twice on the
same page (once under the existing hand-curated "Research" block, once under the new
"Writing" block). With dedup applied, Interlock's new Writing block would show just
"The Control Plane Has an Intent Problem" on this first pass.

## Build plan (website integration first, per Todd — GitHub Action comes after)

1. **`src/data/substack-posts.json`** — seed with the 4 real posts now (manually, from
   the feed data above), shape:
   ```json
   [{ "title": "...", "link": "https://toddmargolis.substack.com/p/...",
      "pubDate": "2026-08-26T21:19:13.000Z", "excerpt": "...", "guid": "..." }]
   ```
   This file is what the (future) daily GitHub Action will overwrite. Seeding it now
   means the site integration can be built and previewed before the Action exists.

2. **`src/utils/substack.ts`** (same folder as `seo.ts`, same convention) —
   - `getAllPosts()`: reads and returns the JSON, sorted newest-first.
   - `getRelatedPosts(project: Project, posts: Post[], { limit = 3, minScore = 2 })`:
     builds a significant-word set from the project's prose fields, scores each post by
     shared-word count against post title+excerpt, drops anything below `minScore`,
     drops anything whose `link` already appears in `project.links`, sorts by score
     desc then `pubDate` desc, returns top `limit`.
   - Keep the stopword list and word-extraction regex here so both the writing page and
     the project template use identical logic.

3. **`src/pages/writing.astro`** — new page via `Layout`. Substack's own subscribe-form
   embed (Settings → Growth features in Substack's dashboard gives the iframe code)
   pinned at top, then all posts from `getAllPosts()` listed chronologically —
   title, formatted date, `metaDescription()`-truncated excerpt, link out to Substack.
   No pagination needed yet at 4 posts; worth adding once the archive grows past
   ~20-30.

4. **`src/components/Footer.astro`** — add `<a href="/writing/" class="hover:text-white
   transition-colors">Writing</a>` to the existing `flex gap-8` link group.

5. **`src/pages/works/[slug].astro`** — new block using `getRelatedPosts(project,
   allPosts)`, inserted right after the existing "Related Work" block, same visual
   pattern (`border-t border-white/10`, `text-gray-600` label reading "Writing",
   `text-indigo-300 hover:text-white underline` links), rendered only when matches
   exist. Since it's the shared template, it applies to every project automatically —
   it'll just stay empty/hidden everywhere except Interlock (and J-Space once there's
   more overlapping content) rather than needing to be special-cased to those two
   pages.

6. **`src/pages/sitemap.xml.ts`** — add `/writing/` to `staticRoutes`.

7. Sanity-check `src/pages/llms-full.txt.ts` (42 lines, didn't fully read it) — see
   whether it enumerates static pages the same way sitemap.xml.ts does and needs the
   same addition.

## After the website integration works: daily GitHub Action

- New workflow (or a step added to `deploy.yml`) on `schedule: cron` — **daily**
  instead of weekly, e.g. `0 13 * * *` (adjust for your preferred time; cron is UTC),
  plus `workflow_dispatch` for on-demand refresh right after publishing something.
- Fetches the feed, parses items to the same `{title, link, pubDate, excerpt, guid}`
  shape, writes `src/data/substack-posts.json`, commits if changed. Commit is what
  triggers the existing `push: branches: [main]` deploy — no separate deploy step
  needed in the new workflow, just don't commit-and-push from a bot in a way that
  skips the existing Pages workflow's trigger.
- Wrap the fetch in try/catch: on failure, leave the existing JSON untouched (git diff
  will just be empty, nothing to commit) rather than writing bad data.

## Open items for Todd to weigh in on

- OK with prose-based matching instead of `projectTag`-based, given the projectTag
  simulation came back empty? (Recommended — see above.)
- OK with `minScore = 2` as the match threshold, or want it looser/stricter once you
  see it live?
- Where exactly the daily Action should run (time of day) — currently just proposing
  `0 13 * * *` (~8am Todd's time depending on DST) as a placeholder.
