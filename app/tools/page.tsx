"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CrashDiagnostic } from "@/components/tools/crash-diagnostic";
import { LoadRecoveryPlanner } from "@/components/tools/load-recovery-planner";
import { DayBlueprintBuilder } from "@/components/tools/day-blueprint-builder";
import { MotionReveal } from "@/components/ui/motion-safe";

export default function ToolsPage() {
    return (
        <div className="pt-24">
            <Section background="accent" spacing="lg">
                <Container>
                    <MotionReveal className="mb-16 text-center">
                        <Badge variant="glass" className="mb-5">Tools</Badge>
                        <h1 className="mb-6 text-4xl font-bold font-heading md:text-5xl">Free Tools</h1>
                        <p className="mx-auto mb-4 max-w-2xl text-muted-foreground">
                            Free diagnostics and planners for busy leaders. Each tool gives immediate clarity you can act on today.
                        </p>
                        <p className="mx-auto max-w-2xl text-xs text-muted-foreground">
                            The Executive Load and Recovery Planner and Executive Day Blueprint Builder generate personalized plans from your inputs. We do not spam or sell your data.
                        </p>
                    </MotionReveal>

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
