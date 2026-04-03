import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "39-2",
  title: "Step-by-Step: Structure",
  content: [
    { type: 'h3', text: "Step-by-Step: Structure" },
    {
      type: 'process',
      title: "The Structure Workflow",
      steps: [
        "After reading, assign each paragraph a **job label** rather than a topic summary.",
        "Notice the **transition words and pivots** that connect those jobs.",
        "Compress the passage into a short blueprint using abstract verbs.",
        "Match the answer choices against that blueprint, checking both **verb precision** and **order**.",
        "If the question targets one paragraph or two related paragraphs, narrow your map to exactly that scope."
      ]
    },
    { type: 'h4', text: "Step 1: Give Each Paragraph a Functional Label" },
    { type: 'paragraph', text: "Do not summarize Paragraph 2 as \"talks about fossils\" or \"discusses legal theory.\" That is content. Structure questions want function. Ask: what is the paragraph doing for the passage?" },
    { type: 'list', items: [
      "introduces a prevailing view",
      "raises a problem",
      "gives evidence",
      "offers an alternative explanation",
      "qualifies an earlier claim",
      "shows implications",
      "contrasts two positions"
    ]},
    { type: 'callout', title: "Illustrative Example", variant: "summary", text: "A clean blueprint sounds like this: **Paragraph 1 introduces the dominant account. Paragraph 2 presents evidence that account cannot explain. Paragraph 3 develops an alternative. Paragraph 4 explains why the alternative matters.** That is the level of abstraction Structure questions reward." },

    { type: 'h4', text: "Step 2: Use Transition Language as Structural Evidence" },
    { type: 'paragraph', text: "When students miss Structure questions, it is often because they remember the ideas but not the turning points. Transition language is the best direct evidence for those turns." },
    { type: 'table', headers: ["Signpost", "Likely structural effect"], rows: [
      ["However / Yet / But", "Shift, qualification, or challenge to the previous idea"],
      ["For example / For instance", "Illustration or evidence supporting a prior claim"],
      ["Thus / Therefore / Consequently", "Inference, implication, or outcome"],
      ["Nevertheless / Still", "Concession followed by resistance or refinement"]
    ]},
    { type: 'h4', text: "Step 2A: Check the Passage-Style Blueprint" },
    { type: 'table', headers: ["Style", "Common structural blueprint"], rows: [
      ["Debate / critique", "introduces view -> states reasons for it -> rebuts or qualifies it -> signals author alignment"],
      ["Single position", "introduces thesis -> layers support / evidence -> clarifies or deepens implications"],
      ["Phenomenon-hypothesis", "states puzzle -> presents explanation(s) -> evaluates support / criticism -> leans or stays neutral"],
      ["Problem-analysis", "frames problem -> proposes / tests solutions -> endorses, criticizes, or leaves the problem unresolved"],
      ["Spotlight", "introduces the subject -> identifies what is distinctive or significant about it -> develops the origin, influence, impact, or revealing features that explain that significance"],
      ["Hybrid", "blends two blueprints; preserve both layers instead of forcing one label"]
    ]},

    { type: 'h4', text: "Step 3: Translate Your Map into Structural Verbs" },
    { type: 'paragraph', text: "The answer choices are written in abstract language. You need your own abstract language ready before you read them. The decisive issue is often the main verb." },
    {
      type: 'breakdown',
      labels: { title: 'Verb Pair', text: 'Why the distinction matters' },
      items: [
        {
          title: "Presents vs. Endorses",
          text: "A passage may summarize a view in detail without endorsing it. If you miss that distinction, you will choose an answer that gives the author more commitment than the passage supports.",
          badge: "Commitment",
          badgeColor: "indigo"
        },
        {
          title: "Qualifies vs. Refutes",
          text: "Many high-difficulty questions punish overstatement. The author may narrow a view or expose a limitation without fully tearing it down.",
          badge: "Degree",
          badgeColor: "blue"
        },
        {
          title: "Explains vs. Evaluates",
          text: "A paragraph may lay out how a theory works rather than judge whether the theory is correct. Those are different functions.",
          badge: "Function",
          badgeColor: "green"
        }
      ]
    },

    { type: 'h4', text: "Step 4: Match Both the Order and the Role" },
    { type: 'paragraph', text: "On whole-passage questions, an answer can be tempting because every clause sounds plausible in isolation. The problem is often that the sequence is off or that one paragraph's function has been miscast. The correct answer gets both the ordering and the roles right." },
    { type: 'list', items: [
      "Check whether the answer choice preserves the **same sequence of moves** as the passage.",
      "Check whether each clause names the **right function** rather than a nearby function.",
      "Check whether the choice overstates the author's level of commitment."
    ]},

    { type: 'h4', text: "Step 5: Narrow the Scope When the Stem Is Local" },
    { type: 'paragraph', text: "A paragraph-level question is not asking for the role of the whole passage. It is asking what that paragraph is doing *there*. A relationship question is not asking for the content of either paragraph in isolation. It is asking how the second part relates to the first." },
    { type: 'table', headers: ["Question subtype", "Best question to ask yourself"], rows: [
      ["Whole passage", "What is the complete sequence of major moves?"],
      ["Single paragraph", "What job does this paragraph perform inside the broader passage?"],
      ["Relationship", "How does the later part respond to, build on, qualify, or contrast with the earlier part?"]
    ]},

    { type: 'hr' },
    { type: 'h3', text: "High-Difficulty Diagnostics" },
    { type: 'paragraph', text: "Most of the hardest Structure questions in the pool demand extra precision at one of these points." },
    { type: 'table', headers: ["Diagnostic", "What it catches"], rows: [
      ["Mixed-Function Check", "A paragraph that does two things, where the wrong answer captures only the first or only the second."],
      ["Late-Turn Check", "A final paragraph that refines or reframes the passage rather than merely concluding it."],
      ["Relationship Check", "An answer that notices the two paragraphs discuss the same subject but misstates how they interact."],
      ["Verb-Strength Check", "An answer that turns a mild qualification into a total rejection."]
    ]},

    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: Test the Verbs Against the Passage" },
    { type: 'paragraph', text: "Take the key verbs from the two remaining answer choices and ask which ones the passage can actually support. If one choice says the author \"refutes\" a view and the passage merely exposes a limitation, that answer is too strong." },

    { type: 'h4', text: "Tie-Breaker #2: Re-check the Pivot Sentence" },
    { type: 'paragraph', text: "The decisive clue is often the sentence where the passage turns: the first sentence of a new paragraph, the last sentence of a discussion, or the sentence containing a signpost like \"however\" or \"therefore.\" Re-read that line and decide what move it is really making." },

    { type: 'h4', text: "Tie-Breaker #3: Strip the Answer of Topic Words" },
    { type: 'paragraph', text: "If both choices look plausible because they mention the same subject matter, mentally delete the topical nouns and compare only the functional language. Structure questions are won by architecture, not by subject overlap." },

    { type: 'callout', title: "Final Takeaway", variant: "summary", text: "For Structure questions, your best weapon is a disciplined blueprint. Label paragraph jobs, watch the pivots, and choose the answer whose verbs and order most faithfully mirror the passage." }
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
          "text": "Step 1: Create a Passage Blueprint"
        },
        {
          "type": "paragraph",
          "text": "After reading, create a quick, high-level map of the passage's organization. For each paragraph, write a short, functional summary. Don't summarize the content; summarize the paragraph's job. Use verbs to describe what the author is doing."
        },
        {
          "type": "list",
          "items": [
            "**Example Blueprint:**",
            "Paragraph 1: Introduces a common theory.",
            "Paragraph 2: Presents evidence that challenges this theory.",
            "Paragraph 3: Proposes an alternative theory.",
            "Paragraph 4: Discusses the implications of the alternative theory."
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Match Your Blueprint to the Answer Choices"
        },
        {
          "type": "paragraph",
          "text": "Compare the descriptive blueprint in each answer choice to the blueprint you created. The correct answer will be the one that most accurately maps the entire logical flow of the passage from beginning to end."
        },
        {
          "type": "list",
          "items": [
            "**Eliminate Mismatches:** If an answer choice misrepresents the function or sequence of even one part of the passage, it is incorrect. For example, if it claims a \"solution is proposed\" in the second paragraph when your blueprint shows that's where \"evidence is presented,\" eliminate it."
          ]
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
          "text": "Tie-Breaker #1: The Paragraph Transition Test"
        },
        {
          "type": "paragraph",
          "text": "Look at the transition between two key paragraphs (e.g., from paragraph 1 to 2). Does the author use a word like \"However,\" \"For example,\" or \"Consequently\"? This transition language is a strong clue to the structural relationship. Check your final two answer choices to see which one's description of that specific transition (e.g., \"a claim is made, then a counterargument is introduced\") is a better match for the author's signpost language."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: Focus on the Verbs"
        },
        {
          "type": "paragraph",
          "text": "Isolate the primary action verbs in your final two choices (e.g., \"refuting\" vs. \"qualifying,\" \"contrasting\" vs. \"evaluating\"). Go back to the passage and ask which verb more precisely describes what the author is actually doing in each section. Does the author completely tear down the old theory (refute), or just point out its limitations while acknowledging some value (qualify)? This focus on precision is often the deciding factor."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "Structure Questions -- Playbook" },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: "Structure questions take 60-90 seconds. The heavy lifting happens during your initial read: if you labeled paragraph jobs and tracked pivots, you already have the blueprint. The question is just asking you to report it." },
        {
          type: 'process',
          title: 'Structure Workflow',
          steps: [
            "Label paragraph jobs: After reading, assign each paragraph a functional label (introduces a view, raises a problem, gives evidence, qualifies, extends). Do not summarize content.",
            "Track pivots: Note the transition words (however, therefore, for example, nevertheless) that mark structural turns between paragraphs.",
            "Form a style hypothesis: Decide early whether the passage is a debate, single-position, phenomenon-hypothesis, problem-analysis, spotlight, or hybrid. This predicts the kinds of paragraph jobs you will see.",
            "Translate to structural verbs: Compress your blueprint into a sequence of abstract verbs before reading the answer choices.",
            "Match both order and role: The correct answer must preserve the same sequence of moves as the passage and assign the right function to each section. Check verb precision last."
          ]
        },
        {
          type: 'table',
          headers: ['If you see this passage style...', 'Expect this structural blueprint'],
          rows: [
            ['Debate / critique', 'Introduces view -> states reasons -> rebuts or qualifies -> signals author alignment'],
            ['Single position', 'Introduces thesis -> layers support and evidence -> clarifies or deepens implications'],
            ['Phenomenon-hypothesis', 'States puzzle -> presents explanations -> evaluates support and criticism -> leans or stays neutral'],
            ['Problem-analysis', 'Frames problem -> proposes or tests solutions -> endorses, criticizes, or leaves unresolved'],
            ['Spotlight', 'Introduces the subject -> identifies what is distinctive -> develops origin, influence, or impact']
          ]
        },
        {
          type: 'table',
          headers: ['If you see this in an answer choice...', 'Do this'],
          rows: [
            ['Answer names the topic but says nothing about how the discussion develops', 'Eliminate -- Topic Trap; structure requires movement, not subject labels'],
            ['Answer uses the right moves but in the wrong order', 'Eliminate -- Sequence Trap; the passage\'s order matters'],
            ['Answer says "refutes" when the passage merely "qualifies"', 'Eliminate -- Verb Trap; check the degree of commitment'],
            ['Answer describes the whole passage when the stem asks about one paragraph', 'Eliminate -- Scope Trap; narrow to the exact section requested'],
            ['Answer captures only half of a mixed-function paragraph', 'Suspect this is incomplete; check whether the paragraph does two things']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain Summary', text: "Label paragraph jobs during reading -> Note transition pivots -> Form a style hypothesis -> Translate your map into structural verbs -> Match answers by checking order, verb precision, and scope -> Break ties by re-reading the pivot sentence and stripping topic words to compare pure function." }
      ]
    }
  }
};
