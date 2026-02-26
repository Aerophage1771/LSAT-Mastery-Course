import { Lesson } from '../../types';

export const Lesson5_Drill_CausalChaining: Lesson = {
  id: "16-5",
  title: "Drill: Causal Chaining (PT-107-S-3-Q-5)",
  content: [
    { type: 'h2', text: 'Causal Chaining' },
    { type: 'paragraph', text: 'Causal chaining is one of the most common patterns in Most Strongly Supported questions. The stimulus presents a series of interconnected causal claims\u2014A causes B, and B causes C\u2014and the correct answer connects the beginning of the chain to the end. Your task is not to evaluate the reasoning or question the causal links, but to trace the dominoes from the initial trigger to the final, often unstated, outcome.' },

    { type: 'paragraph', text: 'The difficulty of causal chaining questions scales with the number of links and the precision of the language at each step. Easy questions have two links; hard questions have three or more, with subtle qualifiers ("increases the chances," "tends to," "is likely to") that constrain how strongly you can state the conclusion.' },

    { type: 'h3', text: 'The Chaining Technique' },
    { type: 'paragraph', text: 'To solve a causal chaining question, use a three-step process:' },
    { type: 'process', title: 'Trace the Chain', steps: [
      '**Step 1 \u2014 Identify the Links:** Break the stimulus into discrete cause-and-effect pairs. Label them: A causes B, B causes C, C causes D.',
      '**Step 2 \u2014 Connect the Endpoints:** The most strongly supported conclusion links the first cause (A) to the final effect (C or D). State this connection in your own words before looking at the answers.',
      '**Step 3 \u2014 Match the Qualifiers:** The correct answer must use language that is no stronger than the weakest qualifier in the chain. If one link says "increases the chances," the conclusion cannot say "will definitely."',
    ]},

    { type: 'callout', variant: 'tip', title: 'Qualifier Matching', text: 'The strength of the conclusion is limited by the weakest link in the chain. If the stimulus says "X increases the likelihood of Y" and "Y tends to produce Z," the strongest supported conclusion is that X makes Z more likely\u2014not that X guarantees Z or that X always produces Z. Watch for answer choices that silently upgrade a probability into a certainty.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Causal Chaining (PT-107-S-3-Q-5)' },
    { type: 'paragraph', text: 'This drill demonstrates a classic three-link causal chain in an environmental science context. The stimulus connects atmospheric chemistry to ocean temperatures to weather patterns.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '16-5-drill',
      questionType: 'Most Strongly Supported',
      difficulty: 'medium',
      stimulus: 'The chances that tropical storms will develop in a given area increase whenever the temperature of a large body of water in that area exceeds 26 degrees Celsius to a depth of about 60 meters. If the amount of carbon dioxide in the Earth\'s atmosphere continues to increase, the temperatures of all of the Earth\'s waters will rise, with the result that the number of large bodies of water whose temperatures exceed 26 degrees Celsius to a depth of about 60 meters will eventually be greater than it is today.',
      question: 'The statements above, if true, most strongly support which one of the following conclusions?',
      options: [
        '(A) There are likely to be more tropical storms if the amount of carbon dioxide in the Earth\'s atmosphere continues to increase. (Correct)',
        '(B) Tropical storms can occur only when the air temperature exceeds 26 degrees Celsius.',
        '(C) The number of large bodies of water whose temperatures exceed 26 degrees Celsius to a depth of about 60 meters is greater today than it ever was.',
        '(D) The ferocity of tropical storms does not depend on the amount of carbon dioxide in the Earth\'s atmosphere.',
        '(E) Any increase in the temperatures of the Earth\'s oceans would cause the amount of carbon dioxide in the atmosphere to increase as well.',
      ],
    },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Causal Chain' },
    { type: 'paragraph', text: 'Break the stimulus into its sequential links:' },

    { type: 'breakdown', labels: { title: 'Component', text: 'Details' }, items: [
      { title: 'Link 1: The Trigger', text: '"If the amount of carbon dioxide... continues to increase..." This is the initial cause\u2014the event that starts the chain. It is conditional ("if"), which limits the conclusion to a conditional or probabilistic statement.', badge: 'Cause A', badgeColor: 'blue' },
      { title: 'Link 2: The Intermediate Effect', text: '"...the temperatures of all of the Earth\'s waters will rise..." and "...the number of large bodies of water whose temperatures exceed 26 degrees... will eventually be greater..." CO2 increase leads to warmer oceans leads to more bodies of water exceeding the threshold.', badge: 'Effect B', badgeColor: 'blue' },
      { title: 'Link 3: The Final Effect', text: 'From the first sentence: "The chances that tropical storms will develop... increase whenever" the temperature threshold is exceeded. More bodies of water exceeding the threshold means more areas with increased storm chances.', badge: 'Effect C', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Connect the Endpoints' },
    { type: 'paragraph', text: 'The chain reads: Increased CO2 \u2192 Warmer oceans \u2192 More bodies of water exceeding 26\u00b0C \u2192 Increased chances of tropical storms. The supported conclusion connects the first cause (CO2 increase) to the final effect (more tropical storms).' },

    { type: 'paragraph', text: 'Notice the qualifiers along the chain. The trigger is conditional ("if... continues to increase"). The final link uses probabilistic language ("chances... increase"). The correct answer must respect both constraints\u2014it should be conditional and probabilistic, not absolute.' },

    { type: 'callout', variant: 'default', title: 'Pre-Phrase', text: 'If CO2 continues to increase, tropical storms will become more likely. The answer should connect CO2 to storms using probabilistic language.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) There are likely to be more tropical storms if the amount of carbon dioxide...', text: 'This perfectly connects the first cause (CO2 increase) to the final effect (more tropical storms). The word "likely" appropriately matches the probabilistic qualifier "chances... increase" from the stimulus. The conditional "if" matches the stimulus\'s conditional framing.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Tropical storms can occur only when the air temperature exceeds 26 degrees Celsius.', text: 'Two errors. First, the stimulus discusses water temperature, not air temperature\u2014a detail substitution. Second, "only" creates a necessary condition, but the stimulus says the threshold "increases the chances," not that it is required.', badge: 'Detail Swap + Extreme', badgeColor: 'red' },
      { title: '(C) ...is greater today than it ever was.', text: 'The stimulus says the number will "eventually be greater than it is today"\u2014a future projection. This answer compares today to the past ("ever was"), a temporal direction the stimulus never addresses.', badge: 'Temporal Shift Trap', badgeColor: 'red' },
      { title: '(D) The ferocity of tropical storms does not depend on...', text: 'The stimulus discusses the frequency or likelihood of storms, not their intensity or "ferocity." This answer shifts the scope from how many storms to how severe they are.', badge: 'Scope Shift Trap', badgeColor: 'red' },
      { title: '(E) Any increase in the temperatures... would cause the amount of carbon dioxide... to increase as well.', text: 'This reverses the causal direction. The stimulus says CO2 causes warming, not that warming causes CO2. Reversing a causal arrow is one of the most common MSS traps.', badge: 'Causal Reversal Trap', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Causal Chaining: Trap Taxonomy' },
    { type: 'table', headers: ['Trap', 'Mechanism', 'Signal Words'], rows: [
      ['Causal Reversal', 'Flips the direction of a causal link (A\u2192B becomes B\u2192A)', '"would cause," "leads to" applied in the wrong direction'],
      ['Detail Substitution', 'Swaps a specific detail for a similar but different one', 'Water/air, frequency/intensity, cost/value'],
      ['Temporal Shift', 'Changes the time frame from future to past or present', '"today," "currently," "in the past" when the stimulus projects forward'],
      ['Scope Shift', 'Addresses a related but different dimension of the topic', 'Frequency vs. severity, existence vs. magnitude'],
      ['Qualifier Upgrade', 'Replaces probabilistic language with certainty', '"will" replacing "likely," "always" replacing "tends to"'],
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When a stimulus presents a sequence of causal statements, your primary task is to map the chain from start to finish. Lay out the flow: A leads to B, B leads to C. The most strongly supported conclusion connects the initial cause to the final effect using language no stronger than the weakest qualifier in the chain. Watch for answers that reverse the causal direction, shift the time frame, swap a critical detail, or upgrade a probability into a certainty.' },
  ]
};
