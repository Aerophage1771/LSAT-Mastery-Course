import { Lesson, ContentBlock } from '../../types';

const mathPassageText = `What it means to “explain” something in science often comes down to the application of mathematics. Some thinkers hold that mathematics is a kind of language—a systematic contrivance of signs, the criteria for the authority of which are internal coherence, elegance, and depth. The application of such a highly artificial system to the physical world, they claim, results in the creation of a kind of statement about the world. Accordingly, what matters in the sciences is finding a mathematical concept that attempts, as other language does, to accurately describe the functioning of some aspect of the world.
At the center of the issue of scientific knowledge can thus be found questions about the relationship between language and what it refers to. A discussion about the role played by language in the pursuit of knowledge has been going on among linguists for several decades. The debate centers around whether language corresponds in some essential way to objects and behaviors, making knowledge a solid and reliable commodity; or, on the other hand, whether the relationship between language and things is purely a matter of agreed-upon conventions, making knowledge tenuous, relative, and inexact.g wider acceptance. According to linguists who support this theory, the way language is used varies depending upon changes in accepted practices and theories among those who work in a particular discipline. These linguists argue that, in the pursuit of knowledge, a statement is true only when there are no promising alternatives that might lead one to question it. Certainly this characterization would seem to be applicable to the sciences. In science, a mathematical statement may be taken to account for every aspect of a phenomenon it is applied to, but, some would argue, there is nothing inherent in mathematical language that guarantees such a correspondence. Under this view, acceptance of a mathematical statement by the scientific community—by virtue of the statement’s predictive power or methodological efficiency—transforms what is basically an analogy or metaphor into an explanation of the physical process in question, to be held as true until another, more compelling analogy takes its place.
In pursuing the implications of this theory, linguists have reached the point at which they must ask: If words or sentences do not correspond in an essential way to life or to our ideas about life, then just what are they capable of telling us about the world? In science and mathematics, then, it would seem equally necessary to ask: If models of electrolytes or E = mc2, say, do not correspond essentially to the physical world, then just what functions do they perform in the acquisition of scientific knowledge? But this question has yet to be significantly addressed in the sciences.`;

const benthamPassageText = `By the time Bentham turned his interest to the subject, late in the eighteenth century, most components of modern evidence law had been assembled. Among common-law doctrines regarding evidence there were, however, principles that today are regarded as bizarre; thus, a well-established (but now abandoned) rule forbade the parties to a case from testifying. Well into the nineteenth century, even defendants in criminal cases were denied the right to testify to facts that would prove their innocence.
Although extreme in its irrationality, this proscription was in other respects quite typical of the law of evidence. Much of that law consisted of rules excluding relevant evidence, usually on some rational grounds. Hearsay evidence was generally excluded because absent persons could not be cross-examined. Yet such evidence was mechanically excluded even where out-of-court statements were both relevant and reliable, but the absent persons could not appear in court (for example, because they were dead).
The morass of evidentiary technicalities often made it unlikely that the truth would emerge in a judicial contest, no matter how expensive and protracted. Reform was frustrated both by the vested interests of lawyers and by the profession’s reverence for tradition and precedent. Bentham’s prescription was revolutionary: virtually all evidence tending to prove or disprove the issue in dispute should be admissible. Narrow exceptions were envisioned: instances in which the trouble or expense of presenting or considering proof outweighed its value, confessions to a Catholic priest, and a few other instances.
One difficulty with Bentham’s nonexclusion principle is that some kinds of evidence are inherently unreliable or misleading. Such was the argument underlying the exclusions of interested-party testimony and hearsay evidence. Bentham argued that the character of evidence should be weighed by the jury: the alternative was to prefer ignorance to knowledge. Yet some evidence, although relevant, is actually more likely to produce a false jury verdict than a true one. To use a modern example, evidence of a defendant’s past bank robberies is excluded, since the prejudicial character of the evidence substantially outweighs its value in helping the jury decide correctly. Further, in granting exclusions such as sacramental confessions, Bentham conceded that competing social interests or values might override the desire for relevant evidence. But then, why not protect conversations between social workers and their clients, or parents and children?
Despite concerns such as these, the approach underlying modern evidence law began to prevail soon after Bentham’s death: relevant evidence should be admitted unless there are clear grounds of policy for excluding it. This clear-grounds proviso allows more exclusions than Bentham would have liked, but the main thrust of the current outlook is Bentham’s own nonexclusion principle, demoted from a rule to a presumption.`;

const clsPassageText = `Philosopher Denise Meyerson views the Critical Legal Studies (CLS) movement as seeking to debunk orthodox legal theory by exposing its contradictions. However, Meyerson argues that CLS proponents tend to see contradictions where none exist, and that CLS overrates the threat that conflict poses to orthodox legal theory.
According to Meyerson, CLS proponents hold that the existence of conflicting values in the law implies the absence of any uniquely right solution to legal cases. CLS argues that these conflicting values generate equally plausible but opposing answers to any given legal question, and, consequently, that the choice between the conflicting answers must necessarily be arbitrary or irrational. Meyerson denies that the existence of conflicting values makes a case irresolvable, and asserts that at least some such cases can be resolved by ranking the conflicting values. For example, a lawyer’s obligation to preserve a client’s confidences may entail harming other parties, thus violating moral principle. This conflict can be resolved if it can be shown that in certain cases the professional obligation overrides ordinary moral obligations.
In addition, says Meyerson, even when the two solutions are equally compelling, it does not follow that the choice between them must be irrational. On the contrary, a solution that is not rationally required need not be unreasonable. Meyerson concurs with another critic that instead of concentrating on the choice between two compelling alternatives, we should rather reflect on the difference between both of these answers on the one hand, and some utterly unreasonable answer on the other—such as deciding a property dispute on the basis of which claimant is louder. The acknowledgment that conflicting values can exist, then, does not have the far-reaching implications imputed by CLS; even if some answer to a problem is not the only answer, opting for it can still be reasonable.
Last, Meyerson takes issue with the CLS charge that legal formalism, the belief that there is a quasi-deductive method capable of giving solutions to problems of legal choice, requires objectivism, the belief that the legal process has moral authority. Meyerson claims that showing the law to be unambiguous does not demonstrate its legitimacy: consider a game in which participants compete to steal the item of highest value from a shop; while a person may easily identify the winner in terms of the rules, it does not follow that the person endorses the rules of the game. A CLS scholar might object that legal cases are unlike games, in that one cannot merely apply the rules without appealing to, and therefore endorsing, external considerations of purpose, policy, and value. But Meyerson replies that such considerations may be viewed as part of, not separate from, the rules of the game.`;

