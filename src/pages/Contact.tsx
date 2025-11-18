import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message received!", {
      description: "We'll respond within 1 business day. Check your inbox for confirmation.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Let's Plan Your <span className="text-primary">Next Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tell us about your infrastructure challenges, and we'll help you chart the course forward.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 md:p-12 border-primary/20 bg-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        className="bg-background border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Acme Corp"
                        required
                        className="bg-background border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@acme.com"
                        required
                        className="bg-background border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role *</Label>
                      <Select name="role" required>
                        <SelectTrigger className="bg-background border-primary/20">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cto">CTO / Technical Leader</SelectItem>
                          <SelectItem value="ceo">CEO / Founder</SelectItem>
                          <SelectItem value="operations">Operations Manager</SelectItem>
                          <SelectItem value="it">IT Director</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select name="projectType" required>
                        <SelectTrigger className="bg-background border-primary/20">
                          <SelectValue placeholder="What do you need?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="managed-it">Managed IT & Support</SelectItem>
                          <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                          <SelectItem value="security">Security & Compliance</SelectItem>
                          <SelectItem value="custom">Custom Engineering</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select name="budget">
                        <SelectTrigger className="bg-background border-primary/20">
                          <SelectValue placeholder="Select range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10k">$10k - $25k</SelectItem>
                          <SelectItem value="25k">$25k - $50k</SelectItem>
                          <SelectItem value="50k">$50k - $100k</SelectItem>
                          <SelectItem value="100k">$100k+</SelectItem>
                          <SelectItem value="unsure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Timeline</Label>
                    <Select name="timeline">
                      <SelectTrigger className="bg-background border-primary/20">
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (Within 1 month)</SelectItem>
                        <SelectItem value="soon">Soon (1-3 months)</SelectItem>
                        <SelectItem value="planning">Planning (3-6 months)</SelectItem>
                        <SelectItem value="exploring">Just exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your project *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your infrastructure challenges, goals, and any specific requirements..."
                      rows={6}
                      required
                      className="bg-background border-primary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 1 business day. You'll receive a confirmation email immediately.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 border-primary/20 bg-card">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground">
                        contact@orbitalcore.io
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office</h4>
                      <p className="text-sm text-muted-foreground">
                        San Francisco, CA
                        <br />
                        Serving clients globally
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Service Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        24/7 emergency support
                        <br />
                        Business hours: 9am - 6pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20 bg-primary/5">
                <h4 className="font-semibold mb-3">What Happens Next?</h4>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <span>
                      You'll receive an immediate confirmation email
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <span>
                      Our team reviews your requirements within 24 hours
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <span>
                      We schedule a strategy call to discuss your project
                    </span>
                  </li>
                </ol>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
