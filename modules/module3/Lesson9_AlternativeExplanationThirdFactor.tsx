import { Lesson } from '../../types';

export const Lesson9_AlternativeExplanationThirdFactor: Lesson = {
  id: "3-9",
  title: "Alternative Explanation (The Third Factor)",
  content: [
    { type: 'h3', text: "Module 3, Lesson 9: Alternative Explanation (The Third Factor)" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** used to support the conclusion. We are about to look at a more complex version of the \"Alternative Explanation.\" In this version, the author doesn't just say the opponent is wrong; they explain *why* the opponent's evidence seemed so convincing in the first place by introducing a **Third Factor**. This is one of the most common ways the LSAT handles scientific or causal arguments." },
    { type: 'paragraph', text: "Here is our plan of attack:" },
    { 
      type: 'process', 
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },
    { type: 'paragraph', text: "Let’s apply this method to the following question." },
    { type: 'h4', text: "Question ID: PT-112-S-1-Q-7" },
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "It is widely believed that eating chocolate can cause acne. Indeed, many people who are susceptible to acne report that, in their own experience, eating large amounts of chocolate is invariably followed by an outbreak of that skin condition. However, it is likely that common wisdom has mistaken an effect for a cause. Several recent scientific studies indicate that hormonal changes associated with stress can cause acne and there is good evidence that people who are fond of chocolate tend to eat more chocolate when they are under stress." },
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "The argument employs which one of the following argumentative strategies?" },
    { 
      type: 'options', 
      items: [
        "(A) It cites counterevidence that calls into question the accuracy of the evidence advanced in support of the position being challenged.",
        "(B) It provides additional evidence that points to an alternative interpretation of the evidence offered in support of the position being challenged.",
        "(C) It invokes the superior authority of science over common opinion in order to dismiss out of hand the relevance of evidence based on everyday experience.",
        "(D) It demonstrates that the position being challenged is inconsistent with certain well-established facts.",
        "(E) It provides counterexamples to show that, contrary to the assumption on which the commonly held position rests, causes do not always precede their effects."
      ] 
    },
    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the author reinterprets a popular belief." },
    { 
      type: 'list', 
      items: [
        "**\"It is widely believed that eating chocolate can cause acne.\"**\n*   **Reaction:** The author is introducing the target. This is the common belief that they are about to attack.",
        "**\"Indeed, many people... report that... eating large amounts of chocolate is invariably followed by an outbreak...\"**\n*   **Reaction:** This is the evidence for that belief. People notice two things happening together: eating chocolate and getting acne. It’s a correlation.",
        "**\"However, it is likely that common wisdom has mistaken an effect for a cause.\"**\n*   **Reaction:** Here is the pivot. The author says the common belief is wrong. They aren't saying the chocolate and acne don't happen together; they are saying we have identified the wrong reason *why*.",
        "**\"Several recent scientific studies indicate that hormonal changes associated with stress can cause acne...\"**\n*   **Reaction:** The author introduces a \"Third Factor\": **Stress**. Stress causes the acne. Stress also causes the chocolate consumption. This explains why the two things appear together without one actually causing the other."
      ] 
    },
    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "Common wisdom says chocolate causes acne because they often happen at the same time. The author argues that this is a mistake. Instead, the author claims that stress is the real cause of both: stress gives you acne, and stress makes you eat chocolate. They appear together because they share a common cause (stress)." },
    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "What is the abstract structure here?" },
    { type: 'paragraph', text: "The author accepts a **correlation** between two things (1 and 2). However, they reject the **causal explanation** (that 1 causes 2). They then introduce a **third factor** (3) and argue that 3 is the actual cause of both 1 and 2." },
    { type: 'callout', title: "Method: Offering an Alternative Interpretation", variant: "summary", text: "Accepting the evidence (correlation) but rejecting the interpretation (causation) by introducing a third factor that explains the evidence in a new way." },
    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { type: 'paragraph', text: "Now we evaluate the answer choices by breaking them into individual facets to see which ones actually happen in the text." },
    { 
      type: 'breakdown', 
      labels: { title: 'Option Evaluation', text: 'Validation' },
      items: [
        {
          title: "(A) It cites counterevidence that calls into question the accuracy...",
          text: "**Component 1:** Does the author cite counterevidence?\n**Validation:** Yes, the studies about stress.\n**Component 2:** Does this call into question the *accuracy* of the original evidence?\n**Validation:** No. The author accepts the reports (chocolate followed by acne) as accurate but provides a different reason for them.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) It provides additional evidence that points to an alternative interpretation...",
          text: "**Component 1:** Does the author provide additional evidence?\n**Validation:** Yes, the stress studies.\n**Component 2:** Does this evidence point to an *alternative interpretation*?\n**Validation:** Yes. The original interpretation was \"chocolate causes acne.\" The new interpretation is \"stress causes both.\" This matches our abstraction perfectly.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(C) It invokes the superior authority of science over common opinion in order to dismiss out of hand...",
          text: "**Component 1:** Does the author invoke scientific authority?\n**Validation:** Yes.\n**Component 2:** Does the author \"dismiss out of hand\" the everyday experience?\n**Validation:** No. The author tries to find a deeper explanation for it, rather than saying it doesn't matter.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) It demonstrates that the position being challenged is inconsistent with certain well-established facts.",
          text: "**Component 1:** Does the author show the original position is *inconsistent*?\n**Validation:** No. It is still *possible* that chocolate causes acne. The author just argues stress is a *more likely* explanation. No contradiction.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(E) It provides counterexamples to show that... causes do not always precede their effects.",
          text: "**Component 1:** Does the author provide counterexamples?\n**Validation:** No. A general theory is not a counterexample.\n**Component 2:** Is it about timing of causes?\n**Validation:** No. It's about identity of the cause.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },
    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we saw, all of our steps worked! We figured out each of the parts of the stimulus, converted that to a general description of what the author did, successfully converted that into an abstraction, and found that pattern waiting in the answer choices. By breaking the answers into individual parts, we were able to see exactly why the wrong answers failed the Fact Test." },
    { type: 'paragraph', text: "Here are the four major methods we have added to our library so far:" },
    { 
      type: 'list', 
      items: [
        "**1. Process of Elimination:** Establishing a list of possibilities and ruling them out one by one until only the correct answer remains.",
        "**2. Alternative Explanation:** Accepting the evidence but proposing a different cause or reason for that evidence.",
        "**3. Argument by Analogy:** Supporting a claim about one situation by comparing it to a different but similar situation.",
        "**4. Refutation by Parallel Reasoning:** Showing that an opponent's logic leads to a ridiculous conclusion when used in a different context."
      ] 
    }
  ]
};
