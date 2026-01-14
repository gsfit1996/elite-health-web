"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "./tool-card";
import { Gauge, ArrowRight, RefreshCcw, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MEETING_OPTIONS = [
    { value: "0-2 hrs/day", points: 0 },
    { value: "3-5 hrs/day", points: 12 },
    { value: "6-8 hrs/day", points: 22 },
    { value: "9+ hrs/day", points: 30 },
];

const TRAVEL_OPTIONS = [
    { value: "0 nights/month", points: 0 },
    { value: "1-2 nights/month", points: 8 },
    { value: "3-5 nights/month", points: 16 },
    { value: "6+ nights/month", points: 24 },
];

const SLEEP_OPTIONS = [
    { value: "8+ hrs", points: 0 },
    { value: "7-7.5 hrs", points: 10 },
    { value: "6-6.5 hrs", points: 20 },
    { value: "<6 hrs", points: 30 },
];

const TRAINING_OPTIONS = [
    { value: "0 sessions/week", points: 10 },
    { value: "1-2 sessions/week", points: 5 },
    { value: "3-4 sessions/week", points: -5 },
    { value: "5+ sessions/week", points: 5 },
];

const SLEEP_TARGETS = [
    { value: "7.0 hrs", hours: 7 },
    { value: "7.5 hrs", hours: 7.5 },
    { value: "8.0 hrs", hours: 8 },
    { value: "8.5 hrs", hours: 8.5 },
];

const LOAD_TIERS = [
    {
        max: 25,
        label: "Low Load",
        color: "bg-emerald-500",
        recovery: "20-30 minutes per day",
        training: "3-4 strength sessions",
        focus: ["Add one long walk", "Keep protein consistent", "Maintain sleep anchor"],
    },
    {
        max: 50,
        label: "Moderate Load",
        color: "bg-amber-500",
        recovery: "30-40 minutes per day",
        training: "3 strength sessions",
        focus: ["Protect two recovery blocks", "Keep caffeine early", "Anchor sleep 5 nights"],
    },
    {
        max: 75,
        label: "High Load",
        color: "bg-orange-500",
        recovery: "45-60 minutes per day",
        training: "2 strength sessions + walks",
        focus: ["Reduce late nights", "Short daily reset", "Protein-first meals"],
    },
    {
        max: 100,
        label: "Critical Load",
        color: "bg-red-500",
        recovery: "60+ minutes per day",
        training: "2 short sessions + mobility",
        focus: ["Prioritize sleep over training volume", "Cut caffeine after 10:30 AM", "Walk daily"],
    },
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

const getOptionPoints = (options: { value: string; points: number }[], value: string) => {
    return options.find(option => option.value === value)?.points ?? 0;
};

const getSleepTarget = (value: string) => {
    return SLEEP_TARGETS.find(target => target.value === value)?.hours ?? 8;
};

export function LoadRecoveryPlanner() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [meetingLoad, setMeetingLoad] = useState(MEETING_OPTIONS[1].value);
    const [travelLoad, setTravelLoad] = useState(TRAVEL_OPTIONS[1].value);
    const [sleepHours, setSleepHours] = useState(SLEEP_OPTIONS[1].value);
    const [trainingLoad, setTrainingLoad] = useState(TRAINING_OPTIONS[1].value);
    const [caffeineLate, setCaffeineLate] = useState<"yes" | "no">("no");
    const [wakeTime, setWakeTime] = useState("06:30");
    const [sleepTarget, setSleepTarget] = useState(SLEEP_TARGETS[2].value);

    const plan = useMemo(() => {
        const meetingPoints = getOptionPoints(MEETING_OPTIONS, meetingLoad);
        const travelPoints = getOptionPoints(TRAVEL_OPTIONS, travelLoad);
        const sleepPoints = getOptionPoints(SLEEP_OPTIONS, sleepHours);
        const trainingPoints = getOptionPoints(TRAINING_OPTIONS, trainingLoad);
        const caffeinePoints = caffeineLate === "yes" ? 8 : 0;

        const rawScore = meetingPoints + travelPoints + sleepPoints + trainingPoints + caffeinePoints;
        const loadScore = Math.max(0, Math.min(100, rawScore));

        const tier = LOAD_TIERS.find(item => loadScore <= item.max) ?? LOAD_TIERS[LOAD_TIERS.length - 1];

        const wakeMinutes = parseTime(wakeTime) ?? 390;
        const targetSleepHours = getSleepTarget(sleepTarget);
        const bedTime = formatTime(wakeMinutes - targetSleepHours * 60);
        const caffeineCutoff = formatTime(wakeMinutes + 6.5 * 60);
        const middayReset = formatTime(wakeMinutes + 6 * 60);
        const eveningReset = formatTime(wakeMinutes + 10 * 60);

        const flags: string[] = [];
        if (sleepPoints >= 20) flags.push("Sleep under 6.5 hours");
        if (meetingPoints >= 22) flags.push("High meeting load");
        if (travelPoints >= 16) flags.push("Travel recovery gap");
        if (trainingLoad === "0 sessions/week") flags.push("No training anchor");
        if (caffeineLate === "yes") flags.push("Late caffeine use");

        return {
            loadScore,
            tier,
            bedTime,
            caffeineCutoff,
            middayReset,
            eveningReset,
            flags,
        };
    }, [meetingLoad, travelLoad, sleepHours, trainingLoad, caffeineLate, wakeTime, sleepTarget]);

    return (
        <ToolCard
            title="Executive Load & Recovery Planner"
            description="Translate your weekly load into a recovery plan you can execute."
            icon={Gauge}
        >
            {step === "input" ? (
                <div className="space-y-6">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Meeting load</label>
                            <Select value={meetingLoad} onValueChange={setMeetingLoad}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {MEETING_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Travel nights</label>
                            <Select value={travelLoad} onValueChange={setTravelLoad}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {TRAVEL_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Average sleep</label>
                            <Select value={sleepHours} onValueChange={setSleepHours}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {SLEEP_OPTIONS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Training frequency</label>
                            <Select value={trainingLoad} onValueChange={setTrainingLoad}>
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
                            <label className="text-sm font-medium">Typical wake time</label>
                            <input
                                type="time"
                                value={wakeTime}
                                onChange={(event) => setWakeTime(event.target.value)}
                                className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Sleep target</label>
                            <Select value={sleepTarget} onValueChange={setSleepTarget}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {SLEEP_TARGETS.map(option => (
                                        <SelectItem key={option.value} value={option.value}>{option.value}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Caffeine after 2:00 PM?</label>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setCaffeineLate("yes")}
                                    className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all ${caffeineLate === "yes" ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={() => setCaffeineLate("no")}
                                    className={`flex-1 px-4 py-2 rounded-md text-sm font-bold transition-all ${caffeineLate === "no" ? "bg-secondary text-secondary-foreground" : "bg-muted hover:bg-muted/80"}`}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>

                    <Button onClick={() => setStep("result")} className="w-full h-12 text-base">
                        Build My Recovery Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
                    <Card className="p-5 bg-muted/10 border-border">
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <p className="text-xs uppercase tracking-wide text-muted-foreground">Load Score</p>
                                <h4 className="text-2xl font-bold text-foreground">{plan.loadScore}/100</h4>
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {plan.tier.label}
                            </span>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-muted/30 overflow-hidden">
                            <div className={`h-2 ${plan.tier.color}`} style={{ width: `${plan.loadScore}%` }} />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            Recovery target: {plan.tier.recovery} with {plan.tier.training}.
                        </p>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <p className="text-sm font-semibold">Your anchor plan</p>
                        </div>
                        <div className="text-sm text-muted-foreground space-y-2">
                            <p>In bed by <span className="text-foreground font-semibold">{plan.bedTime}</span> for your sleep target.</p>
                            <p>Caffeine cutoff by <span className="text-foreground font-semibold">{plan.caffeineCutoff}</span>.</p>
                            <p>Recovery blocks at <span className="text-foreground font-semibold">{plan.middayReset}</span> and <span className="text-foreground font-semibold">{plan.eveningReset}</span>.</p>
                        </div>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <p className="text-sm font-semibold">Focus for the next 7 days</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {plan.tier.focus.map(item => (
                                <div key={item} className="flex gap-2 items-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="p-5 bg-muted/10 border-border space-y-3">
                        <p className="text-sm font-semibold">Risk flags</p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                            {plan.flags.length === 0 && <p>No major risk flags detected.</p>}
                            {plan.flags.map(flag => (
                                <div key={flag} className="flex gap-2 items-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    <span>{flag}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="space-y-3 pt-2">
                        <Button asChild className="w-full h-14 text-lg">
                            <Link href="/reset">
                                Build My Weekly Plan
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
