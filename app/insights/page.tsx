import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const INSIGHTS = [
    {
        title: "How founders can sleep better on the road",
        desc: "Travel-friendly sleep anchors and recovery rules that protect morning sharpness.",
        href: "/insights/how-founders-sleep-better-on-the-road",
        readTime: "6 min read",
        tags: ["Travel", "Sleep"],
    },
    {
        title: "Biomarker testing for executives",
        desc: "Which labs matter most, what to track, and how to turn results into action.",
        href: "/insights/biomarker-testing-for-executives",
        readTime: "7 min read",
        tags: ["Biomarkers", "Performance"],
    },
    {
        title: "The science behind MED Weeks",
        desc: "Why minimum-effective-dose weeks preserve momentum when your calendar explodes.",
        href: "/insights/the-science-behind-med-weeks",
        readTime: "5 min read",
        tags: ["Training", "Consistency"],
    },
];

export default function InsightsPage() {
    return (
        <div className="pt-24">
            <Section>
                <Container>
                    <div className="max-w-3xl mb-12">
                        <Badge variant="outline" className="mb-4">Insights</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Founder Health Insights</h1>
                        <p className="text-lg text-muted-foreground">
                            Practical articles for busy leaders who want clear, founder-grade guidance without the noise.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {INSIGHTS.map((insight) => (
                            <Link key={insight.href} href={insight.href} className="group block">
                                <div className="h-full rounded-2xl border border-border/60 bg-muted/10 p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                        <span>{insight.readTime}</span>
                                        <span className="text-primary">Read</span>
                                    </div>
                                    <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {insight.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground mb-4">{insight.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {insight.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-3">
                        <Button asChild className="h-11 px-6">
                            <Link href="/how-it-works">
                                Explore the full program <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" className="h-11 px-6 text-muted-foreground">
                            <Link href="https://calendar.app.google/5w7EofmxxhwkdaN1A?ref=site">
                                Book a 15-minute audit
                            </Link>
                        </Button>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
