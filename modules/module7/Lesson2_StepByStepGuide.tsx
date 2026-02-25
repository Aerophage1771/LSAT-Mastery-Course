import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "7-2",
  title: "Step-by-Step Guide: Evaluate the Argument",
  content: [
    { type: 'h2', text: 'The 4-Step Method for Evaluate the Argument' },
    { type: 'paragraph', text: "This lesson provides a complete, repeatable method for solving any Evaluate the Argument question. Each step includes concrete examples, tips for when the step gets tricky, and a callout highlighting a key insight. At the end, you will work through a full question applying all four steps from start to finish." },

    { type: 'callout', variant: 'tip', title: 'Timing', text: "Aim for roughly **1 minute and 30 seconds** per Evaluate question. The 4-step method may feel slow at first, but it becomes automatic with practice. The Yes/No Test (Step 4) can be applied mentally in a few seconds per answer choice once you are comfortable with it." },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    { type: 'process', title: 'The 4-Step Method', steps: [
      '**Step 1 — Find the Conclusion:** Identify the author\'s final claim and separate it from the supporting premises.',
      '**Step 2 — Identify the Gap:** Determine what the author assumes but does not prove — the logical vulnerability between the premises and the conclusion.',
      '**Step 3 — Find the Pivotal Question:** Before reading the answer choices, prephrase the one question whose answer would most decisively resolve the argument.',
      '**Step 4 — Apply the Yes/No Test:** Confirm your answer by checking that one response strengthens and the other weakens the argument.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "Before you can evaluate an argument, you need to know what the argument is claiming. Read the stimulus and identify the **conclusion** — the author's final judgment, recommendation, prediction, or claim — and separate it from the **premises** — the facts, data, or observations offered in support." },

    { type: 'h4', text: 'Example' },
    { type: 'blockquote', text: '"After the city installed speed cameras on Main Street, the number of speeding tickets issued on that street dropped by 60%. The speed cameras have clearly been effective at reducing speeding on Main Street."' },

    { type: 'breakdown', labels: { title: 'Sentence', text: 'Role' }, items: [
      { title: '"After the city installed speed cameras on Main Street, the number of speeding tickets issued on that street dropped by 60%."', text: 'This is the **premise** — an observation about what happened after the cameras were installed.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"The speed cameras have clearly been effective at reducing speeding on Main Street."', text: 'This is the **conclusion** — the author\'s judgment that the cameras caused the reduction.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'callout', variant: 'default', title: 'When This Step Gets Tricky', text: "Some Evaluate stimuli contain multiple claims. The conclusion is the one that receives support but does not itself support any further claim. Use the Why Test: ask \"Why?\" of each candidate conclusion. The one whose \"Why?\" is answered by the premises is the main conclusion." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The gap is the logical space between what the premises prove and what the conclusion claims. It is the unstated assumption, the unexplored alternative, or the missing piece of evidence that the author takes for granted. In Evaluate questions, the correct answer will **always** target this gap." },

    { type: 'h4', text: 'Finding the Gap: The \"Even If True\" Test' },
    { type: 'paragraph', text: "Accept the premises as completely true, then ask: *\"Even if this evidence is true, could the conclusion still be wrong?\"* The reasons it could be wrong reveal the gap." },

    { type: 'h4', text: 'Example (continued)' },
    { type: 'paragraph', text: "The premise tells us speeding *tickets* dropped by 60%. The conclusion says *speeding* was reduced. But what if drivers simply learned to slow down only near the cameras and continued speeding elsewhere on the street? Or what if the police reduced enforcement efforts because they assumed the cameras were handling the problem? The gap is: **a drop in tickets does not necessarily mean a drop in actual speeding.**" },

    { type: 'h4', text: 'Common Gap Patterns' },
    { type: 'paragraph', text: "Depending on the argument type, the gap tends to appear in predictable places:" },
    { type: 'table', headers: ['Argument Type', 'Where to Look for the Gap'], rows: [
      ['**Causal Claim** — "X caused Y"', 'Alternative causes; reversed causation; coincidence'],
      ['**Study / Data Claim** — "The data shows X"', 'Missing baseline; no control group; unrepresentative sample; confounding variables'],
      ['**Recommendation** — "We should do X"', 'Hidden costs; unintended consequences; better alternatives'],
      ['**Analogy** — "A is like B"', 'Relevant differences between A and B'],
      ['**Prediction** — "X will happen"', 'Changed circumstances; interfering factors'],
      ['**Generalization** — "This group is like the whole"', 'Unrepresentative sample; selection bias'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Tip: Prephrase Before Reading Choices', text: "Once you identify the gap, formulate the pivotal question in your own words **before** looking at the answer choices. This protects you from attractive-sounding but irrelevant choices. Your prephrase does not need to be perfect — even a rough version dramatically improves accuracy." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Prephrase the Pivotal Question' },
    { type: 'paragraph', text: "Prephrasing is the bridge between finding the gap and selecting the correct answer. Once you have identified the gap, turn it into a **question** that, if answered, would resolve the argument decisively." },

    { type: 'h4', text: 'The Prephrasing Technique' },
    { type: 'paragraph', text: "Take the gap and ask: *\"What would I need to know to determine whether this gap is a real problem or not?\"* Frame your answer as a question." },

    { type: 'h4', text: 'Example (continued)' },
    { type: 'paragraph', text: "The gap: a drop in tickets does not necessarily mean a drop in speeding." },
    { type: 'paragraph', text: "The prephrase: *\"Did actual speeding behavior decrease, or did only ticket issuance decrease?\"* Alternatively: *\"Were there fewer speeders, or just fewer tickets?\"*" },

    { type: 'h4', text: 'Prephrase Quality Check' },
    { type: 'paragraph', text: "A strong prephrase has two properties:" },
    { type: 'breakdown', labels: { title: 'Property', text: 'What It Means' }, items: [
      { title: 'Directly targets the gap', text: 'The question attacks the specific vulnerability in the argument. It does not ask about tangential details or background information.', badge: 'Required', badgeColor: 'green' },
      { title: 'Two-directional', text: 'One answer to the question strengthens the argument, and the other weakens it. If your prephrase can only go one way, it is too narrow — you have prephrased a Strengthen or Weaken answer, not an Evaluate answer.', badge: 'Required', badgeColor: 'green' },
    ]},

    { type: 'callout', variant: 'default', title: 'When Prephrasing Gets Tricky', text: "Some arguments have multiple gaps. In these cases, prephrase the **most central** gap — the one that, if resolved, would have the greatest impact on whether the conclusion follows. If two gaps seem equally important, hold both prephrases loosely and let the answer choices help you decide which one the question is testing." },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Apply the Yes/No Test' },
    { type: 'paragraph', text: "The Yes/No Test is the definitive confirmation tool for Evaluate questions. Use it to verify your top candidate and to eliminate close competitors." },

    { type: 'h4', text: 'How to Apply It' },
    { type: 'process', title: 'Yes/No Test Procedure', steps: [
      '**Read the answer choice.** It will be phrased as a question or as a fact to be determined.',
      '**Supply "Yes"** (or a favorable answer). Ask: does this make the conclusion **more** likely to be true?',
      '**Supply "No"** (or an unfavorable answer). Ask: does this make the conclusion **less** likely to be true?',
      '**Evaluate the split.** A correct answer produces a clear split — one direction strengthens, the other weakens. An incorrect answer produces no split (both directions leave the argument unchanged) or a one-sided result.',
    ]},

    { type: 'h4', text: 'Full Demonstration' },
    { type: 'paragraph', text: "Using the speed camera argument:" },
    { type: 'blockquote', text: "Answer choice: *\"Did the average speed of vehicles on Main Street decrease after the cameras were installed?\"*" },

    { type: 'breakdown', labels: { title: 'Response', text: 'Effect on Argument' }, items: [
      { title: '"Yes" — average speed did decrease', text: 'The argument is **strengthened**. If vehicles are actually driving slower, the cameras are working as claimed.', badge: 'Strengthens', badgeColor: 'green' },
      { title: '"No" — average speed did not decrease', text: 'The argument is **weakened**. If vehicles are still speeding despite the cameras, the drop in tickets must have a different explanation (reduced enforcement, drivers learning camera locations, etc.).', badge: 'Weakens', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "Clear split. This choice passes the Yes/No Test." },

    { type: 'h4', text: 'Contrast: A Choice That Fails' },
    { type: 'blockquote', text: "Answer choice: *\"Are speed cameras used in other cities?\"*" },
    { type: 'breakdown', labels: { title: 'Response', text: 'Effect on Argument' }, items: [
      { title: '"Yes" — other cities use them', text: 'Other cities using cameras does not prove *these* cameras work on *this* street. **No meaningful impact.**', badge: 'No Effect', badgeColor: 'slate' },
      { title: '"No" — no other cities use them', text: 'The uniqueness of the program does not affect whether it worked here. **No meaningful impact.**', badge: 'No Effect', badgeColor: 'slate' },
    ]},
    { type: 'paragraph', text: "No split. This choice fails the Yes/No Test. It is irrelevant to the gap." },

    { type: 'callout', variant: 'tip', title: 'Speed Tip: Triage with the Yes/No Test', text: "You do not need to apply the full Yes/No Test to all five answer choices. First, eliminate choices that are obviously out of scope. Then apply the Yes/No Test only to the remaining two or three candidates. This saves significant time." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    { type: 'paragraph', text: "Incorrect Evaluate answers fall into predictable categories. Learning to recognize these patterns allows you to eliminate wrong answers quickly and confidently." },

    { type: 'table', headers: ['Trap Type', 'Description', 'How to Spot It'], rows: [
      ['**Irrelevant to the Gap**', 'The choice asks about something related to the topic but not to the logical connection between premises and conclusion.', 'Apply the Yes/No Test: both answers leave the argument unchanged.'],
      ['**Only Strengthens**', 'The choice, if answered favorably, helps the argument, but the unfavorable answer has no effect. It is a disguised Strengthen answer.', 'The "No" answer has no impact on the conclusion.'],
      ['**Only Weakens**', 'The choice, if answered unfavorably, hurts the argument, but the favorable answer has no effect. It is a disguised Weaken answer.', 'The "Yes" answer has no impact on the conclusion.'],
      ['**Too Broad**', 'The choice asks about a general principle or a large-scale question that goes far beyond the scope of this specific argument.', 'The question could apply to hundreds of different arguments — it does not target *this* specific gap.'],
      ['**Questions the Premise**', 'The choice asks whether the stated evidence is actually true. On the LSAT, premises are accepted as fact.', 'The choice challenges the truth of a stated fact rather than the reasoning from fact to conclusion.'],
      ['**Scope Shift**', 'The choice asks about a different group, time period, or context than the one the conclusion addresses.', 'The nouns or timeframes in the choice do not match those in the conclusion.'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Most Dangerous Trap', text: "The most dangerous trap is the **\"Only Strengthens\"** or **\"Only Weakens\"** choice. These answers feel relevant because they do address the gap — but they only address it from one direction. The Yes/No Test catches them every time: if only one direction has an impact, the choice is wrong." },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all four steps to a complete Evaluate question from start to finish." },

    { type: 'question-card',
      id: 'WE-7-2-001',
      questionType: 'Evaluate the Argument',
      difficulty: 'medium',
      stimulus: "A regional hospital recently switched from paper medical records to an electronic records system. In the six months after the switch, the hospital reported a 30% decrease in medication errors. The hospital administrator concluded that the electronic records system is responsible for the reduction in medication errors.",
      question: "Which one of the following would it be most useful to know in order to evaluate the argument?",
      options: [
        "(A) Whether the hospital also hired additional pharmacists during the same six-month period (Correct)",
        "(B) Whether the electronic records system is more expensive to maintain than the paper system was",
        "(C) Whether other hospitals in the region have also adopted electronic records systems",
        "(D) Whether the hospital's patient volume changed during the six-month period",
        "(E) Whether medication errors can have serious consequences for patient health",
      ],
    },

    { type: 'h3', text: 'Applying the 4-Step Method' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "**Conclusion:** The electronic records system is responsible for the reduction in medication errors." },
    { type: 'paragraph', text: "**Premise:** After switching to electronic records, medication errors dropped by 30%." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument observes a correlation (new system → fewer errors) and concludes causation (the system *caused* fewer errors). The gap is the classic causal assumption: **the author has not ruled out alternative causes for the decline.** Something else could have changed during those six months that actually caused the reduction — new staff, different patient mix, updated protocols, or even a seasonal effect." },

    { type: 'h4', text: 'Step 3: Prephrase the Pivotal Question' },
    { type: 'paragraph', text: "Prephrase: *\"Was there another change during that period that could have caused the reduction in errors?\"* If yes, the electronic system may not deserve the credit. If no, the electronic system is the most plausible explanation." },

    { type: 'h4', text: 'Step 4: Apply the Yes/No Test' },
    { type: 'paragraph', text: "**Testing Choice (A):** *\"Whether the hospital also hired additional pharmacists during the same six-month period.\"*" },
    { type: 'breakdown', labels: { title: 'Response', text: 'Effect' }, items: [
      { title: '"Yes" — additional pharmacists were hired', text: 'The argument is **weakened**: the new pharmacists could be the real reason errors dropped, not the electronic system. The administrator\'s conclusion is undercut by an alternative explanation.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — no additional pharmacists were hired', text: 'The argument is **strengthened**: with no change in pharmacy staffing, the electronic records system is a more plausible explanation for the drop in errors.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "Clear split. Choice (A) passes the Yes/No Test and matches our prephrase about alternative causes." },

    { type: 'h4', text: 'Why the Other Choices Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(B) Cost of the electronic system', text: 'Cost is irrelevant to effectiveness. Even an expensive system can reduce errors. Even a cheap system might not. Whether it costs more or less does not help us evaluate whether it *caused* fewer errors. **Fails Yes/No Test — no impact either way on the causal claim.**', badge: 'Irrelevant', badgeColor: 'red' },
      { title: '(C) Other hospitals adopting electronic records', text: 'What other hospitals do does not tell us whether *this* hospital\'s error reduction was caused by *its* system. **Scope shift — different institutions, no bearing on this specific causal claim.**', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(D) Patient volume changes', text: 'This is tempting because a change in patient volume could theoretically affect error rates. But the argument measures errors as a rate (percentage decrease), not raw numbers. A change in volume would not straightforwardly explain a change in the *rate* of errors. At best, this has a weak and indirect connection to the gap. **Marginal impact — not the most decisive question.**', badge: 'Too Weak', badgeColor: 'red' },
      { title: '(E) Consequences of medication errors', text: 'The severity of consequences is an entirely separate issue from whether the system caused fewer errors. The argument is about causation, not about the importance of the outcome. **Irrelevant to the gap.**', badge: 'Wrong Gap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**The 4-Step Method: Find Conclusion → Identify Gap → Prephrase the Pivotal Question → Apply Yes/No Test.**\n\nPrephrasing the gap as a question before reading the answer choices is the single most powerful habit for Evaluate questions. It turns a difficult, open-ended question into a matching exercise.\n\nThe Yes/No Test confirms the correct answer and eliminates traps. If a choice does not produce a clear split (one direction strengthens, the other weakens), it is wrong.\n\nWrong answers fail in predictable ways: irrelevant to the gap, one-directional impact, too broad, questions the premise, or shifts scope. Learn these patterns and you will eliminate traps quickly and confidently." },
  ]
};
