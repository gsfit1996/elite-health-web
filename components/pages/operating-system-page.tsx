import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=how_it_works";

export function OperatingSystemPageContent() {
    return (
        <div className="pt-24">
            <Section className="pb-0">
                <Container>
                    <div className="max-w-4xl">
                        <Badge variant="outline">Elite Health OS</Badge>
                        <h1 className="mt-4 text-4xl md:text-6xl font-bold font-heading">
                            Install Your Elite Health Operating System
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            Elite Health OS is a 90-day performance-reset built for high-performing founders and executives. Instead of throwing another app or diet at your already jammed schedule, we install a simple operating system that fits into 20-minute blocks and delivers measurable body and brain transformations.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Button asChild className="h-12 px-6">
                                <Link href={BOOKING_URL}>
                                    Book Your 15-Minute Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <p className="text-sm text-muted-foreground">
                                Complete a 60-second intake (weight, waist, energy, top goal) ahead of the call.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-start">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">Why traditional programs fail busy operators</h2>
                            <p className="mt-4 text-muted-foreground">
                                Most fitness advice assumes unlimited time, perfect conditions and endless motivation. Elite Health OS is designed for the opposite. It assumes your weeks are chaotic, your time is scarce and your energy must be deployed strategically.
                            </p>
                            <div className="mt-6 space-y-5">
                                <div className="rounded-2xl border border-border/60 bg-background/70 p-5">
                                    <p className="text-sm font-semibold text-foreground">Time-light, frictionless habits</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        We swap 90-minute gym sessions for 20-30 minute workouts and high-protein defaults. You stay on track even when work explodes or you are traveling.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-border/60 bg-background/70 p-5">
                                    <p className="text-sm font-semibold text-foreground">Constraint-led design</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Your plan is built around your specific constraints - calendar, travel, sleep and stress. No cookie-cutter diets or rigid macros.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-border/60 bg-background/70 p-5">
                                    <p className="text-sm font-semibold text-foreground">Continuous support and data</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Weekly scorecards and real-time micro-adjustments eliminate bottlenecks so progress never stalls. Objective biomarkers - ApoB, hs-CRP, fasting glucose and more - are monitored to ensure internal health trends in the right direction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-border/60 bg-muted/10 p-6">
                            <h3 className="text-xl font-bold">Who this is for (and who it isn't)</h3>
                            <div className="mt-5 space-y-6">
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Elite Health OS is for high-agency operators who are ready to execute.</p>
                                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                        <li>Can trade 20 minutes of screen time for short training blocks and value simple, measurable progress.</li>
                                        <li>Want travel-proof nutrition systems that keep you lean and energized without weighing food or tracking every calorie.</li>
                                        <li>Prefer clear scorecards and weekly accountability to stay consistent.</li>
                                        <li>Are willing to follow a structured 90-day protocol and make decisions quickly when presented with a clear plan.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-foreground">It's not for you if you...</p>
                                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                        <li>Seek the cheapest quick-fix or expect results without effort.</li>
                                        <li>Obsess over macros or prefer complexity for complexity's sake.</li>
                                        <li>Rely on external motivation rather than taking ownership of your health.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container>
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">The OS methodology - how we build your system</h2>
                        <div className="mt-8 grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    title: "1. Biological Audit",
                                    description:
                                        "We collect and analyze your blood work, wearable data and lifestyle metrics to uncover the bottlenecks. You'll know exactly what is holding back your performance.",
                                },
                                {
                                    title: "2. Protocol Design",
                                    description:
                                        "Using your audit results, we design a custom 90-day protocol covering nutrition, training and supplementation. The protocols remove decision fatigue and protect progress by aligning with your calendar and travel schedule.",
                                },
                                {
                                    title: "3. Continuous Optimization",
                                    description:
                                        "Every week we review your metrics and adjust your plan so momentum builds instead of plateauing. The goal is to ensure your waist, energy and biomarkers trend in the right direction.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="rounded-2xl border border-border/60 bg-background/80 p-6">
                                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading">The four pillars - what you will install</h2>
                            <div className="mt-6 space-y-5">
                                {[
                                    {
                                        title: "Smart Nutrition",
                                        description:
                                            "Your nutrition plan is low-friction and high-compliance. It boosts energy, sharpens mental clarity and fits seamlessly into your busy schedule. You won't need to weigh food or follow restrictive diets; instead, high-protein defaults and travel-proof systems support consistent fat loss.",
                                    },
                                    {
                                        title: "Intelligent Training",
                                        description:
                                            "Workouts are kept under 30 minutes and use block periodization to avoid injury and plateaus. We start with what you can execute under pressure, then progress strategically so results compound.",
                                    },
                                    {
                                        title: "Optimized Biomarkers",
                                        description:
                                            "You receive a list of essential blood markers to check, and if anything is off we tailor a science-backed supplementation protocol. Objective metrics like ApoB, hs-CRP and fasting glucose are tracked to ensure internal health improves.",
                                    },
                                    {
                                        title: "Accountability and Support",
                                        description:
                                            "Weekly scorecards give you the exact steps and metrics to hit each week. Bottlenecks from the prior week are solved quickly and you work directly with a coach, with support available Monday-Saturday via WhatsApp. All protocols are delivered through a simple coaching app so there is no technical friction.",
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="rounded-2xl border border-border/60 bg-background/70 p-5">
                                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
                            <h3 className="text-xl font-bold">The mechanisms that keep momentum</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <li><span className="font-semibold text-foreground">MED Week Standards:</span> protect progress when work explodes with a minimum-effective-dose plan.</li>
                                <li><span className="font-semibold text-foreground">Never Miss Twice:</span> turn slip-ups into quick rebounds before they become spirals.</li>
                                <li><span className="font-semibold text-foreground">Weekend and Travel Guardrails:</span> navigate weekends, airports and dinners without undoing the week's progress.</li>
                                <li><span className="font-semibold text-foreground">Default Decisions:</span> pre-made defaults reduce decision fatigue and protect results.</li>
                                <li><span className="font-semibold text-foreground">Performance Reviews:</span> measure and adjust like a business operating rhythm.</li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">What you will have running in 30 days</h2>
                    <div className="mt-6 overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-muted/30 text-xs uppercase tracking-wide text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-4">Milestone</th>
                                    <th className="px-6 py-4">Key actions</th>
                                    <th className="px-6 py-4">Outcome</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/60">
                                {[
                                    {
                                        milestone: "Today - Baseline",
                                        actions: "Baseline audit, waist and step tracking, constraints mapped against travel and calendar load",
                                        outcome: "Week 1 starts low-friction with defaults installed",
                                    },
                                    {
                                        milestone: "Day 7 - Stabilize",
                                        actions: "Data-driven adjustments to nutrition and training, MED Week plan built for chaos weeks, first performance review",
                                        outcome: "Momentum locks in; you know exactly what to hit",
                                    },
                                    {
                                        milestone: "Day 14 - Guardrails",
                                        actions: "Weekend rules installed, joint-smart training progression, recovery anchors dialled in",
                                        outcome: "Energy stays high and progress is protected",
                                    },
                                    {
                                        milestone: "Day 30 - Momentum",
                                        actions: "Waist trend becomes predictable, evening energy improves and execution feels simple because defaults run the week",
                                        outcome: "You can see and feel the OS working",
                                    },
                                ].map((row) => (
                                    <tr key={row.milestone}>
                                        <td className="px-6 py-4 font-semibold text-foreground">{row.milestone}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{row.actions}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{row.outcome}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">Typical 90-day outcomes</h2>
                    <p className="mt-4 text-muted-foreground">
                        For clients who follow the program with 80-100% adherence, typical results include:
                    </p>
                    <div className="mt-6 overflow-x-auto rounded-2xl border border-border/60 bg-background/80">
                        <table className="min-w-full text-left text-sm">
                            <thead className="bg-muted/30 text-xs uppercase tracking-wide text-muted-foreground">
                                <tr>
                                    <th className="px-6 py-4">Metric</th>
                                    <th className="px-6 py-4">Week 0</th>
                                    <th className="px-6 py-4">Week 12</th>
                                    <th className="px-6 py-4">Change</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/60">
                                <tr>
                                    <td className="px-6 py-4 font-semibold text-foreground">Body weight</td>
                                    <td className="px-6 py-4 text-muted-foreground">baseline</td>
                                    <td className="px-6 py-4 text-muted-foreground">-6 to -13 kg</td>
                                    <td className="px-6 py-4 text-muted-foreground">Sustainable fat loss</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold text-foreground">Energy levels</td>
                                    <td className="px-6 py-4 text-muted-foreground">5/10</td>
                                    <td className="px-6 py-4 text-muted-foreground">8/10</td>
                                    <td className="px-6 py-4 text-muted-foreground">Continuous focus and productivity</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-semibold text-foreground">Biomarkers</td>
                                    <td className="px-6 py-4 text-muted-foreground">ApoB 112 mg/dL, hs-CRP 2.4 mg/L, fasting glucose 103 mg/dL</td>
                                    <td className="px-6 py-4 text-muted-foreground">ApoB 86 mg/dL, hs-CRP 0.9 mg/L, fasting glucose 92 mg/dL</td>
                                    <td className="px-6 py-4 text-muted-foreground">Improved internal health</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-sm text-muted-foreground">
                        A representative client lost 9 kg and 8 cm off his waist within 12 weeks, increased energy from 5/10 to 8/10 and improved sleep efficiency by 7 points. Results vary with adherence, but these outcomes are common when the protocol is followed.
                    </p>
                </Container>
            </Section>

            <Section className="bg-muted/10">
                <Container className="max-w-4xl">
                    <div className="rounded-3xl border border-primary/20 bg-primary/5 p-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to install the OS?</h2>
                        <p className="mt-4 text-muted-foreground">
                            Book your 15-minute audit to map your current situation to where you want to be in 90 days. Complete a 60-second intake (weight, waist, energy, top goal) ahead of the call. After the call you'll receive a personalised 90-day blueprint and a clear yes/no decision.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            If you're ready to follow a simple, measurable, constraint-led system and experience sustained energy, fat loss and health optimisation, schedule your audit now.
                        </p>
                        <div className="mt-6">
                            <Button asChild className="h-12 px-6">
                                <Link href={BOOKING_URL}>
                                    Book Your 15-Minute Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
