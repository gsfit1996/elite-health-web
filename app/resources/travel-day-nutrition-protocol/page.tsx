import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Travel Day Nutrition Protocol | Elite Health OS",
    description: "Stay consistent through airports, hotels, and client dinners.",
};

const travelPhases = [
    {
        title: "The night before",
        items: [
            "Eat a protein-forward dinner and hydrate early.",
            "Pack two protein snacks and one fiber snack.",
            "Set a wake time that protects sleep, not just the flight.",
        ],
    },
    {
        title: "Travel morning",
        items: [
            "Start with a protein meal before leaving.",
            "Coffee only after food, not before.",
            "Carry a full water bottle and sip consistently.",
        ],
    },
    {
        title: "In transit",
        items: [
            "Order double protein and vegetables at the airport.",
            "Skip sugary drinks and keep alcohol for later.",
            "Walk the terminal every hour if you can.",
        ],
    },
    {
        title: "Arrival",
        items: [
            "Walk for 10-15 minutes to reset your energy.",
            "Keep dinner light and protein-forward.",
            "Set a local sleep time to avoid a late night spiral.",
        ],
    },
];

const packingList = [
    "Ready-to-drink protein shake",
    "Protein bars or jerky",
    "Mixed nuts or roasted chickpeas",
    "Electrolyte packet",
];

const orderingRules = [
    "Order protein first, then build the meal around it.",
    "Ask for sauces on the side and skip sugary glazes.",
    "Choose one carb source, not two.",
    "If breakfast is the only option, add extra eggs or yogurt.",
];

export default function TravelDayNutritionProtocolPage() {
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
                        Travel Day Nutrition Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Travel days can undo a week of progress. This protocol keeps energy steady and reduces the
                        rebound that usually follows flights, late meetings, and hotel food.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Stay consistent without overthinking.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Focus</p>
                            <p className="text-sm text-foreground">Protein, hydration, and light movement.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Time</p>
                            <p className="text-sm text-foreground">One travel day plan, repeatable.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Phase-by-phase plan</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {travelPhases.map((phase) => (
                                    <div key={phase.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">{phase.title}</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {phase.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Pack list</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {packingList.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Ordering rules</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {orderingRules.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a travel plan tailored to your routes?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build travel defaults that match your flight times and hotel options.
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

