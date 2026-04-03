import { Lesson } from '../../types';

export const Lesson4_TrapAnswerTypes: Lesson = {
  id: "24-4",
  title: "Trap Answer Types",
  content: [
    { type: 'h3', text: "Trap Answer Types" },
    { type: 'paragraph', text: "Knowing what wrong answers look like is just as important as knowing the right one. Watch out for these four common traps." },
    { 
      type: 'breakdown', 
      labels: { title: 'Trap Type', text: 'The Flaw' }, 
      items: [
        { 
          title: "1. Inaccurate Information", 
          text: "These choices contain a detail or claim that is factually incorrect according to the text. Often, the first half is correct, but the second half slips in an error.\n\n**The Flaw:** A Main Idea choice must be 100% accurate.", 
          badge: "Factual Error", 
          badgeColor: "red" 
        },
        { 
          title: "2. Outside the Scope or Too Extreme", 
          text: "These choices make a claim that goes beyond the evidence. They might be **Too Broad** (applying an argument too widely) or **Too Extreme** (using words like \"always\" or \"prove\" when the author was cautious).\n\n**The Flaw:** Making a claim the author never supported.", 
          badge: "Unsupported", 
          badgeColor: "red" 
        },
        { 
          title: "3. Too Narrow", 
          text: "The most frequent distractor. The answer is factually correct, but it only summarizes one paragraph or one example rather than the whole text.\n\n**The Flaw:** Lacks the comprehensiveness to represent the entire passage.", 
          badge: "Partial Truth", 
          badgeColor: "red" 
        },
        { 
          title: "4. Opposing Viewpoint", 
          text: "In debate passages, these choices accurately summarize the viewpoint the author is *arguing against*.\n\n**The Flaw:** Identifies the topic but misidentifies the author's stance.", 
          badge: "Wrong Side", 
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
          "text": "Trap Answer Types"
        },
        {
          "type": "paragraph",
          "text": "Knowing what wrong answers look like is just as important as knowing the right one. Watch out for these four common traps."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Trap Type",
            "text": "The Flaw"
          },
          "items": [
            {
              "title": "1. Inaccurate Information",
              "text": "These choices contain a detail or claim that is factually incorrect according to the text. Often, the first half is correct, but the second half slips in an error.\n\n**The Flaw:** A Main Idea choice must be 100% accurate.",
              "badge": "Factual Error",
              "badgeColor": "red"
            },
            {
              "title": "2. Outside the Scope or Too Extreme",
              "text": "These choices make a claim that goes beyond the evidence. They might be **Too Broad** (applying an argument too widely) or **Too Extreme** (using words like \"always\" or \"prove\" when the author was cautious).\n\n**The Flaw:** Making a claim the author never supported.",
              "badge": "Unsupported",
              "badgeColor": "red"
            },
            {
              "title": "3. Too Narrow",
              "text": "The most frequent distractor. The answer is factually correct, but it only summarizes one paragraph or one example rather than the whole text.\n\n**The Flaw:** Lacks the comprehensiveness to represent the entire passage.",
              "badge": "Partial Truth",
              "badgeColor": "red"
            },
            {
              "title": "4. Opposing Viewpoint",
              "text": "In debate passages, these choices accurately summarize the viewpoint the author is *arguing against*.\n\n**The Flaw:** Identifies the topic but misidentifies the author's stance.",
              "badge": "Wrong Side",
              "badgeColor": "red"
            }
          ]
        }
      ],
    },
    cheat: {
      label: 'Cheat Sheet',
      content: [
        { type: 'h2', text: 'Trap Answer Types -- Cheat Sheet' },
        {
          type: 'callout',
          variant: 'summary',
          text: 'Wrong answers on Main Idea questions fall into four predictable categories. Learn the pattern and you can eliminate traps in seconds instead of deliberating over them.'
        },
        {
          type: 'table',
          headers: ['Trap Type', 'What It Does', 'Spotting Keyword'],
          rows: [
            ['Inaccurate Information', 'Slips in a factual error (often in the second half of the choice)', '"always", "never", or a reversed detail'],
            ['Outside Scope / Too Extreme', 'Makes a claim the author never supported or goes beyond the evidence', '"prove", "all", "must", "certainly"'],
            ['Too Narrow', 'Accurately describes one paragraph or example but not the whole passage', 'Only one topic noun; no passage-wide language'],
            ['Opposing Viewpoint', 'Summarizes the view the author argues AGAINST', 'Correct topic, wrong stance']
          ]
        },
        {
          type: 'table',
          headers: ['Decision Step', 'Question to Ask Yourself'],
          rows: [
            ['1. Accuracy check', 'Is every claim in this choice factually correct per the passage?'],
            ['2. Scope check', 'Does this choice cover the WHOLE passage or just one part?'],
            ['3. Tone check', 'Does the strength of the language match the author\'s hedging?'],
            ['4. Stance check', 'Is this the author\'s view or the opposing view?']
          ]
        },
        {
          type: 'callout',
          variant: 'tip',
          text: '**The One Thing:** The most common trap is "Too Narrow." If an answer sounds right but only covers one paragraph, it is almost certainly wrong.'
        }
      ]
    }
  }
};
