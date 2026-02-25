import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "13-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Principle-Apply Questions' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Principle-Apply question. The core process is mechanical: decompose the principle into its parts, build a checklist, and then test each answer choice against that checklist. Each step below includes concrete guidance, tips for tricky situations, and key insights." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Budget roughly **1 minute and 30 seconds** per Principle-Apply question. Steps 1–2 (diagramming the principle and listing conditions) should take about 40 seconds combined. Steps 3–4 (checking answers and verifying) should take about 50 seconds. The decomposition is critical — students who jump to the answer choices without first building a checklist waste time re-reading the principle for each option." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Diagram the Principle:** Read the stimulus and translate the principle into a clear conditional structure: IF [conditions] → THEN [consequence].',
      '**Step 2 — List the Conditions:** Extract every individual condition from the principle and create a mental (or written) checklist. Note the consequence separately.',
      '**Step 3 — Check Each Answer:** For each answer choice, systematically verify whether the scenario satisfies every condition on your checklist and reaches the stated consequence.',
      '**Step 4 — Verify All Conditions Met:** Before confirming your answer, re-read the principle one final time and confirm that your chosen answer satisfies every condition without exception.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Diagram the Principle' },
    { type: 'paragraph', text: "Your first job is to convert the principle from natural language into a clear logical structure. Most principles on the LSAT are conditional in nature — they describe a set of circumstances (conditions) that trigger a particular outcome (consequence). Your goal is to strip away the rhetorical packaging and expose the underlying logic." },

    { type: 'h4', text: 'Conditional Diagramming' },
    { type: 'paragraph', text: "Translate the principle into standard conditional form. Watch for the logical connectives that define the relationship between conditions:" },
    { type: 'table', headers: ['Language in the Principle', 'Logical Structure', 'What It Means'], rows: [
      ['"If A and B, then C"', 'A + B → C', 'Both conditions must be present for the consequence to follow'],
      ['"X only if Y"', 'X → Y', 'Y is a *necessary* condition for X — without Y, X cannot hold'],
      ['"X unless Y"', '¬Y → X (If not Y, then X)', 'X happens by default; Y is the only thing that prevents it'],
      ['"All X are Y"', 'X → Y', 'Being X is sufficient for being Y'],
      ['"No X is Y"', 'X → ¬Y', 'Being X guarantees not being Y'],
      ['"X is wrong/justified/permissible when Y"', 'Y → X is wrong/justified/permissible', '"When" introduces the sufficient condition'],
    ]},

    { type: 'paragraph', text: "**Example:** \"A leader is justified in overriding a committee's decision only if the decision threatens the organization's core mission and no less drastic measure is available.\"" },
    { type: 'paragraph', text: "**Diagram:** Justified Override → (Threatens Core Mission) AND (No Less Drastic Measure Available)" },
    { type: 'paragraph', text: "The \"only if\" tells us the two conditions are *necessary*. If either condition fails, the override is not justified. A correct application of this principle could show an override that is justified (both conditions met) *or* one that is unjustified (at least one condition fails)." },

    { type: 'callout', variant: 'default', title: 'Multi-Condition Principles', text: "Many principles contain two or three conditions joined by \"and.\" Treat these as a checklist: *every* condition must be individually verified. Wrong answers are specifically designed to satisfy all but one condition. The one condition they violate is often the subtlest — a qualifier about intent, degree, or scope that is easy to overlook." },

    { type: 'callout', variant: 'tip', title: 'Tip: Don\'t Forget the Contrapositive', text: "The contrapositive is always a valid application of a conditional principle. If the principle says \"IF A and B, THEN C,\" then \"NOT C → NOT A or NOT B\" is equally valid. A correct answer might apply the principle in the contrapositive direction: the consequence did NOT occur, therefore at least one condition was NOT met. Watch for this — it is a common source of correct answers that students overlook." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: List the Conditions' },
    { type: 'paragraph', text: "After diagramming, extract each individual condition from the principle and list them explicitly. This step may seem redundant, but it prevents the most common error on Principle-Apply questions: matching on the overall *feel* of the principle while missing a specific condition." },

    { type: 'h4', text: 'Condition Extraction Example' },
    { type: 'paragraph', text: "**Principle:** \"A city should provide free public transit to any resident who is over 65, has lived in the city for at least 5 years, and has an annual income below the regional median.\"" },
    { type: 'list', ordered: true, items: [
      '**Condition 1:** The person is a resident of the city.',
      '**Condition 2:** The person is over 65 years old.',
      '**Condition 3:** The person has lived in the city for at least 5 years.',
      '**Condition 4:** The person has an annual income below the regional median.',
      '**Consequence:** The city should provide free public transit to this person.',
    ]},
    { type: 'paragraph', text: "Four conditions. The correct answer must establish all four. If an answer describes someone who is 70, has lived in the city for 10 years, has below-median income, but is a visitor (not a resident), it fails Condition 1 and is wrong — even though three out of four conditions are satisfied." },

    { type: 'callout', variant: 'tip', title: 'Tip: Watch for Hidden Conditions', text: "Some conditions are embedded in modifiers that are easy to skim over. Phrases like \"knowingly,\" \"without provocation,\" \"that is available to the general public,\" or \"for the purpose of\" add conditions that the correct answer must address. Read the principle slowly and ask yourself: \"How many separate requirements does this rule impose?\"" },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Check Each Answer' },
    { type: 'paragraph', text: "Now apply your checklist to each answer choice. For each scenario, ask three questions:" },
    { type: 'list', ordered: true, items: [
      '**Are all conditions met?** Check each condition from your list against the facts described in the answer choice.',
      '**Is the consequence correct?** Does the scenario reach the same outcome or judgment that the principle dictates?',
      '**Is the logic in the right direction?** Does the answer apply the principle (or its contrapositive) in a logically valid way, or does it commit a mistaken reversal?',
    ]},

    { type: 'paragraph', text: "Move through the answer choices efficiently. When you find a condition that fails, stop and move on — you do not need to finish evaluating the remaining conditions for that answer." },

    { type: 'h4', text: 'Wrong Answer Patterns' },
    { type: 'paragraph', text: "Wrong answers on Principle-Apply questions fail in predictable ways. Knowing these patterns lets you eliminate quickly and with confidence." },

    { type: 'table', headers: ['Trap Type', 'What It Does', 'How to Spot It'], rows: [
      ['**The Missing Condition**', 'Satisfies most conditions but omits one — often the most subtle qualifier (intent, degree, scope).', 'Check each condition individually. Don\'t be satisfied by an overall impression of similarity.'],
      ['**The Wrong Consequence**', 'Satisfies all conditions but reaches a different outcome than the principle requires — e.g., "is permissible" instead of "is required."', 'Verify that the judgment or outcome in the answer matches the principle\'s consequence exactly.'],
      ['**The Mistaken Reversal**', 'Applies the principle backward. If the principle says "A → B," the answer treats it as "B → A" — concluding that because the consequence occurred, the conditions must have been met.', 'Diagram the direction. The answer must flow from conditions to consequence, or use the valid contrapositive (¬B → ¬A).'],
      ['**The Scope Mismatch**', 'Describes a scenario involving a different type of agent, action, or context than the principle covers — e.g., the principle governs employers but the answer describes a landlord.', 'Compare the subject matter of the answer to the scope of the principle. If the answer describes a different domain, it cannot be a correct application.'],
      ['**The Irrelevant Criterion**', 'Introduces a new factor not mentioned in the principle and uses it as the basis for the judgment.', 'Ask: "Is this reason for the judgment found anywhere in the principle?" If the justification comes from outside the principle, the answer is wrong.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Verify All Conditions Met' },
    { type: 'paragraph', text: "Before committing to your answer, perform one final verification pass. Re-read the principle and, for your chosen answer, confirm that *every single condition* is satisfied and the consequence matches. This 10-second check catches the most common Principle-Apply error: the premature match." },
    { type: 'paragraph', text: "Ask yourself:" },
    { type: 'list', items: [
      '"Did I check every condition, including the subtle qualifiers?"',
      '"Does the conclusion in the answer match the principle\'s consequence — not just in spirit, but in specifics?"',
      '"Am I applying the principle in the correct logical direction?"',
    ]},

    { type: 'callout', variant: 'default', title: 'The Verification Habit', text: "Students who verify lose 10 seconds on easy questions but save 2+ minutes on hard ones by avoiding re-reads and second-guessing. Make verification automatic. It is the difference between \"I think this is right\" and \"I know this is right.\"" },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Principle-Apply question from start to finish." },

    { type: 'question-card',
      id: 'WE-13-2-001',
      questionType: 'Principle - Apply',
      difficulty: 'medium',
      stimulus: "Principle: A company should compensate an employee for work-related travel expenses only if the travel was pre-approved by a manager and the expenses do not exceed the company\'s per diem rate.",
      question: "Which one of the following judgments most closely conforms to the principle?",
      options: [
        "(A) Reyes\'s company should compensate her for her hotel expenses during a client visit because her manager approved the trip in advance, even though her hotel cost exceeded the per diem rate.",
        "(B) Tanaka\'s company should not compensate him for the meals he purchased while traveling for a conference, because although the expenses were below the per diem rate, his manager did not approve the trip beforehand.",
        "(C) Okafor\'s company should compensate her for her flight to a training seminar because the company values professional development and the flight was reasonably priced. (Correct)",
        "(D) Chen\'s company should compensate him for his rental car during a sales trip because his manager approved the trip and the rental cost was within the per diem rate. (Correct)",
        "(E) Park\'s company should not compensate her for taxi fares during a business trip because she could have used public transit at a lower cost.",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'process', title: 'Step-by-Step Walkthrough', steps: [
      '**Step 1 — Diagram the Principle:**\nThe principle has a clear "only if" structure:\nCompany Should Compensate → (Travel Pre-Approved by Manager) AND (Expenses ≤ Per Diem Rate)\n\nContrapositive: If travel was NOT pre-approved OR expenses EXCEED the per diem rate → Company should NOT compensate.',
      '**Step 2 — List the Conditions:**\n• Condition 1: The travel was pre-approved by a manager.\n• Condition 2: The expenses do not exceed the company\'s per diem rate.\n• Consequence (positive): The company should compensate.\n• Consequence (negative / contrapositive): The company should NOT compensate.',
      '**Step 3 — Check Each Answer:**\n\n**(A) Reyes:** Manager approved (✓ Condition 1). Hotel exceeded per diem (✗ Condition 2). Yet the answer concludes the company *should* compensate. This violates the principle — compensation requires BOTH conditions, and Condition 2 fails. **Wrong.**\n\n**(B) Tanaka:** Expenses below per diem (✓ Condition 2). Manager did NOT approve (✗ Condition 1). The answer concludes the company should NOT compensate. This is a correct application of the contrapositive: a condition fails, so compensation is not warranted. **Possible match.**\n\n**(C) Okafor:** The reason given is that the company "values professional development" and the flight was "reasonably priced." Neither of these reasons comes from the principle. The principle requires manager pre-approval and per diem compliance — not company values or reasonable pricing. **Wrong — applies an irrelevant criterion.**\n\n**(D) Chen:** Manager approved (✓ Condition 1). Rental cost within per diem (✓ Condition 2). The answer concludes the company should compensate. Both conditions are met and the consequence matches. **Possible match.**\n\n**(E) Park:** The reason given is that she "could have used public transit." The principle says nothing about alternative transportation options. The principle\'s only conditions are pre-approval and per diem compliance. **Wrong — applies an irrelevant criterion.**',
      '**Step 4 — Verify:**\nBoth (B) and (D) correctly apply the principle. (B) uses the contrapositive; (D) uses the direct application. On the real LSAT, only one answer will be correct. In this constructed example, (D) is the clearest direct application: both conditions are satisfied and the stated consequence follows. Verify: Manager approved? Yes. Within per diem? Yes. Should compensate? Yes. All elements confirmed.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Reyes: should compensate despite exceeding per diem.', text: "Condition 1 is met (manager approved). Condition 2 fails (exceeded per diem). The answer concludes the company *should* compensate, but the principle requires both conditions for compensation. This is a **Missing Condition** trap — the answer satisfies one condition and ignores the other.", badge: 'Missing Condition', badgeColor: 'red' },
      { title: '(B) Tanaka: should not compensate because manager did not approve.', text: "Condition 2 is met (below per diem). Condition 1 fails (no pre-approval). The answer correctly concludes the company should NOT compensate. This is a valid application of the contrapositive: because a necessary condition fails, the consequence does not follow. This is a correct application.", badge: 'Valid Contrapositive', badgeColor: 'blue' },
      { title: '(C) Okafor: should compensate because company values development.', text: "The justification (\"company values professional development\") is not part of the principle. The principle requires pre-approval and per diem compliance. This answer substitutes an entirely different standard. This is an **Irrelevant Criterion** trap.", badge: 'Irrelevant Criterion', badgeColor: 'red' },
      { title: '(D) Chen: should compensate because manager approved and within per diem.', text: "Condition 1: Manager approved. ✓\nCondition 2: Within per diem. ✓\nConsequence: Should compensate. ✓\n\nEvery element of the principle is directly and explicitly matched. This is a textbook direct application.", badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Park: should not compensate because cheaper transit existed.', text: "The principle does not mention alternative transportation options or cost-efficiency comparisons. The only conditions are pre-approval and per diem compliance. This answer introduces an external criterion not found in the principle. This is another **Irrelevant Criterion** trap.", badge: 'Irrelevant Criterion', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**The 4-Step Method gives you a mechanical, repeatable process:** Diagram → List → Check → Verify.\n\n**Diagramming the conditional structure is essential.** Convert the principle into IF/THEN form and identify the direction of the logic. This prevents mistaken reversals and ensures you know which conditions are necessary vs. sufficient.\n\n**Build a checklist and use it.** Extract every individual condition, then check each answer against the full list. Don't be seduced by partial matches.\n\n**The contrapositive is a valid application.** A correct answer may show that a condition fails and therefore the consequence does not follow. This is just as valid as showing that all conditions are met.\n\n**Wrong answers fail in five predictable ways:** Missing Condition, Wrong Consequence, Mistaken Reversal, Scope Mismatch, and Irrelevant Criterion. Knowing these traps lets you eliminate quickly.\n\n**Always verify before committing.** Re-read the principle, confirm every condition is satisfied, and confirm the consequence matches. This final check catches the most common Principle-Apply errors." },
  ]
};
