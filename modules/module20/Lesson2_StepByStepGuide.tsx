import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: "20-2",
  title: "Step-by-Step Guide",
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Agree / Disagree' },
    { type: 'paragraph', text: 'This guide provides a reliable four-step method for solving Point at Issue questions. The method works identically for both disagreement and agreement variants; only the target pattern in Step 3 changes.' },
    { type: 'h3', text: 'Step 1: Map Each Speaker\'s Position' },
    { type: 'paragraph', text: 'Read the dialogue carefully and separate each speaker\'s argument into its core components. For each speaker, identify:' },
    { type: 'list', ordered: true, items: [
      '**Conclusion** -- What is the speaker\'s main claim?',
      '**Premises** -- What evidence or reasoning supports it?',
      '**Concessions** -- Does the speaker grant any of the other speaker\'s points?'
    ]},
    { type: 'paragraph', text: 'Write a one-sentence summary of each speaker\'s position before moving on.' },
    { type: 'h3', text: 'Step 2: Identify Committed Claims' },
    { type: 'paragraph', text: 'List every proposition each speaker is committed to -- either explicitly stated or logically entailed by their argument. A speaker is committed to a claim if denying it would undermine their own reasoning. Be strict: if a speaker neither states nor implies a position, mark it as **Unknown**.' },
    { type: 'h3', text: 'Step 3: Apply the Overlap Test' },
    { type: 'paragraph', text: 'For each answer choice, determine each speaker\'s stance (YES, NO, or Unknown) on that proposition.' },
    { type: 'table', headers: ['Question Type', 'Target Pattern', 'Eliminate If'], rows: [
      ['Disagreement', 'One says YES, the other says NO', 'Either speaker is Unknown'],
      ['Agreement', 'Both say YES (or both say NO)', 'Either speaker is Unknown']
    ]},
    { type: 'h3', text: 'Step 4: Verify Both Commit' },
    { type: 'paragraph', text: 'Before confirming your answer, double-check that **both** speakers have a clear, textually supported position on the proposition. If you cannot point to specific language in the stimulus that commits a speaker, the choice is wrong -- even if it feels intuitively right.' },
    { type: 'hr' },
    { type: 'h3', text: 'Worked Example' },
    { type: 'question-card', questionType: 'Point at Issue', stimulus: '**Chen:** Mandatory recycling programs are the most effective way to reduce landfill waste. Cities that have implemented them report a 40 percent drop in landfill volume.\n**Dara:** Those statistics are misleading. The drop in landfill volume is mostly due to composting initiatives that were introduced at the same time. Voluntary incentive programs would achieve comparable recycling rates without the enforcement costs.', question: 'The point at issue between Chen and Dara is whether', options: [
      '(A) Cities with mandatory recycling programs have seen reduced landfill volume',
      '(B) Composting initiatives have contributed to reducing landfill waste',
      '(C) Mandatory recycling programs are the most effective way to reduce landfill waste (Correct)',
      '(D) Enforcement of recycling mandates involves significant costs',
      '(E) Voluntary incentive programs have been tried in some cities'
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Wrong Answer Patterns' },
    { type: 'list', items: [
      '**One Speaker Uncommitted** -- The choice captures one speaker\'s view, but the other speaker says nothing about it. This is the most common trap.',
      '**Both Actually Agree** -- The proposition is something both speakers accept (often a shared premise). Tempting because it is true, but irrelevant to a disagreement question.',
      '**Neither Addresses It** -- The proposition goes beyond the scope of the dialogue entirely. Neither speaker can be pinned to a position.'
    ]},
    { type: 'h3', text: 'Timing Tip' },
    { type: 'callout', variant: 'tip', text: 'Point at Issue questions reward a disciplined process more than speed. Spend an extra 15-20 seconds mapping each speaker\'s commitments before touching the answer choices. The upfront investment eliminates second-guessing and prevents you from falling for the one-speaker trap.' }
  ]
};
