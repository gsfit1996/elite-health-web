"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight, CalendarCheck, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/elitelevelcoaching-gareth/15-min-founder-performance-reset";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_SRC = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_OVERLAY_SELECTOR = ".calendly-overlay, .calendly-popup";

type CalendlyPopupOptions = {
    url: string;
    prefill?: Record<string, string>;
    utm?: Record<string, string>;
    pageSettings?: {
        primaryColor?: string;
        textColor?: string;
        backgroundColor?: string;
        hideEventTypeDetails?: boolean;
        hideLandingPageDetails?: boolean;
    };
};

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: CalendlyPopupOptions) => void;
        };
    }
}

let calendlyScriptPromise: Promise<void> | null = null;

const addLinkTag = (rel: "preconnect" | "dns-prefetch", href: string) => {
    if (document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        return;
    }

    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    if (rel === "preconnect") {
        link.crossOrigin = "anonymous";
    }
    document.head.appendChild(link);
};

const warmCalendlyConnections = () => {
    addLinkTag("dns-prefetch", "https://assets.calendly.com");
    addLinkTag("dns-prefetch", "https://calendly.com");
    addLinkTag("dns-prefetch", "https://js.stripe.com");
    addLinkTag("preconnect", "https://assets.calendly.com");
    addLinkTag("preconnect", "https://calendly.com");
    addLinkTag("preconnect", "https://js.stripe.com");
};

