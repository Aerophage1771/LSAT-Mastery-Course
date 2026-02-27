import { Lesson } from '../../types';

export const Lesson8_Drill_MultiStepInference: Lesson = {
  id: "17-8",
  title: "Drill: Multi-Step Inference (PT-102-S-2-Q-21)",
  content: [
    { type: 'h2', text: 'Multi-Step Inference' },
    { type: 'paragraph', text: 'Multi-step inference questions require you to chain two or more logical steps together to reach a conclusion that is not directly stated in the stimulus. Each individual step may be straightforward, but the test-makers rely on the cumulative difficulty of holding multiple conditional rules in mind and correctly triggering the right sequence.' },

    { type: 'paragraph', text: 'The most common structure involves conditional statements ("if P, then Q") combined with a disjunction ("P or R"). When you know that at least one of two conditions must hold, negating one forces the other\u2014and that forced condition then triggers its own consequent. This two-step chain (deny one disjunct, affirm the other, then apply its conditional) is the backbone of multi-step Must Be True questions.' },

    { type: 'h3', text: 'The Chaining Method' },
    { type: 'process', title: 'Building a Multi-Step Inference', steps: [
      '**Step 1 \u2014 Inventory the Rules:** List every conditional and disjunctive statement in the stimulus. Use arrow notation for conditionals (P \u2192 Q) and "or" notation for disjunctions (P v R).',
      '**Step 2 \u2014 Identify the Trigger:** Determine which answer choice introduces a specific assumption (e.g., "If P is false..."). This assumption is the trigger that starts the chain.',
      '**Step 3 \u2014 Trace the Chain:** Apply the trigger to the disjunction or conditional. If the trigger negates one side of a disjunction, the other side must be true. Then apply the resulting truth to any conditional that uses it as an antecedent.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Contrapositive Awareness', text: 'Every conditional P \u2192 Q has a logically equivalent contrapositive: ~Q \u2192 ~P. Multi-step inferences sometimes require you to use the contrapositive rather than the original conditional. Before tracing your chain, write out both the original and the contrapositive for each rule.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Multi-Step Inference (PT-102-S-2-Q-21)' },
    { type: 'paragraph', text: 'This drill presents a classic disjunction-plus-conditionals structure. Two "if-then" rules share an "either/or" premise, creating a forced inference when one condition is negated.' },
    { type: 'paragraph', text: '**Instructions:** Formalize the rules, identify the chain, and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Formalize the Rules' },
    { type: 'paragraph', text: 'Convert the stimulus into symbolic form:' },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Formalization' }, items: [
      { title: 'Rule 1', text: 'Unpopular with Faculty (UF) \u2192 Modify (M)', badge: 'Conditional', badgeColor: 'blue' },
      { title: 'Rule 2', text: 'Unpopular with Students (US) \u2192 New Policy (N)', badge: 'Conditional', badgeColor: 'blue' },
      { title: 'Rule 3', text: 'UF v US (at least one must be true)', badge: 'Disjunction', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: 'Also note the contrapositives: ~M \u2192 ~UF (if we should not modify, then the faculty is not unhappy) and ~N \u2192 ~US (if we should not adopt a new policy, then students are not unhappy).' },

    { type: 'h4', text: 'Step 2: Identify the Productive Chain' },
    { type: 'paragraph', text: 'The disjunction (Rule 3) says at least one group is unhappy. If we assume one group is happy (negating one side), the other must be unhappy (affirming the other side), which triggers that group\'s conditional rule. This gives us two valid chains:' },

    { type: 'list', items: [
      '**Chain A:** ~UF (faculty is happy) \u2192 US must be true (from Rule 3) \u2192 N (adopt new policy, from Rule 2)',
      '**Chain B:** ~US (students are happy) \u2192 UF must be true (from Rule 3) \u2192 M (modify policy, from Rule 1)',
    ]},

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) We should attempt to popularize...', text: 'The stimulus prescribes modifying or replacing the policy\u2014not popularizing it. This introduces a recommendation that appears nowhere in the argument.', badge: 'New Idea Trap', badgeColor: 'red' },
      { title: '(B) We should modify... only if...', text: 'This adds a new necessary condition for modification ("only if this will not reduce its popularity among students"). The stimulus never links modification to student popularity\u2014it is an invented constraint.', badge: 'Added Condition Trap', badgeColor: 'red' },
      { title: '(C) We should modify... if modification will not reduce...', text: 'Again, this creates a new sufficient condition involving faculty popularity and modification. The original sufficient condition for modification is faculty unpopularity, not anything about maintaining popularity.', badge: 'Added Condition Trap', badgeColor: 'red' },
      { title: '(D) If this parking policy is popular among students...', text: 'This says: ~US \u2192 N. Using Chain B: ~US \u2192 UF \u2192 M (modify). The chain leads to "modify," not "adopt a new policy." This answer applies the wrong consequent.', badge: 'Wrong Consequent', badgeColor: 'red' },
      { title: '(E) If this parking policy is popular with the faculty...', text: 'This says: ~UF \u2192 N. Using Chain A: ~UF \u2192 US (from disjunction) \u2192 N (from Rule 2). The chain holds perfectly. If the faculty is happy, students must be unhappy (from the disjunction), and student unhappiness triggers the new policy rule.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Multi-Step Inference: Common Traps' },
    { type: 'table', headers: ['Trap', 'Mechanism', 'How to Spot It'], rows: [
      ['New Idea', 'Introduces a concept or recommendation absent from the stimulus', 'Check: does this word or idea appear anywhere in the original text?'],
      ['Added Condition', 'Grafts an extra "if" or "only if" onto an existing rule', 'Compare the answer\'s sufficient/necessary conditions to the original rules'],
      ['Wrong Consequent', 'Follows the chain correctly but applies the wrong rule at the end', 'Trace the full chain and verify the final rule triggered matches the answer\'s conclusion'],
      ['Reversed Chain', 'Follows the logic backward (affirming the consequent)', 'Verify you are negating one disjunct, not affirming a consequent'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'Multi-step inference questions are solved by formalizing every rule, writing contrapositives, and then using a disjunction as a pivot. When one side of an "either/or" is negated, the other side is forced true, which triggers its conditional consequence. The correct answer always follows from a valid chain\u2014wrong answers introduce new ideas, add conditions, or apply the wrong rule at the end of the chain.' },
  ]
};
