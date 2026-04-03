import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: '6-3',
  title: 'Section 3: Parallel Flaw — A Field Guide to Common Flaws',
  content: [
    {
      "type": "h2",
      "text": "Section 3: Parallel Flaw — A Field Guide to Common Flaws  Parallel Flaw questions test your ability to recognize recurring logical errors. While the topics of flawed arguments are endless, the *types* of flaws are finite and predictable. This guide will help you spot the most common flawed patterns that appear in both the stimulus and the correct answer choice. Mastering these patterns is the key to creating an effective \"Reasoning Skeleton.\""
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "I. Conditional Reasoning Flaws (~25-30%) These are the most frequent flaws. They involve a misuse of an \"if-then\" relationship."
    },
    {
      "type": "h4",
      "text": "1. The Mistaken Reversal (Affirming the Consequent)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument treats a necessary condition as if it were a sufficient one. It establishes a rule (`If A, then B`), observes that `B` (the result) happened, and incorrectly concludes that `A` (the trigger) must have been the cause. *"
    },
    {
      "type": "paragraph",
      "text": "**Logical Structure:** `A → B`. `B` is true. Therefore, `A` is true. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The argument will state a rule and then reason backward from the outcome to the cause, ignoring other possible causes."
    },
    {
      "type": "h4",
      "text": "2. The Mistaken Negation (Denying the Antecedent)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument assumes that if the trigger for an event doesn't happen, the event itself cannot happen. It establishes a rule (`If A, then B`), observes that `A` did *not* happen, and incorrectly concludes that `B` cannot happen either. *"
    },
    {
      "type": "paragraph",
      "text": "**Logical Structure:** `A → B`. `Not A`. Therefore, `Not B`. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The argument will deny the \"if\" part of a rule and conclude that the \"then\" part must also be false, ignoring other ways the outcome could occur."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "II. Part vs. Whole Flaws (~20-25%) These arguments make invalid inferences between the properties of a group and its members."
    },
    {
      "type": "h4",
      "text": "3. The Fallacy of Division (Whole to Part)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument incorrectly assumes that a characteristic of a group as a whole—or its average—must also be true for a specific part or member of that group. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The premise will describe a group, team, or collection (or its average). The conclusion will make a claim about a specific individual or component within that group."
    },
    {
      "type": "h4",
      "text": "4. The Fallacy of Composition (Part to Whole)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument incorrectly assumes that a characteristic of individual members must also be true for the group as a whole. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The premise will describe the properties of individual components. The conclusion will make a claim about the entire entity those components make up."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "III. Causal Reasoning Flaws (~15-20%) These arguments make an error in identifying a cause-and-effect relationship."
    },
    {
      "type": "h4",
      "text": "5. Correlation for Causation"
    },
    {
      "type": "paragraph",
      "text": "**Description:** This is the most common causal flaw. The argument assumes that because two things happen together, one must be causing the other. It often ignores a potential third factor or, more commonly, that the causal relationship is reversed. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The premise will establish a statistical link or correlation between two things. The conclusion will make a direct causal claim (`X causes Y`)."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "IV. Other Common Flaws"
    },
    {
      "type": "h4",
      "text": "6. The False Dilemma (or False Dichotomy)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument presents two options as the only possibilities, rules one out, and concludes the other must be true. The flaw is in ignoring other unstated alternatives. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The argument often sets up an \"either/or\" situation. The reasoning fails by not considering a middle ground or a third option."
    },
    {
      "type": "h4",
      "text": "7. The Source Argument (Ad Hominem)"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The argument attacks the person or source making a claim rather than the merits of the claim itself. A common variant is the **Tu Quoque** (\"you too\"), which dismisses a criticism by accusing the critic of hypocrisy. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The conclusion will reject a proposal, claim, or judgment. The evidence will be about the character, motives, or past actions of the person who made it."
    },
    {
      "type": "h4",
      "text": "8. Quantifier Flaws"
    },
    {
      "type": "paragraph",
      "text": "**Description:** These arguments misuse terms like `all`, `some`, and `most`, often by making an invalid inference about overlapping groups. *"
    },
    {
      "type": "paragraph",
      "text": "**Common Variations:**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Undistributed Middle:** All `A` are `B`. Some `C` are `B`. Therefore, some `C` are `A`.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Illicit Transitivity of \"Most\":** Most `A` are `B`. Most `B` are `C`. Therefore, Most `A` are `C`. *"
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:** The argument feels like a logic puzzle with categories. Pay close attention to the specific quantifiers used in the premises and conclusion."
    }
  ],
};
