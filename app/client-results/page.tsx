"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import clientResultsData from "../../src/content/clientResultsData";

const BOOKING_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A";

const filters = [
    { label: "All", value: "all" },
    { label: "Visible Fat Loss", value: "fatLoss" },
    { label: "Energy & Health", value: "energy" },
    { label: "Strength & Performance", value: "strength" },
    { label: "Burnout-Proof", value: "burnout" },
] as const;

const stats = [
    {
        label: "Clients supported (10+ years)",
        value: "752",
    },
    {
        label: "90-day client success rate",
        value: "82%",
        subtext: "Achieved their agreed goal in 90 days",
    },
    {
        label: "Average body fat reduction (90 days)",
        value: "8%",
        subtext: "Average decrease in body fat % over 90 days",
    },
    {
        label: "Average testosterone increase",
        value: "+31%",
        subtext: "Via bloodwork optimisation protocols",
    },
];

const testimonials = [
    {
        name: "James O'Neill",
        role: "SaaS Founder",
        quote:
            "Dropped 8.1kg in 10 weeks without tracking calories. Waist -9cm, strength stayed up, and my 6pm energy went from 4/10 -> 8/10. Bloods improved too: hs-CRP 2.4 -> 0.9, fasting insulin 12.1 -> 6.4.",
    },
    {
        name: "Mark Donnelly",
        role: "Finance Director",
        quote:
            "I travel weekly and still leaned out. Body fat -6% in 12 weeks, BP 142/92 -> 124/78. The biggest win: I stopped crashing after lunch and got my focus back for afternoon meetings.",
    },
    {
        name: "Daniel Byrne",
        role: "Managing Director (Construction)",
        quote:
            "Elite Health OS gave me a system I could actually follow. Triglycerides 2.0 -> 1.1 mmol/L, HDL 0.95 -> 1.23, and my resting heart rate 74 -> 58. I'm calmer under pressure and sleeping through the night again.",
    },
    {
        name: "Tom Gallagher",
        role: "COO (Logistics)",
        quote:
            "I was stuck at 98kg for years. In 90 days I hit 89.5kg, waist -10cm, and I'm training 3x/week for 20 minutes. Bloodwork was the shocker: ALT 62 -> 28, fasting glucose 5.8 -> 5.1 mmol/L.",
    },
    {
        name: "Richard Keane",
        role: "Tech Founder",
        quote:
            "My brain felt foggy all day. Within 6 weeks my focus was back. Sleep efficiency improved, and my morning energy went from 5/10 -> 8/10. Labs: Vitamin D 21 -> 43 ng/mL, hs-CRP 1.8 -> 0.7.",
    },
    {
        name: "Andrew Walsh",
        role: "Sales Director",
        quote:
            "No fluff, just execution. In 8 weeks I lost 6.4kg, got visible abs for the first time in years, and my average steps went 4k -> 9k/day without thinking about it. The plan fits busy weeks.",
    },
    {
        name: "Ciaran O'Rourke",
        role: "CEO",
        quote:
            "I didn't want a bodybuilding plan - just performance. My HRV increased ~20%, resting HR dropped, and I stopped needing caffeine to function. Also leaned out: waist -7cm in 9 weeks.",
    },
    {
        name: "Peter Hughes",
        role: "Director (Legal)",
        quote:
            "I was borderline pre-diabetic and worried. In 12 weeks: HbA1c 5.9 -> 5.4%, fasting insulin 14.8 -> 7.2, and I dropped 7.8kg. Energy is stable all day and my cravings disappeared.",
    },
    {
        name: "Owen Murphy",
        role: "Founder (Agency)",
        quote:
            "I used to eat like an idiot during deadlines. The travel + chaos rules fixed that. LDL-C 3.6 -> 2.7 mmol/L, trigs 1.9 -> 1.0, and I'm down 5.5kg with better strength.",
    },
    {
        name: "Shane Kelly",
        role: "Operations Director",
        quote:
            "I'm 43 with kids - time is tight. Elite Health OS gave me a repeatable routine. In 90 days: body fat -5%, BP 138/88 -> 122/76, and I'm finally consistent with training again.",
    },
    {
        name: "Conor McMahon",
        role: "Executive Partner",
        quote:
            "Biggest benefit was mental clarity. I went from wired-and-tired to calm focus. Sleep latency improved, my afternoon slump vanished, and my labs moved: ApoB 106 -> 86 mg/dL.",
    },
    {
        name: "Matthew Nolan",
        role: "Founder (E-commerce)",
        quote:
            "I wanted measurable change. I got it: waist -11cm, 8.9kg down, and I'm not obsessed with food. Bloods: ALT 48 -> 25, hs-CRP 2.1 -> 0.8, and testosterone improved (total T 14.2 -> 18.6 nmol/L).",
    },
];

