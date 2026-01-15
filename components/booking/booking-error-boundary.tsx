"use client";

import type { ReactNode } from "react";
import { Component } from "react";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const FALLBACK_URL = "https://calendly.com/elitelevelcoaching-gareth/15-min-founder-performance-reset";

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class BookingErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        console.error("BookingExperience error", error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/15 p-6 md:p-8 min-h-[520px]">
                    <div className="absolute inset-0 opacity-60" style={{
                        backgroundImage:
                            "radial-gradient(circle at top, rgba(46, 92, 255, 0.2), transparent 60%), linear-gradient(135deg, rgba(15, 17, 21, 0.8), rgba(5, 5, 7, 0.95))",
                    }} />
                    <div className="relative z-10 flex h-full flex-col items-center justify-center text-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                            <CalendarCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">Open your calendar</h3>
                            <p className="text-sm text-muted-foreground">
                                If the embedded calendar fails, use the direct booking link below.
                            </p>
                        </div>
                        <Button asChild className="h-12 px-6">
                            <Link href={FALLBACK_URL} target="_blank" rel="noopener noreferrer">
                                Book 15-Min Audit
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export { BookingErrorBoundary };
