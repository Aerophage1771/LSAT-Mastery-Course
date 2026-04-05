import { Lesson } from '../../types';

export const Lesson9_HardQuestion_ConditionalParaphrase: Lesson = {
  id: "2-9",
  title: "Hard Question Deconstruction - The Conditional Paraphrase",
  content: [
    { type: 'h3', text: "Lesson 9: Deconstructing a Hard Question" },
    { type: 'paragraph', text: "This lesson focuses on a high-difficulty question that perfectly illustrates the **Conditional Paraphrase** trap. In this pattern, the author's conclusion is a nuanced claim about probability or likelihood. The most tempting wrong answer takes this nuanced claim and transforms it into a rigid, absolute conditional rule (\"If... then...\")." },
    { type: 'paragraph', text: "Mastering this distinction is key to succeeding on the hardest Main Conclusion questions. It requires you to pay precise attention to the *logical force* of the author's claim." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Read the stimulus and answer choices. As you analyze, focus on the exact nature of the author's main point: is it a certainty, a probability, or a conditional rule?" },
    { type: 'blockquote', text: "**Stimulus:**\n\nNovel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations, which might lead one to suspect plagiarism on the part of one of the authors. However, it is more likely that the similarity of themes and situations in the two novels is merely coincidental, since both authors are from very similar backgrounds and have led similar lives." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately expresses the conclusion drawn in the argument?" },
    { type: 'options', items: [
      "(A) Novel X and Novel Y are both semiautobiographical novels, and the two novels contain many very similar themes and situations.",
      "(B) The fact that Novel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations might lead one to suspect plagiarism on the part of one of the authors.",
      "(C) The author of Novel X and the author of Novel Y are from very similar backgrounds and have led similar lives.",
      "(D) It is less likely that one of the authors of Novel X or Novel Y is guilty of plagiarism than that the similarity of themes and situations in the two novels is merely coincidental.",
      "(E) If the authors of Novel X and Novel Y are from very similar backgrounds and have led similar lives, suspicions that either of the authors plagiarized are very likely to be unwarranted."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Analysis: What Makes This Question So Hard?" },
    { type: 'list', ordered: true, items: [
      "**Nuanced Conclusion:** The conclusion is not a simple fact but a **comparative judgment of probability** (\"it is more likely that...\"). This is a more complex idea than a straightforward claim.",
      "**The Conditional Paraphrase Trap:** The most popular wrong answer (E) takes the argument's components and reassembles them into a formal \"If... then...\" statement. This answer choice sounds logical and \"LSAT-like,\" trapping nearly a third of test-takers.",
      "**Buried Middle Structure:** The conclusion is \"sandwiched\" in the middle of the stimulus, following a pivot word."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1 & 2: Deconstruct the Argument's Flow" },
    { type: 'list', items: [
      "**Sentence 1 (first half):** \"Novel X and Novel Y are both semiautobiographical novels and contain many very similar themes and situations...\"\n    *   **Role:** This is **Background Information** or context.",
      "**Sentence 1 (second half):** \"...which might lead one to suspect plagiarism...\"\n    *   **Role:** This introduces a potential explanation for the background facts—the **Opposing Viewpoint** that the author will argue against.",
      "**Sentence 2 (first half):** \"**However**, it is more likely that the similarity... is merely coincidental...\"\n    *   **Role:** The pivot word \"**However**\" signals the author's disagreement. This comparative claim is our candidate for the **Main Conclusion**. The author is weighing two possible explanations (plagiarism vs. coincidence) and judging one to be more probable.",
      "**Sentence 2 (second half):** \"...**since** both authors are from very similar backgrounds and have led similar lives.\"\n    *   **Role:** The premise indicator \"**since**\" marks this as the **Premise**. It provides the reason *why* a coincidence is the more likely explanation."
    ]},
    { type: 'h4', text: "Step 3: Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is: \"It is more likely that the similarity... is merely coincidental.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* is it more likely that the similarities are a coincidence?",
      "**Answer from Stimulus:** **Because** (\"since\") the authors have very similar backgrounds and lives."
    ]},
    { type: 'paragraph', text: "The final clause provides the \"Why\" for the middle clause. This confirms that the middle clause is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our pre-phrase: \"The similarities between the novels are probably a coincidence, not plagiarism.\" Or more precisely: \"Coincidence is a better explanation than plagiarism.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Novel X and Novel Y are both semiautobiographical novels, and the two novels contain many very similar themes and situations.",
        text: "Trap Type: Premise Trap (specifically, Background Information). This is the factual setup for the argument.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) The fact that Novel X and Novel Y are... similar... might lead one to suspect plagiarism...",
        text: "Trap Type: Opposing Viewpoint Trap. This states the potential suspicion that the author is arguing against.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) The author of Novel X and the author of Novel Y are from very similar backgrounds and have led similar lives.",
        text: "Trap Type: Premise Trap. This is the evidence the author provides to support the main conclusion.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) It is less likely that one of the authors... is guilty of plagiarism than that the similarity... is merely coincidental.",
        text: "Analysis: This is a perfect, if slightly rephrased, match for our conclusion. Stating that plagiarism is \"less likely\" than coincidence is logically identical to stating that coincidence is \"more likely\" than plagiarism. It captures the comparative judgment of probability perfectly. **This is the correct answer.**",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) If the authors... are from very similar backgrounds... suspicions that either of the authors plagiarized are very likely to be unwarranted.",
        text: "Trap Type: Conditional Paraphrase Trap. This is the most dangerous distractor. It takes the premise (\"similar backgrounds\") and the conclusion (\"plagiarism is unlikely\") and fuses them into a rigid \"If... then...\" rule. The author's argument is a specific judgment about a specific case. This answer choice elevates that judgment to a general principle. The author never claims this rule holds true in all cases; they only use the premise to support the conclusion in this one instance. This changes the logical force of the author's claim.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Major Takeaways from this Hard Question" },
    { type: 'list', ordered: true, items: [
      "**Match the Logical Force:** The author made a claim about *probability*. The correct answer must also be a claim about probability. Distractors that turn this into a certainty or a conditional rule are incorrect.",
      "**A Single Case vs. a General Rule:** Be wary of answer choices that take a specific argument and generalize it into a broad principle. The author uses the similar backgrounds as a premise *in this case*, not as the \"if\" part of a universal rule.",
      "**Paraphrasing is Key:** The correct answer (D) rephrased \"more likely X\" as \"less likely Y.\" This is a common and logically valid way to restate a comparative claim. Be prepared to recognize these logical equivalences."
    ]}
  ]
};
