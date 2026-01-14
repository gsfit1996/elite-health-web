"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Script from "next/script";

export default function ResetPage() {
    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <Badge variant="outline" className="mb-4">15-Minute Reset v2.0</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Book a <span className="text-primary">Consistency Audit</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            For founders/directors/executives who want a leaner waist, stable energy, and a system that survives chaos.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-4">What we do on the call:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Identify the one constraint breaking your consistency",
                                        "Set your first two non-negotiables",
                                        "Give you the 90-day outline (and whether it’s a fit)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
                                <div>
                                    <h4 className="font-bold text-foreground mb-3">Who it’s for:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Busy (40–70+ hrs/week)</li>
                                        <li>• Want measurable progress</li>
                                        <li>• Want low friction, not complexity</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-3">Who it’s NOT for:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>• Want extreme results with zero change</li>
                                        <li>• Refuse accountability</li>
                                        <li>• Want a bodybuilder prep</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/10 rounded-2xl border border-border p-4 flex items-center justify-center min-h-[700px] overflow-hidden">
                        <div
                            className="calendly-inline-widget w-full"
                            data-url="https://calendly.com/elitelevelcoaching-gareth/15-min-founder-performance-reset"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
