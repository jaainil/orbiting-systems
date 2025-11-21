import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const DrivingFuture = () => {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Image - Tilted */}
          <div className="hidden lg:block relative h-[400px]">
            <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
              alt="Modern Architecture"
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-lg"
            />
          </div>

          {/* Center Content */}
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center p-1 mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl rounded-full animate-pulse"></div>
              <div className="relative bg-background rounded-full p-4 border border-border shadow-sm">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="curve"
                      d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                      fill="transparent"
                    />
                    <text className="text-[10px] uppercase tracking-widest fill-primary font-bold">
                      <textPath href="#curve">
                        Success Brand • Success Brand • Success Brand •
                      </textPath>
                    </text>
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowUpRight className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-foreground">
              Driving The <br />
              <span className="italic text-muted-foreground">Future</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We help businesses grow by providing innovative IT solutions that
              streamline operations and enhance user experiences.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg">
              <Link to="/contact">
                Get Started <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right Image - Tilted */}
          <div className="hidden lg:block relative h-[400px]">
            <div className="absolute inset-0 bg-secondary/20 rounded-[3rem] transform rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
              alt="Team Working"
              className="absolute inset-0 w-full h-full object-cover rounded-[3rem] transform -rotate-3 hover:rotate-0 transition-transform duration-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
