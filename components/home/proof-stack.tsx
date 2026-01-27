"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProofChart } from "@/components/ui/proof-chart";
import { motion } from "framer-motion";

export function ProofStack() {
    const metrics = [
        {
            title: "Testosterone Optimization",
            metric: "750 ng/dL",
            change: "+114%",
            color: "#3b82f6", // Blue
            data: [
                { label: "Month 0", value: 350 },
                { label: "Month 1", value: 420 },
                { label: "Month 2", value: 580 },
                { label: "Month 3", value: 750 },
            ]
        },
        {
            title: "Deep Sleep & Recovery",
            metric: "1hr 45m",
            change: "+45%",
            color: "#8b5cf6", // Purple
            data: [
                { label: "Week 0", value: 45 },
                { label: "Week 4", value: 65 },
                { label: "Week 8", value: 90 },
                { label: "Week 12", value: 105 },
            ]
        },
        {
            title: "Body Composition (Lbs)",
            metric: "185 lbs",
            change: "-25 lbs",
            color: "#10b981", // Emerald
            data: [
                { label: "Start", value: 210 },
                { label: "Month 1", value: 202 },
                { label: "Month 2", value: 194 },
                { label: "Month 3", value: 185 },
            ]
        }
    ];

    return (
        <Section>
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                        Proof (not hype).
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We don't just "feel better." We move the metrics that matter.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {metrics.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <ProofChart {...item} />
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Declan",
                            role: "Founder, Tech",
                            result: "Lost 5 cm off his waist and doubled his VO2 max in 90 days."
                        },
                        {
                            name: "Sarah",
                            role: "Managing Director",
                            result: "Eliminated afternoon fatigue and reclaimed her evenings with family."
                        },
                        {
                            name: "James",
                            role: "CEO",
                            result: "Added 15kg to his deadlift while traveling 3 weeks out of 4."
                        }
                    ].map((person, i) => (
                        <motion.div
                            key={i}
                            className="bg-muted/10 border border-muted p-6 rounded-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <p className="text-lg font-medium text-foreground mb-4">"{person.result}"</p>
                            <div>
                                <p className="font-bold text-primary">{person.name}</p>
                                <p className="text-sm text-muted-foreground">{person.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <Button size="lg" variant="secondary" asChild>
                        <Link
                            href="https://elite-health-performance-3jmem15.gamma.site/elite-health-client-results"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Client Results
                        </Link>
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
