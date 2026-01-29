import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=footer";

export function Footer() {
    return (
        <footer className="relative border-t border-border/60 bg-gradient-to-b from-background via-background to-muted/30">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <Container className="py-12 md:py-16 space-y-12">
                <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.45)]">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Ready to install the OS?</p>
                            <h3 className="mt-3 text-2xl md:text-3xl font-bold font-heading text-foreground">
                                Install your Elite Health OS in 90 days.
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                                Book a 15-minute audit and leave with a clear, personalised roadmap that fits your calendar.
                            </p>
                        </div>
                        <Button asChild className="h-12 px-6 text-base">
                            <Link href={BOOKING_URL}>Book 15-Min Audit</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[1.3fr,1fr]">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Elite Health"
                                width={160}
                                height={160}
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="max-w-sm text-sm text-muted-foreground">
                            The precision health operating system for high-performing founders and executives.
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Built for real-world schedules, travel, and high-pressure weeks.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground">Product</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/how-it-works" className="hover:text-foreground">How it works</Link></li>
                                <li><Link href="/client-results" className="hover:text-foreground">Client Results</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground">Resources</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/resources" className="hover:text-foreground">Protocols</Link></li>
                                <li><Link href="/tools" className="hover:text-foreground">Tools</Link></li>
                                <li><Link href="/insights" className="hover:text-foreground">Insights</Link></li>
                                <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs uppercase tracking-[0.3em] text-foreground">Company</h3>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                                <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                                <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                                <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
                    <p>(c) {new Date().getFullYear()} Elite Health OS. All rights reserved.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <span>Elite Health OS</span>
                        <span className="hidden md:inline">|</span>
                        <span>Performance-first coaching for founders.</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
