import { Lesson } from '../../types';

export const Lesson2_StepByStepGuide: Lesson = {
  id: '5-2',
  title: 'Step-by-Step: Flaw',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Step-by-Step: Flaw' },
    {
      type: 'paragraph',
      text: 'This lesson provides a complete, repeatable method for solving any Flaw question. Each step includes concrete examples, common pitfalls, and practical shortcuts. At the end, you will work through a full question applying all four steps.',
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Timing',
      text: 'Budget **1:30–2:00** per Flaw question. The 4-step method helps you spend that time efficiently: roughly **30 seconds** deconstructing the argument, **20 seconds** finding the gap and prephrasing, and **40–60 seconds** evaluating answer choices. With practice, the gap identification becomes nearly instantaneous for common flaw patterns.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Overview' },
    {
      type: 'process',
      title: 'The 4-Step Method',
      steps: [
        '**Step 1 — Identify the Conclusion and Premises:** Break the argument into its structural components. What is the author trying to prove, and what evidence do they offer?',
        '**Step 2 — Find the Gap:** Ask: "Why doesn\'t this evidence *guarantee* this conclusion?" Identify the disconnect between premises and conclusion.',
        '**Step 3 — Name the Flaw (Prephrase):** Categorize the error using your mental flaw checklist. State the flaw in your own words *before* looking at answer choices.',
        '**Step 4 — Match to Answer:** Compare your prephrase to each answer choice. Select the one that accurately describes the specific reasoning error you identified.',
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 1: Identify the Conclusion and Premises' },
    {
      type: 'paragraph',
      text: "First, deconstruct the argument. Isolate the author's main point (the conclusion) and the evidence they use to support it (the premises). This is the same skill you learned in Modules 1 and 2, and it remains essential here.",
    },

    { type: 'h4', text: 'Tools for Deconstruction' },
    {
      type: 'breakdown',
      labels: { title: 'Tool', text: 'How to Use It' },
      items: [
        {
          title: 'Conclusion Indicators',
          text: 'Words like **therefore, thus, hence, so, consequently, it follows that** signal the conclusion. The sentence that follows these words is almost always the conclusion.',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: 'Premise Indicators',
          text: 'Words like **because, since, for, given that, as shown by, the reason is** signal premises. These introduce supporting evidence.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
        {
          title: 'The Why Test',
          text: 'If indicators are absent, try the Why Test from Module 2. For each potential conclusion, ask: "Why does the author believe this?" The answer should be the premises. The sentence that *everything else supports* is the conclusion.',
          badge: 'Backup',
          badgeColor: 'blue',
        },
      ],
    },

    { type: 'h4', text: 'Example: Deconstructing an Argument' },
    {
      type: 'blockquote',
      text: '"Studies show that students who listen to classical music while studying score higher on exams. Therefore, listening to classical music improves academic performance."',
    },
    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Identification' },
      items: [
        {
          title: 'Conclusion',
          text: '"Listening to classical music improves academic performance." This is a causal claim — classical music *improves* (causes better) performance.',
          badge: 'Conclusion',
          badgeColor: 'indigo',
        },
        {
          title: 'Premise',
          text: '"Students who listen to classical music while studying score higher on exams." This is a correlation — two things co-occur.',
          badge: 'Premise',
          badgeColor: 'slate',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Pay Attention to Conclusion Language',
      text: 'The type of language in the conclusion is a powerful clue to the type of flaw. Causal language ("causes," "improves," "leads to") often signals a causal flaw. Absolute language ("all," "never," "must") often signals a scope-shift flaw. Conditional language ("if…then," "requires") often signals a conditional logic flaw.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 2: Find the Gap' },
    {
      type: 'paragraph',
      text: 'This is the most important step. With the conclusion and premises identified, critically evaluate the connection between them. Ask yourself: **"Why doesn\'t this evidence guarantee this conclusion?"**',
    },
    {
      type: 'paragraph',
      text: 'The gap is the questionable assumption the author must be making to bridge the distance between evidence and claim. Focus on what the author has **overlooked**, **taken for granted**, or **improperly inferred**.',
    },

    { type: 'h4', text: 'The Gap Analysis Technique' },
    {
      type: 'paragraph',
      text: 'To find the gap systematically, compare the scope and nature of the premise to the scope and nature of the conclusion:',
    },
    {
      type: 'table',
      headers: ['Ask This Question', 'What It Reveals'],
      rows: [
        ['Does the conclusion claim **more** than the evidence shows?', 'A scope-shift flaw (some→all, past→future)'],
        ['Does the conclusion claim **causation** where the evidence shows only **correlation**?', 'A causal flaw'],
        ['Does the conclusion **reverse** or **negate** a conditional rule?', 'A conditional logic flaw'],
        ['Is the evidence from a **biased or unrepresentative** source?', 'A sampling flaw'],
        ['Does a key term **change meaning** between premise and conclusion?', 'An equivocation flaw'],
        ['Does the argument attack the **person** instead of the **claim**?', 'An ad hominem flaw'],
        ['Does the conclusion assume these are the **only two options**?', 'A false dichotomy'],
      ],
    },
    { type: 'h4', text: 'Not Every Assumption Is a Flaw' },
    {
      type: 'table',
      headers: ['What you notice', 'What it usually means', 'Where to route it mentally'],
      rows: [
        [
          'A mild, plausible extra belief would strengthen the argument',
          'That may just be a **reasonable assumption** or helpful support, not the flaw itself.',
          'Keep looking for the specific inferential vulnerability.',
        ],
        [
          'The argument needs a much stronger belief than the premises justify',
          'That may expose an **unreasonable assumption** and therefore a real flaw.',
          'Translate it into the exact premise-to-conclusion gap.',
        ],
        [
          'The author uses a broken reasoning pattern',
          'That is a **faulty reasoning method**: causal confusion, bad conditional move, false comparison, source attack, and so on.',
          'This is the core Flaw description you want.',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Cross-Module Routing',
      text: 'If the issue is mostly **what the author did**, you are close to **Method of Reasoning**. If the issue is **what would hurt the argument most**, you are close to **Weaken**. If the issue is **what the argument must believe**, you are close to **Necessary Assumption**. Flaw sits in the middle: identify the broken inference that makes the argument vulnerable.',
    },

    { type: 'h4', text: 'Gap Analysis: Before and After' },
    { type: 'paragraph', text: "Let's apply gap analysis to the classical music argument:" },
    {
      type: 'breakdown',
      labels: { title: 'Stage', text: 'Analysis' },
      items: [
        {
          title: 'Before Gap Analysis',
          text: '"The argument says classical music helps studying. Sounds reasonable, I guess?" — This is a passive, uncritical reading.',
          badge: 'Weak',
          badgeColor: 'red',
        },
        {
          title: 'After Gap Analysis',
          text: '"The premise shows a CORRELATION (music listeners score higher). The conclusion claims CAUSATION (music improves performance). The gap: the author assumes the correlation proves causation. But maybe students who choose to listen to music are already more disciplined, or maybe they study longer hours."',
          badge: 'Strong',
          badgeColor: 'green',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 3: Name the Flaw (Prephrase)' },
    {
      type: 'paragraph',
      text: "With the gap identified, quickly consult your **mental flaw checklist** to categorize the error. Then state the flaw in your own words — this is your **prephrase**. The prephrase doesn't need to be elegant; it just needs to be accurate.",
    },

    { type: 'h4', text: 'The Mental Flaw Checklist' },
    { type: 'paragraph', text: "Run through these categories mentally when you've found the gap:" },
    {
      type: 'process',
      title: 'Quick Flaw Check',
      steps: [
        '**Causation?** Does the author assume correlation proves causation? Could the effect cause the supposed cause (reverse causality)? Could a third factor explain both?',
        '**Conditional Logic?** Is there an "if…then" mistake? Does the argument confuse necessary conditions with sufficient conditions? Does it reverse or negate the conditional?',
        '**Sampling / Generalization?** Is the evidence from a biased or unrepresentative group? Does the argument generalize from too few cases?',
        '**Numbers vs. Data?** Does the argument confuse raw numbers with rates or percentages? Does it ignore the base rate?',
        '**Scope Shift?** Does the conclusion go beyond the evidence — from some to all, from past to present, from one group to a different group?',
        '**Source Attack?** Does the argument attack the person instead of the argument?',
        '**Equivocation?** Does a key word mean different things in the premise and the conclusion?',
        '**False Dichotomy?** Does the argument present only two options when more exist?',
        '**Absence of Evidence?** Does the argument treat a lack of proof as proof of the opposite?',
      ],
    },

    { type: 'h4', text: 'Prephrasing Tips' },
    {
      type: 'paragraph',
      text: 'When naming the flaw, move from the **specific** content of the argument to a **general** description of the error:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Level', text: 'Example' },
      items: [
        {
          title: 'Too Specific (Content-Bound)',
          text: '"The author thinks classical music helps studying, but it might not." — This is a vague objection, not a named flaw.',
          badge: 'Weak',
          badgeColor: 'red',
        },
        {
          title: 'Just Right (Abstract but Precise)',
          text: '"The author confuses correlation with causation — the fact that music listeners score higher doesn\'t mean the music caused the higher scores." — This is a categorized, precise description.',
          badge: 'Strong',
          badgeColor: 'green',
        },
        {
          title: 'Too Abstract (Vague)',
          text: '"The argument has a logical gap." — This is true of every flaw question and tells you nothing.',
          badge: 'Useless',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Step 4: Match to Answer' },
    {
      type: 'paragraph',
      text: 'Compare your prephrase to each answer choice. The correct answer will be a precise and accurate description of the specific reasoning error you identified. Use the elimination strategies below to work through the choices efficiently.',
    },
    { type: 'h4', text: 'The Two-Step Answer Test' },
    {
      type: 'table',
      headers: ['Question', 'What a strong answer does', 'Why it matters'],
      rows: [
        [
          '1. Is the description **accurate**?',
          'It really matches something the argument does or assumes.',
          'Many wrong answers sound smart but misdescribe the actual reasoning.',
        ],
        [
          '2. Is that what makes the argument **vulnerable**?',
          'It identifies the premise-to-conclusion problem, not just a nearby feature.',
          'Many trap answers are descriptively true but do not name the actual flaw.',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Why This Test Matters',
      text: 'A Flaw answer can be **descriptively accurate** and still be wrong if it names something incidental instead of the real vulnerability. The correct answer has to pass both tests.',
    },

    { type: 'h4', text: 'Common Wrong Answer Patterns' },
    {
      type: 'paragraph',
      text: 'Flaw questions have predictable trap answer types. Learning to spot these saves time:',
    },
    {
      type: 'table',
      headers: ['Wrong Answer Type', 'What It Does', 'How to Spot It'],
      rows: [
        [
          '**Describes Method, Not Flaw**',
          "Accurately describes what the argument does but doesn't identify an error",
          'The answer sounds like a neutral Method of Reasoning description — no evaluative language',
        ],
        [
          '**Right Flaw, Wrong Argument**',
          'Describes a real flaw type, but not one committed *in this argument*',
          "Check: did the argument actually commit this error? If you can't point to the exact sentences where this flaw occurs, it's wrong",
        ],
        [
          '**Too Broad**',
          'Describes the flaw in such vague terms that it could apply to almost any flawed argument',
          'Language like "fails to consider all relevant evidence" or "draws a hasty conclusion" — true but not specific enough',
        ],
        [
          '**Too Narrow / Mischaracterizes**',
          'Describes a very specific error, but gets a detail wrong (wrong premise, wrong conclusion)',
          "Check every factual claim in the answer: does it accurately describe the argument's actual conclusion and premises?",
        ],
        [
          '**Describes the Opposite Flaw**',
          'Gets the flaw direction backward (e.g., says "sufficient as necessary" when it\'s "necessary as sufficient")',
          'Common with conditional logic flaws — double-check which direction the error flows',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'The Mischaracterization Trap',
      text: 'One of the trickiest wrong answer types mischaracterizes what the argument actually says. For example, if the argument concludes "X is likely," a wrong answer might say "the argument concludes that X is certain." Always check: does this answer choice accurately describe the conclusion and premises of the *actual* argument?',
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '* The 4-Step Method gives you a repeatable process: **Identify → Gap → Name → Match.**\n* **Step 2 (Find the Gap) is the most important step.** Compare what the premises prove to what the conclusion claims.\n* **Prephrase before reading answer choices.** Name the error in your own words at a moderate level of abstraction — not too specific, not too vague.\n* Learn the **common wrong answer patterns**: describes method not flaw, right flaw wrong argument, too broad, too narrow/mischaracterizes, opposite flaw direction.\n* Watch for the **mischaracterization trap**: always verify that the answer choice accurately describes the *actual* conclusion and premises.\n* When multiple answers seem correct, choose the one that identifies the **core structural error** rather than a peripheral concern.\n* **Conclusion language is a diagnostic tool**: causal words suggest causal flaws, conditional words suggest conditional flaws, absolute words suggest scope-shift flaws.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The 4-Step Method for Flaw Questions"
        },
        {
          "type": "paragraph",
          "text": "This lesson provides a complete, repeatable method for solving any Flaw question. Each step includes concrete examples, common pitfalls, and practical shortcuts. At the end, you will work through a full question applying all four steps."
        },
        {
          "type": "callout",
          "title": "Timing",
          "variant": "tip",
          "text": "Budget **1:30–2:00** per Flaw question. The 4-step method helps you spend that time efficiently: roughly **30 seconds** deconstructing the argument, **20 seconds** finding the gap and prephrasing, and **40–60 seconds** evaluating answer choices. With practice, the gap identification becomes nearly instantaneous for common flaw patterns."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Overview"
        },
        {
          "type": "process",
          "title": "The 4-Step Method",
          "steps": [
            "**Step 1 — Identify the Conclusion and Premises:** Break the argument into its structural components. What is the author trying to prove, and what evidence do they offer?",
            "**Step 2 — Find the Gap:** Ask: \"Why doesn't this evidence *guarantee* this conclusion?\" Identify the disconnect between premises and conclusion.",
            "**Step 3 — Name the Flaw (Prephrase):** Categorize the error using your mental flaw checklist. State the flaw in your own words *before* looking at answer choices.",
            "**Step 4 — Match to Answer:** Compare your prephrase to each answer choice. Select the one that accurately describes the specific reasoning error you identified."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 1: Identify the Conclusion and Premises"
        },
        {
          "type": "paragraph",
          "text": "First, deconstruct the argument. Isolate the author's main point (the conclusion) and the evidence they use to support it (the premises). This is the same skill you learned in Modules 1 and 2, and it remains essential here."
        },
        {
          "type": "h4",
          "text": "Tools for Deconstruction"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Tool",
            "text": "How to Use It"
          },
          "items": [
            {
              "title": "Conclusion Indicators",
              "text": "Words like **therefore, thus, hence, so, consequently, it follows that** signal the conclusion. The sentence that follows these words is almost always the conclusion.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "Premise Indicators",
              "text": "Words like **because, since, for, given that, as shown by, the reason is** signal premises. These introduce supporting evidence.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "The Why Test",
              "text": "If indicators are absent, try the Why Test from Module 2. For each potential conclusion, ask: \"Why does the author believe this?\" The answer should be the premises. The sentence that *everything else supports* is the conclusion.",
              "badge": "Backup",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Example: Deconstructing an Argument"
        },
        {
          "type": "blockquote",
          "text": "\"Studies show that students who listen to classical music while studying score higher on exams. Therefore, listening to classical music improves academic performance.\""
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "Identification"
          },
          "items": [
            {
              "title": "Conclusion",
              "text": "\"Listening to classical music improves academic performance.\" This is a causal claim — classical music *improves* (causes better) performance.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "Premise",
              "text": "\"Students who listen to classical music while studying score higher on exams.\" This is a correlation — two things co-occur.",
              "badge": "Premise",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Pay Attention to Conclusion Language",
          "variant": "default",
          "text": "The type of language in the conclusion is a powerful clue to the type of flaw. Causal language (\"causes,\" \"improves,\" \"leads to\") often signals a causal flaw. Absolute language (\"all,\" \"never,\" \"must\") often signals a scope-shift flaw. Conditional language (\"if…then,\" \"requires\") often signals a conditional logic flaw."
        },
        {
          "type": "hr"
        },
        { type: 'diff-note', text: '{{+add+}} After Step 1, insert a brief "try it yourself" exercise: give a 3-sentence argument and ask the student to label the conclusion and premises before continuing. This activates the skill before moving to the harder gap-finding step.', variant: 'comment' },
        {
          "type": "h2",
          "text": "Step 2: Find the Gap"
        },
        {
          "type": "paragraph",
          "text": "This is the most important step. With the conclusion and premises identified, critically evaluate the connection between them. Ask yourself: **\"Why doesn't this evidence guarantee this conclusion?\"**"
        },
        {
          "type": "paragraph",
          "text": "The gap is the questionable assumption the author must be making to bridge the distance between evidence and claim. Focus on what the author has **overlooked**, **taken for granted**, or **improperly inferred**."
        },
        {
          "type": "h4",
          "text": "The Gap Analysis Technique"
        },
        {
          "type": "paragraph",
          "text": "To find the gap systematically, compare the scope and nature of the premise to the scope and nature of the conclusion:"
        },
        {
          "type": "table",
          "headers": [
            "Ask This Question",
            "What It Reveals"
          ],
          "rows": [
            [
              "Does the conclusion claim **more** than the evidence shows?",
              "A scope-shift flaw (some→all, past→future)"
            ],
            [
              "Does the conclusion claim **causation** where the evidence shows only **correlation**?",
              "A causal flaw"
            ],
            [
              "Does the conclusion **reverse** or **negate** a conditional rule?",
              "A conditional logic flaw"
            ],
            [
              "Is the evidence from a **biased or unrepresentative** source?",
              "A sampling flaw"
            ],
            [
              "Does a key term **change meaning** between premise and conclusion?",
              "An equivocation flaw"
            ],
            [
              "Does the argument attack the **person** instead of the **claim**?",
              "An ad hominem flaw"
            ],
            [
              "Does the conclusion assume these are the **only two options**?",
              "A false dichotomy"
            ]
          ]
        },
        {
          "type": "h4",
          "text": "Gap Analysis: Before and After"
        },
        {
          "type": "paragraph",
          "text": "Let's apply gap analysis to the classical music argument:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Stage",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "Before Gap Analysis",
              "text": "\"The argument says classical music helps studying. Sounds reasonable, I guess?\" — This is a passive, uncritical reading.",
              "badge": "Weak",
              "badgeColor": "red"
            },
            {
              "title": "After Gap Analysis",
              "text": "\"The premise shows a CORRELATION (music listeners score higher). The conclusion claims CAUSATION (music improves performance). The gap: the author assumes the correlation proves causation. But maybe students who choose to listen to music are already more disciplined, or maybe they study longer hours.\"",
              "badge": "Strong",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 3: Name the Flaw (Prephrase)"
        },
        {
          "type": "paragraph",
          "text": "With the gap identified, quickly consult your **mental flaw checklist** to categorize the error. Then state the flaw in your own words — this is your **prephrase**. The prephrase doesn't need to be elegant; it just needs to be accurate."
        },
        { type: 'diff-note', text: '{{~change~}} The Mental Flaw Checklist (9 items) also appears in Lesson 5-3 (Field Guide flowchart) and Lesson 5-12 (Reference Guide checklist). Three copies is redundant. Keep this as the first-encounter version and add a note: "You will find expanded versions of this checklist in the Field Guide and Reference Guide." Remove the duplicate from 5-3.', variant: 'comment' },
        {
          "type": "h4",
          "text": "The Mental Flaw Checklist"
        },
        {
          "type": "paragraph",
          "text": "Run through these categories mentally when you've found the gap:"
        },
        {
          "type": "process",
          "title": "Quick Flaw Check",
          "steps": [
            "**Causation?** Does the author assume correlation proves causation? Could the effect cause the supposed cause (reverse causality)? Could a third factor explain both?",
            "**Conditional Logic?** Is there an \"if…then\" mistake? Does the argument confuse necessary conditions with sufficient conditions? Does it reverse or negate the conditional?",
            "**Sampling / Generalization?** Is the evidence from a biased or unrepresentative group? Does the argument generalize from too few cases?",
            "**Numbers vs. Data?** Does the argument confuse raw numbers with rates or percentages? Does it ignore the base rate?",
            "**Scope Shift?** Does the conclusion go beyond the evidence — from some to all, from past to present, from one group to a different group?",
            "**Source Attack?** Does the argument attack the person instead of the argument?",
            "**Equivocation?** Does a key word mean different things in the premise and the conclusion?",
            "**False Dichotomy?** Does the argument present only two options when more exist?",
            "**Absence of Evidence?** Does the argument treat a lack of proof as proof of the opposite?"
          ]
        },
        {
          "type": "h4",
          "text": "Prephrasing Tips"
        },
        {
          "type": "paragraph",
          "text": "When naming the flaw, move from the **specific** content of the argument to a **general** description of the error:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Level",
            "text": "Example"
          },
          "items": [
            {
              "title": "Too Specific (Content-Bound)",
              "text": "\"The author thinks classical music helps studying, but it might not.\" — This is a vague objection, not a named flaw.",
              "badge": "Weak",
              "badgeColor": "red"
            },
            {
              "title": "Just Right (Abstract but Precise)",
              "text": "\"The author confuses correlation with causation — the fact that music listeners score higher doesn't mean the music caused the higher scores.\" — This is a categorized, precise description.",
              "badge": "Strong",
              "badgeColor": "green"
            },
            {
              "title": "Too Abstract (Vague)",
              "text": "\"The argument has a logical gap.\" — This is true of every flaw question and tells you nothing.",
              "badge": "Useless",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step 4: Match to Answer"
        },
        {
          "type": "paragraph",
          "text": "Compare your prephrase to each answer choice. The correct answer will be a precise and accurate description of the specific reasoning error you identified. Use the elimination strategies below to work through the choices efficiently."
        },
        {
          "type": "h4",
          "text": "Common Wrong Answer Patterns"
        },
        {
          "type": "paragraph",
          "text": "Flaw questions have predictable trap answer types. Learning to spot these saves time:"
        },
        {
          "type": "table",
          "headers": [
            "Wrong Answer Type",
            "What It Does",
            "How to Spot It"
          ],
          "rows": [
            [
              "**Describes Method, Not Flaw**",
              "Accurately describes what the argument does but doesn't identify an error",
              "The answer sounds like a neutral Method of Reasoning description — no evaluative language"
            ],
            [
              "**Right Flaw, Wrong Argument**",
              "Describes a real flaw type, but not one committed *in this argument*",
              "Check: did the argument actually commit this error? If you can't point to the exact sentences where this flaw occurs, it's wrong"
            ],
            [
              "**Too Broad**",
              "Describes the flaw in such vague terms that it could apply to almost any flawed argument",
              "Language like \"fails to consider all relevant evidence\" or \"draws a hasty conclusion\" — true but not specific enough"
            ],
            [
              "**Too Narrow / Mischaracterizes**",
              "Describes a very specific error, but gets a detail wrong (wrong premise, wrong conclusion)",
              "Check every factual claim in the answer: does it accurately describe the argument's actual conclusion and premises?"
            ],
            [
              "**Describes the Opposite Flaw**",
              "Gets the flaw direction backward (e.g., says \"sufficient as necessary\" when it's \"necessary as sufficient\")",
              "Common with conditional logic flaws — double-check which direction the error flows"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Mischaracterization Trap",
          "variant": "default",
          "text": "One of the trickiest wrong answer types mischaracterizes what the argument actually says. For example, if the argument concludes \"X is likely,\" a wrong answer might say \"the argument concludes that X is certain.\" Always check: does this answer choice accurately describe the conclusion and premises of the *actual* argument?"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Full Worked Example"
        },
        { type: 'diff-note', text: '{{+add+}} Add a question-card component here instead of a blockquote + inline analysis. The food-truck editorial has a natural 5-choice structure already implied by the analysis. Present it as: stimulus (blockquote) + "Attempt this question before reading the analysis below" prompt + 5 answer choices + then the step-by-step walkthrough. This is the method lesson -- students should practice the method, not just read about it.', variant: 'comment' },
        {
          "type": "paragraph",
          "text": "Let's apply all four steps to a complete Flaw question."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"Editorial: The city council recently voted to ban all food trucks from operating within the downtown area, arguing that food trucks create litter and traffic congestion. But this ban is clearly unjustified, because several food truck owners have stated that they always clean up after themselves and have never received a littering citation.\""
        },
        {
          "type": "paragraph",
          "text": "This scenario is useful because it contains two real vulnerabilities at once: the editorial relies on testimony from only some owners, and it answers only the litter concern while leaving traffic congestion untouched."
        },
        {
          "type": "h3",
          "text": "Applying the 4-Step Method"
        },
        {
          "type": "process",
          "title": "Step-by-Step Walkthrough",
          "steps": [
            "**Step 1 — Identify Conclusion & Premises:**\n• **Conclusion:** The ban is clearly unjustified.\n• **Premise 1:** The council cited litter and traffic congestion as reasons.\n• **Premise 2:** Several food truck owners say they clean up and have never received littering citations.\n• **Premise 3 (implicit):** Since the litter claim is disputed, the ban is unjustified.",
            "**Step 2 — Find the Gap:**\nThe editorial uses testimony from *some* food truck owners to dismiss the ban on *all* food trucks. Several problems: (1) \"several owners\" is not all owners — maybe others do litter; (2) the editorial only addresses the litter concern but ignores the traffic congestion concern; (3) the owners are a biased source (self-interested). The gap: the evidence is both **unrepresentative** and **incomplete**.",
            "**Step 3 — Prephrase:**\nThe argument generalizes from a few food truck owners to all of them, and it only addresses one of the two stated reasons for the ban. My prephrase: \"The argument uses evidence from some owners to make a claim about all food trucks, and ignores the traffic congestion reason.\"",
            "**Step 4 — Match to Answer:**\nScan for an answer that describes a sampling/generalization flaw or a failure to address all reasons."
          ]
        },
        {
          "type": "callout",
          "title": "What the Method Reveals",
          "variant": "default",
          "text": "This editorial is weak for two independent reasons. First, it generalizes from a few self-interested owners to the entire food-truck population. Second, it answers only one of the council's stated concerns. That combination is a useful reminder that Flaw arguments can be vulnerable in more than one place, even when one defect does the most structural damage."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Prephrasing Practice"
        },
        { type: 'diff-note', text: '{{!note!}} The three prephrasing snippets with accordion reveals are excellent active-learning tools -- this is the best section of the lesson. Consider adding difficulty ratings (Easy / Medium / Hard) to each snippet so students can gauge their progress. Snippet 1 (conditional) is harder than Snippet 3 (ad hominem) for most students.', variant: 'comment' },
        {
          "type": "paragraph",
          "text": "Prephrasing is the skill that separates good Flaw solvers from great ones. Here are three argument snippets — practice naming the flaw before reading the answer:"
        },
        {
          "type": "h4",
          "text": "Snippet 1"
        },
        {
          "type": "blockquote",
          "text": "\"If a country has a strong military, it will be safe from invasion. Country X is safe from invasion. Therefore, Country X must have a strong military.\""
        },
        {
          "type": "accordion",
          "title": "Reveal the Flaw",
          "content": "**Conditional Logic Flaw — Affirming the Consequent.** The argument reverses the conditional. Knowing that A → B and that B is true does NOT mean A is true. Country X might be safe for other reasons (geography, alliances, etc.)."
        },
        {
          "type": "h4",
          "text": "Snippet 2"
        },
        {
          "type": "blockquote",
          "text": "\"No one has proven that the new pesticide harms honeybees. Therefore, the pesticide is safe for honeybees.\""
        },
        {
          "type": "accordion",
          "title": "Reveal the Flaw",
          "content": "**Argument from Ignorance (Absence of Evidence).** The absence of proof that the pesticide is harmful is not proof that it is safe. Perhaps no studies have been conducted, or the effects take years to manifest."
        },
        {
          "type": "h4",
          "text": "Snippet 3"
        },
        {
          "type": "blockquote",
          "text": "\"Professor Lee argues that the university should require a foreign language course. But Professor Lee has never traveled abroad and speaks only English. Clearly, the foreign language requirement is a bad idea.\""
        },
        {
          "type": "accordion",
          "title": "Reveal the Flaw",
          "content": "**Ad Hominem (Source Attack).** The argument rejects the proposal by attacking Professor Lee's personal qualifications rather than the merits of the foreign language requirement itself. Whether Lee speaks a foreign language is irrelevant to whether the requirement is good policy."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• The 4-Step Method gives you a repeatable process: **Identify → Gap → Name → Match.**\n• **Step 2 (Find the Gap) is the most important step.** Compare what the premises prove to what the conclusion claims.\n• **Prephrase before reading answer choices.** Name the error in your own words at a moderate level of abstraction — not too specific, not too vague.\n• Learn the **common wrong answer patterns**: describes method not flaw, right flaw wrong argument, too broad, too narrow/mischaracterizes, opposite flaw direction.\n• Watch for the **mischaracterization trap**: always verify that the answer choice accurately describes the *actual* conclusion and premises.\n• When multiple answers seem correct, choose the one that identifies the **core structural error** rather than a peripheral concern.\n• **Conclusion language is a diagnostic tool**: causal words suggest causal flaws, conditional words suggest conditional flaws, absolute words suggest scope-shift flaws."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        {
          type: 'callout',
          variant: 'tip',
          text: '**Target:** 1:30 per Flaw question',
        },
        {
          type: 'process',
          title: 'The 4-Step Method',
          steps: [
            '**Identify conclusion and premises.** Separate the claim from its support.',
            '**Find the gap.** What must be true for the premises to prove the conclusion \u2014 but isn\'t stated?',
            '**Name the flaw.** Label the error at a moderate level of abstraction \u2014 specific enough to be useful, general enough to match answer choice language.',
            '**Match to answer.** Find the choice that accurately describes the error you identified. Reject answers that describe a different flaw or mislabel this one.',
          ],
        },
        { type: 'h3', text: 'Decision Table' },
        {
          type: 'table',
          headers: ['If You See', 'Then Do', 'Watch Out For'],
          rows: [
            ['Correlation mentioned', 'Check for **Causal flaw** (correlation \u2192 causation, reverse causation, third factor)', 'Wrong causal sub-type in the answer'],
            ['If-then language', 'Check for **Conditional flaw** (mistaken reversal, mistaken negation, nec. vs. suff.)', 'Answer reverses the direction of the error'],
            ['Sample mentioned', 'Check for **Sampling flaw** (biased sample, too-small sample, self-selected)', 'Answer describes a numbers-vs.-percentages error instead'],
            ['Conclusion broader than evidence', 'Check for **Scope shift** (some\u2192all, part\u2192whole, possible\u2192certain)', 'Answer describes a causal flaw instead of a scope shift'],
            ['Person attacked', 'Check for **Ad hominem** (source attack rather than addressing the argument)', 'Answer describes a straw man instead'],
            ['Only two options', 'Check for **False dichotomy** (more options exist)', 'Answer describes circular reasoning instead'],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '**Identify \u2192 Gap \u2192 Name \u2192 Match**',
        },
      ],
    },
  },
};
