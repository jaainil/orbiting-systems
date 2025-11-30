import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { glob } from "glob";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    description?: string;
    author?: string;
    date?: string;
    image?: string;
    tags?: string[];
    category?: string;
    excerpt?: string;
    content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
    // Find all MDX files in the blog directory recursively
    const files = await glob("**/*.mdx", { cwd: BLOG_DIR });

    const posts = files.map((file) => {
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);

        // Extract slug from filename (e.g., "my-post/index.mdx" -> "my-post")
        // or "my-post.mdx" -> "my-post"
        const slug = path.basename(path.dirname(filePath)) === "blog"
            ? path.basename(file, ".mdx")
            : path.basename(path.dirname(filePath));

        // Process image path if it's relative
        let image = data.image;
        if (image && image.startsWith("./")) {
            // This is tricky because we need to serve the image.
            // For now, we'll assume the image is in the same folder as the MDX
            // and we might need to copy it to public or handle it via an API.
            // However, a simpler approach for now is to just keep the path and handle it in the component
            // or assume images are already in public.
            // Given the previous Vite setup used import.meta.glob, the images were likely processed by Vite.
            // In Next.js, we should ideally move these images to public/images/blog/[slug]/

            // For this migration, let's just keep the path as is and we might need to fix image loading later.
            // Or we can try to resolve it.
        }

        return {
            slug,
            title: data.title,
            description: data.description,
            author: data.author,
            date: data.date,
            image: data.image,
            tags: data.tags,
            category: data.category || "Tech", // Default category
            excerpt: data.description || "", // Use description as excerpt
            content,
        };
    });

    // Sort by date descending
    return posts.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const allPosts = await getAllPosts();
    return allPosts.find((post) => post.slug === slug) || null;
}
