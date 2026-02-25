import { Lesson } from '../../types';

export const Lesson7_Drill_TheDefender: Lesson = {
  id: "9-7",
  title: "Drill: The Defender (PT-127-S-2-Q-14)",
  content: [
    { type: 'h3', text: 'The Defender Pattern' },
    { type: 'paragraph', text: 'Instead of piling on more direct evidence, a "Defender" answer strengthens an argument by **ruling out an alternative explanation**. The author claims A causes B; the Defender shows that some rival explanation C does not account for the data, leaving the author\'s story as the best one standing. This is especially common when a causal argument rests on a correlation — the Defender eliminates reverse causation, coincidence, or a confounding variable.' },
    { type: 'callout', variant: 'tip', title: 'When to Expect the Defender', text: 'Look for the Defender whenever the argument proposes a causal explanation for a correlation. If the conclusion says "Trait X leads to Behavior Y," the correct answer often shows that even when Behavior Y is absent, Trait X still predicts the attempt — or that the rival direction (Y causes X) is implausible.' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-127-S-2-Q-14', questionType: 'Strengthen', difficulty: 'hard', stimulus: 'Psychologist: We asked 100 entrepreneurs and 100 business managers to answer various questions and rate how confident they were that their responses were correct. While members of each group were overconfident, in general the entrepreneurs were much more so than the business managers. This indicates that people who are especially overconfident are more likely to attempt to start a business in spite of the enormous odds against success than people who are less confident.', question: 'Which one of the following, if true, lends the most support to the psychologist\'s conclusion?', options: [
      '(A) The questions asked of the entrepreneurs and business managers included personal, political, and business questions.',
      '(B) At least some of the entrepreneurs surveyed had accurately determined before attempting to start their businesses what the odds were against their attempts being successful.',
      '(C) Another survey showed that degree of confidence was highly correlated with success in business.',
      '(D) The business managers who were most overconfident were found to have attempted to start businesses in the past. (Correct)',
      '(E) How confident each person surveyed was that his or her answers to the questions asked were correct corresponded closely to that person\'s confidence in his or her business acumen.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"We asked 100 entrepreneurs and 100 business managers to answer various questions and rate how confident they were… the entrepreneurs were much more so than the business managers."', text: 'Evidence from a study establishing a correlation: entrepreneurs display higher overconfidence than business managers.' },
      { title: '"This indicates that people who are especially overconfident are more likely to attempt to start a business… than people who are less confident."', text: 'The conclusion is a causal claim — the personality trait of overconfidence is what drives people to attempt entrepreneurship.' }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'The argument observes that entrepreneurs are more overconfident and concludes that overconfidence causes the attempt. But the study only looks at people already in their roles. **Reverse causation** is the chief rival: perhaps surviving as an entrepreneur makes people overconfident, not the other way around. A secondary rival is a **common cause** — maybe a third trait (risk tolerance, ambition) independently produces both overconfidence and entrepreneurial attempts.' },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthen' },
    { type: 'paragraph', text: 'To defend the author\'s causal arrow (Overconfidence → Entrepreneurship), you need a fact that isolates overconfidence from the act of being an entrepreneur. Ideally, show that the trait predicts the behavior even in people who are not currently entrepreneurs.' },

    { type: 'h4', text: 'Step 4: Evaluate Every Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The questions included personal, political, and business questions.', text: 'This speaks to study design quality, not to the causal direction. It does not distinguish whether overconfidence causes entrepreneurship or vice versa.', badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: '(B) Some entrepreneurs had accurately determined the odds against success before attempting.', text: 'If they knew the odds were bad yet tried anyway, their decision may reflect calculated risk rather than overconfidence — this undermines the conclusion.', badge: 'Weakener', badgeColor: 'red' },
      { title: '(C) Degree of confidence was highly correlated with success in business.', text: 'The conclusion is about attempting a business, not succeeding. Different scope.', badge: 'Scope Mismatch', badgeColor: 'red' },
      { title: '(D) The most overconfident business managers had attempted to start businesses in the past.', text: 'This is the Defender. Even within the control group (managers), overconfidence tracks with entrepreneurial attempts. This isolates the trait from the current role and confirms the causal arrow runs from overconfidence to the attempt, not from the role back to overconfidence.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Confidence in answers corresponded to confidence in business acumen.', text: 'This validates the study\'s measurement instrument but does nothing to bridge the gap between correlation and causation.', badge: 'Premise Booster', badgeColor: 'red' }
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'The Defender strengthens by elimination. When an argument asserts that a trait causes a behavior based on a group correlation, the strongest support comes from showing the same trait-behavior link in a different group — one where the rival explanation cannot apply. If overconfident managers also attempted entrepreneurship, the "being an entrepreneur makes you overconfident" story collapses, and the author\'s causal claim stands stronger.' }
  ]
};
