"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Outcomes() {
    const outcomes = [
        {
            title: "A visibly leaner waist while maintaining or increasing strength",
            desc: "No crash dieting, no muscle loss.",
            highlight: true,
        },
        {
            title: "Consistent evening energy",
            desc: "No couch crash or brain fog by 6 p.m.",
            highlight: false,
        },
        {
            title: "Predictable progress despite travel and chaos",
            desc: "Guardrails and MED Weeks protect momentum.",
            highlight: false,
        },
        {
            title: "Less stress, more control, quiet confidence",
            desc: "You protect your most important asset: your health.",
            highlight: true,
        },
    ];

    return (
        <Section>
            <Container>
                <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
                    <motion.div
                        className="max-w-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                            Outcomes you will see in 90 days.
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            The focus is visible progress and sustainable energy, not endless tracking.
                        </p>
                    </motion.div>
                    <motion.div
                        className="md:text-right"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block p-4 bg-muted/30 border border-border rounded-lg backdrop-blur-sm">
                            <p className="font-heading font-semibold text-xl text-primary mb-1">Feels like</p>
                            <p className="text-muted-foreground">Less stress. More control. Quiet confidence.</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {outcomes.map((outcome, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`h-full flex flex-col justify-center p-8 ${
                                    outcome.highlight ? "border-primary/40 bg-primary/5" : ""
                                }`}
                            >
                                <h3 className="text-2xl font-bold text-foreground mb-2">{outcome.title}</h3>
                                <p className="text-muted-foreground text-lg">{outcome.desc}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
