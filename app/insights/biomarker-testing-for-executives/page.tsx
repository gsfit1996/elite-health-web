import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Biomarker testing for executives | Elite Health OS",
    description: "The executive biomarker list, what matters most, and how to act on results.",
};

const priorityLabs = [
    {
        name: "ApoB + lipid panel",
        detail: "Tracks cardiometabolic risk and recovery capacity.",
    },
    {
        name: "HbA1c + fasting insulin",
        detail: "Shows glucose stability and energy predictability.",
    },
    {
        name: "hs-CRP",
        detail: "Flags systemic inflammation and recovery drag.",
    },
    {
        name: "Vitamin D + ferritin",
        detail: "Common performance limiters for busy, indoor schedules.",
    },
    {
        name: "Thyroid panel (TSH, Free T4)",
        detail: "Helpful when energy or weight shifts stall.",
    },
];

const actionSteps = [
    "Choose one bottleneck to fix first instead of chasing every number.",
    "Pair labs with simple behavior data: sleep hours, training load, and steps.",
    "Re-test after 10-12 weeks to confirm progress.",
];

const mistakes = [
    "Testing without a plan to act on the results.",
    "Overreacting to one outlier instead of trends.",
    "Changing five variables at once so you cannot learn what works.",
];

export default function BiomarkerTestingForExecutivesPage() {
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
                        Biomarker testing for executives
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Labs only help when they reduce guesswork and create clear priorities. This is the founder-grade shortlist.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Priority lab list</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {priorityLabs.map((lab) => (
                                    <div key={lab.name} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-2">{lab.name}</h3>
                                        <p className="text-sm text-muted-foreground">{lab.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">How to turn results into action</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {actionSteps.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Common mistakes to avoid</h2>
                            <div className="space-y-2 text-muted-foreground">
                                {mistakes.map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Need help interpreting your labs?</h2>
                            <p className="text-muted-foreground mb-5">
                                We translate labs into a 90-day roadmap with the minimum moves that drive the biggest change.
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
