import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: '13-ref',
  title: 'MODULE 13: Principle: Apply Reference Guide',
  content: [
    {
      "type": "h2",
      "text": "MODULE 13: Principle: Apply Reference Guide"
    },
    {
      "type": "h3",
      "text": "The Goal: Apply the Law"
    },
    {
      "type": "paragraph",
      "text": "Your job is to act as a judge. Take the specific rule or principle provided in the stimulus and apply it with absolute precision to a new set of facts in the answer choices to determine the logically correct outcome."
    },
    {
      "type": "h3",
      "text": "The 4-Step Method: Quick Guide"
    },
    {
      "type": "list",
      "items": [
        "**Map the Principle:** Identify the conditional logic (`If...then`, `only if`, `unless`). Break the rule down into its Trigger (conditions) and Consequence (outcome).",
        "**Identify the Task:** Determine if you need to find a correct *application* (a complete argument) or a *justifying fact* (a missing premise).",
        "**Prephrase the Solution:** For applications, look for a scenario that meets all conditions (or fails a necessary one) and draws the matching conclusion. For justifications, identify the specific missing fact needed to connect the stimulus's premise to its conclusion.",
        "**Test the Choices:** Evaluate each option against your map. Eliminate any choice that fails to trigger the rule or draws an unsupported conclusion."
      ]
    },
    {
      "type": "h3",
      "text": "Field Guide to Principle: Apply Patterns"
    },
    {
      "type": "table",
      "headers": [
        "Pattern Name",
        "Function/Logic",
        "Key Clues"
      ],
      "rows": [
        [
          "**The Perfect Match**",
          "A straightforward application where a scenario meets all sufficient conditions, leading to the predicted result.",
          "Facts map perfectly to the \"If\" clause; conclusion matches the \"Then\" clause."
        ],
        [
          "**The Logical Flip**",
          "Applies the **contrapositive**. A necessary condition is absent, correctly leading to the conclusion that the outcome cannot occur.",
          "Principle uses `only if`, `unless`, `requires`. Answer shows `Not B → Not A`."
        ],
        [
          "**The Missing Link**",
          "Used in \"Justify the Application\" questions. The answer provides the specific fact needed to prove the principle's conditions were met.",
          "Stimulus has a Principle + Conclusion but is missing a premise. Answer fills that gap."
        ]
      ]
    },
    {
      "type": "h3",
      "text": "Common Traps & How to Avoid Them"
    },
    {
      "type": "paragraph",
      "text": "**The Mistaken Reversal**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* Uses the right terms but reverses the logic (argues `B → A` instead of `A → B`).",
        "*How to Avoid:* Stick to your map. If the sufficient condition isn't met, you can't conclude the necessary condition must be true."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Condition Mismatch**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* The scenario seems to fit, but one small detail is off (e.g., \"most people\" vs. \"everyone\").",
        "*How to Avoid:* Read quantifiers and qualifiers with legal precision. \"Almost\" is not enough."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Denying the Antecedent**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* Argues that because the rule wasn't triggered, the opposite outcome must occur (`Not A → Not B`).",
        "*How to Avoid:* Remember that a rule only tells you what happens when it *is* triggered. If the trigger is absent, the rule is silent."
      ]
    },
    {
      "type": "h3",
      "text": "Final Tip for Hard Questions: Watch the \"Unless\""
    },
    {
      "type": "paragraph",
      "text": "On advanced questions, the principle will often be a complex conditional statement involving \"unless\" or \"only if.\" Don't try to intuit the meaning. Mechanically translate \"A unless B\" into \"If Not B, then A\" to create a clear, usable rule before you even look at the answer choices."
    }
  ],
};
