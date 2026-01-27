"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProofChart } from "@/components/ui/proof-chart";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const metrics = [
    {
        title: "Testosterone Optimization",
        metric: "750 ng/dL",
        change: "+114%",
        color: "#3b82f6",
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
        color: "#8b5cf6",
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
        color: "#10b981",
        data: [
            { label: "Start", value: 210 },
            { label: "Month 1", value: 202 },
            { label: "Month 2", value: 194 },
            { label: "Month 3", value: 185 },
        ]
    },
    {
        title: "HRV (Recovery Score)",
        metric: "85 ms",
        change: "+62%",
        color: "#f59e0b",
        data: [
            { label: "Week 0", value: 52 },
            { label: "Week 4", value: 58 },
            { label: "Week 8", value: 72 },
            { label: "Week 12", value: 85 },
        ]
    }
];

const testimonials = [
    {
        name: "Marc S.",
        role: "Venture Capitalist",
        content: "I've tried every biohacking protocol out there. Elite Health OS is the first one that actually showed up in my blood work and Oura ring data. My focus is at an all-time high.",
        avatar: "/testimonials/1.png"
    },
    {
        name: "David K.",
        role: "Tech Founder",
        content: "The 6pm crash was killing my productivity. Three months in, and I'm still hitting the gym after a 10-hour day with energy to spare. The ROI is undeniable.",
        avatar: "/testimonials/2.png"
    }
];

export default function ResultsPage() {
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
                            The <span className="text-primary italic">Proof</span> Stack.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground"
                        >
                            We don't do guesswork. We track physiological markers and optimize them until you're operating at your peak potential.
                        </motion.p>
                        <div className="mt-6">
                            <Button asChild variant="secondary">
                                <Link href="/client-results">
                                    View full client results
                                </Link>
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {metrics.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <ProofChart {...item} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6">Quantified Success.</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, title: "Validated by Blood Work", text: "Every claim is backed by pre and post-protocol clinical lab results." },
                                    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Immediate Metabolic Shift", text: "85% of clients report a significant energy lift within the first 14 days." },
                                    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Compound Gains", text: "Physiological improvements continue to stack month over month." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1">{item.icon}</div>
                                        <div>
                                            <h4 className="font-bold">{item.title}</h4>
                                            <p className="text-muted-foreground">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {testimonials.map((t, i) => (
                                <Card key={i} className="p-6 bg-muted/10 border-border">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                                    </div>
                                    <p className="text-lg italic mb-6">"{t.content}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-bold">{t.name}</div>
                                            <div className="text-sm text-muted-foreground">{t.role}</div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
