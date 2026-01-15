"use client";

import { useEffect } from "react";

const STORAGE_KEY = "elitehealth_chunk_retry";

const shouldReloadForError = (message?: string) => {
    if (!message) return false;
    const normalized = message.toLowerCase();
    return (
        normalized.includes("chunkloaderror") ||
        normalized.includes("loading chunk") ||
        normalized.includes("css chunk") ||
        normalized.includes("failed to fetch")
    );
};

export function ChunkRecovery() {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const attemptReload = () => {
            try {
                const hasRetried = sessionStorage.getItem(STORAGE_KEY) === "1";
                if (hasRetried) {
                    return;
                }
                sessionStorage.setItem(STORAGE_KEY, "1");
                window.location.reload();
            } catch (error) {
                window.location.reload();
            }
        };

        const onError = (event: ErrorEvent) => {
            if (shouldReloadForError(event.message)) {
                attemptReload();
            }
        };

        const onUnhandledRejection = (event: PromiseRejectionEvent) => {
            const reason = event.reason as { message?: string } | string | undefined;
            const message = typeof reason === "string" ? reason : reason?.message;
            if (shouldReloadForError(message)) {
                attemptReload();
            }
        };

        window.addEventListener("error", onError);
        window.addEventListener("unhandledrejection", onUnhandledRejection);

        return () => {
            window.removeEventListener("error", onError);
            window.removeEventListener("unhandledrejection", onUnhandledRejection);
        };
    }, []);

    return null;
}
