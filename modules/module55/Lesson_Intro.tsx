import { Lesson } from '../../types';

export const Lesson_Intro: Lesson = {
  id: "55-intro",
  title: "Module Introduction: The Logic of Conditional Reasoning",
  content: [
    { type: 'h2', text: 'MODULE 21: Conditional Reasoning' },
    { type: 'paragraph', text: '**Module Goal**\n\n**Master the formal logic that underlies the LSAT: translate conditional statements into diagrams, derive valid inferences, and avoid the reasoning errors the test is designed to exploit.** Conditional reasoning is not one question type — it is the structural engine that powers nearly every question type on the exam.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Conditional reasoning is the backbone of LSAT logic. It is not a niche topic confined to a handful of questions — it is the invisible framework running beneath nearly every problem on the test. When a Sufficient Assumption question asks you to complete a chain of logic, you are doing conditional reasoning. When a Necessary Assumption question asks you to find the unstated requirement, you are doing conditional reasoning. When a Flaw question describes someone who "confused sufficient and necessary conditions," you are evaluating conditional reasoning. When a Parallel Reasoning question asks you to match argument structure, you are comparing conditional patterns.' },
    { type: 'paragraph', text: 'Unlike most skills on the LSAT, conditional logic is not intuitive. In everyday conversation, we routinely infer things that formal logic does not permit. We hear "If you study hard, you will pass" and assume the reverse — that if you don\'t study, you won\'t pass. That assumption is a logical fallacy, and the LSAT exploits it ruthlessly. The test rewards students who can suppress their conversational instincts and reason with mechanical precision.' },
    { type: 'callout', variant: 'tip', title: 'Frequency & Impact', text: 'Conditional reasoning skills are tested directly or indirectly on **roughly 40–60% of all Logical Reasoning questions**. They also appear in Logic Games rule interpretation and Reading Comprehension inference questions. Mastering this single module will improve your performance across all three scored sections of the LSAT.' },

    { type: 'hr' },

    { type: 'h3', text: 'What Is Conditional Reasoning?' },
    { type: 'paragraph', text: 'At its core, conditional reasoning is about **If-Then relationships**. A conditional statement establishes a rule: if one condition is met, then another condition must also be met. The "if" part is called the **sufficient condition** — it is enough to trigger the result. The "then" part is called the **necessary condition** — it is required whenever the trigger is present.' },
    { type: 'paragraph', text: 'Consider the statement: "If it is raining, then the ground is wet."\n\n- **Sufficient condition (the trigger):** It is raining.\n- **Necessary condition (the requirement):** The ground is wet.\n\nThis means rain **guarantees** wet ground. But wet ground does not guarantee rain — a sprinkler could be responsible. The relationship is strictly one-directional.' },
    { type: 'paragraph', text: 'This one-directional guarantee is what separates formal logic from everyday reasoning. On the LSAT, you must read conditional statements as narrow, mechanical rules — not as broad generalizations or causal explanations. Every word matters, and the direction of the logical relationship matters most of all.' },

    { type: 'hr' },

    { type: 'h3', text: 'Question Types That Rely on Conditional Logic' },
    { type: 'paragraph', text: 'Conditional reasoning is not confined to a single question type. It is the structural foundation for many of the most frequently tested question families on the LSAT.' },
    { type: 'table', headers: ['Question Type', 'How Conditional Logic Appears', 'What You Must Do'], rows: [
      ['**Sufficient Assumption (SA)**', 'The argument is missing a conditional link that would make the conclusion airtight.', 'Supply the missing conditional premise that completes the logical chain.'],
      ['**Necessary Assumption (NA)**', 'The argument depends on an unstated conditional relationship.', 'Identify the conditional relationship the argument cannot survive without.'],
      ['**Flaw**', 'The argument confuses sufficient and necessary conditions, or treats a conditional as a biconditional.', 'Name the specific conditional error (Mistaken Reversal or Mistaken Negation).'],
      ['**Parallel Reasoning**', 'The argument uses a conditional structure, and you must match it exactly.', 'Map the conditional pattern and find the answer with an identical logical form.'],
      ['**Must Be True (MBT)**', 'The stimulus provides conditional rules, and you must derive what necessarily follows.', 'Chain conditionals and contrapositives to determine what must be true.'],
      ['**Parallel Flaw**', 'The argument commits a conditional error, and you must find another argument with the same error.', 'Identify the flaw pattern and match it structurally.'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Arrow Notation' },
    { type: 'paragraph', text: 'Throughout this module, we use **arrow notation** to diagram conditional relationships. This notation strips away the English and reveals the pure logical structure beneath.' },
    { type: 'paragraph', text: '**A → B** means "If A, then B."\n\n- **A** is the sufficient condition (the trigger). It appears on the **left** side of the arrow.\n- **B** is the necessary condition (the requirement). It appears on the **right** side of the arrow.\n- The **arrow** represents the one-way logical flow: "A guarantees B," but it does **not** mean "B guarantees A."' },
    { type: 'paragraph', text: 'Think of the arrow as a one-way street sign. Traffic flows from left to right — from the trigger to the requirement. You can always travel forward (if A is true, B must be true). You can never travel backward (if B is true, A might or might not be true).' },
    { type: 'table', headers: ['Notation', 'Meaning', 'Example'], rows: [
      ['**A → B**', 'If A is true, then B must be true.', '"If it rains, the ground is wet." `Rain → Wet Ground`'],
      ['**~A**', 'A is not true (negation).', '"It is not raining." `~Rain`'],
      ['**~B → ~A**', 'If B is not true, then A cannot be true (the contrapositive).', '"If the ground is not wet, it is not raining." `~Wet Ground → ~Rain`'],
      ['**A ↔ B**', 'A is true if and only if B is true (biconditional).', '"You graduate if and only if you pass all courses." `Graduate ↔ Pass All`'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Golden Rule of Arrows', text: 'You can only draw conclusions by moving **forward** through the arrow (A is true → therefore B is true) or by using the **contrapositive** (B is false → therefore A is false). You can **never** conclude anything by affirming the right side or denying the left side. This rule is absolute and has no exceptions on the LSAT.' },

    { type: 'hr' },

    { type: 'h3', text: 'Common Conditional Triggers' },
    { type: 'paragraph', text: 'The LSAT rarely presents conditionals in a simple "if...then" format. Instead, the test uses a variety of trigger words to disguise the logical structure. Learning to recognize these words is essential for accurate diagramming.' },
    { type: 'table', headers: ['Condition Type', 'Trigger Words', 'What They Signal', 'Diagram Position'], rows: [
      ['**Sufficient** (Trigger)', 'If, When, Whenever, Every, All, Any, Each, The only, People who', 'These words introduce the condition that **starts** the chain. Whatever follows is guaranteed.', 'Left side of arrow (A →)'],
      ['**Necessary** (Requirement)', 'Only if, Only when, Requires, Must, Needs, Then, Is necessary for', 'These words introduce the condition that **must exist**. It is a requirement, not a trigger.', 'Right side of arrow (→ B)'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Crucial "All" vs. "Only" Distinction', text: '**"All A are B"** and **"Only A are B"** have completely different diagrams.\n\n- "All A are B" → `A → B` (A is sufficient for B)\n- "Only A are B" → `B → A` (A is necessary for B)\n\nMixing up "all" and "only" is one of the most common LSAT errors. Memorize this distinction before proceeding.' },

    { type: 'hr' },

    { type: 'hr' },

    { type: 'h3', text: 'What This Module Covers' },
    { type: 'paragraph', text: 'This module takes you from the foundations of conditional logic to its most advanced applications. Each lesson builds on the previous one, so mastery is cumulative.' },
    { type: 'process', title: 'Module Roadmap', steps: [
      '**Lesson 1 — Foundations:** The material conditional (A → B), sufficient vs. necessary conditions, indicator words, and diagramming techniques. You will learn to translate any LSAT conditional statement into arrow notation.',
      '**Lesson 2 — The Contrapositive:** The only valid inference from a conditional: if B is false, A must be false (~B → ~A). You will learn to derive and apply contrapositives rapidly and accurately.',
      '**Lesson 3 — Conditional Fallacies:** The two fatal errors tested on virtually every LSAT: the Mistaken Reversal (B → A) and the Mistaken Negation (~A → ~B). You will learn to spot and name these errors on sight.',
      '**Lesson 4 — Quantifiers:** Moving beyond "all" and "none" to handle "some," "most," and "few." These partial quantifiers create non-reversible inferences that the LSAT tests frequently.',
      '**Lesson 5 — Complex Structures:** Chaining multiple conditionals, handling "unless/except/without," and working with nested and compound conditional statements.',
      '**Lesson 6 — Nuance & Mastery:** Subtle distinctions the LSAT exploits — the difference between "only" and "the only," degrees of conditionality, and how to handle conditional reasoning under time pressure.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: '**1. Conditional reasoning is not a question type — it is the foundation of LSAT logic.** It powers Sufficient Assumption, Necessary Assumption, Flaw, Parallel Reasoning, Must Be True, and more.\n\n**2. Every conditional has two parts.** The sufficient condition (trigger) goes on the left of the arrow. The necessary condition (requirement) goes on the right.\n\n**3. The arrow is a one-way street.** You can move forward (trigger → requirement) or use the contrapositive (~requirement → ~trigger). You can never move backward or negate without reversing.\n\n**4. Trigger words are your compass.** "If," "when," "every," and "all" signal sufficient conditions. "Only if," "requires," and "must" signal necessary conditions. Memorize these.\n\n**5. This module is cumulative.** Each lesson builds on the previous one. Master the foundations before moving to contrapositives, fallacies, quantifiers, and complex structures.' },
  ]
};
