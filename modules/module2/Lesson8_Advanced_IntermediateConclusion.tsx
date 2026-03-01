import { Lesson } from '../../types';

export const Lesson8_Advanced_IntermediateConclusion: Lesson = {
  id: "2-8",
  title: "Advanced: The Intermediate Conclusion Trap (PT-116-S-3-Q-23)",
  content: [
    { type: 'h2', text: 'The Intermediate Conclusion Trap' },
    { type: 'paragraph', text: "The intermediate conclusion (IC) trap is the single most effective trap on difficult Main Conclusion questions. It works because ICs look and feel like main conclusions — they are supported by evidence and introduced by words like \"Thus\" or \"Therefore.\" The critical difference is that an IC then goes on to support an even broader claim. Your task is to see the entire chain and identify the *final destination*, not the *last stepping-stone*." },

    { type: 'hr' },

    { type: 'h3', text: 'The IC Trap Pattern' },
    { type: 'paragraph', text: "The test-makers construct IC traps using a predictable pattern. Recognizing it in advance is your best defense:" },
    { type: 'process', title: 'How the IC Trap Is Built', steps: [
      '**Step 1: Plant the main conclusion early.** The actual main conclusion appears in the first or second sentence, often without a conclusion indicator word.',
      '**Step 2: Provide evidence.** One or more premises support both the main conclusion and the intermediate conclusion.',
      '**Step 3: End with a strong indicator + IC.** The final sentence begins with \"Thus,\" \"Therefore,\" or \"Consequently\" — introducing a sub-conclusion that *feels* like the final point.',
      '**Step 4: Create the trap answer.** One answer choice restates the IC. Because it\'s the last thing you read and has a conclusion indicator, it\'s extremely tempting.',
    ]},
    { type: 'callout', variant: 'tip', title: 'The Final "Thus" Warning', text: "A conclusion indicator at the *end* of the stimulus does not guarantee you've found the *main* conclusion. On hard questions, the final \"Thus\" frequently introduces an intermediate conclusion that *supports* a broader claim made earlier. Always ask: \"Does this 'Thus' sentence then support something else?\"" },

    { type: 'hr' },

    { type: 'h3', text: 'When Final Indicators Are NOT the Main Conclusion' },
    { type: 'paragraph', text: "Here's a reference for recognizing when a final indicator word is misleading:" },
    { type: 'table', headers: ['Scenario', 'Final Indicator Marks...', 'How to Detect It'], rows: [
      ['Explanation arguments', 'IC describing the mechanism', 'The main conclusion (proposed cause) appeared earlier, often in Sentence 1'],
      ['Multi-step chains', 'IC that is one step in a longer chain', 'The IC supports a broader claim stated before it'],
      ['Rebuttal arguments', 'IC that elaborates on the rebuttal', 'The main rebuttal (\"However, this is wrong\") appeared earlier after the pivot word'],
      ['Conditional conclusions', 'IC deriving a specific consequence', 'The main conclusion is the general principle, not the specific consequence'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'IC vs. Main Conclusion: The Checklist' },
    { type: 'paragraph', text: "When you've identified two candidate conclusions, use this checklist to determine which is the main conclusion and which is the IC:" },
    { type: 'table', headers: ['Test', 'Main Conclusion', 'Intermediate Conclusion'], rows: [
      ['Does it receive support from other statements?', '✓ Yes', '✓ Yes'],
      ['Does it *give* support to another claim?', '✗ No — it\'s the final destination', '✓ Yes — it supports the main conclusion'],
      ['Why Test: Do premises answer \"Why?\" for it?', '✓ Yes — the whole argument explains it', '✓ Partially — only some premises explain it'],
      ['Reverse Test: Does it explain another claim?', '✗ No', '✓ Yes — it helps prove the main conclusion'],
      ['Scope', 'Broader, more general', 'Narrower, more specific'],
      ['If removed, does the argument lose its main point?', '✓ Yes — the argument collapses', '✗ No — the main point still stands'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example 1' },
    {
      type: 'question-card',
      id: 'PT-116-S-3-Q-23',
      stimulus: 'Each of many different human hormones can by itself raise the concentration of glucose in the blood. The reason for this is probably a metabolic quirk of the brain. To see this, consider that although most human cells can produce energy from fats and proteins, brain cells can use only glucose. Thus, if blood glucose levels fall too low, brain cells will rapidly starve, leading to unconsciousness and death.',
      question: 'Which one of the following most accurately expresses the main conclusion of the argument above?',
      options: [
        '**(A)** Each of many different human hormones can by itself raise blood glucose levels.',
        '**(B)** The reason that many different hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain. (Correct) [53%]',
        '**(C)** Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.',
        '**(D)** If blood glucose levels fall too low, then brain cells starve, resulting in loss of consciousness and death.',
        '**(E)** The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose.',
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Structural Chain Diagram' },
    { type: 'paragraph', text: "Let's map the full logical chain to see how each piece connects:" },
    { type: 'process', title: 'The Argument Flow', steps: [
      '**Phenomenon (S1):** Many hormones each independently raise blood glucose. [The \"what\" — the observation to be explained.]',
      '**Main Conclusion (S2):** \"The reason for this is probably a metabolic quirk of the brain.\" [The \"why\" — the proposed cause.]',
      '**Premise (S3):** Brain cells can only use glucose (unlike other cells). [Evidence — introduced by \"consider that.\"]',
      '**Intermediate Conclusion (S4):** \"Thus, if blood glucose falls too low, brain cells starve.\" [Draws from S3, but then supports S2 by showing why the body needs so many backup glucose systems.]',
    ]},
    { type: 'paragraph', text: "The IC (S4) is derived from the premise (S3), but its purpose is to support the main conclusion (S2). The severe consequences of low glucose (starvation, death) explain *why* the body would evolve redundant hormone systems — which is exactly what S2 claims." },

    { type: 'h3', text: 'Answer Choice Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Each of many different human hormones can by itself raise blood glucose levels.', text: 'This is the **phenomenon** — the observation the argument sets out to explain. No one disputes it; the author\'s job is to explain *why* it\'s true.', badge: 'Trap: Phenomenon', badgeColor: 'red' },
      { title: '(B) The reason that many hormones can each independently raise blood glucose levels is probably a metabolic quirk of the brain.', text: 'Perfect match for Sentence 2 — the explanatory conclusion. \"Probably\" correctly preserves the author\'s certainty level.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Although most human cells can produce energy from fats and proteins, brain cells can produce energy only from glucose.', text: 'This is the core **premise**, introduced by \"consider that.\" It\'s evidence for the IC and indirectly for the main conclusion, but it\'s not the point of the argument.', badge: 'Trap: The Premise', badgeColor: 'red' },
      { title: '(D) If blood glucose levels fall too low, then brain cells starve...', text: 'This is the **intermediate conclusion** — the sentence introduced by \"Thus\" at the end. It draws from the premise (C) and supports the main conclusion (B). This is the classic IC trap: it appears last, has a conclusion indicator, and feels important.', badge: 'Trap: IC (Final \"Thus\")', badgeColor: 'red' },
      { title: '(E) The reason brain cells starve if deprived of glucose is that they can produce energy only from glucose.', text: 'This describes the relationship between the premise (S3) and the IC (S4) — a sub-argument. It\'s logically accurate but captures only a supporting detail, not the main point.', badge: 'Trap: Sub-Argument', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example 2 (Shorter Stimulus)' },

    { type: 'h3', text: 'Quick Analysis' },
    { type: 'paragraph', text: "The IC trap appears again: \"Therefore\" in Sentence 3 introduces an intermediate conclusion (offices maintain desktops), but the *main* conclusion is Sentence 1 (smartphones haven't diminished the need). The \"Therefore\" sentence is an observable consequence that supports the broader claim. Why haven't smartphones diminished the need? Because desktops have superior power (premise), so offices maintain both (IC supporting the MC)." },
    { type: 'paragraph', text: "The correct answer is **(A)** — the broad claim in Sentence 1. Choice (C) is the IC trap. Choice (B) is the premise." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Beware the final \"Thus.\"** On hard questions, the last sentence with a conclusion indicator is frequently an intermediate conclusion, not the main conclusion.\n**2. Map the entire chain.** Before selecting an answer, trace the full flow of support. Ask: \"Does this conclusion then support an even broader claim?\"\n**3. Use the IC Checklist.** The main conclusion receives support but doesn't give it. The IC both receives *and* gives support.\n**4. The IC trap works because ICs feel important.** They are supported by evidence and sound conclusory. But importance ≠ main conclusion. The main conclusion is the *final destination*, not the most impressive stepping-stone." }
  ]
};
