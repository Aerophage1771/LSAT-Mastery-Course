import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '11-5',
  title: 'Lesson 2: The Defender (Necessary Assumption)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: The Defender (Necessary Assumption)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Defending a Causal Claim"
    },
    {
      "type": "paragraph",
      "text": "A huge number of arguments you will encounter are causal. They observe a correlation and leap to a causal conclusion. A key weakness of these arguments is the failure to consider alternative explanations. The Defender is a type of necessary assumption that protects the argument by ruling out one of these key alternatives."
    },
    {
      "type": "paragraph",
      "text": "One of the most common alternative explanations for a correlation between A and B is **reversed causation**: the possibility that B actually causes A, not the other way around. The Defender assumption shuts this possibility down."
    },
    {
      "type": "list",
      "items": [
        "**Observation:** People who do A also have characteristic B.",
        "**Conclusion:** Therefore, A *causes* B.",
        "**Logical Gap:** Maybe having characteristic B *causes* people to do A.",
        "**Necessary Assumption (The Defender):** B does not cause A."
      ]
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
      "text": "**Stimulus** > > The corpus callosum—the thick band of nerve fibers connecting the brain's two hemispheres—of a musician is on average larger than that of a nonmusician. The differences in the size of corpora callosa are particularly striking when adult musicians who began training around the age of seven are compared to adult nonmusicians. Therefore, musical training, particularly when it begins at a young age, causes certain anatomic brain changes. > > **Question** > > Which one of the following is an assumption on which the argument depends? > > *   (A) The corpora callosa of musicians, before they started training, do not tend to be larger than those of nonmusicians of the same age. > *   (B) Musical training late in life does not cause anatomic changes to the brain. > *   (C) For any two musicians whose training began around the age of seven, their corpora callosa are approximately the same size. > *   (D) All musicians have larger corpora callosa than do any nonmusicians. > *   (E) Adult nonmusicians did not participate in activities when they were children that would have stimulated any growth of the corpus callosum."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "list",
      "items": [
        "**Conclusion:** Musical training, especially at a young age, *causes* anatomic brain changes (a larger corpus callosum).",
        "**Premise:** Adult musicians (especially those who started young) have, on average, a larger corpus callosum than adult nonmusicians.",
        "**Core Argument:** The author concludes that musical training *causes* a larger corpus callosum because there is a strong correlation between the two."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "This is a classic correlation-to-causation argument. The author sees that musicians have a trait and concludes that their musical training caused it. The logical leap is ignoring the possibility of reversed causation. What if having a naturally larger corpus callosum makes someone more likely to succeed at or enjoy music, and thus more likely to become a musician? The author must assume this alternative cause is not the real explanation."
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Necessary Connection"
    },
    {
      "type": "paragraph",
      "text": "The argument needs to rule out the possibility that the brain difference came first."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The author must assume that musicians don't start out with bigger corpora callosa before they begin their training."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate Answer Choices and Select a Contender"
    },
    {
      "type": "list",
      "items": [
        "(A) This choice states that musicians' brains *before training* are not larger than nonmusicians' brains. This is a perfect match for our prephrase and directly addresses the reverse-causation possibility.",
        "(B) This is about training *late* in life. The argument focuses on training *early* in life. This is a scope issue.",
        "(C) This is too strong. The argument is about averages, not uniformity.",
        "(D) This is an Overly Strong Claim. The premise says \"on average,\" which allows for exceptions.",
        "(E) This is about *other activities*. The argument only needs to rule out reverse causation for *music*, not every other possible activity."
      ]
    },
    {
      "type": "paragraph",
      "text": "Choice (A) is our clear contender."
    },
    {
      "type": "h4",
      "text": "Step 5: Confirm with the Negation Test"
    },
    {
      "type": "list",
      "items": [
        "**Original (A):** The corpora callosa of musicians, before they started training, do not tend to be larger than those of nonmusicians of the same age.",
        "**Negation:** The corpora callosa of musicians, before they started training, **DO** tend to be larger than those of nonmusicians of the same age."
      ]
    },
    {
      "type": "paragraph",
      "text": "If the negation is true, it means that the brain difference existed *before* the musical training ever began. This provides a powerful alternative explanation for the correlation: the brain difference causes the musical pursuit, not the other way around. This shatters the author's causal conclusion. Since the negation destroys the argument, (A) is the correct answer."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Analysis of Incorrect Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(B) Musical training late in life does not cause anatomic changes to the brain.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The conclusion is that training, *particularly* when young, causes changes. This is compatible with training later in life also causing changes. The argument doesn't depend on this being false."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) For any two musicians whose training began around the age of seven, their corpora callosa are approximately the same size.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Overly Strong Claim. The argument relies on an average difference between groups, which can exist even with significant variation within the musician group."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) All musicians have larger corpora callosa than do any nonmusicians.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Another Overly Strong Claim. The stimulus explicitly uses the term \"on average,\" directly contradicting this absolute statement."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) Adult nonmusicians did not participate in activities when they were children that would have stimulated any growth of the corpus callosum.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a weak Defender. The argument only needs to show that *music* causes a change. Even if other activities also cause changes, as long as music causes a *greater* change, the observed average difference between musicians and nonmusicians can still be attributed to music. The argument doesn't need to assume that nonmusicians did nothing to stimulate their brains."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Always Suspect Causation from Correlation:** When you see an argument move from \"A is correlated with B\" to \"A causes B,\" the most likely logical gap is the failure to consider alternative explanations.",
        "**Watch for Reverse Causation:** A primary alternative cause to consider is that B causes A. A necessary assumption for the argument will often be a \"Defender\" that rules out this possibility.",
        "**The Negation Test is Your Best Friend:** When an argument is causal, the Negation Test is the most effective way to confirm that an answer choice is successfully ruling out a necessary alternative."
      ]
    }
  ],
};
