import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "12-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Principle-Strengthen Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Principle-Strengthen question. The goal is the same every time: understand the author's argument, find the logical leap, abstract the general rule that would justify that leap, and match it to the answer choices. Each step below includes concrete guidance, tips for tricky situations, and key insights." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 20 seconds** per Principle-Strengthen question. Steps 1–3 (reading, gap-finding, and pre-phrasing) should take about 45 seconds combined. Step 4 (evaluating and eliminating choices) should take about 35 seconds. The pre-phrase is critical — students who scan the answer choices without one waste time re-reading the stimulus for each option. A strong pre-phrase lets you identify the correct answer almost immediately and verify it quickly." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Find the Conclusion:** Read the stimulus, isolate the author\'s main claim, and identify the evidence supporting it.',
      '**Step 2 — Identify the Logical Leap:** Find the gap between the evidence and the conclusion. Ask: "What type of reasoning connects these specific facts to that specific judgment?"',
      '**Step 3 — Abstract the Principle Needed:** Generalize the gap into a broad, universal rule. Strip away the specific details and formulate the principle the argument implicitly invokes.',
      '**Step 4 — Match the Answer:** Scan the choices for the principle that best matches your pre-phrase. Verify that it bridges the specific gap you identified.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "Before you can find the principle, you must understand the argument. Read the stimulus and identify two things:" },
    { type: 'list', items: [
      '**The Main Conclusion:** What is the author\'s primary claim, judgment, recommendation, or evaluation? This is the statement the author is trying to prove. Look for conclusion indicators: *therefore, thus, so, consequently, should, must, ought.*',
      '**The Key Evidence:** What facts, observations, or circumstances does the author cite in support of that conclusion? Look for premise indicators: *because, since, for, after all, given that.*',
    ]},
    { type: 'paragraph', text: "Pay close attention to the **nature** of the conclusion. Is it a value judgment (\"X is wrong\")? A recommendation (\"X should be done\")? A classification (\"X counts as Y\")? A prediction (\"X will happen\")? The type of conclusion tells you what type of principle you need — and helps you avoid answers that address a different kind of judgment." },
    { type: 'callout', variant: 'default', title: 'When the Conclusion Is Implicit', text: "Some Principle-Strengthen stimuli present an implicit conclusion. The author describes a situation and a response without using explicit conclusion language. When this happens, ask: \"What is the author *advocating*?\" The recommended action or judgment is the conclusion, even if it is not flagged with \"therefore.\" For example: \"The committee declined to fund the proposal because it lacked community support\" — the implicit conclusion is that the committee's decision was justified." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Logical Leap' },
    { type: 'paragraph', text: "This is the most critical step. Pinpoint the gap between the evidence and the conclusion. Ask yourself: *\"How does the author get from these specific facts to that specific judgment? What kind of general rule is the author silently relying on?\"*" },
    { type: 'paragraph', text: "The logical leap in Principle-Strengthen questions typically involves a move between two different *domains* of reasoning. Focus on identifying which type of leap the argument makes:" },

    { type: 'table', headers: ['Leap Type', 'The Evidence Is About...', 'The Conclusion Is About...', 'The Principle Must...'], rows: [
      ['**Fact → Value**', 'What *is* the case (descriptive facts)', 'What *should be* the case (moral/ethical judgment)', 'Bridge the "is-ought" gap — state that this type of fact warrants this type of judgment'],
      ['**Means → End**', 'A method or strategy that achieves an intermediate result', 'A recommendation to pursue that method', 'State that achieving this type of result justifies choosing this type of method'],
      ['**Role → Duty**', 'A person\'s position, authority, or relationship', 'An obligation or responsibility that person has', 'State that occupying this type of role entails this type of duty'],
      ['**Features → Category**', 'Characteristics or properties of something', 'A classification or label applied to it', 'State that these types of features qualify something for this type of category'],
      ['**Comparison → Choice**', 'Comparative evaluation of options', 'A recommendation to choose one option over another', 'State that this type of comparative advantage justifies this type of choice'],
    ]},

    { type: 'paragraph', text: "Once you classify the leap, you have a powerful prediction about the *type* of principle the correct answer will express. This is the foundation of your pre-phrase." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Abstract the Principle Needed (Pre-phrasing)' },
    { type: 'paragraph', text: "Before looking at the answer choices, formulate the general rule that the author must believe to make their argument work. This is the most important habit for Principle-Strengthen accuracy." },
    { type: 'paragraph', text: "To pre-phrase effectively, perform a **two-part abstraction:**" },
    { type: 'list', ordered: true, items: [
      '**Abstract the evidence:** Replace the specific facts with a general category. "The factory will pollute the river" → "A project causes environmental harm."',
      '**Abstract the conclusion:** Replace the specific judgment with a general rule. "The factory should not be built" → "The project should not be undertaken."',
      '**Combine:** "If a project causes environmental harm, then it should not be undertaken." This is your pre-phrase.',
    ]},

    { type: 'h4', text: 'Pre-phrase Templates by Leap Type' },
    { type: 'table', headers: ['Leap Type', 'Pre-phrase Template'], rows: [
      ['Fact → Value', '"If [this type of fact] is true, then [this type of value judgment] is warranted."'],
      ['Means → End', '"One should choose [this type of means] when it is the most effective way to achieve [this type of end]."'],
      ['Role → Duty', '"Anyone who occupies [this type of role] has an obligation to [this type of duty]."'],
      ['Features → Category', '"Anything that has [these types of features] qualifies as [this category]."'],
      ['Comparison → Choice', '"When [this type of option] is better than all alternatives, one should choose it."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Abstraction Check', text: "After formulating your pre-phrase, ask: \"Would this rule apply to cases *other* than the one in the stimulus?\" If yes, you have a good principle. If your pre-phrase mentions the specific names, places, or details from the stimulus, it is too narrow — abstract further. The correct answer to a Principle-Strengthen question is always broader than the argument it supports." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match the Answer' },
    { type: 'paragraph', text: "Scan the choices for the principle that best matches your pre-phrase. The correct answer will be a general, abstract statement that, when applied to the specific facts in the stimulus, makes the conclusion follow." },
    { type: 'paragraph', text: "To confirm your choice, apply this two-part verification:" },
    { type: 'list', ordered: true, items: [
      '**Plug in the specifics:** Take the general principle and substitute the specific facts from the stimulus back in. Does the conclusion follow?',
      '**Check the gap:** Does this principle address the *specific* logical leap you identified in Step 2? A principle that addresses a different gap — no matter how relevant-sounding — is wrong.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    { type: 'paragraph', text: "Wrong answers on Principle-Strengthen questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence." },
    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**The Contradiction**', 'A principle that justifies the *opposite* of the argument\'s conclusion. If applied, it would undermine, not support, the reasoning.', 'Check the direction: does this principle support or attack the conclusion? If it leads to the opposite judgment, eliminate immediately.'],
      ['**The Scope Shift**', 'A principle that sounds relevant but applies to a different agent (company vs. consumer), concept (punishment vs. legality), or situation (individual vs. government).', 'Compare the principle\'s subject to the argument\'s. If the principle addresses a different actor or a different dimension of the issue, it does not bridge the gap.'],
      ['**The Premise Restatement**', 'A choice that merely repeats or generalizes a premise without connecting it to the conclusion. It describes the "is" but doesn\'t justify the "ought."', 'Ask: "Does this choice connect the evidence to the conclusion, or does it just restate the evidence in more general terms?" If it only covers the premises, it is not a justifying principle.'],
      ['**The Mistaken Reversal**', 'A principle that gets the logical relationship backward. If the argument\'s logic is P → Q, this trap offers Q → P.', 'Diagram the direction. The principle must flow in the same direction as the argument: from the type of evidence to the type of conclusion, not backward.'],
      ['**The Partial Justification**', 'A principle that supports a minor part of the argument but fails to bridge the *main* logical leap to the final conclusion.', 'Ask: "Does this principle justify the main conclusion, or just an intermediate step?" If it only supports part of the reasoning, it is insufficient.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Principle-Strengthen question from start to finish." },

    { type: 'question-card',
      id: 'WE-12-2-001',
      questionType: 'Principle-Strengthen',
      difficulty: 'medium',
      stimulus: "A pharmaceutical company recently discovered that one of its widely used medications has a rare but serious side effect. The company's executives decided not to issue a public recall, reasoning that the side effect occurs in fewer than one in ten thousand patients and that a recall would cause widespread panic among the millions of people currently taking the medication. A consumer advocate argues that this decision was irresponsible.",
      question: "Which one of the following principles, if valid, most helps to justify the consumer advocate's position?",
      options: [
        "(A) Pharmaceutical companies should publicly disclose information about all known side effects of their products, regardless of how rarely those side effects occur. (Correct)",
        "(B) A company has a responsibility to maximize shareholder value while maintaining compliance with regulatory requirements.",
        "(C) The severity of a medication's side effects should be weighed against its therapeutic benefits before any recall decision is made.",
        "(D) Consumers who experience side effects from a medication should be entitled to compensation from the manufacturer.",
        "(E) Government regulatory agencies, not pharmaceutical companies, should make all decisions regarding product recalls.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Find the Conclusion:**\n• **Conclusion (Consumer Advocate):** The company\'s decision not to recall was irresponsible.\n• **Evidence:** The medication has a known serious side effect. The company chose not to disclose/recall because the side effect is rare and a recall would cause panic.\n• **Core Logic:** A company knows about a serious risk → company chose not to disclose → this was irresponsible.',
      '**Step 2 — Identify the Logical Leap:**\nThe evidence establishes that the company *knew* about a serious side effect and chose not to inform the public. The conclusion is that this was *irresponsible*. The leap is from **"chose not to disclose known risk information"** to **"acted irresponsibly."** This is a classic **Fact → Value** leap: moving from a factual description of the company\'s behavior to a moral evaluation of it. The argument assumes a principle about disclosure obligations.',
      '**Step 3 — Pre-phrase the Principle:**\n"If a company knows about a serious risk associated with its product, it has an obligation to disclose that risk to the public, regardless of how rare the risk is." This principle, if valid, would make the company\'s non-disclosure irresponsible by definition.',
      '**Step 4 — Match the Answer:**\nScan for the choice that matches our pre-phrase about disclosure obligations. Choice (A) directly states this: companies should disclose all known side effects regardless of rarity. This is the principle that bridges "knew about risk + didn\'t disclose" → "acted irresponsibly."',
    ]},

    { type: 'h3', text: 'Answer Choice Analysis' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Pharmaceutical companies should publicly disclose information about all known side effects of their products, regardless of how rarely those side effects occur.', text: 'This directly addresses the logical leap. The company knew about a side effect and chose not to disclose it because it was rare. This principle states that rarity is irrelevant — disclosure is required for *all* known side effects. Under this principle, the company\'s decision violated a clear obligation, making the advocate\'s charge of irresponsibility fully justified.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) A company has a responsibility to maximize shareholder value while maintaining compliance with regulatory requirements.', text: 'This principle supports the *company\'s* position, not the consumer advocate\'s. If the company\'s obligation is to maximize shareholder value (which might favor avoiding a panic-inducing recall) while merely complying with regulations, this could actually justify the non-recall. It is a **Contradiction** trap — it supports the wrong side.', badge: 'Contradiction', badgeColor: 'red' },
      { title: '(C) The severity of a medication\'s side effects should be weighed against its therapeutic benefits before any recall decision is made.', text: 'This introduces a cost-benefit framework that the consumer advocate\'s argument does not use. The advocate\'s position is that non-disclosure was irresponsible *per se* — not that the company failed to weigh costs and benefits properly. This principle addresses a different analytical framework.', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(D) Consumers who experience side effects from a medication should be entitled to compensation from the manufacturer.', text: 'This is about *compensation after harm*, not about *disclosure before harm*. The advocate\'s argument is about the company\'s responsibility to inform, not about what happens after someone is harmed. This principle addresses a downstream consequence, not the upstream obligation.', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(E) Government regulatory agencies, not pharmaceutical companies, should make all decisions regarding product recalls.', text: 'This principle shifts the locus of responsibility from the company to the government. If the government should make recall decisions, then the company\'s decision not to recall is not necessarily irresponsible — it might simply be outside their proper authority. This could actually *undermine* the advocate\'s position.', badge: 'Contradiction', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**The 4-Step Method gives you a reliable, repeatable process:** Find the Conclusion → Identify the Leap → Abstract the Principle → Match the Answer.\n\n**Pre-phrasing is your most powerful tool.** The correct answer to a Principle-Strengthen question is almost always predictable once you identify the logical leap and abstract it into a general rule. Students who pre-phrase before reading the choices are faster and more accurate than those who evaluate each choice from scratch.\n\n**Classify the leap type.** Is the argument moving from Fact → Value? Means → End? Role → Duty? Features → Category? Comparison → Choice? The leap type tells you what kind of principle to look for.\n\n**Wrong answers fail in predictable ways.** Contradictions support the wrong side. Scope shifts address a different agent or concept. Premise restatements just echo the evidence. Reversals get the logic backward. Partial justifications only support a minor step. Knowing these traps lets you eliminate quickly.\n\n**Always verify by plugging in the specifics.** Take the general principle, substitute the stimulus facts back in, and confirm that the conclusion follows. If the principle does not bridge the specific gap you identified, it is wrong — no matter how reasonable it sounds in isolation." },
  ]
};
