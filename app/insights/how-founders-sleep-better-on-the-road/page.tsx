import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "How founders can sleep better on the road | Elite Health OS",
    description: "Travel-friendly sleep anchors and recovery rules that keep founders sharp on the road.",
};

const travelAnchors = [
    "Keep the same wake time on travel days and the day after.",
    "Get 10 minutes of outdoor light within 30 minutes of waking.",
    "Move within the first hour: walk, stairs, or a short mobility block.",
    "Cut caffeine 8 hours before planned sleep.",
];

const hotelProtocol = [
    "Aim for a 20-30 minute wind down block.",
    "Keep dinner lighter: protein plus vegetables, fewer heavy carbs.",
    "Cool the room and dim screens 60 minutes before bed.",
    "If sleep is short, protect a 20-minute midday reset the next day.",
];

const flightRules = [
    "Hydrate early and avoid alcohol on flight days.",
    "Protein-first meal on landing to stabilize energy.",
    "Short walk after landing to reset circulation and light exposure.",
];

export default function SleepBetterOnTheRoadPage() {
    return (
        <div className="pt-24">
            <Section className="bg-muted/10">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Insights</Badge>
                        <Link href="/insights" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Insights
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        How founders can sleep better on the road
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Travel breaks sleep because it breaks your anchors. Fix the anchors and you protect energy without perfect conditions.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">The travel sleep anchors</h2>
                            <p className="text-muted-foreground mb-4">
                                Founders do not need a perfect hotel room. They need consistent inputs that keep the body clock stable.
                            </p>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {travelAnchors.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Hotel night protocol</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {hotelProtocol.map((item) => (
                                    <div key={item} className="rounded-xl border border-border bg-muted/20 p-5 text-sm text-muted-foreground">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Flight day rules</h2>
                            <div className="space-y-2 text-muted-foreground">
                                {flightRules.map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want this wired into your calendar?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build travel guardrails into your 90-day plan so momentum does not collapse when you are on the road.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild>
                                    <Link href="/how-it-works">
                                        Explore the program <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-muted-foreground">
                                    <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site">
                                        Book a 15-minute audit
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
