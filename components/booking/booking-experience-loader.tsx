"use client";

import dynamic from "next/dynamic";
import { BookingErrorBoundary } from "./booking-error-boundary";

const BookingExperience = dynamic(
    () => import("./booking-experience").then((mod) => mod.BookingExperience),
    {
        ssr: false,
        loading: () => <BookingExperienceSkeleton />,
    }
);

export function BookingExperienceLoader() {
    return (
        <BookingErrorBoundary>
            <BookingExperience />
        </BookingErrorBoundary>
    );
}

function BookingExperienceSkeleton() {
    return (
        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/15 p-6 md:p-8 min-h-[520px]">
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at top, rgba(46, 92, 255, 0.2), transparent 60%), linear-gradient(135deg, rgba(15, 17, 21, 0.8), rgba(5, 5, 7, 0.95))",
                }}
            />
            <div className="relative z-10 space-y-6 animate-pulse">
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/20" />
                    <div className="space-y-2">
                        <div className="h-3 w-32 rounded-full bg-muted/60" />
                        <div className="h-6 w-44 rounded-full bg-muted/80" />
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="h-4 w-full rounded-full bg-muted/60" />
                    <div className="h-4 w-5/6 rounded-full bg-muted/50" />
                </div>

                <div className="rounded-2xl border border-primary/20 bg-background/70 p-5">
                    <div className="h-12 w-full rounded-xl bg-primary/30" />
                    <div className="mt-3 h-3 w-40 mx-auto rounded-full bg-muted/50" />
                </div>

                <div className="space-y-3">
                    <div className="h-12 w-full rounded-xl bg-muted/50" />
                    <div className="h-12 w-full rounded-xl bg-muted/40" />
                    <div className="h-12 w-full rounded-xl bg-muted/30" />
                </div>
            </div>
        </div>
    );
}
