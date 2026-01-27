export interface ClientCase {
    id: string;
    displayName: string;
    role: string;
    challenge: string;
    changes: string[];
    outcomeSummary: string;
    beforeImage: string;
    afterImage: string;
    category: "fatLoss" | "energy" | "strength" | "burnout";
}

const clientResultsData: ClientCase[] = [
    {
        id: "caseA",
        displayName: "Case A",
        role: "Busy executive",
        challenge: "High stress and plummeting energy led to significant weight gain and mental fog.",
        changes: [
            "Implemented protein-first anchors at each meal",
            "Followed MED-week training sessions",
            "Applied energy and recovery guardrails during work travel",
            "Used weekly performance reviews to adjust quickly",
        ],
        outcomeSummary: "Lost over 70 lb in about 4 months and regained peak energy, mental clarity, and career momentum.",
        beforeImage: "/case-results/caseA-before.jpg",
        afterImage: "/case-results/caseA-after.jpg",
        category: "fatLoss",
    },
    {
        id: "caseB",
        displayName: "Case B",
        role: "Driven executive and parent",
        challenge: "Long workdays drained energy and left little quality time for family.",
        changes: [
            "Adopted protein-first nutrition with no macro tracking",
            "Integrated short, joint-smart workouts during busy weeks",
            "Introduced travel-proof and weekend guardrails",
            "Used weekly scorecards to stay accountable",
        ],
        outcomeSummary: "Lost about 22 lb in 10 weeks and reclaimed evening energy for family time.",
        beforeImage: "/case-results/caseB-before.jpg",
        afterImage: "/case-results/caseB-after.jpg",
        category: "energy",
    },
    {
        id: "caseC",
        displayName: "Case C",
        role: "Founder, growth-stage company",
        challenge: "Strength stalled and travel weeks wiped out training consistency.",
        changes: [
            "Installed two minimum-effective strength sessions",
            "Built a hotel-gym template for travel weeks",
            "Used recovery anchors to prevent burnout",
            "Set weekly performance reviews to stay on track",
        ],
        outcomeSummary: "Added measurable strength while keeping travel weeks steady and repeatable.",
        beforeImage: "/case-results/caseC-before.jpg",
        afterImage: "/case-results/caseC-after.jpg",
        category: "strength",
    },
    {
        id: "caseD",
        displayName: "Case D",
        role: "High-stress executive",
        challenge: "Late-night work and cortisol spikes wrecked sleep and recovery.",
        changes: [
            "Added a fixed wake-time anchor and caffeine cutoff",
            "Installed evening shutdown cues and light control",
            "Built low-load recovery blocks into the calendar",
            "Simplified dinner structure to reduce late-night crashes",
        ],
        outcomeSummary: "Energy stabilized, sleep improved, and stress no longer dictated performance.",
        beforeImage: "/case-results/caseD-before.jpg",
        afterImage: "/case-results/caseD-after.jpg",
        category: "burnout",
    },
    {
        id: "caseE",
        displayName: "Case E",
        role: "Operator, finance",
        challenge: "Waistline and biomarkers trended the wrong way during peak workload.",
        changes: [
            "Installed protein-first meal architecture",
            "Used MED-week standards during peak workload",
            "Added glucose stability and recovery guardrails",
            "Tracked weekly scorecards to lock momentum",
        ],
        outcomeSummary: "Dropped visible fat, improved energy, and reversed key biomarker trends.",
        beforeImage: "/case-results/caseE-before.jpg",
        afterImage: "/case-results/caseE-after.jpg",
        category: "fatLoss",
    },
];

export default clientResultsData;
