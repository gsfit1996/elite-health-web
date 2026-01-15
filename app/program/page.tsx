"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

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
                            A High-Performance Operating System for Your Body
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Stop relying on motivation. We install a "Never Miss Twice" system that automates your health, energy, and physique.
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
                                        <p className="text-muted-foreground">Minimum Effective Dose protocols for busy weeks. Maintain progress even when work explodes.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">"Never Miss Twice" Rule</h3>
                                        <p className="text-muted-foreground">A psychological contract that prevents one bad meal from becoming a bad month.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Weekend & Travel Guardrails</h3>
                                        <p className="text-muted-foreground">Specific protocols for airports, hotels, and social dinners so you don't decline.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-muted/10 rounded-2xl p-8 border border-muted">
                            <h3 className="text-xl font-bold mb-6">Which Archetype Are You?</h3>
                            <div className="space-y-6">
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The Lean-Down Optimiser</h4>
                                    <p className="text-sm text-muted-foreground">You exercise but can't shift the last 5-10kg around the waist.</p>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The High-Stress Rebuilder</h4>
                                    <p className="text-sm text-muted-foreground">Work stress has eroded your energy and sleep. You need recovery first.</p>
                                </div>
                                <div className="p-4 bg-background rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-1">The Big Reset</h4>
                                    <p className="text-sm text-muted-foreground">It's time for a complete overhaul. 15kg+ to lose, health markers in danger.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/5">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-8">Ready to install the OS?</h2>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="/reset">
                            Schedule Your 15-Min Audit <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </Container>
            </Section>
        </div>
    );
}

