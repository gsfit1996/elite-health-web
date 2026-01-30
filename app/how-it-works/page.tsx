import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "/performance-reset?ref=how-it-works";
const CLIENT_RESULTS_URL = "/client-results?ref=how-it-works";

export default function HowItWorksPage() {
    return (
        <div className="relative">
            <section className="relative overflow-hidden border-b border-border/60 bg-background/90 py-12 md:py-20">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
                    <div className="absolute -bottom-16 left-0 h-64 w-64 rounded-full bg-sky-500/10 blur-[120px]" />
                </div>
                <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 md:gap-6 px-6">
                    <Badge variant="outline">How it works</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading">
                        Install Your Elite Health Operating System
                    </h1>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-3xl">
                        Elite Health OS is a 90-day performance reset built for high-performing founders and executives.
                    </p>
                    <p className="text-sm md:text-lg text-muted-foreground max-w-3xl">
                        Instead of adding another app, diet, or 90-minute gym plan to an already jammed calendar, we install a simple operating system that fits into 20-minute blocks and delivers measurable body + brain wins — even through travel, meetings, and chaos weeks.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href={BOOKING_URL}>Book Your 15-Minute Performance Audit</Link>
                        </Button>
                        <span className="text-xs md:text-sm text-muted-foreground">
                            60-second intake before the call (weight, waist, energy, #1 goal).
                        </span>
                    </div>
                    <div className="rounded-2xl border border-border/60 bg-background/80 p-4 md:p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)]">
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Proof (real client data)</p>
                        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl border border-border/60 bg-muted/10 p-3 md:p-4">
                                <p className="text-xl md:text-2xl font-semibold">752</p>
                                <p className="text-sm text-muted-foreground">clients supported (10+ years)</p>
                            </div>
                            <div className="rounded-xl border border-border/60 bg-muted/10 p-3 md:p-4">
                                <p className="text-xl md:text-2xl font-semibold">82%</p>
                                <p className="text-sm text-muted-foreground">hit their agreed 90-day goal</p>
                            </div>
                            <div className="rounded-xl border border-border/60 bg-muted/10 p-3 md:p-4">
                                <p className="text-xl md:text-2xl font-semibold">8%</p>
                                <p className="text-sm text-muted-foreground">average body fat reduction (90 days)</p>
                            </div>
                            <div className="rounded-xl border border-border/60 bg-muted/10 p-3 md:p-4">
                                <p className="text-xl md:text-2xl font-semibold">+31%</p>
                                <p className="text-sm text-muted-foreground">average testosterone increase (via bloodwork optimisation protocols)</p>
                            </div>
                        </div>
                        <p className="mt-3 text-sm font-semibold text-primary">
                            In 15 minutes: identify your #1 bottleneck + leave with a clear 90-day outline (no hard sell).
                        </p>
                    </div>
                </div>
            </section>

            <nav className="sticky top-[72px] z-30 border-b border-border/60 bg-background/95 backdrop-blur">
                <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center gap-3 px-6 py-3 text-sm">
                    <span className="font-semibold text-muted-foreground">Jump to</span>
                    {[
                        { id: "outcomes", label: "Outcomes" },
                        { id: "for", label: "Who it’s for" },
                        { id: "how", label: "How it works" },
                        { id: "install", label: "What you install" },
                        { id: "ramp", label: "30-day ramp" },
                        { id: "proof", label: "Proof" },
                        { id: "book", label: "Book" },
                    ].map((item) => (
                        <a key={item.id} href={`#${item.id}`} className="text-muted-foreground hover:text-foreground">
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <section id="outcomes" className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold font-heading">Outcomes</h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                        What we build for founders/executives (in real-world schedules):
                    </p>
                    <ul className="grid gap-3 text-base text-muted-foreground">
                        <li>Visibly leaner waist without calorie counting or food obsession</li>
                        <li>Consistent 6pm energy (less crash, more cognitive stamina)</li>
                        <li>Travel + weekend guardrails (so progress doesn’t get erased)</li>
                        <li>Strength + athletic capacity with short, joint-smart training blocks</li>
                        <li>Internal health trending the right direction using objective biomarkers</li>
                    </ul>
                    <Link href={CLIENT_RESULTS_URL} className="text-primary hover:text-primary/80">
                        See Client Results
                    </Link>
                </div>
            </section>

            <section id="for" className="border-t border-border/60 bg-muted/5">
                <div className="mx-auto w-full max-w-6xl px-6 py-14">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">Who this is for</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Elite Health OS is for high-agency operators who are ready to execute.
                        </p>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">You’re a fit if you:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>Can trade 20 minutes of screen time for short training blocks.</li>
                                    <li>Want travel-proof nutrition systems that keep you lean + energised without weighing food.</li>
                                    <li>Prefer simple scorecards + weekly accountability over motivation hacks.</li>
                                    <li>Are willing to follow a structured 90-day protocol and make decisions quickly when shown a clear plan.</li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-lg font-semibold">It’s not for you if you:</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>Want the cheapest quick fix or expect results without effort.</li>
                                    <li>Prefer complexity for complexity’s sake.</li>
                                    <li>Rely on motivation instead of owning your execution.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how" className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">How it works</h2>
                        <p className="text-base md:text-lg text-muted-foreground">The OS Methodology (3 steps)</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                            <h3 className="text-lg font-semibold">Biological Audit</h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                                We map your current reality using the inputs that matter:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li>Waist + weight trend</li>
                                <li>Energy pattern (especially 4–8pm)</li>
                                <li>Sleep + recovery signals (wearables if you have them)</li>
                                <li>Constraints: calendar, travel, stress load, decision fatigue</li>
                                <li>No bloodwork yet? We tell you exactly what to test (and why).</li>
                            </ul>
                            <p className="mt-3 text-sm font-semibold">Output: your #1 bottleneck (the real reason progress stalls).</p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                            <h3 className="text-lg font-semibold">Protocol Design (90-day install)</h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                                We build a custom protocol across:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li>Nutrition defaults that fit office days + travel</li>
                                <li>Training blocks under 30 minutes</li>
                                <li>Recovery anchors that stabilise energy</li>
                                <li>Supplementation and biomarker tracking (if relevant)</li>
                            </ul>
                            <p className="mt-3 text-sm font-semibold">
                                Output: a low-friction plan that runs even during chaos weeks.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                            <h3 className="text-lg font-semibold">Continuous Optimisation</h3>
                            <p className="mt-3 text-sm text-muted-foreground">
                                Every week we review what happened in real life and adjust:
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                <li>keep what’s working</li>
                                <li>remove bottlenecks</li>
                                <li>simplify execution</li>
                            </ul>
                            <p className="mt-3 text-sm font-semibold">
                                Output: momentum that compounds instead of plateauing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-border/60 bg-muted/5">
                <div className="mx-auto w-full max-w-6xl px-6 py-14">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">Proof near the claims (real examples)</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <p className="font-semibold">1) SaaS Founder (high pressure)</p>
                                <p>Constraint: thought he’d need to track everything + 6pm crashes</p>
                                <p>Protocol shift: simple structure + weekly optimisation</p>
                                <p>Outcome: -8.1kg in 10 weeks, waist -9cm, energy 4/10 → 8/10 (+ biomarker improvements)</p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <p className="font-semibold">2) Busy dad (job + family load)</p>
                                <p>Constraint: routine collapsed under kids + stress + convenience food</p>
                                <p>Protocol shift: protein-first defaults + 3×/week 15–30 min strength + weekend guardrails</p>
                                <p>Outcome: 20lbs+ fat loss in ~60 days + 4 inches off waist</p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <p className="font-semibold">3) Director (back-to-back meetings)</p>
                                <p>Constraint: meetings/late nights → silent weight gain + stamina drop</p>
                                <p>Protocol shift: minimum-effective training + nutrition system + daily movement targets</p>
                                <p>Outcome: 52lbs lost in 13 weeks</p>
                            </div>
                        </div>
                        <Link href={CLIENT_RESULTS_URL} className="text-primary hover:text-primary/80">
                            See more Client Results
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold font-heading">Why traditional programs fail busy operators</h2>
                    <p className="text-base md:text-lg text-muted-foreground">Most fitness advice assumes:</p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>perfect weeks</li>
                        <li>unlimited time</li>
                        <li>endless motivation</li>
                    </ul>
                    <p className="text-base md:text-lg text-muted-foreground">Founders/executives don’t have that.</p>
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">The 3 reasons typical programs fail</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>They require perfect conditions. One travel week derails the plan.</li>
                            <li>They create decision fatigue. Too many rules, too much tracking, too much friction.</li>
                            <li>They don’t have a feedback loop. Progress stalls and you blame yourself instead of removing the bottleneck.</li>
                        </ul>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/80">
                        <div className="grid grid-cols-2 border-b border-border/60 text-sm font-semibold">
                            <div className="p-4">Typical Program</div>
                            <div className="border-l border-border/60 p-4">Elite Health OS</div>
                        </div>
                        {[
                            {
                                label: "Real life",
                                left: "Requires perfect weeks",
                                right: "Built for chaos weeks (MED plan)",
                            },
                            {
                                label: "Effort",
                                left: "Heavy tracking + complexity",
                                right: "Defaults + guardrails (low decisions)",
                            },
                            {
                                label: "When progress stalls",
                                left: "You “try harder”",
                                right: "Weekly optimisation removes the bottleneck",
                            },
                            {
                                label: "Time",
                                left: "Long sessions + big prep",
                                right: "20–30 min blocks + simple systems",
                            },
                            {
                                label: "Consistency",
                                left: "Motivation-dependent",
                                right: "Operating rhythm (scorecards + reviews)",
                            },
                        ].map((row) => (
                            <div key={row.label} className="grid grid-cols-2 border-b border-border/60 text-sm">
                                <div className="p-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{row.label}</p>
                                    <p className="mt-1 text-muted-foreground">{row.left}</p>
                                </div>
                                <div className="border-l border-border/60 p-4">
                                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{row.label}</p>
                                    <p className="mt-1 font-semibold text-foreground">{row.right}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="install" className="border-t border-border/60 bg-muted/5">
                <div className="mx-auto w-full max-w-6xl px-6 py-14">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">What you install</h2>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <h3 className="text-lg font-semibold">Smart Nutrition</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Low-friction, high-compliance nutrition that fits real schedules.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                    <li>Protein-first defaults (no macro obsession)</li>
                                    <li>Travel and weekend guardrails</li>
                                    <li>Energy-stable structure that reduces crashes</li>
                                </ul>
                                <p className="mt-3 text-sm font-semibold">
                                    Outcome: consistent fat loss + stable cognition without the food noise.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <h3 className="text-lg font-semibold">Intelligent Training</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Short training blocks that protect joints and drive results.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                    <li>Under 30 minutes</li>
                                    <li>Block periodisation to avoid plateaus</li>
                                    <li>Starts with what you can execute under pressure</li>
                                </ul>
                                <p className="mt-3 text-sm font-semibold">
                                    Outcome: strength + physique improvements that compound.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <h3 className="text-lg font-semibold">Optimised Biomarkers</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Objective health markers that keep internal health trending correctly.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                    <li>Essential blood marker list (what to test + why)</li>
                                    <li>Supplementation protocols if anything is off</li>
                                    <li>Track markers like ApoB, hs-CRP, fasting glucose (as needed)</li>
                                </ul>
                                <p className="mt-3 text-sm font-semibold">
                                    Outcome: performance gains with internal health aligned.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-border/60 bg-background/80 p-5">
                                <h3 className="text-lg font-semibold">Accountability + Support</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    A system that keeps execution tight.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                    <li>Weekly scorecards (what to hit + how you’ll measure it)</li>
                                    <li>Bottlenecks solved quickly</li>
                                    <li>Support Monday–Saturday via WhatsApp</li>
                                    <li>Delivered via a simple coaching app (no technical friction)</li>
                                </ul>
                                <p className="mt-3 text-sm font-semibold">
                                    Outcome: you stay consistent without relying on motivation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold font-heading">The mechanisms that keep momentum</h2>
                    <ul className="grid gap-3 text-muted-foreground">
                        <li>MED Week Standards: minimum effective dose plan for chaos weeks</li>
                        <li>Never Miss Twice: rapid rebound before slip-ups spiral</li>
                        <li>Weekend + Travel Guardrails: airports, dinners, social events without derailment</li>
                        <li>Default Decisions: fewer decisions, higher compliance</li>
                        <li>Performance Reviews: measure + adjust like a business rhythm</li>
                    </ul>
                </div>
            </section>

            <section className="border-t border-border/60 bg-muted/5">
                <div className="mx-auto w-full max-w-6xl px-6 py-14">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">Weekly rhythm (what “optimisation” looks like)</h2>
                        <ul className="grid gap-3 text-muted-foreground">
                            <li>Sunday: scorecard review (what happened vs plan)</li>
                            <li>Monday: plan updated (nutrition + training + guardrails for the week)</li>
                            <li>Midweek: quick correction if metrics slip (energy/waist/execution)</li>
                            <li>Ongoing: WhatsApp support for blockers (Mon–Sat)</li>
                        </ul>
                        <p className="text-muted-foreground">Simple cadence. No drama. Momentum compounds.</p>
                    </div>
                </div>
            </section>

            <section id="ramp" className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold font-heading">30-day ramp</h2>
                    <p className="text-base md:text-lg text-muted-foreground">
                        What you’ll have running fast (without needing perfect weeks):
                    </p>
                    <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/80 text-sm">
                        <div className="grid grid-cols-3 border-b border-border/60 bg-muted/10 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            <div className="p-3">Milestone</div>
                            <div className="p-3">Key actions</div>
                            <div className="p-3">Outcome</div>
                        </div>
                        {[
                            {
                                milestone: "Today – Baseline",
                                actions: "waist + steps tracked, constraints mapped to calendar/travel",
                                outcome: "week 1 starts low-friction with defaults installed",
                            },
                            {
                                milestone: "Day 7 – Stabilise",
                                actions: "first review, MED plan built for chaos weeks, adjustments made",
                                outcome: "momentum locks in; you know exactly what to hit",
                            },
                            {
                                milestone: "Day 14 – Guardrails",
                                actions: "weekend rules installed, training progression, recovery anchors",
                                outcome: "energy stays high and progress is protected",
                            },
                            {
                                milestone: "Day 30 – Momentum",
                                actions: "waist trend becomes predictable, execution feels simple",
                                outcome: "you can see and feel the OS working",
                            },
                        ].map((row) => (
                            <div key={row.milestone} className="grid grid-cols-3 border-b border-border/60">
                                <div className="p-3 font-semibold">{row.milestone}</div>
                                <div className="p-3 text-muted-foreground">{row.actions}</div>
                                <div className="p-3 text-muted-foreground">{row.outcome}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="proof" className="border-t border-border/60 bg-muted/5">
                <div className="mx-auto w-full max-w-6xl px-6 py-14">
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-4xl font-bold font-heading">Proof</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Typical outcomes for clients with 80–100% adherence:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                            <li>Body weight: baseline → -6 to -13 kg (sustainable fat loss)</li>
                            <li>Energy: 5/10 → 8/10 (more consistent focus + productivity)</li>
                            <li>Biomarkers: improved internal health trends (case-dependent)</li>
                            <li>Results vary by starting point and consistency.</li>
                        </ul>
                        <Link href={CLIENT_RESULTS_URL} className="text-primary hover:text-primary/80">
                            View Client Results
                        </Link>
                    </div>
                </div>
            </section>

            <section id="book" className="mx-auto w-full max-w-6xl px-6 py-14">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold font-heading">Book</h2>
                    <p className="text-base md:text-lg text-muted-foreground">What happens after I book?</p>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>60-second intake (so the call is personalised)</li>
                        <li>15-minute Performance Audit: diagnose the constraint + outline the 90-day approach</li>
                        <li>If fit: you get the full protocol + weekly scorecard rhythm</li>
                        <li>After the call, you’ll receive a personalised 90-day blueprint and a clear yes/no decision.</li>
                    </ul>
                    <Button asChild className="h-12 px-6 text-base">
                        <Link href={BOOKING_URL}>Book Your 15-Minute Performance Audit</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
