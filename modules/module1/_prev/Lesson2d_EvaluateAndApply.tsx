import { Lesson } from '../../types';

export const Lesson2d_EvaluateAndApply: Lesson = {
  id: '1-2d',
  title: 'Evaluate & Apply',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step 5: Evaluate Answer Choices' },
    {
      type: 'paragraph',
      text: 'Scan the five answer choices for the one that matches your prephrase. LSAT answer choices describe roles in abstract, formal language, so you need to translate each choice into plain English and compare it to your prephrase.',
    },

    { type: 'h4', text: 'The Two-Part Check' },
    {
      type: 'paragraph',
      text: 'Every Argument Part answer choice has two components. Both must be correct for the answer to be right:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'What to Verify' },
      items: [
        {
          title: '1. The Role Label',
          text: 'Does the answer correctly identify the **type** of role? (premise, conclusion, opposing viewpoint, etc.) If the answer says "supports" but the target is the conclusion, the role is wrong.',
          badge: 'Check 1',
          badgeColor: 'indigo',
        },
        {
          title: '2. The Relationship Description',
          text: 'Does the answer correctly describe the **specific relationship**? If the answer says "supports the claim that [X]," verify that the target actually supports *that specific claim*. A correct role label with an inaccurate description is still a wrong answer.',
          badge: 'Check 2',
          badgeColor: 'blue',
        },
      ],
    },

    { type: 'h4', text: 'Functional Description vs. Merely True Description' },
    {
      type: 'paragraph',
      text: 'A correct Argument Part answer must describe what the sentence **does** in the argument, not merely say something accurate about its topic. "This sentence mentions a safer alternative" may be true. But unless the answer also tells you whether the sentence is support, a concession, a hypothetical consequence, or a target of refutation, it is not precise enough.',
    },
    {
      type: 'table',
      headers: ['Answer style', 'Example wording', 'How to judge it'],
      rows: [
        [
          'Merely true description',
          '"It mentions a measure related to safety."',
          'May be factually accurate about the sentence, but it does not identify the sentence\'s logical job.',
        ],
        [
          'Functional description',
          '"It states a hypothetical consequence that helps support a conclusion about motive."',
          'This is what you want: role + relationship + direction of support.',
        ],
      ],
    },

    { type: 'h4', text: 'Translating Abstract Language' },
    {
      type: 'table',
      headers: ['Abstract Phrasing', 'Plain English'],
      rows: [
        ['"A claim that the argument as a whole is designed to establish"', 'Main Conclusion'],
        ['"A view that other statements in the argument are intended to support"', 'Main Conclusion'],
        ['"Evidence offered in support of the argument\'s main claim"', 'Premise'],
        ['"An intermediate conclusion drawn to support the main conclusion"', 'Intermediate Conclusion'],
        ['"A position that the argument calls into question"', 'Opposing Viewpoint'],
        ['"A point that is granted in order to argue for a different claim"', 'Concession'],
        ['"Background information used to set up the argument"', 'Context'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Eliminate, Then Confirm',
      text: 'Start by eliminating answers that fail the Role Label check (Check 1). This usually removes 2–3 choices quickly. Then apply the Relationship Description check (Check 2) to the remaining candidates. This two-pass approach saves time.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'The hardest answers are ones where the role label is correct but the relationship description is subtly wrong. For example, an answer might correctly call the target a "premise" but say it supports the wrong claim. Always verify the specific nouns and relationships described in the answer choice against the argument.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    { type: 'paragraph', text: "Let's apply all five steps to a single Argument Part question from start to finish." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Film critic: The claim that smartphones have reduced moviegoing is overstated. While it is true that theater attendance has declined since 2015, this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%. Audiences are not avoiding theaters because of their phones; they are avoiding theaters because the experience has become prohibitively expensive. Studios should therefore focus on pricing reform rather than competing with streaming platforms."',
    },
    {
      type: 'paragraph',
      text: "Our target statement is the concession that theater attendance has declined since 2015. The goal is to trace how that admitted fact functions inside the critic's larger argument about causation.",
    },

    { type: 'h3', text: 'Applying the 5-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        '**Step 1 — Find the Target:** The question asks about "the claim that theater attendance has declined since 2015." Locate this in the stimulus: it appears in the second sentence, after "While it is true that..."',
        '**Step 2 — Analyze & Hypothesize:** Read each sentence and tag it:\n• "The claim that smartphones have reduced moviegoing is overstated." → Likely the Main Conclusion (a judgment).\n• "While it is true that theater attendance has declined since 2015..." → Introduced by "While it is true that" — a classic concession indicator. Tag: Likely Concession.\n• "...this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%." → A factual claim providing an alternative explanation. Tag: Likely Premise.\n• "Audiences are not avoiding theaters because of their phones..." → Restates the main claim. Tag: Likely Conclusion (restatement).\n• "Studios should therefore focus on pricing reform..." → A recommendation introduced by "therefore." Tag: Likely Conclusion or Sub-Conclusion.',
        '**Step 3 — Map the Structure:** The Main Conclusion is that smartphones\' impact on moviegoing is overstated. The "therefore" recommendation about pricing reform is a subsidiary/further conclusion. The ticket price data is the key premise. The target sentence ("attendance has declined") is introduced by "While it is true that..." — the author grants this point but then pivots to argue that the cause is prices, not phones. The target is a concession.',
        '**Step 4 — Pinpoint & Prephrase:** The target is a point the author **concedes** — the author admits attendance has declined, but argues this doesn\'t support the smartphone claim. Prephrase: "It is a point the author grants to the other side, which the author then argues is explained by a different cause."',
        '**Step 5 — Evaluate Choices:** Look for language that describes a conceded point rather than a premise, conclusion, or disputed claim. The correct description must capture both pieces of the relationship: the author grants the decline and then redirects the explanation toward ticket prices rather than phones.',
      ],
    },

    { type: 'h3', text: 'Why the Role Is a Concession' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: 'This statement is not the author\'s endpoint and it is not evidence for the smartphone theory. It is a point the critic temporarily gives away so the real fight can shift to causation. When a sentence is introduced with language like "while it is true that," expect a concession: the author accepts one fact, then pivots to a different explanation or conclusion.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'When the Method Gets Hard' },
    {
      type: 'paragraph',
      text: 'Not every argument is a clean three-sentence chain. Here are the most common complications and how to handle them.',
    },

    {
      type: 'breakdown',
      labels: { title: 'Complication', text: 'Strategy' },
      items: [
        {
          title: 'No indicator words anywhere',
          text: 'Rely entirely on the Why Test and content analysis. Ask: "Which statement is the author trying to convince me of?" That is the conclusion. Everything else supports it.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Multiple conclusions',
          text: 'One is the Main Conclusion; the other(s) are Intermediate Conclusions. The Main Conclusion is the one that receives support but does not support any other claim. Use the Why Test on each candidate.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'The conclusion appears first',
          text: 'Position does not determine role. The first sentence can be the conclusion, with all subsequent sentences providing support. Watch for "after all" or "for" in later sentences — these signal premises that support an earlier claim.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Two speakers or viewpoints',
          text: 'Track attribution carefully. Phrases like "some argue" or "critics claim" introduce the opposing view. The author\'s view will follow a pivot word like "but" or "however." The target could belong to either voice.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
        {
          title: 'Very long stimulus (5+ sentences)',
          text: 'Focus on the extremes: the Main Conclusion and the premises. Background and context are important for understanding but rarely change the structural relationships. Map the core chain first, then situate the target.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: 'The 5-Step Method gives you a repeatable process: **Find → Analyze → Map → Prephrase → Evaluate.** Use it inside the broader LR operating system: **Stem first → classify the stimulus → decide whether assumptions matter → anticipate answer shape → choose hunt or elimination mode.**\n\nPrephrasing is the single most important habit when the task is precise. When the credited answer is likely to be only relatively best, switch deliberately into elimination mode instead of forcing a fake prephrase.\n\nEvery answer choice has two parts: the **role label** and the **relationship description**. Both must be correct.\n\nWhen in doubt, apply the Why Test. It is the most reliable structural tool you have.',
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Stimulus' },
        {
          type: 'blockquote',
          text: '"Film critic: The claim that smartphones have reduced moviegoing is overstated. While it is true that theater attendance has declined since 2015, this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%. Audiences are not avoiding theaters because of their phones; they are avoiding theaters because the experience has become prohibitively expensive. Studios should therefore focus on pricing reform rather than competing with streaming platforms."',
        },
        { type: 'h4', text: 'Structural Annotation' },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: '"The claim that smartphones have reduced moviegoing is overstated."',
              text: 'The critic\'s central judgment \u2014 the ultimate claim everything else supports.',
              badge: 'Main Conclusion',
              badgeColor: 'green',
            },
            {
              title: '"While it is true that theater attendance has declined since 2015..."',
              text: 'A fact the author grants to the opposing side before pivoting to a different explanation.',
              badge: 'Concession',
              badgeColor: 'slate',
            },
            {
              title: '"...this decline is largely attributable to rising ticket prices, which have outpaced inflation by 40%."',
              text: 'The key evidence \u2014 an alternative causal explanation supported by a specific statistic.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: '"Audiences are not avoiding theaters because of their phones; they are avoiding theaters because the experience has become prohibitively expensive."',
              text: 'Restates and reinforces the main conclusion by contrasting the two causal theories.',
              badge: 'Main Conclusion (restatement)',
              badgeColor: 'green',
            },
            {
              title: '"Studios should therefore focus on pricing reform rather than competing with streaming platforms."',
              text: 'A practical recommendation that follows from the main conclusion \u2014 a subsidiary conclusion.',
              badge: 'Subsidiary Conclusion',
              badgeColor: 'blue',
            },
          ],
        },
        { type: 'h3', text: 'Method Applied' },
        {
          type: 'process',
          steps: [
            '**Find the Target:** The question asks about "theater attendance has declined since 2015." Locate it in sentence 2, after "While it is true that..."',
            '**Analyze Roles:** Tag each sentence \u2014 judgment, concession, factual premise, restatement, recommendation.',
            '**Map Structure:** The main conclusion is the overstatement claim. The ticket-price data is the key premise. The target sentence is introduced by a concession marker.',
            '**Prephrase:** "A point the author grants to the opposing side, which the author then explains with a different cause."',
            '**Evaluate:** Match the prephrase to an answer describing a conceded fact, not a premise the author uses as direct support.',
          ],
        },
        { type: 'h3', text: 'Trap Table' },
        {
          type: 'table',
          headers: ['Wrong Answer Type', 'Why It Fails'],
          rows: [
            ['Calls it a premise supporting the smartphone claim', 'Wrong direction \u2014 the author argues against the smartphone theory, not for it'],
            ['Calls it the main conclusion', 'The decline is a fact the author acknowledges, not the point the author is trying to prove'],
            ['Calls it background context', 'Close, but misses the concession function \u2014 the author explicitly grants this point then pivots'],
            ['Calls it evidence for the pricing explanation', 'The decline is the phenomenon being explained, not evidence for the explanation itself'],
            ['Describes only the topic without naming the role', 'A merely-true description that fails the functional-description test'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: 'The target is a concession because the author admits the decline is real ("While it is true that...") but immediately redirects the causal explanation from smartphones to ticket prices. The "While it is true" marker is the giveaway.',
        },
      ],
    },
  },
};
