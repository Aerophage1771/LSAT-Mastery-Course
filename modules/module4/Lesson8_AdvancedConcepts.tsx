import { Lesson } from '../../types';

export const Lesson8_AdvancedConcepts: Lesson = {
  id: "4-8",
  title: "Advanced Concepts",
  content: [
    { type: 'h2', text: 'Advanced Concepts: Difficult Parallel Questions' },
    { type: 'paragraph', text: "Difficult Parallel Reasoning questions aren't a new species of argument; they are more evolved and better camouflaged versions of the ones you already know. They are designed to punish superficial analysis and reward deep structural thinking. Understanding **why** a question is hard — not just that it is hard — gives you a systematic edge." },

    { type: 'callout', variant: 'tip', title: 'When You\'ll See These', text: "The hardest Parallel Reasoning questions typically appear in the second half of a Logical Reasoning section (questions 16–25). They are often the longest questions on the entire test. Recognizing the three difficulty factors below will help you decide in real time whether to invest 2+ minutes or strategically skip and return." },

    { type: 'hr' },

    { type: 'h2', text: 'Three Difficulty Factors' },
    { type: 'paragraph', text: "Every hard Parallel Reasoning question gets its difficulty from one or more of three factors. Understanding these factors lets you **diagnose** a question's difficulty before you even solve it, so you can allocate your time wisely." },

    { type: 'h3', text: 'Factor 1: Complex Multi-Step Structure' },
    { type: 'paragraph', text: "Easy Parallel Reasoning stimuli have 2 premises and a conclusion. Hard stimuli weave together **3–4 premises** with intermediate conclusions, creating a multi-step chain that must be matched link by link. The more moving parts, the more opportunities for subtle mismatches in the answer choices." },
    { type: 'breakdown', labels: { title: 'Difficulty Level', text: 'What the Stimulus Looks Like' }, items: [
      { title: 'Easy (2 steps)', text: '**Premise → Conclusion.** Simple Modus Ponens, eliminative, or direct application.\n\nExample: \"All X are Y. Z is X. Therefore, Z is Y.\"', badge: 'Low', badgeColor: 'green' },
      { title: 'Medium (3 steps)', text: '**Premise → Intermediate Conclusion → Main Conclusion.** The stimulus builds a bridge: one conclusion feeds into another.\n\nExample: \"All X are Y. All Y are Z. Therefore, All X are Z. Since W is X, W is Z.\"', badge: 'Moderate', badgeColor: 'blue' },
      { title: 'Hard (4+ steps)', text: '**Multiple premises combine to derive a chain, which is then applied or contrapositived.** Often mixes logic types (conditional + quantifier, or principle + elimination).\n\nExample: \"A → (B and C). (B or C) → D. Therefore, ~D → ~A. Since W is ~D, W is ~A.\"', badge: 'High', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "**What to do:** Before blueprinting a complex stimulus, count the premises and identify any intermediate conclusions. Number each logical step. Then verify that your chosen answer has the **same number of steps** in the **same order**." },

    { type: 'h3', text: 'Factor 2: Mixed Reasoning Types' },
    { type: 'paragraph', text: "The hardest stimuli blend two or more reasoning types into a single argument. Instead of a pure conditional chain or a pure quantifier argument, you encounter hybrids." },
    { type: 'table', headers: ['Blend', 'What It Looks Like', 'Matching Challenge'], rows: [
      ['**Conditional + Quantifier**', '"If a restaurant is popular, most of its customers are repeat visitors. Chez Louis is popular. Therefore, most of Chez Louis\'s customers are repeat visitors."', 'Must match both the conditional trigger AND the \"most\" quantifier in the conclusion.'],
      ['**Principle + Elimination**', '"A product recall is justified only if the defect poses a safety risk. The defect in Widget X is cosmetic, not safety-related. Therefore, recalling Widget X is not justified."', 'Must match the principle (justified only if safety risk) AND the eliminative step (cosmetic ≠ safety → not justified).'],
      ['**Statistical + Causal**', '"Most patients who take Drug Y show improvement. Drug Y was administered to patients in Group A. Therefore, Drug Y probably caused the improvement in Group A."', 'Must match the statistical base rate AND the causal inference drawn from it.'],
      ['**Quantifier + Negation**', '"All members must pay dues. Some members have not paid dues. Therefore, some members are in violation."', 'Must match the universal rule, the existential exception, AND the negative conclusion.'],
    ]},
    { type: 'paragraph', text: "**What to do:** When you identify a blend, label each reasoning type in the margin. Your blueprint should have a two-part label — e.g., \"Conditional trigger + Quantifier conclusion\" — and your answer choice must match **both** parts." },

    { type: 'h3', text: 'Factor 3: Abstract or Negated Conclusions' },
    { type: 'paragraph', text: "Some hard questions make the conclusion itself difficult to parse. Instead of a straightforward assertion, the conclusion might be:" },
    { type: 'list', items: [
      '**Doubly negated:** "It is not true that no students passed" (= some students passed).',
      '**Conditional:** "If the policy is adopted, the budget will decrease" (the conclusion is itself an if-then statement).',
      '**Meta-level / Abstract:** "The argument fails to establish its conclusion" or "The evidence is insufficient to support the claim."',
      '**Qualified / Hedged:** "It is likely that..." or "There is reason to believe that..." (the certainty level is part of the structure).',
    ]},
    { type: 'paragraph', text: "**What to do:** Translate the conclusion into the simplest possible form. \"It is not true that no X are Y\" becomes \"Some X are Y.\" \"It is likely that A causes B\" becomes \"Probably A → B.\" Once simplified, match the simplified form." },

    { type: 'callout', variant: 'default', title: 'Multiple Factors Stack', text: "The hardest questions combine two or all three factors. A stimulus might have a 4-step chain (Factor 1) that blends conditional and quantifier logic (Factor 2) and reaches a negated conclusion (Factor 3). When you encounter all three, be prepared to spend extra time — or to skip and return." },

    { type: 'hr' },

    { type: 'h2', text: 'The Structural Checklist' },
    { type: 'paragraph', text: "On hard questions, a systematic checklist prevents you from overlooking subtle structural differences. Run through each item before confirming your answer:" },

    { type: 'process', title: 'The 6-Point Structural Checklist', steps: [
      '**Validity Match:** Is the stimulus valid or flawed? Does the answer match? (If the stimulus commits a Mistaken Reversal, the answer must commit a Mistaken Reversal — not a Mistaken Negation.)',
      '**Conclusion Type:** Is the conclusion a factual claim, a recommendation, a prediction, a conditional, or a negation? Does the answer\'s conclusion type match exactly?',
      '**Conclusion Certainty:** Does the conclusion say \"must,\" \"probably,\" \"might,\" or \"could\"? The answer\'s certainty level must match.',
      '**Premise Count & Type:** How many premises does the stimulus have? What type is each one (conditional, quantifier, factual, comparative)? The answer must have the same number and types.',
      '**Logical Connectors:** Does the stimulus use AND, OR, IF-THEN, UNLESS, or NOT? Each connector must be replicated in the answer.',
      '**Direction of Support:** Which premises support which conclusions? If the stimulus has an intermediate conclusion that feeds into the main conclusion, the answer must replicate that flow.',
    ]},

    { type: 'callout', variant: 'tip', title: 'When to Use the Full Checklist', text: "You don't need all 6 points for easy questions — conclusion type + validity is usually enough to narrow to 1–2 choices. Reserve the full checklist for questions where you're stuck between two or three remaining contenders after your initial scan." },

    { type: 'hr' },

    { type: 'h2', text: 'Practice: A Hard Parallel Reasoning Question' },
    { type: 'paragraph', text: "This question demonstrates all three difficulty factors: multi-step structure, mixed logic types, and a conditional conclusion." },

    { type: 'question-card',
      id: 'PR-4-8-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'hard',
      stimulus: "Any policy that reduces overall costs is worth adopting unless it also reduces product quality. The proposed automation plan would reduce overall costs. However, automating the assembly line would reduce product quality. Therefore, although the automation plan would reduce costs, it is not clear that it is worth adopting.",
      question: "Which one of the following arguments is most similar in its pattern of reasoning to the argument above?",
      options: [
        "(A) Any investment that yields consistent returns is worth making unless it also carries high risk. The bond fund yields consistent returns. However, the bond fund carries high risk. Therefore, although the bond fund yields consistent returns, it is not clear that it is worth investing in. (Correct)",
        "(B) Any exercise program that improves cardiovascular health is worth following. Running improves cardiovascular health. Therefore, running is worth following.",
        "(C) Any medication that reduces symptoms is worth prescribing unless it causes severe side effects. This medication reduces symptoms and does not cause severe side effects. Therefore, it is worth prescribing.",
        "(D) Any candidate who has relevant experience should be hired unless there are concerns about their references. Jones has relevant experience. Therefore, Jones should definitely be hired.",
        "(E) Any proposal that increases revenue is worth considering. The marketing initiative would increase revenue but also increase expenses. Therefore, the marketing initiative is not worth considering.",
      ],
    },

    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Analyzing the Hard Question', steps: [
      '**Step 1 — Map the structure:**\n• Premise 1 (Rule): Worth adopting IF reduces costs UNLESS also reduces quality.\n• Premise 2 (Pro): The plan reduces costs.\n• Premise 3 (Con): The plan also reduces quality.\n• Conclusion: It is \"not clear\" that the plan is worth adopting. (Hedged / uncertain — not a definitive rejection.)',
      '**Step 2 — Abstract the blueprint:**\nRule: A is worth doing IF condition X, UNLESS also condition Y.\nThe case satisfies BOTH X (the positive condition) and Y (the disqualifying condition).\nConclusion: It is **not clear** whether A is worth doing. (The \"unless\" clause kicks in, creating uncertainty.)\nValidity: Valid. The hedged conclusion is appropriate because the \"unless\" exception has been triggered.',
      '**Step 3 — Quick scan by conclusion type:**\n• (B) concludes definitively \"worth following\" — no hedging. **Eliminate.**\n• (C) concludes definitively \"worth prescribing\" — the unless clause is NOT triggered. **Eliminate.**\n• (D) concludes \"should definitely be hired\" — opposite of hedged. **Eliminate.**\n• (E) concludes definitively \"not worth considering\" — this is a firm rejection, not hedged uncertainty. **Eliminate.**',
      '**Step 4 — Verify (A):**\n• Rule: Worth making IF consistent returns UNLESS high risk. ✓\n• Pro: Bond fund yields consistent returns. ✓\n• Con: Bond fund carries high risk. ✓\n• Conclusion: \"Not clear that it is worth investing in.\" ✓ (Hedged, matching the stimulus.)\nPerfect structural match across all six checklist points.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Bond fund: consistent returns + high risk → not clear if worth it', text: 'Perfect match. Rule with \"unless\" exception; both the positive and disqualifying conditions are met; hedged conclusion.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Running improves cardiovascular health → worth following', text: 'Missing the \"unless\" clause entirely. This is a simple rule application with no exception — structurally much simpler than the stimulus.', badge: 'Missing Exception', badgeColor: 'red' },
      { title: '(C) Medication reduces symptoms, no severe side effects → worth prescribing', text: 'The \"unless\" clause exists but is **NOT triggered** (no severe side effects). The stimulus triggers the exception; this answer does not. Different logical outcome.', badge: 'Exception Not Triggered', badgeColor: 'red' },
      { title: '(D) Jones has experience → should definitely be hired', text: 'Ignores the \"unless\" clause about references. The conclusion uses \"definitely\" — the opposite of the stimulus\'s hedged \"not clear.\" Both the structure and the certainty level are wrong.', badge: 'Certainty Mismatch', badgeColor: 'red' },
      { title: '(E) Marketing initiative increases revenue but also expenses → not worth it', text: 'The conclusion is a **definitive rejection** (\"not worth considering\"), while the stimulus hedges (\"not clear that it is worth adopting\"). Additionally, \"increases expenses\" is a different kind of disqualifier than the stimulus\'s \"reduces quality\" — the rule doesn\'t include an \"unless expenses increase\" clause.', badge: 'Certainty Mismatch', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Time Management on Hard PR Questions' },
    { type: 'paragraph', text: "Parallel Reasoning questions are the longest questions on the LR section. Hard ones can easily consume 3+ minutes. Here is a practical framework for managing your time:" },

    { type: 'table', headers: ['Decision Point', 'Time Spent', 'Action'], rows: [
      ['**Initial read**', '0:00–0:30', 'Read the stimulus and identify the difficulty level. If you see 4+ premises, mixed logic types, or a negated conclusion, flag it as hard.'],
      ['**Blueprint phase**', '0:30–1:15', 'Create your abstract skeleton. If you can\'t create a clear blueprint within 45 seconds, consider skipping.'],
      ['**Quick scan**', '1:15–1:45', 'Scan conclusions. Eliminate 2–3 choices based on conclusion type / certainty alone.'],
      ['**Deep comparison**', '1:45–2:30', 'Compare remaining 2–3 choices against your checklist. Select and move on.'],
      ['**Bail-out point**', '2:30+', 'If you\'re still stuck between two choices at 2:30, make your best guess, flag the question, and move on. Return only if you have time at the end.'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Skip-and-Return Strategy', text: "Many top scorers **skip** hard Parallel Reasoning questions on their first pass through the section. They answer all shorter, faster questions first to bank time, then return to PR questions with whatever time remains. This is a valid strategy — but only if you have the discipline to actually return. If you tend to forget flagged questions, solve PR questions in order instead." },

    { type: 'h3', text: 'When to Skip vs. When to Invest' },
    { type: 'breakdown', labels: { title: 'Scenario', text: 'Recommendation' }, items: [
      { title: 'You immediately recognize the pattern (e.g., Modus Ponens, elimination)', text: '**Invest.** You can likely solve this in under 2 minutes. Blueprint quickly and scan for the match.', badge: 'Solve Now', badgeColor: 'green' },
      { title: 'You can blueprint the stimulus but the answer choices are all long', text: '**Invest, but set a timer.** Use conclusion-first filtering to eliminate quickly. If still stuck after 2:30, skip.', badge: 'Solve with Timer', badgeColor: 'blue' },
      { title: 'You can\'t clearly blueprint the stimulus after 45 seconds', text: '**Skip.** You\'ll spend 3+ minutes guessing. Flag it and return with fresh eyes.', badge: 'Skip', badgeColor: 'red' },
      { title: 'You\'re behind pace (fewer than 12 questions done in 17 minutes)', text: '**Skip all remaining PR questions.** PR questions are the least time-efficient on the section. Prioritize shorter questions to maximize your score.', badge: 'Skip', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Advanced Traps' },
    { type: 'paragraph', text: "Hard Parallel Reasoning questions use more sophisticated trap answers than easy ones. Here are the traps that appear most often at high difficulty:" },

    { type: 'table', headers: ['Trap Label', 'What It Does', 'How to Detect It'], rows: [
      ['**The \"Almost Perfect\" Parallel**', 'Matches conclusion type, premise count, and overall flow — but changes one tiny logical operator (\"and\" → \"or\", \"some\" → \"most\")', 'Run the full 6-point checklist. Check every logical connector individually.'],
      ['**The Valid-for-Invalid Swap**', 'If the stimulus is flawed, this trap presents a *valid* version of the same argument using similar language', 'Ask: \"Does the conclusion actually follow?\" If the stimulus is flawed and the answer is valid, eliminate.'],
      ['**The Conclusion-Subject Swap**', 'Premises match perfectly, but the conclusion is about a different subject (e.g., concludes about Group C when the stimulus concludes about Group A)', 'Circle the subject of each conclusion. They must occupy the same role in the abstract structure.'],
      ['**The Premise-Conclusion Reversal**', 'Uses a premise from the stimulus as the conclusion, and the conclusion as a premise', 'Identify the conclusion in each argument independently using the Therefore Test. Don\'t assume the conclusion is in the same position.'],
      ['**The Missing Step**', 'Omits one step of a multi-step chain, making the argument simpler (and often invalid when the stimulus is valid)', 'Count the logical steps in both arguments. If the answer has fewer steps, it\'s not a match.'],
      ['**The Abstraction Disguise**', 'Uses highly abstract language to describe the same structure, making it hard to map back to the stimulus', 'Translate each abstract phrase back to concrete terms. \"An extrapolation from a historical pattern\" = \"a prediction based on past trends.\"'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Hard Parallel Reasoning questions derive their difficulty from three factors: **complex multi-step structure**, **mixed reasoning types**, and **abstract/negated conclusions**.\n• Use the **6-Point Structural Checklist** (validity, conclusion type, conclusion certainty, premise count/type, logical connectors, direction of support) when stuck between contenders.\n• **Time management** is critical: budget 2–2.5 minutes per PR question. Skip questions you can't blueprint within 45 seconds.\n• The most dangerous advanced traps are the **\"Almost Perfect\" Parallel** (one tiny operator change) and the **Valid-for-Invalid Swap** (matching a flawed stimulus with a valid answer).\n• When facing a blended argument, label each reasoning type separately and match **both** components.\n• The skip-and-return strategy works well for PR questions — they are the longest and most time-consuming on the section, and solving faster questions first maximizes your overall score." },
  ]
};
