import { Lesson } from '../../types';

export const Lesson3_PatternRecognition: Lesson = {
  id: "21-3",
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
        }
      ] 
    }
  ]
};
