import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Industries = () => {
  const industries = [
    "Finance & Banking",
    "E Commerce & Retail",
    "Education & Learning",
    "Health Care & Life Insurance",
    "Manufacturing & Logistics",
    "Government & Public Sector",
    "Telecommunications",
    "Energy & Utilities",
    "Travel & Hospitality",
    "Media & Entertainment",
  ];

  const firstRow = industries.slice(0, Math.ceil(industries.length / 2));
  const secondRow = industries.slice(Math.ceil(industries.length / 2));

  const headerRef = useScrollReveal({ animation: "fade-up" });

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-16">
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-12 items-start">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
            Built for Business. <br />
            Across All Industries.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg lg:ml-auto">
            We combine innovation with reliability to deliver IT solutions that
            scale with your business. Our team brings deep technical expertise,
            fast response times.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {/* First Row */}
        <div className="relative w-full pause-on-hover">
          <div className="flex w-max animate-marquee gap-4 md:gap-6">
            {[...firstRow, ...firstRow, ...firstRow, ...firstRow].map((name, i) => (
              <div
                key={`row1-${i}`}
                className="px-8 py-4 rounded-full text-lg md:text-xl font-medium whitespace-nowrap shadow-sm border border-border bg-card text-card-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Offset */}
        <div className="relative w-full pause-on-hover -ml-12">
          <div className="flex w-max animate-marquee gap-4 md:gap-6">
             {[...secondRow, ...secondRow, ...secondRow, ...secondRow].map((name, i) => (
              <div
                key={`row2-${i}`}
                className="px-8 py-4 rounded-full text-lg md:text-xl font-medium whitespace-nowrap shadow-sm border border-border bg-card text-card-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground cursor-default"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
