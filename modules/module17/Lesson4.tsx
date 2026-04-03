import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '17-4',
  title: 'Lesson 1: The Conditional Chain',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Conditional Chain"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Chain Deduction"
    },
    {
      "type": "paragraph",
      "text": "Many Must Be True questions are built around a series of \"if-then\" statements. The most fundamental logical move you can make with this structure is to link them together into a Conditional Chain. This pattern connects rules like a series of falling dominoes, allowing you to derive a new conclusion that wasn't explicitly stated."
    },
    {
      "type": "list",
      "items": [
        "**The Basic Chain:** If one rule states `A → B` and another states `B → C`, you can validly conclude `A → C`.",
        "**The Contrapositive Chain:** The same logic applies to the contrapositives. If you have `W → X` and `X → Y`, you can also use their contrapositives `~Y → ~X` and `~X → ~W` to form a reverse chain: `~Y → ~W`."
      ]
    },
    {
      "type": "paragraph",
      "text": "Recognizing and forming these chains is one of the most powerful and frequently tested skills for solving formal logic problems."
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
      "text": "**Stimulus** > > If you have no keyboarding skills at all, you will not be able to use a computer. And if you are not able to use a computer, you will not be able to write your essays using a word processing program. > > **Question** > > If the statements above are true, which one of the following must be true? > > *   (A) If you have some keyboarding skills, you will be able to write your essays using a word processing program. > *   (B) If you are not able to write your essays using a word processing program, you have no keyboarding skills. > *   (C) If you are able to write your essays using a word processing program, you have at least some keyboarding skills. > *   (D) If you are able to use a computer, you will probably be able to write your essays using a word processing program. > *   (E) If you are not able to write your essays using a word processing program, you are not able to use a computer."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must be true,\" signaling a classic Must Be True question. Our goal is to find the one answer choice that is a 100% logically certain consequence of the two sentences in the stimulus."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "The stimulus consists of two conditional (\"if-then\") statements. Let's define the terms and diagram them:"
    },
    {
      "type": "list",
      "items": [
        "**NKS:** You have **n**o **k**eyboarding **s**kills.",
        "**~C:** You are **n**ot able to use a **c**omputer.",
        "**~W:** You are **n**ot able to **w**rite your essays with a word processor."
      ]
    },
    {
      "type": "list",
      "items": [
        "**Statement 1:** \"If you have no keyboarding skills..., you will not be able to use a computer.\" **Diagram:** NKS → ~C",
        "**Statement 2:** \"If you are not able to use a computer, you will not be able to write... with a word processing program.\" **Diagram:** ~C → ~W"
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "The two rules share a common term (`~C`), which allows us to link them together to form a deductive chain."
    },
    {
      "type": "paragraph",
      "text": "**The Forward Chain:**"
    },
    {
      "type": "list",
      "items": [
        "The first rule ends with `~C` (NKS → ~C).",
        "The second rule begins with `~C` (~C → ~W)."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Combined Chain:** `NKS → ~C → ~W`."
    },
    {
      "type": "paragraph",
      "text": "**Deduction:** This proves a new rule: If you have no keyboarding skills, you will not be able to write your essays using a word processing program (NKS → ~W)."
    },
    {
      "type": "paragraph",
      "text": "**The Contrapositive Chain:**"
    },
    {
      "type": "list",
      "items": [
        "The contrapositive of the second rule is: `W → C`.",
        "The contrapositive of the first rule is: `C → ~NKS`."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Combined Chain:** `W → C → ~NKS`."
    },
    {
      "type": "paragraph",
      "text": "**Deduction:** This proves another new rule: If you are able to write your essays with a word processor, you must have at least some keyboarding skills. (`~NKS` means \"it's not the case that you have no skills,\" which is the same as having at least some.)"
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The correct answer will likely be a restatement of one of our derived rules, `NKS → ~W` or `W → ~NKS`."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) If you have some keyboarding skills, you will be able to write your essays using a word processing program.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This translates to `~NKS → W`. Our derived rule is `W → ~NKS`. This answer choice is a **Mistaken Reversal**. Having some skills is necessary, but it's not sufficient to guarantee you can write the essay (your computer could still be broken)."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) If you are not able to write your essays using a word processing program, you have no keyboarding skills.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This translates to `~W → NKS`. Our derived rule is `NKS → ~W`. This is another **Mistaken Reversal**. You might be unable to write the essay for other reasons, even if you have skills."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) If you are able to write your essays using a word processing program, you have at least some keyboarding skills.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This translates to `W → ~NKS`. This is a perfect match for the conclusion we derived from our contrapositive chain (`W → C → ~NKS`). It must be true."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) If you are able to use a computer, you will probably be able to write your essays using a word processing program.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is flawed for two reasons. First, the word \"probably\" is out of place; the stimulus gives absolute rules. Second, it commits a **Mistaken Reversal** of the relationship `W → C`."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) If you are not able to write your essays using a word processing program, you are not able to use a computer.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This translates to `~W → ~C`. The original rule from the stimulus is `~C → ~W`. This is a **Mistaken Reversal** of the second premise."
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
        "**Look for the Chain:** When a stimulus contains multiple \"if-then\" statements, your first instinct should be to look for a common term that links them.",
        "**The Contrapositive is Your Ally:** The correct answer is often the contrapositive of a derived chain. If you form a forward chain, always form the contrapositive chain as well.",
        "**Formal Logic Traps are Predictable:** The incorrect answers in conditional logic questions are almost always classic fallacies like the Mistaken Reversal (`A→B`, therefore `B→A`) or the Mistaken Negation (`A→B`, therefore `~A→~B`). Spotting them is key to efficient elimination."
      ]
    }
  ],
};
