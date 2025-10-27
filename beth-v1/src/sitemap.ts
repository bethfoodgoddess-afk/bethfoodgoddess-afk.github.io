import fs from 'fs';
import path from 'path';
import { aiagents } from './app/common/demo-aiagents';

// List all static pages
const staticPages = [
    '/',
    '/about',
    '/contact',
    '/gallery',
];

// Dynamically generated demo websites
const enDemoPages = aiagents.filter(w => w.show).map(w => `/gallery/${w.id}`);
const esDemoPages = aiagents.filter(w => w.show).map(w => `/es/galeria/${w.id}`);

const allPages = [...staticPages, ...enDemoPages, ...esDemoPages];

const baseUrl = 'https://misitioweb.gitlab.io';

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPages
    .map(
        (page) => `  <url>\n    <loc>${baseUrl}${page}</loc>\n  </url>`
    )
    .join('\n')}\n</urlset>`;

// Write sitemap.xml at build time
const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemapXml);

console.log('sitemap.xml generated with', allPages.length, 'pages.');