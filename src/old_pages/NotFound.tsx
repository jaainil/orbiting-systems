import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

import { SEO } from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <SEO
        title="Page Not Found – Aexaware Infotech"
        description="The page you are looking for does not exist."
        noindex={true}
      />
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      {/* Floating orb */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      
      <div className="relative z-10 text-center space-y-8 px-6">
        {/* 404 with orbital ring */}
        <div className="relative inline-block">
          <h1 className="text-9xl font-bold text-primary/20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-primary animate-pulse" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            You've Drifted <span className="text-primary">Off Course</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            This page doesn't exist, but your next project can. Let us help you navigate back.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" asChild>
            <Link to="/">
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              <Search className="mr-2 w-5 h-5" />
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
