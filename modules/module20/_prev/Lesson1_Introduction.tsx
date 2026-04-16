import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '20-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 21: Agree/Disagree (Point at Issue)' },
    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: 'Point at Issue questions are unique on the LSAT because they present **two speakers** with opposing or agreeing views. Instead of analyzing a single argument, you must compare two positions and identify the exact proposition on which they clash or converge. This makes the question type a direct test of comparative reasoning.',
    },
    { type: 'h3', text: 'Recognizing Question Stems' },
    {
      type: 'table',
      headers: ['Stem Language', 'Task'],
      rows: [
        ['"committed to disagreeing about whether..."', 'Find a proposition one affirms and the other denies'],
        ['"most strongly supports the claim that X and Y disagree about..."', 'Find the clearest point of opposition'],
        ['"provides the most support for the claim that they agree..."', 'Find a proposition both would affirm'],
      ],
    },
    { type: 'h3', text: 'Point of Disagreement vs. Point of Agreement' },
    {
      type: 'paragraph',
      text: 'These questions come in two sub-types. **Point of Disagreement** asks for the statement one speaker would affirm and the other would deny. **Point of Agreement** asks for the statement both speakers would affirm. The analytical method is the same; only the target pattern differs.',
    },
    { type: 'h3', text: 'Explicit vs. Implicit Commitments' },
    {
      type: 'paragraph',
      text: 'Hard Agree/Disagree questions are rarely solved by looking only at what the speakers state word-for-word. Some commitments are **explicit**: the speaker says them outright. Others are **implicit**: the speaker does not say them directly, but their reasoning requires them. Your job is to distinguish real implication from mere suggestion.',
    },
    {
      type: 'paragraph',
      text: 'Be careful here. The LSAT loves answer choices built from weak hints, topic overlap, or plausible background beliefs. A speaker is not committed just because a claim would be compatible with what they said. The claim must be stated or logically required.',
    },
    { type: 'h3', text: 'The Overlap Test' },
    {
      type: 'paragraph',
      text: "For every answer choice, ask: what would Speaker A say, and what would Speaker B say? But do that only after checking what each speaker is actually committed to. For **disagreement**, Speaker A must say YES and Speaker B must say NO (or vice versa). For **agreement**, both must say YES or both must say NO. Any answer where a speaker's position is unknown automatically fails the test.",
    },
    { type: 'h3', text: 'Common Dialogue Structures' },
    {
      type: 'list',
      items: [
        "**Direct Contradiction** -- Speaker B flatly denies Speaker A's conclusion.",
        '**Different Criteria** -- Both evaluate the same thing but apply different standards.',
        '**Different Explanations** -- Both accept a fact but offer competing causes.',
        '**Shared Assumption** -- Both rely on the same underlying premise yet reach opposite conclusions.',
      ],
    },
    { type: 'h3', text: 'Concept Snapshot' },
    {
      type: 'paragraph',
      text: 'If Marta says libraries should prioritize digital lending and Niko says they should expand community programming instead, the real task is not to spot which facts appear in the dialogue. It is to find the proposition on which one speaker clearly says yes and the other clearly says no. Here, the live dispute is whether libraries should shift resources toward digital lending.',
    },
    { type: 'h3', text: 'Key Principle' },
    {
      type: 'callout',
      variant: 'tip',
      text: 'Both speakers must have a committed position on the proposition -- silence or ambiguity means it is NOT the point at issue. If you cannot find clear textual evidence that a speaker would say YES or NO, eliminate that choice.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 20: Agree/Disagree (Point at Issue)"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Point at Issue questions are unique on the LSAT because they present **two speakers** with opposing or agreeing views. Instead of analyzing a single argument, you must compare two positions and identify the exact proposition on which they clash or converge. This makes the question type a direct test of comparative reasoning."
        },
        {
          "type": "h3",
          "text": "Recognizing Question Stems"
        },
        {
          "type": "table",
          "headers": [
            "Stem Language",
            "Task"
          ],
          "rows": [
            [
              "\"committed to disagreeing about whether...\"",
              "Find a proposition one affirms and the other denies"
            ],
            [
              "\"most strongly supports the claim that X and Y disagree about...\"",
              "Find the clearest point of opposition"
            ],
            [
              "\"provides the most support for the claim that they agree...\"",
              "Find a proposition both would affirm"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Point of Disagreement vs. Point of Agreement"
        },
        {
          "type": "paragraph",
          "text": "These questions come in two sub-types. **Point of Disagreement** asks for the statement one speaker would affirm and the other would deny. **Point of Agreement** asks for the statement both speakers would affirm. The analytical method is the same; only the target pattern differs."
        },
        {
          "type": "h3",
          "text": "The Overlap Test"
        },
        {
          "type": "paragraph",
          "text": "For every answer choice, ask: what would Speaker A say, and what would Speaker B say? For **disagreement**, Speaker A must say YES and Speaker B must say NO (or vice versa). For **agreement**, both must say YES or both must say NO. Any answer where a speaker's position is unknown automatically fails the test."
        },
        {
          "type": "h3",
          "text": "Common Dialogue Structures"
        },
        {
          "type": "list",
          "items": [
            "**Direct Contradiction** -- Speaker B flatly denies Speaker A's conclusion.",
            "**Different Criteria** -- Both evaluate the same thing but apply different standards.",
            "**Different Explanations** -- Both accept a fact but offer competing causes.",
            "**Shared Assumption** -- Both rely on the same underlying premise yet reach opposite conclusions."
          ]
        },
        {
          "type": "h3",
          "text": "Concept Snapshot"
        },
        {
          "type": "paragraph",
          "text": "If Marta says libraries should prioritize digital lending and Niko says they should expand community programming instead, the real task is not to spot which facts appear in the dialogue. It is to find the proposition on which one speaker clearly says yes and the other clearly says no. Here, the live dispute is whether libraries should shift resources toward digital lending."
        },
        {
          "type": "h3",
          "text": "Key Principle"
        },
        {
          "type": "callout",
          "variant": "tip",
          "text": "Both speakers must have a committed position on the proposition -- silence or ambiguity means it is NOT the point at issue. If you cannot find clear textual evidence that a speaker would say YES or NO, eliminate that choice."
        },
        {
          "type": "diff-note",
          "text": "The introduction is pure lecture with no practice element. Add a mini-exercise after the Concept Snapshot to convert passive reading into active recall.",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "{{+Quick Check+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+**Try this:** Read the short dialogue below and identify the point of disagreement before checking the answer.+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+Amara says the city should close Main Street to cars because foot traffic has increased 40% in the pedestrian zone. Ben says the closure is hurting downtown businesses and should be reversed because three shops on Main Street have closed since the ban. What is the proposition on which Amara and Ben disagree?+}}"
        },
        {
          "type": "callout",
          "variant": "summary",
          "text": "{{+They disagree about whether closing Main Street to cars is a net positive for the area. Amara says yes (foot traffic up); Ben says no (businesses closing). Notice that both accept facts -- the dispute is over the evaluative conclusion.+}}"
        },
        {
          "type": "diff-note",
          "text": "The lesson does not mention explicit vs. implicit commitments, which is a critical concept for harder questions. Add a brief preview.",
          "variant": "comment"
        },
        {
          "type": "h3",
          "text": "{{+A Preview: Explicit vs. Implicit Commitments+}}"
        },
        {
          "type": "paragraph",
          "text": "{{+On easier questions, each speaker directly states their position. On harder questions, a speaker's commitment may be **implicit** -- required by the logic of their argument but never stated word-for-word. Lesson 2 and the Advanced Strategy Guide (Lesson 6) cover this in detail. For now, just know that the Overlap Test applies to both explicit and implicit commitments.+}}"
        },
        {
          "type": "diff-note",
          "text": "Cross-reference the Common Dialogue Structures to their drill lessons for easier navigation.",
          "variant": "comment"
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h2', text: 'Paradox/Explain -- At a Glance' },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Goal',
          text: 'The stimulus presents two facts that seem to contradict each other. Find the answer that explains how **both facts can be true at the same time**. There is no argument to attack or defend -- only a puzzle to resolve.',
        },
        {
          type: 'paragraph',
          text: 'Paradox/Explain questions appear on roughly **4%** of modern Logical Reasoning sections, making them a mid-frequency type that rewards a fast, repeatable method.',
        },
        {
          type: 'table',
          headers: ['Stem Language', 'What It Signals', 'Skill Required', 'Common Trap'],
          rows: [
            [
              '"most helps to explain"',
              'Find a fact that accounts for the surprising result',
              'Isolating the two conflicting facts',
              'Picking an answer that explains only ONE fact',
            ],
            [
              '"most helps to resolve the apparent discrepancy"',
              'Find a fact that makes both sides compatible',
              'Prephrasing the kind of bridge needed',
              'Picking an answer that deepens the paradox',
            ],
            [
              '"most helps to reconcile"',
              'Same task -- reconcile two seemingly contradictory facts',
              'Applying the resolution test to each choice',
              'Settling for an answer that merely reduces strangeness',
            ],
            [
              '"each of the following helps to explain EXCEPT"',
              'Four answers resolve; find the one that does NOT',
              'Labeling each choice as resolves or fails',
              'Accidentally picking an answer that DOES resolve',
            ],
          ],
        },
        { type: 'h3', text: 'Quick Example' },
        {
          type: 'paragraph',
          text: 'A city installs brighter streetlights to reduce nighttime accidents, yet accidents increase. A good resolution does not deny either fact. It explains how both can coexist -- for example, brighter lights encouraged faster driving, which offset the safety benefit.',
        },
        { type: 'h3', text: 'Roadmap' },
        {
          type: 'list',
          items: [
            '**Lesson 2 (Step-by-Step):** The four-step method -- Identify the Paradox, Hold Both Facts True, Prephrase Resolution, Match.',
            '**Lessons 3-8 (Drills):** Practice across six paradox types: numbers vs. percentages, selection bias, causal mechanism, hidden distinction, counterintuitive causal web, temporal shift.',
            '**Lesson 9 (Common Traps):** Recognize half-explanations, worseners, and irrelevant scope answers.',
            '**Lesson 10 (Reference Guide):** Consolidated cheat sheet with decision rules, traps, and stems.',
            '**Module Assessment:** Timed drill combining all Paradox sub-types.',
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Key Principle',
          text: 'Both facts in the paradox are TRUE. The right answer explains how they can coexist -- it does not deny either one.',
        },
      ],
    },
  },
};
