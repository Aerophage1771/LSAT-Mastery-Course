import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '17-7',
  title: 'Lesson 4: The Inevitable Consequence',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: The Inevitable Consequence"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Inevitable Consequence"
    },
    {
      "type": "paragraph",
      "text": "Not all Must Be True questions are based on formal \"if-then\" logic. Many present a descriptive passage — a scientific explanation, a set of definitions, or a comparison between two things. In these cases, the correct answer is the Inevitable Consequence of the facts presented."
    },
    {
      "type": "paragraph",
      "text": "This pattern often works like a process of elimination within the stimulus itself. The author explains a phenomenon by ruling out alternative explanations, leaving only one possible reason. Your task is to identify that single, logically necessary conclusion that must be true for the author's explanation to hold."
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
      "text": "**Stimulus** > > The largest volcano on Mars rises 27 kilometers above the surrounding plain and covers an area roughly the size of Romania. Even if the Earth's gravity were as low as the gravity of Mars is, no volcano of such size could exist on Earth, for the Earth's crust, although of essentially the same composition as that of Mars, is too thin to support even a small fraction of that mass and would buckle under it, causing the mountain to sink. > > **Question** > > If the statements above are true, which one of the following must also be true on the basis of them? > > *   (A) The surface of Mars is less subject to forces of erosion than is the surface of the Earth. > *   (B) The highest volcanoes on Mars occur where its crust is thickest. > *   (C) On average, volcanoes on Mars are higher than those on Earth. > *   (D) The crust of Mars, at least at certain points on the planet, is thicker than the crust of the Earth. > *   (E) At least some of the Earth's volcanoes would be larger than they actually are if the Earth's crust were thicker than it is."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must also be true on the basis of them,\" signaling a Must Be True question. We must find the one statement that is a 100% logical certainty based only on the scientific facts provided about the geology of Mars and Earth."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "The stimulus explains a difference between Mars and Earth. Let's break down the facts:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1:** Mars has a massive volcano. This implies the Martian crust is capable of supporting its weight.",
        "**Fact 2:** Earth's crust could *not* support a volcano of that size.",
        "**Reason Given:** The specific reason given for Earth's inability is that its crust is \"too thin.\"",
        "**Controlled Variable 1:** The difference is not due to gravity (the stimulus explicitly controls for this by saying \"Even if the Earth's gravity were as low as the gravity of Mars...\").",
        "**Controlled Variable 2:** The difference is not due to the type of rock (the crusts have \"essentially the same composition\")."
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "The argument sets up a clear comparison and then systematically eliminates possible explanations for the difference in volcanic support capacity between Mars and Earth."
    },
    {
      "type": "list",
      "items": [
        "We have two different outcomes: Mars's crust *can* support the volcano; Earth's *cannot*.",
        "We have a list of potential explanatory factors: Gravity, Composition, and Thickness.",
        "The argument explicitly tells us that Gravity and Composition are *not* the reasons for the difference.",
        "By process of elimination, the only remaining factor — crustal thickness — must be the reason."
      ]
    },
    {
      "type": "paragraph",
      "text": "If Earth's crust is \"too thin\" to support the weight, and Mars's crust *can* support the weight, then it logically follows that the Martian crust must be thicker."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The crust on Mars must be thicker than Earth's crust, at least where the volcano is."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The surface of Mars is less subject to forces of erosion than is the surface of the Earth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus discusses geology (crustal thickness) but never mentions erosion. This introduces a new, unsupported concept."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
    },
    {
      "type": "paragraph",
      "text": "**(B) The highest volcanoes on Mars occur where its crust is thickest.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus allows us to compare Mars to Earth, but it gives no information to compare different locations *on Mars*. We don't know if this volcano is on the thickest part of the Martian crust."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Unsupported Comparison)"
    },
    {
      "type": "paragraph",
      "text": "**(C) On average, volcanoes on Mars are higher than those on Earth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus discusses one single, exceptionally large volcano on Mars. We cannot generalize from this one data point to a conclusion about the \"average\" height of all volcanoes."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Unsupported Generalization)"
    },
    {
      "type": "paragraph",
      "text": "**(D) The crust of Mars, at least at certain points on the planet, is thicker than the crust of the Earth.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. For the stimulus's explanation to be true, this difference in thickness is the inevitable conclusion. The phrase \"at least at certain points\" is appropriately precise, as the volcano's location is the specific point of comparison."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) At least some of the Earth's volcanoes would be larger than they actually are if the Earth's crust were thicker than it is.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a classic \"Could be true\" trap. The stimulus identifies thin crust as a *limiting* factor, but not necessarily the *only* limiting factor. Even with a thicker crust, other factors (like magma supply) might still prevent volcanoes from growing larger. We only know one barrier would be removed, not that the outcome would definitely change."
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
      "type": "list",
      "items": [
        "**Look for Causal Explanations:** When a stimulus explains *why* something is the way it is, focus on the logic of that explanation.",
        "**Identify Controlled Variables:** Pay close attention when a stimulus eliminates potential causes (\"even if...,\" \"although the same...\"). This is a strong clue that the remaining factor is the key to the deduction.",
        "**Distinguish \"Must Be True\" from \"Could Be True\":** Be wary of answer choices that make predictions or state possibilities. The correct answer must be a necessary consequence, not just a plausible one."
      ]
    }
  ],
};
