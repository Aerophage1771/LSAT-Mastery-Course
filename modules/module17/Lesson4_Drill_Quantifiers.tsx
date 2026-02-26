import { Lesson } from '../../types';

export const Lesson4_Drill_Quantifiers: Lesson = {
  id: "17-4",
  title: "Drill: Quantifiers (PT-101-S-2-Q-11)",
  content: [
    { type: 'h2', text: 'Quantifier Overlaps' },
    { type: 'paragraph', text: 'Quantifier overlap is the single most testable inference pattern on the LSAT. When a stimulus uses words like "all," "some," "most," and "none," it is building a framework of set relationships. Your task is to determine which groups necessarily share members and which groups are necessarily excluded from each other. The correct answer follows from the overlap\u2014or lack of overlap\u2014between these sets.' },

    { type: 'paragraph', text: 'The key insight is that universal statements ("all" or "no") create hard boundaries, while particular statements ("some") guarantee the existence of at least one member in an intersection. When a "some" statement places a group inside a universally bounded category, every rule that applies to that category automatically applies to those specific members.' },

    { type: 'h3', text: 'Core Quantifier Rules' },
    { type: 'table', headers: ['Quantifier', 'Logical Force', 'What It Guarantees'], rows: [
      ['All A are B', 'Universal affirmative', 'Every member of A is inside B. No exceptions.'],
      ['No A are B', 'Universal negative', 'A and B share zero members. Complete exclusion.'],
      ['Some A are B', 'Particular affirmative', 'At least one member sits in both A and B.'],
      ['Most A are B', 'Majority', 'More than half of A is inside B. Combined with "Most A are C," forces an overlap between B and C.'],
    ]},

    { type: 'h3', text: 'The Overlap Inference' },
    { type: 'paragraph', text: 'The overlap inference works whenever a particular statement ("some") places members into a universally bounded group. Here is the template:' },
    { type: 'process', title: 'Deriving an Overlap Inference', steps: [
      '**Identify the "some" statement.** This tells you that at least one member belongs to two groups simultaneously. Example: "Some brilliant people are under eighteen."',
      '**Identify the universal rule that governs one of those groups.** Example: "No one under eighteen can vote legally" and "No one under eighteen is a professor."',
      '**Apply the universal rule to the overlapping members.** Those specific members\u2014the brilliant people who are under eighteen\u2014inherit every restriction that applies to the group "under eighteen." They cannot vote. They cannot be professors.',
      '**State the necessary conclusion.** There exist brilliant people who are neither voters nor professors. This must be true because we have identified a concrete subgroup that satisfies both exclusions.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Two "Most" Statements Force Overlap', text: 'If "Most A are B" and "Most A are C," then some A must be both B and C. Why? If more than half of A is in B, and more than half of A is in C, the two halves must share at least one member\u2014they cannot fit into A without overlapping. This is a favorite LSAT trap: test-takers often miss that two majority claims about the same group guarantee an intersection.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Quantifier Overlaps (PT-101-S-2-Q-11)' },
    { type: 'paragraph', text: 'This drill tests the core overlap pattern: combining universal exclusion rules with a particular existence claim to derive a necessary conclusion about a subgroup.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus carefully, identify the quantifier relationships, and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '17-4-drill',
      questionType: 'Must Be True',
      difficulty: 'medium',
      stimulus: 'Not surprisingly, there are no professors under the age of eighteen. And, as is well known, no one under eighteen can vote legally. Finally, some brilliant people are professors, some are legal voters, and some are under eighteen.',
      question: 'If the statements above are true, then on the basis of them which one of the following must also be true?',
      options: [
        '(A) No professors are eighteen-year-olds.',
        '(B) All brilliant people are either professors, legal voters, or under eighteen.',
        '(C) Some legal voters are not professors.',
        '(D) Some professors are neither legal voters nor brilliant people.',
        '(E) Some brilliant people are neither professors nor legal voters. (Correct)',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Quantifier Relationships' },
    { type: 'paragraph', text: 'Break the stimulus into its discrete quantifier claims and classify each one:' },

    { type: 'breakdown', labels: { title: 'Claim', text: 'Translation' }, items: [
      { title: 'No professors under 18', text: 'Universal negative: the set "under 18" and the set "professors" share zero members. If you are under 18, you are not a professor.', badge: 'Universal', badgeColor: 'blue' },
      { title: 'No one under 18 can vote', text: 'Universal negative: the set "under 18" and the set "legal voters" share zero members. If you are under 18, you cannot vote.', badge: 'Universal', badgeColor: 'blue' },
      { title: 'Some brilliant people are under 18', text: 'Particular affirmative: there exists at least one person who is both brilliant and under 18. This is the critical bridge.', badge: 'Particular', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Derive the Overlap Inference' },
    { type: 'paragraph', text: 'Focus on the "some" statement: some brilliant people are under eighteen. These specific individuals inherit every universal restriction that applies to the group "under eighteen":' },
    { type: 'list', ordered: true, items: [
      'They cannot be professors (from Rule 1).',
      'They cannot be legal voters (from Rule 2).',
    ]},
    { type: 'paragraph', text: 'Therefore, there exist brilliant people who are neither professors nor legal voters. This is not a mere possibility\u2014it is a logical necessity. The "some" statement guarantees their existence, and the two universal negatives guarantee their exclusion from both categories.' },

    { type: 'callout', variant: 'default', title: 'Pre-Phrase', text: 'Some brilliant people are neither professors nor legal voters. Look for the answer that matches this deduction.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) No professors are eighteen-year-olds.', text: 'The rules exclude those under eighteen from being professors. But someone who is exactly eighteen is not "under eighteen." The stimulus says nothing about people who are precisely eighteen years old. This answer exploits a boundary ambiguity.', badge: 'Boundary Trap', badgeColor: 'red' },
      { title: '(B) All brilliant people are either professors, legal voters, or under eighteen.', text: 'The stimulus says "some" brilliant people fall into each category. "Some" does not mean "all"\u2014there could be brilliant people who are none of these things. This answer illegitimately converts three particular statements into a universal one.', badge: 'Exhaustive List Trap', badgeColor: 'red' },
      { title: '(C) Some legal voters are not professors.', text: 'The stimulus never establishes a direct relationship between voters and professors. We know both groups exclude those under 18, but that shared exclusion does not tell us whether any voters are or are not professors.', badge: 'Unsupported Relation', badgeColor: 'red' },
      { title: '(D) Some professors are neither legal voters nor brilliant people.', text: 'We know some brilliant people are professors, but we have no information about professors who are not brilliant. The stimulus provides no basis for claims about non-brilliant professors.', badge: 'Unsupported Negative', badgeColor: 'red' },
      { title: '(E) Some brilliant people are neither professors nor legal voters.', text: 'This follows directly from the overlap inference. The brilliant people who are under 18 are excluded from both "professors" and "legal voters" by the two universal negatives. Their existence is guaranteed by the "some" statement.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Quantifier Trap Patterns' },
    { type: 'table', headers: ['Trap', 'Mechanism', 'How to Spot It'], rows: [
      ['Boundary Ambiguity', 'Exploits the edge of a quantifier\'s scope (e.g., "under 18" vs. "exactly 18")', 'Check whether the answer stays within the exact scope of the quantifier'],
      ['Exhaustive List', 'Converts several "some" claims into an "all" claim', 'Look for "all" or "either...or" language when the stimulus only uses "some"'],
      ['Unsupported Relation', 'Asserts a connection between two groups that the stimulus never links', 'Verify that the stimulus actually connects the two sets in question'],
      ['Illicit Conversion', 'Reverses a universal ("All A are B" becomes "All B are A")', 'Remember: "All A are B" does not mean "All B are A"'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'Quantifier overlap questions follow a reliable pattern: a "some" statement places members into a universally governed group, and the universal rule then applies to those members by necessity. Map every quantifier claim, identify the bridge (the "some" statement that connects two sets), and apply the universal rules to the bridged members. The correct answer states what must be true about that specific subgroup.' },
  ]
};
