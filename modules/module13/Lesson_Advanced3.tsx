import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '13-10',
  title: 'Advanced Lesson 3: The Near-Perfect Counterfeit',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: The Near-Perfect Counterfeit"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Biconditional Rigor & Condition Mismatches"
    },
    {
      "type": "paragraph",
      "text": "This lesson examines the most dangerous trap in advanced Principle-Apply questions: the Near-Perfect Counterfeit. On Level 5 questions, the test-makers will present an answer choice that gets 90% of the logic right. It will use the same keywords, follow the general flow of the principle, and seem intuitively correct. However, it will fail on a single, subtle detail—often a quantifier or a scope restriction—that invalidates the entire application."
    },
    {
      "type": "paragraph",
      "text": "These questions often involve **Biconditional Statements** (\"if and only if\" or \"when and only when\"). A biconditional establishes a strict, two-way street: A implies B, and B implies A. To apply it correctly, you must satisfy the conditions with absolute precision. A \"close enough\" match is a wrong answer."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > Ethicist: A society is just when, and only when, first, each person has an equal right to basic liberties, and second, inequalities in the distribution of income and wealth are not tolerated unless these inequalities are to everyone's advantage and are attached to jobs open to everyone. > > **Question** > > Which one of the following judgments most closely conforms to the principle described above? > > *   (A) Society S guarantees everyone an equal right to basic liberties, while allowing inequalities in the distribution of income and wealth that are to the advantage of everyone. Further, the jobs to which these inequalities are attached are open to most people. Thus, society S is just. > *   (B) Society S gives everyone an equal right to basic liberties, but at the expense of creating inequalities in the distribution of income and wealth. Thus, society S is not just. > *   (C) Society S allows inequalities in the distribution of income and wealth, although everyone benefits, and these inequalities are attached to jobs that are open to everyone. Thus, society S is just. > *   (D) Society S distributes income and wealth to everyone equally, but at the expense of creating inequalities in the right to basic liberties. Thus, society S is not just. > *   (E) Society S gives everyone an equal right to basic liberties, and although there is an inequality in the distribution of income and wealth, the jobs to which these inequalities are attached are open to all. Thus, society S is just."
    },
    {
      "type": "h4",
      "text": "Step 1: Map the Principle"
    },
    {
      "type": "paragraph",
      "text": "The phrase \"when, and only when\" creates a biconditional definition of a Just Society."
    },
    {
      "type": "paragraph",
      "text": "**Condition 1 (Liberties):** EVERY person has EQUAL right to basic liberties."
    },
    {
      "type": "list",
      "items": [
        "*AND*"
      ]
    },
    {
      "type": "paragraph",
      "text": "**Condition 2 (Inequalities):** Economic inequalities are NOT tolerated UNLESS:"
    },
    {
      "type": "list",
      "items": [
        "2a. They are to **everyone's** advantage.",
        "*AND*",
        "2b. They are attached to jobs open to **everyone**."
      ]
    },
    {
      "type": "paragraph",
      "text": "If ANY of these conditions are violated, the society is **Not Just**. If ALL are met, it is **Just**."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Specific Task"
    },
    {
      "type": "paragraph",
      "text": "We need to find the judgment that \"conforms.\" This means finding a scenario where the facts perfectly align with the rules to produce the stated conclusion (Just or Not Just)."
    },
    {
      "type": "h4",
      "text": "Step 3: Analyze the \"Counterfeit\" Trap"
    },
    {
      "type": "paragraph",
      "text": "Choice (A) is designed to trap you. Let's look at it closely:"
    },
    {
      "type": "list",
      "items": [
        "*Fact 1:* Equal right to liberties. (Matches Condition 1).",
        "*Fact 2:* Inequalities benefit everyone. (Matches Condition 2a).",
        "*Fact 3:* Jobs are open to most people. (Wait!)",
        "*Conclusion:* Society S is just."
      ]
    },
    {
      "type": "paragraph",
      "text": "The principle explicitly requires jobs to be open to **everyone**. \"Most people\" is not \"everyone.\" Because Condition 2b is violated, the society is actually *unjust* according to the principle. Choice (A) draws the wrong conclusion (\"is just\") based on a near-perfect but ultimately flawed set of facts."
    },
    {
      "type": "h4",
      "text": "Step 4: Test Remaining Choices"
    },
    {
      "type": "paragraph",
      "text": "**(B)** This says inequalities exist but concludes the society is *not just* simply because of that. The principle *allows* inequalities if conditions 2a/2b are met. Since we don't know if those sub-conditions were met, we can't definitively conclude it's unjust."
    },
    {
      "type": "paragraph",
      "text": "**(C)** This satisfies conditions 2a and 2b but ignores Condition 1 (Liberties). Without knowing if liberties are equal, we cannot conclude the society is just."
    },
    {
      "type": "paragraph",
      "text": "**(D)** This scenario involves \"equal distribution of income,\" so Condition 2 doesn't apply (no inequalities to tolerate). However, it states there are \"**inequalities in the right to basic liberties**.\" This is a direct violation of **Condition 1**, which requires an *equal* right for *each* person. Since a necessary condition is failed, the society is definitively **not just**."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** This is a valid application of the contrapositive: Violation of Condition 1 → Not Just."
    },
    {
      "type": "paragraph",
      "text": "**(E)** This satisfies Condition 1 and 2b, but ignores Condition 2a (benefit to everyone). We can't conclude it is just without that information."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "paragraph",
      "text": "**Respect the \"Biconditional\":** \"When and only when\" means the conditions are both necessary and sufficient. You can use them to prove a society is just (by meeting all conditions) OR to prove it is unjust (by failing even one)."
    },
    {
      "type": "paragraph",
      "text": "**Don't Skim Quantifiers:** The difference between \"everyone\" and \"most people\" is the difference between a correct answer and a trap. In Principle questions, these details are not minor; they are the main event."
    },
    {
      "type": "paragraph",
      "text": "**The \"Not\" Conclusion is Just as Valid:** Often, the correct answer won't be the one that proves the positive case (\"It is just\"). It will be the one that proves the negative case (\"It is not just\") by identifying a clear violation of a rule. Don't get tunnel vision looking only for \"success\" scenarios."
    }
  ],
};
