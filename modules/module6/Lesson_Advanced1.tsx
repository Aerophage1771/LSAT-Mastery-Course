import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '6-9',
  title: 'Advanced Lesson 1: The Double Flaw',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: The Double Flaw"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Layered Flaws & Epistemic Errors  Advanced Parallel Flaw questions often test your precision by weaving two or more distinct flaws into a single, dense argument. While easier questions might focus on a straightforward Mistaken Reversal, a difficult question might combine that reversal with a second, more subtle error."
    },
    {
      "type": "paragraph",
      "text": "This example introduces a common second layer: the **epistemic flaw**. Epistemology is the study of knowledge, and an epistemic flaw is an error in reasoning about what someone knows, thinks, or believes. Here, the argument not only makes a structural error in conditional logic but also makes an unwarranted assumption about the subject's knowledge. The correct parallel must replicate *both* of these errors."
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
      "text": "**Stimulus** > > Bank deposits are credited on the date of the transaction only when they are made before 3 P.M. Alicia knows that the bank deposit was made before 3 P.M. So, Alicia knows that the bank deposit was credited on the date of the transaction. > > **Question** > > Which one of the following exhibits both of the logical flaws exhibited by the argument above? > > *   (A) Journalists are the only ones who will be permitted to ask questions at the press conference. Since Marjorie is a journalist, she will be permitted to ask questions. > *   (B) We know that Patrice works only on Thursday. Today is Thursday, so it follows that Patrice is working today. > *   (C) It is clear that George knows he will be promoted to shift supervisor, because George will be promoted to shift supervisor only if Helen resigns, and George knows Helen will resign. > *   (D) John believes that 4 is a prime number and that 4 is divisible by 2. Hence John believes that there is a prime number divisible by 2. > *   (E) Pat wants to become a social worker. It is well known that social workers are poorly paid. Pat apparently wants to be poorly paid."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton (Flaw-Focused) Let's dissect the two distinct errors in the stimulus."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Diagnose Flaw #1: The Conditional Error (Mistaken Reversal)**"
    },
    {
      "type": "paragraph",
      "text": "The first sentence uses the key phrase \"only when\" (equivalent to \"only if\"). This introduces a necessary condition. Let's diagram it:"
    },
    {
      "type": "list",
      "items": [
        "`Credited on Date (CD) → Made Before 3 PM (B3)`     The argument then observes that the deposit was made before 3 P.M. (`B3` is true) and concludes it was credited on the date (`CD` is true). This is a classic **Mistaken Reversal**. Just because the necessary condition was met doesn't guarantee the sufficient condition occurred."
      ]
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Diagnose Flaw #2: The Epistemic Error (Unwarranted Knowledge)**"
    },
    {
      "type": "paragraph",
      "text": "The argument doesn't just conclude that the deposit was credited; it concludes that *Alicia knows* it was credited. It assumes that because Alicia knows the premise (`deposit made before 3 P.M.`), she must also know the (flawed) conclusion derived from it. This is a second layer of error.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Abstract the Structure (The Blueprint):**"
    },
    {
      "type": "paragraph",
      "text": "A rule establishes that `X → Y` (\"only if\"). The argument observes that a person *knows Y*. It then invalidly concludes that the person *knows X*."
    },
    {
      "type": "h4",
      "text": "Step 2: Apply the Skeleton to Eliminate Choices  We are looking for an answer choice that contains both a Mistaken Reversal and an unwarranted conclusion about what a person knows."
    },
    {
      "type": "h4",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Journalists are the only ones who will be permitted to ask questions at the press conference. Since Marjorie is a journalist, she will be permitted to ask questions.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This contains a **Mistaken Reversal**. Rule: `Permitted → Journalist`. Premise: `Marjorie is a Journalist`. Conclusion: `Marjorie is Permitted`. However, the conclusion is about a fact (\"she will be permitted\"), not about what Marjorie *knows*. It is missing the epistemic flaw.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) We know that Patrice works only on Thursday. Today is Thursday, so it follows that Patrice is working today.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This also contains a **Mistaken Reversal**. Rule: `Works → Thursday`. Premise: `Today is Thursday`. Conclusion: `Patrice is Working`. Like (A), the conclusion is a factual claim, not a claim about what Patrice (or anyone else) knows. It is missing the epistemic flaw.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) It is clear that George knows he will be promoted to shift supervisor, because George will be promoted to shift supervisor only if Helen resigns, and George knows Helen will resign.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's map this to our blueprint.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule:** `Promoted (X) → Helen Resigns (Y)`.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** George *knows* Helen will resign (Person knows Y).       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** George *knows* he will be promoted (Person knows X)."
    },
    {
      "type": "list",
      "items": [
        "This perfectly replicates both flaws: it commits a **Mistaken Reversal** and makes an **unwarranted assumption about George's knowledge**."
      ]
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) John believes that 4 is a prime number and that 4 is divisible by 2. Hence John believes that there is a prime number divisible by 2.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument is about combining beliefs. It does not contain a conditional rule or a Mistaken Reversal. The structure is completely different.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) Pat wants to become a social worker. It is well known that social workers are poorly paid. Pat apparently wants to be poorly paid.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument contains a flaw about transferring intent (`wants`), not knowledge (`knows`). More importantly, it follows the conditional arrow correctly (`Social Worker → Poorly Paid`) rather than reversing it.   \n*"
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
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Identify All the Flaws:** On difficult questions, don't stop after finding the first flaw. Look for additional layers of error, such as a shift in certainty, scope, or, in this case, a jump from facts to knowledge. *"
    },
    {
      "type": "paragraph",
      "text": "**Translate \"Only If\":** Phrases like \"only if,\" \"only when,\" and \"the only\" introduce **necessary conditions**. The statement that follows them goes on the right side of the arrow in a diagram (`A → B`). Mistaking this is a common source of error. *"
    },
    {
      "type": "paragraph",
      "text": "**Distinguish Facts from Beliefs:** Pay close attention to epistemic terms like \"knows,\" \"believes,\" or \"thinks.\" An argument that concludes what someone *knows* is structurally different from one that concludes a simple *fact*."
    }
  ],
};
