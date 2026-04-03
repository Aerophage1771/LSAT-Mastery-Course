import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '7-8',
  title: 'Advanced Lesson 1: Evaluating Relevance (The Bodyguard Problem)',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Evaluating Relevance (The Bodyguard Problem)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Stimulus Complexity & Nuanced Logic  On advanced \"Evaluate\" questions, the logical gap is often more subtle than a simple alternative cause. The argument may present a multi-step causal chain, and its validity depends on the relevance or significance of each link."
    },
    {
      "type": "paragraph",
      "text": "This example presents a classic \"Bodyguard Problem.\" It argues that because a protector (a large planet) is rare, the thing it protects (intelligent life) must also be rare. This logic only holds if the threat the bodyguard protects against (large comets) is actually significant. The rarity of a solution is irrelevant if the problem itself is also rare. Your task is to spot this hidden assumption about significance."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > When a planetary system forms, the chances that a planet capable of supporting life will be formed are high. The chances that a large planet the size of Jupiter or Saturn will be formed, however, are low. Without Jupiter and Saturn, whose gravitational forces have prevented Earth from being frequently struck by large comets, intelligent life would never have arisen on Earth. Since planetary systems are unlikely to contain any large planets, the chances that intelligent life will emerge on a planet are, therefore, low. > > **Question** > > Knowing which one of the following would be most useful in evaluating the argument? > > *   (A) whether all planetary systems are formed from similar amounts of matter > *   (B) whether intelligent species would be likely to survive if a comet struck their planet > *   (C) whether large comets could be deflected by only one large planet rather than by two > *   (D) how high the chances are that planetary systems will contain many large comets > *   (E) how likely it is that planetary systems containing large planets will also contain planets the size of Earth"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** Planets that can support life are common."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** Large \"protector\" planets (like Jupiter) are rare."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** These protector planets are necessary to shield life-bearing planets from large comets, which would otherwise prevent intelligent life from emerging."
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The chances that intelligent life will emerge on a planet are low."
    },
    {
      "type": "paragraph",
      "text": "The argument's logic is: Intelligent life requires a protector, but protectors are rare, so intelligent life is rare."
    },
    {
      "type": "h4",
      "text": "Step 2: Pinpoint the Logical Gap The argument's entire structure depends on the idea that the protector is necessary. But the protector is only necessary if the threat it protects against—large comets—is real and significant. The argument takes for granted that planetary systems are typically filled with dangerous comets. If large comets are themselves incredibly rare, then the absence of a protector planet wouldn't be a major barrier to the emergence of intelligent life. The argument fails to establish the prevalence of the threat."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the \"Key Question\" I need to know how big the danger is in the first place. Prephrase: \"How common are large, dangerous comets in planetary systems?\""
    },
    {
      "type": "h4",
      "text": "Step 4: Apply the Variance Test Let's test our prephrase."
    },
    {
      "type": "paragraph",
      "text": "**Answer 1 (\"Very High\"):** If the chances of a system having many large comets are very high, then the threat is real. The rarity of protectors becomes a critical bottleneck, making the argument that intelligent life is rare **very strong**."
    },
    {
      "type": "paragraph",
      "text": "**Answer 2 (\"Very Low\"):** If the chances of a system having large comets are very low, then the threat is negligible. The rarity of protectors becomes irrelevant, and the argument **completely falls apart**."
    },
    {
      "type": "paragraph",
      "text": "The question has a massive \"double impact,\" confirming it targets the central vulnerability."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "**(A) whether all planetary systems are formed from similar amounts of matter**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This asks for the reason *why* large planets are rare. The argument already takes their rarity as a premise. Knowing the underlying cause doesn't help us evaluate the *consequences* of that rarity."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) whether intelligent species would be likely to survive if a comet struck their planet**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a sophisticated **Scope Shift** trap and the most popular wrong answer. The stimulus is about the conditions required for intelligent life to *emerge* or *arise* in the first place (\"would never have arisen\"). This choice shifts the focus to the ability of an *already existing* intelligent species to *survive*. These are two different issues."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) whether large comets could be deflected by only one large planet rather than by two**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a minor detail. The argument's core premise is that systems are \"unlikely to contain *any* large planets.\" Whether the job requires one or two is irrelevant if most systems have zero."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Weak Evaluator)"
    },
    {
      "type": "paragraph",
      "text": "**(D) how high the chances are that planetary systems will contain many large comets**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It directly questions the prevalence of the threat, which, as shown by the Variance Test, is the key piece of missing information needed to determine if the rarity of the \"bodyguard\" planets is a significant factor."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) how likely it is that planetary systems containing large planets will also contain planets the size of Earth**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument treats the chances of these two planet types forming as separate probabilities. It already states that life-supporting planets are common. This question is irrelevant to the core logic about what happens to those planets once they form."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "paragraph",
      "text": "**Evaluate the Entire Causal Chain:** In multi-step arguments, don't just accept every link as given. The argument may hinge on the unstated significance of one of those links."
    },
    {
      "type": "paragraph",
      "text": "**The \"Problem vs. Solution\" Logic:** When an argument claims a \"solution\" is important, always ask how significant the \"problem\" is in the first place."
    },
    {
      "type": "paragraph",
      "text": "**Watch for Subtle Scope Shifts:** On hard questions, trap answers will often use keywords from the stimulus but subtly shift the topic. Pay extremely close attention to the precise scope of the conclusion (e.g., \"arise\" vs. \"survive\")."
    }
  ],
};
