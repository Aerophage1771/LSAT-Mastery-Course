import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '10-5',
  title: 'Lesson 2: Bridging the "Is-Ought" Gap (Sufficient Assumption)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: Bridging the \"Is-Ought\" Gap (Sufficient Assumption)"
    },
    {
      "type": "paragraph",
      "text": "**Concept Focus: The Moral Bridge**"
    },
    {
      "type": "paragraph",
      "text": "Think of the \"Is-Ought\" gap as a missing bridge. In these questions, the author starts by listing facts about how the world is, but then jumps straight to a recommendation about what ought to happen."
    },
    {
      "type": "paragraph",
      "text": "This logic is flawed because you can't just jump from a fact to a recommendation without a rule connecting them. The correct answer fixes this by providing a specific rule that links the facts to the recommendation.  $$\\text{Situation X (The \"Is\")} + \\boxed{\\text{Rule: If Situation X} \\rightarrow \\text{Do Action Z}} = \\text{Do Action Z (The \"Ought\")}$$"
    },
    {
      "type": "paragraph",
      "text": "**Worked Example**"
    },
    {
      "type": "paragraph",
      "text": "**Stimulus**"
    },
    {
      "type": "paragraph",
      "text": "A government ought to protect and encourage free speech, because free speech is an activity that is conducive to a healthy nation and thus is in the best interest of its people."
    },
    {
      "type": "paragraph",
      "text": "**Question**"
    },
    {
      "type": "paragraph",
      "text": "The main conclusion above follows logically if which one of the following is assumed?  (A) An activity that is in the best interest of the people ought to be protected and encouraged by a nation’s government. (B) Basic, inalienable rights of the people ought to be protected and encouraged by government. (C) An activity that helps a government to govern ought to be protected and encouraged by it. (D) A government ought to protect and encourage an activity that is conducive to the interests of that government. (E) Universal human rights that are in the best interest of the people ought to be protected and encouraged by a nation’s government."
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Break Down the Argument**"
    },
    {
      "type": "paragraph",
      "text": "Before looking for the answer, clearly identify the parts of the argument by looking for specific keywords."
    },
    {
      "type": "paragraph",
      "text": "**Find the Conclusion:** Spot the author's main point. Look for recommendations or moral judgments, often signaled by words like \"should\" or \"ought.\" Result: \"A government ought to protect and encourage free speech.\""
    },
    {
      "type": "paragraph",
      "text": "**Find the Premises:** Spot the evidence or reasons provided to support that point. The word \"because\" is a strong indicator that the following phrase is the factual evidence. Result: \"free speech is an activity that is conducive to a healthy nation and thus is in the best interest of its people.\""
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Convert to a Method of Reasoning**"
    },
    {
      "type": "paragraph",
      "text": "Translate the argument into a workable format that describes how the premises attempt to reach the conclusion.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Translate into Simple Terms**: Premise: Free speech is good for the people. Conclusion: Therefore, the government must protect free speech. *"
    },
    {
      "type": "paragraph",
      "text": "**Diagram Conditional Logic**:      Premise: $\\text{Free Speech} \\rightarrow \\text{Best Interest of People}$     Conclusion: $\\text{Free Speech} \\rightarrow \\text{Ought to Protect}$"
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "Pinpoint the disconnect between the premises and the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Look for New Terms:** What new idea appears in the conclusion that wasn't in the premise? *   New Term: \"Ought to Protect\" appears in the conclusion but never in the premise. *   Old Term: \"Best Interest\" appears in the premise but drops out of the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument assumes a link between \"Best Interest\" and \"Ought to Protect.\" **Prephrase:** \"If something is in the best interest of the people, then the government ought to protect it.\""
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Apply the Sufficient Assumption Equation**"
    },
    {
      "type": "paragraph",
      "text": "Scan the answer choices to find the one that fills the gap perfectly. $$(\\text{Premise} + \\text{Answer} = \\text{Conclusion})$$"
    },
    {
      "type": "paragraph",
      "text": "**Test Answer (A):** An activity that is in the best interest of the people ought to be protected and encouraged by a nation’s government. **Equation:** (Free Speech is Best Interest) + (If Best Interest $\\rightarrow$ Protect) = (Free Speech should be Protected). **Explanation:** This answer acts as the perfect rule. The argument proved free speech is in the \"best interest of the people.\" This answer choice says, \"Hey, if something is in the best interest of the people, the government must protect it.\" When you combine that rule with the fact about free speech, the conclusion becomes 100% true. **Result:** Valid."
    },
    {
      "type": "paragraph",
      "text": "**Step 5: Systematically Eliminate Traps**"
    },
    {
      "type": "paragraph",
      "text": "Use process of elimination based on common trap types for the remaining answers."
    },
    {
      "type": "paragraph",
      "text": "**(B) Basic, inalienable rights of the people ought to be protected and encouraged by government.** **Trap:** Mismatched Terms. **Explanation:** This answer talks about \"rights.\" The argument never established that free speech is a \"right\"—only that it is in the \"best interest.\" If we assume this rule, it might not apply to free speech at all, so it doesn't help us prove the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**(C) An activity that helps a government to govern ought to be protected and encouraged by it.** **Trap:** Mismatched Terms. **Plain English Explanation:** This rule protects things that help the government do its job. But our premise was that free speech helps the people. Since we don't know if \"helping the people\" is the same as \"helping the government govern,\" this rule doesn't bridge the gap."
    },
    {
      "type": "paragraph",
      "text": "**(D) A government ought to protect and encourage an activity that is conducive to the interests of that government.** **Trap:** Mismatched Terms. **Plain English Explanation:** Similar to (C), this focuses on the \"interests of the government.\" The argument is built entirely on the \"interests of the people.\" This rule misses the mark because it protects the wrong specific group."
    },
    {
      "type": "paragraph",
      "text": "**(E) Universal human rights that are in the best interest of the people ought to be protected and encouraged by a nation’s government.** **Trap:** Necessary but Not Sufficient / Scope Shift. **Plain English Explanation:** This rule is too specific. It says the government should protect things that are both human rights and in the best interest of the people. While we know free speech fits the \"best interest\" part, the argument never proved it is a \"universal human right.\" Because we can't be sure free speech fits both criteria, this rule isn't strong enough to guarantee the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Summary Wrap Up**"
    },
    {
      "type": "paragraph",
      "text": "In this example, we successfully bridged the \"Is-Ought\" gap by following a strict logical path:\n1."
    },
    {
      "type": "paragraph",
      "text": "**Isolating the Fact:** We identified the premise that free speech is in the people's best interest (The \"Is\"). 2."
    },
    {
      "type": "paragraph",
      "text": "**Isolating the Moral:** We identified the conclusion that the government ought to protect it (The \"Ought\"). 3."
    },
    {
      "type": "paragraph",
      "text": "**Building the Bridge:** We realized the argument was missing a rule connecting \"people's best interest\" directly to \"government protection.\" 4."
    },
    {
      "type": "paragraph",
      "text": "**Selecting the Rule:** We chose Answer (A) because it provided that exact link, making the conclusion 100% valid."
    },
    {
      "type": "paragraph",
      "text": "**Key Takeaways**"
    },
    {
      "type": "paragraph",
      "text": "**Be a Keyword Detective:** Don't just read for the general idea. Actively hunt for any shift in topic between the evidence and the conclusion. This often looks like a jump from factual descriptions (is, are, causes) to moral judgments (should, ought, must), but it can also be a subtle switch between two different concepts (e.g., \"popular\" vs. \"best\") that the author treats as identical."
    },
    {
      "type": "paragraph",
      "text": "**Connect the \"Dangling Terms\":** Identify the concept in the premise that didn't make it to the conclusion (e.g., \"Best Interest\"), and the concept in the conclusion that wasn't in the premise (e.g., \"Ought to Protect\"). The correct answer must glue these two exact terms together."
    },
    {
      "type": "paragraph",
      "text": "**Beware of Mismatched Triggers:** Many trap answers will successfully reach the correct \"Ought\" (e.g., the government should protect it), but they trigger this duty based on the wrong facts. For example, traps might trigger protection for \"basic rights\" or \"government interests\" instead of the \"people's best interest\" cited in the premises. Ensure the \"IF\" part of your rule matches the exact evidence you have, not just a related concept."
    }
  ],
};
