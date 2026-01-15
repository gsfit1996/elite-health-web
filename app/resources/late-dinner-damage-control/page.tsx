import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Late Dinner Damage Control | Elite Health OS",
    description: "Minimize the impact of late meals without wrecking tomorrow.",
};

const beforeDinner = [
    "Front-load protein at breakfast and lunch.",
    "Keep carbs lower earlier in the day if dinner is late.",
    "Walk for 10 minutes after lunch to stabilize energy.",
];

const duringDinner = [
    "Start with water and a protein-forward dish.",
    "Order vegetables first and keep sauces on the side.",
    "Stop at 80 percent full if sleep is already short.",
];

const afterDinner = [
    "Walk for 10 minutes to reduce glucose spikes.",
    "Cut caffeine after 2 p.m. to protect sleep.",
    "Keep screens dim and finish food 2 hours before bed if possible.",
];

const nextMorning = [
    "Keep the same wake time and get bright light early.",
    "Use a protein-first breakfast and hydrate.",
    "Choose a low-intensity walk if sleep was short.",
];

export default function LateDinnerDamageControlPage() {
    return (
        <div className="pt-24">
            <Section className="bg-muted/10">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Protocols
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Late Dinner Damage Control
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Client dinners and late nights happen. This protocol reduces the metabolic cost of eating late
                        while keeping the next day on track.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Trigger</p>
                            <p className="text-sm text-foreground">Dinner after 8 p.m. or a long social meal.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Minimize sleep disruption and glucose spikes.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Reset</p>
                            <p className="text-sm text-foreground">Back to normal within 24 hours.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Before dinner</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {beforeDinner.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">During dinner</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {duringDinner.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">After dinner</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {afterDinner.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Next morning reset</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {nextMorning.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a nutrition strategy for client-heavy weeks?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build meal defaults that fit your social calendar without losing momentum.
                            </p>
                            <Link
                                href="/reset"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book 15-Min Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

