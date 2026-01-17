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
        question: "Who is Elite Health OS for?",
        answer: "Founders and executives who want stable energy, better body composition, and a system that survives chaotic weeks.",
    },
    {
        question: "How much time does the system require each week?",
        answer: "Most clients average 3-4 hours per week including training, planning, and recovery. We build the plan around your calendar.",
    },
    {
        question: "Do I need to track calories or macros?",
        answer: "No. We use short tracking bursts to diagnose bottlenecks, then shift to simple standards and defaults.",
    },
    {
        question: "How do you handle travel and unpredictable schedules?",
        answer: "We install travel defaults, weekend guardrails, and minimum effective dose standards that keep you moving forward.",
    },
    {
        question: "What happens in the first 30-90 days?",
        answer: "We stabilize energy, remove the primary constraint, and build a repeatable operating system that compounds results.",
    },
    {
        question: "Is this medical advice?",
        answer: "No. We provide performance education and protocols. Always consult your clinician for diagnosis or treatment.",
    },
    {
        question: "Do you use biomarkers and labs?",
        answer: "Yes. When useful, we use labs to guide decisions and validate progress with objective markers.",
    },
    {
        question: "What if I already train 3-4 times per week?",
        answer: "We focus on recovery, nutrition structure, and system design so your training actually produces results.",
    },
    {
        question: "Can you work around injuries or limitations?",
        answer: "Yes. Training is joint-smart and built to protect long-term momentum.",
    },
    {
        question: "What is the first step?",
        answer: "Book 15-Min Audit. We review your schedule, goals, and constraints and decide if the system is a fit.",
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
                                Book 15-Min Audit to map your bottleneck and next 90-day plan.
                            </p>
                            <Button asChild className="h-11">
                                <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
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

