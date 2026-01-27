import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "The science behind MED Weeks | Elite Health OS",
    description: "Why minimum-effective-dose weeks protect momentum when founders get slammed.",
};

const triggers = [
    "Two or more late nights in a week.",
    "Travel days stacked back to back.",
    "High meeting volume and low sleep for 3+ days.",
    "Energy crashing by late afternoon.",
];

const medWeekTemplate = [
    "2 strength sessions, 30-40 minutes each.",
    "Two 20-minute walks on workdays.",
    "Protein-first meals and a simple carb window.",
    "Fixed wake time and caffeine cutoff.",
];

const whyItWorks = [
    "Keeps the habit loop active even when time is scarce.",
    "Protects recovery so the next week can ramp back up.",
    "Reduces decision fatigue by narrowing the plan.",
];

export default function ScienceBehindMedWeeksPage() {
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
                        The science behind MED Weeks
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        MED Weeks keep momentum alive when your calendar explodes. They are the minimum dose that protects progress until life calms down.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">When to trigger a MED Week</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {triggers.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">MED Week template</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {medWeekTemplate.map((item) => (
                                    <div key={item} className="rounded-xl border border-border bg-muted/20 p-5 text-sm text-muted-foreground">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Why it works</h2>
                            <div className="space-y-2 text-muted-foreground">
                                {whyItWorks.map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a MED Week plan built for your calendar?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build minimum-effective-dose standards into your 90-day roadmap so progress never stalls.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Button asChild>
                                    <Link href="/how-it-works">
                                        Explore the program <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="ghost" className="text-muted-foreground">
                                    <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
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
