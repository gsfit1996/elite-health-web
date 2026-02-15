import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
    background?: "default" | "muted" | "glass" | "accent";
    spacing?: "sm" | "md" | "lg";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, fullWidth = false, background = "default", spacing = "md", ...props }, ref) => {
        const spacingMap = {
            sm: "py-14 md:py-18",
            md: "py-18 md:py-24",
            lg: "py-22 md:py-30",
        } as const;

        const backgroundMap = {
            default: "",
            muted: "bg-muted/10",
            glass: "premium-glass",
            accent: "bg-gradient-to-br from-primary/10 via-transparent to-cyan-400/5",
        } as const;

        return (
            <section
                ref={ref}
                className={cn(
                    "relative",
                    spacingMap[spacing],
                    backgroundMap[background],
                    !fullWidth && "container mx-auto",
                    className
                )}
                {...props}
            />
        );
    }
);
Section.displayName = "Section";

export { Section };
