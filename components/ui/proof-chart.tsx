"use client";

import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";

interface ProofChartProps {
    data: { label: string; value: number }[];
    title: string;
    metric: string;
    change: string;
    color?: string;
}

export function ProofChart({
    data,
    title,
    metric,
    change,
    color = "#2563eb", // Default to primary blue
}: ProofChartProps) {
    return (
        <Card className="p-6 bg-muted/20 border-border overflow-hidden relative group hover:border-primary/30 transition-all">
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">
                        {title}
                    </h4>
                    <div className="text-2xl font-bold font-heading text-foreground">
                        {metric}
                    </div>
                </div>
                <div className="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">
                    {change}
                </div>
            </div>

            <div className="h-[160px] w-full -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Tooltip
                            content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="bg-background border border-border p-2 rounded-lg shadow-xl text-xs">
                                            <span className="font-bold text-foreground">
                                                {payload[0].value}
                                            </span>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={2}
                            fillOpacity={1}
                            fill={`url(#gradient-${title})`}
                            isAnimationActive={true}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
