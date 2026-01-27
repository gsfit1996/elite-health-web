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
                    <h1 className="text-4xl font-bold font-heading mb-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">Free Tools</h1>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        Free diagnostics and planners for busy leaders. Each tool gives immediate clarity you can act on today.
                    </p>
                    <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        The Executive Load and Recovery Planner and Executive Day Blueprint Builder generate personalized plans from your inputs. We do not spam or sell your data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 align-start">
                        <div className="md:col-span-2">
                            <CrashDiagnostic />
                        </div>

                        <LoadRecoveryPlanner />
                        <DayBlueprintBuilder />
                    </div>
                </Container>
            </Section>
        </div>
    );
}
