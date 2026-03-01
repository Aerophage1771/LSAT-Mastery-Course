import { Lesson } from '../../types';

export const Lesson3_Drill_ConditionalLogic: Lesson = {
  id: "17-3",
  title: "Drill: Conditional Logic (PT-125-S-4-Q-23)",
  content: [
    { type: 'h2', text: 'Drill: Conditional Logic in Must Be True' },
    { type: 'paragraph', text: 'Conditional reasoning is the backbone of MBT questions. The test makers build chains of If-Then statements and ask you to derive what must follow. Your task is to translate each premise into a conditional diagram, link the chain through shared terms, and identify the valid inference \u2014 which is often the **contrapositive** of the completed chain.' },
    { type: 'h3', text: 'The Concept: Chaining If-Then Statements' },
    { type: 'paragraph', text: 'When a stimulus provides A\u2192B and B\u2192C, the transitive chain A\u2192C is guaranteed. Equally valid is the contrapositive ~C\u2192~A. Correct answers on the LSAT frequently test whether you can build these chains accurately and recognize contrapositives expressed in natural language. The difficulty increases when the stimulus hides conditionals behind words like "unless," "only if," "no...that does not," or double negatives.' },
    { type: 'h3', text: 'Practice Question' },
    { type: 'question-card',
      id: 'PT-125-S-4-Q-23',
      questionType: 'Must Be True',
      difficulty: 'medium',
      stimulus: 'Politician: The current crisis in mathematics education must be overcome if we are to remain competitive in the global economy. Alleviating this crisis requires the employment of successful teaching methods. No method of teaching a subject can succeed that does not get students to spend a significant amount of time outside of class studying that subject.',
      question: 'Which one of the following statements follows logically from the statements above?',
      options: [
        '(A) If students spend a significant amount of time outside of class studying mathematics, the current crisis in mathematics education will be overcome.',
        '(B) The current crisis in mathematics education will not be overcome unless students spend a significant amount of time outside of class studying mathematics. (Correct)',
        '(C) Few subjects are as important as mathematics to the effort to remain competitive in the global economy.',
        '(D) Only if we succeed in remaining competitive in the global economy will students spend a significant amount of time outside of class studying mathematics.',
        '(E) Students\' spending a significant amount of time outside of class studying mathematics would help us to remain competitive in the global economy.'
      ]
    },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Diagram Each Premise' },
    { type: 'list', items: [
      '**Sentence 1:** Remain Competitive (RC) \u2192 Overcome Crisis (OC). "Must be overcome if we are to remain competitive" makes OC a necessary condition for RC.',
      '**Sentence 2:** Overcome Crisis (OC) \u2192 Successful Teaching Methods (STM). "Requires" signals a necessary condition.',
      '**Sentence 3:** Successful Teaching Methods (STM) \u2192 Students Spend Time (ST). "No method can succeed that does not..." translates to: If a method succeeds, students must spend time.'
    ]},
    { type: 'h4', text: 'Step 2: Build the Chain' },
    { type: 'paragraph', text: '**Full chain:** RC \u2192 OC \u2192 STM \u2192 ST. Each link is a necessary condition for the one before it. The contrapositive runs in reverse: ~ST \u2192 ~STM \u2192 ~OC \u2192 ~RC.' },
    { type: 'callout', title: 'Blueprint', variant: 'tip', text: 'When the stimulus establishes a chain of necessary conditions, the most common correct answer is a segment of the contrapositive. Here, if students don\'t spend time (~ST), then the crisis won\'t be overcome (~OC). Answer (B) expresses exactly this.' },
    { type: 'h4', text: 'Step 3: Evaluate Each Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) ST \u2192 OC', text: 'Reverses the chain. Spending time is necessary for overcoming the crisis, not sufficient. A necessary condition is not a guarantee.', badge: 'Reversal', badgeColor: 'red' },
      { title: '(B) ~ST \u2192 ~OC', text: '"Will not be overcome unless students spend time" is the contrapositive of OC \u2192 STM \u2192 ST. This is logically valid and follows directly from the chain.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Comparative importance of math', text: 'The stimulus never compares mathematics to other subjects. This introduces an entirely new concept.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(D) ST \u2192 RC', text: '"Only if RC will students ST" makes RC a necessary condition for ST. This reverses the direction: the chain says RC requires ST, not the other way around.', badge: 'Reversal', badgeColor: 'red' },
      { title: '(E) ST helps RC', text: '"Would help" introduces causal language the stimulus never uses. The chain establishes necessary conditions, not causal assistance.', badge: 'Distortion', badgeColor: 'red' }
    ]},
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When you see multiple conditionals in an MBT stimulus, your first move should be to diagram and chain them. The correct answer will almost always be a valid segment of that chain or its contrapositive. Mistaken reversals and negations are the primary traps.' }
  ]
};
