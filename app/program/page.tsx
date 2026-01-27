"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProgramPage() {
    return (
        <div className="flex flex-col">
            <Section className="pb-0 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                            The System
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            Install Your Elite Health Operating System.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Stop relying on motivation. We install an operating system that adapts to your calendar and keeps health momentum automatic.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">The Core Mechanisms</h2>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">MED Week Standards</h3>
                                        <p className="text-muted-foreground">Stay on track during chaotic weeks without punishing workouts.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">"Never Miss Twice" Rule</h3>
                                        <p className="text-muted-foreground">Bounce back after disruptions and avoid downward spirals.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Weekend & Travel Guardrails</h3>
                                        <p className="text-muted-foreground">Navigate airports, hotels, and dinners without gaining weight.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    href="https://calendar.app.google/5w7EofmxxhwkdaN1A"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
                                >
                                    Book a 15-minute audit to install these mechanisms <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                        <div className="bg-muted/10 rounded-2xl p-8 border border-muted">
                            <h3 className="text-xl font-bold mb-6">Which Archetype Are You?</h3>
                            <div className="space-y-6">
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The Lean-Down Optimiser</h4>
                                    <p className="text-sm text-muted-foreground">
                                        You train consistently but the last 5-10 kg around the waist will not move. You need precision, not more effort.
                                    </p>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The High-Stress Rebuilder</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Work stress has eroded your energy and sleep. Recovery must come first to rebuild performance.
                                    </p>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The Big Reset</h4>
                                    <p className="text-sm text-muted-foreground">
                                        It is time for a complete overhaul - 15 kg or more to lose and biomarkers trending the wrong way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/5">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-4">Ready to install the OS?</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        When you are ready, book your 15-minute audit. We will diagnose your consistency breaks, outline your 90-day roadmap, and determine if we are the right fit.
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                            Schedule Your 15-Min Audit <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </Container>
            </Section>
        </div>
    );
}

