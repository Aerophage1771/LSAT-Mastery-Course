
import { Lesson } from '../../types';

export const Lesson3_Fallacies: Lesson = {
  id: "55-3",
  title: "Two Classic Conditional Reasoning Errors",
  content: [
    { type: 'h2', text: 'Lesson 3: Two Classic Conditional Reasoning Errors' },
    { type: 'paragraph', text: '**Objective:** To identify and understand the two most common errors in conditional reasoning\u2014the **Mistaken Reversal** (Affirming the Consequent) and the **Mistaken Negation** (Denying the Antecedent). These two fallacies account for the majority of conditional reasoning errors on the LSAT, appearing in Flaw, Parallel Flaw, Sufficient Assumption, and Necessary Assumption questions.' },
    { type: 'paragraph', text: 'In Lessons 1 and 2, we established the valid architecture of a conditional statement (A \u2192 B) and its only valid inference, the contrapositive (NOT B \u2192 NOT A). Now we examine the two invalid moves\u2014arguments that appear plausible on the surface but are structurally unsound. Your goal is to recognize these patterns instantly, even when they are buried in dense LSAT language.' },

    { type: 'table', headers: ['Move', 'Formula', 'Validity', 'Core Error'], rows: [
      ['Original', 'A \u2192 B', 'Given', 'N/A'],
      ['Contrapositive', 'NOT B \u2192 NOT A', 'VALID', 'N/A'],
      ['Mistaken Reversal', 'B \u2192 A', 'INVALID', 'Treats necessary as sufficient'],
      ['Mistaken Negation', 'NOT A \u2192 NOT B', 'INVALID', 'Treats absence of one cause as absence of all causes']
    ]},

    { type: 'hr' },

    { type: 'h3', text: '3.1 The Mistaken Reversal (Affirming the Consequent)' },
    { type: 'paragraph', text: 'The Mistaken Reversal is the single most common logical trap on the LSAT. It occurs when an argument observes that the necessary condition is present and concludes that the sufficient condition must therefore be present. In formal terms: the argument treats B \u2192 A as valid, when only A \u2192 B was established.' },

    { type: 'callout', title: 'The Real-World Analogy: The Wet Sidewalk', text: 'Imagine the rule: "If it rains, the sidewalk gets wet." (Rain \u2192 Wet)\n\n**Observation:** You look outside and see the sidewalk is wet.\n**Flawed Conclusion:** "Therefore, it must have rained."\n\n**Why it\'s wrong:** The sidewalk could be wet because of sprinklers, a spilled drink, or a fire hydrant. The presence of the necessary condition (wetness) does not prove that the specific sufficient condition (rain) caused it. There can be multiple sufficient conditions for the same necessary condition.' },

    { type: 'h4', text: 'The Invalid Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Wet-Sidewalk Example'], rows: [
      ['Rule (Given)', 'A \u2192 B', 'Rain \u2192 Wet Sidewalk'],
      ['Evidence', 'B is true', 'The sidewalk is wet'],
      ['Invalid Conclusion', 'Therefore, A must be true', 'Therefore, it rained'],
      ['Error', 'Necessary treated as sufficient', 'Wetness does not prove rain']
    ]},

    { type: 'paragraph', text: '**Why it fails:** A conditional A \u2192 B tells you only one thing: whenever A is present, B must follow. It says absolutely nothing about what happens when B is present on its own. B could exist because of A, or because of some entirely unrelated cause C. The rule only flows in one direction.' },

    { type: 'hr' },

    { type: 'h4', text: 'LSAT in Action: The Mistaken Reversal' },

    { type: 'question-card', id: 'PT-120-S-4-Q-17', questionType: 'Conditional Reasoning', difficulty: 'medium',
      stimulus: 'People who have never been asked to do more than they can easily do are people who never do all they can. Alex is someone who has clearly not done all that he is capable of doing, so obviously no one has ever pushed him to do more than what comes to him easily.',
      question: 'The flawed reasoning in which one of the following is most similar to the flawed reasoning in the argument above?',
      options: [
        '(A) Anybody who has a dog knows the true value of companionship, and Alicia has demonstrated that she knows the true value of companionship; thus we can safely conclude that Alicia has a dog. (Correct)',
        '(B) Anyone who discovers something new is someone who has examined all the possible solutions to a problem. Fran has surely never discovered something new. Therefore, Fran has never explored all the possible solutions to a problem.',
        '(C) Any person who does not face sufficient challenges is a person who does not accomplish everything he or she can. Jill is a person who accomplishes everything she can, so Jill is a person who faces sufficient challenges.',
        '(D) By definition, a polygon is any closed plane figure bounded by straight lines. That object pictured on the chalkboard is certainly a closed plane figure bounded by a large number of straight lines, so that object pictured on the chalkboard must be a polygon.',
        '(E) People who have never lost something that they cannot afford to lose will be lax about keeping their property secure. Jon is lax about keeping property secure when it is something he can afford to lose, so Jon must never have lost anything.'
      ]
    },

    { type: 'h4', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Diagramming the Stimulus', steps: [
      '**Translate the Rule:** "People who have never been asked to do more... are people who never do all they can." \u2192 **NOT Asked \u2192 NOT Do All**',
      '**Translate the Evidence:** "Alex has clearly not done all that he is capable of doing." \u2192 **NOT Do All** (the necessary condition is observed)',
      '**Translate the Conclusion:** "No one has ever pushed him to do more." \u2192 **NOT Asked** (the sufficient condition is asserted)',
      '**Identify the Error:** The argument observes B (NOT Do All) and concludes A (NOT Asked). This is B \u2192 A, a Mistaken Reversal. Alex could be underperforming for many reasons\u2014boredom, fatigue, lack of motivation\u2014not just because he was never challenged.'
    ]},
    { type: 'paragraph', text: 'Now diagram each answer choice to find the one that commits the same structural error:' },

    { type: 'breakdown', labels: { title: 'Option', text: 'Explanation' }, items: [
      {
        title: '(A) Correct \u2014 Matches the Mistaken Reversal.',
        text: '**Rule:** Dog \u2192 Companionship\n**Evidence:** Companionship is present (necessary condition observed)\n**Conclusion:** Dog must be present (sufficient condition asserted)\n\nThis is identical to the stimulus: the argument sees B and concludes A. Alicia could know companionship from friends, family, or other relationships\u2014not only from having a dog.',
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(B) Incorrect \u2014 This commits a Mistaken Negation.',
        text: '**Rule:** Discover New \u2192 Examined All\n**Evidence:** NOT Discover New (sufficient condition is absent)\n**Conclusion:** NOT Examined All (necessary condition is absent)\n\nThis is NOT A \u2192 NOT B, a Mistaken Negation. The stimulus commits a Mistaken Reversal (B \u2192 A), so the flaw type doesn\'t match.',
        badge: 'Wrong Flaw Type',
        badgeColor: 'red'
      },
      {
        title: '(C) Incorrect \u2014 This is valid logic (Contrapositive).',
        text: '**Rule:** NOT Challenges \u2192 NOT Accomplish All\n**Evidence:** Accomplish All (negation of the necessary condition)\n**Conclusion:** Challenges (negation of the sufficient condition)\n\nThis correctly applies the contrapositive: NOT (NOT Accomplish All) \u2192 NOT (NOT Challenges), i.e., Accomplish All \u2192 Challenges. Valid reasoning cannot parallel a flaw.',
        badge: 'Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(D) Incorrect \u2014 This is valid logic (direct application).',
        text: '**Rule:** Closed & Straight Lines \u2192 Polygon\n**Evidence:** Closed & Straight Lines (sufficient condition is present)\n**Conclusion:** Polygon (necessary condition follows)\n\nThis is a valid application of A \u2192 B: A is true, so B is true. No flaw.',
        badge: 'Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(E) Incorrect \u2014 Mismatched terms.',
        text: '**Rule:** NOT Lost (unaffordable) \u2192 Lax Security\n**Evidence:** Lax Security (about affordable property\u2014different scope)\n**Conclusion:** NOT Lost (anything)\n\nWhile this attempts a reversal, the terms in the evidence don\'t match the terms in the rule. The rule is about things one "cannot afford to lose," but the evidence changes scope to things one "can afford to lose." The structural match to the stimulus is poor.',
        badge: 'Scope Mismatch',
        badgeColor: 'red'
      }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '3.2 The Mistaken Negation (Denying the Antecedent)' },
    { type: 'paragraph', text: 'The Mistaken Negation is the mirror image of the Mistaken Reversal. It occurs when an argument observes that the sufficient condition is absent and concludes that the necessary condition must therefore be absent. In formal terms: the argument treats NOT A \u2192 NOT B as valid, when only A \u2192 B was established.' },

    { type: 'callout', title: 'The Real-World Analogy: The Dry Sky', text: 'Same rule: "If it rains, the sidewalk gets wet." (Rain \u2192 Wet)\n\n**Observation:** You look outside and see it is NOT raining.\n**Flawed Conclusion:** "Therefore, the sidewalk is NOT wet."\n\n**Why it\'s wrong:** The sprinklers could be on. The absence of one specific sufficient condition (rain) does not guarantee the absence of the necessary condition (wetness). Other causes can independently produce the same result.' },

    { type: 'h4', text: 'The Invalid Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Dry-Sky Example'], rows: [
      ['Rule (Given)', 'A \u2192 B', 'Rain \u2192 Wet Sidewalk'],
      ['Evidence', 'A is false (NOT A)', 'It is not raining'],
      ['Invalid Conclusion', 'Therefore, B must be false (NOT B)', 'Therefore, the sidewalk is not wet'],
      ['Error', 'Absence of one cause treated as absence of all causes', 'No rain does not mean no wetness']
    ]},

    { type: 'paragraph', text: '**Why it fails:** A conditional A \u2192 B only establishes what happens when A is present. It says nothing about what happens when A is absent. When the sufficient condition is missing, the necessary condition might still be true because of some other independent cause. The absence of one trigger does not eliminate all possible triggers.' },

    { type: 'hr' },

    { type: 'h4', text: 'LSAT in Action: The Mistaken Negation' },

    { type: 'question-card', id: 'PT-106-S-3-Q-21', questionType: 'Conditional Reasoning', difficulty: 'medium',
      stimulus: 'If the law punishes littering, then the city has an obligation to provide trash cans. But the law does not punish littering, so the city has no such obligation.',
      question: 'Which one of the following exhibits a flawed pattern of reasoning most similar to that in the argument above?',
      options: [
        '(A) If today is a holiday, then the bakery will not be open. The bakery is not open for business. Thus today is a holiday.',
        '(B) Jenny will have lots of balloons at her birthday party. There are no balloons around yet, so today is not her birthday.',
        '(C) The new regulations will be successful only if most of the students adhere to them. Since most of the students will adhere to those regulations, the new regulations will be successful.',
        '(D) In the event that my flight had been late, I would have missed the committee meeting. Fortunately, my flight is on time. Therefore, I will make it to the meeting. (Correct)',
        '(E) When the law is enforced, some people are jailed. But no one is in jail, so clearly the law is not enforced.'
      ]
    },

    { type: 'h4', text: 'Step-by-Step Analysis' },
    { type: 'process', title: 'Diagramming the Stimulus', steps: [
      '**Translate the Rule:** "If the law punishes littering, then the city has an obligation to provide trash cans." \u2192 **Punish Littering \u2192 Obligation**',
      '**Translate the Evidence:** "The law does not punish littering." \u2192 **NOT Punish Littering** (the sufficient condition is absent)',
      '**Translate the Conclusion:** "The city has no such obligation." \u2192 **NOT Obligation** (the necessary condition is denied)',
      '**Identify the Error:** The argument observes NOT A and concludes NOT B. This is NOT A \u2192 NOT B, a Mistaken Negation. The city could have an obligation to provide trash cans for reasons entirely independent of littering laws (e.g., public health, accessibility).'
    ]},

    { type: 'breakdown', labels: { title: 'Option', text: 'Explanation' }, items: [
      {
        title: '(A) Incorrect \u2014 This commits a Mistaken Reversal.',
        text: '**Rule:** Holiday \u2192 NOT Open\n**Evidence:** NOT Open (necessary condition observed)\n**Conclusion:** Holiday (sufficient condition asserted)\n\nThis is B \u2192 A (Mistaken Reversal). The stimulus commits NOT A \u2192 NOT B (Mistaken Negation). Different flaw type.',
        badge: 'Mistaken Reversal',
        badgeColor: 'red'
      },
      {
        title: '(B) Incorrect \u2014 This is valid logic (Contrapositive).',
        text: '**Rule:** Birthday \u2192 Balloons\n**Evidence:** NOT Balloons (necessary condition absent)\n**Conclusion:** NOT Birthday (sufficient condition absent)\n\nThis is NOT B \u2192 NOT A, a valid contrapositive (Modus Tollens). Valid reasoning cannot match a flawed stimulus.',
        badge: 'Valid Logic',
        badgeColor: 'red'
      },
      {
        title: '(C) Incorrect \u2014 This commits a Mistaken Reversal.',
        text: '**Rule:** Successful \u2192 Adhere ("only if" introduces the necessary condition)\n**Evidence:** Adhere (necessary condition observed)\n**Conclusion:** Successful (sufficient condition asserted)\n\nThis is B \u2192 A (Mistaken Reversal). The stimulus uses NOT A \u2192 NOT B (Mistaken Negation). Different flaw type.',
        badge: 'Mistaken Reversal',
        badgeColor: 'red'
      },
      {
        title: '(D) Correct \u2014 Matches the Mistaken Negation perfectly.',
        text: '**Rule:** Late \u2192 Miss Meeting\n**Evidence:** NOT Late (sufficient condition is absent)\n**Conclusion:** NOT Miss Meeting (necessary condition is denied)\n\nThis is NOT A \u2192 NOT B, identical to the stimulus. The speaker could still miss the meeting for other reasons\u2014traffic, wrong address, car trouble\u2014but the argument assumes removing one cause removes all causes.',
        badge: 'Correct',
        badgeColor: 'green'
      },
      {
        title: '(E) Incorrect \u2014 This is valid logic (Contrapositive).',
        text: '**Rule:** Enforced \u2192 Jailed\n**Evidence:** NOT Jailed (necessary condition absent)\n**Conclusion:** NOT Enforced (sufficient condition absent)\n\nThis is NOT B \u2192 NOT A, the valid contrapositive. Like choice (B), valid logic cannot parallel a flawed argument.',
        badge: 'Valid Logic',
        badgeColor: 'red'
      }
    ]},

    { type: 'hr' },

    { type: 'h3', text: '3.3 The Relationship Between the Two Fallacies' },
    { type: 'paragraph', text: 'The Mistaken Reversal and the Mistaken Negation are not independent errors\u2014they are contrapositives of each other. If you take the Mistaken Reversal (B \u2192 A) and form its contrapositive, you get NOT A \u2192 NOT B, which is the Mistaken Negation. This means committing one fallacy logically entails the other.' },

    { type: 'table', headers: ['Statement', 'Formula', 'Status', 'Contrapositive'], rows: [
      ['Original', 'A \u2192 B', 'VALID (Given)', 'NOT B \u2192 NOT A (Valid)'],
      ['Mistaken Reversal', 'B \u2192 A', 'INVALID', 'NOT A \u2192 NOT B (Also Invalid)'],
      ['Mistaken Negation', 'NOT A \u2192 NOT B', 'INVALID', 'B \u2192 A (Also Invalid)']
    ]},

    { type: 'callout', variant: 'tip', title: 'Quick Identification', text: 'When you diagram the flaw, ask:\n\n\u2022 **Did the argument observe B and conclude A?** \u2192 Mistaken Reversal\n\u2022 **Did the argument observe NOT A and conclude NOT B?** \u2192 Mistaken Negation\n\nBoth errors stem from the same root mistake: treating a one-directional conditional as if it flows both ways.' },

    { type: 'hr' },

    { type: 'h3', text: '3.4 Spotting the Fallacies in LSAT Language' },
    { type: 'paragraph', text: 'The LSAT rarely uses clean "A therefore B" language. Instead, conditional errors are embedded in natural-language arguments. Here are the most common disguises:' },

    { type: 'table', headers: ['LSAT Pattern', 'What It Looks Like', 'Fallacy Type'], rows: [
      ['"All X are Y. Z is Y. So Z is X."', 'Observes necessary, concludes sufficient', 'Mistaken Reversal'],
      ['"If X, then Y. Not X. So not Y."', 'Observes absence of sufficient, concludes absence of necessary', 'Mistaken Negation'],
      ['"X is required for Y. X is present. So Y."', 'Observes necessary, concludes sufficient', 'Mistaken Reversal'],
      ['"Only X leads to Y. X didn\'t happen. So Y won\'t happen."', 'Adds unsupported "only" then negates', 'Mistaken Negation'],
      ['"X guarantees Y. Y happened. So X happened."', 'Observes result, concludes cause', 'Mistaken Reversal']
    ]},

    { type: 'hr' },

    { type: 'h3', text: '3.5 Key Takeaways and Practice Focus' },
    { type: 'list', ordered: true, items: [
      '**Memorize the Structures:** Know the Mistaken Reversal (B \u2192 A) and Mistaken Negation (NOT A \u2192 NOT B) by name, by formula, and by their abstract structures.',
      '**Hunt for the Pattern:** When a stimulus provides a conditional rule (A \u2192 B), immediately check whether the conclusion relies on observing B (Reversal risk) or observing NOT A (Negation risk).',
      '**Diagram First:** On Parallel Flaw questions, sketch the abstract structure of the stimulus (e.g., A \u2192 B, B observed, concludes A) before reading the answer choices. This makes pattern-matching far faster.',
      '**Remember the Mirror:** The two fallacies are contrapositives of each other. If you can identify one, you can identify the other by flipping the structure.',
      '**Compare to the Contrapositive:** The contrapositive (NOT B \u2192 NOT A) is the only legitimate way to reverse the direction of the conditional arrow. Every other reversal attempt is a fallacy.'
    ]},

    { type: 'callout', variant: 'summary', title: 'The Bottom Line', text: 'A conditional A \u2192 B tells you one thing and one thing only: when A is present, B must follow. It does NOT tell you that B proves A (Mistaken Reversal). It does NOT tell you that the absence of A prevents B (Mistaken Negation). The only valid reverse inference is the contrapositive: NOT B \u2192 NOT A. Every other manipulation is a fallacy.' }
  ]
};
