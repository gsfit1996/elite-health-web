"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, FileText, Settings, Database, Brain } from "lucide-react";

export default function ResourcesPage() {
    const protocolGroups = [
        {
            title: "Systems",
            icon: <Settings className="h-6 w-6" />,
            desc: "Decision fatigue, execution rules",
            items: [
                {
                    title: "The 3-Rule Consistency System",
                    desc: "A simple operating system that keeps progress steady even in chaos.",
                    href: "/resources/three-rule-consistency-system",
                },
                {
                    title: "Weekly Reset Review Protocol",
                    desc: "A 25-minute review that locks priorities and removes friction.",
                    href: "/resources/weekly-reset-review-protocol",
                },
                {
                    title: "Default Day Design Protocol",
                    desc: "Build a repeatable day template that protects health and output.",
                    href: "/resources/default-day-design-protocol",
                },
            ],
        },
        {
            title: "Nutrition",
            icon: <Database className="h-6 w-6" />,
            desc: "Defaults, travel, weekends",
            items: [
                {
                    title: "Protein-First Meal Architecture",
                    desc: "A meal framework that stabilizes appetite and recovery.",
                    href: "/resources/protein-first-meal-architecture",
                },
                {
                    title: "Travel Day Nutrition Protocol",
                    desc: "Stay consistent through airports, hotels, and client dinners.",
                    href: "/resources/travel-day-nutrition-protocol",
                },
                {
                    title: "Late Dinner Damage Control",
                    desc: "Minimize the impact of late meals without wrecking tomorrow.",
                    href: "/resources/late-dinner-damage-control",
                },
            ],
        },
        {
            title: "Biomarkers",
            icon: <Brain className="h-6 w-6" />,
            desc: "What to test, what to do",
            items: [
                {
                    title: "The Executive Biomarker Priority List",
                    desc: "What to test, target ranges, and action priorities for high performers.",
                    href: "/resources/executive-biomarker-priority-list",
                },
                {
                    title: "Glucose Stability Protocol",
                    desc: "Reduce spikes and improve insulin sensitivity fast.",
                    href: "/resources/glucose-stability-protocol",
                },
                {
                    title: "Inflammation Control Protocol",
                    desc: "Lower hs-CRP and speed up recovery with focused levers.",
                    href: "/resources/inflammation-control-protocol",
                },
            ],
        },
        {
            title: "Training",
            icon: <div className="h-6 w-6 bg-primary/20 rounded-full" />,
            desc: "Joint-smart strength",
            items: [
                {
                    title: "Joint-Smart Strength Template",
                    desc: "A founder-friendly strength plan that protects joints and energy.",
                    href: "/resources/joint-smart-strength-template",
                },
                {
                    title: "Hotel Gym Strength Protocol",
                    desc: "A 30-minute travel session that keeps strength moving.",
                    href: "/resources/hotel-gym-strength-protocol",
                },
                {
                    title: "Deskbound Mobility Reset Protocol",
                    desc: "Short mobility blocks that undo long hours at a desk.",
                    href: "/resources/deskbound-mobility-reset-protocol",
                },
            ],
        },
    ];

    return (
        <div className="pt-24">
            <Section className="bg-muted/10">
                <Container className="text-center">
                    <Badge variant="outline" className="mb-4">Protocols</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Protocols Hub
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Actionable protocols for founders who treat health as an operating system.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {protocolGroups.map((cat) => (
                            <Card key={cat.title} className="p-6 flex flex-col items-center text-center hover:border-primary/50 cursor-pointer transition-colors">
                                <div className="p-3 bg-muted rounded-full mb-4 text-primary">
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-foreground mb-1">{cat.title}</h3>
                                <p className="text-sm text-muted-foreground">{cat.desc}</p>
                            </Card>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold font-heading mb-8">Protocols</h2>
                    <div className="space-y-12">
                        {protocolGroups.map((group) => (
                            <div key={group.title} className="space-y-4">
                                <div className="flex flex-wrap items-end justify-between gap-2">
                                    <h3 className="text-xl font-bold text-foreground">{group.title}</h3>
                                    <p className="text-sm text-muted-foreground">{group.desc}</p>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {group.items.map((item) => (
                                        <Link key={item.href} href={item.href} className="block">
                                            <Card className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group cursor-pointer hover:bg-muted/30">
                                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                                    <FileText className="h-6 w-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-muted-foreground">{item.desc}</p>
                                                </div>
                                                <div className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                                    View Protocol <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
