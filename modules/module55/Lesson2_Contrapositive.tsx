
import { Lesson } from '../../types';

export const Lesson2_Contrapositive: Lesson = {
  id: "55-2",
  title: "Using the Contrapositive to Unlock New Inferences",
  content: [
    { type: 'h2', text: 'Lesson 2: Using the Contrapositive to Unlock New Inferences' },
    { type: 'paragraph', text: '**Objective:** To learn how to form and use the contrapositive, which is the only logically valid inference you can draw from a single conditional statement. This lesson covers the mechanical process, its application to LSAT assumption and inference questions, chaining contrapositives, and the critical interaction between AND/OR connectors (De Morgan\'s Laws).' },
    { type: 'paragraph', text: 'In Lesson 1, we established the basic architecture of a conditional statement: **A \u2192 B** (If A, then B). That architecture, on its own, only tells us what happens when A is true. But the LSAT constantly asks you to reason about what happens when something is *false*. The contrapositive is the tool that lets you do exactly that\u2014safely, validly, and mechanically.' },

    { type: 'hr' },

    { type: 'h3', text: '2.1 What the Contrapositive Is (and Why It Matters)' },
    { type: 'paragraph', text: 'For every conditional statement, there exists exactly one other statement that is **100% logically equivalent** to it. This is the contrapositive. If the original is true, the contrapositive is guaranteed to be true\u2014no additional assumptions, no probability, no hedging.' },
    { type: 'list', items: [
      '**Original Statement:** A \u2192 B ("If A, then B.")',
      '**Contrapositive:** NOT B \u2192 NOT A ("If not B, then not A.")',
      '**Logical Status:** The contrapositive has the same truth value as the original. They are interchangeable.'
    ]},
    { type: 'paragraph', text: 'Why does this matter on the LSAT? Because the test writers routinely **disguise** correct answers by expressing them as the contrapositive of what you expect. If you can\'t form the contrapositive quickly and accurately, you will miss these answers\u2014or worse, you will fall for trap choices that look right but are logically invalid.' },

    { type: 'table', headers: ['Relationship', 'Formula', 'Validity', 'LSAT Frequency'], rows: [
      ['Original', 'A \u2192 B', 'Given (True)', 'Always stated in stimulus'],
      ['Contrapositive', 'NOT B \u2192 NOT A', 'VALID (100%)', 'Very High \u2014 hidden in correct answers'],
      ['Mistaken Reversal', 'B \u2192 A', 'INVALID', 'Very High \u2014 common trap answer'],
      ['Mistaken Negation', 'NOT A \u2192 NOT B', 'INVALID', 'High \u2014 common trap answer']
    ]},

    { type: 'callout', variant: 'tip', title: 'The Only Valid Move', text: 'Of the four possible manipulations of A \u2192 B, only the contrapositive is valid. The Mistaken Reversal and Mistaken Negation are covered in Lesson 3. For now, drill the contrapositive until it becomes automatic.' },

    { type: 'hr' },

    { type: 'h3', text: '2.2 The Mechanical Process: Reverse and Negate' },
    { type: 'paragraph', text: 'You do not need to think about whether a contrapositive "makes sense" in the real world. Forming the contrapositive is a purely mechanical, two-step process that works every single time:' },
    { type: 'process', title: 'Forming the Contrapositive', steps: [
      '**Reverse** the terms on either side of the arrow. The sufficient condition and the necessary condition switch positions.',
      '**Negate** both terms. Whatever was positive becomes negative, and whatever was already negative becomes positive (double negatives cancel out).'
    ]},

    { type: 'h4', text: 'Worked Examples' },
    { type: 'table', headers: ['Original Statement', 'Step 1: Reverse', 'Step 2: Negate', 'Contrapositive'], rows: [
      ['Dog \u2192 Mammal', 'Mammal \u2192 Dog', 'NOT Mammal \u2192 NOT Dog', 'NOT Mammal \u2192 NOT Dog'],
      ['Rain \u2192 Wet', 'Wet \u2192 Rain', 'NOT Wet \u2192 NOT Rain', 'NOT Wet \u2192 NOT Rain'],
      ['NOT Study \u2192 Fail', 'Fail \u2192 NOT Study', 'NOT Fail \u2192 Study', 'NOT Fail \u2192 Study (double negative cancels)'],
      ['Lawyer \u2192 NOT Scientist', 'NOT Scientist \u2192 Lawyer', 'Scientist \u2192 NOT Lawyer', 'Scientist \u2192 NOT Lawyer']
    ]},
    { type: 'callout', title: 'Double-Negative Rule', text: 'When you negate a term that is already negative, the two negatives cancel and the term becomes positive. "NOT NOT A" is simply "A." This is the most common source of errors when students first practice contrapositives\u2014always simplify double negatives.' },

    { type: 'hr' },

    { type: 'h3', text: '2.3 LSAT Application: The Disguised Assumption' },
    { type: 'paragraph', text: 'The LSAT relies heavily on the contrapositive to hide correct answers in Sufficient Assumption, Necessary Assumption, and Inference questions. The typical pattern: the argument needs a bridge stated as **X \u2192 Y**, but the correct answer is phrased as its contrapositive **NOT Y \u2192 NOT X** (or vice versa). If you only look for the bridge in its original form, you will miss the correct answer.' },

    { type: 'question-card', id: 'PT-101-S-2-Q-21', questionType: 'Conditional Reasoning', difficulty: 'medium',
      stimulus: 'Newspaper editor: Law enforcement experts, as well as most citizens, have finally come to recognize that legal prohibitions against gambling all share a common flaw: no matter how diligent the effort, the laws are impossible to enforce. Ethical qualms notwithstanding, when a law fails to be effective, it should not be a law. That is why there should be no legal prohibition against gambling.',
      question: 'Which one of the following, if assumed, allows the argument\'s conclusion to be properly drawn?',
      options: [
        '(A) No effective law is unenforceable. (Correct)',
        '(B) All enforceable laws are effective.',
        '(C) No legal prohibitions against gambling are enforceable.',
        '(D) Most citizens must agree with a law for the law to be effective.',
        '(E) Most citizens must agree with a law for the law to be enforceable.'
      ]
    },

    { type: 'h4', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: '**Goal:** Find the sufficient assumption\u2014the one statement that, if added, makes the conclusion follow with certainty.' },
    { type: 'process', title: 'Solving This Question', steps: [
      '**Diagram Premise 1:** Legal prohibitions against gambling are impossible to enforce. \u2192 **Gambling Law \u2192 NOT Enforceable**',
      '**Diagram Premise 2:** When a law fails to be effective, it should not be a law. \u2192 **NOT Effective \u2192 NOT Law**',
      '**Diagram the Conclusion:** There should be no legal prohibition against gambling. \u2192 **Gambling Law \u2192 NOT Law**',
      '**Identify the Gap:** The chain breaks between "NOT Enforceable" and "NOT Effective." We need: **NOT Enforceable \u2192 NOT Effective**.',
      '**Scan for Contrapositive Disguise:** The correct answer may express this bridge in reverse form. The contrapositive of NOT Enforceable \u2192 NOT Effective is **Effective \u2192 Enforceable**.'
    ]},
    { type: 'callout', title: 'The Solution: Answer (A)', text: '"No effective law is unenforceable" translates to: **Effective \u2192 NOT Unenforceable**, which simplifies to **Effective \u2192 Enforceable**.\n\nNow take the contrapositive:\n1. **Reverse:** Enforceable \u2192 Effective\n2. **Negate:** **NOT Enforceable \u2192 NOT Effective**\n\nThis is exactly the bridge we needed. The completed chain:\n**Gambling Law \u2192 NOT Enforceable \u2192 NOT Effective \u2192 NOT Law** \u2714' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Why it fails' }, colWidth: 'narrow', items: [
      { title: '(B)', text: 'Translates to **Enforceable \u2192 Effective**. This is the Mistaken Reversal of our bridge (Effective \u2192 Enforceable). We need to know what happens when a law is NOT enforceable, but this rule only tells us about enforceable laws. A conditional tells us nothing about what happens when the sufficient condition is absent.', badge: 'Mistaken Reversal', badgeColor: 'red' },
      { title: '(C)', text: 'Restates Premise 1 (gambling laws are unenforceable). A sufficient assumption must provide new information that bridges existing premises to the conclusion. Repeating a premise adds nothing.', badge: 'Restatement', badgeColor: 'red' },
      { title: '(D)', text: 'Introduces "citizen agreement" as a condition for effectiveness. The stimulus mentions citizens only as background context, not as a logical variable in the conditional chain. This condition is irrelevant to the structural gap.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(E)', text: 'Links enforceability to citizen agreement. The argument\'s gap is strictly between unenforceability and ineffectiveness. This creates an unrelated conditional that doesn\'t bridge the existing premises.', badge: 'Out of Scope', badgeColor: 'red' }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '2.4 Contraposition and Logical Chains' },
    { type: 'paragraph', text: 'The contrapositive becomes exceptionally powerful when applied to chains of conditional logic. Many LSAT arguments build multi-step chains, and the test writers often require you to contrapose the entire chain to reach the conclusion.' },
    { type: 'paragraph', text: 'The principle is identical to single-statement contraposition: **reverse the entire sequence and negate every term.**' },
    { type: 'table', headers: ['Chain Type', 'Original', 'Contrapositive'], rows: [
      ['Two-Link', 'A \u2192 B \u2192 C', 'NOT C \u2192 NOT B \u2192 NOT A'],
      ['Three-Link', 'A \u2192 B \u2192 C \u2192 D', 'NOT D \u2192 NOT C \u2192 NOT B \u2192 NOT A'],
      ['With Negative', 'A \u2192 NOT B \u2192 C', 'NOT C \u2192 B \u2192 NOT A']
    ]},
    { type: 'paragraph', text: 'Notice how the end of the original chain becomes the start of the contrapositive chain. If you know the final necessary condition is false, logical force cascades backward through every link, proving the initial sufficient condition is also false.' },

    { type: 'question-card', id: 'PT-101-S-3-Q-10', questionType: 'Conditional Reasoning', difficulty: 'hard',
      stimulus: 'All material bodies are divisible into parts, and everything divisible is imperfect. It follows that all material bodies are imperfect. It likewise follows that the spirit is not a material body.',
      question: 'The final conclusion above follows logically if which one of the following is assumed?',
      options: [
        '(A) Everything divisible is a material body.',
        '(B) Nothing imperfect is indivisible.',
        '(C) The spirit is divisible.',
        '(D) The spirit is perfect. (Correct)',
        '(E) The spirit is either indivisible or imperfect.'
      ]
    },

    { type: 'h4', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Solving This Question', steps: [
      '**Diagram Premise 1:** All material bodies are divisible. \u2192 **Material Body \u2192 Divisible**',
      '**Diagram Premise 2:** Everything divisible is imperfect. \u2192 **Divisible \u2192 Imperfect**',
      '**Build the Chain:** Material Body \u2192 Divisible \u2192 Imperfect',
      '**Diagram Intermediate Conclusion:** All material bodies are imperfect. \u2192 **Material Body \u2192 Imperfect** \u2714 (Valid from chain)',
      '**Diagram Final Conclusion:** The spirit is not a material body. \u2192 **Spirit \u2192 NOT Material Body**',
      '**Identify the Gap:** The chain tells us what material bodies ARE (imperfect). To conclude something is NOT a material body, we need to trigger the contrapositive. The contrapositive of the chain is: **NOT Imperfect \u2192 NOT Divisible \u2192 NOT Material Body**. So we need: Spirit \u2192 NOT Imperfect (i.e., the spirit is perfect).'
    ]},
    { type: 'callout', title: 'The Solution: Answer (D)', text: '"The spirit is perfect" provides the trigger **Spirit \u2192 NOT Imperfect**.\n\nActivating the contrapositive chain:\n**NOT Imperfect \u2192 NOT Divisible \u2192 NOT Material Body**\n\nSince the spirit is NOT Imperfect (perfect), it is NOT Divisible, and therefore NOT a Material Body. The conclusion follows with certainty.' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Why it fails' }, colWidth: 'narrow', items: [
      { title: '(A)', text: 'Translates to **Divisible \u2192 Material Body**. This is a Mistaken Reversal of Premise 1 (Material Body \u2192 Divisible). It provides no information about the spirit and does not trigger the contrapositive chain.', badge: 'Mistaken Reversal', badgeColor: 'red' },
      { title: '(B)', text: 'Translates to **Imperfect \u2192 Divisible**. This reverses the relationship from Premise 2. Even if true, it doesn\'t help us determine whether the spirit is a material body, because we need to trigger the negative side of the chain.', badge: 'Mistaken Reversal', badgeColor: 'red' },
      { title: '(C)', text: 'If the spirit is divisible, then by Premise 2 the spirit is imperfect. But proving the spirit is imperfect does NOT prove it is not a material body\u2014many things besides material bodies could be imperfect. We are stuck inside the "Imperfect" category.', badge: 'Wrong Direction', badgeColor: 'red' },
      { title: '(E)', text: 'This offers a disjunction: Spirit is NOT Divisible OR Spirit is Imperfect. The first branch works (NOT Divisible triggers NOT Material Body via Premise 1\'s contrapositive). But the second branch fails\u2014being imperfect proves nothing about being a material body. A sufficient assumption must work 100% of the time; this one only works 50%.', badge: 'Not Sufficient', badgeColor: 'red' }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '2.5 Advanced Contrapositives: De Morgan\'s Laws (AND/OR Flipping)' },
    { type: 'paragraph', text: 'When a conditional involves multiple conditions joined by AND or OR, forming the contrapositive requires an additional step: you must **switch the connector** when you negate.' },
    { type: 'paragraph', text: 'This principle is known as De Morgan\'s Laws, and it appears regularly on the LSAT whenever rules combine multiple requirements or alternatives.' },

    { type: 'table', headers: ['Original Connector', 'After Negation', 'Why'], rows: [
      ['A **AND** B', 'NOT A **OR** NOT B', 'Failing at just one part breaks the joint requirement'],
      ['A **OR** B', 'NOT A **AND** NOT B', 'Both alternatives must be absent to guarantee the result is absent']
    ]},

    { type: 'h4', text: 'Example 1: Negating AND' },
    { type: 'paragraph', text: '**Original:** "If you study hard AND eat well, you will succeed."\n(Study AND Eat \u2192 Succeed)' },
    { type: 'paragraph', text: 'Contrapositive:\n1. **Reverse:** Succeed \u2192 Study AND Eat\n2. **Negate and flip connector:** NOT Succeed \u2192 NOT Study **OR** NOT Eat' },
    { type: 'paragraph', text: '**Translation:** "If you did not succeed, then you either did not study hard, or you did not eat well, or both." You don\'t need to fail at both to break the AND chain; failing at just one part is enough.' },

    { type: 'h4', text: 'Example 2: Negating OR' },
    { type: 'paragraph', text: '**Original:** "If it rains OR snows, the game is cancelled."\n(Rain OR Snow \u2192 Cancelled)' },
    { type: 'paragraph', text: 'Contrapositive:\n1. **Reverse:** Cancelled \u2192 Rain OR Snow\n2. **Negate and flip connector:** NOT Cancelled \u2192 NOT Rain **AND** NOT Snow' },
    { type: 'paragraph', text: '**Translation:** "If the game was not cancelled, then it is not raining AND it is not snowing." Both triggers must be absent for the result to be absent.' },

    { type: 'callout', variant: 'tip', title: 'Memory Device', text: 'Think of AND as a chain with two links\u2014breaking one link breaks the whole chain (so failure of either part suffices). Think of OR as two separate ropes holding a weight\u2014you need to cut both ropes (so failure of both parts is required) to drop the weight.' },

    { type: 'hr' },

    { type: 'h3', text: '2.6 Common Contrapositive Triggers in LSAT Language' },
    { type: 'paragraph', text: 'The LSAT rarely states conditionals as clean "If A, then B" sentences. Instead, conditionals are embedded in natural language with specific phrases. Recognizing these phrases is essential for accurate diagramming.' },
    { type: 'table', headers: ['LSAT Language', 'Diagram', 'Contrapositive'], rows: [
      ['"All X are Y"', 'X \u2192 Y', 'NOT Y \u2192 NOT X'],
      ['"Every X is Y"', 'X \u2192 Y', 'NOT Y \u2192 NOT X'],
      ['"If X, then Y"', 'X \u2192 Y', 'NOT Y \u2192 NOT X'],
      ['"X only if Y"', 'X \u2192 Y', 'NOT Y \u2192 NOT X'],
      ['"No X are Y"', 'X \u2192 NOT Y', 'Y \u2192 NOT X'],
      ['"X unless Y"', 'NOT Y \u2192 X', 'NOT X \u2192 Y'],
      ['"X is necessary for Y"', 'Y \u2192 X', 'NOT X \u2192 NOT Y'],
      ['"X is sufficient for Y"', 'X \u2192 Y', 'NOT Y \u2192 NOT X']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Lesson 2 Key Takeaways' },
    { type: 'list', ordered: true, items: [
      '**The Contrapositive Is King:** It is the only 100% valid inference from a single conditional. The Mistaken Reversal and Mistaken Negation are always invalid.',
      '**Mechanize the Process:** Always execute "Reverse and Negate." Do not rely on intuition. Simplify double negatives immediately.',
      '**Hunt for the Disguise:** LSAT correct answers in assumption, inference, and parallel reasoning questions are frequently contrapositives of the bridge you expect.',
      '**Chain Contrapositives:** Reverse the entire sequence and negate every term. The end of the original chain becomes the start of the contrapositive chain.',
      '**De Morgan\'s Laws:** When negating AND, switch to OR. When negating OR, switch to AND. This is non-negotiable.'
    ]},

    { type: 'h3', text: 'Quick Reference Chart' },
    { type: 'table', headers: ['Logic Concept', 'Formula / Notation', 'Example'], rows: [
      ['**Original Statement**', 'A \u2192 B', 'Dog \u2192 Mammal'],
      ['**Contrapositive**', 'NOT B \u2192 NOT A', 'NOT Mammal \u2192 NOT Dog'],
      ['**Mistaken Reversal**', 'B \u2192 A (Invalid)', 'Mammal \u2192 Dog (Invalid)'],
      ['**Mistaken Negation**', 'NOT A \u2192 NOT B (Invalid)', 'NOT Dog \u2192 NOT Mammal (Invalid)'],
      ['**De Morgan\'s (AND)**', 'NOT (A AND B) = NOT A OR NOT B', 'If not (Rich AND Famous), then not Rich OR not Famous'],
      ['**De Morgan\'s (OR)**', 'NOT (A OR B) = NOT A AND NOT B', 'If not (Rain OR Snow), then not Rain AND not Snow'],
      ['**Chain Contrapositive**', 'A \u2192 B \u2192 C becomes NOT C \u2192 NOT B \u2192 NOT A', 'Full reversal of multi-link chains']
    ]}
  ]
};
