"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/ui/faq-accordion";

export function FAQ() {
    const faqs = [
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
            answer: "No. We use short tracking bursts to build automation, then shift to simple standards.",
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

    return (
        <Section>
            <Container className="max-w-3xl">
                <div className="text-center mb-10 space-y-4">
                    <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                        FAQ
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground">
                        Clear answers for founders who want leverage, not another plan to babysit.
                    </p>
                </div>
                <FAQAccordion items={faqs} />
            </Container>
        </Section>
    );
}
