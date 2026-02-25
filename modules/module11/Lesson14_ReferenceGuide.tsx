import { Lesson } from '../../types';

export const Lesson14_ReferenceGuide: Lesson = {
  id: "11-14",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Necessary Assumption — Complete Reference Guide' },
    { type: 'paragraph', text: "This reference guide consolidates everything you've learned about Necessary Assumption (NA) questions into a single resource. Use it for quick review before practice sets, for pattern identification during drilling, and as a final refresher before test day." },

    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'paragraph', text: "Use this systematic approach for every NA question:" },
    { type: 'process', title: 'Necessary Assumption — 4 Steps', steps: [
      '**Break Down the Argument.** Identify the conclusion, the premises, and any sub-conclusions. Pay careful attention to the specific terms used in each — shifts in terminology between the premise and conclusion often reveal the gap.',
      '**Identify the Gap.** Compare the scope, terms, and concepts in the evidence to those in the conclusion. Where does the author make a logical leap? What does the author take for granted? The gap is the unstated connection that holds the argument together.',
      '**Pre-phrase the Assumption.** Before looking at the answer choices, articulate what the author must believe. The assumption should bridge the specific gap you identified — it should be necessary for the conclusion to have any chance of being true.',
      '**Evaluate with the Negation Test.** Negate each answer choice. If the negation destroys the argument (makes the conclusion unsupportable), that choice is the necessary assumption. If the argument survives the negation, the choice is wrong.',
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Negation Test — Step-by-Step Reference' },
    { type: 'paragraph', text: "The Negation Test is the single most reliable tool for confirming a Necessary Assumption answer. Here is how to apply it precisely:" },
    { type: 'list', ordered: true, items: [
      '**Take the answer choice** and negate it logically. Turn \"all\" into \"not all\" (not \"none\"). Turn \"some\" into \"none.\" Turn \"cannot\" into \"can.\" Turn \"less likely\" into \"not less likely\" (i.e., equally or more likely).',
      '**Insert the negated statement** into the argument as if it were a new premise.',
      '**Ask: Does the argument still work?** If the negated statement makes the conclusion impossible or unsupportable, the original answer is a necessary assumption. If the argument can survive the negated statement, the original answer is not necessary.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Common Negation Mistakes', text: "**\"All\" negates to \"not all\" — NOT to \"none.\"** This is the most common error. \"All dogs are friendly\" negates to \"Not all dogs are friendly\" (at least one isn't), NOT to \"No dogs are friendly.\"\n\n**\"Some\" negates to \"none.\"** \"Some students passed\" negates to \"No students passed.\"\n\n**\"Could\" negates to \"could not.\"** \"Morale could lead to production\" negates to \"Morale could NOT lead to production.\"\n\n**Modest language is still powerful.** Even a carefully worded assumption like \"X is less likely\" destroys the argument when negated to \"X is NOT less likely.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Complete NA Patterns Table' },
    { type: 'paragraph', text: "Below is a comprehensive table of all ten Necessary Assumption patterns covered in this module. For each pattern, the table shows the core gap structure, how to recognize it, and what the correct answer typically looks like." },

    { type: 'table', headers: ['Pattern', 'Core Gap', 'Recognition Signal', 'Correct Answer Template'], rows: [
      [
        '**Key Ingredient**',
        'Evidence shows Plan → Intermediate Effect; conclusion claims Plan → Ultimate Goal',
        'Two different concepts in evidence vs. conclusion (morale vs. production)',
        '"The intermediate effect *could contribute to* the ultimate goal"',
      ],
      [
        '**Definitional Gap**',
        'Author treats Category B as incompatible with Standard A without explanation',
        'Two terms used as if equivalent or opposed without stating the connection',
        '"Being [Category B] means not being [Standard A]"',
      ],
      [
        '**Only Way**',
        'Author assumes the recommended approach is the sole path to the goal',
        '"Should do X to achieve Y" without ruling out alternatives',
        '"No alternative approach can achieve the same goal"',
      ],
      [
        '**Closed Universe**',
        'Author draws a conclusion about a group using evidence from only a subset',
        'Evidence about one population applied to a broader or different population',
        '"The subset is representative of / applies to the broader group"',
      ],
      [
        '**Source Fallacy**',
        'Author dismisses arguments based on the source\'s identity or motive, not the content',
        'Attacks the arguer\'s bias, interest, or motive instead of the argument itself',
        '"Arguments from biased sources are not good arguments"',
      ],
      [
        '**False Dichotomy**',
        'Author considers only two extreme outcomes, ignoring the middle ground',
        '"If X... if Y..." with no consideration of intermediate possibilities',
        '"The only possible outcomes are X and Y" (no middle ground)',
      ],
      [
        '**Complete Knowledge**',
        'Author treats a limited evidence set ("known," "documented") as the complete picture',
        'Qualifiers like "known to be," "documented," "on record" in the evidence; absolute conclusion',
        '"The known sample is complete / fully representative"',
      ],
      [
        '**Forced Choice (Advanced)**',
        'Author sorts something into one of two categories using an unstated incompatibility rule',
        'Dichotomy with a sorting criterion: "Because X has trait C, it must be in Box A, not Box B"',
        '"Trait C is incompatible with Box B"',
      ],
      [
        '**Blocking Third Party**',
        'Author refutes a specific relationship but draws a general conclusion',
        '"No obligation to X → no obligation at all" (ignoring Y, Z)',
        '"No other entity/source could support the general claim"',
      ],
      [
        '**Behavioral Link**',
        'Author claims a mindset prevents a necessary behavior without connecting the two',
        'Principle attacked as "bad" because it supposedly blocks a required action',
        '"People with [mindset] are less likely to perform [behavior]"',
      ],
      [
        '**Definitional Standard**',
        'Author applies a rigid, unstated definition to declare something a failure based on one flaw',
        'Evaluative verdict ("not successful") based on a single risk or downside',
        '"No [successful/effective] X ever has [the cited flaw]"',
      ],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Necessary Assumption vs. Sufficient Assumption' },
    { type: 'paragraph', text: "NA and SA questions both ask about assumptions, but they test fundamentally different things. Confusing them is one of the most common errors on the LSAT." },
    { type: 'table', headers: ['Feature', 'Necessary Assumption (NA)', 'Sufficient Assumption (SA)'], rows: [
      ['**What it asks**', 'What must the author believe for the argument to have *any* chance?', 'What single statement, if true, would *guarantee* the conclusion?'],
      ['**Strength**', 'Modest — often uses "could," "can," "is possible," "less likely"', 'Strong — often uses "all," "every," "must," "always"'],
      ['**Relationship to conclusion**', 'Necessary but not sufficient; the argument might still fail even with it', 'Sufficient; the argument is fully proven if this is true'],
      ['**The Negation Test**', '✓ Use this. Negate the answer; if the argument is destroyed, it\'s correct.', '✗ Do NOT use the Negation Test for SA questions.'],
      ['**The Sufficiency Test**', '✗ Do NOT expect NA answers to prove the conclusion.', '✓ If the answer proves the conclusion, it\'s correct.'],
      ['**Common trap**', 'Answer is too strong (would be sufficient, not just necessary)', 'Answer is too weak (would be necessary, not sufficient)'],
      ['**Analogy**', 'Oxygen is *necessary* for fire (but not sufficient — you also need fuel and heat)', 'A lit match on dry kindling is *sufficient* for fire (it guarantees fire)'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Strength Spectrum', text: "Think of assumptions on a spectrum from weakest to strongest:\n\n**Too Weak** ← Necessary Assumption → **Just Right** ← Sufficient Assumption → **Too Strong**\n\nNA answers are often *surprisingly modest*. If an answer choice feels like it \"proves\" the conclusion, it's probably too strong for an NA question (it might be an SA answer instead). NA answers only need to be *necessary* — they need to be true for the argument to have any chance, but they don't need to guarantee the outcome." },

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps in NA Questions' },
    { type: 'paragraph', text: "The LSAT uses several recurring trap patterns to lure test-takers away from the correct answer. Recognizing these traps is just as important as recognizing the correct pattern." },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How It Works' }, items: [
      { title: '1. The Mistaken Reversal', text: "The argument states \"If A, then B.\" The trap answer states \"If B, then A.\" This reverses the logical direction. Example: The argument says \"Happy → Pursuing Excellence.\" The trap says \"Pursuing Excellence → Happy.\" These are logically different statements, and the reversed version is not required.\n\n**How to avoid:** Always check the direction of the conditional. The correct answer will flow in the same direction as the argument's logic, not in reverse.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '2. The Too-Strong Answer', text: "The answer choice would, if true, *guarantee* the conclusion rather than merely being required for it. NA answers are typically modest in their claims. If an answer uses words like \"always,\" \"must,\" \"will definitely,\" or \"guarantees,\" it's likely too strong.\n\n**How to avoid:** Apply the Negation Test. Even a modest-sounding answer will destroy the argument when negated. Strength doesn't determine correctness — necessity does.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '3. The Right Topic, Wrong Gap', text: "The answer addresses the right subject matter but fills a *different* gap than the one in the argument. It may explain *why* something is true (a cause) when the argument needs to establish *that* something is true (the connection). Example: Explaining *why* competitors are biased (Trap A) vs. stating *that* biased arguments are bad (Correct E).\n\n**How to avoid:** Pre-phrase the specific gap before reading the choices. The correct answer must bridge the *exact* gap you identified.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '4. The Out-of-Scope Concept', text: "The answer introduces a concept or term that never appears in the argument. Even if the concept seems related, it cannot be a necessary assumption because the argument doesn't rely on it. Example: An argument about satisfaction and excellence is not about \"confidence\" or \"pain.\"\n\n**How to avoid:** Check every key term in the answer against the argument. If the answer uses a concept the argument never mentioned, it's likely out of scope.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '5. The Explains-the-Cause Trap', text: "The answer explains *why* a premise is true rather than providing the *unstated link* between the premise and the conclusion. The argument doesn't need to justify its premises — it needs to connect them to the conclusion.\n\n**How to avoid:** Remember that necessary assumptions bridge the gap between *existing* premises and the conclusion. They don't explain why premises are true — they connect premises to conclusions.", badge: 'Watch Out', badgeColor: 'red' },
      { title: '6. The Comparative Trap', text: "The argument makes an absolute judgment (\"not successful\"), but the trap answer introduces a comparison (\"less successful than X\"). Absolute conclusions don't require comparative premises. Something can be \"not successful\" even if nothing else is better.\n\n**How to avoid:** Match the type of claim. If the conclusion is absolute, the assumption should be absolute. If the conclusion is comparative, the assumption should be comparative.", badge: 'Watch Out', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Test Day Checklist' },
    { type: 'paragraph', text: "Use this quick-reference checklist during practice and on test day:" },
    { type: 'list', ordered: true, items: [
      '**Read the question stem first.** Confirm it\'s a Necessary Assumption question. Look for: "depends on assuming," "assumption required," "argument relies on," "presupposes."',
      '**Break down the argument.** Find the conclusion (look for "therefore," "thus," "so," "hence," "consequently") and the key premises. Note the specific terms used in each.',
      '**Identify the gap.** Compare the terms in the evidence to the terms in the conclusion. Where does the author make an unstated leap? What pattern does the gap match?',
      '**Pre-phrase.** Articulate the assumption in your own words before looking at the choices. This anchors your evaluation and prevents traps from pulling you off course.',
      '**Evaluate choices using the Negation Test.** For any answer you\'re considering, negate it. If the argument is destroyed, it\'s correct. If the argument survives, eliminate it.',
      '**Watch the strength of the answer.** NA answers are often surprisingly modest. Don\'t reject an answer just because it sounds weak — if its negation destroys the argument, it\'s correct.',
      '**Check for traps.** Before confirming your answer, ask: Is this a Mistaken Reversal? Is it too strong? Does it introduce an out-of-scope concept? Does it explain a cause rather than bridge a gap?',
      '**Confirm with the Negation Test one final time.** Negate your chosen answer and verify the argument collapses. This is your final safeguard against errors.',
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Final Review', text: "Necessary Assumption questions test one core skill: identifying the unstated belief that holds an argument together. The author's conclusion relies on a premise they never explicitly state. Your job is to find it.\n\n**Remember the fundamentals:**\n• A necessary assumption is required — without it, the argument falls apart.\n• It does NOT need to prove the conclusion — it only needs to be true for the conclusion to have a chance.\n• The Negation Test is your most reliable tool — if negating an answer destroys the argument, that answer is correct.\n• Match the gap precisely — the correct answer bridges the exact logical leap the author makes, nothing more and nothing less.\n\nMaster the ten patterns, internalize the 4-step method, and practice the Negation Test until it becomes automatic. Necessary Assumption is one of the most frequently tested question types on the LSAT, and these skills will serve you across every Logical Reasoning section." },
  ]
};
