import { Lesson } from '../../types';

export const Lesson6_Drill_CausalClaim: Lesson = {
  id: '7-6',
  title: 'Drill: Evaluating Causal Claims',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'Drill: Evaluating Causal Claims' },
    {
      type: 'paragraph',
      text: 'Causal Evaluate questions are where this module most clearly separates itself from Weaken and Strengthen. The stimulus claims that one factor produced an effect. Your job is not to supply a damaging fact or a helpful fact. Your job is to identify the **missing question** whose answer would tell you whether the causal story deserves credit.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'What Stays in Module 7',
      text: 'Causal reasoning can show up across multiple Logical Reasoning tasks, but Module 7 keeps the Evaluate-specific version of it: pivotal-question framing, a neutral investigator mindset, the Yes/No Test, and experiment-quality checks that ask whether the author has actually isolated the claimed cause.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'The Researcher Checklist' },
    {
      type: 'paragraph',
      text: 'When a causal argument is built on a study, run through the same checkpoints a careful researcher would use. The best Evaluate answer usually targets whichever checkpoint is most central and most missing.',
    },
    {
      type: 'table',
      headers: ['Checkpoint', 'Pivotal Question', 'Why It Matters in Evaluate'],
      rows: [
        [
          'Baseline',
          '"What was true before the intervention, treatment, or event began?"',
          'Without a starting point, an after-the-fact snapshot cannot show change.',
        ],
        [
          'Comparison group',
          '"What happened to otherwise similar subjects who did not get the treatment?"',
          'A comparison group helps distinguish the proposed cause from background trends.',
        ],
        [
          'Assignment vs. sampling',
          '"Were the groups comparable from the start, and does this sample generalize?"',
          'Random assignment helps comparisons inside the study; representative sampling helps conclusions about the wider population.',
        ],
        [
          'Measurement quality',
          '"Is the study measuring the conclusion variable directly, or only a proxy?"',
          'A result can look impressive while still missing the exact thing the conclusion is about.',
        ],
        [
          'Rival explanations',
          '"Did another change, mechanism, or timing fact explain the effect instead?"',
          'If a rival explanation survives, the author has not earned the causal conclusion.',
        ],
      ],
    },

    { type: 'h3', text: 'Evaluate vs. Weaken vs. Strengthen on the Same Causal Gap' },
    {
      type: 'breakdown',
      labels: { title: 'Question Type', text: 'What You Would Look For' },
      items: [
        {
          title: 'Evaluate',
          text: 'Find the question whose answer would decide whether the causal inference survives: "What was the baseline?" or "Was there another change during the same period?"',
          badge: 'Neutral',
          badgeColor: 'blue',
        },
        {
          title: 'Weaken',
          text: 'Look for a new fact that actually undercuts the causal inference, such as a rival cause or a bad comparison.',
          badge: 'Attack',
          badgeColor: 'red',
        },
        {
          title: 'Strengthen',
          text: 'Look for a new fact that rules out the rival explanation or makes the causal mechanism more credible.',
          badge: 'Support',
          badgeColor: 'green',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Model' },
    {
      type: 'paragraph',
      text: 'Keep the full PT-backed drill work in the dedicated lesson slots. Use this lesson as the concept checklist that tells you what to look for when you reach those drills.',
    },
    {
      type: 'table',
      headers: ['Current Drill Home', 'PT', 'Why It Belongs There'],
      rows: [
        [
          'Lesson 3: The Missing Baseline',
          '`PT-119-S-3-Q-3`',
          'The module\'s clean baseline model for causal Evaluate work.',
        ],
        [
          'Lesson 4: Unrepresentative Samples',
          '`PT-101-S-2-Q-16`',
          'A sample-quality Evaluate question that shows why broad causal or predictive claims can fail even when the local data sound strong.',
        ],
      ],
    },

    { type: 'h3', text: 'Why PT-119-S-3-Q-3 Is Still the Right Model' },
    {
      type: 'paragraph',
      text: 'The conclusion is causal: the high-salt diet is said to be linked to high blood pressure. But the evidence is only an after-the-fact snapshot. That means the most important missing checkpoint is the **baseline**. We do not yet know whether the rats started with normal blood pressure or whether this colony was already hypertensive before the study began.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Notice the Evaluate Move',
      text: 'The baseline question does not itself weaken or strengthen. It asks for the one missing fact that would tell us whether the author\'s explanation survives. That is exactly what makes it an Evaluate move rather than a Weaken or Strengthen move.',
    },

    { type: 'h3', text: 'How To Use The Yes/No Test' },
    {
      type: 'breakdown',
      labels: { title: 'Possible Answer', text: 'Effect on the Argument' },
      items: [
        {
          title: '"Many rats already had high blood pressure"',
          text: 'The argument is **weakened**. If the colony already had the relevant problem before the diet began, the study does not show that the diet changed anything.',
          badge: 'Weakens',
          badgeColor: 'red',
        },
        {
          title: '"Few or no rats already had high blood pressure"',
          text: 'The argument is **strengthened**. A clean low baseline makes the later spike in blood pressure much more probative of the diet\'s effect.',
          badge: 'Strengthens',
          badgeColor: 'green',
        },
      ],
    },
    {
      type: 'paragraph',
      text: 'That is the split you want. One answer undercuts the causal link and the other makes it much more plausible. The question earns its place not because it sounds scientific, but because it directly tests whether the author has measured a real change.',
    },

    { type: 'h3', text: 'What This Drill Teaches You to Ask Next Time' },
    {
      type: 'list',
      items: [
        'If the evidence is only an after snapshot, ask for the before picture.',
        'If the study compares groups, ask whether those groups were comparable from the start.',
        'If the conclusion generalizes broadly, separate sampling questions from assignment questions.',
        'If the measured result is only a proxy, ask whether it truly matches the conclusion variable.',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. Causal Evaluate asks for the missing test, not the missing attack.** Stay neutral and look for the decisive question.\n\n**2. Baseline, comparison group, assignment, sampling, measurement, and rival explanations are the core checkpoints.** The best answer targets the most central missing one.\n\n**3. PT-119-S-3-Q-3 is the module\'s clean baseline model.** The answer matters because either possible baseline radically changes the force of the conclusion.\n\n**4. The Yes/No Test keeps the doctrine honest.** If one answer helps and the other hurts, you have found real Evaluate work instead of a one-directional Strengthen or Weaken move.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Drill: Evaluating Causal Claims"
        },
        {
          "type": "paragraph",
          "text": "Causal claims are the single most common evaluation target, appearing in roughly 30% of all Evaluate the Argument questions. The argument asserts that one event or condition **caused** another, and your job is to find the question whose answer would determine whether the causal link is genuine or merely coincidental."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Three Causal Gaps"
        },
        {
          "type": "paragraph",
          "text": "Every causal argument is vulnerable to three categories of challenge. The correct Evaluate answer will target one of them."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Gap Type",
            "text": "Description"
          },
          "items": [
            {
              "title": "Alternative Cause",
              "text": "Something other than X could have caused Y. The author assumes X is the only plausible explanation, but a rival factor — operating at the same time, in the same population — could be the real driver.",
              "badge": "Most Common",
              "badgeColor": "green"
            },
            {
              "title": "Reversed Causation",
              "text": "Perhaps Y caused X, not the other way around. The author assumes the causal arrow points one direction, but the evidence is equally consistent with the arrow pointing the other way.",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Coincidence",
              "text": "X and Y may co-occur without either causing the other. A shared third factor could produce both, or the correlation could be purely accidental.",
              "badge": "Less Common",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Prephrase Shortcut",
          "variant": "tip",
          "text": "When you spot a causal claim, your default prephrase is: **\"Was there another factor that could explain the effect?\"** This covers alternative causes and coincidence. If the stimulus specifically describes a correlation without clear temporal ordering, also consider: **\"Could the causal direction be reversed?\"**"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Spotting Causal Language"
        },
        {
          "type": "paragraph",
          "text": "Causal conclusions announce themselves through specific vocabulary. Learn to spot these signals instantly:"
        },
        {
          "type": "table",
          "headers": [
            "Signal Phrase",
            "Example"
          ],
          "rows": [
            [
              "*caused / causes*",
              "\"The new policy **caused** the decline in absenteeism.\""
            ],
            [
              "*led to / leads to*",
              "\"Increased screen time **led to** poorer sleep quality.\""
            ],
            [
              "*responsible for*",
              "\"The fertilizer is **responsible for** the higher crop yield.\""
            ],
            [
              "*resulted in*",
              "\"The merger **resulted in** lower consumer prices.\""
            ],
            [
              "*due to / because of*",
              "\"The drop in enrollment is **due to** the tuition increase.\""
            ],
            [
              "*contributed to*",
              "\"Social media **contributed to** the spread of misinformation.\""
            ],
            [
              "*is the reason / explains*",
              "\"Staff turnover **explains** the decline in customer satisfaction.\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Practice Problem"
        },
        {
          "type": "paragraph",
          "text": "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis."
        },
        {
          "type": "paragraph",
          "text": "<br/><br/><br/>"
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Step-by-Step Analysis"
        },
        {
          "type": "paragraph",
          "text": "*(Scroll down only after committing to an answer.)*"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Step 1: Find the Conclusion"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sentence",
            "text": "Role"
          },
          "items": [
            {
              "title": "\"A factory installed an advanced air filtration system last January.\"",
              "text": "This is **background** — it describes the event (the supposed cause).",
              "badge": "Background",
              "badgeColor": "slate"
            },
            {
              "title": "\"In the twelve months following the installation, the rate of respiratory illness among factory workers dropped by 35%.\"",
              "text": "This is the **premise** — the observed effect after the supposed cause.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"The factory manager concluded that the new filtration system is responsible for the improvement in worker health.\"",
              "text": "This is the **conclusion** — a causal claim that the filtration system caused the health improvement.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "h3",
          "text": "Step 2: Identify the Gap"
        },
        {
          "type": "paragraph",
          "text": "The argument observes a correlation (new system installed → respiratory illness drops) and concludes causation (the system *caused* the drop). The classic causal gap: **the author has not ruled out alternative causes.** Perhaps something else changed at the same time — a smoking ban, improved ventilation from a building renovation, a shift in workforce demographics, or even a seasonal reduction in airborne irritants."
        },
        {
          "type": "h3",
          "text": "Step 3: Prephrase"
        },
        {
          "type": "paragraph",
          "text": "Prephrase: *\"Was there another change at the factory during the same period that could explain the drop in respiratory illness?\"*"
        },
        {
          "type": "h3",
          "text": "Step 4: Apply the Yes/No Test to Choice (B)"
        },
        {
          "type": "paragraph",
          "text": "Choice (B) asks: *\"Did the factory also implement a ban on smoking in the building at approximately the same time the filtration system was installed?\"*"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Answer",
            "text": "Effect on the Argument"
          },
          "items": [
            {
              "title": "\"Yes\" — a smoking ban was also implemented",
              "text": "The argument is **weakened**. The smoking ban is a plausible alternative cause for the decline in respiratory illness. The improvement may have nothing to do with the filtration system — eliminating indoor smoke exposure could easily produce a 35% reduction on its own.",
              "badge": "Weakens",
              "badgeColor": "red"
            },
            {
              "title": "\"No\" — no smoking ban was implemented",
              "text": "The argument is **strengthened**. With one major alternative cause eliminated, the filtration system becomes a more plausible explanation for the improvement. The causal link is more credible.",
              "badge": "Strengthens",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "Clear split. Choice (B) passes the Yes/No Test and directly targets the alternative-cause gap."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why the Other Choices Fail"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) Rate of illness at factories without the system",
              "text": "Knowing the rate at other factories provides a rough benchmark but does not address whether *this* factory's improvement was caused by the filtration system specifically. Other factories differ in countless ways. **Too indirect to be the most useful question.**",
              "badge": "Weak Connection",
              "badgeColor": "red"
            },
            {
              "title": "(C) Maintenance cost of the new system",
              "text": "Cost is irrelevant to whether the system improved health. An expensive system can still be effective; a cheap one can still be ineffective. **No impact on the causal claim.**",
              "badge": "Irrelevant",
              "badgeColor": "red"
            },
            {
              "title": "(D) Severity of pre-installation illnesses",
              "text": "Whether previous illnesses were life-threatening tells us about severity, not about what caused the rate to drop. The conclusion is about the *frequency* of illness, not its *seriousness*. **Wrong aspect of the gap.**",
              "badge": "Wrong Gap",
              "badgeColor": "red"
            },
            {
              "title": "(E) Reviews from other clients",
              "text": "Testimonials from other companies do not prove the system caused the improvement at *this* factory. Different facilities, different conditions. **Scope shift.**",
              "badge": "Scope Shift",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**1. Causal claims are the #1 evaluation target.** When you see causal language (caused, led to, responsible for), immediately think: alternative cause.\n\n**2. The default prephrase is: \"Was there another factor?\"** This single question targets the most common causal gap.\n\n**3. The correct answer introduces a specific alternative cause.** It names a concrete rival factor and asks whether it was present. One answer to this question strengthens (no rival), and the other weakens (rival present).\n\n**4. Wrong answers ask about cost, severity, or external benchmarks** — none of which resolve whether the supposed cause actually produced the observed effect."
        }
      ],
    },
  },
};
