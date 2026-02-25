import { Lesson } from '../../types';

export const Lesson10_Drill_ForcedChoiceAdvanced: Lesson = {
  id: "11-10",
  title: "Drill: Advanced 'Forced Choice' (PT-117-S-4-Q-16)",
  content: [
    { type: 'h2', text: 'Forced Choice Advanced' },
    { type: 'paragraph', text: "The Forced Choice pattern appears when an author presents two possible explanations for a phenomenon, rules out one, and concludes the other must be correct. In the advanced version, the reason for ruling out one explanation is unstated — the argument simply assumes that a certain characteristic (like being voluntary) is *incompatible* with one explanation (like chemical control). The necessary assumption is the hidden rule that makes the two categories mutually exclusive." },
    { type: 'paragraph', text: "This pattern is a close cousin of the False Dichotomy, but with an important difference. In a False Dichotomy, the author ignores a third option. In a Forced Choice, the author *incorrectly sorts* an item into one of two existing categories by assuming the categories don't overlap. The flaw is not a missing option — it's an assumed incompatibility between the options." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot an Advanced Forced Choice' },
    { type: 'paragraph', text: "Use this quick checklist:" },
    { type: 'list', items: [
      '**Look for a dichotomy with a sorting criterion:** The author divides explanations into two boxes (chemical vs. psychological, nature vs. nurture, internal vs. external) and uses a single characteristic to sort.',
      '**Look for the ruling-out move:** The author says \"because X has characteristic C, it must be in Box A (and therefore not in Box B).\" The rule connecting characteristic C to Box A is the assumption.',
      '**Ask: "Could something have characteristic C and still be in Box B?"** If the author assumes the answer is no but never says so, you have found the Forced Choice assumption.',
      '**Predict the answer:** The correct answer will state the incompatibility rule — that characteristic C and Box B cannot coexist.',
    ]},
    { type: 'callout', variant: 'tip', title: 'Overlap Is the Enemy', text: "The Forced Choice assumption is always about **mutual exclusivity**. The author assumes two categories don't overlap. But in reality, many things can belong to *both* categories simultaneously. An action can be both voluntary AND chemically influenced. A behavior can be both learned AND instinctive. The correct answer eliminates the overlap that would destroy the forced choice." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Advanced Forced Choice (PT-117-S-4-Q-16)' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '11-10-drill',
      questionType: 'Necessary Assumption',
      difficulty: 'hard',
      stimulus: "Researcher: The role of chemicals called pheromones in determining the sexual behavior of some animals is well documented. But, even though humans also produce these chemicals, it is clear that psychological factors have taken over this role in us. Whereas for animals these behaviors are involuntary, which is a clear sign of chemical control, humans, by virtue of their free will, choose how they behave, and thus psychological factors take over. So pheromones are merely a vestige of our evolutionary past.",
      question: "The researcher's argument requires the assumption that",
      options: [
        "(A) whatever does not have a chemical explanation must have a purely psychological one",
        "(B) voluntary action cannot have a chemical explanation (Correct)",
        "(C) free will can be found only in humans",
        "(D) voluntary action cannot have an evolutionary explanation",
        "(E) there is a psychological explanation for the continuing presence of pheromones in humans",
      ],
    },

    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument has a complex structure. Let's trace the researcher's reasoning step by step." },
    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: '"The role of chemicals called pheromones in determining the sexual behavior of some animals is well documented."', text: "**Background.** Establishes that pheromones control animal behavior. This is not controversial — it's accepted science within the argument." },
      { title: '"But, even though humans also produce these chemicals, it is clear that psychological factors have taken over this role in us."', text: "**Main Conclusion.** Despite humans producing pheromones, the researcher claims psychological factors — not chemicals — control human sexual behavior. The word \"but\" signals a contrast with the animal case." },
      { title: '"Whereas for animals these behaviors are involuntary, which is a clear sign of chemical control..."', text: "**Supporting Rule.** The researcher establishes a sorting criterion: involuntary behavior → chemical control. Animals exhibit involuntary behavior, so their behavior is chemically controlled." },
      { title: '"...humans, by virtue of their free will, choose how they behave, and thus psychological factors take over."', text: "**Key Premise + Logical Leap.** Humans have free will, so their behavior is voluntary. The researcher then concludes that voluntary → psychological (and NOT chemical). This is the forced choice: voluntary behavior gets sorted into the \"psychological\" box and removed from the \"chemical\" box." },
      { title: '"So pheromones are merely a vestige of our evolutionary past."', text: "**Final Conclusion.** Pheromones are irrelevant evolutionary leftovers in humans — they have no functional role. This follows from the claim that psychology, not chemistry, controls human behavior." },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**The Sorting Rule (stated):** Involuntary → Chemical Control.\n\n**The Application (stated):** Human behavior is voluntary (free will).\n\n**The Conclusion:** Therefore, human behavior is NOT under chemical control (it's psychological)." },
    { type: 'paragraph', text: "**The Gap:** The researcher establishes that involuntary behavior indicates chemical control. But the *reverse* — that voluntary behavior *cannot* be chemically influenced — is never stated. These are logically different claims. It's entirely possible that a person *chooses* to act on a chemically-driven impulse. You might be aware of a pheromone-driven attraction and *voluntarily decide* to act on it. The behavior is both voluntary AND chemically influenced." },
    { type: 'callout', variant: 'default', title: 'The Unstated Rule', text: "The researcher's logic requires this chain:\n\n1. Involuntary → Chemical (**stated**)\n2. Human behavior is voluntary (**stated**)\n3. Voluntary → NOT Chemical (**unstated — this is the assumption**)\n4. Therefore, psychological factors control human behavior (**conclusion**)\n\nStep 3 is the hidden rule. Without it, the fact that humans act voluntarily doesn't rule out chemical influence." },

    { type: 'h4', text: 'Step 3: Pre-phrase' },
    { type: 'paragraph', text: "The assumption must state that voluntary action and chemical explanation are mutually exclusive — that if behavior is voluntary (chosen through free will), it cannot be chemically driven. This is the rule that forces the choice between the \"chemical\" box and the \"psychological\" box." },

    { type: 'h4', text: 'Step 4: Evaluate with the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) whatever does not have a chemical explanation must have a purely psychological one', text: "This claims that non-chemical explanations must be purely psychological. But the argument doesn't need this strong claim. The researcher only needs to establish that *human sexual behavior specifically* is psychological — not that *everything* without a chemical explanation is psychological. There could be other types of explanations (social, cultural, rational) that are compatible with the argument.\n\n**Negation:** Some non-chemical phenomena have non-psychological explanations. This doesn't affect the specific argument about human sexual behavior. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) voluntary action cannot have a chemical explanation', text: "This is the exact hidden rule that forces the choice. It states that being voluntary is *incompatible* with being chemically caused — the mutual exclusivity assumption.\n\n**Negation Test:** Voluntary action **CAN** have a chemical explanation. If this is true, then the fact that humans act voluntarily does NOT rule out pheromones as a cause. Humans could exercise free will *while still being chemically influenced*. The researcher's entire basis for dismissing pheromones — that human behavior is voluntary — becomes irrelevant.\n\n**The argument collapses.**", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) free will can be found only in humans', text: "Whether other species have free will doesn't affect the argument's internal logic. The argument is about *humans* specifically — whether their voluntary behavior rules out chemical control. Even if dolphins or apes also had free will, the argument about humans would be unchanged.\n\n**Negation:** Free will is NOT exclusive to humans. This doesn't affect the argument about human pheromones. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) voluntary action cannot have an evolutionary explanation', text: "The argument is about the *mechanism* of control (chemical vs. psychological), not about *evolutionary explanations*. Whether free will evolved or not is a separate question from whether voluntary actions can be chemically influenced.\n\n**Negation:** Voluntary action CAN have an evolutionary explanation. This doesn't affect the chemical-vs.-psychological logic. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) there is a psychological explanation for the continuing presence of pheromones in humans', text: "The conclusion says pheromones are a \"vestige\" — a useless leftover. This choice would actually *contradict* the conclusion by suggesting pheromones still serve a psychological purpose. The argument doesn't need (and doesn't want) to explain why pheromones persist; it just needs to establish that they don't control behavior.\n\n**Negation:** There is NO psychological explanation for pheromones' presence. This is perfectly consistent with the conclusion that they're useless vestiges. **Argument survives.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Why Wrong Answers Fail: A Visual Summary' },
    { type: 'table', headers: ['Answer', 'What It Addresses', 'Does It Create the Forced Choice?'], rows: [
      ['(A)', 'Universal scope of psychological explanations', 'No — too broad; argument only needs this for human sexual behavior'],
      ['**(B)**', '**Voluntary ≠ Chemical**', '**Yes — creates the mutual exclusivity rule ✓**'],
      ['(C)', 'Whether other species have free will', 'No — irrelevant to the human-specific argument'],
      ['(D)', 'Evolutionary explanations for voluntary action', 'No — wrong category (evolutionary, not chemical)'],
      ['(E)', 'Why pheromones still exist in humans', 'No — contradicts the conclusion (vestige = useless)'],
    ]},

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument sorts something into one of two categories based on a single characteristic, it must assume that the characteristic is *incompatible* with the other category. This is the rule that forces the choice.\n\nThe Advanced Forced Choice is often harder to spot than a simple False Dichotomy because the two categories may be perfectly valid — the flaw is in the *sorting rule*, not in the categories themselves. The author may correctly identify that involuntary behavior indicates chemical control, but then illegitimately *reverses* this rule to conclude that voluntary behavior indicates non-chemical control.\n\nWatch for this logical reversal: \"If A, then B\" does NOT mean \"If not A, then not B.\" The necessary assumption is the additional rule that makes the reversal valid — that A and B are not just correlated but *mutually exclusive*." },
  ]
};
