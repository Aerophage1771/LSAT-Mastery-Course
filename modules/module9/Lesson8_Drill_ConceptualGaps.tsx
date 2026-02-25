import { Lesson } from '../../types';

export const Lesson8_Drill_ConceptualGaps: Lesson = {
  id: "9-8",
  title: "Drill: Bridging Conceptual Gaps (PT-101-S-3-Q-23)",
  content: [
    { type: 'h3', text: 'Bridging Conceptual Gaps' },
    { type: 'paragraph', text: 'A conceptual gap appears when the premise talks about one idea (a physical observation, a cost, a measurement) and the conclusion talks about a different idea (a motive, a status, a value judgment). The two concepts seem related, but nothing in the argument explicitly connects them. To strengthen, you must supply the missing bridge — the unstated link that makes the jump logical.' },
    { type: 'callout', variant: 'tip', title: 'Spotting Conceptual Gaps', text: 'Compare the key nouns in the premise to those in the conclusion. If they belong to different conceptual categories — e.g., "narrow floorboards" (physical feature) vs. "status symbol" (social meaning) — there is a conceptual gap. The correct answer will connect the two categories, usually by ruling out a simpler alternative explanation.' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-101-S-3-Q-23', questionType: 'Strengthen', difficulty: 'medium', stimulus: 'Historians of North American architecture who have studied early nineteenth-century houses with wooden floors have observed that the boards used on the floors of bigger houses were generally much narrower than those used on the floors of smaller houses. These historians have argued that, since the people for whom the bigger houses were built were generally richer than the people for whom the smaller houses were built, floors made out of narrow floorboards were probably once a status symbol, designed to proclaim the owner\'s wealth.', question: 'Which one of the following, if true, most helps to strengthen the historians\' argument?', options: [
      '(A) More original floorboards have survived from big early nineteenth-century houses than from small early nineteenth-century houses.',
      '(B) In the early nineteenth century, a piece of narrow floorboard was not significantly less expensive than a piece of wide floorboard of the same length. (Correct)',
      '(C) In the early nineteenth century, smaller houses generally had fewer rooms than did bigger houses.',
      '(D) Some early nineteenth-century houses had wide floorboards near the walls of each room and narrower floorboards in the center, where the floors were usually carpeted.',
      '(E) Many of the biggest early nineteenth-century houses but very few small houses from that period had some floors that were made of materials that were considerably more expensive than wood, such as marble.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The boards used on the floors of bigger houses were generally much narrower than those used on the floors of smaller houses."', text: 'Core evidence: a physical correlation between house size and floorboard width.' },
      { title: '"Floors made out of narrow floorboards were probably once a status symbol, designed to proclaim the owner\'s wealth."', text: 'The conclusion leaps from a physical observation to a social interpretation — narrow boards = deliberate display of wealth.' }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'The premise is about a physical feature; the conclusion is about a social motive. The argument assumes that narrow boards were a *deliberate aesthetic choice* rather than a practical or economic one. The most damaging alternative explanation: narrow boards might simply have been **cheaper**, making them a cost-saving measure rather than a status symbol.' },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthen' },
    { type: 'paragraph', text: 'Eliminate the economic alternative. If narrow boards were not cheaper — or were actually more expensive — then the decision to use them could not have been about saving money, and the "status symbol" interpretation becomes much stronger.' },

    { type: 'h4', text: 'Step 4: Evaluate Every Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) More original floorboards survived from big houses.', text: 'Survival rates of wood do not explain the original motivation for choosing narrow boards.', badge: 'Irrelevant Fact', badgeColor: 'red' },
      { title: '(B) Narrow floorboard was not significantly less expensive than wide floorboard of the same length.', text: 'This directly eliminates the "cheaper material" alternative. If narrow boards cost the same, rich owners did not choose them to save money — supporting the status-symbol interpretation.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Smaller houses generally had fewer rooms.', text: 'This reinforces the premise that bigger houses were bigger — it does nothing to bridge the gap to "status symbol."', badge: 'Premise Booster', badgeColor: 'red' },
      { title: '(D) Some houses had wide boards by the walls and narrow boards in the center (under carpet).', text: 'If narrow boards were hidden under carpet, they were not a display of anything. This actually weakens the status-symbol theory.', badge: 'Weakener', badgeColor: 'red' },
      { title: '(E) The biggest houses sometimes used marble floors.', text: 'Marble shows rich people had other ways to display wealth, but it tells you nothing about why they also chose narrow wood boards. It could even undercut the argument — if marble was the real status symbol, narrow boards were secondary.', badge: 'Scope Mismatch', badgeColor: 'red' }
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When an argument infers a motive (social status) from a physical observation (narrow boards), it assumes the observation cannot be explained more simply. The strongest strengthener eliminates the most plausible mundane alternative — typically a cost or convenience explanation. By showing that narrow boards were not cheaper, (B) removes the economic rival and leaves the status-symbol interpretation as the best remaining explanation.' }
  ]
};
