import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '12-7',
  title: 'Lesson 4: Justifying with a Formal Rule',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: Justifying with a Formal Rule"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The \"If/Then\" Rule (Formal Conditional Bridge)"
    },
    {
      "type": "paragraph",
      "text": "This pattern is the most direct and logical of the four types. The justifying principle provides a strict, formal conditional rule (`If P, then Q`) that functions as a sufficient condition. It's designed to make the argument deductively valid."
    },
    {
      "type": "paragraph",
      "text": "The argument will establish that a certain condition (P) is true. The conclusion will be a separate claim (Q). The correct principle will provide the missing rule that states, \"If P is true, then Q must also be true.\" This locks the argument's premise and conclusion together like a mathematical proof."
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
      "text": "**Stimulus** > > Editorial: Our society has a vested interest in maintaining a political system in which candidates are free to adhere to their principles. Yet campaigning for elected office is extremely costly, and because only the wealthiest individuals are able to finance their own political campaigns, most candidates must seek funding from private sources. In so doing, the candidates are almost invariably obliged to compromise their principles. Thus, government itself should assume the cost of candidates’ campaigns. > > **Question** > > Which one of the following principles, if valid, most helps to justify the conclusion as it is drawn in the argument? > > *   (A) Candidates should not run for elected office if doing so would compel the candidates to compromise their principles. > *   (B) Candidates wealthy enough to finance their own political campaigns should not be permitted to raise additional funds from private sources. > *   (C) Voters should not support a candidate if that candidate is known to have accepted funding from private sources. > *   (D) The government should finance a given activity if doing so will further a vested interest of society. > *   (E) Private funding for political campaigns should be encouraged only if it redresses an imbalance among candidates’ financial means."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The government should assume the cost of candidates’ campaigns."
    },
    {
      "type": "paragraph",
      "text": "**Premise (Evidence):**"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "Society has a \"vested interest\" in having principled candidates.",
        "The current system of private funding undermines this interest by forcing candidates to compromise their principles.",
        "(Implied) Government funding would solve this problem, thereby furthering society’s vested interest."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Leap"
    },
    {
      "type": "paragraph",
      "text": "The argument moves from a factual claim (government funding would help achieve a societal interest) to a prescriptive conclusion (the government *should* provide the funding). The reasoning assumes a direct link between an action’s benefit to society and the government’s obligation to perform that action."
    },
    {
      "type": "h4",
      "text": "Step 3: Pre-phrase the Justifying Principle"
    },
    {
      "type": "paragraph",
      "text": "We need a formal rule that connects the premise to the conclusion. The structure should be: \"If a government action would help a vested interest of society, then the government should take that action.\""
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) Candidates should not run for elected office if doing so would compel the candidates to compromise their principles.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This principle suggests an alternative solution and focuses on the wrong agent. It tells *candidates* what to do, whereas the argument’s conclusion is about what the *government* should do. It’s a scope shift."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Candidates wealthy enough to finance their own political campaigns should not be permitted to raise additional funds from private sources.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a different, narrower policy proposal. The argument’s conclusion is about a broad public funding system, not about restricting a specific group of wealthy candidates."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) Voters should not support a candidate if that candidate is known to have accepted funding from private sources.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Like (A), this is an alternative solution focused on the wrong agent. It suggests *voters* should solve the problem, while the conclusion says the *government* should."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) The government should finance a given activity if doing so will further a vested interest of society.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our pre-phrase. It provides a formal `If P, then Q` rule: **If** an activity will further a vested interest of society (P), **then** the government should finance it (Q). The premises establish that government funding is such an activity (P), so this principle allows the conclusion (Q) to follow logically."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Private funding for political campaigns should be encouraged only if it redresses an imbalance among candidates’ financial means.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This principle discusses how to reform or regulate private funding. The argument’s conclusion is to *replace* private funding with public funding. This contradicts the spirit of the conclusion."
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
      "text": "**Look for the \"If P, then Q\" Structure:** This pattern is about making an argument deductively valid. The correct principle will take the form of a sufficient condition that, when combined with the premises, guarantees the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Check the Agent and Action:** Traps often propose alternative solutions or focus on the wrong group of people (e.g., voters, candidates) when the conclusion is about the government’s duty."
    },
    {
      "type": "paragraph",
      "text": "**The Principle Provides the \"Why\":** The correct principle is the missing piece of the logical puzzle that explains *why* the evidence leads to the specific recommendation in the conclusion."
    }
  ],
};
