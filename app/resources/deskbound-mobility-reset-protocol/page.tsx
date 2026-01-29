import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Deskbound Mobility Reset Protocol | Elite Health OS",
    description: "Short mobility blocks that undo long hours at a desk.",
};

const dailyBlocks = [
    "Morning: 5 minutes of hip flexor and thoracic mobility.",
    "Midday: 5 minutes of glute activation and hamstring stretch.",
    "Afternoon: 5 minutes of neck and shoulder reset.",
];

const mobilityMenu = [
    "Hip flexor stretch: 45 seconds per side",
    "Thoracic rotations: 8 reps per side",
    "Glute bridge: 10 reps",
    "Wall slides: 10 reps",
    "Neck nods and rotations: 5 reps each",
];

const endOfDayReset = [
    "Cat-cow: 6 reps",
    "Child pose breathing: 60 seconds",
    "Couch stretch: 45 seconds per side",
    "Figure-4 stretch: 45 seconds per side",
    "Slow nasal breathing: 2 minutes",
];

export default function DeskboundMobilityResetProtocolPage() {
    return (
        <div className="pt-24">
            <Section className="bg-muted/10">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Protocols
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        Deskbound Mobility Reset Protocol
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        If you sit for long hours, your hips and upper back pay the price. This protocol breaks up the day
                        with short mobility blocks that keep joints and posture resilient.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Time</p>
                            <p className="text-sm text-foreground">15 minutes total per day.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Trigger</p>
                            <p className="text-sm text-foreground">Two or more hours seated.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Outcome</p>
                            <p className="text-sm text-foreground">Less stiffness and better training readiness.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Daily block schedule</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {dailyBlocks.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Mobility menu</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {mobilityMenu.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">End-of-day reset (10 minutes)</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {endOfDayReset.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Want a mobility plan matched to your training?</h2>
                            <p className="text-muted-foreground mb-5">
                                We build a daily reset that supports your lifting and your schedule.
                            </p>
                            <Link
                                href="/performance-reset?ref=site"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book 15-Min Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}

