"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { SquareCheck, Gauge, LineChart, Plane, RotateCcw } from "lucide-react";

export function Mechanisms() {
    const mechanisms = [
        {
            title: "MED Week Standards",
            desc: "Protect progress when work explodes with a minimum-effective-dose plan.",
            icon: <Gauge className="h-6 w-6 text-primary" />,
        },
        {
            title: "Never Miss Twice",
            desc: "Turn slip-ups into quick rebounds before they become a spiral.",
            icon: <RotateCcw className="h-6 w-6 text-primary" />,
        },
        {
            title: "Weekend Structure Rules",
            desc: "Engineer weekends so you do not undo the week's progress.",
            icon: <Plane className="h-6 w-6 text-primary" />,
        },
        {
            title: "Default Decisions",
            desc: "Pre-made defaults reduce decision fatigue and protect results.",
            icon: <SquareCheck className="h-6 w-6 text-primary" />,
        },
        {
            title: "Performance Reviews",
            desc: "Measure and adjust like a business operating rhythm.",
            icon: <LineChart className="h-6 w-6 text-primary" />,
        },
    ];

    return (
        <Section>
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">How it works (short version).</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Biological Audit: We analyze blood work and wearable data to find the bottlenecks. Protocol Design: You receive a custom 90-day plan covering nutrition,
                        training, and supplementation, engineered around your calendar. Continuous Optimization: Weekly reviews ensure you never plateau.
                    </p>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-10">
                    The mechanisms that keep momentum.
                </h3>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {mechanisms.map((mech, i) => (
                        <motion.div
                            key={i}
                            className="group p-6 md:p-8 rounded-2xl border border-border bg-background hover:bg-muted/30 transition-all flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                                    {mech.icon}
                                </div>
                                <div className="font-heading text-4xl md:text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                    0{i + 1}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {mech.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">{mech.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
