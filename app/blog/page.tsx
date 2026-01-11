"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have an input component or will use standard one
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    return (
        <div className="flex flex-col">
            <Section className="pb-0 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
                            Resources
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                            Performance Intelligence
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Deep dives into longevity science, energy management, and high-performance protocols.
                        </p>
                    </div>
                </Container>
            </Section>

            {/* Newsletter Opt-in */}
            <Section className="bg-primary/5 py-16">
                <Container>
                    <div className="bg-background border border-border rounded-2xl p-8 md:p-12 max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4">
                            Get "5 Rules for Consistent Energy"
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Join 5,000+ leaders receiving our weekly tactical guide to health and performance. Unsubscribe anytime.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                required
                            />
                            <Button size="lg" className="h-12 px-8">
                                Subscribe
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground mt-4">
                            We respect your inbox. No spam, ever.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Why 'Eating Less' Destroys Executive Performance",
                                category: "Nutrition",
                                desc: "The metabolic adaptation trap that catches 90% of founders."
                            },
                            {
                                title: "Sleep Anchors: How to Sleep on Planes and Hotels",
                                category: "Recovery",
                                desc: "Tactical protocols for maintaining circadian rhythm across time zones."
                            },
                            {
                                title: "The 3 p.m. Slump is Optional",
                                category: "Energy",
                                desc: "How to structure glucose and caffeine for steady state focus."
                            }
                        ].map((article, i) => (
                            <Card key={i} className="flex flex-col p-0 overflow-hidden hover:border-primary/50 transition-colors cursor-pointer group">
                                <div className="h-48 bg-muted w-full group-hover:scale-105 transition-transform duration-500" />
                                <div className="p-6">
                                    <Badge variant="outline" className="mb-4">{article.category}</Badge>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{article.title}</h3>
                                    <p className="text-muted-foreground text-sm">{article.desc}</p>
                                    <div className="mt-4 flex items-center text-sm font-medium text-primary">
                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
