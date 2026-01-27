export interface ClientCase {
    id: string;
    displayName: string;
    headline: string;
    role: string;
    challenge: string;
    changes: string[];
    outcomeSummary: string;
    callout?: string;
    beforeImage: string;
    afterImage: string;
    category: "fatLoss" | "energy" | "strength" | "burnout";
}

const clientResultsData: ClientCase[] = [
    {
        id: "karl",
        displayName: "Karl",
        headline: "Karl Shed 20lbs+ in 8 Weeks",
        role: "Busy dad - High-demand job - GAA/gym background",
        challenge:
            "Ever feel like life's snatched control of your fitness?\n\nKarl was once the fitness guy his mates turned to - GAA, gym, discipline. But after kids, sleepless nights, junk food and a high-demand job, his routine slipped away.\n\nThe wake-up call hit hard at the pub with a jab: \"I'd ask Karl, but I don't want his gut.\" That stung.",
        changes: [
            "Protein-first meals that fit office days (no macro tracking)",
            "3x weekly strength sessions (15-30 minutes)",
            "Weekend guardrails for pubs/takeaways/social events",
            "Weekly check-ins + adjustments to keep momentum",
        ],
        outcomeSummary:
            "Determined, he joined Elite Health OS - 60 days later, 20lbs+ of body fat shed and 4 inches off his waist. He reclaimed his fit identity.",
        beforeImage: "/case-results/caseA-before.jpg",
        afterImage: "/case-results/caseA-before.jpg",
        category: "fatLoss",
    },
    {
        id: "kieran",
        displayName: "Kieran",
        headline: "Kieran Shed 17lbs in 8 Weeks",
        role: "CEO - Trekking/fitness - Long work hours + pressure",
        challenge:
            "Kieran's routine unraveled under relentless work hours and mounting pressure - driving him toward frequent fast food.\n\nA pivotal moment hit during a trek when he was breathless and lagging behind.\n\nHe decided to level up.",
        changes: [
            "Simple nutrition structure built around a CEO schedule",
            "Strength + conditioning plan that supported trekking and energy",
            "Recovery + stress systems for high-pressure weeks",
            "Weekly accountability to stay consistent",
        ],
        outcomeSummary:
            "After 60 days, he shed 17lbs, boosted his energy, and sharpened his focus. Now, he conquers trails with renewed vigor.",
        beforeImage: "/case-results/caseB-before.jpg",
        afterImage: "/case-results/caseB-before.jpg",
        category: "strength",
    },
    {
        id: "mark",
        displayName: "Mark",
        headline: "Mark Shed 52lbs in 13 Weeks",
        role: "Director - Back-to-back meetings - Golf to unwind",
        challenge:
            "Mark thrived on leading his team with energy and hitting the golf course to unwind.\n\nBut back-to-back meetings and late nights fueled quick meals and silent weight gain.\n\nA reality check came during a game when he struggled to finish a round - and that sparked the shift.",
        changes: [
            "Nutrition system to drop fat without obsession or tracking",
            "Minimum-effective training to keep muscle while cutting",
            "Daily movement targets that worked around meetings",
            "Weekly coaching to fix what wasn't working fast",
        ],
        outcomeSummary:
            "He joined Elite Health OS - after 13 weeks, 52lbs lost and stamina renewed. Now, he's back dominating the fairways with confidence.",
        beforeImage: "/case-results/caseC-before.jpg",
        afterImage: "/case-results/caseC-before.jpg",
        category: "fatLoss",
    },
    {
        id: "john",
        displayName: "John",
        headline: "John Shed 22lbs in 10 Weeks",
        role: "Driven executive - Family time matters - Workload heavy",
        challenge:
            "John cherished weekend family time - but brutal workweeks drained his mental energy and consistency.\n\nA heart-wrenching moment came when he realized he was burnt out, missing family moments, and slipping further away from the version of himself he respected.\n\nThat was his line in the sand.",
        changes: [
            "Automatic meal structure for workdays (simple + repeatable)",
            "Short workouts that didn't steal evenings or weekends",
            "Recovery protocols to restore \"6pm energy\"",
            "Weekly accountability to stay locked in",
        ],
        outcomeSummary:
            "He joined Elite Health OS - 10 weeks later, 22lbs shed and energy restored. Now, he's back creating memories and showing up for his family.",
        beforeImage: "/case-results/caseD-before.jpg",
        afterImage: "/case-results/caseD-before.jpg",
        category: "energy",
    },
    {
        id: "ryan",
        displayName: "Ryan",
        headline: "Ryan Shed 70lbs+ in 120 Days",
        role: "High-stress lifestyle - Energy crashed - Performance slipped",
        challenge:
            "Before partnering with us, Ryan was overwhelmed with stress - his physical health and energy levels were plummeting.",
        changes: [
            "Structured nutrition + training system that removed decision fatigue",
            "Stress and recovery systems to stabilize energy and focus",
            "Weekly targets + coaching adjustments",
            "Consistency framework built for real life (not perfect life)",
        ],
        outcomeSummary:
            "In 120 days, he shed 70lbs+, boosted his energy, and improved focus and mental clarity - leading to two job promotions within four months.",
        beforeImage: "/case-results/caseE-before.jpg",
        afterImage: "/case-results/caseE-before.jpg",
        category: "burnout",
    },
    {
        id: "seamus",
        displayName: "Seamus",
        headline: "Seamus Rebuilt His Health in 4+ Months",
        role: "Dad of three - Business owner - High-stress weeks",
        challenge:
            "Seamus got a serious wake-up call with his health.\n\nAs a dad of three girls, a business owner, and a husband, his weeks were full-on. Stress was high, time was tight, and his health kept slipping - until a hospital visit made it clear something had to change.\n\nIn just over 4 months with the Elite Health program, Seamus built a leaner, more muscular physique and dramatically improved his energy, focus, and overall health.\n\nAt the 6-month mark, his follow-up bloods showed major improvements - enough to genuinely surprise his doctor.\n\nBefore joining, Seamus was stuck with:\n\nX Generic programs that didn't fit his real life\n\nX Starting and stopping, with no lasting progress\n\nX Feeling \"too busy\" for health (when what he actually needed was a plan that adapts week to week)\n\nSeamus' transformation wasn't just physical - it was a full lifestyle reset that gave him more energy, more confidence, and more capacity for his family.\n\nNow, he's active, present, and in control again.",
        changes: [
            "Weekly plan that adapted to real life, not perfect weeks",
            "Nutrition structure that drove fat loss without obsession",
            "Strength training to build a leaner, more muscular frame",
            "Accountability and fast adjustments to keep momentum",
        ],
        outcomeSummary:
            "In just over 4 months, Seamus rebuilt his health and energy. Six-month bloods showed major improvements and surprised his doctor.",
        callout:
            "If you want results like this without tracking macros or living in the gym, book a 15-minute Performance Audit.",
        beforeImage: "/case-results/caseF-before.jpg",
        afterImage: "/case-results/caseF-before.jpg",
        category: "burnout",
    },
];

export default clientResultsData;
