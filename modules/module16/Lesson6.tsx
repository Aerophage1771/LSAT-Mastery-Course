import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '16-6',
  title: 'Lesson 3: Applying the Rule',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: Applying the Rule"
    },
    {
      "type": "h3",
      "text": "Concept Focus: From General Rule to Specific Case"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on a common and highly logical inference pattern: Applying a Rule. The stimulus will provide one or more general principles, rules, or definitions. Your task is to find the one answer choice that represents a correct and direct application of those rules to a specific situation or case."
    },
    {
      "type": "paragraph",
      "text": "Think of the stimulus as the \"rulebook\" or the \"law.\" The answer choices are five different \"verdicts\" for specific cases. Only one verdict will be a valid application of the law. Success on these questions requires precision and a strict adherence to the exact wording of the rules provided."
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
      "text": "**Stimulus** > > According to the rules of the university's housing lottery, the only students guaranteed dormitory rooms are fourth-year students. In addition, any fourth-year student on the dean's list can choose a dormitory room before anyone who is not a fourth-year student. > > **Question** > > Which one of the following inferences is most strongly supported by the rules described above? > > *   (A) Benizer is a fourth-year student who is not on the dean's list, so she is not guaranteed a dormitory room. > *   (B) Ivan and Naomi are both fourth-year students but only Naomi is on the dean's list. Therefore, Ivan can choose a dormitory room before Naomi. > *   (C) Halle, a third-year student, is on the dean's list. Thus, she is guaranteed a dormitory room. > *   (D) Gerald and Katrina are both on the dean's list but only Gerald is a fourth-year student. Thus, Gerald can choose a dormitory room before Katrina. > *   (E) Anissa is a fourth-year student who is on the dean's list. Thus, since Jehan is a second-year student who is also on the dean's list, he can choose a dormitory room before Anissa."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "Let's break the stimulus down into its two distinct rules:"
    },
    {
      "type": "list",
      "items": [
        "**Rule 1 (The Guarantee Rule):** The *only* students guaranteed a room are fourth-year students. This means if you are a fourth-year, you are guaranteed a room. If you are not, you are not.",
        "**Rule 2 (The Priority Rule):** `(4th Year + Dean's List)` gets to choose *before* `(Anyone NOT a 4th Year)`."
      ]
    },
    {
      "type": "paragraph",
      "text": "It's crucial to note that Rule 1 is about *getting* a room, while Rule 2 is about the *order of choosing* a room."
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The rules create a clear hierarchy for choosing rooms. A fourth-year on the Dean's List has top priority over any student in any other year, regardless of that other student's academic standing."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** A fourth-year on the Dean's List will get to pick their room before a third-year, even if the third-year is also on the Dean's List."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) Benizer is a fourth-year student who is not on the dean's list, so she is not guaranteed a dormitory room.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This misapplies Rule 1. Rule 1 states that ALL fourth-year students are guaranteed a room. Her status on the Dean's list is irrelevant to the guarantee."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Distortion)"
    },
    {
      "type": "paragraph",
      "text": "**(B) Ivan and Naomi are both fourth-year students but only Naomi is on the dean's list. Therefore, Ivan can choose a dormitory room before Naomi.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Rule 2 only specifies the picking order between a fourth-year on the Dean's list and a non-fourth-year. It tells us nothing about the order *among* fourth-year students. This is unsupported."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Halle, a third-year student, is on the dean's list. Thus, she is guaranteed a dormitory room.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This contradicts Rule 1. The rule explicitly states that *only* fourth-year students are guaranteed a room. Halle is a third-year, so she is not guaranteed one."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Contradiction)"
    },
    {
      "type": "paragraph",
      "text": "**(D) Gerald and Katrina are both on the dean's list but only Gerald is a fourth-year student. Thus, Gerald can choose a dormitory room before Katrina.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect application of Rule 2. Gerald is a `(4th Year + Dean's List)`. Katrina is `(NOT a 4th Year)`. The rule states Gerald chooses before Katrina. The fact that Katrina is also on the Dean's List is irrelevant information designed to distract you."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Anissa is a fourth-year student who is on the dean's list. Thus, since Jehan is a second-year student who is also on the dean's list, he can choose a dormitory room before Anissa.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This gets Rule 2 backward. The fourth-year student on the Dean's List (Anissa) gets to choose *before* the non-fourth-year student (Jehan)."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Flawed Causal Reasoning - Reversal)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Be Hyper-Literal:** When the stimulus provides explicit rules, treat them like code. Follow the instructions exactly as they are written, paying close attention to every word.",
        "**Identify the Scope of the Rule:** Understand exactly which groups the rule applies to and compares. The priority rule here was only about comparing fourth-years on the Dean's list to non-fourth-years; it said nothing about other comparisons.",
        "**Ignore Irrelevant \"Noise\":** Test-makers often add details to the answer choices that are not mentioned in the rule (like Katrina being on the Dean's list). The rule is all that matters. If a detail isn't part of the rule's conditions, ignore it."
      ]
    }
  ],
};
