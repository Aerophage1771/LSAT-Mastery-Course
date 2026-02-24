import { Lesson } from '../../types';

const passageText = `By the time Bentham turned his interest to the subject, late in the eighteenth century, most components of modern evidence law had been assembled. Among common-law doctrines regarding evidence there were, however, principles that today are regarded as bizarre; thus, a well-established (but now abandoned) rule forbade the parties to a case from testifying. Well into the nineteenth century, even defendants in criminal cases were denied the right to testify to facts that would prove their innocence.
Although extreme in its irrationality, this proscription was in other respects quite typical of the law of evidence. Much of that law consisted of rules excluding relevant evidence, usually on some rational grounds. Hearsay evidence was generally excluded because absent persons could not be cross-examined. Yet such evidence was mechanically excluded even where out-of-court statements were both relevant and reliable, but the absent persons could not appear in court (for example, because they were dead).
The morass of evidentiary technicalities often made it unlikely that the truth would emerge in a judicial contest, no matter how expensive and protracted. Reform was frustrated both by the vested interests of lawyers and by the profession’s reverence for tradition and precedent. Bentham’s prescription was revolutionary: virtually all evidence tending to prove or disprove the issue in dispute should be admissible. Narrow exceptions were envisioned: instances in which the trouble or expense of presenting or considering proof outweighed its value, confessions to a Catholic priest, and a few other instances.
One difficulty with Bentham’s nonexclusion principle is that some kinds of evidence are inherently unreliable or misleading. Such was the argument underlying the exclusions of interested-party testimony and hearsay evidence. Bentham argued that the character of evidence should be weighed by the jury: the alternative was to prefer ignorance to knowledge. Yet some evidence, although relevant, is actually more likely to produce a false jury verdict than a true one. To use a modern example, evidence of a defendant’s past bank robberies is excluded, since the prejudicial character of the evidence substantially outweighs its value in helping the jury decide correctly. Further, in granting exclusions such as sacramental confessions, Bentham conceded that competing social interests or values might override the desire for relevant evidence. But then, why not protect conversations between social workers and their clients, or parents and children?
Despite concerns such as these, the approach underlying modern evidence law began to prevail soon after Bentham’s death: relevant evidence should be admitted unless there are clear grounds of policy for excluding it. This clear-grounds proviso allows more exclusions than Bentham would have liked, but the main thrust of the current outlook is Bentham’s own nonexclusion principle, demoted from a rule to a presumption.`;

export const Lesson1_PassageAnalysis: Lesson = {
  id: "51-1",
  title: "Passage Analysis",
  content: [
    { type: 'accordion', title: 'Read Passage (PT-109-S-2-P-4)', content: passageText },
    { type: 'h3', text: "Passage Analysis: Bentham's Legal Reforms (PT-109-S-2-P-4)" },
    { type: 'paragraph', text: "The passage presents Bentham's nonexclusion principle as a pivotal reform in evidence law while also testing its limits. The author's stance is balanced: the principle transformed legal practice, but unqualified application creates serious problems." },
    { type: 'paragraph', text: "Follow the argument as historical diagnosis plus qualified endorsement. The first two paragraphs establish the failures of prior doctrine, the middle paragraphs introduce and stress-test Bentham's proposal, and the final paragraph explains his enduring influence." },
    { type: 'hr' },
    { type: 'h4', text: "Paragraph 1: Irrational Legacy of Early Evidence Law" },
    { type: 'paragraph', text: "The opening paragraph highlights older doctrines now seen as extreme, including barring parties from testifying in their own cases. The purpose is to establish the reform context as genuinely urgent." },
    { type: 'paragraph', text: "By foregrounding procedural absurdity, the author primes Bentham's intervention as both necessary and historically intelligible." },
    { type: 'h4', text: "Paragraph 2: Exclusion Rules as Obstacles to Truth" },
    { type: 'paragraph', text: "The second paragraph broadens the critique: even rationally motivated exclusions often operated mechanically and blocked probative evidence. Hearsay doctrine is used to show how formal consistency could undermine fact-finding." },
    { type: 'paragraph', text: "This paragraph deepens the diagnosis from isolated oddities to systemic truth-suppression." },
    { type: 'h4', text: "Paragraph 3: Bentham's Nonexclusion Principle" },
    { type: 'paragraph', text: "The third paragraph introduces Bentham's solution: presumptive admissibility for evidence relevant to the dispute, with narrow practical exceptions. The proposal is framed as revolutionary because it reverses default legal posture." },
    { type: 'paragraph', text: "Its central normative commitment is epistemic: legal systems should prefer more information unless concrete policy costs justify exclusion." },
    { type: 'h4', text: "Paragraph 4: Internal Tensions and Policy Limits" },
    { type: 'paragraph', text: "The fourth paragraph tests the proposal's boundaries. Some relevant evidence can predictably mislead juries, and social-value exceptions raise line-drawing problems." },
    { type: 'paragraph', text: "The passage shows that pure nonexclusion is difficult to sustain once fairness, prejudice, and competing institutional goals are taken seriously." },
    { type: 'h4', text: "Paragraph 5: Legacy Through Modified Adoption" },
    { type: 'paragraph', text: "The final paragraph resolves the apparent tension. Modern evidence law did not adopt Bentham's rule absolutely, but it adopted his orientation: admit relevant evidence absent clear policy grounds for exclusion." },
    { type: 'paragraph', text: "Bentham's principle survives as a presumption rather than a categorical command, which is presented as both practical compromise and intellectual victory." },
    { type: 'callout', title: "Summary of the Argument", variant: "summary", text: "The passage argues that Bentham transformed evidence law by shifting its default toward admissibility, correcting a truth-obscuring tradition of rigid exclusion. It also shows why unrestricted nonexclusion is untenable, concluding that Bentham's core idea prevails today as a governing presumption moderated by policy-based exceptions." }
  ]
};
