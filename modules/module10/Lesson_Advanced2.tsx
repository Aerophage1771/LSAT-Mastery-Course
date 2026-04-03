import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '10-10',
  title: 'Advanced Lesson 2: The Binary Confirmation',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: The Binary Confirmation"
    },
    {
      "type": "paragraph",
      "text": "**Concept Focus: Exhaustive Categories**"
    },
    {
      "type": "paragraph",
      "text": "Advanced Sufficient Assumption questions often test your ability to spot a \"False Binary.\" In these arguments, the author defines Category A and Category B, but overlooks Category C (the \"neutral\" or \"middle\" ground). The flaw occurs when the author assumes that if something isn't in Category B, it must automatically fall into Category A."
    },
    {
      "type": "paragraph",
      "text": "The logical gap is the unstated belief that the situation is purely one of two options. The sufficient assumption functions as a **Binary Confirmation**: it explicitly rules out the middle ground, confirming that the two extreme categories are the only ones that exist."
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
      "text": "**Philosopher:** An action is morally right if it would be reasonably expected to increase the aggregate well-being of the people affected by it. An action is morally wrong if and only if it would be reasonably expected to reduce the aggregate well-being of the people affected by it. Thus, actions that would be reasonably expected to leave unchanged the aggregate well-being of the people affected by them are also right."
    },
    {
      "type": "paragraph",
      "text": "**Question**"
    },
    {
      "type": "paragraph",
      "text": "The philosopher’s conclusion follows logically if which one of the following is assumed?\n*"
    },
    {
      "type": "paragraph",
      "text": "**(A)** Only wrong actions would be reasonably expected to reduce the aggregate well-being of the people affected by them. *"
    },
    {
      "type": "paragraph",
      "text": "**(B)** No action is both right and wrong. *"
    },
    {
      "type": "paragraph",
      "text": "**(C)** Any action that is not morally wrong is morally right. *"
    },
    {
      "type": "paragraph",
      "text": "**(D)** There are actions that would be reasonably expected to leave unchanged the aggregate well-being of the people affected by them. *"
    },
    {
      "type": "paragraph",
      "text": "**(E)** Only right actions have good consequences."
    },
    {
      "type": "paragraph",
      "text": "**Analysis**"
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Break Down the Argument**"
    },
    {
      "type": "paragraph",
      "text": "First, we separate the core components of the philosopher's argument to see what we are working with. We start by identifying the **Conclusion**—the main point the author is trying to prove. The word \"Thus\" is a strong indicator here. The preceding sentences provide the rules (definitions of right and wrong) that serve as the **Premises** or evidence supporting that claim.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** Right if expected to **increase** well-being. *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** Wrong *if and only if* expected to **reduce** well-being. *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion (indicated by \"Thus\"):** Actions expected to leave well-being **unchanged** are Right."
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Convert to a Method of Reasoning**"
    },
    {
      "type": "paragraph",
      "text": "Next, we translate these terms into a consistent logical structure to reveal the mechanics."
    },
    {
      "type": "paragraph",
      "text": "**1. Define the Symbols** *"
    },
    {
      "type": "paragraph",
      "text": "**Outcomes:** Increase well-being (**IWB**), Reduce well-being (**RWB**), Left unchanged well-being (**LU**) *"
    },
    {
      "type": "paragraph",
      "text": "**Moral Status:** Right (**MR**), Wrong (**MW**)"
    },
    {
      "type": "paragraph",
      "text": "**2. Translate Text to Logic**"
    },
    {
      "type": "table",
      "headers": [
        "Argument Part",
        "Original Text",
        "Conditional Translation"
      ],
      "rows": [
        [
          "**Premise 1**",
          "\"An action is morally right if... increase the aggregate well-being...\"",
          "IWB → MR"
        ],
        [
          "**Premise 2**",
          "\"...morally wrong if and only if... reduce the aggregate well-being...\"",
          "MW ↔ RWB"
        ],
        [
          "**Conclusion**",
          "\"leave unchanged the aggregate well-being... are also right.\"",
          "LU → MR"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "Now we look for the disconnect. The conclusion talks about the \"Unchanged\" (LU) category. What do the premises tell us about this category?"
    },
    {
      "type": "list",
      "items": [
        "Since the action leaves well-being *unchanged*, it definitely does not *reduce* well-being (**~RWB**). According to Premise 2 (**MW ↔ RWB**), if an action does not reduce well-being, it is **not wrong** (**~MW**). Therefore, actions that leave well-being unchanged, are **not wrong**."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument proves that **Unchanged** LU actions are **not wrong** (**~MW**). However, it concludes that they are **right** (**MR**).\n*"
    },
    {
      "type": "paragraph",
      "text": "**Current Chain:** LU → ~RWB → ~MW *"
    },
    {
      "type": "paragraph",
      "text": "**Desired Conclusion:** LU → MR *"
    },
    {
      "type": "paragraph",
      "text": "**Missing Link:** ~MW → MR (If it's not wrong, it must be right)."
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Apply the Sufficient Assumption Equation**"
    },
    {
      "type": "paragraph",
      "text": "We need an answer choice that, when added to our premise chain, guarantees the conclusion.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Equation:** Premises + [Answer] = Conclusion *"
    },
    {
      "type": "paragraph",
      "text": "**Our Logic:** (LU → ~MW) + [**~MW → MR**] = (LU → MR)  We are looking for a **Binary Confirmation**: a statement affirming that morality is a binary system where anything that isn't wrong is automatically right."
    },
    {
      "type": "paragraph",
      "text": "**Step 5: Systematically Eliminate Traps**"
    },
    {
      "type": "paragraph",
      "text": "We evaluate the choices to find our bridge and eliminate common distractors."
    },
    {
      "type": "paragraph",
      "text": "**(A) Only wrong actions would be reasonably expected to reduce the aggregate well-being of the people affected by them.** *"
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"If an action reduces well-being, it must be wrong\" (RWB → MW). *"
    },
    {
      "type": "paragraph",
      "text": "**Why it fails:** This is already true based on the original premises. Premise 2 told us \"Wrong if and only if Reduce.\" That means if it reduces, it's wrong, and if it's wrong, it reduces. Repeating something we already know doesn't bridge the gap to the *new* conclusion about \"Unchanged\" actions. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Trap: The Restatement)."
    },
    {
      "type": "paragraph",
      "text": "**(B) No action is both right and wrong.** *"
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"You cannot be in the Right circle and the Wrong circle at the same time.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Why it fails:** This choice prevents overlap, but it doesn't cover the whole board. It's possible for an action to be outside the \"Right\" circle *and* outside the \"Wrong\" circle (a neutral \"Gray Area\"). The argument needs to prove that \"Unchanged\" actions *must* be Right, not just that they aren't both. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Trap: Necessary but Not Sufficient)."
    },
    {
      "type": "paragraph",
      "text": "**(C) Any action that is not morally wrong is morally right.** *"
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"If it isn't Wrong, it must be Right\" (~MW → MR). *"
    },
    {
      "type": "paragraph",
      "text": "**Why it works:** This is the exact bridge we need. We know \"Unchanged\" actions are *not wrong*. This rule forces all \"not wrong\" things into the \"Right\" category. It eliminates the neutral gray area entirely. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Correct."
    },
    {
      "type": "paragraph",
      "text": "**(D) There are actions that would be reasonably expected to leave unchanged the aggregate well-being of the people affected by them.** *"
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"Unchanged actions actually exist.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Why it fails:** The argument is trying to prove a rule: *If an action leaves well-being unchanged, then it is right.* Logical rules are valid even if the specific situation never happens (e.g., \"All unicorns have horns\" is a valid definition even if no unicorns exist). Knowing that these actions exist doesn't prove that they are *Right*. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Trap: Out of Scope)."
    },
    {
      "type": "paragraph",
      "text": "**(E) Only right actions have good consequences.** *"
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"If it has good consequences, it is Right.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Why it fails:** This introduces a new term (\"good consequences\") that never appears in the stimulus, which only discusses \"increasing aggregate well-being.\" We cannot assume these concepts are identical. Even if we did, it would only restate Premise 1, failing to address the \"Unchanged\" actions. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect (Trap: New Term / Out of Scope)."
    },
    {
      "type": "paragraph",
      "text": "**Summary**"
    },
    {
      "type": "paragraph",
      "text": "In this lesson, we tackled a classic **False Binary** flaw. The philosopher's argument failed because it assumed actions must be either \"Right\" or \"Wrong,\" completely ignoring the \"Neutral\" middle ground where an action neither helps nor hurts. By translating the text into conditional logic, we exposed the gap: the premises proved the action wasn't wrong (**~MW**), but the conclusion claimed it was right (**MR**). The correct answer bridged this gap by explicitly stating that anything not wrong is right (**~MW → MR**), eliminating the neutral option and forcing the conclusion to be true."
    },
    {
      "type": "paragraph",
      "text": "**Key Takeaways**\n*"
    },
    {
      "type": "paragraph",
      "text": "**Spot the False Binary:** Arguments often present two extremes (Right vs. Wrong) and assume they are the only options. Always check if a neutral middle ground (Unchanged) is being ignored. *"
    },
    {
      "type": "paragraph",
      "text": "**The Binary Confirmation:** To fix a false binary, you need a \"Binary Confirmation\"—a rule that explicitly eliminates the middle ground. A statement like \"If it isn't X, it must be Y\" forces every item into one of the two categories. *"
    },
    {
      "type": "paragraph",
      "text": "**Translate to Reveal the Gap:** Complex language often hides simple gaps. Translating text into logical symbols (like **MW ↔ RWB**) makes it easier to see exactly where the argument disconnects."
    }
  ],
};
