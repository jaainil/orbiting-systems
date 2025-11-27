import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://aexaware.com';
const BLOG_DIR = path.join(__dirname, '../src/content/blog');
const DIST_DIR = path.join(__dirname, '../dist');
const DIST_INDEX_HTML = path.join(DIST_DIR, 'index.html');

function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  function getFiles(dir) {
    const dirents = fs.readdirSync(dir, { withFileTypes: true });
    const files = dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    });
    return Array.prototype.concat(...files);
  }
  
  const files = getFiles(BLOG_DIR);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const content = fs.readFileSync(file, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      const metadata = {};
      if (frontmatterMatch) {
        const frontmatter = frontmatterMatch[1];
        
        const titleMatch = frontmatter.match(/title:\s*["']?(.+?)["']?$/m);
        if (titleMatch) metadata.title = titleMatch[1];
        
        const descMatch = frontmatter.match(/description:\s*["']?(.+?)["']?$/m);
        if (descMatch) metadata.description = descMatch[1];
        
        const imageMatch = frontmatter.match(/image:\s*["']?(.+?)["']?$/m);
        if (imageMatch) {
           let imagePath = imageMatch[1];
           // Handle relative paths like ./image.png
           if (imagePath.startsWith('./')) {
             // We need to resolve this relative to the blog post directory
             // But for the OG tag, we need the final public URL
             // In Vite build, assets are usually hashed and put in assets/
             // OR if they are in public/, they are at root.
             // However, for this specific issue, the user's blog images seem to be collocated.
             // A common pattern in this repo seems to be that images are imported.
             // Since we can't easily resolve Vite's hashed asset paths here without parsing the build manifest,
             // we will try a best-effort approach or rely on the fact that the SEO component does runtime resolution.
             // BUT, for static generation, we need a valid URL.
             // If the image is just a filename, we might assume it's handled by Vite.
             // Let's look at how the user's current OG image is set: /og-image.png (in public).
             // If the blog post has an image, it's likely processed by Vite.
             // For now, let's strip the leading ./ and assume it might be served correctly or use a placeholder if complex.
             // actually, better approach:
             // If it's a local file, we can't easily know the final hashed URL from here without manifest.json.
             // Let's check if manifest.json exists in dist.
             metadata.image = imagePath; 
           } else {
             metadata.image = imagePath;
           }
        }
        
        const slugMatch = frontmatter.match(/slug:\s*["']?(.+?)["']?$/m);
        if (slugMatch) metadata.slug = slugMatch[1];
      }
      
      // Fallback slug
      if (!metadata.slug) {
        metadata.slug = path.basename(file, '.mdx');
      }
      
      return metadata;
    });
}

async function generateBlogMeta() {
  if (!fs.existsSync(DIST_INDEX_HTML)) {
    console.error('❌ dist/index.html not found. Run build first.');
    process.exit(1);
  }

  const template = fs.readFileSync(DIST_INDEX_HTML, 'utf-8');
  const posts = getBlogPosts();
  
  // Try to read manifest to resolve assets if possible
  let manifest = {};
  try {
    const manifestPath = path.join(DIST_DIR, '.vite/manifest.json');
    if (fs.existsSync(manifestPath)) {
        manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    }
  } catch (e) {
    console.warn('⚠️ Could not read manifest.json', e);
  }

  console.log(`Found ${posts.length} blog posts. Generating static meta...`);

  for (const post of posts) {
    if (!post.slug) continue;

    const postDir = path.join(DIST_DIR, 'blog', post.slug);
    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }

    let html = template;
    
    // 1. Inject Title
    if (post.title) {
      html = html.replace(/<title>.*?<\/title>/, `<title>${post.title}</title>`);
      html = html.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${post.title}" />`);
      html = html.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${post.title}" />`);
    }

    // 2. Inject Description
    if (post.description) {
      // Note: We removed the default description from index.html, so we need to inject it fresh or replace if we left a placeholder.
      // But wait, the SEO component injects it via Helmet. 
      // The template (dist/index.html) will NOT have the description tag because we removed it in step 1.
      // So we need to INJECT it into <head>.
      const descTag = `<meta name="description" content="${post.description}" />`;
      const ogDescTag = `<meta property="og:description" content="${post.description}" />`;
      const twDescTag = `<meta name="twitter:description" content="${post.description}" />`;
      
      // We can inject these before </head>
      // But we also need to handle the OG tags.
      // The SEO component renders them in the browser.
      // But for the static HTML, we want them present.
      // Since we removed them from index.html, they are NOT in the template.
      // So we just append them to <head>.
    }

    // 3. Inject Image
    let imageUrl = `${SITE_URL}/og-image.png`; // Default
    
    if (post.image) {
        if (post.image.startsWith('http')) {
            imageUrl = post.image;
        } else if (post.image.startsWith('/')) {
            imageUrl = `${SITE_URL}${post.image}`;
        } else {
            // Handle relative paths or filenames (e.g. ./image.png or just image.png)
            // We need to find the hashed file in dist/assets
            const basename = path.basename(post.image);
            const nameWithoutExt = path.parse(basename).name;
            // The asset might be named nameWithoutExt-hash.ext or just nameWithoutExt.hash.ext
            // Let's look in dist/assets
            const assetsDir = path.join(DIST_DIR, 'assets');
            if (fs.existsSync(assetsDir)) {
                const assets = fs.readdirSync(assetsDir);
                // Find a file that starts with the name and has the same extension
                // Note: Vite might change the name slightly or use different hashing.
                // But usually it's name-hash.ext or name.hash.ext
                const match = assets.find(asset => asset.startsWith(nameWithoutExt) && asset.endsWith(path.extname(basename)));
                if (match) {
                    imageUrl = `${SITE_URL}/assets/${match}`;
                }
            }
        }
    }

    // Construct the meta tags to inject
    const metaTags = `
    <title>${post.title}</title>
    <meta name="description" content="${post.description || ''}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${SITE_URL}/blog/${post.slug}">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.description || ''}">
    <meta property="og:image" content="${imageUrl}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${SITE_URL}/blog/${post.slug}">
    <meta name="twitter:title" content="${post.title}">
    <meta name="twitter:description" content="${post.description || ''}">
    <meta name="twitter:image" content="${imageUrl}">
    `;

    // Inject into <head>
    // We replace the closing </head> with our tags + </head>
    // We also need to remove any existing conflicting tags if they exist (though we cleaned index.html)
    // But wait, if we cleaned index.html, it has NO title/desc/og tags.
    // So we can just safely inject.
    // However, the <title> tag might still be there if we didn't remove it (we only removed description).
    // Let's check index.html content again.
    // We removed description. <title> is likely still there.
    
    // Replace <title>...</title> with nothing first, to avoid duplicates
    html = html.replace(/<title>.*?<\/title>/, '');
    
    // Inject our tags before </head>
    html = html.replace('</head>', `${metaTags}\n</head>`);

    fs.writeFileSync(path.join(postDir, 'index.html'), html);
  }

  console.log('✅ Blog metadata generation complete!');
}

generateBlogMeta();
