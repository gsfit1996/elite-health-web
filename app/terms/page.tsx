import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Terms of Service | Elite Health OS",
    description: "Review the terms that govern use of Elite Health OS services and content.",
    alternates: {
        canonical: "https://www.elitehealth.io/terms",
    },
    openGraph: {
        title: "Terms of Service | Elite Health OS",
        description: "Review the terms that govern use of Elite Health OS services and content.",
        url: "https://www.elitehealth.io/terms",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | Elite Health OS",
        description: "Review the terms that govern use of Elite Health OS services and content.",
    },
};

const usage = [
    "Use the site for lawful purposes and in a respectful manner.",
    "Do not attempt to disrupt or access non-public systems.",
    "Do not copy or redistribute content without permission.",
];

const disclaimers = [
    "Content is for informational purposes and is not medical advice.",
    "Results are not guaranteed and vary by individual.",
    "You are responsible for your own health decisions.",
];

const changes = [
    "We may update these terms from time to time.",
    "Changes are effective when posted on this page.",
];

export default function TermsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TermsOfService",
        name: "Terms of Service",
        url: "https://www.elitehealth.io/terms",
        provider: {
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
                            Terms of Service
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Terms of Service
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            These terms govern your use of Elite Health OS services, content, and website.
                        </p>
                        <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="max-w-4xl space-y-8">
                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Using our services</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {usage.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Intellectual property</h2>
                        <p className="text-muted-foreground">
                            All content, protocols, and materials are owned by Elite Health OS or its licensors. You may
                            not reproduce, distribute, or create derivative works without written permission.
                        </p>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Disclaimers</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {disclaimers.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Limitation of liability</h2>
                        <p className="text-muted-foreground">
                            To the maximum extent permitted by law, Elite Health OS is not liable for indirect,
                            incidental, or consequential damages arising from your use of the site or services.
                        </p>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Changes to terms</h2>
                        <ul className="space-y-2 text-muted-foreground">
                            {changes.map((item) => (
                                <li key={item}>- {item}</li>
                            ))}
                        </ul>
                    </Card>

                    <Card className="p-6 bg-muted/10 border-border/60">
                        <h2 className="text-2xl font-bold font-heading mb-3">Contact</h2>
                        <p className="text-muted-foreground">
                            Questions about these terms can be sent via the{" "}
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
