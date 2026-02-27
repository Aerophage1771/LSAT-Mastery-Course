import { Lesson } from '../../types';

export const Lesson9_Drill_OverlapFlaw: Lesson = {
  id: "6-9",
  title: "Drill: The Overlap Flaw (PT-103-S-1-Q-21)",
  content: [
    { type: 'h2', text: 'Drill: The Overlap Flaw' },

    { type: 'h3', text: 'Concept Focus: The Overlap Flaw' },
    { type: 'paragraph', text: "Many LSAT flaws are about simple \"if-then\" mistakes. But some of the most difficult flaws require you to think visually, like a mathematician. These questions test your understanding of **quantifiers** — words like \"all,\" \"some,\" and \"most\" — and how groups and subgroups relate to one another." },
    { type: 'paragraph', text: "The specific error in this drill is the **Overlap Flaw**. This flaw occurs when an argument concludes that two groups *must* share members, when in fact they only *might*. The argument takes a property that belongs to \"some\" members of a larger group and forces that property onto a specific subgroup — without proving that the subgroup is among the members who have the property." },

    { type: 'hr' },

    { type: 'h3', text: 'Venn Diagram Logic: Why Groups Can Overlap Without Having To' },
    { type: 'paragraph', text: "The Overlap Flaw is best understood visually. Consider a large circle representing all **Tenured Faculty** at a university. Within this circle, we can place smaller circles representing various departments — Linguistics, History, Philosophy, etc. We know two facts:" },
    { type: 'list', ordered: true, items: [
      '**Some** Tenured Faculty are **not** Full Professors. (There is a region of the Tenured circle where people lack the "Full Professor" title.)',
      '**All** Linguistics Faculty have tenure. (The Linguistics circle is entirely *inside* the Tenured circle.)',
    ]},
    { type: 'paragraph', text: "The question is: must the Linguistics circle overlap with the \"Not Full Professor\" region? The answer is **no**. It is entirely possible that all the \"Not Full Professors\" are in the History or Philosophy circles, and every single member of the Linguistics department happens to be a Full Professor. The Linguistics circle could sit comfortably in the part of the Tenured circle where *everyone* is a Full Professor." },
    { type: 'paragraph', text: "This is the Overlap Flaw: concluding that a subgroup *must* share a property with the larger group, when the subgroup could occupy a completely different region of that group." },

    { type: 'callout', variant: 'default', title: 'The Core Error', text: "**The Overlap Flaw:** Some members of Group A have Property X. All members of Group B are in Group A. Therefore, some members of Group B must have Property X.\n\nThe error: Group B might be entirely contained within the part of Group A that does *not* have Property X. The property does not automatically transfer from the whole to the subgroup." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot the Overlap Flaw' },
    { type: 'paragraph', text: "The Overlap Flaw has a distinctive fingerprint. When reading a stimulus, watch for these signals:" },
    { type: 'breakdown', labels: { title: 'Signal', text: 'What It Means' }, items: [
      { title: 'Quantifier Language', text: 'The argument uses words like "some," "not all," "most," "a few," or "at least one" to describe a property of a larger group. These partial quantifiers are the starting point for overlap errors.', badge: 'Key Signal', badgeColor: 'blue' },
      { title: 'Subset Relationship', text: 'The argument establishes that one group is entirely contained within another ("all X are Y," "every member of X has Y"). This creates the subgroup that the flaw will target.', badge: 'Key Signal', badgeColor: 'blue' },
      { title: 'Forced Transfer', text: 'The conclusion claims that the subgroup *must* have the property that only "some" of the larger group has. This is the logical leap — transferring a partial property to a specific subset.', badge: 'The Flaw', badgeColor: 'red' },
      { title: 'Plausible But Unproven', text: "The conclusion *sounds* reasonable — it is certainly *possible* that some linguistics professors are not full professors. But the LSAT requires logical certainty, not mere plausibility. Possible is not the same as guaranteed.", badge: "Why It's Tricky", badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'How to Match the Overlap Flaw in Answer Choices' },
    { type: 'paragraph', text: "When the stimulus commits an Overlap Flaw, matching it requires checking three structural components in each answer choice:" },
    { type: 'process', title: 'Matching Process', steps: [
      '**Check for the partial property:** Does the answer state that "some" (or "not all") members of a larger group have a specific property? If the answer uses "all" instead of "some," the structure is different.',
      '**Check for the subset relationship:** Does the answer establish that a smaller group is entirely contained within the larger group? Look for language like "all X are Y" or "every X is a Y."',
      '**Check for the forced transfer:** Does the conclusion claim that the smaller group must share the partial property? If so, the answer commits the same Overlap Flaw.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Eliminate Valid Arguments First', text: "In Overlap Flaw questions, the LSAT frequently includes 2–3 answer choices that are **logically valid**. These are automatic eliminations. If an answer choice's conclusion follows necessarily from its premises, it cannot be the correct answer in a Parallel Flaw question. Check validity before analyzing the flaw type — this often removes half the field instantly." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },


    { type: 'hr' },

    { type: 'h2', text: 'Full Step-by-Step Analysis' },

    { type: 'h3', text: 'Step 1: Diagnose the Flaw (Visualize the Groups)' },
    { type: 'paragraph', text: "Let's map the argument's premises and conclusion using group relationships:" },
    { type: 'list', items: [
      '**Premise 1:** "Not all tenured faculty are full professors." → **Some** Tenured Faculty are **not** Full Professors. Within the "Tenured" circle, there is at least one section of people who lack the Full Professor title.',
      '**Premise 2:** "Every faculty member in the linguistics department has tenure." → The "Linguistics" group is a **complete subgroup** of the "Tenured" group. The Linguistics circle is entirely inside the Tenured circle.',
      '**Conclusion:** "Not all of the faculty members in the linguistics department are full professors." → The Linguistics subgroup *must* overlap with the "Not Full Professor" region.',
    ]},
    { type: 'paragraph', text: "Is this conclusion guaranteed? **No.** It is entirely possible that all the \"Not Full Professors\" are in the History department, the Philosophy department, or any other tenured department — and every single member of the Linguistics department happens to be a Full Professor. The argument takes a property of the larger group and forces it onto a subgroup without justification." },

    { type: 'h3', text: 'Step 2: Abstract the Pattern' },
    { type: 'callout', variant: 'tip', title: 'Blueprint', text: "**Premise 1:** Some members of Group A have Property Not-X.\n**Premise 2:** All members of Group B are members of Group A. (B is a subgroup of A.)\n**Conclusion:** Therefore, some members of Group B must have Property Not-X.\n\nThe error: Group B might be entirely within the part of Group A that *does* have Property X." },

    { type: 'h3', text: 'Step 3: Match the Error' },
    { type: 'paragraph', text: "We need an argument that:\n1. States a partial property of a larger group (\"some A are not X\")\n2. Establishes a subset relationship (\"all B are A\")\n3. Concludes that the subset must share the partial property (\"some B are not X\")\n\nBefore matching flaws, we should also check each answer choice for **logical validity** — valid arguments are automatic eliminations." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: '(A) All modern office towers are climate-controlled. Not all office buildings are climate-controlled. Therefore, not all office buildings are modern office towers.',
        text: "Let's test this for validity. If all modern towers are climate-controlled (Modern Tower → Climate-Controlled), and some office buildings are *not* climate-controlled, then those non-climate-controlled office buildings *cannot* be modern towers (by the contrapositive). So it *must* be true that not all office buildings are modern towers.\n\nThis argument is **logically valid**. Since it has no flaw, it cannot match our flawed stimulus. Eliminated.",
        badge: 'Incorrect — Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(B) All municipal hospital buildings are massive. Not all are forbidding. Therefore, massive buildings need not be forbidding.',
        text: "If all municipal hospitals are massive, and some municipal hospitals are *not* forbidding, then there exist massive buildings (namely, those non-forbidding hospitals) that are not forbidding. The conclusion — that massive buildings need not be forbidding — follows directly.\n\nThis is **logically valid**. Eliminated.",
        badge: 'Incorrect — Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(C) Some buildings by famous architects are not well proportioned. All government buildings are designed by famous architects. Therefore, some government buildings are not well proportioned.',
        text: "Let's map this to our blueprint:\n• **Group A:** Buildings designed by famous architects.\n• **Property Not-X:** Not well proportioned.\n• **Group B:** Government buildings.\n\n**Premise 1:** Some (Famous Architect buildings) are (Not well proportioned). ✓ Matches \"Some A are Not-X.\"\n**Premise 2:** All (Government buildings) are (Famous Architect buildings). ✓ Matches \"All B are A.\"\n**Conclusion:** Some (Government buildings) are (Not well proportioned). ✓ Matches \"Some B are Not-X.\"\n\nThis is a perfect structural match. The flaw is identical: just because *some* famous-architect buildings are poorly proportioned does not mean the specific subgroup of *government* buildings must be. It is entirely possible that all government buildings are masterpieces, while the poorly proportioned ones are all private residences.",
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(D) Not all public buildings are well designed. Some poorly designed public buildings were intended for private use. Therefore, the poorly designed public buildings were all originally designed for private use.',
        text: "The structure here is completely different. The conclusion makes an **\"all\" claim** (\"the poorly designed public buildings were *all* originally designed for private use\") based on a \"some\" premise. This is a different kind of quantifier error — an unjustified universal generalization, not a forced-overlap error. The blueprint does not match.",
        badge: 'Incorrect — Different Quantifier Error',
        badgeColor: 'red'
      },
      {
        title: '(E) Some cathedrals are not built of stone. Every cathedral is impressive. Therefore, buildings can be impressive even though they are not built of stone.',
        text: "If some cathedrals are not built of stone, and every cathedral is impressive, then there exist cathedrals that are both impressive *and* not built of stone. The conclusion — that buildings can be impressive without being stone — follows directly from these examples.\n\nThis is **logically valid**. Eliminated.",
        badge: 'Incorrect — Valid Logic',
        badgeColor: 'red'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Validity Filter: A Powerful Shortcut' },
    { type: 'paragraph', text: "One of the most striking features of this question is that **three of the five answer choices are logically valid** (A, B, and E). In a Parallel Flaw question, valid arguments are automatic eliminations — they cannot parallel a flawed argument because they commit no error at all." },
    { type: 'paragraph', text: "This gives you a powerful shortcut: before analyzing *which* flaw each answer commits, check whether the answer is valid. If it is, cross it out immediately. On this question, the validity filter eliminates three choices and leaves you with only (C) and (D) to compare — a much more manageable task." },
    { type: 'table', headers: ['Choice', 'Valid?', 'Flaw Type (If Invalid)', 'Matches Stimulus?'], rows: [
      ['(A)', '✓ Valid', '—', 'No — no flaw to match'],
      ['(B)', '✓ Valid', '—', 'No — no flaw to match'],
      ['(C)', '✗ Invalid', 'Overlap Flaw (forced transfer from whole to subgroup)', '**Yes — perfect match**'],
      ['(D)', '✗ Invalid', 'Unjustified Universal ("some" → "all")', 'No — different quantifier error'],
      ['(E)', '✓ Valid', '—', 'No — no flaw to match'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Set Theory and the LSAT: Why This Matters' },
    { type: 'paragraph', text: "The Overlap Flaw belongs to a broader family of **set-theoretic errors** — mistakes about how groups, subgroups, and properties interact. These errors appear throughout the LSAT, not just in Parallel Flaw questions. Understanding a few core set-theory principles will help you across multiple question types:" },
    { type: 'breakdown', labels: { title: 'Principle', text: 'Explanation' }, items: [
      { title: 'Properties of the whole do not automatically transfer to parts', text: 'Just because "some A are X" does not mean that any specific subgroup of A must also be X. The subgroup might be entirely within the non-X region of A. This is the Overlap Flaw.', badge: 'This Drill', badgeColor: 'green' },
      { title: 'Properties of parts do not automatically transfer to the whole', text: 'Just because each member of a group has a property does not mean the group *as a whole* has that property. Each brick weighs 2 pounds, but a wall of 1,000 bricks does not weigh 2 pounds. This is the Composition Flaw (covered in Lesson 4).', badge: 'Related Flaw', badgeColor: 'blue' },
      { title: 'Shared membership does not guarantee shared properties', text: 'Two subgroups of the same larger group (e.g., Linguistics and History are both subgroups of Tenured Faculty) do not necessarily share any properties beyond their common membership. They could occupy completely different regions of the parent group.', badge: 'Extension', badgeColor: 'indigo' },
      { title: '"Some" is compatible with "all" and with "none of the specific ones you care about"', text: 'When the LSAT says "some A are X," this is compatible with 1%, 50%, or 99% of A being X. More importantly, the specific subset B that you are interested in might be entirely within the X region or entirely outside it. "Some" provides no guarantees about specific subsets.', badge: 'Fundamental', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Overlap Flaw** concludes that a subgroup *must* share a property with a larger group, when in fact the subgroup might occupy a completely different region. The formal pattern: Some A are X. All B are A. Therefore, some B are X. (Invalid.)\n• **Visualize with Venn diagrams:** When you see \"all\" and \"some,\" think in terms of circles. \"All B are A\" means B is a small circle inside the larger circle A. The property X might exist only in parts of A that do not overlap with B.\n• **Properties do not automatically transfer** from whole to subgroup. A property of \"some\" members of a group provides zero guarantees about any specific subgroup.\n• **Check for validity first.** In quantifier-heavy Parallel Flaw questions, many answer choices are logically valid. Eliminating valid arguments before analyzing flaw types dramatically narrows the field.\n• The LSAT tests **set-theoretic reasoning** repeatedly. The Overlap Flaw is one instance of a broader principle: relationships between groups, subgroups, and properties are not transitive unless the quantifier logic demands it. Understanding this principle helps across Parallel Flaw, Sufficient Assumption, and Must Be True question types." },
  ]
};
