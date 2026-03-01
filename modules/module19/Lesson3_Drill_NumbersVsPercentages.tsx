import { Lesson } from '../../types';

export const Lesson3_Drill_NumbersVsPercentages: Lesson = {
  id: '19-3',
  title: 'Drill: Numbers vs. Percentages',
  content: [
    { type: 'h2', text: 'Numbers vs. Percentages Paradox' },
    { type: 'paragraph', text: 'One of the most common Paradox patterns on the LSAT exploits the gap between percentages and absolute numbers. A percentage can go up while the absolute number goes down — or vice versa — because the size of the underlying group (the denominator) changed. When you see a stimulus mixing rates with raw counts, immediately ask: "Did the group size change?"' },
    { type: 'h3', text: 'How It Works' },
    { type: 'list', items: [
      '**Percentage up, number down:** The rate increased but the total pool shrank, so fewer cases overall.',
      '**Percentage down, number up:** The rate decreased but the total pool grew so much that more cases occurred despite the lower rate.',
      '**Subgroup vs. whole group:** A statistic for a subgroup differs from the same statistic for the total population because the subgroup\'s composition skews the average (Simpson\'s Paradox).'
    ]},
    { type: 'h3', text: 'Recognition Cues' },
    { type: 'paragraph', text: 'Watch for stimuli that juxtapose "the proportion of..." with "the total number of..." or that compare a specific subgroup to the overall population. The tension almost always hinges on the denominator.' },
    { type: 'table', headers: ['Stimulus Language', 'What to Suspect'], rows: [
      ['"the percentage increased"', 'The raw number may have decreased if the denominator shrank'],
      ['"the number increased"', 'The percentage may have decreased if the denominator grew faster'],
      ['"among full-time workers..." vs "among all workers..."', 'The excluded subgroup is skewing the overall average']
    ]},
    { type: 'hr' },
    { type: 'h3', text: 'Practice Problem' },
    { type: 'question-card', id: 'PT-107-S-3-Q-21', questionType: 'Paradox / Explain', difficulty: 'hard',
      stimulus: 'A study of the difference in earnings between men and women in the country of Naota found that the average annual earnings of women who are employed full time is 80 percent of the average annual earnings of men who are employed full time. However, other research consistently shows that, in Naota, the average annual earnings of all employed women is 65 percent of the average annual earnings of all employed men.',
      question: 'Which one of the following, if also established by research, most helps explain the apparent discrepancy between the research results described above?',
      options: [
        '(A) In Naota, the difference between the average annual earnings of all female workers and the average annual earnings of all male workers has been gradually increasing over the past 30 years.',
        '(B) In Naota, the average annual earnings of women who work full time in exactly the same occupations and under exactly the same conditions as men is almost the same as the men\'s average annual earnings.',
        '(C) In Naota, a growing proportion of female workers hold full-time managerial, supervisory, or professional positions, and such positions typically pay more than other types of positions pay.',
        '(D) In Naota, a larger proportion of female workers than male workers are part-time workers, and part-time workers typically earn less than full-time workers earn. (Correct)',
        '(E) In ten other countries where the proportion of women in the work force is similar to that of Naota, the average annual earnings of women who work full time ranges from a low of 50 percent to a high of 90 percent of the average annual earnings of men who work full time.'
      ] },
    { type: 'hr' },
    { type: 'h3', text: 'Full Analysis' },
    { type: 'h4', text: 'Step 1: Identify Both Facts' },
    { type: 'list', items: [
      '**Fact 1 (Subgroup):** Among full-time workers only, women earn 80% of what men earn.',
      '**Fact 2 (Whole Group):** Among ALL employed workers, women earn only 65% of what men earn.',
      '**The Tension:** The wage gap widens dramatically (80% to 65%) when we expand from full-time workers to all workers. The only difference is the inclusion of part-time workers.'
    ]},
    { type: 'h4', text: 'Step 2: Prephrase' },
    { type: 'paragraph', text: 'Something about part-time work must affect women\'s average more than men\'s. Either women are more likely to work part-time, or women\'s part-time earnings are disproportionately low, or both.' },
    { type: 'h4', text: 'Step 3: Evaluate Each Choice' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Earnings gap increasing over 30 years.', text: 'Historical trend — does not explain why the full-time and all-worker statistics differ right now.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Women in same occupation earn nearly the same.', text: 'Narrows the subgroup further. Irrelevant to the full-time vs. all-worker discrepancy.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) More women entering high-paying positions.', text: 'Deepens the paradox — better jobs should shrink the gap, not widen it.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Women more likely to work part-time; part-time pays less.', text: 'Resolves the paradox. Part-time workers\' lower earnings pull the female average down far more than the male average, explaining the drop from 80% to 65%.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Other countries show 50-90% range.', text: 'Out of scope — other countries cannot explain Naota\'s internal discrepancy.', badge: 'Incorrect', badgeColor: 'red' }
    ]},
    { type: 'hr' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: 'When a stimulus compares a subgroup statistic to a whole-group statistic, the resolution lies in the excluded portion. Ask: "What is different about the people in the whole group but NOT in the subgroup?" Here, the answer was part-time workers — their lower pay and disproportionate representation among women explained the widening gap.' }
  ]
};
