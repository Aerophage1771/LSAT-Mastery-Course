import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '17-5',
  title: 'Lesson 2: The Quantifier Combination',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Quantifier Combination"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Quantifier Combination"
    },
    {
      "type": "paragraph",
      "text": "Must Be True questions often test your ability to combine different types of logical statements. One of the most common and powerful patterns is the Quantifier Combination, which involves linking a statement about a particular group (`some`, `most`) with a universal rule (`all`, `none`)."
    },
    {
      "type": "paragraph",
      "text": "The core logical move is to apply the universal rule to the specific group that is guaranteed to exist by the particular statement."
    },
    {
      "type": "list",
      "items": [
        "**Premise 1 (Particular):** \"Some A are B.\" (This tells you a group of things that are both A and B definitely exists.)",
        "**Premise 2 (Universal):** \"All B are C.\" (This is a rule that applies to every single B.)",
        "**Valid Deduction:** \"Therefore, some A are C.\" This deduction works because the group of \"some A\" that are \"B\" must also have all the properties of B, which in this case includes being \"C.\""
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
      "text": "**Stimulus** > > \"Good hunter\" and \"bad hunter\" are standard terms in the study of cats. Good hunters can kill prey that weigh up to half their body weight. All good hunters have a high muscle-to-fat ratio. Most wild cats are good hunters, but some domestic cats are good hunters as well. > > **Question** > > If the statements above are true, which one of the following must also be true? > > *   (A) Some cats that have a high muscle-to-fat ratio are not good hunters. > *   (B) A smaller number of domestic cats than wild cats have a high muscle-to-fat ratio. > *   (C) All cats that are bad hunters have a low muscle-to-fat ratio. > *   (D) Some cats that have a high muscle-to-fat ratio are domestic. > *   (E) All cats that have a high muscle-to-fat ratio can kill prey that weigh up to half their body weight."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must also be true,\" signaling a Must Be True question. Our task is to find the one conclusion that is a 100% logical certainty based only on the facts provided about cats."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "Let's break the stimulus into a clear set of rules."
    },
    {
      "type": "list",
      "items": [
        "**GH:** Good Hunter",
        "**HMFR:** High Muscle-to-Fat Ratio",
        "**DC:** Domestic Cat"
      ]
    },
    {
      "type": "list",
      "items": [
        "**Rule 1:** \"All good hunters have a high muscle-to-fat ratio.\" **Diagram:** GH → HMFR",
        "**Rule 2:** \"...some domestic cats are good hunters as well.\" **Diagram:** This tells us there is a definite overlap between the DC and GH groups. (Some DC are GH.) (Note: The other information about killing prey and wild cats is also true, but these two rules are the most likely to combine for a deduction.)"
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "We have a \"some\" statement and an \"all\" statement. Let's combine them."
    },
    {
      "type": "list",
      "items": [
        "**Start with \"some\":** Rule 2 guarantees the existence of a group of cats that are *both domestic and good hunters*. Let's call this \"Group X.\"",
        "**Apply the \"all\" rule:** Rule 1 states that *every single* good hunter has a high muscle-to-fat ratio. Since the cats in Group X are good hunters, this rule must apply to them.",
        "**Synthesize:** Therefore, the cats in Group X must also have a high muscle-to-fat ratio. This means there is a group of cats that are domestic, good hunters, and have a high muscle-to-fat ratio."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The simplest conclusion from this is: \"Some domestic cats have a high muscle-to-fat ratio.\""
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) Some cats that have a high muscle-to-fat ratio are not good hunters.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This *could* be true, but it doesn't *have* to be. The stimulus says `GH → HMFR`. It's possible that the reverse is also true and that *only* good hunters have a high ratio. The stimulus doesn't rule that out."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) A smaller number of domestic cats than wild cats have a high muscle-to-fat ratio.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a classic trap confusing proportions with absolute numbers. The stimulus says \"most\" wild cats vs. \"some\" domestic cats. If there are 10 million domestic cats and only 100 wild cats, \"some\" of the domestic cats could be a much larger number than \"most\" of the wild cats."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) All cats that are bad hunters have a low muscle-to-fat ratio.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus states `GH → HMFR`. The contrapositive is `~HMFR → ~GH` (low ratio means bad hunter). This choice states `~GH → ~HMFR`, which is an invalid **Mistaken Negation**."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Some cats that have a high muscle-to-fat ratio are domestic.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Our prephrase was \"Some domestic cats have a high muscle-to-fat ratio.\" A statement \"Some A are B\" is logically identical to \"Some B are A.\" This choice is a perfect logical equivalent of our derived conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) All cats that have a high muscle-to-fat ratio can kill prey that weigh up to half their body weight.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus states `GH → HMFR`. This choice suggests `HMFR → KP` (kill prey). This is a **Mistaken Reversal**. A cat could have a high muscle ratio but be a bad hunter, in which case it would not be able to kill large prey."
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
      "type": "list",
      "items": [
        "**The \"Some + All\" Combo:** The logical pattern `Some A are B` + `All B are C` is a powerful and reliable way to deduce that `Some A are C`.",
        "**\"Some\" Guarantees Existence:** A \"some\" statement is a powerful starting point because it confirms that a specific group of individuals actually exists, allowing you to apply universal rules to them.",
        "**Beware of Quantifier Traps:** Be careful to distinguish between proportions (`most`, `some`) and absolute numbers. Also, be on the lookout for formal logic fallacies like Mistaken Reversals and Negations."
      ]
    }
  ],
};
