import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Check } from "lucide-react";

const SCHEDULING_IFRAME_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";
const BOOKING_PAGE_URL = "https://calendar.app.google/5w7EofmxxhwkdaN1A";

export default function ResetPage() {
    return (
        <Section>
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <Badge variant="outline" className="mb-4">
                            15-Min Performance Audit
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                            Book a <span className="text-primary">15-Min Performance Audit</span>.
                        </h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            For founders/directors/executives who want a leaner waist, stable energy, and a system that survives chaos.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold text-foreground mb-4">What we do on the call:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Identify the one constraint breaking your consistency",
                                        "Set your first two non-negotiables",
                                        "Give you the 90-day outline (and whether it's a fit)",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-full">
                                                <Check className="h-3 w-3 text-primary" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border">
                                <div>
                                    <h4 className="font-bold text-foreground mb-3">Who it's for:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>Busy (40-70+ hrs/week)</li>
                                        <li>Want measurable progress</li>
                                        <li>Want low friction, not complexity</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-3">Who it's NOT for:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        <li>Want extreme results with zero change</li>
                                        <li>Refuse accountability</li>
                                        <li>Want a bodybuilder prep</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/10 rounded-2xl border border-border p-6 md:p-8 flex items-center justify-center min-h-[520px]">
                        <div className="w-full space-y-6">
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                                <CalendarCheck className="h-5 w-5" />
                            </div>
                            <div className="text-center">
                                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">15-Min Performance Audit</p>
                                <h3 className="text-2xl font-semibold text-foreground">Schedule your audit</h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    Book instantly via Google Calendar. If the embed does not load, open the booking page in a new tab.
                                </p>
                            </div>
                            <div className="overflow-hidden rounded-xl border border-border/60 bg-background/70 shadow-sm md:rounded-2xl">
                                <div className="p-2 md:p-0">
                                    <iframe
                                        src={SCHEDULING_IFRAME_URL}
                                        style={{ border: 0 }}
                                        width="100%"
                                        height="600"
                                        frameBorder={0}
                                        title="Book 15-Min Performance Audit"
                                        className="block w-full rounded-lg md:rounded-none"
                                    />
                                </div>
                            </div>
                            <a
                                href={BOOKING_PAGE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 w-full items-center justify-center rounded-md border border-primary/40 bg-background px-4 text-base font-medium text-primary hover:bg-primary/10"
                            >
                                Open booking page
                            </a>
                            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">
                                Opens instantly
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
