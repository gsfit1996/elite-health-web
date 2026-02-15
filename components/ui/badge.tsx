import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline" | "secondary" | "glass";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "border-transparent bg-primary/20 text-primary hover:bg-primary/30",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            outline: "text-foreground border-border/80",
            glass: "border-primary/30 bg-primary/10 text-primary backdrop-blur-md",
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.08em] uppercase transition-all duration-[var(--motion-fast)]",
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
