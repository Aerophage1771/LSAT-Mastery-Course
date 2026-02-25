import { Lesson } from '../../types';

export const Lesson5_Drill_PointOfAgreement_SharedAssumption: Lesson = {
  id: "20-5",
  title: "Practice Drill: Point of Agreement (Shared Assumption) (PT-127-S-2-Q-2)",
  content: [
    { type: 'paragraph', text: 'This drill focuses on the "Point of Agreement" question type. These questions challenge you to look past the obvious surface disagreement to find a deeper, unstated assumption that both speakers must hold for their respective arguments to make sense.' },
    { type: 'callout', title: 'Core Concept: Shared Assumption Agreement', variant: 'tip', text: 'Even when two speakers propose opposite solutions, their arguments often rest on the same foundational model of how the world works. The shared assumption is the unstated belief that ENABLES their disagreement. Without it, their arguments wouldn\'t be on the same topic at all. When you find what both speakers take for granted, you\'ve found the point of agreement.' },
    { type: 'hr' },
    { type: 'question-card', id: '20-5-drill', questionType: 'Point at Issue', difficulty: 'medium',
      stimulus: 'Denise: Crime will be reduced only when punishment is certain and is sufficiently severe to give anyone considering committing a crime reason to decide against doing so.\nReshmi: No, crime will be most effectively reduced if educational opportunities are made readily available to everyone, so that those who once viewed criminal activity as the only means of securing a comfortable lifestyle will choose a different path.',
      question: 'Their dialogue provides the most support for the claim that Denise and Reshmi agree that',
      options: [
        '(A) people are capable of choosing whether or not to commit crimes (Correct)',
        '(B) crime is the most important issue facing modern society',
        '(C) reducing crime requires fair and consistent responses to criminal behavior',
        '(D) crimes are committed in response to economic need',
        '(E) reducing crime requires focusing on assured punishments'
      ]
    },
    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Break down each speaker\'s argument to its core logic. Pay special attention to the *mechanism* each speaker relies on.' },
    {
      type: 'breakdown',
      labels: { title: 'Speaker', text: 'Argument' },
      items: [
        {
          title: 'Denise',
          text: '*   **Conclusion:** Crime reduction requires certain and severe punishment.\n*   **Mechanism:** This punishment provides a "reason to **decide against** doing so." Her model is based on deterrence influencing a person\'s decision.'
        },
        {
          title: 'Reshmi',
          text: '*   **Conclusion:** Crime reduction is best achieved through educational opportunities.\n*   **Mechanism:** Education gives people an alternative, allowing them to "**choose a different path**." Her model is based on providing better options for a person to choose from.'
        }
      ]
    },
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'paragraph', text: 'While the speakers propose opposite solutions (punishment vs. opportunity), their solutions operate on the same underlying model of human behavior.' },
    { type: 'list', items: [
      '**Motto:** "Different methods, same model of the mind."',
      '**Blueprint:**\n*   Speaker 1 proposes changing the *costs* of a choice (making crime more painful).\n*   Speaker 2 proposes changing the *options* available for a choice (making non-crime more attractive).\n*   Both arguments are built on the foundational, unstated assumption that potential criminals are agents who make choices based on reasons and options.'
    ]},
    { type: 'h4', text: 'Step 3: Evaluation' },
    { type: 'paragraph', text: 'Apply the "Truth Test" for an **AGREE** question. The correct answer must be a statement that both speakers would affirm is true.' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A)',
          text: '*   **Denise:** **True.** Her entire argument hinges on the idea that people *decide* whether to commit a crime based on the potential punishment.\n*   **Reshmi:** **True.** Her entire argument hinges on the idea that people *choose* a path and will choose a better one if it\'s available.\n*   *Result:* **Correct.** This is the shared assumption upon which both of their arguments are built.',
          badge: 'Correct',
          badgeColor: 'green'
        },
        {
          title: '(B)',
          text: '*   **Denise:** Unknown. She discusses how to reduce crime, not its relative importance. This is a **Scope Trap**.\n*   **Reshmi:** Unknown.\n*   *Result:* Incorrect.'
        },
        {
          title: '(C)',
          text: '*   **Denise:** Might agree with "consistent" (certain), but "fair" is not mentioned.\n*   **Reshmi:** Unknown. Her focus is on preventing crime, not responding to it. This is a **Silence Trap**.\n*   *Result:* Incorrect.'
        },
        {
          title: '(D)',
          text: '*   **Denise:** Unknown. Her argument is about deterrence and applies to any motivation. This is a **Silence Trap**.\n*   **Reshmi:** True. She implies this by mentioning "securing a comfortable lifestyle."\n*   *Result:* Incorrect. Only one speaker is committed to this view.'
        },
        {
          title: '(E)',
          text: '*   **Denise:** True. This is her central claim.\n*   **Reshmi:** False. She explicitly disagrees ("No...") and proposes an alternative.\n*   *Result:* Incorrect. This is the main point of **disagreement**.'
        }
      ]
    },
    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'In "Point of Agreement" questions, don\'t get distracted by the obvious conflict. The correct answer is often an underlying assumption that both speakers must accept for their arguments to be coherent. When two speakers propose different ways to influence behavior, they almost always agree on the more fundamental point that the behavior is the result of a choice that can be influenced.' }
  ]
};
