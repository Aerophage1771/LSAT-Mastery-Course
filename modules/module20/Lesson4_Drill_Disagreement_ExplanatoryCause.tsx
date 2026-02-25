import { Lesson } from '../../types';

export const Lesson4_Drill_Disagreement_ExplanatoryCause: Lesson = {
  id: "20-4",
  title: "Practice Drill: Disagreement (Explanatory Cause) (PT-104-S-1-Q-1)",
  content: [
    { type: 'paragraph', text: 'This drill focuses on a common and challenging type of disagreement: the **Explanatory Cause Dispute**. In these arguments, both speakers accept the same observed facts but offer competing explanations for *why* those facts are the way they are. The surface-level data isn\'t contested; what\'s contested is the causal story behind it.' },
    { type: 'callout', title: 'Core Concept: Explanatory Cause Disagreement', variant: 'tip', text: 'When two speakers agree on WHAT is happening but disagree about WHY it is happening, you are looking at an explanatory cause dispute. Speaker A says "the cause is X," Speaker B says "no, the cause is Y." The correct answer will frame the conflict as a dispute over the *reason* for the agreed-upon phenomenon.' },
    { type: 'hr' },
    { type: 'question-card', id: '20-4-drill', questionType: 'Point at Issue', difficulty: 'medium',
      stimulus: 'Powell: Private waste-removal companies spend 60 percent of what public waste-removal companies spend per customer, yet give their customers at least as good service. Private waste-removal companies, therefore, work more efficiently.\nFreeman: Your conclusion is unwarranted. Different customers have different waste-removal needs. Since private companies, unlike their public counterparts, can select which customers to serve, they choose to exclude the potential customers whom they judge to be the most costly to serve.',
      question: 'The issue in dispute between Powell and Freeman is the',
      options: [
        '(A) accuracy of the figure of 60 percent with regard to the difference in service costs between private and public waste-removal companies',
        '(B) reason private waste-removal companies are able to offer service comparable to that offered by public ones while spending less money per customer (Correct)',
        '(C) ability of private versus public waste-removal companies to select which customers to serve',
        '(D) likelihood of the local authorities\' turning public waste-removal companies into private ones so that the companies can operate with lower service costs than they now incur',
        '(E) relationship between the needs of a waste-removal customer and the amount of money it takes to serve that customer'
      ]
    },
    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Break down each speaker\'s argument into its core components. Notice they share the same factual premise but diverge on the explanation.' },
    {
      type: 'breakdown',
      labels: { title: 'Speaker', text: 'Argument' },
      items: [
        {
          title: 'Powell',
          text: '*   **Premise (Observation):** Private companies spend less for comparable service.\n*   **Conclusion (Explanation):** Therefore, the cause is that they are more *efficient*.'
        },
        {
          title: 'Freeman',
          text: '*   **Rejection:** Powell\'s conclusion is "unwarranted."\n*   **Premise:** Private companies can select their customers.\n*   **Conclusion (Alternative Explanation):** The real cause is that they "cherry-pick" the easy, less costly customers.'
        }
      ]
    },
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'paragraph', text: 'The core of the disagreement is not *what* is happening, but *why* it is happening.' },
    { type: 'list', items: [
      '**Motto:** "We agree on the facts, but we disagree on the cause."',
      '**Blueprint:**\n*   Speaker 1 observes a correlation (Lower Cost + Good Service) and concludes a cause (Internal Efficiency).\n*   Speaker 2 accepts the correlation but offers a different, external cause (Customer Selection) that undermines the first speaker\'s conclusion. The dispute is over which of these two explanations is correct.'
    ]},
    { type: 'h4', text: 'Step 3: Evaluation' },
    { type: 'paragraph', text: 'Apply the "Truth Test" to each answer choice. What is the specific issue where one speaker would say "This is the reason" and the other would say "No, that\'s not the reason"?' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A)',
          text: '*   **Powell:** Accepts the 60% figure as true.\n*   **Freeman:** Does not challenge this figure. He accepts the premise and focuses on explaining it. This is a **Silence Trap**.\n*   *Result:* Incorrect.'
        },
        {
          title: '(B)',
          text: '*   **Powell:** The reason is that they "work more efficiently."\n*   **Freeman:** The reason is that they "exclude the potential customers whom they judge to be the most costly to serve." He explicitly rejects Powell\'s reason ("Your conclusion is unwarranted").\n*   *Result:* **Correct.** This is the precise point of dispute -- the *explanation* for the observed facts.',
          badge: 'Correct',
          badgeColor: 'green'
        },
        {
          title: '(C)',
          text: '*   **Powell:** Unknown. He never mentions customer selection. This is a **Silence Trap**.\n*   **Freeman:** True. This is the central premise of his argument.\n*   *Result:* Incorrect.'
        },
        {
          title: '(D)',
          text: '*   **Powell:** Unknown/Silent. The argument is descriptive, not prescriptive.\n*   **Freeman:** Unknown/Silent.\n*   *Result:* Incorrect.'
        },
        {
          title: '(E)',
          text: '*   **Powell:** Unknown/Silent. He speaks only in averages.\n*   **Freeman:** True. He states that some customers have different needs and are more costly.\n*   *Result:* Incorrect. This is a **Silence Trap**.'
        }
      ]
    },
    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When one speaker provides an explanation for a set of facts, and the second speaker offers an alternative explanation, the point of disagreement is the *reason* for those facts. Freeman does not deny the data Powell presents; he reinterprets it, offering a different cause for the same effect. Your task is to identify the answer that frames the conflict as a dispute over that causal explanation.' }
  ]
};
