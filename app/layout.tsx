import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { PageTransition } from "@/components/layout/page-transition";
import { CalendlyBadge } from "@/components/layout/calendly-badge";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
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
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans min-h-screen flex flex-col relative overflow-x-hidden`}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div
            className="absolute left-1/2 top-[-240px] h-[520px] w-[960px] -translate-x-1/2 rounded-full blur-[140px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(46, 92, 255, 0.35), rgba(46, 92, 255, 0) 70%)",
            }}
          />
          <div
            className="absolute right-[-120px] top-[25%] h-[420px] w-[420px] rounded-full blur-[140px]"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, rgba(14, 165, 233, 0.22), rgba(14, 165, 233, 0) 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
        </div>
        <Navbar />
        <main className="flex-1 relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileActionBar />
        <CalendlyBadge />
      </body>
    </html>
  );
}
