import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Elite Health OS | Book 15-Min Audit",
    description: "Get in touch with Elite Health OS. Book 15-Min Audit or learn how our performance system fits your calendar.",
    alternates: {
        canonical: "https://www.elitehealth.io/contact",
    },
    openGraph: {
        title: "Contact Elite Health OS",
        description: "Book 15-Min Audit or learn how our system fits your calendar.",
        url: "https://www.elitehealth.io/contact",
        siteName: "Elite Health OS",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Elite Health OS",
        description: "Book 15-Min Audit or learn how our system fits your calendar.",
    },
};

const prepList = [
    "Your current weekly schedule and travel load.",
    "Top 1-2 constraints blocking consistency.",
    "What you want to fix in the next 90 days.",
];

const expectations = [
    "We review your goals and decide if the system is a fit.",
    "If it is, we map the bottleneck and next steps.",
    "If it is not, we point you to the right resource.",
];

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Elite Health OS",
        url: "https://www.elitehealth.io/contact",
        mainEntity: {
            "@type": "Organization",
            name: "Elite Health OS",
            url: "https://www.elitehealth.io",
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "sales",
                    url: "https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site",
                },
            ],
        },
    };

    return (
        <div className="flex flex-col">
            <Section className="pb-10 pt-32 md:pt-48">
                <Container>
                    <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Badge variant="secondary" className="px-4 py-1.5 text-sm">
                            Contact
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading">
                            Talk to the team behind Elite Health OS.
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            The fastest way to reach us is a strategy call. We use it to understand your constraints and
                            see if the system is a fit.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="p-6 bg-muted/10 border-border/60 space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold font-heading mb-2">Book 15-Min Audit</h2>
                                <p className="text-muted-foreground">
                                    Share your schedule, current bottleneck, and the outcome you want most. We will tell
                                    you if Elite Health OS is the right fit.
                                </p>
                            </div>
                            <Button asChild className="h-12">
                                <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site">
                                    Book 15-Min Audit <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </Card>

                        <Card className="p-6 bg-muted/10 border-border/60 space-y-4">
                            <h3 className="text-xl font-semibold text-foreground">What to include</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                {prepList.map((item) => (
                                    <li key={item}>- {item}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </Container>
            </Section>

            <Section className="bg-muted/5">
                <Container>
                    <div className="max-w-3xl mx-auto space-y-6 text-center">
                        <h2 className="text-3xl font-bold font-heading">What happens next</h2>
                        <div className="grid gap-4 md:grid-cols-3">
                            {expectations.map((item, index) => (
                                <Card key={item} className="p-4 bg-background border-border/60">
                                    <p className="text-sm text-muted-foreground mb-2">Step {index + 1}</p>
                                    <p className="text-sm font-medium text-foreground">{item}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    );
}

