import { Lesson } from '../../types';

export const Lesson10_Drill_Analogy: Lesson = {
  id: "9-10",
  title: "Drill: Strengthening by Analogy (PT-112-S-4-Q-20)",
  content: [
    { type: 'h3', text: 'Strengthening by Analogy' },
    { type: 'paragraph', text: 'An argument by analogy generalizes from a single example to a broad category. The author points to one case and concludes that the same lesson applies to all similar cases. The vulnerability is obvious: the example might be an outlier. To strengthen, you must validate the comparison — ideally by showing the example is actually a **best-case scenario**. If even the best case fails the standard, the rest of the category is in deeper trouble, and the general conclusion follows forcefully.' },
    { type: 'callout', variant: 'tip', title: 'Best-Case Strengthening', text: 'When an argument says "X failed the standard, so the whole group should be subject to tighter rules," the strongest strengthener shows that X had the best chance of passing. If the strongest candidate failed, every weaker candidate is even less likely to pass — making the broad recommendation airtight.' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-112-S-4-Q-20', questionType: 'Strengthen', difficulty: 'hard', stimulus: 'Consumer advocate: The introduction of a new drug into the marketplace should be contingent upon our having a good understanding of its social impact. However, the social impact of the newly marketed antihistamine is far from clear. It is obvious, then, that there should be a general reduction in the pace of bringing to the marketplace new drugs that are now being tested.', question: 'Which one of the following, if true, most strengthens the argument?', options: [
      '(A) The social impact of the new antihistamine is much better understood than that of most new drugs being tested. (Correct)',
      '(B) The social impact of some of the new drugs being tested is poorly understood.',
      '(C) The economic success of some drugs is inversely proportional to how well we understand their social impact.',
      '(D) The new antihistamine is chemically similar to some of the new drugs being tested.',
      '(E) The new antihistamine should be on the market only if most new drugs being tested should be on the market also.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The introduction of a new drug into the marketplace should be contingent upon our having a good understanding of its social impact."', text: 'A stated principle: drugs should only be released when their social impact is well understood.' },
      { title: '"However, the social impact of the newly marketed antihistamine is far from clear."', text: 'A specific example that violates the principle — one drug that was released without adequate understanding.' },
      { title: '"There should be a general reduction in the pace of bringing to the marketplace new drugs that are now being tested."', text: 'The conclusion: the single failure justifies a sweeping policy for all new drugs in the pipeline.' }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'The argument leaps from one drug to all drugs. The antihistamine could be an outlier — perhaps it was uniquely complex or rushed, while other pipeline drugs are better understood. If the example is a worst case, it cannot anchor a universal policy.' },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthen' },
    { type: 'paragraph', text: 'Show the antihistamine is representative — or, even better, that it is the most understood drug in the pipeline. If even the best-understood drug fails the standard, the less-understood ones are guaranteed to fail, making the blanket slowdown justified.' },

    { type: 'h4', text: 'Step 4: Evaluate Every Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The antihistamine\'s social impact is much better understood than that of most new drugs being tested.', text: 'This makes the antihistamine the best case. If even the most-understood drug still has unclear social impact, every other drug in the pipeline is in worse shape — powerfully justifying the general slowdown.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) The social impact of some new drugs is poorly understood.', text: '"Some" is too weak to justify a policy covering all drugs. The conclusion demands broad support, not a handful of cases.', badge: '"Some" Trap', badgeColor: 'red' },
      { title: '(C) Economic success is inversely proportional to understanding of social impact.', text: 'Profitability is outside the scope of this argument about safety and social understanding.', badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(D) The antihistamine is chemically similar to some drugs being tested.', text: '"Some" again — and chemical similarity does not guarantee similar social impact profiles.', badge: '"Some" Trap', badgeColor: 'red' },
      { title: '(E) The antihistamine should be on the market only if most new drugs should be too.', text: 'This reverses the argument\'s logic. The argument uses the antihistamine to judge other drugs, not the other way around.', badge: 'Reversal Trap', badgeColor: 'red' }
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When an argument generalizes from one example to a category, the most devastating strengthener shows the example is the best case, not the worst. If the strongest candidate still fails the standard, the rest of the category cannot possibly meet it either. This "best-case-still-fails" pattern is one of the most powerful tools in the Strengthen toolkit.' }
  ]
};
