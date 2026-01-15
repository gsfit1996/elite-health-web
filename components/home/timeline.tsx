"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Timeline() {
    const steps = [
        {
            title: "Today — Get started",
            items: [
                "Baseline + constraints audit (schedule, travel, preferences)",
                "Scorecard set (weight/waist, steps, training, sleep anchors)",
                "Default Day nutrition template installed"
            ]
        },
        {
            title: "Day 7 — Stabilize",
            items: [
                "First adjustments based on data",
                "MED Week plan built (for travel/chaos weeks)",
                "Weekend guardrails deployed"
            ]
        },
        {
            title: "Day 30 — Momentum",
            items: [
                "Waist trend becomes predictable",
                "Evening energy improves",
                "Training progression feels “safe” and repeatable",
                "You’re thinking less, executing more"
            ]
        }
    ];

    return (
        <Section className="bg-muted/10">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        Here’s what you’ll have running in 30 days.
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border block md:hidden" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                {/* Dot */}
                                <div className="absolute left-[-5px] md:left-1/2 top-0 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 ml-px" />

                                <div className="md:w-1/2 w-full pl-8 md:pl-0 md:px-12">
                                    <div className="bg-background border border-border p-6 rounded-xl shadow-sm">
                                        <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                                        <ul className="space-y-2">
                                            {step.items.map((item, j) => (
                                                <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                                                    <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <Button size="lg" asChild>
                        <Link href="/reset">
                            Book 15-Min Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                        You’ll leave with a 90-day outline and whether it’s a fit.
                    </p>
                </div>
            </Container>
        </Section>
    );
}

