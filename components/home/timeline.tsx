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
            title: "Today - Baseline",
            items: [
                "Baseline audit and scorecards set (waist, steps, training, sleep)",
                "Constraints mapped against travel and calendar load",
                "Defaults installed so week one is low-friction",
            ],
        },
        {
            title: "Day 7 - Stabilize",
            items: [
                "Data-driven adjustments to nutrition and training",
                "MED Week plan built for chaos weeks",
                "First performance review to lock in momentum",
            ],
        },
        {
            title: "Day 14 - Guardrails",
            items: [
                "Weekend guardrails installed",
                "Joint-smart training progression in place",
                "Recovery anchors dialed in to protect energy",
            ],
        },
        {
            title: "Day 30 - Momentum",
            items: [
                "Waist trend becomes predictable",
                "Evening energy improves and stays stable",
                "Execution feels simple because defaults run the week",
            ],
        },
    ];

    return (
        <Section className="bg-muted/10">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                        What you will have running in 30 days.
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Want this aligned to your calendar?{" "}
                        <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A" className="font-semibold text-primary hover:text-primary/80">
                            Book a 15-minute audit
                        </Link>
                        .
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border block md:hidden" />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col md:flex-row items-start ${
                                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                                } gap-8 relative`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
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
                        <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                            Book 15-Min Audit <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                        You will leave with a 90-day outline and whether it is a fit.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
