import { Lesson } from '../../types';

export const Lesson7_ReferenceGuide: Lesson = {
  id: "12-7",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Principle-Strengthen \u2014 Complete Reference Guide' },
    { type: 'paragraph', text: "This reference guide consolidates everything you've learned about Principle-Strengthen questions into a single resource. Use it for quick review before practice sets, for pattern identification during drilling, and as a final refresher before test day." },

    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'paragraph', text: "Use this systematic approach for every Principle-Strengthen question:" },
    { type: 'process', title: 'Principle-Strengthen \u2014 4 Steps', steps: [
      '**Step 1 \u2014 Find the Conclusion:** Read the stimulus, isolate the author\'s main claim, and identify the evidence supporting it. Pay close attention to the *nature* of the conclusion: is it a value judgment, recommendation, classification, or assignment of blame? The type of conclusion tells you what type of principle you need.',
      '**Step 2 \u2014 Identify the Logical Leap:** Find the gap between the evidence and the conclusion. Ask: "What type of reasoning connects these specific facts to that specific judgment?" Classify the leap: Fact \u2192 Value? Comparison \u2192 Choice? Role \u2192 Duty? Features \u2192 Category? The leap type predicts the principle type.',
      '**Step 3 \u2014 Abstract the Principle (Pre-phrase):** Generalize the gap into a broad, universal rule. Replace the specific facts with general categories and the specific judgment with a general rule. Ask: "Would this rule apply to cases other than the one in the stimulus?" If yes, you have a good principle.',
      '**Step 4 \u2014 Match the Answer:** Scan the choices for the principle that best matches your pre-phrase. Verify by plugging the stimulus facts back into the general principle \u2014 does the conclusion follow? Does the principle address the *specific* logical leap you identified in Step 2?',
    ]},
    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 20 seconds** per Principle-Strengthen question. Steps 1\u20133 (reading, gap-finding, and pre-phrasing) should take about 45 seconds combined. Step 4 (evaluating and eliminating choices) should take about 35 seconds. The pre-phrase is critical \u2014 students who scan the answer choices without one waste time re-reading the stimulus for each option." },

    { type: 'hr' },

    { type: 'h3', text: 'Complete Principle Types Table' },
    { type: 'paragraph', text: "Below is a comprehensive table of all five principle types covered in this module. For each type, the table shows the core gap structure, how to recognize it, and what the correct answer typically looks like." },
    { type: 'table', headers: ['Principle Type', 'Core Gap', 'Recognition Signal', 'Correct Answer Template'], rows: [
      [
        '**Normative Bridge**',
        'Evidence is descriptive (facts); conclusion is prescriptive (value judgment)',
        'Premises state what *is*; conclusion states what *should be* or what is *wrong/right*',
        '"If [this type of fact] is true, then [this type of value judgment] is warranted."',
      ],
      [
        '**Efficiency Principle**',
        'Evidence compares two options with equal outcomes but different costs; conclusion recommends the cheaper option',
        '"No worse than," "no better than," "equally effective" + a cost difference; conclusion recommends avoiding the expensive option',
        '"One should not choose a more expensive option when an equally effective, less expensive alternative exists."',
      ],
      [
        '**Accountability Principle**',
        'Evidence describes a person\'s role and actions/knowledge; conclusion assigns blame or responsibility',
        'A professional role is identified; a defense (ignorance, good intentions) is offered and rejected; blame is assigned',
        '"Anyone in [role] who fails to [duty] regarding [accessible information] is blameworthy for [outcome]."',
      ],
      [
        '**Lesser of Two Evils**',
        'Both options have downsides; the author concedes one cost but argues the alternative is worse',
        '"Granted... Nonetheless" structure; concession followed by a hardline conclusion; two flawed systems compared',
        '"It is better to err on the side of [Error Type A] than to err on the side of [Error Type B]."',
      ],
      [
        '**Definitional Principle**',
        'Evidence describes features/characteristics; conclusion classifies something as belonging (or not) to a category',
        'The argument labels something ("counts as X," "qualifies as Y," "does not constitute Z") based on its properties',
        '"Anything that has [these features] qualifies as / does not qualify as [this category]."',
      ],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Principle-Strengthen vs. Regular Strengthen vs. Sufficient Assumption' },
    { type: 'paragraph', text: "These three question types all ask you to support an argument, but they require fundamentally different types of support. Confusing them is one of the most common errors students make." },
    { type: 'table', headers: ['Feature', 'Regular Strengthen', 'Principle-Strengthen', 'Sufficient Assumption'], rows: [
      ['**What you add**', 'A new **fact** \u2014 specific, concrete evidence', 'A general **rule** \u2014 abstract, universal principle', 'The exact **missing logical piece** that guarantees the conclusion'],
      ['**Scope**', 'Narrow \u2014 applies only to this argument', 'Broad \u2014 applies to this argument and many others', 'Precisely tailored \u2014 fills the exact gap'],
      ['**Degree of support**', 'Makes conclusion more likely but doesn\'t guarantee it', 'Makes reasoning more defensible but need not guarantee it', 'Makes conclusion 100% certain'],
      ['**Language clue**', '"most strengthens" / "most supports"', '"principle" / "generalization" / "justify" / "conforms to"', '"follows logically if assumed" / "enables the conclusion to be properly drawn"'],
      ['**Answer format**', 'A factual claim about the specific situation', 'A conditional or universal rule ("if...then" or "any X should Y")', 'A precisely scoped premise that closes the exact gap'],
      ['**How it works**', 'Adds evidence making the conclusion more probable', 'Provides the logical backbone connecting evidence to conclusion', 'Completes the argument so the conclusion is guaranteed'],
      ['**Analogy**', 'Presenting new evidence at trial', 'Citing a law from the statute book', 'Fitting the final piece into a jigsaw puzzle'],
      ['**Common trap**', 'Answer that weakens or is irrelevant', 'Answer that is too narrow/specific (restates a fact)', 'Answer that is necessary but not sufficient'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Abstraction Levels \u2014 How to Match the Generality of the Principle' },
    { type: 'paragraph', text: "One of the trickiest skills in Principle-Strengthen is getting the right level of abstraction. The correct principle must be general enough to be a *rule* but specific enough to *apply* to the argument. Here is a guide to calibrating your abstraction:" },

    { type: 'h4', text: 'The Abstraction Spectrum' },
    { type: 'table', headers: ['Level', 'Description', 'Example (for a factory pollution argument)', 'Verdict'], rows: [
      ['**Too Narrow**', 'Uses specific details from the stimulus; reads like a fact, not a rule', '"The proposed Riverdale factory should not be built because it will pollute the Cedar River."', '\u274C Restates the argument; not a principle'],
      ['**Just Right**', 'Replaces specifics with general categories; applies to this case and similar ones', '"Any project that will cause significant environmental damage should not be undertaken."', '\u2705 General rule that covers the specific case'],
      ['**Too Broad**', 'So abstract it could justify almost any conclusion; lacks meaningful connection to the argument', '"One should always act in a way that maximizes overall welfare."', '\u274C Too vague to bridge the specific gap'],
    ]},

    { type: 'h4', text: 'The Two-Part Abstraction Method' },
    { type: 'list', ordered: true, items: [
      '**Abstract the evidence:** Replace the specific facts with a general category.\n\u2022 "The factory will pollute the river" \u2192 "A project causes environmental harm"\n\u2022 "The biographer omitted public facts" \u2192 "A professional failed to account for accessible information"\n\u2022 "Cheap tools performed equally well" \u2192 "A less expensive option achieved the same result"',
      '**Abstract the conclusion:** Replace the specific judgment with a general rule.\n\u2022 "The factory should not be built" \u2192 "The project should not be undertaken"\n\u2022 "The biographer is blameworthy" \u2192 "The professional is accountable"\n\u2022 "Don\'t buy expensive tools" \u2192 "Don\'t choose the costly option"',
      '**Combine into a principle:** Connect the abstracted evidence to the abstracted conclusion.\n\u2022 "If a project causes environmental harm, it should not be undertaken."\n\u2022 "A professional who fails to account for accessible information is accountable."\n\u2022 "One should not choose a costly option when a cheaper equivalent exists."',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Abstraction Check', text: "After formulating your pre-phrase, ask two questions:\n\n**1. \"Would this rule apply to cases *other* than the one in the stimulus?\"** If yes, the principle is appropriately general. If your pre-phrase mentions specific names, places, or details from the stimulus, abstract further.\n\n**2. \"Does this rule, applied to the stimulus facts, produce the conclusion?\"** If yes, the principle bridges the gap. If the rule is so broad that it could justify almost any conclusion, it is too abstract \u2014 narrow the categories.\n\nThe sweet spot: a rule general enough to cover other similar cases, but specific enough that plugging in the stimulus facts yields the conclusion." },

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'paragraph', text: "Wrong answers on Principle-Strengthen questions fail in predictable ways. Memorize these traps to eliminate quickly and with confidence." },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works' }, items: [
      { title: '1. Too Narrow / Describes the Argument', text: "The answer merely restates or paraphrases the evidence or conclusion from the stimulus rather than providing a general rule. It reads like a specific fact about this case, not a universal principle.\n\n**How to spot:** Does the answer mention specific details from the stimulus (names, places, specific scenarios)? Could it apply to *any other* case? If it only describes what happened in the stimulus, it is not a principle.\n\n**Example:** Instead of \"Any project that causes environmental harm should not be undertaken,\" the trap says \"The Riverdale factory should not be built if it pollutes the Cedar River.\"", badge: 'Watch Out', badgeColor: 'red' },
      { title: '2. Too Broad / Vague', text: "The answer is so abstract and general that it could justify virtually any conclusion. It sounds like a truism or a platitude rather than a targeted principle.\n\n**How to spot:** Ask: \"Does this principle specifically address the gap in the argument?\" If it could justify a completely different conclusion on a completely different topic, it is too broad.\n\n**Example:** \"One should always act ethically\" \u2014 this is true but useless for bridging a specific gap.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '3. Wrong Direction / Reversal', text: "The answer gets the logical flow backward. If the argument flows from Act \u2192 Moral Judgment, the trap offers Moral Judgment \u2192 Act. The principle addresses the right concepts but in the wrong direction.\n\n**How to spot:** Diagram the logical direction. The principle must flow from the type of evidence to the type of conclusion, not in reverse. If the answer goes from conclusion-type to evidence-type, it is a reversal.\n\n**Example:** The argument: \"Using force is immoral \u2192 threatening force is immoral.\" The trap: \"Threatening force is immoral \u2192 using force is immoral.\" Same concepts, opposite direction.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '4. Addresses the Wrong Gap', text: "The answer is a legitimate principle that is topically related to the stimulus, but it bridges a *different* gap than the one in the argument. It sounds relevant but solves the wrong problem.\n\n**How to spot:** After identifying the specific gap (Step 2), check: does this principle connect the *evidence I identified* to the *conclusion I identified*? If it addresses a tangential concern or a different part of the argument, it is wrong.\n\n**Example:** An argument about whether to *fund* a project, but the principle addresses whether the project is *ethical* \u2014 related topic, wrong gap.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '5. Contradiction / Supports the Wrong Side', text: "The answer, if valid, would actually *undermine* the argument's conclusion rather than support it. These traps use the right vocabulary but arrive at the opposite verdict.\n\n**How to spot:** Apply the principle to the stimulus and check: does the conclusion still hold? If the principle supports the opposing viewpoint or exonerates the party the argument blames, it is a contradiction.\n\n**Example:** The argument blames a biographer for misleading readers. The trap says blame only applies when omission is deliberate \u2014 this would exonerate the biographer.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '6. The Topically-Relevant Trap', text: "The answer uses vocabulary and concepts that are closely related to the subject matter of the stimulus, making it *feel* like a match. But topical relevance is not logical relevance \u2014 the principle must address the *structure* of the argument, not merely its *subject*.\n\n**How to spot:** Ask: \"Am I attracted to this answer because it addresses the argument's logical gap, or because it uses similar words?\" Topical traps are especially dangerous on hard questions where the correct answer is abstract and the distractors are concrete.\n\n**Example:** An argument about motives in sentencing. The trap discusses psychological states in law \u2014 topically relevant to motives, but does not address the argument's specific gap (which type of sentencing error is worse).", badge: 'Watch Out', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Test Day Checklist' },
    { type: 'paragraph', text: "Use this quick-reference checklist during practice and on test day:" },
    { type: 'list', ordered: true, items: [
      '**Read the question stem first.** Confirm it\'s a Principle-Strengthen question. Look for: "principle," "generalization," "proposition" combined with "justify," "conforms to," "most helps to justify," or "established."',
      '**Find the conclusion.** Look for conclusion indicators: "therefore," "thus," "so," "consequently," "should," "must." Identify the *type* of conclusion: value judgment, recommendation, blame assignment, or classification.',
      '**Identify the logical leap.** Compare the nature of the evidence to the nature of the conclusion. Classify the gap: Fact \u2192 Value (Normative Bridge)? Comparison \u2192 Choice (Efficiency)? Role \u2192 Duty (Accountability)? Concession + trade-off (Lesser of Two Evils)? Features \u2192 Category (Definitional)?',
      '**Pre-phrase the principle.** Abstract the evidence and conclusion into general categories. Combine into a rule: "If [general evidence type], then [general conclusion type]." This is your prediction for the correct answer.',
      '**Scan for your pre-phrase.** Look for the answer choice that matches your general rule. The correct answer should be broader than the argument but specific enough to produce the conclusion when the stimulus facts are plugged in.',
      '**Verify with the plug-in test.** Take the general principle, substitute the specific stimulus facts, and confirm the conclusion follows. If it does, you have the right answer.',
      '**Check for traps.** Before confirming, ask: Is this answer too narrow (describes the argument)? Too broad (justifies anything)? A reversal (wrong direction)? A contradiction (supports the wrong side)? Topically relevant but logically irrelevant?',
      '**Confirm and move on.** If the principle bridges the specific gap you identified and produces the conclusion when the stimulus facts are applied, select it with confidence.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Final Review', text: "Principle-Strengthen questions test one core skill: identifying the unstated general rule that bridges an argument's logical gap. The author's conclusion relies on a principle they never explicitly state. Your job is to find it.\n\n**Remember the fundamentals:**\n\u2022 The correct answer is always more abstract and general than the argument itself \u2014 it replaces specific details with broad categories.\n\u2022 Identify the logical leap, then abstract it into a general rule. The gap between evidence and conclusion is the key.\n\u2022 Know the five principle types: Normative Bridge, Efficiency, Accountability, Lesser of Two Evils, and Definitional. Recognizing the pattern accelerates gap identification.\n\u2022 Distinguish Principle-Strengthen from Regular Strengthen (adds a fact) and Sufficient Assumption (adds the exact missing piece). The stem language always tells you which type.\n\u2022 Pre-phrase before reading choices. Students who pre-phrase are faster and more accurate.\n\u2022 Wrong answers fail in predictable ways: too narrow, too broad, wrong direction, wrong gap, contradiction, or topically-relevant trap.\n\nMaster the 4-step method, internalize the principle types, and practice pre-phrasing until it becomes automatic. Principle-Strengthen appears 1\u20132 times per scored section, and the abstraction skill it develops pays dividends across the entire Logical Reasoning domain." },
  ]
};
