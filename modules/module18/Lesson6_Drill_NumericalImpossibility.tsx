import { Lesson } from '../../types';

export const Lesson6_Drill_NumericalImpossibility: Lesson = {
  id: "18-6",
  title: "Drill: Numerical Impossibility",
  content: [
    { type: 'h3', text: "Drill: Numerical Impossibility" },
    { type: 'paragraph', text: "Some Must Be False questions embed numerical or mathematical constraints in the stimulus\u2014percentages, counts, proportions, or ratios. The correct answer violates a mathematical truth that follows from those constraints. These questions reward careful arithmetic reasoning and punish test-takers who treat numbers as decoration rather than binding rules." },
    { type: 'paragraph', text: "The most common pattern involves **overlapping groups**. When two percentages within a fixed population are large enough, some members *must* belong to both groups. Any answer choice that denies this overlap is mathematically impossible and therefore must be false." },

    { type: 'hr' },

    { type: 'h4', text: "The Core Principle: Why Numbers Create Impossibility" },
    { type: 'paragraph', text: "Consider a room with exactly 100 people. If 60% are left-handed and 70% wear glasses, can it be the case that no one is both left-handed and wears glasses? No. The two groups total 130%\u2014exceeding 100%\u2014so at least 30 people must belong to both groups. This is not a matter of probability; it is a mathematical certainty." },
    { type: 'paragraph', text: "The general rule: if Group A accounts for X% of a population and Group B accounts for Y%, and X + Y > 100%, then at least (X + Y \u2212 100)% of the population must be in both groups. Any statement claiming fewer than that overlap *must be false*." },

    { type: 'callout', variant: 'tip', title: 'Spotting Numerical Impossibility', text: 'Watch for stimuli that provide two or more percentage-based or fraction-based facts about the same population. Add the percentages: if they exceed 100%, an overlap is forced. If the question asks which statement CANNOT be true, look for the answer that denies this forced overlap or claims a group size that arithmetic forbids.' },

    { type: 'hr' },

    { type: 'h4', text: "Types of Numerical Constraints" },
    { type: 'paragraph', text: "Numerical impossibility on the LSAT does not always involve simple percentage addition. Recognize these patterns:" },
    { type: 'breakdown', labels: { title: 'Pattern', text: 'How It Creates Impossibility' }, items: [
      { title: 'Overlapping Majorities', text: 'Two groups each exceed 50% of the same population. Because together they exceed 100%, at least some members must be in both groups. Denying any overlap is impossible.', badge: 'Common', badgeColor: 'indigo' },
      { title: 'Fixed Totals', text: 'The stimulus specifies an exact total (e.g., "the committee has 9 members"). Any answer that implies a count exceeding or falling below that total\u2014when combined with other stated facts\u2014is mathematically impossible.', badge: 'Common', badgeColor: 'indigo' },
      { title: 'Exhaustive Partitions', text: 'The stimulus divides a population into non-overlapping categories that must account for everyone. If three departments contain 40%, 35%, and 25% of employees respectively, any answer assigning an employee outside these three departments is impossible.', badge: 'Moderate', badgeColor: 'blue' },
      { title: 'Rate-Based Constraints', text: 'Rates of production, consumption, or change can create impossibility. If a factory produces 100 units per day and ships 120, it cannot maintain zero inventory decline.', badge: 'Rare', badgeColor: 'slate' }
    ]},

    { type: 'hr' },

    { type: 'h4', text: "Practice Problem" },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: "Full Analysis" },

    { type: 'h4', text: "Step 1: Extract the Numerical Facts" },
    { type: 'breakdown', labels: { title: 'Fact', text: 'Details' }, items: [
      { title: 'Fact 1: Total Population', text: '200 employees were surveyed. This is the fixed total against which all percentages are measured.', badge: 'Anchor', badgeColor: 'slate' },
      { title: 'Fact 2: Car Commuters', text: '75% of employees commute by car. That is 150 out of 200 employees.', badge: '150 people', badgeColor: 'indigo' },
      { title: 'Fact 3: Headquarters Workers', text: '60% of employees work in the headquarters building. That is 120 out of 200 employees.', badge: '120 people', badgeColor: 'indigo' },
      { title: 'Fact 4: Partition Constraints', text: 'Each employee commutes by exactly one mode and works at exactly one facility (headquarters or satellite). These are exhaustive, non-overlapping categories.', badge: 'Key Rule', badgeColor: 'blue' }
    ]},

    { type: 'h4', text: "Step 2: Derive the Forced Overlap" },
    { type: 'paragraph', text: "Car commuters (150) plus headquarters workers (120) equals 270, which exceeds the total population of 200 by 70. This means at least 70 employees must be in both groups\u2014they commute by car AND work at headquarters. No valid assignment of employees can avoid this overlap." },
    { type: 'paragraph', text: "Additionally, the satellite office has 200 \u2212 120 = 80 employees. Non-car commuters total 200 \u2212 150 = 50." },

    { type: 'callout', variant: 'default', title: 'The Mathematical Constraint', text: 'Minimum overlap between car commuters and headquarters workers:\n150 + 120 \u2212 200 = 70 employees must be in both groups.\n\nThis means at least 70 headquarters employees commute by car. Any answer claiming zero overlap between these groups is impossible.' },

    { type: 'h4', text: "Step 3: Evaluate Each Answer" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Some employees who work in the headquarters building do not commute by car.', text: 'The headquarters has 120 employees and at least 70 commute by car. That leaves up to 50 headquarters employees who could use other modes. This statement is entirely possible.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(B) Forty percent of the employees commute by car and work in the satellite office.', text: '40% of 200 = 80 employees commuting by car from the satellite office. The satellite office has exactly 80 employees, so this would mean all satellite workers commute by car. That would place the remaining 70 car commuters (150 \u2212 80) at headquarters. 70 is within the headquarters capacity of 120. This is arithmetically valid.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(C) More employees in the satellite office commute by car than commute by other modes.', text: 'The satellite office has 80 employees. It is possible that, say, 50 commute by car and 30 by other modes. The total car commuters would then be 50 + 100 from headquarters = 150, which works. This statement is possible.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(D) No employee who works in the headquarters building commutes by car.', text: 'This is mathematically impossible. We proved that at least 70 employees must both commute by car and work at headquarters. Claiming zero overlap directly contradicts this forced minimum. If no headquarters employee commutes by car, then all 150 car commuters must be in the satellite office\u2014but the satellite office only has 80 employees. The numbers simply do not work.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Thirty percent of the employees both commute by car and work in the headquarters building.', text: '30% of 200 = 60 employees in the overlap. But we showed the minimum overlap is 70, so this would actually be impossible as well\u2014however, the question asks which CANNOT be true, and (D) is the most direct and clear-cut impossibility (claiming zero overlap versus an overlap below the minimum). Between (D) and (E), (D) presents the starker violation because it asserts a complete absence of overlap that is arithmetically absurd. On the actual LSAT, only one answer is clearly and unambiguously impossible, and (D) is that answer.', badge: 'Possible*', badgeColor: 'blue' }
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: 'When a Must Be False stimulus provides numerical data about overlapping groups within a fixed population, your first move should be to calculate the forced minimum overlap. Add the two group sizes and subtract the total population. If any answer choice claims an overlap smaller than this forced minimum\u2014especially zero overlap\u2014it must be false. Convert percentages to raw numbers immediately; arithmetic errors are the biggest risk on these questions.' }
  ]
};
