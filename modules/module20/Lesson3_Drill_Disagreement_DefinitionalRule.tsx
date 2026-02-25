import { Lesson } from '../../types';

export const Lesson3_Drill_Disagreement_DefinitionalRule: Lesson = {
  id: "20-3",
  title: "Practice Drill: Disagreement (Definitional Rule) (PT-122-S-2-Q-1)",
  content: [
    { type: 'h2', text: 'Definitional Rule Disagreement' },
    { type: 'paragraph', text: 'A Definitional Rule Disagreement occurs when one speaker lays down a categorical rule -- "Any X with property P is automatically bad" -- and the second speaker presents a counterexample that satisfies P yet is claimed to be good. The speakers do not dispute the facts; they dispute the **rule** used to evaluate those facts.' },
    { type: 'paragraph', text: 'This pattern appears whenever the dialogue hinges on whether a single characteristic is sufficient to determine quality, value, or classification. Recognizing the rule-versus-counterexample structure lets you cut straight to the correct answer.' },
    { type: 'hr' },
    { type: 'h3', text: 'Practice Question' },
    { type: 'question-card', questionType: 'Point at Issue', stimulus: '**Ilana:** Carver\'s stories are somber and pessimistic, which is a sure sign of inferior writing. I have never read a single story of his that ends happily.\n**Gustav:** Carver was one of the finest writers of the past 30 years. Granted, his stories are characterized by somberness and pessimism, but they are also wryly humorous, compassionate, and beautifully structured.', question: 'On the basis of their statements, Ilana and Gustav are committed to disagreeing over whether', options: [
      '(A) Carver\'s stories are truly compassionate',
      '(B) Carver\'s stories are pessimistic in their vision',
      '(C) stories that are characterized by somberness and pessimism can appropriately be called humorous',
      '(D) stories that are well written can be somber and pessimistic (Correct)',
      '(E) there are some characteristics of a story that are decisive in determining its aesthetic value'
    ]},
    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Map Each Speaker\'s Position' },
    {
      type: 'breakdown',
      labels: { title: 'Speaker', text: 'Argument' },
      items: [
        {
          title: 'Ilana',
          text: '*   **Premise:** Carver\'s stories are somber and pessimistic.\n*   **Rule:** Somberness and pessimism are a "sure sign of inferior writing."\n*   **Conclusion (Implied):** Carver\'s writing is inferior.'
        },
        {
          title: 'Gustav',
          text: '*   **Conclusion:** Carver was one of the "finest writers."\n*   **Concession:** "Granted, his stories are characterized by somberness and pessimism."\n*   **Counter-Premise:** The stories also have humor, compassion, and beautiful structure.'
        }
      ]
    },
    { type: 'h4', text: 'Step 2: Identify the Core Conflict' },
    { type: 'paragraph', text: 'Both speakers accept the same factual premise -- Carver\'s stories are somber and pessimistic. The conflict is over what that premise **means** for quality. Ilana treats it as dispositive proof of inferiority; Gustav treats it as one trait among many that does not preclude excellence.' },
    { type: 'h4', text: 'Step 3: Apply the Overlap Test' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title: '(A) Carver\'s stories are truly compassionate',
          text: '*   **Ilana:** Unknown -- she mentions only tone, not compassion.\n*   **Gustav:** YES.\n*   **Overlap Test:** FAILS (one speaker uncommitted).'
        },
        {
          title: '(B) Carver\'s stories are pessimistic in their vision',
          text: '*   **Ilana:** YES.\n*   **Gustav:** YES ("Granted...").\n*   **Overlap Test:** FAILS -- this is a point of **agreement**, not disagreement.'
        },
        {
          title: '(C) stories characterized by somberness and pessimism can be called humorous',
          text: '*   **Ilana:** Unknown -- she never discusses humor.\n*   **Gustav:** YES.\n*   **Overlap Test:** FAILS (one speaker uncommitted).'
        },
        {
          title: '(D) stories that are well written can be somber and pessimistic',
          text: '*   **Ilana:** **NO** -- her rule states that somberness is a "sure sign of inferior writing," so well-written and somber are mutually exclusive.\n*   **Gustav:** **YES** -- he calls Carver one of the "finest writers" while conceding somberness.\n*   **Overlap Test:** PASSES -- clear YES/NO split. **This is the answer.**'
        },
        {
          title: '(E) some characteristics are decisive in determining aesthetic value',
          text: '*   **Ilana:** YES -- she treats somberness as decisive.\n*   **Gustav:** Unknown -- he lists several positive traits but never explicitly denies that a single trait *could* be decisive.\n*   **Overlap Test:** FAILS (one speaker uncommitted).'
        }
      ]
    },
    { type: 'h4', text: 'Step 4: Verify Both Commit' },
    { type: 'paragraph', text: 'For choice (D), Ilana\'s commitment is anchored in her phrase "sure sign of inferior writing" -- she cannot accept that somber stories are well written. Gustav\'s commitment is anchored in "one of the finest writers" paired with "Granted, his stories are characterized by somberness." Both speakers have clear, text-supported positions. The answer is confirmed.' },
    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When one speaker establishes a categorical rule ("Any X is bad") and the second speaker concedes X but argues the subject is good, the point at issue is the validity of the rule itself. Apply the Overlap Test to the rule-level proposition -- can something be X and still be good? -- and you will find the correct answer.' }
  ]
};
