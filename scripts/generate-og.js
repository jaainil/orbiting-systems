import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const POSTS_DIR = path.join(__dirname, "..", "src/content/blog");
const DIST_DIR = path.join(__dirname, "..", "dist");
const INDEX_HTML_PATH = path.join(DIST_DIR, "index.html");

if (!fs.existsSync(INDEX_HTML_PATH)) {
  console.error("❌ dist/index.html not found. Run 'vite build' first.");
  process.exit(1);
}

const indexHtml = fs.readFileSync(INDEX_HTML_PATH, "utf-8");

function generateBlogPostPage(post) {
  const imageUrl = `https://aexaware.com/og-images/${post.slug}.png`;
  const postUrl = `https://aexaware.com/blog/${post.slug}`;
  
  // Create specific meta tags
  const metaTags = `
  <title>${post.title}</title>
  <meta name="description" content="${post.description}" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.description}" />
  <meta property="og:image" content="${imageUrl}" />
  <meta property="og:url" content="${postUrl}" />
  <meta property="og:site_name" content="Aexaware Infotech" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${post.title}" />
  <meta name="twitter:description" content="${post.description}" />
  <meta name="twitter:image" content="${imageUrl}" />
  `;

  // Replace existing meta tags in index.html
  // We'll remove the default static OG tags and inject ours
  let newHtml = indexHtml;

  // Remove default OG tags (simple regex approach)
  newHtml = newHtml.replace(/<meta property="og:.*?" content=".*?" \/>/g, "");
  newHtml = newHtml.replace(/<meta name="description" content=".*?" \/>/g, "");
  newHtml = newHtml.replace(/<title>.*?<\/title>/g, ""); // If title exists

  // Inject new tags before </head>
  newHtml = newHtml.replace("</head>", `${metaTags}\n</head>`);

  // Create output directory: dist/blog/[slug]
  const outputDir = path.join(DIST_DIR, "blog", post.slug);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, "index.html");
  fs.writeFileSync(outputPath, newHtml);
  console.log(`✅ Generated static page: blog/${post.slug}/index.html`);
}

function getFiles(dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return Array.prototype.concat(...files);
}

console.log("🚀 Generating static blog pages with OG metadata...");

const files = getFiles(POSTS_DIR);

files.forEach((filePath) => {
  if (filePath.endsWith(".mdx") || filePath.endsWith(".md")) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: meta } = matter(fileContent);

    if (!meta.slug) {
        meta.slug = path.basename(filePath, path.extname(filePath));
    }
    
    // Clean slug
    meta.slug = meta.slug.trim().replace(/^["']|["']$/g, '');

    generateBlogPostPage(meta);
  }
});

console.log("✨ All static blog pages generated!");
