import { Lesson } from '../../types';

export const Lesson11_Advanced_QuantitativeConditional: Lesson = {
  id: "5-11",
  title: "Advanced Drill: Quantitative-Conditional Flaw",
  content: [
    { type: 'h2', text: 'Advanced Drill: The Quantitative-Conditional Translation' },

    { type: 'h3', text: 'Concept Focus: Where Quantity Meets Conditional Logic' },
    { type: 'paragraph', text: "The **Quantitative-Conditional Flaw** is one of the most devious error types on the LSAT. It occurs when an argument uses conditional logic words — specifically **\"if\"** versus **\"only if\"** — to describe groups of people in a survey or poll, then draws a conclusion that hinges on mistranslating these words. The trap is that \"if\" and \"only if\" look interchangeable in everyday language but describe **completely different sets of people** in formal logic." },
    { type: 'paragraph', text: "This flaw type sits at the intersection of conditional logic and statistical reasoning, making it particularly challenging. To solve it, you must simultaneously track (1) the formal logic translation of the survey question and (2) the quantitative implications for the size of each group." },

    { type: 'hr' },

    { type: 'h2', text: 'The Critical Distinction: \"If\" vs. \"Only If\"' },
    { type: 'paragraph', text: "Before tackling the flaw, you must understand the precise logical difference between \"if\" and \"only if\" — because the entire argument turns on this distinction:" },

    { type: 'table', headers: ['Statement', 'Formal Translation', 'What It Means', 'Group Described'], rows: [
      ['"Officials should resign **if** indicted"', 'Indicted → Should Resign', 'Indictment is **sufficient** for resignation — being indicted alone is enough reason to resign', 'People who think indictment is a sufficient trigger'],
      ['"Officials should resign **only if** convicted"', 'Should Resign → Convicted', 'Conviction is **necessary** for resignation — you should only resign if you\'ve been convicted (not before)', 'People who think conviction is required before resignation'],
    ]},

    { type: 'paragraph', text: "These are dramatically different beliefs:" },
    { type: 'breakdown', labels: { title: 'Belief Group', text: 'What They Think' }, items: [
      { title: '"If indicted" group', text: "These people set a **low bar** for resignation. Even a mere indictment (no conviction needed) is enough reason to resign. They would also support resignation upon conviction, since conviction is a stronger trigger than indictment.", badge: 'Low Bar', badgeColor: 'green' },
      { title: '"Only if convicted" group', text: "These people set a **high bar** for resignation. They believe officials should NOT resign over a mere indictment — conviction is the minimum threshold. But this does NOT tell us they think conviction is *sufficient* — they might believe resignation requires conviction PLUS other factors.", badge: 'High Bar', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'The Key Insight', text: "The \"only if convicted\" group is NOT the same as the \"if convicted\" group.\n\n• The \"**if convicted**\" group = people who think conviction is *sufficient* for resignation. This could be HUGE — virtually everyone might agree that a convicted official should resign.\n\n• The \"**only if convicted**\" group = people who think conviction is *necessary* for resignation (i.e., they oppose resignation for anything less). This is a much more specific, typically smaller group.\n\nThe flaw occurs when an argument treats the size of the \"only if\" group (necessary) as if it represents the total size of the \"if\" group (sufficient)." },

    { type: 'hr' },

    { type: 'h2', text: 'How Percentage Arguments Can Be Structurally Flawed' },
    { type: 'paragraph', text: "When survey data uses conditional language, the logical structure determines which group is actually being measured. Misreading this structure can lead to conclusions that are not just wrong, but **logically backwards**. Here's why:" },

    { type: 'process', title: 'The Logical Chain', steps: [
      "**Premise 1:** 50% believe officials should resign **if** indicted. (Indicted → Resign)\nThese people think indictment is sufficient. Since conviction is a *stronger* trigger than indictment, virtually all of these people would also support resignation upon conviction.",
      "**Premise 2:** 35% believe officials should resign **only if** convicted. (Resign → Convicted)\nThese people set the bar at conviction. They are a *subset* of those who think conviction is a sufficient trigger.",
      "**The \"if convicted\" group** = people who think conviction is sufficient for resignation. This group includes: (a) the 50% who think even indictment is enough (they'd certainly support resignation for the stronger trigger of conviction), AND (b) additional people who set the bar between indictment and conviction.\nThe \"if convicted\" group is therefore MUCH larger than 35% — likely 85% or more.",
      "**The conclusion** compares the \"if indicted\" group (50%) to the \"if convicted\" group and claims the former is larger. But the \"if convicted\" group is not 35% — it's far larger. The argument substituted the \"only if convicted\" group (35%) for the \"if convicted\" group.",
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card', id: 'FL-5-11-001', questionType: 'Flaw', difficulty: 'hard',
      stimulus: "A recent survey showed that 50 percent of people polled believe that elected officials should resign if indicted for a crime, whereas 35 percent believe that elected officials should resign only if they are convicted of a crime. Therefore, more people believe that elected officials should resign if indicted than believe that they should resign if convicted.",
      question: "The reasoning above is flawed because it",
      options: [
        "(A) draws a conclusion about the population in general based only on a sample of that population",
        "(B) confuses a sufficient condition with a required condition (Correct)",
        "(C) is based on an ambiguity of one of its terms",
        "(D) draws a conclusion about a specific belief based on responses to queries about two different specific beliefs",
        "(E) contains premises that cannot all be true"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      "**Step 1 — Deconstruct the Argument:**\n*   **Premise 1:** 50% believe officials should resign **if** indicted. (Indictment is a *sufficient* trigger for resignation.)\n*   **Premise 2:** 35% believe officials should resign **only if** convicted. (Conviction is a *necessary* condition — the minimum standard they require.)\n*   **Conclusion:** More people believe officials should resign **if** indicted than believe they should resign **if** convicted.",
      "**Step 2 — Find the Logical Gap:** The conclusion compares two groups — both described with \"if\" (sufficient condition). But Premise 2 uses \"only if\" (necessary condition), not \"if\" (sufficient condition). The argument treats the 35% who believe conviction is *required* (necessary) as the total number who believe conviction is *sufficient*. In reality, the group who thinks officials should resign if convicted (sufficient) is much larger: it includes the 50% who set the bar at indictment (an even lower threshold), plus the 35% who require conviction, plus potentially others.",
      "**Step 3 — Prephrase:** The argument confuses a necessary condition (\"only if convicted\" = conviction is required) with a sufficient condition (\"if convicted\" = conviction is enough). It uses the size of the \"required\" group to represent the size of the \"enough\" group.\n\n**Prephrase:** \"It mistakes the 'only if convicted' group for the 'if convicted' group.\"",
      "**Step 4 — Evaluate the Answer Choices:**"
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation'}, items: [
      { title: '(A) draws a conclusion about the population in general based only on a sample of that population', text: 'This describes a sampling flaw — generalizing from a survey to the whole population. While surveys always involve sampling, the error here is in the *interpretation* of the survey\'s logical terms, not in the act of sampling itself. Even a perfect census with 100% response rate would still produce the same logical error.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(B) confuses a sufficient condition with a required condition', text: 'The phrase "only if they are convicted" establishes conviction as a **required** (necessary) condition. The conclusion treats this group as if they are the people who believe "if they are convicted" (a **sufficient** condition). This misinterpretation — swapping the meaning of necessary and sufficient — is the reason the quantitative comparison fails.', badge: 'Correct', badgeColor: 'green'},
      { title: '(C) is based on an ambiguity of one of its terms', text: 'This describes an equivocation flaw — a word used in two senses. The terms "indicted" and "convicted" are clear legal terms with no ambiguity. The error is not in the definitions of words but in the logical structure of the conditional statements.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(D) draws a conclusion about a specific belief based on responses to queries about two different specific beliefs', text: 'This answer describes *what* the argument does (makes a comparison across beliefs), but doesn\'t explain *why* it\'s flawed. Many valid arguments compare responses to different questions. The flaw is the specific misinterpretation of the conditional logic, not the act of comparing.', badge: 'Incorrect', badgeColor: 'red'},
      { title: '(E) contains premises that cannot all be true', text: 'There is no contradiction. It is perfectly consistent for 50% to hold one belief and 35% to hold another — these percentages don\'t need to sum to 100%, as people may hold both beliefs, neither, or other views entirely.', badge: 'Incorrect', badgeColor: 'red'}
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Visualizing the Group Sizes' },
    { type: 'paragraph', text: "One powerful way to understand this flaw is to visualize the relative sizes of the groups involved. Consider three groups of respondents:" },
    { type: 'table', headers: ['Group', 'Belief', 'Size (from survey)', 'Relationship to \"If Convicted\" Group'], rows: [
      ['"If indicted" group', 'Indictment alone is sufficient to resign', '50%', 'Subset of "if convicted" (lower bar includes higher bar)'],
      ['"Only if convicted" group', 'Conviction is the minimum standard required', '35%', 'Subset of "if convicted"'],
      ['"If convicted" group', 'Conviction is sufficient to resign', 'NOT measured — but likely very large', 'Includes BOTH groups above, plus others'],
    ]},
    { type: 'paragraph', text: "The \"if convicted\" group is the broadest: it includes anyone who thinks conviction is a sufficient trigger for resignation. Since indictment is a *lesser* charge than conviction, anyone who supports resignation for indictment would *certainly* support it for conviction. The \"if convicted\" group therefore includes at minimum the 50% + 35% = 85%, and possibly more. The argument's conclusion that more people support resignation for indictment (50%) than for conviction is almost certainly *backwards*." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },
    { type: 'question-card', id: 'FL-5-11-002', questionType: 'Flaw', difficulty: 'hard',
      stimulus: "A consumer survey found that 60 percent of respondents would purchase a product if it were recommended by a friend, while only 25 percent said they would purchase a product only if it had received positive reviews from professional critics. The marketing team concluded that personal recommendations are a more powerful driver of purchasing decisions than professional reviews.",
      question: "The marketing team's reasoning is most vulnerable to criticism because it",
      options: [
        "(A) fails to consider that some respondents may have been influenced by both personal recommendations and professional reviews",
        "(B) presumes that the survey respondents are representative of consumers in general",
        "(C) treats the proportion of people for whom professional reviews are a necessary condition for purchase as though it represents the proportion for whom such reviews are a sufficient condition (Correct)",
        "(D) overlooks the possibility that professional reviews may influence purchase decisions in ways that respondents are not aware of",
        "(E) ignores the fact that personal recommendations and professional reviews may both be necessary for most purchasing decisions"
      ]
    },

    { type: 'h3', text: 'Analysis' },
    { type: 'paragraph', text: "This question follows the same pattern as the worked example:" },
    { type: 'list', items: [
      "60% would purchase **if** recommended by a friend → friend recommendation is *sufficient* to drive a purchase",
      "25% would purchase **only if** it had positive professional reviews → professional reviews are *necessary* (the minimum bar) for these people",
      "The conclusion compares the \"if friend recommends\" group (60%) to the implied \"if professionally reviewed\" group — but uses the 25% figure, which represents the \"only if reviewed\" group",
      "The \"if professionally reviewed\" group (people for whom a positive review is sufficient to trigger a purchase) is likely much larger than 25% — it could include the 60% who buy based on friend recommendations (since professional reviews are arguably an even stronger endorsement) plus additional people",
    ]},
    { type: 'paragraph', text: "Answer (C) identifies the precise error: treating the proportion for whom reviews are *necessary* (25%, the \"only if\" group) as the proportion for whom reviews are *sufficient* (the \"if\" group, which is much larger)." },

    { type: 'hr' },

    { type: 'h2', text: 'Spotting the Quantitative-Conditional Flaw' },
    { type: 'paragraph', text: "Use this checklist when you encounter a survey or poll in a Flaw question:" },
    { type: 'process', title: 'Detection Checklist', steps: [
      '**Flag survey/poll language.** Whenever a stimulus mentions a survey, poll, or study with percentages, be on alert for this flaw type.',
      '**Identify "if" vs. "only if."** Look for these exact phrases in the premise describing the survey responses. Are different groups described with different conditional terms?',
      '**Translate formally.** "If X" = X is sufficient. "Only if X" = X is necessary. Write the formal translations to clarify which group is actually being measured.',
      '**Check the conclusion.** Does the conclusion compare groups using "if" for both? If one premise uses "only if" but the conclusion uses "if," there\'s a translation error.',
      '**Assess the actual group sizes.** Think about which group is likely larger. The "if X" group (X is sufficient) is almost always larger than the "only if X" group (X is necessary), because the "only if" group sets a higher bar.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Quick Translation Guide', text: "When you encounter conditional language in survey questions:\n\n• **\"A if B\"** means B → A. B is sufficient for A.\n• **\"A only if B\"** means A → B. B is necessary for A.\n• **\"A if and only if B\"** means A ↔ B. B is both necessary and sufficient.\n\nThe flaw ALWAYS involves treating an \"only if\" group as an \"if\" group — i.e., treating a necessary condition as a sufficient one." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. \"If\" and \"Only If\" describe different groups.** \"A if B\" makes B sufficient for A (a low bar). \"A only if B\" makes B necessary for A (a high bar). These groups have different sizes and different logical properties.\n\n**2. The flaw is always the same swap.** The argument treats the \"only if\" group (those who require a condition) as the \"if\" group (those for whom a condition is sufficient). Since the \"if\" group is typically much larger, this swap makes the group appear smaller than it really is.\n\n**3. Watch for survey language.** This flaw type almost always appears in the context of polls, surveys, or studies that report percentages alongside conditional language. When you see percentages + \"if\"/\"only if,\" be on high alert.\n\n**4. The conclusion's comparison is the giveaway.** The conclusion will compare groups using parallel \"if\" language for both, even though one premise used \"only if.\" This mismatch between premise language and conclusion language is the telltale sign.\n\n**5. Think about which group is actually larger.** When in doubt, ask: \"Who would agree with [statement using 'if']?\" If the answer includes the people from *both* survey groups, the argument's comparison is flawed because it undercounts one side." },
  ]
};
