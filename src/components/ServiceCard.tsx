import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <Card className="group relative overflow-hidden border-primary/20 bg-card hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-8 h-full">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        
        {/* Content */}
        <div className="relative space-y-4">
          <div className="w-14 h-14 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          
          <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
            <span className="text-sm font-medium">View details</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
