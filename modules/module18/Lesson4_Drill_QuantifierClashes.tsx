import { Lesson } from '../../types';

export const Lesson4_Drill_QuantifierClashes: Lesson = {
  id: "18-4",
  title: "Drill: Quantifier Clashes (PT-113-S-3-Q-8)",
  content: [
    { type: 'h2', text: 'Quantifier Clashes' },
    { type: 'paragraph', text: 'A Quantifier Clash occurs when an answer choice directly contradicts a universal quantifier in the stimulus. If the stimulus says "all X are Y," then the statement "some X are not Y" must be false\u2014the two claims are logical contradictories. This is one of the most mechanical and reliable patterns in Must Be False questions: a universal rule in the stimulus paired with an existential exception in the correct answer.' },

    { type: 'paragraph', text: 'The LSAT uses a variety of phrasing to express universal rules: "all," "every," "for all," "each," "any," and "no" (which means "all... are not..."). Similarly, the contradicting exception may appear as "some," "there are," "at least one," "certain," or "not all." Your task is to recognize these quantifiers and confirm that the answer directly negates the scope of the rule.' },

    { type: 'h3', text: 'The Quantifier Hierarchy' },
    { type: 'paragraph', text: 'Understanding how quantifiers interact is essential:' },
    { type: 'list', ordered: true, items: [
      '**"All X are Y" is contradicted by "Some X are not Y."** These two statements cannot both be true. One must be false.',
      '**"No X are Y" is contradicted by "Some X are Y."** Again, directly incompatible.',
      '**"All X are Y" is NOT contradicted by "Some X are Y."** "Some X are Y" is actually entailed by "All X are Y"\u2014it is a weaker version of the same claim.',
    ]},
    { type: 'paragraph', text: 'The critical distinction is between a statement that contradicts the universal rule and one that is merely consistent with it. Wrong answers often describe scenarios that are unusual or surprising but remain logically compatible with the universal claim.' },

    { type: 'callout', variant: 'tip', title: 'Strategy: Find the Universal, Then Negate It', text: 'As soon as you see a Must Be False stimulus, scan for universal quantifiers ("all," "every," "no," "for all"). Underline the universal claim. Then look for the answer that introduces an exception\u2014a "some... not" statement that directly clashes with the universal. This mechanical approach eliminates the need for complex reasoning.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Quantifier Clashes (PT-113-S-3-Q-8)' },
    { type: 'paragraph', text: 'This drill features a biological stimulus with a universal rule in the very first sentence. The correct answer introduces an exception that is impossible under that rule.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Identify the Universal Rule' },
    { type: 'paragraph', text: 'The first sentence contains the critical universal quantifier:' },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Analysis' }, items: [
      { title: '"For all species of higher animals, reproduction requires the production of eggs..."', text: 'The phrase "For all" is the universal quantifier. It establishes an exceptionless law: every single species of higher animal must produce eggs to reproduce. This is the rule that cannot be broken.', badge: 'Universal Rule', badgeColor: 'indigo' },
      { title: '"...but not necessarily the production of sperm."', text: 'This carves out flexibility on one side (sperm is optional) while reinforcing the absolute on the other (eggs are mandatory).', badge: 'Qualifier', badgeColor: 'blue' },
      { title: '"There are some species whose members are all female..."', text: 'An illustrative example showing how reproduction without sperm is possible. It supports the rule without modifying it.', badge: 'Example', badgeColor: 'slate' },
      { title: '"...all offspring have genetic codes nearly identical..."', text: 'A consequence of asexual reproduction. Additional context, not a testable rule for the question.', badge: 'Context', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Step 2: Construct the Contradiction' },
    { type: 'paragraph', text: 'The universal rule is: **All higher animal species \u2192 reproduction requires eggs**. The logical contradictory is: **Some higher animal species \u2192 reproduction does NOT require eggs**. Any answer that describes a higher animal species whose members do not produce eggs directly clashes with the universal "for all" statement.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) There are some species of salamanders that have both male and female members.', text: 'The stimulus describes a "rare" female-only salamander, which implies most salamander species are not female-only. This is perfectly compatible with the passage.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(B) There are some species of higher animals none of whose members produce eggs.', text: 'This is the direct Quantifier Clash. The stimulus says ALL higher animal species require egg production. This answer says SOME do not. "All" and "some... not" are logical contradictories\u2014they cannot both be true.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) There is a significant number of female-only species of higher animals.', text: 'The stimulus calls one such species "rare," but this describes that particular salamander, not all female-only species. The passage does not limit how many female-only species can exist overall.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(D) Some species of higher animals containing both female and male members are not very adaptive.', text: 'The stimulus says female-only species are "less adaptive," but this is a comparative claim, not an absolute one. It does not guarantee that all two-sex species are highly adaptive.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(E) Some offspring... have genetic codes more similar to one parent than to the other parent.', text: 'This describes a basic genetic phenomenon. The stimulus provides no rule that would forbid unequal genetic inheritance in two-sex species.', badge: 'Possible', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'A Quantifier Clash is the most direct form of Must Be False contradiction: a universal rule ("all," "every," "for all") in the stimulus paired with an existential exception ("some... not," "there are... none") in the correct answer. When you spot a universal quantifier, immediately look for the answer that introduces an exception to it. The two are logical contradictories and cannot coexist.' },
  ]
};
