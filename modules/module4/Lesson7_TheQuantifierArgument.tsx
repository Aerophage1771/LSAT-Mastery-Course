import { Lesson } from '../../types';

export const Lesson7_TheQuantifierArgument: Lesson = {
  id: "4-7",
  title: "Lesson 4: The Quantifier Argument",
  content: [
    { type: 'h2', text: 'Lesson 4: The Quantifier Argument (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson focuses on arguments that use **quantifiers** — words like *all, most, some, few, none* — to reason about how groups and categories relate. Unlike conditional chains that follow \"if-then\" rules, quantifier arguments are about **set relationships**: how circles in a Venn diagram overlap, contain, or exclude one another. Matching these arguments in Parallel Reasoning requires you to preserve the exact quantifier strength and the logical relationship it creates." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Quantifier arguments account for roughly **10–15% of Parallel Reasoning questions**, and they are among the most commonly missed. The reason is simple: students focus on the argument's topic and miss the precise quantifier words that define its logical structure. Swapping \"all\" for \"most\" or \"some\" for \"few\" changes the entire logic — even when the surface language sounds similar." },

    { type: 'hr' },

    { type: 'h2', text: 'The Quantifier Pattern' },
    { type: 'paragraph', text: "Quantifier words tell you **how many** members of a group share a property. They define the size of the overlap between two categories. The logical force of an argument depends entirely on which quantifier is used — a conclusion that follows from \"all\" does not follow from \"most,\" and a conclusion that follows from \"most\" does not follow from \"some.\"" },

    { type: 'h3', text: 'The Quantifier Hierarchy' },
    { type: 'paragraph', text: "Think of quantifiers as sitting on a spectrum from strongest to weakest:" },
    { type: 'table', headers: ['Quantifier', 'Strength', 'Logical Meaning', 'Venn Diagram Image'], rows: [
      ['**All / Every / Any**', '★★★★★', 'The entire group has the property — no exceptions', 'Circle A is completely inside Circle B'],
      ['**Most**', '★★★★', 'More than half the group has the property', 'More than half of Circle A overlaps Circle B'],
      ['**Many / Several**', '★★★', 'A significant portion, but possibly less than half', 'A substantial region of overlap'],
      ['**Some / A few**', '★★', 'At least one member has the property', 'At least a sliver of overlap between A and B'],
      ['**Few**', '★', 'A small number — implies most do NOT', 'A tiny region of overlap; most of A is outside B'],
      ['**None / No**', '—', 'Zero members have the property', 'Circles A and B do not overlap at all'],
    ]},

    { type: 'callout', variant: 'default', title: 'Key Rule: Quantifiers Only Travel Downward', text: "A universal statement (\"All A are B\") logically implies every weaker statement (\"Most A are B,\" \"Some A are B\"). But a weaker statement never implies a stronger one. \"Some A are B\" does NOT let you conclude \"Most A are B\" or \"All A are B.\" This one-way implication is the source of most quantifier traps on the LSAT." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Quantifier Structures' },
    { type: 'paragraph', text: "Most quantifier arguments on the LSAT fall into one of these recurring patterns:" },

    { type: 'table', headers: ['Pattern Name', 'Abstract Form', 'Validity', 'Example'], rows: [
      ['**Universal Syllogism**', 'All A are B. All B are C. ∴ All A are C.', 'Valid', '"All cats are mammals. All mammals are warm-blooded. Therefore, all cats are warm-blooded."'],
      ['**Universal + Particular**', 'All A are B. Some A are C. ∴ Some B are C.', 'Valid', '"All senators are politicians. Some senators are lawyers. Therefore, some politicians are lawyers."'],
      ['**Universal Collapse**', 'All A are (B or C). All C are B. ∴ All A are B.', 'Valid', '"All students take math or science. All science students also take math. Therefore, all students take math."'],
      ['**Most + All Chain**', 'Most A are B. All B are C. ∴ Most A are C.', 'Valid', '"Most voters are registered. All registered voters can serve on juries. Therefore, most voters can serve on juries."'],
      ['**Double-Most Overlap**', 'Most A are B. Most A are C. ∴ Some B are C.', 'Valid', '"Most employees drive. Most employees have parking passes. Therefore, some drivers have parking passes."'],
      ['**Existential (\"Some\")**', 'Some A are B. Some B are C. ∴ Some A are C.', '**Invalid**', '"Some teachers are runners. Some runners are vegetarians. Therefore, some teachers are vegetarians." (The overlap may not exist.)'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The \"Some\" Trap', text: "\"Some A are B\" and \"Some B are C\" does NOT guarantee that any A are C. The two \"some\" groups within B might be completely different members. This is one of the most common flawed patterns tested in Parallel Reasoning." },

    { type: 'hr' },

    { type: 'h2', text: 'Matching Quantifier Scope' },
    { type: 'paragraph', text: "When matching a quantifier argument, you must preserve three things exactly:" },

    { type: 'process', title: 'The Quantifier Matching Checklist', steps: [
      '**Match the quantifier strength.** If the stimulus uses \"all,\" the correct answer must also use a universal quantifier — not \"most\" or \"some.\" If the stimulus uses \"most,\" the answer must use \"most\" (not \"all\" or \"some\").',
      '**Match the number of groups.** Count the distinct categories. If the stimulus reasons about three groups (A, B, C), the correct answer must also involve three groups — not two or four.',
      '**Match the direction of inclusion.** \"All A are B\" is NOT the same as \"All B are A.\" Check which group is the subset and which is the superset.',
      '**Match the conclusion\'s quantifier.** The conclusion\'s quantifier must be the same strength as in the stimulus. A stimulus concluding \"some\" cannot parallel an answer concluding \"all.\"',
      '**Check validity.** If the stimulus is a valid quantifier argument, the answer must also be valid. If the stimulus is flawed (e.g., the invalid \"Some + Some\" pattern), the answer must be flawed in the same way.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full method to a quantifier argument question." },


    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Applying the Quantifier Matching Method', steps: [
      '**Step 1 — Identify the quantifier structure:**\n• Let **Group X** = New plays running > 3 months\n• Let **Property Y** = Commercial success\n• Let **Property Z** = Critical success\n• Premise 1: All X are (Y or Z) — universal quantifier with inclusive disjunction\n• Premise 2: All Z are Y — universal quantifier collapsing one branch\n• Conclusion: All X are Y — universal quantifier',
      '**Step 2 — Abstract the pattern:**\nAll A are (B or C). All C are B. Therefore, All A are B.\nThis is the **Universal Collapse** pattern. It is a valid argument using universal quantifiers throughout.',
      '**Step 3 — Quick elimination:**\n• (A) uses \"Most\" not \"All/Every\" — quantifier mismatch. **Eliminate.**\n• (B) The conclusion reverses the direction: just because X has properties of best sellers doesn\'t make X a best seller (Mistaken Reversal). **Eliminate.**\n• (D) uses \"but not both\" (exclusive OR), while the stimulus uses inclusive OR. **Eliminate.**\n• (E) uses a contrapositive structure, not a collapse structure. **Eliminate.**',
      '**Step 4 — Verify (C):**\n• All second-year students study (desserts or soups). → All A are (B or C). ✓\n• All students studying soups are also studying desserts. → All C are B. ✓\n• Every second-year student is studying desserts. → All A are B. ✓\nPerfect structural match using universal quantifiers throughout.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Most restaurants need publicity or location; Vineyard has neither', text: 'Uses \"most\" instead of \"every/all\" — a weaker quantifier. The conclusion is also about a single case (\"unlikely to succeed\") rather than about an entire group. Both the quantifier strength and the conclusion scope are wrong.', badge: 'Quantifier Mismatch', badgeColor: 'red' },
      { title: '(B) Every best seller is well written + has photos; Cleveland\'s book has both; so it\'s a best seller', text: 'The conclusion commits a **Mistaken Reversal**. The stimulus says \"All X are Y\" and concludes correctly. This answer says \"All X have properties P\" and then concludes a specific item with P must be X — reversing the direction of the universal. The stimulus is valid; this is flawed.', badge: 'Validity Mismatch', badgeColor: 'red' },
      { title: '(C) All Freeman students study desserts or soups; all soup students also study desserts; all study desserts', text: 'Universal quantifiers throughout. Premise 1: All A are (B or C). Premise 2: All C are B. Conclusion: All A are B. Identical to the stimulus pattern.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Celebrity chefs open restaurants or write books, but not both; Endicott opened a restaurant; so she doesn\'t write', text: 'The phrase \"but not both\" creates an **exclusive OR**, which is a fundamentally different logical operator than the inclusive OR in the stimulus. With exclusive OR, choosing one automatically eliminates the other — a different reasoning mechanism than the \"collapse\" in the stimulus.', badge: 'Structural Mismatch', badgeColor: 'red' },
      { title: '(E) Every Woodside caterer accepts both types; Peggy\'s doesn\'t accept business; so Peggy\'s isn\'t in Woodside', text: 'This is a valid argument, but it uses a **contrapositive** structure (If in Woodside → accepts both; doesn\'t accept both → not in Woodside). The stimulus uses a **collapse** structure where one branch of a disjunction is subsumed by the other. Different logical mechanism.', badge: 'Structural Mismatch', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Quantifier Traps' },
    { type: 'paragraph', text: "Test-makers exploit the subtle differences between quantifiers to create tempting wrong answers. Here are the traps you will encounter most often:" },

    { type: 'table', headers: ['Trap Label', 'What It Does', 'How to Detect It'], rows: [
      ['**Scope Shift**', 'Changes the conclusion from \"all\" to \"some,\" or from \"most\" to \"all\" — keeping everything else identical', 'Circle the quantifier in the stimulus conclusion and the answer conclusion. Do they match exactly?'],
      ['**Quantity Swap**', 'Swaps the quantifiers in two premises — e.g., Premise 1 uses \"most\" and Premise 2 uses \"all\" when the stimulus had them reversed', 'Write out the abstract form of both arguments side by side. Check each premise individually.'],
      ['**Direction Reversal**', '\"All A are B\" becomes \"All B are A\" — the groups trade places as subset and superset', 'Check which group is contained in which. Draw a quick Venn diagram if unsure.'],
      ['**Inclusive/Exclusive Swap**', 'Replaces inclusive OR (\"A or B, possibly both\") with exclusive OR (\"A or B, but not both\")', 'Look for the phrase \"but not both\" — this signals exclusive OR, which creates a completely different logical structure.'],
      ['**Validity Flip**', 'The stimulus is a valid quantifier argument, but the answer is flawed (or vice versa)', 'Ask: does the conclusion actually follow from the premises? A common invalid pattern is \"Some A are B; Some B are C; therefore Some A are C.\"'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Most Dangerous Trap: \"Most\" vs. \"All\"', text: "\"Most A are B\" and \"All A are B\" feel similar, and in everyday conversation we often treat them as interchangeable. On the LSAT, they are **completely different logical operators**. \"All\" guarantees a universal conclusion; \"Most\" only guarantees a probabilistic one. If the stimulus uses \"all\" and an answer choice uses \"most\" (or vice versa), the answer is wrong — no matter how perfect the rest of the structure looks." },

    { type: 'hr' },

    { type: 'h2', text: 'A Second Practice Question' },
    { type: 'paragraph', text: "Try this harder example that tests the double-most overlap pattern:" },


    { type: 'h3', text: 'Solution Walkthrough' },
    { type: 'paragraph', text: "The stimulus uses the **double-most overlap** pattern: Most A are B. Most A are C. Therefore, some B are C. This is valid because if more than half of group A has property B, and more than half of group A has property C, there must be overlap — some members of A have both B and C." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Most marketing employees speak French; Most speak Spanish; Some French speakers speak Spanish', text: 'Most A are B. Most A are C. Therefore, some B are C. Perfect match — double-most overlap with a \"some\" conclusion.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) All seniors play sport; Most participate in government; Most sport players participate in government', text: 'Uses \"All\" in premise 1 instead of \"Most,\" and the conclusion says \"most\" instead of \"some.\" Double quantifier mismatch.', badge: 'Quantifier Mismatch', badgeColor: 'red' },
      { title: '(C) Some residents own dogs; Some own cats; Some dog owners own cats', text: 'Uses \"Some\" instead of \"Most\" in both premises. This is the **invalid** Some + Some pattern — the conclusion does not follow. The stimulus is valid; this is flawed.', badge: 'Validity Flip', badgeColor: 'red' },
      { title: '(D) Most enjoy jazz; All enjoy classical; Most jazz fans enjoy classical', text: 'Premise 2 uses \"All\" instead of \"Most,\" and the conclusion uses \"most\" instead of \"some.\" Quantifier mismatch in both the premises and the conclusion.', badge: 'Quantifier Mismatch', badgeColor: 'red' },
      { title: '(E) Most experienced headaches; A few experienced nausea; Some headache patients had nausea', text: 'Premise 2 uses \"a few\" instead of \"most.\" When only a few have property C, there is no guarantee of overlap with the \"most\" who have property B. The double-most logic requires both premises to use \"most.\"', badge: 'Quantity Swap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Quantifier arguments reason about **group relationships** using words like all, most, some, few, and none.\n• Quantifiers sit on a **strength hierarchy**: All > Most > Many > Some/Few > None. Stronger quantifiers imply weaker ones, but never the reverse.\n• The **Universal Collapse** pattern (All A are B or C; All C are B; therefore All A are B) is one of the most commonly tested quantifier structures.\n• The **double-most overlap** (Most A are B; Most A are C; therefore Some B are C) is valid, but the superficially similar **double-some** pattern is NOT.\n• When matching quantifier arguments, verify: (1) quantifier strength, (2) number of groups, (3) direction of inclusion, (4) conclusion quantifier, and (5) validity.\n• The most common traps are **scope shifts** (changing quantifier strength), **quantity swaps** (rearranging which premise uses which quantifier), and **direction reversals** (swapping subset and superset)." },
  ]
};
