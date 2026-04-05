import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '13-2',
  title: 'Step-by-Step Guide',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'The 4-Step Method for Principle-Apply Questions' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Principle-Apply question. The core process is mechanical: decompose the principle into its parts, build a checklist, and then test each answer choice against that checklist. Each step below includes concrete guidance, tips for tricky situations, and key insights.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'Budget roughly **1 minute and 30 seconds** per Principle-Apply question. Steps 1–2 (diagramming the principle and listing conditions) should take about 40 seconds combined. Steps 3–4 (checking answers and verifying) should take about 50 seconds. The decomposition is critical — students who jump to the answer choices without first building a checklist waste time re-reading the principle for each option.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 — Diagram the Principle:** Read the stimulus and translate the principle into a clear conditional structure: IF [conditions] → THEN [consequence].',
        '**Step 2 — List the Conditions:** Extract every individual condition from the principle and create a mental (or written) checklist. Note the consequence separately.',
        '**Step 3 — Check Each Answer:** For each answer choice, systematically verify whether the scenario satisfies every condition on your checklist and reaches the stated consequence.',
        '**Step 4 — Verify All Conditions Met:** Before confirming your answer, re-read the principle one final time and confirm that your chosen answer satisfies every condition without exception.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Diagram the Principle' },
    {
      type: 'paragraph',
      text: 'Your first job is to convert the principle from natural language into a clear logical structure. Most principles on the LSAT are conditional in nature — they describe a set of circumstances (conditions) that trigger a particular outcome (consequence). Your goal is to strip away the rhetorical packaging and expose the underlying logic.',
    },

    { type: 'h4', text: 'Conditional Diagramming' },
    {
      type: 'paragraph',
      text: 'Translate the principle into standard conditional form. Watch for the logical connectives that define the relationship between conditions:',
    },
    {
      type: 'table',
      headers: ['Language in the Principle', 'Logical Structure', 'What It Means'],
      rows: [
        ['"If A and B, then C"', 'A + B → C', 'Both conditions must be present for the consequence to follow'],
        ['"X only if Y"', 'X → Y', 'Y is a *necessary* condition for X — without Y, X cannot hold'],
        ['"X unless Y"', '¬Y → X (If not Y, then X)', 'X happens by default; Y is the only thing that prevents it'],
        ['"All X are Y"', 'X → Y', 'Being X is sufficient for being Y'],
        ['"No X is Y"', 'X → ¬Y', 'Being X guarantees not being Y'],
        [
          '"X is wrong/justified/permissible when Y"',
          'Y → X is wrong/justified/permissible',
          '"When" introduces the sufficient condition',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: '**Example:** "A leader is justified in overriding a committee\'s decision only if the decision threatens the organization\'s core mission and no less drastic measure is available."',
    },
    {
      type: 'paragraph',
      text: '**Diagram:** Justified Override → (Threatens Core Mission) AND (No Less Drastic Measure Available)',
    },
    {
      type: 'paragraph',
      text: 'The "only if" tells us the two conditions are *necessary*. If either condition fails, the override is not justified. A correct application of this principle could show an override that is justified (both conditions met) *or* one that is unjustified (at least one condition fails).',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Multi-Condition Principles',
      text: 'Many principles contain two or three conditions joined by "and." Treat these as a checklist: *every* condition must be individually verified. Wrong answers are specifically designed to satisfy all but one condition. The one condition they violate is often the subtlest — a qualifier about intent, degree, or scope that is easy to overlook.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: "Tip: Don't Forget the Contrapositive",
      text: 'The contrapositive is always a valid application of a conditional principle. If the principle says "IF A and B, THEN C," then "NOT C → NOT A or NOT B" is equally valid. A correct answer might apply the principle in the contrapositive direction: the consequence did NOT occur, therefore at least one condition was NOT met. Watch for this — it is a common source of correct answers that students overlook.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: List the Conditions' },
    {
      type: 'paragraph',
      text: 'After diagramming, extract each individual condition from the principle and list them explicitly. This step may seem redundant, but it prevents the most common error on Principle-Apply questions: matching on the overall *feel* of the principle while missing a specific condition.',
    },

    { type: 'h4', text: 'Condition Extraction Example' },
    {
      type: 'paragraph',
      text: '**Principle:** "A city should provide free public transit to any resident who is over 65, has lived in the city for at least 5 years, and has an annual income below the regional median."',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Condition 1:** The person is a resident of the city.',
        '**Condition 2:** The person is over 65 years old.',
        '**Condition 3:** The person has lived in the city for at least 5 years.',
        '**Condition 4:** The person has an annual income below the regional median.',
        '**Consequence:** The city should provide free public transit to this person.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Four conditions. The correct answer must establish all four. If an answer describes someone who is 70, has lived in the city for 10 years, has below-median income, but is a visitor (not a resident), it fails Condition 1 and is wrong — even though three out of four conditions are satisfied.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Watch for Hidden Conditions',
      text: 'Some conditions are embedded in modifiers that are easy to skim over. Phrases like "knowingly," "without provocation," "that is available to the general public," or "for the purpose of" add conditions that the correct answer must address. Read the principle slowly and ask yourself: "How many separate requirements does this rule impose?"',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Check Each Answer' },
    {
      type: 'paragraph',
      text: 'Now apply your checklist to each answer choice. For each scenario, ask three questions:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Are all conditions met?** Check each condition from your list against the facts described in the answer choice.',
        '**Is the consequence correct?** Does the scenario reach the same outcome or judgment that the principle dictates?',
        '**Is the logic in the right direction?** Does the answer apply the principle (or its contrapositive) in a logically valid way, or does it commit a mistaken reversal?',
      ],
    },

    {
      type: 'paragraph',
      text: 'Move through the answer choices efficiently. When you find a condition that fails, stop and move on — you do not need to finish evaluating the remaining conditions for that answer.',
    },

    { type: 'h4', text: 'Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Wrong answers on Principle-Apply questions fail in predictable ways. Knowing these patterns lets you eliminate quickly and with confidence.',
    },

    {
      type: 'table',
      headers: ['Trap Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**The Missing Condition**',
          'Satisfies most conditions but omits one — often the most subtle qualifier (intent, degree, scope).',
          "Check each condition individually. Don't be satisfied by an overall impression of similarity.",
        ],
        [
          '**The Wrong Consequence**',
          'Satisfies all conditions but reaches a different outcome than the principle requires — e.g., "is permissible" instead of "is required."',
          "Verify that the judgment or outcome in the answer matches the principle's consequence exactly.",
        ],
        [
          '**The Mistaken Reversal**',
          'Applies the principle backward. If the principle says "A → B," the answer treats it as "B → A" — concluding that because the consequence occurred, the conditions must have been met.',
          'Diagram the direction. The answer must flow from conditions to consequence, or use the valid contrapositive (¬B → ¬A).',
        ],
        [
          '**The Scope Mismatch**',
          'Describes a scenario involving a different type of agent, action, or context than the principle covers — e.g., the principle governs employers but the answer describes a landlord.',
          'Compare the subject matter of the answer to the scope of the principle. If the answer describes a different domain, it cannot be a correct application.',
        ],
        [
          '**The Irrelevant Criterion**',
          'Introduces a new factor not mentioned in the principle and uses it as the basis for the judgment.',
          'Ask: "Is this reason for the judgment found anywhere in the principle?" If the justification comes from outside the principle, the answer is wrong.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Verify All Conditions Met' },
    {
      type: 'paragraph',
      text: 'Before committing to your answer, perform one final verification pass. Re-read the principle and, for your chosen answer, confirm that *every single condition* is satisfied and the consequence matches. This 10-second check catches the most common Principle-Apply error: the premature match.',
    },
    { type: 'paragraph', text: 'Ask yourself:' },
    {
      type: 'list',
      items: [
        '"Did I check every condition, including the subtle qualifiers?"',
        '"Does the conclusion in the answer match the principle\'s consequence — not just in spirit, but in specifics?"',
        '"Am I applying the principle in the correct logical direction?"',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Verification Habit',
      text: 'Students who verify lose 10 seconds on easy questions but save 2+ minutes on hard ones by avoiding re-reads and second-guessing. Make verification automatic. It is the difference between "I think this is right" and "I know this is right."',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply all four steps to a complete Principle-Apply question from start to finish.",
    },
    { type: 'paragraph', text: 'Consider this illustrative principle:' },
    {
      type: 'blockquote',
      text: '"A company should compensate an employee for work-related travel expenses only if the travel was pre-approved by a manager and the expenses do not exceed the company\'s per diem rate."',
    },
    {
      type: 'paragraph',
      text: 'This example is useful because it forces you to check both the direct rule and the contrapositive without getting distracted by extra business details.',
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Diagram the Principle:**\nThe principle has a clear "only if" structure:\nCompany Should Compensate → (Travel Pre-Approved by Manager) AND (Expenses ≤ Per Diem Rate)\n\nContrapositive: If travel was NOT pre-approved OR expenses EXCEED the per diem rate → Company should NOT compensate.',
        "**Step 2 — List the Conditions:**\n• Condition 1: The travel was pre-approved by a manager.\n• Condition 2: The expenses do not exceed the company's per diem rate.\n• Consequence (positive): The company should compensate.\n• Consequence (negative / contrapositive): The company should NOT compensate.",
        '**Step 3 — Check Each Answer:**\nReject any scenario that satisfies only one condition, reaches the wrong consequence, or adds a criterion the principle never mentions. Keep only the candidates that either (a) show both conditions and conclude "should compensate," or (b) show a failed condition and conclude "should not compensate."',
        '**Step 4 — Verify:**\nBefore locking in an answer, read the principle one more time and confirm that every required condition is accounted for explicitly. The best match is the one that can be justified entirely by manager approval, per diem compliance, and the stated conclusion, with no need for extra assumptions.',
      ],
    },

    { type: 'h3', text: 'Why the Checklist Wins' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'Principle-Apply questions become easy once you refuse to reward extra facts. Manager approval and per diem compliance are the only things that matter here. Missing-condition traps, irrelevant-criterion traps, and scenarios that sound reasonable in business terms all disappear once you compare them to the exact checklist extracted from the principle.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "**The 4-Step Method gives you a mechanical, repeatable process:** Diagram → List → Check → Verify.\n\n**Diagramming the conditional structure is essential.** Convert the principle into IF/THEN form and identify the direction of the logic. This prevents mistaken reversals and ensures you know which conditions are necessary vs. sufficient.\n\n**Build a checklist and use it.** Extract every individual condition, then check each answer against the full list. Don't be seduced by partial matches.\n\n**The contrapositive is a valid application.** A correct answer may show that a condition fails and therefore the consequence does not follow. This is just as valid as showing that all conditions are met.\n\n**Wrong answers fail in five predictable ways:** Missing Condition, Wrong Consequence, Mistaken Reversal, Scope Mismatch, and Irrelevant Criterion. Knowing these traps lets you eliminate quickly.\n\n**Always verify before committing.** Re-read the principle, confirm every condition is satisfied, and confirm the consequence matches. This final check catches the most common Principle-Apply errors.",
    },
  ],
};
