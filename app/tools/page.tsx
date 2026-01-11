"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Calendar, Moon, Zap, Activity } from "lucide-react";
import Link from "next/link";
import { ProteinCalculator } from "@/components/tools/protein-calculator";
import { CrashDiagnostic } from "@/components/tools/crash-diagnostic";
import { WeekendGuardrails } from "@/components/tools/weekend-guardrails";
import { TravelDefaultDay } from "@/components/tools/travel-default";

export default function ToolsPage() {
    const tools = [
        { title: "Protein Floor Calculator", icon: <Calculator />, desc: "Find your minimum protein target for retention." },
        { title: "Weekend Guardrails Builder", icon: <Calendar />, desc: "Create your 3-rule structure for Friday-Sunday." },
        { title: "Travel Default Day Generator", icon: <Zap />, desc: "Pre-made nutrition plans for transit days." },
        { title: "Sleep Anchor Finder", icon: <Moon />, desc: "Identify your non-negotiable sleep windows." },
        { title: "The 6pm Crash Diagnostic", icon: <Activity />, desc: "2-minute check to find your energy leak." },
    ];

    return (
        <div className="pt-24">
            <Section>
                <Container>
                    <h1 className="text-4xl font-bold font-heading mb-6 text-center">Free Tools</h1>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                        Simple calculators and generators to solve specific constraints.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 align-start">
                        {/* Priority 1: Crash Diagnostic */}
                        <div className="md:col-span-2">
                            <CrashDiagnostic />
                        </div>

                        {/* Secondary Tools */}
                        <WeekendGuardrails />
                        <TravelDefaultDay />
                        <ProteinCalculator />
                    </div>
                </Container>
            </Section>
        </div>
    );
}
