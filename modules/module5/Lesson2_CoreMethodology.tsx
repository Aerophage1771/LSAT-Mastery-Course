import { Lesson } from '../../types';

export const Lesson2_CoreMethodology: Lesson = {
  id: "5-2",
  title: "Step-by-Step Guide: Flaw in the Reasoning",
  content: [
    { type: 'h2', text: 'Step-by-Step Guide: Flaw in the Reasoning' },
    { type: 'paragraph', text: 'This section provides a clear, step-by-step guide for solving any **Flaw** question. The process is designed to help you identify the logical gap between the evidence and the conclusion and then match that gap to the abstract language of the correct answer choice.' },
    { type: 'h3', text: 'Step 1: Deconstruct the Argument' },
    { type: 'paragraph', text: 'Before you can find the flaw, you must understand the argument\'s structure. As you read the stimulus, your first task is to break it down into its core components.' },
    { type: 'list', items: [
      '**Identify the Main Conclusion:** What is the single, overarching claim the author is trying to prove? Look for indicator words like *therefore, thus, so,* and *hence*.',
      '**Identify the Premises:** What evidence or reasons does the author provide to support that conclusion? Look for indicator words like *because, since,* and *for*.',
      '**Acknowledge All Information:** Take note of any background facts, opposing viewpoints, or concessions. These details often play a crucial role in how the flaw manifests.'
    ]},
    { type: 'h3', text: 'Step 2: Find the Logical Gap (The Flaw)' },
    { type: 'paragraph', text: 'This is the most critical step. With the argument\'s structure in mind, ask yourself: ""Why doesn\'t this evidence guarantee this conclusion?"" Assume the premises are true and focus entirely on the logical leap the author makes.' },
    { type: 'list', items: [
      '**Look for Mismatches:** Is there a shift in language or scope between the premises and the conclusion? (e.g., from *some* to *all*, from *correlation* to *causation*, from *better than* to *good*).',
      '**Question the Evidence\'s Relevance:** Does the evidence actually support the specific conclusion being drawn? Or is it slightly off-topic?',
      '**Brainstorm Alternatives:** Think of a scenario or alternative explanation where the premises could still be true, but the conclusion would be false. This alternative is what the author has overlooked.'
    ]},
    { type: 'paragraph', text: '**Key Insight:** In a **Flaw** question, your job is not to find a way to fix the argument, but to describe the ""broken"" bridge between the evidence and the claim.'},
    { type: 'h3', text: 'Step 3: Articulate the Flaw and Prephrase' },
    { type: 'paragraph', text: 'Once you\'ve identified the logical gap, describe it in your own words using abstract, general terms. This ""prephrase"" is your blueprint for the correct answer.' },
    { type: 'list', items: [
      '**Bad Prephrase:** ""The author only talked to his friends."" (Too specific to the content)',
      '**Good Prephrase:** ""The argument generalizes from an unrepresentative sample."" (Abstract and accurate)',
      '**Good Prephrase:** ""The author overlooks the possibility that the evidence is from a biased group."" (Describes an omission)'
    ]},
    { type: 'paragraph', text: '**Note:** The goal is to create a general description of the reasoning error that you can then match to the answer choices.'},
    { type: 'h3', text: 'Step 4: Evaluate the Answer Choices' },
    { type: 'paragraph', text: 'Scan the five answer choices. While the test makers may use wording that differs from yours, your prephrase is your primary filter.' },
    { type: 'list', items: [
      '**The Prephrase Priority:** Scan for your prephrase first. If you find a match, select it. Only analyze the other options if your prephrase is clearly missing.',
      '**Is the description accurate?** Ask: ""Did this actually happen in the text?""\n    *   *Example:* If an answer says the author ""attacks a source\'s character,"" but the author only criticized their data, the description is inaccurate. Eliminate it immediately.',
      '**Is it actually a flaw?** Ask: ""Is this a logical error *for this specific argument?*""\n    *   *Example:* An answer claims the author ""fails to consider penguins and other flightless birds."" If the argument is only about *eagles*, ignoring penguins is not a flaw; it\'s irrelevant. The choice describes something true (she didn\'t mention penguins), but it is not a logical error.'
    ]},
    { type: 'h3', text: 'Step 5: Avoid Common Answer Traps' },
    { type: 'list', items: [
      '**Trap: The Irrelevant Distinction.** This choice points out a difference between two things that does not actually affect the logic of the conclusion.',
      '**Trap: The False Premise.** This choice says a premise is false. On the LSAT, we usually accept premises as true; the mistake is in how the author links them to the conclusion.',
      '**Trap: The Unmatched Flaw.** This choice describes a real logical error (like **Circular Reasoning**) that just did not happen in this specific argument.'
    ]},
    { type: 'paragraph', text: '**Methodology Summary: Deconstruct → Find the Gap → Prephrase → Evaluate**' }
  ]
};
