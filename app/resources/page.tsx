"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Settings, Database, Brain, Sparkles, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
    const protocolGroups = [
        {
            id: "systems",
            title: "Systems",
            icon: <Settings className="h-6 w-6" />,
            desc: "Decision fatigue, execution rules",
            accent: "from-sky-500/25",
            items: [
                {
                    title: "The 3-Rule Consistency System",
                    desc: "Keep moving forward even during chaos.",
                    href: "/resources/three-rule-consistency-system",
                    tags: ["Execution OS", "3 rules"],
                },
                {
                    title: "Weekly Reset Review Protocol",
                    desc: "Lock priorities, remove friction and start Monday with clarity.",
                    href: "/resources/weekly-reset-review-protocol",
                    tags: ["25-min review", "Weekly"],
                },
                {
                    title: "Default Day Design Protocol",
                    desc: "Create a repeatable day template that protects health and output.",
                    href: "/resources/default-day-design-protocol",
                    tags: ["Calendar", "Day template"],
                },
            ],
        },
        {
            id: "nutrition",
            title: "Nutrition",
            icon: <Database className="h-6 w-6" />,
            desc: "Defaults, travel, weekends",
            accent: "from-emerald-500/25",
            items: [
                {
                    title: "Protein-First Meal Architecture",
                    desc: "Control appetite and accelerate recovery.",
                    href: "/resources/protein-first-meal-architecture",
                    tags: ["Meal structure", "Satiety"],
                },
                {
                    title: "Travel Day Nutrition Protocol",
                    desc: "Stay consistent through airports, hotels and client dinners.",
                    href: "/resources/travel-day-nutrition-protocol",
                    tags: ["Travel", "Airport"],
                },
                {
                    title: "Late Dinner Damage Control",
                    desc: "Minimize the impact of late meals without sabotaging tomorrow.",
                    href: "/resources/late-dinner-damage-control",
                    tags: ["Late meals", "24h reset"],
                },
            ],
        },
        {
            id: "biomarkers",
            title: "Biomarkers",
            icon: <Brain className="h-6 w-6" />,
            desc: "What to test, what to do",
            accent: "from-cyan-500/25",
            items: [
                {
                    title: "The Executive Biomarker Priority List",
                    desc: "Know which labs to run, target ranges, and how to interpret them.",
                    href: "/resources/executive-biomarker-priority-list",
                    tags: ["Lab list", "Targets"],
                },
                {
                    title: "Glucose Stability Protocol",
                    desc: "Reduce blood-sugar spikes and improve insulin sensitivity.",
                    href: "/resources/glucose-stability-protocol",
                    tags: ["Spikes", "Insulin"],
                },
                {
                    title: "Inflammation Control Protocol",
                    desc: "Lower hs-CRP and speed up recovery.",
                    href: "/resources/inflammation-control-protocol",
                    tags: ["hs-CRP", "Recovery"],
                },
            ],
        },
        {
            id: "training",
            title: "Training",
            icon: <Dumbbell className="h-6 w-6" />,
            desc: "Joint-smart strength",
            accent: "from-amber-500/25",
            items: [
                {
                    title: "Joint-Smart Strength Template",
                    desc: "Build strength without joint flare-ups.",
                    href: "/resources/joint-smart-strength-template",
                    tags: ["Joint-friendly", "3x week"],
                },
                {
                    title: "Hotel Gym Strength Protocol",
                    desc: "30-minute sessions to keep strength moving on the road.",
                    href: "/resources/hotel-gym-strength-protocol",
                    tags: ["30-min", "Travel"],
                },
                {
                    title: "Deskbound Mobility Reset Protocol",
                    desc: "Undo the damage of long hours at a desk.",
                    href: "/resources/deskbound-mobility-reset-protocol",
                    tags: ["Desk reset", "15-min"],
                },
            ],
        },
    ];

    const totalProtocols = protocolGroups.reduce((sum, group) => sum + group.items.length, 0);

    const stagger = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="pt-24">
            <Section className="relative overflow-hidden">
                <div className="absolute left-1/2 top-0 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px] opacity-70" />
                <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
                <Container className="relative z-10">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
                        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
                            <motion.div variants={fadeUp}>
                                <Badge variant="outline" className="mb-4">Protocols</Badge>
                                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
                                    Protocols Hub
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                                    A free library of founder-grade protocols you can execute immediately. Updated regularly to keep your playbooks current.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
                                <div className="rounded-2xl border border-border/60 bg-muted/10 p-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Total protocols</p>
                                    <p className="text-2xl font-bold text-foreground">{totalProtocols}</p>
                                    <p className="text-xs text-muted-foreground">Across 4 domains</p>
                                </div>
                                <div className="rounded-2xl border border-border/60 bg-muted/10 p-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Format</p>
                                    <p className="text-2xl font-bold text-foreground">Same-day</p>
                                    <p className="text-xs text-muted-foreground">Ready to execute</p>
                                </div>
                                <div className="rounded-2xl border border-border/60 bg-muted/10 p-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Library</p>
                                    <p className="text-2xl font-bold text-foreground">Free</p>
                                    <p className="text-xs text-muted-foreground">Updated regularly</p>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                                <Button asChild className="h-11 px-6">
                                    <Link href="#protocols">
                                        Browse Protocols <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="h-11 px-6 text-muted-foreground">
                                    <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                        Build My Plan
                                    </Link>
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={stagger}
                            className="grid gap-4 sm:grid-cols-2"
                        >
                            {protocolGroups.map((group) => (
                                <motion.div key={group.id} variants={fadeUp}>
                                    <Link href={`#${group.id}`} className="group block">
                                        <div className={cn(
                                            "relative overflow-hidden rounded-2xl border border-border/60 bg-muted/10 p-5 transition-colors hover:border-primary/40",
                                        )}>
                                            <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100", group.accent)} />
                                            <div className="relative z-10 space-y-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                        {group.icon}
                                                    </div>
                                                    <span className="text-sm font-semibold text-foreground">{group.title}</span>
                                                </div>
                                                <p className="text-xs text-muted-foreground">{group.desc}</p>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <Sparkles className="h-3.5 w-3.5 text-primary" />
                                                    <span>{group.items.length} protocols</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </Section>

            <Section id="protocols" className="relative">
                <Container>
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">Protocol Library</h2>
                            <p className="text-muted-foreground max-w-2xl">
                                Choose a domain and run the protocol. Each one is designed for immediate execution.
                            </p>
                        </div>
                        <p className="text-sm text-muted-foreground">Updated regularly</p>
                    </div>

                    <div className="space-y-16">
                        {protocolGroups.map((group) => (
                            <motion.div
                                key={group.id}
                                id={group.id}
                                className="scroll-mt-28 space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={stagger}
                            >
                                <motion.div variants={fadeUp} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className={cn(
                                            "flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/20 text-primary",
                                        )}>
                                            {group.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-muted-foreground">{group.title}</p>
                                            <h3 className="text-2xl font-bold text-foreground">{group.title} Protocols</h3>
                                            <p className="text-sm text-muted-foreground">{group.desc}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{group.items.length} protocols</p>
                                </motion.div>

                                <motion.div variants={stagger} className="grid gap-6 lg:grid-cols-2">
                                    {group.items.map((item) => (
                                        <Link key={item.href} href={item.href} className="group block">
                                            <motion.div
                                                variants={fadeUp}
                                                className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-muted/20 via-muted/10 to-transparent p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
                                            >
                                                <div className={cn(
                                                    "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100",
                                                    group.accent
                                                )} />
                                                <div className="relative z-10 space-y-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                                            <FileText className="h-6 w-6" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                {item.title}
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap gap-2">
                                                        {item.tags.map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between text-sm font-semibold text-primary">
                                                        <span>View Protocol</span>
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/20">
                <Container>
                    <div className="mx-auto max-w-3xl text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to go beyond the protocols?</h2>
                        <p className="text-lg text-muted-foreground">
                            Sample a protocol, then install the full operating system for your body and calendar.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Button asChild className="h-11 px-6">
                                <Link href="/program">
                                    Explore the full program <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild variant="ghost" className="h-11 px-6 text-muted-foreground">
                                <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                    Book a 15-minute audit
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
