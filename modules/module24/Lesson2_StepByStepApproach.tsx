import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "24-2",
  title: "Step-by-Step: Main Idea",
  content: [
    { type: 'h3', text: "Step-by-Step: Main Idea" },
    { type: 'process', title: "The Shared RC Reading Loop", steps: [
      "Build a **low-resolution paragraph summary** after each paragraph.",
      "Track **different perspectives** and who owns each claim.",
      "Mark the **author's opinion** whenever the passage leans, criticizes, or endorses.",
      "Make a light **next-paragraph prediction** after major pivots.",
      "Form an early **passage-style hypothesis**: debate, single-position, phenomenon-hypothesis, problem-analysis, spotlight, or hybrid.",
      "Finish with a short **post-reading recap** that states the main point in your own words."
    ]},
    { type: 'process', steps: [
      "Read for the Overall Argument and Predict the Main Idea",
      "Evaluate Answer Choices Using a Two-Step Test",
      "Confirm Your Final Choice"
    ]},
    { type: 'h4', text: "Step 1: Read for the Overall Argument and Predict the Main Idea" },
    { type: 'paragraph', text: "Your primary goal while reading is to understand the passage as a total argument. As you read, ask yourself: \"What is the point of this paragraph and how does it contribute to the passage as a whole?\" After reading, take a moment to consolidate these paragraphs into a main point in your own words before looking at the answer choices. A good prediction will summarize the primary topic plus the overall perspective the author advances, or the perspective the passage mainly develops if the author stays neutral." },
    { 
      type: 'list', 
      items: [
        "The **last sentence of the first paragraph**",
        "The **first sentence of each body paragraph**",
        "The **final paragraph**"
      ] 
    },
    { type: 'h4', text: "Style-Aware Main Point Rules" },
    { type: 'table', headers: ["Passage style", "What the main idea usually must capture"], rows: [
      ["Debate / critique", "The dispute, the competing views, and the author's final alignment or criticism."],
      ["Single position", "The author's advanced position or framework, not just one supporting example or piece of background."],
      ["Phenomenon-hypothesis", "The phenomenon needing explanation and the passage's treatment of the explanation(s)."],
      ["Problem-analysis", "If a solution is endorsed, the main idea usually includes it; if not, the main idea centers on the nature or significance of the problem."],
      ["Spotlight", "What is significant, distinctive, or interesting about the person, work, event, or development in focus."],
      ["Hybrid", "The answer must preserve the dominant structure without flattening the passage into a single generic label."]
    ]},
    { type: 'callout', title: "Spotlight Check", variant: "summary", text: "For a spotlight passage, ask three quick questions before going to the answers: **What is being spotlighted? What does the passage say is significant or distinctive about it? What origin, influence, or impact material helps explain that significance?**" },
    { type: 'h4', text: "Step 2: Evaluate Answer Choices Using a Two-Step Test" },
    { type: 'paragraph', text: "This is the most crucial step. Immediately look for an answer choice that matches the main idea you formulated. If a match isn't obvious, use this two-part filter to eliminate wrong answers." },
    { type: 'list', items: [
      "**1. The Accuracy Test:** Your first filter is for basic accuracy. Eliminate any choice that is directly contradicted by the text, misrepresents the author's argument or tone, contains information outside the scope of the passage, or is not at least strongly supported by the text.",
      "**2. The Comprehensiveness Test:** After filtering for accuracy, you may have multiple choices left. The correct answer must be the most comprehensive one, encapsulating the entire passage's scope and purpose. A common trap is an answer that is factually correct but only covers a single paragraph or example."
    ]},
    { type: 'h4', text: "Step 3: Confirm Your Final Choice" },
    { type: 'paragraph', text: "The answer you are left with should be both accurate and the most comprehensive summary of the author's primary purpose." }
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
          "type": "process",
          "steps": [
            "Read for the Overall Argument and Predict the Main Idea",
            "Evaluate Answer Choices Using a Two-Step Test",
            "Confirm Your Final Choice"
          ]
        },
        {
          "type": "h4",
          "text": "Step 1: Read for the Overall Argument and Predict the Main Idea"
        },
        {
          "type": "paragraph",
          "text": "Your primary goal while reading is to understand the passage as a total argument. As you read, ask yourself: \"What is the point of this paragraph and how does it contribute to the passage as a whole?\" After reading, take a moment to consolidate these paragraphs into a main point in your own words before looking at the answer choices. A good prediction will summarize the primary topic and the author's conclusion about it."
        },
        {
          "type": "list",
          "items": [
            "The **last sentence of the first paragraph**",
            "The **first sentence of each body paragraph**",
            "The **final paragraph**"
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Evaluate Answer Choices Using a Two-Step Test"
        },
        {
          "type": "paragraph",
          "text": "This is the most crucial step. Immediately look for an answer choice that matches the main idea you formulated. If a match isn't obvious, use this two-part filter to eliminate wrong answers."
        },
        {
          "type": "list",
          "items": [
            "**1. The Accuracy Test:** Your first filter is for basic accuracy. Eliminate any choice that is directly contradicted by the text, misrepresents the author's argument or tone, or contains information outside the scope of the passage.",
            "**2. The Comprehensiveness Test:** After filtering for accuracy, you may have multiple choices left. The correct answer must be the most comprehensive one, encapsulating the entire passage's scope and purpose. A common trap is an answer that is factually correct but only covers a single paragraph or example."
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Confirm Your Final Choice"
        },
        {
          "type": "paragraph",
          "text": "The answer you are left with should be both accurate and the most comprehensive summary of the author's primary purpose."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Agree/Disagree (Point at Issue) -- Playbook' },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Timing Target',
          text: '**Target:** 1:30 per Agree/Disagree question. Spend ~40 sec mapping each speaker, ~25 sec finding the overlap, ~25 sec testing answers against both speakers.',
        },
        {
          type: 'process',
          title: 'The 3-Step Method',
          steps: [
            '**Read Both Speakers** -- Map each speaker\'s position separately. For each, identify their conclusion and key premise. Reduce each to one sentence: "Speaker A believes X because Y" and "Speaker B believes P because Q." Note any concessions.',
            '**Find Overlap** -- Identify the proposition where the two speakers\' commitments collide. For disagreement, look for a claim one speaker affirms and the other denies. For agreement, look for a shared underlying belief. Prephrase it before touching the answer choices.',
            '**Test Each Answer Against Both** -- For every choice, ask: "Would Speaker A say YES or NO? Would Speaker B say YES or NO?" If either speaker\'s position is UNKNOWN on that proposition, eliminate immediately. The correct answer requires clear commitment from both.',
          ],
        },
        {
          type: 'table',
          headers: ['Disagreement Type', 'What the Dialogue Sets Up', 'What to Look For in the Answer'],
          rows: [
            [
              '**Definitional disagreement**',
              'Speakers define a key term differently -- one sets a necessary condition, the other rejects it or proposes a different standard',
              'An answer presenting the proposition where one speaker\'s definition includes X and the other\'s excludes it',
            ],
            [
              '**Explanatory disagreement**',
              'Speakers agree on an observed outcome but disagree about what caused it',
              'An answer framing the dispute as which factor is the true cause of the agreed-upon effect',
            ],
            [
              '**Evaluative disagreement**',
              'Speakers agree on the facts but apply different evaluative standards, leading to opposite judgments',
              'An answer capturing which standard of judgment is the correct one to apply',
            ],
          ],
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Method Chain',
          text: '**Read Both Speakers** --> **Find Overlap** --> **Test Each Answer Against Both**. The right answer is the claim where Speaker A says yes and Speaker B says no (or vice versa). If either speaker has no opinion, it is wrong.',
        },
      ],
    },
  },
};
