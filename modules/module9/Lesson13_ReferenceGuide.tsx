import { Lesson } from '../../types';

export const Lesson13_ReferenceGuide: Lesson = {
  id: "9-13",
  title: "Reference Guide",
  content: [
    { type: 'h2', text: 'Strengthen: Complete Reference' },
    { type: 'paragraph', text: 'A condensed reference for every concept, method, strategy, and trap in Strengthen questions. Print this or bookmark it for review before test day.' },
    { type: 'hr' },

    { type: 'h3', text: 'The 4-Step Method' },
    { type: 'process', title: 'Solving Any Strengthen Question', steps: [
      '**Find the Conclusion:** Identify the author\'s final claim. Separate it from premises, background, and context. Pay close attention to scope words ("most," "probably," "likely," "in some cases").',
      '**Identify the Gap:** Determine the unstated assumption connecting evidence to conclusion. Ask: "Even if the premises are true, what else must be true for the conclusion to follow?" The answer reveals the gap.',
      '**Prephrase the Support:** Before looking at answers, predict what type of new information would make the conclusion more likely. Your prephrase should target the specific gap you identified.',
      '**Test Each Answer for Direction:** For each candidate, ask: "Does this make the conclusion MORE likely?" If yes, it strengthens. If it makes the conclusion less likely, it\'s a weakener trap. If it has no effect, it\'s irrelevant.',
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Complete Strengthening Strategies' },
    { type: 'paragraph', text: 'Every correct answer to a Strengthen question employs one of the following strategies. Learn to recognize each one and match it to the argument type you\'re facing.' },
    { type: 'table', headers: ['Strategy', 'How It Works', 'Best Against'], rows: [
      ['**Rule Out Alternative Cause**', 'Eliminates a rival explanation for the observed correlation, leaving the author\'s proposed cause as the best remaining explanation', 'Causal arguments, correlation-to-causation claims'],
      ['**Defend Against Reverse Causation**', 'Shows the causal arrow runs in the direction the author claims, not the opposite — often by finding the trait-behavior link in a different group (the Defender pattern)', 'Psychology-physiology links, behavior-outcome correlations'],
      ['**Bridge a Conceptual Gap**', 'Provides the missing link between two different concepts in the premise and conclusion (e.g., connecting a physical observation to a social motive)', 'Arguments where premise and conclusion use terms from different conceptual categories'],
      ['**Validate a Statistic / Qualifier**', 'Shows a narrow statistic was generated under fair conditions — the sample was large, predictions were frequent, or the measure was not cherry-picked', 'Arguments relying on qualified claims ("most of the time," "on occasions when")'],
      ['**Best-Case Analogy**', 'Demonstrates that the specific example used is the strongest case, not an outlier — if even the best case fails the standard, the general conclusion follows forcefully', 'Arguments generalizing from a single example to a category'],
      ['**Dose-Response**', 'Shows that more of the cause produces more of the effect in a continuous, step-by-step fashion — much harder to dismiss as coincidence than a single snapshot', 'Causal arguments supported by a single end-of-study correlation'],
      ['**Parallel Case**', 'Provides evidence that the same mechanism or pattern exists in another context, supporting its plausibility in the context at hand', 'Hypotheses proposing a novel mechanism'],
      ['**Show Necessity**', 'Demonstrates that the proposed explanation is needed — e.g., existing alternatives are insufficient to account for the phenomenon', 'Scientific hypotheses, explanatory arguments'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Gap Types' },
    { type: 'paragraph', text: 'Every Strengthen question has a gap between the evidence and the conclusion. Recognizing the gap type lets you predict the correct answer before reading the choices.' },
    { type: 'breakdown', labels: { title: 'Gap Type', text: 'Description & Signal' }, items: [
      { title: 'Causal Gap', text: 'The evidence shows correlation; the conclusion claims causation. **Signal words:** "causes," "leads to," "results from," "indicates that." **Strengthen:** Rule out alternative causes, defend against reverse causation, or establish dose-response.', badge: '~35%', badgeColor: 'green' },
      { title: 'Conceptual Gap', text: 'The premise uses one concept (physical, economic) and the conclusion uses another (social, motivational). **Signal:** Key nouns in premise and conclusion belong to different categories. **Strengthen:** Provide the bridge that connects the two concepts, typically by ruling out a simpler alternative.', badge: '~20%', badgeColor: 'green' },
      { title: 'Statistical / Qualifier Gap', text: 'A narrow, qualified statistic is used to support a broad conclusion. **Signal:** "most of the time," "on the occasions when," rates, percentages. **Strengthen:** Show the statistic is representative and not cherry-picked.', badge: '~15%', badgeColor: 'blue' },
      { title: 'Analogy Gap', text: 'One example is used to justify a broad generalization. **Signal:** A specific case followed by a universal recommendation. **Strengthen:** Show the example is representative or a best case.', badge: '~15%', badgeColor: 'blue' },
      { title: 'Mechanism Gap', text: 'A hypothesis proposes a mechanism (e.g., the spleen stores oxygen) without direct evidence. **Signal:** "hypothesize," "suggest," "propose." **Strengthen:** Show necessity, capability, parallel cases, or correlation.', badge: '~10%', badgeColor: 'slate' },
      { title: 'Scope Gap', text: 'Evidence covers one group/time/place; conclusion extends to a different one. **Signal:** Different nouns or timeframes in premise vs. conclusion. **Strengthen:** Show the groups are comparable or the example is representative.', badge: '~5%', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Strengthen vs. Weaken vs. Sufficient Assumption' },
    { type: 'paragraph', text: 'These three question types are closely related but require different levels of support. Understanding the distinctions prevents costly mistakes.' },
    { type: 'table', headers: ['Feature', 'Strengthen', 'Weaken', 'Sufficient Assumption'], rows: [
      ['**Task**', 'Find the answer that makes the conclusion MORE likely', 'Find the answer that makes the conclusion LESS likely', 'Find the answer that GUARANTEES the conclusion'],
      ['**Correct Answer Type**', 'A new fact (not stated in the stimulus)', 'A new fact (not stated in the stimulus)', 'A new principle or fact that, combined with the premises, logically entails the conclusion'],
      ['**"If true" clause?**', 'Yes — accept the answer as true, then test its effect', 'Yes — accept the answer as true, then test its effect', 'Yes — the answer is a new premise'],
      ['**Strength Required**', 'Partial — the answer only needs to make the conclusion somewhat more likely', 'Partial — the answer only needs to make the conclusion somewhat less likely', 'Total — the answer must make the conclusion logically certain'],
      ['**Direction**', 'Evidence → Conclusion becomes stronger', 'Evidence → Conclusion becomes weaker', 'Evidence + Answer → Conclusion is guaranteed'],
      ['**Common Overlap Trap**', 'Selecting a weakener (reverses direction)', 'Selecting a strengthener (reverses direction)', 'Selecting a strengthener that helps but does not guarantee'],
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'Common Traps' },
    { type: 'breakdown', labels: { title: 'Trap', text: 'How to Spot and Avoid It' }, items: [
      { title: '1. The Weakener', text: 'An answer that undermines the conclusion rather than supporting it. This is the #1 trap on hard Strengthen questions. **Defense:** Always perform the Direction Check — ask "Does this make the conclusion MORE or LESS likely?" before selecting.', badge: 'Very Common', badgeColor: 'red' },
      { title: '2. The Premise Booster', text: 'An answer that makes a stated premise more believable but does nothing to bridge the gap between the evidence and the conclusion. **Defense:** Ask "Does this help connect the evidence to the conclusion, or does it just make the evidence itself seem more solid?"', badge: 'Very Common', badgeColor: 'red' },
      { title: '3. The Scope Mismatch', text: 'An answer about a related but different topic — e.g., about "success" when the argument is about "attempting," or about a different group than the one in the conclusion. **Defense:** Verify the nouns, timeframe, and scope of the answer match those of the conclusion.', badge: 'Common', badgeColor: 'red' },
      { title: '4. The "Some" Trap', text: 'An answer that uses weak quantifiers ("some," "a few") when the conclusion requires broad support ("all," "most," "in general"). **Defense:** Check whether the answer\'s scope is strong enough to support the conclusion\'s scope.', badge: 'Common', badgeColor: 'red' },
      { title: '5. True But Irrelevant', text: 'An answer that is factually plausible and topically related but has no logical connection to the specific gap. **Defense:** Ask "Does this specifically address the link between the evidence and the conclusion?" If it only adds background, eliminate it.', badge: 'Common', badgeColor: 'red' },
      { title: '6. The Wrong Comparison', text: 'An answer comparing the wrong groups or the wrong variables. **Defense:** Identify exactly which comparison the conclusion relies on and verify the answer addresses that specific comparison.', badge: 'Moderate', badgeColor: 'slate' },
      { title: '7. The Reversal Trap', text: 'An answer that reverses the logical direction of the argument — e.g., using the conclusion to justify the premise instead of the other way around. **Defense:** Check whether the answer supports the author\'s reasoning direction or inverts it.', badge: 'Less Common', badgeColor: 'slate' },
    ]},
    { type: 'hr' },

    { type: 'h3', text: 'EXCEPT Question Strategy' },
    { type: 'paragraph', text: '"Strengthen EXCEPT" questions ask you to find the one answer that does NOT strengthen. Four answers will support the argument from different angles; one will not.' },
    { type: 'process', title: 'Systematic EXCEPT Approach', steps: [
      '**Understand the hypothesis clearly.** What specific claim are you asked to support?',
      '**Sweep all five choices.** For each, ask: "Does this make the hypothesis more plausible?" Tag each as S (strengthens) or X (does not).',
      '**Expect four S\'s and one X.** If you have two X\'s, re-evaluate the borderline cases by asking whether they provide even indirect support.',
      '**Verify the lone X.** Confirm it either has no effect on the hypothesis or actively undermines it (e.g., by providing an alternative explanation).',
    ]},
    { type: 'paragraph', text: 'The most common correct answer on EXCEPT questions provides an **alternative explanation** — it gives a different mechanism or cause that reduces the need for the hypothesis, thereby failing to strengthen it.' },
    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question Stem' },
    { type: 'table', headers: ['Stem Pattern', 'Signal'], rows: [
      ['"Which one of the following, if true, most strengthens the argument?"', 'Standard Strengthen'],
      ['"Which one of the following, if true, most supports the claim above?"', 'Standard Strengthen (synonym)'],
      ['"Which one of the following, if true, lends the most support to the argument?"', 'Standard Strengthen (synonym)'],
      ['"Which one of the following, if true, most helps to justify the reasoning above?"', 'Standard Strengthen (synonym)'],
      ['"Each of the following, if true, strengthens the argument EXCEPT:"', 'Strengthen EXCEPT — find the one that does NOT strengthen'],
      ['"Each of the following, if true, provides some support… EXCEPT:"', 'Strengthen EXCEPT (synonym)'],
    ]},
    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Test Day Checklist', text: "Before selecting your answer on any Strengthen question:\n\n**1.** Can you state the conclusion in your own words?\n**2.** Can you identify the specific gap between evidence and conclusion?\n**3.** Does your chosen answer make the conclusion MORE likely (not less)?\n**4.** Does the answer bridge the MAIN gap, not a secondary detail?\n**5.** Does the answer strengthen ON ITS OWN, without requiring additional assumptions?\n**6.** Have you checked that you haven't fallen for a weakener or premise-booster trap?\n**7.** For EXCEPT questions: have you verified that four answers strengthen and only one does not?" },
  ]
};
