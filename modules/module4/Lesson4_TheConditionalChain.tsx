import { Lesson } from '../../types';

export const Lesson4_TheConditionalChain: Lesson = {
  id: "4-4",
  title: "Lesson 1: The Conditional Chain",
  content: [
    { type: 'h2', text: 'Lesson 1: The Conditional Chain (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson takes a deep dive into the single most common logical pattern in Parallel Reasoning questions: the **Conditional Chain**. This pattern connects \"if/then\" statements like a series of falling dominoes, where the result of one premise becomes the trigger for the next." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Conditional chains account for approximately **25% of all Parallel Reasoning questions**. If you can recognize and abstract this pattern instantly, you will have a reliable strategy for a quarter of the questions you face. Mastering this pattern alone dramatically improves your accuracy on Parallel Reasoning." },

    { type: 'hr' },

    { type: 'h2', text: 'The Conditional Chain Pattern' },
    { type: 'paragraph', text: "A conditional chain argument links two or more \"if/then\" statements end-to-end. The **result** of the first conditional becomes the **trigger** of the second conditional, creating a chain that allows you to draw a new conditional connecting the first trigger to the final result." },

    { type: 'h3', text: 'The Core Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Role in the Chain'], rows: [
      ['Premise 1', 'If A, then B (A → B)', 'First link: A triggers B'],
      ['Premise 2', 'If B, then C (B → C)', 'Second link: B triggers C'],
      ['Conclusion', 'Therefore, if A, then C (A → C)', 'Chain result: A ultimately triggers C'],
    ]},

    { type: 'paragraph', text: "The connecting element is **B** — it appears as the result in Premise 1 and the trigger in Premise 2. This overlap is what makes the chain possible." },

    { type: 'h3', text: 'The Process Diagram' },
    { type: 'process', title: 'How to Identify a Conditional Chain', steps: [
      '**Spot the conditionals.** Look for "if…then" statements, or their equivalents ("any," "all," "every," "whenever").',
      '**Find the linking term.** Identify the term that appears as the *result* of one premise and the *trigger* of the next. This is the middle link (B).',
      '**Trace the chain.** The first trigger (A) connects to the final result (C) through the middle link.',
      '**Check the conclusion.** The conclusion should be a new conditional connecting A directly to C: "If A, then C."',
      '**Verify validity.** A properly constructed chain is always **valid**. If the conclusion isn\'t a conditional or doesn\'t connect the first trigger to the last result, something is wrong.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'How to Abstract Conditional Logic' },
    { type: 'paragraph', text: "The key skill for conditional chain questions is translating natural language into symbolic form. Here's how to handle the most common conditional phrasings:" },

    { type: 'table', headers: ['Natural Language', 'Symbolic Form', 'Trigger → Result'], rows: [
      ['"If it rains, the game is cancelled"', 'Rain → Cancel', 'Rain triggers cancellation'],
      ['"All mammals are warm-blooded"', 'Mammal → Warm-blooded', 'Being a mammal triggers warm-bloodedness'],
      ['"Every student who passes receives credit"', 'Pass → Credit', 'Passing triggers credit'],
      ['"Whenever the alarm sounds, evacuate"', 'Alarm → Evacuate', 'Alarm triggers evacuation'],
      ['"Only certified technicians may operate the equipment"', 'Operate → Certified', '**Careful:** "Only" reverses the direction'],
      ['"No reptile is warm-blooded"', 'Reptile → ¬Warm-blooded', 'Being a reptile triggers NOT warm-blooded'],
    ]},

    { type: 'callout', variant: 'default', title: 'The "Only" Trap', text: "The word **\"only\"** reverses the conditional direction compared to \"if.\" Compare:\n\n• \"**If** you are a citizen, you can vote.\" → Citizen → Vote\n• \"**Only** citizens can vote.\" → Vote → Citizen\n\nIn the first, citizenship triggers voting eligibility. In the second, voting requires citizenship. When abstracting conditional chains, pay close attention to \"only if\" — it reverses the arrow." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Conditional Chain Variations' },
    { type: 'paragraph', text: "While the basic A → B → C pattern is the most common, several variations appear on the LSAT:" },

    { type: 'table', headers: ['Variation', 'Structure', 'Example', 'Key Feature'], rows: [
      ['**Basic Chain**', 'A→B, B→C ∴ A→C', '"If rain → flood, if flood → damage ∴ if rain → damage"', 'Two links, conditional conclusion'],
      ['**Extended Chain**', 'A→B, B→C, C→D ∴ A→D', '"If tax hike → less spending → recession → unemployment"', 'Three+ links, same logic'],
      ['**Chain + Application**', 'A→B, B→C, A ∴ C', '"If rain → flood, if flood → damage, it\'s raining ∴ damage"', 'Chains then applies (Modus Ponens at end)'],
      ['**Contrapositive Chain**', 'A→B, B→C, ¬C ∴ ¬A', '"If A→B→C, not C ∴ not A"', 'Chains then applies Modus Tollens'],
      ['**Negative Result**', 'A→B, B→¬C ∴ A→¬C', '"If elected → policy change → no more deficit"', 'Final result is negative'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Chain + Application Is a Common Trap', text: "A stimulus with a **conditional conclusion** (\"If A, then C\") cannot be paralleled by an answer with a **factual conclusion** (\"C is true\"). The \"Chain + Application\" variation looks similar to the basic chain but has a fundamentally different conclusion type. Always check whether the conclusion is conditional or factual." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full 4-step method to a conditional chain question." },

    { type: 'question-card',
      id: 'PR-4-4-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'medium',
      stimulus: "If Patricia eats a heavy, spicy meal tonight, she will get a bad case of heartburn later. If Patricia gets a bad case of heartburn later, she will be grouchy tomorrow morning. So if Patricia eats a heavy, spicy meal tonight, she will be grouchy tomorrow morning.",
      question: "Which one of the following arguments is most similar in its logical features to the argument above?",
      options: [
        "(A) If Ruth plants only daffodils in her garden, the garden will have only yellow flowers. Since no flowers are blooming in Ruth's garden, she must not have planted only daffodils.",
        "(B) If Shawn starts gardening in early spring, he will have plenty of tomatoes for canning. But he does not have plenty of tomatoes for canning, so either he did not start gardening in early spring or he did not plant tomatoes early.",
        "(C) Maria plants either petunias or geraniums in her garden every year. Since both petunias and geraniums are flowers, Maria will have either purple or red flowers in her garden.",
        "(D) If Li plants old rose varieties, her garden will look beautiful. If Li's garden looks beautiful, Li's neighbors will be impressed. So if Li plants old rose varieties, her neighbors will be impressed. (Correct)",
        "(E) If Bryan's fruit trees are to produce well, he must either prune them in the fall or fertilize them in the spring. Since Bryan always prunes his trees in the fall, Bryan is sure to fertilize his trees this spring.",
      ],
    },

    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      '**Step 1 — Identify Structure:**\n• Premise 1: If A (spicy meal) → B (heartburn)\n• Premise 2: If B (heartburn) → C (grouchy)\n• Conclusion: If A (spicy meal) → C (grouchy)\n• Linking term: B (heartburn)\n• Validity: Valid conditional chain',
      '**Step 2 — Abstract the Pattern:**\nA → B, B → C, ∴ A → C\nTwo conditional premises forming a chain; conditional conclusion connecting first trigger to final result.',
      '**Step 3 — Quick Scan (Conclusion Type):**\n• (A) Conclusion: "she must not have planted daffodils" — factual, not conditional. **Eliminate.**\n• (B) Conclusion: "either…or" disjunction, not a conditional. **Eliminate.**\n• (C) Conclusion: "either purple or red flowers" — disjunction based on an "either/or" premise, not a chain. **Eliminate.**\n• (D) Conclusion: "if Li plants old rose varieties, her neighbors will be impressed" — conditional. **Keep.**\n• (E) Conclusion: "Bryan is sure to fertilize" — factual claim, not conditional. **Eliminate.**',
      '**Step 4 — Verify (D):**\n• Premise 1: If Li plants old roses → garden looks beautiful (A → B) ✓\n• Premise 2: If garden looks beautiful → neighbors impressed (B → C) ✓\n• Conclusion: If Li plants old roses → neighbors impressed (A → C) ✓\n• Linking term: "garden looks beautiful" = B ✓\n• Valid chain ✓\nPerfect structural match.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Ruth planted only daffodils → yellow flowers. No flowers blooming → must not have planted daffodils.', text: 'This is **Modus Tollens** (If A→B, ¬B, ∴ ¬A), not a conditional chain. The conclusion is a factual denial, not a new conditional. Both the structure and the conclusion type differ.', badge: 'Modus Tollens', badgeColor: 'red' },
      { title: '(B) Shawn starts early → plenty of tomatoes. No tomatoes → either didn\'t start early or didn\'t plant early.', text: 'The conclusion is a **disjunction** ("either…or"), not a conditional. Additionally, the argument introduces a new element ("plant tomatoes early") not present in the original premises. Structural mismatch.', badge: 'Disjunction', badgeColor: 'red' },
      { title: '(C) Maria plants either petunias or geraniums. Both are flowers → purple or red.', text: 'The first premise is a **disjunction** ("either…or"), not a conditional. There is no chain of "if/then" statements. The reasoning pattern is entirely different.', badge: 'Disjunction', badgeColor: 'red' },
      { title: '(D) If Li plants roses → beautiful garden. If beautiful → neighbors impressed. ∴ If roses → impressed.', text: 'A → B, B → C, ∴ A → C. Identical chain structure. Same linking mechanism, same conditional conclusion, same validity.', badge: 'Correct Match', badgeColor: 'green' },
      { title: '(E) Trees must be pruned or fertilized to produce well. Bryan prunes → sure to fertilize.', text: 'The conclusion ("sure to fertilize") does not follow from the premises. The argument confuses a disjunction ("either prune or fertilize") with a conjunction ("both prune and fertilize"). Structural mismatch and invalid in a different way.', badge: 'Non Sequitur', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Traps in Conditional Chain Questions' },
    { type: 'paragraph', text: "Test-makers design wrong answers to look similar to conditional chains while actually using different logical structures. Here are the traps to watch for:" },

    { type: 'table', headers: ['Trap', 'What It Looks Like', 'How to Detect It'], rows: [
      ['**Modus Tollens Disguise**', 'Uses conditionals but denies the result to deny the trigger', 'Check whether the conclusion is a conditional (chain) or a factual denial (Modus Tollens)'],
      ['**Broken Chain**', 'Two conditionals that don\'t link — the result of Premise 1 is not the trigger of Premise 2', 'Verify the linking term: the result of P1 must be the trigger of P2'],
      ['**Disjunction Swap**', 'Uses "either/or" instead of "if/then" in the premises', 'Check whether the premises are conditionals or disjunctions'],
      ['**Factual Conclusion**', 'Chains the conditionals correctly but draws a factual conclusion instead of a conditional one', 'If the stimulus concludes "If A then C," the answer must also conclude with a conditional'],
      ['**Reversed Direction**', 'The chain flows in the opposite direction (C → B → A instead of A → B → C)', 'Verify that the conclusion connects the *first* trigger to the *last* result, not the reverse'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Conditional Chain** is the most common Parallel Reasoning pattern (~25% of questions). Its structure is A → B, B → C, ∴ A → C.\n• The **linking term** (B) is the key: it must appear as the result of one premise and the trigger of the next.\n• The conclusion of a chain is always a **new conditional** — not a factual claim. If the stimulus concludes \"If A, then C,\" eliminate any answer with a non-conditional conclusion.\n• Watch for **variations**: extended chains (3+ links), chains with application (Modus Ponens at the end), and contrapositive chains.\n• The biggest traps are **Modus Tollens disguises** (conditional premises but factual denial conclusion) and **broken chains** (conditionals that don't link through a shared term).\n• Always verify the **direction** of the chain. The conclusion must connect the first trigger to the last result." },
  ]
};
