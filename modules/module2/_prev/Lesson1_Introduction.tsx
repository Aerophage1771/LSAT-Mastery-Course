import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: '2-1',
  title: 'Introduction',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'MODULE 2: Main Conclusion' },
    {
      type: 'paragraph',
      text: '**Question Goal**\n\n**Identify the single, overarching claim that the entire argument is constructed to prove.** In other words, what is the one ultimate point the author wants the reader to accept?',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    {
      type: 'paragraph',
      text: "Main Conclusion is the most direct application of the structural skill you learned in Module 1 (Argument Part). Where Argument Part asks you to label one sentence's role, Main Conclusion asks you to find the single most important sentence\u2014the destination the entire argument is driving toward. If you cannot reliably identify the main conclusion, every downstream question type becomes harder.",
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Dependency Chain',
      text: "Main Conclusion identification is a prerequisite for nearly every other LR question type:\n\n\u2022 **Flaw** \u2014 You must know the conclusion to see where the reasoning breaks down.\n\u2022 **Assumption** \u2014 The unstated link connects the premises *to the conclusion*.\n\u2022 **Strengthen / Weaken** \u2014 You are strengthening or weakening *the conclusion*.\n\u2022 **Sufficient Assumption** \u2014 You need the conclusion to build the logical bridge.\n\u2022 **Parallel Reasoning** \u2014 You must match the conclusion's structure.\n\nMastering this question type pays compound interest across the entire LR section.",
    },

    { type: 'h3', text: 'Frequency & Difficulty' },
    {
      type: 'paragraph',
      text: 'Main Conclusion questions appear on most scored LR sections, typically 1\u20132 per section. They skew toward the easier end of the difficulty scale, but the LSAT tests this skill indirectly in dozens of other question types. The questions are rarely hard because of the reasoning\u2014they are hard because of the *answer choice design*, which is built to exploit common structural misreadings.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    {
      type: 'paragraph',
      text: "You can identify a Main Conclusion question because the stem will ask you for the argument's overall point, main claim, or conclusion. Look for these patterns:",
    },
    {
      type: 'table',
      headers: ['Question Stem Pattern', 'Key Signal'],
      rows: [
        [
          '"Which one of the following most accurately expresses the main conclusion of the argument?"',
          'Asks for the **main conclusion**',
        ],
        [
          '"Which one of the following most accurately states the main point of the argument?"',
          'Asks for the **main point**',
        ],
        ['"The overall conclusion of the argument is that..."', 'Asks you to complete the **overall conclusion**'],
        [
          '"The argument is structured to lead to which one of the following conclusions?"',
          'Asks what the argument **leads to**',
        ],
        ['"The main point of the argument is that..."', 'Asks you to complete the **main point**'],
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Quick Example' },
    {
      type: 'blockquote',
      text: '"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack."',
    },
    {
      type: 'paragraph',
      text: 'Ask yourself: *Why is cycling healthier?* The argument answers with the cardiovascular and exercise facts\u2014so the first sentence is the **main conclusion** and the rest are premises. That "Why?" check is the single most reliable tool for this question type, and you will master it in the next lesson.',
    },

    { type: 'hr' },

    { type: 'h3', text: 'What You\'ll Learn in This Module' },
    {
      type: 'paragraph',
      text: 'This module builds your Main Conclusion skills layer by layer:',
    },
    {
      type: 'process',
      title: 'Module Roadmap',
      steps: [
        '**Foundations** \u2014 The "Why" Test, the Final Destination Principle, indicator words, the four conclusion types, and how MC differs from Argument Part.',
        '**Step-by-Step Guide** \u2014 A repeatable process for solving Main Conclusion questions on test day.',
        '**Common Patterns & Types** \u2014 Deep dives into Rebuttals, Prescriptions, Explanations, and Factual Claims.',
        '**Advanced Concepts** \u2014 Intermediate conclusions, background principles, and tricky structural twists.',
        '**Reference Guide** \u2014 A compact cheat sheet for quick review.',
      ],
    },

    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaway',
      text: 'The Main Conclusion is the **final destination** of the argument\u2014the one claim that everything else supports and that supports nothing else. Every advanced LR skill you build later depends on finding it quickly and accurately.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "MODULE 2: Main Conclusion"
        },
        {
          "type": "paragraph",
          "text": "**Question Goal**\n\n**Identify the single, overarching claim that the entire argument is constructed to prove.** In other words, what is the one ultimate point the author wants the reader to accept?"
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Why This Matters"
        },
        {
          "type": "paragraph",
          "text": "Main Conclusion is the most direct application of the structural skill you learned in Module 1 (Argument Part). Where Argument Part asks you to label one sentence's role, Main Conclusion asks you to find the single most important sentence—the destination the entire argument is driving toward. If you cannot reliably identify the main conclusion, every downstream question type becomes harder."
        },
        {
          "type": "callout",
          "title": "Dependency Chain",
          "variant": "tip",
          "text": "Main Conclusion identification is a prerequisite for nearly every other LR question type:\n\n• **Flaw** — You must know the conclusion to see where the reasoning breaks down.\n• **Assumption** — The unstated link connects the premises *to the conclusion*.\n• **Strengthen / Weaken** — You are strengthening or weakening *the conclusion*.\n• **Sufficient Assumption** — You need the conclusion to build the logical bridge.\n• **Parallel Reasoning** — You must match the conclusion's structure.\n\nMastering this question type pays compound interest across the entire LR section."
        },
        {
          "type": "h3",
          "text": "Frequency & Difficulty"
        },
        {
          "type": "paragraph",
          "text": "Main Conclusion questions appear on most scored LR sections, typically 1–2 per section. They skew toward the easier end of the difficulty scale, but the LSAT tests this skill indirectly in dozens of other question types. The questions are rarely hard because of the reasoning—they are hard because of the *answer choice design*, which is built to exploit common structural misreadings."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Recognizing the Question"
        },
        {
          "type": "paragraph",
          "text": "You can identify a Main Conclusion question because the stem will ask you for the argument's overall point, main claim, or conclusion. Look for these patterns:"
        },
        {
          "type": "table",
          "headers": [
            "Question Stem Pattern",
            "Key Signal"
          ],
          "rows": [
            [
              "\"Which one of the following most accurately expresses the main conclusion of the argument?\"",
              "Asks for the **main conclusion**"
            ],
            [
              "\"Which one of the following most accurately states the main point of the argument?\"",
              "Asks for the **main point**"
            ],
            [
              "\"The overall conclusion of the argument is that...\"",
              "Asks you to complete the **overall conclusion**"
            ],
            [
              "\"The argument is structured to lead to which one of the following conclusions?\"",
              "Asks what the argument **leads to**"
            ],
            [
              "\"The main point of the argument is that...\"",
              "Asks you to complete the **main point**"
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Main Conclusion vs. Argument Part"
        },
        {
          "type": "paragraph",
          "text": "These two question types are closely related, but they ask fundamentally different things. Understanding the distinction prevents confusion:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Main Conclusion (Module 2)",
            "Argument Part (Module 1)"
          ],
          "rows": [
            [
              "**What it asks**",
              "Find the single ultimate point of the argument",
              "Identify the role of a *specific quoted sentence*"
            ],
            [
              "**Target**",
              "The whole argument (find the destination)",
              "One particular sentence (label its function)"
            ],
            [
              "**Answer choices**",
              "Paraphrases of the conclusion (content-based)",
              "Abstract role descriptions (function-based)"
            ],
            [
              "**Example answer**",
              "\"Tennyson's line was not about Darwin.\"",
              "\"It is a premise offered in support of the main conclusion.\""
            ],
            [
              "**Core skill**",
              "Identifying *which* claim is the main point",
              "Describing *what role* a claim plays"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Connection",
          "variant": "default",
          "text": "Think of it this way: Argument Part gives you a sentence and asks \"What does this do?\" Main Conclusion asks \"Which sentence is the final destination?\" Both require you to map the argument's structure—Main Conclusion just narrows the task to finding the top of the support chain."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Core Concepts"
        },
        {
          "type": "h3",
          "text": "The \"Why\" Test"
        },
        {
          "type": "paragraph",
          "text": "The most reliable tool for identifying the Main Conclusion is the **\"Why\" Test**. Because the conclusion is the claim that everything else supports, you can locate it by testing the direction of support."
        },
        {
          "type": "process",
          "title": "How to Apply the Why Test",
          "steps": [
            "**Pick a candidate statement** — Choose the sentence you suspect is the conclusion.",
            "**Ask \"Why is this true?\"** — Look at the rest of the stimulus.",
            "**Check if the argument answers** — If the other sentences provide reasons *why* your candidate is true, you have found the **conclusion**.",
            "**Reverse check** — If your candidate answers the \"Why?\" question for a *different* sentence, it is a **premise**, not the conclusion."
          ]
        },
        {
          "type": "h4",
          "text": "Worked Demonstration"
        },
        {
          "type": "paragraph",
          "text": "Let's see the Why Test in action on a simple argument:"
        },
        {
          "type": "blockquote",
          "text": "\"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack.\""
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Statement",
            "text": "Why Test Result"
          },
          "items": [
            {
              "title": "\"Cycling to work is healthier than driving.\"",
              "text": "**Ask:** Why is cycling healthier? **Answer from argument:** Because cyclists have 30% lower cardiovascular risk, and cycling provides daily aerobic exercise. ✓ The argument answers the \"Why?\" — this is the **conclusion**.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "\"Studies show that regular cyclists have a 30% lower risk...\"",
              "text": "**Ask:** Why do cyclists have lower risk? **Answer from argument:** The argument doesn't explain why. This is taken as a given fact. ✓ No answer — this is a **premise**.",
              "badge": "Premise",
              "badgeColor": "slate"
            },
            {
              "title": "\"Cycling provides daily aerobic exercise...\"",
              "text": "**Ask:** Why does cycling provide exercise? **Answer from argument:** The argument doesn't explain this either. It's another given fact. ✓ No answer — this is a **premise**.",
              "badge": "Premise",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "callout",
          "title": "The \"Because\" Reversal",
          "variant": "tip",
          "text": "A quick shortcut: try inserting the word **\"because\"** between your candidate conclusion and the other statements. If it makes logical sense, you have the right direction.\n\n*\"Cycling is healthier **because** cyclists have lower cardiovascular risk.\"* ✓ Makes sense.\n*\"Cyclists have lower cardiovascular risk **because** cycling is healthier.\"* ✗ Backwards."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Final Destination Principle"
        },
        {
          "type": "paragraph",
          "text": "Arguments often contain multiple layers: background information, opposing viewpoints, intermediate conclusions, and the main conclusion. A common trap is mistaking a sub-conclusion for the main conclusion. The key insight:"
        },
        {
          "type": "callout",
          "title": "The Final Destination",
          "variant": "default",
          "text": "The Main Conclusion is the statement that **supports nothing else**. It is the end of the line — the final judgment, prediction, or recommendation that the author is trying to leave you with. It is not necessarily the \"heaviest\" or most complex sentence; it is simply the one sentence that all other sentences work to prove."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Indicator Words Reference"
        },
        {
          "type": "paragraph",
          "text": "Indicator words are your most reliable tool for quickly identifying argument structure. These words signal whether a statement is serving as a conclusion, a premise, or a pivot between viewpoints. {{!Consider moving the full Indicator Words Reference table to the Reference Guide (2-11) and keeping only a brief 3-row preview here to reduce lesson length.!}}"
        },
        {
          "type": "table",
          "headers": [
            "Conclusion Indicators",
            "Premise Indicators",
            "Contrast / Pivot Indicators"
          ],
          "rows": [
            [
              "Therefore",
              "Because",
              "But"
            ],
            [
              "Thus",
              "Since",
              "However"
            ],
            [
              "So",
              "For",
              "Yet"
            ],
            [
              "Hence",
              "After all",
              "Although"
            ],
            [
              "Consequently",
              "Given that",
              "While"
            ],
            [
              "It follows that",
              "As evidenced by",
              "Nevertheless"
            ],
            [
              "This shows that",
              "Due to the fact that",
              "Despite"
            ],
            [
              "We can conclude that",
              "On the grounds that",
              "On the other hand"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Warning: Indicator Words Are Clues, Not Guarantees",
          "variant": "tip",
          "text": "Not every conclusion has an indicator word, and not every \"therefore\" introduces the *main* conclusion—it might introduce a sub-conclusion. Always confirm with the Why Test. Indicator words narrow your search; the Why Test confirms your answer."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "The Four Conclusion Types — Preview"
        },
        {
          "type": "diff-note",
          "text": "The Four Conclusion Types preview below duplicates nearly all of Lesson 2-3. Consider trimming to a single compact table with no sub-sections, and adding a forward reference: 'You will study each type in depth in Lesson 3.'",
          "variant": "change"
        },
        {
          "type": "paragraph",
          "text": "Main conclusions on the LSAT come in four flavors. You will study each in depth in upcoming lessons, but here is a quick overview so you know what to expect:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Conclusion Type",
            "text": "Description & Key Signals"
          },
          "items": [
            {
              "title": "1. The Rebuttal",
              "text": "The author rejects or critiques a claim held by others. The stimulus introduces someone else's position, then pivots to tear it down.\n\n**Signals:** *But, However, Yet* + rejection words (*mistaken, unfounded, dubious, unconvincing*)\n**Frequency:** ~45% of Main Conclusion questions",
              "badge": "~45%",
              "badgeColor": "indigo"
            },
            {
              "title": "2. The Prescription",
              "text": "The author makes a judgment or recommends a course of action. The conclusion goes beyond describing facts to say what *should* or *must* be done.\n\n**Signals:** *should, must, ought to, needs to, it is advisable, unfair, unwise*\n**Frequency:** ~25% of Main Conclusion questions",
              "badge": "~25%",
              "badgeColor": "blue"
            },
            {
              "title": "3. The Explanation",
              "text": "The author proposes a cause or reason for a known phenomenon. The question isn't *whether* something happened, but *why* it happened.\n\n**Signals:** *The reason is…, is caused by…, is explained by…, This is because…*\n**Frequency:** ~20% of Main Conclusion questions",
              "badge": "~20%",
              "badgeColor": "slate"
            },
            {
              "title": "4. The Prediction / Factual Claim",
              "text": "The author uses premises to prove a descriptive fact or predict a future outcome. The most straightforward type.\n\n**Signals:** *will, will not, is likely to, can be expected to*\n**Frequency:** ~10% of Main Conclusion questions",
              "badge": "~10%",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Your First Main Conclusion Question"
        },
        {
          "type": "paragraph",
          "text": "Let's put everything together with a concrete practice question. Read the stimulus, apply the Why Test, spot indicator words, and find the main conclusion before looking at the answer choices."
        },
        {
          "type": "paragraph",
          "text": "{{~Consider an argument that starts with a common belief that table scraps are harmless for dogs, then pivots to evidence about toxicity, obesity, and digestive problems before concluding that dog owners should avoid feeding table scraps altogether.~}} {{!This describes an argument rather than presenting actual stimulus text. Replace with a real blockquote stimulus and a question-card so students get hands-on practice before leaving the introduction.!}} The structural task is to distinguish the background belief and supporting evidence from the final recommendation."
        },
        {
          "type": "h4",
          "text": "Walkthrough"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Step",
            "text": "Application"
          },
          "items": [
            {
              "title": "Spot the indicator words",
              "text": "**\"However\"** signals a pivot from the common belief. **\"Therefore\"** introduces the final claim. These two words map the argument instantly.",
              "badge": "Step 1",
              "badgeColor": "blue"
            },
            {
              "title": "Apply the Why Test",
              "text": "**Candidate:** \"Dog owners should avoid giving their pets table scraps.\"\n**Ask:** Why should they avoid it?\n**Answer:** Because some human foods are toxic, and even non-toxic foods cause obesity and digestive problems.\n✓ The argument answers the \"Why?\" — this is the conclusion.",
              "badge": "Step 2",
              "badgeColor": "blue"
            },
            {
              "title": "Identify the type",
              "text": "The conclusion uses **\"should\"** — this is a **Prescription** (a recommendation about what dog owners ought to do).",
              "badge": "Step 3",
              "badgeColor": "blue"
            },
            {
              "title": "Confirm the destination",
              "text": "The surrounding statements either describe the belief being challenged or provide evidence about why table scraps are dangerous. The only sentence that those ideas are trying to prove is the recommendation that owners should stop feeding table scraps.",
              "badge": "Step 4",
              "badgeColor": "blue"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• The Main Conclusion is the **final destination** of the argument — the one claim that everything else supports and that supports nothing else.\n• The **Why Test** is your most reliable tool: ask \"Why?\" of your candidate, and if the argument answers, you have the conclusion.\n• **Indicator words** (therefore, because, however) are clues that speed up your search, but always confirm with the Why Test.\n• Main Conclusion questions are foundational — this skill is a prerequisite for Flaw, Assumption, Strengthen, Weaken, and more.\n• Conclusions come in four types: **Rebuttal**, **Prescription**, **Explanation**, and **Prediction/Fact**. You will master each in the lessons ahead.\n{{+• **Next step:** Try the practice question below before moving on. Applying the Why Test to a real argument is the fastest way to internalize these concepts.+}}"
        }
      ],
    },
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Main Conclusion \u2014 At a Glance' },
        {
          type: 'paragraph',
          text: '**Goal:** Identify the single overarching claim the entire argument is constructed to prove. **Frequency:** ~8% of LR questions (1\u20132 per scored section).',
        },
        {
          type: 'table',
          headers: ['Stem Pattern', 'Core Skill', 'Common Trap'],
          rows: [
            ['"...most accurately expresses the main conclusion?"', 'Why Test', 'Picking a premise that sounds important'],
            ['"...most accurately states the main point?"', 'Why Test', 'Choosing the opposing viewpoint'],
            ['"The overall conclusion of the argument is that..."', 'Structural tagging', 'Selecting a sub-conclusion'],
            ['"The argument is structured to lead to which...conclusion?"', 'Support-chain mapping', 'Picking the longest sentence'],
          ],
        },
        {
          type: 'blockquote',
          text: '"Cycling to work is healthier than driving. Studies show that regular cyclists have a 30% lower risk of cardiovascular disease. Additionally, cycling provides daily aerobic exercise that most commuters otherwise lack."',
        },
        {
          type: 'paragraph',
          text: 'Ask: *Why is cycling healthier?* The argument answers with cardiovascular and exercise facts \u2014 so the first sentence is the **main conclusion** and the rest are premises.',
        },
        { type: 'h4', text: "What's in This Module" },
        {
          type: 'list',
          items: [
            '**Foundations** \u2014 The Why Test, indicator words, and the four conclusion types.',
            '**Step-by-Step Guide** \u2014 A repeatable 6-step method for test day.',
            '**Common Patterns** \u2014 Rebuttals, Prescriptions, Explanations, and Predictions.',
            '**Advanced Concepts** \u2014 Intermediate conclusions, background principles, and structural twists.',
            '**Reference Guide** \u2014 A compact cheat sheet for quick review.',
          ],
        },
      ],
    },
  },
};
