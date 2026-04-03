import { Lesson } from '../../types';

export const Lesson4_TrapAnswerTypes: Lesson = {
  id: "25-4",
  title: "Trap Answer Types",
  content: [
    { type: 'h3', text: "The Trap Library: Common Distractors" },
    { 
      type: 'breakdown', 
      labels: { title: 'Trap Type', text: 'Analysis' }, 
      items: [
        { 
          title: "The \"Too Extreme\" Trap", 
          text: "The most common trap. Takes a moderate claim and makes it absolute.\n**Signals:** All, every, none, never, only, always, completely, impossible.", 
          badge: "Red Flag", 
          badgeColor: "red" 
        },
        { 
          title: "The \"Out of Scope\" Trap", 
          text: "Introduces a new idea, comparison, or detail that is plausible but not mentioned in the text.", 
          badge: "Irrelevant", 
          badgeColor: "slate" 
        },
        { 
          title: "The \"Reversed Relationship\" Trap", 
          text: "Accurately identifies elements but flips their cause-and-effect or sequential relationship.", 
          badge: "Reversal", 
          badgeColor: "red" 
        },
        { 
          title: "The \"Misattributed View\" Trap", 
          text: "Assigns a belief or argument to the wrong person or group in multi-perspective passages.", 
          badge: "Confusion", 
          badgeColor: "indigo" 
        },
        { 
          title: "The \"One Word Off\" Trap", 
          text: "The answer choice is 99% correct, but a single word or phrase makes it unsupportable.", 
          badge: "Subtle", 
          badgeColor: "red" 
        }
      ] 
    },
    { type: 'hr' },
    { type: 'h3', text: "Speed and Success Metrics" },
    { type: 'callout', variant: 'tip', title: "Speed Tip: Eliminate Traps First", text: "Use the Trap Library to quickly eliminate 2-3 obvious distractors (especially \"Too Extreme\" and \"Out of Scope\" answers) before you return to the text to verify the remaining contenders. This focuses your search for proof and saves valuable time." },
    { type: 'h4', text: "Success Metrics: Gauging Mastery" },
    { type: 'paragraph', text: "You have mastered Inference questions when you can consistently demonstrate the following:" },
    { type: 'list', items: [
      "**Accuracy:** You are correctly answering over 90% of inference questions under timed conditions.",
      "**Confidence:** You are no longer \"stuck between two.\" You can confidently eliminate wrong answers by identifying the specific trap they represent.",
      "**Process:** Your internal monologue shifts from \"Which answer feels right?\" to **\"Which answer has direct, provable support in the text?\"**"
    ]}
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "The Trap Library: Common Distractors"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap Type",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "The \"Too Extreme\" Trap",
              "text": "The most common trap. Takes a moderate claim and makes it absolute.\n**Signals:** All, every, none, never, only, always, completely, impossible.",
              "badge": "Red Flag",
              "badgeColor": "red"
            },
            {
              "title": "The \"Out of Scope\" Trap",
              "text": "Introduces a new idea, comparison, or detail that is plausible but not mentioned in the text.",
              "badge": "Irrelevant",
              "badgeColor": "slate"
            },
            {
              "title": "The \"Reversed Relationship\" Trap",
              "text": "Accurately identifies elements but flips their cause-and-effect or sequential relationship.",
              "badge": "Reversal",
              "badgeColor": "red"
            },
            {
              "title": "The \"Misattributed View\" Trap",
              "text": "Assigns a belief or argument to the wrong person or group in multi-perspective passages.",
              "badge": "Confusion",
              "badgeColor": "indigo"
            },
            {
              "title": "The \"One Word Off\" Trap",
              "text": "The answer choice is 99% correct, but a single word or phrase makes it unsupportable.",
              "badge": "Subtle",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Speed and Success Metrics"
        },
        {
          "type": "callout",
          "title": "Speed Tip: Eliminate Traps First",
          "variant": "tip",
          "text": "Use the Trap Library to quickly eliminate 2-3 obvious distractors (especially \"Too Extreme\" and \"Out of Scope\" answers) before you return to the text to verify the remaining contenders. This focuses your search for proof and saves valuable time."
        },
        {
          "type": "h4",
          "text": "Success Metrics: Gauging Mastery"
        },
        {
          "type": "paragraph",
          "text": "You have mastered RC Inference questions when you can consistently demonstrate the following:"
        },
        {
          "type": "list",
          "items": [
            "**Accuracy:** You are correctly answering over 90% of inference questions under timed conditions.",
            "**Confidence:** You are no longer \"stuck between two.\" You can confidently eliminate wrong answers by identifying the specific trap they represent.",
            "**Process:** Your internal monologue shifts from \"Which answer feels right?\" to **\"Which answer has direct, provable support in the text?\"**"
          ]
        }
      ],
    },
    cheat: {
      label: "Cheat Sheet",
      content: [
        { type: 'h2', text: "RC Inference — Trap Cheat Sheet" },
        { type: 'table', headers: ["Trap Name", "Surface Appearance", "The Tell"], rows: [
          ["Too Extreme", "Sounds like a strong version of something the passage says", "Contains all, every, never, always, only, impossible, or completely — passage evidence is moderate"],
          ["Out of Scope", "Plausible, relevant-feeling claim", "No specific passage sentence supports it; it introduces a new idea or comparison"],
          ["Reversed Relationship", "Correct elements, reads like a logical extension", "Cause and effect are flipped relative to what the passage states"],
          ["Misattributed View", "Correct idea but assigned to the wrong person or group", "In multi-perspective passages, check who actually expressed the view"],
          ["One Word Off", "Nearly identical to a provable statement", "One qualifier, modifier, or scope word makes it unsupportable (e.g., \"all\" instead of \"some\")"]
        ]},
        { type: 'callout', variant: 'tip', title: "Elimination Order", text: "Start with Too Extreme and Out of Scope — these are the fastest to spot and account for the majority of wrong answers. Eliminating them first narrows the field before you go back to the text." }
      ],
    },
  },
};
