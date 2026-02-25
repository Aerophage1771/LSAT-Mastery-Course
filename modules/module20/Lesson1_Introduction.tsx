import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "20-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 20: Agree / Disagree (Point at Issue)' },
    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Point at Issue questions are unique on the LSAT because they present **two speakers** with opposing or agreeing views. Instead of analyzing a single argument, you must compare two positions and identify the exact proposition on which they clash or converge. This makes the question type a direct test of comparative reasoning.' },
    { type: 'h3', text: 'Recognizing Question Stems' },
    { type: 'table', headers: ['Stem Language', 'Task'], rows: [
      ['"committed to disagreeing about whether..."', 'Find a proposition one affirms and the other denies'],
      ['"most strongly supports the claim that X and Y disagree about..."', 'Find the clearest point of opposition'],
      ['"provides the most support for the claim that they agree..."', 'Find a proposition both would affirm']
    ]},
    { type: 'h3', text: 'Point of Disagreement vs. Point of Agreement' },
    { type: 'paragraph', text: 'These questions come in two sub-types. **Point of Disagreement** asks for the statement one speaker would affirm and the other would deny. **Point of Agreement** asks for the statement both speakers would affirm. The analytical method is the same; only the target pattern differs.' },
    { type: 'h3', text: 'The Overlap Test' },
    { type: 'paragraph', text: 'For every answer choice, ask: what would Speaker A say, and what would Speaker B say? For **disagreement**, Speaker A must say YES and Speaker B must say NO (or vice versa). For **agreement**, both must say YES or both must say NO. Any answer where a speaker\'s position is unknown automatically fails the test.' },
    { type: 'h3', text: 'Common Dialogue Structures' },
    { type: 'list', items: [
      '**Direct Contradiction** -- Speaker B flatly denies Speaker A\'s conclusion.',
      '**Different Criteria** -- Both evaluate the same thing but apply different standards.',
      '**Different Explanations** -- Both accept a fact but offer competing causes.',
      '**Shared Assumption** -- Both rely on the same underlying premise yet reach opposite conclusions.'
    ]},
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card', questionType: 'Point at Issue', stimulus: '**Marta:** Public libraries should prioritize digital lending because physical book circulation has declined steadily for a decade.\n**Niko:** Physical circulation may have dipped, but in-person library visits have increased. Libraries should expand community programming, not shift resources to digital lending.', question: 'Marta and Niko are committed to disagreeing about whether', options: [
      '(A) Physical book circulation has declined over the past decade',
      '(B) Libraries should prioritize digital lending (Correct)',
      '(C) In-person library visits have increased recently',
      '(D) Community programming is valuable to library patrons',
      '(E) Digital lending technology has improved significantly'
    ]},
    { type: 'h3', text: 'Key Principle' },
    { type: 'callout', variant: 'tip', text: 'Both speakers must have a committed position on the proposition -- silence or ambiguity means it is NOT the point at issue. If you cannot find clear textual evidence that a speaker would say YES or NO, eliminate that choice.' }
  ]
};
