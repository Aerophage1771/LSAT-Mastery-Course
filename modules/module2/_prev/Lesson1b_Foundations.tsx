import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '2-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Main Conclusion \u2014 Foundations' },

    { type: 'h3', text: 'Main Conclusion vs. Argument Part' },
    {
      type: 'paragraph',
      text: 'These two question types are closely related, but they ask fundamentally different things. Understanding the distinction prevents confusion:',
    },
    {
      type: 'table',
      headers: ['Feature', 'Main Conclusion (Module 2)', 'Argument Part (Module 1)'],
      rows: [
        [
          '**What it asks**',
          'Find the single ultimate point of the argument',
          'Identify the role of a *specific quoted sentence*',
        ],
        ['**Target**', 'The whole argument (find the destination)', 'One particular sentence (label its function)'],
        [
          '**Answer choices**',
          'Paraphrases of the conclusion (content-based)',
          'Abstract role descriptions (function-based)',
        ],
        [
          '**Example answer**',
          '"Tennyson\'s line was not about Darwin."',
          '"It is a premise offered in support of the main conclusion."',
        ],
        ['**Core skill**', 'Identifying *which* claim is the main point', 'Describing *what role* a claim plays'],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Connection',
      text: 'Think of it this way: Argument Part gives you a sentence and asks "What does this do?" Main Conclusion asks "Which sentence is the final destination?" Both require you to map the argument\'s structure\u2014Main Conclusion just narrows the task to finding the top of the support chain.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Core Concepts' },

    { type: 'h3', text: 'The "Why" Test' },
    {
      type: 'paragraph',
      text: 'The most reliable tool for identifying the Main Conclusion is the **"Why" Test**. Because the conclusion is the claim that everything else supports, you can locate it by testing the direction of support.',
    },
    {
      type: 'process',
      title: 'How to Apply the Why Test',
      steps: [
        '**Pick a candidate statement** \u2014 Choose the sentence you suspect is the conclusion.',
        '**Ask "Why is this true?"** \u2014 Look at the rest of the stimulus.',
        '**Check if the argument answers** \u2014 If the other sentences provide reasons *why* your candidate is true, you have found the **conclusion**.',
        '**Reverse check** \u2014 If your candidate answers the "Why?" question for a *different* sentence, it is a **premise**, not the conclusion.',
      ],
    },

    { type: 'h4', text: 'Worked Demonstration' },
    { type: 'paragraph', text: "Let's see the Why Test in action on a simple argument:" },
    {
      type: 'blockquote',
      text: '"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack."',
    },

    {
      type: 'breakdown',
      labels: { title: 'Statement', text: 'Why Test Result' },
      items: [
        {
          title: '"Cycling to work is healthier than driving."',
          text: '**Ask:** Why is cycling healthier? **Answer from argument:** Because cyclists have 30% lower cardiovascular risk, and cycling provides daily aerobic exercise. \u2713 The argument answers the "Why?" \u2014 this is the **conclusion**.',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: '"Studies show that regular cyclists have a 30% lower risk..."',
          text: "**Ask:** Why do cyclists have lower risk? **Answer from argument:** The argument doesn't explain why. This is taken as a given fact. \u2713 No answer \u2014 this is a **premise**.",
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: '"Cycling provides daily aerobic exercise..."',
          text: "**Ask:** Why does cycling provide exercise? **Answer from argument:** The argument doesn't explain this either. It's another given fact. \u2713 No answer \u2014 this is a **premise**.",
          badge: 'Premise',
          badgeColor: 'slate',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'The "Because" Reversal',
      text: 'A quick shortcut: try inserting the word **"because"** between your candidate conclusion and the other statements. If it makes logical sense, you have the right direction.\n\n*"Cycling is healthier **because** cyclists have lower cardiovascular risk."* \u2713 Makes sense.\n*"Cyclists have lower cardiovascular risk **because** cycling is healthier."* \u2717 Backwards.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Final Destination Principle' },
    {
      type: 'paragraph',
      text: 'Arguments often contain multiple layers: background information, opposing viewpoints, intermediate conclusions, and the main conclusion. A common trap is mistaking a sub-conclusion for the main conclusion. The key insight:',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Final Destination',
      text: 'The Main Conclusion is the statement that **supports nothing else**. It is the end of the line \u2014 the final judgment, prediction, or recommendation that the author is trying to leave you with. It is not necessarily the "heaviest" or most complex sentence; it is simply the one sentence that all other sentences work to prove.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Indicator Words Reference' },
    {
      type: 'paragraph',
      text: 'Indicator words are your most reliable tool for quickly identifying argument structure. These words signal whether a statement is serving as a conclusion, a premise, or a pivot between viewpoints.',
    },

    {
      type: 'table',
      headers: ['Conclusion Indicators', 'Premise Indicators', 'Contrast / Pivot Indicators'],
      rows: [
        ['Therefore', 'Because', 'But'],
        ['Thus', 'Since', 'However'],
        ['So', 'For', 'Yet'],
        ['Hence', 'After all', 'Although'],
        ['Consequently', 'Given that', 'While'],
        ['It follows that', 'As evidenced by', 'Nevertheless'],
        ['This shows that', 'Due to the fact that', 'Despite'],
        ['We can conclude that', 'On the grounds that', 'On the other hand'],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Warning: Indicator Words Are Clues, Not Guarantees',
      text: 'Not every conclusion has an indicator word, and not every "therefore" introduces the *main* conclusion\u2014it might introduce a sub-conclusion. Always confirm with the Why Test. Indicator words narrow your search; the Why Test confirms your answer.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Four Conclusion Types \u2014 Preview' },
    {
      type: 'paragraph',
      text: 'Main conclusions on the LSAT come in four flavors. You will study each in depth in upcoming lessons, but here is a quick overview so you know what to expect:',
    },

    {
      type: 'breakdown',
      labels: { title: 'Conclusion Type', text: 'Description & Key Signals' },
      items: [
        {
          title: '1. The Rebuttal',
          text: "The author rejects or critiques a claim held by others. The stimulus introduces someone else's position, then pivots to tear it down.\n\n**Signals:** *But, However, Yet* + rejection words (*mistaken, unfounded, dubious, unconvincing*)\n**Frequency:** ~45% of Main Conclusion questions",
          badge: '~45%',
          badgeColor: 'indigo',
        },
        {
          title: '2. The Prescription',
          text: 'The author makes a judgment or recommends a course of action. The conclusion goes beyond describing facts to say what *should* or *must* be done.\n\n**Signals:** *should, must, ought to, needs to, it is advisable, unfair, unwise*\n**Frequency:** ~25% of Main Conclusion questions',
          badge: '~25%',
          badgeColor: 'blue',
        },
        {
          title: '3. The Explanation',
          text: "The author proposes a cause or reason for a known phenomenon. The question isn't *whether* something happened, but *why* it happened.\n\n**Signals:** *The reason is\u2026, is caused by\u2026, is explained by\u2026, This is because\u2026*\n**Frequency:** ~20% of Main Conclusion questions",
          badge: '~20%',
          badgeColor: 'slate',
        },
        {
          title: '4. The Prediction / Factual Claim',
          text: 'The author uses premises to prove a descriptive fact or predict a future outcome. The most straightforward type.\n\n**Signals:** *will, will not, is likely to, can be expected to*\n**Frequency:** ~10% of Main Conclusion questions',
          badge: '~10%',
          badgeColor: 'green',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Your First Main Conclusion Question' },
    {
      type: 'paragraph',
      text: "Let's put everything together with a concrete practice question. Read the stimulus, apply the Why Test, spot indicator words, and find the main conclusion before looking at the answer choices.",
    },

    {
      type: 'paragraph',
      text: 'Consider an argument that starts with a common belief that table scraps are harmless for dogs, then pivots to evidence about toxicity, obesity, and digestive problems before concluding that dog owners should avoid feeding table scraps altogether. The structural task is to distinguish the background belief and supporting evidence from the final recommendation.',
    },

    { type: 'h4', text: 'Walkthrough' },
    {
      type: 'breakdown',
      labels: { title: 'Step', text: 'Application' },
      items: [
        {
          title: 'Spot the indicator words',
          text: '**"However"** signals a pivot from the common belief. **"Therefore"** introduces the final claim. These two words map the argument instantly.',
          badge: 'Step 1',
          badgeColor: 'blue',
        },
        {
          title: 'Apply the Why Test',
          text: '**Candidate:** "Dog owners should avoid giving their pets table scraps."\n**Ask:** Why should they avoid it?\n**Answer:** Because some human foods are toxic, and even non-toxic foods cause obesity and digestive problems.\n\u2713 The argument answers the "Why?" \u2014 this is the conclusion.',
          badge: 'Step 2',
          badgeColor: 'blue',
        },
        {
          title: 'Identify the type',
          text: 'The conclusion uses **"should"** \u2014 this is a **Prescription** (a recommendation about what dog owners ought to do).',
          badge: 'Step 3',
          badgeColor: 'blue',
        },
        {
          title: 'Confirm the destination',
          text: 'The surrounding statements either describe the belief being challenged or provide evidence about why table scraps are dangerous. The only sentence that those ideas are trying to prove is the recommendation that owners should stop feeding table scraps.',
          badge: 'Step 4',
          badgeColor: 'blue',
        },
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '\u2022 The Main Conclusion is the **final destination** of the argument \u2014 the one claim that everything else supports and that supports nothing else.\n\u2022 The **Why Test** is your most reliable tool: ask "Why?" of your candidate, and if the argument answers, you have the conclusion.\n\u2022 **Indicator words** (therefore, because, however) are clues that speed up your search, but always confirm with the Why Test.\n\u2022 Main Conclusion questions are foundational \u2014 this skill is a prerequisite for Flaw, Assumption, Strengthen, Weaken, and more.\n\u2022 Conclusions come in four types: **Rebuttal**, **Prescription**, **Explanation**, and **Prediction/Fact**. You will master each in the lessons ahead.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Main Conclusion Foundations \u2014 At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'What It Is', 'Key Detail'],
          rows: [
            [
              '**The Why Test**',
              'The most reliable tool for confirming the main conclusion',
              'Ask "Why is this true?" \u2014 if the argument answers, you found the conclusion',
            ],
            [
              '**Final Destination Principle**',
              'The conclusion supports nothing else in the argument',
              'It only *receives* support; it never *gives* support to another claim',
            ],
            [
              '**Indicator Words \u2014 Conclusion**',
              'Words that signal a conclusion follows',
              '*Therefore, thus, so, hence, consequently, it follows that*',
            ],
            [
              '**Indicator Words \u2014 Premise**',
              'Words that signal evidence follows',
              '*Because, since, for, after all, given that, as evidenced by*',
            ],
            [
              '**Indicator Words \u2014 Pivot**',
              'Words that signal a shift to the author\'s position',
              '*But, however, yet, although, nevertheless*',
            ],
            [
              '**Rebuttal (~45%)**',
              'Author rejects a claim held by others',
              'They Say \u2192 Pivot \u2192 I Say pattern',
            ],
            [
              '**Prescription (~25%)**',
              'Author recommends an action or makes a judgment',
              '*Should, must, ought to, unfair, unwise*',
            ],
            [
              '**Explanation (~20%)**',
              'Author proposes a cause for a known phenomenon',
              '*The reason is, is caused by, is explained by*',
            ],
            [
              '**Prediction / Fact (~10%)**',
              'Author states a descriptive fact or predicts a future outcome',
              '*Will, is likely to, can be expected to*',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack."',
        },
        {
          type: 'paragraph',
          text: '**Why Test:** "Why is cycling healthier?" \u2192 Because of lower cardiovascular risk and daily exercise. The argument answers \u2014 first sentence is the **conclusion**.',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '\u2022 The **Why Test** confirms: if the argument answers "Why?", you have the conclusion.\n\u2022 **Indicator words** narrow your search; the Why Test confirms your answer.\n\u2022 Four conclusion types cover virtually all MC questions \u2014 learn their signals.',
        },
      ],
    },
  },
};
