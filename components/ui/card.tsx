"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
    variant?: "default" | "elevated" | "glass" | "highlight";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, variant = "default", children, ...props }, ref) => {
        const variantStyles = {
            default:
                "rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent shadow-[0_10px_28px_rgba(2,8,23,0.2)]",
            elevated:
                "rounded-2xl border border-border/70 bg-gradient-to-br from-[var(--surface-2)] to-[var(--surface-1)] shadow-[var(--shadow-premium-lg)]",
            glass:
                "rounded-2xl border border-primary/25 bg-[linear-gradient(140deg,rgba(14,23,38,0.72),rgba(12,18,29,0.34))] backdrop-blur-xl shadow-[var(--shadow-premium-md)]",
            highlight:
                "rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/20 via-[var(--surface-2)] to-[var(--surface-1)] shadow-[0_22px_60px_rgba(10,22,49,0.45)]",
        } as const;

        return (
            <motion.div
                ref={ref}
                className={cn(
                    "p-6 text-card-foreground transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)]",
                    variantStyles[variant],
                    hoverEffect && "hover:-translate-y-1 hover:border-primary/40",
                    className
                )}
                initial={hoverEffect ? { y: 0 } : undefined}
                whileHover={hoverEffect ? { y: -3 } : undefined}
                transition={{ duration: 0.24 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
