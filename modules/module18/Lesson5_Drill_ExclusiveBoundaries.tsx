import { Lesson } from '../../types';

export const Lesson5_Drill_ExclusiveBoundaries: Lesson = {
  id: "18-5",
  title: "Drill: Exclusive Boundaries (PT-102-S-4-Q-15)",
  content: [
    { type: 'h2', text: 'Exclusive Boundaries' },
    { type: 'paragraph', text: 'Exclusive Boundaries questions test your ability to synthesize multiple facts into a single compound rule that forbids a particular combination. Unlike Conditional Breakers (which violate one "if/then" rule) or Quantifier Clashes (which contradict one universal statement), Exclusive Boundaries require you to combine constraints about time, geography, definitions, or categories to discover a zone where something is logically impossible.' },

    { type: 'paragraph', text: 'The stimulus will present several independent facts that, taken individually, do not produce a contradiction. Only when you layer them together does the impossible scenario emerge. The correct answer tries to place an entity inside this forbidden zone\u2014violating the mutually exclusive boundary created by the intersection of the rules.' },

    { type: 'h3', text: 'Building the Logical Map' },
    { type: 'paragraph', text: 'To solve Exclusive Boundaries questions, construct a logical map by combining constraints:' },
    { type: 'list', ordered: true, items: [
      '**Step 1 \u2014 Extract each constraint independently.** Separate facts about categories, locations, time periods, and definitions.',
      '**Step 2 \u2014 Layer the constraints.** Ask: what combinations do these facts collectively forbid? Often one constraint defines where something exists, and another defines what can exist there.',
      '**Step 3 \u2014 Identify the forbidden zone.** The intersection of two or more constraints creates a scenario that is logically impossible. The correct answer describes this exact scenario.',
    ]},
    { type: 'paragraph', text: 'Pay close attention to temporal words ("during," "throughout," "before," "after") and spatial words ("southern," "northern," "only on"). These create the rigid boundaries that make the contradiction possible.' },

    { type: 'callout', variant: 'tip', title: 'Strategy: Combine, Don\'t Isolate', text: 'No single sentence in the stimulus will produce the contradiction on its own. You must combine at least two facts. When you finish reading the stimulus, ask yourself: "What scenario is made impossible by these facts working together?" The answer to that question is what you are looking for in the answer choices.' },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Exclusive Boundaries (PT-102-S-4-Q-15)' },
    { type: 'paragraph', text: 'This drill features a stimulus with geographic, temporal, and biological constraints that combine to create one forbidden scenario. Four answers describe possible scenarios; one describes an impossible one.' },
    { type: 'paragraph', text: '**Instructions:** Read the stimulus and commit to an answer before scrolling down to the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Extract the Constraints' },
    { type: 'paragraph', text: 'Separate the stimulus into its independent factual constraints:' },

    { type: 'breakdown', labels: { title: 'Constraint', text: 'Content' }, items: [
      { title: 'Geographic Constraint', text: 'The southern half of the region was covered entirely by water during the Cretaceous period. This means no land existed in the southern half during that time.', badge: 'Location + Time', badgeColor: 'blue' },
      { title: 'Biological Constraint', text: 'Dinosaurs lived only on land. They could not survive in water.', badge: 'Category Rule', badgeColor: 'blue' },
      { title: 'Temporal Constraint', text: 'The Cretaceous period is a subset of the Mesozoic era\u2014specifically, the last 75 million years of it. "Throughout the entire Mesozoic era" necessarily includes the Cretaceous period.', badge: 'Time Subset', badgeColor: 'indigo' },
      { title: 'Plesiosaur Facts', text: 'Plesiosaurs were swimming reptiles that lived during the Cretaceous period exclusively. They were not dinosaurs. These facts are context but do not generate the key contradiction.', badge: 'Context', badgeColor: 'slate' },
    ]},

    { type: 'h4', text: 'Step 2: Layer the Constraints' },
    { type: 'paragraph', text: 'Combine the geographic and biological constraints: the southern half was entirely water during the Cretaceous, and dinosaurs lived only on land. Therefore, **dinosaurs could not have inhabited the southern half during the Cretaceous period**. This is the forbidden zone\u2014the intersection of the geographic and biological rules.' },

    { type: 'paragraph', text: 'Now add the temporal constraint: the Cretaceous is part of the Mesozoic era. Any claim that dinosaurs were in the southern half "throughout the entire Mesozoic era" necessarily includes the Cretaceous period, which we have just shown is impossible. The word "throughout" is the trigger that forces the answer into the forbidden zone.' },

    { type: 'callout', variant: 'default', title: 'The Forbidden Zone', text: 'Dinosaurs + Southern Half + Cretaceous Period = Impossible. Any answer that forces all three elements together must be false.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Dinosaurs inhabited the northern half of the region throughout the entire Mesozoic era.', text: 'The stimulus provides no information about the northern half\u2014it could have been land the entire time. Without a constraint, we cannot prove this false.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(B) Plesiosaurs did not inhabit the southern half of the region during the Cretaceous period.', text: 'Plesiosaurs were swimmers and the southern half was water, so they could have lived there\u2014but nothing says they had to. They might have lived in other waters. This is possible.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(C) Plesiosaurs did not inhabit the southern half of the region before the Cretaceous period.', text: 'In fact, this must be true: plesiosaurs lived "during the Cretaceous period exclusively," so they did not exist before it. A statement that must be true certainly could be true.', badge: 'Must Be True', badgeColor: 'blue' },
      { title: '(D) Dinosaurs did not inhabit the northern half of the region during the Cretaceous period.', text: 'We have no information about the northern half. It might have been land or water. We cannot prove this false.', badge: 'Possible', badgeColor: 'blue' },
      { title: '(E) Dinosaurs inhabited the southern half of the region throughout the entire Mesozoic era.', text: '"Throughout the entire Mesozoic era" includes the Cretaceous period. During the Cretaceous, the southern half was water, and dinosaurs lived only on land. This answer forces dinosaurs into the forbidden zone\u2014water territory during the Cretaceous\u2014making it impossible.', badge: 'Correct', badgeColor: 'green' },
    ]},

    { type: 'hr' },

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'Exclusive Boundaries questions require you to combine multiple constraints to discover a forbidden scenario. No single fact produces the contradiction; it emerges from layering geographic, temporal, or categorical rules. Pay special attention to words like "throughout," "during," and "only"\u2014they create the rigid boundaries that make certain combinations impossible. Any answer that forces an entity into the intersection of incompatible constraints must be false.' },
  ]
};
