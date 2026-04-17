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
          text: "**Clue:** Passage starts with a problem, mystery, or misconception. Later paragraphs propose a solution or hypothesis.\n\n**Correct Answer:** Captures the full narrative arc. It mentions both the problem AND the key features of the proposed solution.\n\n**Example:** A passage describes the problem of overfishing, then proposes and evaluates a system of tradable fishing quotas as a potential solution.",
          badge: "Narrative", 
          badgeColor: "indigo" 
        },
        { 
          title: "Pattern 2: The \"Correcting the Record\" or \"Debate\"", 
          text: "**Clue:** Passage opens with a traditional view or common belief. The rest of the passage refutes or alters this view.\n\n**Correct Answer:** Almost always phrased as a contrast (e.g., \"Although X is commonly believed, Y is actually true...\"). Look for \"Contrary to\" or \"Despite.\"\n\n**Example:** A passage begins by stating that historians traditionally view the Industrial Revolution as a sudden rupture, but then argues it was actually a gradual evolution rooted in earlier centuries.",
          badge: "Contrast", 
          badgeColor: "indigo" 
        },
        { 
          title: "Pattern 3: The \"Balanced Summary\"", 
          text: "**Clue:** Passage presents two or more key ideas with equal weight (e.g., two reasons, a pro and a con, two functions).\n\n**Correct Answer:** Must integrate **all** major components. Trap answers will be \"too narrow,\" focusing on just one component.\n\n**Example:** A passage explains two distinct ways that a specific insect species defends itself against predators (chemical spray and camouflage). The main idea must mention both.",
          badge: "Synthesis", 
          badgeColor: "indigo" 
        },
        {
          title: "Pattern 4: The \"Single Position + Support Density\" Passage",
          text: "**Clue:** There is really one advanced view, but it is developed through a heavy load of examples, evidence, or background clarification.\n\n**Correct Answer:** Centers on the author's developed position, not on the dense support details that make the passage feel harder than it is.\n\n**Example:** A passage argues that early modernist poetry was deeply influenced by scientific discoveries, supporting this single claim with three dense paragraphs analyzing references to physics in specific poems.",
          badge: "One view",
          badgeColor: "blue"
        },
        {
          title: "Pattern 5: The \"Phenomenon -> Explanation(s)\" Passage",
          text: "**Clue:** The passage starts with something puzzling, then introduces one or more hypotheses, along with support, criticism, or qualification.\n\n**Correct Answer:** Distinguishes the phenomenon from the favored explanation. Trap answers often collapse the puzzle into the hypothesis.\n\n**Example:** A passage introduces the puzzle of how certain birds navigate during migration, then evaluates three competing theories, ultimately favoring the magnetic field hypothesis.",
          badge: "Explanation",
          badgeColor: "green"
        },
        {
          title: "Pattern 6: The \"Problem-Analysis\" Family",
          text: "**Clue:** The passage frames a problem and then either endorses a solution, criticizes competing solutions, or leaves the problem unresolved.\n\n**Correct Answer:** If a solution is endorsed, the main idea usually includes it. If no solution is endorsed, the main idea stays focused on diagnosing the problem. Some passages are hybrids: a debate passage can also be a problem-analysis passage.\n\n**Example:** A passage diagnoses the flaws in the current patent system but concludes that none of the currently proposed reforms are likely to fix them.",
          badge: "Problem",
          badgeColor: "indigo"
        },
        {
          title: "Pattern 7: The \"Historical Development\" Passage",
          text: "**Clue:** The passage traces the evolution of a concept, practice, or law over a significant period of time.\n\n**Correct Answer:** Captures the trajectory of change, not just a snapshot of a single era. It often uses words like 'evolution,' 'transformation,' or 'development.'\n\n**Example:** A passage describes how copyright law originated to protect printed books, was later adapted for recorded music, and is now struggling to adapt to digital media.",
          badge: "Trajectory",
          badgeColor: "purple"
        },
        {
          title: "Pattern 8: The \"Case Study\" Passage",
          text: "**Clue:** The passage spends most of its time examining one specific, detailed example (e.g., a single lawsuit, one artist's technique, a specific community) in order to illuminate a broader principle or trend.\n\n**Correct Answer:** Connects the specific case to the broader principle. Trap answers often focus entirely on the specific case without mentioning the larger takeaway.\n\n**Example:** A passage details a specific legal dispute over indigenous land rights as an illustration of the broader conflict between traditional law and modern national legal frameworks.",
          badge: "Macro/Micro",
          badgeColor: "purple"
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
