/* stylelint-disable */
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  gradient: string;
  iconColor: string;
}

interface ServicePageLayoutProps {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBadge: string;
  servicesTitle: string;
  servicesDescription: string;
  services: ServiceItem[];
  techStack: string[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export const ServicePageLayout = ({
  title,
  description,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroBadge,
  servicesTitle,
  servicesDescription,
  services,
  techStack,
  ctaTitle = "Looking for something else?",
  ctaDescription = "Work with us to build your dream project.",
}: ServicePageLayoutProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    provider: {
      "@type": "Organization",
      name: "Aexaware Infotech",
      url: "https://aexaware.com",
    },
    description: description,
    areaServed: "Global",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: servicesTitle,
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.desc,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <SEO
        title={`${title} – Aexaware Infotech`}
        description={description}
        structuredData={schema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {heroBadge}
            </span>

            <h1 className="mt-8 font-serif text-5xl font-medium leading-tight text-foreground sm:text-6xl lg:text-7xl">
              {heroTitle} <br className="hidden md:block" />
              <span className="italic text-muted-foreground">
                {heroSubtitle}
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
              {heroDescription}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-base"
                asChild
              >
                <a href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-medium tracking-widest uppercase text-sm border border-primary/20 px-4 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
              {servicesTitle}
            </h2>
            <p className="text-xl text-muted-foreground">
              {servicesDescription}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-background shadow-sm ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <span className="text-5xl font-serif font-bold text-muted-foreground/10 group-hover:text-foreground/10 transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
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
            We build safe, scalable, and high-performance digital solutions using
            the most up-to-date technologies.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden py-4">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-foreground to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-foreground to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap gap-16 min-w-full items-center">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
            {/* Duplicate for seamless loop - hidden from screen readers */}
            {techStack.map((tech, i) => (
              <span
                key={`dup-${i}`}
                className="text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 transition-colors cursor-default"
                aria-hidden="true"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary/50 px-6 py-24 text-center sm:px-16 border border-border/50">
            {/* Decorative blobs */}
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 animate-pulse" />
            <div
              className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                {ctaTitle}
              </h2>
              <p className="mt-6 text-xl text-muted-foreground">
                {ctaDescription}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-14 rounded-full px-10 text-lg shadow-xl shadow-primary/20"
                  asChild
                >
                  <a href="/contact">Contact Us</a>
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
