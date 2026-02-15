import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "ghost" | "outline" | "glass";
    size?: "default" | "sm" | "lg" | "icon";
    loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, loading, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles =
            "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-[var(--motion-fast)] ease-[var(--ease-premium)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary:
                "bg-primary text-primary-foreground shadow-[0_14px_36px_rgba(58,100,255,0.35)] hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_20px_46px_rgba(58,100,255,0.42)]",
            secondary:
                "bg-secondary text-secondary-foreground border border-border/60 hover:-translate-y-0.5 hover:bg-secondary/80",
            outline:
                "border border-border/80 bg-background/85 text-foreground hover:-translate-y-0.5 hover:border-primary/45 hover:bg-muted/30",
            ghost: "text-foreground/80 hover:bg-muted/40 hover:text-foreground",
            glass:
                "border border-primary/30 bg-[linear-gradient(135deg,rgba(58,100,255,0.22),rgba(18,29,49,0.35))] text-primary-foreground shadow-[0_18px_40px_rgba(11,20,38,0.4)] backdrop-blur-md hover:-translate-y-0.5 hover:border-primary/55",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                disabled={loading || props.disabled}
                {...props}
            >
                {asChild ? children : (
                    <>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {!loading && children}
                    </>
                )}
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button };
