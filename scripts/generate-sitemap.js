import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aexaware.com';

const routes = [
  '/',
  '/services',
  '/services/web-development',
  '/services/mobile-development',
  '/services/ui-ux-design',
  '/services/software-solutions',
  '/services/ecommerce',
  '/services/cloud-devops',
  '/services/ai-ml-integration',
  '/contact',
  '/about',
  '/portfolio',
  '/blog',
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  const distPath = path.resolve(__dirname, '../public');
  
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated!');
};

const generateRobots = () => {
  const robots = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`;

  const distPath = path.resolve(__dirname, '../public');
  fs.writeFileSync(path.join(distPath, 'robots.txt'), robots);
  console.log('✅ robots.txt generated!');
};

generateSitemap();
generateRobots();
