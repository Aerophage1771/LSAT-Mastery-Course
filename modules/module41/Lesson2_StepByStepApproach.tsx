import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "41-2",
  title: "Step-by-Step: Weaken-Strengthen",
  content: [
    { type: 'h3', text: "Step-by-Step: Weaken-Strengthen" },
    { type: 'process', steps: [
      "Isolate the exact claim the stem wants you to affect",
      "Classify how that claim is being supported",
      "Predict the kind of new fact that would matter most",
      "Judge each answer by direct impact, not by topic overlap",
      "Break ties by scope, direction, and centrality"
    ]},
    { type: 'h4', text: "Step 1: Isolate the exact claim the stem wants you to affect" },
    { type: 'paragraph', text: "Go back to the passage and identify the precise target: a hypothesis, an explanation, a historical interpretation, a policy judgment, an experimental result, or a distinction the author is drawing. RC Weaken-Strengthen questions are lost when students evaluate the whole passage instead of the exact claim the stem names." },
    { type: 'list', items: [
      "What is the **specific conclusion or interpretation** being tested?",
      "What evidence or rationale is the passage using to support it?",
      "What live objection or gap still seems available?"
    ]},
    { type: 'h4', text: "Step 2: Classify how that claim is being supported" },
    { type: 'paragraph', text: "Different argument types break in different places. If you know what kind of reasoning the passage is using, you can predict the kind of answer that will matter most." },
    { type: 'table', headers: ["If the passage is doing this...", "The best weakener often does this...", "The best strengthener often does this..."], rows: [
      ["Explaining why something happened", "Offers a competing explanation for the same evidence", "Rules out the strongest competing explanation"],
      ["Evaluating a phenomenon-hypothesis passage", "Shows the phenomenon could be explained another way or that the favored hypothesis misses key facts", "Shows the favored hypothesis explains the phenomenon better than the live rivals"],
      ["Defending a policy or practical recommendation", "Shows worse consequences or a missing cost", "Shows better outcomes or removes a practical objection"],
      ["Interpreting evidence or a text", "Shows the evidence fits another interpretation just as well", "Shows the preferred interpretation explains the evidence more completely"],
      ["Relying on a study or experiment", "Exposes a flaw in method, sample, or controls", "Shows the method really does measure what the passage claims"]
    ]},
    { type: 'h4', text: "Step 3: Predict the kind of new fact that would matter most" },
    { type: 'paragraph', text: "Before you read the answers, finish the sentence: \"The best answer will probably...\" You do not need to predict the exact content. You just need to predict the job: give a rival explanation, show the policy backfires, confirm the missing link, or expose that the evidence does not prove what the passage says it proves." },
    { type: 'h4', text: "Step 4: Judge each answer by direct impact, not by topic overlap" },
    { type: 'paragraph', text: "Now assume each answer is true and ask what it does to the target claim. Ignore answers that are merely relevant to the subject matter. Reward the answer that most directly changes how believable the target reasoning is." },
    { type: 'breakdown', labels: { title: 'Answer-Choice Check', text: 'What to ask yourself' }, items: [
      {
        title: "Direct impact",
        text: "Does this answer change the force of the exact claim named in the stem, or is it just adjacent to the topic?",
        badge: "Centrality",
        badgeColor: "indigo"
      },
      {
        title: "Correct direction",
        text: "Does this answer actually weaken when the stem wants weaken, or strengthen when the stem wants strengthen? Some tempting answers matter, but in the wrong direction.",
        badge: "Direction",
        badgeColor: "red"
      },
      {
        title: "Competing explanation check",
        text: "If the passage is explaining a phenomenon, ask whether the answer provides or removes a serious alternative explanation. That is one of the highest-value moves in the real pool.",
        badge: "Alternative cause",
        badgeColor: "blue"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: Which answer hits the core link?" },
    { type: 'paragraph', text: "Ask which answer forces the biggest re-evaluation of the passage's actual reasoning. One contender may matter in a loose way, while the other directly changes the value of the evidence, the plausibility of the explanation, or the practicality of the recommendation. The latter is usually right." },
    { type: 'h4', text: "Tie-Breaker #2: Which answer matches the scope of the target claim?" },
    { type: 'paragraph', text: "A common trap answer affects a nearby issue, a broader population, or a different time frame. If the target claim is about a specific policy, experiment, or explanation, the correct answer should operate at that same level of scope." },
    { type: 'h4', text: "Tie-Breaker #3: Which answer best handles the live rival?" },
    { type: 'paragraph', text: "On hard questions, the final two answers often both matter. The correct one is usually the one that best exposes or best removes the strongest competing explanation or objection still available in the passage." },
    { type: 'callout', title: "Advanced Readiness", variant: "tip", text: "The advanced RC Weaken-Strengthen questions usually stop feeling hard once you stop asking, \"Which answer seems important?\" and start asking, \"Which answer changes the exact reasoning most directly?\" That shift is the real skill this module is trying to build." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Step-by-Step Approach"
        },
        {
          "type": "h4",
          "text": "Step 1: Isolate the Argument: Find the Conclusion and Evidence."
        },
        {
          "type": "paragraph",
          "text": "First, go to the passage and pinpoint the specific argument the question is targeting. It is a conclusion supported by evidence. Your goal is to break it down into a simple Evidence -> Conclusion structure."
        },
        {
          "type": "list",
          "items": [
            "**Example:** If the author claims, \"The discovery of tool marks on the fossils (Evidence) proves that early humans were hunters (Conclusion),\" you have isolated the argument."
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Predict the Kind of Information You Need."
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answers, anticipate what a correct answer will do."
        },
        {
          "type": "list",
          "items": [
            "**For Weaken questions:** Look for a new fact that attacks the link between the evidence and the conclusion. This often involves providing an alternative explanation.",
            "**For Strengthen questions:** Look for a new fact that reinforces the link between the evidence and the conclusion. This often involves ruling out an alternative explanation."
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Evaluate Each Answer Choice's Logical Impact."
        },
        {
          "type": "paragraph",
          "text": "This is the crucial step. You must **assume each answer choice is true** and then assess its effect on the argument from Step 1. For each choice, ask yourself: \"If this new information is true, does it make the original conclusion more likely or less likely to be correct?\" Eliminate any choice that has no logical impact, affects a different argument, or goes in the opposite direction."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "If You Get Stuck Between Two Choices..."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #1: The Direct Impact Test"
        },
        {
          "type": "paragraph",
          "text": "One answer choice will have a more direct and significant impact on the argument's core logic than the other. Ask yourself, \"Which of these new facts, if true, would force the author to most seriously reconsider their reasoning?\" A choice that attacks a central, unstated assumption of the argument is almost always stronger than one that just adds a minor, tangential piece of information."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: The Scope Match Test"
        },
        {
          "type": "paragraph",
          "text": "Reread the specific conclusion you isolated in Step 1. Then, look at your final two answer choices. One of them may weaken or strengthen a similar argument, but not the exact one the question is targeting. For example, if the conclusion is about \"mammals in the Cretaceous period,\" an answer choice about \"all animals throughout history\" is likely a scope mismatch. The correct answer must precisely match the scope of the argument."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "Weaken-Strengthen -- Playbook" },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: "Weaken-Strengthen questions take 60-90 seconds. The critical investment is Steps 1-3 (isolate, classify, predict) before you read any answers. Rushing to the choices without a prediction is the most common time sink." },
        {
          type: 'process',
          title: 'Weaken-Strengthen Workflow',
          steps: [
            "Isolate the target: Go back to the passage and identify the exact claim, hypothesis, or policy judgment the stem names. Do not evaluate the whole passage.",
            "Classify the support: Determine what kind of reasoning the passage uses -- causal explanation, policy outcome, evidence-conclusion link, study results, or text interpretation.",
            "Predict the job: Before reading answers, finish the sentence: 'The best answer will probably...' (give a rival explanation, show the policy backfires, confirm the missing link, etc.).",
            "Judge by direct impact: Assume each answer is true. Ask what it does to the target claim. Ignore answers that are merely relevant to the subject but do not change the argument's force.",
            "Tie-break by centrality and scope: Choose the answer that hits the core reasoning link, matches the scope of the target claim, and best handles the strongest live rival explanation or objection."
          ]
        },
        {
          type: 'table',
          headers: ['If the passage is doing this...', 'Best weakener pattern', 'Best strengthener pattern'],
          rows: [
            ['Explaining why something happened', 'Offers a competing explanation for the same evidence', 'Rules out the strongest competing explanation'],
            ['Defending a policy or recommendation', 'Shows worse consequences or a missing cost', 'Shows better outcomes or removes a practical objection'],
            ['Interpreting evidence or a text', 'Shows the evidence fits another interpretation just as well', 'Shows the preferred interpretation explains evidence more completely'],
            ['Relying on a study or experiment', 'Exposes a flaw in method, sample, or controls', 'Shows the method really does measure what the passage claims'],
            ['Evaluating a phenomenon-hypothesis', 'Shows a rival hypothesis explains the phenomenon equally well', 'Shows the favored hypothesis outperforms the live rivals']
          ]
        },
        {
          type: 'table',
          headers: ['If you see this in an answer choice...', 'Do this'],
          rows: [
            ['Answer discusses the same topic but does not change the target claim\'s plausibility', 'Eliminate -- topic overlap without impact'],
            ['Answer affects a background detail or side example', 'Eliminate -- peripheral hit, not a core-reasoning hit'],
            ['Answer gives evidence about a different time period, population, or scope', 'Eliminate -- scope drift; it does not match the target claim'],
            ['Answer sounds important but moves the argument in the wrong direction', 'Eliminate -- direction error; check whether the stem asks weaken or strengthen'],
            ['Answer introduces an alternative explanation for the same data', 'Strong weakener candidate; this is one of the highest-value patterns in the pool']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain Summary', text: "Isolate the exact target claim -> Classify the type of support the passage provides -> Predict the job the correct answer needs to do -> Judge each answer by direct impact on the target reasoning -> Break ties by asking which answer hits the core link, matches scope, and best handles the strongest live rival." }
      ]
    }
  }
};
