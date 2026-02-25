import { Lesson } from '../../types';

export const Lesson12_ReferenceGuide: Lesson = {
  id: "1-12",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Argument Part: Complete Reference' },
    { type: 'paragraph', text: 'A condensed reference for every concept, role, method, and trap in Argument Part questions. Print this or bookmark it for review before test day.' },
    { type: 'hr' },

    { type: 'h3', text: 'The 5-Step Method' },
    { type: 'process', steps: [
      '**Find the Target:** Read the question stem. Bracket the specific sentence or phrase being asked about in the stimulus.',
      '**Analyze & Hypothesize:** Read the full stimulus. For each sentence, form a quick hypothesis: Is it a fact? An opinion? A counterpoint?',
      '**Map the Structure:** Use indicator words and the Why Test to identify the Main Conclusion. Trace the flow of support: which sentences support which other sentences?',
      '**Pinpoint & Prephrase:** State the target sentence\'s role in your own words before looking at the answer choices. Be specific: "This is a premise supporting the intermediate conclusion."',
      '**Evaluate Choices:** Find the abstract match for your prephrase. Verify both the role label AND the specific relationship described.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'All Argument Roles' },
    { type: 'table', headers: ['Role', 'Frequency', 'Definition', 'Indicator Words'], rows: [
      ['**Premise**', '53%', 'Fact, evidence, or reason that supports a conclusion', '*because, since, for, after all, given that*'],
      ['**Main Conclusion**', '13%', 'Ultimate point; receives support, gives none', '*therefore, thus, so, hence, consequently*'],
      ['**Intermediate Conclusion**', '11%', 'Bridge: receives support AND gives support', '*so [mid-argument], this shows that*'],
      ['**Context / Background**', '9%', 'Sets the stage; no argumentative force', '*It has been noted that, Historically*'],
      ['**Opposing Viewpoint**', '8%', 'A claim the author argues against', '*Some argue, Critics claim, It is believed*'],
      ['**Concession**', '5%', 'A point the author grants to the other side', '*Although, While it is true, Granted*'],
      ['**Phenomenon**', '<1%', 'An observation the argument explains', '*Surprisingly, Paradoxically, It is puzzling*'],
    ]},

    { type: 'h3', text: 'Indicator Word Quick Reference' },
    { type: 'table', headers: ['Category', 'Words & Phrases'], rows: [
      ['Conclusion', '*therefore, thus, so, hence, consequently, it follows that, this shows that, we can conclude*'],
      ['Premise', '*because, since, for, after all, given that, as evidenced by, due to, on the grounds that*'],
      ['Contrast/Pivot', '*but, however, yet, although, while, nevertheless, despite, on the other hand, nonetheless*'],
      ['Example', '*for instance, for example, such as, to illustrate, consider*'],
      ['Concession', '*although, while it is true that, granted, admittedly, despite, even though*'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'The Why Test' },
    { type: 'paragraph', text: "The single most reliable technique for identifying the main conclusion:" },
    { type: 'list', ordered: true, items: [
      'Pick a candidate conclusion.',
      'Ask "**Why?**" or "**Why should I believe this?**"',
      'If the other sentences in the argument answer the "Why?", you have found the conclusion.',
      'If asking "Why?" gets no answer from the argument, the statement is a premise.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Argument Structures' },
    { type: 'breakdown', labels: { title: 'Pattern', text: 'Structure' }, colWidth: 'narrow', items: [
      { title: 'Simple Argument', text: 'Premise(s) → Main Conclusion. The most basic form. One or more facts directly supporting a single claim.', badge: 'Most Common', badgeColor: 'indigo' },
      { title: 'Chain Argument', text: 'Premise → Intermediate Conclusion → Main Conclusion. A multi-step argument where the intermediate conclusion acts as a bridge.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Rebuttal', text: 'Opposing View + "But/However" + Author\'s Conclusion. The author presents someone else\'s position, then argues against it.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Concession + Conclusion', text: '"Although [granted point]... [pivot]... Main Conclusion." The author acknowledges a counterpoint then overrides it.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Phenomenon + Explanation', text: 'Surprising observation → Proposed explanation. The "conclusion" is the explanation for why the phenomenon occurs.', badge: 'Rare', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Avoid It' }, items: [
      { title: 'The Reversal', text: 'The answer swaps premise and conclusion roles, describing the target as supporting something when it\'s actually being supported (or vice versa). **Fix:** Always confirm the direction of support before evaluating choices.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'The Wrong Voice', text: 'The answer describes the target as the author\'s view when it\'s actually the opposing viewpoint, or vice versa. **Fix:** Track who is saying what. Attribution phrases signal the opponent.', badge: 'Common', badgeColor: 'red' },
      { title: 'The Mischaracterization', text: 'The role label is correct (e.g., "premise") but the specific relationship described is wrong (e.g., "supports X" when it actually supports Y). **Fix:** Read the full answer choice. Verify every noun and relationship described.', badge: 'Common', badgeColor: 'red' },
      { title: 'Abstract Disguise', text: 'The correct answer uses highly abstract language that obscures a simple role. "A view that other statements are intended to support" just means "conclusion." **Fix:** Translate abstract answers into plain English before evaluating.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: "Before selecting your answer on any Argument Part question:\n1. Can you state the Main Conclusion in your own words?\n2. Can you name the role of the target sentence in your own words?\n3. Does your chosen answer match both the role AND the specific relationship?\n4. Have you verified the direction of support (who supports whom)?" },
  ]
};
