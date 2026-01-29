"use client";

import { useMemo, useState } from "react";
import { ToolCard } from "./tool-card";
import { Activity, ArrowRight, Check, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DriverKey = "sleep_debt" | "blood_sugar" | "stress_cortisol" | "mixed";

interface Question {
    id: string;
    text: string;
    category: Exclude<DriverKey, "mixed">;
    weight: number;
    signal: string;
}

const QUESTIONS: Question[] = [
    { id: "q1", text: "Do you get less than 6.5 hours of sleep regularly?", category: "sleep_debt", weight: 2, signal: "Sleep under 6.5 hours" },
    { id: "q2", text: "Do you wake up feeling unrefreshed even after sleeping?", category: "sleep_debt", weight: 1, signal: "Wake unrefreshed" },
    { id: "q3", text: "Do you consume caffeine after 1:00 PM?", category: "sleep_debt", weight: 1, signal: "Caffeine after 1 PM" },
    { id: "q4", text: "Does your bedtime or wake time swing by 90+ minutes?", category: "sleep_debt", weight: 1, signal: "Sleep schedule swings" },
    { id: "q5", text: "Is your lunch usually high in carbs or skipped entirely?", category: "blood_sugar", weight: 2, signal: "Unstable lunch" },
    { id: "q6", text: "Do you crave sugar or snacks around 3-4 PM?", category: "blood_sugar", weight: 1, signal: "Afternoon cravings" },
    { id: "q7", text: "Do you feel hangry if you miss a meal?", category: "blood_sugar", weight: 1, signal: "Meal gaps trigger irritability" },
    { id: "q8", text: "Do you go more than 6 hours between lunch and dinner?", category: "blood_sugar", weight: 1, signal: "Long lunch-to-dinner gap" },
    { id: "q9", text: "Is your workday filled with high-urgency decisions?", category: "stress_cortisol", weight: 2, signal: "High urgency all day" },
    { id: "q10", text: "Do you find it hard to switch off after work?", category: "stress_cortisol", weight: 1, signal: "Work mode stays on" },
    { id: "q11", text: "Do you get little daylight or movement before 2:00 PM?", category: "stress_cortisol", weight: 1, signal: "Low daylight and movement" },
    { id: "q12", text: "Do you check email or Slack after 9:00 PM?", category: "stress_cortisol", weight: 1, signal: "Late-night work signals" },
];

const DRIVER_DETAILS: Record<DriverKey, { title: string; desc: string; quickFix: string[]; stabilize: string[]; metrics: string[] }> = {
    sleep_debt: {
        title: "Primary Driver: Sleep Debt",
        desc: "Your crash is biological debt calling due. Energy cannot stay stable without recovery.",
        quickFix: [
            "Caffeine cutoff at 10:30 AM for the next 72 hours.",
            "15-minute NSDR at 2:00 PM to regain alertness.",
            "In bed 8.5 hours before wake time for 3 nights."
        ],
        stabilize: [
            "Fix wake time 5 days per week, even after late nights.",
            "10 minutes of outdoor light within 30 minutes of waking.",
            "Create a shutdown cue 60 minutes before bed."
        ],
        metrics: ["Hours slept (7+)", "Wake-time consistency"]
    },
    blood_sugar: {
        title: "Primary Driver: Blood Sugar Volatility",
        desc: "You are running on unstable fuel. The crash is a predictable energy drop.",
        quickFix: [
            "40-50g protein at lunch with fiber and water.",
            "10-minute walk after lunch to blunt the spike.",
            "Make your first meal savory, not sweet."
        ],
        stabilize: [
            "Protein-first breakfast within 90 minutes of waking.",
            "Keep most carbs in one post-training meal window.",
            "Cut liquid calories and dessert on workdays."
        ],
        metrics: ["3 PM cravings", "Energy after lunch"]
    },
    stress_cortisol: {
        title: "Primary Driver: Cortisol Dump",
        desc: "You are running on adrenaline all day. When it drops, you crash.",
        quickFix: [
            "10-minute transition walk at 5:00 PM.",
            "2-minute box breathing at 3:00 PM.",
            "No work comms after 8:00 PM."
        ],
        stabilize: [
            "Two 12-minute recovery blocks on your busiest day.",
            "Lower evening light and screen brightness after dinner.",
            "Protect one low-load evening per week."
        ],
        metrics: ["Evening tension level", "Sleep latency"]
    },
    mixed: {
        title: "Mixed Drivers",
        desc: "No dominant driver showed up. Small changes across sleep, fuel, and stress will stack fast.",
        quickFix: [
            "Protein-first lunch and a 10-minute walk.",
            "Caffeine cutoff by noon for three days.",
            "In bed 8 hours before wake time."
        ],
        stabilize: [
            "Set a wake-time anchor and stick to it.",
            "Add two 20-minute walks on workdays.",
            "Make dinner lighter and earlier when possible."
        ],
        metrics: ["Energy at 3 PM", "Sleep hours"]
    }
};

const DRIVER_LABELS: Record<Exclude<DriverKey, "mixed">, string> = {
    sleep_debt: "Sleep Debt",
    blood_sugar: "Blood Sugar",
    stress_cortisol: "Stress Load",
};

const getSeverity = (score: number, max: number) => {
    const percent = max > 0 ? Math.round((score / max) * 100) : 0;
    if (percent < 30) return { label: "Low", color: "bg-emerald-500", percent };
    if (percent < 55) return { label: "Moderate", color: "bg-amber-500", percent };
    if (percent < 75) return { label: "High", color: "bg-orange-500", percent };
    return { label: "Critical", color: "bg-red-500", percent };
};

const getConfidence = (diff: number) => {
    if (diff >= 2) return "High";
    if (diff === 1) return "Moderate";
    return "Low";
};

export function CrashDiagnostic() {
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleAnswer = (questionId: string, value: boolean) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const answeredCount = Object.keys(answers).length;
    const allAnswered = answeredCount === QUESTIONS.length;

    const { totals, totalScore, maxTotal } = useMemo(() => {
        const summary = {
            sleep_debt: { score: 0, max: 0 },
            blood_sugar: { score: 0, max: 0 },
            stress_cortisol: { score: 0, max: 0 },
        };

        QUESTIONS.forEach(q => {
            summary[q.category].max += q.weight;
            if (answers[q.id]) {
                summary[q.category].score += q.weight;
            }
        });

        const totalScoreValue = Object.values(summary).reduce((sum, item) => sum + item.score, 0);
        const maxTotalValue = Object.values(summary).reduce((sum, item) => sum + item.max, 0);

        return {
            totals: summary,
            totalScore: totalScoreValue,
            maxTotal: maxTotalValue,
        };
    }, [answers]);

    const keySignals = QUESTIONS.filter(q => answers[q.id]).map(q => q.signal);
    const displayedSignals = keySignals.slice(0, 4);
    const extraSignals = keySignals.length - displayedSignals.length;

    const sortedDrivers = Object.entries(totals).sort((a, b) => b[1].score - a[1].score);
    const hasSignals = totalScore > 0;
    const primaryKey = hasSignals ? (sortedDrivers[0][0] as Exclude<DriverKey, "mixed">) : "mixed";
    const secondaryKey = hasSignals && sortedDrivers[1][1].score > 0
        ? (sortedDrivers[1][0] as Exclude<DriverKey, "mixed">)
        : null;

    const primaryDetails = DRIVER_DETAILS[primaryKey];
    const primaryLabel = primaryDetails.title.replace("Primary Driver: ", "");
    const severity = getSeverity(totalScore, maxTotal);
    const confidence = getConfidence(sortedDrivers[0]?.[1].score - (sortedDrivers[1]?.[1].score ?? 0));

    return (
        <ToolCard
            title="The 6pm Crash Diagnostic"
            description="Identify why your energy collapses at the end of the day and get a tailored action plan."
            icon={Activity}
        >
            {!isComplete ? (
                <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        <span>Progress</span>
                        <span>{answeredCount}/{QUESTIONS.length} answered</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                        <div
                            className="h-2 bg-primary transition-all"
                            style={{ width: `${Math.round((answeredCount / QUESTIONS.length) * 100)}%` }}
                        />
                    </div>

                    <div className="space-y-4">
                        {QUESTIONS.map((q) => (
                            <div key={q.id} className="flex items-center justify-between gap-4 p-4 bg-muted/20 rounded-lg border border-border/50">
                                <p className="text-sm font-medium">{q.text}</p>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => handleAnswer(q.id, true)}
                                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${answers[q.id] === true ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(q.id, false)}
                                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${answers[q.id] === false ? "bg-secondary text-secondary-foreground" : "bg-muted hover:bg-muted/80"}`}
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button
                        disabled={!allAnswered}
                        onClick={() => setIsComplete(true)}
                        className="w-full h-12 text-base"
                    >
                        Reveal My Diagnosis <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6 space-y-6">
                        <div className="space-y-2">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h4 className="text-xl font-bold text-primary">{primaryDetails.title}</h4>
                                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                    Confidence: {confidence}
                                </span>
                            </div>
                            <p className="text-muted-foreground">{primaryDetails.desc}</p>
                            {secondaryKey && (
                                <p className="text-sm text-muted-foreground">
                                    Secondary driver: <span className="font-semibold text-foreground">{DRIVER_LABELS[secondaryKey]}</span>
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                                <span>Crash Load</span>
                                <span>{severity.label} ({severity.percent}/100)</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                                <div className={`h-2 ${severity.color}`} style={{ width: `${severity.percent}%` }} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background/60 p-4 rounded-lg">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">72-Hour Fix</p>
                                <div className="space-y-3">
                                    {primaryDetails.quickFix.map((item) => (
                                        <div key={item} className="flex gap-3 items-start">
                                            <Check className="h-4 w-4 text-primary mt-0.5" />
                                            <p className="text-sm font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-background/60 p-4 rounded-lg">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">7-Day Stabilization</p>
                                <div className="space-y-3">
                                    {primaryDetails.stabilize.map((item) => (
                                        <div key={item} className="flex gap-3 items-start">
                                            <Check className="h-4 w-4 text-primary mt-0.5" />
                                            <p className="text-sm font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-background/60 p-4 rounded-lg">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Key Signals You Reported</p>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    {displayedSignals.length === 0 && <p>No major signals flagged.</p>}
                                    {displayedSignals.map((signal) => (
                                        <div key={signal} className="flex gap-2 items-center">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span>{signal}</span>
                                        </div>
                                    ))}
                                    {extraSignals > 0 && (
                                        <p className="text-xs text-muted-foreground">Plus {extraSignals} more signals</p>
                                    )}
                                </div>
                            </div>
                            <div className="bg-background/60 p-4 rounded-lg">
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Driver Breakdown</p>
                                <div className="space-y-3">
                                    {Object.entries(totals).map(([key, value]) => {
                                        const percent = value.max > 0 ? Math.round((value.score / value.max) * 100) : 0;
                                        return (
                                            <div key={key}>
                                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                                    <span>{DRIVER_LABELS[key as Exclude<DriverKey, "mixed">]}</span>
                                                    <span>{percent}%</span>
                                                </div>
                                                <div className="h-2 rounded-full bg-muted/30 overflow-hidden">
                                                    <div className="h-2 bg-primary/70" style={{ width: `${percent}%` }} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="bg-background/60 p-4 rounded-lg">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Metrics To Track This Week</p>
                            <div className="space-y-2 text-sm text-muted-foreground">
                                {primaryDetails.metrics.map((item) => (
                                    <div key={item} className="flex gap-2 items-center">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-background/60 p-4 rounded-lg space-y-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Results summary</p>
                            <p className="text-sm text-muted-foreground">
                                Primary driver: <span className="font-semibold text-foreground">{primaryLabel}</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Severity: <span className="font-semibold text-foreground">{severity.label}</span> | Confidence: <span className="font-semibold text-foreground">{confidence}</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Signals flagged: <span className="font-semibold text-foreground">{keySignals.length}</span>
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground text-center">
                            Want help turning this into a 90-day plan? Discuss your results in a 15-minute audit. No hard sell.
                        </p>
                        <Button asChild className="w-full h-14 text-lg">
                            <Link href="/performance-reset?ref=site">
                                Fix This Permanently (Book 15-Min Audit)
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => {
                                setIsComplete(false);
                                setAnswers({});
                            }}
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

