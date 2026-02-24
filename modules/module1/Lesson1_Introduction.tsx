import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "1-1",
  title: "Introduction to Argument Parts",
  formatId: 11,
  content: [
    { type: 'h2', text: 'Question Goal' },
    {
      type: 'callout',
      text: '**Define the logical function** a particular sentence serves within the argument. Is the statement the main conclusion, a supporting premise, an intermediate step, or a concession to an opposing view?',
      variant: 'goal',
    },
    { type: 'hr' },
    { type: 'h2', text: 'Introduction' },
    {
      type: 'paragraph',
      text: "Argument Part questions are well named: they ask you to determine what *part* a specific sentence plays within the author's overall *argument*. This question type, together with Main Conclusion, tests the most fundamental skill in Logical Reasoning: identifying argument structure. Nearly every other argumentative question type, from Flaw to Strengthen, Weaken to Assumption, requires you to understand how the parts of an argument fit together.",
    },
    {
      type: 'paragraph',
      text: "Unlike Main Conclusion questions, which always ask for the final point, Argument Part questions can ask about any sentence in the stimulus. The task is to look past content (what the sentence says) and identify function (what the sentence does).",
    },
    { type: 'hr' },
    { type: 'h2', text: 'Common Question Stems' },
    {
      type: 'paragraph',
      text: "You can recognize these questions because they cite a specific phrase or sentence from the stimulus and ask you to describe its role. Typical phrasing includes:",
    },
    {
      type: 'list',
      items: [
        '"The statement that [X] plays which one of the following roles in the argument?"',
        '"The claim that [X] figures in the argument in which one of the following ways?"',
        '"Which one of the following most accurately describes the role played in the argument by the claim that [X]?"',
      ],
    },
    { type: 'hr' },
    { type: 'h2', text: 'Core Concepts: The Anatomy of an Argument' },
    {
      type: 'paragraph',
      text: "To solve these questions, treat the argument as a structure made of distinct parts. Your goal is to identify the role played by the specific sentence the question targets.",
    },
    { type: 'paragraph', text: 'Consider this simple argument:' },
    {
      type: 'blockquote',
      text: '"We should go to the movies tonight. It\'s raining outside, and we can\'t do much else when it rains."',
    },
    {
      type: 'list',
      items: [
        '**Main Conclusion:** "We should go to the movies tonight." (the final decision or opinion)',
        '**Premise:** "It\'s raining outside." (a fact used to support the decision)',
        '**Intermediate Conclusion:** "We can\'t do much else." (supported by the rain, and used to support the final decision)',
      ],
    },
    { type: 'hr' },
    { type: 'h2', text: 'Common Roles Explained' },
    {
      type: 'list',
      ordered: true,
      items: [
        '**Main Conclusion:** The ultimate point the entire argument is trying to prove. Every other sentence exists primarily to support this claim.',
        '**Premise:** A reason or piece of evidence offered in support of a conclusion.',
        '**Intermediate (Subsidiary) Conclusion:** A bridge statement. It is supported by premises, and it also supports the main conclusion, so it functions as both a conclusion and a premise.',
        '**Opposing Viewpoint:** A claim attributed to someone other than the author (for example, "Some critics argue…"). The author\'s purpose is typically to reject, qualify, or undermine it.',
        '**Concession:** A point the author grants as true, even though it appears to cut against the author\'s position. It is often used to sound fair before pivoting back to the main point.',
      ],
    },
  ],
};
