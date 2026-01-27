"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import clientResultsData from "../../src/content/clientResultsData";

const BOOKING_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A";

const filters = [
    { label: "All", value: "all" },
    { label: "Visible Fat Loss", value: "fatLoss" },
    { label: "Energy & Health", value: "energy" },
    { label: "Strength & Performance", value: "strength" },
    { label: "Burnout-Proof", value: "burnout" },
] as const;

const stats = [
    { label: "Average timeline", value: "10-16 weeks" },
    { label: "Primary focus", value: "Energy + waist" },
    { label: "Support cadence", value: "Weekly reviews" },
    { label: "Execution style", value: "Founder-grade defaults" },
];

const whyThisWorks = [
    "We diagnose the single constraint breaking consistency before adding complexity.",
    "We install defaults and guardrails so progress survives travel and chaos.",
    "We use weekly performance reviews to correct course fast.",
    "We optimize the minimum-effective dose so time stays protected.",
];

const faqs = [
    {
        question: "I have no time. Will this still work?",
        answer: "Yes. The system is built around defaults and minimum-effective actions. You get progress without perfect weeks.",
    },
    {
        question: "What if travel or weekends break my routine?",
        answer: "We install travel and weekend guardrails so the plan holds even when your calendar explodes.",
    },
    {
        question: "How is this different from a typical program?",
        answer: "Most plans add tasks. We remove friction, automate decisions, and review like a business operating rhythm.",
    },
    {
        question: "What results should I expect?",
        answer: "Most clients see a visible waist change, stable energy, and consistent training momentum in 90 days.",
    },
    {
        question: "What is the minimum commitment?",
        answer: "We ask for 90 days to install the OS and lock in measurable outcomes.",
    },
    {
        question: "What happens on the audit call?",
        answer: "We diagnose constraints, review metrics, and map a 90-day plan. No hard sell.",
    },
];

export default function ClientResultsPage() {
    const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]["value"]>("all");

    const cases = useMemo(() => {
        if (selectedFilter === "all") {
            return clientResultsData;
        }
        return clientResultsData.filter((item) => item.category === selectedFilter);
    }, [selectedFilter]);

    return (
        <div className="pt-24">
            <Section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <Badge variant="outline">Client Results</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Real founder outcomes, anonymized.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Each case study shows the constraint, the protocol changes, and the outcome. These are the results of installing the Elite Health OS.
                        </p>
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href={BOOKING_URL}>
                                Book a 15-minute audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="flex flex-wrap items-center gap-3 mb-8">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setSelectedFilter(filter.value)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                    selectedFilter === filter.value
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {cases.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-border bg-muted/10 p-6 space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">Before</p>
                                        <div className="overflow-hidden rounded-xl border border-border">
                                            <Image
                                                src={item.beforeImage}
                                                alt={`${item.displayName} before`}
                                                width={640}
                                                height={640}
                                                className="h-56 w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-xs uppercase tracking-wide text-muted-foreground">After</p>
                                        <div className="overflow-hidden rounded-xl border border-border">
                                            <Image
                                                src={item.afterImage}
                                                alt={`${item.displayName} after`}
                                                width={640}
                                                height={640}
                                                className="h-56 w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground">{item.displayName}</h3>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-foreground">Constraint</p>
                                    <p className="text-sm text-muted-foreground">{item.challenge}</p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-foreground">Protocol changes</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {item.changes.map((change) => (
                                            <li key={change} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                                                <span>{change}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-border bg-background/60 p-4">
                                    <p className="text-sm font-semibold text-foreground mb-2">Outcome summary</p>
                                    <p className="text-sm text-muted-foreground">{item.outcomeSummary}</p>
                                </div>

                                <Link href={BOOKING_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                                    Book a 15-minute audit <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container>
                    <div className="grid gap-6 md:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.label} className="rounded-2xl border border-border bg-background/70 p-5">
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</p>
                                <p className="text-xl font-bold text-foreground mt-2">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">Why this works</h2>
                            <div className="space-y-3">
                                {whyThisWorks.map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                        <p className="text-muted-foreground">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h3 className="text-xl font-bold text-foreground mb-3">Ready for your OS plan?</h3>
                            <p className="text-muted-foreground mb-5">
                                Book a 15-minute audit to map your 90-day roadmap and confirm fit.
                            </p>
                            <Button asChild className="w-full h-12">
                                <Link href={BOOKING_URL}>Book 15-minute audit</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">FAQ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="rounded-2xl border border-border bg-background/70 p-6 space-y-3">
                                <p className="text-lg font-semibold text-foreground">{faq.question}</p>
                                <p className="text-sm text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-3xl text-center">
                    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10 space-y-5">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Install your Elite Health OS</h2>
                        <p className="text-muted-foreground">
                            We diagnose constraints, install guardrails, and give you a 90-day plan you can execute immediately.
                        </p>
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href={BOOKING_URL}>
                                Book a 15-minute audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Results vary. Case studies are anonymized and reflect individual outcomes.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
