import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FAQAccordion, FAQItem } from "@/components/ui/faq-accordion";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ | Elite Health OS",
    description: "Answers to common questions about Elite Health OS, our protocols, and how we help founders stay consistent.",
    alternates: {
        canonical: "https://www.elitehealth.io/faq",
    },
    openGraph: {
        title: "FAQ | Elite Health OS",
        description: "Answers to common questions about Elite Health OS, our protocols, and how we help founders stay consistent.",
        url: "https://www.elitehealth.io/faq",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ | Elite Health OS",
        description: "Answers to common questions about Elite Health OS, our protocols, and how we help founders stay consistent.",
    },
};

const faqs: FAQItem[] = [
    {
        question: "I don't have time. Will this still work?",
        answer: "Yes. The system reduces decisions and installs defaults, so you stay consistent even when your week explodes.",
    },
    {
        question: "What if travel or weekends are my weak points?",
        answer: "We build travel defaults and weekend guardrails so your schedule stops dictating your results.",
    },
    {
        question: "Do I need to track everything forever?",
        answer: "No. We use short tracking bursts to diagnose bottlenecks, then shift to simple standards and defaults.",
    },
    {
        question: "How is this different from a typical fitness program?",
        answer: "Most programs demand more time and effort. We build a system that adapts to your calendar and removes friction.",
    },
    {
        question: "What if an old injury flares up?",
        answer: "Training is joint-smart and progressive. The goal is momentum without flare-ups or setbacks.",
    },
];

export default function FAQPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    return (
        <div className="flex flex-col">
            <Section className="pb-10 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                            FAQ
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Answers for founders who want leverage.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            If your schedule is packed and your energy is inconsistent, these answers show how the system
                            works and what to expect.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="grid gap-8 lg:grid-cols-[1.4fr,0.6fr]">
                    <FAQAccordion items={faqs} className="animate-in fade-in slide-in-from-bottom-4 duration-500" />

                    <div className="space-y-6">
                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-2">What to expect</h3>
                            <p className="text-sm text-muted-foreground">
                                We focus on the single constraint that is breaking your consistency, then install a system
                                that fits your calendar and travel load.
                            </p>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-2">Best fit for you if</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>- You want a repeatable system, not a short-term sprint.</li>
                                <li>- You value biomarkers, performance data, and execution rules.</li>
                                <li>- You are ready to protect recovery and sleep anchors.</li>
                            </ul>
                        </Card>

                        <Card className="p-6">
                            <h3 className="text-xl font-semibold text-foreground mb-2">Next step</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Schedule your 15-minute audit and leave with a personalised 90-day roadmap - no fluff, no pressure.
                            </p>
                            <Button asChild className="h-11">
                                <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site">
                                    Book 15-Min Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </Card>
                    </div>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}

