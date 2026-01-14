"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CrashDiagnostic } from "@/components/tools/crash-diagnostic";
import { LoadRecoveryPlanner } from "@/components/tools/load-recovery-planner";
import { DayBlueprintBuilder } from "@/components/tools/day-blueprint-builder";

export default function ToolsPage() {
    return (
        <div className="pt-24">
            <Section>
                <Container>
                    <h1 className="text-4xl font-bold font-heading mb-6 text-center">Free Tools</h1>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
                        High-impact diagnostics and planners built for founders who want fast clarity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 align-start">
                        {/* Priority 1: Crash Diagnostic */}
                        <div className="md:col-span-2">
                            <CrashDiagnostic />
                        </div>

                        {/* Secondary Tools */}
                        <LoadRecoveryPlanner />
                        <DayBlueprintBuilder />
                    </div>
                </Container>
            </Section>
        </div>
    );
}
