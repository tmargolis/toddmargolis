/**
 * Adds RFC 8288 Link headers on the homepage for agent discovery.
 * Deploy with: npx wrangler deploy (requires CLOUDFLARE_API_TOKEN).
 * Use when the origin is GitHub Pages, which cannot set custom response headers.
 */

const HOMEPAGE_LINK =
  '</llms.txt>; rel="describedby"; type="text/plain"; title="Site index for LLMs", ' +
  '</sitemap.xml>; rel="sitemap"; type="application/xml"';

function isHomepage(pathname) {
  return pathname === '/' || pathname === '/index.html';
}

export default {
  async fetch(request) {
    const response = await fetch(request);
    const { pathname } = new URL(request.url);

    if (!isHomepage(pathname)) {
      return response;
    }

    const headers = new Headers(response.headers);
    const existing = headers.get('Link');
    headers.set('Link', existing ? `${existing}, ${HOMEPAGE_LINK}` : HOMEPAGE_LINK);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
