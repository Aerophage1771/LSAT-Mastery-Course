import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '16-10',
  title: 'Advanced Lesson 3: The Inverse Inference',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: The Inverse Inference"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Intent vs. Result in \"LEAST Support\" Questions"
    },
    {
      "type": "paragraph",
      "text": "The \"LEAST Support\" (or \"EXCEPT\") question is an inverse variation of the standard type. Instead of finding the one statement that *is* supported, you must identify the one statement that is *not*. This inherently increases difficulty because you must validate four choices to find the outlier."
    },
    {
      "type": "paragraph",
      "text": "A common difficulty factor in these questions is the subtle distinction between **Result** and **Intent**. The stimulus may describe an outcome (X happened because of Y), but the trap answer will claim that the outcome was the *goal* or *purpose* (Y was done *in order to* achieve X). Without explicit evidence of intent, such a claim is unsupported."
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
      "text": "**Stimulus** > > Only poetry cannot be translated well, and therefore it is poets who preserve languages, for we would not bother to learn a language if we could get everything written in it from translation. So, since we cannot witness the beauty of poetry except in the language in which it is composed, we have motivation to learn the language. > > **Question** > > The information above provides the LEAST support for which one of the following? > > *   (A) All nonpoetic literature can be translated well. > *   (B) One purpose of writing poetry is to preserve the language in which it is written. > *   (C) Some translations do not capture all that was expressed in the original language. > *   (D) The beauty of poetry is not immediately accessible to people who do not understand the language in which the poetry was written. > *   (E) Perfect translation from one language to another is sometimes impossible."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "Let's verify the supported facts:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1:** \"Only poetry cannot be translated well.\" (Implies everything else *can* be translated well).",
        "**Fact 2:** \"Therefore it is poets who preserve languages.\" (Poets preserve languages as a *consequence* of their work being untranslatable).",
        "**Fact 3:** We \"cannot witness the beauty of poetry except in the language in which it is composed.\""
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "We are looking for the unsupported statement. Based on the facts, we know about the *effects* of poetry (preserving language, motivating learning). We do *not* know about the *intentions* of the poets. Do they write poetry *in order to* save languages? Or is that just a happy accident? The text doesn't say."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** Any claim about the *goals* or *purposes* of the poets is likely unsupported."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) All nonpoetic literature can be translated well.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Supported. The text says \"Only poetry cannot be translated well.\" This logically implies that non-poetry *can* be translated well."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is supported)."
    },
    {
      "type": "paragraph",
      "text": "**(B) One purpose of writing poetry is to preserve the language in which it is written.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our prephrase. The stimulus says poets *do* preserve languages (result). It never claims this is their *purpose* for writing. Confusing a result with a purpose is a classic logical error."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** (This is the LEAST supported claim)."
    },
    {
      "type": "paragraph",
      "text": "**(C) Some translations do not capture all that was expressed in the original language.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Supported. Since poetry \"cannot be translated well,\" its translations must fail to capture everything."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is supported)."
    },
    {
      "type": "paragraph",
      "text": "**(D) The beauty of poetry is not immediately accessible to people who do not understand the language in which the poetry was written.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Supported. The text explicitly says \"we cannot witness the beauty of poetry except in the language in which it is composed.\""
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is supported)."
    },
    {
      "type": "paragraph",
      "text": "**(E) Perfect translation from one language to another is sometimes impossible.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Supported. Since poetry \"cannot be translated well,\" perfect translation of poetry is impossible."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is supported)."
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
        "**Distinguish Outcome from Intent:** Just because Action A leads to Result B, do not assume the actor *intended* Result B. Look for explicit words like \"goal,\" \"purpose,\" or \"in order to.\"",
        "**Process of Elimination:** In \"LEAST Support\" questions, use the four incorrect answers (the supported ones) to double-check your understanding of the passage. They act as confirmations of the text's meaning.",
        "**Watch for \"Only\":** The phrase \"Only poetry cannot be translated well\" is a powerful logical operator. It validates strong inferences about everything that is *not* poetry."
      ]
    }
  ],
};
