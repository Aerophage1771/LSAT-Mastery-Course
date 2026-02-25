import { Lesson } from '../../types';

export const Lesson4_Drill_Causation: Lesson = {
  id: "5-4",
  title: "Drill: Causal Flaw (Correlation vs. Causation)",
  content: [
    { type: 'h2', text: 'Drill: Correlation Does Not Equal Causation' },

    { type: 'h3', text: 'Concept Focus: The Causal Flaw' },
    { type: 'paragraph', text: "This lesson focuses on the single most common and predictable error in reasoning on the LSAT: **confusing correlation with causation**. Many arguments present evidence that two things happen together (a correlation) and then leap to the conclusion that one of those things must be causing the other." },

    { type: 'h4', text: 'Correlation vs. Causation — Defined' },
    { type: 'breakdown', labels: { title: 'Concept', text: 'Definition' }, items: [
      { title: 'Correlation', text: 'A statistical link or association. Two things tend to happen at the same time, in the same people, or in the same places. A correlation tells you that X and Y co-occur, but it does NOT tell you *why*.', badge: 'Evidence', badgeColor: 'blue' },
      { title: 'Causation', text: 'A direct cause-and-effect relationship. One thing actively makes another thing happen. Causation means that X *produces* Y — removing X would prevent Y.', badge: 'Conclusion', badgeColor: 'indigo' },
    ]},

    { type: 'paragraph', text: 'The fundamental flaw is assuming that a correlation is **sufficient proof** of causation. To find this gap, you must consider **alternative explanations** for the observed correlation.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Types of Causal Error' },
    { type: 'paragraph', text: 'When an argument leaps from correlation to causation, there are three main ways the conclusion could be wrong:' },
    { type: 'table', headers: ['Error Type', 'What It Claims', 'Alternative Explanation', 'Example'], rows: [
      ['**Correlation → Causation**', 'X causes Y because X and Y co-occur', 'The co-occurrence could be coincidental or spurious', 'Ice cream sales and drowning rates both rise in summer → ice cream does NOT cause drowning'],
      ['**Reversed Causality**', 'X causes Y', 'Actually, Y causes X — the causal arrow points the other way', 'People with fire extinguishers have more fires → extinguishers don\'t cause fires; having fires causes people to buy extinguishers'],
      ['**Third Factor (Common Cause)**', 'X causes Y', 'A hidden factor Z causes both X and Y independently', 'Yellow fingers and lung cancer co-occur → yellow fingers don\'t cause cancer; smoking causes both'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Holy Trinity of Causal Flaws', text: 'Memorize these three alternative explanations. Whenever you identify a causal flaw, ask:\n1. Could the relationship be **reversed**? (Y → X instead of X → Y)\n2. Could a **third factor** be causing both? (Z → X and Z → Y)\n3. Could it be **coincidence**? (no real connection at all)\n\nAt least one of these will be the basis of the correct answer.' },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot Causal Flaws' },
    { type: 'paragraph', text: 'Causal flaws are signaled by specific language patterns. Watch for these triggers:' },
    { type: 'table', headers: ['In the Conclusion (Causal Claim)', 'In the Premise (Correlational Evidence)'], rows: [
      ['"causes," "leads to," "results in"', '"is associated with," "tends to," "is correlated with"'],
      ['"stimulates," "produces," "is responsible for"', '"those who X also tend to Y"'],
      ['"encourages," "prevents," "reduces"', '"studies show that X and Y co-occur"'],
      ['"improves," "worsens," "contributes to"', '"in areas where X, Y is also observed"'],
    ]},
    { type: 'paragraph', text: 'The pattern: the **premise** uses correlational language (things happen together), but the **conclusion** uses causal language (one thing makes the other happen). This mismatch is the gap.' },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'question-card',
      id: 'FL-5-4-001',
      questionType: 'Flaw',
      difficulty: 'medium',
      stimulus: "Videocassette recorders (VCRs) enable people to watch movies at home on videotape. People who own VCRs go to movie theaters more often than do people who do not own VCRs. Contrary to popular belief, therefore, owning a VCR actually stimulates people to go to movie theaters more often than they otherwise would.",
      question: "The argument is most vulnerable to criticism on the grounds that it",
      options: [
        "(A) concludes that a claim must be false because of the mere absence of evidence in its favor",
        "(B) cites, in support of the conclusion, evidence that is inconsistent with other information that is provided",
        "(C) fails to establish that the phenomena interpreted as cause and effect are not both direct effects of some other factor (Correct)",
        "(D) takes a condition that by itself guarantees the occurrence of a certain phenomenon to be a condition that therefore must be met for that phenomenon to occur",
        "(E) bases a broad claim about the behavior of people in general on a comparison between two groups of people that together include only a small proportion of people overall",
      ],
    },

    { type: 'h3', text: 'Full Step-by-Step Analysis' },
    { type: 'process', title: 'Applying the 4-Step Method', steps: [
      '**Step 1 — Deconstruct the Argument:**\n• **Conclusion:** Owning a VCR *causes* people to go to movie theaters more often. (Look for the causal keyword "stimulates.")\n• **Premise:** There is a correlation between two things: people who own VCRs go to movie theaters more often than people who don\'t.',
      '**Step 2 — Find the Logical Gap:** The argument observes a correlation and concludes it must be a specific causal relationship (VCR ownership → more theater visits). The gap is the failure to consider other possible explanations for this correlation. What if a third factor causes both? What kind of person owns a VCR AND goes to the movies a lot? A movie lover! Someone who is very interested in movies would be more likely to own a VCR for home viewing AND more likely to go to the theater to see new releases. This is a very plausible common cause.',
      '**Step 3 — Prephrase the Flaw:** The argument assumes a causal link just because two things are correlated. It fails to consider a third factor — loving movies — that could be the real cause of both phenomena. **Prephrase:** "The argument overlooks the possibility that a third factor (like being a movie enthusiast) causes both VCR ownership and frequent movie-going."',
      '**Step 4 — Match to Answer:** Scan for an answer choice that describes a "third factor" or "common cause" version of the causal flaw.',
    ]},

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) concludes that a claim must be false because of the mere absence of evidence in its favor', text: 'This describes an "Argument from Ignorance" — a completely different flaw. The argument makes a positive claim based on the evidence it has, not a negative claim based on a lack of evidence.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) cites, in support of the conclusion, evidence that is inconsistent with other information that is provided', text: 'This describes an internal contradiction. The evidence (the correlation) is perfectly consistent with the conclusion; the problem is that it isn\'t strong enough to prove it.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) fails to establish that the phenomena interpreted as cause and effect are not both direct effects of some other factor', text: 'This is a perfect, abstract match for our prephrase. The "phenomena interpreted as cause and effect" are VCR ownership and movie-going. The "other factor" is a shared interest in movies. The argument fails to rule out this alternative.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) takes a condition that by itself guarantees the occurrence of a certain phenomenon to be a condition that therefore must be met for that phenomenon to occur', text: 'This describes a conditional logic flaw (confusing sufficient for necessary). The argument is about real-world cause and effect, not formal conditional rules.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) bases a broad claim about the behavior of people in general on a comparison between two groups that include only a small proportion of people overall', text: 'This describes a sampling flaw. While the sample might be small, the core logical error — the leap from correlation to causation — is the more fundamental problem.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'default', title: 'Trap Answer Analysis', text: 'Notice how **(E)** describes a real flaw type (unrepresentative sample) that is technically present in the argument — the comparison could involve an unrepresentative group. But on the LSAT, you must identify the **most fundamental** flaw. The core error is the causal leap, not the sample quality. Even with a perfect sample, the correlation-to-causation leap would still be flawed.' },

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },
    { type: 'question-card',
      id: 'FL-5-4-002',
      questionType: 'Flaw',
      difficulty: 'medium',
      stimulus: "Researchers found that children who eat dinner with their families at least five nights per week are significantly less likely to use illegal drugs than children who eat fewer family dinners. The researchers concluded that family dinners play a key role in preventing drug use among young people.",
      question: "The reasoning in the researchers' argument is most vulnerable to criticism on the grounds that it",
      options: [
        "(A) treats a correlation between family dinners and lower drug use as sufficient evidence of a causal relationship (Correct)",
        "(B) assumes that all families eat dinner together at approximately the same time each evening",
        "(C) relies on a sample that is too small to support a general conclusion about young people",
        "(D) fails to define what constitutes an 'illegal drug' for purposes of the study",
        "(E) overlooks the possibility that some children who eat family dinners do use illegal drugs",
      ],
    },

    { type: 'h3', text: 'Analysis' },
    { type: 'process', title: 'Step-by-Step', steps: [
      '**Conclusion:** Family dinners play a key role in *preventing* drug use (causal claim).',
      '**Premise:** Children who eat more family dinners are less likely to use drugs (correlation).',
      '**Gap:** The researchers leap from correlation to causation. A plausible third factor: families that prioritize regular dinners together may also be more engaged, communicative, and involved in their children\'s lives generally. It is the *overall family engagement* — not the dinners themselves — that prevents drug use.',
      '**Prephrase:** "Confuses correlation with causation — doesn\'t rule out a common cause."',
      '**Match:** Answer (A) directly describes treating a correlation as sufficient evidence of causation.',
    ]},
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) treats a correlation as sufficient evidence of a causal relationship', text: 'This matches our prephrase precisely. The argument observes correlation and concludes causation.', badge: 'Correct', badgeColor: 'green' },
      { title: '(B) assumes all families eat dinner at the same time', text: 'This detail is irrelevant to the argument\'s core flaw. The timing of dinners is not at issue.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) relies on a sample that is too small', text: 'The passage says "researchers found" without indicating a small sample. And even with a large sample, the causal leap would still be flawed.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) fails to define "illegal drug"', text: 'Definitional precision is not the argument\'s weakness. The flaw is structural, not terminological.', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) overlooks that some family-dinner children do use drugs', text: 'The argument says "less likely," not "never." It already accounts for exceptions. This isn\'t the flaw.', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Be Skeptical of Causation:** Whenever you see a conclusion that claims one thing *causes*, *leads to*, *stimulates*, or *results in* another, check whether the premise only shows a correlation.\n• **The Holy Trinity of Causal Flaws:** Always check for three alternative explanations: (1) **Reversed Causality** — the effect is actually the cause; (2) **Common Cause** — a third factor is causing both; (3) **Coincidence** — the link is random.\n• **Watch for causal language mismatch:** Correlational evidence (\"tends to,\" \"is associated with\") paired with causal conclusions (\"causes,\" \"prevents\") is the classic pattern.\n• **Trap answers** may describe other real flaw types (sampling, conditional logic) — always ask whether the *core* error is the causal leap.\n• **LSAT answer language:** \"infers a causal relationship from a mere correlation,\" \"fails to establish that the phenomena are not both effects of some other factor,\" \"overlooks the possibility that the cause and effect are reversed.\"" },
  ]
};
