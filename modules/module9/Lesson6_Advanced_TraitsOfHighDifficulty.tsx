import { Lesson } from '../../types';

export const Lesson6_Advanced_TraitsOfHighDifficulty: Lesson = {
  id: "9-6",
  title: "Advanced: Hallmarks of Difficult Strengthen Questions",
  content: [
    { type: 'h3', text: 'Advanced: Hallmarks of Difficult Strengthen Questions' },
    { type: 'paragraph', text: "As you progress to harder Strengthen questions, the nature of the support changes. The correct answer is often less about providing a \"louder\" version of the existing evidence and more about performing a subtle but critical logical function. At the highest difficulty levels, the arguments become complex, hiding their vulnerabilities in subtle definitions, multi-step reasoning, or distorted comparisons." },
    { type: 'paragraph', text: "This lesson analyzes the core traits that make high-difficulty Strengthen questions so challenging and equips you with the advanced strategies needed to solve them." },

    { type: 'hr' },

    { type: 'h2', text: 'Three Difficulty Factors for Strengthen' },
    { type: 'paragraph', text: "Every hard Strengthen question employs one or more of three overarching **difficulty factors**. Understanding these factors lets you diagnose *why* a question feels hard, which is the first step to beating it." },
    { type: 'table', headers: ['Difficulty Factor', 'What It Does', 'Your Counter-Strategy'], rows: [
      ['**1. Subtle Gaps**', 'The argument\'s vulnerability is buried under layers of detail, complex sentence structure, or seemingly tight logic. The gap between evidence and conclusion is so narrow that it doesn\'t feel like a gap at all.', 'Slow down and map the full argument structure before looking at answer choices. Paraphrase the conclusion in your own words and compare it word-by-word against the evidence. The gap often hides in a single word difference between premise and conclusion.'],
      ['**2. Weakener Traps**', 'One or more wrong answers actually *damage* the argument. Because you\'re focused on the argument\'s topic, a confident, relevant-sounding answer that hurts the conclusion can trick you into selecting it without testing its direction.', 'For every answer you\'re drawn to, explicitly ask: "Does this make the conclusion MORE likely or LESS likely?" If it makes it less likely, it\'s a weakener — eliminate it immediately.'],
      ['**3. Indirect Strengtheners**', 'The correct answer does not directly add evidence for the conclusion. Instead, it strengthens indirectly — by ruling out an alternative, defending an assumption, or validating a comparison. The answer feels "off topic" at first glance.', 'Don\'t expect the correct answer to sound like a premise. Test each candidate: "If I add this fact, does the gap between evidence and conclusion get smaller?" Indirect support often provides the strongest logical boost.'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Concrete Examples of Each Difficulty Factor' },

    { type: 'h3', text: 'Factor 1: Subtle Gaps' },
    { type: 'paragraph', text: 'Consider this argument: *"A new study found that students who attend tutoring sessions score 15% higher on standardized tests. Therefore, schools should invest in tutoring programs to improve their students\' academic performance."*' },
    { type: 'paragraph', text: "The gap is subtle: the evidence is about students who *voluntarily attend* tutoring (a self-selected group likely to be already motivated). The conclusion is about *all students* in schools that invest in tutoring programs. Students who are assigned to mandatory tutoring may not experience the same benefit. The subtle gap is between a self-selected, motivated sample and a general school population." },
    { type: 'paragraph', text: "A strong strengthener might say: *\"Students assigned to tutoring programs regardless of their initial motivation showed improvement comparable to that of voluntary attendees.\"* This bridges the gap between the self-selected sample and the broader population." },

    { type: 'h3', text: 'Factor 2: Weakener Traps' },
    { type: 'paragraph', text: "Using the same tutoring argument, a weakener trap might read: *\"Students who attend tutoring sessions also tend to spend more time on homework than students who do not attend tutoring.\"* This sounds relevant and seems connected to academic improvement — but it actually *weakens* the argument by providing an alternative explanation for the higher scores (more homework time, not the tutoring itself). On a hard question, this would be one of the most selected wrong answers." },
    { type: 'callout', variant: 'tip', title: 'The Direction Check', text: "Before committing to any answer on a Strengthen question, perform the **Direction Check**: mentally insert the answer into the argument and ask, *\"Is the conclusion now MORE likely or LESS likely to be true?\"* This 5-second check catches most weakener traps. On hard questions, expect at least one or two wrong answers to be weakeners disguised as strengtheners." },

    { type: 'h3', text: 'Factor 3: Indirect Strengtheners' },
    { type: 'paragraph', text: 'Again using the tutoring argument, an indirect strengthener might say: *"The study controlled for students\' prior academic performance and socioeconomic background."* This does not directly say tutoring works — it says the study\'s methodology was sound. By ruling out confounding variables, it makes the study\'s conclusion more reliable, which indirectly strengthens the argument. Test-takers often overlook this because it doesn\'t "feel" like support — it feels like a fact about the study, not about tutoring.' },

    { type: 'hr' },

    { type: 'h2', text: 'The Weakener Trap — The Most Common Wrong Answer Type' },
    { type: 'paragraph', text: 'On hard Strengthen questions, the single most common wrong answer type is **the weakener**. Test-makers know that under time pressure, you\'re focused on the argument\'s topic, and a confident, relevant-sounding answer that connects to the argument\'s core concepts can trick you into selecting it without verifying its direction.' },
    { type: 'paragraph', text: "Weakener traps come in three forms:" },
    { type: 'breakdown', labels: { title: 'Weakener Trap Type', text: 'How It Works' }, items: [
      { title: 'The Alternative Cause Provider', text: 'Introduces a competing explanation for the observed result. Example: "Students who attend tutoring also spend more hours studying independently." This suggests the improvement may not be due to tutoring at all.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'The Assumption Denier', text: 'Directly contradicts something the argument takes for granted. Example: "The standardized test used in the study has been shown to have low reliability." This undermines the evidence the argument depends on.', badge: 'Common', badgeColor: 'red' },
      { title: 'The Scope Expander', text: 'Introduces information that suggests the conclusion is too broad or too narrow. Example: "The improvement was observed only for math scores, not for reading or science." This narrows the conclusion\'s applicability.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Advanced Strengthening Strategies' },
    { type: 'paragraph', text: "Beyond the basic \"fill the gap\" approach, high-difficulty Strengthen questions reward three advanced strategies that correspond to the three most common answer types on hard questions." },

    { type: 'h3', text: 'Strategy 1: The Defender — Ruling Out Alternative Explanations' },
    { type: 'paragraph', text: "In easier questions, the strengthener often directly proves the conclusion is more likely. In hard questions, the correct answer often plays **defense**. It does not provide new positive evidence for the author's claim; instead, it eliminates a key alternative explanation that would have undermined the argument. This is especially common in causal arguments where the author has jumped from a correlation to a specific cause." },
    { type: 'paragraph', text: "**How to recognize it:** The answer choice describes something that is *not* happening, rather than something that *is* happening. Look for negative phrasing: \"No other factor...\", \"There was no change in...\", \"The subjects did not...\"" },
    { type: 'callout', variant: 'default', title: 'Example', text: '**Argument:** "After the city banned plastic bags, beach litter decreased by 30%. The ban was effective at reducing beach pollution."\n\n**Defender strengthener:** "No significant cleanup campaigns or other environmental initiatives were conducted during the same period." This eliminates the alternative explanation (cleanup campaigns) rather than directly supporting the ban\'s effectiveness.' },

    { type: 'h3', text: 'Strategy 2: The Bridge — Connecting Disparate Concepts' },
    { type: 'paragraph', text: "Hard questions often feature a gap between the concepts in the premise and the concepts in the conclusion. The correct answer acts as a \"bridge,\" explicitly connecting these two ideas in a way the author assumed but did not state. Test-takers often miss these because the answer choice can look like a new, unrelated premise." },
    { type: 'paragraph', text: "**How to recognize it:** Compare the key nouns in the premise and the conclusion. If they are different (e.g., \"cost\" in the premise, \"quality\" in the conclusion), the bridge will link them (e.g., \"higher cost is associated with higher quality in this market\")." },
    { type: 'callout', variant: 'default', title: 'Example', text: "**Argument:** \"The new policy requires companies to disclose their carbon emissions. This will lead to a reduction in overall pollution.\"\n\n**Bridge strengthener:** \"Companies that are aware their emissions data is public tend to invest in cleaner technologies to maintain their reputation.\" This bridges \"disclosure\" (the premise concept) to \"reduction in pollution\" (the conclusion concept) by explaining the mechanism." },

    { type: 'h3', text: 'Strategy 3: The Validator — Confirming Data or Methodology' },
    { type: 'paragraph', text: "In arguments that rely on studies, surveys, statistics, or comparisons, the hardest strengtheners often add a crucial piece of qualifying information that the author overlooked. Rather than providing new evidence for the conclusion, the correct answer confirms that the *existing* evidence is trustworthy, unbiased, and representative." },
    { type: 'paragraph', text: "**How to recognize it:** The answer discusses the quality of the evidence rather than providing new evidence. Look for phrases about sample quality, methodology, controls, or data integrity." },
    { type: 'callout', variant: 'default', title: 'Example', text: '**Argument:** "A survey of 200 employees found that those using standing desks reported fewer back problems. Standing desks should be provided to all employees."\n\n**Validator strengthener:** "The surveyed employees were randomly assigned to standing desks or traditional desks, rather than choosing their own desk type." This confirms the study\'s methodology is sound (eliminating self-selection bias) rather than providing new evidence about standing desks.' },

    { type: 'hr' },

    { type: 'h2', text: 'Practice: High-Difficulty Strengthen Question' },
    { type: 'paragraph', text: "Apply the traits and strategies from this lesson to the following question. Pay attention to the subtle gap, the weakener traps, and the indirect nature of the correct answer." },

    { type: 'question-card',
      id: '9-6-practice',
      questionType: 'Strengthen',
      difficulty: 'hard',
      stimulus: "Archaeologists discovered that ancient settlements along the Varo River consistently had larger grain storage facilities than settlements of the same period located inland. The archaeologists hypothesized that proximity to the river enabled more productive agriculture, resulting in larger food surpluses that necessitated bigger storage facilities.",
      question: "Which one of the following, if true, most strengthens the archaeologists' reasoning?",
      options: [
        "(A) Some inland settlements had grain storage facilities that were larger than those of the smallest riverside settlements.",
        "(B) The Varo River basin has exceptionally fertile soil due to regular seasonal flooding that deposits nutrient-rich sediment. (Correct)",
        "(C) Ancient settlements along other rivers in the region also tended to have large grain storage facilities.",
        "(D) The riverside settlements were generally larger in population than the inland settlements.",
        "(E) Grain storage facilities in the ancient world were sometimes used for purposes other than storing food surpluses, such as storing seeds for trade.",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Explanation' },
    { type: 'paragraph', text: "**The argument's structure:** Riverside settlements had bigger grain storage → the archaeologists conclude proximity to the river enabled more productive agriculture → which produced larger surpluses → which required bigger storage." },
    { type: 'paragraph', text: "**The hidden gap:** The argument assumes that the river proximity *caused* the larger storage through a specific mechanism: better agriculture. But the argument provides no evidence for this mechanism. Why would being near a river make agriculture more productive? Without answering this, the argument is vulnerable to alternatives: maybe riverside settlements were larger (more people = more storage), maybe they used storage for trade rather than surpluses, or maybe the correlation is coincidental." },
    { type: 'paragraph', text: "**Which difficulty factor is at play?** This is primarily a **Subtle Gap** — the leap from \"near a river\" to \"more productive agriculture\" feels intuitive but is never actually supported. The question also features **Indirect Strengthening** — the correct answer provides a mechanism rather than direct evidence of larger surpluses." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Some inland settlements had larger facilities than the smallest riverside ones.', text: 'This actually *weakens* the argument slightly by showing that the correlation between river proximity and storage size is not absolute. It provides a partial counterexample. **Weakener trap — wrong direction.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) The Varo River basin has exceptionally fertile soil due to regular seasonal flooding that deposits nutrient-rich sediment.', text: '**This is the correct answer.** It provides the missing **mechanism** — it explains *how* proximity to the river would lead to more productive agriculture. Regular flooding deposits nutrients, which enriches the soil, which increases crop yields, which produces larger surpluses, which require bigger storage. This bridge connects "river proximity" (the premise) to "more productive agriculture" (the key claim in the conclusion). **Strategy: The Bridge — connecting disparate concepts.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Settlements along other rivers also had large storage facilities.', text: 'This is tempting because it suggests a pattern — rivers correlate with large storage generally, not just on the Varo. But it does not explain *why* the correlation exists. It is consistent with the archaeologists\' hypothesis but also consistent with many alternatives (e.g., river settlements are trade hubs, not better farms). **Weak support — does not address the mechanism.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Riverside settlements were generally larger in population.', text: 'This provides an **alternative explanation** for the larger storage: more people need more storage regardless of agricultural productivity. This actually *weakens* the specific claim that the storage is due to agricultural surpluses. **Weakener trap — provides an alternative cause.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Storage facilities were sometimes used for storing seeds for trade.', text: 'This opens an alternative explanation: the larger storage may reflect trade activity rather than food surpluses from productive agriculture. If riverside settlements were trade hubs (plausible, given river transport), their storage could be large for commercial reasons, not agricultural ones. **Weakener trap — provides an alternative use for the storage.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'paragraph', text: "**Why this is hard:** Three of the five wrong answers (A, D, E) are weakener traps that damage the argument rather than help it. The correct answer (B) works indirectly — it does not directly say that riverside settlements had bigger surpluses; it explains *why they would have*. This indirect, mechanism-based strengthening is the hallmark of high-difficulty Strengthen questions." },

    { type: 'hr' },

    { type: 'h3', text: 'Elimination Strategies for Hard Strengthen Questions' },
    { type: 'paragraph', text: "When you're stuck between two or three answer choices on a hard Strengthen question, use these tiebreaker strategies:" },
    { type: 'breakdown', labels: { title: 'Strategy', text: 'How to Apply' }, items: [
      { title: '1. Perform the Direction Check on Every Finalist', text: 'Insert the answer into the argument and ask: "More likely or less likely?" If less likely, eliminate. This catches weakener traps, which are the most common wrong answer type on hard Strengthen questions.', badge: 'Primary', badgeColor: 'green' },
      { title: '2. Prefer Answers That Target the Core Gap', text: 'The strongest strengthener addresses the *primary* vulnerability of the argument — the most critical assumption or the biggest logical leap. If an answer only provides peripheral support, it is likely wrong.', badge: 'Primary', badgeColor: 'green' },
      { title: '3. Don\'t Dismiss Indirect Support', text: 'On hard questions, the correct answer often strengthens indirectly — by ruling out an alternative, confirming methodology, or providing a mechanism. If an answer seems "off topic" but passes the Direction Check, it may be the correct indirect strengthener.', badge: 'Tiebreaker', badgeColor: 'blue' },
      { title: '4. Check for Scope Match', text: 'The best strengthener operates in the exact same scope as the conclusion. If the conclusion is about "the Varo River" and the answer talks about "rivers in general," it provides weaker support than an answer specific to the Varo.', badge: 'Tiebreaker', badgeColor: 'blue' },
      { title: '5. Re-Read the Conclusion Word by Word', text: 'On hard questions, return to the conclusion and read each word carefully. Authors often use qualifying language or scope-limiting terms that restrict what counts as a valid strengthener. The correct answer must help *this specific* conclusion.', badge: 'Last Resort', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1.** Hard Strengthen questions employ three difficulty factors: subtle gaps, weakener traps, and indirect strengtheners.\n**2.** The weakener trap is the most common wrong answer type on hard Strengthen questions — always perform the Direction Check before committing.\n**3.** Advanced strengthening strategies include: **The Defender** (ruling out alternatives), **The Bridge** (connecting disparate concepts), and **The Validator** (confirming data or methodology).\n**4.** Don't dismiss answers that seem \"off topic\" — indirect strengtheners that provide a mechanism, validate methodology, or eliminate alternatives are the hallmark of hard correct answers.\n**5.** When eliminating, prioritize answers that target the core gap over those that provide peripheral support, and always verify that your chosen answer makes the conclusion more likely, not less." },
  ]
};
