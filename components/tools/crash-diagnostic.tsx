"use client";

import { useState } from "react";
import { ToolCard } from "./tool-card";
import { Activity, ArrowRight, Check, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Question {
    id: string;
    text: string;
    category: "sleep_debt" | "blood_sugar" | "stress_cortisol";
}

const QUESTIONS: Question[] = [
    { id: "q1", text: "Do you get less than 6.5 hours of sleep regularly?", category: "sleep_debt" },
    { id: "q2", text: "Do you wake up feeling unrefreshed even after sleeping?", category: "sleep_debt" },
    { id: "q3", text: "Do you consume caffeine after 12:00 PM?", category: "sleep_debt" },
    { id: "q4", text: "Is your lunch usually high in carbs (pasta, sandwiches) or skipped entirely?", category: "blood_sugar" },
    { id: "q5", text: "Do you crave sugar or snacks specifically around 3-4 PM?", category: "blood_sugar" },
    { id: "q6", text: "Do you feel 'hangry' (irritable) if you miss a meal?", category: "blood_sugar" },
    { id: "q7", text: "Is your workday characterized by constant high-urgency decisions?", category: "stress_cortisol" },
    { id: "q8", text: "Do you find it hard to 'switch off' work mode when you get home?", category: "stress_cortisol" },
];

export function CrashDiagnostic() {
    const [answers, setAnswers] = useState<Record<string, boolean>>({});
    const [isComplete, setIsComplete] = useState(false);

    const handleAnswer = (questionId: string, value: boolean) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const calculateResult = () => {
        const scores = {
            sleep_debt: 0,
            blood_sugar: 0,
            stress_cortisol: 0
        };

        QUESTIONS.forEach(q => {
            if (answers[q.id]) {
                scores[q.category]++;
            }
        });

        // Find highest score
        const entries = Object.entries(scores);
        entries.sort((a, b) => b[1] - a[1]);

        return entries[0][0] as keyof typeof scores;
    };

    const allAnswered = QUESTIONS.every(q => answers[q.id] !== undefined);

    const getRecommendation = (driver: string) => {
        switch (driver) {
            case "sleep_debt":
                return {
                    title: "Primary Driver: Sleep Debt",
                    desc: "Your crash is biological debt calling due. No amount of willpower fits this.",
                    protocol: [
                        "Protocol 1: Hard caffeine cutoff at 11:00 AM.",
                        "Protocol 2: 15 min non-sleep deep rest (NSDR) at 2:00 PM.",
                        "Protocol 3: Set a reverse alarm - in bed 8.5hrs before wake time."
                    ]
                };
            case "blood_sugar":
                return {
                    title: "Primary Driver: Blood Sugar Volatility",
                    desc: "You are riding a glucose rollercoaster. The crash is your fuel running out.",
                    protocol: [
                        "Protocol 1: Double protein at lunch (40-50g minimum).",
                        "Protocol 2: Walk 10 mins after lunch to blunt glucose spike.",
                        "Protocol 3: Switch first meal to Savory (meat/eggs) not Sweet."
                    ]
                };
            case "stress_cortisol":
                return {
                    title: "Primary Driver: Cortisol Dump",
                    desc: "You run on adrenaline all day. When it wears off at 6pm, you collapse.",
                    protocol: [
                        "Protocol 1: The 'Transition'. 10 min walk between work and home.",
                        "Protocol 2: Box breathing (4-4-4-4) for 2 mins at 5:00 PM.",
                        "Protocol 3: No phone/email allowed after 7:30 PM."
                    ]
                };
            default:
                return {
                    title: "Mixed Drivers",
                    desc: "Multiple factors are draining you.",
                    protocol: ["Focus on Protein First", "Set a Sleep Anchor", "Hydrate"]
                };
        }
    };

    const result = isComplete ? getRecommendation(calculateResult()) : null;

    return (
        <ToolCard
            title="The 6pm Crash Diagnostic"
            description="Identify the biological root cause of your evening fatigue."
            icon={Activity}
        >
            {!isComplete ? (
                <div className="space-y-6">
                    <div className="space-y-4">
                        {QUESTIONS.map((q) => (
                            <div key={q.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg border border-border/50">
                                <p className="text-sm font-medium pr-4">{q.text}</p>
                                <div className="flex gap-2 shrink-0">
                                    <button
                                        onClick={() => handleAnswer(q.id, true)}
                                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${answers[q.id] === true ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => handleAnswer(q.id, false)}
                                        className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${answers[q.id] === false ? 'bg-secondary text-secondary-foreground' : 'bg-muted hover:bg-muted/80'}`}
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
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                        <h4 className="text-xl font-bold text-primary mb-2">{result?.title}</h4>
                        <p className="text-muted-foreground mb-6">{result?.desc}</p>

                        <div className="space-y-3 bg-background/50 p-4 rounded-lg">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">72-Hour Fix Protocol</p>
                            {result?.protocol.map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="mt-1">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Button asChild className="w-full h-14 text-lg">
                            <Link href="/reset">
                                Fix This Permanently (Book Reset)
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
