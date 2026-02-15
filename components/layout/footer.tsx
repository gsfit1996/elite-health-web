import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BOOKING_URL = "/performance-reset?ref=footer";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <Container className="space-y-10 py-12 md:py-16">
        <div className="rounded-3xl border border-primary/25 bg-[linear-gradient(145deg,rgba(18,30,52,0.7),rgba(13,19,33,0.6))] p-6 shadow-[var(--shadow-premium-lg)] backdrop-blur-xl md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-primary/75">Ready to install the OS?</p>
              <h3 className="mt-2 text-2xl font-bold font-heading text-foreground md:text-3xl">
                Install your Elite Health OS in 90 days.
              </h3>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Book a 15-minute audit and leave with a clear, personalised roadmap that fits your calendar.
              </p>
            </div>
            <Button asChild variant="glass" className="h-12 px-6 text-base">
              <Link href={BOOKING_URL}>
                Book 15-Min Audit <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Elite Health"
                width={164}
                height={164}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="max-w-sm text-sm text-muted-foreground">
              The precision health operating system for high-performing founders and executives.
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/85">
              Built for real-world schedules, travel, and high-pressure weeks.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-4 text-[11px] uppercase tracking-[0.24em] text-foreground/85">Product</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/how-it-works" className="hover:text-foreground">How it works</Link></li>
                <li><Link href="/client-results" className="hover:text-foreground">Client Results</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] uppercase tracking-[0.24em] text-foreground/85">Resources</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/resources" className="hover:text-foreground">Protocols</Link></li>
                <li><Link href="/tools" className="hover:text-foreground">Tools</Link></li>
                <li><Link href="/insights" className="hover:text-foreground">Insights</Link></li>
                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-[11px] uppercase tracking-[0.24em] text-foreground/85">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>(c) {new Date().getFullYear()} Elite Health OS. All rights reserved.</p>
          <p className="uppercase tracking-[0.12em] text-muted-foreground/85">Performance-first coaching for founders.</p>
        </div>
      </Container>
    </footer>
  );
}
