import { Lesson, ContentBlock } from '../../types';

const passageText = `Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as seeking to debunk orthodox legal theory by exposing its contradictions. However, Meyerson argues that CLS proponents tend to see contradictions where none exist, and that CLS overrates the threat that conflict poses to orthodox legal theory.
According to Meyerson, CLS proponents hold that the existence of conflicting values in the law implies the absence of any uniquely right solution to legal cases. CLS argues that these conflicting values generate equally plausible but opposing answers to any given legal question, and, consequently, that the choice between the conflicting answers must necessarily be arbitrary or irrational. Meyerson denies that the existence of conflicting values makes a case irresolvable, and asserts that at least some such cases can be resolved by ranking the conflicting values. For example, a lawyer’s obligation to preserve a client’s confidences may entail harming other parties, thus violating moral principle. This conflict can be resolved if it can be shown that in certain cases the professional obligation overrides ordinary moral obligations.
In addition, says Meyerson, even when the two solutions are equally compelling, it does not follow that the choice between them must be irrational. On the contrary, a solution that is not rationally required need not be unreasonable. Meyerson concurs with another critic that instead of concentrating on the choice between two compelling alternatives, we should rather reflect on the difference between both of these answers on the one hand, and some utterly unreasonable answer on the other—such as deciding a property dispute on the basis of which claimant is louder. The acknowledgment that conflicting values can exist, then, does not have the far-reaching implications imputed by CLS; even if some answer to a problem is not the only answer, opting for it can still be reasonable.
Last, Meyerson takes issue with the CLS charge that legal formalism, the belief that there is a quasi-deductive method capable of giving solutions to problems of legal choice, requires objectivism, the belief that the legal process has moral authority. Meyerson claims that showing the law to be unambiguous does not demonstrate its legitimacy: consider a game in which participants compete to steal the item of highest value from a shop; while a person may easily identify the winner in terms of the rules, it does not follow that the person endorses the rules of the game. A CLS scholar might object that legal cases are unlike games, in that one cannot merely apply the rules without appealing to, and therefore endorsing, external considerations of purpose, policy, and value. But Meyerson replies that such considerations may be viewed as part of, not separate from, the rules of the game.`;

export const Lesson8_Question21: Lesson = {
  id: "52-8",
  title: "Question 21: Inference (3rd-Party Viewpoint)",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-110-S-4-P-3)', content: passageText },
    { type: 'h3', text: "Question 21: Inference (3rd-Party Viewpoint) Breakdown (PT-110-S-4-P-3-Q-21)" },
    { type: 'blockquote', text: "**Question:** It can be inferred from the passage that proponents of the Critical Legal Studies movement would be most likely to hold which one of the following views about the law?" },
    { type: 'options', items: [
      "(A) It incorporates moral principles in order to yield definitive solutions to legal problems.",
      "(B) It does not necessarily imply approval of any policies or values.",
      "(C) It is insufficient in itself to determine the answer to a legal question. (Correct)",
      "(D) It is comparable to the application of rules in a game.",
      "(E) It can be used to determine the best choice between conflicting values."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This inference (3rd-party viewpoint) question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as...' and 'But Meyerson replies that such considerations may be viewed as part...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "This is the opposite of the CLS view. The passage says CLS believes that conflicting values prevent the law from yielding 'uniquely right' or definitive solutions. Additional check: trap type is reversal/contradiction, because it flips the passage's direction or conclusion.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "This statement reflects Meyerson's position, not the CLS view. The passage notes that a CLS scholar would argue that applying legal rules requires endorsing the policies and values behind them. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "This choice accurately reflects the core belief of the CLS movement as described in the passage. The passage states that CLS argues that conflicting values in the law create equally good but opposing answers, meaning the law by itself cannot provide a single, definitive solution. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(D)", text: "This is Meyerson's analogy, which the passage explicitly states a CLS scholar would reject. CLS proponents do not see legal cases as being similar to games. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E)", text: "This is Meyerson’s argument against the CLS position. She believes conflicting values can be ranked to find a resolution, while CLS believes these conflicts make legal choices arbitrary, not a matter of finding the 'best' choice. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};