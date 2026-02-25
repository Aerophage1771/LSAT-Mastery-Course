import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "5-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 5: Flaw' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the specific reasoning error that makes the argument\'s conclusion unproven by its evidence.** In other words, why is the logical connection between the premises and the conclusion broken? Your task is not merely to notice that the argument is weak — you must name the *specific* way it fails.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Flaw is the **single most frequently tested** question type in Logical Reasoning. It appears on virtually every scored LR section, often multiple times. Across recent administrations, Flaw questions account for roughly **15–18% of all scored LR questions** — more than any other type.' },
    { type: 'paragraph', text: 'Beyond raw frequency, the Flaw skill is the **foundation** for several other question types. Strengthen, Weaken, and Assumption questions all require you to locate the gap in reasoning first. If you can accurately diagnose an argument\'s flaw, answering those related question types becomes dramatically easier. Mastering this module pays dividends across roughly 40–50% of the entire LR section.' },
    { type: 'callout', variant: 'tip', title: 'Frequency & Timing', text: 'Expect **3–4 Flaw questions per 25-question LR section.** Budget roughly **1:30–2:00 per question.** These questions reward prephrasing: if you can name the flaw before reading the choices, you can often spot the match in seconds.' },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'You can identify Flaw questions because they ask about the error, vulnerability, or questionable technique used in the argument. The language is always evaluative — the stem assumes the argument *has* a problem and asks you to describe it.' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The reasoning in the argument is most vulnerable to criticism on the grounds that the argument..."', 'Asks what the argument is **vulnerable** to'],
      ['"The argument\'s reasoning is flawed in that it..."', 'Directly states the reasoning is **flawed**'],
      ['"Which one of the following most accurately describes a flaw in the reasoning?"', 'Asks you to **describe** the flaw'],
      ['"The reasoning in the argument is questionable because..."', 'Flags reasoning as **questionable**'],
      ['"A questionable technique used in the argument is to..."', 'Asks for the **technique** (the error)'],
      ['"The argument is most vulnerable to the objection that it..."', 'Asks for the **objection** (criticism)'],
      ['"The reasoning above is flawed because it fails to consider..."', 'Asks what the argument **fails to consider**'],
    ]},
    { type: 'callout', variant: 'default', title: 'Flaw vs. "Vulnerable to Criticism"', text: 'The phrase "vulnerable to criticism" is the most common Flaw stem. Don\'t confuse it with a Weaken question. A Weaken question says "which of the following, *if true*, would most weaken..." — the phrase "if true" signals Weaken. A Flaw stem never asks you to add new information; it asks you to describe the existing reasoning error.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Flaw Mindset: From Description to Evaluation' },
    { type: 'paragraph', text: '**Flaw questions represent a critical turning point in your Logical Reasoning journey.** After learning to *describe* arguments (Method of Reasoning), your task now shifts to **evaluating** them. You must identify the specific logical error — the "flaw" — that makes the author\'s conclusion suspect.' },
    { type: 'paragraph', text: 'This shift changes how you read arguments. In Method of Reasoning, you asked: "What is the author doing?" In Flaw, you ask: **"Where did the author go wrong?"** You are no longer a neutral reporter of technique — you are a critical evaluator of logic.' },
    { type: 'breakdown', labels: { title: 'Question Type', text: 'Your Role' }, items: [
      { title: 'Method of Reasoning', text: '**Describe** the technique the author uses. You are a neutral reporter. "The author uses an analogy to support the conclusion."', badge: 'Descriptive', badgeColor: 'blue' },
      { title: 'Flaw', text: '**Evaluate** the technique the author uses. You are a critical judge. "The author\'s analogy is flawed because the two cases differ in a relevant way."', badge: 'Evaluative', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Flaw vs. Method of Reasoning' },
    { type: 'paragraph', text: 'Because both question types ask you to analyze *how* an argument works, students sometimes confuse them. The table below makes the distinction clear:' },
    { type: 'table', headers: ['Feature', 'Method of Reasoning', 'Flaw'], rows: [
      ['**Goal**', 'Describe what the author does', 'Identify what the author does *wrong*'],
      ['**Assumption**', 'The argument may or may not be valid', 'The argument is definitely flawed'],
      ['**Correct answer describes...**', 'A neutral technique (analogy, generalization, counterexample)', 'A specific error (confuses correlation with causation, treats necessary as sufficient)'],
      ['**Stem language**', '"proceeds by," "does which of the following"', '"vulnerable to criticism," "flawed in that," "questionable because"'],
      ['**Evaluation required?**', 'No — just label the technique', 'Yes — explain *why* the technique fails'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'The Gap Model' },
    { type: 'paragraph', text: 'The most important concept for Flaw questions is the **Logical Gap.** Every flawed argument has a gap between what the premises prove and what the conclusion claims. The flaw is the *reason* that gap exists.' },
    { type: 'paragraph', text: 'Think of it this way: the premises are the foundation and the conclusion is the roof. In a valid argument, there is a sturdy pillar connecting them. In a flawed argument, the pillar is missing or cracked. Your job is to describe the missing or cracked pillar — the **unwarranted assumption** the author makes when leaping from evidence to claim.' },

    { type: 'h4', text: 'Accepting the Premises' },
    { type: 'paragraph', text: 'To find the gap, you must follow a critical rule: **provisionally accept the premises as true.** Do not waste time arguing with the stated facts. The flaw is *never* that a premise is factually untrue. Instead, focus entirely on the *relationship* between those facts and the conclusion.' },

    { type: 'h4', text: 'Fact vs. Interpretation' },
    { type: 'paragraph', text: 'While you accept the *facts*, you must question the *interpretation* of those facts:' },
    { type: 'breakdown', labels: { title: 'Stance', text: 'What It Means' }, items: [
      { title: 'Accept the Fact', text: 'If the author says "a recent study showed X," you accept that the study exists and showed X. You do not challenge the study\'s existence.', badge: 'Accept', badgeColor: 'green' },
      { title: 'Question the Interpretation', text: 'You are free to ask: Does this study actually prove the conclusion? Could the data be explained another way? Is the sample representative? Does the conclusion go beyond what the evidence supports?', badge: 'Question', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: 'The key test is always: **"Even if I accept all these premises as 100% true, is the conclusion guaranteed to be true?"** If the answer is "No," the reason *why* is the flaw.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Gap Model in Action' },
    { type: 'paragraph', text: 'Let\'s see how the Gap Model works on a concrete argument:' },
    { type: 'blockquote', text: '"People who eat breakfast every day are, on average, thinner than people who skip breakfast. Therefore, eating breakfast causes weight loss."' },
    { type: 'process', title: 'Applying the Gap Model', steps: [
      '**Identify the Conclusion:** Eating breakfast *causes* weight loss.',
      '**Identify the Premise:** People who eat breakfast daily are thinner on average.',
      '**Accept the Premise:** Yes, we accept that breakfast-eaters are thinner. This is a correlation.',
      '**Find the Gap:** The conclusion claims *causation*, but the premise only shows *correlation*. There is a gap between "these two things happen together" and "one causes the other." Perhaps thinner people have more time for breakfast, or a third factor (like health-consciousness) drives both behaviors.',
      '**Name the Flaw:** The argument confuses correlation with causation — it mistakes the fact that two things co-occur for evidence that one causes the other.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Flaw Categories — Preview' },
    { type: 'paragraph', text: 'While every argument is unique in its topic, the logical errors arguments commit fall into **predictable categories**. Recognizing these categories on sight is one of the most powerful skills you can develop. The next lesson (Field Guide) covers each in depth; here is a preview of the major families:' },
    { type: 'table', headers: ['Flaw Category', 'Core Error', 'Approx. Frequency', 'Priority'], rows: [
      ['**Causal Flaws**', 'Confusing correlation with causation', '~20%', '★★★ High'],
      ['**Conditional Logic Flaws**', 'Misapplying if/then rules (reversals, negations)', '~15%', '★★★ High'],
      ['**Overlooking Possibilities**', 'Failing to consider alternative explanations', '~15%', '★★★ High'],
      ['**Statistical / Sampling Flaws**', 'Bad sample, numbers vs. percentages, part vs. whole', '~12%', '★★☆ Medium-High'],
      ['**Scope Shift Flaws**', 'Conclusions that go beyond the evidence (some→all, past→present)', '~10%', '★★☆ Medium-High'],
      ['**Source Attack (Ad Hominem)**', 'Attacking the person instead of the argument', '~8%', '★★☆ Medium'],
      ['**Equivocation**', 'Using a key term in two different senses', '~7%', '★★☆ Medium'],
      ['**Circular Reasoning**', 'Restating the conclusion as a premise', '~5%', '★☆☆ Lower'],
      ['**False Dichotomy**', 'Treating two options as exhaustive when others exist', '~4%', '★☆☆ Lower'],
      ['**Appeal to Authority / Ignorance**', 'Misusing authority or absence of evidence', '~4%', '★☆☆ Lower'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The Big Three', text: 'Causal flaws, conditional logic flaws, and overlooking possibilities account for roughly **50%** of all Flaw questions. If you master only three categories, make it these three.' },

    { type: 'hr' },

    { type: 'h3', text: 'Indicator Words That Signal Flawed Reasoning' },
    { type: 'paragraph', text: 'Certain words in an argument\'s conclusion or premises often signal a specific type of flaw. Train yourself to react to these trigger words:' },
    { type: 'table', headers: ['Trigger Words in the Stimulus', 'Likely Flaw Type'], rows: [
      ['"causes," "leads to," "results in," "stimulates"', 'Causal Flaw (correlation → causation)'],
      ['"if," "only if," "unless," "requires," "all...are"', 'Conditional Logic Flaw (reversal or negation)'],
      ['"survey," "study," "poll," "sample," "respondents"', 'Sampling / Generalization Flaw'],
      ['"most," "on average," "percentage," "rate," "number"', 'Statistical Flaw (numbers vs. percentages)'],
      ['"some," "a few," "certain" (premise) → "all," "no," "every" (conclusion)', 'Scope Shift (hasty generalization)'],
      ['"you can\'t trust X because..." (attacking the source)', 'Ad Hominem / Source Attack'],
      ['"either X or Y" (with no third option considered)', 'False Dichotomy'],
      ['A key term used differently in premise vs. conclusion', 'Equivocation'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Your First Flaw Question' },
    { type: 'paragraph', text: 'Let\'s put everything together with a concrete practice question. Read the stimulus, find the gap, name the flaw, and match it to the correct answer.' },
    { type: 'question-card',
      id: 'FL-5-1-001',
      questionType: 'Flaw',
      difficulty: 'easy',
      stimulus: "Politician: My opponent claims we should invest more in public transportation. But my opponent has never even ridden a bus. How can someone who has never used public transit know what it needs? We should reject this proposal.",
      question: "The reasoning in the politician's argument is flawed in that the argument",
      options: [
        "(A) presumes, without providing justification, that public transportation funding is unnecessary",
        "(B) attacks the character of the opponent rather than addressing the merits of the proposal (Correct)",
        "(C) draws a conclusion that is broader than what the evidence supports",
        "(D) confuses a cause of a problem with an effect of that problem",
        "(E) treats a sufficient condition as though it were a necessary condition",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },
    { type: 'process', title: 'Solving Step by Step', steps: [
      '**Identify the Conclusion:** We should reject the opponent\'s public transportation proposal.',
      '**Identify the Premises:** The opponent has never ridden a bus. Therefore, the opponent cannot know what public transit needs.',
      '**Find the Gap:** The argument does not engage with the *substance* of the proposal at all. Instead, it attacks the opponent\'s personal experience. Whether or not the opponent rides buses is irrelevant to whether the proposal itself has merit.',
      '**Name the Flaw:** This is an **ad hominem** (source attack) — the argument rejects a claim by attacking the person who made it, rather than addressing the claim\'s content.',
      '**Match to Answer:** Look for a choice describing a source attack or personal attack.',
    ]},
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) presumes that public transportation funding is unnecessary', text: 'The argument doesn\'t claim funding is unnecessary in the abstract — it claims the *opponent* is unqualified to make the proposal. This mischaracterizes the argument.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) attacks the character of the opponent rather than addressing the merits of the proposal', text: 'This is a textbook description of an ad hominem flaw. The argument dismisses the proposal based on the opponent\'s personal transit habits, not on the proposal\'s merits. Perfect match.', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) draws a conclusion that is broader than what the evidence supports', text: 'This describes a scope-shift or overgeneralization flaw. The argument\'s problem isn\'t that the conclusion is too broad — it\'s that the evidence is irrelevant.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) confuses a cause of a problem with an effect of that problem', text: 'This describes a causal flaw (reversed causality). The argument doesn\'t discuss causes and effects at all.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) treats a sufficient condition as though it were a necessary condition', text: 'This describes a conditional logic flaw. The argument doesn\'t contain any if/then reasoning.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• Flaw is the **most frequently tested** LR question type (~15–18% of scored questions) and the foundation for Strengthen, Weaken, and Assumption questions.\n• Recognize Flaw stems by their evaluative language: \"vulnerable to criticism,\" \"flawed in that,\" \"questionable because.\"\n• The core skill is finding the **Logical Gap**: the disconnect between what the premises prove and what the conclusion claims.\n• **Accept the premises** as true — the flaw is never that a stated fact is wrong. The flaw is in the *reasoning* that connects facts to conclusion.\n• Most flaws fall into **predictable categories** (causal, conditional, statistical, scope shift, etc.). Learning these categories lets you prephrase answers accurately.\n• Always **prephrase** the flaw before reading answer choices. Name the error in your own words, then look for the match.\n• Flaw questions are distinct from Method of Reasoning: MoR asks you to *describe* the technique; Flaw asks you to *evaluate* and identify the error." },
  ]
};