const dworkinPassageText = `Ronald Dworkin argues that judges are in danger of uncritically embracing an erroneous theory known as legal positivism because they think the only alternative is a theory that they (and Dworkin) see as clearly unacceptable—natural law. The latter theory holds that judges ought to interpret the law by consulting their own moral convictions, even if this means ignoring the letter of the law and the legal precedents for its interpretation. Dworkin regards this as an impermissible form of judicial activism that arrogates to judges powers properly reserved for legislators.
Legal positivism, the more popular of the two theories, holds that law and morality are wholly distinct. The meaning of the law rests on social convention in the same way as does the meaning of a word. Dworkin’s view is that legal positivists regard disagreement among jurists as legitimate only if it arises over what the underlying convention is, and it is to be resolved by registering a consensus, not by deciding what is morally right. In the same way, disagreement about the meaning of a word is settled by determining how people actually use it, and not by deciding what it ought to mean. Where there is no consensus, there is no legal fact of the matter. The judge’s interpretive role is limited to discerning this consensus, or the absence thereof.
According to Dworkin, this account is incompatible with the actual practice of judges and lawyers, who act as if there is a fact of the matter even in cases where there is no consensus. The theory he proposes seeks to validate this practice without falling into what Dworkin correctly sees as the error of natural law theory. It represents a kind of middle ground between the latter and legal positivism. Dworkin stresses the fact that there is an internal logic to a society’s laws and the general principles they typically embody. An interpretation that conforms to these principles may be correct even if it is not supported by a consensus. Since these general principles may involve such moral concepts as justice and fairness, judges may be called upon to consult their own moral intuitions in arriving at an interpretation. But this is not to say that judges are free to impose their own morality at will, without regard to the internal logic of the laws.
The positivist’s mistake, as Dworkin points out, is assuming that the meaning of the law can only consist in what people think it means, whether these people be the original authors of the law or a majority of the interpreter’s peers. Once we realize, as Dworkin does, that the law has an internal logic of its own that constrains interpretation, we open up the possibility of improving upon the interpretations not only of our contemporaries but of the original authors.`;

const riskPassageText = `Recent investigations into the psychology of decision making have sparked interest among scholars seeking to understand why governments sometimes take gambles that appear theoretically unjustifiable on the basis of expected costs and benefits. Researchers have demonstrated some significant discrepancies between objective measurements of possible decision outcomes and the ways in which people subjectively value such possible results. Many of these discrepancies relate to the observation that a possible outcome perceived as a loss typically motivates more strongly than the prospect of an equivalent gain. Risk-taking is thus a more common strategy for those who believe they will lose what they already possess than it is for those who wish to gain something they do not have.
Previously, the notion that rational decision makers prefer risk-avoiding choices was considered to apply generally, epitomized by the assumption of many economists that entrepreneurs and consumers will choose a risky venture over a sure thing only when the expected measurable value of the outcome is sufficiently high to compensate the decision maker for taking the risk. What is the minimum prize that would be required to make a gamble involving a 50 percent chance of losing $100 and a 50 percent chance of winning the prize acceptable? It is commonplace that the pleasure of winning a sum of money is much less intense than the pain of losing the same amount; accordingly, such a gamble would typically be accepted only when the possible gain greatly exceeds the possible loss. Research subjects do, in fact, commonly judge that a 50 percent chance to lose $100 is unacceptable unless it is combined with an equal chance to win more than $300. Nevertheless, the recent studies indicate that risk-accepting strategies are common when the alternative to a sure loss is a substantial chance of losing an even larger amount, coupled with some chance—even a small one—of losing nothing.
Such observations are quite salient to scholars of international conflict and crisis. For example, governments typically are cautious in foreign policy initiatives that entail risk, especially the risk of armed conflict. But nations also often take huge gambles to retrieve what they perceive to have been taken from them by other nations. This type of motivation, then, can lead states to take risks that far outweigh the objectively measurable value of the lost assets. For example, when Britain and Argentina entered into armed conflict in 1982 over possession of the Falkland Islands—or Malvinas, as they are called in Spanish—each viewed the islands as territory that had been taken from them by the other; thus each was willing to commit enormous resources—and risks—to recapturing them. In international affairs, it is vital that each actor in such a situation understand the other’s subjective view of what is at stake.`;

