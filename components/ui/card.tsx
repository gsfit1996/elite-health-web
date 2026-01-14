"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                className={cn(
                    "rounded-2xl border border-border/60 bg-gradient-to-br from-muted/30 via-muted/10 to-transparent p-6 text-card-foreground shadow-lg shadow-black/30 transition-colors",
                    hoverEffect && "hover:border-primary/40 hover:bg-muted/40",
                    className
                )}
                initial={hoverEffect ? { y: 0 } : undefined}
                whileHover={hoverEffect ? { y: -4 } : undefined}
                transition={{ duration: 0.2 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
