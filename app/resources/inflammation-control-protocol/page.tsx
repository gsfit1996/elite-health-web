import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Inflammation Control Protocol | Elite Health OS",
    description: "Lower hs-CRP and speed up recovery with focused levers.",
};

const targets = [
    "hs-CRP: under 1.0 mg/L",
    "Resting heart rate: stable week to week",
    "Sleep: 7+ hours at least 5 nights per week",
];

const drivers = [
    "Short sleep and irregular bedtimes",
    "Alcohol and late-night heavy meals",
    "High stress with low recovery",
    "Unmanaged dental or sinus issues",
];

const sevenDayReset = [
    "No alcohol and no ultra-processed snacks.",
    "Protein-forward meals and 2 liters of water daily.",
    "20-30 minutes of zone 2 cardio 3 times.",
    "A consistent sleep window with a 60-minute wind-down.",
];

const fourWeekRebuild = [
    "Lift 2-3 times per week at moderate intensity.",
    "Add two omega-3 rich meals weekly.",
    "Walk 8,000 steps on most days.",
    "Keep one full rest day with light mobility.",
];

export default function InflammationControlProtocolPage() {
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
                        Inflammation Control Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Elevated inflammation blocks recovery, dulls energy, and slows fat loss. This protocol lowers
                        hs-CRP by removing the biggest inflammation triggers first.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Timeline</p>
                            <p className="text-sm text-foreground">7-day reset, 4-week rebuild.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Markers</p>
                            <p className="text-sm text-foreground">hs-CRP, resting heart rate, sleep.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Faster recovery and steadier energy.</p>
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
                            <h2 className="text-2xl font-bold font-heading mb-4">Common drivers</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {drivers.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">7-day reset</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {sevenDayReset.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">4-week rebuild</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {fourWeekRebuild.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want an inflammation plan tied to your labs?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build a focused protocol based on your hs-CRP and recovery markers.
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

