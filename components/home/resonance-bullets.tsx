"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function ResonanceBullets() {
    const problems = [
        "You experience the 'couch crash': sharp all day, but 6 p.m. hits and energy vanishes.",
        "You dread the 'off-track spiral': one disruption shouldn't derail your whole week.",
        "You want '6 p.m. sharpness'—mental clarity that lasts until the work is actually done.",
        "You need weekend guardrails: you can't just 'hope' weekends go well.",
        "You want a visibly leaner waist, but refuse to live in a macro-tracking prison.",
        "You want a 'never miss twice' system that automates your bounce-back."
    ];

    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        If any of these are true, you’re in the right place.
                    </h2>
                    <p className="text-muted-foreground">We solve for the reality of your schedule, not an ideal world.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, i) => (
                        <Card key={i} className="flex flex-col justify-start h-full bg-background border-muted hover:border-primary/30 transition-all p-6">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-full">
                                    <Check className="h-5 w-5 text-primary" />
                                </div>
                                <p className="text-base text-gray-200 leading-relaxed font-medium">
                                    {problem}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
