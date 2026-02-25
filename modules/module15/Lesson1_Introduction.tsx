import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "15-1",
  title: "Introduction to Fill in the Blank",
  content: [
    { type: 'h2', text: 'MODULE 15: Fill in the Blank' },
    { type: 'paragraph', text: '**Question Goal:** Determine the logical function of the missing phrase and select the answer choice that best completes the author\'s argument. The blank almost always represents the argument\'s conclusion, so your task is to synthesize the premises and predict the endpoint.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: 'Fill in the Blank is essentially a **Main Conclusion question in disguise**. The test-makers have taken a complete argument, removed the final piece, and asked you to supply it. If you can identify main conclusions (Module 2) and draw valid inferences (Module 5), you already have the core skills. This question type simply packages those skills in a different wrapper.' },
    { type: 'paragraph', text: 'What makes Fill in the Blank distinctive is the requirement for **predictive reasoning**. Instead of evaluating a completed argument, you must understand the argument\'s trajectory so well that you can anticipate where it is headed. You are not a critic here; you are the author, finishing your own thought.' },
    { type: 'callout', variant: 'tip', title: 'Frequency', text: 'Fill in the Blank questions appear roughly **1-2 times per scored Logical Reasoning section**. They are relatively rare, but they are high-value because they reward the same structural-analysis skills you use on every other question type. Students who master Main Conclusion and Must Be True questions tend to find Fill in the Blank straightforward.' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'Fill in the Blank questions are easy to spot. The stimulus will contain an underscore or blank line, and the question stem will use one of a small set of standard phrasings:' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following most logically completes the argument?"', 'Asks you to **complete** the argument'],
      ['"Which one of the following most logically completes the argument below?"', 'Same signal with explicit reference to the stimulus'],
      ['"Which one of the following most reasonably completes the passage?"', '"Reasonably completes" = same task, different wording'],
    ]},
    { type: 'paragraph', text: 'The blank itself always appears inside the stimulus, most often at the very end, preceded by a conclusion indicator like "Therefore" or "Thus." Occasionally the blank appears mid-stimulus after a premise indicator like "since" or "because," but this is rare.' },

    { type: 'hr' },

    { type: 'h2', text: 'Fill in the Blank vs. Main Conclusion' },
    { type: 'paragraph', text: 'Because Fill in the Blank is so closely related to Main Conclusion, it is worth comparing them directly. Understanding the overlap will help you leverage skills you already have.' },
    { type: 'table', headers: ['Feature', 'Main Conclusion', 'Fill in the Blank'], rows: [
      ['What you find', 'The conclusion that is already stated in the stimulus', 'The conclusion that has been removed from the stimulus'],
      ['Where is the conclusion?', 'Somewhere in the stimulus text', 'In the answer choices (you supply it)'],
      ['What the premises do', 'Support a claim you must identify', 'Support a claim you must predict'],
      ['Core skill', 'Recognizing the conclusion', 'Synthesizing premises to form the conclusion'],
      ['Difficulty driver', 'Distinguishing the main conclusion from sub-conclusions', 'Predicting a conclusion without seeing it first'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Key Insight', text: 'Both question types ask the same fundamental question: "What do these premises prove?" Main Conclusion gives you the answer and asks you to find it. Fill in the Blank withholds the answer and asks you to construct it. The analytical process is identical; only the final step differs.' },

    { type: 'hr' },

    { type: 'h2', text: 'Two Types of Blanks' },
    { type: 'paragraph', text: 'Every Fill in the Blank question falls into one of two categories based on the logical role of the missing phrase. Identifying which type you are dealing with is the single most important first step.' },

    { type: 'h3', text: '1. Conclusion Blanks (Most Common)' },
    { type: 'paragraph', text: 'The stimulus presents a series of premises and ends with a conclusion indicator followed by a blank. Everything before the blank is evidence; the blank is the point that evidence supports.' },
    { type: 'list', items: [
      '*Indicators:* "Therefore, _______." "Thus, _______." "Hence, _______." "So, _______." "It follows that _______."',
      '*Your Task:* Synthesize the premises. You are answering: "What is the single point these facts are building up to prove?"',
      '*Approach:* Treat this exactly like a Main Conclusion or Must Be True question. The correct answer will be a statement that follows logically from the evidence without introducing new information.',
      '*The Trap:* Avoid answer choices that make claims stronger than the evidence supports. The correct answer is almost always a modest, well-supported synthesis.',
    ]},

    { type: 'h3', text: '2. Premise Blanks (Rare)' },
    { type: 'paragraph', text: 'The author has already stated a conclusion, and the blank represents the reason for that conclusion. The blank appears after a premise indicator.' },
    { type: 'list', items: [
      '*Indicators:* "[Conclusion], since _______." "[Conclusion], because _______." "[Conclusion], for _______."',
      '*Your Task:* Find the missing support. You are answering: "What evidence or principle would justify this conclusion?"',
      '*Approach:* Treat this like a Sufficient Assumption question. The correct answer will bridge the gap between the given evidence and the stated conclusion.',
      '*The Trap:* Avoid answer choices that merely restate the conclusion in different words. The blank must provide new supporting information.',
    ]},

    { type: 'callout', variant: 'tip', title: 'Quick Classification', text: 'Look at the word immediately before the blank. If it is a conclusion indicator (therefore, thus, hence, so), the blank is a **conclusion**. If it is a premise indicator (since, because, for), the blank is a **premise**. This one-second check determines your entire approach.' },

    { type: 'hr' },

    { type: 'h2', text: 'Common Conclusion Patterns' },
    { type: 'paragraph', text: 'When the blank is a conclusion (the vast majority of cases), the correct answer will follow one of several predictable patterns depending on the argument\'s structure. Recognizing these patterns helps you prephrase more accurately.' },

    { type: 'breakdown', labels: { title: 'Pattern', text: 'Description & Example' }, items: [
      { title: 'Causal Conclusion', text: 'The premises describe a cause-and-effect chain. The conclusion states the final effect. Example: premises show that drug X blocks enzyme Y, and enzyme Y is needed for cell division. Conclusion: drug X inhibits cell division.', badge: 'Very Common', badgeColor: 'green' },
      { title: 'Conditional Conclusion', text: 'The premises establish conditional rules (if A then B, if B then C). The conclusion chains them together (if A then C) or applies them to a specific case. Example: if funding is cut, the program cannot hire staff; if staff cannot be hired, services decline. Conclusion: if funding is cut, services will decline.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Comparative Conclusion', text: 'The premises compare two things on a shared dimension. The conclusion states which is greater, lesser, more likely, or more effective. Example: method A reduces errors by 30%; method B reduces errors by 10%. Conclusion: method A is more effective at reducing errors than method B.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Normative Conclusion', text: 'The premises describe a problem or a set of values, and the conclusion prescribes an action. Often signaled by "should," "ought to," or "must." Example: the current policy harms vulnerable populations and violates the agency\'s stated mission. Conclusion: the policy should be revised.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'The Core Principle' },
    { type: 'paragraph', text: 'The single most important strategy for Fill in the Blank is this:' },
    { type: 'callout', variant: 'summary', title: 'Read Everything Before the Blank as Premises', text: 'Treat every statement before the blank as evidence. Your job is to determine what conclusion those premises collectively support. Do not look at the answer choices until you have formed a clear prediction. The prediction does not need to be perfect, but it must capture the direction and scope of the argument.' },

    { type: 'paragraph', text: 'This principle works because the overwhelming majority of Fill in the Blank questions place the blank at the end of the stimulus in the conclusion position. Even in the rare premise-blank variant, the principle adapts easily: read the stated conclusion and the partial evidence, then determine what additional premise would complete the reasoning.' },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: 'Let\'s apply the core principle to a full question.' },

    { type: 'question-card',
      id: 'WE-15-1-001',
      questionType: 'Fill in the Blank',
      difficulty: 'medium',
      stimulus: 'Editorial: Many cities have increased spending on bicycle infrastructure, citing studies that link cycling to reduced traffic congestion. However, these studies were conducted in cities with mild climates where cycling is practical year-round. In cities with harsh winters, cycling rates drop to nearly zero for several months each year, and traffic congestion during those months remains unchanged. Therefore, in cities with harsh winters, increased spending on bicycle infrastructure is unlikely to _______.',
      question: 'Which one of the following most logically completes the argument?',
      options: [
        '(A) improve the health of residents who commute by bicycle',
        '(B) be supported by a majority of the city\'s residents',
        '(C) significantly reduce traffic congestion throughout the year (Correct)',
        '(D) lead to an increase in the number of residents who own bicycles',
        '(E) cost less than comparable investments in public transit',
      ],
    },

    { type: 'h3', text: 'Walkthrough' },
    { type: 'process', title: 'Applying the Core Principle', steps: [
      '**Classify the blank:** The blank follows "Therefore" and appears at the end of the stimulus. This is a conclusion blank.',
      '**Read everything before the blank as premises:** (1) Cities cite studies linking cycling to reduced congestion. (2) Those studies used mild-climate cities. (3) In harsh-winter cities, cycling drops to near zero for months. (4) Congestion is unchanged during those months.',
      '**Synthesize:** The premises show that the evidence for cycling reducing congestion does not apply to harsh-winter cities because cycling is seasonal there. The conclusion should say that bike infrastructure will not achieve the claimed benefit (congestion reduction) in those cities.',
      '**Prephrase:** "Spending on bicycle infrastructure in harsh-winter cities is unlikely to reduce traffic congestion year-round."',
      '**Match:** Choice (C) — "significantly reduce traffic congestion throughout the year" — matches the prephrase precisely. "Throughout the year" captures the seasonal limitation that is central to the argument.',
    ]},

    { type: 'h3', text: 'Why the Other Answers Fail' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) improve the health of residents who commute by bicycle', text: 'The argument is about congestion, not health. Health benefits are never discussed in the premises. This is out of scope.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(B) be supported by a majority of the city\'s residents', text: 'Public opinion is never mentioned. The argument concerns whether the infrastructure achieves its stated goal, not whether people support it.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(C) significantly reduce traffic congestion throughout the year', text: 'Matches the prephrase. The premises establish that cycling\'s congestion benefit is seasonal, so year-round reduction is unlikely.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) lead to an increase in the number of residents who own bicycles', text: 'Bicycle ownership is not discussed. The argument is about the effect on congestion, not adoption rates.', badge: 'Out of Scope', badgeColor: 'red' },
      { title: '(E) cost less than comparable investments in public transit', text: 'Cost comparisons are entirely outside the scope of the argument. The premises say nothing about spending efficiency.', badge: 'Out of Scope', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: 'Fill in the Blank is a Main Conclusion question with the conclusion removed. Classify the blank (conclusion or premise), read everything else as the opposite role, synthesize a prediction, and match it to the answer choices. The correct answer will always be a modest, well-supported statement that stays within the scope of the premises.' },
  ]
};
