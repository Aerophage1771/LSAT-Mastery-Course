import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '7-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Evaluate vs. Strengthen vs. Weaken' },
    {
      type: 'paragraph',
      text: 'All three question types are built on the same foundation: the **Gap Model**. The author states premises and draws a conclusion, and there is a logical gap between them — an unstated assumption, an unexplored alternative, or a missing piece of evidence. The three question types differ only in what the correct answer does to that gap.',
    },

    {
      type: 'table',
      headers: ['Feature', 'Strengthen', 'Weaken', 'Evaluate'],
      rows: [
        ['Core Skill', 'Find the gap', 'Find the gap', 'Find the gap'],
        [
          'Correct Answer Does What?',
          'Fills the gap (makes conclusion more likely)',
          'Exploits the gap (makes conclusion less likely)',
          'Targets the gap (could go either way)',
        ],
        ['Answer Format', 'A statement of fact', 'A statement of fact', 'A question or piece of information'],
        [
          'Your Stance',
          "You are the argument's ally",
          "You are the argument's critic",
          'You are a neutral investigator',
        ],
        [
          'Number of "Right Directions"',
          'One (strengthen only)',
          'One (weaken only)',
          'Two (one answer strengthens, one weakens)',
        ],
      ],
    },

    {
      type: 'paragraph',
      text: 'The key insight: **the correct Evaluate answer is the question whose two possible answers split into a Strengthen answer and a Weaken answer.** If you answer "Yes" and the argument gets stronger, then answer "No" and the argument gets weaker (or vice versa), you have found the right choice.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Causal Evaluate Is Still Evaluate',
      text: 'On causal questions, do not ask, "What fact would hurt this argument?" That is a Weaken mindset. Ask, "What unanswered question would tell me whether this causal story holds up?" Baseline, control-group, assignment, sampling, and measurement questions are powerful precisely because either answer matters.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Neutral Evaluator Mindset' },
    {
      type: 'paragraph',
      text: 'Strengthen and Weaken questions ask you to take sides. You are either helping the argument or attacking it. Evaluate questions demand the opposite: **you are a neutral investigator looking for the single most important piece of information that would resolve the argument, regardless of which direction it resolves.**',
    },

    {
      type: 'paragraph',
      text: 'This neutral stance has practical implications for how you approach the answer choices:',
    },
    {
      type: 'breakdown',
      labels: { title: 'Mindset Trap', text: 'How to Avoid It' },
      items: [
        {
          title: 'Picking an answer that only strengthens',
          text: 'If answering the question one way helps the argument, but answering it the other way has no effect, the choice is incomplete. The correct Evaluate answer must cut both ways.',
          badge: 'Common Trap',
          badgeColor: 'red',
        },
        {
          title: 'Picking an answer that only weakens',
          text: 'Same problem in reverse. An answer that exposes a flaw but whose opposite would not help the argument is a Weaken answer, not an Evaluate answer.',
          badge: 'Common Trap',
          badgeColor: 'red',
        },
        {
          title: 'Judging the argument before evaluating',
          text: 'Do not decide whether the argument is good or bad before selecting your answer. Your job is to find the pivot point, not to render a verdict.',
          badge: 'Mindset Error',
          badgeColor: 'red',
        },
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Think Like a Researcher',
      text: 'Imagine you are a researcher assigned to test whether this argument holds up. You have the budget to investigate exactly one question. Which question would give you the most decisive result — the one where the answer would either confirm or refute the conclusion? That is the Evaluate answer.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'The Yes/No Test' },
    {
      type: 'paragraph',
      text: 'The Yes/No Test is the definitive tool for Evaluate questions. It is the Evaluate-specific version of what earlier lessons called the Variance Test. The logic is identical, but framing it as "Yes/No" makes it easier to apply quickly under timed conditions.',
    },

    { type: 'h4', text: 'How It Works' },
    {
      type: 'process',
      title: 'The Yes/No Test',
      steps: [
        '**Take the answer choice** (which is phrased as a question or a piece of information to be determined).',
        '**Answer it "Yes"** (or supply a favorable value). Ask: does this strengthen the argument?',
        '**Answer it "No"** (or supply an unfavorable value). Ask: does this weaken the argument?',
        '**Check the split.** If "Yes" strengthens and "No" weakens (or vice versa), the choice **passes** the test and is likely correct. If both answers leave the argument unchanged, or if only one direction has an effect, the choice **fails** the test.',
      ],
    },

    { type: 'h4', text: 'Quick Demonstration' },
    {
      type: 'paragraph',
      text: 'Suppose an argument concludes: *"The city should build a new bridge because the current bridge is congested."* One answer choice asks: *"Are there alternative routes that could alleviate the congestion without a new bridge?"*',
    },
    {
      type: 'breakdown',
      labels: { title: 'Answer', text: 'Effect on Argument' },
      items: [
        {
          title: '"Yes" — there are alternative routes',
          text: 'The argument is **weakened**: if alternatives exist, the new bridge may not be needed.',
          badge: 'Weakens',
          badgeColor: 'red',
        },
        {
          title: '"No" — there are no alternative routes',
          text: 'The argument is **strengthened**: the bridge is the only solution, so building it is more justified.',
          badge: 'Strengthens',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'Because "Yes" weakens and "No" strengthens, this choice **passes** the Yes/No Test. It targets the gap (the assumption that no alternatives exist) and could swing the argument in either direction.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why Wrong Answers Fail the Yes/No Test',
      text: 'Wrong answers typically fail in one of two ways:\n\n1. **No impact either way.** Whether you answer "Yes" or "No," the argument stays the same. The question is irrelevant to the gap.\n2. **Impact in only one direction.** One answer affects the argument, but the opposite answer has no effect. This is a disguised Strengthen or Weaken answer, not a true Evaluate answer.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Evaluation Targets' },
    {
      type: 'paragraph',
      text: 'Certain argument patterns recur frequently in Evaluate questions. Recognizing these patterns will help you spot the gap faster and prephrase the pivotal question before reading the answer choices.',
    },

    {
      type: 'table',
      headers: ['Argument Pattern', 'What the Argument Assumes', 'Typical Evaluation Question'],
      rows: [
        [
          '**Causal Claim** — "X caused Y"',
          'No rival explanation, study-design failure, or measurement problem undercuts the claimed cause',
          '"What missing question about baseline, comparison, or rival cause would decide whether X deserves credit for Y?"',
        ],
        [
          '**Statistical / Study Claim** — "The data shows X"',
          'The data is representative, the comparison is fair, and the measurement matches the conclusion',
          '"Is this sample representative, and is this comparison actually telling us what the author says it does?"',
        ],
        [
          '**Analogy** — "A is like B, so what works for A will work for B"',
          'A and B are similar in the relevant respects',
          '"Are there significant differences between A and B that would affect the outcome?"',
        ],
        [
          '**Feasibility / Recommendation** — "We should do X"',
          'X is practical; benefits outweigh costs; no better alternative exists',
          '"Are the costs of implementing X prohibitively high?"',
        ],
        [
          '**Prediction** — "X will happen"',
          'Current trends will continue; no interfering factors',
          '"Are there factors that could prevent X from occurring?"',
        ],
        [
          '**Generalization** — "This sample proves the whole group is like X"',
          'The sample is representative of the whole group',
          '"Is the sample representative of the larger population?"',
        ],
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Pattern Recognition Saves Time',
      text: 'When you recognize the argument pattern, you can often prephrase the gap before reading the answer choices. For a causal claim, your mental question is not just "Was there an alternative cause?" It is often a more precise study-design question: "What was the baseline?", "What happened in the untreated group?", or "Were the groups comparable to begin with?" That precision dramatically speeds up answer choice evaluation.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let\'s apply everything from this lesson to a complete Evaluate question." },
    { type: 'paragraph', text: 'Consider this illustrative study summary:' },
    {
      type: 'blockquote',
      text: '"A pharmaceutical company tested a new headache medication on 500 volunteers who reported frequent headaches. After four weeks of daily use, 80% of the volunteers reported a significant reduction in headache frequency. The company concluded that the medication is highly effective at reducing headaches."',
    },
    {
      type: 'paragraph',
      text: 'This is a classic Evaluate setup because the study result looks impressive, but the real issue is whether the design isolates the medication from placebo effects and expectation effects.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Find the Conclusion' },
    {
      type: 'paragraph',
      text: 'The conclusion is: *"The medication is highly effective at reducing headaches."* The evidence is that 80% of volunteers reported improvement after four weeks.',
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The argument assumes the medication caused the improvement. But the study description reveals no mention of a control group or placebo. Without a placebo comparison, the improvement could be due to the **placebo effect** — volunteers felt better simply because they believed they were receiving treatment.',
    },

    { type: 'h4', text: 'Step 3: Apply the Yes/No Test to the Pivotal Question' },
    {
      type: 'breakdown',
      labels: { title: 'Answer', text: 'Effect' },
      items: [
        {
          title: '"Yes" — volunteers knew they were taking the real medication',
          text: "The argument is **weakened**. If volunteers knew they had the real drug, the placebo effect could explain the improvement. The study does not isolate the medication's effect from the expectation of improvement.",
          badge: 'Weakens',
          badgeColor: 'red',
        },
        {
          title: '"No" — volunteers did not know (blind study)',
          text: "The argument is **strengthened**. If volunteers could not distinguish the medication from a placebo, the improvement is more likely to reflect the medication's genuine effect rather than expectation alone.",
          badge: 'Strengthens',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'That clean split is what you want on an Evaluate question. One answer hurts the argument and the other helps it, so the question directly probes the study-design gap.',
    },

    {
      type: 'callout',
      variant: 'default',
      title: 'Why Other Questions Miss',
      text: "Questions about the general population, the company's reputation, side effects, or cost all stay outside the actual inference. The conclusion is narrowly about whether this study shows the medication is effective. A good Evaluate answer has to test the control structure, not the business context or downstream policy implications.",
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'default',
      title: 'Causal Evaluate Questions Need a Researcher Mindset',
      text: 'A large share of Evaluate questions ask you to test a causal explanation. In those cases, do not settle for the vague thought "maybe something else caused it." That is only a weakening instinct. Instead, ask what an **ideal experiment** would need in order to decide whether the conclusion deserves credit: a baseline, a comparison group, fair assignment, clean measurement, and protection against expectation effects. The best Evaluate answer is the missing question that would tell you whether to trust the causal inference.',
    },

    {
      type: 'table',
      headers: ['Causal Framework', 'What You Ask'],
      rows: [
        [
          '**Study design**',
          'Was there a baseline, a real comparison group, and fair assignment into groups?',
        ],
        [
          '**Sampling vs. assignment**',
          'Does the evidence generalize to the target population, and were the compared groups fair from the start?',
        ],
        [
          '**Measurement + rival explanations**',
          'Is the study measuring the conclusion variable directly, and could chronology, mechanism, or another factor explain the result instead?',
        ],
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. Evaluate = Strengthen + Weaken from a neutral perspective.** All three share the Gap Model.\n\n**2. The Yes/No Test is your primary tool.** The correct answer is the one whose two possible answers split into a strengthener and a weakener.\n\n**3. Wrong answers fail in predictable ways:** they are irrelevant (no impact either way), one-directional (only strengthen or only weaken), or target the wrong gap.\n\n**4. Adopt the Neutral Evaluator Mindset.** You are not taking sides. You are finding the single most decisive piece of information.\n\n**5. Recognize common patterns.** Causal claims, studies, analogies, recommendations, and generalizations all have predictable gaps that Evaluate questions target.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Core Concepts' },
        {
          type: 'table',
          headers: ['Concept', 'Definition', 'Key Distinction'],
          rows: [
            [
              'Evaluate vs. Strengthen',
              'All three share the Gap Model; the correct answer targets the gap so it could swing either way.',
              'Strengthen fills the gap one-way; Evaluate probes it two-ways.',
            ],
            [
              'The Yes/No Test',
              'Answer the choice "Yes" then "No" \u2014 the correct answer produces one strengthener and one weakener.',
              'Wrong answers produce no split or a one-sided effect.',
            ],
            [
              'Neutral Evaluator',
              'You are a researcher testing the argument, not an ally or critic.',
              'Never judge the argument before selecting your answer.',
            ],
          ],
        },
        { type: 'h3', text: 'Evaluation Targets' },
        {
          type: 'table',
          headers: ['Target Type', 'Frequency'],
          rows: [
            ['**Causal Claims**', '~30%'],
            ['**Statistical Generalizations**', '~25%'],
            ['**Analogies**', '~15%'],
            ['**Feasibility Claims**', '~12%'],
            ['**Predictions**', '~10%'],
            ['**Definitions / Categories**', '~8%'],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'blockquote',
          text: '"A pharmaceutical company tested a new headache medication on 500 volunteers. After four weeks, 80% reported a significant reduction in headache frequency. The company concluded that the medication is highly effective."',
        },
        {
          type: 'paragraph',
          text: 'The pivotal question is whether volunteers knew they were taking the real medication. "Yes" weakens (placebo effect explains improvement); "No" strengthens (blind study isolates the drug\'s effect).',
        },
        {
          type: 'callout',
          variant: 'summary',
          text: '\u2022 Evaluate = Strengthen + Weaken from a neutral perspective.\n\u2022 The Yes/No Test is your primary tool \u2014 correct answers split cleanly.\n\u2022 Wrong answers are irrelevant, one-directional, or target the wrong gap.',
        },
      ],
    },
  },
};
