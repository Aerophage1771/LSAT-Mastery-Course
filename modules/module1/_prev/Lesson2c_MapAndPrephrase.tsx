import { Lesson } from '../../types';

export const Lesson2c_MapAndPrephrase: Lesson = {
  id: '1-2c',
  title: 'Map & Prephrase',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: "Step 3: Map the Argument's Structure" },
    {
      type: 'paragraph',
      text: 'Now confirm your hypotheses by tracing the flow of support. Use two key tools: **indicator words** and **the Why Test**.',
    },

    { type: 'h4', text: 'Tool 1: Indicator Words' },
    {
      type: 'paragraph',
      text: 'Indicator words are your most reliable structural signals. Conclusion indicators (*therefore, thus, so*) point to the claim being supported. Premise indicators (*because, since, for*) point to the evidence doing the supporting.',
    },
    {
      type: 'paragraph',
      text: 'But indicator words are not magic. **Since** can be logical ("since the data show X") or temporal ("since last spring"). **For** can introduce a reason, but it can also be woven into the middle of a sentence. Always verify that the supposed premise actually makes another statement more likely, rather than trusting the word alone.',
    },

    { type: 'h4', text: 'Tool 2: The Why Test' },
    {
      type: 'paragraph',
      text: 'Ask "Why?" of your candidate conclusion. If the other statements answer the question, you have confirmed the conclusion. If asking "Why?" of a statement produces no answer from the argument, it is a premise.',
    },

    { type: 'h4', text: 'Tool 3: The Support Spectrum' },
    {
      type: 'paragraph',
      text: 'Support is not all-or-nothing. Some premises barely help. Some strongly point to the conclusion. A few guarantee it. Even on Argument Part, noticing whether a statement provides **real support** or only **apparent support** helps you avoid mislabeling context, examples, and disconnected observations.',
    },

    {
      type: 'process',
      title: 'Mapping Process',
      steps: [
        '**Confirm There Is an Argument:** Before mapping arrows, make sure one statement is actually offered as a reason for another.',
        '**Isolate the Main Conclusion:** Find the one claim that all evidence ultimately points to. It receives support but does not support anything else.',
        '**Check for Intermediate Conclusions:** A statement that receives support but also gives support to another claim is an Intermediate Conclusion. It sits in the middle of the support chain.',
        '**Apply the Why Test:** Ask "Why?" of your candidate Main Conclusion. The premises should answer. Ask "Why?" of each premise — the argument should provide no answer.',
        '**Check the Quality of the Link:** If a statement seems connected but does not actually make the target claim more likely, it is not functioning as real support.',
        '**Confirm the direction of support:** Draw an arrow from each premise toward what it supports. All arrows should eventually point to the Main Conclusion.',
      ],
    },

    { type: 'h4', text: 'Example' },
    {
      type: 'blockquote',
      text: '"Because traffic accidents increase by 15% during heavy rain, and because most commuters lack adequate wet-weather driving skills, cities with high rainfall should invest in public transit infrastructure."',
    },
    { type: 'paragraph', text: 'Mapping the structure:' },
    {
      type: 'process',
      title: 'Support Flow',
      steps: [
        '**Premise 1:** Traffic accidents increase by 15% during heavy rain.',
        '**Premise 2:** Most commuters lack adequate wet-weather driving skills.',
        '**Main Conclusion:** Cities with high rainfall should invest in public transit.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Both premise indicators ("Because") introduce facts that support the recommendation (the conclusion). The Why Test confirms: "Why should cities invest in public transit?" — "Because accidents increase and drivers lack wet-weather skills."',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Watch for Hidden Intermediate Conclusions',
      text: 'If a statement is supported by a "because" clause but then itself supports a final claim, it is an Intermediate Conclusion, not a premise. These are the most commonly misidentified role. Always check whether a "premise" also gives support to something beyond the Main Conclusion.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Assumption Lens',
      text: 'If you are unsure whether one sentence supports another, ask what unstated idea would have to be true for the support to make sense. That missing link is the assumption. The easier it is to supply a reasonable missing link, the more natural the support relationship usually is.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Quoted Text Is Usually Not the Missing Link',
      text: 'If the stem quotes a full sentence from the stimulus, default away from answers calling it "the assumption." Most missing-link assumptions are unstated. The rare exception is a claim the author simply takes for granted without supporting. So verify whether the target is being assumed, supported, or used as support before choosing an assumption answer.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'In complex arguments, the conclusion may not have an explicit indicator word. It may be buried in the middle of the stimulus, or it may appear as the very first sentence. **Position does not determine role.** Only the flow of support determines role. Use the Why Test to confirm, regardless of position.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Pinpoint the Role & Prephrase' },
    {
      type: 'paragraph',
      text: 'Locate the target statement within your argument map and describe its function **in your own words** before looking at the answer choices. This is called "prephrasing" and it is the most important habit you can build.',
    },
    {
      type: 'paragraph',
      text: 'When the target is a premise, do not just ask "What label fits?" Also ask: **What claim does this premise make more likely?** If you cannot answer that, you may be staring at background rather than support.',
    },

    { type: 'h4', text: 'How to Prephrase' },
    {
      type: 'paragraph',
      text: 'Your prephrase should name the role and describe the relationship. Be specific. Don\'t just say "premise" — say "a premise that supports the intermediate conclusion about X." The more specific your prephrase, the faster and more accurately you will evaluate answer choices.',
    },

    { type: 'h4', text: 'Prephrase Examples' },
    {
      type: 'table',
      headers: ['Situation', 'Weak Prephrase', 'Strong Prephrase'],
      rows: [
        [
          'Target supports the conclusion',
          '"It\'s a premise."',
          '"It\'s a premise that provides evidence for the claim that cities should invest in transit."',
        ],
        [
          'Target is supported AND supports',
          '"It\'s in the middle."',
          '"It\'s an intermediate conclusion supported by the study data, and it supports the main recommendation."',
        ],
        [
          'Target is a view the author argues against',
          '"It\'s not the author\'s view."',
          '"It\'s an opposing viewpoint that the author\'s argument is designed to challenge."',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Tip: Prephrase Before Looking at Answers',
      text: "If you cannot name the target's role without the answer choices, you will be vulnerable to trap answers. The answer choices are designed to sound plausible. Prephrasing protects you by giving you a benchmark to compare against.",
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'When This Step Gets Tricky',
      text: 'Some roles are harder to prephrase because they don\'t fit neatly into a single category. For example, a statement might provide background information that also functions as a premise for an intermediate conclusion. In these cases, describe the relationship as precisely as you can: "It provides factual context that the author uses as a basis for the claim that..."',
    },
  ],
  alternates: {
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Steps 3-4:** Mapping structure and prephrasing the role',
        },
        { type: 'h3', text: 'Step 3: Map the Structure' },
        {
          type: 'process',
          steps: [
            '**Apply the Why Test.** Ask: \'Why does the author believe [conclusion]?\' The answer should be the premises.',
            '**Identify the support direction.** Does the target support something, or does something support it?',
            '**Check for counter-arguments.** Is the author presenting and then rejecting this claim?',
          ],
        },
        { type: 'h3', text: 'Step 4: Prephrase the Role' },
        {
          type: 'table',
          headers: ['If the Target...', 'Prephrase As...'],
          rows: [
            ['Supports the conclusion with evidence', 'Premise'],
            ['IS the claim everything else supports', 'Main Conclusion'],
            ['Supports the conclusion through another claim', 'Intermediate Conclusion'],
            ['Provides undisputed facts that set the stage', 'Context'],
            ['Presents a view the author argues against', 'Opposing Viewpoint'],
            ['Grants a point then pivots to a different claim', 'Concession'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Map the support arrows \u2192 Name the role \u2192 Then read the choices**',
        },
      ],
    },
  },
};
