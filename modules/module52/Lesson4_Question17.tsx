import { Lesson, ContentBlock } from '../../types';

const passageText = `Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as seeking to debunk orthodox legal theory by exposing its contradictions. However, Meyerson argues that CLS proponents tend to see contradictions where none exist, and that CLS overrates the threat that conflict poses to orthodox legal theory.
According to Meyerson, CLS proponents hold that the existence of conflicting values in the law implies the absence of any uniquely right solution to legal cases. CLS argues that these conflicting values generate equally plausible but opposing answers to any given legal question, and, consequently, that the choice between the conflicting answers must necessarily be arbitrary or irrational. Meyerson denies that the existence of conflicting values makes a case irresolvable, and asserts that at least some such cases can be resolved by ranking the conflicting values. For example, a lawyer’s obligation to preserve a client’s confidences may entail harming other parties, thus violating moral principle. This conflict can be resolved if it can be shown that in certain cases the professional obligation overrides ordinary moral obligations.
In addition, says Meyerson, even when the two solutions are equally compelling, it does not follow that the choice between them must be irrational. On the contrary, a solution that is not rationally required need not be unreasonable. Meyerson concurs with another critic that instead of concentrating on the choice between two compelling alternatives, we should rather reflect on the difference between both of these answers on the one hand, and some utterly unreasonable answer on the other—such as deciding a property dispute on the basis of which claimant is louder. The acknowledgment that conflicting values can exist, then, does not have the far-reaching implications imputed by CLS; even if some answer to a problem is not the only answer, opting for it can still be reasonable.
Last, Meyerson takes issue with the CLS charge that legal formalism, the belief that there is a quasi-deductive method capable of giving solutions to problems of legal choice, requires objectivism, the belief that the legal process has moral authority. Meyerson claims that showing the law to be unambiguous does not demonstrate its legitimacy: consider a game in which participants compete to steal the item of highest value from a shop; while a person may easily identify the winner in terms of the rules, it does not follow that the person endorses the rules of the game. A CLS scholar might object that legal cases are unlike games, in that one cannot merely apply the rules without appealing to, and therefore endorsing, external considerations of purpose, policy, and value. But Meyerson replies that such considerations may be viewed as part of, not separate from, the rules of the game.`;

export const Lesson4_Question17: Lesson = {
  id: "52-4",
  title: "Question 17: Passage Purpose",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-110-S-4-P-3)', content: passageText },
    { type: 'h3', text: "Question 17: Passage Purpose Breakdown (PT-110-S-4-P-3-Q-17)" },
    { type: 'blockquote', text: "**Question:** The author’s primary purpose in the passage is to" },
    { type: 'options', items: [
      "(A) evaluate divergent legal doctrines",
      "(B) explain how a controversy arose",
      "(C) advocate a new interpretation of legal tradition",
      "(D) describe a challenge to a school of thought (Correct)",
      "(E) refute claims made by various scholars"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This passage purpose question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as...' and 'But Meyerson replies that such considerations may be viewed as part...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "The passage does not evaluate several different legal doctrines. Instead, it focuses on one philosopher's critique of a single legal theory. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "The passage describes the substance of a disagreement, but it does not explain the historical background or the specific events that led to the controversy. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "The author is not advocating for their own position but is describing someone else's (Meyerson's) critique. Meyerson's arguments are a challenge to CLS, not necessarily a whole new interpretation of legal tradition. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "This choice accurately captures the main goal of the passage. The author's purpose is to present Meyerson's specific arguments, which act as a 'challenge' to the 'school of thought' known as Critical Legal Studies (CLS). Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(E)", text: "While Meyerson refutes claims, the author's primary role is to describe her arguments, not to do the refuting. Also, the passage centers on Meyerson's challenge to one movement (CLS), not on claims from 'various scholars'. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};