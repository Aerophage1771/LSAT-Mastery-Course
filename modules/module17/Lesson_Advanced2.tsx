import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '17-10',
  title: 'Advanced Lesson 2: Weighted Averages & Subgroup Analysis',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: Weighted Averages & Subgroup Analysis"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Logic of Weighted Averages"
    },
    {
      "type": "paragraph",
      "text": "Advanced Must Be True questions often disguise mathematical concepts as verbal descriptions. One of the most challenging patterns involves Weighted Averages — reconciling the characteristics of a specific subgroup with the characteristics of the total population."
    },
    {
      "type": "paragraph",
      "text": "The logic works like a tug-of-war. Imagine a total population composed of two subgroups: Group A and Group B. If **Group A** has a specific trait (e.g., \"Tall\"), but the **Total Population** has the *opposite* trait (e.g., \"Short\"), logic dictates that **Group A must be a minority**. For the Total to be \"Short\" despite Group A being \"Tall,\" Group B (the \"Short\" group) must be large enough to dominate the average."
    },
    {
      "type": "paragraph",
      "text": "When a stimulus presents a conflict between the stats of a subgroup and the stats of the whole, your task is to deduce the relative sizes of the groups."
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
      "text": "**Stimulus** > > Nearly all mail that is correctly addressed arrives at its destination within two business days of being sent. In fact, correctly addressed mail takes longer than this only when it is damaged in transit. Overall, however, most mail arrives three business days or more after being sent. > > **Question** > > If the statements above are true, which one of the following must be true? > > *   (A) A large proportion of the mail that is correctly addressed is damaged in transit. > *   (B) No incorrectly addressed mail arrives within two business days of being sent. > *   (C) Most mail that arrives within two business days of being sent is correctly addressed. > *   (D) A large proportion of mail is incorrectly addressed. > *   (E) More mail arrives within two business days of being sent than arrives between two and three business days after being sent."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must be true,\" requiring a conclusion that is mathematically guaranteed by the statements in the stimulus."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "Let's break the text down into groups and characteristics:"
    },
    {
      "type": "paragraph",
      "text": "**Subgroup 1: Correctly Addressed Mail (CA).**"
    },
    {
      "type": "list",
      "items": [
        "**Trait:** \"Nearly all\" arrive fast (within 2 days).",
        "**Exception:** The tiny fraction that are slow are damaged."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Total Population: All Mail.**"
    },
    {
      "type": "list",
      "items": [
        "**Trait:** \"Most\" arrive slow (3 days or more)."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Implied Subgroup 2: Incorrectly Addressed Mail (IA).** Since mail is either correctly or incorrectly addressed, this is the remainder of the population."
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "We have a conflict between the subgroup and the total:"
    },
    {
      "type": "list",
      "items": [
        "**Subgroup CA:** Overwhelmingly **FAST**.",
        "**Total Mail:** Mostly **SLOW**."
      ]
    },
    {
      "type": "paragraph",
      "text": "How can the \"Total\" be slow if the \"CA\" part is fast? Imagine the mail pile. If CA mail made up the majority of the pile, the *Total* would reflect that — the Total would be mostly fast. But the Total is mostly slow. This forces a mathematical conclusion: The \"Fast\" CA mail must be a **minority** of the total pile. The \"Slow\" characteristic of the Total must be coming from the other subgroup (Incorrectly Addressed mail), and that other subgroup must be large enough to dominate the statistics."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** Correctly Addressed mail is a minority of the total. Therefore, Incorrectly Addressed mail must be the majority (or a \"large proportion\")."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) A large proportion of the mail that is correctly addressed is damaged in transit.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus says \"Nearly all\" CA mail arrives fast. Only the ones that *don't* arrive fast are damaged. Since \"nearly all\" are fast, the slow or damaged ones are a tiny minority, not a \"large proportion.\""
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Contradicts the text.)"
    },
    {
      "type": "paragraph",
      "text": "**(B) No incorrectly addressed mail arrives within two business days of being sent.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus gives us stats for CA mail and Total mail. It never explicitly states the speed of Incorrectly Addressed (IA) mail. While we know IA mail is dragging the average down, it's possible *some* of it still arrives fast. \"No\" is too strong."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Too Strong / Could Be True.)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Most mail that arrives within two business days of being sent is correctly addressed.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a tricky statistical trap. Even if 99% of CA mail is fast, if the CA group is tiny (e.g., 10 letters), that's only about 10 fast letters. If the IA group is huge (e.g., 1,000 letters), and even 5% of them are fast, that's 50 fast letters. In this scenario, most fast mail is actually *Incorrectly Addressed*. We don't know the absolute numbers, so we cannot prove this."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Reversal of Probability.)"
    },
    {
      "type": "paragraph",
      "text": "**(D) A large proportion of mail is incorrectly addressed.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This matches our synthesis. Because the \"Fast\" CA group failed to influence the \"Slow\" Total, the CA group must be small. Therefore, the remaining mail — Incorrectly Addressed — must be a large proportion (specifically, a majority) to drive the overall statistics to \"Most... slow.\""
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) More mail arrives within two business days of being sent than arrives between two and three business days after being sent.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus defines \"within 2 days\" and \"3 days or more.\" It leaves a gap for mail arriving between 2 and 3 days. We have absolutely no data on this middle category."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Out of Scope.)"
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
        "**Watch for the \"Subgroup vs. Total\" Conflict:** If a subgroup has Trait X, but the Total Group has Trait Y (the opposite), the Subgroup *must* be a minority.",
        "**Infer the \"Other\" Group:** Stimuli often describe one subgroup (Correctly Addressed) and the Total, leaving you to infer the size or characteristics of the unmentioned subgroup (Incorrectly Addressed).",
        "**Don't Confuse Rate with Volume:** Just because \"Most As are B\" doesn't mean \"Most Bs are A.\" (Just because most Correct Mail is Fast doesn't mean most Fast Mail is Correct.)"
      ]
    }
  ],
};
