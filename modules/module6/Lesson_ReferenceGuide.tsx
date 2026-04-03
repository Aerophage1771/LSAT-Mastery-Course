import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: '6-ref',
  title: 'MODULE 6: Parallel Flaw Reference Guide',
  content: [
    {
      "type": "h2",
      "text": "MODULE 6: Parallel Flaw Reference Guide"
    },
    {
      "type": "h3",
      "text": "The Goal: Find the Identical Error"
    },
    {
      "type": "paragraph",
      "text": "Your job is to act as a structural detective. First, diagnose the specific logical error in the stimulus argument. Then, find the one answer choice that commits the exact same type of reasoning mistake, even if the topic is completely different."
    },
    {
      "type": "h3",
      "text": "The 3-Step Method: Quick Guide"
    },
    {
      "type": "paragraph",
      "text": "1."
    },
    {
      "type": "paragraph",
      "text": "**Create the Reasoning Skeleton:** Before reading the choices, diagnose the specific flaw in the stimulus (e.g., Mistaken Reversal, Part-to-Whole). Abstract this error into a structural blueprint, independent of the topic, and note the conclusion's certainty (e.g., *must* vs. *probably*).\n2."
    },
    {
      "type": "paragraph",
      "text": "**Apply the Skeleton as a Filter:** Scan the answer choices, using your blueprint to eliminate mismatches. Start with quick filters (conclusion certainty, polarity) and then analyze the core reasoning. Immediately eliminate any choices that are logically **valid** or contain a **different type of flaw**.\n3."
    },
    {
      "type": "paragraph",
      "text": "**Confirm the Perfect Match:** For the last remaining contender, do a final check. Ensure it is a perfect structural replica of the stimulus argument's flaw, matching on all key points."
    },
    {
      "type": "h3",
      "text": "Field Guide to Common Flaws"
    },
    {
      "type": "table",
      "headers": [
        "Pattern/Type Name",
        "Function/Logic (The Error)",
        "Key Clues/Keywords"
      ],
      "rows": [
        [
          "**Mistaken Reversal**",
          "`If A→B`. `B` is true. Therefore, `A` is true. Reasons backward from the result to the trigger.",
          "`If...then`, `All`, `Every`. Evidence confirms the \"then\" part of the rule."
        ],
        [
          "**Mistaken Negation**",
          "`If A→B`. `Not A`. Therefore, `Not B`. Assumes the trigger is the *only* way to get the result.",
          "`If...then`, `Any`, `Whenever`. Evidence denies the \"if\" part of the rule."
        ],
        [
          "**Fallacy of Division**",
          "Assumes a property of a whole group/average applies to a specific individual part.",
          "Reasoning moves from a group/team/average to a specific member/component."
        ],
        [
          "**Fallacy of Composition**",
          "Assumes a property of individual parts must also apply to the whole group/system.",
          "Reasoning moves from individual members/components to the group/team/whole."
        ],
        [
          "**Correlation for Causation**",
          "Assumes that because two things are correlated, one must cause the other. Often ignores reverse causality.",
          "Premises show a statistical link; conclusion makes a causal claim (`causes`, `leads to`)."
        ],
        [
          "**False Dilemma**",
          "Presents two options as the only possibilities, rules one out, and concludes the other is true, ignoring a middle ground or third option.",
          "`Either...or`; reasoning from `Not A` to `Must be B`."
        ],
        [
          "**Source Argument**",
          "Attacks the person/source making a claim (often for hypocrisy) instead of the claim itself.",
          "The evidence is about the character, motives, or past actions of the arguer."
        ],
        [
          "**Quantifier Flaws**",
          "Misuses `All`, `Some`, `Most` to make invalid inferences about overlapping groups.",
          "The argument feels like a logic puzzle with categories and their relationships."
        ]
      ]
    },
    {
      "type": "h3",
      "text": "Common Traps & How to Avoid Them"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**The Valid Argument Trap:** This is the most dangerous trap. The answer choice uses similar language or topic but presents a logically *sound* argument.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**How to Avoid:** If you have correctly identified a flaw in the stimulus, a valid argument can **never** be the correct parallel. Be certain of your initial diagnosis.\n*"
    },
    {
      "type": "paragraph",
      "text": "**The Different Flaw Trap:** The answer choice is definitely flawed, but it commits a *different* logical error (e.g., a Mistaken Reversal when the stimulus was a Mistaken Negation).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**How to Avoid:** Name the specific flaw in the stimulus before looking at the choices. Vague diagnoses like \"bad reasoning\" are not precise enough.\n*"
    },
    {
      "type": "paragraph",
      "text": "**The Mismatching Certainty Trap:** The reasoning structure is nearly identical, but the conclusion's level of certainty is different (e.g., the stimulus concludes something \"must\" be true, while the trap choice concludes it is \"likely\" true).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**How to Avoid:** Make the conclusion's certainty (`must`, `will`, `probably`, `may`) a key part of your Reasoning Skeleton and match it exactly."
    },
    {
      "type": "h3",
      "text": "Final Tip for Hard Questions: Look for Layers"
    },
    {
      "type": "paragraph",
      "text": "The most difficult Parallel Flaw questions often contain multiple or subtle flaws (e.g., combining a conditional error with a term shift or an assumption about what someone knows). Be prepared to create a more complex blueprint and find a parallel that replicates all the essential layers of the error, not just the most obvious one."
    }
  ],
};
