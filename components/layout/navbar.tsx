"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/client-results", label: "Client Results" },
  { href: "/resources", label: "Protocols" },
  { href: "/tools", label: "Tools" },
] as const;

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/45 bg-background/70 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <Container>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="relative z-50 flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Elite Health"
              width={148}
              height={148}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-[var(--motion-fast)]",
                  pathname === item.href
                    ? "bg-primary/15 text-foreground"
                    : "text-muted-foreground hover:bg-muted/25 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="glass" className="h-11 px-5 text-sm">
              <Link href="/performance-reset?ref=nav">
                Book 15-Min Audit <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="z-50 -mr-1 rounded-lg border border-border/70 p-2 text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/88 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -18, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-5 mt-24 rounded-2xl border border-border/70 bg-[linear-gradient(150deg,var(--surface-2),var(--surface-1))] p-6 shadow-[var(--shadow-premium-lg)]"
            >
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-border/60 px-4 py-3 text-base font-semibold text-foreground/85 transition hover:border-primary/40 hover:bg-muted/20 hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-5 border-t border-border/60 pt-5">
                <Button asChild className="h-12 w-full text-base">
                  <Link href="/performance-reset?ref=nav_mobile" onClick={() => setIsMobileMenuOpen(false)}>
                    Book 15-Min Audit
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
