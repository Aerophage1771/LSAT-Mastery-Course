import { Lesson } from '../../types';

export const Lesson3_Drill_MistakenNegation: Lesson = {
  id: "6-3",
  title: "Drill: Mistaken Negation",
  content: [
    { type: 'h2', text: 'Drill: The Mistaken Negation Flaw' },

    { type: 'h3', text: 'Concept Focus: The Mistaken Negation' },
    { type: 'paragraph', text: "The **Mistaken Negation** — also known as **Denying the Antecedent** — is one of the two most common conditional logic errors on the LSAT (the other being the Mistaken Reversal). It occurs when an author takes a conditional rule and assumes that if the *trigger* (sufficient condition) is absent, the *result* (necessary condition) must also be absent." },
    { type: 'paragraph', text: "In everyday language, the error sounds like this: \"The rule says *if* you study hard, you will pass. You did not study hard, so you will not pass.\" The problem? There could be many other ways to pass — natural talent, prior knowledge, an easy exam. The rule only tells us what happens when the trigger fires; it says nothing about what happens when the trigger is absent." },

    { type: 'hr' },

    { type: 'h3', text: 'The Formal Structure' },
    { type: 'paragraph', text: "Let's break down the Mistaken Negation in formal terms so you can recognize it instantly in any context:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'Explanation' }, items: [
      { title: 'The Rule (Premise)', text: '**If A, then B.** (A $\\rightarrow$ B)\nThis states that A is a *sufficient* condition for B. Whenever A occurs, B must follow. But it does NOT state that A is the *only* way to get B.', badge: 'Given', badgeColor: 'blue' },
      { title: 'The Observation (Premise)', text: '**A is not true.** (~A)\nThe author observes that the sufficient condition has not been met.', badge: 'Given', badgeColor: 'blue' },
      { title: 'The Flawed Conclusion', text: '**Therefore, B is not true.** (~B)\nThe author concludes that because the trigger did not fire, the result cannot occur. This is the error.', badge: 'Flaw', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'Why Is This Wrong?', text: "The rule \"If A → B\" tells us that A *guarantees* B. It does NOT tell us that A is the *only* thing that guarantees B. There could be other pathways (C, D, E) that also lead to B. By concluding ~B from ~A, the author is treating the sufficient condition as though it were a *necessary* condition — as though A were the only possible route to B." },

    { type: 'hr' },

    { type: 'h3', text: 'Valid vs. Invalid Conditional Inferences' },
    { type: 'paragraph', text: "To master conditional flaws in Parallel Flaw questions, you need to instantly distinguish valid inferences from invalid ones. This reference table covers all four possible moves:" },
    { type: 'table', headers: ['Inference', 'Pattern', 'Validity', 'Name'], rows: [
      ['If A → B. A is true. Therefore B.', 'A → B. A. ∴ B.', '**Valid** ✓', 'Modus Ponens (Affirming the Antecedent)'],
      ['If A → B. B is false. Therefore A is false.', 'A → B. ~B. ∴ ~A.', '**Valid** ✓', 'Modus Tollens (Contrapositive)'],
      ['If A → B. B is true. Therefore A is true.', 'A → B. B. ∴ A.', '**Invalid** ✗', 'Mistaken Reversal (Affirming the Consequent)'],
      ['If A → B. A is false. Therefore B is false.', 'A → B. ~A. ∴ ~B.', '**Invalid** ✗', 'Mistaken Negation (Denying the Antecedent)'],
    ]},
    { type: 'callout', variant: 'tip', title: 'Memory Aid', text: "The two **valid** moves stay on the same side of the arrow (antecedent or consequent) and use the arrow correctly:\n• **Affirm the antecedent** → conclude the consequent (forward along the arrow).\n• **Deny the consequent** → deny the antecedent (backward along the arrow = contrapositive).\n\nThe two **invalid** moves cross sides:\n• **Affirm the consequent** → try to conclude the antecedent (backward, wrong direction).\n• **Deny the antecedent** → try to deny the consequent (forward, but negated — no basis)." },

    { type: 'hr' },

    { type: 'h3', text: 'How Conditional Errors Create Parallel Structures' },
    { type: 'paragraph', text: "In Parallel Flaw questions, the LSAT exploits the similarity between Mistaken Negation and Mistaken Reversal to create trap answer choices. Both are conditional logic errors, but they work in opposite directions:" },
    { type: 'table', headers: ['Feature', 'Mistaken Negation', 'Mistaken Reversal'], rows: [
      ['**Pattern**', 'If A → B. ~A. ∴ ~B.', 'If A → B. B. ∴ A.'],
      ['**What is observed?**', 'The *antecedent* is negated', 'The *consequent* is affirmed'],
      ['**What is concluded?**', 'The *consequent* is negated', 'The *antecedent* is affirmed'],
      ['**Core assumption**', 'A is the *only* way to get B', 'B can *only* come from A'],
      ['**Everyday example**', '"No rain, so no wet grass" (ignoring sprinklers)', '"Wet grass, so it rained" (ignoring sprinklers)'],
    ]},
    { type: 'paragraph', text: "When the stimulus commits a Mistaken Negation, the trap answer will often commit a Mistaken Reversal (or vice versa). Since both involve conditional rules, students who identify the flaw loosely as \"a conditional error\" will fall for the trap. Precision matters: you must identify *which* conditional error." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },

    { type: 'question-card',
      id: 'PF-6-3-001',
      questionType: 'Parallel Flaw',
      difficulty: 'medium',
      stimulus: "If the law punishes littering, then the city has an obligation to provide trash cans. But the law does not punish littering, so the city has no such obligation.",
      question: "Which one of the following exhibits a flawed pattern of reasoning most similar to that in the argument above?",
      options: [
        "(A) If today is a holiday, then the bakery will not be open. The bakery is not open for business. Thus today is a holiday.",
        "(B) Jenny will have lots of balloons at her birthday party. There are no balloons around yet, so today is not her birthday.",
        "(C) The new regulations will be successful only if most of the students adhere to them. Since most of the students will adhere to those regulations, the new regulations will be successful.",
        "(D) In the event that my flight had been late, I would have missed the committee meeting. Fortunately, my flight is on time. Therefore, I will make it to the meeting. (Correct)",
        "(E) When the law is enforced, some people are jailed. But no one is in jail, so clearly the law is not enforced.",
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Step-by-Step Analysis' },

    { type: 'h3', text: 'Step 1: Identify the Flaw' },
    { type: 'paragraph', text: "Let's map the stimulus argument:" },
    { type: 'list', items: [
      '**Premise 1 (the rule):** If the law punishes littering → the city has an obligation to provide trash cans. (If A → B)',
      '**Premise 2 (the observation):** The law does not punish littering. (~A)',
      '**Conclusion:** The city has no obligation to provide trash cans. (~B)',
    ]},
    { type: 'paragraph', text: "The argument takes a conditional rule (If Punishment → Obligation), observes that the antecedent is not met (no punishment), and concludes that the consequent cannot be true (no obligation)." },
    { type: 'paragraph', text: "This is a textbook **Mistaken Negation**: If A → B. ~A. Therefore ~B." },
    { type: 'paragraph', text: "The rule only tells us that punishment is *one* reason the city might have an obligation. The city might have an obligation for other reasons entirely — public health, environmental standards, voter demand. The argument wrongly treats punishment as the *only* possible reason for the obligation." },

    { type: 'h3', text: 'Step 2: Abstract the Pattern' },
    { type: 'callout', title: 'Blueprint', variant: 'tip', text: "If [X] happens → [Y] happens.\n[X] did NOT happen.\nTherefore, [Y] will NOT happen.\n\n(Mistaken Negation: A → B. ~A. ∴ ~B.)" },

    { type: 'h3', text: 'Step 3: Match the Error' },
    { type: 'paragraph', text: "Now we scan each answer choice against our blueprint. We need an argument that:\n1. States a conditional rule (If A → B)\n2. Observes that A is false (~A)\n3. Concludes that B is false (~B)" },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: '(A) If today is a holiday → bakery not open. Bakery is not open. Therefore today is a holiday.',
        text: "Let's map it: If A → B. B is true (bakery not open). Therefore A is true (today is a holiday). This is a **Mistaken Reversal** (affirming the consequent), not a Mistaken Negation. The observation is about B (the result), not about ~A (the trigger). Wrong direction.",
        badge: 'Incorrect — Mistaken Reversal',
        badgeColor: 'red'
      },
      {
        title: '(B) Jenny will have balloons at her party. No balloons yet. Therefore today is not her birthday.',
        text: "Map: If birthday → balloons. No balloons. Therefore no birthday. This is actually a valid **Contrapositive** (Modus Tollens): If A → B. ~B. Therefore ~A. Since it is logically valid, it cannot be the correct answer in a Parallel Flaw question.",
        badge: 'Incorrect — Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(C) Regulations successful only if students adhere. Students will adhere. Therefore regulations will be successful.',
        text: "\"Only if\" means adherence is *necessary* for success: Success → Adherence. The argument observes Adherence (the necessary condition is met) and concludes Success (the sufficient condition). This is a **Mistaken Reversal**: confusing a necessary condition for a sufficient one. Different flaw from the stimulus.",
        badge: 'Incorrect — Mistaken Reversal',
        badgeColor: 'red'
      },
      {
        title: '(D) If flight late → miss meeting. Flight is on time. Therefore I will make the meeting.',
        text: "Map: If A (late) → B (miss meeting). ~A (not late). Therefore ~B (will not miss = will make it). This is exactly our blueprint: **If A → B. ~A. Therefore ~B.** The argument assumes that being late is the *only* way to miss the meeting — ignoring traffic, a wrong venue, or a cancellation. Perfect Mistaken Negation match.",
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(E) When law is enforced → people jailed. No one is jailed. Therefore law is not enforced.',
        text: "Map: If A (enforced) → B (jailed). ~B (no one jailed). Therefore ~A (not enforced). This is a valid **Contrapositive** (Modus Tollens): A → B. ~B. ∴ ~A. Valid reasoning eliminates it automatically.",
        badge: 'Incorrect — Valid Logic',
        badgeColor: 'red'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Trap Analysis' },
    { type: 'paragraph', text: "This question illustrates two classic Parallel Flaw traps:" },
    { type: 'list', ordered: true, items: [
      '**The Adjacent Flaw Trap (A and C):** Both commit conditional errors, but they commit the *wrong* conditional error — Mistaken Reversal instead of Mistaken Negation. A student who identifies the flaw loosely as "a conditional mistake" will struggle to distinguish these from the correct answer.',
      '**The Valid Logic Trap (B and E):** Both use conditional reasoning and look structurally similar to the stimulus, but their logic is actually *correct* (valid contrapositives). They exploit the fact that students expect all five choices to be flawed, when in fact some may be perfectly valid.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Mistaken Negation** (Denying the Antecedent) assumes that failing to meet a sufficient condition guarantees the failure of the necessary condition. In formal terms: (A → B) does NOT imply (~A → ~B).\n• Always distinguish the **four conditional inferences**: Modus Ponens (valid), Contrapositive (valid), Mistaken Reversal (invalid), and Mistaken Negation (invalid).\n• In Parallel Flaw questions, the LSAT pairs Mistaken Negation stimuli with **Mistaken Reversal trap answers** (and vice versa). You must identify *which* conditional error — not just that it is a conditional error.\n• **Valid answer choices** (contrapositives, Modus Ponens) are automatic eliminations. If the logic is sound, it cannot parallel a flawed argument.\n• Abstraction is key: strip away the content (littering, flights, bakeries) and match the skeleton: If A → B. ~A. ∴ ~B." },
  ]
};
