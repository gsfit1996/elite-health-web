import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About Elite Health OS | Performance System for Founders",
    description: "Elite Health OS builds high-performance health systems for founders and executives who cannot rely on perfect weeks.",
    alternates: {
        canonical: "https://www.elitehealth.io/about",
    },
    openGraph: {
        title: "About Elite Health OS",
        description: "A performance system for founders who need consistency, not perfection.",
        url: "https://www.elitehealth.io/about",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Elite Health OS",
        description: "A performance system for founders who need consistency, not perfection.",
    },
};

const values = [
    { title: "Radical Truth", desc: "We deal in signals and outcomes, not excuses." },
    { title: "Execution First", desc: "If it is not repeatable in a founder schedule, it does not ship." },
    { title: "Minimal Friction", desc: "We remove decisions so you can win even when the week breaks." },
    { title: "Precision Feedback", desc: "We use biomarkers and performance data to course-correct fast." },
];

const pillars = [
    {
        title: "Diagnose",
        desc: "Find the single constraint that is breaking your consistency.",
    },
    {
        title: "Design",
        desc: "Build a plan around your calendar, travel load, and sleep reality.",
    },
    {
        title: "Execute",
        desc: "Install rules and defaults that run when willpower fades.",
    },
];

const audience = [
    "Founders and executives running high-stakes calendars.",
    "Leaders who want stable energy without obsessing over tracking.",
    "Operators who value leverage and repeatability over hacks.",
];

const notFor = [
    "People looking for quick fixes without behavior change.",
    "Anyone who wants a bodybuilding prep approach.",
    "Those unwilling to protect sleep and recovery basics.",
];

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Elite Health OS",
        url: "https://www.elitehealth.io/about",
        about: {
            "@type": "Organization",
            name: "Elite Health OS",
            url: "https://www.elitehealth.io",
        },
    };

    return (
        <div className="flex flex-col">
            <Section className="pb-10 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                            About Elite Health OS
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            A performance system built for real founder constraints.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Elite Health OS turns inconsistent health into an operating system. No perfect weeks. No
                            guilt. Just reliable energy, measurable progress, and rules that survive chaos.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">Why we exist</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Traditional fitness advice assumes stable schedules, perfect sleep, and endless time. That
                                does not exist for founders. We built a system that adapts to travel, stress, and broken
                                weeks while still moving the needle.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our focus is consistency. When the plan fits your calendar, you get leaner, stronger, and
                                sharper without burning out.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {pillars.map((pillar) => (
                                <Card key={pillar.title} className="p-5 bg-muted/10 border-border/60">
                                    <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground">{pillar.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/5">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-heading">Who this is for</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                {audience.map((item) => (
                                    <li key={item}>- {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-heading">Who this is not for</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                {notFor.map((item) => (
                                    <li key={item}>- {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Operating principles</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We run the same playbook we install for clients: reduce friction, measure what matters, and
                            build repeatable wins.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value) => (
                            <Card key={value.title} className="p-6 bg-background border-border/60">
                                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.desc}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="text-center">
                    <h2 className="text-3xl font-bold font-heading mb-6">Ready for a plan that fits your calendar?</h2>
                    <Button size="lg" className="h-14 px-8 text-lg" asChild>
                        <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                            Book Your 15-Min Audit <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}

