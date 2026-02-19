const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://www.mitrabehboudi.com';
const routes = ['/', '/fa'];

const buildUrl = (route) => `${SITE_URL.replace(/\/$/, '')}${route}`;

const urls = routes.map((r) => `  <url>\n    <loc>${buildUrl(r)}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${r === '/' ? '1.0' : '0.9'}</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log('Sitemap generated at', outPath);

