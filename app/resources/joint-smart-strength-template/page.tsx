import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Joint-Smart Strength Template | Elite Health OS",
    description: "A founder-friendly strength plan that protects joints and energy.",
};

const principles = [
    "Train full body 3x per week to maximize return per session.",
    "Prioritize joint-friendly ranges and controlled tempo.",
    "Keep two reps in reserve on most sets to avoid burnout.",
    "Anchor each session with one push, one pull, one hinge or squat.",
];

const trainingDays = [
    {
        title: "Day A: Strength base",
        exercises: [
            "Trap bar deadlift or Romanian deadlift: 3 x 5-8",
            "Incline dumbbell press: 3 x 6-10",
            "Chest-supported row: 3 x 8-12",
            "Split squat or step-up: 2 x 8-10",
            "Farmer carry: 3 x 30-45 seconds",
        ],
    },
    {
        title: "Day B: Power and posture",
        exercises: [
            "Goblet squat: 3 x 6-10",
            "Half-kneeling landmine press: 3 x 8-10",
            "Lat pulldown or pull-up assist: 3 x 8-12",
            "Hip thrust: 3 x 8-12",
            "Core: dead bug or side plank: 3 x 30-45 seconds",
        ],
    },
    {
        title: "Day C: Volume and balance",
        exercises: [
            "Leg press or front squat: 3 x 8-12",
            "Push-up or machine chest press: 3 x 8-12",
            "Single-arm row: 3 x 8-12",
            "Hamstring curl: 2 x 10-12",
            "Loaded carry or sled push: 4 x 20-30 meters",
        ],
    },
];

const warmup = [
    "2 minutes of easy bike or treadmill.",
    "Hip and thoracic mobility (5 reps each direction).",
    "2 ramp sets of your first lift at lighter weight.",
];

const progression = [
    "Add 1 rep per set until you hit the top of the range.",
    "Then add 2.5-5 lb and restart at the low end.",
    "If fatigue is high, keep weight and reduce one set.",
];

const travelOptions = [
    "Hotel gym: use dumbbells and cables with the same pattern.",
    "No gym: 3 rounds of push-ups, split squats, rows with a bag, and planks.",
    "Only 20 minutes: 2 main lifts, 3 sets each, move fast with good form.",
];

export default function JointSmartStrengthTemplatePage() {
    return (
        <div className="pt-24">
            <Section background="muted">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Resources
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Joint-Smart Strength Template
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This template builds strength without wrecking your joints or your schedule. It is designed for
                        founders who want performance without the recovery cost of high-volume programs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Schedule</p>
                            <p className="text-sm text-foreground">3 sessions per week, 45 minutes each.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Intensity</p>
                            <p className="text-sm text-foreground">Moderate, leave 2 reps in reserve.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Strength, posture, and joint resilience.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Core principles</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {principles.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Weekly template</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {trainingDays.map((day) => (
                                    <div key={day.title} className="rounded-xl border border-border bg-muted/20 p-5">
                                        <h3 className="text-lg font-semibold text-foreground mb-3">{day.title}</h3>
                                        <ul className="text-sm text-muted-foreground space-y-2">
                                            {day.exercises.map((exercise) => (
                                                <li key={exercise}>{exercise}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Warm-up (6 minutes)</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {warmup.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Progression rules</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {progression.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Travel and low-time options</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {travelOptions.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a plan built around your body and schedule?</h2>
                            <p className="text-muted-foreground mb-5">
                                We adjust the template to your equipment, injuries, and travel load.
                            </p>
                            <Link
                                href="/performance-reset?ref=site"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book 15-Min Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            This guide is educational and not medical advice. Work with a licensed clinician for diagnosis,
                            treatment, or medication decisions.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
}


