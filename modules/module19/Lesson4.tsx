import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '19-4',
  title: 'Lesson 1: The Alternative Cause (Self-Selection)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Alternative Cause (Self-Selection)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Alternative Cause"
    },
    {
      "type": "paragraph",
      "text": "Many paradoxes arise from a surprising correlation: why are two seemingly unrelated things, A and B, found together? The puzzle often tempts us to assume A causes B, or B causes A. A very common resolution pattern, the Alternative Cause, breaks this assumption. It explains the correlation by introducing a new causal story:"
    },
    {
      "type": "list",
      "items": [
        "An unmentioned third factor, **C**, is the actual cause of B (or of both A and B).",
        "A special case of this is **self-selection**, where the paradox is explained by the fact that the group being studied was not random. The people in the group already had a trait that led them to *select themselves* into the situation being observed."
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
      "text": "**Stimulus** > > There is strong evidence that the cause of migraines (severe recurrent headaches) is not psychological but instead is purely physiological. Yet several studies have found that people being professionally treated for migraines rate higher on a standard psychological scale of anxiety than do people not being professionally treated for migraines. > > **Question** > > Which one of the following, if true, most helps to resolve the apparent discrepancy in the information above? > > *   (A) People who have migraine headaches tend to have relatives who also have migraine headaches. > *   (B) People who have migraine headaches often suffer these headaches when under emotional stress. > *   (C) People who rate higher on the standard psychological scale of anxiety are more likely to seek professional treatment than are people who rate lower on the scale. > *   (D) Of the many studies done on the cause of migraine headaches, most of those that suggest that psychological factors such as anxiety cause migraines have been widely publicized. > *   (E) Most people who have migraines and who seek professional treatment remain in treatment until they stop having migraines, whether their doctors consider the cause to be physiological or psychological."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Conflict"
    },
    {
      "type": "paragraph",
      "text": "**Fact 1:** Migraines are a purely physiological condition, not a psychological one."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2:** Yet, the group of people being *treated* for migraines has higher anxiety (a psychological trait) than the untreated group."
    },
    {
      "type": "paragraph",
      "text": "**The Paradox:** Why is there a correlation between seeking treatment for a physiological problem and having a psychological trait like anxiety? If migraines aren't caused by psychology, this connection is unexpected."
    },
    {
      "type": "h4",
      "text": "Step 2: Define the Goal and Prephrase the Resolution"
    },
    {
      "type": "paragraph",
      "text": "The goal is to find a new fact that explains this correlation without contradicting the premise that migraines are physiological. We need a logical link between the *act of seeking treatment* and *anxiety*."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** Maybe the treatment itself causes anxiety? Or, maybe the two groups (treated vs. untreated) were different from the start. Perhaps anxious people are simply the ones who decide to go to the doctor for their migraines, while less anxious people don't."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "Let's test each choice to see if it explains how both facts can be true."
    },
    {
      "type": "paragraph",
      "text": "**(A) People who have migraine headaches tend to have relatives who also have migraine headaches.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This information suggests a genetic link, which reinforces the idea that migraines are physiological. However, it only supports Fact 1 of the paradox. It does nothing to explain Fact 2 — the link between treatment and anxiety."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The One-Sider)"
    },
    {
      "type": "paragraph",
      "text": "**(B) People who have migraine headaches often suffer these headaches when under emotional stress.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This choice suggests that a psychological factor (stress) can trigger migraines. This directly challenges the stimulus's premise that migraines are \"purely physiological.\" A correct resolution must accept all facts in the stimulus as true; it cannot resolve the conflict by attacking one of its parts."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Weakens a Premise)"
    },
    {
      "type": "paragraph",
      "text": "**(C) People who rate higher on the standard psychological scale of anxiety are more likely to seek professional treatment than are people who rate lower on the scale.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase and a classic example of an alternative cause. It explains that the correlation isn't between migraines and anxiety, but between anxiety and the *act of seeking treatment*. Anxious people are more likely to go to the doctor for any problem, including physiological ones like migraines. This explains why the \"treated\" group is skewed toward having higher anxiety, without contradicting the physiological nature of the illness."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Of the many studies done on the cause of migraine headaches, most of those that suggest that psychological factors such as anxiety cause migraines have been widely publicized.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The public perception or publicity of different studies is irrelevant to the actual correlation found in the specific study mentioned in the stimulus."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) Most people who have migraines and who seek professional treatment remain in treatment until they stop having migraines...**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes *how long* people stay in treatment. It fails to explain *why* the group in treatment has higher anxiety in the first place."
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
      "text": "**Look for Alternative Causes:** When a paradox presents a surprising correlation, the resolution often introduces a new causal story."
    },
    {
      "type": "paragraph",
      "text": "**Recognize Self-Selection:** A common alternative cause is self-selection bias. The group being studied isn't random; its members share a trait that explains the surprising outcome. Here, the \"treated\" group self-selected for treatment *because* they were anxious."
    },
    {
      "type": "paragraph",
      "text": "**Don't Attack the Premises:** A valid resolution must allow all statements in the stimulus to be true. Any answer choice that contradicts or weakens a premise is incorrect."
    },
    {
      "type": "paragraph",
      "text": "**Beware of \"One-Siders\":** The most common trap is an answer choice that only explains one side of the paradox. Always check that your chosen answer connects both conflicting facts."
    }
  ],
};
