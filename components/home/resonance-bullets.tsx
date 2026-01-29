"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function ResonanceBullets() {
    const personas = [
        {
            title: "The Lean-Down Optimiser",
            desc: "You exercise consistently but cannot shift the last 5 to 10 kg around your waist.",
        },
        {
            title: "The High-Stress Rebuilder",
            desc: "Your calendar is destroying your energy and sleep. Recovery must come first.",
        },
        {
            title: "The Big Reset",
            desc: "You need a complete overhaul - 15 kg or more to lose and biomarkers trending the wrong way.",
        },
    ];

    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Who we help</h2>
                    <p className="text-muted-foreground">Pick the one that sounds like your reality. We will tailor the plan from there.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {personas.map((persona, i) => (
                        <Card
                            key={i}
                            className="flex flex-col justify-start h-full bg-background border-muted hover:border-primary/30 transition-all p-6"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <Check className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-base text-foreground leading-relaxed font-semibold">{persona.title}</p>
                                    <p className="text-sm text-muted-foreground mt-2">{persona.desc}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <motion.p
                    className="mt-8 text-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Unsure which describes you?{" "}
                    <Link href="/performance-reset?ref=resonance" className="text-primary hover:text-primary/80">
                        Book a call
                    </Link>{" "}
                    and we will identify your constraints and build the right roadmap.
                </motion.p>
            </Container>
        </Section>
    );
}