const ensureCalendlyStyles = () => {
    const existing = document.querySelector<HTMLLinkElement>("link[data-calendly-style]");
    if (existing) {
        return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_CSS_SRC;
    link.dataset.calendlyStyle = "true";
    document.head.appendChild(link);
};

const ensureCalendlyScript = () => {
    if (window.Calendly?.initPopupWidget) {
        return Promise.resolve();
    }

    if (calendlyScriptPromise) {
        return calendlyScriptPromise;
    }

    calendlyScriptPromise = new Promise((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>("script[data-calendly-script]");
        if (existing) {
            if (window.Calendly?.initPopupWidget) {
                resolve();
                return;
            }

            existing.addEventListener("load", () => resolve());
            existing.addEventListener("error", () => reject(new Error("Calendly script failed to load")));
            return;
        }

        const script = document.createElement("script");
        script.src = CALENDLY_SCRIPT_SRC;
        script.async = true;
        script.defer = true;
        script.dataset.calendlyScript = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Calendly script failed to load"));
        document.body.appendChild(script);
    });

    return calendlyScriptPromise;
};

const waitForCalendlyOverlay = (timeoutMs: number) => {
    return new Promise<boolean>((resolve) => {
        const existing = document.querySelector(CALENDLY_OVERLAY_SELECTOR);
        if (existing) {
            resolve(true);
            return;
        }

        let resolved = false;
        const observer = new MutationObserver(() => {
            if (document.querySelector(CALENDLY_OVERLAY_SELECTOR)) {
                if (!resolved) {
                    resolved = true;
                    observer.disconnect();
                    resolve(true);
                }
            }
        });

        observer.observe(document.body, { childList: true, subtree: true });

        window.setTimeout(() => {
            if (!resolved) {
                resolved = true;
                observer.disconnect();
                resolve(false);
            }
        }, timeoutMs);
    });
};

const buildCalendlyPayload = () => {
    const params = new URLSearchParams(window.location.search);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const prefill: Record<string, string> = {};
    const name = params.get("name");
    const email = params.get("email");
    const firstName = params.get("first_name") || params.get("firstName");
    const lastName = params.get("last_name") || params.get("lastName");

    if (name) prefill.name = name;
    if (email) prefill.email = email;
    if (firstName) prefill.firstName = firstName;
    if (lastName) prefill.lastName = lastName;
    if (timezone) prefill.timezone = timezone;

    const utm: Record<string, string> = {};
    const utmMap: Record<string, string> = {
        utm_source: "utmSource",
        utm_medium: "utmMedium",
        utm_campaign: "utmCampaign",
        utm_content: "utmContent",
        utm_term: "utmTerm",
    };

    Object.entries(utmMap).forEach(([param, key]) => {
        const value = params.get(param);
        if (value) {
            utm[key] = value;
        }
    });

    const url = new URL(CALENDLY_URL);
    [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "name",
        "email",
        "first_name",
        "last_name",
    ].forEach((key) => {
        const value = params.get(key);
        if (value) {
            url.searchParams.set(key, value);
        }
    });

    if (timezone) {
        url.searchParams.set("timezone", timezone);
    }

    return {
        url: url.toString(),
        prefill: Object.keys(prefill).length ? prefill : undefined,
        utm: Object.keys(utm).length ? utm : undefined,
    };
};

export function BookingExperience() {
    const [status, setStatus] = useState<"idle" | "loading" | "fallback">("idle");
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [fallbackUrl, setFallbackUrl] = useState(CALENDLY_URL);

    useEffect(() => {
        const updateState = () => {
            const isOpen = Boolean(document.querySelector(CALENDLY_OVERLAY_SELECTOR));
            setIsCalendlyOpen(isOpen);
            if (isOpen) {
                setStatus("idle");
            }
        };

        updateState();

        const observer = new MutationObserver(updateState);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, []);

    const openCalendly = useCallback(async () => {
        if (status === "loading") {
            return;
        }

        setStatus("loading");
        warmCalendlyConnections();

        const payload = buildCalendlyPayload();
        setFallbackUrl(payload.url);

        try {
            ensureCalendlyStyles();
            await ensureCalendlyScript();

            if (!window.Calendly?.initPopupWidget) {
                throw new Error("Calendly not available");
            }

            window.Calendly.initPopupWidget({
                url: payload.url,
                prefill: payload.prefill,
                utm: payload.utm,
                pageSettings: {
                    primaryColor: "2e5cff",
                    textColor: "f3f4f6",
                    backgroundColor: "050507",
                },
            });

            const opened = await waitForCalendlyOverlay(2500);
            if (opened) {
                setStatus("idle");
            } else {
                setStatus("fallback");
            }
        } catch (error) {
            setStatus("fallback");
        }
    }, [status]);

    const openInNewTab = useCallback(() => {
        window.open(fallbackUrl, "_blank", "noopener,noreferrer");
    }, [fallbackUrl]);

    const closeModal = useCallback(() => {
        setStatus("idle");
    }, []);

    return (
        <>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/15 p-6 md:p-8 min-h-[520px]">
                <div className="absolute inset-0 opacity-70" style={{
                    backgroundImage:
                        "radial-gradient(circle at top, rgba(46, 92, 255, 0.25), transparent 60%), linear-gradient(135deg, rgba(15, 17, 21, 0.8), rgba(5, 5, 7, 0.95))",
                }} />
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
                        <Button onClick={openCalendly} className="w-full h-12 md:h-14 text-base">
                            Book 15-Min Audit
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <p className="mt-3 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                            Takes 30 seconds
                        </p>
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
                            <span className="text-primary">Calendly</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    "fixed bottom-4 left-4 right-4 z-40 md:hidden transition-all",
                    status !== "idle" || isCalendlyOpen
                        ? "opacity-0 pointer-events-none translate-y-4"
                        : "opacity-100"
                )}
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                <div className="rounded-2xl border border-border bg-background/90 backdrop-blur-xl p-3 shadow-2xl">
                    <Button onClick={openCalendly} className="w-full h-12 text-base">
                        Book 15-Min Audit
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <p className="mt-2 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                        Takes 30 seconds
                    </p>
                </div>
            </div>

            {status !== "idle" && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
                    <div className="w-full max-w-md rounded-2xl border border-border bg-background/95 p-6 shadow-2xl">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                                <CalendarCheck className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-foreground">Loading calendar...</p>
                                <p className="text-xs text-muted-foreground">Secure booking via Calendly</p>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="h-12 rounded-xl bg-muted/60 animate-pulse" />
                            <div className="h-10 rounded-xl bg-muted/50 animate-pulse" />
                            <div className="h-10 rounded-xl bg-muted/40 animate-pulse" />
                        </div>

                        {status === "loading" && (
                            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Loading calendar...
                            </div>
                        )}

                        {status === "fallback" && (
                            <div className="mt-6 space-y-3">
                                <p className="text-sm text-muted-foreground">
                                    Still loading? Open the calendar in a new tab for the fastest experience.
                                </p>
                                <Button onClick={openInNewTab} className="w-full h-11">
                                    Open in a new tab
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                                <Button variant="outline" onClick={openCalendly} className="w-full h-11">
                                    Try again
                                </Button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="w-full text-xs uppercase tracking-[0.2em] text-muted-foreground"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
