"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
    question: string;
    answer: string;
}

export function FAQAccordion({
    items,
    className,
    defaultOpen = 0,
}: {
    items: FAQItem[];
    className?: string;
    defaultOpen?: number | null;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(
        typeof defaultOpen === "number" ? defaultOpen : null
    );

    return (
        <div className={cn("space-y-4", className)}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                        key={item.question}
                        className="rounded-2xl border border-border/60 bg-muted/10 overflow-hidden"
                    >
                        <button
                            type="button"
                            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground transition-colors hover:text-primary"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.question}</span>
                            <span
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/60 transition-all",
                                    isOpen && "rotate-180 border-primary/40 text-primary"
                                )}
                            >
                                <ChevronDown className="h-4 w-4" />
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                >
                                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
