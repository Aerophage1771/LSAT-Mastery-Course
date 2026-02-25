import { Lesson } from '../../types';

export const Lesson10_Advanced_StatisticalRebuttal: Lesson = {
  id: "4-10",
  title: "Advanced: Statistical Rebuttal",
  content: [
    { type: 'h2', text: 'Advanced Lesson 2: The Statistical Rebuttal (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson focuses on a powerful and frequently tested pattern: using a **statistical base rate** to argue against a conclusion drawn from a small or anecdotal sample. The core idea is straightforward — a few coincidences are not enough to prove a general rule when they are vastly outnumbered by cases showing no such connection. But the LSAT dresses this pattern in many different disguises, and matching it requires you to identify both the **base rate premise** and the **dismissive conclusion**." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Statistical rebuttal arguments appear frequently in both Parallel Reasoning and Parallel Flaw questions. They are distinctive because they argue **against** a conclusion — dismissing an inference as unreasonable — rather than building a positive argument. Recognizing the \"it's unreasonable to conclude\" structure is your fastest path to identifying this pattern." },

    { type: 'hr' },

    { type: 'h2', text: 'The Statistical Rebuttal Pattern' },
    { type: 'paragraph', text: "A statistical rebuttal works by contrasting a **small, interesting sample** with a **large, uninteresting base rate**. Someone might observe a handful of cases where X and Y coincide, and conclude there's a meaningful link. The rebuttal points out that the vast majority of cases show no such link, making the small sample statistically insignificant." },

    { type: 'h3', text: 'The Core Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Role'], rows: [
      ['Base Rate Premise', 'The vast majority of X are NOT Y', 'Establishes that the overall pattern shows no connection'],
      ['Implicit Opposing View', 'A few cases of X appear to be Y', 'The claim being rebutted — someone infers a link from a small sample'],
      ['Conclusion', 'It is unreasonable to conclude X causes/predicts Y', 'Dismisses the inference as statistically unjustified'],
    ]},

    { type: 'paragraph', text: "The argument's power comes from the **contrast** between the small sample and the overwhelming base rate. This is not a logical proof that there's no connection — it's an argument that the evidence is insufficient to establish one." },

    { type: 'hr' },

    { type: 'h2', text: 'Types of Statistical Arguments' },
    { type: 'paragraph', text: "Statistical arguments come in several varieties, and the LSAT tests your ability to distinguish between them. Here are the most common types:" },

    { type: 'table', headers: ['Type', 'What It Claims', 'Key Signal Words', 'Example'], rows: [
      ['**Correlation Claim**', 'X and Y tend to occur together', '"associated with," "linked to," "tends to"', '"Countries with higher chocolate consumption tend to win more Nobel Prizes."'],
      ['**Causation Claim**', 'X causes Y to happen', '"causes," "leads to," "results in," "produces"', '"Eating breakfast causes improved test scores."'],
      ['**Sample-to-Population**', 'What is true of a sample is true of the whole group', '"the survey found," "the study showed," "in the sample"', '"70% of surveyed customers preferred Brand A, so most customers prefer Brand A."'],
      ['**Base Rate Dismissal**', 'The base rate undermines a small-sample inference', '"the vast majority," "most cases," "overwhelmingly"', '"Most dreams don\'t predict the future, so a few accurate dreams don\'t prove ESP."'],
      ['**Trend Extrapolation**', 'A past pattern will continue into the future', '"has been increasing," "historically," "the trend suggests"', '"Sales have grown 10% annually for five years, so they will grow 10% next year."'],
      ['**Proportional Comparison**', 'Rates or percentages are compared across groups', '"a higher percentage," "disproportionately," "per capita"', '"A higher percentage of city residents use public transit than suburban residents."'],
    ]},

    { type: 'callout', variant: 'default', title: 'Matching Rule', text: "When matching statistical rebuttal arguments, the **type of statistical reasoning** must match. A base rate dismissal cannot parallel a trend extrapolation, even if both involve numbers. The logical mechanism — how the statistics are used to support or undermine a conclusion — is the structural feature you must replicate." },

    { type: 'hr' },

    { type: 'h2', text: 'How to Identify the Statistical Rebuttal Pattern' },
    { type: 'paragraph', text: "Statistical rebuttals have distinctive markers that set them apart from other argument types:" },

    { type: 'process', title: 'Identification Checklist', steps: [
      '**Look for a base rate premise.** The argument mentions what is true for \"the vast majority,\" \"most,\" or \"the overwhelming number\" of cases. This is the statistical foundation.',
      '**Look for a small-sample claim.** Someone observed \"a few,\" \"several,\" or \"some\" cases where an interesting pattern appeared. This is the claim being challenged.',
      '**Look for a dismissive conclusion.** The argument concludes that it is \"unreasonable,\" \"unjustified,\" or \"unwarranted\" to draw a broad conclusion from the small sample. The conclusion **rejects** an inference.',
      '**Verify the contrast.** The argument\'s force comes from the contrast between the small interesting sample and the large uninteresting base rate. If both are presented as roughly equal, it\'s not a base rate dismissal.',
      '**Check the direction.** The argument argues AGAINST a conclusion (rebuttal), not FOR one. If the conclusion asserts a positive connection, the pattern is different.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full method to a statistical rebuttal question." },

    { type: 'question-card',
      id: 'PR-4-10-001',
      questionType: 'Parallel Reasoning',
      difficulty: 'medium',
      stimulus: "Researcher: The vast majority of a person's dreams bear no resemblance whatsoever to real events that follow the dreams. Thus, it is unreasonable to believe that one has extrasensory perception solely on the basis of having had several vivid dreams about events that happen after the dreams.",
      question: "Which one of the following arguments is most similar in its reasoning to the argument above?",
      options: [
        "(A) It is unreasonable to believe that a new drug cures heart disease when it is tested, albeit successfully, on only a few patients. Most new drugs require testing on large numbers of patients before they are considered effective.",
        "(B) Many people who undergo surgery for ulcers show no long-term improvement. So it is unreasonable to believe that surgery for ulcers is effective, even though ulcer surgery benefits many people as well.",
        "(C) Even though many cancer patients experience remissions without drinking herbal tea, it is unreasonable to believe that not drinking herbal tea causes such remissions. Several factors are known to be relevant to cancer remission.",
        "(D) A number of people who die prematurely take aspirin. But it is unreasonable to conclude that aspirin is dangerous. Most people who take aspirin do not die prematurely. (Correct)",
        "(E) A significant number of children raised near power lines develop cancer. So it is unreasonable to deny a connection between living near power lines and developing cancer, even though many people living near power lines never develop cancer.",
      ],
    },

    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Applying the Statistical Rebuttal Method', steps: [
      '**Step 1 — Identify the pattern:**\n• Base Rate: \"The vast majority of dreams bear no resemblance to real events\" → Most X are NOT Y.\n• Small Sample: \"Several vivid dreams about events that happen\" → A few cases where X seems linked to Y.\n• Conclusion: \"It is unreasonable to believe in ESP\" → The small sample doesn\'t justify the broad conclusion.\nThis is a classic **base rate dismissal**.',
      '**Step 2 — Abstract the blueprint:**\nMost X are NOT Y. A few X appear to be Y. Therefore, it is unreasonable to conclude X causes/predicts Y.\nThe conclusion argues AGAINST an inference. The base rate comes BEFORE the conclusion.',
      '**Step 3 — Evaluate each choice:**\n• (A): The reason for dismissal is procedural (insufficient testing), not statistical (base rate). Different mechanism.\n• (B): Uses \"many\" on both sides — no clear contrast between a small interesting sample and a large uninteresting base rate.\n• (C): The argument is about alternative causes, not base rate dismissal.\n• (D): Small sample (\"a number who die prematurely take aspirin\") vs. base rate (\"most who take aspirin do not die prematurely\"). Conclusion: unreasonable to conclude aspirin is dangerous. Perfect match.\n• (E): The conclusion argues FOR a connection, not against one. Opposite direction.',
      '**Step 4 — Verify (D):**\n• Small sample: \"A number of people who die prematurely take aspirin.\" ✓ (Few X appear linked to Y)\n• Base rate: \"Most people who take aspirin do not die prematurely.\" ✓ (Most X are NOT Y)\n• Conclusion: \"It is unreasonable to conclude that aspirin is dangerous.\" ✓ (Unreasonable to infer a link)\nAll three components match perfectly.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Drug tested on only a few patients; most drugs need large testing', text: 'The dismissal is based on **procedural standards** (the study is too small by scientific norms), not on a **base rate** showing no connection. The stimulus uses the base rate itself as the reason for dismissal; this answer uses external methodology standards.', badge: 'Wrong Mechanism', badgeColor: 'red' },
      { title: '(B) Many show no improvement; many benefit from ulcer surgery', text: 'Both sides use the quantifier \"many\" — there is no clear contrast between a small interesting sample and a large uninteresting base rate. The statistical force depends on the size disparity, which is absent here.', badge: 'No Size Contrast', badgeColor: 'red' },
      { title: '(C) Remissions without herbal tea; several factors are relevant', text: 'The argument dismisses a causal claim by pointing to **alternative explanations** (several factors are known to be relevant). This is a \"competing causes\" argument, not a base rate dismissal. The statistical pattern is missing entirely.', badge: 'Alternative Cause', badgeColor: 'red' },
      { title: '(D) A number die prematurely + take aspirin; most aspirin takers don\'t die prematurely; unreasonable to conclude aspirin is dangerous', text: 'Small sample vs. large base rate → unreasonable conclusion. All three structural elements match the stimulus exactly.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Significant number of children near power lines develop cancer; unreasonable to DENY a connection', text: 'The conclusion goes in the **opposite direction**: it argues it IS unreasonable to deny a connection — in other words, it argues FOR a link. The stimulus argues AGAINST a link. This reversal of conclusion direction makes it structurally incompatible.', badge: 'Conclusion Direction', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'How to Match Statistical Reasoning Patterns' },
    { type: 'paragraph', text: "When matching a statistical rebuttal, run through this checklist to ensure structural alignment:" },

    { type: 'table', headers: ['Feature to Match', 'What to Check', 'Common Mismatch'], rows: [
      ['**Size contrast**', 'Is there a clear disparity between the small sample and the large base rate?', 'Both sides use \"many\" — no clear size contrast'],
      ['**Conclusion direction**', 'Does the conclusion argue AGAINST a link (rebuttal) or FOR a link?', 'Answer argues FOR a connection while stimulus argues AGAINST'],
      ['**Dismissal mechanism**', 'Is the dismissal based on the base rate itself, or on procedural/methodological standards?', 'Answer dismisses based on \"insufficient testing\" rather than base rate data'],
      ['**Quantifier strength**', 'Does the base rate use \"vast majority\" / \"most\" (strong) vs. \"many\" (weaker)?', 'Base rate in answer is weaker than in stimulus, changing the argument\'s force'],
      ['**Causation vs. correlation**', 'Is the rejected claim about causation or mere correlation?', 'Stimulus rejects a causal claim; answer rejects a correlational claim (or vice versa)'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'A Second Practice Question' },

    { type: 'question-card',
      id: 'PR-4-10-002',
      questionType: 'Parallel Reasoning',
      difficulty: 'hard',
      stimulus: "Although a handful of companies that adopted the open-office layout reported increased collaboration, the overwhelming majority of companies that adopted it reported no change in collaboration rates. Therefore, it is unwarranted to claim that open-office layouts increase collaboration.",
      question: "Which one of the following arguments is most similar in its pattern of reasoning to the argument above?",
      options: [
        "(A) Although a few patients who took the supplement reported feeling more energetic, the vast majority of patients who took it reported no change in energy levels. Therefore, it is unwarranted to claim that the supplement increases energy. (Correct)",
        "(B) Several studies have linked moderate wine consumption to heart health. However, excessive wine consumption is clearly harmful. Therefore, it is unwarranted to recommend wine for health benefits.",
        "(C) Most employees who work from home report higher job satisfaction. A small number report lower satisfaction. Therefore, working from home likely increases job satisfaction.",
        "(D) Although many athletes use visualization techniques, only a few report significant performance improvements. Therefore, visualization is an effective training tool for those few athletes.",
        "(E) The majority of students who use the new textbook score higher on exams. Therefore, it is reasonable to conclude that the new textbook improves exam performance.",
      ],
    },

    { type: 'h3', text: 'Solution Walkthrough' },
    { type: 'paragraph', text: "The stimulus follows the base rate dismissal pattern: a handful of positive cases (small sample) vs. the overwhelming majority showing no effect (base rate) → it is unwarranted to claim the effect exists (dismissive conclusion)." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Few patients felt more energetic; vast majority felt no change; unwarranted to claim supplement increases energy', text: 'Small sample (\"a few\") vs. base rate (\"vast majority\") → dismissive conclusion (\"unwarranted to claim\"). Perfect structural match.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) Studies link wine to heart health; excessive wine is harmful; unwarranted to recommend wine', text: 'The dismissal is based on a **countervailing risk** (excessive consumption is harmful), not on a base rate showing no effect. Different mechanism.', badge: 'Wrong Mechanism', badgeColor: 'red' },
      { title: '(C) Most remote workers report higher satisfaction; a few report lower; likely increases satisfaction', text: 'The conclusion argues FOR a positive effect, not against one. The base rate here SUPPORTS the claim rather than undermining it. Opposite direction.', badge: 'Conclusion Direction', badgeColor: 'red' },
      { title: '(D) Many athletes use visualization; few report improvements; visualization is effective for those few', text: 'The conclusion AFFIRMS the effect for a subset (\"effective for those few\") rather than dismissing the inference entirely. The stimulus dismisses the claim broadly.', badge: 'Partial Affirmation', badgeColor: 'red' },
      { title: '(E) Majority of students score higher with new textbook; reasonable to conclude it improves performance', text: 'The base rate SUPPORTS the conclusion (majority score higher). This is a positive inference from a strong base rate — the opposite of a rebuttal.', badge: 'Positive Inference', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Statistical Rebuttal** dismisses a conclusion drawn from a small sample by pointing to a large base rate that shows no connection.\n• The core structure is: **Most X are NOT Y. A few X appear to be Y. Therefore, it is unreasonable to conclude X causes/predicts Y.**\n• The argument's power comes from the **size contrast** between the small interesting sample and the overwhelming uninteresting base rate.\n• **Conclusion direction** is a critical matching feature: the stimulus argues AGAINST an inference (rebuttal). Any answer that argues FOR a connection is wrong.\n• Common statistical argument types include correlation claims, causation claims, sample-to-population inferences, base rate dismissals, trend extrapolations, and proportional comparisons. Match the type, not just the presence of numbers.\n• The most common traps are: wrong dismissal mechanism (procedural instead of statistical), no size contrast (\"many\" vs. \"many\"), opposite conclusion direction, and alternative-cause arguments disguised as base rate dismissals." },
  ]
};
