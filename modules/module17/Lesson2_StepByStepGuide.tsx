import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "17-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Must Be True' },
    { type: 'paragraph', text: 'This guide gives you a repeatable four-step method for every Must Be True question. Because MBT demands certainty, each step is designed to tighten your reasoning and prevent you from selecting an answer that merely *could* be true.' },
    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', title: 'Solving Must Be True Questions', steps: [
      '**Confirm the Task.** Read the stem first. Once you see language like "must be true," "follows logically," or "properly inferred," set your standard: the answer must be 100% guaranteed by the stimulus.',
      '**Deconstruct the Stimulus.** Break every sentence into its logical skeleton. Diagram conditional statements (If A \u2192 B). Note quantifiers (all, most, some, none). Flag numerical data. Identify causal links.',
      '**Synthesize and Predict.** Look for a shared term that connects two premises. Chain conditionals (A\u2192B + B\u2192C = A\u2192C). Combine quantifiers (Most X are Y + Most X are Z = Some Y are Z). State your predicted deduction before reading the choices.',
      '**Evaluate and Eliminate.** Test each choice against the stimulus. If you can imagine ANY scenario where the stimulus is true but the choice is false, cross it out. The surviving choice is your answer.'
    ]},
    { type: 'h3', text: 'Conditional Diagramming' },
    { type: 'paragraph', text: 'Conditional logic drives the majority of MBT questions. Translate natural language into arrows and memorize these equivalences:' },
    { type: 'table', headers: ['Natural Language', 'Diagram'], rows: [
      ['If A, then B', 'A \u2192 B'],
      ['All A are B', 'A \u2192 B'],
      ['A only if B', 'A \u2192 B'],
      ['No A are B', 'A \u2192 ~B'],
      ['Unless B, not A', '~B \u2192 ~A (equiv. A \u2192 B)']
    ]},
    { type: 'paragraph', text: 'Once diagrammed, chain links with shared terms and always consider the **contrapositive** \u2014 it is logically identical to the original and is a favorite source of correct answers.' },
    { type: 'h3', text: 'Quantifier Tracking' },
    { type: 'paragraph', text: 'When the stimulus uses "most" or "some," track the overlap carefully. Two "most" claims about the same group guarantee overlap: if most X are Y and most X are Z, then at least some X are both Y and Z. However, two "some" claims about the same group do NOT guarantee overlap \u2014 the two subsets could be entirely separate.' },
    { type: 'h3', text: 'Wrong-Answer Patterns' },
    { type: 'breakdown', labels: { title: 'Trap Type', text: 'Description' }, items: [
      { title: 'Could Be True', text: 'The choice is compatible with the stimulus but not proven by it. It might be true in some scenarios and false in others.', badge: 'Most Common', badgeColor: 'red' },
      { title: 'Mistaken Reversal', text: 'Reverses a conditional: concludes B\u2192A from A\u2192B. Always check the direction of the arrow.', badge: 'Logic Error', badgeColor: 'red' },
      { title: 'Mistaken Negation', text: 'Negates both sides without reversing: concludes ~A\u2192~B from A\u2192B. The valid inference is ~B\u2192~A.', badge: 'Logic Error', badgeColor: 'red' },
      { title: 'Too Strong', text: 'Uses absolutes (all, never, only) when the stimulus supports a weaker claim (some, most).', badge: 'Scope Shift', badgeColor: 'red' },
      { title: 'Out of Scope', text: 'Introduces concepts, comparisons, or value judgments not mentioned in the stimulus.', badge: 'Irrelevant', badgeColor: 'red' }
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: '17-2-example',
      questionType: 'Must Be True',
      difficulty: 'medium',
      stimulus: 'All of the books on the top shelf are hardcovers. Most of the books on the top shelf were published before 1990. No book published before 1990 has a digital edition.',
      question: 'If the statements above are true, which one of the following must also be true?',
      options: [
        '(A) No hardcover book has a digital edition.',
        '(B) Most books published before 1990 are on the top shelf.',
        '(C) Some hardcovers do not have a digital edition. (Correct)',
        '(D) All books without digital editions are hardcovers.',
        '(E) Every book on the top shelf was published before 1990.'
      ]
    },
    { type: 'callout', title: 'Timing Tip', variant: 'tip', text: 'Spend 60\u201370% of your time deconstructing and synthesizing the stimulus. A strong prephrase lets you identify the correct answer in seconds and resist attractive traps. If no choice matches your prediction, re-read the stimulus \u2014 you likely missed a linkage.' }
  ]
};
