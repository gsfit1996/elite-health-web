import type { Transition, Variants } from "framer-motion";

export const premiumEasing = [0.22, 1, 0.36, 1] as const;
export const premiumSpring = {
  type: "spring",
  stiffness: 130,
  damping: 20,
  mass: 0.7,
} as const;

export const transitionFast: Transition = {
  duration: 0.24,
  ease: premiumEasing,
};

export const transitionNormal: Transition = {
  duration: 0.42,
  ease: premiumEasing,
};

export const transitionSlow: Transition = {
  duration: 0.62,
  ease: premiumEasing,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitionNormal },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: transitionNormal },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitionNormal },
};

export const slideInX: Variants = {
  hidden: { opacity: 0, x: 22 },
  visible: { opacity: 1, x: 0, transition: transitionNormal },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};
