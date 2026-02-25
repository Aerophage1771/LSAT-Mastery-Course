import { Lesson } from '../../types';

export const Lesson6_Advanced_HighDifficultyAnalysis: Lesson = {
  id: "17-6",
  title: "Advanced: High-Difficulty Analysis",
  content: [
    { type: 'h2', text: 'What Makes the Hardest MBT Questions Unique?' },
    { type: 'paragraph', text: 'The hardest Must Be True questions are not harder because the logic is fundamentally different. They are harder because the logic is camouflaged, combined, or contextualized in ways designed to punish superficial reading. Understanding the three difficulty factors below will help you recognize what the test-makers are doing and respond systematically rather than reactively.' },

    { type: 'h3', text: 'The Three Difficulty Factors' },

    { type: 'breakdown', labels: { title: 'Factor', text: 'Description' }, items: [
      { title: 'Factor 1: High Cognitive Load', text: 'The stimulus presents dense, multi-part rules or nested conditions that strain working memory. The deduction itself is often simple, but accurately processing the complex setup is the primary challenge. You may encounter layered conditionals ("If A, then unless B, C must..."), comparative chains, or multiple overlapping categories. The test-maker bets that you will misread one clause and cascade the error through your analysis.', badge: 'Processing', badgeColor: 'blue' },
      { title: 'Factor 2: Multi-Step Inference Chains', text: 'These questions require chaining together three or more pieces of information to reach the conclusion. The logical path may be disguised through disjunctive premises ("Either X or Y"), contrapositives that must be formed before the chain connects, or intermediate conclusions that are never explicitly stated. You must hold each link in sequence and resist the temptation to skip steps.', badge: 'Chaining', badgeColor: 'blue' },
      { title: 'Factor 3: Inferences from Disparity', text: 'These questions present two facts that seem slightly at odds\u2014a property of a subgroup conflicts with the property of the total population, or a trend in one direction coexists with a trend in another. The inference is almost always about the "other" group that must exist to balance the equation. If the average is X but one subgroup is above X, the remaining group must be below X.', badge: 'Disparity', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The "Could Be True" Trap' },
    { type: 'paragraph', text: 'On hard MBT questions, the most dangerous wrong answers are not obviously wrong\u2014they are statements that could be true but do not have to be true. The distinction is critical:' },

    { type: 'table', headers: ['Category', 'Definition', 'Example'], rows: [
      ['Must Be True', 'Cannot be false given the stimulus', '"If teachers increase 30% and the ratio is constant, students increased." This is arithmetic necessity.'],
      ['Could Be True', 'Consistent with the stimulus but not required by it', '"Some classes got larger." Possible, but the stimulus only discusses system-wide totals.'],
      ['Cannot Be True', 'Contradicts the stimulus', '"The number of students decreased." This violates the constant-ratio math.'],
    ]},

    { type: 'paragraph', text: 'The LSAT exploits the gap between "could be true" and "must be true" ruthlessly. A statement that sounds reasonable, that you would not be surprised to learn is true, is not necessarily something that must be true. On hard questions, two or three answer choices will be plausible "could be true" statements. The only defense is to test each answer against the stimulus and ask: "Is there any scenario consistent with the stimulus where this answer is false?" If yes, eliminate it.' },

    { type: 'callout', variant: 'tip', title: 'The Falsifiability Test', text: 'For each answer choice, construct a scenario where the stimulus remains true but the answer choice is false. If you can build such a scenario, the answer is merely "could be true" and must be eliminated. The correct answer is the one for which no such scenario exists\u2014the one that is true in every possible world consistent with the stimulus.' },

    { type: 'hr' },

    { type: 'h3', text: 'Advanced Deduction Strategies' },

    { type: 'h4', text: 'Strategy 1: Anchor on the Strongest Claim' },
    { type: 'paragraph', text: 'In a dense stimulus, identify the strongest or most restrictive claim first\u2014typically a universal statement, a definition, or a numerical relationship. This claim constrains everything else. Build your deduction outward from this anchor rather than trying to process every detail simultaneously.' },

    { type: 'h4', text: 'Strategy 2: Chain Contrapositives' },
    { type: 'paragraph', text: 'When the stimulus contains conditional statements that do not directly link, form the contrapositive of one to create the missing connection. If the stimulus says "All A are B" and "All C are not B," the contrapositive of the first ("Not B \u2192 Not A") connects to the second, yielding "All C are not A." This technique is essential for multi-step inference chains.' },

    { type: 'h4', text: 'Strategy 3: Isolate the Subgroup' },
    { type: 'paragraph', text: 'For disparity questions, explicitly identify the subgroup, the total, and the "other" group. If a stimulus tells you about a subgroup and a total, ask what must be true about the remainder. If 60% of the total has property X, and the subgroup (which is 40% of the total) has property X at a rate of 90%, then the remaining 60% of the total must have property X at a rate well below 60% to produce the overall average.' },

    { type: 'h4', text: 'Strategy 4: Diagram the Boundaries' },
    { type: 'paragraph', text: 'For high cognitive load questions with multiple categories and rules, sketch a quick Venn diagram or boundary map. Place each group as a circle and mark the rules (inclusion, exclusion, overlap) as arrows or barriers. This externalization frees working memory and makes the deduction visible rather than abstract.' },

    { type: 'hr' },

    { type: 'h3', text: 'Hard Drill: High-Difficulty Must Be True' },
    { type: 'paragraph', text: 'This question combines two of the three difficulty factors: high cognitive load (nested conditional rules) and multi-step inference (connecting a conditional chain through a contrapositive). Read slowly, map the rules, and derive the conclusion before looking at the answers.' },

    { type: 'question-card',
      id: '17-6-drill',
      questionType: 'Must Be True',
      difficulty: 'hard',
      stimulus: 'Every member of the Rocktown school board is also a member of the town council. No member of the town council owns a house within the town limits that was built before 1900. Dorsey is a member of the Rocktown school board and owns two houses within the town limits.',
      question: 'If the statements above are true, which one of the following must also be true?',
      options: [
        '(A) Dorsey\'s houses are both on the town council\'s approved list.',
        '(B) No member of the Rocktown school board owns a house within the town limits built before 1900. (Correct)',
        '(C) Dorsey does not own any houses outside the town limits.',
        '(D) All members of the town council who own houses within the town limits are on the school board.',
        '(E) Dorsey has been a member of the town council longer than most other members.',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Conditional Chain' },
    { type: 'paragraph', text: 'Break the stimulus into its conditional and factual components:' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Translation' }, items: [
      { title: 'Rule 1: School Board \u2192 Town Council', text: 'Every school board member is a town council member. This is a universal: School Board is a subset of Town Council.', badge: 'Universal', badgeColor: 'blue' },
      { title: 'Rule 2: Town Council \u2192 No Pre-1900 House', text: 'No town council member owns a house within the town limits built before 1900. This is a universal negative applying to all council members.', badge: 'Universal', badgeColor: 'blue' },
      { title: 'Fact: Dorsey\'s Membership', text: 'Dorsey is on the school board and owns two houses within the town limits. This anchors the abstract rules to a specific individual.', badge: 'Fact', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Chain the Rules' },
    { type: 'paragraph', text: 'Since every school board member is a council member (Rule 1), and no council member owns a pre-1900 house in town (Rule 2), it follows that no school board member owns a pre-1900 house in town. This is a transitive inference: School Board \u2192 Town Council \u2192 No Pre-1900 House. The chain applies universally to every school board member, not just Dorsey.' },

    { type: 'paragraph', text: 'Regarding Dorsey specifically: he is on the school board, so he is on the town council, so neither of his two houses within the town limits was built before 1900. But the question asks what must be true generally, not just about Dorsey.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Dorsey\'s houses are both on the town council\'s approved list.', text: 'The stimulus never mentions an "approved list." This answer introduces a concept entirely absent from the stimulus\u2014a classic fabrication trap on hard questions.', badge: 'Fabrication Trap', badgeColor: 'red' },
      { title: '(B) No member of the Rocktown school board owns a house within the town limits built before 1900.', text: 'This follows from the transitive chain: School Board \u2286 Town Council, and Town Council members cannot own pre-1900 houses in town. Therefore, no school board member can own such a house. This must be true.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Dorsey does not own any houses outside the town limits.', text: 'The stimulus says Dorsey owns two houses "within the town limits." It says nothing about whether he owns additional houses elsewhere. Absence of information is not evidence of absence.', badge: 'Absence Trap', badgeColor: 'red' },
      { title: '(D) All members of the town council who own houses within the town limits are on the school board.', text: 'This reverses the subset relationship. We know School Board \u2286 Town Council, but that does not mean Town Council \u2286 School Board. Some council members may not be on the school board.', badge: 'Illicit Conversion', badgeColor: 'red' },
      { title: '(E) Dorsey has been a member of the town council longer than most other members.', text: 'The stimulus provides no temporal information about tenure or seniority. This answer introduces a dimension the stimulus never addresses.', badge: 'Out of Scope', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Common Wrong Answer Patterns on Hard Questions' },
    { type: 'paragraph', text: 'Hard MBT questions deploy more sophisticated wrong answers than easy ones. Here are the patterns to watch for:' },

    { type: 'table', headers: ['Pattern', 'What It Does', 'Defense'], rows: [
      ['Fabrication', 'Introduces a concept, list, or category never mentioned in the stimulus', 'Check every noun in the answer against the stimulus\u2014if it doesn\'t appear, eliminate'],
      ['Illicit Conversion', 'Reverses a conditional or subset relationship (A\u2192B becomes B\u2192A)', 'Mentally confirm the direction: does the stimulus say A\u2192B or B\u2192A?'],
      ['Plausible Could-Be-True', 'States something that sounds reasonable and consistent but is not required', 'Apply the falsifiability test: can you build a scenario where the stimulus is true but this answer is false?'],
      ['Absence-to-Negation', 'Treats the absence of information as a negative claim', 'Distinguish "the stimulus doesn\'t mention X" from "X is not true"'],
      ['Scope Creep', 'Introduces temporal, causal, or qualitative dimensions the stimulus lacks', 'Flag any answer that discusses time, quality, or causation when the stimulus is purely structural'],
    ]},

    { type: 'callout', title: 'Advanced Takeaway', variant: 'summary', text: 'The hardest Must Be True questions combine multiple difficulty factors: dense rules that strain processing, multi-step chains that require contrapositive formation, and disparity inferences that demand subgroup analysis. The most dangerous wrong answers are "could be true" statements that sound plausible but fail the falsifiability test. Combat these by anchoring on the strongest claim, chaining contrapositives explicitly, isolating subgroups, and diagramming boundaries. Every correct MBT answer is true in all possible scenarios consistent with the stimulus\u2014no exceptions.' },
  ]
};
