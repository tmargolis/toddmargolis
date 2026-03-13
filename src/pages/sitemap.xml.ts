import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

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
  '/logistics/',
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticRoutes.map((path) => `${SITE_URL}${path}`),
    ...projects.map((project) => `${SITE_URL}/works/${project.slug}/`),
  ];

  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
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

