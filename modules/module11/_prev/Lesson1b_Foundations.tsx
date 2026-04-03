import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '11-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Necessary vs. Strengthener vs. Sufficient' },
    {
      type: 'paragraph',
      text: 'The core Module 12 upgrade is a **force-standard model**. Before you read the answer choices, decide what level of support the argument actually needs. Many wrong answers are attractive because they talk about the right topic but sit at the wrong force level.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Strengthener', 'Necessary Assumption', 'Sufficient Assumption'],
      rows: [
        [
          'What the answer does',
          'Makes the conclusion **more plausible**',
          'States something the argument **must have**',
          'Adds enough to **guarantee** the conclusion',
        ],
        [
          'Force standard',
          'Helpful but optional',
          'Required but not enough by itself',
          'Enough, and often stronger than the argument strictly needs',
        ],
        [
          'Best test',
          'Does this materially support the conclusion?',
          'If denied, does the argument collapse?',
          'Premises + answer = conclusion proven',
        ],
        [
          'Typical wording',
          '"makes more likely," "supports," "strengthens"',
          '"depends on," "requires," "assumes," "presupposes"',
          '"if assumed," "follows logically," "properly inferred"',
        ],
        [
          'Common trap in Module 12',
          'A nice extra fact that helps but is not fatal if false',
          'A statement that feels modest because it only protects one weak point',
          'A bridge so strong that it over-completes the argument',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Use **PT-103-S-1-Q-4 (The Morale-Production Link)** as the clean anchor. A helpful strengthener might say flextime usually boosts output. A sufficient answer might guarantee that any morale increase always raises production. But the actual Necessary Assumption is weaker and more precise: morale **could** lead to increased production. That is the minimum bridge the argument requires.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Set the Force Standard First',
      text: 'Do **not** start Necessary Assumption by asking, "Which answer sounds best?" Start by asking, "**What would be fatal if false?**" That question keeps you from choosing a mere strengthener and from overreaching to a sufficient-assumption answer that goes beyond what the argument actually needs.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Negation Test' },
    {
      type: 'paragraph',
      text: 'The Negation Test is the **best confirmation tool** for Necessary Assumption. It is not the first thing you do and it is not a substitute for understanding the gap. First set the force standard and diagnose the kind of reasoning the author is using. Then use negation to confirm your finalist.',
    },
    {
      type: 'process',
      title: 'How to Apply the Negation Test',
      steps: [
        '**Get down to one or two serious contenders** using gap analysis and force standard.',
        '**Take the answer choice** you want to test.',
        '**Logically negate it.** Turn the statement into its opposite. Be careful to negate the *logic*, not just the verb. "All X are Y" becomes "Some X are not Y" (not "No X are Y"). "The car is blue" becomes "The car is not blue."',
        '**Insert the negated statement** as a new fact in the argument. Treat it as true.',
        '**Evaluate the impact.** Ask: "Does the argument still have the minimum support it needs?" If the conclusion is destroyed or rendered nonsensical, the original statement was **necessary**. If the conclusion still has a live path to survival, even if weaker, the statement was **not** necessary.',
      ],
    },
    {
      type: 'paragraph',
      text: 'The key word is **destroys**. Slight weakening is not enough. For the Negation Test to confirm a necessary assumption, the negation must make the argument\'s conclusion illogical, unsupported, or self-contradictory. If the negated answer merely removes a boost, you have found a strengthener, not a required assumption.',
    },

    { type: 'h4', text: 'Negation Reference' },
    {
      type: 'breakdown',
      labels: { title: 'Original Statement', text: 'Logical Negation' },
      items: [
        { title: '"All X are Y"', text: '"Some X are not Y" (not "No X are Y" \u2014 that is too strong)' },
        { title: '"Some X are Y"', text: '"No X are Y"' },
        { title: '"X always causes Y"', text: '"X does not always cause Y"' },
        { title: '"X is the only way to achieve Y"', text: '"X is not the only way to achieve Y"' },
        { title: '"No X are Y"', text: '"Some X are Y"' },
        { title: '"X can lead to Y"', text: '"X cannot lead to Y"' },
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Common Negation Mistake',
      text: 'The most common error is negating too strongly. The negation of "All dogs are mammals" is **"Some dogs are not mammals"** \u2014 not "No dogs are mammals." Over-negating will make almost any answer choice seem necessary, which defeats the purpose of the test. Always use the **minimal logical opposite**, and never negate all five answer choices before you understand the gap.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Reasoning Family Diagnostics' },
    {
      type: 'paragraph',
      text: 'After you set the force standard, classify the gap into a **reasoning family**. This keeps your pre-phrase concrete and ties the module doctrine to real validated questions rather than abstract slogans.',
    },
    {
      type: 'table',
      headers: ['Family', 'Ask This First', 'What the NA Must Do', 'Report-Backed Anchor Pairing'],
      rows: [
        [
          '**Link / Bridge**',
          'What connection between the evidence and the conclusion must exist?',
          'Supply the minimum bridge the author needs',
          '`PT-103-S-1-Q-4` Morale-Production Link',
        ],
        [
          '**Scope / Exhaustiveness**',
          'What outside option, middle ground, or third party would wreck the conclusion?',
          'Block the outsider or show the stated set is exhaustive',
          '`PT-127-S-1-Q-19` Scope Limitation; `PT-126-S-3-Q-8` False Dichotomy',
        ],
        [
          '**Source / Standard**',
          'Is the author smuggling in a rule about credibility, rights, or what counts as success?',
          'State the hidden rule the conclusion depends on',
          '`PT-121-S-4-Q-10` Vested Interest',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Use the Family Before the Test',
      text: 'If the gap is about an **outside option**, do not waste time negating answers that merely add support. If the gap is about a **hidden standard**, do not choose an answer that just gives a new fact. Family diagnosis narrows the field before the Negation Test does the final confirmation.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common NA Patterns' },
    {
      type: 'paragraph',
      text: 'While every NA question has a unique argument, the logical gaps tend to fall into a small number of recurring structural patterns. Learning to recognize these patterns gives you a head start on identifying the gap and prephrasing the correct answer.',
    },
    {
      type: 'table',
      headers: ['Pattern', 'How It Works', 'What the Correct Answer Does'],
      rows: [
        [
          '**The Key Ingredient**',
          'The premises establish an intermediate benefit, but the conclusion is about an ultimate goal. The argument never states that the intermediate benefit contributes to the ultimate goal.',
          'States that the intermediate benefit is *valuable for* or *connected to* the ultimate goal.',
        ],
        [
          '**The Definitional Gap**',
          'The conclusion introduces a term or category that differs from the terms in the premises. The argument treats two different concepts as if they are incompatible or equivalent without stating why.',
          'Provides the definitional bridge \u2014 states that the two concepts are incompatible, equivalent, or related in the way the argument assumes.',
        ],
        [
          '**The Only Way (Blocking Alternatives)**',
          'The argument identifies one factor as the cause of an effect, then concludes that removing that factor eliminates the effect entirely. No alternative causes are considered.',
          'States that the identified factor is the *only effective* way to produce the effect \u2014 no alternatives exist.',
        ],
        [
          '**The Closed Universe**',
          'The argument eliminates candidates from a small group, then concludes the remaining candidate must be chosen. It never states that the candidates are the only options.',
          'States that the pool of candidates is limited to the defined group \u2014 no outside options exist.',
        ],
        [
          '**The Source Fallacy**',
          "The argument dismisses a claim based on the source's bias or motives, rather than the claim's content. It assumes that a biased source cannot make valid arguments.",
          'Establishes the general principle that arguments from biased sources are invalid \u2014 that motive determines quality.',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Each of these patterns is explored in depth in the drill lessons that follow. For now, notice that NA answers tend to be **modest, defensive statements** \u2014 they protect the argument from collapse rather than proving the conclusion. They block fatal objections, establish minimum connections, or close off alternatives that would destroy the logic.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Necessary Assumption question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A new city ordinance requires all restaurants to post calorie counts on their menus. The city council argues that this will reduce obesity rates, because studies show that when people are informed about calorie content, they tend to choose lower-calorie options."',
    },
    {
      type: 'paragraph',
      text: 'This is a clean Necessary Assumption example because the evidence and conclusion are one step apart: lower-calorie choices only help the argument if they actually contribute to lower obesity.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: '**Conclusion:** The calorie-posting ordinance will reduce obesity rates.\n\n**Premises:**\n1. The ordinance requires calorie counts on menus.\n2. Studies show that calorie information leads people to choose lower-calorie options.\n\nThe argument assumes a chain: calorie posting \u2192 people choose lower-calorie options \u2192 obesity rates drop.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The premises establish that calorie posting leads to **lower-calorie choices**. But the conclusion is about **obesity reduction**. Are these the same thing? Not necessarily. The argument never states that choosing lower-calorie restaurant options actually contributes to reducing obesity. This is the classic "Key Ingredient" pattern: the evidence is about an intermediate benefit (lower-calorie choices) and the conclusion is about an ultimate goal (reduced obesity).',
    },

    { type: 'h4', text: 'Step 3: Set the Force Standard and Confirm' },
    {
      type: 'paragraph',
      text: "First notice the force level: the argument does **not** need a sweeping rule that lower-calorie choices always reduce obesity. It needs the smaller claim that those choices can matter for obesity at all. Now negate that bridge: suppose lower-calorie restaurant choices cannot contribute to lower obesity rates. If that negation were true, the council's logic would collapse immediately. Menu labels could still change ordering behavior, but that intermediate change would no longer support the conclusion about obesity. By contrast, questions about the council's authority, whether calories are the most important nutrition metric, or what some restaurants already do leave the core chain intact.",
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: "**1. The NA doesn't have to PROVE the conclusion \u2014 it just has to be REQUIRED for the argument not to collapse.** Many students look for the strongest or most helpful answer. On NA, look for the answer whose denial is *fatal*.\n\n**2. Set the force standard before you negate anything.** First decide whether the argument needs a mere strengthener, a required assumption, or a full sufficient bridge. Module 12 lives in the middle category: required.\n\n**3. The Negation Test is your confirmation tool, not your starting point.** Use it after gap work and family diagnosis. If the argument merely weakens, you have not found the necessary assumption.\n\n**4. Reasoning-family diagnostics speed everything up.** `PT-103-S-1-Q-4` anchors the Link / Bridge family. `PT-127-S-1-Q-19` and `PT-126-S-3-Q-8` anchor Scope / Exhaustiveness. `PT-121-S-4-Q-10` anchors Source / Standard.\n\n**5. NA answers tend to be modest, not dramatic.** Sufficient Assumption answers are often sweeping rules or principles. Necessary Assumption answers are often narrow, defensive statements that prevent a specific objection. Don't reject an answer for being too obvious or too cautious.\n\n**6. Distinguish NA from SA and Strengthen.** NA asks what the argument *needs*. SA asks what would *guarantee* the conclusion. Strengthen asks what would *help* the conclusion. The same argument could have different correct answers for each question type.",
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Core Concepts' },
        {
          type: 'table',
          headers: ['Concept', 'Definition', 'Key Distinction'],
          rows: [
            [
              'Necessary vs. Sufficient',
              'A necessary assumption is required but may not complete the proof; a sufficient assumption closes the gap entirely.',
              'SA answers guarantee the conclusion. NA answers merely prevent collapse.',
            ],
            [
              'The Negation Test',
              'Negate the answer choice. If the argument collapses, the answer is necessary; if the argument survives, it is not.',
              'On SA questions, use negation to confirm — but the primary test is whether premises + answer = conclusion proven.',
            ],
            [
              'Reasoning Family Diagnostics',
              'Classify the gap as Link/Bridge, Scope/Exhaustiveness, or Source/Hidden Rule before evaluating choices.',
              'Family diagnosis narrows the field; pattern recognition speeds the pre-phrase.',
            ],
          ],
        },
        { type: 'h3', text: 'Common Patterns' },
        {
          type: 'table',
          headers: ['Pattern', 'Signal'],
          rows: [
            ['Key Ingredient', 'Evidence supports intermediate benefit; conclusion is about ultimate goal'],
            ['Definitional Gap', 'Two concepts treated as equivalent or incompatible without justification'],
            ['Only Way (Blocking Alternatives)', 'One factor assumed to be the sole cause'],
            ['Closed Universe', 'Conclusion picks from a named set; outsiders not excluded'],
            ['Source Fallacy', 'Claim dismissed based on who said it, not its content'],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'blockquote',
          text: '"A new city ordinance requires all restaurants to post calorie counts on their menus. The city council argues that this will reduce obesity rates, because studies show that when people are informed about calorie content, they tend to choose lower-calorie options."',
        },
        {
          type: 'paragraph',
          text: 'The evidence is about lower-calorie choices; the conclusion is about obesity reduction. The assumption bridges that gap: choosing lower-calorie options must contribute to reducing obesity.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Key Takeaways:**\n- Set the force standard before evaluating answer choices.\n- The Negation Test confirms — it does not replace gap analysis.\n- NA answers are modest and defensive; SA answers are complete and gap-closing.',
        },
      ],
    },
  },
};
