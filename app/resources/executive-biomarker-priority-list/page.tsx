import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Executive Biomarker Priority List | Elite Health OS",
    description: "What to test, target ranges, and action priorities for high performers.",
};

const corePanel = [
    "ApoB, LDL-C, HDL-C, triglycerides, non-HDL-C",
    "Fasting glucose and fasting insulin",
    "HbA1c",
    "hs-CRP",
    "Comprehensive metabolic panel (ALT, AST, creatinine, electrolytes)",
    "CBC with differential",
];

const performanceAddOns = [
    "Lp(a) to flag inherited lipid risk",
    "Omega-3 index to gauge anti-inflammatory intake",
    "Ferritin and iron saturation for performance capacity",
    "TSH, free T4, free T3 for thyroid output",
    "Vitamin D (25-OH)",
    "Total testosterone, free testosterone, SHBG",
    "Uric acid and ApoA1 for metabolic context",
];

const deepDive = [
    "Advanced lipids (LDL-P or ApoB particle count)",
    "Oral glucose tolerance test if fasting markers are borderline",
    "Continuous glucose monitor for 10-14 days",
    "Homocysteine and B12/folate status",
    "High sensitivity troponin or NT-proBNP if strong family history",
];

const targets = [
    {
        marker: "ApoB",
        target: "< 80 mg/dL",
        why: "Best single marker of atherogenic particle load.",
        action: "Lower saturated fat, increase fiber, reduce weight if needed.",
    },
    {
        marker: "LDL-C",
        target: "< 100 mg/dL",
        why: "Traditional risk marker that tracks with ApoB.",
        action: "Dial in diet quality and discuss with a clinician if elevated.",
    },
    {
        marker: "Non-HDL-C",
        target: "< 130 mg/dL",
        why: "Captures all atherogenic cholesterol particles.",
        action: "Reduce ultra-processed fats and added sugars.",
    },
    {
        marker: "Triglycerides",
        target: "< 100 mg/dL",
        why: "Proxy for carb tolerance and metabolic flexibility.",
        action: "Cut liquid calories and alcohol; add daily movement.",
    },
    {
        marker: "HDL-C",
        target: "> 40 mg/dL (men) or > 50 mg/dL (women)",
        why: "Often reflects activity level and body composition.",
        action: "Strength train 3x weekly and reduce waist size.",
    },
    {
        marker: "hs-CRP",
        target: "< 1.0 mg/L",
        why: "Systemic inflammation that blocks recovery.",
        action: "Prioritize sleep, hydration, and stress reduction.",
    },
    {
        marker: "Fasting glucose",
        target: "75-95 mg/dL",
        why: "Baseline glucose control and morning metabolic health.",
        action: "Walk after meals and keep late-night eating minimal.",
    },
    {
        marker: "Fasting insulin",
        target: "2-8 uIU/mL",
        why: "Early signal of insulin resistance.",
        action: "Increase protein at breakfast and strength train.",
    },
    {
        marker: "HbA1c",
        target: "5.0-5.4%",
        why: "90-day average glucose exposure.",
        action: "Stabilize carbohydrate timing and total intake.",
    },
];

export default function ExecutiveBiomarkerPriorityListPage() {
    return (
        <div className="pt-24">
            <Section background="muted">
                <Container className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <Badge variant="outline">Protocol</Badge>
                        <Link href="/resources" className="text-sm text-muted-foreground flex items-center gap-2 hover:text-foreground">
                            <ArrowLeft className="h-4 w-4" /> Back to Resources
                        </Link>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                        The Executive Biomarker Priority List
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        This guide turns a long lab report into clear priorities. Use it to decide what to test, what to
                        ignore, and how to act on the results without guesswork.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-10">
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Prep</p>
                            <p className="text-sm text-foreground">8-12 hour fast, morning draw, water only.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Frequency</p>
                            <p className="text-sm text-foreground">Every 6-12 months, or quarterly if correcting a gap.</p>
                        </div>
                        <div className="rounded-xl border border-border bg-background/60 p-4">
                            <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Goal</p>
                            <p className="text-sm text-foreground">Spot risks early, then tighten habits with precision.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">How to use this guide</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>1. Start with the core panel to establish your baseline.</li>
                                <li>2. Add performance markers if you want higher resolution or faster improvements.</li>
                                <li>3. Use the targets below to prioritize the top 1-2 fixes.</li>
                                <li>4. Retest after 8-12 weeks of consistent changes.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Tier 1: Core panel (must-have)</h2>
                            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                                {corePanel.map((item) => (
                                    <li key={item} className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Tier 2: Performance add-ons</h2>
                            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                                {performanceAddOns.map((item) => (
                                    <li key={item} className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Tier 3: Deep dive options</h2>
                            <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                                {deepDive.map((item) => (
                                    <li key={item} className="rounded-lg border border-border bg-muted/20 px-4 py-3">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Priority targets (general guidance)</h2>
                            <p className="text-muted-foreground mb-6">
                                Ranges vary by lab. Use these as performance targets, then confirm with your clinician.
                            </p>
                            <div className="space-y-4">
                                {targets.map((item) => (
                                    <div key={item.marker} className="rounded-xl border border-border bg-background/60 p-5">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                                            <h3 className="text-lg font-semibold text-foreground">{item.marker}</h3>
                                            <span className="text-sm font-medium text-primary">{item.target}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            <span className="font-semibold text-foreground">Why it matters: </span>
                                            {item.why}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            <span className="font-semibold text-foreground">If off target: </span>
                                            {item.action}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Action priorities</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Focus on the smallest number of changes that move the biggest markers. Most executives
                                    see fast wins from sleep consistency, protein-first meals, and steady daily movement.
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>High triglycerides or insulin: reduce liquid calories and late-night eating.</li>
                                    <li>Inflammation elevated: lock in 7-8 hours of sleep and lower weekly stress load.</li>
                                    <li>ApoB or LDL-C elevated: swap saturated fat for mono- and polyunsaturated fats.</li>
                                    <li>Low vitamin D or ferritin: confirm with a clinician before supplementing.</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading mb-4">Retest cadence</h2>
                            <ul className="space-y-2 text-muted-foreground">
                                <li>8-12 weeks after a focused change to confirm impact.</li>
                                <li>Every 6-12 months for baseline maintenance.</li>
                                <li>Quarterly if you are actively correcting multiple markers.</li>
                            </ul>
                        </div>

                        <div className="rounded-2xl border border-border bg-muted/20 p-6">
                            <h2 className="text-xl font-bold font-heading mb-3">Need a plan built around your labs?</h2>
                            <p className="text-muted-foreground mb-5">
                                We translate your biomarkers into a simple operating system with minimal friction.
                            </p>
                            <Link
                                href="/performance-reset?ref=site"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:translate-x-1 transition-transform"
                            >
                                Book 15-Min Audit <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            This guide is educational and not medical advice. Work with a licensed clinician for diagnosis,
                            treatment, or medication decisions.
                        </p>
                    </div>
                </Container>
            </Section>
        </div>
    );
}


