"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, FileText, Settings, Database, Brain } from "lucide-react";

export default function ResourcesPage() {
    const categories = [
        { title: "Systems", icon: <Settings className="h-6 w-6" />, desc: "Decision fatigue, execution rules" },
        { title: "Nutrition", icon: <Database className="h-6 w-6" />, desc: "Defaults, travel, weekends" },
        { title: "Biomarkers", icon: <Brain className="h-6 w-6" />, desc: "What to test, what to do" },
        { title: "Training", icon: <div className="h-6 w-6 bg-primary/20 rounded-full" />, desc: "Joint-smart strength" }
    ];

    return (
        <div className="pt-24">
            <Section className="bg-muted/10">
                <Container className="text-center">
                    <Badge variant="outline" className="mb-4">Library</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Resources Hub
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tools, guides, and deep dives for the founder who treats health as an operating system.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {categories.map((cat, i) => (
                            <Card key={i} className="p-6 flex flex-col items-center text-center hover:border-primary/50 cursor-pointer transition-colors">
                                <div className="p-3 bg-muted rounded-full mb-4 text-primary">
                                    {cat.icon}
                                </div>
                                <h3 className="font-bold text-foreground mb-1">{cat.title}</h3>
                                <p className="text-sm text-muted-foreground">{cat.desc}</p>
                            </Card>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold font-heading mb-8">Latest Guides</h2>
                    <div className="grid gap-6">
                        <Link href="/resources/executive-biomarker-priority-list" className="block">
                            <Card className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center group cursor-pointer hover:bg-muted/30">
                                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                    <FileText className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">The Executive Biomarker Priority List</h3>
                                    <p className="text-muted-foreground">What to test, target ranges, and action priorities for high performers.</p>
                                </div>
                                <div className="text-primary font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                    Read Guide <ArrowRight className="h-4 w-4" />
                                </div>
                            </Card>
                        </Link>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
