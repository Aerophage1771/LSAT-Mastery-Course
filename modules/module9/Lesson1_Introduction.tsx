import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "9-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 9: Strengthen' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify a new piece of information that, if true, makes the conclusion more likely to follow from the premises.** You are looking for a "helpful premise" that reinforces the author\'s logical leap.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Strengthen is one of the **most frequently tested** question types on the LSAT Logical Reasoning section. On a typical scored section, you will encounter two to four Strengthen questions — sometimes more. Because of this high frequency, your accuracy on Strengthen questions has a direct, measurable impact on your overall score." },
    { type: 'paragraph', text: "Strengthen is also the **mirror image of Weaken** (Module 8). Both question types require you to find the gap between the premises and the conclusion, then select an answer that acts on that gap. The only difference is direction: a Weaken answer widens the gap; a Strengthen answer fills it. If you mastered the gap-identification skills in Module 8, you already have the foundation for Strengthen — you simply need to push in the opposite direction." },
    { type: 'callout', variant: 'tip', title: 'Frequency', text: "Expect **2–4 Strengthen questions per scored section**. Combined with Weaken (which uses the same core skill in reverse), gap-based questions account for roughly **one-third of all Logical Reasoning questions**. Time invested here pays dividends across the board." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'You can recognize Strengthen questions by the phrase "if true" combined with language pointing toward support, help, or justification. The stem always asks you to find the answer choice that helps the argument.' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following, if true, most strengthens the argument?"', 'Asks what **most strengthens**'],
      ['"Which one of the following, if true, most supports the conclusion drawn above?"', 'Asks what **most supports**'],
      ['"Which one of the following, if true, provides the strongest support for the argument?"', 'Asks for the **strongest support**'],
      ['"Which one of the following, if true, most helps to justify the reasoning above?"', 'Asks what **helps to justify**'],
      ['"Which one of the following principles, if valid, provides the most support for the argument\'s conclusion?"', 'Asks for a **principle** that supports'],
      ['"Which one of the following, if true, does the most to strengthen the claim made above?"', 'Standard **strengthen** phrasing'],
    ]},
    { type: 'callout', variant: 'default', title: 'The "If True" Instruction', text: "The phrase \"if true\" is a powerful directive. You must treat every answer choice as a **factual statement**, no matter how unlikely it sounds in the real world. Your only job is to determine which of these five new facts provides the most logical help to the argument's conclusion. Never reject an answer choice because it seems implausible — on the LSAT, every answer choice is 100% true." },

    { type: 'hr' },

    { type: 'h2', text: 'The Gap Model' },
    { type: 'paragraph', text: "Every Strengthen question is built on the same structural foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The correct strengthener always targets this gap." },
    { type: 'paragraph', text: "This is the same Gap Model that drives Weaken and Evaluate questions. The only difference is what the correct answer does to the gap:" },
    { type: 'breakdown', labels: { title: 'Question Type', text: 'What the Correct Answer Does to the Gap' }, colWidth: 'equal', items: [
      { title: 'Strengthen', text: 'Finds the gap and **fills** it — provides information that makes the conclusion more likely to follow from the premises.', badge: 'Bridge the Gap', badgeColor: 'green' },
      { title: 'Weaken', text: 'Finds the gap and **widens** it — provides information that makes the conclusion less likely to follow from the premises.', badge: 'Widen the Gap', badgeColor: 'red' },
      { title: 'Evaluate', text: 'Finds the gap and **probes** it — asks a question whose answer could go either way.', badge: 'Probe the Gap', badgeColor: 'blue' },
    ]},
    { type: 'paragraph', text: "Because all three question types target the same gap, your approach to the stimulus is identical: find the conclusion, identify the premises, and locate the logical leap between them. The only difference is what you look for in the answer choices." },

    { type: 'hr' },

    { type: 'h2', text: 'Strengthen vs. Weaken' },
    { type: 'paragraph', text: "Strengthen and Weaken are mirror-image question types. They target the same gap in the same argument but ask you to push in opposite directions." },
    { type: 'table', headers: ['Feature', 'Strengthen', 'Weaken'], rows: [
      ['Core skill', 'Find the conclusion, premises, and gap', 'Find the conclusion, premises, and gap'],
      ['Direction', 'Fill the gap — make the conclusion **more** likely', 'Widen the gap — make the conclusion **less** likely'],
      ['Correct answer format', 'A new fact that supports the author\'s leap', 'A new fact that undermines the author\'s leap'],
      ['Common trap', 'Picking a choice that actually **weakens** the argument', 'Picking a choice that actually **strengthens** the argument'],
      ['Relationship to Necessary Assumption', 'The strengthener often resembles a stated version of the assumption', 'The weakener often resembles a denial of the assumption'],
    ]},
    { type: 'callout', variant: 'tip', title: 'Flip Drill', text: "When practicing, try this exercise: after solving a Strengthen question, ask yourself what the correct Weaken answer would be for the same argument. This \"flip drill\" deepens your understanding of the gap and reinforces the mirror-image relationship between the two question types." },

    { type: 'hr' },

    { type: 'h2', text: 'Strengthen vs. Sufficient Assumption' },
    { type: 'paragraph', text: "Students sometimes confuse Strengthen with Sufficient Assumption because both question types ask you to supply missing information that helps the conclusion. The distinction is about **degree of support**:" },
    { type: 'table', headers: ['Feature', 'Strengthen', 'Sufficient Assumption'], rows: [
      ['What the correct answer does', 'Makes the conclusion **more likely**', 'Makes the conclusion **certain** (100% guaranteed)'],
      ['Degree of support required', 'Any amount — even a modest increase in probability qualifies', 'Complete — the answer must logically guarantee the conclusion'],
      ['Answer strength', 'Can be partial or incremental', 'Must be airtight and conclusive'],
      ['"If true" language', 'Almost always present', 'Almost always present'],
      ['How to tell them apart', 'Stem says "strengthens" / "supports"', 'Stem says "the conclusion follows logically" / "enables the conclusion to be properly drawn"'],
    ]},
    { type: 'paragraph', text: "Think of it this way: a Sufficient Assumption answer is a **steel beam** that fully bridges the gap and makes the conclusion logically airtight. A Strengthen answer is a **support cable** — it does not need to close the gap entirely; it only needs to make the conclusion more plausible than it was before you added the information." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Strengthening Strategies' },
    { type: 'paragraph', text: "While every argument has a unique gap, the ways to fill that gap tend to fall into a small number of recurring patterns. Learning these strategies gives you a mental toolkit for prephrasing strengtheners before you look at the answer choices." },

    { type: 'table', headers: ['Strategy', 'How It Works', 'When to Use It'], rows: [
      ['**Confirm Causation**', 'Provide evidence that the alleged cause actually produced the alleged effect — e.g., showing a mechanism, a timeline, or a dose-response relationship.', 'The argument concludes that A caused B based on a correlation or sequence.'],
      ['**Rule Out Alternatives**', 'Eliminate a competing explanation that could have produced the observed result, leaving the author\'s explanation as the most likely candidate.', 'The argument makes a causal claim but has not ruled out other potential causes.'],
      ['**Bridge Concepts**', 'Provide a fact that explicitly connects a concept in the premises to a different concept in the conclusion, filling a definitional or categorical gap.', 'The premises discuss X but the conclusion is about Y, and the link between X and Y is unstated.'],
      ['**Support the Analogy**', 'Show that two things the argument compares are genuinely similar in the relevant respects, validating the comparison.', 'The argument concludes something about X because it is true of the "similar" Y.'],
      ['**Eliminate a Counterexample**', 'Rule out a scenario that, if true, would be a direct exception to the argument\'s conclusion.', 'The argument makes a broad or general claim that could be sunk by a single exception.'],
      ['**Validate the Data**', 'Confirm that the evidence the argument relies on is accurate, unbiased, and representative.', 'The argument relies on a study, survey, or statistic as its primary evidence.'],
    ]},

    { type: 'callout', variant: 'default', title: 'Strategy ≠ Formula', text: "These strategies are not rigid templates. Real LSAT questions often blend multiple patterns or present the gap in unexpected ways. Use these categories as starting points for your prephrase, not as a checklist to mechanically apply. The goal is to train your instinct for where arguments need help." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Strengthen question." },

    { type: 'question-card',
      id: 'WE-9-1-001',
      questionType: 'Strengthen',
      difficulty: 'easy',
      stimulus: "A city recently installed new LED streetlights in its downtown district. In the six months following the installation, reported crime in the downtown district fell by 20%. City officials concluded that the improved lighting was a significant factor in reducing crime downtown.",
      question: "Which one of the following, if true, most strengthens the argument?",
      options: [
        "(A) The LED streetlights consume 40% less energy than the older streetlights they replaced.",
        "(B) Several other cities that installed LED streetlights did not experience a similar drop in reported crime.",
        "(C) During the same six-month period, the city also increased police patrols in residential neighborhoods outside the downtown district. (Correct)",
        "(D) Neighborhoods adjacent to downtown that did not receive new streetlights saw no change in their crime rates during the same period.",
        "(E) The city plans to install LED streetlights in additional districts over the next two years.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "The conclusion is: *\"The improved lighting was a significant factor in reducing crime downtown.\"* The evidence is a correlation: new LED streetlights were installed, and crime fell 20% in the following six months." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument makes a classic **correlation-to-causation** leap. The author observes two things happening together (new lights + crime drop) and concludes that one caused the other. The gap is the possibility that something else caused the crime drop — increased police presence, seasonal patterns, economic changes, or other factors. To strengthen, we need to rule out these alternatives or show a tighter connection between the lights and the crime reduction." },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthener' },
    { type: 'paragraph', text: "Prephrase: *\"The argument would be stronger if I found out that no other plausible explanation accounts for the crime drop in downtown, or that the areas without new lights didn't see the same improvement.\"*" },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The LED streetlights consume 40% less energy.', text: 'Energy efficiency is irrelevant to crime reduction. This is about cost savings, not safety. **Outside the argument\'s scope.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Other cities did not see a similar drop.', text: 'This actually weakens the argument by suggesting the lights may not be responsible for the crime drop. **Wrong direction — this is a weakener.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Police patrols increased in residential neighborhoods outside downtown.', text: 'This is the correct answer. If increased police patrols were deployed *outside* downtown (not in the downtown district), then the most obvious alternative explanation — more police presence — is ruled out for the downtown area. The patrols went elsewhere, so the crime drop downtown must be attributable to something else, making the lighting explanation more plausible. **Rules out the leading alternative cause.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Adjacent neighborhoods without new lights saw no change.', text: 'This is tempting and provides some support by showing the drop was localized to the area with new lights. However, it does not rule out the possibility that some other downtown-specific factor (a new security system, a business closure) caused the change. It is helpful but less direct than (C), which eliminates the most likely competing explanation.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) The city plans to install more lights.', text: 'Future plans tell us nothing about whether the existing lights caused the observed crime drop. **Irrelevant to the existing evidence.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The strengthener adds NEW information not already in the argument.** The correct answer introduces a fact from outside the stimulus that makes the conclusion more plausible. It does not simply restate a premise.\n\n**2. The strengthener does not have to prove the conclusion.** It only needs to make the conclusion *more likely* — even a modest increase in probability is enough if it is the most helpful option among the five choices.\n\n**3. Every strengthener targets the gap.** Find the conclusion, find the premises, find the leap between them. The correct answer will fill that leap.\n\n**4. Treat every answer as true.** Never reject an answer because it seems unlikely in the real world. Accept it as fact and test its impact on the argument.\n\n**5. Know your strategies.** Confirm causation, rule out alternatives, bridge concepts, support the analogy, eliminate counterexamples, and validate data are the most common tools. Use them to prephrase before reading the answer choices.\n\n**6. Strengthen and Weaken are mirrors.** If you understand one, you understand both. Practice flipping between them to deepen your gap-identification skills." },
  ]
};
