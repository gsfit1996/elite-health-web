// Centralised case data for Elite Health client results.
// Each case study is anonymised; do not include real names to respect privacy.

export interface ClientCase {
  id: string;           // unique identifier for the case
  displayName: string;  // display label (e.g., "Case A")
  role: string;         // role or occupation
  challenge: string;    // description of the client's initial challenge
  changes: string[];    // list of key changes they implemented
  outcomeSummary: string;  // summary of the outcome (weight lost, time frame, other benefits)
  beforeImage: string;  // relative path to before photo (in public/case-results)
  afterImage: string;   // relative path to after photo (in public/case-results)
  category: 'fatLoss' | 'energy' | 'strength' | 'burnout'; // category used for filtering
}

const clientResultsData: ClientCase[] = [
  {
    id: 'caseA',
    displayName: 'Case A',
    role: 'Busy executive',
    challenge: 'High stress and plummeting energy led to significant weight gain and mental fog.',
    changes: [
      'Implemented protein-first anchors at each meal',
      'Followed MED-week training sessions',
      'Applied energy and recovery guardrails during work travel',
      'Used weekly performance reviews to adjust quickly',
    ],
    outcomeSummary: 'Lost over 70 lb in about 4 months and regained peak energy, mental clarity and career momentum.',
    beforeImage: '/case-results/caseA-before.jpg',
    afterImage: '/case-results/caseA-after.jpg',
    category: 'fatLoss',
  },
  {
    id: 'caseB',
    displayName: 'Case B',
    role: 'Driven executive and parent',
    challenge: 'Long workdays drained energy and left little quality time for family.',
    changes: [
      'Adopted protein-first nutrition with no macro tracking',
      'Integrated short, joint-smart workouts during busy weeks',
      'Introduced travel-proof and weekend guardrails',
      'Used weekly scorecards to stay accountable',
    ],
    outcomeSummary: 'Lost around 22 lb in 10 weeks and reclaimed evening energy for family time.',
    beforeImage: '/case-results/caseB-before.jpg',
    afterImage: '/case-results/caseB-after.jpg',
    category: 'energy',
  },
  {
    id: 'caseC',
    displayName: 'Case C',
    role: 'Director with back-to-back meetings',
    challenge: 'Fast food and late nights left him overweight and unable to finish 18 holes of golf.',
    changes: [
      'Shifted to protein-first meals and MED-week training',
      'Added travel and weekend guardrails for consistency',
      'Used weekly performance reviews to fine-tune recovery',
    ],
    outcomeSummary: 'Lost about 52 lb in 13 weeks and regained the stamina and confidence to return to his favourite sport.',
    beforeImage: '/case-results/caseC-before.jpg',
    afterImage: '/case-results/caseC-after.jpg',
    category: 'strength',
  },
  {
    id: 'caseD',
    displayName: 'Case D',
    role: 'Outdoor enthusiast CEO',
    challenge: 'Frequent fast food and long hours hampered his ability to enjoy outdoor adventures.',
    changes: [
      'Replaced takeaways with easy protein-first meals',
      'Used default decisions to prevent decision fatigue',
      'Integrated weekly reviews to adjust quickly',
    ],
    outcomeSummary: 'Lost around 17 lb in 8 weeks and regained stamina and focus to conquer new trails.',
    beforeImage: '/case-results/caseD-before.jpg',
    afterImage: '/case-results/caseD-after.jpg',
    category: 'burnout',
  },
  {
    id: 'caseE',
    displayName: 'Case E',
    role: 'Professional with young children',
    challenge: 'Parenthood, junk food and a demanding job caused major weight gain and loss of fitness identity.',
    changes: [
      'Adopted MED-week training (<30 min sessions)',
      'Implemented default decisions and Never Miss Twice rule',
      'Relied on weekly scorecards for accountability',
    ],
    outcomeSummary: 'Lost about 20 lb in 8 weeks and rebuilt his lean, fit identity.',
    beforeImage: '/case-results/caseE-before.jpg',
    afterImage: '/case-results/caseE-after.jpg',
    category: 'energy',
  },
];

export default clientResultsData;