"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const DOWNLOAD_URL = "/downloads/founder-6pm-energy-checklist.txt";

export function LeadMagnet() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!email) return;
        setSubmitted(true);
        window.location.href = DOWNLOAD_URL;
    };

    return (
        <Section className="bg-muted/20">
            <Container className="max-w-3xl">
                <div className="rounded-2xl border border-border/60 bg-background/70 p-6 md:p-8 text-center space-y-4">
                    <Badge variant="outline" className="mx-auto">
                        Free checklist
                    </Badge>
                    <div className="flex justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <FileText className="h-5 w-5" />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">
                        Founders Quick-Start Guide to 6 PM Energy
                    </h2>
                    <p className="text-muted-foreground">
                        A simple, founder-friendly checklist to stabilize evening energy and protect output in under 15 minutes.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch justify-center">
                        <label className="sr-only" htmlFor="lead-email">Email</label>
                        <input
                            id="lead-email"
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                        />
                        <Button type="submit" className="h-12 px-6">
                            Get the checklist <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground">
                        No spam. We do not store your email. Download starts immediately.
                    </p>
                    {submitted && (
                        <p className="text-xs text-muted-foreground">
                            Download starting now.
                        </p>
                    )}
                </div>
            </Container>
        </Section>
    );
}
