"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function CTABlock() {
    return (
        <Section className="bg-primary/5 py-24">
            <Container className="text-center max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                    Ready to protect your body like you protect your business?
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                    Schedule your 15-minute audit and leave with a personalised 90-day roadmap - no fluff, no pressure. Just clarity.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-10">
                    {[
                        "Diagnose the constraints breaking consistency",
                        "Outline the 90-day roadmap",
                        "Decide whether Elite Health OS is a fit",
                        "Clear next steps you can execute immediately",
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <Check className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-foreground font-medium">{item}</span>
                        </div>
                    ))}
                </div>

                <Button size="lg" className="h-14 px-10 text-lg w-full md:w-auto" asChild>
                    <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                        Book 15-Min Audit <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                    No pressure. Just a clear plan.
                </p>
            </Container>
        </Section>
    );
}
