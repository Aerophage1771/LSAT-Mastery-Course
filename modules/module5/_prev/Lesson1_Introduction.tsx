import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '5-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 5: Flaw' },
    {
      type: 'paragraph',
      text: "**Question Goal**\n\n**Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence.** In other words, why is the logical connection between the premises and the conclusion broken? Your task is not merely to notice that the argument is weak — you must name the *specific* way it fails.",
    },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Flaw is the **single most frequently tested** question type in Logical Reasoning. It appears on virtually every scored LR section, often multiple times. Across recent administrations, Flaw questions account for roughly **15–18% of all scored LR questions** — more than any other type.',
    },
    {
      type: 'paragraph',
      text: "Beyond raw frequency, the Flaw skill is the **foundation** for several other question types. Strengthen, Weaken, and Assumption questions all require you to locate the gap in reasoning first. If you can accurately diagnose an argument's flaw, answering those related question types becomes dramatically easier. Mastering this module pays dividends across roughly 40–50% of the entire LR section.",
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Frequency & Timing',
      text: 'Expect **3–4 Flaw questions per 25-question LR section.** Budget roughly **1:30–2:00 per question.** These questions reward prephrasing: if you can name the flaw before reading the choices, you can often spot the match in seconds.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    {
      type: 'paragraph',
      text: 'You can identify Flaw questions because they ask about the error, vulnerability, or questionable technique used in the argument. The language is always evaluative — the stem assumes the argument *has* a problem and asks you to describe it.',
    },
    {
      type: 'table',
      headers: ['Question Stem Pattern', 'Key Signal'],
      rows: [
        [
          '"The reasoning in the argument is most vulnerable to criticism on the grounds that the argument..."',
          'Asks what the argument is **vulnerable** to',
        ],
        ['"The argument\'s reasoning is flawed in that it..."', 'Directly states the reasoning is **flawed**'],
        [
          '"Which one of the following most accurately describes a flaw in the reasoning?"',
          'Asks you to **describe** the flaw',
        ],
        ['"The reasoning in the argument is questionable because..."', 'Flags reasoning as **questionable**'],
        ['"A questionable technique used in the argument is to..."', 'Asks for the **technique** (the error)'],
        ['"The argument is most vulnerable to the objection that it..."', 'Asks for the **objection** (criticism)'],
        [
          '"The reasoning above is flawed because it fails to consider..."',
          'Asks what the argument **fails to consider**',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Flaw vs. "Vulnerable to Criticism"',
      text: 'The phrase "vulnerable to criticism" is the most common Flaw stem. Don\'t confuse it with a Weaken question. A Weaken question says "which of the following, *if true*, would most weaken..." — the phrase "if true" signals Weaken. A Flaw stem never asks you to add new information; it asks you to describe the existing reasoning error.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Quick Example' },
    {
      type: 'blockquote',
      text: '"People who eat breakfast every day are, on average, thinner than people who skip breakfast. Therefore, eating breakfast causes weight loss."',
    },
    {
      type: 'paragraph',
      text: 'The premise shows a **correlation** (breakfast-eaters are thinner). The conclusion claims **causation** (breakfast causes weight loss). The flaw: the argument confuses correlation with causation — it mistakes co-occurrence for a causal relationship. Perhaps thinner people simply have more time for breakfast, or a third factor drives both behaviors.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'What You\'ll Learn in This Module' },
    {
      type: 'process',
      title: 'Module 5 Roadmap',
      steps: [
        '**Foundations** — The Flaw Mindset, how Flaw differs from Method of Reasoning, the Gap Model for locating reasoning errors, common flaw categories, and indicator words.',
        '**Step-by-Step Guide** — A repeatable process for solving any Flaw question under timed conditions.',
        '**Field Guide** — Deep dives into each major flaw category with examples and answer-choice language.',
        '**Drills** — Targeted practice sets for causation, numbers vs. percentages, unrepresentative samples, and conditional logic flaws.',
        '**Advanced Concepts** — Necessary vs. sufficient conditions, strategy vs. certainty, and quantitative conditional patterns.',
        '**Reference Guide** — A quick-lookup resource consolidating all flaw categories, stem patterns, and indicator words.',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'Flaw is the **most frequently tested** LR question type and the foundation for Strengthen, Weaken, and Assumption questions. Your core task is to find the **Logical Gap** — the disconnect between what the premises prove and what the conclusion claims — and name the specific reasoning error that creates it. Recognize Flaw stems by their evaluative language ("vulnerable to criticism," "flawed in that," "questionable because") and always **prephrase** the flaw before reading answer choices.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 5: Flaw"
        },
        {
          "type": "paragraph",
          "text": "**Question Goal**\n\n**Identify the specific reasoning error that makes the argument's conclusion unproven by its evidence.** In other words, why is the logical connection between the premises and the conclusion broken? Your task is not merely to notice that the argument is weak — you must name the *specific* way it fails."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Flaw is the **single most frequently tested** question type in Logical Reasoning. It appears on virtually every scored LR section, often multiple times. Across recent administrations, Flaw questions account for roughly **15–18% of all scored LR questions** — more than any other type."
        },
        {
          "type": "paragraph",
          "text": "Beyond raw frequency, the Flaw skill is the **foundation** for several other question types. Strengthen, Weaken, and Assumption questions all require you to locate the gap in reasoning first. If you can accurately diagnose an argument's flaw, answering those related question types becomes dramatically easier. Mastering this module pays dividends across roughly 40–50% of the entire LR section."
        },
        {
          "type": "callout",
          "title": "Frequency & Timing",
          "variant": "tip",
          "text": "Expect **3–4 Flaw questions per 25-question LR section.** Budget roughly **1:30–2:00 per question.** These questions reward prephrasing: if you can name the flaw before reading the choices, you can often spot the match in seconds."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Recognizing the Question"
        },
        {
          "type": "paragraph",
          "text": "You can identify Flaw questions because they ask about the error, vulnerability, or questionable technique used in the argument. The language is always evaluative — the stem assumes the argument *has* a problem and asks you to describe it."
        },
        {
          "type": "table",
          "headers": [
            "Question Stem Pattern",
            "Key Signal"
          ],
          "rows": [
            [
              "\"The reasoning in the argument is most vulnerable to criticism on the grounds that the argument...\"",
              "Asks what the argument is **vulnerable** to"
            ],
            [
              "\"The argument's reasoning is flawed in that it...\"",
              "Directly states the reasoning is **flawed**"
            ],
            [
              "\"Which one of the following most accurately describes a flaw in the reasoning?\"",
              "Asks you to **describe** the flaw"
            ],
            [
              "\"The reasoning in the argument is questionable because...\"",
              "Flags reasoning as **questionable**"
            ],
            [
              "\"A questionable technique used in the argument is to...\"",
              "Asks for the **technique** (the error)"
            ],
            [
              "\"The argument is most vulnerable to the objection that it...\"",
              "Asks for the **objection** (criticism)"
            ],
            [
              "\"The reasoning above is flawed because it fails to consider...\"",
              "Asks what the argument **fails to consider**"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Flaw vs. \"Vulnerable to Criticism\"",
          "variant": "default",
          "text": "The phrase \"vulnerable to criticism\" is the most common Flaw stem. Don't confuse it with a Weaken question. A Weaken question says \"which of the following, *if true*, would most weaken...\" — the phrase \"if true\" signals Weaken. A Flaw stem never asks you to add new information; it asks you to describe the existing reasoning error."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Flaw Mindset: From Description to Evaluation"
        },
        { type: 'diff-note', text: '{{+add+}} Insert a mini-exercise after the Flaw Mindset section: give a 2-sentence argument and ask the student to say whether it is a Method of Reasoning or Flaw task. Active learning this early prevents the passive-reading problem that plagues the intro lessons.', variant: 'comment' },
        {
          "type": "paragraph",
          "text": "**Flaw questions represent a critical turning point in your Logical Reasoning journey.** After learning to *describe* arguments (Method of Reasoning), your task now shifts to **evaluating** them. You must identify the specific logical error — the \"flaw\" — that makes the author's conclusion suspect."
        },
        {
          "type": "paragraph",
          "text": "This shift changes how you read arguments. In Method of Reasoning, you asked: \"What is the author doing?\" In Flaw, you ask: **\"Where did the author go wrong?\"** You are no longer a neutral reporter of technique — you are a critical evaluator of logic."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Question Type",
            "text": "Your Role"
          },
          "items": [
            {
              "title": "Method of Reasoning",
              "text": "**Describe** the technique the author uses. You are a neutral reporter. \"The author uses an analogy to support the conclusion.\"",
              "badge": "Descriptive",
              "badgeColor": "blue"
            },
            {
              "title": "Flaw",
              "text": "**Evaluate** the technique the author uses. You are a critical judge. \"The author's analogy is flawed because the two cases differ in a relevant way.\"",
              "badge": "Evaluative",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Flaw vs. Method of Reasoning"
        },
        {
          "type": "paragraph",
          "text": "Because both question types ask you to analyze *how* an argument works, students sometimes confuse them. The table below makes the distinction clear:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Method of Reasoning",
            "Flaw"
          ],
          "rows": [
            [
              "**Goal**",
              "Describe what the author does",
              "Identify what the author does *wrong*"
            ],
            [
              "**Assumption**",
              "The argument may or may not be valid",
              "The argument is definitely flawed"
            ],
            [
              "**Correct answer describes...**",
              "A neutral technique (analogy, generalization, counterexample)",
              "A specific error (confuses correlation with causation, treats necessary as sufficient)"
            ],
            [
              "**Stem language**",
              "\"proceeds by,\" \"does which of the following\"",
              "\"vulnerable to criticism,\" \"flawed in that,\" \"questionable because\""
            ],
            [
              "**Evaluation required?**",
              "No — just label the technique",
              "Yes — explain *why* the technique fails"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "The Gap Model"
        },
        {
          "type": "paragraph",
          "text": "The most important concept for Flaw questions is the **Logical Gap.** Every flawed argument has a gap between what the premises prove and what the conclusion claims. The flaw is the *reason* that gap exists."
        },
        {
          "type": "paragraph",
          "text": "Think of it this way: the premises are the foundation and the conclusion is the roof. In a valid argument, there is a sturdy pillar connecting them. In a flawed argument, the pillar is missing or cracked. Your job is to describe the missing or cracked pillar — the **unwarranted assumption** the author makes when leaping from evidence to claim."
        },
        {
          "type": "h4",
          "text": "Accepting the Premises"
        },
        {
          "type": "paragraph",
          "text": "To find the gap, you must follow a critical rule: **provisionally accept the premises as true.** Do not waste time arguing with the stated facts. The flaw is *never* that a premise is factually untrue. Instead, focus entirely on the *relationship* between those facts and the conclusion."
        },
        {
          "type": "h4",
          "text": "Fact vs. Interpretation"
        },
        {
          "type": "paragraph",
          "text": "While you accept the *facts*, you must question the *interpretation* of those facts:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Stance",
            "text": "What It Means"
          },
          "items": [
            {
              "title": "Accept the Fact",
              "text": "If the author says \"a recent study showed X,\" you accept that the study exists and showed X. You do not challenge the study's existence.",
              "badge": "Accept",
              "badgeColor": "green"
            },
            {
              "title": "Question the Interpretation",
              "text": "You are free to ask: Does this study actually prove the conclusion? Could the data be explained another way? Is the sample representative? Does the conclusion go beyond what the evidence supports?",
              "badge": "Question",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "The key test is always: **\"Even if I accept all these premises as 100% true, is the conclusion guaranteed to be true?\"** If the answer is \"No,\" the reason *why* is the flaw."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Gap Model in Action"
        },
        {
          "type": "paragraph",
          "text": "Let's see how the Gap Model works on a concrete argument:"
        },
        {
          "type": "blockquote",
          "text": "\"People who eat breakfast every day are, on average, thinner than people who skip breakfast. Therefore, eating breakfast causes weight loss.\""
        },
        {
          "type": "process",
          "title": "Applying the Gap Model",
          "steps": [
            "**Identify the Conclusion:** Eating breakfast *causes* weight loss.",
            "**Identify the Premise:** People who eat breakfast daily are thinner on average.",
            "**Accept the Premise:** Yes, we accept that breakfast-eaters are thinner. This is a correlation.",
            "**Find the Gap:** The conclusion claims *causation*, but the premise only shows *correlation*. There is a gap between \"these two things happen together\" and \"one causes the other.\" Perhaps thinner people have more time for breakfast, or a third factor (like health-consciousness) drives both behaviors.",
            "**Name the Flaw:** The argument confuses correlation with causation — it mistakes the fact that two things co-occur for evidence that one causes the other."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Common Flaw Categories — Preview"
        },
        { type: 'diff-note', text: '{{-remove-}} Cut the entire 10-row flaw category preview table and the indicator words table below it. Both are duplicated in much greater depth in Lesson 5-3 (Field Guide) and Lesson 5-12 (Reference Guide). Replace with a single paragraph: "The Field Guide (next lesson) catalogs every major flaw category with examples and LSAT answer-choice language. The Reference Guide consolidates them into quick-lookup tables."', variant: 'comment' },
        {
          "type": "paragraph",
          "text": "While every argument is unique in its topic, the logical errors arguments commit fall into **predictable categories**. Recognizing these categories on sight is one of the most powerful skills you can develop. The next lesson (Field Guide) covers each in depth; here is a preview of the major families:"
        },
        {
          "type": "table",
          "headers": [
            "Flaw Category",
            "Core Error",
            "Approx. Frequency",
            "Priority"
          ],
          "rows": [
            [
              "**Causal Flaws**",
              "Confusing correlation with causation",
              "~20%",
              "★★★ High"
            ],
            [
              "**Conditional Logic Flaws**",
              "Misapplying if/then rules (reversals, negations)",
              "~15%",
              "★★★ High"
            ],
            [
              "**Overlooking Possibilities**",
              "Failing to consider alternative explanations",
              "~15%",
              "★★★ High"
            ],
            [
              "**Statistical / Sampling Flaws**",
              "Bad sample, numbers vs. percentages, part vs. whole",
              "~12%",
              "★★☆ Medium-High"
            ],
            [
              "**Scope Shift Flaws**",
              "Conclusions that go beyond the evidence (some→all, past→present)",
              "~10%",
              "★★☆ Medium-High"
            ],
            [
              "**Source Attack (Ad Hominem)**",
              "Attacking the person instead of the argument",
              "~8%",
              "★★☆ Medium"
            ],
            [
              "**Equivocation**",
              "Using a key term in two different senses",
              "~7%",
              "★★☆ Medium"
            ],
            [
              "**Circular Reasoning**",
              "Restating the conclusion as a premise",
              "~5%",
              "★☆☆ Lower"
            ],
            [
              "**False Dichotomy**",
              "Treating two options as exhaustive when others exist",
              "~4%",
              "★☆☆ Lower"
            ],
            [
              "**Appeal to Authority / Ignorance**",
              "Misusing authority or absence of evidence",
              "~4%",
              "★☆☆ Lower"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Big Three",
          "variant": "tip",
          "text": "Causal flaws, conditional logic flaws, and overlooking possibilities account for roughly **50%** of all Flaw questions. If you master only three categories, make it these three."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Indicator Words That Signal Flawed Reasoning"
        },
        {
          "type": "paragraph",
          "text": "Certain words in an argument's conclusion or premises often signal a specific type of flaw. Train yourself to react to these trigger words:"
        },
        {
          "type": "table",
          "headers": [
            "Trigger Words in the Stimulus",
            "Likely Flaw Type"
          ],
          "rows": [
            [
              "\"causes,\" \"leads to,\" \"results in,\" \"stimulates\"",
              "Causal Flaw (correlation → causation)"
            ],
            [
              "\"if,\" \"only if,\" \"unless,\" \"requires,\" \"all...are\"",
              "Conditional Logic Flaw (reversal or negation)"
            ],
            [
              "\"survey,\" \"study,\" \"poll,\" \"sample,\" \"respondents\"",
              "Sampling / Generalization Flaw"
            ],
            [
              "\"most,\" \"on average,\" \"percentage,\" \"rate,\" \"number\"",
              "Statistical Flaw (numbers vs. percentages)"
            ],
            [
              "\"some,\" \"a few,\" \"certain\" (premise) → \"all,\" \"no,\" \"every\" (conclusion)",
              "Scope Shift (hasty generalization)"
            ],
            [
              "\"you can't trust X because...\" (attacking the source)",
              "Ad Hominem / Source Attack"
            ],
            [
              "\"either X or Y\" (with no third option considered)",
              "False Dichotomy"
            ],
            [
              "A key term used differently in premise vs. conclusion",
              "Equivocation"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Your First Flaw Question"
        },
        { type: 'diff-note', text: '{{~change~}} Convert this walkthrough into a question-card with five answer choices so students can attempt it before seeing the analysis. The ad-hominem politician example is good for a first encounter, but presenting it as a card with choices would mirror the real LSAT experience. Add an "Attempt this question before reading on" prompt.', variant: 'comment' },
        {
          "type": "paragraph",
          "text": "Let's put everything together with a concrete practice question. Read the stimulus, find the gap, name the flaw, and match it to the correct answer."
        },
        {
          "type": "paragraph",
          "text": "Consider this illustrative argument:"
        },
        {
          "type": "blockquote",
          "text": "\"Politician: My opponent claims we should invest more in public transportation. But my opponent has never even ridden a bus. How can someone who has never used public transit know what it needs? We should reject this proposal.\""
        },
        {
          "type": "paragraph",
          "text": "This example is useful because the flaw is easy to isolate: the speaker never tests the transportation proposal itself and instead attacks the proponent's personal qualifications."
        },
        {
          "type": "h3",
          "text": "Walkthrough"
        },
        {
          "type": "process",
          "title": "Solving Step by Step",
          "steps": [
            "**Identify the Conclusion:** We should reject the opponent's public transportation proposal.",
            "**Identify the Premises:** The opponent has never ridden a bus. Therefore, the opponent cannot know what public transit needs.",
            "**Find the Gap:** The argument does not engage with the *substance* of the proposal at all. Instead, it attacks the opponent's personal experience. Whether or not the opponent rides buses is irrelevant to whether the proposal itself has merit.",
            "**Name the Flaw:** This is an **ad hominem** (source attack) — the argument rejects a claim by attacking the person who made it, rather than addressing the claim's content.",
            "**Match to Answer:** Look for language describing a source attack or personal attack rather than a causal, statistical, or conditional error."
          ]
        },
        {
          "type": "callout",
          "title": "Why This Is an Ad Hominem",
          "variant": "default",
          "text": "The conclusion is about whether the proposal should be rejected, but the support concerns only the opponent's personal background. That mismatch is the flaw. When the evidence attacks a speaker instead of the claim itself, you are looking at a source attack, not a dispute over the proposal's substance."
        },
        {
          "type": "hr"
        },
        { type: 'diff-note', text: '{{!note!}} The Key Takeaways summary is strong. Consider adding one bullet about the relationship to Assumption questions: "The flaw IS the unwarranted assumption. Once you can name the flaw, you have already found the assumption -- Modules 6-8 build directly on this skill." This connects Module 5 forward.', variant: 'comment' },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• Flaw is the **most frequently tested** LR question type (~15–18% of scored questions) and the foundation for Strengthen, Weaken, and Assumption questions.\n• Recognize Flaw stems by their evaluative language: \"vulnerable to criticism,\" \"flawed in that,\" \"questionable because.\"\n• The core skill is finding the **Logical Gap**: the disconnect between what the premises prove and what the conclusion claims.\n• **Accept the premises** as true — the flaw is never that a stated fact is wrong. The flaw is in the *reasoning* that connects facts to conclusion.\n• Most flaws fall into **predictable categories** (causal, conditional, statistical, scope shift, etc.). Learning these categories lets you prephrase answers accurately.\n• Always **prephrase** the flaw before reading answer choices. Name the error in your own words, then look for the match.\n• Flaw questions are distinct from Method of Reasoning: MoR asks you to *describe* the technique; Flaw asks you to *evaluate* and identify the error."
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Flaw \u2014 At a Glance' },
        {
          type: 'paragraph',
          text: '**Goal:** Identify the specific reasoning error that makes the argument\'s conclusion unproven by its evidence. **Frequency:** ~15\u201318% of scored LR questions \u2014 the most-tested type.',
        },
        {
          type: 'table',
          headers: ['Stem Pattern', 'Core Skill', 'Common Trap'],
          rows: [
            ['"...most vulnerable to criticism on the grounds that..."', 'Name the flaw', 'Confusing with a Weaken stem'],
            ['"The reasoning is flawed in that it..."', 'Name the flaw', 'Picking a Method-of-Reasoning description'],
            ['"...most accurately describes a flaw in the reasoning?"', 'Name the flaw', 'Choosing the wrong flaw family'],
            ['"The reasoning is questionable because..."', 'Name the flaw', 'Selecting a premise attack'],
          ],
        },
        {
          type: 'blockquote',
          text: '"People who eat breakfast daily are thinner on average. Therefore, eating breakfast causes weight loss."',
        },
        {
          type: 'paragraph',
          text: 'The premise shows a **correlation**; the conclusion claims **causation**. The flaw: the argument confuses correlation with causation. A third factor (e.g., health-consciousness) could explain both.',
        },
        { type: 'h4', text: "What's in This Module" },
        {
          type: 'list',
          items: [
            '**Foundations** \u2014 The Flaw Mindset, the Gap Model, and a preview of all flaw categories.',
            '**Step-by-Step Guide** \u2014 A repeatable 4-step method: Identify \u2192 Gap \u2192 Name \u2192 Match.',
            '**Field Guide** \u2014 Deep dives into every major flaw category with examples and answer-choice language.',
            '**Drills** \u2014 Targeted practice on causal, conditional, statistical, and scope-shift flaws.',
            '**Reference Guide** \u2014 Quick-lookup consolidation of all flaw categories, stems, and indicator words.',
          ],
        },
      ],
    },
  },
};
