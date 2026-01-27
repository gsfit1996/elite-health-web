"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "./tool-card";
import { CalendarClock, ArrowRight, RefreshCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TRAINING_OPTIONS = [
    { value: "Morning (before meetings)", type: "morning" },
    { value: "Lunch break (midday)", type: "lunch" },
    { value: "Evening (after meetings)", type: "evening" },
    { value: "No training today", type: "none" },
];

const DINNER_OPTIONS = [
    { value: "Before 7:00 PM", type: "early" },
    { value: "After 8:00 PM", type: "late" },
];

const INTENSITY_OPTIONS = [
    { value: "Normal workload", type: "normal" },
    { value: "High-stakes day", type: "high" },
];

const parseTime = (value: string) => {
    const [hours, minutes] = value.split(":").map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
        return null;
    }
    return hours * 60 + minutes;
};

const formatTime = (minutes: number) => {
    const normalized = ((minutes % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60);
    const mins = normalized % 60;
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${mins.toString().padStart(2, "0")} ${period}`;
};

const addMinutes = (base: number, amount: number) => base + amount;

export function DayBlueprintBuilder() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [wakeTime, setWakeTime] = useState("06:30");
    const [firstMeeting, setFirstMeeting] = useState("09:00");
    const [lastMeeting, setLastMeeting] = useState("18:00");
    const [trainingWindow, setTrainingWindow] = useState(TRAINING_OPTIONS[0].value);
    const [dinnerTiming, setDinnerTiming] = useState(DINNER_OPTIONS[0].value);
    const [intensity, setIntensity] = useState(INTENSITY_OPTIONS[0].value);

    const plan = useMemo(() => {
        const wakeMinutes = parseTime(wakeTime) ?? 390;
        const firstMeetingMinutes = parseTime(firstMeeting) ?? addMinutes(wakeMinutes, 150);
        const lastMeetingMinutes = parseTime(lastMeeting) ?? addMinutes(firstMeetingMinutes, 540);

        const trainingType = TRAINING_OPTIONS.find(option => option.value === trainingWindow)?.type ?? "morning";
        const dinnerType = DINNER_OPTIONS.find(option => option.value === dinnerTiming)?.type ?? "early";
        const intensityType = INTENSITY_OPTIONS.find(option => option.value === intensity)?.type ?? "normal";

        const breakfastTime = addMinutes(wakeMinutes, 45);
        const caffeineStart = addMinutes(wakeMinutes, 60);
        const caffeineCutoff = addMinutes(wakeMinutes, 420);
        const middayReset = addMinutes(firstMeetingMinutes, 240);
        const shutdown = addMinutes(lastMeetingMinutes, 30);
        const bedtime = addMinutes(wakeMinutes, 16 * 60);

        let trainingTime: number | null = null;
        if (trainingType === "morning") trainingTime = addMinutes(wakeMinutes, 75);
        if (trainingType === "lunch") trainingTime = addMinutes(firstMeetingMinutes, 210);
        if (trainingType === "evening") trainingTime = addMinutes(lastMeetingMinutes, 45);

        const timeline = [
            { time: formatTime(wakeMinutes), label: "Wake + outdoor light" },
            { time: formatTime(breakfastTime), label: "Protein-first meal" },
            { time: formatTime(caffeineStart), label: "Caffeine starts" },
            trainingTime ? { time: formatTime(trainingTime), label: "Training block" } : null,
            { time: formatTime(middayReset), label: "10-minute reset walk" },
            { time: formatTime(caffeineCutoff), label: "Caffeine cutoff" },
            { time: formatTime(shutdown), label: "Work shutdown cue" },
            { time: formatTime(bedtime), label: "In bed by" },
        ].filter(Boolean) as { time: string; label: string }[];

        const guardrails = [
            trainingType === "none" ? "No training? Swap in a 20-minute walk." : null,
            dinnerType === "late" ? "Late dinner: protein and vegetables first, 10-minute walk after." : null,
            intensityType === "high" ? "High-stakes day: add a 2-minute breathing reset at 3:00 PM." : null,
        ].filter(Boolean) as string[];

        const fuelPlan = [
            `Protein-first breakfast by ${formatTime(breakfastTime)}.`,
            trainingType === "morning"
                ? "Carbs at lunch after training."
                : "Keep carbs in one meal window after training.",
            dinnerType === "late"
                ? "Keep dinner lighter and finish 2 hours before bed when possible."
                : "Aim for a lighter dinner with fiber and protein.",
        ];

        return {
            timeline,
            guardrails,
            fuelPlan,
            summary: {
                trainingWindow,
                dinnerTiming,
                intensity,
                caffeineCutoff: formatTime(caffeineCutoff),
                bedtime: formatTime(bedtime),
            },
        };
    }, [wakeTime, firstMeeting, lastMeeting, trainingWindow, dinnerTiming, intensity]);

    return (
        <ToolCard
            title="Executive Day Blueprint Builder"
            description="Generate a personalized day plan that protects energy, focus, and recovery."
            icon={CalendarClock}
        >
            {step === "input" ? (
                <div className="space-y-6">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Wake time</label>
                            <input
                                type="time"
                                value={wakeTime}
                                onChange={(event) => setWakeTime(event.target.value)}
                                className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">First meeting</label>
                            <input
                                type="time"
                                value={firstMeeting}
                                onChange={(event) => setFirstMeeting(event.target.value)}
                                className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Last meeting</label>
                            <input
                                type="time"
                                value={lastMeeting}
                                onChange={(event) => setLastMeeting(event.target.value)}
                                className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Training window</label>
                            <Select value={trainingWindow} onValueChange={setTrainingWindow}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {TRAINING_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Dinner timing</label>
                            <Select value={dinnerTiming} onValueChange={setDinnerTiming}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {DINNER_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Workday intensity</label>
                            <Select value={intensity} onValueChange={setIntensity}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {INTENSITY_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button onClick={() => setStep("result")} className="w-full h-12 text-base">
                        Build My Blueprint <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                        Your inputs create a personalized plan. We do not spam or sell your data.
                    </p>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <p className="text-sm font-semibold">Your day blueprint</p>
                        </div>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {plan.timeline.map(item => (
                                <div key={`${item.time}-${item.label}`} className="flex items-center justify-between gap-4">
                                    <span className="font-semibold text-foreground">{item.time}</span>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <p className="text-sm font-semibold">Fuel plan</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {plan.fuelPlan.map(item => (
                                <div key={item} className="flex gap-2 items-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <p className="text-sm font-semibold">Guardrails</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {plan.guardrails.length === 0 && <p>No extra guardrails needed today.</p>}
                            {plan.guardrails.map(item => (
                                <div key={item} className="flex gap-2 items-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-2">
                        <p className="text-sm font-semibold">Results summary</p>
                        <p className="text-sm text-muted-foreground">
                            Training window: <span className="font-semibold text-foreground">{plan.summary.trainingWindow}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Dinner timing: <span className="font-semibold text-foreground">{plan.summary.dinnerTiming}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Workday intensity: <span className="font-semibold text-foreground">{plan.summary.intensity}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Caffeine cutoff: <span className="font-semibold text-foreground">{plan.summary.caffeineCutoff}</span>
                        </p>
                        <p className="text-sm text-muted-foreground">
                            In bed by: <span className="font-semibold text-foreground">{plan.summary.bedtime}</span>
                        </p>
                    </Card>

                    <div className="space-y-3 pt-2">
                        <p className="text-sm text-muted-foreground text-center">
                            Want a tighter schedule around your calendar? Discuss this blueprint in a 15-minute audit. No hard sell.
                        </p>
                        <Button asChild className="w-full h-14 text-lg">
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                Discuss My Day Blueprint (15-Min Audit)
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setStep("input")}
                            className="w-full text-muted-foreground"
                        >
                            <RefreshCcw className="mr-2 h-4 w-4" /> Start Over
                        </Button>
                    </div>
                </div>
            )}
        </ToolCard>
    );
}
