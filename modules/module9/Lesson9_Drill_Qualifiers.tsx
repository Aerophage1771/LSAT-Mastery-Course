import { Lesson } from '../../types';

export const Lesson9_Drill_Qualifiers: Lesson = {
  id: "9-9",
  title: "Drill: Strengthening Qualified Claims (PT-125-S-4-Q-20)",
  content: [
    { type: 'h3', text: 'Strengthening Qualified Claims' },
    { type: 'paragraph', text: 'Some arguments hinge on a narrow statistic that sounds impressive but could be misleading. Words like "most," "usually," "on the occasions when," and "more often" qualify the scope of the evidence. A savvy test-taker asks: *Could the statistic be technically true yet still fail to support the broad conclusion?* The correct strengthener validates the statistic by showing it was generated under fair conditions — not cherry-picked or gamed.' },
    { type: 'callout', variant: 'tip', title: 'The "Playing It Safe" Flaw', text: 'When someone boasts about accuracy "on the occasions when" they made a prediction, ask how often they actually made that prediction. A station that predicts rain only twice a year can easily be 100% accurate — but it has failed to warn viewers about dozens of other rainy days. The strengthener must show the predictor was not gaming the denominator.' },
    { type: 'hr' },

    { type: 'question-card', id: 'PT-125-S-4-Q-20', questionType: 'Strengthen', difficulty: 'hard', stimulus: 'TV meteorologist: Our station\'s weather forecasts are more useful and reliable than those of the most popular news station in the area. After all, the most important question for viewers in this area is whether it will rain, and on most of the occasions when we have forecast rain for the next day, we have been right. The same cannot be said for either of our competitors.', question: 'Which one of the following, if true, most strengthens the meteorologist\'s argument?', options: [
      '(A) The meteorologist\'s station forecast rain more often than did the most popular news station in the area. (Correct)',
      '(B) The less popular of the competing stations does not employ any full-time meteorologists.',
      '(C) The most popular news station in the area is popular because of its investigative news reports.',
      '(D) The meteorologist\'s station has a policy of not making weather forecasts more than three days in advance.',
      '(E) On most of the occasions when the meteorologist\'s station forecast that it would not rain, at least one of its competitors also forecast that it would not rain.'
    ]},

    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"Our station\'s weather forecasts are more useful and reliable than those of the most popular news station."', text: 'Conclusion — a broad comparative claim of overall superiority.' },
      { title: '"On most of the occasions when we have forecast rain for the next day, we have been right."', text: 'Evidence — a narrow accuracy rate conditional on having forecast rain. Notice the qualifier: "on the occasions when we have forecast rain."' },
      { title: '"The same cannot be said for either of our competitors."', text: 'Supplemental premise asserting competitors lack this accuracy.' }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: 'The evidence is narrow (accuracy when rain was predicted) but the conclusion is broad (overall reliability). The statistic could be gamed: if the station rarely predicts rain — only on obvious days — it can achieve high accuracy while missing most rainy days. The gap is between the conditional accuracy rate and the claim of general usefulness.' },

    { type: 'h4', text: 'Step 3: Prephrase the Strengthen' },
    { type: 'paragraph', text: 'Show the station is not "playing it safe." If it forecasts rain at least as often as (or more often than) competitors, its high accuracy cannot be dismissed as a product of cautious, infrequent predictions.' },

    { type: 'h4', text: 'Step 4: Evaluate Every Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The station forecast rain more often than the most popular news station.', text: 'This directly closes the gap. The station makes rain predictions frequently — more so than the competitor — so its high accuracy is genuine, not the product of rare, safe forecasts.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) The less popular competitor has no full-time meteorologists.', text: 'The argument\'s main comparison is against the most popular station, not the least popular. Wrong comparison target.', badge: 'Wrong Comparison', badgeColor: 'red' },
      { title: '(C) The most popular station is popular for investigative reporting.', text: 'Why a competitor is popular is irrelevant to the reliability of its weather forecasts.', badge: 'Irrelevant Reason', badgeColor: 'red' },
      { title: '(D) The station does not forecast more than three days out.', text: 'A shorter forecast horizon is prudent, but it does not address the specific flaw — how often rain was actually predicted.', badge: 'Irrelevant Policy', badgeColor: 'red' },
      { title: '(E) When the station predicted no rain, a competitor agreed.', text: 'Agreement on non-rain days is irrelevant. The argument concerns accuracy when rain is forecast. Both stations could be wrong together.', badge: 'Irrelevant Agreement', badgeColor: 'red' }
    ]},

    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'When an argument bases a broad conclusion on a narrow, qualified statistic, the chief vulnerability is that the statistic may be cherry-picked. To strengthen, show the statistic was earned under conditions that make it representative — typically by demonstrating that the sample was large, the predictions were frequent, or the measurement was not gamed. Here, showing the station predicted rain more often than its competitor validates the accuracy figure as a fair indicator of overall reliability.' }
  ]
};
