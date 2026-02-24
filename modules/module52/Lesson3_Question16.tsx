import { Lesson, ContentBlock } from '../../types';

const passageText = `Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as seeking to debunk orthodox legal theory by exposing its contradictions. However, Meyerson argues that CLS proponents tend to see contradictions where none exist, and that CLS overrates the threat that conflict poses to orthodox legal theory.
According to Meyerson, CLS proponents hold that the existence of conflicting values in the law implies the absence of any uniquely right solution to legal cases. CLS argues that these conflicting values generate equally plausible but opposing answers to any given legal question, and, consequently, that the choice between the conflicting answers must necessarily be arbitrary or irrational. Meyerson denies that the existence of conflicting values makes a case irresolvable, and asserts that at least some such cases can be resolved by ranking the conflicting values. For example, a lawyer’s obligation to preserve a client’s confidences may entail harming other parties, thus violating moral principle. This conflict can be resolved if it can be shown that in certain cases the professional obligation overrides ordinary moral obligations.
In addition, says Meyerson, even when the two solutions are equally compelling, it does not follow that the choice between them must be irrational. On the contrary, a solution that is not rationally required need not be unreasonable. Meyerson concurs with another critic that instead of concentrating on the choice between two compelling alternatives, we should rather reflect on the difference between both of these answers on the one hand, and some utterly unreasonable answer on the other—such as deciding a property dispute on the basis of which claimant is louder. The acknowledgment that conflicting values can exist, then, does not have the far-reaching implications imputed by CLS; even if some answer to a problem is not the only answer, opting for it can still be reasonable.
Last, Meyerson takes issue with the CLS charge that legal formalism, the belief that there is a quasi-deductive method capable of giving solutions to problems of legal choice, requires objectivism, the belief that the legal process has moral authority. Meyerson claims that showing the law to be unambiguous does not demonstrate its legitimacy: consider a game in which participants compete to steal the item of highest value from a shop; while a person may easily identify the winner in terms of the rules, it does not follow that the person endorses the rules of the game. A CLS scholar might object that legal cases are unlike games, in that one cannot merely apply the rules without appealing to, and therefore endorsing, external considerations of purpose, policy, and value. But Meyerson replies that such considerations may be viewed as part of, not separate from, the rules of the game.`;

export const Lesson3_Question16: Lesson = {
  id: "52-3",
  title: "Question 16: Phrase Function",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-110-S-4-P-3)', content: passageText },
    { type: 'h3', text: "Question 16: Phrase Function Breakdown (PT-110-S-4-P-3-Q-16)" },
    { type: 'blockquote', text: "**Question:** The primary purpose of the reference to a game in the last paragraph is to" },
    { type: 'options', items: [
      "(A) provide an example of how a principle has previously been applied",
      "(B) demonstrate a point by means of an analogy (Correct)",
      "(C) emphasize the relative unimportance of an activity",
      "(D) contrast two situations by exaggerating their differences",
      "(E) dismiss an idea by portraying it as reprehensible"
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This phrase function question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as...' and 'But Meyerson replies that such considerations may be viewed as part...' when checking whether a choice preserves the passage's emphasis." },
    { 
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A)", text: "The game is a hypothetical scenario created to make a point, not a real-world example of how a legal principle was used in the past. Therefore, it is not a previous application. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "This choice is correct because Meyerson uses the game as a direct comparison to the legal system to make her point. An analogy is a comparison between two things to explain or clarify an idea. Here, the game illustrates her argument that applying rules (legal formalism) does not require believing in their moral rightness (objectivism). Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(C)", text: "Meyerson's goal is not to suggest that the law is unimportant like a game. She uses the comparison only to isolate and explain a specific point about the nature of rules. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "The reference to the game is meant to highlight a similarity with the law, not to contrast them. Meyerson is arguing that the law is *like* the game in that rules can be separated from moral endorsement. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(E)", text: "While the game itself involves a wrongful act (stealing), Meyerson uses it to defend legal formalism, not to dismiss it. The game's clear separation of rules from morality helps strengthen her argument. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
      ]
    }
  ]
};