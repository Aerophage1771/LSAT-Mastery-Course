import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "27-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Application Questions" },
    { type: 'h4', text: "What's this question actually testing?" },
    { type: 'paragraph', text: "Application questions ask you to turn passage language into a working decision rule. In the released pool, this almost never means \"remember the gist and pick something related.\" It means: isolate the passage's standard, preserve its qualifiers, and test a new scenario against that exact standard." },
    { type: 'paragraph', text: "This category is harder than it first appears. In the current released pool, Application appears 73 times, with the largest share at the top end of difficulty. The hardest versions often show up in science, law, and debate passages, where the right answer depends on a very precise reading of a theory, policy standard, definition, or evaluative criterion." },
    { type: 'table', headers: ["Live pool pattern", "What the stem is really asking", "What strong readers do"], rows: [
      ["Principle / standard", "Which scenario fits the passage's rule?", "Translate the rule into a checklist and test every answer against it."],
      ["Exemplify / instantiate", "Which case best counts as an example of the author's conception?", "Match the defining features, not the surface topic."],
      ["Hypothetical result", "If this new condition were true, what would follow under the passage's logic?", "Push the passage's causal or evaluative logic forward one step."],
      ["Policy / legal application", "How would the passage's position judge a new dispute or reform?", "Track scope, burden, tradeoffs, and any limiting condition in the passage."],
    ]},
    { type: 'paragraph', text: "In other words, the passage gives you the rulebook. The answer choices give you test cases. Your job is to decide which test case actually passes." },
    { type: 'h4', text: "What counts as an Application question in the live pool?" },
    {
      type: 'breakdown',
      labels: { title: 'Family', text: 'How it usually appears' },
      items: [
        {
          title: "Applying a standard or definition",
          text: "**Common stem shape:** given the information in the passage, based on the passage, by the standard described...\n\nThese questions ask whether a new case satisfies a passage rule, definition, or evaluative test. The right answer fits the rule's full language, not just the general theme.",
          badge: "Checklist",
          badgeColor: "indigo"
        },
        {
          title: "Exemplifying a conception",
          text: "**Common stem shape:** which choice most closely exemplifies, is most in keeping with, or is least compatible with the view described.\n\nThese questions often look softer, but they are still rule application. You have to identify the features that make the author's conception what it is and then match those features in a new example.",
          badge: "Exemplify",
          badgeColor: "blue"
        },
        {
          title: "Projecting a hypothetical outcome",
          text: "**Common stem shape:** suppose that..., if this were true..., what would most likely follow?\n\nThese questions ask you to run the passage's logic forward. In science passages, that often means extending a mechanism. In law or policy passages, it often means judging a new dispute under the same governing principle.",
          badge: "Predict",
          badgeColor: "green"
        }
      ]
    },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Application questions reward disciplined translation. Before you touch the choices, rewrite the passage idea into a usable standard: what must be true, what cannot be true, and what counts as merely optional background. Then test the answers one condition at a time." },
    { type: 'h3', text: "The mistakes this pool punishes" },
    { type: 'list', items: [
      "Treating the passage principle like a vibe instead of a checklist.",
      "Remembering the conclusion of a theory but dropping the condition that limits when it applies.",
      "Choosing the answer that is most on-topic instead of the one that satisfies every required feature.",
      "Importing outside common sense when the passage has already told you what standard to use.",
      "Missing whether the stem asks for the best fit, the closest example, or the least compatible case."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "The Importance of Application Questions" },
    { type: 'paragraph', text: "Application questions appear 73 times among the released LSATs, accounting for roughly 3.5% of all RC questions. But raw frequency understates their importance. Because so many of them land at difficulty 4 or 5, this category often exposes whether your comprehension is precise enough for the advanced passage block." },
    { type: 'paragraph', text: "If you can handle RC Application well, you are usually doing three deeper things correctly: reading for operative language, distinguishing necessary conditions from decorative detail, and carrying passage logic into a new context without distorting it. Those same skills support hard Inference, Weaken-Strengthen, and comparative RC work." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Application Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Application questions ask you to take a rule, standard, or theory explained in the passage and correctly apply it to a brand new situation. Your goal is to show that you understand the principle from the passage so well that you can use it in a completely different context."
        },
        {
          "type": "paragraph",
          "text": "Essentially, the passage provides a set of criteria, and you must evaluate each answer choice against that set to find the only perfect match. To do this effectively, you should:"
        },
        {
          "type": "list",
          "items": [
            "Isolate the specific principle or standard from the text.",
            "Understand the conditions required for the principle to apply.",
            "Find the one hypothetical scenario in the answer choices that meets those exact conditions."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot an Application Question"
        },
        {
          "type": "paragraph",
          "text": "Application questions ask you to take a rule, principle, theory, or standard explained in the passage and use it in a new, hypothetical context. Your task is to show you understand the logic from the passage so well that you can correctly apply it to a situation you haven't seen before."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Applying a Principle or Definition",
              "text": "**Keywords:** consistent with, conforms to, illustrates, exemplifies, by the standard of, application of\n\n• \"Which one of the following situations is **most consistent with** the species-energy hypothesis as described in the passage?\"\n• \"Which one of the following **exemplifies** the characteristics of Gillian's work as described in the passage?\"\n• \"**By the standard described** in the last paragraph... which one of the following would be considered authentic?\"",
              "badge": "Standard",
              "badgeColor": "indigo"
            },
            {
              "title": "Predicting Hypothetical Results",
              "text": "**Keywords:** if... then, suppose, would be, most likely to, least likely to, would say\n\n• \"**If** the scenario described...were to become true, **then which one of the following would most likely be the case**?\"\n• \"**Suppose** a study is conducted...the results of that study would be most directly relevant to...\"\n• \"The author **would most likely say that**...\"",
              "badge": "Prediction",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Don't get thrown off by the hypothetical scenarios. Your first step is always to isolate the specific rule, theory, or standard from the passage and understand its conditions perfectly. Only then should you evaluate the answer choices to find the one scenario that correctly fits that rule. You are applying the passage's logic, not your own."
        },
        {
          "type": "h3",
          "text": "The Importance of Application Questions"
        },
        {
          "type": "paragraph",
          "text": "Application questions appear 73 times among the released LSATs, accounting for roughly 3.5% of all RC questions. This question type is a true test of deep comprehension. Mastering it requires you to move beyond simply understanding what a principle says to understanding how it works. This ability to flexibly apply the logic of the passage to new scenarios will improve your performance on other complex question types that hinge on a nuanced understanding of the author's reasoning."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "RC Application Questions — At a Glance" },
        { type: 'paragraph', text: "Application questions ask you to take a rule, standard, or theory from the passage and test it against a new scenario. They appear **73 times** in the released pool and skew toward higher difficulty." },
        { type: 'table', headers: ["Element", "What to Look For", "Core Skill", "Common Trap"], rows: [
          ["Governing rule", "Definitions, standards, evaluative criteria stated in the passage", "Translate the rule into a testable checklist", "Treating the rule as a vibe instead of a precise standard"],
          ["Qualifiers and limiters", "\"only if,\" \"requires,\" \"does not include,\" \"primarily\"", "Preserve every qualifier when testing answers", "Dropping a limiting condition and picking a too-broad match"],
          ["New scenario in the answers", "Each choice presents a case the passage never discussed directly", "Match each case against the checklist feature by feature", "Choosing the answer with the most on-topic nouns instead of the best logical fit"],
          ["Stem direction", "\"best exemplifies,\" \"most consistent with,\" \"least compatible\"", "Notice whether you need the best fit or the worst fit", "Missing a LEAST or EXCEPT flip in the stem"],
        ]},
        { type: 'paragraph', text: "Quick example: A passage defines \"authentic craftsmanship\" as work that uses traditional methods AND reflects the maker's individual judgment. The correct answer is the choice that satisfies both conditions, not the one that merely involves a traditional material." },
        { type: 'list', ordered: true, items: [
          "Identify the passage's operative rule or standard.",
          "Rewrite it as a checklist of required and disqualifying features.",
          "Classify the stem: best fit, closest example, or least compatible.",
          "Test each answer against the checklist one condition at a time.",
          "Eliminate any answer that misses even one required feature.",
        ]},
        { type: 'callout', variant: 'tip', title: "Key Principle", text: "The passage gives you the rulebook; the answer choices give you test cases. Your job is to judge which case passes the rule — not which case sounds most related to the passage's topic." },
      ],
    },
  },
};
