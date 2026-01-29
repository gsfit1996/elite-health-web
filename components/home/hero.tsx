"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                            New: The 90-Day Founder Reset
                        </Badge>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Build an Elite Body and Unstoppable Energy
                        <br />
                        <span className="text-primary glow-text">without sacrificing your business.</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Elite Health OS is a personalised operating system that helps founders and executives lose excess fat, gain strength, and sustain 6 p.m. sharpness -
                        even when travel, meetings, and chaos try to derail you.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center gap-4 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Button size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=hero">
                                Book Your 15-Min Health Audit <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button variant="secondary" size="lg" className="h-14 px-8 text-lg" asChild>
                            <Link href="/how-it-works">
                                See How the System Works
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.p
                        className="text-sm text-muted-foreground pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Built for founders and executives who need momentum without perfect weeks.
                    </motion.p>
                </div>

                <motion.div
                    className="mt-24 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {[
                        "Visibly leaner waist",
                        "Consistent 6 p.m. energy",
                        "Guardrails for travel weeks",
                        "Quiet confidence, less stress",
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center gap-2">
                            <span className="font-semibold text-foreground flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </Container>
        </section>
    );
}
