import { Lesson } from '../../types';

export const Lesson3_Drill_DirectApplication: Lesson = {
  id: "13-3",
  title: "Drill: Direct Application (PT-104-S-4-Q-1)",
  content: [
    { type: 'h2', text: 'Direct Application' },
    { type: 'paragraph', text: "A **Direct Application** is the most fundamental Principle-Apply pattern. In a direct application, the correct answer mirrors the principle's structure exactly: every condition in the principle is satisfied by the facts in the scenario, and the scenario reaches the same consequence the principle dictates. There is no contrapositive reasoning, no negation, no exception — just a clean, one-to-one structural match between the abstract rule and the concrete case." },

    { type: 'paragraph', text: "Direct applications are the most common Principle-Apply pattern and are often the easiest to solve — *if* you are systematic. The difficulty comes not from the logic (which is straightforward) but from the precision required: the LSAT constructs wrong answers that match the principle on every dimension except one. That one missed condition is usually the most subtle element of the rule: a qualifier about intent, a requirement about degree, or a specification about the purpose of an action." },

    { type: 'h3', text: 'What Makes an Application \"Direct\"' },
    { type: 'paragraph', text: "In a direct application, the answer choice:" },
    { type: 'list', ordered: true, items: [
      '**Presents facts that satisfy every condition** in the principle — not most, not the important ones, but *all* of them.',
      '**Reaches the exact consequence** stated in the principle — if the principle says the action is \"wrong,\" the answer must conclude it is wrong, not merely \"questionable\" or \"risky.\"',
      '**Uses the principle in the forward direction** — from conditions to consequence (IF → THEN), not from consequence back to conditions.',
    ]},

    { type: 'callout', variant: 'default', title: 'Direct vs. Contrapositive Application', text: "A direct application applies the principle forward: conditions are met → consequence follows. A contrapositive application applies the principle in reverse: consequence did NOT follow → at least one condition was NOT met. Both are logically valid, but direct applications are more common on the LSAT because they test straightforward matching rather than logical negation. This drill focuses exclusively on direct application." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Direct Application (PT-104-S-4-Q-1)' },
    { type: 'paragraph', text: "This drill demonstrates the direct application pattern using a principle with multiple conditions. Your job is to decompose the principle, build a checklist, and find the one answer that satisfies every item on that checklist." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '13-3-drill',
      questionType: 'Principle - Apply',
      difficulty: 'medium',
      stimulus: "Politician: Governments should tax any harmful substance that is available to the general public at a level that the tax would discourage continued use of the substance.",
      question: "Which one of the following is an application of the politician's principle of taxation?",
      options: [
        "(A) The tax on products containing sugar is raised in an effort to raise revenue to be applied to the health costs resulting from the long-term use of these products.",
        "(B) The tax on certain pain relievers that, even though harmful, are available over the counter is raised, since studies have shown that the demand for these products will not be affected.",
        "(C) The tax on a pesticide that contains an organic compound harmful to human beings is raised to give people an incentive to purchase pesticides not containing the compound. (Correct)",
        "(D) The tax on domestically produced alcoholic beverages is not raised, since recent studies show that the tax would have a negative impact on the tourist industry.",
        "(E) The tax on products that emit fluorocarbons, substances that have proven to be harmful to the earth's ozone layer, is lowered to stimulate the development of new, less environmentally harmful ways of using these substances.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Diagram the Principle' },
    { type: 'paragraph', text: "The politician's statement is a single conditional rule. Let's translate it into a clear logical structure:" },
    { type: 'paragraph', text: "**Natural language:** \"Governments should tax any harmful substance that is available to the general public at a level that the tax would discourage continued use of the substance.\"" },
    { type: 'paragraph', text: "**Conditional form:** IF [Substance is Harmful] AND [Substance is Available to the General Public] → THEN [Government Should Tax It at a Level That Discourages Use]" },
    { type: 'paragraph', text: "This is a standard multi-condition rule with a specific consequence. The consequence is not just \"tax it\" — it specifies the *purpose* of the tax (to discourage use) and the *level* of the tax (sufficient to achieve that purpose). These details are critical." },

    { type: 'h4', text: 'Step 2: List the Conditions' },
    { type: 'paragraph', text: "Let's extract each condition and the consequence into an explicit checklist:" },
    { type: 'breakdown', labels: { title: 'Checklist Item', text: 'What to Look For in Each Answer' }, items: [
      { title: 'Condition 1: The substance is harmful', text: 'The scenario must describe a substance that causes harm — to health, to the environment, to safety, etc. The harm must be established, not merely speculated.', badge: 'Required', badgeColor: 'blue' },
      { title: 'Condition 2: The substance is available to the general public', text: 'The substance must be publicly accessible — sold over the counter, commercially available, etc. A substance restricted to professionals or specific industries may not satisfy this condition.', badge: 'Required', badgeColor: 'blue' },
      { title: 'Consequence: The tax should discourage continued use', text: 'The tax must be levied for the specific purpose of reducing consumption. The goal is behavioral change — making people use less of the substance. A tax imposed for revenue, for research funding, or for any other purpose does not match.', badge: 'Required', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'tip', title: 'The Hidden Condition', text: "Notice that the consequence itself contains a requirement: the tax must be at a level that *would discourage use*. This means the tax must be both (a) high enough to change behavior and (b) imposed *for the purpose of* changing behavior. A tax that is raised but acknowledged to have no effect on demand fails this requirement. The purpose and effectiveness are baked into the consequence." },

    { type: 'h4', text: 'Step 3: Check Each Answer' },
    { type: 'paragraph', text: "Now let's apply the checklist to each answer choice systematically." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Checklist Evaluation' }, items: [
      { title: '(A) Sugar products: tax raised to raise revenue for health costs.', text: "**Condition 1 (Harmful):** Sugar products cause health problems — arguably satisfied.\n**Condition 2 (Publicly Available):** Sugar products are available to the general public. ✓\n**Consequence (Tax to Discourage Use):** The purpose stated is to \"raise revenue to be applied to health costs\" — this is a revenue-generation goal, NOT a discouragement goal. The principle requires that the tax's purpose be to reduce consumption. Even if a higher tax incidentally discourages some use, the stated rationale is revenue, not behavioral change.\n\n**Verdict: Fails the consequence.** The wrong goal.", badge: 'Wrong Goal', badgeColor: 'red' },
      { title: '(B) Pain relievers: tax raised, but demand will not be affected.', text: "**Condition 1 (Harmful):** The answer explicitly states the pain relievers are harmful. ✓\n**Condition 2 (Publicly Available):** Available over the counter. ✓\n**Consequence (Tax to Discourage Use):** Studies show demand \"will not be affected\" by the tax increase. The principle requires a tax at a level that *would discourage* continued use. A tax that has no effect on demand is the exact opposite of what the principle calls for — it fails the discouragement requirement by definition.\n\n**Verdict: Directly contradicts the consequence.** The tax is explicitly acknowledged to be ineffective.", badge: 'Contradicts Consequence', badgeColor: 'red' },
      { title: '(C) Pesticide with harmful compound: tax raised to incentivize purchasing alternatives.', text: "**Condition 1 (Harmful):** The pesticide contains a compound \"harmful to human beings.\" ✓\n**Condition 2 (Publicly Available):** Pesticides are commercially available to the public. ✓\n**Consequence (Tax to Discourage Use):** The tax is raised \"to give people an incentive to purchase pesticides not containing the compound.\" Giving an incentive to buy *alternatives* is functionally identical to discouraging use of the harmful product. If people switch to alternatives, they stop using the harmful substance — that *is* discouragement.\n\n**Verdict: All conditions met. Consequence matches.** This is a direct, clean application of every element of the principle.", badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Alcoholic beverages: tax NOT raised due to tourism impact.', text: "**Condition 1 (Harmful):** Alcohol is widely recognized as harmful. ✓\n**Condition 2 (Publicly Available):** Alcoholic beverages are publicly available. ✓\n**Consequence (Tax to Discourage Use):** The tax is *not* raised. The principle says the government *should* tax harmful public substances to discourage use. This answer describes a government choosing NOT to tax — which is the opposite of what the principle recommends. The reason (tourism impact) is entirely outside the principle's framework.\n\n**Verdict: Wrong action.** The principle calls for taxing; this answer describes not taxing.", badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(E) Fluorocarbon products: tax LOWERED to stimulate development of alternatives.', text: "**Condition 1 (Harmful):** Fluorocarbons are harmful to the ozone layer. ✓\n**Condition 2 (Publicly Available):** These products are publicly available. ✓\n**Consequence (Tax to Discourage Use):** The tax is *lowered*. The principle calls for taxing at a level that *discourages* use. Lowering a tax does the opposite — it makes the harmful product *cheaper* and *easier* to keep using. The stated rationale (stimulating development of alternatives) is a different goal from discouraging current use.\n\n**Verdict: Wrong direction.** Lowering a tax is the opposite of the principle's prescribed action.", badge: 'Wrong Direction', badgeColor: 'red' },
    ]},

    { type: 'h4', text: 'Step 4: Verify' },
    { type: 'paragraph', text: "Re-read the principle and confirm that answer (C) satisfies every requirement:" },
    { type: 'list', ordered: true, items: [
      '**\"any harmful substance\"** → The pesticide contains an organic compound harmful to human beings. ✓',
      '**\"that is available to the general public\"** → Pesticides are commercially available. ✓',
      '**\"tax... at a level that the tax would discourage continued use\"** → The tax is raised to give people an incentive to purchase alternatives — which means discouraging use of the harmful pesticide. ✓',
    ]},
    { type: 'paragraph', text: "All three elements are satisfied. The answer is confirmed." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'Harmful?', 'Public?', 'Tax to Discourage Use?', 'Verdict'], rows: [
      ['(A) Sugar products', '✓', '✓', '✗ — Revenue goal, not discouragement', 'Wrong Goal'],
      ['(B) Pain relievers', '✓', '✓', '✗ — Tax won\'t affect demand', 'Contradicts Consequence'],
      ['**(C) Pesticide**', '**✓**', '**✓**', '**✓ — Incentivize alternatives = discourage use**', '**Correct ✓**'],
      ['(D) Alcohol', '✓', '✓', '✗ — Tax NOT raised', 'Wrong Action'],
      ['(E) Fluorocarbons', '✓', '✓', '✗ — Tax LOWERED', 'Wrong Direction'],
    ]},

    { type: 'paragraph', text: "Notice the pattern: **every wrong answer satisfies Conditions 1 and 2** (harmful and publicly available). The differentiator is always the consequence — the purpose and direction of the tax. This is typical of well-constructed Principle-Apply questions. The LSAT doesn't make it easy by having wrong answers fail on obvious conditions. Instead, every answer looks plausible on the surface, and the distinction is in the precise details of the consequence." },

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Direct application means a one-to-one structural match.** The correct answer mirrors the principle exactly: same conditions satisfied, same consequence reached, same logical direction. No inference, no negation, no exception — just a clean match.\n\n**2. The consequence includes its purpose.** In this question, the principle doesn't just say \"tax it\" — it says \"tax it to discourage use.\" The purpose is part of the consequence, and answers that satisfy the action (taxing) but not the purpose (discouraging use) are wrong. Always decompose the consequence fully.\n\n**3. All wrong answers may satisfy most conditions.** In this question, every wrong answer involved a harmful, publicly available substance. The differentiator was the consequence — specifically, the *goal* or *direction* of the tax. Don't stop checking once the conditions match. Verify the consequence too.\n\n**4. \"Discouraging use\" can be expressed indirectly.** The correct answer (C) doesn't use the word \"discourage.\" Instead, it says \"give people an incentive to purchase\" alternatives. Recognizing that incentivizing alternatives *is* discouraging use requires understanding the functional equivalence — not just matching keywords.\n\n**5. Build the checklist before looking at answers.** If you had your three-item checklist (harmful + public + tax-to-discourage) firmly in mind before reading the answer choices, the correct answer would be immediately identifiable and every wrong answer would fail on a clear, specific criterion. The checklist approach transforms a subjective judgment into a mechanical process." },
  ]
};
