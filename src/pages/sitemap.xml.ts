import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

/**
 * Dynamic sitemap generation
 * Fixes the broken blog URL issue where slugs had extra quotes
 */
export const GET: APIRoute = async ({ site }) => {
    const siteUrl = site || 'https://aexaware.com';

    // Get all blog posts
    const blogPosts = await getCollection('blog');

    // Static pages with their priorities and change frequencies
    const staticPages = [
        { url: '', changefreq: 'daily', priority: 1.0 },
        { url: 'about', changefreq: 'monthly', priority: 0.8 },
        { url: 'services', changefreq: 'weekly', priority: 0.9 },
        { url: 'services/web-development', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/mobile-development', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/ui-ux-design', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/software-solutions', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/ecommerce', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/cloud-devops', changefreq: 'monthly', priority: 0.8 },
        { url: 'services/ai-ml-integration', changefreq: 'monthly', priority: 0.8 },
        { url: 'contact', changefreq: 'monthly', priority: 0.7 },
        { url: 'portfolio', changefreq: 'weekly', priority: 0.8 },
        { url: 'blog', changefreq: 'weekly', priority: 0.9 },
    ];

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${new URL(page.url, siteUrl).href}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${blogPosts.map(post => `  <url>
    <loc>${new URL(`blog/${post.slug}`, siteUrl).href}</loc>
    <lastmod>${post.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
    });
};
