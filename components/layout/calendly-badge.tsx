"use client";

import Script from "next/script";
import { useCallback, useEffect } from "react";

declare global {
    interface Window {
        Calendly?: {
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
                branding: boolean;
            }) => void;
        };
    }
}

const CALENDLY_OPTIONS = {
    url: "https://calendly.com/elitelevelcoaching-gareth/15-min-founder-performance-reset",
    text: "Schedule time with me",
    color: "#1a1a1a",
    textColor: "#ffffff",
    branding: true,
};

const badgeExists = () => Boolean(document.querySelector(".calendly-badge-widget"));

export function CalendlyBadge() {
    const initBadge = useCallback(() => {
        if (typeof window === "undefined") return;
        if (!window.Calendly) return;
        if (badgeExists()) return;
        window.Calendly.initBadgeWidget(CALENDLY_OPTIONS);
    }, []);

    useEffect(() => {
        initBadge();
    }, [initBadge]);

    return (
        <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
            onLoad={initBadge}
        />
    );
}
