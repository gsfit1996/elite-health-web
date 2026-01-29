"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";

const SCHEDULING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";
const SCHEDULING_SCRIPT_SRC = "https://calendar.google.com/calendar/scheduling-button-script.js";
const SCHEDULING_CSS_SRC = "https://calendar.google.com/calendar/scheduling-button-script.css";
const SCHEDULING_BUTTON_LABEL = "Book 15-Min Performance Reset";
const SCHEDULING_BUTTON_COLOR = "#039BE5";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    currentBodyfat: string;
    goalBodyfat: string;
    physiqueConfidence: number;
    energy6pm: number;
    stress: number;
    challenges: string[];
    otherChallenge: string;
    workHours: string;
    role: string;
    success: string;
    whyNow: string;
    consent: boolean;
    company: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type SchedulingButtonLoadOptions = {
    url: string;
    color?: string;
    label?: string;
    target?: Element | null;
};

declare global {
    interface Window {
        calendar?: {
            schedulingButton?: {
                load: (options: SchedulingButtonLoadOptions) => void;
            };
        };
    }
}

let schedulingScriptPromise: Promise<void> | null = null;

const bodyfatCurrentOptions = ["10-12%", "13-15%", "16-18%", "19-22%", "23-27%", "28%+"];
const bodyfatGoalOptions = ["10-12%", "13-15%", "16-18%", "19-22%", "23%+"];
const workHoursOptions = ["30-40", "41-50", "51-60", "61-70", "70+"];
const challengeOptions = [
    "Stubborn fat loss",
    "Low 6pm energy / crash",
    "Poor sleep",
    "High stress / anxiety",
    "Inconsistent nutrition",
    "Inconsistent training",
    "Travel disrupting routines",
    "Low libido / hormones",
    "High cholesterol / biomarkers",
    "Time constraints",
    "Other",
];

const canUseDOM = () => typeof window !== "undefined" && typeof document !== "undefined";

const ensureSchedulingStyles = () => {
    if (!canUseDOM() || !document.head) {
        return;
    }

    const existing = document.querySelector<HTMLLinkElement>("link[data-scheduling-style]");
    if (existing) {
        return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = SCHEDULING_CSS_SRC;
    link.dataset.schedulingStyle = "true";
    document.head.appendChild(link);
};

const ensureSchedulingScript = () => {
    if (!canUseDOM() || !document.body) {
        return Promise.reject(new Error("DOM not ready"));
    }

    if (window.calendar?.schedulingButton?.load) {
        return Promise.resolve();
    }

    if (schedulingScriptPromise) {
        return schedulingScriptPromise;
    }

    schedulingScriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>("script[data-scheduling-script]");
        if (existing) {
            if (window.calendar?.schedulingButton?.load) {
                resolve();
                return;
            }

            existing.addEventListener("load", () => resolve());
            existing.addEventListener("error", () => reject(new Error("Scheduling script failed to load")));
            return;
        }

        const script = document.createElement("script");
        script.src = SCHEDULING_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.dataset.schedulingScript = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Scheduling script failed to load"));
        document.body.appendChild(script);
    });

    return schedulingScriptPromise;
};

const renderSchedulingButton = (target: HTMLElement) => {
    if (!window.calendar?.schedulingButton?.load) {
        return;
    }

    target.innerHTML = "";
    window.calendar.schedulingButton.load({
        url: SCHEDULING_URL,
        color: SCHEDULING_BUTTON_COLOR,
        label: SCHEDULING_BUTTON_LABEL,
        target,
    });
};

function CalendarSchedulingEmbed({ active }: { active: boolean }) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
        if (!active || !canUseDOM()) {
            return;
        }

        let canceled = false;
        let cleanup = () => {};

        const renderButton = () => {
            if (canceled) {
                return;
            }

            const target = targetRef.current;
            if (!target || !window.calendar?.schedulingButton?.load) {
                setStatus("error");
                return;
            }

            renderSchedulingButton(target);
            setStatus("ready");
        };

        const init = async () => {
            try {
                ensureSchedulingStyles();
                await ensureSchedulingScript();

                if (canceled) {
                    return;
                }

                if (document.readyState === "complete") {
                    renderButton();
                } else {
                    window.addEventListener("load", renderButton, { once: true });
                    cleanup = () => window.removeEventListener("load", renderButton);
                }
            } catch (error) {
                if (!canceled) {
                    setStatus("error");
                }
            }
        };

        init();

        return () => {
            canceled = true;
            cleanup();
        };
    }, [active]);

    return (
        <div className="rounded-2xl border border-border/60 bg-background/70 p-6 text-center shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <p className="text-xs uppercase tracking-[0.2em] text-primary/70">Step 2 of 2</p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">Book your 15-minute performance reset</h3>
            <p className="mt-2 text-sm text-muted-foreground">
                Stay on this page and choose the time that works best. We will send confirmation details to your email.
            </p>
            <div className="mt-6 flex justify-center">
                <div ref={targetRef} />
            </div>
            {status === "loading" && (
                <p className="mt-4 text-xs text-muted-foreground">Loading scheduling options...</p>
            )}
            {status === "error" && (
                <p className="mt-4 text-xs text-muted-foreground">
                    Scheduling is still loading. Please refresh this page or try again in a few moments.
                </p>
            )}
        </div>
    );
}

