import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Hotel Gym Strength Protocol | Elite Health OS",
    description: "A 30-minute travel session that keeps strength moving.",
};

const rules = [
    "Keep two reps in reserve on most sets.",
    "Use slow, controlled tempo to protect joints.",
    "If time is short, reduce sets, not form.",
];

const sessionA = [
    "Goblet squat: 3 x 8-10",
    "Incline dumbbell press: 3 x 8-10",
    "Single-arm row: 3 x 10-12",
    "Glute bridge or hip thrust: 2 x 10-12",
    "Plank: 3 x 30-45 seconds",
];

const sessionB = [
    "Romanian deadlift: 3 x 8-10",
    "Standing dumbbell press: 3 x 8-10",
    "Lat pulldown or assisted pull-up: 3 x 8-12",
    "Split squat: 2 x 8-10 per side",
    "Farmer carry: 3 x 30-45 seconds",
];

const noGymOption = [
    "Push-ups: 3 x 10-20",
    "Split squats: 3 x 8-12 per side",
    "Backpack rows: 3 x 10-12",
    "Plank or hollow hold: 3 x 30 seconds",
];

export default function HotelGymStrengthProtocolPage() {
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
                        Hotel Gym Strength Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Travel should not pause strength. This protocol gives you two alternating 30-minute sessions that
                        work with basic hotel equipment and minimal setup.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Schedule</p>
                            <p className="text-sm text-foreground">2 sessions per week while traveling.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Time</p>
                            <p className="text-sm text-foreground">30 minutes per session.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Maintain strength and energy.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Execution rules</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {rules.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Session A</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {sessionA.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Session B</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {sessionB.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">No-gym fallback</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {noGymOption.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a travel-ready training plan?</h2>
                            <p className="text-muted-foreground mb-5">
                                We adapt your training to your hotels, equipment, and schedule.
                            </p>
                            <Link
                                href="https://calendar.app.google/5w7EofmxxhwkdaN1A"
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

