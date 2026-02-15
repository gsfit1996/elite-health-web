import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Default Day Design Protocol | Elite Health OS",
    description: "Build a repeatable day template that protects health and output.",
};

const anchors = [
    {
        title: "Wake and light",
        detail: "Fixed wake time with 5-10 minutes of outdoor light.",
    },
    {
        title: "Protein window",
        detail: "First protein meal within 90 minutes of waking.",
    },
    {
        title: "Movement block",
        detail: "A 20-40 minute walk or training session.",
    },
    {
        title: "Shutdown cue",
        detail: "A repeatable end-of-day routine to protect sleep.",
    },
];

const designSteps = [
    "Pick your non-negotiable wake time and protect it 5 days per week.",
    "Choose your primary training time window and lock it on the calendar.",
    "Decide a default breakfast and default lunch so you do not negotiate daily.",
    "Block a 20-minute walk after your busiest meeting block.",
    "Set a hard stop for caffeine and screens to preserve sleep.",
];

const rules = [
    "Move no more than two anchors per week.",
    "If you miss a training session, do not add volume the next day.",
    "If sleep is short, lower training intensity, not movement.",
    "If a day is packed, keep protein and steps and let the rest flex.",
];

const templates = [
    {
        title: "Standard week template",
        items: [
            "Wake, water, light, protein breakfast.",
            "Deep work block before meetings.",
            "Midday walk or training.",
            "Protein-first lunch and stable afternoon energy.",
            "Shutdown cue 60 minutes before bed.",
        ],
    },
    {
        title: "Travel or late-night template",
        items: [
            "Keep wake time steady, shorten the day.",
            "Use a protein shake and a simple lunch.",
            "Walk for 20 minutes between flights or meetings.",
            "Reduce caffeine after midday.",
            "Protect sleep with a short wind-down.",
        ],
    },
];

export default function DefaultDayDesignProtocolPage() {
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
                        Default Day Design Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Your calendar decides your health. This protocol creates a default day that protects energy,
                        body composition, and output without adding extra time demands.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Setup Time</p>
                            <p className="text-sm text-foreground">60 minutes once, then adjust monthly.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Focus</p>
                            <p className="text-sm text-foreground">Anchors, defaults, and calendar protection.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Outcome</p>
                            <p className="text-sm text-foreground">Less decision fatigue and more consistency.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Core anchors</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {anchors.map((anchor) => (
                                    <div key={anchor.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{anchor.title}</h3>
                                        <p className="text-sm text-muted-foreground">{anchor.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Design steps</h2>
                            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                                {designSteps.map((step) => (
                                    <li key={step}>{step}</li>
                                ))}
                            </ol>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Rules that keep it working</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {rules.map((rule) => (
                                    <li key={rule}>{rule}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Template examples</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {templates.map((template) => (
                                    <div key={template.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">{template.title}</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {template.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a default day built for your calendar?</h2>
                            <p className="text-muted-foreground mb-5">
                                We align your anchors with your meetings and travel pattern so consistency is automatic.
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


