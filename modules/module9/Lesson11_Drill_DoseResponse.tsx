import { Lesson } from '../../types';

export const Lesson11_Drill_DoseResponse: Lesson = {
  id: "9-11",
  title: "Drill: The Dose-Response Pattern (PT-120-S-1-Q-26)",
  content: [
    { type: 'h3', text: 'The Dose-Response Pattern' },
    { type: 'paragraph', text: 'A dose-response relationship means that **more of the cause produces more of the effect**. When an argument claims A causes B based on a single end-of-study snapshot, the evidence is a static correlation — easily dismissed as coincidence or a product of a third variable. The dose-response strengthener replaces this snapshot with a dynamic, step-by-step correlation: as A increases, B increases in lockstep. This pattern is far harder to explain away and provides powerful support for causation.' },
    { type: 'callout', variant: 'tip', title: 'Snapshot vs. Trajectory', text: 'A snapshot says "the highest group in A also had the highest B." A trajectory says "as A improved over time, B improved in parallel." The trajectory is stronger because it tracks the same individuals through a process, making coincidence much less likely. Look for language like "over the course of," "as X increased, Y increased," or "greater improvement in X corresponded to greater improvement in Y."' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-120-S-1-Q-26', questionType: 'Strengthen', difficulty: 'hard', stimulus: 'Researchers gave 100 first-graders after-school lessons in handwriting. They found that those whose composition skills had improved the most had learned to write letters the most automatically. This suggests that producing characters more automatically frees up mental resources for other activities.', question: 'Which one of the following, if true, most strengthens the argument?', options: [
      '(A) Among the first-graders who received the after-school lessons in handwriting, those who practiced the most learned to write letters the most automatically.',
      '(B) The first-graders who wrote letters the most automatically before receiving the after-school lessons in handwriting showed the greatest improvement in their composition skills over the course of the lessons.',
      '(C) Over the course of the lessons, the first-graders who showed greater improvement in their ability to write letters automatically also generally showed greater improvement in their composition skills. (Correct)',
      '(D) Before receiving the after-school lessons in handwriting, the 100 first-graders who received the lessons were representative of first-graders more generally, with respect to their skills in both handwriting and composition.',
      '(E) Among the first-graders who received the lessons in handwriting, those who started out with strong composition skills showed substantial improvement in how automatically they could write letters.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"They found that those whose composition skills had improved the most had learned to write letters the most automatically."', text: 'Evidence: a static, end-of-study correlation — the top improvers in composition were also the top improvers in automaticity.' },
      { title: '"This suggests that producing characters more automatically frees up mental resources for other activities."', text: 'Conclusion: a causal mechanism — automaticity in handwriting causes improved composition by freeing cognitive bandwidth.' }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'The evidence is a snapshot comparing final outcomes. It does not show that the improvements happened together over time. A third factor (general intelligence, motivation, parental involvement) could independently produce both outcomes. Reverse causation is also possible: strong composition skills might make handwriting practice more engaging, boosting automaticity.' },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthen' },
    { type: 'paragraph', text: 'Replace the static snapshot with a dynamic dose-response pattern. Show that as automaticity improved step by step during the course, composition improved in parallel. This continuous co-variation is much harder to attribute to a third factor or reverse causation.' },

    { type: 'h4', text: 'Step 4: Evaluate Every Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Those who practiced the most learned to write most automatically.', text: 'This links practice to automaticity but says nothing about composition — the outcome the conclusion is about.', badge: 'Irrelevant Link', badgeColor: 'red' },
      { title: '(B) Those already automatic before lessons showed the greatest composition improvement.', text: 'This suggests pre-existing automaticity predicted composition gains, which could mean the lessons themselves were irrelevant — a confound, not support.', badge: 'Reverse Causality', badgeColor: 'red' },
      { title: '(C) Greater improvement in automaticity corresponded to greater improvement in composition over the course of the lessons.', text: 'This is the dose-response strengthener. It tracks the process, not just the endpoint. As automaticity increased incrementally, composition increased in lockstep — directly supporting the causal mechanism.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) The 100 students were representative of first-graders generally.', text: 'Representativeness matters for generalizing results to other populations (external validity) but does not strengthen the internal causal claim for these 100 students.', badge: 'External Validity', badgeColor: 'red' },
      { title: '(E) Those with strong initial composition improved most in automaticity.', text: 'This points toward reverse causation — strong composers became more automatic, not the other way around.', badge: 'Reverse Causality', badgeColor: 'red' }
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'A static correlation (the top group in X was also the top group in Y) is weak evidence for causation. The dose-response pattern upgrades it by showing that the two variables move together continuously: a little more X yields a little more Y, and a lot more X yields a lot more Y. This step-by-step co-variation is the hallmark of a genuine causal relationship and one of the strongest forms of strengthening available.' }
  ]
};
