import { Lesson } from '../../types';

export const Lesson9_AdvancedConcepts: Lesson = {
  id: "7-9",
  title: "Advanced Concepts",
  content: [
    { type: 'h2', text: 'Advanced Concepts: What Makes Evaluate Questions Hard' },
    { type: 'paragraph', text: "Most Evaluate questions are solvable with the 4-Step Method and the Yes/No Test. But the hardest questions — the ones that separate 160+ scorers from everyone else — introduce complications designed to slow you down and make the gap harder to find. This lesson identifies the three primary difficulty factors and gives you concrete strategies for each." },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Difficulty Factors' },
    { type: 'paragraph', text: "Hard Evaluate questions are not fundamentally different from easy ones. They use the same underlying logic. But they layer in one or more of the following complications:" },

    { type: 'table', headers: ['Difficulty Factor', 'What It Does', 'How Often It Appears on Hard Questions'], rows: [
      ['**Compound Gaps**', 'The argument has two or more distinct logical vulnerabilities, and the correct answer targets a gap you did not initially notice', '~40% of hard Evaluate questions'],
      ['**Abstract Answer Language**', 'The correct answer is phrased in general, technical, or abstract terms that obscure its connection to the specific gap', '~35% of hard Evaluate questions'],
      ['**Multiple Viable Candidates**', 'Two or more answer choices pass an initial gut check, and only careful application of the Yes/No Test distinguishes them', '~25% of hard Evaluate questions'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: '1. Compound Gaps (~40%)' },
    { type: 'paragraph', text: "On easy questions, the argument has one obvious gap, and the correct answer targets it cleanly. On hard questions, the argument may have **two or more distinct gaps**, and the test-makers design the answer choices so that each plausible-looking option targets a different gap. Your initial prephrase may match a trap answer perfectly — while the correct answer targets a gap you overlooked." },

    { type: 'h4', text: 'How to Handle Compound Gaps' },
    { type: 'process', title: 'Compound Gap Strategy', steps: [
      '**Identify your primary gap.** Find the most obvious logical vulnerability, as usual.',
      '**Actively search for a second gap.** Before reading the answer choices, ask: "Is there another way this argument could fail?" Spend 10-15 seconds looking for a secondary vulnerability.',
      '**Hold both gaps loosely.** Do not commit to one prephrase. Enter the answer choices with two possible targets in mind.',
      '**Apply the Yes/No Test to distinguish.** If two answers seem relevant, the Yes/No Test will reveal which one produces a cleaner, more decisive split.',
    ]},

    { type: 'blockquote', text: '"A study found that employees who participated in a wellness program had 20% fewer sick days than those who did not participate. The company concluded that the wellness program reduces absenteeism."' },

    { type: 'paragraph', text: "**Gap 1 (obvious):** Alternative cause — maybe healthier employees self-selected into the program. **Gap 2 (subtle):** Definition issue — \"fewer sick days\" might mean the wellness participants took fewer *reported* sick days because they feared stigma, not because they were actually healthier. Hard questions exploit Gap 2 because most test-takers fixate on Gap 1." },

    { type: 'callout', variant: 'default', title: 'The Compound Gap Trap', text: "The test-makers place a **trap answer that perfectly matches your first prephrase** and a correct answer that targets the gap you did not initially see. The trap answer may even pass a quick, superficial Yes/No Test. The defense: always test the winner against at least one runner-up before committing." },

    { type: 'hr' },

    { type: 'h2', text: '2. Abstract Answer Language (~35%)' },
    { type: 'paragraph', text: "On easy questions, the correct answer uses concrete, specific language that obviously connects to the stimulus. On hard questions, the correct answer may be phrased in general or abstract terms that require you to **translate** before you can apply the Yes/No Test." },

    { type: 'h4', text: 'Examples of Abstract Phrasing' },
    { type: 'table', headers: ['Abstract Answer Choice', 'What It Actually Asks'], rows: [
      ['"Whether the__(phenomenon)__ would occur in the absence of the__(supposed cause)__"', 'Is there an alternative cause? (Standard causal gap question in disguise)'],
      ['"Whether the__(measured variable)__ is an accurate indicator of the__(conclusion variable)__"', 'Is the evidence actually measuring what the conclusion is about? (Proxy variable gap)'],
      ['"Whether the__(group studied)__ is__(relevantly similar)__ to the__(group the conclusion is about)__"', 'Is the sample representative? (Standard generalization gap in disguise)'],
      ['"Whether the__(proposed action)__ would have__(consequences)__ that offset its__(intended benefit)__"', 'Are there unintended side effects? (Standard feasibility gap in disguise)'],
    ]},

    { type: 'h4', text: 'Translation Strategy' },
    { type: 'process', title: 'Decoding Abstract Answers', steps: [
      '**Identify the abstract terms.** Which words in the answer choice are placeholders for specific concepts in the stimulus?',
      '**Substitute the specifics.** Replace each abstract term with the concrete element from the stimulus it refers to.',
      '**Apply the Yes/No Test to the translated version.** Now that the answer is in concrete terms, the split should be clear.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Abstraction Ladder', text: "Abstract answers are not inherently harder — they just require one extra step: translation. Once you substitute the stimulus-specific terms, the answer becomes identical to what you would see on an easy question. Train yourself to translate automatically, and abstract phrasing stops being a barrier." },

    { type: 'hr' },

    { type: 'h2', text: '3. Multiple Viable Candidates (~25%)' },
    { type: 'paragraph', text: "On easy questions, only one answer choice is even remotely relevant. On hard questions, two or three choices may seem to address the gap. The difference between them is often a matter of **degree**: one produces a decisive Yes/No split, while the others produce a weak or lopsided split." },

    { type: 'h4', text: 'Tiebreaker Criteria' },
    { type: 'paragraph', text: "When two answers both seem relevant, apply these tiebreakers in order:" },

    { type: 'breakdown', labels: { title: 'Criterion', text: 'How to Apply It' }, items: [
      { title: 'Decisiveness of the split', text: 'The correct answer produces a **dramatic** swing: one response strongly strengthens, the other strongly weakens. A competing answer might produce a mild effect in one direction and no effect in the other. Choose the answer with the cleaner, more dramatic split.', badge: 'Primary', badgeColor: 'green' },
      { title: 'Centrality to the conclusion', text: 'The correct answer targets the **core** assumption that connects the premises to the conclusion. A competing answer might target a peripheral detail. Ask: "If I could only investigate one thing, which would be most decisive?"', badge: 'Secondary', badgeColor: 'blue' },
      { title: 'Specificity to this argument', text: 'The correct answer asks about something specific to *this* argument — a particular factor, group, or condition mentioned in the stimulus. A competing answer might be so general that it could apply to any argument. Choose the one tailored to the specific gap.', badge: 'Tiebreaker', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Hard Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** This question combines all three difficulty factors. Commit to an answer before scrolling down." },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Analysis' },
    { type: 'hr' },

    { type: 'h3', text: 'Why This Question Is Hard' },
    { type: 'paragraph', text: "This question layers multiple difficulty factors:" },
    { type: 'list', items: [
      '**Compound gaps:** The argument has at least two vulnerabilities — alternative cause (habitat destruction) and missing baseline (was the population already declining?).',
      '**Multiple viable candidates:** Choices (B) and (C) both seem relevant. (B) targets the baseline gap; (C) targets the alternative cause gap.',
      '**Abstract vs. concrete:** Choice (C) names a specific alternative cause, while (B) asks about a general trend — but both are phrased concretely enough to pass an initial relevance check.',
    ]},

    { type: 'h3', text: 'Applying the Yes/No Test' },
    { type: 'h4', text: 'Choice (C): Habitat destruction during the same period' },
    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect' }, items: [
      { title: '"Yes" — significant habitat destruction occurred', text: 'The argument is **severely weakened**. Habitat loss is a well-established cause of bird population decline. If the island lost nesting habitat during the same five years, predation may not be the primary driver at all.', badge: 'Weakens', badgeColor: 'red' },
      { title: '"No" — no significant habitat destruction occurred', text: 'The argument is **strengthened**. With the major alternative cause eliminated, predation becomes the most plausible explanation for the 60% decline.', badge: 'Strengthens', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "**Verdict:** Dramatic, decisive split. This directly targets the core causal claim." },

    { type: 'h4', text: 'Choice (B): Was the population stable before?' },
    { type: 'breakdown', labels: { title: 'Answer', text: 'Effect' }, items: [
      { title: '"Yes" — population was stable for the prior decade', text: 'The argument is **mildly strengthened**. A stable baseline makes it more plausible that the predator caused the decline — but it does not rule out other causes that coincided with the predator\'s arrival.', badge: 'Mild Strengthen', badgeColor: 'green' },
      { title: '"No" — population was already declining', text: 'The argument is **weakened** but not demolished. A pre-existing decline suggests the predator may not be the primary cause — but it also does not prove the predator had no effect. The prior decline could have been minor.', badge: 'Moderate Weaken', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "**Verdict:** The split is real but less decisive than (C). Choice (B) is the runner-up." },

    { type: 'callout', variant: 'tip', title: 'Tiebreaker Applied', text: "Both (B) and (C) pass the Yes/No Test. But (C) produces a more **decisive** split — one answer directly names a rival cause that could fully explain the decline, while (B) provides contextual information that shifts the probability without offering a specific rival explanation. When two answers both work, choose the one with the stronger swing." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Hard Evaluate questions layer complications on the same core logic.** The 4-Step Method still works — it just requires more care.\n\n**2. Compound gaps require you to search for secondary vulnerabilities** before reading the answer choices. The first gap you see may match a trap.\n\n**3. Abstract language requires translation.** Substitute stimulus-specific terms for the abstract placeholders before applying the Yes/No Test.\n\n**4. Multiple viable candidates require tiebreakers.** Choose the answer with the most decisive split, the most central connection to the conclusion, and the most specificity to the argument." },
  ]
};
