import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Protein-First Meal Architecture | Elite Health OS",
    description: "A meal framework that stabilizes appetite and recovery.",
};

const targets = [
    "Daily protein target: bodyweight in pounds x 0.7 to 1.0 grams.",
    "Per meal target: 30 to 45 grams, three times per day.",
    "Protein-first rule: eat protein and vegetables before starches.",
];

const mealTemplate = [
    {
        title: "Protein",
        detail: "30-45 grams per meal from lean meat, fish, eggs, or dairy.",
    },
    {
        title: "Fiber",
        detail: "Two fists of vegetables or one high-fiber bowl.",
    },
    {
        title: "Carb window",
        detail: "Add carbs after training or at dinner if energy dips.",
    },
    {
        title: "Fat",
        detail: "1-2 thumb sizes of olive oil, avocado, or nuts.",
    },
];

const defaultMeals = [
    {
        title: "Breakfast defaults",
        items: [
            "Greek yogurt, berries, chia, and a whey scoop.",
            "Egg scramble with spinach and smoked salmon.",
            "Protein shake plus a piece of fruit.",
        ],
    },
    {
        title: "Lunch defaults",
        items: [
            "Chicken salad with olive oil and avocado.",
            "Sushi bowl with extra protein and light rice.",
            "Steak or salmon with vegetables and potatoes.",
        ],
    },
    {
        title: "Dinner defaults",
        items: [
            "Lean protein, double vegetables, and a small carb.",
            "Stir fry with extra protein and mixed vegetables.",
            "Grilled fish, salad, and a side of rice.",
        ],
    },
];

const busyDayFallbacks = [
    "Keep protein ready: cooked meat, yogurt, or a shake.",
    "If meetings stack, eat a protein snack every 3-4 hours.",
    "Order double protein and half the starch when dining out.",
];

export default function ProteinFirstMealArchitecturePage() {
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
                        Protein-First Meal Architecture
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Appetite, recovery, and body composition improve fast when protein is structured. This protocol
                        gives you a default meal framework that works on busy days, travel days, and normal weeks.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Focus</p>
                            <p className="text-sm text-foreground">Protein timing and meal structure.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Time</p>
                            <p className="text-sm text-foreground">Set once, repeat daily.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Outcome</p>
                            <p className="text-sm text-foreground">Stable energy and fewer cravings.</p>
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
                            <h2 className="text-2xl font-bold font-heading mb-4">Meal template</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {mealTemplate.map((item) => (
                                    <div key={item.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Default meals</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {defaultMeals.map((meal) => (
                                    <div key={meal.title} className="rounded-xl border border-border bg-background/60 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">{meal.title}</h3>
                                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2">
                                            {meal.items.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Busy day fallbacks</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {busyDayFallbacks.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a personalized nutrition plan?</h2>
                            <p className="text-muted-foreground mb-5">
                                We match your protein targets to your schedule and travel pattern.
                            </p>
                            <Link
                                href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site"
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

