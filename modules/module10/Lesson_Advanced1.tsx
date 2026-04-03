import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '10-9',
  title: 'Advanced Lesson 1: Relational Logic & The Contrapositive Bridge',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Relational Logic & The Contrapositive Bridge"
    },
    {
      "type": "paragraph",
      "text": "**Concept Focus: Advanced Conditional Chains**"
    },
    {
      "type": "paragraph",
      "text": "On harder questions, the LSAT tests your ability to handle conditional chains with an extra layer of complexity. The terms in the chain might not be identical, requiring careful attention to subtle shifts in language. This lesson focuses on two key challenges:\n1."
    },
    {
      "type": "paragraph",
      "text": "**Relational Logic:** The terms in the chain are related but not identical (e.g., \"is loved by someone\" vs. \"loves someone\"). You must identify the precise gap between close terms like these. 2."
    },
    {
      "type": "paragraph",
      "text": "**The Contrapositive Bridge:** The correct answer choice is often presented not as the direct A → B bridge you might expect, but as its logically equivalent contrapositive, ~B → ~A."
    },
    {
      "type": "paragraph",
      "text": "**Worked Example: Applying the Steps**"
    },
    {
      "type": "paragraph",
      "text": "**The Stimulus**"
    },
    {
      "type": "paragraph",
      "text": "Whoever is kind is loved by somebody or other, and whoever loves anyone is happy. It follows that whoever is kind is happy."
    },
    {
      "type": "paragraph",
      "text": "**The Question**"
    },
    {
      "type": "paragraph",
      "text": "The conclusion follows logically if which one of the following is assumed?"
    },
    {
      "type": "list",
      "items": [
        "(A) Whoever loves someone loves everyone. *   (B) Whoever loves everyone loves someone. *   (C) Whoever is happy loves everyone. *   (D) Whoever loves no one is loved by no one. *   (E) Whoever loves everyone is kind."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Break Down the Argument**"
    },
    {
      "type": "paragraph",
      "text": "First, we separate the core argument components to see what we are working with. To do this effectively, we look for **indicator words** that signal the structure of the argument.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Find the Conclusion:** The phrase \"It follows that\" is a classic conclusion indicator. It signals that the author is about to state the main point that is being proven by the previous statements.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** \"whoever is kind is happy.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Find the Premises:** The statements preceding the conclusion provide the evidence or support. Since they are presented as facts leading to the conclusion, we treat them as our premises.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** \"Whoever is kind is loved by somebody or other.\"   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** \"whoever loves anyone is happy.\""
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Convert to a Method of Reasoning**"
    },
    {
      "type": "paragraph",
      "text": "Next, we translate these English sentences into a conditional chain to visualize the flow.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** Kind → Loved by somebody *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** Loves someone → Happy *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Kind → Happy"
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "Now we look for the disconnect. The argument wants to go from Kind to Happy.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Current Path:** Kind → Loved by somebody ... **[GAP]** ... Loves someone → Happy *"
    },
    {
      "type": "paragraph",
      "text": "**The Disconnect:** The gap is between the **Object** of the first premise (\"Loved by somebody\") and the **Subject** of the second premise (\"Loves someone\"). *"
    },
    {
      "type": "paragraph",
      "text": "**Prephrase the Bridge:** We need a rule stating: \"If you are loved by somebody, then you must love someone.\"   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Direct Form:** Loved by somebody → Loves someone *"
    },
    {
      "type": "paragraph",
      "text": "**Prephrase the Contrapositive:** The LSAT often hides this bridge by negating and reversing it.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Contrapositive Form:** ~Loves someone → ~Loved by somebody   \n*"
    },
    {
      "type": "paragraph",
      "text": "**English Translation:** \"Whoever loves no one is loved by no one.\""
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Apply the Sufficient Assumption Equation**"
    },
    {
      "type": "paragraph",
      "text": "We test our prephrase to see if it makes the conclusion 100% certain.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Equation:** Premise 1 + **[Bridge]** + Premise 2 = Conclusion *"
    },
    {
      "type": "paragraph",
      "text": "**Chain:** Kind → Loved by somebody → Loves someone → Happy *"
    },
    {
      "type": "paragraph",
      "text": "**Result:** The chain is now unbroken. The conclusion Kind → Happy is guaranteed."
    },
    {
      "type": "paragraph",
      "text": "**Step 5: Systematically Eliminate Traps**"
    },
    {
      "type": "paragraph",
      "text": "Finally, we evaluate the answer choices against our prephrase and common traps.\n*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Whoever loves someone loves everyone.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Introduces \"loves everyone,\" a **New Term** not found in the reasoning.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Out of Scope). *"
    },
    {
      "type": "paragraph",
      "text": "**(B) Whoever loves everyone loves someone.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Again, relies on the **New Term** \"loves everyone.\" It fails to connect \"Loved by somebody\" to the rest of the chain.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Out of Scope). *"
    },
    {
      "type": "paragraph",
      "text": "**(C) Whoever is happy loves everyone.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Happy → Loves everyone. This is a **Mistaken Reversal** of the second premise (which said Loves someone → Happy).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect. *"
    },
    {
      "type": "paragraph",
      "text": "**(D) Whoever loves no one is loved by no one.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our **Contrapositive Bridge** perfectly (~Loves someone → ~Loved by somebody). It fills the gap.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** *"
    },
    {
      "type": "paragraph",
      "text": "**(E) Whoever loves everyone is kind.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Loves everyone → Kind. This is a **Mistaken Reversal** of the first premise (Kind → Loved by somebody) and uses the wrong terms.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect."
    },
    {
      "type": "paragraph",
      "text": "**Key Takeaways**\n*"
    },
    {
      "type": "paragraph",
      "text": "**Pay Attention to Relational Shifts:** Be extremely precise with the language. \"Is loved by\" (object) is not the same as \"loves\" (subject). The gap often lies in connecting these subtle but distinct ideas. *"
    },
    {
      "type": "paragraph",
      "text": "**Always Prephrase the Contrapositive:** When your prephrase for a conditional bridge is A → B, immediately ask yourself what ~B → ~A would look like. The correct answer is often presented in this \"disguised\" form. *"
    },
    {
      "type": "paragraph",
      "text": "**Translate Negative Language:** Don't be thrown by phrases like \"loves no one\" or \"loved by no one.\" Translate them into their formal logical equivalents (NOT loves someone, NOT loved by somebody) to see the underlying conditional structure more clearly."
    }
  ],
};
