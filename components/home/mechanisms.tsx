"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Mechanisms() {
    const mechanisms = [
        {
            title: "MED Week Standards",
            desc: "Your plan includes a “minimum effective dose” version for weeks that would normally derail you."
        },
        {
            title: "Never Miss Twice",
            desc: "Missing once is reality. Missing twice becomes identity. We build rules that stop the spiral."
        },
        {
            title: "Weekend Structure Rules",
            desc: "We don’t “hope” weekends go well. We engineer them."
        },
        {
            title: "Default Decisions",
            desc: "The plan isn’t “more choices.” It’s fewer choices—pre-made defaults that protect results."
        },
        {
            title: "Performance Reviews",
            desc: "Progress is measured, reviewed, and adjusted—like a business operating rhythm."
        }
    ];

    return (
        <Section>
            <Container>
                <h2 className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center">
                    The mechanisms behind the results.
                </h2>

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
                            <div className="font-heading text-4xl md:text-5xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                                0{i + 1}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{mech.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{mech.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
