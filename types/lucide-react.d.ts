declare module "lucide-react" {
    import * as React from "react";

    export type LucideProps = React.SVGProps<SVGSVGElement> & {
        size?: number | string;
        absoluteStrokeWidth?: boolean;
    };

    export type LucideIcon = React.FC<LucideProps>;

    export const Activity: LucideIcon;
    export const ArrowLeft: LucideIcon;
    export const ArrowRight: LucideIcon;
    export const Brain: LucideIcon;
    export const Calendar: LucideIcon;
    export const CalendarCheck: LucideIcon;
    export const CalendarClock: LucideIcon;
    export const Check: LucideIcon;
    export const CheckCircle2: LucideIcon;
    export const ChevronDown: LucideIcon;
    export const Clock: LucideIcon;
    export const Copy: LucideIcon;
    export const Database: LucideIcon;
    export const Dumbbell: LucideIcon;
    export const ExternalLink: LucideIcon;
    export const FileText: LucideIcon;
    export const Gauge: LucideIcon;
    export const LineChart: LucideIcon;
    export const Loader2: LucideIcon;
    export const Menu: LucideIcon;
    export const Moon: LucideIcon;
    export const Plane: LucideIcon;
    export const RefreshCcw: LucideIcon;
    export const RotateCcw: LucideIcon;
    export const Search: LucideIcon;
    export const Settings: LucideIcon;
    export const ShieldCheck: LucideIcon;
    export const SquareCheck: LucideIcon;
    export const Sparkles: LucideIcon;
    export const Star: LucideIcon;
    export const Target: LucideIcon;
    export const TrendingUp: LucideIcon;
    export const Utensils: LucideIcon;
    export const X: LucideIcon;
    export const Zap: LucideIcon;
}
