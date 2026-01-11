"use client";

import { useState } from "react";
import { ToolCard } from "./tool-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, ArrowRight, RotateCcw, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Goal = "fat-loss" | "maintenance" | "muscle-gain";

export function ProteinCalculator() {
    const [weight, setWeight] = useState<number | "">("");
    const [unit, setUnit] = useState<"lbs" | "kg">("lbs");
    const [goal, setGoal] = useState<Goal>("fat-loss");
    const [result, setResult] = useState<{ min: number; max: number; meals: number } | null>(null);

    const calculateProtein = () => {
        if (!weight || typeof weight !== "number") return;
        const weightInLbs = unit === "kg" ? weight * 2.20462 : weight;

        let minMult = 0.8;
        let maxMult = 1.0;

        switch (goal) {
            case "fat-loss":
                minMult = 1.0;
                maxMult = 1.25; // Aggressive protein for satiety
                break;
            case "muscle-gain":
                minMult = 0.8;
                maxMult = 1.0; // Surplus cals do the heavy lifting
                break;
            case "maintenance":
                minMult = 0.8;
                maxMult = 1.0;
                break;
        }

        const min = Math.round(weightInLbs * minMult);
        const max = Math.round(weightInLbs * maxMult);

        setResult({
            min,
            max,
            meals: Math.round(min / 4) // Assuming 4 feedings
        });
    };

    const reset = () => {
        setWeight("");
        setResult(null);
    };

    return (
        <ToolCard
            title="Protein Floor Calculator"
            description="Find your minimum effective dose for retention + satiety."
            icon={Dumbbell}
        >
            <div className="space-y-6">
                {/* Input Phase */}
                <AnimatePresence mode="wait">
                    {!result ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-6">
                            <div className="grid grid-cols-2 p-1 bg-muted/50 rounded-lg">
                                <button onClick={() => setUnit("lbs")} className={cn("py-2 text-sm font-medium rounded-md transition-all", unit === "lbs" ? "bg-background shadow-sm" : "text-muted-foreground")}>Lbs</button>
                                <button onClick={() => setUnit("kg")} className={cn("py-2 text-sm font-medium rounded-md transition-all", unit === "kg" ? "bg-background shadow-sm" : "text-muted-foreground")}>Kg</button>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Current Weight</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value ? Number(e.target.value) : "")}
                                        className="w-full bg-muted/20 border border-border rounded-lg px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary/50"
                                        placeholder={unit === "lbs" ? "185" : "84"}
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-muted-foreground">{unit}</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Primary Goal</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {(["fat-loss", "maintenance", "muscle-gain"] as Goal[]).map((g) => (
                                        <button
                                            key={g}
                                            onClick={() => setGoal(g)}
                                            className={cn("px-2 py-2 text-xs font-semibold rounded-lg border transition-all capitalize", goal === g ? "bg-primary/20 border-primary text-primary" : "bg-transparent hover:bg-muted text-muted-foreground")}
                                        >
                                            {g.replace("-", " ")}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <Button onClick={calculateProtein} className="w-full h-12 text-base" disabled={!weight}>
                                Calculate Floor <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center space-y-2">
                                <p className="text-sm font-medium text-primary uppercase tracking-wide">Daily Protein Floor</p>
                                <div className="text-4xl font-bold font-heading text-foreground">
                                    {result.min} - {result.max} <span className="text-lg text-muted-foreground">g</span>
                                </div>
                                <p className="text-sm text-foreground font-medium pt-2">
                                    Target: ~{result.meals}g per meal (4x daily)
                                </p>
                                <p className="text-sm text-foreground font-medium">
                                    Fiber Floor: 30g minimum
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm font-medium text-muted-foreground">Default Meal Examples ({result.meals}g+):</p>
                                <div className="p-3 bg-muted/10 rounded-lg border border-border flex gap-3 text-sm">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>200g Chicken Breast + 1 cup Rice + Broccoli</span>
                                </div>
                                <div className="p-3 bg-muted/10 rounded-lg border border-border flex gap-3 text-sm">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>3 Eggs + 1 cup Egg Whites Scramble + Berries</span>
                                </div>
                                <div className="p-3 bg-muted/10 rounded-lg border border-border flex gap-3 text-sm">
                                    <Check className="h-4 w-4 text-primary shrink-0" />
                                    <span>1 Scoop Whey + 250g Greek Yogurt</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button asChild className="w-full h-14 text-lg">
                                    <Link href="/reset">
                                        Build My Full Nutrition Plan
                                    </Link>
                                </Button>
                                <Button variant="ghost" size="sm" onClick={reset} className="w-full text-muted-foreground">
                                    <RotateCcw className="mr-2 h-3 w-3" /> Recalculate
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </ToolCard>
    );
}
