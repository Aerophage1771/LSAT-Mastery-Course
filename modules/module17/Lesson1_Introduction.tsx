import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "17-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 17: Must Be True' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the one statement that is logically proven by the facts in the stimulus.** What conclusion is guaranteed to be true if everything in the passage is accepted as fact?' },
    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Must Be True (MBT) is the strictest inference type on the LSAT. Unlike Most Strongly Supported questions, which ask for the *best-supported* answer, MBT demands absolute certainty. The correct answer MUST follow from the stimulus with no exceptions, no qualifications, and no room for doubt. If there is even one possible scenario where the stimulus is true but the answer choice is false, that choice is wrong.' },
    { type: 'h3', text: 'Recognizing the Question Stem' },
    { type: 'table', headers: ['Stem Language', 'Signal'], rows: [
      ['Which one of the following **must also be true**?', 'Classic MBT phrasing'],
      ['Which one of the following **can be properly inferred**?', 'LSAT "inferred" = proven, not merely suggested'],
      ['Which one of the following **follows logically** from the statements?', 'Asks for a valid deduction'],
      ['Which one of the following is **strictly implied**?', 'Rare variant; same task']
    ]},
    { type: 'h3', text: 'Must Be True vs. Most Strongly Supported' },
    { type: 'breakdown', labels: { title: 'Feature', text: 'Comparison' }, colWidth: 'equal', items: [
      { title: 'Standard of Proof', text: 'MBT requires **certainty** \u2014 the answer is logically guaranteed. MSS requires only **strong support** \u2014 the best-supported answer wins even if not 100% certain.', badge: 'Key Difference', badgeColor: 'indigo' },
      { title: 'Wrong-Answer Test', text: 'For MBT, if you can construct ANY scenario where the stimulus is true but the answer is false, eliminate it. For MSS, ask whether a different choice is *better* supported.', badge: 'Elimination', badgeColor: 'slate' },
      { title: 'Practical Effect', text: 'MBT correct answers tend to be narrower and more cautious because they must be airtight. MSS correct answers can be slightly broader.', badge: 'Scope', badgeColor: 'blue' }
    ]},
    { type: 'h3', text: 'The Certainty Standard' },
    { type: 'paragraph', text: 'Apply this mental test to every answer choice: *Can I construct ANY scenario in which the stimulus is true but this answer choice is false?* If yes, eliminate it immediately. The correct answer passes this test because no counter-scenario is possible.' },
    { type: 'h3', text: 'Common MBT Reasoning Patterns' },
    { type: 'list', items: [
      '**Conditional Chains:** The stimulus provides A\u2192B and B\u2192C, so A\u2192C must be true (and its contrapositive ~C\u2192~A).',
      '**Quantifier Overlaps:** "Most X are Y" and "Most X are Z" guarantees some overlap \u2014 at least some X are both Y and Z.',
      '**Numerical Deductions:** A group of 100 has "more than 60 teachers" and "more than 50 lawyers" \u2014 at least 11 must be both.',
      '**Set Relationships:** "All A are B" and "No B are C" yields "No A are C."',
      '**Definitional Applications:** The stimulus defines a term and describes a case that fits; the answer applies the definition.'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card',
      id: '17-1-example',
      questionType: 'Must Be True',
      difficulty: 'easy',
      stimulus: 'Every member of the robotics club is enrolled in a computer science course. No student enrolled in a computer science course is exempt from the lab fee.',
      question: 'If the statements above are true, which one of the following must also be true?',
      options: [
        '(A) Every student who pays the lab fee is a member of the robotics club.',
        '(B) No member of the robotics club is exempt from the lab fee. (Correct)',
        '(C) Some students enrolled in computer science are not members of the robotics club.',
        '(D) Students exempt from the lab fee are enrolled in a computer science course.',
        '(E) The lab fee is charged only to members of the robotics club.'
      ]
    },
    { type: 'callout', title: 'Key Principle', variant: 'summary', text: 'Treat the stimulus as absolute truth and find what NECESSARILY follows. The correct answer is locked in by the premises \u2014 no additional assumptions, no outside knowledge, no wiggle room.' }
  ]
};
