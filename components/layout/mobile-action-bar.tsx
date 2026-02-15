"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/reset") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  if (pathname === "/reset") {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="fixed bottom-4 left-4 right-4 z-50 md:hidden"
        >
          <div className="rounded-2xl border border-primary/30 bg-[linear-gradient(140deg,rgba(13,21,35,0.86),rgba(12,18,30,0.68))] p-2 shadow-[var(--shadow-premium-lg)] backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="pl-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary/85">
                  <Sparkles className="h-3 w-3" /> Limited Spots
                </span>
                <p className="text-sm font-semibold text-foreground leading-tight">15-Min Performance Audit</p>
              </div>
              <Button size="default" className="h-10 px-4" asChild>
                <Link href="/performance-reset?ref=mobile_bar">Book Now</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
