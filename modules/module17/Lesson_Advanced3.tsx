import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '17-11',
  title: 'Advanced Lesson 3: Logic Density & Multi-Part Principles',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: Logic Density & Multi-Part Principles"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Handling Logical Density"
    },
    {
      "type": "paragraph",
      "text": "Some of the hardest Must Be True questions don't rely on a single trick but simply on Logical Density. The stimulus presents a complex rule or principle with multiple moving parts, exceptions, and conditions."
    },
    {
      "type": "list",
      "items": [
        "**Multi-Step Rules:** A rule might require Condition A AND Condition B to be true, AND for Condition C to be false.",
        "**Relative Comparisons:** The rule might depend on comparing quantities, such as \"disagreeing on *more* issues with Candidate X than with Candidate Y.\"",
        "**\"Otherwise\" Clauses:** The stimulus might set up a specific rule for one scenario and then a catch-all rule (\"otherwise...\") for everything else."
      ]
    },
    {
      "type": "paragraph",
      "text": "To solve these, you must slow down and treat the stimulus like a mathematical algorithm or a piece of computer code. You need to \"run\" the specific scenario provided in the question or answer choices through the complex rule to see what output it generates."
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
      "text": "**Stimulus** > > Whenever she considers voting... Kay uses the following principle...: it is acceptable for me to vote for a candidate... whenever I disagree with each of the other candidates on even more... issues; it is otherwise unacceptable to vote for that candidate. > > **Question** > > If the statements in the passage are true, which one of the following must also be true about Kay's course of action in any election to select one candidate for a position? > > *   (A) If there are no issues important to her, it is unacceptable for her to vote for any candidate in the election. > *   (B) If she agrees with each of the candidates on most of the issues important to her, it is unacceptable for her to vote for any candidate in the election. > *   (C) If she agrees with a particular candidate on only one issue important to her, it is unacceptable for her to vote for that candidate. > *   (D) If she disagrees with each of the candidates on exactly three issues important to her, it is unacceptable for her to vote for any candidate in the election. > *   (E) If there are more issues important to her on which she disagrees with a particular candidate than there are such issues on which she agrees with that candidate, it is unacceptable for her to vote for that candidate."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must be true\" about Kay's voting. We need to apply her specific principle to various hypothetical scenarios to find the one guaranteed outcome."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "Let's translate Kay's principle into a formal rule."
    },
    {
      "type": "list",
      "items": [
        "**The Goal:** Determining if voting for Candidate X is \"Acceptable.\"",
        "**The Condition:** Kay must disagree with *every other* candidate on *more* issues than she disagrees with Candidate X."
      ]
    },
    {
      "type": "list",
      "items": [
        "Let D(X) = Disagreements with X.",
        "Let D(Others) = Disagreements with any other candidate."
      ]
    },
    {
      "type": "list",
      "items": [
        "**Rule:** Vote for X is Acceptable IF AND ONLY IF: D(Others) > D(X) for *all* other candidates.",
        "**The \"Otherwise\" Clause:** If this specific condition is NOT met, voting for X is **Unacceptable**."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Simplified Logic:** To vote for someone, they must be the **unique winner** of the \"fewest disagreements\" contest. If they are tied for fewest, or if someone else has fewer, you can't vote for them."
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "We need to find a scenario where the \"Unique Winner\" condition fails. If Candidate A has 3 disagreements and Candidate B has 3 disagreements, can Kay vote for A?"
    },
    {
      "type": "list",
      "items": [
        "No. She does not disagree with B on *more* issues than A (3 is not > 3). So A is unacceptable.",
        "Can she vote for B? No. She does not disagree with A on *more* issues than B. So B is unacceptable."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Deduction:** In any tie for the \"least objectionable\" candidate, Kay cannot vote for anyone involved in the tie."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) If there are no issues important to her, it is unacceptable for her to vote for any candidate in the election.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus starts with \"Whenever... there is at least one issue important to her.\" The rule doesn't apply if there are no important issues. We don't know what she does then."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Out of Scope.)"
    },
    {
      "type": "paragraph",
      "text": "**(B) If she agrees with each of the candidates on most of the issues important to her, it is unacceptable for her to vote for any candidate in the election.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** \"Most\" is vague. If there are 10 issues, and she agrees on 9 with Candidate A (1 disagreement) and on 8 with Candidate B (2 disagreements), she agrees with both on \"most.\" But D(B) > D(A) (2 > 1), so she *can* vote for A."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Plausible but not necessary.)"
    },
    {
      "type": "paragraph",
      "text": "**(C) If she agrees with a particular candidate on only one issue important to her, it is unacceptable for her to vote for that candidate.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This focuses on agreements, not disagreements. If she agrees on only 1 issue with A (meaning many disagreements), but agrees on *zero* issues with B (even more disagreements), she could still vote for A."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Wrong variable.)"
    },
    {
      "type": "paragraph",
      "text": "**(D) If she disagrees with each of the candidates on exactly three issues important to her, it is unacceptable for her to vote for any candidate in the election.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This sets up a perfect tie."
    },
    {
      "type": "list",
      "items": [
        "D(A) = 3.",
        "D(B) = 3.",
        "To vote for A, D(B) must be > 3. It isn't. So A is Unacceptable.",
        "To vote for B, D(A) must be > 3. It isn't. So B is Unacceptable.",
        "This applies to any candidate. Therefore, she cannot vote for anyone."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) If there are more issues important to her on which she disagrees with a particular candidate than there are such issues on which she agrees with that candidate, it is unacceptable for her to vote for that candidate.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This compares disagreements to agreements for the *same* candidate. The rule compares disagreements *between* candidates."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Wrong comparison.)"
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
        "**Map the Algorithm:** When a stimulus gives you a \"principle\" or \"rule,\" treat it like a computer program. Define exactly what inputs lead to \"Acceptable\" and what inputs lead to \"Unacceptable.\"",
        "**Watch for \"Unique\" Requirements:** Phrases like \"disagree *more than* any other\" establish a requirement for a unique winner. Ties usually result in failure under these rules.",
        "**Test the Scenarios:** For answer choices that set up hypotheticals (like \"If she disagrees on exactly three issues...\"), plug those numbers into your rule to see if the outcome matches the answer choice."
      ]
    }
  ],
};
