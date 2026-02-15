"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SystemPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <Section>
                <Container className="text-center max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                        The Elite Health OS: <br />
                        <span className="text-primary">how high performers stop falling off.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8">
                        This is not another plan. Itâ€™s the mechanisms that make execution inevitable.
                    </p>
                </Container>
            </Section>

            {/* Execution Equation */}
            <Section background="muted">
                <Container>
                    <h2 className="text-2xl font-bold mb-8 text-center">The Execution Equation</h2>
                    <Card className="max-w-3xl mx-auto p-12 text-center border-primary/20 bg-muted/40 backdrop-blur-sm">
                        <p className="text-3xl md:text-4xl font-heading font-medium text-foreground">
                            Results = (Standards) Ã— (Defaults) Ã— (Feedback Loops)
                        </p>
                        <p className="mt-6 text-muted-foreground">
                            Motivation is not part of the equation. Itâ€™s unreliable.
                        </p>
                    </Card>
                </Container>
            </Section>

            {/* Anti-Derailment Stack */}
            <Section>
                <Container>
                    <h2 className="text-3xl font-bold font-heading mb-12 text-center">The Anti-Derailment Stack</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: "MED Week", desc: "The minimum effective dose protocol for chaos weeks." },
                            { title: "Never Miss Twice", desc: "Identity-preservation rule preventing spirals." },
                            { title: "Minimum Win Day", desc: "The absolute floor of performance on bad days." },
                            { title: "Weekend Guardrails", desc: "Engineering weekends so they don't destroy progress." },
                            { title: "Default Day Nutrition", desc: "Decision-free meal templates." },
                            { title: "Sleep Anchors", desc: "The non-negotiables protecting your recovery." }
                        ].map((item, i) => (
                            <Card key={i} className="p-6">
                                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Why most fail */}
            <Section background="muted">
                <Container className="max-w-3xl text-center">
                    <h2 className="text-3xl font-bold font-heading mb-6">Why most â€œelite coachingâ€ fails</h2>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                        <p>Most plans are designed for ideal weeks.</p>
                        <p className="text-foreground font-medium">Your life is not ideal.</p>
                        <p>So the plan must be designed for disruption.</p>
                    </div>
                </Container>
            </Section>

            {/* CTA */}
            <Section className="pb-32">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-6">Install the OS.</h2>
                    <Button size="lg" asChild>
                        <Link href="/performance-reset?ref=site">
                            Book 15-Min Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </Container>
            </Section>
        </div>
    );
}


