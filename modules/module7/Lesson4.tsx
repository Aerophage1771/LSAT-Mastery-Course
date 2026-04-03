import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '7-4',
  title: 'Lesson 1: The Missing Baseline (Evaluate the Argument)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Missing Baseline (Evaluate the Argument)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Missing Baseline / Control Group Pattern  Many LSAT arguments present data from an experiment or a study and then draw a conclusion about what that data means. A common flaw in these arguments is the failure to provide a proper point of comparison. To know if a change is significant, you must know what things were like *before* the change, or what is happening in a similar group that *isn't* being tested. This is the Missing Baseline."
    },
    {
      "type": "paragraph",
      "text": "An argument without a baseline is like being told a stock is now at $100. Is that good or bad? You can't know without the baseline: was it at $1 yesterday or $200? The correct \"Evaluate\" answer often asks for this crucial, missing point of comparison."
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
      "text": "**Stimulus** > > A recent study involved feeding a high-salt diet to a rat colony. A few months after the experiment began, standard tests of the rats' blood pressure revealed that about 25 percent of the colony had normal, healthy blood pressure, about 70 percent of the colony had high blood pressure, and 5 percent of the colony had extremely high blood pressure. The conclusion from these results is that high-salt diets are linked to high blood pressure in rats. > > **Question** > > The answer to which one of the following questions is most relevant to evaluating the conclusion drawn above? > > *   (A) How much more salt than is contained in a rat's normal diet was there in the high-salt diet? > *   (B) Did the high blood pressure have any adverse health effects on those rats that developed it? > *   (C) What percentage of naturally occurring rat colonies feed on high-salt diets? > *   (D) How many rats in the colony studied had abnormally high blood pressure before the study began? > *   (E) Have other species of rodents been used in experiments of the same kind?"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** A colony of rats was fed a high-salt diet."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** A few months later, 75% of these rats had high blood pressure."
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** High-salt diets are linked to high blood pressure in rats."
    },
    {
      "type": "paragraph",
      "text": "The argument type is a causal claim based on experimental data."
    },
    {
      "type": "h4",
      "text": "Step 2: Pinpoint the Logical Gap The argument moves from an observation (\"after\" the diet, 75% had high BP) to a causal conclusion (the diet is the cause). The gaping hole in the logic is that we have no idea what the rats' blood pressure was *before* the diet. The author assumes the rats started with normal blood pressure. Without that baseline information, the \"after\" data is meaningless."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the \"Key Question\" To evaluate this argument, I absolutely need to know the starting condition of the rats. Prephrase: \"What was the rats' blood pressure like before the study started?\""
    },
    {
      "type": "h4",
      "text": "Step 4: Apply the Variance Test Let's apply the Variance Test to our prephrase."
    },
    {
      "type": "paragraph",
      "text": "**Answer 1 (\"Almost none\"):** If almost none of the rats had high blood pressure before the study, but 75% did after, the argument that the diet is the cause becomes **very strong**."
    },
    {
      "type": "paragraph",
      "text": "**Answer 2 (\"About 75%\"):** If about 75% of the rats *already* had high blood pressure before the study, the argument that the diet is the cause is **completely destroyed**."
    },
    {
      "type": "paragraph",
      "text": "Since the two opposite answers have a massive strengthening and weakening effect, we know our prephrase is targeting the correct logical gap."
    },
    {
      "type": "h4",
      "text": "Step 5: Evaluate Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) How much more salt than is contained in a rat's normal diet was there in the high-salt diet?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This question asks for a detail about the diet. Whether it was a little more salt or a lot more salt doesn't help us determine if the diet had *any* effect at all. This fails the Variance Test."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Did the high blood pressure have any adverse health effects on those rats that developed it?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument is about the *cause* of high blood pressure, not its *effects*. This is out of scope."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(C) What percentage of naturally occurring rat colonies feed on high-salt diets?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The habits of rats in the wild are irrelevant to the results of this controlled experiment."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(D) How many rats in the colony studied had abnormally high blood pressure before the study began?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It directly asks for the missing baseline data. As we saw in the Variance Test, knowing the answer to this question would be decisive."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Have other species of rodents been used in experiments of the same kind?**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument is specifically about rats. Information about other species is not relevant to evaluating this particular conclusion about rats."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
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
      "text": "**Always Look for the Comparison:** When an argument presents data from a study or experiment, ask yourself: \"Compared to what?\" If no comparison is given, the argument is likely flawed."
    },
    {
      "type": "paragraph",
      "text": "**The Baseline is Crucial:** The most fundamental point of comparison is the \"before\" state. Without it, you cannot measure change or determine causation."
    },
    {
      "type": "paragraph",
      "text": "**Use the Variance Test:** This mental exercise is the most reliable way to confirm the correct answer. The question that provides the most \"leverage\" over the conclusion is the one you're looking for."
    }
  ],
};
