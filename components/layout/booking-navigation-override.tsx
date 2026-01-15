"use client";

import { useEffect } from "react";

const BOOKING_PATH = "/reset";
const BOOKING_URL = "https://www.elitehealth.io/reset";

const isBookingHref = (href: string | null) => {
    if (!href) return false;
    if (href === BOOKING_PATH || href === BOOKING_URL) return true;

    try {
        const resolved = new URL(href, window.location.origin);
        return resolved.pathname === BOOKING_PATH;
    } catch (error) {
        return false;
    }
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
                    if (isBookingHref(node.getAttribute("href"))) {
                        event.preventDefault();
                        event.stopPropagation();
                        window.location.assign(BOOKING_URL);
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
