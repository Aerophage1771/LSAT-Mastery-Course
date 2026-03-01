import { Lesson } from '../../types';

export const Lesson3_Drill_ConditionalBreakers: Lesson = {
  id: "18-3",
  title: "Drill: Conditional Breakers (PT-103-S-1-Q-13)",
  content: [
    { type: 'h2', text: 'Conditional Breakers' },
    { type: 'paragraph', text: 'A Conditional Breaker is an answer choice that violates a conditional rule established in the stimulus. Every conditional rule has exactly one way to be broken: the sufficient condition occurs, but the necessary condition does not. In formal terms, if the stimulus says "If A, then B," the only scenario that must be false is "A and not B." Every other combination\u2014A with B, not-A with B, not-A without B\u2014is perfectly consistent with the rule.' },

    { type: 'paragraph', text: 'Must Be False questions test your ability to spot this single forbidden combination. The stimulus will use absolute language\u2014"never," "always," "all," "no"\u2014to create an unbreakable conditional. The correct answer asserts the antecedent while denying the consequent, producing a direct logical impossibility.' },

    { type: 'h3', text: 'How Conditional Rules Break' },
    { type: 'paragraph', text: 'A conditional statement "If P, then Q" generates exactly one contradiction:' },
    { type: 'list', ordered: true, items: [
      '**Identify the sufficient condition (P):** This is the trigger\u2014the "if" side of the rule.',
      '**Identify the necessary condition (Q):** This is the guaranteed outcome\u2014the "then" side.',
      '**The contradiction is P and not-Q:** Any answer choice that describes the trigger occurring without the guaranteed outcome directly violates the rule.',
    ]},
    { type: 'paragraph', text: 'Common distractors present the converse (Q therefore P) or the inverse (not-P therefore not-Q). Neither of these is logically forbidden by the original conditional. Only affirming the antecedent while denying the consequent creates a contradiction.' },

    { type: 'callout', variant: 'tip', title: 'Strategy: Translate Absolutes into Conditionals', text: 'When you see words like "never," "always," or "no," immediately rewrite the statement as a formal conditional. "Someone who is scrupulously honest will never be an effective politician" becomes: Scrupulously Honest \u2192 NOT Effective Politician. Once you have the diagram, the contradiction writes itself.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Conditional Breakers (PT-103-S-1-Q-13)' },
    { type: 'paragraph', text: 'This drill features a stimulus that buries its key conditional rule in the final sentence. Your task is to extract that rule and find the answer that violates it.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: 'PT-103-S-1-Q-13',
      questionType: 'Must Be False',
      difficulty: 'medium',
      stimulus: 'Some people think that in every barrel of politicians there are only a few rotten ones. But if deceit is a quality of rottenness, I believe all effective politicians are rotten. They must be deceitful in order to do the job properly. Someone who is scrupulously honest about obeying the rules of society will never be an effective politician.',
      question: 'Assuming that the author\'s statements are accurate, which one of the following statements CANNOT be true?',
      options: [
        '(A) Some people think all politicians are rotten.',
        '(B) Some politicians are scrupulously honest.',
        '(C) Some people define a politician\'s job as obeying the rules of society.',
        '(D) Some deceitful politicians are ineffective.',
        '(E) Some scrupulously honest politicians are effective. (Correct)',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Extract the Conditional Rules' },
    { type: 'paragraph', text: 'The stimulus contains several claims, but only the final sentence creates an absolute rule:' },

    { type: 'breakdown', labels: { title: 'Statement', text: 'Analysis' }, items: [
      { title: '"Some people think... only a few rotten ones."', text: 'This is a third-party opinion the author is about to reject. It establishes no rule of its own.', badge: 'Background', badgeColor: 'slate' },
      { title: '"All effective politicians are rotten."', text: 'The author\'s conclusion. It tells us Effective \u2192 Rotten, but the question stem asks what CANNOT be true, so we need the strongest absolute statement.', badge: 'Conclusion', badgeColor: 'blue' },
      { title: '"They must be deceitful to do the job properly."', text: 'A supporting premise: Effective \u2192 Deceitful. This makes deceit a necessary condition for effectiveness, not a sufficient one.', badge: 'Premise', badgeColor: 'blue' },
      { title: '"Someone who is scrupulously honest... will never be an effective politician."', text: 'The key rule. The word "never" creates an absolute prohibition: Scrupulously Honest \u2192 NOT Effective Politician.', badge: 'Key Rule', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Diagram the Key Rule' },
    { type: 'paragraph', text: 'The final sentence translates to: **Scrupulously Honest \u2192 NOT Effective Politician**. The contrapositive is: **Effective Politician \u2192 NOT Scrupulously Honest**. Both forms tell us the same thing: scrupulous honesty and political effectiveness are mutually exclusive. Any answer that combines these two traits describes an impossible scenario.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Some people think all politicians are rotten.', text: 'The stimulus mentions what "some people" think. Nothing prevents other people from holding a stronger version of that belief. This is consistent with the passage.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(B) Some politicians are scrupulously honest.', text: 'The rule says honest politicians cannot be effective\u2014it does not say honest politicians cannot exist. They can exist; they just won\'t be effective.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(C) Some people define a politician\'s job as obeying the rules of society.', text: 'The author argues against this view, but others are free to hold it. The stimulus does not forbid this belief.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(D) Some deceitful politicians are ineffective.', text: 'Deceit is necessary for effectiveness (Effective \u2192 Deceitful), but it is not sufficient. A politician can be deceitful and still fail. This is the classic necessary-vs-sufficient trap.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(E) Some scrupulously honest politicians are effective.', text: 'This directly asserts the sufficient condition (scrupulously honest) while denying the necessary condition (not effective). The stimulus says this combination can never occur. This is the Conditional Breaker.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'A Conditional Breaker is the only way to violate a conditional rule: assert the sufficient condition while denying the necessary condition. When a Must Be False stimulus uses absolute words like "never," "always," or "no," translate the statement into a formal conditional and look for the answer that describes the single forbidden combination.' },
  ]
};
