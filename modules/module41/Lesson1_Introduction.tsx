import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "41-1",
  title: "Introduction",
  content: [
    { type: 'h3', text: "Germaine's Guide to RC Weaken-Strengthen Questions" },
    { type: 'h4', text: "What are these questions really asking?" },
    { type: 'paragraph', text: "RC Weaken-Strengthen questions ask you to evaluate the *impact* of a new fact on a claim, interpretation, or hypothesis from the passage. The job is not just to spot a relevant answer. The job is to decide which new piece of information most changes the status of the exact reasoning the passage is using." },
    { type: 'paragraph', text: "This category appears 78 times in the current released RC pool, and it tends to show up when the passage is doing real argumentative work: defending a historical interpretation, preferring one explanation over another, or making a practical claim about what policy or approach works best. That is why these questions often feel like LR inside RC. They reward logical precision, not just reading comprehension." },
    { type: 'list', items: [
      "**Find the exact target claim:** Which hypothesis, interpretation, or policy judgment is the question asking about?",
      "**Separate the core reasoning from the topic:** What evidence is the author relying on, and what gap still remains?",
      "**Ask what kind of new information would matter most:** a direct contradiction, an alternative explanation, a missing-condition repair, or a comparison that changes the practical outcome?"
    ]},
    { type: 'hr' },
    { type: 'h3', text: "The Main Weaken-Strengthen Jobs in the Real Pool" },
    {
      type: 'breakdown',
      labels: { title: 'Task Family', text: 'What the correct answer usually has to do' },
      items: [
        {
          title: "Attack or Support an Interpretation",
          text: "The passage offers an explanation of evidence, an account of why something happened, or an interpretation of a text or theory. The correct answer changes how plausible that interpretation is by either backing it up or exposing a better competing account.",
          badge: "Interpretation",
          badgeColor: "indigo"
        },
        {
          title: "Attack or Support a Practical Claim",
          text: "The passage argues that a policy, method, or social approach works better than its alternative. The strongest answers usually give comparative evidence about consequences, not a side comment about the topic.",
          badge: "Policy / outcome",
          badgeColor: "blue"
        },
        {
          title: "Attack or Support the Link Between Evidence and Conclusion",
          text: "The passage uses a fact pattern to justify a broader claim. The correct answer either exposes a hole in that link or closes it. Alternative explanations are especially common weakeners here.",
          badge: "Reasoning link",
          badgeColor: "green"
        }
      ]
    },
    { type: 'h3', text: "What Makes These Questions Hard" },
    {
      type: 'table',
      headers: ['Pressure Point', 'What the trap looks like', 'Why it fails'],
      rows: [
        ['Topic Match', 'The answer talks about the same subject as the passage.', 'Topic overlap is not enough. The answer must change the force of the target claim.'],
        ['Side-Issue Impact', 'The answer affects a background detail or an example from the passage.', 'A good weakener or strengthener hits the argument\'s core support, not a peripheral detail.'],
        ['Scope Drift', 'The answer gives evidence about a nearby issue, time period, or population.', 'If it does not match the scope of the claim being tested, its impact is weaker than it looks.'],
        ['Direction Error', 'The answer sounds important, but it actually helps when the stem wants harm, or hurts when the stem wants support.', 'You must track whether the stem asks for strengthen, weaken, cast doubt, or lend credence.'],
        ['Alternative-Explanation Blindness', 'The answer seems to add evidence, but it really offers a different explanation for the same data.', 'This is one of the most common high-value weakener patterns in the pool.']
      ]
    },
    { type: 'h3', text: "What the Stems Usually Signal" },
    {
      type: 'breakdown',
      labels: { title: 'Stem Family', text: 'How it tends to behave' },
      items: [
        {
          title: "Weaken / Undermine / Cast Doubt On",
          text: "These stems ask for the answer that most damages the reasoning. The strongest weakener often introduces a competing cause, shows that the evidence can be explained another way, or gives comparative evidence that cuts against the passage's practical conclusion.",
          badge: "Attack",
          badgeColor: "red"
        },
        {
          title: "Strengthen / Support / Lend Credence To",
          text: "These ask for the answer that most improves the author's case. The strongest strengthener often rules out a live alternative explanation, confirms a missing link, or adds evidence at the same level as the conclusion.",
          badge: "Support",
          badgeColor: "green"
        },
        {
          title: "Most Relevant / Would Bear On / Best Evidence",
          text: "These can look like Application questions, but the deeper task is still impact analysis: which new evidence would actually move the argument one way or the other?",
          badge: "Diagnostic impact",
          badgeColor: "blue"
        }
      ]
    },
    { type: 'h3', text: "What Later Advanced Questions Demand" },
    { type: 'paragraph', text: "The advanced RC versions stop being simple \"find a contradiction\" questions. They often hide the target claim inside a paragraph of interpretation, force you to distinguish the passage's central rationale from a supporting illustration, or make you choose between answers that both matter but do not matter equally. That means your job is to judge *which new fact changes the argument most directly*." },
    { type: 'list', items: [
      "A strong weakener often shows that the evidence supports a **different explanation** just as well.",
      "A strong strengthener often shows that the passage's preferred interpretation survives the **best live objection**.",
      "In policy passages, the decisive answer often compares **actual outcomes**, not abstract principles."
    ]},
    { type: 'paragraph', text: "Phenomenon-hypothesis passages are especially important here. When the passage is trying to explain a puzzling result, the best weakener often supplies a rival explanation, and the best strengthener often blocks the strongest rival explanation still left alive." },
    { type: 'callout', title: "Overarching Takeaway", variant: "summary", text: "Treat RC Weaken-Strengthen questions as argument-impact questions. Isolate the exact claim, diagnose how the passage is supporting it, and then ask which new fact most changes that support." },
    { type: 'h3', text: "The Importance of Weaken-Strengthen Questions" },
    { type: 'paragraph', text: "This category is one of the clearest bridges between RC and LR. If you can handle these questions well, you are not just better at a single RC type. You are better at reading for reasoning, weighing competing explanations, and seeing which evidence actually matters." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Germaine's Guide to RC Weaken-Strengthen Questions"
        },
        {
          "type": "h4",
          "text": "What's this question asking?"
        },
        {
          "type": "paragraph",
          "text": "Weaken-Strengthen questions ask you to evaluate how a new piece of information would affect an argument or hypothesis from the passage. Your goal is to assume each answer choice is true and then determine which one most logically helps (strengthens) or hurts (weakens) the specified claim."
        },
        {
          "type": "paragraph",
          "text": "This requires you to analyze the underlying logic of an argument. To do this effectively:"
        },
        {
          "type": "list",
          "items": [
            "**Isolate the specific argument:** Pinpoint the exact conclusion and the evidence used to support it.",
            "**For Weaken questions:** Look for a statement that exploits a flaw in the reasoning, introduces an alternative explanation, or presents a counterexample.",
            "**For Strengthen questions:** Look for a statement that provides new supporting evidence, closes a logical gap, or rules out a potential alternative explanation.",
            "**Focus on logical impact:** The correct answer will directly affect the quality of the argument, not just discuss the general topic."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Stem Identification: How to Spot a Weaken-Strengthen Question"
        },
        {
          "type": "paragraph",
          "text": "Weaken-Strengthen questions ask you to evaluate the impact of a new piece of information on an argument from the passage. You must assume each answer choice is true and then determine which one most supports or undermines the argument in question. The chart below breaks down the common phrasing for these two opposite but related tasks."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Category",
            "text": "Examples & Keywords"
          },
          "items": [
            {
              "title": "Weaken Questions",
              "text": "**Keywords:** weaken, undermine, challenge, cast doubt on, call into question, counterexample\n\n• \"Which one of the following, if true, most clearly **weakens** the... hypothesis...?\"<br>• \"Which one of the following, if true, would most seriously **undermine** the validity of the results...?\"<br>• \"Which one of the following, if true, would most **cast doubt on** the author's interpretation...?\"",
              "badge": "Attack",
              "badgeColor": "red"
            },
            {
              "title": "Strengthen Questions",
              "text": "**Keywords:** strengthen, support, lend credence to, bolster, most relevant to\n\n• \"Which one of the following, if true, would most **strengthen** the passage's position concerning...?\"<br>• \"Which one of the following, if true, lends the most **support to** the view that...?\"<br>• \"Which one of the following, if true, would **lend the most credence to** the author's statement...?\"",
              "badge": "Support",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Overarching Takeaway",
          "variant": "summary",
          "text": "Your goal is to function as a logical critic. First, isolate the specific argument (conclusion + evidence) targeted by the question. Then, identify what information is missing from that argument. Lastly, pick an answer that clears up that missing information in the requested manner."
        },
        {
          "type": "h3",
          "text": "The Importance of Weaken-Strengthen Questions"
        },
        {
          "type": "paragraph",
          "text": "Weaken-Strengthen questions appear 78 times in the RC section, making up nearly 4% of the total. This question type directly imports a core Logical Reasoning skill into the Reading Comprehension context. Mastering these questions will not only earn you points here but will also significantly strengthen your ability to analyze argumentative flaws and support, paying huge dividends in the LR sections."
        }
      ],
    },
    glance: {
      label: "At a Glance",
      content: [
        { type: 'h2', text: "Weaken-Strengthen Questions -- At a Glance" },
        { type: 'paragraph', text: "Your goal is to determine which new piece of information most changes the status of a specific claim, interpretation, or hypothesis from the passage. Weaken-Strengthen questions appear **78 times** in the released RC pool." },
        {
          type: 'table',
          headers: ['Element', 'What to Look For', 'Core Skill', 'Common Trap'],
          rows: [
            ['Stem language', '"Weaken," "undermine," "strengthen," "support," "cast doubt on," "lend credence to"', 'Identifying the exact direction the stem demands', 'Picking an impactful answer that moves the argument in the wrong direction'],
            ['Target claim', 'The specific hypothesis, interpretation, or policy judgment the stem names', 'Isolating the exact claim, not the whole passage', 'Evaluating the entire passage instead of the precise target'],
            ['Reasoning type', 'Causal explanation, policy outcome, evidence-conclusion link, phenomenon-hypothesis', 'Classifying the support to predict what kind of answer matters', 'Choosing a topically relevant answer that does not hit the core reasoning'],
            ['Impact test', 'Does the new fact directly change how believable the target reasoning is?', 'Judging direct impact, not mere relevance', 'Selecting a merely related answer over one that changes the argument\'s force']
          ]
        },
        { type: 'paragraph', text: "For example, if a passage argues that a new teaching method raised scores, the strongest weakener does not merely mention education; it shows that something else (class size, test difficulty) better explains the score change. Impact on the specific reasoning is what matters." },
        {
          type: 'list',
          items: [
            "Isolate the exact claim the stem wants you to affect",
            "Classify how that claim is being supported in the passage",
            "Predict the kind of new fact that would matter most before reading answers",
            "Judge each answer by direct impact on the target reasoning, not topic overlap",
            "Break ties by scope match, direction correctness, and centrality to the core link"
          ]
        },
        { type: 'callout', variant: 'tip', title: 'Key Principle', text: "Treat RC Weaken-Strengthen questions as argument-impact questions. The correct answer is not the one that sounds most relevant to the subject -- it is the one that most directly changes the force of the exact reasoning the passage uses to support its claim." }
      ]
    }
  }
};
