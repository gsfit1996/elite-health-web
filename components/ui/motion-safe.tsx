"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, scaleIn } from "@/lib/motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section";
};

export function MotionReveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: MotionRevealProps) {
  const reduced = useReducedMotion();
  const Component = as === "section" ? motion.section : motion.div;

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
};

export function MotionSection({ children, className }: MotionSectionProps) {
  return (
    <MotionReveal as="section" className={cn("relative", className)} variants={fadeUp}>
      {children}
    </MotionReveal>
  );
}

type MotionCardProps = {
  children: ReactNode;
  className?: string;
};

export function MotionCard({ children, className }: MotionCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={scaleIn}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
