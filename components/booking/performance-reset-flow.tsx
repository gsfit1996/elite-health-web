import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/ui/motion-safe";
import { SectionDivider } from "@/components/ui/section-divider";

const SCHEDULING_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1hR5pTh3SP6S6yUcVH1i5gMpY-VSuvs40CKxaw6mtlfNoBl_Wp5L5M8zNBOgF5J3g0341drxWd?gv=true";

export function PerformanceResetFlow() {
  return (
    <div className="space-y-6 md:space-y-8">
      <MotionReveal className="rounded-3xl border border-border/65 bg-[linear-gradient(150deg,var(--surface-2),var(--surface-1))] p-5 shadow-[var(--shadow-premium-lg)] md:p-10">
        <div className="space-y-4">
          <Badge variant="glass">Performance Reset</Badge>
          <h1 className="text-3xl font-bold font-heading md:text-5xl">Book a 15-Min Performance Reset</h1>
          <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
            Pick a time below. The booking stays on elitehealth.io.
          </p>
        </div>
      </MotionReveal>

      <SectionDivider />

      <MotionReveal className="rounded-3xl border border-border/65 bg-[linear-gradient(150deg,var(--surface-2),var(--surface-1))] p-5 shadow-[var(--shadow-premium-md)] md:p-10">
        <h2 className="text-2xl font-semibold md:text-3xl">Book 15-Min Performance Reset</h2>
        <p className="mt-2 text-sm text-muted-foreground">Choose a slot below. The booking stays on this page.</p>

        <div className="-mx-5 mt-4 md:mx-0 md:mt-6">
          <div className="overflow-hidden border border-border/60 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] md:rounded-2xl">
            <iframe
              src={SCHEDULING_URL}
              style={{ border: 0, backgroundColor: "#fff" }}
              className="h-[920px] w-full md:h-[650px]"
              frameBorder={0}
              title="Book 15-Min Performance Reset"
            />
          </div>
        </div>

        <p className="mt-3 text-xs text-muted-foreground md:text-sm">
          Tip: If the calendar feels tight on mobile, scroll inside the scheduler to see more times.
        </p>
      </MotionReveal>
    </div>
  );
}