const whyThisWorks = [
    {
        title: "Pillar 1 - Nutrition (Fat loss + energy without misery)",
        description: "We build a nutrition system you can follow on busy weeks, so you drop fat, keep strength, and don't rebound.",
    },
    {
        title: "Pillar 2 - Training (15-30 minutes, built for results)",
        description: "Strength and conditioning programmed around your schedule, joints, and lifestyle - minimum time, maximum return.",
    },
    {
        title: "Pillar 3 - Bloodwork + Longevity (optional but powerful)",
        description: "If needed, we use the essential markers to identify what's holding you back (energy, recovery, body comp) and build a smarter protocol.",
    },
    {
        title: "Pillar 4 - Accountability + Coaching",
        description: "Weekly reviews, fast adjustments, and support that removes guesswork and keeps you consistent when motivation dips.",
    },
];

const faqs = [
    {
        question: "What happens on the 15-minute audit?",
        answer: "We diagnose what's blocking your results, map a simple plan, and decide if Elite Health OS fits. No hard sell.",
    },
    {
        question: "Do I need to track calories/macros?",
        answer: "No. We use a structure that works without obsessive tracking.",
    },
    {
        question: "How much time do I need to train?",
        answer: "3 sessions per week, 15-30 minutes.",
    },
    {
        question: "What if I travel or have chaotic weeks?",
        answer: "That's the point. We build travel rules, fallback workouts, and guardrails so you stay consistent.",
    },
    {
        question: "Are results guaranteed?",
        answer: "Results vary by consistency and starting point. You'll leave the audit knowing exactly what you need to do to get momentum.",
    },
];

