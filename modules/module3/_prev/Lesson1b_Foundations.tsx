import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '3-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Method of Reasoning \u2014 Foundations' },

    { type: 'h2', text: 'Core Concept: Strategy vs. Content' },
    {
      type: 'paragraph',
      text: "The fundamental skill for Method of Reasoning questions is separating the argument's **strategy** (the abstract logical pattern) from its **content** (the specific subject matter). The correct answer will always describe the logical pattern, not restate the conclusion.",
    },

    { type: 'paragraph', text: 'Consider this everyday argument:' },
    {
      type: 'blockquote',
      text: '"My car won\'t start. Since the battery and the starter are both new, the problem must be a faulty alternator."',
    },

    {
      type: 'breakdown',
      labels: { title: 'Layer', text: 'Analysis' },
      items: [
        {
          title: 'Content (What)',
          text: 'The argument is about a car, a battery, a starter, and an alternator. These are the specific nouns and facts.',
          badge: 'Surface',
          badgeColor: 'slate',
        },
        {
          title: 'Strategy (How)',
          text: 'The argument reaches its conclusion by **ruling out alternative causes**. Two possible explanations are eliminated, leaving only one option. This is the abstract pattern.',
          badge: 'Deep',
          badgeColor: 'indigo',
        },
      ],
    },

    {
      type: 'paragraph',
      text: 'The correct answer for a Method question about this stimulus would look like *"The argument supports a conclusion by ruling out other possible causes,"* not *"The argument concludes that the alternator is broken."* You must describe the **pattern** of reasoning, not restate the conclusion.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Abstract Description Technique',
      text: 'Train yourself to translate every argument into an abstract description before looking at answer choices. Strip out the nouns and replace them with placeholders:\n\n\u2022 *"The car won\'t start \u2192 The battery and starter are new \u2192 Must be the alternator"*\n\u2022 Becomes: *"Identifies a set of possible causes, eliminates all but one, and concludes that the remaining option must be correct."*\n\nThis mental translation is the single most important skill for Method of Reasoning questions.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Method vs. Argument Part' },
    {
      type: 'paragraph',
      text: 'Method of Reasoning and Argument Part (Module 1) are closely related but ask fundamentally different things. Understanding this distinction prevents confusion on test day:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Method of Reasoning (Module 3)', 'Argument Part (Module 1)'],
      rows: [
        [
          '**What it asks**',
          'Describe the overall logical strategy',
          'Identify the role of a *specific quoted sentence*',
        ],
        ['**Target**', 'The argument as a whole (describe the design)', 'One particular sentence (label its function)'],
        ['**Answer choices**', 'Abstract strategy descriptions', 'Abstract role descriptions'],
        [
          '**Example answer**',
          '"Draws an analogy to show the reasoning is flawed"',
          '"It is a premise offered in support of the main conclusion"',
        ],
        [
          '**Core skill**',
          'Translating concrete reasoning into abstract patterns',
          'Mapping the flow of support and labeling each part',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Connection',
      text: 'Think of it this way: Argument Part asks *"What does this sentence do?"* Method of Reasoning asks *"How does the whole argument work?"* Argument Part labels the bricks; Method of Reasoning describes the architecture.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Method Categories \u2014 Preview' },
    {
      type: 'paragraph',
      text: 'Most arguments on the LSAT use one of a small number of recurring strategies. You will study each in depth in later lessons. Here is a quick preview of the major categories with their approximate frequencies:',
    },

    {
      type: 'table',
      headers: ['Method Category', 'Frequency', 'What It Does', 'Example Indicator Language'],
      rows: [
        [
          '**Argument by Analogy**',
          '~23%',
          'Compares two situations to transfer a conclusion from one to the other',
          '"just as," "similarly," "it would be like," "by that logic"',
        ],
        [
          '**Highlighting Consequences**',
          '~17%',
          'Argues for/against a proposal by predicting outcomes',
          '"would result in," "would lead to," "suppose X were true"',
        ],
        [
          '**Causal Reasoning**',
          '~14%',
          'Offers or challenges a cause for an observed effect',
          '"is caused by," "is the result of," "an alternative explanation"',
        ],
        [
          '**Challenging an Assumption**',
          '~11%',
          'Exposes and attacks a hidden premise',
          '"assumes without justification," "presupposes," "takes for granted"',
        ],
        [
          '**Applying a Principle**',
          '~8%',
          'Moves from a general rule to a specific case (or vice versa)',
          '"according to the principle," "by definition," "it follows from the rule"',
        ],
        [
          '**Process of Elimination**',
          '~6%',
          'Rules out all but one option',
          '"the only remaining possibility," "rules out," "cannot be X because"',
        ],
        [
          '**Counterexample**',
          '~5%',
          'Disproves a universal claim with a single contrary instance',
          '"but consider the case of," "there is at least one instance where"',
        ],
        [
          '**Appeal to Authority**',
          '~4%',
          'Cites an expert or authoritative source',
          '"experts have shown," "according to researchers," "studies demonstrate"',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Indicator Words & Phrases for Methods' },
    {
      type: 'paragraph',
      text: 'Just as premise and conclusion indicators help you map argument structure (Modules 1\u20132), certain phrases signal which *method* an argument is using. Train yourself to spot these:',
    },

    {
      type: 'table',
      headers: ['Indicator Language', 'Likely Method'],
      rows: [
        ['"Just as X, so too Y" / "Similarly" / "By that logic"', '**Analogy**'],
        ['"But consider the case of..." / "For example, [specific instance]"', '**Counterexample**'],
        ['"This would lead to..." / "The result would be..."', '**Highlighting Consequences**'],
        ['"The only remaining option is..." / "Since it cannot be X..."', '**Process of Elimination**'],
        [
          '"An alternative explanation is..." / "Could instead be caused by..."',
          '**Alternative Explanation** (Causal)',
        ],
        ['"This assumes that..." / "Takes for granted that..."', '**Challenging an Assumption**'],
        ['"According to the principle..." / "By definition..."', '**Applying a Principle**'],
        ['"Experts have determined..." / "Research shows..."', '**Appeal to Authority**'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Indicators Are Clues, Not Guarantees',
      text: 'Indicator phrases narrow your search, but always verify by examining the argument\'s actual logical structure. A phrase like "for example" could introduce a counterexample *or* a supporting illustration \u2014 context determines which method is being used.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Method of Reasoning Question' },
    {
      type: 'paragraph',
      text: "Let's put everything together with a concrete practice question. Read the stimulus, identify the strategy, and translate it into abstract terms before looking at the answer choices.",
    },

    {
      type: 'paragraph',
      text: "Consider a meteorologist who rejects the town council's explanation for a water shortage and replaces it with a different cause: population growth rather than low rainfall. That is the kind of move Method of Reasoning wants you to describe. The topic is water usage, but the method is 'offer an alternative explanation for the same phenomenon.'",
    },

    { type: 'h3', text: 'Walkthrough' },
    {
      type: 'process',
      title: 'Solving Step by Step',
      steps: [
        '**Identify the structure:** The town council says low rainfall caused the shortage. The meteorologist disagrees and offers a different cause: population growth.',
        '**Translate to abstract terms:** The argument rejects one proposed cause (rainfall) by weakening the evidence for it, then offers a different cause (population growth) for the same observed effect (water shortage).',
        '**Prephrase:** "The meteorologist provides an alternative explanation for the same phenomenon."',
        '**Match the description:** The correct answer will describe the author as rejecting one proposed cause and supplying another, not as questioning data quality, drawing an analogy, or discussing consequences.',
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why This Snapshot Matters',
      text: "Method of Reasoning is easiest when you can restate the author's move in one abstract sentence. Here, the right abstraction is not about rainfall or population specifically; it is about substituting one explanation for another.",
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "\u2022 Method of Reasoning is a **descriptive** question type. You are not evaluating whether the argument is good or bad \u2014 you are describing *how* it works.\n\u2022 The core skill is **separating strategy from content**: translate the argument's specific nouns and facts into an abstract logical pattern.\n\u2022 Method of Reasoning is the bridge between identification skills (Modules 1\u20132) and evaluation skills (Flaw, Weaken, Strengthen).\n\u2022 Most arguments use one of ~8 recurring strategies: Analogy, Consequences, Causal Reasoning, Challenging Assumptions, Applying Principles, Elimination, Counterexample, and Appeal to Authority.\n\u2022 Indicator phrases help you spot the method, but always verify by examining the logical structure of the argument.",
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Foundations \u2014 At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Key Distinction', 'Why It Matters'],
          rows: [
            ['**Strategy vs. Content**', 'Strategy = the abstract logical pattern; Content = the specific nouns and facts', 'The correct answer describes the pattern, never restates the conclusion'],
            ['**Method vs. Argument Part**', 'Method = how the *whole argument* works; Argument Part = the role of *one sentence*', 'Argument Part labels bricks; Method describes the architecture'],
            ['**Common Method Categories**', 'Analogy (~23%), Consequences (~17%), Causal (~14%), Assumption (~11%), Principles (~8%), Elimination (~6%), Counterexample (~5%)', 'Most arguments fall into a handful of recurring patterns \u2014 learn the families first'],
          ],
        },
        { type: 'h4', text: 'Quick Example' },
        {
          type: 'blockquote',
          text: '"A meteorologist rejects the town council\'s explanation for a water shortage and offers population growth as the real cause."',
        },
        {
          type: 'paragraph',
          text: 'The abstract description: *"offers an alternative explanation for the same phenomenon."* The topic is water usage, but the method is about substituting one cause for another.',
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Key Takeaways',
          text: '\u2022 Method of Reasoning is **descriptive** \u2014 you describe *how* an argument works, not whether it is good or bad.\n\u2022 The core skill is **translating concrete content into an abstract logical pattern**.\n\u2022 Indicator phrases (e.g., "just as," "the only remaining possibility") narrow your search but always verify against the argument\'s actual structure.',
        },
      ],
    },
  },
};
