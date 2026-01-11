"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    children: React.ReactNode;
    className?: string;
}

export function ToolCard({ title, description, icon: Icon, children, className }: ToolCardProps) {
    return (
        <Card className={cn("w-full max-w-xl mx-auto overflow-hidden bg-card border-border shadow-lg", className)}>
            <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6 border-b border-border pb-6">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading">{title}</h3>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                </div>

                {children}
            </div>
        </Card>
    );
}
