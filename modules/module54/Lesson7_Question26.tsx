
import { Lesson } from '../../types';

const passageText = `Ronald Dworkin argues that judges are in danger of uncritically embracing an erroneous theory known as legal positivism because they think the only alternative is a theory that they (and Dworkin) see as clearly unacceptable—natural law. The latter theory holds that judges ought to interpret the law by consulting their own moral convictions, even if this means ignoring the letter of the law and the legal precedents for its interpretation. Dworkin regards this as an impermissible form of judicial activism that arrogates to judges powers properly reserved for legislators.
Legal positivism, the more popular of the two theories, holds that law and morality are wholly distinct. The meaning of the law rests on social convention in the same way as does the meaning of a word. Dworkin’s view is that legal positivists regard disagreement among jurists as legitimate only if it arises over what the underlying convention is, and it is to be resolved by registering a consensus, not by deciding what is morally right. In the same way, disagreement about the meaning of a word is settled by determining how people actually use it, and not by deciding what it ought to mean. Where there is no consensus, there is no legal fact of the matter. The judge’s interpretive role is limited to discerning this consensus, or the absence thereof.
According to Dworkin, this account is incompatible with the actual practice of judges and lawyers, who act as if there is a fact of the matter even in cases where there is no consensus. The theory he proposes seeks to validate this practice without falling into what Dworkin correctly sees as the error of natural law theory. It represents a kind of middle ground between the latter and legal positivism. Dworkin stresses the fact that there is an internal logic to a society’s laws and the general principles they typically embody. An interpretation that conforms to these principles may be correct even if it is not supported by a consensus. Since these general principles may involve such moral concepts as justice and fairness, judges may be called upon to consult their own moral intuitions in arriving at an interpretation. But this is not to say that judges are free to impose their own morality at will, without regard to the internal logic of the laws.
The positivist’s mistake, as Dworkin points out, is assuming that the meaning of the law can only consist in what people think it means, whether these people be the original authors of the law or a majority of the interpreter’s peers. Once we realize, as Dworkin does, that the law has an internal logic of its own that constrains interpretation, we open up the possibility of improving upon the interpretations not only of our contemporaries but of the original authors.`;

export const Lesson7_Question26: Lesson = {
  id: "54-7",
  title: "Question 26: 3rd-Party Viewpoint",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-111-S-2-P-4)', content: passageText },
    { type: 'h3', text: "Question 26: 3rd-Party Viewpoint Breakdown (PT-111-S-2-P-4-Q-26)" },
    { type: 'blockquote', text: "**Question:** It can be inferred that legal positivists, as described in the passage, agree with which one of the following statements?" },
    { type: 'options', items: [
      "(A) Judges sometimes ought to be allowed to use personal moral convictions as a basis for a legal interpretation.",
      "(B) Disagreements about the meaning of a law are never legitimate.",
      "(C) The ultimate standard of interpretation is the logic of the law itself, not moral intuition.",
      "(D) The meaning of a law derives from jurists’ interpretations of that law. (Correct)",
      "(E) There is no legal fact of the matter when jurists have differing moral convictions about an issue."
    ]},
    { type: 'h4', text: "Analysis" },
    { type: 'paragraph', text: "This 3rd-party viewpoint question should be resolved by matching each choice to what the passage actually establishes. Use the opening and closing claims as scope anchors, then select the option that satisfies the stem without unsupported assumptions." },
    { type: 'callout', title: "Text Evidence", variant: "tip", text: "Anchor your reading in phrases such as 'Ronald Dworkin argues that judges are in danger of uncritically embracing...' and 'Once we realize, as Dworkin does, that the law has an...' when checking whether a choice preserves the passage's emphasis." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
        { title: "(A)", text: "This is incorrect. The passage states positivists believe 'law and morality are wholly distinct.' They would not support using personal moral convictions. Additional check: trap type is unsupported inference, because the passage never supplies the missing support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(B)", text: "This is too extreme. The passage says positivists view disagreements as legitimate if they are 'over what the underlying convention is.' Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(C)", text: "This describes Dworkin's theory, not legal positivism. The 'internal logic' of the law is Dworkin's alternative to the positivist view. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" },
        { title: "(D)", text: "This aligns with the description of legal positivism. The passage explains that for positivists, the law's meaning comes from 'social convention,' determined by reaching a 'consensus' among legal professionals (jurists). Therefore, the meaning derives from what these interpreters agree it means. Additional check: this is strongest because it directly satisfies the stem while preserving the passage's scope and emphasis.", badge: "Correct", badgeColor: "green" },
        { title: "(E)", text: "This is a misreading. The passage states that for positivists, there is no legal fact when there is 'no consensus' on the law's meaning, not necessarily when jurists have different moral views. Additional check: this option misses the stem by adding assumptions or emphasis that the passage does not support.", badge: "Incorrect", badgeColor: "red" }
    ]}
  ]
};
