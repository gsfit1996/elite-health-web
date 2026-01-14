"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectContextType {
    value: string;
    onValueChange: (value: string) => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const SelectContext = React.createContext<SelectContextType | null>(null);

export function Select({
    value,
    onValueChange,
    children,
}: {
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
}) {
    const [open, setOpen] = React.useState(false);

    return (
        <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
            <div className="relative">{children}</div>
        </SelectContext.Provider>
    );
}

export function SelectTrigger({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error("SelectTrigger must be used within Select");

    return (
        <button
            type="button"
            onClick={() => context.setOpen(!context.open)}
            className={cn(
                "flex h-11 w-full items-center justify-between rounded-md border border-border/60 bg-muted/15 px-3 py-2 text-sm font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-0 hover:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
        >
            {children}
            <ChevronDown className="h-4 w-4 opacity-50" />
        </button>
    );
}

export function SelectValue({
    className,
    placeholder,
}: {
    className?: string;
    placeholder?: string;
}) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error("SelectValue must be used within Select");

    // This is a simplification; in a real accessible select this would map value to label
    // For this lightweight version, we rely on the parent having the label or the user seeing the changes
    // But since we can't easily map value->label without children traversal, we might just show value if we can't find label.
    // However, usually SelectValue renders the *selected item's children*.
    // For this custom implementation, let's just render the value for now, OR improved:
    // We can't easily know the Label of the selected 'value' without introspecting children props of SelectContent.
    // To keep it robust & simple: We will display `value` but capitalized?
    // Actually, usually `SelectValue` takes a `placeholder`.

    // BETTER FIX: Make SelectItem text accessible?
    // Let's rely on standard text rendering.

    const displayValue = context.value || placeholder || "Select...";
    const isPlaceholder = !context.value;

    return (
        <span className={cn("block truncate", isPlaceholder && "text-muted-foreground", className)}>
            {displayValue}
        </span>
    );
}

export function SelectContent({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error("SelectContent must be used within Select");

    if (!context.open) return null;

    return (
        <div
            className={cn(
                "absolute z-50 mt-1 w-full overflow-hidden rounded-md border border-border/60 bg-background/95 text-foreground shadow-xl backdrop-blur animate-in fade-in-80",
                className
            )}
        >
            <div className="p-1 max-h-64 overflow-auto">{children}</div>
        </div>
    );
}

export function SelectItem({
    value,
    children,
    className,
}: {
    value: string;
    children: React.ReactNode;
    className?: string;
}) {
    const context = React.useContext(SelectContext);
    if (!context) throw new Error("SelectItem must be used within Select");

    const isSelected = context.value === value;

    return (
        <button
            type="button"
            onClick={() => {
                context.onValueChange(value);
                context.setOpen(false);
            }}
            data-selected={isSelected}
            className={cn(
                "relative flex w-full cursor-default select-none items-center rounded-sm py-2 pl-8 pr-2 text-sm text-foreground outline-none transition-colors hover:bg-primary/10 focus:bg-primary/10 data-[selected=true]:bg-primary/15 data-[selected=true]:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                className
            )}
        >
            <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                {isSelected && <Check className="h-4 w-4" />}
            </span>
            <span className="text-left w-full">{children}</span>
        </button>
    );
}