const sociologyPassageText = `In explaining the foundations of the discipline known as historical sociology—the examination of history using the methods of sociology—historical sociologist Philip Abrams argues that, while people are made by society as much as society is made by people, sociologists’ approach to the subject is usually to focus on only one of these forms of influence to the exclusion of the other. Abrams insists on the necessity for sociologists to move beyond these one-sided approaches to understand society as an entity constructed by individuals who are at the same time constructed by their society. Abrams refers to this continuous process as “structuring.”
Abrams also sees history as the result of structuring. People, both individually and as members of collectives, make history. But our making of history is itself formed and informed not only by the historical conditions we inherit from the past, but also by the prior formation of our own identities and capacities, which are shaped by what Abrams calls “contingencies”—social phenomena over which we have varying degrees of control. Contingencies include such things as the social conditions under which we come of age, the condition of our household’s economy, the ideologies available to help us make sense of our situation, and accidental circumstances. The ways in which contingencies affect our individual or group identities create a structure of forces within which we are able to act, and that partially determines the sorts of actions we are able to perform.
In Abrams’s analysis, historical structuring, like social structuring, is manifold and unremitting. To understand it, historical sociologists must extract from it certain significant episodes, or events, that their methodology can then analyze and interpret. According to Abrams, these events are points at which action and contingency meet, points that represent a cross section of the specific social and individual forces in play at a given time. At such moments, individuals stand forth as agents of history not simply because they possess a unique ability to act, but also because in them we see the force of the specific social conditions that allowed their actions to come forth. Individuals can “make their mark” on history, yet in individuals one also finds the convergence of wider social forces. In order to capture the various facets of this mutual interaction, Abrams recommends a fourfold structure to which he believes the investigations of historical sociologists should conform: first, description of the event itself; second, discussion of the social context that helped bring the event about and gave it significance; third, summary of the life history of the individual agent in the event; and fourth, analysis of the consequences of the event both for history and for the individual.`;

const copyrightPassageText = `The following passage was written in the mid-1990s.
Users of the Internet—the worldwide network of interconnected computer systems—envision it as a way for people to have free access to information via their personal computers. Most Internet communication consists of sending electronic mail or exchanging ideas on electronic bulletin boards; however, a growing number of transmissions are of copyrighted works—books, photographs, videos and films, and sound recordings. In Canada, as elsewhere, the goals of Internet users have begun to conflict with reality as copyright holders look for ways to protect their material from unauthorized and uncompensated distribution.
Copyright experts say that Canadian copyright law, which was revised in 1987 to cover works such as choreography and photography, has not kept pace with technology—specifically with digitalization, the conversion of data into a series of digits that are transmitted as electronic signals over computer networks. Digitalization makes it possible to create an unlimited number of copies of a book, recording, or movie and distribute them to millions of people around the world. Current law prohibits unauthorized parties from reproducing a work or any substantial part of it in any material form (e.g., photocopies of books or pirated audiotapes), but because digitalization merely transforms the work into electronic signals in a computer’s memory, it is not clear whether digitalization constitutes a material reproduction—and so unauthorized digitalization is not yet technically a crime.
Some experts propose simply adding unauthorized digitalization to the list of activities proscribed under current law, to make it clear that copyright holders own electronic reproduction rights just as they own rights to other types of reproduction. But criminalizing digitalization raises a host of questions. For example, given that digitalization allows the multiple recipients of a transmission to re-create copies of a work, would only the act of digitalization itself be criminal, or should each copy made from the transmission be considered a separate instance of piracy—even though those who made the copies never had access to the original? In addition, laws against digitalization might be virtually unenforceable given that an estimated 20 million people around the world have access to the Internet, and that copying and distributing material is a relatively simple process. Furthermore, even an expanded law might not cover the majority of transmissions, given the vast numbers of users who are academics and the fact that current copyright law allows generous exemptions for those engaged in private study or research. But even if the law is revised to contain a more sophisticated treatment of digitalization, most experts think it will be hard to resolve the clash between the Internet community, which is accustomed to treating information as raw material available for everyone to use, and the publishing community, which is accustomed to treating it as a commodity owned by its creator.`;


