import { Badge } from "@/components/ui/badge";

const SCHEDULING_URL =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";

export function PerformanceResetFlow() {
    return (
        <div className="space-y-6 md:space-y-8">
            <div className="rounded-3xl border border-border/60 bg-background/80 p-5 md:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                <div className="space-y-4">
                    <Badge variant="outline">Performance Reset</Badge>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading">
                        Book a 15-Min Performance Reset
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
                        Pick a time below. The booking stays on elitehealth.io.
                    </p>
                </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-background/80 p-5 md:p-10">
                <h2 className="text-2xl md:text-3xl font-semibold">Book 15-Min Performance Reset</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    Choose a slot below. The booking stays on this page.
                </p>
                <div className="mt-4 md:mt-6 -mx-5 md:mx-0">
                    <div className="overflow-hidden rounded-2xl md:rounded-2xl border border-border/60 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                    <iframe
                        src={SCHEDULING_URL}
                        style={{ border: 0, backgroundColor: "#fff" }}
                        className="h-[900px] w-full md:h-[600px]"
                        frameBorder={0}
                        title="Book 15-Min Performance Reset"
                    />
                    </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground md:text-sm">
                    Tip: If the calendar feels tight on mobile, scroll inside the scheduler to see more times.
                </p>
            </div>
        </div>
    );
}
