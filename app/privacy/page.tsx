import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Privacy Policy | Elite Health OS",
    description: "Learn how Elite Health OS collects, uses, and protects your information.",
    alternates: {
        canonical: "https://www.elitehealth.io/privacy",
    },
    openGraph: {
        title: "Privacy Policy | Elite Health OS",
        description: "Learn how Elite Health OS collects, uses, and protects your information.",
        url: "https://www.elitehealth.io/privacy",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Elite Health OS",
        description: "Learn how Elite Health OS collects, uses, and protects your information.",
    },
};

const collection = [
    "Information you provide directly (name, email, scheduling details).",
    "Information collected automatically (device data, browser type, pages viewed).",
    "Information from third-party services you connect or use to book a call.",
];

const usage = [
    "Deliver and improve our services and content.",
    "Schedule and manage calls, protocols, and resources.",
    "Monitor performance and security of the site.",
    "Comply with legal obligations and enforce our terms.",
];

const sharing = [
    "Service providers that help us run the site and deliver services.",
    "Legal or regulatory requests when required by law.",
    "Business transfers such as mergers or asset sales.",
];

const choices = [
    "Opt out of non-essential analytics or marketing cookies.",
    "Request access, correction, or deletion of your information.",
    "Update your communication preferences at any time.",
];

export default function PrivacyPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "PrivacyPolicy",
        name: "Privacy Policy",
        url: "https://www.elitehealth.io/privacy",
        publisher: {
            "@type": "Organization",
            name: "Elite Health OS",
            url: "https://www.elitehealth.io",
        },
    };

    return (
        <div className="flex flex-col">
            <Section className="pb-8 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-5">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                            Privacy Policy
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            This policy explains how Elite Health OS collects, uses, and protects information related to
                            our services and website.
                        </p>
                        <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl space-y-8">
                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Information we collect</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {collection.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">How we use information</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {usage.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">How we share information</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {sharing.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Data retention and security</h2>
                        <p className="text-muted-foreground">
                            We retain information for as long as necessary to provide services, meet legal obligations, and
                            resolve disputes. We use reasonable technical and organizational safeguards to protect data,
                            but no system can be guaranteed as fully secure.
                        </p>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Your choices</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {choices.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Contact</h2>
                        <p className="text-muted-foreground">
                            If you have questions about this policy or your data, contact us via the{" "}
                            <Link href="/contact" className="text-primary font-semibold">contact page</Link>.
                        </p>
                    </Card>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}
