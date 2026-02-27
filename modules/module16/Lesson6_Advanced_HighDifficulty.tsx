import { Lesson } from '../../types';

export const Lesson6_Advanced_HighDifficulty: Lesson = {
  id: "16-6",
  title: "Advanced: High-Difficulty MSS Questions",
  content: [
    { type: 'h2', text: 'Advanced: High-Difficulty MSS Questions' },
    { type: 'paragraph', text: 'Easy and medium MSS questions typically involve a straightforward synthesis of two or three facts. The hardest questions, however, demand more sophisticated logical operations and a higher degree of precision. They are designed to trap test-takers who rely on intuition or superficial readings. This lesson breaks down what makes these questions so difficult, identifies the most dangerous trap type, and provides advanced strategies for conquering them.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Three Difficulty Factors' },
    { type: 'paragraph', text: 'High-difficulty MSS questions earn their difficulty rating through one or more of three mechanisms. Understanding these factors transforms an opaque, intimidating question into a recognizable pattern with a clear solution path.' },

    { type: 'h4', text: 'Factor 1: Subtle Inferences' },
    { type: 'paragraph', text: 'On easy questions, the correct answer is a near-paraphrase of the stimulus. On hard questions, the correct answer requires you to combine two or more premises, draw a deduction that is never explicitly stated, and then recognize that deduction in unfamiliar language. The inference isn\'t hidden because it\'s weak\u2014it\'s hidden because it requires multiple logical steps and a precise reading of every qualifier.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Subtle Inference', text: 'Stimulus: "All of the firm\'s senior analysts have at least ten years of experience. No employee with fewer than ten years of experience is eligible for the executive mentorship program."\n\nThe subtle inference: Every senior analyst is eligible for the executive mentorship program. This requires chaining the two premises and recognizing that the second premise\'s contrapositive applies. A near-miss trap might say "Only senior analysts are eligible for the executive mentorship program"\u2014which reverses the logic.' },

    { type: 'h4', text: 'Factor 2: Overreach Traps' },
    { type: 'paragraph', text: 'The most common wrong answer on hard MSS questions is the answer that goes slightly beyond what the stimulus proves. It feels right because it is almost supported\u2014it captures the spirit of the stimulus but adds a small, unsupported extension. Test-takers who rely on gut feeling rather than rigorous textual verification are drawn to these answers like moths to a flame.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Overreach', text: 'Stimulus: "Exposure to classical music during infancy has been correlated with higher spatial reasoning scores at age five."\n\nOverreach trap: "Parents who want their children to excel at mathematics should expose them to classical music." This feels reasonable, but it leaps from correlation to recommendation, from spatial reasoning to mathematics, and from a statistical trend to individual advice\u2014three unsupported jumps in a single answer.' },

    { type: 'h4', text: 'Factor 3: Multiple Plausible Answers' },
    { type: 'paragraph', text: 'On easy questions, four answers are clearly wrong and one is clearly right. On hard questions, two or even three answers seem defensible. The test-writers achieve this by crafting distractors that are genuinely consistent with the stimulus\u2014they could be true\u2014but are not *supported* by it. The distinction between "could be true" and "is supported" is the razor\'s edge that separates correct from incorrect on the hardest MSS questions.' },
    { type: 'callout', variant: 'default', title: 'Concrete Example: Multiple Plausible Answers', text: 'Stimulus: "Most of the city\'s budget shortfall is attributable to declining sales tax revenue. Sales tax revenue has dropped because several major retailers have relocated outside the city limits."\n\nPlausible-but-wrong answer: "The city should offer tax incentives to retain major retailers." This is sensible policy advice, but the stimulus describes a cause\u2014it doesn\'t prescribe a solution. The supported inference is narrower: the relocation of retailers is a significant cause of the budget shortfall.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Overreach Trap: The #1 Killer on Hard MSS' },
    { type: 'paragraph', text: 'The overreach trap deserves special attention because it is, by a wide margin, the most frequent cause of errors on high-difficulty MSS questions. An overreach answer takes a genuinely supported idea and extends it just one step too far. That single extra step is enough to make the answer unsupported, but not enough to make it feel obviously wrong.' },

    { type: 'h4', text: 'Anatomy of an Overreach' },
    { type: 'paragraph', text: 'Every overreach answer follows a predictable structure. It begins with a premise that is directly supported by the stimulus, then adds one of the following unsupported extensions:' },
    { type: 'list', items: [
      '**Causal upgrade:** The stimulus shows a correlation or tendency; the answer asserts a direct cause.',
      '**Scope expansion:** The stimulus discusses a specific group; the answer generalizes to a broader population.',
      '**Temporal extension:** The stimulus describes the present or past; the answer predicts the future.',
      '**Prescriptive leap:** The stimulus describes what *is*; the answer claims what *should be done*.',
      '**Degree inflation:** The stimulus uses moderate language ("some," "tends to"); the answer uses absolute language ("all," "always," "never").',
    ]},

    { type: 'table', headers: ['Stimulus Says', 'Overreach Answer Adds', 'Why It Fails'], rows: [
      ['X is correlated with Y', 'X causes Y', 'Correlation does not establish causation without additional evidence'],
      ['Most A\'s are B', 'All A\'s are B', 'Upgrades a partial quantifier to a universal one'],
      ['In the past decade, Z has increased', 'Z will continue to increase', 'Past trends don\'t guarantee future continuation'],
      ['Policy P has drawbacks', 'Policy P should be abandoned', 'Describing a problem doesn\'t prove a particular solution'],
      ['Some experts believe Q', 'Q is widely accepted', '"Some" cannot support "widely"'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Overreach Test', text: 'For every attractive answer, ask: "Does the stimulus actually say this, or am I filling in a gap with my own reasoning?" If you are adding even one small assumption\u2014about causation, scope, the future, or what should be done\u2014the answer overreaches. The correct MSS answer never requires you to assume anything beyond what the premises state.' },

    { type: 'hr' },

    { type: 'h3', text: 'The Degree of Support Hierarchy' },
    { type: 'paragraph', text: 'Not all inferences are created equal. Understanding the spectrum from certainty to speculation helps you calibrate your expectations and recognize when an answer choice is pitched at the wrong level of confidence.' },

    { type: 'table', headers: ['Level', 'Description', 'Typical Language', 'MSS Viability'], rows: [
      ['Certain', 'Logically guaranteed by the premises; no possible counterexample', 'Must be true, necessarily, cannot be otherwise', 'Always viable\u2014this is the gold standard'],
      ['Very Likely', 'Strongly supported with only remote exceptions possible', 'Very likely, strongly suggests, in nearly all cases', 'Usually viable\u2014the core MSS target zone'],
      ['Probable', 'More likely true than not, given the evidence', 'Probably, is likely to, tends to', 'Sometimes viable\u2014depends on strength of alternatives'],
      ['Possible', 'Consistent with the premises but not positively supported', 'Could be true, might, is not inconsistent with', 'Rarely viable\u2014"could be true" is not "is supported"'],
      ['Speculative', 'Goes beyond the premises; requires outside assumptions', 'Perhaps, one might argue, it stands to reason', 'Never viable\u2014this is the overreach zone'],
    ]},

    { type: 'paragraph', text: 'On MSS questions, the correct answer almost always falls in the "Certain" or "Very Likely" range. When you find yourself choosing between two answers, the one pitched at a lower, more cautious level of confidence is almost always correct. The LSAT rewards restraint, not ambition.' },

    { type: 'hr' },

    { type: 'h3', text: 'Hard MSS Drill' },
    { type: 'paragraph', text: 'This question demonstrates all three difficulty factors at once: the inference requires combining multiple premises (subtle inference), the most attractive wrong answer extends the conclusion one step too far (overreach trap), and at least two answers seem defensible on a quick read (multiple plausible answers). Commit to an answer before reading the analysis.' },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },


    { type: 'paragraph', text: '<br/><br/><br/>' },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Identify the Key Facts' },
    { type: 'breakdown', labels: { title: 'Fact', text: 'Details' }, items: [
      { title: 'Fact 1: Drug Group Result', text: 'Patients taking the drug reported a 40% reduction in pain after eight weeks.', badge: 'Data', badgeColor: 'slate' },
      { title: 'Fact 2: Placebo Group Result', text: 'Patients taking a placebo reported a 30% reduction in pain over the same period.', badge: 'Data', badgeColor: 'slate' },
      { title: 'Fact 3: Omission', text: 'The company\'s published summary did not mention the placebo group\'s results.', badge: 'Key Detail', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: 'Step 2: Draw the Supported Inference' },
    { type: 'paragraph', text: 'The 40% figure, standing alone, makes the drug look highly effective. But when you learn that the placebo group achieved 30%, the picture changes dramatically\u2014the drug\'s advantage over placebo is only 10 percentage points. By omitting the placebo data, the published summary presents the 40% figure without context, which *could* give a misleading impression of the drug\'s pharmacological contribution. Notice the careful phrasing: "could give a misleading impression." We don\'t know whether the company intended to mislead, and we don\'t know the exact pharmacological contribution\u2014only that the summary, on its own, lacks crucial context.' },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) The pharmaceutical company intentionally misled the public...', text: 'This attributes motive ("intentionally") to the company. The stimulus says the summary "did not mention" the placebo data\u2014but omission alone doesn\'t prove intent to deceive. This is a classic prescriptive/motive overreach.', badge: 'Overreach: Motive', badgeColor: 'red' },
      { title: '(B) The drug is no more effective at reducing joint pain than a placebo.', text: 'The drug group reported 40% reduction; the placebo group reported 30%. The drug\'s result was numerically higher, so we cannot say it was "no more effective." This answer overreaches in the opposite direction\u2014it dismisses the 10-point gap entirely.', badge: 'Overreach: Degree', badgeColor: 'red' },
      { title: '(C) The published summary, considered by itself, could give a misleading impression...', text: 'This is precisely supported. The summary presents a 40% reduction without the placebo context. A reader who sees only the summary might attribute all 40% to the drug\'s pharmacological properties, when in fact 30% occurred with a placebo. The hedging language ("could give," "considered by itself") keeps this answer within the bounds of what the premises prove.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Patients who took the drug would have experienced the same pain reduction without it.', text: 'We know the placebo group reported 30% and the drug group 40%. The drug group did better, so it\'s unsupported to say they "would have experienced the same" result without the drug. This answer ignores the 10-point difference.', badge: 'Overreach: Degree', badgeColor: 'red' },
      { title: '(E) Clinical trials that do not publicly report placebo group results should not be trusted.', text: 'This makes a sweeping normative claim about all clinical trials. The stimulus discusses one specific trial and its summary\u2014it doesn\'t establish a general rule about what "should" be trusted.', badge: 'Overreach: Scope', badgeColor: 'red' },
    ]},

    { type: 'callout', variant: 'summary', title: 'Why This Question Is Hard', text: 'This question is hard because answers (A), (B), and (C) all feel defensible on a quick read. Answer (A) captures the intuitive reaction that the company is being deceptive. Answer (B) captures the reaction that a 10-point gap isn\'t meaningful. But only (C) stays precisely within the bounds of what the premises prove: the summary, by omitting the placebo data, *could* mislead. It doesn\'t claim the company lied, it doesn\'t claim the drug is useless, and it doesn\'t prescribe what should be done\u2014it simply identifies a supported risk.' },

    { type: 'hr' },

    { type: 'h3', text: 'Advanced Elimination Strategies' },
    { type: 'paragraph', text: 'On hard MSS questions, a quick gut-check elimination won\'t work. Use these systematic techniques to separate genuinely supported answers from well-crafted traps.' },

    { type: 'h4', text: 'Strategy 1: The Provability Test' },
    { type: 'paragraph', text: 'For each remaining answer, ask: "Can I point to specific words in the stimulus that directly prove every claim in this answer?" If even one clause of the answer requires you to go beyond the text\u2014to assume a motive, predict a future event, generalize to a broader group, or recommend a course of action\u2014that answer fails the provability test.' },

    { type: 'h4', text: 'Strategy 2: Downgrade, Don\'t Upgrade' },
    { type: 'paragraph', text: 'When torn between two answers, prefer the one that uses weaker, more cautious language. If one answer says "will likely" and another says "could," the "could" answer is almost certainly safer. Hard MSS questions are designed to punish test-takers who upgrade the strength of the stimulus. The correct answer frequently sounds disappointingly modest.' },

    { type: 'h4', text: 'Strategy 3: Clause-by-Clause Verification' },
    { type: 'paragraph', text: 'Break the answer choice into its individual claims. Verify each claim against the stimulus independently. A single unsupported clause makes the entire answer wrong, even if every other clause is perfectly supported. Hard wrong answers often embed one unsupported word or phrase inside an otherwise accurate statement.' },
    { type: 'callout', variant: 'tip', title: 'The One-Word Kill', text: 'On the hardest questions, the difference between the correct answer and the best wrong answer often comes down to a single word. Words like "only," "always," "never," "must," "should," "all," and "cause" each carry logical weight. Treat every word in a high-difficulty answer choice as if it were a separate claim that requires independent verification.' },

    { type: 'h4', text: 'Strategy 4: The Negative Proof Test' },
    { type: 'paragraph', text: 'For a stubborn answer you can\'t decide on, try to construct a scenario in which the stimulus is entirely true but the answer choice is false. If you can construct such a scenario, the answer is not supported. If you cannot\u2014if the premises make the answer necessarily or very likely true\u2014it survives. Apply this test to your final two contenders when other strategies haven\'t resolved the decision.' },

    { type: 'hr' },

    { type: 'h3', text: 'Common Wrong Answer Patterns on Hard Questions' },
    { type: 'paragraph', text: 'Hard MSS questions recycle a finite set of wrong-answer strategies. Learning to recognize these patterns converts difficult elimination decisions into pattern-matching exercises.' },

    { type: 'table', headers: ['Pattern', 'How It Works', 'How to Spot It'], rows: [
      ['The Reasonable Overreach', 'Takes a supported idea and extends it one logical step beyond the evidence', 'Ask: "Is this what the stimulus says, or what I think should follow from it?"'],
      ['The Motive Attribution', 'Assigns intent, purpose, or motivation to an actor when the stimulus only describes behavior', 'Look for words like "intentionally," "in order to," "deliberately," "aimed at"'],
      ['The Hidden Universal', 'Uses a universal quantifier ("all," "every," "no") when the stimulus uses a partial one ("most," "many," "some")', 'Check whether the stimulus uses the same quantifier as the answer'],
      ['The Scope Creep', 'Discusses a broader category than the stimulus addresses (e.g., all drugs when the stimulus discusses one drug)', 'Compare the subject of the answer to the subject of the stimulus'],
      ['The Normative Shift', 'Moves from describing what *is* to prescribing what *should be*', 'Flag any answer containing "should," "ought to," "must" (in the prescriptive sense)'],
      ['The Subtle Negation', 'Flips a key relationship\u2014e.g., from "A supports B" to "A undermines B"\u2014using easily overlooked phrasing', 'Trace the logical relationship word by word; don\'t rely on your impression of the answer\'s "gist"'],
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Putting It All Together' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways for Hard MSS', text: '**1. Respect the difficulty factors.** Subtle inferences, overreach traps, and multiple plausible answers are the three mechanisms that make hard MSS questions hard. Recognizing which factor is in play tells you where to focus your analysis.\n\n**2. Fear the overreach.** The most tempting wrong answer on a hard MSS question is the one that goes just slightly beyond the evidence. Train yourself to prefer modest, cautious answers over ambitious, sweeping ones.\n\n**3. Use the Degree of Support hierarchy.** The correct answer is almost always at the "Certain" or "Very Likely" level. If you find yourself arguing that an answer is "probably" supported, it\'s probably not the best choice.\n\n**4. Verify clause by clause.** On the hardest questions, the difference between right and wrong is a single word. Treat every word in the answer as a separate claim and verify each one.\n\n**5. Apply the negative proof test.** If you can imagine the stimulus being true and the answer being false, the answer is not supported. Use this as a tiebreaker between your final two contenders.' },
  ]
};
