import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { yearToLastmod } from '../utils/seo';

const SITE_URL = 'https://toddmargolis.net';

const staticRoutes = [
  '/',
  '/bio/',
  '/research/',
  '/strategy/',
  '/creative/',
  '/works/',
  '/contact/',
  '/narrative/',
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = staticRoutes.map((path) => ({
    loc: `${SITE_URL}${path}`,
    lastmod: today,
  }));

  const projectUrls = projects.map((project) => ({
    loc: `${SITE_URL}/works/${project.slug}/`,
    lastmod: yearToLastmod(project.year),
  }));

  const urls = [...staticUrls, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
