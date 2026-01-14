import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Glucose Stability Protocol | Elite Health OS",
    description: "Reduce spikes and improve insulin sensitivity fast.",
};

const targets = [
    "Fasting glucose: 75-95 mg/dL",
    "Fasting insulin: 2-8 uIU/mL",
    "HbA1c: 5.0-5.4 percent",
];

const levers = [
    {
        title: "Meal order",
        detail: "Eat protein and vegetables first, then starches and sweets.",
    },
    {
        title: "Post-meal movement",
        detail: "Walk 10 minutes after meals to blunt glucose spikes.",
    },
    {
        title: "Carb timing",
        detail: "Keep most carbs in the meal after training or at dinner.",
    },
    {
        title: "Sleep consistency",
        detail: "Short sleep raises glucose the next day. Protect the anchor.",
    },
];

const resetPlan = [
    {
        title: "Week 1: Stabilize inputs",
        items: [
            "Protein-first meals at breakfast, lunch, and dinner.",
            "10-minute walk after lunch and dinner.",
            "No liquid calories and no late-night snacking.",
        ],
    },
    {
        title: "Week 2: Increase sensitivity",
        items: [
            "Add 2-3 strength sessions with moderate intensity.",
            "Keep carbs in a single meal window.",
            "Target 7 hours of sleep at least 5 nights.",
        ],
    },
];

const triggers = [
    "Fasting glucose above 100 mg/dL for 2 weeks.",
    "HbA1c rising quarter over quarter.",
    "Post-meal crash or strong afternoon cravings.",
];

export default function GlucoseStabilityProtocolPage() {
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
                        Glucose Stability Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This protocol targets glucose spikes and early insulin resistance without extreme dieting. Use it
                        if you feel afternoon crashes, stubborn fat gain, or rising fasting glucose.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Timeline</p>
                            <p className="text-sm text-foreground">14 days to see measurable change.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Focus</p>
                            <p className="text-sm text-foreground">Meal order, movement, sleep.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Output</p>
                            <p className="text-sm text-foreground">Lower spikes and steadier energy.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Targets</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {targets.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Key levers</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {levers.map((lever) => (
                                    <div key={lever.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{lever.title}</h3>
                                        <p className="text-sm text-muted-foreground">{lever.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">2-week reset plan</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {resetPlan.map((week) => (
                                    <div key={week.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">{week.title}</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {week.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">When to run this protocol</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {triggers.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want glucose targets tailored to your labs?</h2>
                            <p className="text-muted-foreground mb-5">
                                We translate your markers into a clear plan with minimal friction.
                            </p>
                            <Link
                                href="/reset"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book a Consistency Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
