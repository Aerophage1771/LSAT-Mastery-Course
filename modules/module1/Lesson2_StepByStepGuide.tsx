import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "1-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 5-Step Method for Argument Part Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Argument Part question. Each step includes concrete examples, tips for when the step gets tricky, and a callout with a key insight. At the end, you will work through a full example applying all five steps to a single question." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "You should spend roughly **1 minute and 25 seconds** per Argument Part question. The 5-step method may feel slow at first, but with practice it becomes automatic. Timed drilling is the fastest way to internalize the process." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 5-Step Method', steps: [
      '**Step 1 — Find the Target:** Read the question stem and locate the exact sentence being asked about.',
      '**Step 2 — Analyze & Hypothesize:** Read the full stimulus, forming a hypothesis about each statement\'s role.',
      '**Step 3 — Map the Structure:** Use indicator words and the Why Test to confirm the argument\'s flow of support.',
      '**Step 4 — Pinpoint & Prephrase:** Name the target statement\'s role in your own words before looking at answers.',
      '**Step 5 — Evaluate Choices:** Match your prephrase to the abstract language in the answer choices.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Find the Target Statement' },
    { type: 'paragraph', text: "Before reading the stimulus, read the question stem. It will quote or paraphrase a specific sentence and ask you to identify its role. Your only job in this step is to know **exactly which sentence** you need to analyze." },

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"The claim that increased carbon emissions are unlikely to be the sole cause of recent temperature changes plays which one of the following roles in the argument?"' },
    { type: 'paragraph', text: "The target is the sentence about carbon emissions. Before reading the stimulus, you already know what to look for. When you find it, mentally bracket it." },

    { type: 'callout', variant: 'tip', title: 'Tip: Read the Question First', text: "Always read the question stem **before** the stimulus. This gives you a lens to read through. You will naturally focus on the target sentence and its relationship to the rest of the argument, instead of reading passively." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Sometimes the question stem paraphrases the target rather than quoting it directly. In these cases, look for the sentence in the stimulus that conveys the same meaning, even if the wording differs. Focus on the **idea**, not the exact words." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Analyze the Statements & Spot Potential Roles' },
    { type: 'paragraph', text: "Now read the entire stimulus. As you read each sentence, translate academic language into simple terms and form a quick hypothesis about its role. You are not yet confirming anything — just tagging each sentence with a tentative label." },

    { type: 'h4', text: 'Hypothesis Tags' },
    { type: 'table', headers: ['If a statement looks like...', 'Tag it as...', 'Signal Words'], rows: [
      ['A verifiable fact, study result, or observation', '**Likely Premise**', '*because, since, for, after all, given that*'],
      ['A recommendation, judgment, or prediction', '**Likely Conclusion**', '*therefore, thus, so, hence, should*'],
      ['An undisputed fact setting the scene', '**Likely Background**', '*It is well known that, Historically*'],
      ['A view attributed to others', '**Likely Opposing View**', '*Some argue, Critics claim, Many believe*'],
      ['An acknowledgment of a counterpoint', '**Likely Concession**', '*Although, While it is true, Granted*'],
    ]},

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Vitamin D deficiency is widespread in northern climates. Recent studies have shown that supplementation reduces fracture risk by 20%. Therefore, public health agencies should recommend routine supplementation for adults over 50."' },
    { type: 'paragraph', text: "Quick hypothesis tags:" },
    { type: 'breakdown', labels: { title: 'Sentence', text: 'Hypothesis' }, items: [
      { title: '"Vitamin D deficiency is widespread..."', text: 'Presents an undisputed fact. **Tag: Likely Background.**', badge: 'Background', badgeColor: 'slate' },
      { title: '"Recent studies have shown..."', text: 'Presents a study result as evidence. **Tag: Likely Premise.**', badge: 'Premise', badgeColor: 'slate' },
      { title: '"Therefore, public health agencies should..."', text: 'A recommendation introduced by "Therefore." **Tag: Likely Conclusion.**', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Translate, Don\'t Memorize', text: "Don't try to memorize the stimulus. Instead, translate each sentence into simple terms as you read. \"Recent studies have shown that supplementation reduces fracture risk by 20%\" becomes \"supplements help prevent fractures.\" This makes the argument's logic transparent." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some sentences contain no indicator words at all. When this happens, focus on the **content** rather than the language. Ask: \"Is this a fact the author is presenting, or a claim the author is arguing for?\" Facts are typically premises; claims requiring justification are typically conclusions." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Map the Argument\'s Structure' },
    { type: 'paragraph', text: "Now confirm your hypotheses by tracing the flow of support. Use two key tools: **indicator words** and **the Why Test**." },

    { type: 'h4', text: 'Tool 1: Indicator Words' },
    { type: 'paragraph', text: "Indicator words are your most reliable structural signals. Conclusion indicators (*therefore, thus, so*) point to the claim being supported. Premise indicators (*because, since, for*) point to the evidence doing the supporting." },

    { type: 'h4', text: 'Tool 2: The Why Test' },
    { type: 'paragraph', text: "Ask \"Why?\" of your candidate conclusion. If the other statements answer the question, you have confirmed the conclusion. If asking \"Why?\" of a statement produces no answer from the argument, it is a premise." },

    { type: 'process', title: 'Mapping Process', steps: [
      '**Isolate the Main Conclusion:** Find the one claim that all evidence ultimately points to. It receives support but does not support anything else.',
      '**Check for Intermediate Conclusions:** A statement that receives support but also gives support to another claim is an Intermediate Conclusion. It sits in the middle of the support chain.',
      '**Apply the Why Test:** Ask "Why?" of your candidate Main Conclusion. The premises should answer. Ask "Why?" of each premise — the argument should provide no answer.',
      '**Confirm the direction of support:** Draw an arrow from each premise toward what it supports. All arrows should eventually point to the Main Conclusion.',
    ]},

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"Because traffic accidents increase by 15% during heavy rain, and because most commuters lack adequate wet-weather driving skills, cities with high rainfall should invest in public transit infrastructure."' },
    { type: 'paragraph', text: "Mapping the structure:" },
    { type: 'process', title: 'Support Flow', steps: [
      '**Premise 1:** Traffic accidents increase by 15% during heavy rain.',
      '**Premise 2:** Most commuters lack adequate wet-weather driving skills.',
      '**Main Conclusion:** Cities with high rainfall should invest in public transit.',
    ]},
    { type: 'paragraph', text: "Both premise indicators (\"Because\") introduce facts that support the recommendation (the conclusion). The Why Test confirms: \"Why should cities invest in public transit?\" — \"Because accidents increase and drivers lack wet-weather skills.\"" },

    { type: 'callout', variant: 'tip', title: 'Tip: Watch for Hidden Intermediate Conclusions', text: "If a statement is supported by a \"because\" clause but then itself supports a final claim, it is an Intermediate Conclusion, not a premise. These are the most commonly misidentified role. Always check whether a \"premise\" also gives support to something beyond the Main Conclusion." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "In complex arguments, the conclusion may not have an explicit indicator word. It may be buried in the middle of the stimulus, or it may appear as the very first sentence. **Position does not determine role.** Only the flow of support determines role. Use the Why Test to confirm, regardless of position." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Pinpoint the Role & Prephrase' },
    { type: 'paragraph', text: "Locate the target statement within your argument map and describe its function **in your own words** before looking at the answer choices. This is called \"prephrasing\" and it is the most important habit you can build." },

    { type: 'h4', text: 'How to Prephrase' },
    { type: 'paragraph', text: "Your prephrase should name the role and describe the relationship. Be specific. Don't just say \"premise\" — say \"a premise that supports the intermediate conclusion about X.\" The more specific your prephrase, the faster and more accurately you will evaluate answer choices." },

    { type: 'h4', text: 'Prephrase Examples' },
    { type: 'table', headers: ['Situation', 'Weak Prephrase', 'Strong Prephrase'], rows: [
      ['Target supports the conclusion', '"It\'s a premise."', '"It\'s a premise that provides evidence for the claim that cities should invest in transit."'],
      ['Target is supported AND supports', '"It\'s in the middle."', '"It\'s an intermediate conclusion supported by the study data, and it supports the main recommendation."'],
      ['Target is a view the author argues against', '"It\'s not the author\'s view."', '"It\'s an opposing viewpoint that the author\'s argument is designed to challenge."'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Prephrase Before Looking at Answers', text: "If you cannot name the target's role without the answer choices, you will be vulnerable to trap answers. The answer choices are designed to sound plausible. Prephrasing protects you by giving you a benchmark to compare against." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some roles are harder to prephrase because they don't fit neatly into a single category. For example, a statement might provide background information that also functions as a premise for an intermediate conclusion. In these cases, describe the relationship as precisely as you can: \"It provides factual context that the author uses as a basis for the claim that...\"" },

    { type: 'hr' },

    { type: 'h2', text: 'Step 5: Evaluate Answer Choices' },
    { type: 'paragraph', text: "Scan the five answer choices for the one that matches your prephrase. LSAT answer choices describe roles in abstract, formal language, so you need to translate each choice into plain English and compare it to your prephrase." },

    { type: 'h4', text: 'The Two-Part Check' },
    { type: 'paragraph', text: "Every Argument Part answer choice has two components. Both must be correct for the answer to be right:" },
    { type: 'breakdown', labels: { title: 'Component', text: 'What to Verify' }, items: [
      { title: '1. The Role Label', text: 'Does the answer correctly identify the **type** of role? (premise, conclusion, opposing viewpoint, etc.) If the answer says "supports" but the target is the conclusion, the role is wrong.', badge: 'Check 1', badgeColor: 'indigo' },
      { title: '2. The Relationship Description', text: 'Does the answer correctly describe the **specific relationship**? If the answer says "supports the claim that [X]," verify that the target actually supports *that specific claim*. A correct role label with an inaccurate description is still a wrong answer.', badge: 'Check 2', badgeColor: 'blue' },
    ]},

    { type: 'h4', text: 'Translating Abstract Language' },
    { type: 'table', headers: ['Abstract Phrasing', 'Plain English'], rows: [
      ['"A claim that the argument as a whole is designed to establish"', 'Main Conclusion'],
      ['"A view that other statements in the argument are intended to support"', 'Main Conclusion'],
      ['"Evidence offered in support of the argument\'s main claim"', 'Premise'],
      ['"An intermediate conclusion drawn to support the main conclusion"', 'Intermediate Conclusion'],
      ['"A position that the argument calls into question"', 'Opposing Viewpoint'],
      ['"A point that is granted in order to argue for a different claim"', 'Concession'],
      ['"Background information used to set up the argument"', 'Context'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Eliminate, Then Confirm', text: "Start by eliminating answers that fail the Role Label check (Check 1). This usually removes 2–3 choices quickly. Then apply the Relationship Description check (Check 2) to the remaining candidates. This two-pass approach saves time." },

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "The hardest answers are ones where the role label is correct but the relationship description is subtly wrong. For example, an answer might correctly call the target a \"premise\" but say it supports the wrong claim. Always verify the specific nouns and relationships described in the answer choice against the argument." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all five steps to a single Argument Part question from start to finish." },

    { type: 'question-card',
      id: 'WE-1-2-001',
      questionType: 'Argument Part',
      difficulty: 'medium',
      stimulus: "Film critic: The claim that smartphones have reduced moviegoing is overstated. While it is true that theater attendance has declined since 2015, this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%. Audiences are not avoiding theaters because of their phones; they are avoiding theaters because the experience has become prohibitively expensive. Studios should therefore focus on pricing reform rather than competing with streaming platforms.",
      question: "The claim that theater attendance has declined since 2015 plays which one of the following roles in the film critic's argument?",
      options: [
        "(A) It is the main conclusion that the rest of the argument is designed to support.",
        "(B) It is evidence offered to support the claim that smartphones have reduced moviegoing.",
        "(C) It is a point that is granted in order to argue for a different conclusion. (Correct)",
        "(D) It is an intermediate conclusion that is used to support the main conclusion.",
        "(E) It is a claim that the argument is designed to call into question.",
      ],
    },

    { type: 'h3', text: 'Applying the 5-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Find the Target:** The question asks about "the claim that theater attendance has declined since 2015." Locate this in the stimulus: it appears in the second sentence, after "While it is true that..."',
      '**Step 2 — Analyze & Hypothesize:** Read each sentence and tag it:\n• "The claim that smartphones have reduced moviegoing is overstated." → Likely the Main Conclusion (a judgment).\n• "While it is true that theater attendance has declined since 2015..." → Introduced by "While it is true that" — a classic concession indicator. Tag: Likely Concession.\n• "...this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%." → A factual claim providing an alternative explanation. Tag: Likely Premise.\n• "Audiences are not avoiding theaters because of their phones..." → Restates the main claim. Tag: Likely Conclusion (restatement).\n• "Studios should therefore focus on pricing reform..." → A recommendation introduced by "therefore." Tag: Likely Conclusion or Sub-Conclusion.',
      '**Step 3 — Map the Structure:** The Main Conclusion is that smartphones\' impact on moviegoing is overstated. The "therefore" recommendation about pricing reform is a subsidiary/further conclusion. The ticket price data is the key premise. The target sentence ("attendance has declined") is introduced by "While it is true that..." — the author grants this point but then pivots to argue that the cause is prices, not phones. The target is a concession.',
      '**Step 4 — Pinpoint & Prephrase:** The target is a point the author **concedes** — the author admits attendance has declined, but argues this doesn\'t support the smartphone claim. Prephrase: "It is a point the author grants to the other side, which the author then argues is explained by a different cause."',
      '**Step 5 — Evaluate Choices:** Scan for the answer matching our prephrase — a concession. Choice (C): "a point that is granted in order to argue for a different conclusion" matches perfectly. The author grants the decline, then argues the cause is pricing, not smartphones.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) It is the main conclusion that the rest of the argument is designed to support.', text: 'The main conclusion is that smartphones\' impact is overstated. The target (attendance declined) is not the final point — it is an admitted fact the author uses as a springboard. **Fails the Role Label check.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) It is evidence offered to support the claim that smartphones have reduced moviegoing.', text: 'The target could look like evidence, but it does not support the smartphone claim — the author is arguing *against* that claim. The direction is wrong and the relationship is wrong. **Fails both checks.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) It is a point that is granted in order to argue for a different conclusion.', text: '"Granted" matches the concession role. "In order to argue for a different conclusion" matches the author\'s move: admitting decline, then arguing the cause is pricing. **Passes both checks.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) It is an intermediate conclusion that is used to support the main conclusion.', text: 'An intermediate conclusion must be both supported by evidence AND support the main conclusion. The target is not supported by any evidence in the argument — it is simply admitted as true. **Fails the Role Label check.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) It is a claim that the argument is designed to call into question.', text: 'The author does not dispute that attendance has declined. The author concedes this fact. What the author disputes is the *cause* of the decline (phones vs. prices). **Fails the Relationship Description check.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'When the Method Gets Hard' },
    { type: 'paragraph', text: "Not every argument is a clean three-sentence chain. Here are the most common complications and how to handle them." },

    { type: 'breakdown', labels: { title: 'Complication', text: 'Strategy' }, items: [
      { title: 'No indicator words anywhere', text: 'Rely entirely on the Why Test and content analysis. Ask: "Which statement is the author trying to convince me of?" That is the conclusion. Everything else supports it.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Multiple conclusions', text: 'One is the Main Conclusion; the other(s) are Intermediate Conclusions. The Main Conclusion is the one that receives support but does not support any other claim. Use the Why Test on each candidate.', badge: 'Common', badgeColor: 'blue' },
      { title: 'The conclusion appears first', text: 'Position does not determine role. The first sentence can be the conclusion, with all subsequent sentences providing support. Watch for "after all" or "for" in later sentences — these signal premises that support an earlier claim.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Two speakers or viewpoints', text: 'Track attribution carefully. Phrases like "some argue" or "critics claim" introduce the opposing view. The author\'s view will follow a pivot word like "but" or "however." The target could belong to either voice.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Very long stimulus (5+ sentences)', text: 'Focus on the extremes: the Main Conclusion and the premises. Background and context are important for understanding but rarely change the structural relationships. Map the core chain first, then situate the target.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "The 5-Step Method gives you a repeatable process: **Find → Analyze → Map → Prephrase → Evaluate.**\n\nPrephrasing is the single most important habit. If you can name the role before reading the answers, your accuracy will increase dramatically.\n\nEvery answer choice has two parts: the **role label** and the **relationship description**. Both must be correct.\n\nWhen in doubt, apply the Why Test. It is the most reliable structural tool you have." },
  ]
};
