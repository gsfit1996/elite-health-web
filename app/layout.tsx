import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Sora } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { PageTransition } from "@/components/layout/page-transition";
import { ChunkRecovery } from "@/components/layout/chunk-recovery";
import { BookingNavigationOverride } from "@/components/layout/booking-navigation-override";
import { PremiumBackdrop } from "@/components/ui/premium-backdrop";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Health OS",
  description: "The performance system for high-performing founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://calendar.google.com" />
        <link rel="dns-prefetch" href="https://calendar.app.google" />
        <link rel="preconnect" href="https://calendar.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendar.app.google" crossOrigin="anonymous" />
        <Script
          data-website-id="dfid_tjZ53JLzgJaNQgQ2LYR77"
          data-domain="www.elitehealth.io"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${manrope.variable} ${sora.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        <PremiumBackdrop />
        <Navbar />
        <main className="flex-1 relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileActionBar />
        <ChunkRecovery />
        <BookingNavigationOverride />
      </body>
    </html>
  );
}
