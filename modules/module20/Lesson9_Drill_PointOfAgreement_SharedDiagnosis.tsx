import { Lesson } from '../../types';

export const Lesson9_Drill_PointOfAgreement_SharedDiagnosis: Lesson = {
  id: "20-9",
  title: "Practice Drill: Point of Agreement (Shared Diagnosis) (PT-116-S-2-Q-19)",
  content: [
    { type: 'paragraph', text: 'This drill focuses on a challenging "Point of Agreement" question. The difficulty lies in the fact that the speakers\' conclusions are directly opposed. Your task is to look past this surface-level conflict to identify a deeper, unstated premise or diagnosis that both speakers must accept for their arguments to be coherent.' },
    { type: 'hr' },
    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'First, break down each speaker\'s argument to understand their starting points and conclusions. In a "Shared Diagnosis" question, the speakers\' conclusions will oppose each other on the surface, but they share a common underlying premise or observation that you must identify.' },
    { type: 'breakdown', labels: { title: 'Speaker', text: 'Argument' }, items: [
      { title: 'Marc', text: '*   **Observation:** People are feeling nostalgic.\n*   **Interpretation:** This nostalgia is a symptom of "regret" for the revolution.\n*   **Implied Diagnosis:** People are unhappy with the current state of the country (which is why they feel regret and look backward).' },
      { title: 'Robert', text: '*   **Observation:** People are feeling nostalgic (he agrees with this core observation).\n*   **Counter-Argument:** He disagrees with Marc\'s interpretation, stating they "do not regret the revolution."\n*   **Alternative Interpretation:** This nostalgia is a symptom of being "troubled" — a different label for the same underlying negative present state.' }
    ] },
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'paragraph', text: 'The speakers agree on the primary symptom (nostalgia) and the underlying diagnosis (current problems), but they disagree on the specific cause or nature of those problems. This is the hallmark of a "Shared Diagnosis" pattern: same evidence, same general conclusion about the present, different specific interpretations.' },
    { type: 'list', items: [
      '**Motto:** "We agree on the diagnosis, but we disagree on the specific illness."',
      '**Blueprint:**\n*   Both speakers use the phenomenon of "nostalgia" as evidence of a negative present state.\n*   Marc labels this negative state as one that inspires "regret" for the revolution.\n*   Robert labels this negative state as one that makes people "troubled" but *not* regretful.\n*   The common ground is that the people are currently unhappy, and nostalgia is the evidence for that unhappiness.',
      '**Recognition Cue:** When speakers disagree on the conclusion but both cite the same evidence and both imply something is wrong with the present, they share a diagnosis. The correct answer will generalize that shared diagnosis using neutral language both can endorse.'
    ] },
    { type: 'h4', text: 'Step 3: Evaluate Each Choice' },
    { type: 'paragraph', text: 'Apply the "Truth Test" for an AGREE question. The correct answer must be a statement that both speakers would affirm is true.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) People underrate past problems in troubling times.',
        text: 'Both: Unknown. This is a general psychological claim that is plausible but is not stated or required by either speaker\'s argument. Neither speaker discusses whether the nostalgia is based on an accurate view of the past. This is a **Scope Trap**.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) People seek past solutions for current problems.',
        text: 'Both: Unknown. The arguments are about "nostalgia," an emotional state of looking back. This is not the same as a practical search for "solutions." Conflating sentiment with strategy is a **Misinterpretation Trap**.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) People will repeat mistakes by looking to the past.',
        text: 'Both: Unknown. Neither speaker makes a prediction about future actions or outcomes. This goes well beyond both arguments and is a **Scope Trap**.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) People are concerned, evidenced by nostalgia.',
        text: 'Marc: **True.** For people to "regret the recent revolution," they must be unhappy or "concerned" about the current situation that resulted from it. Nostalgia is his evidence. Robert: **True.** He explicitly states the people are "troubled," which is a synonym for "concerned," and he uses their nostalgia as the evidence for this state. This is the shared premise that serves as the foundation for both of their differing interpretations.',
        badge: 'Correct', badgeColor: 'green' },
      { title: '(E) People are most nostalgic for the distant past.',
        text: 'Marc: Unknown. He just says "the past" without specifying which era — this is a **Silence Trap**. Robert: True. He explicitly distinguishes between the "recent past" and the "distant past." Since Marc\'s view is unknown, this cannot be a point of agreement.',
        badge: 'Incorrect', badgeColor: 'red' }
    ] },
    { type: 'hr' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway',
      text: 'In "Point of Agreement" questions where the speakers\' conclusions are in direct conflict, the point of consensus is often the shared premise or shared diagnosis that launches their different interpretations. Look for the common ground *before* their arguments diverge. Often, the correct answer will use a synonym or a more general term (like "concerned") to encompass both speakers\' more specific claims (like "regret" and "troubled").' }
  ]
};
