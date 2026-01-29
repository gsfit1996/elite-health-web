import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PerformanceResetFlow } from "@/components/booking/performance-reset-flow";

export const metadata: Metadata = {
    title: "Book 15-Min Performance Reset | Elite Health OS",
    description: "Apply for a 15-minute performance reset and schedule your audit without leaving Elite Health OS.",
    alternates: {
        canonical: "https://www.elitehealth.io/performance-reset",
    },
};

export default function PerformanceResetPage() {
    return (
        <Section className="pt-28 md:pt-36">
            <Container className="max-w-5xl">
                <Suspense
                    fallback={
                        <div className="rounded-3xl border border-border/60 bg-background/80 p-6 md:p-10 text-sm text-muted-foreground">
                            Loading application...
                        </div>
                    }
                >
                    <PerformanceResetFlow />
                </Suspense>
            </Container>
        </Section>
    );
}
