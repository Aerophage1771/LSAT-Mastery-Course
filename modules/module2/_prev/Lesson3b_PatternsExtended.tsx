import { Lesson } from '../../types';

export const Lesson3b_PatternsExtended: Lesson = {
  id: '2-3b',
  title: 'Patterns & Types: Extended',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: '3. The Explanation (Causal Claims)' },
    {
      type: 'paragraph',
      text: "These arguments (~20%) start with a known fact, observation, or puzzle and then seek to explain **why** it is the case. The main conclusion is the proposed cause or reason. The author isn't trying to prove *that* something happened, but *why* it happened.",
    },

    { type: 'h4', text: 'How to Spot It' },
    {
      type: 'process',
      title: 'The Explanation Structure',
      steps: [
        '**The Phenomenon:** The argument opens with a known fact or observation that needs explaining.',
        '**The Explanation (The Conclusion):** The author proposes a cause or reason for the phenomenon. This is the main conclusion.',
        '**Supporting Evidence:** The author provides additional facts that support their proposed explanation.',
      ],
    },

    { type: 'h4', text: 'Example Stimulus' },
    {
      type: 'blockquote',
      text: '"Bird populations in suburban areas have increased over the past twenty years, even as habitat loss from development has accelerated. This increase is best explained by the proliferation of backyard bird feeders, which now appear in over 60% of suburban homes compared to just 15% two decades ago."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Role' },
      items: [
        {
          title: '"Bird populations in suburban areas have increased... even as habitat loss has accelerated."',
          text: 'The phenomenon that needs explaining — a surprising observation.',
          badge: 'Background / Premise',
          badgeColor: 'slate',
        },
        {
          title: '"This increase is best explained by the proliferation of backyard bird feeders..."',
          text: 'The proposed cause — the **main conclusion**. Signaled by "is best explained by."',
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: '"...which now appear in over 60% of suburban homes compared to just 15% two decades ago."',
          text: 'Statistical evidence supporting the proposed explanation.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'h4', text: 'Explanatory Language Indicators' },
    {
      type: 'table',
      headers: ['Causal Conclusion Words', 'Phenomenon Setup Words'],
      rows: [
        ['The reason for this is...', 'Surprisingly / Curiously'],
        ['This is because...', 'Despite this...'],
        ['is caused by / is due to', 'Paradoxically'],
        ['is best explained by...', 'Even though...'],
        ['can be attributed to...', 'While one would expect...'],
        ['is the result of...', 'It is puzzling that...'],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: '4. The Prediction or Factual Claim' },
    {
      type: 'paragraph',
      text: 'This is the most straightforward type (~10%). The author uses a set of premises to prove a simple descriptive **fact** or make a **prediction** about a future event. It is a claim about what *is* or *will be* true.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why This Type Gets Missed',
      text: 'Students often treat Prediction / Fact as the leftover bucket for arguments that are "not rebuttal, not prescription, not explanation." That is too shallow. This type has its own recurring sub-patterns, and the credited answer often translates a trend, comparison, or rule-application into cleaner language than the stimulus itself uses.',
    },

    { type: 'h4', text: 'How to Spot It' },
    {
      type: 'process',
      title: 'The Prediction / Fact Structure',
      steps: [
        '**The Evidence:** The argument presents a set of facts, trends, or observations.',
        '**The Claim (The Conclusion):** Based on the evidence, the author declares something to be true or predicts a future outcome. This is the main conclusion.',
      ],
    },

    { type: 'h4', text: 'Common Subtypes' },
    {
      type: 'table',
      headers: ['Subtype', 'What the Author Is Doing', 'Typical Answer Translation Issue'],
      rows: [
        [
          '**Trend → Prediction**',
          'Projects current evidence forward into a likely future outcome.',
          'The correct answer may make the future comparison more explicit than the stimulus does.',
        ],
        [
          '**Evidence → Factual Judgment**',
          'Uses evidence to establish that a descriptive claim is true now.',
          'The credited answer may name directly what the stimulus referred to only indirectly.',
        ],
        [
          '**Comparative Judgment**',
          'Claims one outcome, policy, or explanation is more likely / better supported than another.',
          'The answer may reverse the comparison while preserving its logic.',
        ],
        [
          '**Rule → Application**',
          'Uses a general rule or accepted principle to prove a specific descriptive result in this case.',
          'Trap answers often quote the rule instead of the specific application the author is actually proving.',
        ],
      ],
    },

    { type: 'h4', text: 'Example Stimulus' },
    {
      type: 'blockquote',
      text: '"Online retail sales have grown by an average of 12% per year for the past five years, while brick-and-mortar retail has contracted by 3% annually. Consumer preference surveys confirm a strong shift toward online shopping. Thus, within the next decade, online retail will surpass brick-and-mortar retail in total revenue."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Role' },
      items: [
        {
          title: '"Online retail sales have grown... brick-and-mortar has contracted..."',
          text: 'Factual trends offered as evidence.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Consumer preference surveys confirm a strong shift..."',
          text: 'Additional supporting data.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Thus, within the next decade, online retail will surpass brick-and-mortar..."',
          text: 'A prediction about the future — the **main conclusion**. Signaled by "Thus" and "will."',
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'h4', text: 'Predictive / Factual Language Indicators' },
    {
      type: 'table',
      headers: ['Prediction Words', 'Factual Claim Words'],
      rows: [
        ['will / will not', 'is / is not'],
        ['is likely to / is unlikely to', 'has been shown to'],
        ['can be expected to', 'it is the case that'],
        ['is poised to / is set to', 'it is clear that'],
        ['in the future', 'the evidence shows that'],
      ],
    },

    { type: 'h4', text: 'Translation Patterns to Expect' },
    {
      type: 'process',
      title: 'How Correct Answers Usually Reword This Type',
      steps: [
        '**Implicit comparison → explicit comparison.** If the stimulus implies that one option will overtake another, the answer may state the comparison directly and cleanly.',
        '**Trend language → outcome language.** Evidence about growth, decline, or momentum may be restated as what is likely to happen next.',
        '**Vague reference → named claim.** A stimulus that says "this development" or "that pattern" may have an answer that spells out exactly which development or pattern is meant.',
        '**Rule quoted vs. application proved.** If the author uses a general principle as a premise, the credited answer usually states the specific case-level judgment that follows from it, not the principle itself.',
      ],
    },

    { type: 'h4', text: 'Mini Example: Rule → Application' },
    {
      type: 'blockquote',
      text: '"Any city whose public transit ridership rises while traffic congestion falls is making its downtown more attractive to commuters. Riverton\'s transit ridership has risen sharply over the last three years, and congestion has declined over the same period. So Riverton has made its downtown more attractive to commuters."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Role' },
      items: [
        {
          title: '"Any city whose public transit ridership rises..."',
          text: 'A general rule used as a premise. Important, but not what the author is trying to prove here.',
          badge: 'Background Rule',
          badgeColor: 'slate',
        },
        {
          title: '"Riverton\'s transit ridership has risen sharply..."',
          text: 'A case-specific premise showing that Riverton satisfies the rule\'s trigger conditions.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"So Riverton has made its downtown more attractive to commuters."',
          text: 'The specific factual application — the **main conclusion**.',
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Pattern Matching' },
    {
      type: 'paragraph',
      text: 'When you encounter a Main Conclusion question, use this rapid identification process to classify the argument type before diving into the details:',
    },

    {
      type: 'process',
      title: 'Rapid Type Identification',
      steps: [
        '**Scan for attribution:** Does the argument introduce someone else\'s view ("Some argue...", "Critics claim...")? If yes → likely a **Rebuttal**.',
        '**Scan for prescriptive language:** Does the argument use "should," "must," "ought to," or value judgments like "unfair" or "unwise"? If yes → likely a **Prescription**.',
        '**Scan for causal language:** Does the argument propose a reason for an observed phenomenon ("This is because...", "is explained by...")? If yes → likely an **Explanation**.',
        '**Default:** If none of the above, the argument is probably stating a fact or making a prediction → likely a **Prediction / Factual Claim**.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Pivot Word Reference' },
    {
      type: 'paragraph',
      text: "Pivot words are critical structural markers. They signal a shift in the argument's direction — typically from background or an opposing view to the author's own position. In Rebuttal arguments, the conclusion almost always follows the pivot.",
    },
    {
      type: 'table',
      headers: ['Pivot Word', 'Typical Function', 'What Follows'],
      rows: [
        ['**But**', 'Strong contrast; dismisses what came before', "Author's conclusion (rejection of prior claim)"],
        ['**However**', 'Formal contrast; same as "But" in function', "Author's conclusion or key qualification"],
        ['**Yet**', 'Unexpected contrast; emphasizes surprise', "Author's position that defies expectation"],
        [
          '**Although / While**',
          'Concession; grants a point before pivoting',
          "Author's main argument (after the concession)",
        ],
        [
          '**Nevertheless / Nonetheless**',
          'Acknowledges opposition, then overrides it',
          "Author's conclusion despite the admitted point",
        ],
        [
          '**In fact / Actually**',
          'Corrective; the author asserts the real truth',
          "Author's corrected or strengthened position",
        ],
        ['**On the contrary**', 'Direct opposition; reverses the prior claim', "Author's opposing conclusion"],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Sandwich Conclusion Pattern' },
    {
      type: 'paragraph',
      text: 'Not every conclusion appears at the beginning or end of the stimulus. In the **Sandwich Conclusion** pattern, the conclusion is buried in the middle of the passage, with premises both before and after it.',
    },

    { type: 'h4', text: 'How It Works' },
    {
      type: 'blockquote',
      text: '"Recent archaeological discoveries have uncovered pottery fragments dating to 3000 BCE in the region. This evidence strongly suggests that organized settlements existed in the area far earlier than previously thought. The fragments show consistent glaze patterns across multiple sites, and their distribution matches known trade route pathways."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Role' },
      items: [
        {
          title: '"Recent archaeological discoveries have uncovered pottery fragments..."',
          text: 'A premise — evidence that comes *before* the conclusion.',
          badge: 'Premise (Before)',
          badgeColor: 'slate',
        },
        {
          title: '"This evidence strongly suggests that organized settlements existed far earlier..."',
          text: 'The **main conclusion** — sandwiched in the middle. Signaled by "strongly suggests."',
          badge: 'Main Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: '"The fragments show consistent glaze patterns... distribution matches trade routes."',
          text: 'Additional premises that come *after* the conclusion, providing further support.',
          badge: 'Premise (After)',
          badgeColor: 'slate',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: "Don't Assume Position = Role",
      text: 'The Sandwich Conclusion is the most common source of errors for students who assume the conclusion is always the first or last sentence. **Position does not determine role.** Only the flow of support determines role. Always use the Why Test, regardless of where a statement appears.',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '• **Explanation conclusions** propose a cause for an observed phenomenon — look for "is best explained by," "is due to," and similar causal language.\n• **Prediction / Fact conclusions** state what is or will be true — look for "will," "is likely to," and factual claim language. This type includes trend-to-prediction, factual judgments, comparative judgments, and rule-to-application arguments.\n• **Quick Pattern Matching** — scan for attribution (Rebuttal), prescriptive language (Prescription), causal language (Explanation), or default to Prediction/Fact.\n• **Pivot words** (But, However, Yet, Although) signal the shift to the author\'s position and are especially critical in Rebuttal arguments.\n• **The Sandwich Conclusion** — the conclusion can appear in the middle of the stimulus, surrounded by premises on both sides. Never assume position equals role.',
    },
  ],
  alternates: {
    field: {
      label: 'Field Guide',
      content: [
        { type: 'h3', text: 'Extended Patterns \u2014 Field Guide' },
        { type: 'h3', text: 'Pattern Cards' },
        {
          type: 'breakdown',
          labels: { title: 'Pattern', text: 'Details' },
          items: [
            {
              title: 'The Explanation',
              text: '**Signal:** Causal conclusion language \u2014 *is best explained by, is caused by, the reason is, is due to, can be attributed to.*\n\n**Structure:** Phenomenon (known fact) \u2192 Proposed Cause (Conclusion) \u2192 Supporting Evidence\n\n**Common Trap:** Treating the observed phenomenon as the conclusion. The phenomenon is the *given*; the proposed cause is the *point*.',
              badge: '~25%',
              badgeColor: 'blue',
            },
            {
              title: 'The Prediction / Factual Claim',
              text: '**Signal:** Future-tense or factual-claim language \u2014 *will, is likely to, can be expected to, evidence suggests, it is the case that.*\n\n**Structure:** Evidence / Trends \u2192 Descriptive Fact or Future Prediction (Conclusion)\n\n**Common Trap:** Selecting the trend data instead of the prediction it supports. The data is the premise; the forward-looking claim is the conclusion.',
              badge: '~20%',
              badgeColor: 'blue',
            },
          ],
        },
        { type: 'h3', text: 'Quick Pattern Matching' },
        {
          type: 'process',
          steps: [
            '**Scan for attribution:** Does the argument introduce someone else\'s view? If yes \u2192 likely a **Rebuttal**.',
            '**Scan for prescriptive language:** Does the argument use "should," "must," "ought to"? If yes \u2192 likely a **Prescription**.',
            '**Scan for causal language:** Does the argument propose a reason for an observed fact? If yes \u2192 likely an **Explanation**.',
            '**Default:** If none of the above, the argument is probably stating a fact or making a prediction \u2192 **Prediction / Factual Claim**.',
          ],
        },
        { type: 'h3', text: 'Pivot Words' },
        {
          type: 'table',
          headers: ['Word / Phrase', 'What It Signals'],
          rows: [
            ['**But / However / Yet**', 'Strong contrast \u2014 author\'s conclusion usually follows'],
            ['**Although / While**', 'Concession \u2014 author grants a point before pivoting to their position'],
            ['**Nevertheless / Nonetheless**', 'Override \u2014 author acknowledges opposition then overrides it'],
            ['**In fact / Actually**', 'Correction \u2014 author asserts the real truth after a setup'],
            ['**On the contrary**', 'Direct opposition \u2014 reverses the prior claim entirely'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '\u2022 **Explanation** \u2014 The proposed cause is the conclusion, not the observed phenomenon.\n\u2022 **Prediction / Fact** \u2014 The forward-looking claim is the conclusion; trend data is the premise.\n\u2022 **Quick Pattern Matching** \u2014 Attribution \u2192 Rebuttal, Prescriptive \u2192 Prescription, Causal \u2192 Explanation, Default \u2192 Prediction.\n\u2022 **Pivot words** are flashing arrows pointing at the conclusion.',
        },
      ],
    },
  },
};
