"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Section className="pb-0 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                            About Us
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            Built from Necessity, Not Textbooks.
                        </h1>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square w-full max-w-md mx-auto md:mr-auto rounded-2xl overflow-hidden bg-muted">
                            {/* Placeholder for Founder Image */}
                            <div className="flex items-center justify-center h-full text-muted-foreground bg-secondary/20">
                                Founder Photo
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">The Origin Story</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Elite Health OS wasn't created in a lab. It was built in the trenches of high-pressure leadership.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I realized that the "fitness industry" advice—eat less, track everything, sleep 8 hours perfectly—is incompatible with the reality of building a company.
                                Founders need a system that adapts to travel, stress, and broken sleep, not one that shames you for it.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our mission is to help leaders achieve peak performance while balancing the infinite demands of family and work.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/5">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-heading mb-4">Our Culture</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We operate with the same high standards we expect from our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Radical Truth", desc: "We don't sugarcoat reality. Data doesn't lie, and neither do we." },
                            { title: "Radical Transparency", desc: "Open books, open feedback, open communication." },
                            { title: "Extreme Ownership", desc: "We take full responsibility for outcomes. No excuses." },
                            { title: "Meritocracy", desc: "Best ideas win. Performance matters more than tenure." }
                        ].map((value, i) => (
                            <div key={i} className="bg-background border border-border p-6 rounded-xl">
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-8">Join the movement.</h2>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="/reset">
                            Book Your Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </Container>
            </Section>
        </div>
    );
}
