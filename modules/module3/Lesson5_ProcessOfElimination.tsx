import { Lesson } from '../../types';

export const Lesson5_ProcessOfElimination: Lesson = {
  id: '3-5',
  title: 'Lesson 2: Process of Elimination (PT-101-S-2-Q-3)',
  content: [
    { type: 'h2', text: 'Lesson 2: Process of Elimination (Method of Reasoning)' },
    { type: 'paragraph', text: "Process of Elimination is one of the most recognizable and logically clean argumentative strategies. This lesson teaches you how it works, what it looks like in LSAT arguments, and how to distinguish it from superficially similar methods." },

    { type: 'hr' },

    { type: 'h3', text: 'Concept Focus: Process of Elimination' },
    { type: 'paragraph', text: "This method reaches a conclusion by showing it is the only viable option remaining. The argument works in three stages:" },

    { type: 'process', title: 'The Elimination Method — How It Works', steps: [
      '**Establish the candidate set:** Identify a limited number of possible explanations, causes, or options. The argument must make clear that these are the only possibilities.',
      '**Systematically eliminate alternatives:** Present evidence or reasoning to show that each alternative (except one) is invalid, impossible, or unlikely.',
      '**Conclude the remaining option is correct:** With all other possibilities removed, the last one standing is accepted as the conclusion.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Hidden Assumption', text: "Every Process of Elimination argument depends on a critical assumption: that the candidate set is **complete**. If there is a possibility the author did not consider, the entire argument is vulnerable. This is why Process of Elimination arguments are often targeted by Flaw and Weaken questions — the attacker introduces an unconsidered alternative." },

    { type: 'hr' },

    { type: 'h2', text: 'Elimination Language in Arguments' },
    { type: 'paragraph', text: "Process of Elimination arguments have distinctive structural signals. Learning to spot these will help you identify the method quickly:" },

    { type: 'table', headers: ['Signal Type', 'Example Language', 'What It Does'], rows: [
      ['**Setting up the candidate set**', '"must be one of three things," "there are only two possibilities," "either X or Y"', 'Establishes that the possibilities are limited and exhaustive'],
      ['**Eliminating an option**', '"but X cannot be the case because," "however, Y is ruled out by," "nor could Z be responsible"', 'Provides a reason to reject one of the candidates'],
      ['**Drawing the conclusion**', '"therefore, the only remaining possibility is," "it must be," "the answer is therefore"', 'Concludes that the last surviving option is correct'],
      ['**Transition markers**', '"not A, because...," "nor B, since...," "therefore C"', 'Chains the eliminations in sequence leading to the conclusion'],
    ]},

    { type: 'h4', text: 'Structural Pattern' },
    { type: 'paragraph', text: "The typical structure follows this exact pattern:" },
    { type: 'process', title: 'Elimination Pattern', steps: [
      '**Setup:** "The cause must be one of three things: A, B, or C."',
      '**Eliminate A:** "It cannot be A, because [evidence against A]."',
      '**Eliminate B:** "Nor can it be B, because [evidence against B]."',
      '**Conclude C:** "Therefore, it must be C."',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    {
      type: 'question-card',
      id: 'PT-101-S-2-Q-3',
      stimulus: 'A group of unusual meteorites was found in Shergotty, India. Their structure indicates that they originated on one of the geologically active planets: Mercury, Venus, or Mars. Because of Mercury\'s proximity to the Sun, any material dislodged from that planet\'s surface would have been captured by the Sun, rather than falling to Earth as meteorites. Nor could Venus be the source of the meteorites, because its gravity would have prevented dislodged material from escaping into space. The meteorites, therefore, probably fell to Earth after being dislodged from Mars, perhaps as the result of a collision with a large object.',
      question: 'The argument derives its conclusion by',
      options: [
        '**(A)** offering a counterexample to a theory',
        '**(B)** eliminating competing alternative explanations (Correct) [100%]',
        '**(C)** contrasting present circumstances with past circumstances',
        '**(D)** questioning an assumption',
        '**(E)** abstracting a general principle from specific data',
      ],
    },


    { type: 'h3', text: 'Step 1: Deconstruct the Argument' },
    { type: 'paragraph', text: "Let's map the argument's structure onto the elimination pattern:" },

    { type: 'breakdown', labels: { title: 'Component', text: 'Identification' }, items: [
      { title: 'Candidate Set', text: 'The meteorites came from one of three geologically active planets: Mercury, Venus, or Mars. This establishes the limited set of possibilities.', badge: 'Setup', badgeColor: 'blue' },
      { title: 'Eliminate Mercury', text: 'Mercury is too close to the Sun — any dislodged material would be captured by the Sun\'s gravity, not sent toward Earth. **Reason: Solar gravity.**', badge: 'Elimination 1', badgeColor: 'red' },
      { title: 'Eliminate Venus', text: 'Venus\'s own gravity is too strong — material could not escape the planet\'s surface. **Reason: Planetary gravity.**', badge: 'Elimination 2', badgeColor: 'red' },
      { title: 'Conclusion', text: 'With Mercury and Venus eliminated, the meteorites must have come from Mars. This is the only remaining option.', badge: 'Conclusion', badgeColor: 'green' },
    ]},

    { type: 'h3', text: 'Step 2: Characterize the Method and Prephrase' },
    { type: 'paragraph', text: "The argument identifies a limited set of possible origins (three planets), provides scientific reasons to reject two of them, and concludes that the third must be correct." },
    { type: 'callout', title: 'Prephrase', text: 'The argument supports its conclusion by eliminating other possible explanations one by one, leaving only one option.', variant: 'tip' },

    { type: 'h3', text: 'Step 3: Evaluate the Answer Choices' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Offering a counterexample to a theory', text: 'The argument doesn\'t present a specific case that contradicts a general theory. It\'s determining the source of a *specific* event by ruling out alternatives. No generalization is being disproved.', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(B) Eliminating competing alternative explanations', text: 'This is a perfect match for our prephrase. The three possible origins are "competing alternative explanations," and the argument systematically "eliminates" two of them to support the third.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Contrasting present circumstances with past circumstances', text: 'The argument does not make any comparison between different time periods. It compares different *locations* (planets), not different times.', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(D) Questioning an assumption', text: 'The argument presents direct evidence to rule out possibilities. It does not identify or attack a hidden premise in anyone\'s argument.', badge: 'Wrong Action', badgeColor: 'red' },
      { title: '(E) Abstracting a general principle from specific data', text: 'The argument works in the opposite direction: it applies known scientific principles (about gravity) to explain a specific event. It does not derive a general principle from the meteorite data.', badge: 'Wrong Direction', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Wrong Answer Analysis — Trap Types' },
    { type: 'paragraph', text: "Understanding the trap patterns helps you eliminate wrong answers more quickly in future questions:" },

    { type: 'table', headers: ['Option', 'Trap Type', 'Why It Fails'], rows: [
      ['(A)', '**Wrong Method**', 'Describes a counterexample strategy — but no general claim is being disproved with a specific instance'],
      ['(C)', '**Wrong Scope**', 'Describes a temporal comparison — but the argument compares locations, not time periods'],
      ['(D)', '**Wrong Action**', 'Describes challenging an assumption — but the argument presents positive evidence, not an assumption attack'],
      ['(E)', '**Wrong Direction**', 'Describes inductive reasoning (specific → general) — but the argument works deductively (general principles → specific case)'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Distinguishing Process of Elimination from Similar Methods' },
    { type: 'paragraph', text: "Process of Elimination can be confused with several other methods. Here is how to tell them apart:" },

    { type: 'table', headers: ['Feature', 'Process of Elimination', 'Counterexample', 'Alternative Explanation'], rows: [
      ['**Goal**', 'Support a conclusion by being the last option standing', 'Disprove a general claim with a specific case', 'Replace one proposed cause with another'],
      ['**How it works**', 'Lists possibilities, rejects all but one', 'Provides a single case that violates a rule', 'Offers a different cause for the same effect'],
      ['**Number of options considered**', 'Three or more (usually)', 'Not applicable — attacks a single claim', 'Two (the original explanation vs. the alternative)'],
      ['**The conclusion is supported because...**', '...it is the only option left', '...the opposing claim is proven false', '...the new cause better fits the evidence'],
      ['**Key structural signal**', 'A finite list + systematic rejection', 'Universal claim + specific exception', 'Same observed effect + different proposed cause'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Additional Examples of Elimination Language' },
    { type: 'paragraph', text: "Here are more examples showing how Process of Elimination arguments appear in LSAT-style stimuli:" },

    { type: 'breakdown', labels: { title: 'Example Type', text: 'Illustration' }, items: [
      { title: 'Medical Diagnosis', text: '**Stimulus pattern:** "The patient\'s symptoms could be caused by infection, allergy, or autoimmune disorder. Blood tests rule out infection. Allergy testing was negative. The condition must therefore be autoimmune."\n**Signal:** Limited candidate set + test-based elimination.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Historical Explanation', text: '**Stimulus pattern:** "The artifact could have been created by civilization A, B, or C. Carbon dating places it after civilization A declined. Its style is inconsistent with civilization C. Therefore, it was likely created by civilization B."\n**Signal:** Temporal and stylistic evidence eliminates alternatives.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Logical Deduction', text: '**Stimulus pattern:** "Either the witness is lying, misremembering, or telling the truth. Forensic evidence corroborates the details she described, ruling out misremembering. She has no motive to lie. Therefore, she is telling the truth."\n**Signal:** Exhaustive options + evidence-based rejection.', badge: 'Less Common', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Process of Elimination always starts with a finite, exhaustive list of options.** If you don't see a clearly defined set of possibilities, the method is probably not elimination.\n• **Each premise provides a reason to reject one option.** Look for transition words like \"but,\" \"however,\" \"nor,\" and \"not\" that signal each elimination.\n• **The conclusion is the last option standing.** It is supported not by positive evidence for it, but by the failure of all alternatives.\n• **The hidden vulnerability** of every elimination argument is the assumption that the candidate set is complete. Flaw and Weaken questions often attack this assumption.\n• **Distinguish from counterexample** (disproves a general rule) and **alternative explanation** (replaces one cause with another). Elimination considers *multiple* options and rejects all but one." },
  ]
};
