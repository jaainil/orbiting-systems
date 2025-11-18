import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-card">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <div className="w-5 h-5 rounded-full border-2 border-primary relative">
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-secondary" />
                </div>
              </div>
              <span className="text-xl font-bold">
                Orbital<span className="text-primary">Core</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infrastructure engineered for your next orbit. We design, deploy, and maintain the systems your business can't afford to lose.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Managed IT & Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Get insights from mission control delivered to your inbox.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background border-primary/20"
              />
              <Button type="submit" className="w-full" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OrbitalCore IT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
