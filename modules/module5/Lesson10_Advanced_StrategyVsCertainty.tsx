import { Lesson } from '../../types';

export const Lesson10_Advanced_StrategyVsCertainty: Lesson = {
  id: "5-10",
  title: "Advanced Drill: Strategy vs. Certainty",
  content: [
    { type: 'h2', text: 'Advanced Drill: The Certainty Flaw' },

    { type: 'h3', text: 'Concept Focus: Treating Probability as Proof' },
    { type: 'paragraph', text: "The **Certainty Flaw** is a family of reasoning errors in which an argument treats **probable** evidence as **definitive** proof, or treats a **likely** outcome as a **guaranteed** outcome. These flaws are subtle because the premises often *do* support the conclusion to some degree — the error is one of **degree**, not of direction. The argument overshoots its evidence by claiming more certainty than the data warrants." },
    { type: 'paragraph', text: "This flaw type encompasses several sub-patterns that appear frequently on harder questions: possibility-to-certainty jumps, some-to-all scope shifts, correlation-to-proof leaps, and the Strategy vs. Certainty confusion. Mastering these patterns will help you handle the most nuanced Flaw questions on the exam." },

    { type: 'hr' },

    { type: 'h2', text: 'Types of Certainty Flaws' },
    { type: 'paragraph', text: "The Certainty Flaw manifests in three primary forms, each involving a different kind of scope overreach:" },

    { type: 'h3', text: 'Type 1: Possibility → Certainty' },
    { type: 'paragraph', text: "The argument takes evidence that something *could* happen and concludes that it *will* happen (or *must* happen). The evidence only establishes possibility, but the conclusion claims necessity." },
    { type: 'blockquote', text: "\"New research has shown that a certain compound in green tea can inhibit the growth of cancer cells in laboratory conditions. Therefore, drinking green tea will prevent cancer.\"" },
    { type: 'paragraph', text: "**Why it's flawed:** The evidence shows that the compound *can* inhibit cancer cells — in a lab. The conclusion claims drinking green tea *will prevent* cancer. The gap: laboratory inhibition ≠ real-world prevention. Dosage, bioavailability, other dietary factors, and genetic variation all intervene between possibility and certainty." },
    { type: 'paragraph', text: "**LSAT language:** \"treats a possibility as a certainty\" or \"confuses what could be the case with what must be the case.\"" },

    { type: 'h3', text: 'Type 2: Some → All (Scope Shift in Quantity)' },
    { type: 'paragraph', text: "The argument uses evidence about *some* members of a group and draws a conclusion about *all* members — or uses evidence about *most* cases to conclude about *every* case." },
    { type: 'blockquote', text: "\"Most students who take AP courses in high school perform well in college. Therefore, taking AP courses guarantees college success.\"" },
    { type: 'paragraph', text: "**Why it's flawed:** \"Most\" is not \"all.\" The minority who took AP courses but did *not* perform well in college prove that the correlation is not universal. The conclusion's certainty (\"guarantees\") dramatically oversteps the evidence's scope (\"most\")." },
    { type: 'paragraph', text: "**LSAT language:** \"draws a conclusion that is broader than what the evidence supports\" or \"treats a tendency as though it were an invariable rule.\"" },

    { type: 'h3', text: 'Type 3: Correlation → Proof (Evidence Strength Overreach)' },
    { type: 'paragraph', text: "The argument treats a *correlation* or *association* as definitive *proof* of a causal or logical claim. The evidence provides *some* support, but the conclusion treats it as conclusive." },
    { type: 'blockquote', text: "\"Countries with higher literacy rates tend to have stronger economies. This proves that improving literacy is the key to economic growth.\"" },
    { type: 'paragraph', text: "**Why it's flawed:** The correlation provides evidence that literacy and economic strength are related, but it does not *prove* a specific causal mechanism. A third factor (like investment in education broadly) might drive both. The argument mistakes suggestive evidence for proof." },
    { type: 'paragraph', text: "**LSAT language:** \"takes mere evidence in favor of a conclusion as proof of that conclusion\" or \"treats supporting evidence as though it were conclusive.\"" },

    { type: 'hr' },

    { type: 'h2', text: 'The Scope Shift Explained' },
    { type: 'paragraph', text: "At the heart of every Certainty Flaw is a **scope shift** — the conclusion makes a claim that is quantitatively, qualitatively, or temporally broader than what the premises support. Here is a systematic way to identify scope shifts:" },

    { type: 'table', headers: ['Premise Language', 'Conclusion Language', 'Type of Scope Shift'], rows: [
      ['"can," "may," "is possible"', '"will," "must," "certainly"', 'Possibility → Certainty'],
      ['"some," "many," "most"', '"all," "every," "none," "always"', 'Partial → Universal'],
      ['"tends to," "is associated with"', '"causes," "proves," "demonstrates"', 'Correlation → Proof'],
      ['"in this study," "in this case"', '"in general," "universally"', 'Specific → General'],
      ['"probably," "likely"', '"definitely," "certainly," "guaranteed"', 'Probability → Certainty'],
      ['"in the past," "historically"', '"will continue to," "always will"', 'Past → Future'],
      ['"a good strategy for"', '"the most likely way to"', 'Strategy → Certainty'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Scope-Shift Detection Technique', text: "To catch a scope shift, compare the **exact language** of the conclusion to the **exact language** of the premises. Circle the key qualifiers in each. If the conclusion uses stronger, broader, or more certain language than the premises, you have found a scope shift.\n\nCommon qualifier shifts to watch for:\n• \"can\" → \"will\"\n• \"most\" → \"all\"\n• \"suggests\" → \"proves\"\n• \"correlated with\" → \"causes\"\n• \"this group\" → \"everyone\"\n• \"probably\" → \"certainly\"" },

    { type: 'hr' },

    { type: 'h2', text: 'The Strategy vs. Certainty Variant' },
    { type: 'paragraph', text: "A particularly sophisticated form of the Certainty Flaw appears when an argument confuses the **certainty of a goal** with the **probability of the path** taken to achieve it. This is the Strategy vs. Certainty flaw." },
    { type: 'paragraph', text: "The argument assumes that the strategy aimed at a **guaranteed** outcome is automatically the strategy with the **highest probability** of success. But these are different things: a guaranteed outcome is useless if the path to it has a 1% chance of being implemented, while a merely probable outcome reached through a 90%-likely path may be the \"most likely\" overall strategy." },

    { type: 'h4', text: 'The Structure' },
    { type: 'code', text: 'Premise:  Path A guarantees outcome Y.\nPremise:  Path B might achieve outcome Y (but doesn\'t guarantee it).\n\nConclusion: Path A is the most likely way to achieve Y.\n\nHidden assumption: The probability of successfully following Path A is higher\nthan the probability of Path B achieving Y.\n\nBut what if Path A is nearly impossible to implement?' },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      "**Step 1 — Deconstruct the Argument:**\n*   **Premise 1:** A pure free market economy is the only system that *assures* (guarantees) maximum total utility.\n*   **Premise 2:** Other economic systems *might* be able to achieve this goal.\n*   **Premise 3:** A certain country has a controlled economy and is *not trying* to create a pure free market.\n*   **Conclusion:** This country is *not acting in the way that is most likely* to bring about maximum total utility.",
      "**Step 2 — Find the Logical Gap:** The conclusion's key phrase is \"most likely.\" The premise says a free market *assures* the outcome (100% guaranteed if achieved). But what if *trying to create* a free market is extremely difficult — say, requiring a massive political revolution with a 90% chance of failure? In that case, the \"guaranteed\" path might have only a 10% chance of being implemented, making it far *less likely* than a controlled economy's more modest but achievable approach.\n\nThe argument conflates the *certainty of the outcome if the path succeeds* with the *overall probability of success*.",
      "**Step 3 — Prephrase:** The argument assumes that aiming for the guaranteed method is the same as choosing the most probable method. It ignores implementation risk — the chance that the path itself fails before reaching the guaranteed outcome.\n\n**Prephrase:** \"The argument confuses a guaranteed outcome with the most likely path to that outcome.\"",
      "**Step 4 — Evaluate the Answer Choices:**"
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation'}, items: [
      { title: '(A) presumes... that any country that does not have a pure free market economy has a highly controlled economy', text: 'The argument focuses on one specific country that is stated to have a highly controlled economy. It doesn\'t make a general claim about all countries. This answer describes a false dichotomy that the argument doesn\'t commit.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(B) presumes... that the way in which utility is distributed is less important than the total amount of utility', text: 'The argument\'s stated goal is explicitly "maximum total utility." The distribution of utility is outside the argument\'s scope. This answer raises a valid policy concern but doesn\'t identify the logical flaw.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(C) fails to consider that the way most likely to achieve a particular end may not be the only way to achieve that end', text: 'The argument explicitly considers that there are other ways — "although other types of economies might be able to achieve it." This answer describes something the argument already acknowledges.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(D) presumes... that trying to bring about a condition that will ensure the achievement of an end must always be the way most likely to achieve that end', text: 'This is a precise, highly abstract match. "A condition that will ensure the achievement of an end" = a pure free market (which guarantees maximum utility). "Trying to bring about" = pursuing that condition. "Must always be the way most likely to achieve that end" = the assumption that this is the most probable strategy. The argument presumes this without justification.', badge: 'Correct', badgeColor: 'green'},
      { title: '(E) ignores the possibility that a pure free market economy will have serious drawbacks...', text: 'The argument\'s conclusion is narrowly about the likelihood of achieving maximum utility. Drawbacks beyond utility are outside the argument\'s scope.', badge: 'Incorrect', badgeColor: 'red'}
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "This question tests a scope-shift variant of the Certainty Flaw. The argument compares two treatments:" },
    { type: 'table', headers: ['Treatment', 'Success Rate', 'Degree of Relief'], rows: [
      ['Experimental Surgery', 'A majority (>50%, but not all)', 'Significant'],
      ['Physical Therapy', 'Nearly all patients', 'Some degree'],
    ]},
    { type: 'paragraph', text: "The board concludes the surgery is \"more effective.\" But \"more effective\" is ambiguous — effective for whom? If you're measuring *population-level effectiveness*, a treatment that helps nearly everyone to some degree may outperform one that dramatically helps only a majority. The surgery helps 60% significantly but potentially leaves 40% with no relief; therapy helps 95% with at least some relief. The board treats the intensity of the benefit as the sole measure of effectiveness while ignoring the breadth of the benefit." },
    { type: 'paragraph', text: "Answer (D) captures this precisely: a treatment providing *some* relief to *nearly all* may be more effective *overall* than one providing *significant* relief to only a *majority*. The board overlooks this possibility." },

    { type: 'hr' },

    { type: 'h2', text: 'Recognizing Certainty Flaws: Key Language Triggers' },
    { type: 'paragraph', text: "Train yourself to react to these trigger words. When you see a mismatch between the qualifier in the premise and the qualifier in the conclusion, you are likely looking at a Certainty Flaw:" },
    { type: 'breakdown', labels: { title: 'Trigger Pattern', text: 'What to Check' }, items: [
      { title: 'Premise says "can" / Conclusion says "will"', text: 'The argument is treating a possibility as a certainty. Ask: what else would need to be true for this possibility to become a reality?', badge: 'Possibility → Certainty', badgeColor: 'red' },
      { title: 'Premise says "most" / Conclusion says "all"', text: 'The argument is extending a majority finding to the entire group. Ask: what about the minority who don\'t fit the pattern?', badge: 'Some → All', badgeColor: 'red' },
      { title: 'Premise says "assures" / Conclusion says "most likely"', text: 'The argument may be confusing the certainty of an outcome with the probability of the path. Ask: how achievable is this "assured" path?', badge: 'Strategy → Certainty', badgeColor: 'red' },
      { title: 'Premise says "tends to" / Conclusion says "proves"', text: 'The argument is treating a trend or correlation as conclusive proof. Ask: are there exceptions or alternative explanations?', badge: 'Correlation → Proof', badgeColor: 'red' },
      { title: 'Premise uses past data / Conclusion predicts the future', text: 'The argument assumes historical patterns will continue. Ask: what could change the pattern?', badge: 'Past → Future', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The Certainty Flaw is about degree, not direction.** Unlike conditional flaws where the arrow is flipped, Certainty Flaws involve an argument that points in the *right* direction but claims *too much*. The premises provide some support; the conclusion claims they provide conclusive support.\n\n**2. Three primary types.** Possibility → Certainty (\"can\" becomes \"will\"), Some → All (partial evidence becomes universal claim), and Correlation → Proof (suggestive evidence becomes definitive).\n\n**3. The Scope Shift is the mechanism.** Every Certainty Flaw involves a mismatch between the qualifier in the premises and the qualifier in the conclusion. Circle the qualifiers — if the conclusion uses stronger language than the premises, you've found the flaw.\n\n**4. The Strategy vs. Certainty variant is advanced.** It confuses the certainty of an outcome *if a path is followed* with the overall probability of success *including the likelihood of the path being achievable*. A guaranteed outcome on an impossible path is not the \"most likely\" strategy.\n\n**5. Degree of certainty must match.** The correct answer will often use language about the argument treating probability as certainty, confusing a trend with a rule, or assuming that an assured outcome implies the most likely strategy." },
  ]
};
