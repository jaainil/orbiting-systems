/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { lazy, Suspense, useState, useEffect } from "react";

interface Frontmatter {
  title: string;
  description?: string;
  author?: string;
  date?: string;
  image?: string;
  tags?: string[];
}

const BlogPost = () => {
  const { slug } = useParams();
  const [frontmatter, setFrontmatter] = useState<Frontmatter | null>(null);

  // In a real app, you might map slugs to imports or use a dynamic import strategy
  // For this demo, we'll explicitly handle the sample post
  let PostContent;
  if (slug === "sample-post") {
    const Post = lazy(async () => {
      const module = await import("@/content/blog/sample-post.mdx");
      // @ts-expect-error - frontmatter is added by remark plugin
      setFrontmatter(module.frontmatter as Frontmatter);
      return module;
    });
    PostContent = Post;
  } else {
    PostContent = () => (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Post not found</h2>
        <p className="text-muted-foreground mt-2">
          The requested blog post could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      {frontmatter && (
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || ""}
          image={frontmatter.image}
          type="article"
        />
      )}
      <Navbar />

      <article className="pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <div className="mb-8">
            <Button
              variant="ghost"
              asChild
              className="-ml-4 text-muted-foreground hover:text-primary"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {frontmatter && (
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {frontmatter.tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-medium leading-tight text-foreground mb-6">
                {frontmatter.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <User className="size-4" />
                  {frontmatter.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4" />
                  {frontmatter.date}
                </div>
              </div>
              {frontmatter.image && (
                <div className="mt-8 aspect-video rounded-3xl overflow-hidden bg-muted">
                  <img
                    src={frontmatter.image}
                    alt={frontmatter.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-medium prose-h1:text-4xl prose-h1:leading-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-lg">
            <Suspense
              fallback={
                <div className="py-20 text-center">Loading post...</div>
              }
            >
              <PostContent />
            </Suspense>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
