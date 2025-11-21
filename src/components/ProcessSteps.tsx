import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation & Strategy",
      desc: "We begin by understanding your business goals and challenges to craft a customized IT roadmap.",
    },
    {
      number: "02",
      title: "Implementation & Integration",
      desc: "Our team executes with precision—deploying the right technology, securely and seamlessly.",
      active: true,
    },
    {
      number: "03",
      title: "Ongoing Support & Optimization",
      desc: "We stay with you post-launch, offering continuous monitoring, performance improvements.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
            Simplifying IT, <br />
            Step by Step
          </h2>
          <Button asChild className="rounded-full px-6 h-12">
            <Link to="/contact">
              Start Your Project <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-10 left-0 w-full h-[2px] bg-border hidden md:block border-t-2 border-dashed border-primary/30"></div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold mb-8 border-4 transition-colors duration-300 bg-background ${
                    step.active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground group-hover:border-primary/50"
                  }`}
                >
                  {step.number}
                </div>

                <div
                  className={`relative p-8 rounded-3xl transition-all duration-300 h-full border ${
                    step.active
                      ? "bg-card text-card-foreground shadow-xl scale-105 border-primary/20"
                      : "bg-secondary/30 hover:bg-secondary/50 border-transparent"
                  }`}
                >
                  {step.active && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-primary rotate-45 transform"></div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      step.active ? "text-muted-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
