"use client";

import { useState } from "react";
import { ToolCard } from "./tool-card";
import { Calendar, ArrowRight, Check, RefreshCcw, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export function WeekendGuardrails() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [socialLevel, setSocialLevel] = useState("quiet");
    const [training, setTraining] = useState("yes");

    const generateContract = () => {
        // Logic for rule selection based on inputs
        const rules = [];

        // Rule 1: Nutrition
        if (socialLevel === "party") {
            rules.push("The 'First & Last' Rule: First meal is protein/veg only. Last meal is whatever, but no snacking after.");
        } else {
            rules.push("2/3 Meals are 'OS Standard': Breakfast and Lunch must remain perfectly on-plan. Dinner is free.");
        }

        // Rule 2: Movement
        if (training === "yes") {
            rules.push("Bank the Sweat: One hard 45m session Saturday morning before the day starts.");
        } else {
            rules.push("Steps Non-Negotiable: 10,000 steps before 2pm or you don't eat lunch.");
        }

        // Rule 3: Alcohol/Damage Control
        if (socialLevel === "quiet") {
            rules.push("Zero Calorie Fluids: Water, Black Coffee, Tea only. No liquid calories.");
        } else {
            rules.push("The 1:1 Rule: 1 Glass of water for every alcohol drink. Hard stop at 2 drinks.");
        }

        return rules;
    };

    return (
        <ToolCard
            title="Weekend Guardrails Builder"
            description="Create your 3-rule contract to prevent the Friday-Sunday slide."
            icon={Calendar}
        >
            {step === "input" ? (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">What is the vibe this weekend?</label>
                            <Select value={socialLevel} onValueChange={setSocialLevel}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="quiet">Quiet / Recovery (Low social)</SelectItem>
                                    <SelectItem value="social">Moderate (Dinner out / Family)</SelectItem>
                                    <SelectItem value="party">High Social (Events / Alcohol)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Can you train?</label>
                            <Select value={training} onValueChange={setTraining}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes, gym lies ahead</SelectItem>
                                    <SelectItem value="no">No, active recovery only</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button onClick={() => setStep("result")} className="w-full h-12 text-base">
                        Build My Contract <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="bg-card border-2 border-primary/20 border-dashed rounded-xl p-6 mb-6 relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 text-xs font-bold text-primary uppercase tracking-wider">
                            Official Contract
                        </div>

                        <div className="space-y-4 mt-2">
                            {generateContract().map((rule, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                                        <Check className="h-3 w-3 text-primary" />
                                    </div>
                                    <p className="text-sm font-medium leading-relaxed">{rule}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-border/50">
                            <p className="text-xs font-bold text-destructive uppercase mb-2">Friday Night Damage Control</p>
                            <p className="text-sm text-muted-foreground">If you go off track Friday, fast until 12pm Saturday. No exceptions.</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Button className="w-full h-14 text-lg" variant="secondary" onClick={() => navigator.clipboard.writeText(generateContract().join("\n"))}>
                            <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                        </Button>
                        <Button asChild className="w-full" variant="outline">
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A">
                                Need accountability? Book 15-Min Audit
                            </Link>
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setStep("input")}
                            className="w-full text-muted-foreground"
                        >
                            <RefreshCcw className="mr-2 h-4 w-4" /> Create New
                        </Button>
                    </div>
                </div>
            )}
        </ToolCard>
    );
}

