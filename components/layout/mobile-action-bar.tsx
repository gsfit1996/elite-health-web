"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function MobileActionBar() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    if (pathname === "/reset") {
        return null;
    }

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 100px)
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
                >
                    <div className="bg-background/80 backdrop-blur-xl border border-primary/20 p-2 rounded-2xl shadow-2xl flex items-center justify-between gap-3 shadow-primary/10">
                        <div className="pl-4">
                            <span className="text-xs font-bold uppercase text-primary tracking-wider">Limited Spots</span>
                            <p className="text-sm font-bold text-foreground leading-none">15-Min Audit</p>
                        </div>
                        <Button size="default" className="shadow-lg shadow-primary/20" asChild>
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=mobile_bar">Book 15-Min Audit</Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

