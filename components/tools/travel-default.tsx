"use client";

import { useState } from "react";
import { ToolCard } from "./tool-card";
import { Plane, ArrowRight, Clock, Utensils, Moon, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function TravelDefaultDay() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [travelType, setTravelType] = useState("flight");
    const [gymAccess, setGymAccess] = useState("no");

    const getPlan = () => {
        const plan = {
            training: "",
            meals: [] as string[],
            sleep: ""
        };

        if (gymAccess === "yes") {
            plan.training = "Hotel Gym Protocol: 20min AMRAP (Dumbbell Thrusters, Pushups, Rows). Get it done before email.";
        } else {
            plan.training = "Room Protocol: 100 Air Squats, 50 Pushups for time. Or 30min walk immediately upon arrival.";
        }

        if (travelType === "flight") {
            plan.meals = [
                "Airport: Fast until through security. Water + Black Coffee.",
                "In-Flight: Refuse the tray. Eat protein bar or jerky you brought.",
                "Arrival: Steak/Chicken Salad at hotel bar. No alcohol tonight."
            ];
            plan.sleep = "Melatonin 2mg + Magnesium. Room temp 19C. Phone in bathroom.";
        } else {
            plan.meals = [
                "Breakfast: Eggs + Coffee (Skip the pastry/juice).",
                "Lunch: Salad or Burger (bunless).",
                "Dinner: Client dinner? Order first. Protein + Veg. 2 drink max."
            ];
            plan.sleep = "Consistent wake time tomorrow regardless of bedtime.";
        }

        return plan;
    };

    const plan = getPlan();

    return (
        <ToolCard
            title="Travel Default Day"
            description="Generate a fail-safe nutrition & movement plan for your trip."
            icon={Plane}
        >
            {step === "input" ? (
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Trip Type</label>
                            <Select value={travelType} onValueChange={setTravelType}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="flight">Flight / Transit Day</SelectItem>
                                    <SelectItem value="hotel">Conference / Hotel Day</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Gym Access?</label>
                            <Select value={gymAccess} onValueChange={setGymAccess}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="yes">Yes, full gym</SelectItem>
                                    <SelectItem value="no">No / Unsure</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <Button onClick={() => setStep("result")} className="w-full h-12 text-base">
                        Generate Day Plan <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">

                    <Card className="p-4 bg-muted/10 border-border">
                        <div className="flex gap-3 mb-2">
                            <Utensils className="h-5 w-5 text-primary" />
                            <h4 className="font-bold">Nutrition Stack</h4>
                        </div>
                        <ul className="space-y-2 pl-8 list-disc text-sm text-muted-foreground">
                            {plan.meals.map((m, i) => (
                                <li key={i}>{m}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-4 bg-muted/10 border-border">
                        <div className="flex gap-3 mb-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <h4 className="font-bold">Movement</h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">{plan.training}</p>
                    </Card>

                    <Card className="p-4 bg-muted/10 border-border">
                        <div className="flex gap-3 mb-2">
                            <Moon className="h-5 w-5 text-primary" />
                            <h4 className="font-bold">Sleep Anchor</h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">{plan.sleep}</p>
                    </Card>

                    <div className="space-y-3 pt-2">
                        <Button asChild className="w-full h-14 text-lg">
                            <Link href="/performance-reset?ref=site">
                                Customize This (Book 15-Min Audit)
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

