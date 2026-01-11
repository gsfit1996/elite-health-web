"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function PatternInterrupt() {
    return (
        <Section className="bg-muted/30">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
                            Your problem isn’t discipline. <br />
                            <span className="text-primary">It’s decision bandwidth.</span>
                        </h2>
                        <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
                    </motion.div>

                    <motion.div
                        className="space-y-6 text-lg text-muted-foreground"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p>
                            You’re disciplined in business. So it’s confusing when your body doesn’t match your standards.
                        </p>
                        <p className="font-medium text-foreground">
                            The failure mode isn’t knowledge. It’s friction.
                        </p>
                        <ul className="space-y-4 mt-4 list-disc pl-5">
                            <li>Meetings run late → training gets skipped → “restart Monday”</li>
                            <li>Evenings hit → couch crash → autopilot food</li>
                            <li>Weekends arrive → structure disappears → progress stalls</li>
                        </ul>
                        <p className="font-semibold text-foreground pt-4">
                            If your plan depends on perfect weeks, it will fail.
                        </p>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