export function PerformanceResetFlow() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState<"form" | "schedule">("form");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errors, setErrors] = useState<FormErrors>({});
    const [serverError, setServerError] = useState<string | null>(null);
    const [serverErrorId, setServerErrorId] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        currentBodyfat: "",
        goalBodyfat: "",
        physiqueConfidence: 5,
        energy6pm: 5,
        stress: 5,
        challenges: [],
        otherChallenge: "",
        workHours: "",
        role: "",
        success: "",
        whyNow: "",
        consent: false,
        company: "",
    });

    const trackingPayload = useMemo(() => {
        return {
            utm_source: searchParams?.get("utm_source") ?? undefined,
            utm_medium: searchParams?.get("utm_medium") ?? undefined,
            utm_campaign: searchParams?.get("utm_campaign") ?? undefined,
            utm_content: searchParams?.get("utm_content") ?? undefined,
            utm_term: searchParams?.get("utm_term") ?? undefined,
            gclid: searchParams?.get("gclid") ?? undefined,
        };
    }, [searchParams]);

    const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const toggleChallenge = (challenge: string) => {
        setFormData((prev) => {
            const exists = prev.challenges.includes(challenge);
            const next = exists
                ? prev.challenges.filter((item) => item !== challenge)
                : [...prev.challenges, challenge];
            return {
                ...prev,
                challenges: next,
                otherChallenge: challenge === "Other" && exists ? "" : prev.otherChallenge,
            };
        });
        setErrors((prev) => ({ ...prev, challenges: undefined }));
    };

    const validate = () => {
        const nextErrors: FormErrors = {};
        if (!formData.firstName.trim()) nextErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required.";
        if (!formData.email.trim()) nextErrors.email = "Email is required.";
        if (!formData.currentBodyfat) nextErrors.currentBodyfat = "Select your current range.";
        if (!formData.goalBodyfat) nextErrors.goalBodyfat = "Select your goal range.";
        if (formData.challenges.length === 0) nextErrors.challenges = "Select at least one challenge.";
        if (formData.challenges.includes("Other") && !formData.otherChallenge.trim()) {
            nextErrors.otherChallenge = "Tell us what else is limiting you.";
        }
        if (!formData.workHours) nextErrors.workHours = "Select your work hours.";
        if (!formData.role.trim()) nextErrors.role = "Role is required.";
        if (!formData.success.trim()) nextErrors.success = "Please share your success vision.";
        if (!formData.whyNow.trim()) nextErrors.whyNow = "Please share why now.";
        if (!formData.consent) nextErrors.consent = "Consent is required.";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };


    const applyFieldErrors = (fieldErrors: Record<string, string[] | undefined>) => {
        const nextErrors: FormErrors = {};
        const map: Record<string, keyof FormState> = {
            firstName: "firstName",
            lastName: "lastName",
            email: "email",
            phone: "phone",
            currentBodyfatRange: "currentBodyfat",
            goalBodyfatRange: "goalBodyfat",
            physiqueConfidence: "physiqueConfidence",
            energy6pm: "energy6pm",
            stress: "stress",
            challenges: "challenges",
            workHoursRange: "workHours",
            role: "role",
            success612: "success",
            whyNow: "whyNow",
            consent: "consent",
            company: "company",
        };

        Object.entries(fieldErrors).forEach(([key, messages]) => {
            if (!messages || messages.length === 0) return;
            const formKey = map[key];
            if (formKey) {
                nextErrors[formKey] = messages[0];
            }
        });

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validate()) {
            return;
        }

        setStatus("loading");
        setServerError(null);
        setServerErrorId(null);

        const challenges = [...formData.challenges];
        if (formData.otherChallenge.trim()) {
            challenges.push(`Other: ${formData.otherChallenge.trim()}`);
        }

        const payload = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim() || undefined,
            currentBodyfatRange: formData.currentBodyfat,
            goalBodyfatRange: formData.goalBodyfat,
            physiqueConfidence: formData.physiqueConfidence,
            energy6pm: formData.energy6pm,
            stress: formData.stress,
            challenges,
            workHoursRange: formData.workHours,
            role: formData.role.trim(),
            success612: formData.success.trim(),
            whyNow: formData.whyNow.trim(),
            consent: formData.consent,
            company: formData.company.trim(),
            referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
            landingPath:
                typeof window !== "undefined"
                    ? `${window.location.pathname}${window.location.search}`
                    : undefined,
            ...trackingPayload,
        };

        try {
            const response = await fetch("/api/performance-reset", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                if (response.status === 400) {
                    if (result?.fieldErrors) {
                        applyFieldErrors(result.fieldErrors);
                    }
                    setServerError(result?.message || "Please check the highlighted fields.");
                } else if (response.status === 401) {
                    setServerError("Unauthorized (admin auth is blocking the API).");
                } else if (response.status >= 500) {
                    const requestId = result?.requestId || result?.errorId;
                    if (requestId) {
                        setServerErrorId(String(requestId));
                    }
                    setServerError("Server error - please try again.");
                } else {
                    setServerError(result?.message || "Something went wrong. Please try again.");
                }
                setStatus("error");
                return;
            }

            setStatus("success");
            setStep("schedule");
        } catch (error) {
            setStatus("error");
            setServerError(error instanceof Error ? error.message : "Something went wrong.");
        }
    };

    return (
        <div className="space-y-10">
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 md:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-4">
                        <Badge variant="outline">Performance Reset</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading">
                            Book a 15-Min Performance Reset
                        </h1>
                        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                            Complete the short application so we can review your constraints and personalise the reset. Once submitted, you can schedule instantly.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-primary/80">
                        Step {step === "form" ? "1" : "2"} of 2
                    </div>
                </div>
            </div>

            {step === "form" && (
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid gap-6 rounded-3xl border border-border/60 bg-muted/10 p-6 md:p-10">
                        <h2 className="text-xl font-semibold text-foreground">Application form</h2>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">First name</label>
                                <Input
                                    value={formData.firstName}
                                    onChange={(event) => updateField("firstName", event.target.value)}
                                    placeholder="First name"
                                />
                                {errors.firstName && <p className="text-xs text-red-400">{errors.firstName}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Last name</label>
                                <Input
                                    value={formData.lastName}
                                    onChange={(event) => updateField("lastName", event.target.value)}
                                    placeholder="Last name"
                                />
                                {errors.lastName && <p className="text-xs text-red-400">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Email</label>
                                <Input
                                    type="email"
                                    value={formData.email}
                                    onChange={(event) => updateField("email", event.target.value)}
                                    placeholder="you@email.com"
                                />
                                {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Mobile / WhatsApp (optional)</label>
                                <Input
                                    value={formData.phone}
                                    onChange={(event) => updateField("phone", event.target.value)}
                                    placeholder="+44 7..."
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">CURRENT body fat %</label>
                                <select
                                    value={formData.currentBodyfat}
                                    onChange={(event) => updateField("currentBodyfat", event.target.value)}
                                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                                >
                                    <option value="">Select range</option>
                                    {bodyfatCurrentOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-xs text-muted-foreground">Pick the closest range.</p>
                                {errors.currentBodyfat && <p className="text-xs text-red-400">{errors.currentBodyfat}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">GOAL body fat %</label>
                                <select
                                    value={formData.goalBodyfat}
                                    onChange={(event) => updateField("goalBodyfat", event.target.value)}
                                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                                >
                                    <option value="">Select range</option>
                                    {bodyfatGoalOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.goalBodyfat && <p className="text-xs text-red-400">{errors.goalBodyfat}</p>}
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                {
                                    label: "On a scale of 1-10 how confident are you with your current physique?",
                                    value: formData.physiqueConfidence,
                                    key: "physiqueConfidence",
                                },
                                {
                                    label: "On a scale of 1-10, how energized, mentally sharp, and focused do you feel by 6 PM?",
                                    value: formData.energy6pm,
                                    key: "energy6pm",
                                },
                                {
                                    label: "On a scale of 1-10, how would you rate your average daily stress levels?",
                                    value: formData.stress,
                                    key: "stress",
                                },
                            ].map((item) => (
                                <div key={item.key} className="space-y-3 rounded-2xl border border-border/60 bg-background/70 p-4">
                                    <label className="text-sm font-semibold text-foreground">{item.label}</label>
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="range"
                                            min={1}
                                            max={10}
                                            value={item.value}
                                            onChange={(event) =>
                                                updateField(item.key as keyof FormState, Number(event.target.value) as FormState[keyof FormState])
                                            }
                                            className="w-full accent-primary"
                                        />
                                        <span className="text-sm font-semibold text-primary">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm font-semibold">Which of these challenges is currently limiting your performance or quality of life?</p>
                            <div className="grid gap-3 md:grid-cols-2">
                                {challengeOptions.map((option) => (
                                    <label key={option} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/70 p-3 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={formData.challenges.includes(option)}
                                            onChange={() => toggleChallenge(option)}
                                            className="h-4 w-4 accent-primary"
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            {formData.challenges.includes("Other") && (
                                <div className="space-y-2">
                                    <Input
                                        value={formData.otherChallenge}
                                        onChange={(event) => updateField("otherChallenge", event.target.value)}
                                        placeholder="Tell us more..."
                                    />
                                    {errors.otherChallenge && <p className="text-xs text-red-400">{errors.otherChallenge}</p>}
                                </div>
                            )}
                            {errors.challenges && <p className="text-xs text-red-400">{errors.challenges}</p>}
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">How many hours do you work per week, on average?</label>
                                <select
                                    value={formData.workHours}
                                    onChange={(event) => updateField("workHours", event.target.value)}
                                    className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                                >
                                    <option value="">Select range</option>
                                    {workHoursOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.workHours && <p className="text-xs text-red-400">{errors.workHours}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">What's your current occupation/role?</label>
                                <Input
                                    value={formData.role}
                                    onChange={(event) => updateField("role", event.target.value)}
                                    placeholder="Founder, CEO, Director..."
                                />
                                {errors.role && <p className="text-xs text-red-400">{errors.role}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold">If you were operating at your absolute best - physically, mentally, and professionally - what would success look like for you 6-12 months from now?</label>
                            <textarea
                                value={formData.success}
                                onChange={(event) => updateField("success", event.target.value)}
                                rows={4}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Describe the outcome you want."
                            />
                            {errors.success && <p className="text-xs text-red-400">{errors.success}</p>}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold">Why is now the right time to take action? Why not leave it off for another year?</label>
                            <textarea
                                value={formData.whyNow}
                                onChange={(event) => updateField("whyNow", event.target.value)}
                                rows={4}
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                placeholder="Share what's driving urgency."
                            />
                            {errors.whyNow && <p className="text-xs text-red-400">{errors.whyNow}</p>}
                        </div>

                        <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/70 p-3 text-sm">
                            <input
                                type="checkbox"
                                checked={formData.consent}
                                onChange={(event) => updateField("consent", event.target.checked)}
                                className="mt-1 h-4 w-4 accent-primary"
                            />
                            <span>
                                I agree to be contacted about my application and understand Elite Health OS is not medical care.
                                <Link href="/privacy" className="ml-1 text-primary hover:text-primary/80">Privacy Policy</Link>.
                            </span>
                        </label>
                        {errors.consent && <p className="text-xs text-red-400">{errors.consent}</p>}

                        <input
                            type="text"
                            value={formData.company}
                            onChange={(event) => updateField("company", event.target.value)}
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                        />

                        {serverError && (
                            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                                <p>{serverError}</p>
                                {serverErrorId && (
                                    <p className="mt-2 text-xs text-red-200/80">Error ID: {serverErrorId}</p>
                                )}
                            </div>
                        )}

                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            <p className="text-xs text-muted-foreground">
                                Step 1 required. Scheduling will unlock after submission.
                            </p>
                            <Button type="submit" className="h-12 px-6" disabled={status === "loading"}>
                                {status === "loading" ? "Submitting..." : "Continue to Scheduling"}
                                {status === "loading" ? (
                                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                ) : (
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                </form>
            )}

            {step === "schedule" && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                        Application received. Now pick a time.
                    </div>
                    <CalendarSchedulingEmbed active={step === "schedule"} />
                </div>
            )}
        </div>
    );
}
