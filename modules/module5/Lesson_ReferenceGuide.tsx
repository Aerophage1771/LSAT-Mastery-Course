import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: '5-ref',
  title: 'MODULE 5: Flaw Reference Guide',
  content: [
    {
      "type": "h2",
      "text": "MODULE 5: Flaw Reference Guide"
    },
    {
      "type": "h3",
      "text": "The Goal: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "Your job is not to challenge the truth of the premises, but to evaluate the reasoning. Identify the specific logical error—the unwarranted assumption or structural failure—that prevents the premises from proving the conclusion."
    },
    {
      "type": "h3",
      "text": "The 4-Step Method: Quick Guide"
    },
    {
      "type": "list",
      "items": [
        "**Deconstruct the Argument:** Identify the Main Conclusion and the Premises. Note any background facts or opposing points.",
        "**Find the Logical Gap:** Ask, \"Why do these premises *not* guarantee this conclusion?\" Assume the premises are true but the conclusion is false. What possibility was overlooked?",
        "**Prephrase the Flaw:** Describe the error in your own words using abstract language (e.g., \"It confuses a necessary condition for a sufficient one\" or \"It assumes a correlation proves causation\").",
        "**Evaluate the Answers:** Scan the choices for the one that matches your prephrase. Translate abstract answer choice language back into the specific terms of the stimulus to verify the fit."
      ]
    },
    {
      "type": "h3",
      "text": "Field Guide to Flaw Patterns"
    },
    {
      "type": "table",
      "headers": [
        "Flaw Pattern",
        "Function / Logic",
        "Key Clues / Keywords"
      ],
      "rows": [
        [
          "**Overlooking Possibilities**",
          "Assumes the stated explanation is the only one; ignores alternatives.",
          "`fails to consider`, `overlooks the possibility`, `ignores that...`"
        ],
        [
          "**Conditional Logic Errors**",
          "Confuses Necessary (required) with Sufficient (guaranteed).",
          "`necessary condition`, `sufficient condition`, `required`, `ensures`, `if...then`."
        ],
        [
          "**Causal Fallacies**",
          "Infers causation from correlation; ignores reverse causation or a third factor.",
          "`causes`, `leads to`, `results from`, `responsible for`, `correlation`."
        ],
        [
          "**Data & Sampling Errors**",
          "Generalizes from an unrepresentative sample or confuses numbers with rates.",
          "`sample`, `representative`, `generalizes`, `numbers`, `percentages`, `average`."
        ],
        [
          "**Ad Hominem**",
          "Attacks the person/source instead of the argument's substance.",
          "`attacks the source`, `criticizes the motives`, `rejects a claim`."
        ],
        [
          "**Part-to-Whole**",
          "Assumes properties transfer between a whole and its parts.",
          "`part`, `whole`, `group`, `member`, `component`."
        ],
        [
          "**Equivocation**",
          "Uses a key term in two different senses.",
          "`ambiguous`, `shift in meaning`, `two different senses`."
        ]
      ]
    },
    {
      "type": "h3",
      "text": "Common Traps & How to Avoid Them"
    },
    {
      "type": "paragraph",
      "text": "**The \"Out of Scope\" Trap**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It raises a valid real-world point that seems related to the topic.",
        "*How to Avoid:* Check if the point actually affects the *logical connection* between the premises and the specific conclusion. If it attacks a premise or discusses a tangential issue, eliminate it."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The \"Wrong Flaw\" Trap**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It perfectly describes a classic logical fallacy (e.g., \"circular reasoning\") using familiar language.",
        "*How to Avoid:* Don't just pick a recognized flaw type. Verify that the argument *actually* committed that specific error. If the argument isn't circular, the \"circular reasoning\" choice is wrong, no matter how well-written."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The \"Premise Attack\" Trap**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It questions the truth or support for a premise, which often feels weak.",
        "*How to Avoid:* Accept the premises as true. The flaw is in the reasoning *from* the premises, not the premises themselves. Look for the gap *after* the evidence is accepted."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The \"Reverse Logic\" Trap**"
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It describes the right family of flaw (e.g., conditional logic) but reverses the direction (e.g., Mistaken Negation instead of Reversal).",
        "*How to Avoid:* Map the logic carefully. Ensure the answer choice describes the exact direction of the error in the stimulus."
      ]
    },
    {
      "type": "h3",
      "text": "Final Tip for Hard Questions: Translate the Abstract"
    },
    {
      "type": "paragraph",
      "text": "On advanced questions, the LSAT disguises simple flaws behind dense, academic language. Do not let the verbiage intimidate you. Break down complex answer choices phrase by phrase, substituting the specific terms from the stimulus (\"the study,\" \"the illness\") into the abstract descriptions (\"the evidence,\" \"the phenomenon\") to see if the glove fits."
    }
  ],
};
