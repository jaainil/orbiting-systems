import { ContactForm } from "@/components/ContactForm";
import {
    Mail,
    MapPin,
    Phone,
    Clock,
    Linkedin,
    Instagram,
    Twitter,
    Facebook,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Aexaware Infotech – Let’s Build Together",
    description: "Get in touch with Aexaware Infotech for custom web, mobile & AI solutions.",
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-background font-sans">
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                        {/* Left Column: Copy & Info */}
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                                Contact Us
                            </span>
                            <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-foreground md:text-6xl">
                                Get in touch <br />
                                <span className="italic text-muted-foreground">with us</span>.
                            </h1>
                            <p className="mt-8 text-xl text-muted-foreground leading-relaxed">
                                We Should Talk. Whether you have a concrete project in mind or
                                just a vague idea, we're here to listen.
                            </p>

                            <div className="mt-12 space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Mail className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">Email</h3>
                                        <a
                                            href="mailto:info@aexaware.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            info@aexaware.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Phone className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">Phone</h3>
                                        <a
                                            href="tel:+918140734392"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +91 81407 34392
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                                        <MapPin className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">Address</h3>
                                        <p className="text-muted-foreground max-w-xs">
                                            Office no 13, 3rd Floor Aarya’s landmark, Canal Ring Road,
                                            Sevasi Vadodara, Gujarat 391101
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                                        <Clock className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">
                                            Working Hours
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Mon – Fri : 9AM – 6PM
                                        </p>
                                        <p className="text-muted-foreground">Sat : 10AM - 12AM</p>
                                        <p className="text-muted-foreground">Sun : Closed</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h3 className="font-medium text-foreground mb-4">
                                        Follow us
                                    </h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Linkedin, href: "#" },
                                            { icon: Instagram, href: "#" },
                                            { icon: Twitter, href: "#" },
                                            { icon: Facebook, href: "#" },
                                        ].map((social, i) => (
                                            <a
                                                key={i}
                                                href={social.href}
                                                className="flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
                                            >
                                                <social.icon className="size-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
