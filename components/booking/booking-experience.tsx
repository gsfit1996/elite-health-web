"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, CalendarCheck, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";
const BOOKING_PAGE_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A";
const SCHEDULING_SCRIPT_SRC = "https://calendar.google.com/calendar/scheduling-button-script.js";
const SCHEDULING_CSS_SRC = "https://calendar.google.com/calendar/scheduling-button-script.css";
const SCHEDULING_BUTTON_LABEL = "Book 15-Min Audit";
const SCHEDULING_BUTTON_COLOR = "#039BE5";

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

export function BookingExperience() {
    const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
    const hiddenButtonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!canUseDOM()) {
            return;
        }

        let canceled = false;
        let cleanup = () => {};

        const renderButton = () => {
            if (canceled) {
                return;
            }

            const target = hiddenButtonRef.current;
            if (!target || !window.calendar?.schedulingButton?.load) {
                setStatus("fallback");
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
                    setStatus("fallback");
                }
            }
        };

        init();

        return () => {
            canceled = true;
            cleanup();
        };
    }, []);

    const openInNewTab = useCallback(() => {
        window.open(BOOKING_PAGE_URL, "_blank", "noopener,noreferrer");
    }, []);

    const openSchedulingPopup = useCallback(() => {
        if (status === "loading") {
            return;
        }

        if (status === "fallback") {
            openInNewTab();
            return;
        }

        const button = hiddenButtonRef.current?.querySelector("button");
        if (button) {
            button.click();
            return;
        }

        setStatus("fallback");
        openInNewTab();
    }, [status, openInNewTab]);

    return (
        <>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/15 p-6 md:p-8 min-h-[520px]">
                <div
                    className="absolute inset-0 opacity-70"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at top, rgba(46, 92, 255, 0.25), transparent 60%), linear-gradient(135deg, rgba(15, 17, 21, 0.8), rgba(5, 5, 7, 0.95))",
                    }}
                />
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary shadow-[0_10px_24px_rgba(46,92,255,0.25)]">
                            <CalendarCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-primary/80">15-Min Performance Audit</p>
                            <h3 className="text-2xl font-semibold text-foreground">Schedule your audit</h3>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Get a clean diagnosis, a sharp next-step plan, and clarity on whether Elite Health OS is the right fit for you.
                    </p>

                    <div className="rounded-2xl border border-primary/20 bg-background/70 p-4 md:p-5 shadow-[0_16px_30px_rgba(0,0,0,0.25)]">
                        <div ref={hiddenButtonRef} className="sr-only" aria-hidden="true" />
                        <Button
                            onClick={openSchedulingPopup}
                            className="w-full h-12 md:h-14 text-base"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? "Loading calendar..." : SCHEDULING_BUTTON_LABEL}
                            {status === "loading" ? (
                                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                            ) : (
                                <ArrowRight className="ml-2 h-4 w-4" />
                            )}
                        </Button>
                        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                            Takes 30 seconds
                        </p>
                        {status === "fallback" && (
                            <button
                                type="button"
                                onClick={openInNewTab}
                                className="mt-3 w-full text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground/80"
                            >
                                Open booking page
                            </button>
                        )}
                    </div>

                    <div className="grid gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3">
                            <span>Timezone auto-detected</span>
                            <span className="text-primary">UK, Ireland, Lisbon</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3">
                            <span>Calendar loads on click</span>
                            <span className="text-primary">No waiting</span>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3">
                            <span>Private, secure booking</span>
                            <span className="text-primary">Google Calendar</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                <div className="rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-3 shadow-2xl">
                    <Button
                        onClick={openSchedulingPopup}
                        className="w-full h-12 text-base"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Loading calendar..." : SCHEDULING_BUTTON_LABEL}
                        {status === "loading" ? (
                            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                        ) : (
                            <ArrowRight className="ml-2 h-4 w-4" />
                        )}
                    </Button>
                    <p className="mt-2 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        Takes 30 seconds
                    </p>
                </div>
            </div>
        </>
    );
}
