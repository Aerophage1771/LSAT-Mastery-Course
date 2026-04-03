import { Lesson } from '../../types';

export const Lesson3_PatternRecognition: Lesson = {
  id: "25-3",
  title: "Pattern Recognition",
  content: [
    { type: 'h3', text: "Pattern Recognition: Correct Answers" },
    { type: 'list', items: [
      "**The \"Two-Part Proof\" (Combining Facts):** This pattern involves logically combining two or more facts, often from different parts of the passage, to create a single, undeniable conclusion that is not stated on its own.",
      "**The \"Necessarily Consequenced\":** This pattern occurs when a statement in the passage logically necessitates another statement to be true, often by ruling out other possibilities based on the provided text.",
      "**Cautious Wording Matches Cautious Evidence:** This pattern reflects the careful, qualified language of the passage. Correct answers often use words like *some*, *can*, *may*, *likely* because the evidence they are based on is rarely absolute."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Tactics, Do's and Don'ts" },
    { 
      type: 'breakdown', 
      labels: { title: 'Principle', text: 'Guidelines' }, 
      items: [
        { 
          title: "Evidence & Proof", 
          text: "**DO:** Treat the passage as your only source of evidence. Pinpoint specific lines for proof.\n**DON'T:** Use outside knowledge. If the passage doesn't say it, it doesn't exist.", 
          badge: "Discipline", 
          badgeColor: "indigo" 
        },
        { 
          title: "Standard of Proof", 
          text: "**DO:** Apply the \"Must Be True\" standard. Look for logically unavoidable conclusions.\n**DON'T:** Settle for \"Could Be True.\" If it requires a debatable assumption, it is wrong.", 
          badge: "Rigor", 
          badgeColor: "blue" 
        },
        { 
          title: "Precision & Wording", 
          text: "**DO:** Pay close attention to wording. Look for careful paraphrasing.\n**DON'T:** Fall for keyword matching. Trap answers often lift phrases but distort the context.", 
          badge: "Focus", 
          badgeColor: "green" 
        },
        {
          title: "Focus & Attribution",
          text: "**DO:** Ensure your proof directly answers the question. Attribute views to the correct person.\n**DON'T:** Get sidetracked. Don't confuse the author's view with a cited critic's view.",
          badge: "Accuracy",
          badgeColor: "red"
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
          "text": "Pattern Recognition: Correct Answers"
        },
        {
          "type": "list",
          "items": [
            "**The \"Two-Part Proof\" (Combining Facts):** This pattern involves logically combining two or more facts, often from different parts of the passage, to create a single, undeniable conclusion that is not stated on its own.",
            "**The \"Necessarily Consequenced\":** This pattern occurs when a statement in the passage logically necessitates another statement to be true, often by ruling out other possibilities based on the provided text.",
            "**Cautious Wording Matches Cautious Evidence:** This pattern reflects the careful, qualified language of the passage. Correct answers often use words like *some*, *can*, *may*, *likely* because the evidence they are based on is rarely absolute."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Tactics, Do's and Don'ts"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Principle",
            "text": "Guidelines"
          },
          "items": [
            {
              "title": "Evidence & Proof",
              "text": "**DO:** Treat the passage as your only source of evidence. Pinpoint specific lines for proof.\n**DON'T:** Use outside knowledge. If the passage doesn't say it, it doesn't exist.",
              "badge": "Discipline",
              "badgeColor": "indigo"
            },
            {
              "title": "Standard of Proof",
              "text": "**DO:** Apply the \"Must Be True\" standard. Look for logically unavoidable conclusions.\n**DON'T:** Settle for \"Could Be True.\" If it requires a debatable assumption, it is wrong.",
              "badge": "Rigor",
              "badgeColor": "blue"
            },
            {
              "title": "Precision & Wording",
              "text": "**DO:** Pay close attention to wording. Look for careful paraphrasing.\n**DON'T:** Fall for keyword matching. Trap answers often lift phrases but distort the context.",
              "badge": "Focus",
              "badgeColor": "green"
            },
            {
              "title": "Focus & Attribution",
              "text": "**DO:** Ensure your proof directly answers the question. Attribute views to the correct person.\n**DON'T:** Get sidetracked. Don't confuse the author's view with a cited critic's view.",
              "badge": "Accuracy",
              "badgeColor": "red"
            }
          ]
        }
      ],
    },
    annotated: {
      label: "Annotated",
      content: [
        { type: 'h2', text: "Correct Answer Patterns — Annotated" },
        { type: 'breakdown', labels: { title: 'Pattern', text: 'What to Look For / How to Confirm' }, items: [
          {
            title: "Two-Part Proof (Combining Facts)",
            text: "The answer is not stated anywhere in the passage — it only becomes true when you logically combine two or more facts from different locations. **Label:** find both source facts and draw the arrow. If you cannot identify both sources, the inference is not valid.",
            badge: "Correct Type",
            badgeColor: "green"
          },
          {
            title: "Necessarily Consequenced",
            text: "One passage statement rules out all alternatives, forcing a second statement to be true. **Label:** ask \"Given that X is true, can the answer be false?\" If not, it passes.",
            badge: "Correct Type",
            badgeColor: "green"
          },
          {
            title: "Cautious Wording Matches Cautious Evidence",
            text: "The passage rarely makes absolute claims, so correct answers often use *some*, *can*, *may*, *likely*, *often*. **Label:** if the answer is more hedged than the evidence, that's fine; if it's stronger than the evidence, it fails.",
            badge: "Correct Type",
            badgeColor: "green"
          }
        ]},
        { type: 'h2', text: "Wrong Answer Patterns — Annotated" },
        { type: 'table', headers: ["Wrong Answer Pattern", "What It Looks Like", "The Tell"], rows: [
          ["Too Extreme", "Uses all, every, never, always, only, impossible", "Passage evidence is moderate — the absolute claim has no support"],
          ["Out of Scope", "Plausible-sounding new idea not in the text", "You cannot find a single passage sentence that supports it"],
          ["Reversed Relationship", "Right elements, wrong direction (effect stated as cause)", "Swap cause/effect — does it now match the passage?"],
          ["Misattributed View", "Correct claim, wrong person (author vs. cited critic)", "Check who said it in the passage"],
          ["One Word Off", "99% correct — one modifier or qualifier breaks it", "The single wrong word makes it stronger or narrower than the text"]
        ]},
        { type: 'callout', variant: 'tip', title: "Annotation Habit", text: "Before choosing, annotate your top contender: write the source sentence or paragraph next to it. If you cannot write a source, you do not yet have proof." }
      ],
    },
  },
};
