/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Layout,
  Users,
  Server,
  Settings,
  Database,
  Code2,
  Smartphone,
  Palette,
  Cloud,
  CheckCircle2,
} from "lucide-react";

const DetailedServices = () => {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <SEO
        title="Modern Web Solutions – Aexaware Infotech"
        description="Creating Stunning, Scalable, and Quick Websites That Get Results. We design fast, secure, and beautiful websites and web applications."
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Web Development Excellence
            </span>

            <h1 className="mt-8 font-serif text-5xl font-medium leading-tight text-foreground sm:text-6xl lg:text-7xl">
              Modern Web Solutions. <br className="hidden md:block" />
              <span className="italic text-muted-foreground">
                Built for Growth.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Creating Stunning, Scalable, and Quick Websites That Get Results. We design fast, secure, and beautiful websites and web applications.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-base"
                asChild
              >
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-8 text-base"
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Content - Clean & Typography Focused */}
      <section className="py-20 border-y border-border/40 bg-secondary/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Future-proof, scalable digital solutions.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to creating future-proof, scalable digital solutions to meet your business needs. You might need a dynamic corporate site, a robust eCommerce site, or a custom web application - we tailor every project to your specific needs.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                With extensive knowledge of the latest technology, we guarantee your product will be responsive, intuitive, and optimized for all devices. We also provide ongoing support, maintenance, and performance improvements—because your success doesn't end with a product launch.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Responsive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Intuitive</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Optimized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Web Services - Glassmorphism Grid */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-medium tracking-widest uppercase text-sm border border-primary/20 px-4 py-1.5 rounded-full">Complete Web Services</span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              Our Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground">
              High-performance, scalable, and secure solutions customized for your company.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "01",
                icon: Layout,
                title: "CMS Development",
                fullTitle: "Development of Open Source (CMS)",
                desc: "We use open-source content management systems (CMS) like WordPress, Joomla, and Drupal to create scalable, adaptable websites that make content management simple.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-600",
              },
              {
                id: "02",
                icon: Globe,
                title: "Online Portals",
                fullTitle: "Online Portals Development",
                desc: "Custom portals for education, business, and communities—designed to provide users access, control their content, and engage now.",
                gradient: "from-purple-500/20 to-pink-500/20",
                iconColor: "text-purple-600",
              },
              {
                id: "03",
                icon: Database,
                title: "CRM Applications",
                fullTitle: "CRM Applications Development",
                desc: "Custom customer relationship management systems tailored to monitor interactions with your treasured customers to increase sell, automate workflow, and provide customer engagement.",
                gradient: "from-amber-500/20 to-orange-500/20",
                iconColor: "text-amber-600",
              },
              {
                id: "04",
                icon: Users,
                title: "Social Networking",
                fullTitle: "Social Networking Portal",
                desc: "We create social networking portals with interactive, real-time messaging, sharing content, user management, and modern, appealing UI/UX design.",
                gradient: "from-green-500/20 to-emerald-500/20",
                iconColor: "text-green-600",
              },
              {
                id: "05",
                icon: Server,
                title: "Website Hosting",
                fullTitle: "Website Hosting",
                desc: "Hosting that is reliable, safe, and fast, to keep your website online, optimized, and available 24/7.",
                gradient: "from-red-500/20 to-rose-500/20",
                iconColor: "text-red-600",
              },
              {
                id: "06",
                icon: Settings,
                title: "Maintenance",
                fullTitle: "Website Maintenance",
                desc: "Updates, backups, bug fixes, search engine optimization and many others to ensure its safety and reduce the risk of failure.",
                gradient: "from-indigo-500/20 to-violet-500/20",
                iconColor: "text-indigo-600",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`inline-flex p-4 rounded-2xl bg-background shadow-sm ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <span className="text-5xl font-serif font-bold text-muted-foreground/10 group-hover:text-foreground/10 transition-colors">{service.id}</span>
                  </div>
                  
                  <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {service.fullTitle}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Toolbox - Marquee */}
      <section className="py-24 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-4 border border-white/10">
            Our Technical Toolbox
          </span>
          <h2 className="font-serif text-4xl font-medium mb-6 text-white">
            Technology Stack We Work With
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/60">
            We build safe, scalable, and high-performance digital solutions using the most up-to-date technologies.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden py-4">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center">
            {[
              "Bootstrap", "Tailwind CSS", "AngularJS", "ReactJS", "jQuery", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS",
              "Bootstrap", "Tailwind CSS", "AngularJS", "ReactJS", "jQuery", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"
            ].map((tech, i) => (
              <span key={i} className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Organic & Blobby */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary/50 px-6 py-24 text-center sm:px-16 border border-border/50">
            {/* Decorative blobs */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-60 animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                Looking for something else?
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                Work with us to build your dream project.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-full px-10 text-lg shadow-xl shadow-primary/20"
                  asChild
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-full px-10 text-lg bg-background/50 backdrop-blur-sm"
                  asChild
                >
                  <a href="tel:+918140734392">+91 81407 34392</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DetailedServices;
