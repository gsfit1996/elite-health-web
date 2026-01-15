"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const CALENDLY_URL = "https://calendly.com/elitelevelcoaching-gareth/15-min-founder-performance-reset";

export default function ResetError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <Section>
            <Container>
                <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-muted/20 p-8 md:p-10 text-center">
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <CalendarCheck className="h-6 w-6" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                        Calendar loading hiccup
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground mb-8">
                        If the scheduler didn’t load, open the calendar in a new tab or retry the page.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild className="h-12 px-6">
                            <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                Open Calendar
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" onClick={reset} className="h-12 px-6">
                            Try again
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
