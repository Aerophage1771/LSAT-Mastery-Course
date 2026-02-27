import { Lesson } from '../../types';

export const Lesson4_Drill_EfficiencyPrinciple: Lesson = {
  id: "12-4",
  title: "Drill: Strengthening with an Efficiency Principle (PT-112-S-1-Q-15)",
  content: [
    { type: 'h2', text: 'The Efficiency Principle' },
    { type: 'paragraph', text: "The Efficiency Principle addresses arguments about choosing the most cost-effective or practical means to achieve a goal. These arguments observe that two options produce equal results, then conclude that the cheaper or simpler option should be preferred — or, equivalently, that the expensive option should be avoided. The unstated rule is one of economic rationality: **don't pay more for the same outcome.**" },
    { type: 'paragraph', text: "This is a distinct principle type because the gap is not between facts and values (like the Normative Bridge) but between a **comparative observation** and a **practical recommendation**. The evidence establishes equal effectiveness; the conclusion prescribes a purchasing or strategy decision. Without a principle that formalizes the connection between cost, effectiveness, and choice, the leap from observation to recommendation is unjustified." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot an Efficiency Principle Gap' },
    { type: 'paragraph', text: "Use this diagnostic:" },
    { type: 'list', items: [
      '**Check the premises:** Do they present a comparison of two options, showing that one is cheaper/simpler but produces equal or better results? ("Option A costs less than Option B," "Both methods achieved similar outcomes.")',
      '**Check the conclusion:** Does it recommend choosing the cheaper option, or avoiding the expensive one? ("One should not purchase X," "It is better to use Y.")',
      '**If YES to both:** The argument has an efficiency gap. The correct principle will state a rule for when cost considerations should drive the decision — typically: "Do not choose the expensive option when a cheaper equally-effective alternative exists."',
    ]},
    { type: 'callout', variant: 'default', title: 'The Efficiency Template', text: "**Evidence (COMPARISON):** \"Option A and Option B produce equal results, but A costs more.\"\n\n**Conclusion (RECOMMENDATION):** \"One should not choose Option A.\"\n\n**Missing Principle:** \"One should not choose a more expensive option when an equally effective, less expensive alternative exists.\"\n\nThe principle converts a factual comparison into a prescriptive rule. Without it, the observation that two things perform equally says nothing about which one you *should* pick." },

    { type: 'h4', text: 'Common Efficiency Principle Variations' },
    { type: 'table', headers: ['Evidence Pattern', 'Conclusion Pattern', 'Principle Bridges From → To'], rows: [
      ['Expensive tool = cheap tool in results', 'Don\'t buy the expensive tool', 'Equal outcomes + cost difference → Prefer the cheaper option'],
      ['Complex method has no advantage over simple method', 'Use the simple method', 'No marginal benefit → Reject unnecessary complexity'],
      ['High-cost intervention produces same outcome as low-cost one', 'The high-cost intervention is not justified', 'No superior effectiveness → Cost is unjustified'],
      ['New technology performs no better than old technology', 'Don\'t adopt the new technology', 'No performance gain → Reject unnecessary upgrade'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Efficiency Principle (PT-112-S-1-Q-15)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Let's dissect the argument layer by layer, identifying each logical move." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"In one study, engineering students who prepared for an exam by using toothpicks and string did no worse than similar students who prepared by using an expensive computer with sophisticated graphics."', text: "This is the first piece of evidence. It presents a scenario where a cheap, low-tech tool (toothpicks and string) was just as effective as an expensive, high-tech one (computer with graphics). The key phrase is \"did no worse than\" — it establishes equal outcomes despite vastly different costs." },
      { title: '"In another study, military personnel who trained on a costly high-tech simulator performed no better on a practical exam than did similar personnel who trained using an inexpensive cardboard model."', text: "This is the second piece of evidence. It provides a parallel example from a completely different context (military training), again showing that the costly tool was no more effective than the cheap one. \"Performed no better\" mirrors the first study's finding: equal outcomes, unequal costs. The two studies together establish a pattern." },
      { title: '"So one should not always purchase technologically advanced educational tools."', text: "This is the conclusion. The word \"So\" signals the logical leap. Based on the two parallel examples, the author makes a general recommendation about purchasing decisions. Note the careful qualifier \"not always\" — the conclusion is not that expensive tools are *never* justified, only that they are not *always* justified." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Logical Leap' },
    { type: 'paragraph', text: "The argument establishes a clear chain:" },
    { type: 'list', ordered: true, items: [
      'Cheap tools produced equal results to expensive tools in Study 1 (Premise)',
      'Cheap tools produced equal results to expensive tools in Study 2 (Premise)',
      '**Therefore: One should not always purchase expensive tools (CONCLUSION — this is the leap)**',
    ]},
    { type: 'paragraph', text: "The premises are purely descriptive — they tell us what *is* (equal outcomes). The conclusion is prescriptive — it tells us what one *should* do (avoid expensive tools when cheaper alternatives exist). The argument implicitly assumes a principle of economic efficiency: that it is a mistake to pay more for something if a less expensive option achieves the same result. Without this rule, the observation that \"expensive = cheap in outcomes\" says nothing about what anyone *should* purchase." },
    { type: 'callout', variant: 'default', title: 'Classifying the Gap', text: "This is a **Comparison → Choice** gap. The evidence presents a comparative observation (equal outcomes at different costs), and the conclusion makes a purchasing recommendation. The bridge needed is an efficiency principle: a rule stating that when a cheaper alternative is equally effective, one should not pay more." },

    { type: 'h4', text: 'Step 3: Pre-phrase the Principle' },
    { type: 'paragraph', text: "The argument needs a general rule that converts a cost-effectiveness comparison into a decision-making prescription. In abstract terms:" },
    { type: 'paragraph', text: "***\"One should not invest in an expensive option when a less expensive, equally effective alternative exists.\"***" },
    { type: 'paragraph', text: "This principle, if valid, closes the gap perfectly: both studies show a cheaper, equally effective alternative *does* exist, so under this rule, the expensive purchase is not justified — supporting the conclusion that one should not *always* buy the expensive tool." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "Armed with our pre-phrase, let's evaluate each answer choice systematically." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) One should use different educational tools to teach engineering to civilians than are used to train military personnel.', text: "The argument uses the two groups as similar, *parallel* examples to make a single point — both studies reinforce the same finding. This answer tries to *differentiate* the two groups, which contradicts the argument's strategy. The author treats the engineering and military contexts as interchangeable evidence for the same principle, not as groups requiring different tools.\n\n**Why it fails:** It addresses an irrelevant distinction. The gap is about cost vs. effectiveness, not about civilian vs. military differences.", badge: 'Irrelevant Distinction', badgeColor: 'red' },
      { title: '(B) High-tech solutions to modern problems are ineffective unless implemented by knowledgeable personnel.', text: "The stimulus never claims the high-tech tools were \"ineffective.\" Both studies found that the high-tech tools performed *equally well* as the cheap alternatives — they worked fine, they just didn't work *better*. This answer introduces a new condition (knowledgeable personnel) that is never discussed in the stimulus.\n\n**Why it fails:** It mischaracterizes the evidence and introduces an out-of-scope concept.", badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(C) Spending large sums of money on educational tools is at least as justified for nonmilitary training as it is for military training.', text: "This compares the *justification for spending* between two groups. But the argument's conclusion is not about which group deserves more funding — it is a general rule about when to avoid spending altogether. This answer addresses a fairness question (military vs. civilian funding) when the argument asks a cost-effectiveness question.\n\n**Why it fails:** It addresses the wrong comparative dimension. The argument compares cheap vs. expensive, not civilian vs. military.", badge: 'Wrong Comparison', badgeColor: 'red' },
      { title: '(D) One should not invest in expensive teaching aids unless there are no other tools that are less expensive and at least as effective.', text: "This matches our pre-phrase almost exactly. It sets a necessary condition for justifying an expensive purchase: the absence of a cheaper, equally good alternative. The stimulus provides two examples where this condition was *not* met — a cheaper, equally effective alternative *did* exist in both cases. Under this principle, the expensive purchases were unjustified, directly supporting the conclusion that one should not *always* buy the expensive option.\n\nNotice the conditional structure: \"do not invest... unless...\" — this is the classic efficiency rule form.", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) One should always provide students with a variety of educational materials so that each student can find the materials that best suit that student\u2019s learning style.', text: "The argument is about choosing between an expensive and an inexpensive version of a tool based on cost-effectiveness. This answer is about providing a *variety* of different tools to accommodate different *learning styles* — an entirely different educational philosophy. The argument never discusses learning styles, variety, or individual preferences.\n\n**Why it fails:** It introduces an unrelated pedagogical concern. The gap is about cost efficiency, not learning style accommodation.", badge: 'Out of Scope', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Bridge Comparison → Choice?'], rows: [
      ['(A)', 'Civilian vs. military tool differences', 'No — irrelevant distinction'],
      ['(B)', 'Effectiveness conditioned on knowledgeable personnel', 'No — mischaracterizes the evidence'],
      ['(C)', 'Fairness of spending between groups', 'No — wrong comparative dimension'],
      ['**(D)**', '**Cost-effectiveness rule for purchasing decisions**', '**Yes — bridges the gap directly \u2713**'],
      ['(E)', 'Learning style variety', 'No — introduces unrelated concept'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Efficiency Principles bridge from equal-outcome comparisons to purchasing recommendations.** When evidence shows that a cheaper option performs just as well as an expensive one, the strengthening principle must state the rule that makes cost considerations decisive. The form is typically conditional: \"Do not do X unless Y is true,\" where Y is the absence of a cheaper equivalent.\n\n**2. Watch for answers that address the wrong comparison.** The argument compares cheap vs. expensive tools; wrong answers often shift to a different comparison (civilian vs. military, one learning style vs. another). Always check: does the principle's comparison match the argument's comparison?\n\n**3. \"No worse than\" and \"no better than\" are equal-outcome signals.** These phrases establish that two options produce the same result. Whenever you see this language, the argument is likely setting up an efficiency-based conclusion.\n\n**4. The correct answer often uses conditional language.** Phrases like \"should not... unless,\" \"only when,\" or \"only if\" are characteristic of efficiency principles. They set a necessary condition for justifying the more expensive choice.\n\n**5. Pre-phrasing is especially powerful for efficiency arguments.** Because the structure is so predictable (equal outcomes + cost difference → don't pay more), you can almost always pre-phrase the principle before reading the choices. This lets you identify the correct answer quickly and reject distractors with confidence." },
  ]
};
