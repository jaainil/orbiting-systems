/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      slug: "sample-post",
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the key trends shaping the future of web development, from AI-driven workflows to the rise of WebAssembly.",
      date: "Nov 18, 2025",
      author: "Aexaware Team",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      slug: "#",
      title: "Optimizing React Applications for Performance",
      excerpt:
        "Learn practical strategies to boost the speed and responsiveness of your React apps, ensuring a smooth user experience.",
      date: "Oct 24, 2025",
      author: "Dev Team",
      category: "Development",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80",
    },
    {
      slug: "#",
      title: "Why UI/UX Design Matters More Than Ever",
      excerpt:
        "In a crowded digital marketplace, exceptional design is the key to standing out and converting visitors into loyal customers.",
      date: "Sep 12, 2025",
      author: "Design Team",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Our Blog
            </span>
            <h1 className="mt-8 font-serif text-5xl font-medium leading-tight text-foreground sm:text-6xl lg:text-7xl">
              Insights, updates, and <br className="hidden md:block" />
              <span className="text-primary">expert opinions.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Stay informed with the latest trends in technology, design, and
              digital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-3xl bg-background border border-border/50 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="aspect-[16/9] overflow-hidden bg-muted block"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3" />
                      {post.date}
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`} className="block mb-3">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="size-4" />
                      {post.author}
                    </div>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-primary hover:text-accent"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-2 size-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