export default function ClientResultsPage() {
    const [selectedFilter, setSelectedFilter] = useState<(typeof filters)[number]["value"]>("all");
    const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setLightbox(null);
            }
        };

        if (lightbox) {
            window.addEventListener("keydown", handleKey);
        }

        return () => window.removeEventListener("keydown", handleKey);
    }, [lightbox]);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 8000);

        return () => window.clearInterval(timer);
    }, []);

    const cases = useMemo(() => {
        if (selectedFilter === "all") {
            return clientResultsData;
        }
        return clientResultsData.filter((item) => item.category === selectedFilter);
    }, [selectedFilter]);

    return (
        <div className="pt-24">
            <Section fullWidth className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                <Container className="relative z-10">
                    <div className="max-w-3xl space-y-6">
                        <Badge variant="outline">Client Results</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Client Results: Proof the Elite Health OS Works In Real Life
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Real transformations from busy men balancing work, travel, family and high pressure without calorie counting or living in the gym.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Photos and stories below are from real clients. Results vary based on consistency and starting point.
                        </p>
                        <div className="space-y-3">
                            <Button asChild className="h-12 px-6 text-base">
                                <Link href={BOOKING_URL}>
                                    Book Your 15-Minute Performance Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <p className="text-sm text-muted-foreground">
                                No hard sell. In 15 minutes you'll know (1) what's blocking your results and (2) whether Elite Health OS is the right fit.
                            </p>
                        </div>
                        <div className="grid gap-4 pt-6 md:grid-cols-2">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 via-background/70 to-background/90 p-5 shadow-[0_20px_50px_rgba(37,99,235,0.15)]"
                                >
                                    <p className="text-xs uppercase tracking-wide text-primary/70">{stat.label}</p>
                                    <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                                    {stat.subtext && (
                                        <p className="text-xs text-muted-foreground mt-2">{stat.subtext}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <Section fullWidth>
                <Container>
                    <div className="mb-6 space-y-2">
                        <p className="text-sm font-semibold text-foreground">Filter by outcome</p>
                        <p className="text-sm text-muted-foreground">Pick the transformation most relevant to you.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-10">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setSelectedFilter(filter.value)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                                    selectedFilter === filter.value
                                        ? "border-primary bg-primary/10 text-primary"
                                        : "border-border text-muted-foreground hover:text-foreground"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        {cases.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-border/60 bg-background/70 p-6 space-y-6 shadow-[0_18px_45px_rgba(2,6,23,0.35)]">
                                <div className="space-y-2">
                                    <button
                                        type="button"
                                        onClick={() => setLightbox({ src: item.beforeImage, alt: `${item.displayName} transformation` })}
                                        className="mx-auto w-full max-w-[400px] md:max-w-[440px] resultsCardImage border border-border/60"
                                    >
                                        <Image
                                            src={item.beforeImage}
                                            alt={`${item.displayName} transformation`}
                                            width={900}
                                            height={1200}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                                            className="h-full w-full"
                                        />
                                        <span className="sr-only">Tap to enlarge</span>
                                    </button>
                                    <p className="text-xs text-muted-foreground text-center">Tap to enlarge</p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-2xl font-bold text-foreground">{item.headline}</h3>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-foreground">Constraint</p>
                                    <div className="space-y-3 text-sm text-muted-foreground">
                                        {item.challenge.split("\n\n").map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    {item.callout && (
                                        <p className="text-xs text-muted-foreground italic">{item.callout}</p>
                                    )}
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm font-semibold text-foreground">Protocol changes</p>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {item.changes.map((change) => (
                                            <li key={change} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                                                <span>{change}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-border/60 bg-background/80 p-4">
                                    <p className="text-sm font-semibold text-foreground mb-2">Outcome line</p>
                                    <p className="text-sm text-muted-foreground font-semibold">{item.outcomeSummary}</p>
                                </div>

                                <Link href={BOOKING_URL} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80">
                                    Book Your 15-Minute Performance Audit <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section fullWidth className="bg-muted/10">
                <Container>
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="space-y-3 max-w-2xl">
                            <Badge variant="outline">Client Wins</Badge>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">More results from busy founders.</h2>
                            <p className="text-muted-foreground">
                                Real outcomes from leaders running high-pressure calendars, travel weeks, and tight time budgets.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() =>
                                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                                }
                                className="h-10 w-10 rounded-full border border-border/60 bg-background/80 text-foreground hover:border-primary/60"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft className="h-4 w-4 mx-auto" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                className="h-10 w-10 rounded-full border border-border/60 bg-background/80 text-foreground hover:border-primary/60"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight className="h-4 w-4 mx-auto" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-border/60 bg-background/70 shadow-[0_30px_70px_rgba(2,6,23,0.4)] overflow-hidden">
                        <div className="relative">
                            <div
                                className="flex transition-transform duration-700 ease-out"
                                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                            >
                                {testimonials.map((item) => {
                                    const initials = item.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("");
                                    return (
                                        <div key={item.name} className="w-full shrink-0 p-8 md:p-12">
                                            <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Client Testimonial</p>
                                            <p className="mt-4 text-lg md:text-2xl font-semibold text-foreground leading-relaxed">
                                                "{item.quote}"
                                            </p>
                                            <div className="mt-6 flex items-center gap-3">
                                                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                                                    {initials}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                                                    <p className="text-xs text-muted-foreground">{item.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setActiveTestimonial(index)}
                                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                                        index === activeTestimonial ? "bg-primary scale-110" : "bg-muted-foreground/40"
                                    }`}
                                    aria-label={`View testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <Link href={BOOKING_URL} className="text-sm font-semibold text-primary hover:text-primary/80">
                            Book Your 15-Minute Performance Audit
                        </Link>
                    </div>
                </Container>
            </Section>

            <Section fullWidth>
                <Container>
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">Why this works</h2>
                            <div className="space-y-4">
                                {whyThisWorks.map((item) => (
                                    <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-2">
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                                                <Check className="h-4 w-4 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-6">
                            <h3 className="text-xl font-bold text-foreground mb-3">Ready for your OS plan?</h3>
                            <p className="text-muted-foreground mb-5">
                                Book a 15-minute Performance Audit. You'll leave with your first bottleneck to fix and a clear path forward.
                            </p>
                            <Button asChild className="w-full h-12">
                                <Link href={BOOKING_URL}>Book Your 15-Minute Performance Audit</Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section fullWidth className="bg-muted/10">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">FAQ</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="rounded-2xl border border-border/60 bg-background/80 p-6 space-y-3">
                                <p className="text-lg font-semibold text-foreground">{faq.question}</p>
                                <p className="text-sm text-muted-foreground">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section fullWidth>
                <Container className="max-w-3xl text-center">
                    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10 space-y-5 shadow-[0_20px_50px_rgba(2,6,23,0.35)]">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">
                            Want results like this-without sacrificing your business or family life?
                        </h2>
                        <p className="text-muted-foreground">
                            Book a 15-minute Performance Audit. You'll leave with your first bottleneck to fix and a clear path forward.
                        </p>
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href={BOOKING_URL}>
                                Book Your 15-Minute Performance Audit <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            Results vary. All transformations shown required consistency and adherence.
                        </p>
                    </div>
                </Container>
            </Section>
            {lightbox && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-md p-6"
                    onClick={() => setLightbox(null)}
                >
                    <div className="relative max-w-3xl w-full" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            onClick={() => setLightbox(null)}
                            className="absolute -top-10 right-0 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground"
                        >
                            Close
                        </button>
                        <div className="resultsCardImage border border-border/60 bg-muted/20">
                            <Image
                                src={lightbox.src}
                                alt={lightbox.alt}
                                width={1200}
                                height={1500}
                                sizes="(max-width: 768px) 90vw, 900px"
                                className="h-full w-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
