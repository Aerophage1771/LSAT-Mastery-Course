import { Lesson } from '../../types';

export const Lesson2b_WorkedExamples: Lesson = {
  id: '12-2b',
  title: 'Worked Examples',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Wrong answers on Principle-Strengthen questions fail in predictable ways. Recognizing these traps lets you eliminate quickly and with confidence.',
    },
    {
      type: 'table',
      headers: ['Trap Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**The Contradiction**',
          "A principle that justifies the *opposite* of the argument's conclusion. If applied, it would undermine, not support, the reasoning.",
          'Check the direction: does this principle support or attack the conclusion? If it leads to the opposite judgment, eliminate immediately.',
        ],
        [
          '**The Scope Shift**',
          'A principle that sounds relevant but applies to a different agent (company vs. consumer), concept (punishment vs. legality), or situation (individual vs. government).',
          "Compare the principle's subject to the argument's. If the principle addresses a different actor or a different dimension of the issue, it does not bridge the gap.",
        ],
        [
          '**The Premise Restatement**',
          'A choice that merely repeats or generalizes a premise without connecting it to the conclusion. It describes the "is" but doesn\'t justify the "ought."',
          'Ask: "Does this choice connect the evidence to the conclusion, or does it just restate the evidence in more general terms?" If it only covers the premises, it is not a justifying principle.',
        ],
        [
          '**The Mistaken Reversal**',
          "A principle that gets the logical relationship backward. If the argument's logic is P → Q, this trap offers Q → P.",
          'Diagram the direction. The principle must flow in the same direction as the argument: from the type of evidence to the type of conclusion, not backward.',
        ],
        [
          '**The Partial Justification**',
          'A principle that supports a minor part of the argument but fails to bridge the *main* logical leap to the final conclusion.',
          'Ask: "Does this principle justify the main conclusion, or just an intermediate step?" If it only supports part of the reasoning, it is insufficient.',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Worked Example' },
    {
      type: 'paragraph',
      text: "Let's apply all five steps to a complete Principle-Strengthen question from start to finish.",
    },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A pharmaceutical company recently discovered that one of its widely used medications has a rare but serious side effect. The company\'s executives decided not to issue a public recall, reasoning that the side effect occurs in fewer than one in ten thousand patients and that a recall would cause widespread panic among the millions of people currently taking the medication. A consumer advocate argues that this decision was irresponsible."',
    },
    {
      type: 'paragraph',
      text: "This example works well because the advocate's conclusion is evaluative, so the missing support has to be a principle about what companies owe the public when they know about serious product risks.",
    },

    { type: 'h3', text: 'Applying the 5-Step Method' },

    {
      type: 'process',
      title: 'Step-by-Step Walkthrough',
      steps: [
        "**Step 1 - Find the Conclusion:**\n• **Conclusion (Consumer Advocate):** The company's decision not to recall was irresponsible.\n• **Evidence:** The medication has a known serious side effect. The company chose not to disclose/recall because the side effect is rare and a recall would cause panic.\n• **Core Logic:** A company knows about a serious risk -> company chose not to disclose -> this was irresponsible.",
        '**Step 2 - Identify the Logical Leap:**\nThe evidence establishes that the company *knew* about a serious side effect and chose not to inform the public. The conclusion is that this was *irresponsible*. The leap is from **"chose not to disclose known risk information"** to **"acted irresponsibly."** This is a classic **Fact -> Value** leap: moving from a factual description of the company\'s behavior to a moral evaluation of it. The argument assumes a principle about disclosure obligations.',
        '**Step 3 - Pre-phrase the Principle:**\n"If a company knows about a serious risk associated with its product, it has an obligation to disclose that risk to the public, regardless of how rare the risk is." This principle, if valid, would make the company\'s non-disclosure irresponsible by definition.',
        '**Step 4 - Complete the Application:**\n• **Trigger:** A company knows about a serious product risk and withholds warning information.\n• **Case Facts:** The company knew about a rare but serious side effect and chose not to disclose it.\n• **Bridge:** Those facts satisfy the trigger because rarity does not erase the duty to warn about serious known risk.\n• **Verdict:** The company acted irresponsibly.\nThis is what makes the question feel pseudo-sufficient: once the right rule is applied, the conclusion is nearly complete, even though the answer remains a broad principle rather than a custom premise.',
        '**Step 5 - Match the Answer:**\nScan for the choice that matches our pre-phrase about disclosure obligations. The correct principle must say that rarity does not cancel the duty to warn people about a known serious risk.',
      ],
    },

    { type: 'h3', text: 'Why the Principle Fits' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: "The argument needs a rule about disclosure, not a rule about compensation, regulatory procedure, or shareholder value. Once you adopt the principle that known serious side effects must be disclosed regardless of rarity, the advocate's criticism follows directly. Principle-Strengthen questions often turn on this exact move: convert a factual description of conduct into a judgment by supplying the governing norm.",
    },
  ],
  alternates: {
    annotated: {
      label: 'Annotated',
      content: [
        { type: 'h3', text: 'Annotated Walkthrough' },
        {
          type: 'blockquote',
          text: '"A pharmaceutical company recently discovered that one of its widely used medications has a rare but serious side effect. The company\'s executives decided not to issue a public recall, reasoning that the side effect occurs in fewer than one in ten thousand patients and that a recall would cause widespread panic among the millions of people currently taking the medication. A consumer advocate argues that this decision was irresponsible."',
        },
        {
          type: 'breakdown',
          labels: { title: 'Sentence', text: 'Role' },
          items: [
            {
              title: 'S1: Company discovered a rare but serious side effect.',
              text: 'Key evidence — establishes that the company has knowledge of a real risk.',
              badge: 'Premise',
              badgeColor: 'blue',
            },
            {
              title: 'S2: Executives decided not to issue a public recall.',
              text: 'Action under evaluation — this is what the advocate will judge.',
              badge: 'Action',
              badgeColor: 'slate',
            },
            {
              title: 'S3: Side effect occurs in fewer than 1 in 10,000; recall would cause panic.',
              text: 'Company\'s justification — the rarity defense and the panic defense.',
              badge: 'Defense',
              badgeColor: 'indigo',
            },
            {
              title: 'S4: A consumer advocate argues this decision was irresponsible.',
              text: 'Conclusion — a moral evaluation rejecting the company\'s justification.',
              badge: 'Conclusion',
              badgeColor: 'green',
            },
          ],
        },
        { type: 'h4', text: '5-Step Process on This Stimulus' },
        {
          type: 'process',
          title: 'Applied Method',
          steps: [
            '**Find Conclusion:** The company\'s non-disclosure was irresponsible (S4).',
            '**Identify Leap:** Evidence says "knew about risk and chose silence." Conclusion says "irresponsible." The leap is Fact -> Value: from a description of conduct to a moral evaluation.',
            '**Abstract Principle:** "If a company knows about a serious risk and withholds it from the public, the company acts irresponsibly — regardless of how rare the risk is."',
            '**Complete Application:** Trigger = company knows serious risk + withholds warning. Case facts = S1 + S2. Bridge = rarity does not cancel the duty to warn. Verdict = irresponsible.',
            '**Match Answer:** Look for a disclosure-obligation principle. Reject answers about compensation, regulatory procedure, or shareholder value.',
          ],
        },
        {
          type: 'table',
          headers: ['Trap Type', 'How It Would Appear Here'],
          rows: [
            ['**Contradiction**', 'A principle that excuses non-disclosure when the risk is rare — this supports the *company*, not the advocate.'],
            ['**Scope Shift**', 'A principle about consumer responsibility to research medications — wrong agent.'],
            ['**Premise Restatement**', 'An answer that merely says the medication has a side effect — restates evidence, not a rule.'],
            ['**Reversal**', 'A principle saying irresponsible companies tend to hide risks — goes from judgment to behavior, not behavior to judgment.'],
            ['**Partial Justification**', 'A principle about corporate transparency in general, but not specifically connecting knowledge of risk to disclosure duty.'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Key Takeaway',
          text: 'The argument needs a rule about disclosure, not about compensation, regulation, or shareholder value. Once you adopt the principle that known serious risks must be disclosed regardless of rarity, the advocate\'s criticism follows directly.',
        },
      ],
    },
  },
};
