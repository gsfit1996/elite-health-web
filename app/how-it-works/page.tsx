"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Timeline } from "@/components/home/timeline";
import { Mechanisms } from "@/components/home/mechanisms";
import { motion } from "framer-motion";
import { ArrowRight, Search, Activity, Target } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
    return (
        <div className="pt-20">
            <Section>
                <Container>
                    <div className="max-w-3xl mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold font-heading mb-6"
                        >
                            The <span className="text-primary italic">OS</span> Methodology.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground"
                        >
                            Most health advice is generic. We build a personalized Operating System based on your biology, your schedule, and your specific goals.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                icon: <Search className="w-8 h-8 text-primary" />,
                                title: "1. Biological Audit",
                                description: "We start with comprehensive blood work and wearable data analysis to find your metabolic bottlenecks."
                            },
                            {
                                icon: <Target className="w-8 h-8 text-primary" />,
                                title: "2. Protocol Design",
                                description: "A custom 90-day roadmap covering nutrition, supplementation, and training tailored to your constraints."
                            },
                            {
                                icon: <Activity className="w-8 h-8 text-primary" />,
                                title: "3. Continuous Optimization",
                                description: "Weekly data reviews and adjustments to ensure you never plateau and results stay permanent."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="p-8 bg-muted/10 border border-border rounded-2xl hover:border-primary/50 transition-colors"
                            >
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Mechanisms />

            <Timeline />

            <Section>
                <Container>
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-12 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to install the OS?</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Take the first step towards radical health optimization today.
                        </p>
                        <Button size="lg" asChild className="h-14 px-8 text-lg">
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                Book 15-Min Audit <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

