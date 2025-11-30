import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://aexaware.com', // Replace with actual site URL if known, or keep generic
    integrations: [
        react(),
        tailwind({
            applyBaseStyles: false, // We'll import our own global.css
        }),
        mdx(),
        sitemap(),
    ],
});
