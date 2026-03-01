
import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: "55-ref",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'MODULE 21: Conditional Reasoning \u2014 Complete Reference' },
    { type: 'paragraph', text: 'A comprehensive reference covering every conditional reasoning concept tested on the LSAT: trigger words, translation rules, valid and invalid inference forms, quantifier logic, special structures, and common fallacies. Bookmark this for review before test day.' },
    { type: 'hr' },

    { type: 'h3', text: 'Section 1: Conditional Trigger Words' },
    { type: 'paragraph', text: 'Conditional statements have two parts: a **sufficient condition** (the trigger) and a **necessary condition** (the requirement). Identifying trigger words is the first step in diagramming any conditional.' },

    { type: 'h4', text: 'Sufficient Condition Triggers' },
    { type: 'paragraph', text: 'These words introduce the sufficient condition. The arrow points **away** from the trigger word toward the necessary condition.' },
    {
      type: 'table',
      headers: ['Trigger Word', 'Example Statement', 'Diagram'],
      rows: [
        ['**If**', 'If it rains, the ground is wet.', 'Rain \u2192 Wet Ground'],
        ['**When / Whenever**', 'Whenever you study, you improve.', 'Study \u2192 Improve'],
        ['**Every**', 'Every lawyer passed the bar.', 'Lawyer \u2192 Passed Bar'],
        ['**All**', 'All mammals are warm-blooded.', 'Mammal \u2192 Warm-Blooded'],
        ['**Each**', 'Each participant signed a waiver.', 'Participant \u2192 Signed Waiver'],
        ['**Any**', 'Any citizen may vote.', 'Citizen \u2192 May Vote'],
        ['**Provided that**', 'You\'ll pass provided that you study.', 'Study \u2192 Pass'],
        ['**As long as**', 'Safe as long as you follow rules.', 'Follow Rules \u2192 Safe'],
        ['**Those who**', 'Those who cheat are disqualified.', 'Cheat \u2192 Disqualified'],
        ['**In order to**', 'In order to graduate, complete credits.', 'Graduate \u2192 Complete Credits'],
        ['**To [Verb]**', 'To succeed, you must practice.', 'Succeed \u2192 Practice']
      ]
    },

    { type: 'h4', text: 'Necessary Condition Triggers' },
    { type: 'paragraph', text: 'These words introduce the necessary condition. The arrow points **toward** the trigger word from the sufficient condition.' },
    {
      type: 'table',
      headers: ['Trigger Word', 'Example Statement', 'Diagram'],
      rows: [
        ['**Only if**', 'You pass only if you study.', 'Pass \u2192 Study'],
        ['**Only**', 'Only members may enter.', 'Enter \u2192 Member'],
        ['**Requires / Required**', 'Admission requires a transcript.', 'Admission \u2192 Transcript'],
        ['**Must / Must have**', 'You must register to vote.', 'Vote \u2192 Register'],
        ['**Unless**', 'You fail unless you study.', '~Study \u2192 Fail (equivalently: ~Fail \u2192 Study)'],
        ['**Until**', 'No license until you pass the test.', 'License \u2192 Pass Test'],
        ['**Depends on**', 'Success depends on effort.', 'Success \u2192 Effort'],
        ['**Necessary for**', 'Water is necessary for life.', 'Life \u2192 Water'],
        ['**Essential / Indispensable**', 'Trust is essential to teamwork.', 'Teamwork \u2192 Trust'],
        ['**Impossible without**', 'Victory is impossible without training.', 'Victory \u2192 Training'],
        ['**Precondition for**', 'Literacy is a precondition for education.', 'Education \u2192 Literacy']
      ]
    },
    { type: 'callout', variant: 'tip', title: 'Quick Rule', text: 'Sufficient triggers tell you what **starts** the rule. Necessary triggers tell you what is **required** by the rule. When in doubt, ask: "Does knowing this guarantee something else?" If yes, it\'s the sufficient condition.' },
    { type: 'hr' },

    { type: 'h3', text: 'Section 2: The Contrapositive' },
    { type: 'paragraph', text: 'The contrapositive is the logically equivalent form of any conditional. It is obtained by **reversing** and **negating** both conditions.' },
    {
      type: 'table',
      headers: ['Original', 'Contrapositive', 'Relationship'],
      rows: [
        ['A \u2192 B', '~B \u2192 ~A', 'Logically equivalent \u2014 always valid'],
        ['Dog \u2192 Mammal', '~Mammal \u2192 ~Dog', 'If not a mammal, then not a dog'],
        ['Rain \u2192 Wet', '~Wet \u2192 ~Rain', 'If not wet, then it didn\'t rain'],
        ['Study \u2192 Pass', '~Pass \u2192 ~Study', 'If you didn\'t pass, you didn\'t study'],
        ['(A and B) \u2192 C', '~C \u2192 (~A or ~B)', 'AND becomes OR when negated'],
        ['A \u2192 (B and C)', '(~B or ~C) \u2192 ~A', 'AND becomes OR when negated'],
        ['(A or B) \u2192 C', '~C \u2192 (~A and ~B)', 'OR becomes AND when negated'],
        ['A \u2192 (B or C)', '(~B and ~C) \u2192 ~A', 'OR becomes AND when negated']
      ]
    },
    { type: 'callout', title: 'De Morgan\'s Laws on the LSAT', text: 'When you negate a compound condition:\n\u2022 **AND** becomes **OR**: ~(A and B) = ~A or ~B\n\u2022 **OR** becomes **AND**: ~(A or B) = ~A and ~B\n\nThis is critical for contrapositives of compound conditionals.' },
    { type: 'hr' },

    { type: 'h3', text: 'Section 3: Valid vs. Invalid Inferences' },
    { type: 'paragraph', text: 'Given the conditional `A \u2192 B`, there are exactly four inference patterns. Two are valid; two are classic LSAT fallacies.' },
    {
      type: 'table',
      headers: ['Inference Name', 'Pattern', 'Conclusion', 'Status'],
      rows: [
        ['**Affirm Sufficient (Modus Ponens)**', 'A \u2192 B, A is true', 'B is true', '\u2705 VALID'],
        ['**Deny Necessary (Modus Tollens)**', 'A \u2192 B, B is false', 'A is false', '\u2705 VALID'],
        ['**Affirm Necessary (Mistaken Reversal)**', 'A \u2192 B, B is true', 'A is true', '\u274c INVALID'],
        ['**Deny Sufficient (Mistaken Negation)**', 'A \u2192 B, A is false', 'B is false', '\u274c INVALID']
      ]
    },
    { type: 'breakdown', labels: { title: 'Form', text: 'Concrete Example' }, colWidth: 'narrow', items: [
      { title: 'Modus Ponens', text: 'Rule: If it\'s a dog, it\'s a mammal.\nFact: Fido is a dog.\nConclusion: Fido is a mammal. \u2705', badge: 'Valid', badgeColor: 'green' },
      { title: 'Modus Tollens', text: 'Rule: If it\'s a dog, it\'s a mammal.\nFact: This creature is not a mammal.\nConclusion: This creature is not a dog. \u2705', badge: 'Valid', badgeColor: 'green' },
      { title: 'Mistaken Reversal', text: 'Rule: If it\'s a dog, it\'s a mammal.\nFact: This creature is a mammal.\nConclusion: This creature is a dog. \u274c\n(Cats are mammals too!)', badge: 'INVALID', badgeColor: 'red' },
      { title: 'Mistaken Negation', text: 'Rule: If it\'s a dog, it\'s a mammal.\nFact: This creature is not a dog.\nConclusion: This creature is not a mammal. \u274c\n(Non-dogs can still be mammals!)', badge: 'INVALID', badgeColor: 'red' }
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Section 4: Quantifier Logic' },
    { type: 'paragraph', text: 'The LSAT uses four levels of quantity. Each has distinct logical properties that determine which inferences are valid.' },
    {
      type: 'table',
      headers: ['Quantifier', 'Symbol', 'Range', 'Contraposable?', 'Reversible?'],
      rows: [
        ['**All**', 'A \u2192 B', '100%', 'Yes', 'No (but Some B are A is valid)'],
        ['**Most**', 'A \u2014m\u2192 B', '51\u201399%', 'No', 'No'],
        ['**Some**', 'A \u2190s\u2192 B', '1\u2013100%', 'No', 'Yes (Some B are A)'],
        ['**None**', 'A \u2192 ~B', '0%', 'Yes (B \u2192 ~A)', 'Yes (No B are A)']
      ]
    },

    { type: 'h4', text: 'Quantifier Hierarchy' },
    { type: 'paragraph', text: 'Higher quantifiers entail lower ones: **All \u2192 Most \u2192 Some**. You can always "weaken" a stronger claim.' },
    {
      type: 'table',
      headers: ['If you know...', 'You can infer...', 'You CANNOT infer...'],
      rows: [
        ['All A are B', 'Most A are B; Some A are B; Some B are A', 'Most B are A; All B are A'],
        ['Most A are B', 'Some A are B', 'All A are B; Most B are A; Some B are A (without more info)'],
        ['Some A are B', 'Some B are A', 'Most A are B; All A are B'],
        ['No A are B', 'No B are A; All A are ~B', 'Some A are B']
      ]
    },

    { type: 'h4', text: 'Overlap Rules (Combining Quantifiers)' },
    {
      type: 'table',
      headers: ['Combination', 'Yields', 'Reason'],
      rows: [
        ['All A are B + All B are C', 'All A are C', 'Chain through shared term'],
        ['Most A are B + All B are C', 'Most A are C', 'Most-to-All bridge'],
        ['All A are B + Most B are C', 'No valid deduction about A and C', 'Cannot chain into the necessary side of Most'],
        ['Most A are B + Most A are C', 'Some B are C', 'Overlap rule: two majorities of the same group must share members'],
        ['Most A are B + Most B are C', 'No valid deduction', 'Different base groups \u2014 no guaranteed overlap']
      ]
    },
    { type: 'hr' },

    { type: 'h3', text: 'Section 5: The "Unless" Translation Rule' },
    { type: 'paragraph', text: 'The word "unless" (and equivalents "until," "except," "without") is one of the most frequently tested conditional triggers. It requires a specific two-step translation.' },
    { type: 'process', steps: [
      '**Negate** the term that is NOT next to "unless" \u2014 this becomes the sufficient condition.',
      'The term **next to** "unless" stays as-is \u2014 this becomes the necessary condition.',
    ]},
    {
      type: 'table',
      headers: ['Statement', 'Step 1: Sufficient (Negate)', 'Step 2: Necessary (Keep)', 'Diagram'],
      rows: [
        ['You fail unless you study.', '~Study', 'Fail', '~Study \u2192 Fail'],
        ['No parking unless authorized.', '~Authorized', 'No Parking', '~Authorized \u2192 No Parking'],
        ['She won\'t go without an invitation.', '~Invitation', '~Go', '~Invitation \u2192 ~Go'],
        ['The project stalls until funding arrives.', '~Funding', 'Stalls', '~Funding \u2192 Stalls']
      ]
    },
    { type: 'callout', variant: 'tip', title: 'Alternative Method', text: 'You can also read "unless" as "if not." Replace "unless" with "if not" and the sentence reads naturally:\n\u2022 "You fail unless you study" = "You fail if you don\'t study" = ~Study \u2192 Fail' },
    { type: 'hr' },

    { type: 'h3', text: 'Section 6: Common Conditional Fallacies' },
    { type: 'paragraph', text: 'The LSAT tests your ability to recognize flawed conditional reasoning. These are the most common fallacies you will encounter.' },
    { type: 'breakdown', labels: { title: 'Fallacy', text: 'Description & How to Identify' }, items: [
      { title: 'Mistaken Reversal (Affirming the Consequent)', text: 'Assumes that because B is true, A must be true. Confuses a necessary condition for a sufficient one.\n\n**Example:** "All dogs are mammals. Whiskers is a mammal. Therefore Whiskers is a dog."\n**Pattern:** A \u2192 B, B \u2234 A', badge: 'Very Common', badgeColor: 'red' },
      { title: 'Mistaken Negation (Denying the Antecedent)', text: 'Assumes that because A is false, B must be false. Ignores that B could be true for other reasons.\n\n**Example:** "If it rains, the game is cancelled. It didn\'t rain. Therefore the game wasn\'t cancelled."\n**Pattern:** A \u2192 B, ~A \u2234 ~B', badge: 'Very Common', badgeColor: 'red' },
      { title: 'Confusing Sufficient and Necessary', text: 'Treats a necessary condition as if it were sufficient, or vice versa.\n\n**Example:** "Oxygen is necessary for fire. There is oxygen here. Therefore there will be fire." (Oxygen is necessary, not sufficient.)', badge: 'Common', badgeColor: 'red' },
      { title: 'Illicit Quantifier Shift', text: 'Shifts between quantifier levels without justification: "Some" to "Most," or "Most" to "All."\n\n**Example:** "Most lawyers are well-paid. Therefore all lawyers are well-paid."', badge: 'Common', badgeColor: 'red' },
      { title: 'Invalid Chain (Wrong Direction)', text: 'Attempts to chain conditionals through the necessary side rather than the sufficient side.\n\n**Example:** A \u2192 B and C \u2192 B does NOT yield A \u2192 C. Sharing a necessary condition does not link two sufficient conditions.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Conditional-Causal Confusion', text: 'Treats a logical conditional as a causal relationship or vice versa. "If A then B" means A guarantees B, not that A causes B.\n\n**Example:** "If someone is a senator, they are over 30. Therefore being a senator causes aging."', badge: 'Moderate', badgeColor: 'slate' }
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Section 7: Complex Structure Patterns' },

    { type: 'h4', text: 'Biconditional Statements' },
    { type: 'paragraph', text: 'A biconditional means A is **both sufficient and necessary** for B. It yields two conditionals and two contrapositives.' },
    {
      type: 'table',
      headers: ['Form', 'Diagram', 'Meaning'],
      rows: [
        ['A if and only if B', 'A \u2194 B', 'A \u2192 B AND B \u2192 A'],
        ['Contrapositive 1', '~B \u2192 ~A', 'If not B, then not A'],
        ['Contrapositive 2', '~A \u2192 ~B', 'If not A, then not B'],
        ['Net effect', 'A and B always together', 'Both true or both false']
      ]
    },
    { type: 'callout', title: 'Biconditional Triggers', text: '"If and only if," "A is required for and guarantees B," "A is both necessary and sufficient for B," or when two separate conditionals share the same terms in opposite directions.' },

    { type: 'h4', text: 'Chain Reasoning' },
    { type: 'paragraph', text: 'When the necessary condition of one statement is the sufficient condition of another, the statements can be chained.' },
    {
      type: 'table',
      headers: ['Given', 'Chain', 'Full Contrapositive'],
      rows: [
        ['A \u2192 B, B \u2192 C', 'A \u2192 B \u2192 C', '~C \u2192 ~B \u2192 ~A'],
        ['A \u2192 B, B \u2192 C, C \u2192 D', 'A \u2192 B \u2192 C \u2192 D', '~D \u2192 ~C \u2192 ~B \u2192 ~A'],
        ['P \u2192 Q, Q \u2192 R, R \u2192 S', 'P \u2192 Q \u2192 R \u2192 S', '~S \u2192 ~R \u2192 ~Q \u2192 ~P']
      ]
    },

    { type: 'h4', text: 'Nested Conditionals' },
    { type: 'paragraph', text: 'Some LSAT stimuli contain conditionals within conditionals. Break these down layer by layer.' },
    {
      type: 'table',
      headers: ['Statement', 'Outer Conditional', 'Inner Conditional', 'Combined Diagram'],
      rows: [
        ['If A, then if B then C', 'A triggers the inner rule', 'B \u2192 C (only when A)', '(A and B) \u2192 C'],
        ['If it rains, then if the roof leaks, the floor gets wet', 'Rain activates the rule', 'Leak \u2192 Wet (when raining)', '(Rain and Leak) \u2192 Wet Floor']
      ]
    },

    { type: 'h4', text: 'Compound Condition Reference' },
    {
      type: 'table',
      headers: ['Structure', 'Diagram', 'Contrapositive', 'Key Rule'],
      rows: [
        ['AND in Sufficient', '(A and B) \u2192 C', '~C \u2192 (~A or ~B)', 'Both must be present to trigger'],
        ['AND in Necessary', 'A \u2192 (B and C)', '(~B or ~C) \u2192 ~A', 'Both are required outcomes'],
        ['OR in Sufficient', '(A or B) \u2192 C', '~C \u2192 (~A and ~B)', 'Either one triggers the rule'],
        ['OR in Necessary', 'A \u2192 (B or C)', '(~B and ~C) \u2192 ~A', 'At least one must follow']
      ]
    },
    { type: 'hr' },

    { type: 'h3', text: 'Section 8: Negating Quantified Statements' },
    { type: 'paragraph', text: 'Negation flips a statement to its logical opposite. This is essential for Weaken, Strengthen, and Must Be True questions involving quantifiers.' },
    {
      type: 'table',
      headers: ['Original Statement', 'Logical Negation', 'What Changes'],
      rows: [
        ['All A are B', 'Some A are not B', 'All \u2192 Some...not'],
        ['No A are B', 'Some A are B', 'No \u2192 Some'],
        ['Some A are B', 'No A are B', 'Some \u2192 No'],
        ['Some A are not B', 'All A are B', 'Some...not \u2192 All'],
        ['Most A are B', 'Half or fewer A are B', 'Most \u2192 \u226450%']
      ]
    },
    { type: 'callout', variant: 'tip', title: 'Negation Pairs', text: 'Negation creates symmetric pairs:\n\u2022 **All** \u2194 **Some...not** (contradictories)\n\u2022 **None** \u2194 **Some** (contradictories)\n\nTo negate a statement, find its contradictory pair. The negation of "All dogs bark" is NOT "No dogs bark" but rather "Some dogs don\'t bark."' },
    { type: 'hr' },

    { type: 'h3', text: 'Section 9: Quick Diagnostic Flowchart' },
    { type: 'paragraph', text: 'Use this decision tree when you encounter a conditional reasoning question:' },
    { type: 'process', steps: [
      '**Identify all conditional statements** in the stimulus. Look for sufficient and necessary trigger words.',
      '**Diagram each conditional** using arrow notation. Write the contrapositive of each.',
      '**Look for chains.** Can any conditionals link together through shared terms?',
      '**Check the argument\'s inference.** Is the author using Modus Ponens, Modus Tollens, or a fallacy?',
      '**If quantifiers are present,** identify the level (All, Most, Some, None) and apply the correct combination rules.',
      '**Match to answer choices.** The correct answer will align with valid inference rules or correctly identify the flaw.'
    ]},
    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: 'Before selecting your answer on any Conditional Reasoning question:\n\n\u2705 Have you diagrammed every conditional statement in the stimulus?\n\u2705 Did you write the contrapositive of each conditional?\n\u2705 Have you checked for chain links between conditionals?\n\u2705 Is the argument committing a Mistaken Reversal or Mistaken Negation?\n\u2705 For quantifier questions: did you verify the quantifier level and apply the correct combination rules?\n\u2705 Did you translate "unless" / "until" / "without" correctly?\n\u2705 For compound conditions: did you apply De Morgan\'s Laws to the contrapositive?\n\u2705 Have you confirmed whether the reasoning is conditional, causal, or probabilistic?\n\u2705 Does your selected answer match a valid inference form (not a fallacy)?' }
  ]
};
