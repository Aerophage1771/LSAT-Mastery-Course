import { Lesson } from '../../types';

export const Lesson10_Drill_PrecisionInCausality: Lesson = {
  id: '17-10',
  title: 'Drill: Precision in Causality (PT-104-S-1-Q-19)',
  questionPolicy: 'repository_required',
  content: [
    { type: 'h2', text: 'Precision in Causality' },
    {
      type: 'paragraph',
      text: 'Precision in causality questions demand extreme intellectual discipline. The stimulus describes a specific causal mechanism\u2014how A produces B through pathway C\u2014and then introduces a constraint that eliminates that pathway in a different context. The "Must Be True" inference is narrow: if the mechanism is absent, then any observed effect cannot be attributed to that mechanism. The effect might still occur through other means, but not through the stated pathway.',
    },

    {
      type: 'paragraph',
      text: 'The difficulty lies in resisting the temptation to over-conclude. When the stimulus says "X works by doing Y" and "Y is not involved in Z," many examinees jump to "X does not work on Z." But this is too strong. The correct inference is more precise: if X does help with Z, it is not because of Y. The stimulus leaves open the possibility that X has other effects beyond Y.',
    },
    {
      type: 'paragraph',
      text: 'This is also where **purpose and effect language** can mislead students. A drug, rule, or policy may have a stated function, but MBT does not let you treat that function as proof of every effect you would expect in the real world. Stay tied to the mechanism the stimulus actually states and the effect it actually licenses.',
    },

    { type: 'h3', text: 'The Mechanism-Constraint Pattern' },
    {
      type: 'process',
      title: 'Analyzing Causal Precision Questions',
      steps: [
        '**Step 1 \u2014 Identify the Mechanism:** What does the stimulus say about how the agent works? What is the specific causal pathway?',
        '**Step 2 \u2014 Identify the Constraint:** What does the stimulus say is absent or irrelevant in the new context? Which part of the mechanism is eliminated?',
        '**Step 3 \u2014 Draw the Narrow Inference:** If the mechanism is eliminated, any effect in the new context cannot be attributed to that mechanism. But do not conclude the agent is entirely ineffective\u2014other pathways may exist.',
      ],
    },

    {
      type: 'callout',
      variant: 'tip',
      title: 'Avoid the "Therefore Useless" Trap',
      text: 'When the stimulus eliminates one mechanism, wrong answers often conclude the agent is entirely ineffective. But "works by doing Y" does not mean "works only by doing Y." Unless the stimulus says the mechanism is the sole pathway, other effects may contribute independently.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Purpose Is Not Proof of Effect',
      text: 'Even if a drug is designed to reduce a symptom, MBT still requires proof about **how** that effect occurs in the scenario at hand. Do not slide from "this is what the drug is for" to "therefore it must work here." On MBT, stated mechanism beats intuitive purpose every time.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Precision in Causality (PT-104-S-1-Q-19)' },
    {
      type: 'paragraph',
      text: 'This drill tests your ability to maintain causal precision in a medical science context. The stimulus describes how antihistamines work and then introduces a constraint about colds. The correct inference requires carefully limiting your conclusion to what the causal structure actually supports.',
    },
    {
      type: 'paragraph',
      text: '**Instructions:** Map the mechanism, identify the constraint, and formulate your inference before looking at the answers.',
    },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    {
      type: 'question-card',
      id: 'PT-104-S-1-Q-19',
      stimulus:
        'Pollen and other allergens can cause cells in the nose to release histamine, a chemical that inflames nasal tissue and causes runny nose, congestion, and sneezing. Antihistamines minimize these allergy symptoms by blocking the action of histamine. In addition, antihistamines have other effects, including drowsiness. However, histamine plays no role in the processes by which colds produce their symptoms.',
      question: '**The Question:** If the statements above are true, which one of the following must also be true?',
      options: [
        '(A) Pollen and other allergens do not cause colds.',
        '(B) Colds are more difficult to treat than allergies.',
        '(C) Antihistamines, when taken alone, are ineffective against congestion caused by colds.',
        '(D) The sleeplessness that sometimes accompanies allergies can be effectively treated with antihistamines.',
        '(E) Any effect antihistamines may have in reducing cold symptoms does not result from blocking the action of histamine. (Correct)',
      ],
    },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Map the Causal Mechanism' },
    { type: 'paragraph', text: 'Break the stimulus into its causal components:' },

    {
      type: 'breakdown',
      labels: { title: 'Component', text: 'Details' },
      items: [
        {
          title: 'Cause of Allergy Symptoms',
          text: 'Allergens trigger histamine release \u2192 histamine inflames nasal tissue \u2192 runny nose, congestion, sneezing.',
          badge: 'Mechanism',
          badgeColor: 'blue',
        },
        {
          title: 'How Antihistamines Work',
          text: "Antihistamines block histamine's action, which minimizes allergy symptoms. This is the stated pathway.",
          badge: 'Agent',
          badgeColor: 'blue',
        },
        {
          title: 'Additional Effects',
          text: 'Antihistamines also cause drowsiness and have other unspecified effects beyond blocking histamine.',
          badge: 'Other Pathways',
          badgeColor: 'indigo',
        },
        {
          title: 'The Constraint',
          text: 'Histamine plays NO role in how colds produce their symptoms. The histamine pathway is entirely absent in cold symptom production.',
          badge: 'Constraint',
          badgeColor: 'red',
        },
      ],
    },

    { type: 'h4', text: 'Step 2: Draw the Narrow Inference' },
    {
      type: 'paragraph',
      text: 'The logic is precise: antihistamines help allergies by blocking histamine. Histamine is not involved in colds. Therefore, if antihistamines happen to reduce cold symptoms at all, that reduction cannot come from blocking histamine\u2014because there is no histamine to block in the cold pathway. The effect, if any, must come from the "other effects" mentioned in the stimulus.',
    },

    {
      type: 'paragraph',
      text: 'Notice what we are not concluding: we are not saying antihistamines are useless against colds. We are saying only that the histamine-blocking mechanism is not the source of any cold-symptom relief. This is the discipline of causal precision.',
    },
    {
      type: 'paragraph',
      text: 'That is the same discipline you need whenever a stimulus mixes purpose and effect. The fact that antihistamines are used to minimize allergy symptoms does not prove that they will minimize cold symptoms through the same route. MBT makes you prove the effect in the exact domain and by the exact mechanism the stimulus supports.',
    },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Evaluation' },
      items: [
        {
          title: '(A) Pollen and other allergens do not cause colds.',
          text: 'The stimulus describes what causes allergy symptoms and states that colds produce symptoms through a different process. But it never addresses what causes colds. Allergens and cold viruses are simply not compared.',
          badge: 'Out of Scope',
          badgeColor: 'red',
        },
        {
          title: '(B) Colds are more difficult to treat than allergies.',
          text: 'The stimulus compares mechanisms, not treatment difficulty. "More difficult to treat" introduces a comparative judgment with no textual support.',
          badge: 'Unsupported Comparison',
          badgeColor: 'red',
        },
        {
          title: '(C) Antihistamines... are ineffective against congestion caused by colds.',
          text: 'This is the "therefore useless" trap. The stimulus says antihistamines have "other effects" beyond blocking histamine. One of those other effects might help with cold congestion. We cannot conclude ineffectiveness.',
          badge: 'Over-Conclusion Trap',
          badgeColor: 'red',
        },
        {
          title: '(D) The sleeplessness... can be effectively treated with antihistamines.',
          text: 'The stimulus says antihistamines cause drowsiness as a side effect. Drowsiness and treating sleeplessness are different concepts\u2014the stimulus never claims antihistamines are an effective sleep aid.',
          badge: 'Misapplication Trap',
          badgeColor: 'red',
        },
        {
          title:
            '(E) Any effect antihistamines may have in reducing cold symptoms does not result from blocking the action of histamine.',
          text: 'This is logically airtight. Premise 1: antihistamines reduce allergy symptoms by blocking histamine. Premise 2: histamine is not involved in cold symptoms. Conclusion: if antihistamines help with colds, the help cannot come from blocking histamine (since histamine is not part of the cold process). The careful phrasing "any effect... may have" preserves the possibility that antihistamines have no cold-symptom effect at all.',
          badge: 'Correct',
          badgeColor: 'green',
        },
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Causal Precision: Trap Taxonomy' },
    {
      type: 'table',
      headers: ['Trap', 'Mechanism', 'How to Spot It'],
      rows: [
        [
          'Out of Scope',
          'Addresses a causal question the stimulus never raises',
          'Check: does the stimulus actually discuss the cause of the phenomenon in the answer?',
        ],
        [
          'Unsupported Comparison',
          'Introduces a relative judgment (harder, better, worse) without data',
          'Flag comparative adjectives and verify both sides have textual support',
        ],
        [
          'Over-Conclusion',
          'Concludes total ineffectiveness from the absence of one mechanism',
          'Look for "other effects" or similar language that preserves alternative pathways',
        ],
        [
          'Misapplication',
          'Repurposes a side effect as a therapeutic claim',
          'Distinguish between "causes X as a side effect" and "effectively treats X"',
        ],
        [
          'Purpose-to-Effect Leap',
          'Treats a stated function or expected use as proof that the same effect must occur in a new setting',
          'Ask whether the stimulus proves the mechanism in this exact setting, not just the intended function in general',
        ],
      ],
    },

    {
      type: 'callout',
      title: 'Key Takeaway',
      variant: 'summary',
      text: 'Causal precision questions test whether you can limit your conclusion to exactly what the causal structure supports\u2014no more and no less. When a stimulus eliminates one causal pathway in a new context, the correct inference says the pathway cannot explain any observed effect in that context. It does not say the agent is useless, and it does not address questions the stimulus never raises. Stay narrow, stay precise.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "diff-note",
          "text": "PRIMARY CHANGE: Addition of 'Try it first' prompt before Full Analysis. Additionally, a note is added to the evaluation of answer (E) to highlight how its careful hedged language is itself a model of causal precision — a missed teaching opportunity in the website version.",
          "variant": "comment"
        },
        {
          "type": "h2",
          "text": "Precision in Causality"
        },
        {
          "type": "paragraph",
          "text": "Precision in causality questions demand extreme intellectual discipline. The stimulus describes a specific causal mechanism — how A produces B through pathway C — and then introduces a constraint that eliminates that pathway in a different context. The \"Must Be True\" inference is narrow: if the mechanism is absent, then any observed effect cannot be attributed to that mechanism. The effect might still occur through other means, but not through the stated pathway."
        },
        {
          "type": "paragraph",
          "text": "The difficulty lies in resisting the temptation to over-conclude. When the stimulus says \"X works by doing Y\" and \"Y is not involved in Z,\" many examinees jump to \"X does not work on Z.\" But this is too strong. The correct inference is more precise: if X does help with Z, it is not because of Y. The stimulus leaves open the possibility that X has other effects beyond Y."
        },
        {
          "type": "h3",
          "text": "The Mechanism-Constraint Pattern"
        },
        {
          "type": "process",
          "title": "Analyzing Causal Precision Questions",
          "steps": [
            "**Step 1 — Identify the Mechanism:** What does the stimulus say about how the agent works? What is the specific causal pathway?",
            "**Step 2 — Identify the Constraint:** What does the stimulus say is absent or irrelevant in the new context? Which part of the mechanism is eliminated?",
            "**Step 3 — Draw the Narrow Inference:** If the mechanism is eliminated, any effect in the new context cannot be attributed to that mechanism. But do not conclude the agent is entirely ineffective — other pathways may exist."
          ]
        },
        {
          "type": "callout",
          "title": "Avoid the \"Therefore Useless\" Trap",
          "variant": "tip",
          "text": "When the stimulus eliminates one mechanism, wrong answers often conclude the agent is entirely ineffective. But \"works by doing Y\" does not mean \"works only by doing Y.\" Unless the stimulus says the mechanism is the sole pathway, other effects may contribute independently."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Drill: Precision in Causality (PT-104-S-1-Q-19)"
        },
        {
          "type": "paragraph",
          "text": "This drill tests your ability to maintain causal precision in a medical science context. The stimulus describes how antihistamines work and then introduces a constraint about colds. The correct inference requires carefully limiting your conclusion to what the causal structure actually supports."
        },
        {
          "type": "question-card",
          "id": "PT-104-S-1-Q-19",
          "stimulus": "Pollen and other allergens can cause cells in the nose to release histamine, a chemical that inflames nasal tissue and causes runny nose, congestion, and sneezing. Antihistamines minimize these allergy symptoms by blocking the action of histamine. In addition, antihistamines have other effects, including drowsiness. However, histamine plays no role in the processes by which colds produce their symptoms.",
          "question": "**The Question:** If the statements above are true, which one of the following must also be true?",
          "options": [
            "(A) Pollen and other allergens do not cause colds.",
            "(B) Colds are more difficult to treat than allergies.",
            "(C) Antihistamines, when taken alone, are ineffective against congestion caused by colds.",
            "(D) The sleeplessness that sometimes accompanies allergies can be effectively treated with antihistamines.",
            "(E) Any effect antihistamines may have in reducing cold symptoms does not result from blocking the action of histamine. (Correct)"
          ]
        },
        {
          "type": "callout",
          "title": "{{+Try This First+}}",
          "variant": "tip",
          "text": "{{+**Attempt this question on your own before reading the analysis below.** Map the causal mechanism (allergens → histamine → symptoms, antihistamines block histamine), identify the constraint (histamine plays no role in cold symptoms), and draw the narrow inference about what that means for antihistamines and colds. Commit to an answer, then check your reasoning below.+}}"
        },
        {
          "type": "h3",
          "text": "Full Analysis"
        },
        {
          "type": "h4",
          "text": "Step 1: Map the Causal Mechanism"
        },
        {
          "type": "paragraph",
          "text": "Break the stimulus into its causal components:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "Details"
          },
          "items": [
            {
              "title": "Cause of Allergy Symptoms",
              "text": "Allergens trigger histamine release → histamine inflames nasal tissue → runny nose, congestion, sneezing.",
              "badge": "Mechanism",
              "badgeColor": "blue"
            },
            {
              "title": "How Antihistamines Work",
              "text": "Antihistamines block histamine's action, which minimizes allergy symptoms. This is the stated pathway.",
              "badge": "Agent",
              "badgeColor": "blue"
            },
            {
              "title": "Additional Effects",
              "text": "Antihistamines also cause drowsiness and have other unspecified effects beyond blocking histamine.",
              "badge": "Other Pathways",
              "badgeColor": "indigo"
            },
            {
              "title": "The Constraint",
              "text": "Histamine plays NO role in how colds produce their symptoms. The histamine pathway is entirely absent in cold symptom production.",
              "badge": "Constraint",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Draw the Narrow Inference"
        },
        {
          "type": "paragraph",
          "text": "The logic is precise: antihistamines help allergies by blocking histamine. Histamine is not involved in colds. Therefore, if antihistamines happen to reduce cold symptoms at all, that reduction cannot come from blocking histamine — because there is no histamine to block in the cold pathway. The effect, if any, must come from the \"other effects\" mentioned in the stimulus."
        },
        {
          "type": "paragraph",
          "text": "Notice what we are not concluding: we are not saying antihistamines are useless against colds. We are saying only that the histamine-blocking mechanism is not the source of any cold-symptom relief. This is the discipline of causal precision."
        },
        {
          "type": "h4",
          "text": "Step 3: Evaluate Each Answer"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Evaluation"
          },
          "items": [
            {
              "title": "(A) Pollen and other allergens do not cause colds.",
              "text": "The stimulus describes what causes allergy symptoms and states that colds produce symptoms through a different process. But it never addresses what causes colds. Allergens and cold viruses are simply not compared.",
              "badge": "Out of Scope",
              "badgeColor": "red"
            },
            {
              "title": "(B) Colds are more difficult to treat than allergies.",
              "text": "The stimulus compares mechanisms, not treatment difficulty. \"More difficult to treat\" introduces a comparative judgment with no textual support.",
              "badge": "Unsupported Comparison",
              "badgeColor": "red"
            },
            {
              "title": "(C) Antihistamines... are ineffective against congestion caused by colds.",
              "text": "This is the \"therefore useless\" trap. The stimulus says antihistamines have \"other effects\" beyond blocking histamine. One of those other effects might help with cold congestion. We cannot conclude ineffectiveness.",
              "badge": "Over-Conclusion Trap",
              "badgeColor": "red"
            },
            {
              "title": "(D) The sleeplessness... can be effectively treated with antihistamines.",
              "text": "The stimulus says antihistamines cause drowsiness as a side effect. Drowsiness and treating sleeplessness are different concepts — the stimulus never claims antihistamines are an effective sleep aid.",
              "badge": "Misapplication Trap",
              "badgeColor": "red"
            },
            {
              "title": "(E) Any effect antihistamines may have in reducing cold symptoms does not result from blocking the action of histamine.",
              "text": "This is logically airtight. Premise 1: antihistamines reduce allergy symptoms by blocking histamine. Premise 2: histamine is not involved in cold symptoms. Conclusion: if antihistamines help with colds, the help cannot come from blocking histamine (since histamine is not part of the cold process). The careful phrasing \"any effect... may have\" preserves the possibility that antihistamines have no cold-symptom effect at all.",
              "badge": "Correct",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "diff-note",
          "text": "ADDITION: Note on answer (E)'s language modeling causal precision — missing from the website version.",
          "variant": "comment"
        },
        {
          "type": "callout",
          "title": "{{+Notice the Careful Language in (E)+}}",
          "variant": "default",
          "text": "{{+Answer (E) says \"any effect antihistamines **may** have.\" This phrasing is not accidental — it is logically necessary. If the answer had said \"antihistamines reduce cold symptoms but not through histamine blocking,\" it would be wrong, because we cannot confirm antihistamines reduce cold symptoms at all. The hedge \"any effect... may have\" is what makes the answer certain: it is true regardless of whether antihistamines help with colds or not. This is causal precision modeled in the correct answer itself.+}}"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Causal Precision: Trap Taxonomy"
        },
        {
          "type": "table",
          "headers": [
            "Trap",
            "Mechanism",
            "How to Spot It"
          ],
          "rows": [
            [
              "Out of Scope",
              "Addresses a causal question the stimulus never raises",
              "Check: does the stimulus actually discuss the cause of the phenomenon in the answer?"
            ],
            [
              "Unsupported Comparison",
              "Introduces a relative judgment (harder, better, worse) without data",
              "Flag comparative adjectives and verify both sides have textual support"
            ],
            [
              "Over-Conclusion",
              "Concludes total ineffectiveness from the absence of one mechanism",
              "Look for \"other effects\" or similar language that preserves alternative pathways"
            ],
            [
              "Misapplication",
              "Repurposes a side effect as a therapeutic claim",
              "Distinguish between \"causes X as a side effect\" and \"effectively treats X\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Key Takeaway",
          "variant": "summary",
          "text": "Causal precision questions test whether you can limit your conclusion to exactly what the causal structure supports — no more and no less. When a stimulus eliminates one causal pathway in a new context, the correct inference says the pathway cannot explain any observed effect in that context. It does not say the agent is useless, and it does not address questions the stimulus never raises. Stay narrow, stay precise."
        }
      ]
    }
  },
};
