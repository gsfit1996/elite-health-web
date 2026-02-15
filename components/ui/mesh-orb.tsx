import { cn } from "@/lib/utils";

type MeshOrbProps = {
  className?: string;
  tone?: "primary" | "cyan" | "violet";
};

const toneMap = {
  primary:
    "radial-gradient(circle at center, rgba(46, 92, 255, 0.35), rgba(46, 92, 255, 0) 70%)",
  cyan:
    "radial-gradient(circle at center, rgba(6, 182, 212, 0.26), rgba(6, 182, 212, 0) 70%)",
  violet:
    "radial-gradient(circle at center, rgba(79, 70, 229, 0.22), rgba(79, 70, 229, 0) 70%)",
} as const;

export function MeshOrb({ className, tone = "primary" }: MeshOrbProps) {
  return (
    <div
      aria-hidden
      className={cn("absolute rounded-full blur-[130px]", className)}
      style={{ backgroundImage: toneMap[tone] }}
    />
  );
}
