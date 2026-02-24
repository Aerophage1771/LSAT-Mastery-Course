import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "20-1",
  title: "Introduction",
  formatId: 11,
  content: [
    { type: 'h2', text: 'Question Goal' },
    {
      type: 'callout',
      text: '**Analyze a dialogue between two speakers and identify the specific statement that one speaker would affirm and the other would deny (Point of Disagreement), or that both speakers would affirm (Point of Agreement).**',
      variant: 'goal',
    },
    { type: 'hr' },
    { type: 'h2', text: 'Introduction' },
    { type: 'paragraph', text: 'Agree/Disagree questions present a short dialogue and ask you to find the precise statement at the heart of the conversation. This question type is a crucial test of **comparative reasoning**. Instead of deconstructing a single argument in isolation, you must analyze two competing viewpoints and identify the exact fault line (a **Point of Disagreement**) or common ground (a **Point of Agreement**) between them.' },
    { type: 'paragraph', text: 'Once you can identify the conclusion and premises of a single argument, the next step is to compare two arguments that are in direct conversation. Your task is to track the debate and pinpoint the exact source of conflict or consensus.' },
    { type: 'hr' },
    { type: 'h2', text: 'Common Question Stems' },
    { type: 'paragraph', text: 'You can recognize these questions by their focus on the "point at issue," "disagreement," or "agreement" between two speakers.' },
    { type: 'h4', text: 'For Disagreement:' },
    { type: 'list', items: [
      '"The point at issue between [X] and [Y] is whether..."',
      '"[X]\'s and [Y]\'s statements provide the most support for holding that they disagree about the truth of which one of the following statements?"',
      '"On the basis of their statements, [X] and [Y] are committed to disagreeing about..."'
    ]},
    { type: 'h4', text: 'For Agreement:' },
    { type: 'list', items: [
      '"The dialogue provides the most support for the claim that [X] and [Y] agree that..."',
      '"[X]\'s and [Y]\'s statements most strongly support the claim that both of them would agree with which one of the following?"'
    ]},
    { type: 'hr' },
    { type: 'h2', text: 'Core Concepts' },
    { type: 'paragraph', text: 'Your task is to impartially determine what each speaker has committed to based *only* on the text provided. The key is to understand that the correct answer is determined by the relationship between the two speakers\' positions.' },
    { type: 'h3', text: '1. The Point of Disagreement: The "Yes / No" Test' },
    { type: 'paragraph', text: 'This is the most common variant. The correct answer is a statement that one speaker would affirm ("Yes") and the other would deny ("No").' },
    { type: 'paragraph', text: 'To be the correct answer, a statement must meet a critical condition: **both speakers must have a clear opinion on it**. If one speaker\'s view is unstated or cannot be logically inferred, the statement cannot be the point of disagreement, no matter how strongly the other speaker feels. Your task is to find the single statement that forces the two speakers into direct opposition.' },
    { type: 'h3', text: '2. The Point of Agreement: The "Yes / Yes" Test' },
    { type: 'paragraph', text: 'This variant asks for the common ground between the speakers. The correct answer is a statement that both speakers would affirm ("Yes").' },
    { type: 'paragraph', text: 'This common ground can be an explicitly stated point, but more often it is a **shared premise** or an **underlying assumption** that both arguments depend on to make sense. You are looking for the foundational belief that both speakers accept, even if they use it to build arguments that reach opposite conclusions.' }
  ]
};
