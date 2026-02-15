import { cn } from "@/lib/utils";
import { MeshOrb } from "@/components/ui/mesh-orb";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

type PremiumBackdropProps = {
  className?: string;
  withGrid?: boolean;
  withNoise?: boolean;
};

export function PremiumBackdrop({
  className,
  withGrid = true,
  withNoise = true,
}: PremiumBackdropProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none fixed inset-0 z-0", className)}>
      <MeshOrb className="left-1/2 top-[-240px] h-[540px] w-[980px] -translate-x-1/2" tone="primary" />
      <MeshOrb className="right-[-120px] top-[22%] h-[430px] w-[430px]" tone="cyan" />
      <MeshOrb className="left-[-90px] bottom-[8%] h-[360px] w-[360px]" tone="violet" />
      {withGrid && <div className="absolute inset-0 premium-grid opacity-[0.07]" />}
      {withNoise && <NoiseOverlay opacity={0.035} />}
    </div>
  );
}
