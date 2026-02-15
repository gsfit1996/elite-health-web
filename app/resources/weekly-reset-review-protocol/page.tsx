import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Weekly Reset Review Protocol | Elite Health OS",
    description: "A 25-minute review that locks priorities and removes friction.",
};

const agenda = [
    {
        title: "Scorecard and wins",
        time: "5 min",
        items: [
            "Pick one win to repeat next week.",
            "Pick one miss to fix, not blame.",
            "Circle the one rule that slipped the most.",
        ],
    },
    {
        title: "Metrics scan",
        time: "5 min",
        items: [
            "Sleep nights at 7+ hours.",
            "Protein hits per day.",
            "Training sessions completed.",
            "Average steps or walks.",
        ],
    },
    {
        title: "Calendar pressure check",
        time: "5 min",
        items: [
            "Mark travel days, late dinners, and early mornings.",
            "Pre-plan the hardest day of the week.",
            "Decide the two days you will protect most.",
        ],
    },
    {
        title: "Lock the anchors",
        time: "5 min",
        items: [
            "Block training sessions before meetings.",
            "Set a fixed wake time for weekdays.",
            "Choose your default breakfast window.",
        ],
    },
    {
        title: "Remove one friction point",
        time: "5 min",
        items: [
            "Prep one high-protein meal.",
            "Move one late meeting or decline it.",
            "Schedule a 20-minute walk on the busiest day.",
        ],
    },
];

const scorecard = [
    { label: "Sleep anchor", target: "5+ nights at 7+ hours" },
    { label: "Protein floor", target: "3 protein meals per day" },
    { label: "Movement minimum", target: "6 days of 8,000 steps" },
    { label: "Training", target: "2-3 strength sessions" },
];

const decisionRules = [
    "If two or more rules are missed, remove one commitment before adding anything new.",
    "If travel is stacked, switch to minimum standards and keep sleep consistent.",
    "If weight or energy is trending down, increase protein before adding training volume.",
    "If stress is high, reduce intensity for one week, not volume.",
];

const anchors = [
    {
        title: "Sleep anchor",
        detail: "Fixed wake time, even after late nights.",
    },
    {
        title: "Fuel anchor",
        detail: "First meal within 90 minutes of wake on weekdays.",
    },
    {
        title: "Movement anchor",
        detail: "A 20-minute walk scheduled on the busiest day.",
    },
];

export default function WeeklyResetReviewProtocolPage() {
    return (
        <div className="pt-24">
            <Section background="muted">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Protocols
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Weekly Reset Review Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        High performers do not need more data. They need a short, repeatable review that turns noise into
                        decisions. This 25-minute protocol keeps your week aligned with your health priorities.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Time</p>
                            <p className="text-sm text-foreground">25 minutes, once per week.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Input</p>
                            <p className="text-sm text-foreground">Calendar, sleep, and training notes.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Output</p>
                            <p className="text-sm text-foreground">Three anchors and one friction removal.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Weekly reset agenda</h2>
                            <div className="space-y-4">
                                {agenda.map((block) => (
                                    <div key={block.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                            <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
                                            <span className="text-sm text-muted-foreground">{block.time}</span>
                                        </div>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {block.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Scorecard</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {scorecard.map((item) => (
                                    <div key={item.label} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                                        <p className="text-sm text-muted-foreground">{item.target}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Decision rules</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {decisionRules.map((rule) => (
                                    <li key={rule}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Anchors to lock every week</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {anchors.map((anchor) => (
                                    <div key={anchor.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{anchor.title}</h3>
                                        <p className="text-sm text-muted-foreground">{anchor.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Need help building your weekly review?</h2>
                            <p className="text-muted-foreground mb-5">
                                We set your scorecard, build the calendar anchors, and remove the biggest friction point.
                            </p>
                            <Link
                                href="/performance-reset?ref=site"
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


