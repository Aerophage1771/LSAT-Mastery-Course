import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '11-2',
  title: 'Step-by-Step Guide: Necessary Assumption',
  content: [
    {
      "type": "h2",
      "text": "Step-by-Step Guide: Necessary Assumption"
    },
    {
      "type": "paragraph",
      "text": "This guide provides a simple, five-step plan for solving Necessary Assumption questions. These questions ask you to find the \"hidden\" fact that the author is counting on to make their argument work. You will learn how to spot the \"missing link\" in an argument and use the Negation Test to prove you found the right answer."
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Break Down the Argument**"
    },
    {
      "type": "paragraph",
      "text": "Before evaluating answer choices, you must map the argument's structure. You cannot find a missing piece until you understand how the existing pieces fit together."
    },
    {
      "type": "list",
      "items": [
        "**Find the Main Conclusion:** Identify the author's primary claim, judgment, or prediction. This is the statement the author is trying to prove.",
        "**Find the Premises:** Identify the evidence or reasons provided to support that conclusion.",
        "**Summarize the Core Argument:** State the logic in simple terms: *\"The author concludes [Conclusion], because of [Premises].\""
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "With the core argument identified, pinpoint the logical gap. Ask yourself: *\"How did the author get from the evidence to the conclusion? What idea did they take for granted?\"*"
    },
    {
      "type": "paragraph",
      "text": "**Note:** You are looking for a **required** component of the argument that is currently missing. Without this missing link, the evidence provided does not logically reach the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Common Logical Leaps**"
    },
    {
      "type": "list",
      "items": [
        "**Causal Leap:** Assuming a correlation proves a specific cause, and that no alternative causes exist.",
        "**Generalization Leap:** Assuming a specific example or sample is representative of a broader category.",
        "**Definitional Leap:** Assuming two different terms or concepts are equivalent (e.g., \"not certified\" = \"unqualified\").",
        "**Feasibility Leap:** Assuming a proposed plan is possible, necessary, or won't backfire.",
        "**Analogy Leap:** Assuming two situations are similar in a way that is relevant to the conclusion."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Pre-phrase the Necessary Connection**"
    },
    {
      "type": "paragraph",
      "text": "Before looking at the answer choices, articulate the assumption in your own words. Assumptions generally fall into two functional categories:"
    },
    {
      "type": "paragraph",
      "text": "**A. Bridge Assumptions (Necessary Components)** — These connect two different ideas in the argument. They are \"missing links\" that build a bridge between the evidence and the conclusion."
    },
    {
      "type": "list",
      "items": [
        "**Definitional gap:** \"The author is treating these two distinct ideas as the same thing.\"",
        "**Generalization gap:** \"The author believes this specific instance applies to the whole group.\""
      ]
    },
    {
      "type": "paragraph",
      "text": "**B. Defender Assumptions (Defenders Against Negatives)** — These eliminate potential threats that could destroy the argument. They \"protect\" the conclusion by assuming that a specific problem does not exist."
    },
    {
      "type": "list",
      "items": [
        "**Causal gap:** \"The author assumes this specific alternative factor wasn't the real cause.\"",
        "**Feasibility gap:** \"The author assumes that there aren't any obstacles that would make this plan fail.\""
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Evaluate Answer Choices**"
    },
    {
      "type": "paragraph",
      "text": "Scan the options for a statement that fulfills the logical role you pre-phrased."
    },
    {
      "type": "list",
      "items": [
        "**Identify the Correct Answer** — **The \"Must-Have\" Component:** Look for any answer that jumps out as an essential part of the reasoning. If the argument cannot function without this specific piece of information, it is a strong contender. **The Deal-Breaker Eliminator:** Look for choices that rule out \"deal-breaker\" scenarios. If an answer choice eliminates a possibility that would be catastrophic for the argument, it is likely a necessary defender assumption.",
        "**Eliminate Common Traps** — **Trap: Out of Scope.** The choice introduces irrelevant concepts or comparisons that do not affect the core argument. **Trap: Restatement.** The choice merely rehashes information already explicitly stated in the premises. (Assumptions must be unstated.) **Trap: Weakener.** The choice undermines the conclusion. An author never assumes a fact that actively harms their own case."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 5: Confirm with the Negation Test**"
    },
    {
      "type": "paragraph",
      "text": "The **Negation Test** is the definitive proof for this question type. It works on a simple principle: **If a statement is truly necessary, the argument cannot survive without it.**"
    },
    {
      "type": "paragraph",
      "text": "**Negate the Answer Choice (Flip it)**"
    },
    {
      "type": "paragraph",
      "text": "Turn the statement into its logical opposite. Be careful to negate the *logic*, not just the verb."
    },
    {
      "type": "table",
      "headers": [
        "Original Statement",
        "Logical Negation"
      ],
      "rows": [
        [
          "\"All X are Y\"",
          "\"Not all X are Y\" (Some X are not Y)"
        ],
        [
          "\"Some X are Y\"",
          "\"None of X are Y\""
        ],
        [
          "\"X causes Y\"",
          "\"X does not cause Y\""
        ],
        [
          "\"X is the only way\"",
          "\"X is not the only way\""
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "**Insert the Negation**"
    },
    {
      "type": "paragraph",
      "text": "Treat the negated statement as a new fact. Ask: *\"If this new fact is true, does the conclusion still make sense?\"*"
    },
    {
      "type": "paragraph",
      "text": "**Evaluate the Impact**"
    },
    {
      "type": "list",
      "items": [
        "**Argument Collapses = CORRECT:** If the negation destroys the conclusion or breaks the link between premises and conclusion, the original answer choice was **necessary**.",
        "**Argument Survives = INCORRECT:** If the conclusion remains logically valid (even if slightly weakened), the answer choice was **not necessary**."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Why Traps Fail the Negation Test:**"
    },
    {
      "type": "list",
      "items": [
        "**The Helpful Strengthener:** Negating a \"helpful\" fact might weaken the argument, but it won't destroy it. Necessary assumptions are essential, not just helpful.",
        "**The Neutral Choice:** Negating an irrelevant statement has no impact on the conclusion. If the argument doesn't care whether the statement is true or false, it is not a necessary assumption."
      ]
    }
  ],
};
