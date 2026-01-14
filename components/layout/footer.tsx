import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/20">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image src="/logo.png" alt="Elite Health" width={200} height={200} className="h-32 w-auto object-contain" />
                        </Link>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            The precision health operating system for high-performing founders and executives.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Product</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/how-it-works" className="hover:text-foreground">How it works</Link></li>
                            <li><Link href="/results" className="hover:text-foreground">Results</Link></li>
                            <li><Link href="/system" className="hover:text-foreground">The System</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Resources</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/resources" className="hover:text-foreground">Protocols</Link></li>
                            <li><Link href="/tools" className="hover:text-foreground">Tools</Link></li>
                            <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
                            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Elite Health OS. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
