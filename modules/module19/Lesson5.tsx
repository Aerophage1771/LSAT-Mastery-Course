import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '19-5',
  title: 'Lesson 2: Distinguishing Concepts (Rate vs. Number)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: Distinguishing Concepts (Rate vs. Number)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Rate vs. Number Distinction"
    },
    {
      "type": "paragraph",
      "text": "One of the most common ways a paradox is created is by conflating a rate (a percentage, proportion, or risk per event) with a raw number (a total count). An activity can have a very low rate of risk but still produce a high total number of negative outcomes if that activity is performed a huge number of times. Conversely, a high-risk activity might produce a low total number of negative outcomes if it is performed very rarely. Spotting this distinction is key to resolving many statistical paradoxes."
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
      "text": "**Stimulus** > > We are taught that pedestrians should cross the street at a corner and that jaywalking, in the sense of crossing other than at a corner, is dangerous and illegal. It also seems true that drivers anticipate people crossing at corners more than drivers anticipate people crossing elsewhere. Thus we might infer that crossing at a corner is safer than jaywalking. Nevertheless, statistics show that more pedestrians die crossing at corners than while jaywalking. > > **Question** > > Which one of the following, if true, most helps to explain the statistical claim cited above? > > *   (A) Far more pedestrians cross at corners than jaywalk. > *   (B) Some people jaywalk only when there is little traffic. > *   (C) Drivers are often unfamiliar with the laws concerning jaywalking. > *   (D) Traffic laws in most locations state that the pedestrian always has the right of way, whether or not the pedestrian is crossing at a corner. > *   (E) Good drivers anticipate jaywalkers as much as they anticipate pedestrians crossing at corners."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Conflict"
    },
    {
      "type": "paragraph",
      "text": "**Fact 1 (The Expected):** Crossing at a corner is safer than jaywalking. This is about the *risk per crossing*, or the **rate** of accidents."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2 (The Unexpected):** Nevertheless, a greater **total number** of pedestrians die crossing at corners than while jaywalking."
    },
    {
      "type": "paragraph",
      "text": "**The Paradox:** How can the \"safer\" location be the site of more total deaths?"
    },
    {
      "type": "h4",
      "text": "Step 2: Define the Goal and Prephrase the Resolution"
    },
    {
      "type": "paragraph",
      "text": "The goal is to explain how a low-risk activity can produce a high number of deaths. The most direct way to do this is to consider the frequency of the activity."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** Maybe the total number of deaths is higher at corners simply because far more people cross at corners than jaywalk. Even with a lower risk per crossing, the sheer volume of crossings would lead to a higher total number of accidents."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "Let's test each choice to see if it explains how both the lower risk and higher total deaths at corners can be true."
    },
    {
      "type": "paragraph",
      "text": "**(A) Far more pedestrians cross at corners than jaywalk.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This directly matches our prephrase. It introduces the concept of volume. A very large number of low-risk events (crossing at corners) can easily result in a higher total number of fatalities than a small number of high-risk events (jaywalking). This allows both facts in the stimulus to be true."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Some people jaywalk only when there is little traffic.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This suggests why jaywalking might not be as risky as we think, addressing one side of the paradox. However, it doesn't explain the other, more surprising side: why corners, which are supposed to be even safer, have more total deaths."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The One-Sider)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Drivers are often unfamiliar with the laws concerning jaywalking.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This reinforces the idea that jaywalking is dangerous. It does not help explain why the supposedly safer corners are the location of more fatalities."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The One-Sider)"
    },
    {
      "type": "paragraph",
      "text": "**(D) Traffic laws in most locations state that the pedestrian always has the right of way, whether or not the pedestrian is crossing at a corner.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This information applies equally to both crossing at a corner and jaywalking. Since it doesn't differentiate between the two situations, it cannot explain the difference in the number of fatalities between them."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(E) Good drivers anticipate jaywalkers as much as they anticipate pedestrians crossing at corners.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This choice removes one of the reasons given for why corners are safer. By making corners seem less safe than we thought, it actually makes the paradox harder to understand. Why would corners have more deaths if the driver-anticipation advantage doesn't even exist?"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Deepener)"
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
      "text": "**Distinguish Rates from Raw Numbers:** Be vigilant for paradoxes that compare a percentage, proportion, or risk-per-event (a rate) with a total count (a raw number)."
    },
    {
      "type": "paragraph",
      "text": "**Volume is Often the Key:** The resolution to a rate-vs.-number paradox almost always involves the size of the group or the frequency of the event. A larger base number can lead to a larger total, even if the rate is smaller."
    },
    {
      "type": "paragraph",
      "text": "**Articulate the Paradox Precisely:** Notice that the key was identifying that one fact was about safety *per crossing* (a rate) while the other was about the *total number* of deaths. A precise understanding of the conflict leads directly to the resolution."
    }
  ],
};
