import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "40-2",
  title: "Step-by-Step: Title",
  content: [
    { type: 'h3', text: "Step-by-Step: Title" },
    { type: 'h4', text: "For Standard Title Questions (Single Passage)" },
    { type: 'paragraph', text: "**Step 1: Synthesize the Passage's Main Point and Scope.**" },
    { type: 'paragraph', text: "Before looking at the answers, get a firm grasp of the passage's \"big picture.\" Ask yourself: What is the central subject? What is the author's main argument or purpose regarding that subject? Your goal is to create a mental headline." },
    { type: 'paragraph', text: "**Step 2: Test Each Title Against Your Synthesis.**" },
    { type: 'paragraph', text: "Evaluate each answer choice by asking if it accurately represents the entire passage. Eliminate any title that is:" },
    { type: 'list', items: [
      "**Too Narrow:** Focuses on a single detail, example, or paragraph.",
      "**Too Broad:** Captures the general topic but misses the specific focus.",
      "**Wrong Focus:** Misrepresents the author's purpose."
    ]},

    { type: 'h4', text: "For Paired or Analogous Title Questions (Comparative Passages)" },
    { type: 'paragraph', text: "**Step 1: Define the Role of Each Passage and Their Relationship.**" },
    { type: 'paragraph', text: "First, create a one-sentence summary for Passage A and one for Passage B. Then, define the relationship between them. (e.g., \"Passage A presents a general theory, and Passage B provides a specific critique of it.\")" },
    { type: 'callout', title: "Comparative Title Workflow", variant: "summary", text: "Use the same default comparative method here: summarize Passage A, summarize Passage B, define the relationship, then test the titles. For paired titles, a bad fit for either passage kills the answer immediately." },
    { type: 'paragraph', text: "**Step 2: Execute the Correct Task.**" },
    { type: 'list', items: [
      "**For Paired Titles:** Apply the standard approach to both titles. If the title for Passage A is a poor fit, eliminate the choice. Both must be correct.",
      "**For Analogous Titles:** This is a two-part analogy. Find the pair of titles whose relationship is a perfect logical parallel to the relationship you defined between the passages in Step 1.",
      "**Do not let a vague relationship rescue a bad title:** The winning choice must get both the individual fit and the passage-to-passage relationship right."
    ]},
    
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The Verb Test" },
    { type: 'paragraph', text: "Look at the key nouns or verbs in your final two title choices (e.g., \"A Critique of...\" vs. \"An Analysis of...\"). Go back to the passage and assess the author's primary goal. Is their main purpose to find flaws (critique), or is it to explain the components of something (analysis)? The verb in the correct title must accurately reflect the author's main purpose." },
    
    { type: 'h4', text: "Tie-Breaker #2 (for Analogous Titles): The Precision Check" },
    { type: 'paragraph', text: "If you're stuck between two analogous pairs, your initial definition of the relationship between the passages may be too general. Refine it with more precision. For example, instead of \"A and B disagree,\" try \"B uses historical evidence to challenge the theoretical claim made in A.\" Now, re-evaluate your final two answer choices against this more specific and precise definition." }
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
          "text": "For Standard Title Questions (Single Passage)"
        },
        {
          "type": "paragraph",
          "text": "**Step 1: Synthesize the Passage's Main Point and Scope.**"
        },
        {
          "type": "paragraph",
          "text": "Before looking at the answers, get a firm grasp of the passage's \"big picture.\" Ask yourself: What is the central subject? What is the author's main argument or purpose regarding that subject? Your goal is to create a mental headline."
        },
        {
          "type": "paragraph",
          "text": "**Step 2: Test Each Title Against Your Synthesis.**"
        },
        {
          "type": "paragraph",
          "text": "Evaluate each answer choice by asking if it accurately represents the entire passage. Eliminate any title that is:"
        },
        {
          "type": "list",
          "items": [
            "**Too Narrow:** Focuses on a single detail, example, or paragraph.",
            "**Too Broad:** Captures the general topic but misses the specific focus.",
            "**Wrong Focus:** Misrepresents the author's purpose."
          ]
        },
        {
          "type": "h4",
          "text": "For Paired or Analogous Title Questions (Comparative Passages)"
        },
        {
          "type": "paragraph",
          "text": "**Step 1: Define the Role of Each Passage and Their Relationship.**"
        },
        {
          "type": "paragraph",
          "text": "First, create a one-sentence summary for Passage A and one for Passage B. Then, define the relationship between them. (e.g., \"Passage A presents a general theory, and Passage B provides a specific critique of it.\")"
        },
        {
          "type": "paragraph",
          "text": "**Step 2: Execute the Correct Task.**"
        },
        {
          "type": "list",
          "items": [
            "**For Paired Titles:** Apply the standard approach to both titles. If the title for Passage A is a poor fit, eliminate the choice. Both must be correct.",
            "**For Analogous Titles:** This is a two-part analogy. Find the pair of titles whose relationship is a perfect logical parallel to the relationship you defined between the passages in Step 1."
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
          "text": "Tie-Breaker #1: The Verb Test"
        },
        {
          "type": "paragraph",
          "text": "Look at the key nouns or verbs in your final two title choices (e.g., \"A Critique of...\" vs. \"An Analysis of...\"). Go back to the passage and assess the author's primary goal. Is their main purpose to find flaws (critique), or is it to explain the components of something (analysis)? The verb in the correct title must accurately reflect the author's main purpose."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2 (for Analogous Titles): The Precision Check"
        },
        {
          "type": "paragraph",
          "text": "If you're stuck between two analogous pairs, your initial definition of the relationship between the passages may be too general. Refine it with more precision. For example, instead of \"A and B disagree,\" try \"B uses historical evidence to challenge the theoretical claim made in A.\" Now, re-evaluate your final two answer choices against this more specific and precise definition."
        }
      ],
    },
    playbook: {
      label: "Playbook",
      content: [
        { type: 'h2', text: "Title Questions -- Playbook" },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: "Title questions should take 45-60 seconds for standard (single passage) and 60-90 seconds for paired or analogous variants. Your post-reading recap should already contain the mental headline you need." },
        {
          type: 'process',
          title: 'Title Workflow',
          steps: [
            "Synthesize a mental headline: After reading, distill the passage's central subject, scope, and purpose into a single phrase. This is your prediction.",
            "For comparative sets, define both roles: Summarize Passage A in one sentence, Passage B in one sentence, then state how they relate.",
            "Test each title against your headline: Does it capture the right subject at the right scope with the right purpose verb? Eliminate too-narrow, too-broad, and wrong-focus titles.",
            "For paired titles, apply a double filter: Both titles must fit individually. A bad match for either passage kills the entire choice.",
            "For analogous titles, match the relationship first: Find the pair whose structural relationship mirrors the passage-to-passage relationship you defined, then confirm each title individually."
          ]
        },
        {
          type: 'table',
          headers: ['If you see this title pattern...', 'Do this'],
          rows: [
            ['Title names the topic but omits the author\'s stance or action', 'Eliminate -- too broad; "The History of X" vs. "Reassessing X" matters'],
            ['Title focuses on one example or paragraph from the passage', 'Eliminate -- too narrow; titles must cover the whole text'],
            ['Title uses "A Critique of..." but the passage merely explains', 'Eliminate -- wrong verb; match the author\'s actual goal'],
            ['Paired titles: one title fits perfectly but the other is off', 'Eliminate the entire pair -- both must work'],
            ['Analogous pair: each title sounds right in isolation but the relationship differs from the passage pair', 'Eliminate -- the structural parallel must hold, not just individual plausibility']
          ]
        },
        {
          type: 'table',
          headers: ['If you get stuck between two choices...', 'Apply this tie-breaker'],
          rows: [
            ['Standard title: two titles seem close', 'Compare the key verb in each -- does the passage critique, analyze, explain, or propose? The verb must match the author\'s primary goal.'],
            ['Paired titles: both pairs look plausible', 'Check whether the weaker title in one pair misrepresents scope or purpose for its passage.'],
            ['Analogous titles: two pairs seem structurally similar', 'Refine your passage-relationship definition to be more specific, then re-test.']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain Summary', text: "Synthesize a mental headline after reading -> For comparative sets, define both passage roles and their relationship -> Test titles against your headline for subject, scope, and purpose-verb accuracy -> For paired titles, apply a double filter; for analogous titles, match the structural relationship first -> Break ties with the Verb Test and the Precision Check." }
      ]
    }
  }
};
