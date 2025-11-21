import { Button } from "@/components/ui/button";
import { ArrowUpRight, Shield, Code, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export const ServicesGrid = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight max-w-xl text-foreground">
            Complete IT Solutions <br />
            for Every Need
          </h2>
          <Button asChild variant="default" className="rounded-full px-6 h-12">
            <Link to="/services">
              View All Services <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 h-full">
            <div className="flex-1 bg-card border border-border rounded-3xl p-8 flex flex-col justify-between group hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Settings className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">IT Infrastructure Management</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Build, manage, optimize your IT systems seamless integration 24/7 support.
                </p>
                <Link to="/services" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                  Learn More <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
            <div className="h-1/3 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-center group hover:bg-secondary/70 transition-colors">
               <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-3 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Software Development</h3>
              <p className="text-muted-foreground text-xs">
                Custom web and mobile applications designed to boost performance.
              </p>
            </div>
          </div>

          {/* Column 2 (Center Image) */}
          <div className="md:col-span-1 h-full">
            <div className="h-full w-full rounded-3xl overflow-hidden relative group border border-border">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop" 
                alt="Server Room" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6 h-full">
             <div className="h-1/3 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-center group hover:bg-secondary/70 transition-colors">
               <div className="h-10 w-10 rounded-full bg-background flex items-center justify-center mb-3 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-foreground">Cybersecurity Services</h3>
              <p className="text-muted-foreground text-xs">
                Safeguard your digital assets with advanced threat detection.
              </p>
            </div>
            <div className="flex-1 bg-secondary/50 rounded-3xl p-8 flex flex-col justify-end group hover:bg-secondary/70 transition-colors">
               <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center mb-4 text-primary">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Data Analytics & AI</h3>
              <p className="text-muted-foreground text-sm">
                Turn data into decisions with AI-powered analytics and automation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
