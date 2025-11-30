import { Hero } from "@/components/Hero";
import { DrivingFuture } from "@/components/DrivingFuture";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SmartSolutions } from "@/components/SmartSolutions";
import { Industries } from "@/components/Industries";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-accent-foreground">
            <Hero />
            <DrivingFuture />
            <ServicesGrid />
            <SmartSolutions />
            <Industries />
            <ProcessSteps />
            <Testimonials />

            {/* CTA - Organic */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary/50 px-6 py-24 text-center sm:px-16">
                        {/* Decorative blobs */}
                        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white blur-3xl opacity-60" />
                        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-60" />

                        <div className="relative z-10 mx-auto max-w-2xl">
                            <h2 className="font-serif text-4xl font-medium text-foreground md:text-5xl">
                                Let’s Bring It to Life
                            </h2>
                            <p className="mt-6 text-lg text-muted-foreground">
                                Book Your Free Expert Consultation Today!
                            </p>
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                <Button
                                    size="lg"
                                    className="h-14 rounded-full px-8 text-lg"
                                    asChild
                                >
                                    <Link href="/contact">Get Free Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
