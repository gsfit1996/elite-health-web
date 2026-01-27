"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Dumbbell, Utensils, Brain, Activity, LineChart } from "lucide-react";

export function ProductSuite() {
    const products = [
        {
            title: "Training OS",
            icon: <Dumbbell className="h-6 w-6 text-primary" />,
            features: ["Joint-smart progression", "MED minimum dose programming", "Travel-ready workout rules"],
            colSpan: "md:col-span-1",
        },
        {
            title: "Nutrition OS",
            icon: <Utensils className="h-6 w-6 text-primary" />,
            features: ["Default day templates", "Protein floor rules", "Weekend guardrails"],
            colSpan: "md:col-span-1",
        },
        {
            title: "Recovery & Cognition OS",
            icon: <Brain className="h-6 w-6 text-primary" />,
            features: ["Sleep anchors", "Stress systems", "Evening crash prevention"],
            colSpan: "md:col-span-1",
        },
        {
            title: "Biomarker OS",
            icon: <Activity className="h-6 w-6 text-primary" />,
            features: ["Bloodwork interpretation", "Priority markers action plan", "Track what matters"],
            colSpan: "md:col-span-1 lg:col-span-1",
        },
        {
            title: "Accountability OS",
            icon: <LineChart className="h-6 w-6 text-primary" />,
            features: ["Weekly scorecard", "Constraint audit", "Adjustments based on data"],
            colSpan: "md:col-span-2 lg:col-span-2",
            highlight: true,
        },
    ];

    return (
        <Section className="bg-muted/30">
            <Container>
                <div className="mb-12">
                    <Badge variant="outline" className="mb-4">
                        The Product
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
                        Elite Health OS - the system. <br />
                        <span className="text-muted-foreground text-2xl md:text-4xl">(Not a set of tips)</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            className={product.colSpan}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className={`h-full p-8 ${product.highlight ? "bg-gradient-to-br from-muted to-muted/80 border-primary/20" : ""}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-primary/10 rounded-lg">{product.icon}</div>
                                    <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                                </div>
                                <ul className="space-y-3">
                                    {product.features.map((feat, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
