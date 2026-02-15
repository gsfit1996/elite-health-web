import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "The 3-Rule Consistency System | Elite Health OS",
    description: "A simple operating system that keeps progress steady even in chaos.",
};

const rules = [
    {
        title: "Protein floor",
        standard: "3 protein-forward meals per day.",
        why: "Locks in recovery and appetite control even when the day is busy.",
        fallback: "If the day is chaotic, hit one high-protein meal and one shake.",
    },
    {
        title: "Sleep anchor",
        standard: "Fixed wake time with 7+ hours in bed.",
        why: "Stabilizes energy, cravings, and training readiness.",
        fallback: "If you sleep late, keep the wake time and cut caffeine after 2 p.m.",
    },
    {
        title: "Movement minimum",
        standard: "8,000 steps or a 25-minute walk.",
        why: "Keeps glucose control and stress output in check.",
        fallback: "If travel blocks steps, do 10 minutes of mobility and 10 minutes of stairs.",
    },
];

const rampPlan = [
    {
        title: "Week 1: Baseline audit",
        focus: "Track without changing anything yet.",
        actions: [
            "Record sleep, protein, and movement for 7 days.",
            "Circle the rule you miss most often.",
            "Identify the one bottleneck (travel, late nights, meetings).",
        ],
    },
    {
        title: "Week 2: Lock the first rule",
        focus: "Build one non-negotiable into your day.",
        actions: [
            "Choose the rule with the biggest payoff.",
            "Create a default routine (same time, same trigger).",
            "Remove one friction point that blocks it.",
        ],
    },
    {
        title: "Week 3: Add rule two",
        focus: "Stack the second rule on top of the first.",
        actions: [
            "Use the same trigger windows as rule one.",
            "Add a simple cue: calendar block or alarm.",
            "Protect it with a 10-minute buffer.",
        ],
    },
];

const scorecard = [
    { label: "Protein floor", target: "3 hits per day" },
    { label: "Sleep anchor", target: "5+ nights per week" },
    { label: "Movement minimum", target: "6 days per week" },
];

export default function ThreeRuleConsistencySystemPage() {
    return (
        <div className="pt-24">
            <Section background="muted">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Resources
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        The 3-Rule Consistency System
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Most plans fail because they demand too much at once. This system keeps you moving forward by
                        enforcing three rules that drive the majority of results without overwhelming your calendar.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Setup Time</p>
                            <p className="text-sm text-foreground">45 minutes to define rules and defaults.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Cadence</p>
                            <p className="text-sm text-foreground">Weekly scorecard review, monthly adjustments.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Outcome</p>
                            <p className="text-sm text-foreground">Stable energy and body composition momentum.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">The rules that run the system</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {rules.map((rule) => (
                                    <div key={rule.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{rule.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            <span className="font-semibold text-foreground">Standard: </span>
                                            {rule.standard}
                                        </p>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            <span className="font-semibold text-foreground">Why it matters: </span>
                                            {rule.why}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            <span className="font-semibold text-foreground">Fallback: </span>
                                            {rule.fallback}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">3-week ramp plan</h2>
                            <div className="space-y-4">
                                {rampPlan.map((week) => (
                                    <div key={week.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                            <h3 className="text-lg font-semibold text-foreground">{week.title}</h3>
                                            <span className="text-sm text-muted-foreground">{week.focus}</span>
                                        </div>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {week.actions.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Weekly scorecard</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {scorecard.map((item) => (
                                    <div key={item.label} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.label}</h3>
                                        <p className="text-sm text-muted-foreground">{item.target}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-4">
                                If you hit 2 of 3 rules consistently, you keep momentum. If you miss 2 rules, fix the
                                root cause before adding anything new.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Travel and chaos protocol</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                <li>Pre-plan your first meal and last meal of the day.</li>
                                <li>Block a 20-minute walk between meetings or flights.</li>
                                <li>Keep caffeine to the morning if sleep is already compressed.</li>
                                <li>Use the fallback rules, then reset within 24 hours.</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want this system built for your calendar?</h2>
                            <p className="text-muted-foreground mb-5">
                                We define your three rules, build defaults, and remove the bottleneck that breaks consistency.
                            </p>
                            <Link
                                href="/performance-reset?ref=site"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book 15-Min Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            This guide is educational and not medical advice. Work with a licensed clinician for diagnosis,
                            treatment, or medication decisions.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
}