export const Lesson1_AdvancedRCQuestionRepository: Lesson = {
  id: "53-1",
  title: "Advanced RC Question Bank",
  content: [
    { type: 'h2', text: 'Advanced Reading Comprehension Question Repository' },
    { type: 'paragraph', text: 'This repository contains advanced Reading Comprehension questions from the course drills. Use this section for targeted practice and review. Entries marked **[Missing ID]** or **[Content in Module X]** indicate the question is taught elsewhere or the official PT ID is not recorded here.' },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Mathematics as Language (PT-108-S-1-P-4)',
      content: mathPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 22: Main Point',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following statements most accurately expresses the passage’s main point?" },
        { type: 'options', items: [
          "(A) Although scientists must rely on both language and mathematics in their pursuit of scientific knowledge, each is an imperfect tool for perceiving and interpreting aspects of the physical world. [18.0%]",
          "(B) The acquisition of scientific knowledge depends on an agreement among scientists to accept some mathematical statements as more precise than others while acknowledging that all mathematics is inexact. [9.0%]",
          "(C) If science is truly to progress, scientists must temporarily abandon the pursuit of new knowledge in favor of a systematic analysis of how the knowledge they already possess came to be accepted as true. [2.0%]",
          "(D) In order to better understand the acquisition of scientific knowledge, scientists must investigate mathematical statements’ relationship to the world just as linguists study language’s relationship to the world. [70.0%] (Correct)",
          "(E) Without the debates among linguists that preceded them, it is unlikely that scientists would ever have begun to explore the essential role played by mathematics in the acquisition of scientific knowledge. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Weaken/Strengthen',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following statements, if true, lends the most support to the view that language has an essential correspondence to the things it describes?" },
        { type: 'options', items: [
          "(A) The categories of physical objects employed by one language correspond remarkably to the categories employed by another language that developed independently of the first. [73.0%] (Correct)",
          "(B) The categories of physical objects employed by one language correspond remarkably to the categories employed by another language that derives from the first. [3.0%]",
          "(C) The categories of physical objects employed by speakers of a language correspond remarkably to the categories employed by other speakers of the same language. [11.0%]",
          "(D) The sentence structures of languages in scientifically sophisticated societies vary little from language to language. [3.0%]",
          "(E) Native speakers of many languages believe that the categories of physical objects employed by their language correspond to natural categories of objects in the world. [10.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** According to the passage, mathematics can be considered a language because it" },
        { type: 'options', items: [
          "(A) conveys meaning in the same way that metaphors do [5.0%]",
          "(B) constitutes a systematic collection of signs [65.0%] (Correct)",
          "(C) corresponds exactly to aspects of physical phenomena [5.0%]",
          "(D) confers explanatory power on scientific theories [18.0%]",
          "(E) relies on previously agreed-upon conventions [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Paragraph Function',
      content: [
        { type: 'blockquote', text: "**Question:** The primary purpose of the third paragraph is to" },
        { type: 'options', items: [
          "(A) offer support for the view of linguists who believe that language has an essential correspondence to things [4.0%]",
          "(B) elaborate the position of linguists who believe that truth is merely a matter of convention [59.0%] (Correct)",
          "(C) illustrate the differences between the essentialist and conventionalist positions in the linguists’ debate [4.0%]",
          "(D) demonstrate the similarity of the linguists’ debate to a current debate among scientists about the nature of explanation [27.0%]",
          "(E) explain the theory that mathematical statements are a kind of language [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: 3rd-Party Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** Based on the passage, linguists who subscribe to the theory that “the relationship between language and things is purely a matter of agreed-upon conventions\" (near the end of the second paragraph) would hold that the statement “The ball is red” is true because" },
        { type: 'options', items: [
          "(A) speakers of English have accepted that “The ball is red” applies to the particular physical relationship being described [79.0%] (Correct)",
          "(B) speakers of English do not accept that synonyms for “ball” and “red” express these concepts as elegantly [8.0%]",
          "(C) “The ball is red” corresponds essentially to every aspect of the particular physical relationship being described [7.0%]",
          "(D) “ball” and “red” actually refer to an entity and a property respectively [4.0%]",
          "(E) “ball” and “red” are mathematical concepts that attempt to accurately describe some particular physical relationship in the world [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Bentham\'s Legal Reforms (PT-109-S-2-P-4)',
      content: benthamPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is the main idea of the passage?" },
        { type: 'options', items: [
          "(A) Bentham questioned the expediency of modern rules of legal evidence. [3.0%]",
          "(B) Bentham’s proposed reform of rules of evidence was imperfect but beneficial. [90.0%] (Correct)",
          "(C) Bentham’s nonexclusion principle should be reexamined in the light of subsequent developments. [2.0%]",
          "(D) Rules of legal evidence inevitably entail imperfect mediations of conflicting values and constraints. [4.0%]",
          "(E) Despite their impairment of judicial efficiency, rules of legal evidence are resistant to change. [0.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Author Attitude',
      content: [
        { type: 'blockquote', text: "**Question:** The author’s attitude toward eighteenth-century lawyers can best be described as" },
        { type: 'options', items: [
          "(A) sympathetic [7.0%]",
          "(B) critical [68.0%] (Correct)",
          "(C) respectful [7.0%]",
          "(D) scornful [7.0%]",
          "(E) ambivalent [12.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Phrase Function',
      content: [
        { type: 'blockquote', text: "**Question:** The author mentions “conversations between social workers and their clients” (last sentence of the fourth paragraph) most probably in order to" },
        { type: 'options', items: [
          "(A) suggest a situation in which application of the nonexclusion principle may be questionable [61.0%] (Correct)",
          "(B) cite an example of objections that were raised to Bentham’s proposed reform [10.0%]",
          "(C) illustrate the conflict between competing social interests [18.0%]",
          "(D) demonstrate the difference between social interests and social values [3.0%]",
          "(E) emphasize that Bentham’s exceptions to the nonexclusion principle covered a wide range of situations [8.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following statements concerning the history of the law of evidence is supported by information in the passage?" },
        { type: 'options', items: [
          "(A) Common-law rules of evidence have been replaced by modern principles. [14.0%]",
          "(B) Modern evidence law is less rigid than was eighteenth-century evidence law. [46.0%] (Correct)",
          "(C) Some current laws regarding evidence do not derive from common-law doctrines. [32.0%]",
          "(D) The late eighteenth century marked the beginning of evidence law. [7.0%]",
          "(E) Prior to the eighteenth century, rules of evidence were not based on common law. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 27: Passage Purpose',
      content: [
        { type: 'blockquote', text: "**Question:** The passage is primarily concerned with which one of the following?" },
        { type: 'options', items: [
          "(A) suggesting the advantages and limitations of a legal reform [64.0%] (Correct)",
          "(B) summarizing certain deficiencies of an outmoded legal system [21.0%]",
          "(C) justifying the apparent inadequacies of current evidence law [5.0%]",
          "(D) detailing objections to the nonexclusion principle [8.0%]",
          "(E) advocating reexamination of a proposal that has been dismissed by the legal profession [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 28: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** According to the fourth paragraph of the passage, what specifically does Bentham characterize as preference of ignorance to knowledge?" },
        { type: 'options', items: [
          "(A) uncritical acceptance of legal conventions [3.0%]",
          "(B) failure to weigh the advantages of legal reform [2.0%]",
          "(C) exclusion of sacramental confessions [11.0%]",
          "(D) refusal to allow the jury to hear and assess relevant testimony [78.0%] (Correct)",
          "(E) rejection of exceptions to Bentham’s nonexclusion principle [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Critical Legal Studies (PT-110-S-4-P-3)',
      content: clsPassageText,
    },
     { 
      type: 'accordion', 
      title: 'Question 15: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following best expresses the main idea of the passage?" },
        { type: 'options', items: [
          "(A) The arguments of the Critical Legal Studies movement are under attack not only by legal theorists, but also by thinkers in related areas such as philosophy. [1.0%]",
          "(B) In critiquing the Critical Legal Studies movement, Meyerson charges that the positions articulated by the movement’s proponents overlook the complexity of actual legal dilemmas. [11.0%]",
          "(C) Meyerson objects to the propositions of the Critical Legal Studies movement because she views them as being self-contradictory. [4.0%]",
          "(D) Meyerson poses several objections to the tenets of the Critical Legal Studies movement, but her most important argument involves constructing a hierarchy of conflicting values. [8.0%]",
          "(E) Meyerson seeks to counter the claims that are made by proponents of the Critical Legal Studies movement in their effort to challenge conventional legal theory. [76.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 16: Phrase Function',
      content: [
        { type: 'blockquote', text: "**Question:** The primary purpose of the reference to a game in the last paragraph is to" },
        { type: 'options', items: [
          "(A) provide an example of how a principle has previously been applied [3.0%]",
          "(B) demonstrate a point by means of an analogy [94.0%] (Correct)",
          "(C) emphasize the relative unimportance of an activity [1.0%]",
          "(D) contrast two situations by exaggerating their differences [1.0%]",
          "(E) dismiss an idea by portraying it as reprehensible [1.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 17: Passage Purpose',
      content: [
        { type: 'blockquote', text: "**Question:** The author’s primary purpose in the passage is to" },
        { type: 'options', items: [
          "(A) evaluate divergent legal doctrines [4.0%]",
          "(B) explain how a controversy arose [2.0%]",
          "(C) advocate a new interpretation of legal tradition [3.0%]",
          "(D) describe a challenge to a school of thought [79.0%] (Correct)",
          "(E) refute claims made by various scholars [12.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 18: Inference (Author Viewpoint)',
      content: [
        { type: 'blockquote', text: "**Question:** It can be inferred from the passage that Meyerson would be most likely to agree with which one of the following statements about “external considerations” (second-to-last sentence of the passage)?" },
        { type: 'options', items: [
          "(A) How one determines the extent to which these considerations are relevant depends on one’s degree of belief in the legal process. [12.0%]",
          "(B) The extent to which these considerations are part of the legal process depends on the extent to which the policies and values can be endorsed. [25.0%]",
          "(C) When these considerations have more moral authority than the law, the former should outweigh the latter. [5.0%]",
          "(D) If one uses these considerations in determining a legal solution, one is assuming that the policies and values are desirable. [14.0%]",
          "(E) Whether these considerations are separate from or integral to the legal process is a matter of debate. [44.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 19: Phrase Meaning',
      content: [
        { type: 'blockquote', text: "**Question:** The phrase “far-reaching implications” (last sentence of the third paragraph) refers to the idea that" },
        { type: 'options', items: [
          "(A) any choice made between conflicting solutions to a legal question will be arbitrary [60.0%] (Correct)",
          "(B) every legal question will involve the consideration of a set of values [7.0%]",
          "(C) two or more alternative solutions to a legal question may carry equal moral weight [10.0%]",
          "(D) no legal question will have a single correct answer [16.0%]",
          "(E) the most relevant criterion for judging solutions is the degree of rationality they possess [7.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 20: Structure',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately describes the organization of the final paragraph in the passage?" },
        { type: 'options', items: [
          "(A) A criticism is identified and its plausibility is investigated. [42.0%] (Correct)",
          "(B) The different arguments made by two opponents of a certain viewpoint are advanced. [24.0%]",
          "(C) The arguments for and against a certain position are outlined, then a new position is offered to reconcile them. [13.0%]",
          "(D) A belief is presented and its worth is debated on the basis of its practical consequences. [18.0%]",
          "(E) Two different solutions are imagined in order to summarize a controversy. [4.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 21: Inference (3rd-Party Viewpoint)',
      content: [
        { type: 'blockquote', text: "**Question:** It can be inferred from the passage that proponents of the Critical Legal Studies movement would be most likely to hold which one of the following views about the law?" },
        { type: 'options', items: [
          "(A) It incorporates moral principles in order to yield definitive solutions to legal problems. [17.0%]",
          "(B) It does not necessarily imply approval of any policies or values. [10.0%]",
          "(C) It is insufficient in itself to determine the answer to a legal question. [62.0%] (Correct)",
          "(D) It is comparable to the application of rules in a game. [4.0%]",
          "(E) It can be used to determine the best choice between conflicting values. [7.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Dworkin\'s Legal Theory (PT-111-S-2-P-4)',
      content: dworkinPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 21: Main Point',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) Dworkin regards natural law theory as a middle ground between legal positivism and judicial activism.",
          "(B) Dworkin holds that judicial interpretations should not be based solely on identifying a consensus or solely on moral intuition, but should be consistent with the reasoning that underlies the law. (Correct)",
          "(C) Dworkin argues that the internal logic of the law should generally guide judges except in instances where consensus is registered or judges have strong moral intuitions.",
          "(D) Dworkin’s theory of legal interpretation is based on borrowing equally from natural law theory and legal positivism.",
          "(E) Dworkin validates judges’ dependence on moral intuition, reason, and the intent of the authors of a law, but only in cases where a social consensus is not present."
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 22: Paragraph Function',
      content: [
        { type: 'blockquote', text: "**Question:** What is the main purpose of the second paragraph?" },
        { type: 'options', items: [
          "(A) to explain why legal positivism is so popular",
          "(B) to evaluate the theory of legal positivism",
          "(C) to discuss how judicial consensus is determined",
          "(D) to identify the basic tenets of legal positivism (Correct)",
          "(E) to argue in favor of the theory of legal positivism"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Author Attitude',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately characterizes the author’s attitude toward Dworkin’s theory?" },
        { type: 'options', items: [
          "(A) confident endorsement of its central assertions (Correct)",
          "(B) caution about its potential for justifying some forms of judicial activism",
          "(C) modest expectation that some of its claims will be found to be unwarranted",
          "(D) quiet conviction that its importance derives only from its originality",
          "(E) enthusiasm that it will replace legal positivism as the most popular theory of legal interpretation"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** According to the passage, which one of the following is a goal of Dworkin’s theory of legal interpretation?" },
        { type: 'options', items: [
          "(A) to evaluate previous legal interpretations by judges influenced by legal positivism",
          "(B) to dispute the notion that social consensus plays any role in legal interpretation",
          "(C) to provide a theoretical argument against the use of moral intuition in legal interpretation",
          "(D) to argue that legal decisions must be based on the principles of the original authors of the laws",
          "(E) to validate theoretically the method commonly used by judges in practice (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** The passage suggests that Dworkin would be most likely to agree with which one of the following statements?" },
        { type: 'options', items: [
          "(A) Judges and lawyers too often act as though there is a fact of the matter in legal cases.",
          "(B) Judges should not use their moral intuition when it conflicts with the intentions of those legislators who authored the law being interpreted.",
          "(C) Legal positivism is a more popular theory than natural law theory because legal positivism simplifies the judge’s role.",
          "(D) If there is consensus about how to interpret a law, then jurists should not examine the internal logic of the law being interpreted.",
          "(E) Legal positivists misunderstand the role of moral intuition in legal interpretation. (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: 3rd-Party Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** It can be inferred that legal positivists, as described in the passage, agree with which one of the following statements?" },
        { type: 'options', items: [
          "(A) Judges sometimes ought to be allowed to use personal moral convictions as a basis for a legal interpretation.",
          "(B) Disagreements about the meaning of a law are never legitimate.",
          "(C) The ultimate standard of interpretation is the logic of the law itself, not moral intuition.",
          "(D) The meaning of a law derives from jurists’ interpretations of that law. (Correct)",
          "(E) There is no legal fact of the matter when jurists have differing moral convictions about an issue."
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Psychology of Risk (PT-113-S-1-P-4)',
      content: riskPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 22: Application',
      content: [
        { type: 'blockquote', text: "**Question:** Suppose that a country seizes a piece of territory with great mineral wealth that is claimed by a neighboring country, with a concomitant risk of failure involving moderate but easily tolerable harm in the long run. Given the information in the passage, the author would most likely say that" },
        { type: 'options', items: [
          "(A) the country’s actions are consistent with previously accepted views of the psychology of risk-taking [44.0%] (Correct)",
          "(B) the new research findings indicate that the country from which the territory has been seized probably weighs the risk factors involved in the situation similarly to the way in which they are weighed by the aggressor nation [11.0%]",
          "(C) in spite of surface appearances to the contrary, the new research findings suggest that the objective value of the potential gain is overridden by the risks [16.0%]",
          "(D) the facts of the situation show that the government is motivated by factors other than objective calculation of the measurable risks and probable benefits [17.0%]",
          "(E) the country’s leaders most likely subjectively perceive the territory as having been taken from their country in the past [12.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 23: Function',
      content: [
        { type: 'blockquote', text: "**Question:** The question in the second sentence of the second paragraph functions primarily as" },
        { type: 'options', items: [
          "(A) the introduction to a thought experiment whose results the author expects will vary widely among different people [4.0%]",
          "(B) a rhetorical question whose assumed answer is in conflict with the previously accepted view concerning risk-taking behavior [25.0%]",
          "(C) the basis for an illustration of how the previously accepted view concerning risk-taking behavior applies accurately to some types of situations [63.0%] (Correct)",
          "(D) a suggestion that the discrepancies between subjective and objective valuations of possible decision outcomes are more illusive than real [4.0%]",
          "(E) a transitional device to smooth an otherwise abrupt switch from discussion of previous theories to discussion of some previously unaccepted research findings [5.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** It can most reasonably be inferred from the passage that the author would agree with which one of the following statements?" },
        { type: 'options', items: [
          "(A) When states try to regain losses through risky conflict, they generally are misled by inadequate or inaccurate information as to the risks that they run in doing so. [5.0%]",
          "(B) Government decision makers subjectively evaluate the acceptability of risks involving national assets in much the same way that they would evaluate risks involving personal assets. [41.0%] (Correct)",
          "(C) A new method for predicting and mediating international conflict has emerged from a synthesis of the fields of economics and psychology. [10.0%]",
          "(D) Truly rational decision making is a rare phenomenon in international crises and can, ironically, lead to severe consequences for those who engage in it. [11.0%]",
          "(E) Contrary to previous assumptions, people are more likely to take substantial risks when their subjective assessments of expected benefits match or exceed the objectively measured costs. [33.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Structure',
      content: [
        { type: 'blockquote', text: "**Question:** The passage can be most accurately described as" },
        { type: 'options', items: [
          "(A) a psychological analysis of the motives involved in certain types of collective decision making in the presence of conflict [14.0%]",
          "(B) a presentation of a psychological hypothesis which is then subjected to a political test case [13.0%]",
          "(C) a suggestion that psychologists should incorporate the findings of political scientists into their research [3.0%]",
          "(D) an examination of some new psychological considerations regarding risk and their application to another field of inquiry [68.0%] (Correct)",
          "(E) a summary of two possible avenues for understanding international crises and conflicts [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: Author Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** The passage most clearly suggests that the author would agree with which one of the following statements?" },
        { type: 'options', items: [
          "(A) Researchers have previously been too willing to accept the claims that subjects make about their preferred choices in risk-related decision problems. [6.0%]",
          "(B) There is inadequate research support for the hypothesis that except when a gamble is the only available means for averting an otherwise certain loss, people typically are averse to risk-taking. [9.0%]",
          "(C) It can reasonably be argued that the risk that Britain accepted in its 1982 conflict with Argentina outweighed the potential objectively measurable benefit of that venture. [62.0%] (Correct)",
          "(D) The new findings suggest that because of the subjective elements involved, governmental strategies concerning risks of loss in international crises will remain incomprehensible to outside observers. [9.0%]",
          "(E) Moderate risks in cases involving unavoidable losses are often taken on the basis of reasoning that diverges markedly from that which was studied in the recent investigations. [14.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Historical Sociology (PT-114-S-3-P-3)',
      content: sociologyPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 15: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately states the central idea of the passage?" },
        { type: 'options', items: [
          "(A) Abrams argues that historical sociology rejects the claims of sociologists who assert that the sociological concept of structuring cannot be applied to the interactions between individuals and history. [4.0%]",
          "(B) Abrams argues that historical sociology assumes that, despite the views of sociologists to the contrary, history influences the social contingencies that affect individuals. [5.0%]",
          "(C) Abrams argues that historical sociology demonstrates that, despite the views of sociologists to the contrary, social structures both influence and are influenced by the events of history. [37.0%]",
          "(D) Abrams describes historical sociology as a discipline that unites two approaches taken by sociologists to studying the formation of societies and applies the resulting combined approach to the study of history. [52.0%] (Correct)",
          "(E) Abrams describes historical sociology as an attempt to compensate for the shortcomings of traditional historical methods by applying the methods established in sociology. [3.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 16: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Given the passage’s argument, which one of the following sentences most logically completes the last paragraph?" },
        { type: 'options', items: [
          "(A) Only if they adhere to this structure, Abrams believes, can historical sociologists conclude with any certainty that the events that constitute the historical record are influenced by the actions of individuals. [3.0%]",
          "(B) Only if they adhere to this structure, Abrams believes, will historical sociologists be able to counter the standard sociological assumption that there is very little connection between history and individual agency. [4.0%]",
          "(C) Unless they can agree to adhere to this structure, Abrams believes, historical sociologists risk having their discipline treated as little more than an interesting but ultimately indefensible adjunct to history and sociology. [2.0%]",
          "(D) By adhering to this structure, Abrams believes, historical sociologists can shed light on issues that traditional sociologists have chosen to ignore in their one-sided approaches to the formation of societies. [38.0%]",
          "(E) By adhering to this structure, Abrams believes, historical sociologists will be able to better portray the complex connections between human agency and history. [54.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 17: Except, Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The passage states that a contingency could be each of the following EXCEPT:" },
        { type: 'options', items: [
          "(A) a social phenomenon [3.0%]",
          "(B) a form of historical structuring [64.0%] (Correct)",
          "(C) an accidental circumstance [10.0%]",
          "(D) a condition controllable to some extent by an individual [16.0%]",
          "(E) a partial determinant of an individual’s actions [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 18: Analogy',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following is most analogous to the ideal work of a historical sociologist as outlined by Abrams?" },
        { type: 'options', items: [
          "(A) In a report on the enactment of a bill into law, a journalist explains why the need for the bill arose, sketches the biography of the principal legislator who wrote the bill, and ponders the effect that the bill’s enactment will have both on society and on the legislator’s career. [67.0%] (Correct)",
          "(B) In a consultation with a patient, a doctor reviews the patient’s medical history, suggests possible reasons for the patient’s current condition, and recommends steps that the patient should take in the future to ensure that the condition improves or at least does not get any worse. [9.0%]",
          "(C) In an analysis of a historical novel, a critic provides information to support the claim that details of the work’s setting are accurate, explains why the subject of the novel was of particular interest to the author, and compares the novel with some of the author’s other books set in the same period. [9.0%]",
          "(D) In a presentation to stockholders, a corporation’s chief executive officer describes the corporation’s most profitable activities during the past year, introduces the vice president largely responsible for those activities, and discusses new projects the vice president will initiate in the coming year. [7.0%]",
          "(E) In developing a film based on a historical event, a filmmaker conducts interviews with participants in the event, bases part of the film’s screenplay on the interviews, and concludes the screenplay with a sequence of scenes speculating on the outcome of the event had certain details been different. [8.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 19: Purpose of Paragraph',
      content: [
        { type: 'blockquote', text: "**Question:** The primary function of the first paragraph of the passage is to" },
        { type: 'options', items: [
          "(A) outline the merits of Abrams’s conception of historical sociology [3.0%]",
          "(B) convey the details of Abrams’s conception of historical sociology [14.0%]",
          "(C) anticipate challenges to Abrams’s conception of historical sociology [2.0%]",
          "(D) examine the roles of key terms used in Abrams’s conception of historical sociology [3.0%]",
          "(E) identify the basis of Abrams’s conception of historical sociology [77.0%] (Correct)"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 20: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** Based on the passage, which one of the following is the LEAST illustrative example of the effect of a contingency upon an individual?" },
        { type: 'options', items: [
          "(A) the effect of the fact that a person experienced political injustice on that person’s decision to work for political reform [5.0%]",
          "(B) the effect of the fact that a person was raised in an agricultural region on that person’s decision to pursue a career in agriculture [3.0%]",
          "(C) the effect of the fact that a person lives in a particular community on that person’s decision to visit friends in another community [86.0%] (Correct)",
          "(D) the effect of the fact that a person’s parents practiced a particular religion on that person’s decision to practice that religion [4.0%]",
          "(E) the effect of the fact that a person grew up in financial hardship on that person’s decision to help others in financial hardship [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { type: 'hr' },
    { 
      type: 'accordion', 
      title: 'Passage: Digitalization and Copyright (PT-115-S-3-P-4)',
      content: copyrightPassageText,
    },
    { 
      type: 'accordion', 
      title: 'Question 24: Main Idea',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following most accurately expresses the main point of the passage?" },
        { type: 'options', items: [
          "(A) Despite the widely recognized need to revise Canadian copyright law to protect works from unauthorized reproduction and distribution over the Internet, users of the Internet have mounted many legal challenges to the criminalizing of digitalization. [6.0%]",
          "(B) Although the necessity of revising Canadian copyright law to protect works from unauthorized reproduction and distribution over the Internet is widely recognized, effective criminalizing of digitalization is likely to prove highly complicated. [88.0%] (Correct)",
          "(C) While the unauthorized reproduction and distribution of copyrighted works over the Internet is not yet a crime, legal experts believe it is only a matter of time before Canadian copyright law is amended to prohibit unauthorized digitalization. [2.0%]",
          "(D) Despite the fact that current Canadian copyright law does not cover digitalization, the unauthorized reproduction and distribution of copyrighted works over the Internet clearly ought to be considered a crime. [2.0%]",
          "(E) Although legal experts in Canada disagree about the most effective way to punish the unauthorized reproduction and distribution of copyrighted works over the Internet, they nonetheless agree that such digitalization should clearly be a punishable crime. [2.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 25: Application',
      content: [
        { type: 'blockquote', text: "**Question:** Given the author’s argument, which one of the following additions to current Canadian copyright law would most likely be an agreeable compromise to both the Internet community and the publishing community?" },
        { type: 'options', items: [
          "(A) Digitalization of copyrighted works is permitted to Internet users who pay a small fee to copyright holders. [65.0%] (Correct)",
          "(B) Digitalization of copyrighted works is prohibited to Internet users who are not academics. [7.0%]",
          "(C) Digitalization of copyrighted works is permitted to all Internet users without restriction. [3.0%]",
          "(D) Digitalization of copyrighted works is prohibited to all Internet users without exception. [2.0%]",
          "(E) Digitalization of copyrighted works is permitted to Internet users engaged in research. [23.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 26: Purpose of Paragraph',
      content: [
        { type: 'blockquote', text: "**Question:** The discussion in the second paragraph is intended primarily to explain which one of the following?" },
        { type: 'options', items: [
          "(A) how copyright infringement of protected works is punished under current Canadian copyright law [3.0%]",
          "(B) why current Canadian copyright law is not easily applicable to digitalization [83.0%] (Correct)",
          "(C) how the Internet has caused copyright holders to look for new forms of legal protection [5.0%]",
          "(D) why copyright experts propose protecting copyrighted works from unauthorized digitalization [4.0%]",
          "(E) how unauthorized reproductions of copyrighted works are transmitted over the Internet [6.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 27: Inference',
      content: [
        { type: 'blockquote', text: "**Question:** The passage supports each of the following inferences EXCEPT:" },
        { type: 'options', items: [
          "(A) It is unlikely that every instance of digitalization could be detected under a copyright law revised to criminalize digitalization. [3.0%]",
          "(B) Criminalizing unauthorized digitalization appears to be consistent with the publishing community’s treatment of information as an owned commodity. [10.0%]",
          "(C) When copyright law is revised to cover digitalization, the revised law will include a prohibition on making copies from an unauthorized digitalization of a copyrighted work. [47.0%] (Correct)",
          "(D) The number of instances of unauthorized digitalization would likely rise if digitalization technology were made even easier to use. [32.0%]",
          "(E) Under current law, many academics are allowed to make copies of copyrighted works as long as they are used only for private research. [9.0%]"
        ]}
      ] as ContentBlock[]
    },
    { 
      type: 'accordion', 
      title: 'Question 28: Other Viewpoint',
      content: [
        { type: 'blockquote', text: "**Question:** Which one of the following views can most reasonably be attributed to the experts cited in the first sentence of the third paragraph?" },
        { type: 'options', items: [
          "(A) Unauthorized digitalization of a copyrighted work should be considered a crime except when it is done for purposes of private study or research. [38.0%] (Correct)",
          "(B) Unauthorized digitalization of a copyrighted work should be considered a crime even when it is done for purposes of private study or research. [21.0%]",
          "(C) Making a copy of a copyrighted work from an unauthorized digitalization of the work should not be considered a crime. [5.0%]",
          "(D) Making a copy of a copyrighted work from an unauthorized digitalization of the work should be punished, but not as severely as making the original digitalization. [6.0%]",
          "(E) Making a copy of a copyrighted work from an unauthorized digitalization of the work should be punished just as severely as making the original digitalization. [30.0%]"
        ]}
      ] as ContentBlock[]
    },
  ]
};