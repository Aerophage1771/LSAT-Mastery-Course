import { Lesson } from '../../types';

export const Lesson3_PatternRecognition: Lesson = {
  id: "24-3",
  title: "Pattern Recognition",
  content: [
    { type: 'h3', text: "Pattern Recognition: Clues in the Passage and Answers" },
    { type: 'paragraph', text: "RC passages often follow predictable rhetorical structures. Recognizing these patterns can help you predict the form of the correct answer." },
    { 
      type: 'breakdown', 
      labels: { title: 'Structure Type', text: 'Identification Strategy' }, 
      items: [
        { 
          title: "Pattern 1: The \"Problem / Solution / Critique\"", 
          text: "**Clue:** Passage starts with a problem, mystery, or misconception. Later paragraphs propose a solution or hypothesis.\n\n**Correct Answer:** Captures the full narrative arc. It mentions both the problem AND the key features of the proposed solution.", 
          badge: "Narrative", 
          badgeColor: "indigo" 
        },
        { 
          title: "Pattern 2: The \"Correcting the Record\" or \"Debate\"", 
          text: "**Clue:** Passage opens with a traditional view or common belief. The rest of the passage refutes or alters this view.\n\n**Correct Answer:** Almost always phrased as a contrast (e.g., \"Although X is commonly believed, Y is actually true...\"). Look for \"Contrary to\" or \"Despite.\"", 
          badge: "Contrast", 
          badgeColor: "indigo" 
        },
        { 
          title: "Pattern 3: The \"Balanced Summary\"", 
          text: "**Clue:** Passage presents two or more key ideas with equal weight (e.g., two reasons, a pro and a con, two functions).\n\n**Correct Answer:** Must integrate **all** major components. Trap answers will be \"too narrow,\" focusing on just one component.", 
          badge: "Synthesis", 
          badgeColor: "indigo" 
        },
        {
          title: "Pattern 4: The \"Single Position + Support Density\" Passage",
          text: "**Clue:** There is really one advanced view, but it is developed through a heavy load of examples, evidence, or background clarification.\n\n**Correct Answer:** Centers on the author's developed position, not on the dense support details that make the passage feel harder than it is.",
          badge: "One view",
          badgeColor: "blue"
        },
        {
          title: "Pattern 5: The \"Phenomenon -> Explanation(s)\" Passage",
          text: "**Clue:** The passage starts with something puzzling, then introduces one or more hypotheses, along with support, criticism, or qualification.\n\n**Correct Answer:** Distinguishes the phenomenon from the favored explanation. Trap answers often collapse the puzzle into the hypothesis.",
          badge: "Explanation",
          badgeColor: "green"
        },
        {
          title: "Pattern 6: The \"Problem-Analysis\" Family",
          text: "**Clue:** The passage frames a problem and then either endorses a solution, criticizes competing solutions, or leaves the problem unresolved.\n\n**Correct Answer:** If a solution is endorsed, the main idea usually includes it. If no solution is endorsed, the main idea stays focused on diagnosing the problem. Some passages are hybrids: a debate passage can also be a problem-analysis passage.",
          badge: "Problem",
          badgeColor: "indigo"
        }
      ]
    }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Pattern Recognition: Clues in the Passage and Answers"
        },
        {
          "type": "paragraph",
          "text": "RC passages often follow predictable rhetorical structures. Recognizing these patterns can help you predict the form of the correct answer."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Structure Type",
            "text": "Identification Strategy"
          },
          "items": [
            {
              "title": "Pattern 1: The \"Problem / Solution / Critique\"",
              "text": "**Clue:** Passage starts with a problem, mystery, or misconception. Later paragraphs propose a solution or hypothesis.\n\n**Correct Answer:** Captures the full narrative arc. It mentions both the problem AND the key features of the proposed solution.",
              "badge": "Narrative",
              "badgeColor": "indigo"
            },
            {
              "title": "Pattern 2: The \"Correcting the Record\" or \"Debate\"",
              "text": "**Clue:** Passage opens with a traditional view or common belief. The rest of the passage refutes or alters this view.\n\n**Correct Answer:** Almost always phrased as a contrast (e.g., \"Although X is commonly believed, Y is actually true...\"). Look for \"Contrary to\" or \"Despite.\"",
              "badge": "Contrast",
              "badgeColor": "indigo"
            },
            {
              "title": "Pattern 3: The \"Balanced Summary\"",
              "text": "**Clue:** Passage presents two or more key ideas with equal weight (e.g., two reasons, a pro and a con, two functions).\n\n**Correct Answer:** Must integrate **all** major components. Trap answers will be \"too narrow,\" focusing on just one component.",
              "badge": "Synthesis",
              "badgeColor": "indigo"
            }
          ]
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        { type: 'h2', text: 'Pattern Recognition -- Cheat Sheet' },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Key Patterns at a Glance',
          text: 'Every RC passage follows one of a handful of rhetorical blueprints. Identify the blueprint in paragraph 1 and you can predict what the correct Main Idea answer will look like before you read the choices.'
        },
        {
          type: 'table',
          headers: ['Pattern', 'Paragraph-1 Signal', 'Correct Answer Shape'],
          rows: [
            ['Problem / Solution / Critique', 'Opens with a problem, mystery, or misconception', 'Captures both the problem AND the proposed solution'],
            ['Correcting the Record / Debate', 'Opens with a traditional view or common belief', 'Contrast phrasing: "Although X... Y is actually..."'],
            ['Balanced Summary', 'Two+ ideas given equal weight', 'Integrates ALL major components; rejects "too narrow" choices'],
            ['Single Position + Support Density', 'One advanced view with heavy supporting detail', 'Centers on the author\'s position, not the dense support'],
            ['Phenomenon -> Explanation(s)', 'Something puzzling, then hypotheses follow', 'Distinguishes the puzzle from the favored explanation'],
            ['Problem-Analysis', 'Frames a problem; may or may not endorse a solution', 'If solution endorsed, includes it; if not, stays on the diagnosis']
          ]
        },
        {
          type: 'table',
          headers: ['Trap', 'Why It Fools You'],
          rows: [
            ['Focuses on just one paragraph', 'Matches real content but is "too narrow" for a Main Idea answer'],
            ['Collapses puzzle into hypothesis', 'Skips the phenomenon and jumps straight to the explanation'],
            ['Omits half of a balanced passage', 'Sounds right but covers only one of the two key ideas'],
            ['Describes the wrong side of a debate', 'Accurately summarizes the view the author argues against']
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'The One Thing',
          text: 'Read paragraph 1, name the pattern, then predict the answer shape. If your prediction matches only one choice, you are almost certainly right.'
        }
      ]
    }
  }
};
