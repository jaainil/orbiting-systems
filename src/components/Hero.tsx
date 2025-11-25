import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plus, Star } from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { useTextReveal } from "@/hooks/use-text-reveal";
import { useParallax } from "@/hooks/use-parallax";
import { useMagnetic } from "@/hooks/use-magnetic";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Text Reveal
  const titleRef = useTextReveal({
    text: "Innovate. Build. Scale.",
    type: "words",
    className: "inline-block mr-2",
    delay: 0.2,
  });

  // Parallax Backgrounds
  const blob1Ref = useParallax({ speed: -0.2, trigger: containerRef });
  const blob2Ref = useParallax({ speed: 0.3, trigger: containerRef });

  // Magnetic Button
  const buttonRef = useMagnetic({ strength: 0.3 });

  // Scroll Reveals
  const card1Ref = useScrollReveal({ animation: "fade-up", delay: 0.4 });
  const card2Ref = useScrollReveal({ animation: "scale-up", delay: 0.6 });
  const badgeRef = useScrollReveal({ animation: "fade-in", delay: 0.8 });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-background pt-32 pb-12 lg:pt-40 lg:pb-24 min-h-screen flex items-center">
      <InteractiveGridPattern
        className="absolute inset-0 z-0 opacity-30"
        squares={[60, 40]}
        squaresClassName="hover:fill-primary/10"
      />
      
      {/* Background Gradients */}
      <div ref={blob1Ref} className="pointer-events-none absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-primary/10 blur-3xl" />
      <div ref={blob2Ref} className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/3 translate-y-1/4 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 ref={titleRef} className="font-serif text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl tracking-tight">
                {/* Text injected by hook */}
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground leading-relaxed animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                Your trusted partner for scalable web, mobile, and AI solutions. Made in Anand, serving businesses globally.
              </p>
            </div>

            {/* IT Solution Card */}
            <div ref={card1Ref} className="relative mt-8 max-w-md overflow-hidden rounded-3xl border border-border/50 bg-white/50 p-6 backdrop-blur-md dark:bg-black/50 shadow-lg">
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-primary/20 blur-xl"></div>
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Plus className="mr-1 h-3 w-3" />
                  End-to-End Development
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Transform your vision into reality with secure, future-proof technology tailored to your growth.
                </p>
                <div ref={buttonRef}>
                  <Button asChild className="w-full justify-between rounded-full" size="lg">
                    <Link to="/contact">
                      Get Started Now
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end min-h-[500px] items-center">
            
            {/* Central Image Placeholder (Robot Head) */}
            <div className="relative z-10 h-[400px] w-[300px] sm:h-[500px] sm:w-[400px] rounded-full bg-gradient-to-b from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl animate-float">
               <div 
                 className="absolute inset-0 bg-cover bg-center opacity-80 mix-blend-overlay"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000&auto=format&fit=crop')" }}
                 role="img"
                 aria-label="Futuristic technology and innovation visual"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            {/* Connecting Line (Decorative) */}
            <svg className="absolute top-1/4 right-10 hidden lg:block w-64 h-32 z-0 pointer-events-none" viewBox="0 0 200 100">
                <path d="M 0 50 Q 100 50 200 20" fill="none" stroke="currentColor" className="text-primary/30" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="20" r="3" fill="currentColor" className="text-primary" />
            </svg>

            {/* AI Technology Badge */}
            <div ref={badgeRef} className="absolute top-1/3 -right-4 lg:right-0 z-20 animate-[bounce_3s_infinite]">
               <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 shadow-lg backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Plus className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">AI Technology</span>
               </div>
            </div>

            {/* Testimonial Card */}
            <div ref={card2Ref} className="absolute bottom-0 right-0 lg:-right-8 z-20 max-w-[260px] rounded-2xl border border-border/50 bg-card/90 p-5 shadow-xl backdrop-blur-md">
               
               <p className="mt-2 text-sm text-muted-foreground">
                 "Aexaware delivered a robust, secure platform that scales perfectly with our growth."
               </p>
               
               <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                           <img 
                             src={`https://i.pravatar.cc/100?img=${10 + i}`} 
                             alt={`Satisfied client testimonial avatar ${i}`}
                             loading="lazy"
                             width="32"
                             height="32"
                             className="h-full w-full object-cover" 
                           />
                        </div>
                     ))}
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="flex text-yellow-400">
                        {[1, 2, 3, 4, 5].map((i) => (
                           <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                     </div>
                     <span className="text-[10px] font-medium text-muted-foreground">Client Feedback</span>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

