import { Lesson } from '../../types';

export const Lesson_AdvancedConcepts: Lesson = {
  id: '11-adv',
  title: 'Advanced Concepts: Difficult Necessary Assumption Questions',
  content: [
    {
      "type": "h2",
      "text": "Advanced Concepts: Difficult Necessary Assumption Questions"
    },
    {
      "type": "paragraph",
      "text": "You now understand the core mechanics of Necessary Assumption questions: identifying the logical gap and confirming the assumption with the Negation Test. However, difficult questions are designed to challenge you even when you know these basics. They do this by hiding the gap in complexity, using abstract language, and offering tempting traps that feel right but fail the test of necessity."
    },
    {
      "type": "paragraph",
      "text": "Let's break down the three factors that elevate the difficulty of these questions."
    },
    {
      "type": "h3",
      "text": "1. The Stimulus Becomes More Complex"
    },
    {
      "type": "paragraph",
      "text": "On easier questions, the gap is often a glaring term shift (e.g., \"morale\" vs. \"production\"). On hard questions, the gap is subtler and requires deeper analysis of the logic."
    },
    {
      "type": "list",
      "items": [
        "**Subtle Causal Nuance:** Instead of a simple \"A causes B,\" the argument might rely on a complex causal chain or the absence of a specific type of interference. The necessary assumption might be that *a third factor didn't cause both*, or that the *effect* didn't cause the *cause*.",
        "**Feasibility & Necessity:** Arguments proposing a plan might rely on a hidden logistical detail. For example, a plan to solve a shortage might assume that resources cannot be moved from elsewhere.",
        "**Formal Logic in Disguise:** The stimulus might use conditional reasoning (\"unless,\" \"only if\") without the standard indicator words, forcing you to map out the logic to see that a necessary condition is being assumed."
      ]
    },
    {
      "type": "h3",
      "text": "2. The Answer Choices Become Abstract or \"Negative\""
    },
    {
      "type": "paragraph",
      "text": "Difficult correct answers often don't look like helpful bridges. They might be phrased negatively or abstractly, making them hard to process."
    },
    {
      "type": "paragraph",
      "text": "**The \"No-Blocker\" Assumption:** A very common pattern for correct answers on hard questions is the **Defender**. It doesn't say \"The plan will work\"; it says \"A specific thing that would ruin the plan *will not happen*.\""
    },
    {
      "type": "list",
      "items": [
        "*Example:* Instead of saying \"The bridge will be safe,\" the answer says \"The wind will not exceed 100mph.\"",
        "*Why it's hard:* It feels like a random detail until you realize that if the wind *did* exceed 100mph, the bridge would collapse."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Abstract Descriptions:** The answer might describe the logical relationship rather than using the specific content terms."
    },
    {
      "type": "list",
      "items": [
        "*Example:* \"It assumes that a condition sufficient for an outcome is also necessary for it.\""
      ]
    },
    {
      "type": "h3",
      "text": "3. The Trap Answers Are More Sophisticated"
    },
    {
      "type": "paragraph",
      "text": "Hard questions feature trap answers that exploit your intuition about what *strengthens* an argument versus what is *necessary* for it."
    },
    {
      "type": "list",
      "items": [
        "**The \"Too Strong\" Trap:** This is the most dangerous trap. The answer choice is a strong, helpful statement (e.g., \"The plan will definitely succeed\" or \"All X are Y\"). It feels good because it makes the conclusion secure. But it is not *necessary*. The argument only needs the plan to be *possible*, not guaranteed. The Negation Test is the only way to kill this trap.",
        "**The \"Sufficient but Not Necessary\" Trap:** This is a variation of the \"Too Strong\" trap. The answer choice guarantees the conclusion, but there are other ways the conclusion could be true. Therefore, this specific guarantee is not required.",
        "**The \"Pseudo-Defender\":** This trap rules out a potential problem, but it's a problem the argument doesn't actually have. It defends against a threat that isn't fatal to the conclusion."
      ]
    },
    {
      "type": "h3",
      "text": "A Mindset for Hard Questions"
    },
    {
      "type": "paragraph",
      "text": "To conquer difficult Necessary Assumption questions, you must be disciplined with the Negation Test."
    },
    {
      "type": "list",
      "items": [
        "**Don't just look for what \"helps.\"** Many wrong answers help.",
        "**Look for what is *essential*.** Ask: \"Does the argument *die* without this?\"",
        "**Use the Negation Test aggressively.** If you negate a choice and the argument is merely weakened but not destroyed, eliminate it. If you negate a choice and the argument becomes impossible, you have found the answer."
      ]
    }
  ],
};
