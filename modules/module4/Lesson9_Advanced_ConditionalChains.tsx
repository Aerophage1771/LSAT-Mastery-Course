import { Lesson } from '../../types';

export const Lesson9_Advanced_ConditionalChains: Lesson = {
  id: "4-9",
  title: "Advanced: Conditional Chains",
  content: [
    { type: 'h2', text: 'Advanced Lesson 1: Advanced Conditional Chains (Parallel Reasoning)' },
    { type: 'paragraph', text: "Advanced Parallel Reasoning questions often move beyond simple `A → B → C` chains. They test your ability to navigate more complex logical structures that combine different operators — **AND** (conjunction), **OR** (disjunction), **UNLESS**, **UNTIL**, and **nested conditionals** (if-then statements within if-then statements). The core task remains the same: abstract the structure and find its twin. But the blueprint itself becomes substantially more detailed." },

    { type: 'callout', variant: 'tip', title: 'Why This Matters', text: "Conditional chain questions are among the most **precisely testable** Parallel Reasoning patterns. Because every operator (AND, OR, IF-THEN) has an exact logical meaning, there is never ambiguity about whether a match is correct. This makes them predictable — if you can diagram accurately, you will get the right answer every time." },

    { type: 'hr' },

    { type: 'h2', text: 'Advanced Conditional Structures' },
    { type: 'paragraph', text: "Before tackling worked examples, let's catalog the advanced conditional structures you'll encounter on the LSAT:" },

    { type: 'h3', text: '1. Nested Conditionals (If-Then Within If-Then)' },
    { type: 'paragraph', text: "A nested conditional places one conditional statement inside another. The outer conditional sets a framework; the inner conditional operates within that framework." },
    { type: 'table', headers: ['Natural Language', 'Diagram', 'Example'], rows: [
      ['"If A, then if B, then C"', 'A → (B → C)', '"If you enroll in the program, then if you complete the coursework, you will receive a certificate."'],
      ['"If A and B, then C"', '(A ∧ B) → C', '"If you have both a degree and three years of experience, you qualify for the position."'],
      ['"If A, then B and C"', 'A → (B ∧ C)', '"If the proposal is approved, both the timeline and the budget will be updated."'],
    ]},

    { type: 'h3', text: '2. Biconditionals (If and Only If)' },
    { type: 'paragraph', text: "A biconditional asserts that two conditions are **mutually necessary**: each one requires the other. This is stronger than a one-way conditional." },
    { type: 'table', headers: ['Natural Language', 'Diagram', 'Key Feature'], rows: [
      ['"A if and only if B"', 'A ↔ B (i.e., A → B AND B → A)', 'Both directions are valid — you can infer A from B and B from A'],
      ['"A is necessary and sufficient for B"', 'A ↔ B', '"Necessary and sufficient" is the classic LSAT phrasing for a biconditional'],
      ['"A precisely when B"', 'A ↔ B', 'Less common phrasing, but logically identical'],
    ]},

    { type: 'callout', variant: 'default', title: 'Biconditional vs. One-Way Conditional', text: "\"If A then B\" (A → B) only goes one way: A guarantees B, but B does not guarantee A.\n\n\"A if and only if B\" (A ↔ B) goes both ways: A guarantees B, AND B guarantees A.\n\nThis distinction is critical for matching. A stimulus with a biconditional cannot parallel an answer with a one-way conditional, even if every other feature matches perfectly." },

    { type: 'h3', text: '3. \"Unless\" and \"Until\" Translations' },
    { type: 'paragraph', text: "\"Unless\" and \"until\" introduce negative conditions that many students find confusing. They have standard logical translations:" },
    { type: 'table', headers: ['Phrase', 'Translation', 'Diagram', 'Example'], rows: [
      ['"A unless B"', '"If not B, then A"', '~B → A', '"The concert will be outdoors unless it rains." = "If it doesn\'t rain, the concert will be outdoors."'],
      ['"Not A unless B"', '"If A, then B"', 'A → B', '"You cannot enter unless you have a ticket." = "If you enter, you have a ticket."'],
      ['"A until B"', '"If not yet B, then A continues"', '~B → A', '"The store remains open until 9 PM." = "If it\'s not yet 9 PM, the store is open."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The \"Unless\" Shortcut', text: "For \"unless\" statements, use this reliable shortcut:\n1. The term after \"unless\" becomes the **sufficient condition** (negate it).\n2. The other term is the **necessary condition**.\n\n\"The game will be canceled unless attendance reaches 500.\"\n→ Sufficient: NOT 500 attendance. Necessary: Game canceled.\n→ Diagram: ~500 → Canceled." },

    { type: 'hr' },

    { type: 'h2', text: 'How to Diagram Complex Conditionals' },
    { type: 'paragraph', text: "Accurate diagramming is the foundation of solving advanced conditional chain questions. Follow this systematic approach:" },

    { type: 'process', title: 'The Diagramming Method', steps: [
      '**Assign variables.** Give each condition a short label (e.g., FD = Free Dessert, E = Entree, S = Salad). Write these in the margin.',
      '**Identify logical connectors.** Circle every AND, OR, IF-THEN, UNLESS, and NOT in the stimulus. These are the structural bones.',
      '**Translate each sentence.** Convert each sentence into symbolic form: arrows for conditionals, ∧ for AND, ∨ for OR, ~ for NOT.',
      '**Link the chain.** Connect the individual diagrams where they share variables. The output of one premise should be the input of another.',
      '**Derive the conclusion.** Follow the chain to see what conclusion it produces. Check whether the stimulus\'s stated conclusion matches (valid) or deviates (flawed).',
      '**Write the contrapositive.** If the conclusion is a contrapositive of the derived chain, note this explicitly — many hard questions hinge on contrapositives.',
    ]},

    { type: 'paragraph', text: "Let's see this method in action with a concrete example:" },

    { type: 'h3', text: 'Diagramming Walkthrough' },
    { type: 'blockquote', text: '"To get the free dessert, one must order an entree and a salad. But anyone who orders either an entree or a salad can receive a free soft drink. Thus, anyone who is not eligible for a free soft drink is not eligible for a free dessert."' },

    { type: 'paragraph', text: "**Step 1 — Variables:** FD = Free Dessert, E = Entree, S = Salad, FSD = Free Soft Drink" },
    { type: 'paragraph', text: "**Step 2–3 — Translate:**" },
    { type: 'list', items: [
      'Premise 1: FD → (E **AND** S)',
      'Premise 2: (E **OR** S) → FSD',
    ]},
    { type: 'paragraph', text: "**Step 4 — Link the chain:** Notice that (E AND S) logically guarantees (E OR S) — if you have both, you certainly have at least one. So:" },
    { type: 'code', text: 'FD → (E AND S) → (E OR S) → FSD\nSimplified: FD → FSD' },
    { type: 'paragraph', text: "**Step 5–6 — Derive and check the conclusion:** The stimulus concludes ~FSD → ~FD. This is the **contrapositive** of FD → FSD. Valid." },
    { type: 'paragraph', text: "**Blueprint:** A → (B AND C). (B OR C) → D. Conclusion: ~D → ~A (contrapositive of derived chain)." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },


    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Solving with the Diagramming Method', steps: [
      '**Step 1 — Diagram the stimulus:**\n• Scholarship → (High GPA AND Community Service)\n• (High GPA OR Community Service) → Honor Roll\n• Chain: Scholarship → (GPA AND CS) → (GPA OR CS) → Honor Roll\n• Conclusion: ~Honor Roll → ~Scholarship (contrapositive). Valid.',
      '**Step 2 — Abstract the blueprint:**\nA → (B AND C). (B OR C) → D. Conclusion: ~D → ~A.',
      '**Step 3 — Quick scan of conclusions:**\n• (A): \"does not receive a bonus → does not get promoted.\" ~D → ~A form. ✓\n• (B): \"does not receive recognition → not cost-effective.\" Concludes about a single property, not the original trigger. Suspicious.\n• (C): \"does not enter → lacks qualifying time.\" Concludes about a single premise element.\n• (D): \"does not graduate with honors → not eligible for recognition.\" ~A → ~D, which is the reverse direction.\n• (E): \"is an applicant → eligible for grant.\" D → A — a Mistaken Reversal.',
      '**Step 4 — Verify (A):**\n• Promoted → (Training AND Review). ✓ Matches A → (B AND C).\n• (Training OR Review) → Bonus. ✓ Matches (B OR C) → D.\n• Conclusion: ~Bonus → ~Promoted. ✓ Matches ~D → ~A.\nPerfect structural match.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Training AND Review for promotion; Training OR Review for bonus; no bonus → no promotion', text: 'A → (B AND C). (B OR C) → D. ~D → ~A. Identical to the stimulus.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Innovative AND cost-effective for award; innovative → recognition; no recognition → not cost-effective', text: 'Premise 2 uses only ONE of the two conditions (innovative), not \"either…or.\" The conclusion targets the wrong element: it says ~Recognition → ~Cost-effective, but the chain only supports ~Recognition → ~Innovative → possibly ~Award. The conclusion doesn\'t follow from the correct chain.', badge: 'Structural Mismatch', badgeColor: 'red' },
      { title: '(C) Qualifying time AND recommendation for competition; both → enters; doesn\'t enter → lacks time', text: 'Premise 2 restates Premise 1 (having both = entering) rather than creating a new conditional with OR. There\'s no separate D to contrapositive through. The argument is circular, not a chain.', badge: 'No Chain', badgeColor: 'red' },
      { title: '(D) Thesis AND oral exam for honors; thesis → departmental recognition; no honors → no recognition', text: 'The conclusion says ~A → ~D (no honors → no recognition), but the valid contrapositive should be ~D → ~Thesis (at most). The direction is reversed: the stimulus concludes ~D → ~A, not ~A → ~D.', badge: 'Direction Reversal', badgeColor: 'red' },
      { title: '(E) Proposal AND budget for grant; proposal OR budget → applicant; applicant → eligible for grant', text: 'The conclusion commits a **Mistaken Reversal**: it goes from D → A (applicant → grant), when the chain only supports A → D (grant → applicant). The stimulus is valid; this is flawed.', badge: 'Validity Mismatch', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Conditional Matching Errors' },
    { type: 'paragraph', text: "When matching complex conditional arguments, these are the specific errors students make most frequently:" },

    { type: 'table', headers: ['Error', 'What Goes Wrong', 'How to Catch It', 'Example'], rows: [
      ['**AND/OR Swap**', 'The answer uses AND where the stimulus uses OR (or vice versa) in the same structural position', 'Diagram both arguments and compare operators symbol by symbol', 'Stimulus: A → (B AND C). Answer: A → (B OR C). The necessary conditions change from both to either.'],
      ['**Contrapositive vs. Direct**', 'The stimulus concludes with a contrapositive (~D → ~A) but the answer concludes directly (A → D)', 'Check whether the conclusion negates both terms and reverses the direction', 'Both may be valid, but they are structurally different conclusions.'],
      ['**Missing Link**', 'The answer\'s chain skips a step that the stimulus includes', 'Count the variables in each chain. If the stimulus has 4 (A, B, C, D) and the answer has 3, a link is missing', 'Stimulus: A → B → C → D. Answer: A → B → D. The B → C step is absent.'],
      ['**Direction Reversal**', 'The arrow direction is flipped in one premise: the answer says B → A where the stimulus says A → B', 'For each premise, confirm which term is sufficient and which is necessary', 'Stimulus: \"If rain, then wet.\" Answer: \"If wet, then rain.\" Same words, reversed logic.'],
      ['**Scope Narrowing**', 'The answer uses only one branch of a compound condition', 'If the stimulus says \"B OR C → D,\" check that the answer doesn\'t say \"B → D\" (dropping C)', 'Using one disjunct instead of the full disjunction narrows the scope and changes the logic.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Chain Length Comparison Technique' },
    { type: 'paragraph', text: "On the hardest conditional chain questions, the stimulus may have 4 or 5 links. A quick technique for eliminating answers is **chain length comparison**:" },

    { type: 'process', title: 'Chain Length Comparison', steps: [
      '**Count the distinct variables** in the stimulus\'s chain. For example, A → (B AND C) → (B OR C) → D has 4 variables (A, B, C, D).',
      '**Count the links** (arrows) in the chain. The example above has 3 links.',
      '**Scan each answer choice** for the same number of variables and links. Any answer with fewer variables or fewer links is structurally simpler and cannot be a match.',
      '**Eliminate mismatches immediately.** An answer with 3 variables cannot parallel a stimulus with 4, even if the surviving variables match perfectly.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Speed Tip: Count Before You Diagram', text: "Before spending time diagramming every answer choice, quickly count the number of distinct conditions mentioned in each one. If the stimulus discusses 4 conditions (e.g., dessert, entree, salad, soft drink) and an answer only discusses 3, you can eliminate it in seconds without diagramming." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Advanced conditional chains go beyond simple A → B → C. Expect **nested conditionals** (A → (B → C)), **biconditionals** (A ↔ B), and **\"unless/until\" translations** (~B → A).\n• **Precise diagramming is essential.** Assign variables, identify connectors (AND, OR, IF-THEN, UNLESS), translate to symbols, link the chain, and check the conclusion.\n• The AND/OR relationship is the most commonly exploited feature: (B AND C) guarantees (B OR C), which enables chains like A → (B ∧ C) → (B ∨ C) → D.\n• **Contrapositive conclusions** (~D → ~A) are extremely common in advanced conditional questions. Verify the direction and the negations.\n• Use **chain length comparison** to quickly eliminate answers with fewer variables or links than the stimulus.\n• The five most common matching errors are: AND/OR swap, contrapositive vs. direct confusion, missing links, direction reversal, and scope narrowing. Check each one systematically." },
  ]
};
