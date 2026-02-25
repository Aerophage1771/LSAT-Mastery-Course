import { Lesson } from '../../types';

export const Lesson9_Drill_FlawedLogicExcept: Lesson = {
  id: "19-9",
  title: "Drill: Flawed Logic in \"EXCEPT\" Questions (PT-124-S-3-Q-22)",
  content: [
    { type: 'h3', text: 'Practice Drill: Explain EXCEPT' },
    { type: 'paragraph', text: 'An "Explain EXCEPT" question flips the usual task: instead of finding the one answer that resolves the paradox, you must find the four that *do* resolve it and eliminate them. The correct answer is the one that fails to explain the discrepancy. The hardest EXCEPT questions feature a correct answer that sounds topically relevant but is logically irrelevant to the specific conflict presented.' },
    { type: 'process', title: 'Systematic EXCEPT Approach', steps: [
      'Identify the two conflicting facts and state the paradox in your own words.',
      'For each answer choice, ask: "Does this explain how both facts can be true at the same time?"',
      'If yes, the choice resolves the paradox\u2014eliminate it. If no, the choice leaves the conflict intact\u2014this is your answer.',
      'Double-check: the correct answer may sound plausible or on-topic but fail to bridge the specific gap between the two facts.'
    ]},
    { type: 'hr' },

    { type: 'question-card',
      id: '19-9-drill',
      questionType: 'Paradox / Explain',
      difficulty: 'hard',
      stimulus: 'A recent survey indicates that the average number of books read annually per capita has declined in each of the last three years. However, it also found that most bookstores reported increased profits during the same period.',
      question: 'Each of the following, if true, helps to resolve the survey\'s apparently paradoxical results EXCEPT:',
      options: [
        '(A) Recent cutbacks in government spending have forced public libraries to purchase fewer popular contemporary novels.',
        '(B) Due to the installation of sophisticated new antitheft equipment, the recent increase in shoplifting that has hit most retail businesses has left bookstores largely unaffected. (Correct)',
        '(C) Over the past few years many bookstores have capitalized on the lucrative coffee industry by installing coffee bars.',
        '(D) Bookstore owners reported a general shift away from the sale of inexpensive paperback novels and toward the sale of lucrative hardback books.',
        '(E) Citing a lack of free time, many survey respondents indicated that they had canceled magazine subscriptions in favor of purchasing individual issues at bookstores when time permits.'
      ]
    },
    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },
    { type: 'h3', text: 'Analysis & Explanation' },
    { type: 'h4', text: 'Step 1: Deconstruction' },
    { type: 'paragraph', text: 'Define the core conflict. The two facts move in opposite directions.' },
    { type: 'list', items: [
      '**Fact 1:** People are reading *fewer books* per capita\u2014the core product of bookstores is in decline.',
      '**Fact 2:** Bookstore *profits are increasing* despite that decline.',
      '**The Conflict:** How can bookstores earn more money when demand for their primary product is falling? Four answers will explain this; one will not.'
    ]},
    { type: 'h4', text: 'Step 2: Abstraction' },
    { type: 'callout', title: 'EXCEPT Blueprint', variant: 'tip', text: 'A valid explanation must show how profits can *increase* despite falling book sales\u2014through new revenue streams, higher margins on remaining sales, or redirected consumer spending. An answer that merely explains why profits did not *decrease further* (loss prevention) does not explain why they *went up*. That distinction is the trap.' },
    { type: 'h4', text: 'Step 3: Evaluation' },
    { type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: '(A) Library cutbacks forced libraries to buy fewer popular novels.', text: 'Resolves the paradox. If libraries stock fewer new novels, readers who want those titles must *buy* them from bookstores. Book purchases rise even as overall reading falls, boosting bookstore revenue. **Eliminate.**', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(B) New antitheft equipment shielded bookstores from rising shoplifting.', text: 'Does NOT resolve the paradox. This explains why bookstore profits did not *decrease* due to shoplifting\u2014it is loss prevention, not profit growth. It leaves the core conflict untouched: reading is down, yet profits are *up*. Avoiding a new loss is not the same as generating a new gain. **This is the correct EXCEPT answer.**', badge: 'Correct', badgeColor: 'green' },
        { title: '(C) Many bookstores installed lucrative coffee bars.', text: 'Resolves the paradox. Coffee bars introduce a high-margin, non-book revenue stream. Profits can rise from coffee sales even if book sales are flat or declining. **Eliminate.**', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(D) Sales shifted from cheap paperbacks to lucrative hardbacks.', text: 'Resolves the paradox. Fewer units sold but higher profit per transaction. Revenue rises even as volume falls. **Eliminate.**', badge: 'Incorrect', badgeColor: 'red' },
        { title: '(E) Consumers canceled magazine subscriptions, buying individual issues at bookstores.', text: 'Resolves the paradox. Magazine sales introduce non-book revenue, increasing store profits while per-capita book reading declines. **Eliminate.**', badge: 'Incorrect', badgeColor: 'red' }
      ]
    },
    { type: 'hr' },
    { type: 'callout', title: 'Key Takeaway', variant: 'summary', text: 'In difficult EXCEPT paradox questions, the correct answer often explains why a business *avoided a loss* rather than how it *achieved a gain*. The paradox here is about a surprising *increase* in profits. An explanation for why profits didn\'t *decrease* (avoiding shoplifting losses) addresses a different, hypothetical problem\u2014not the actual conflict in the stimulus. Always match the direction of the explanation to the direction of the paradox.' }
  ]
};
