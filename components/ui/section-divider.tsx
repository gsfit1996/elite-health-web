import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-white/25 to-transparent",
        className
      )}
    />
  );
}
