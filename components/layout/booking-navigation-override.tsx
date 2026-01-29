"use client";

import { useEffect } from "react";

const LEGACY_PATH = "/reset";
const REDIRECT_URL = "/performance-reset?ref=reset";

const isLegacyHref = (href: string | null) => {
    if (!href) return false;
    if (href === LEGACY_PATH) return true;

    try {
        const resolved = new URL(href, window.location.origin);
        return resolved.pathname === LEGACY_PATH;
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
                    const href = node.getAttribute("href");
                    if (isLegacyHref(href)) {
                        event.preventDefault();
                        event.stopPropagation();
                        window.location.assign(REDIRECT_URL);
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
