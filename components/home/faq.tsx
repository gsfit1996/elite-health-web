"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border">
            <button
                className="flex w-full items-center justify-between py-4 text-left font-medium text-foreground transition-all hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div
                className={`overflow-hidden text-sm text-muted-foreground transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"}`}
            >
                {answer}
            </div>
        </div>
    );
}

export function FAQ() {
    const faqs = [
        {
            q: "I don’t have time.",
            a: "You don’t need more time. You need fewer decisions. We install defaults + MED Week rules that work when time collapses."
        },
        {
            q: "I travel / weekends kill me.",
            a: "That’s the point. We build travel defaults and weekend guardrails. Weekends are planned, not hoped."
        },
        {
            q: "I can’t track forever.",
            a: "You won’t. We use short tracking bursts to create automation, then shift to simple standards."
        },
        {
            q: "I've tried everything before. Why is this different?",
            a: "Most programs ask for more time/effort. We ask for smarter systems. We align with your psychology and schedule, not against it."
        },
        {
            q: "What if my knee/back flares?",
            a: "We program joint-smart progression. The goal is momentum without flare-ups."
        }
    ];

    return (
        <Section>
            <Container className="max-w-2xl">
                <h2 className="text-3xl font-bold font-heading mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-2">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </Container>
        </Section>
    );
}
