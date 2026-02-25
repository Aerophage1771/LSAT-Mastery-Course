import { Lesson } from '../../types';

export const Lesson3_Drill_SynthesisCausal: Lesson = {
  id: "16-3",
  title: "Drill: Synthesis of Causal Claims",
  content: [
    { type: 'h2', text: 'Drill: Synthesis Causal' },
    { type: 'paragraph', text: 'A **Synthesis Causal** question asks you to combine two or more premises that each describe part of a causal picture and draw an inference that links them. Neither premise alone is enough; the correct answer emerges only when you merge their causal information.' },
    { type: 'h3', text: 'The Concept' },
    { type: 'paragraph', text: 'Many MSS stimuli present Premise A (a cause or condition) and Premise B (a related effect or constraint). Your job is to synthesize: *Given both premises together, what causal conclusion follows?* The correct answer captures the combined force of the evidence without overstating it.' },
    { type: 'h3', text: 'Practice Question' },
    { type: 'question-card',
      id: '16-3-drill',
      questionType: 'Most Strongly Supported',
      difficulty: 'medium',
      stimulus: 'Book collector: The demand for out-of-print books is increasing. It has been spurred by the rise of the Internet, the search capabilities of which make it much easier to locate the out-of-print books one seeks.',
      question: 'The book collector\'s statements, if true, most strongly support which one of the following?',
      options: [
        '(A) Book collectors are now using the Internet to find titles they previously did not know existed.',
        '(B) Fewer people try to find books that are in print than try to find books that are out of print.',
        '(C) The amount of demand for out-of-print books is affected by the ease of finding such books. (Correct)',
        '(D) The Internet\'s search capabilities make it possible to locate most out-of-print books.',
        '(E) Only people who have access to the Internet can locate out-of-print books.'
      ]
    },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Breaking Down the Premises' },
    { type: 'list', items: [
      '**Premise 1 (Effect):** Demand for out-of-print books is increasing.',
      '**Premise 2 (Cause):** The Internet makes it much easier to locate these books, and this ease has spurred the demand.'
    ]},
    { type: 'h4', text: 'Synthesis' },
    { type: 'paragraph', text: 'Combining the two premises yields one causal relationship: *easier access* (cause) has led to *greater demand* (effect). The correct answer should capture this principle at an appropriate level of generality.' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Collectors finding unknown titles', text: 'The stimulus says the Internet helps find books one already "seeks," not discover unknown ones.', badge: 'Unsupported', badgeColor: 'red' },
      { title: '(B) In-print vs. out-of-print demand', text: 'No comparison between in-print and out-of-print demand is made anywhere in the stimulus.', badge: 'Outside Scope', badgeColor: 'red' },
      { title: '(C) Ease of finding affects demand', text: 'Directly mirrors the causal chain: easier to find \u2192 more demand. This is the synthesized principle.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Most out-of-print books locatable', text: '"Much easier" is relative; it does not establish that "most" books can be found.', badge: 'Too Extreme', badgeColor: 'red' },
      { title: '(E) Only Internet users can locate them', text: '"Only" eliminates all other methods, which the stimulus never does.', badge: 'Too Extreme', badgeColor: 'red' }
    ]},
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When a stimulus gives you a specific cause-and-effect example, the best-supported answer is often the general principle that example illustrates. Abstract from the particular to the universal, but match the strength of the language.' }
  ]
};
