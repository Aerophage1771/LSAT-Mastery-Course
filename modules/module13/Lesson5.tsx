import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '13-5',
  title: 'Lesson 2: The Logical Flip',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Logical Flip"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Contrapositive Application"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on a crucial pattern in Principle-Apply questions: the Logical Flip. This occurs when the principle contains a necessary condition, often signaled by keywords like \"only if,\" \"only when,\" or \"unless.\" While you can apply these rules directly, the most powerful and frequently tested application is the contrapositive."
    },
    {
      "type": "paragraph",
      "text": "The contrapositive is a logically equivalent version of the original statement that \"flips\" and negates the terms. If the rule is \"A is true *only if* B is true\" (`A → B`), the contrapositive is \"If B is *not* true, then A is *not* true\" (`~B → ~A`). The Logical Flip pattern tests your ability to spot when the necessary condition is absent and correctly deduce that the outcome cannot occur."
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
      "text": "**Stimulus** > > It is a principle of economics that a nation can experience economic growth only when consumer confidence is balanced with a small amount of consumer skepticism. > > **Question** > > Which one of the following is an application of the economic principle above? > > *   (A) Any nation in which consumer confidence is balanced with a small amount of consumer skepticism will experience economic growth. > *   (B) Any nation in which the prevailing attitude of consumers is not skepticism will experience economic growth. > *   (C) Any nation in which the prevailing attitude of consumers is either exclusively confidence or exclusively skepticism will experience economic growth. > *   (D) Any nation in which the prevailing attitude of consumers is exclusively confidence will not experience economic growth. > *   (E) Any nation in which consumer skepticism is balanced with a small amount of consumer confidence will experience economic growth."
    },
    {
      "type": "h4",
      "text": "Step 1: Map the Principle"
    },
    {
      "type": "paragraph",
      "text": "The keyword \"only when\" is crucial. It tells us that the \"balance\" is a *necessary* condition for economic growth."
    },
    {
      "type": "list",
      "items": [
        "Let EG = Economic Growth.",
        "Let B = The required Balance of confidence and skepticism."
      ]
    },
    {
      "type": "paragraph",
      "text": "The rule is: A nation can have EG **only when** it has B. This translates to the conditional statement:"
    },
    {
      "type": "paragraph",
      "text": "**Rule:** `EG → B` (If you have economic growth, you must have the balance)."
    },
    {
      "type": "paragraph",
      "text": "Now, let's create the contrapositive (the \"Logical Flip\"):"
    },
    {
      "type": "paragraph",
      "text": "**Contrapositive:** `~B → ~EG` (If you do **not** have the balance, then you will **not** have economic growth)."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Specific Task"
    },
    {
      "type": "paragraph",
      "text": "The stem asks for \"an application of the... principle.\" This is a \"Find the Correct Application\" task. We are looking for a choice that is a valid deduction from either our Rule or our Contrapositive."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Solution"
    },
    {
      "type": "paragraph",
      "text": "The contrapositive is often the most direct path to the answer. Our prephrase should reflect this: \"I'm looking for a scenario where the nation *lacks the required balance*, and the conclusion is that it *does not have economic growth*.\" A nation with \"exclusively confidence\" or \"exclusively skepticism\" would lack the balance."
    },
    {
      "type": "h4",
      "text": "Step 4: Test Answer Choices Against Your Map"
    },
    {
      "type": "paragraph",
      "text": "**(A) Any nation in which consumer confidence is balanced with a small amount of consumer skepticism will experience economic growth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument has the structure `B → EG`. This is a classic **Mistaken Reversal** of our original rule (`EG → B`). The balance is necessary, but the principle doesn't say it's sufficient."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Any nation in which the prevailing attitude of consumers is not skepticism will experience economic growth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** \"Not skepticism\" implies \"exclusively confidence\" (`~B`). Our contrapositive says this should lead to *no* economic growth (`~EG`). This choice concludes the opposite."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Opposite Conclusion)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Any nation in which the prevailing attitude of consumers is either exclusively confidence or exclusively skepticism will experience economic growth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** \"Exclusively confidence or exclusively skepticism\" is another way of saying the nation lacks the balance (`~B`). The choice concludes this leads to economic growth (`EG`). This directly contradicts our contrapositive (`~B → ~EG`)."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Any nation in which the prevailing attitude of consumers is exclusively confidence will not experience economic growth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:**"
    },
    {
      "type": "list",
      "items": [
        "Trigger: \"exclusively confidence\" means the nation does **not** have the balance (`~B`).",
        "Consequence: The nation \"will **not** experience economic growth\" (`~EG`).",
        "This perfectly matches our prephrase and our contrapositive: `~B → ~EG`."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Any nation in which consumer skepticism is balanced with a small amount of consumer confidence will experience economic growth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes the wrong kind of balance and, like choice (A), commits a Mistaken Reversal."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
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
      "text": "**\"Only If\" is a Trap:** Keywords like \"only if\" and \"only when\" are designed to trick you into making a Mistaken Reversal. Always translate them correctly. The statement *after* \"only if\" is the necessary condition."
    },
    {
      "type": "paragraph",
      "text": "**The Contrapositive is Your Ally:** When you see a necessary condition, immediately form the contrapositive in your head. It is a logically valid inference and is frequently what the LSAT tests."
    },
    {
      "type": "paragraph",
      "text": "**Diagramming Clarifies:** For complex conditional rules, a quick diagram (`A → B`) and its contrapositive (`~B → ~A`) can prevent confusion and make it easy to spot logical fallacies in the answer choices."
    }
  ],
};
