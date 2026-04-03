import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '11-6',
  title: 'Lesson 3: The Shield (Necessary Assumption)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: The Shield (Necessary Assumption)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Shielding the Evidence"
    },
    {
      "type": "paragraph",
      "text": "Many arguments use a specific piece of evidence — like a survey, a study of a small group, or a historical example — to support a much broader conclusion. This is a \"part-to-whole\" argument. The logical leap is the assumption that the specific part (the evidence) is a reliable indicator of the whole (the conclusion's subject). A Shield assumption protects the argument by confirming that the evidence is representative, relevant, and can be legitimately used to support the broader claim."
    },
    {
      "type": "list",
      "items": [
        "**Evidence:** A specific subgroup (nesting females) has seen a dramatic decline.",
        "**Rule:** A species is in danger if its *total population* declines dramatically.",
        "**Conclusion:** The species is in danger.",
        "**Logical Gap:** The argument uses evidence about a *part* to trigger a rule about the *whole*.",
        "**Necessary Assumption (The Shield):** The decline in the part is representative of the decline in the whole."
      ]
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
      "text": "**Stimulus** > > Global surveys estimate the earth's population of nesting female leatherback turtles has fallen by more than two-thirds in the past 15 years. Any species whose population declines by more than two-thirds in 15 years is in grave danger of extinction, so the leatherback turtle is clearly in danger of extinction. > > **Question** > > Which one of the following is an assumption that the argument requires? > > *   (A) The decline in the population of nesting female leatherback turtles is proportional to the decline in the leatherback turtle population as a whole. > *   (B) If the global population of leatherback turtles falls by more than two-thirds over the next 15 years, the species will eventually become extinct. > *   (C) The global population of leatherback turtles consists in roughly equal numbers of females and males. > *   (D) Very few leatherback turtles exist in captivity. > *   (E) The only way to ensure the continued survival of leatherback turtles in the wild is to breed them in captivity."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "list",
      "items": [
        "**Conclusion:** The leatherback turtle is in danger of extinction.",
        "**Premise 1 (Evidence):** The population of *nesting female* leatherback turtles has fallen by >2/3 in 15 years.",
        "**Premise 2 (Rule):** *Any species* whose *total population* declines by >2/3 in 15 years is in danger.",
        "**Core Argument:** The author applies a general rule about a species' *total population* based on evidence from a specific subgroup, the *nesting females*."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "There is a clear mismatch in scope between the evidence and the rule. The evidence is about a specific part (nesting females), while the rule is about the whole (the total population). For the evidence to trigger the rule, the author must assume that the trend in the part is a reliable indicator of the trend in the whole."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Necessary Connection"
    },
    {
      "type": "paragraph",
      "text": "The argument needs to connect the evidence about nesting females to the total population."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The author has to assume that the decline in nesting females means the whole population has declined by a similar amount."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate Answer Choices and Select a Contender"
    },
    {
      "type": "list",
      "items": [
        "(A) This choice directly states that the decline in nesting females is proportional to the decline in the population as a whole. This is a perfect match for our prephrase.",
        "(B) This discusses what will happen in the future if the decline continues. The argument is about the current danger.",
        "(C) This is about the ratio of males to females, a detail not necessary for the argument's logic.",
        "(D) This is about turtles in captivity, which is a detail not mentioned and not necessary.",
        "(E) This is about a potential solution, which is out of scope. The argument is only about establishing that there is a problem."
      ]
    },
    {
      "type": "paragraph",
      "text": "Choice (A) is our clear contender."
    },
    {
      "type": "h4",
      "text": "Step 5: Confirm with the Negation Test"
    },
    {
      "type": "list",
      "items": [
        "**Original (A):** The decline in the population of nesting female leatherback turtles is proportional to the decline in the leatherback turtle population as a whole.",
        "**Negation:** The decline in the population of nesting female leatherback turtles is **NOT** proportional to the decline in the leatherback turtle population as a whole."
      ]
    },
    {
      "type": "paragraph",
      "text": "If the negation is true, it means we cannot use the data on nesting females to draw conclusions about the total population. The male and non-nesting female populations could be stable or even growing, meaning the total population has declined by far less than two-thirds. If that's the case, the rule (\"Any species whose population declines by more than two-thirds...\") does not apply, and the conclusion is left completely unsupported. The argument is destroyed. (A) is the correct answer."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Analysis of Incorrect Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(B) If the global population of leatherback turtles falls by more than two-thirds over the next 15 years, the species will eventually become extinct.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Overly Strong Claim. The conclusion is that the species is in \"grave danger,\" not that it is doomed to extinction. The argument can be valid without this assumption of inevitable doom."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) The global population of leatherback turtles consists in roughly equal numbers of females and males.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Out of Scope Detour. The argument's logic works regardless of the specific male-to-female ratio, as long as the decline in nesting females is representative of the whole."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Very few leatherback turtles exist in captivity.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is also Out of Scope. The argument is about the \"global population,\" which includes both wild and captive turtles. The location of the turtles doesn't change the overall numbers."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) The only way to ensure the continued survival of leatherback turtles in the wild is to breed them in captivity.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This introduces a potential solution. The argument is only about establishing a problem, not solving it. This is out of scope."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Mind the Gap Between Part and Whole:** Be highly suspicious when an argument uses evidence about a specific sample, subgroup, or indicator to draw a conclusion about a much larger group or concept.",
        "**Assumptions of Representativeness:** The necessary assumption in these cases will almost always be a \"Shield\" that confirms the small group is representative of the large one.",
        "**Look for Mismatched Language:** Pay close attention to the exact wording. The shift from \"nesting female leatherback turtles\" in the evidence to \"the leatherback turtle\" (as a species) in the conclusion is the key clue."
      ]
    }
  ],
};
