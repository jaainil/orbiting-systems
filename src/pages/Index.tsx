import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Server, Cloud, Shield, Code, ArrowRight, TrendingUp, Zap, Users } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Server,
      title: "Managed IT & Support",
      description: "Proactive monitoring and maintenance that keeps your systems running smoothly around the clock.",
      link: "/services",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modern infrastructure that scales with your business, optimized for speed and reliability.",
      link: "/services",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security frameworks that protect your data and meet regulatory requirements.",
      link: "/services",
    },
    {
      icon: Code,
      title: "Custom Engineering",
      description: "Tailored solutions and integrations designed specifically for your unique infrastructure needs.",
      link: "/services",
    },
  ];

  const metrics = [
    { value: "99.9%", label: "Average Uptime", icon: TrendingUp },
    { value: "60%", label: "Faster Deployments", icon: Zap },
    { value: "40%", label: "Cost Savings", icon: Users },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission-Critical <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive infrastructure solutions designed for businesses that can't afford downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Engineered for <span className="text-primary">Performance</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Our clients experience measurable improvements in uptime, deployment speed, and operational costs. 
                We don't just maintain systems—we optimize them for peak performance.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  View Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {metrics.map((metric, index) => (
                <Card
                  key={index}
                  className="p-8 border-primary/20 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl font-bold text-primary mb-2">
                        {metric.value}
                      </div>
                      <div className="text-muted-foreground">{metric.label}</div>
                    </div>
                    <metric.icon className="w-12 h-12 text-primary/30" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proven <span className="text-primary">Track Record</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Real-world results from companies that trust us with their critical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "FinTech Platform Migration",
                industry: "Financial Services",
                metric: "↓ 40% Infrastructure Costs",
                description: "Migrated legacy systems to modern cloud architecture with zero downtime.",
              },
              {
                title: "Healthcare System Hardening",
                industry: "Healthcare",
                metric: "100% HIPAA Compliance",
                description: "Implemented enterprise security framework meeting all regulatory requirements.",
              },
              {
                title: "E-commerce Scale-Up",
                industry: "Retail",
                metric: "10x Traffic Capacity",
                description: "Built auto-scaling infrastructure handling peak holiday season traffic.",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="p-8 border-primary/20 bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {project.industry}
                  </div>
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary">
                    {project.metric}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-primary hover:translate-x-2 transition-transform"
                  >
                    <span className="text-sm font-medium">Read case study</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Insights from <span className="text-primary">Mission Control</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Technical insights and industry perspectives from our engineering team.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:inline-flex">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "5 Signals Your Infrastructure Is Approaching Critical Orbit",
                date: "Nov 15, 2025",
                readTime: "6 min read",
                tags: ["DevOps", "Strategy"],
              },
              {
                title: "Zero-Drama Cloud Migration: A Real-World Playbook",
                date: "Nov 10, 2025",
                readTime: "8 min read",
                tags: ["Cloud", "Migration"],
              },
              {
                title: "Security by Design: Hardening Systems Without Slowing Teams",
                date: "Nov 5, 2025",
                readTime: "7 min read",
                tags: ["Security", "Culture"],
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="p-6 border-primary/20 bg-background hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Card className="max-w-4xl mx-auto p-12 md:p-16 border-primary/20 bg-card/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Infrastructure?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can design, deploy, and maintain systems that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
