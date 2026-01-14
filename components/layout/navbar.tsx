"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <Container>
                <div className="flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 z-50 relative">
                        <Image src="/logo.png" alt="Elite Health" width={140} height={140} className="h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            href="/program"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Program
                        </Link>
                        <Link
                            href="/how-it-works"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            How it works
                        </Link>
                        <Link
                            href="/resources"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Protocols
                        </Link>
                        <Link
                            href="/tools"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Tools
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild>
                            <Link href="/reset">Book a Strategy Call</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 p-2 -mr-2 text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col h-screen"
                    >
                        <nav className="flex flex-col gap-6 text-2xl font-medium">
                            <Link
                                href="/program"
                                className="block py-2 border-b border-border/50 text-foreground/80 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Program
                            </Link>
                            <Link
                                href="/how-it-works"
                                className="block py-2 border-b border-border/50 text-foreground/80 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                How it works
                            </Link>
                            <Link
                                href="/resources"
                                className="block py-2 border-b border-border/50 text-foreground/80 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Protocols
                            </Link>
                            <Link
                                href="/tools"
                                className="block py-2 border-b border-border/50 text-foreground/80 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Tools
                            </Link>
                        </nav>

                        <div className="mt-8">
                            <Button asChild className="w-full text-lg h-14">
                                <Link href="/reset" onClick={() => setIsMobileMenuOpen(false)}>
                                    Book a Strategy Call
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
