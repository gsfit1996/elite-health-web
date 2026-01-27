"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Check } from "lucide-react";

const proofPoints = [
    "Former elite athlete: 4x Connacht boxing champion",
    "4:32 mile (All-Irelands)",
    "Ranked #1 all-time in Irish powerlifting U90kg",
    "Competition bests: 305kg squat / 192.5kg bench / 315kg deadlift",
    "Coached and mentored by world-class leaders in peak performance (Flow research), nutrition, training, and hormone optimisation (e.g., Stan Efferding, Ben Pollock)",
];

export function AboutGareth() {
    return (
        <Section className="bg-muted/10">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
                    <div className="space-y-6">
                        <Badge variant="outline">About</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading">
                            Meet Gareth Small - Founder & Head Coach of Elite Health OS
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            I help high-performing founders and executives build a leaner body, steadier energy, and sharper focus - without adding time to their calendar.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            For over a decade, I have guided hundreds of high-performing men to peak physical condition and mental performance - and helped them sustain it.
                            Elite Health OS is built for busy schedules, travel, and real life: minimum time, maximum return.
                        </p>
                        <div className="space-y-3">
                            {proofPoints.map((point) => (
                                <div key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                                        <Check className="h-3.5 w-3.5 text-primary" />
                                    </span>
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            If you want a clear, personalised roadmap you can rely on - at work and at home - start with a 15-minute Performance Audit.
                        </p>
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                Book 15-Minute Performance Audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { src: "/about/gareth-portrait.jpg", alt: "Gareth Small outdoors portrait" },
                            { src: "/about/gareth-working.jpg", alt: "Gareth Small working at a desk" },
                            { src: "/about/gareth-physique.jpg", alt: "Gareth Small physique photo" },
                            { src: "/about/gareth-powerlifting.jpg", alt: "Gareth Small competing in powerlifting" },
                        ].map((image, index) => (
                            <div
                                key={image.src}
                                className={`overflow-hidden rounded-2xl border border-border/60 bg-background/60 shadow-[0_18px_40px_rgba(2,6,23,0.4)] ${
                                    index === 0 ? "sm:translate-y-4" : ""
                                }`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={900}
                                    height={900}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
