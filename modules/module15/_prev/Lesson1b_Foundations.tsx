import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '15-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Fill in the Blank vs. Main Conclusion' },
    {
      type: 'paragraph',
      text: 'Because Fill in the Blank is so closely related to Main Conclusion, it is worth comparing them directly. Understanding the overlap will help you leverage skills you already have.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Main Conclusion', 'Fill in the Blank'],
      rows: [
        [
          'What you find',
          'The conclusion that is already stated in the stimulus',
          'The conclusion that has been removed from the stimulus',
        ],
        ['Where is the conclusion?', 'Somewhere in the stimulus text', 'In the answer choices (you supply it)'],
        ['What the premises do', 'Support a claim you must identify', 'Support a claim you must predict'],
        ['Core skill', 'Recognizing the conclusion', 'Synthesizing premises to form the conclusion'],
        [
          'Difficulty driver',
          'Distinguishing the main conclusion from sub-conclusions',
          'Predicting a conclusion without seeing it first',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Key Insight',
      text: 'Both question types ask the same fundamental question: "What do these premises prove?" Main Conclusion gives you the answer and asks you to find it. Fill in the Blank withholds the answer and asks you to construct it. The analytical process is identical; only the final step differs.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Two Types of Blanks' },
    {
      type: 'paragraph',
      text: 'Every Fill in the Blank question falls into one of two categories based on the logical role of the missing phrase. Identifying which type you are dealing with is the single most important first step.',
    },

    { type: 'h3', text: '1. Conclusion Blanks (Most Common)' },
    {
      type: 'paragraph',
      text: 'The stimulus presents a series of premises and ends with a conclusion indicator followed by a blank. Everything before the blank is evidence; the blank is the point that evidence supports.',
    },
    {
      type: 'list',
      items: [
        '*Indicators:* "Therefore, _______." "Thus, _______." "Hence, _______." "So, _______." "It follows that _______."',
        '*Your Task:* Synthesize the premises. You are answering: "What is the single point these facts are building up to prove?"',
        '*Approach:* Treat this exactly like a Main Conclusion or Must Be True question. The correct answer will be a statement that follows logically from the evidence without introducing new information.',
        '*The Trap:* Avoid answer choices that make claims stronger than the evidence supports. The correct answer is almost always a modest, well-supported synthesis.',
      ],
    },

    { type: 'h3', text: '2. Premise Blanks (Rare)' },
    {
      type: 'paragraph',
      text: 'The author has already stated a conclusion, and the blank represents the reason for that conclusion. The blank appears after a premise indicator.',
    },
    {
      type: 'list',
      items: [
        '*Indicators:* "[Conclusion], since _______." "[Conclusion], because _______." "[Conclusion], for _______."',
        '*Your Task:* Find the missing support. You are answering: "What evidence or principle would justify this conclusion?"',
        '*Approach:* Treat this like a Sufficient Assumption question. The correct answer will bridge the gap between the given evidence and the stated conclusion.',
        '*The Trap:* Avoid answer choices that merely restate the conclusion in different words. The blank must provide new supporting information.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Quick Classification',
      text: 'Look first at the word immediately before the blank. If it is a conclusion indicator (therefore, thus, hence, so), the blank is usually a **conclusion**. If it is a premise indicator (since, because, for), the blank is usually a **premise**. But do not stop there. Some hard questions interrupt the indicator with extra language or use words like "but" inside a larger clause. Always confirm by reading the full sentence structure, not just the last word before the blank.',
    },

    { type: 'h3', text: 'Interrupted Indicators and Clause-Level Parsing' },
    {
      type: 'paragraph',
      text: 'Hard Fill in the Blank questions sometimes hide the blank\'s role inside a longer clause. A conclusion indicator may be separated from the blank by descriptive material, or a contrast word like "but" may appear inside a subsidiary clause rather than marking the author\'s main point. When the signal words feel messy, step back and ask: **What full clause is being completed, and what job does that clause play in the argument?**',
    },
    {
      type: 'list',
      items: [
        '**Read the whole clause, not the final word.** "Therefore, given these limitations, _______" is still a conclusion blank even though extra material sits between the indicator and the blank.',
        '**Treat "but" carefully.** Sometimes "but" marks the author\'s pivot, and sometimes it is just part of a subordinate phrase. Confirm whose claim is being completed.',
        '**Use the support direction as a tie-breaker.** Ask whether the surrounding statements are trying to prove the blank or whether the blank would support an already stated claim.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Conclusion Patterns' },
    {
      type: 'paragraph',
      text: "When the blank is a conclusion (the vast majority of cases), the correct answer will follow one of several predictable patterns depending on the argument's structure. Recognizing these patterns helps you prephrase more accurately.",
    },

    {
      type: 'breakdown',
      labels: { title: 'Pattern', text: 'Description & Example' },
      items: [
        {
          title: 'Causal Conclusion',
          text: 'The premises describe a cause-and-effect chain. The conclusion states the final effect. Example: premises show that drug X blocks enzyme Y, and enzyme Y is needed for cell division. Conclusion: drug X inhibits cell division.',
          badge: 'Very Common',
          badgeColor: 'green',
        },
        {
          title: 'Conditional Conclusion',
          text: 'The premises establish conditional rules (if A then B, if B then C). The conclusion chains them together (if A then C) or applies them to a specific case. Example: if funding is cut, the program cannot hire staff; if staff cannot be hired, services decline. Conclusion: if funding is cut, services will decline.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Comparative Conclusion',
          text: 'The premises compare two things on a shared dimension. The conclusion states which is greater, lesser, more likely, or more effective. Example: method A reduces errors by 30%; method B reduces errors by 10%. Conclusion: method A is more effective at reducing errors than method B.',
          badge: 'Common',
          badgeColor: 'blue',
        },
        {
          title: 'Normative Conclusion',
          text: 'The premises describe a problem or a set of values, and the conclusion prescribes an action. Often signaled by "should," "ought to," or "must." Example: the current policy harms vulnerable populations and violates the agency\'s stated mission. Conclusion: the policy should be revised.',
          badge: 'Moderate',
          badgeColor: 'slate',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Core Principle' },
    { type: 'paragraph', text: 'The single most important strategy for Fill in the Blank is this:' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Read Everything Before the Blank as Premises',
      text: 'Treat every statement before the blank as evidence. Your job is to determine what conclusion those premises collectively support. Do not look at the answer choices until you have formed a clear prediction. The prediction does not need to be perfect, but it must capture the direction and scope of the argument.',
    },

    {
      type: 'paragraph',
      text: 'This principle works because the overwhelming majority of Fill in the Blank questions place the blank at the end of the stimulus in the conclusion position. Even in the rare premise-blank variant, the principle adapts easily: read the stated conclusion and the partial evidence, then determine what additional premise would complete the reasoning.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the core principle to a full question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"Editorial: Many cities have increased spending on bicycle infrastructure, citing studies that link cycling to reduced traffic congestion. However, these studies were conducted in cities with mild climates where cycling is practical year-round. In cities with harsh winters, cycling rates drop to nearly zero for several months each year, and traffic congestion during those months remains unchanged. Therefore, in cities with harsh winters, increased spending on bicycle infrastructure is unlikely to _______."',
    },
    {
      type: 'paragraph',
      text: 'This is a good Fill in the Blank example because the blank belongs to the conclusion, and the premises already tell you exactly what benefit the argument thinks will not carry over to harsh-winter cities.',
    },

    { type: 'h3', text: 'Walkthrough' },
    {
      type: 'process',
      title: 'Applying the Core Principle',
      steps: [
        '**Classify the blank:** The blank follows "Therefore" and appears at the end of the stimulus. This is a conclusion blank.',
        '**Read everything before the blank as premises:** (1) Cities cite studies linking cycling to reduced congestion. (2) Those studies used mild-climate cities. (3) In harsh-winter cities, cycling drops to near zero for months. (4) Congestion is unchanged during those months.',
        '**Synthesize:** The premises show that the evidence for cycling reducing congestion does not apply to harsh-winter cities because cycling is seasonal there. The conclusion should say that bike infrastructure will not achieve the claimed benefit (congestion reduction) in those cities.',
        '**Prephrase:** "Spending on bicycle infrastructure in harsh-winter cities is unlikely to reduce traffic congestion year-round."',
        '**Match:** The correct completion should say that bicycle infrastructure is unlikely to reduce traffic congestion throughout the entire year. The phrase "throughout the year" is the key constraint because the evidence turns on cycling\'s seasonal limits.',
      ],
    },

    { type: 'h3', text: 'Why the Prediction Stays Narrow' },
    {
      type: 'callout',
      variant: 'default',
      title: 'Final Check',
      text: "Health effects, public opinion, bicycle ownership, and cost all sit outside the argument's actual line of reasoning. The premises are only about whether bike infrastructure carries over the congestion benefit from mild-climate cities to harsh-winter cities. Fill in the Blank rewards the answer that stays closest to that exact support, not the one that sounds broadly plausible.",
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Principle-Generalization Foundations — At a Glance' },
        {
          type: 'paragraph',
          text: 'Principle-Generalization gives you a specific case and asks for the general rule. Seven recurring categories appear across LSAT stimuli. Recognizing the category gives you a head start on your pre-phrase.',
        },
        {
          type: 'table',
          headers: ['Category', 'Signal in Stimulus', 'Example Pre-Phrase', 'Quick Detection Cue', 'Trap to Avoid', 'Abstraction Move', 'Strength Calibration'],
          rows: [
            [
              '**Experiment**',
              'Controlled test, manipulated variable, measurable outcome',
              '"[Abstract variable] can affect [abstract outcome] because [mechanism]."',
              'Two groups, one change, different results',
              'Prescriptive answer ("researchers should...")',
              'Replace specific variables with general categories',
              '"Can" or "sometimes" -- one experiment does not prove "always"',
            ],
            [
              '**Contextual Value**',
              'Same trait valued differently in different settings',
              '"A trait that is a weakness in one setting can be a strength in another."',
              'Context A vs. Context B with opposite valuations',
              'Answer capturing only one context',
              'Replace specific trait/context with "a characteristic" / "different environments"',
              '"Can be" -- context-dependent, not absolute',
            ],
            [
              '**Unintended Consequences**',
              'Solution succeeds but triggers a new problem downstream',
              '"Solving one set of problems can create a different set of problems."',
              'Good intention, unexpected side effect',
              'Answer that only states the problem or only the fix',
              'Replace specific action/consequence with "an intervention" / "an unforeseen outcome"',
              '"Can create" -- not "inevitably produces"',
            ],
            [
              '**Motivated Blindness**',
              'Self-interest causes ignoring of negative consequences',
              '"People tend to overlook harms associated with practices that serve their interests."',
              'A group benefits from something and ignores its downsides',
              'Answer blaming ignorance rather than self-interest',
              'Replace specific group/benefit with "those who gain" / "associated disadvantages"',
              '"Tend to" -- behavioral tendency, not universal law',
            ],
            [
              '**Path Dependency / Lock-In**',
              'Early choice or default becomes self-reinforcing',
              '"Once an arrangement becomes established, replacing it can remain difficult even when a better option exists."',
              'Installed base, sunk costs, switching friction',
              'Answer that merely says "people prefer what is familiar"',
              'Replace specific institution/tool with "an established practice" / "an alternative"',
              '"Can remain difficult" -- not "impossible"',
            ],
            [
              '**Emergence / Whole vs Part**',
              'Whole system has a feature none of its parts has alone',
              '"A collection can display a property that none of its members displays individually."',
              'Contrast between part-level facts and system-level result',
              'Answer that lists component facts instead of stating the system principle',
              'Replace specific arrangement with "a system" / "an emergent property"',
              '"Can display" -- system-level, not guaranteed',
            ],
            [
              '**Behavioral Pattern**',
              'Framing, perception, or expectations drive behavior',
              '"How something is perceived can affect outcomes regardless of objective reality."',
              'Same substance, different framing, different result',
              'Answer that focuses on the substance rather than the framing',
              'Replace specific framing with "perception" / "presentation"',
              '"Can affect" -- framing effects are context-dependent',
            ],
          ],
        },
        {
          type: 'blockquote',
          text: '"A city introduced a congestion fee framed as a penalty -- low compliance. Rebranded as a discount -- high compliance. Same fee, different framing." Abstracted: how a policy is framed can affect public response, independent of the policy\'s substance.',
        },
        { type: 'h4', text: 'Key Takeaways' },
        {
          type: 'list',
          items: [
            'The correct answer must be true BECAUSE OF the stimulus, not just consistent with it.',
            'Strip specifics, preserve structure: replace proper nouns with general categories but keep logical connectors.',
            'Pre-phrase the "moral of the story" in abstract terms before reading answer choices.',
          ],
        },
      ],
    },
  },
};
