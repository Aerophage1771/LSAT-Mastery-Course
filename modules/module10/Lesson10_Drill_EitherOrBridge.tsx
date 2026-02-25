import { Lesson } from '../../types';

export const Lesson10_Drill_EitherOrBridge: Lesson = {
  id: "10-10",
  title: "Drill: The Either/Or Bridge (PT-119-S-4-Q-19)",
  content: [
    { type: 'h2', text: 'The Either/Or Bridge Pattern' },
    { type: 'paragraph', text: "The Either/Or Bridge is a more complex variation of the Concept Link. The argument breaks a situation into **two (or more) mutually exhaustive possibilities**, shows that a certain response is appropriate for each possibility, and then concludes that an *entirely different* response is therefore inappropriate." },
    { type: 'paragraph', text: "The logical gap is the **missing unifying principle** that connects the appropriate responses to the inappropriate one. To make the argument sufficient, you must find a single rule that covers *both branches* and links their outcomes to the conclusion." },

    { type: 'callout', variant: 'tip', title: 'The Either/Or Structure', text: "Look for arguments that say: \"X is either A or B. If A, the response should be C. If B, the response should be D. Therefore, response E is unreasonable.\" The gap is always: \"If the proper response is C or D, then E is unreasonable.\" Beware of partial bridges that only cover one branch — they are the signature trap for this pattern." },

    { type: 'table', headers: ['Component', 'Role in the Argument'], rows: [
      ['Premise: X is either A or B', 'Exhaustive division — covers all cases'],
      ['Premise: If A → response C', 'Branch 1 — establishes appropriate response'],
      ['Premise: If B → response D', 'Branch 2 — establishes appropriate response'],
      ['Conclusion: Response E is wrong', 'Judgment about a *different* response'],
      ['**Gap: If C or D → not E**', '**Unifying principle connecting both branches to the conclusion**']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'question-card',
      id: 'SA-10-10-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "Anger in response to insults is unreasonable, for insults are merely assertions that someone has undesirable characteristics. If such an assertion is false, the insulted party ought to pity the ignorance prompting the insult. If it is true, the insulted party should be grateful for such useful information.",
      question: "Which one of the following, if assumed, enables the argument's conclusion to be properly drawn?",
      options: [
        "(A) Actions prompted by ignorance do not warrant hostile reactions.",
        "(B) Anger is an unreasonable response to useful information.",
        "(C) Anger is an unreasonable response to any action that should prompt pity or gratitude. (Correct)",
        "(D) Gratitude and pity are reasonable responses to some forms of hostile or insensitive behavior.",
        "(E) Pity is the only reasonable reaction to people with undesirable characteristics."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Identify the branching structure the author uses to reach the conclusion." },
    { type: 'breakdown', labels: { title: "Statement", text: "Analysis" }, items: [
      { title: "Anger in response to insults is unreasonable.", text: "**Conclusion.** A judgment that a specific emotional response (anger) is never appropriate for insults." },
      { title: "Insults are merely assertions that someone has undesirable characteristics.", text: "Definition that sets up the two-branch structure: the assertion is either true or false." },
      { title: "If such an assertion is false, the insulted party ought to pity the ignorance prompting the insult.", text: "**Branch 1:** False insult → proper response is **pity**." },
      { title: "If it is true, the insulted party should be grateful for such useful information.", text: "**Branch 2:** True insult → proper response is **gratitude**." }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument establishes that in every possible case (the insult is either true or false), the proper response is either **pity** or **gratitude**. From this, it concludes that **anger** is unreasonable.\n\nThe unstated assumption: if the correct response is pity or gratitude, then anger must be unreasonable. But why? The fact that one response is appropriate does not automatically make another response inappropriate — unless a rule says so." },
    { type: 'code', text: "Branch 1:  False insult → Pity is appropriate\nBranch 2:  True insult  → Gratitude is appropriate\nConclusion: Anger is unreasonable for insults\n\nGap: (Pity appropriate OR Gratitude appropriate) → Anger unreasonable" },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "We need a **single, unifying rule** that covers both branches:" },
    { type: 'list', items: [
      "**\"If an action should prompt pity or gratitude, then anger is an unreasonable response to that action.\"**",
      "This one rule takes the outcome of *both* branches and connects them directly to the conclusion."
    ]},

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) Actions prompted by ignorance do not warrant hostile reactions.", text: "**Partial bridge.** This only covers Branch 1 (the false insult prompted by ignorance). It says nothing about Branch 2 (the true insult that should prompt gratitude). Since the argument requires coverage of *both* cases, this answer is insufficient.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) Anger is an unreasonable response to useful information.", text: "**Partial bridge.** This only covers Branch 2 (the true insult as \"useful information\"). It does not address Branch 1 (the false insult that should prompt pity). Half the argument remains unproven.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) Anger is an unreasonable response to any action that should prompt pity or gratitude.", text: "This is the perfect unifying principle. It covers both branches in a single rule.\n\n**Logic Check:**\n- Is an insult either false or true? Yes (exhaustive).\n- If false → should prompt pity → anger is unreasonable (by this rule). ✓\n- If true → should prompt gratitude → anger is unreasonable (by this rule). ✓\n- Since anger is unreasonable in both cases, it is unreasonable in *all* cases. The conclusion is 100% guaranteed.", badge: "Correct", badgeColor: "green" },
      { title: "(D) Gratitude and pity are reasonable responses to some forms of hostile or insensitive behavior.", text: "This confirms that pity and gratitude *can be* reasonable, but it does not establish that anger is therefore *unreasonable*. One response being appropriate does not logically exclude another unless a rule explicitly says so.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) Pity is the only reasonable reaction to people with undesirable characteristics.", text: "This is too strong and too narrow. It contradicts the argument's own claim that gratitude is also reasonable (when the insult is true). It also talks about reactions to *people*, not to *actions*.", badge: "Incorrect", badgeColor: "red" }
    ]},

    { type: 'callout', title: "Key Takeaway", variant: "summary", text: "**The Either/Or Bridge** requires a single principle that unifies multiple branches. When an argument says \"in case A, do X; in case B, do Y; therefore Z is wrong,\" the missing assumption must connect *both* X and Y to the conclusion about Z.\n\n**The signature trap:** Partial bridges (A and B) that only cover one branch. These are tempting because they address the right topic, but they leave half the argument unsupported.\n\n**How to verify:** Check the candidate answer against *each* branch independently. If it fails for even one branch, it is not sufficient." }
  ]
};
