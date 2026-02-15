import { cn } from "@/lib/utils";

type NoiseOverlayProps = {
  className?: string;
  opacity?: number;
};

export function NoiseOverlay({ className, opacity = 0.04 }: NoiseOverlayProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 premium-noise", className)}
      style={{ opacity }}
    />
  );
}
