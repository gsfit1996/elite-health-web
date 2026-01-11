import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    fullWidth?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, fullWidth = false, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn(
                    "py-16 md:py-24",
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
