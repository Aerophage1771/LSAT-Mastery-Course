import { Lesson } from '../../types';

export const Lesson8_Drill_Disagreement_DefinitionalClash: Lesson = {
  id: "20-8",
  title: "Practice Drill: Disagreement (Definitional Clash) (PT-108-S-2-Q-11)",
  content: [
    { type: 'paragraph', text: 'This question tests your ability to navigate a disagreement that is purely abstract and definitional. The entire conflict hinges on the necessary and sufficient conditions for a key term. To solve this, you must translate the speakers\' positions into formal logical rules and then test the answer choices against those rules.' },
    { type: 'hr' },
    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'First, translate each speaker\'s definition of a "Genuinely Autonomous Discipline" into a formal rule. In a definitional clash, the speakers argue about the criteria that define a key term. Your job is to identify each speaker\'s rule and find the scenario where those rules produce contradictory results.' },
    { type: 'breakdown', labels: { title: 'Speaker', text: 'Rule' }, items: [
      { title: 'Mario', text: '*   **Definition:** "A genuinely autonomous discipline has a domain of inquiry all its own."\n*   **Logic:** This is a **necessary condition**. To be autonomous, a field *must* have its own unique subject matter.\n*   **Diagram:** Genuinely Autonomous -> Has a Unique Domain.\n*   **Contrapositive:** Does NOT Have a Unique Domain -> Is NOT Genuinely Autonomous.' },
      { title: 'Lucy', text: '*   **Definition:** "A field of study is a genuinely autonomous discipline by virtue of its having a unique methodology."\n*   **Logic:** She presents this as a **sufficient condition**. Having a unique methodology is *enough* to qualify as autonomous. She uses philosophy as a counterexample to prove that having a unique domain is *not* necessary.\n*   **Diagram:** Has a Unique Methodology -> Genuinely Autonomous.' }
    ] },
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'paragraph', text: 'The conflict is a classic logical dispute over necessary vs. sufficient conditions for the same term. Lucy does not simply counter Mario with an opinion; she provides a structural counterexample (philosophy) that undercuts his rule while establishing her own.' },
    { type: 'list', items: [
      '**Motto:** "They are fighting over the definition in a rulebook."',
      '**Blueprint:**\n*   Mario says having a Unique Domain is necessary for a discipline to be autonomous.\n*   Lucy says having a Unique Methodology is sufficient, and having a Unique Domain is not necessary.\n*   The core disagreement is whether a discipline that lacks a Unique Domain can possibly be autonomous. Mario says no; Lucy says yes, provided it has a Unique Methodology.',
      '**Recognition Cue:** When two speakers each define the same term using different conditional rules, look for the answer choice that describes the scenario where those rules produce opposite verdicts.'
    ] },
    { type: 'h4', text: 'Step 3: Evaluate Each Choice' },
    { type: 'paragraph', text: 'Apply the "Truth Test" using the full language of the conditional rules you\'ve identified.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Unique methodology + no unique domain = still autonomous?',
        text: 'Mario: **False.** According to his rule, if a field "lacks a domain of inquiry all its own," it is automatically disqualified. The presence of a unique methodology is irrelevant to his strict requirement. Lucy: **True.** According to her rule, if a field "has a unique methodology," that is sufficient to make it autonomous. The fact that it lacks a unique domain does not disqualify it, which is the entire point of her philosophy example. This scenario produces opposite outcomes from their conflicting rules.',
        badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Not autonomous but still has unique methodology?',
        text: 'Mario: Unknown. His rule only discusses what is required *to be* autonomous. He never mentions methodology at all — this is a **Silence Trap**. Lucy: False. Her rule\'s contrapositive states that if a field is *not* autonomous, it must *not* have a unique methodology.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Unique methodology + unique domain = autonomous?',
        text: 'Mario: True. Such a field meets his necessary condition (it has a domain all its own). Lucy: True. Such a field meets her sufficient condition (it has a unique methodology). This is a **Point of Agreement Trap** — both would affirm this statement.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Not autonomous = lacks both domain and methodology?',
        text: 'This statement is too strong for either speaker. Mario\'s rule says nothing about methodology. Lucy\'s contrapositive only covers methodology, not domain. Neither speaker is committed to this claim.',
        badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Not autonomous = addresses issues shared with autonomous disciplines?',
        text: 'Both speakers are silent on this relationship. It introduces a new concept that is outside the scope of either speaker\'s definition. This is an irrelevant scope expansion.',
        badge: 'Incorrect', badgeColor: 'red' }
    ] },
    { type: 'hr' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway',
      text: 'For abstract disagreements about rules, formal logic is your most powerful tool. Translate each position into a conditional statement (If X, then Y) and its contrapositive. The correct answer will often be a complex conditional that one speaker\'s rule affirms and the other\'s rule denies. Don\'t try to solve this intuitively; diagram the logic.' }
  ]
};
