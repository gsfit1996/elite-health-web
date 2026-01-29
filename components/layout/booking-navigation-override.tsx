"use client";

import { useEffect } from "react";

const BOOKING_PATH = "/reset";
const BOOKING_BASE_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A";
const RESET_REDIRECT_URL = `${BOOKING_BASE_URL}?ref=reset`;

const isBookingHref = (href: string | null) => {
    if (!href) return false;
    if (href === BOOKING_PATH) return true;
    if (href.startsWith(BOOKING_BASE_URL)) return true;

    try {
        const resolved = new URL(href, window.location.origin);
        if (resolved.pathname === BOOKING_PATH) return true;
        return resolved.href.startsWith(BOOKING_BASE_URL);
    } catch (error) {
        return false;
    }
};

const resolveBookingTarget = (href: string | null) => {
    if (!href) return RESET_REDIRECT_URL;
    if (href === BOOKING_PATH) return RESET_REDIRECT_URL;

    try {
        const resolved = new URL(href, window.location.origin);
        if (resolved.pathname === BOOKING_PATH) return RESET_REDIRECT_URL;
        if (resolved.href.startsWith(BOOKING_BASE_URL)) return resolved.href;
    } catch (error) {
        return RESET_REDIRECT_URL;
    }

    return RESET_REDIRECT_URL;
};

export function BookingNavigationOverride() {
    useEffect(() => {
        if (typeof document === "undefined") return;

        const onClick = (event: MouseEvent) => {
            if (event.defaultPrevented || event.button !== 0) {
                return;
            }
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                return;
            }

            let node = event.target as HTMLElement | null;
            while (node && node !== document.body) {
                if (node instanceof HTMLAnchorElement) {
                    const href = node.getAttribute("href");
                    if (isBookingHref(href)) {
                        event.preventDefault();
                        event.stopPropagation();
                        window.location.assign(resolveBookingTarget(href));
                    }
                    break;
                }
                node = node.parentElement;
            }
        };

        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, []);

    return null;
}
