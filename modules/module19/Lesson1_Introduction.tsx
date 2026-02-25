import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '19-1',
  title: 'Introduction',
  content: [
    { type: 'h2', text: 'MODULE 19: Paradox / Explain' },
    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Paradox questions are unique in Logical Reasoning because they do NOT ask you to evaluate an argument. There is no conclusion to strengthen, weaken, or find a flaw in. Instead, the stimulus presents two facts that seem contradictory, and your job is to EXPLAIN how both can be true simultaneously.' },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    { type: 'table', headers: ['Stem Language', 'What It Signals'], rows: [
      ['"most helps to explain"', 'Find a fact that accounts for the surprising result'],
      ['"most helps to resolve the apparent discrepancy"', 'Find a fact that makes both sides of the conflict compatible'],
      ['"most helps to reconcile"', 'Same task — reconcile two seemingly contradictory facts']
    ]},
    { type: 'h3', text: 'Paradox vs. Strengthen' },
    { type: 'paragraph', text: 'Both Paradox and Strengthen answers introduce a new fact. The difference: a Strengthen answer supports a conclusion, while a Paradox answer resolves a puzzle. In Strengthen there is an argument with premises and a conclusion. In Paradox there is no argument — just two facts that don\'t seem to fit together.' },
    { type: 'h3', text: 'The Two-Fact Structure' },
    { type: 'paragraph', text: 'Every Paradox stimulus contains two facts that appear to contradict each other. Look for pivot words — "however," "yet," "surprisingly," "nevertheless" — that signal the shift from Fact 1 to Fact 2. Your first task is always to isolate these two facts clearly.' },
    { type: 'h3', text: 'The Resolution Principle' },
    { type: 'paragraph', text: 'The correct answer makes BOTH facts true simultaneously. It does not deny either fact. Instead, it introduces a hidden variable, a crucial distinction, or an overlooked mechanism that bridges the gap between the two facts.' },
    { type: 'h3', text: 'Common Paradox Types' },
    { type: 'list', items: [
      '**Numerical:** A percentage goes up but the absolute number goes down, or vice versa',
      '**Causal:** An expected cause produces the opposite effect',
      '**Behavioral:** People or groups act contrary to their apparent interests',
      '**Temporal:** Something changed over time in an unexpected direction',
      '**Definitional:** Two categories overlap or are measured differently'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card', id: '19-1-example', questionType: 'Paradox / Explain', difficulty: 'easy', stimulus: 'A city installed bright new streetlights on its most dangerous road to reduce nighttime accidents. In the year after installation, nighttime accidents on that road increased by 20 percent.', question: 'Which one of the following, if true, most helps to explain the surprising finding?', options: ['(A) The new streetlights cost significantly more than the old ones.', '(B) Other roads in the city experienced no change in accident rates.', '(C) The brighter lighting gave drivers a false sense of security, leading them to drive significantly faster. (Correct)', '(D) Daytime accidents on the same road remained unchanged.', '(E) Some residents complained that the new lights were too bright.'] },
    { type: 'callout', variant: 'tip', title: 'Key Principle', text: 'The correct answer must explain why BOTH facts can be true at the same time. It never denies either fact — it bridges them.' }
  ]
};
