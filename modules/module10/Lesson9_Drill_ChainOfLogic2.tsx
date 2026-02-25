import { Lesson } from '../../types';

export const Lesson9_Drill_ChainOfLogic2: Lesson = {
  id: "10-9",
  title: "Drill: The Chain of Logic Part 2 (PT-120-S-4-Q-15)",
  content: [
    { type: 'h2', text: 'Chain of Logic — Complex Chains' },
    { type: 'paragraph', text: "This lesson builds on the Chain of Logic pattern with a more complex variation. Here, the argument describes **two separate groups** using different characteristics and then draws a conclusion that connects them. The logical chain is broken because the author assumes — without proof — that the defining trait of Group A overlaps with or implies the defining trait of Group B." },
    { type: 'paragraph', text: "Your task is to provide the missing **definitional link** between those traits. The correct answer often uses formal logical language — \"Only X are Y\" or \"No X are Y\" — creating a strict bridge that completes the chain." },
    { type: 'callout', variant: 'tip', title: 'Translating "Only" Statements', text: "\"Only X are Y\" translates to **Y → X** (if Y, then X). This reverses the intuitive reading order. \"The only X are Y\" translates to **X → Y** (if X, then Y). Getting this translation right is critical — many wrong answers exploit the confusion between these two forms." },

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'question-card',
      id: 'SA-10-9-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'hard',
      stimulus: "People who have doctorates in the liberal arts are interested in improving their intellects. Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world. As a result, companies rarely hire people who have doctorates in the liberal arts.",
      question: "The conclusion of the argument follows logically if which one of the following is assumed?",
      options: [
        "(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.",
        "(B) Some people who are interested in the liberal arts do not care about money.",
        "(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.",
        "(D) People with doctorates in the liberal arts are interested in employment in the business world.",
        "(E) Only people not concerned with making money in the business world are interested in improving their intellects. (Correct)"
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Map each statement to its conditional form, paying attention to the distinct concepts each premise introduces." },
    { type: 'breakdown', labels: { title: "Statement", text: "Logic" }, items: [
      { title: "People who have doctorates in the liberal arts are interested in improving their intellects.", text: "**LA Doctorate → Interested in Improving Intellect** (LA → II)" },
      { title: "Companies, however, rarely hire people who are not concerned with the financial gain that can be obtained by hard work in the business world.", text: "**Not Concerned with Money → Rarely Hired** (NCM → RH)" },
      { title: "As a result, companies rarely hire people who have doctorates in the liberal arts.", text: "**Conclusion:** LA Doctorate → Rarely Hired (LA → RH)" }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument's chain is broken. The two premises talk about **different traits**:\n\n- Premise 1 connects LA doctorates to \"improving intellects\"\n- Premise 2 connects \"not concerned with money\" to rarely hired\n\nTo prove LA → RH, we need to link the *end* of Premise 1 to the *start* of Premise 2." },
    { type: 'code', text: "Have:         LA → II        (Premise 1)\nHave:         NCM → RH       (Premise 2)\nNeed:         LA → RH        (Conclusion)\nMissing link: II → NCM\n\nFull chain:   LA → II → NCM → RH  ✓" },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "We need: **\"If you are Interested in Improving your Intellect, then you are Not Concerned with Money.\"** (II → NCM)\n\nThis link may appear in disguised form — particularly as an \"only\" statement, which reverses the apparent order of terms." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) Companies would hire people with doctorates in the liberal arts if such people were interested in the money available in the business world.", text: "This describes a hypothetical scenario (\"if they were interested in money\"). It does not establish what is actually true about people with LA doctorates. A conditional about a different situation cannot close the gap in the current argument.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) Some people who are interested in the liberal arts do not care about money.", text: "\"Some\" is far too weak for a sufficient assumption. Even if *some* LA-interested people don't care about money, we cannot conclude that companies rarely hire *the entire group*. Sufficiency requires a universal claim, not a partial one.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) The only people not interested in making money in the business world are people who are interested in improving their intellects.", text: "\"The only X are Y\" translates to **X → Y**, so this gives us: NCM → II. That is the **reverse** of the link we need (II → NCM). It tells us that everyone not concerned with money is interested in improving their intellect — but we need the opposite direction.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) People with doctorates in the liberal arts are interested in employment in the business world.", text: "This establishes that LA doctorate holders *want* business jobs, but it does not explain why they are rarely hired. It provides no bridge between \"improving intellects\" and \"not concerned with money.\"", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) Only people not concerned with making money in the business world are interested in improving their intellects.", text: "\"Only X are Y\" translates to **Y → X**: If you are Interested in Improving your Intellect (Y), then you are Not Concerned with Money (X).\n\n**Translation:** II → NCM — exactly the bridge we predicted.\n\n**Full chain:** LA → II → NCM → RH. The conclusion (LA → RH) follows with certainty.", badge: "Correct", badgeColor: "green" }
    ]},

    { type: 'callout', title: "Key Takeaway", variant: "summary", text: "**Complex chains** involve premises that use *different concepts* for their endpoints. The gap is a definitional link that equates or connects those concepts.\n\n**Translation is everything.** \"Only X are Y\" means Y → X. \"The only X are Y\" means X → Y. Many wrong answers exploit this confusion by offering the reversal of the link you need.\n\n**Systematic approach:** (1) Diagram each premise as a conditional. (2) Diagram the conclusion. (3) Identify which link is missing. (4) Translate each answer choice into conditional form and check if it supplies the missing link." }
  ]
};
