"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SCHEDULING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";

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

const totalSteps = 13;

export function PerformanceResetFlow() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState<"form" | "schedule">("form");
    const [activeIndex, setActiveIndex] = useState(0);
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

    const validateAll = () => {
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

    const validateStep = (index: number) => {
        const stepErrors: FormErrors = {};
        switch (index) {
            case 0:
                if (!formData.firstName.trim()) stepErrors.firstName = "First name is required.";
                if (!formData.lastName.trim()) stepErrors.lastName = "Last name is required.";
                break;
            case 1:
                if (!formData.email.trim()) stepErrors.email = "Email is required.";
                break;
            case 2:
                if (!formData.currentBodyfat) stepErrors.currentBodyfat = "Select your current range.";
                break;
            case 3:
                if (!formData.goalBodyfat) stepErrors.goalBodyfat = "Select your goal range.";
                break;
            case 7:
                if (formData.challenges.length === 0) stepErrors.challenges = "Select at least one challenge.";
                if (formData.challenges.includes("Other") && !formData.otherChallenge.trim()) {
                    stepErrors.otherChallenge = "Tell us what else is limiting you.";
                }
                break;
            case 8:
                if (!formData.workHours) stepErrors.workHours = "Select your work hours.";
                break;
            case 9:
                if (!formData.role.trim()) stepErrors.role = "Role is required.";
                break;
            case 10:
                if (!formData.success.trim()) stepErrors.success = "Please share your success vision.";
                break;
            case 11:
                if (!formData.whyNow.trim()) stepErrors.whyNow = "Please share why now.";
                break;
            case 12:
                if (!formData.consent) stepErrors.consent = "Consent is required.";
                break;
            default:
                break;
        }

        setErrors((prev) => ({ ...prev, ...stepErrors }));
        return Object.keys(stepErrors).length === 0;
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

    const handleSubmit = async () => {
        if (!validateAll()) {
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
                        console.error("Performance reset server error", requestId);
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

    const handleNext = () => {
        if (!validateStep(activeIndex)) {
            return;
        }
        setActiveIndex((prev) => Math.min(prev + 1, totalSteps - 1));
    };

    const handleBack = () => {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
    };

    const progress = ((activeIndex + 1) / totalSteps) * 100;

    const renderStep = () => {
        switch (activeIndex) {
            case 0:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">What's your name?</h2>
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
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Where can we reach you?</h2>
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
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">CURRENT body fat %</h2>
                        <p className="text-sm text-muted-foreground">Pick the closest range.</p>
                        <select
                            value={formData.currentBodyfat}
                            onChange={(event) => updateField("currentBodyfat", event.target.value)}
                            className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
                        >
                            <option value="">Select range</option>
                            {bodyfatCurrentOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {errors.currentBodyfat && <p className="text-xs text-red-400">{errors.currentBodyfat}</p>}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">GOAL body fat %</h2>
                        <select
                            value={formData.goalBodyfat}
                            onChange={(event) => updateField("goalBodyfat", event.target.value)}
                            className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
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
                );
            case 4:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Physique confidence</h2>
                        <p className="text-sm text-muted-foreground">On a scale of 1-10 how confident are you with your current physique?</p>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min={1}
                                max={10}
                                value={formData.physiqueConfidence}
                                onChange={(event) => updateField("physiqueConfidence", Number(event.target.value))}
                                className="w-full accent-primary"
                            />
                            <span className="text-lg font-semibold text-primary">{formData.physiqueConfidence}</span>
                        </div>
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">6 PM energy</h2>
                        <p className="text-sm text-muted-foreground">On a scale of 1-10, how energized, mentally sharp, and focused do you feel by 6 PM?</p>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min={1}
                                max={10}
                                value={formData.energy6pm}
                                onChange={(event) => updateField("energy6pm", Number(event.target.value))}
                                className="w-full accent-primary"
                            />
                            <span className="text-lg font-semibold text-primary">{formData.energy6pm}</span>
                        </div>
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Daily stress</h2>
                        <p className="text-sm text-muted-foreground">On a scale of 1-10, how would you rate your average daily stress levels?</p>
                        <div className="flex items-center gap-4">
                            <input
                                type="range"
                                min={1}
                                max={10}
                                value={formData.stress}
                                onChange={(event) => updateField("stress", Number(event.target.value))}
                                className="w-full accent-primary"
                            />
                            <span className="text-lg font-semibold text-primary">{formData.stress}</span>
                        </div>
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">What's limiting you right now?</h2>
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
                );
            case 8:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Weekly work hours</h2>
                        <p className="text-sm text-muted-foreground">How many hours do you work per week, on average?</p>
                        <select
                            value={formData.workHours}
                            onChange={(event) => updateField("workHours", event.target.value)}
                            className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm"
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
                );
            case 9:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Your current role</h2>
                        <Input
                            value={formData.role}
                            onChange={(event) => updateField("role", event.target.value)}
                            placeholder="Founder, CEO, Director..."
                        />
                        {errors.role && <p className="text-xs text-red-400">{errors.role}</p>}
                    </div>
                );
            case 10:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Success in 6-12 months</h2>
                        <p className="text-sm text-muted-foreground">If you were operating at your absolute best, what would success look like?</p>
                        <textarea
                            value={formData.success}
                            onChange={(event) => updateField("success", event.target.value)}
                            rows={5}
                            className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm"
                            placeholder="Describe the outcome you want."
                        />
                        {errors.success && <p className="text-xs text-red-400">{errors.success}</p>}
                    </div>
                );
            case 11:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Why now?</h2>
                        <p className="text-sm text-muted-foreground">Why is now the right time to take action? Why not leave it off for another year?</p>
                        <textarea
                            value={formData.whyNow}
                            onChange={(event) => updateField("whyNow", event.target.value)}
                            rows={5}
                            className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm"
                            placeholder="Share what's driving urgency."
                        />
                        {errors.whyNow && <p className="text-xs text-red-400">{errors.whyNow}</p>}
                    </div>
                );
            case 12:
                return (
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">Consent</h2>
                        <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/70 p-4 text-sm">
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
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-8">
            <div className="rounded-3xl border border-border/60 bg-background/80 p-6 md:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="space-y-4">
                        <Badge variant="outline">Performance Reset</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold font-heading">
                            Book a 15-Min Performance Reset
                        </h1>
                        <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                            Typeform-style application. One question at a time, then you can schedule immediately.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-xs uppercase tracking-[0.3em] text-primary/80">
                        Step {step === "form" ? activeIndex + 1 : totalSteps} of {totalSteps}
                    </div>
                </div>
                <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted/40">
                    <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {step === "form" && (
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (activeIndex < totalSteps - 1) {
                            handleNext();
                            return;
                        }
                        handleSubmit();
                    }}
                    className="rounded-3xl border border-border/60 bg-muted/10 p-6 md:p-10 space-y-6"
                >
                    {renderStep()}

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
                        <Button
                            type="button"
                            variant="ghost"
                            onClick={handleBack}
                            disabled={activeIndex === 0 || status === "loading"}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back
                        </Button>
                        <Button type="submit" className="h-12 px-6" disabled={status === "loading"}>
                            {activeIndex < totalSteps - 1 ? "Next" : "Continue to Scheduling"}
                            {status === "loading" ? (
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            ) : (
                                <ArrowRight className="ml-2 h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </form>
            )}

            {step === "schedule" && (
                <div className="space-y-6">
                    <div className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
                        <CheckCircle2 className="h-5 w-5" />
                        Application received. Now pick a time.
                    </div>
                    <div className="rounded-3xl border border-border/60 bg-background/80 p-6 md:p-10">
                        <h2 className="text-2xl md:text-3xl font-semibold">Book 15-Min Performance Reset</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Choose a slot below. The booking stays on this page.
                        </p>
                        <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-muted/10">
                            <iframe
                                src={SCHEDULING_URL}
                                style={{ border: 0 }}
                                width="100%"
                                height="600"
                                frameBorder={0}
                                title="Book 15-Min Performance Reset"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
