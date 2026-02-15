import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "About Gareth Small | Elite Health OS",
    description: "Elite Health OS Founder Gareth Small helps high-performing founders and executives get leaner, boost energy, and sharpen focus with a time-efficient, data-driven health operating system.",
    alternates: {
        canonical: "https://www.elitehealth.io/about",
    },
    openGraph: {
        title: "About Gareth Small",
        description: "Founder & Head Coach of Elite Health OS.",
        url: "https://www.elitehealth.io/about",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Gareth Small",
        description: "Founder & Head Coach of Elite Health OS.",
    },
};

const proofPoints = [
    "Former elite athlete: 4x Connacht boxing champion",
    "4:32 mile (All-Irelands)",
    "Ranked #1 all-time in Irish powerlifting U90kg",
    "Competition bests: 305kg squat / 192.5kg bench / 315kg deadlift",
    "Worked with world-leading coaches across peak performance (Flow research), nutrition, training, and hormone optimisation (e.g., Stan Efferding, Ben Pollock)",
];

const executiveReasons = [
    {
        title: "Time-Constraint Design",
        desc: "Plans that match your schedule, travel, and food reality.",
    },
    {
        title: "Data-Driven Scorecards",
        desc: "We track what matters: body fat, strength, energy, sleep, and labs - baseline to 90-day retest.",
    },
    {
        title: "Time-Light Training",
        desc: "3 sessions per week, 15-35 minutes, home or gym - built for progress.",
    },
    {
        title: "Travel-Proof Nutrition",
        desc: "Default frameworks + restaurant picks, personalised to your lifestyle.",
    },
    {
        title: "Accountability Without Friction",
        desc: "Metric-led check-ins, clear weekly actions, and fast adjustments.",
    },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            <Section className="pb-12 pt-32 md:pt-48">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
                        <div className="space-y-6">
                            <Badge variant="secondary" className="px-4 py-1.5 text-sm">About Gareth Small</Badge>
                            <h1 className="text-4xl md:text-6xl font-bold font-heading">Founder & Head Coach, Elite Health OS</h1>
                            <p className="text-xl text-muted-foreground">
                                I help high-performing founders and executives build a leaner body, steadier energy, and sharper focus - without adding time to their calendar.
                            </p>
                            <Button size="lg" className="h-12 px-6 text-base" asChild>
                                <Link href="/performance-reset?ref=site">
                                    Book Your 15-Minute Performance Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { src: "/about/gareth-portrait.jpg", alt: "Gareth Small outdoors portrait" },
                                { src: "/about/gareth-powerlifting.jpg", alt: "Gareth Small competing in powerlifting" },
                            ].map((image, index) => (
                                <div
                                    key={image.src}
                                    className={`overflow-hidden rounded-2xl border border-border/60 bg-background/60 shadow-[0_18px_40px_rgba(2,6,23,0.4)] ${
                                        index === 1 ? "sm:translate-y-4" : ""
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

            <Section>
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">The short version</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                For over a decade, I have coached hundreds of successful men to achieve peak physical condition and mental performance - and keep it.
                                Elite Health OS exists because most health programs ignore your reality: intense work weeks, travel, stress, and a calendar that is already full.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                This is not "get shredded for summer." It is a precision health operating system you can run year-round.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading">Why you can trust me</h3>
                            <p className="text-muted-foreground">I am not guessing. I have lived high-performance - and built systems that hold up under pressure.</p>
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
                        </div>
                    </div>
                </Container>
            </Section>

            <Section background="muted">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-2 items-start">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold font-heading">Mission</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Provide high performers with the world's most effective health and performance system for optimal health, energy, and body composition change.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                We cut through the noise and give you a clear, personalised roadmap to a body - and an operating system - you can rely on at work and at home.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-6 space-y-3">
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elite Health OS</p>
                            <h3 className="text-2xl font-bold text-foreground">Built for real calendars</h3>
                            <p className="text-muted-foreground">
                                Busy weeks, travel, and stress are the baseline. The system is built to win anyway.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Why executives choose Elite Health OS</h2>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {executiveReasons.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-border/60 bg-background/80 p-6">
                                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="text-center">
                    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10 space-y-5 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to build your OS?</h2>
                        <p className="text-muted-foreground">
                            Book a 15-minute Performance Audit. You will leave with your #1 bottleneck to fix - and a clear path forward.
                        </p>
                        <Button size="lg" className="h-12 px-6 text-base" asChild>
                            <Link href="/performance-reset?ref=site">
                                Book Your 15-Minute Performance Audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

