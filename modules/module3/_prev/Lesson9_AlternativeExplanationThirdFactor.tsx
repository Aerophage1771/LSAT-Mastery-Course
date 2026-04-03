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
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Advanced Lesson 1: Challenging an Unstated Assumption (Method of Reasoning)"
        },
        {
          "type": "h3",
          "text": "Concept Focus: Challenging an Unstated Assumption"
        },
        {
          "type": "paragraph",
          "text": "This lesson covers one of the most sophisticated methods of rebuttal. On the surface, an argument might seem sound. But often, its logic only works because the author is secretly relying on an unstated belief — a necessary premise that they never say out loud. A powerful way to attack such an argument is to identify this hidden premise and show that it's false. This collapses the entire logical structure."
        },
        {
          "type": "paragraph",
          "text": "The hidden assumption is the invisible bridge between the stated evidence and the conclusion. Remove the bridge, and the argument falls apart — even if all the stated premises remain true."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Assumption Challenge Pattern"
        },
        {
          "type": "paragraph",
          "text": "When a speaker challenges an unstated assumption, the argument follows a specific structural pattern. Recognizing this pattern is key to identifying the method:"
        },
        {
          "type": "process",
          "title": "How the Method Works",
          "steps": [
            "**Speaker A States an Argument:** Speaker A presents stated premises and draws a conclusion. The argument appears complete on the surface.",
            "**Identify the Logical Gap:** Between the stated evidence and the conclusion, there is a gap — a belief that must be true for the conclusion to follow, but which is never explicitly stated.",
            "**Speaker B Introduces New Information:** Speaker B brings in a fact that seems to come out of nowhere. This new information is the denial of the hidden assumption.",
            "**The Assumption Is Exposed as False:** By showing the hidden assumption is wrong, Speaker B breaks the logical link between evidence and conclusion.",
            "**The Opposite Conclusion Follows:** With the assumption removed, the same evidence now supports a different (often opposite) conclusion."
          ]
        },
        {
          "type": "h3",
          "text": "Stated vs. Implicit Premises"
        },
        {
          "type": "paragraph",
          "text": "The LSAT makes a sharp distinction between what is written on the page and what is logically required but never written. Understanding this distinction is essential:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Stated Premise",
            "Implicit (Unstated) Premise"
          ],
          "rows": [
            [
              "Where is it?",
              "Explicitly written in the stimulus",
              "Not written — must be inferred"
            ],
            [
              "Is it attacked?",
              "Can be attacked (\"Your facts are wrong\")",
              "Can be attacked (\"Your interpretation is flawed\")"
            ],
            [
              "How to identify it",
              "Look for it in the text",
              "Ask: \"What must be true for this conclusion to follow?\""
            ],
            [
              "LSAT terminology",
              "\"stated premise,\" \"evidence,\" \"grounds\"",
              "\"assumption,\" \"presumption,\" \"presupposition\""
            ],
            [
              "Example",
              "\"Yeast is a leaven\"",
              "\"The leaven mentioned in the text must be yeast\""
            ],
            [
              "When attacked, the attacker...",
              "Says the evidence itself is false or unreliable",
              "Accepts the evidence but shows the logical leap is unjustified"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "How to Spot Hidden Assumptions",
          "variant": "tip",
          "text": "Use these three techniques to uncover hidden assumptions:\n\n**1. The Gap Test:** Read the stated premises and the conclusion. Is there a logical leap? What belief would fill that gap?\n\n**2. The Negation Test:** Negate your candidate assumption. If the argument falls apart when the assumption is denied, you've found it.\n\n**3. The \"Out of Nowhere\" Signal:** In dialogues, when Speaker B introduces a fact that seems unrelated to Speaker A's stated evidence, that new fact is almost always the denial of a hidden assumption."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example"
        },
        {
          "type": "question-card",
          "id": "PT-127-S-2-Q-9",
          "stimulus": "Rifka: We do not need to stop and ask for directions. We would not need to do that unless, of course, we were lost.\nCraig: The fact that we are lost is precisely why we need to stop.",
          "question": "In the exchange above, the function of Craig's comment is to",
          "options": [
            "**(A)** contradict the conclusion of Rifka's argument without offering any reason to reject any of Rifka's implicit premises",
            "**(B)** deny one of Rifka's implicit premises and thereby arrive at a different conclusion (Correct) [56%]",
            "**(C)** imply that Rifka's argument is invalid by accepting the truth of its premises while rejecting its conclusion",
            "**(D)** provide a counterexample to Rifka's generalization",
            "**(E)** affirm the truth of the stated premise of Rifka's argument while remaining noncommittal about its conclusion"
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Step 1: Deconstruct the Argument"
        },
        {
          "type": "paragraph",
          "text": "To understand Craig's method, we must first expose the hidden structure of Rifka's argument:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "Rifka's Stated Premise",
              "text": "\"We would not need to ask for directions unless we were lost.\" Translation: The *only* reason to ask for directions is if we are lost.",
              "badge": "Stated",
              "badgeColor": "blue"
            },
            {
              "title": "Rifka's Conclusion",
              "text": "\"We do not need to stop and ask for directions.\"",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "Rifka's Hidden Assumption",
              "text": "*We are not lost.* This is never stated, but Rifka's argument only works if it's true. If they *are* lost, then by her own rule, they *would* need to ask.",
              "badge": "Implicit",
              "badgeColor": "slate"
            },
            {
              "title": "Craig's Response",
              "text": "\"The fact that we are lost...\" — Craig directly attacks the hidden assumption by stating its opposite. He declares \"we are lost,\" which, combined with Rifka's own stated rule, yields the opposite conclusion: they *do* need to stop.",
              "badge": "Denies Assumption",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "h3",
          "text": "Step 2: Characterize the Method and Prephrase"
        },
        {
          "type": "paragraph",
          "text": "Craig finds the hidden assumption in Rifka's argument (that they aren't lost), states that it's false, and uses Rifka's own rule to reach the opposite conclusion."
        },
        {
          "type": "callout",
          "title": "Prephrase",
          "variant": "tip",
          "text": "Craig denies Rifka's unstated assumption that they aren't lost, which — combined with her own rule — supports the opposite conclusion."
        },
        {
          "type": "h3",
          "text": "Step 3: Evaluate the Answer Choices"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Detailed Evaluation"
          },
          "items": [
            {
              "title": "(A) contradict the conclusion... without offering any reason to reject any of Rifka's implicit premises",
              "text": "This gets it exactly backward. Craig *does* offer a reason to reject her implicit premise — he states directly that \"we are lost.\" The key word \"without\" makes this choice factually incorrect.",
              "badge": "Factual Error",
              "badgeColor": "red"
            },
            {
              "title": "(B) deny one of Rifka's implicit premises and thereby arrive at a different conclusion",
              "text": "This is a precise match. Craig \"denies one of Rifka's implicit premises\" (says they *are* lost) and \"arrives at a different conclusion\" (they need to stop). Every element maps perfectly to the argument.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(C) imply that Rifka's argument is invalid by accepting the truth of its premises while rejecting its conclusion",
              "text": "This is a tempting trap describing a *reductio ad absurdum*. But Craig does *not* accept all of Rifka's premises — he specifically denies the unstated one. The word \"accepting\" makes this choice wrong.",
              "badge": "Mischaracterization",
              "badgeColor": "red"
            },
            {
              "title": "(D) provide a counterexample to Rifka's generalization",
              "text": "Rifka doesn't make a generalization that Craig disproves with a specific case. Craig's move is to deny a hidden assumption, not to show that a rule has an exception.",
              "badge": "Wrong Method",
              "badgeColor": "red"
            },
            {
              "title": "(E) affirm the truth of the stated premise... while remaining noncommittal about its conclusion",
              "text": "Craig is the *opposite* of noncommittal — he explicitly states the contrary conclusion (\"precisely why we need to stop\"). The word \"noncommittal\" disqualifies this choice.",
              "badge": "Factual Error",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "*   **Look for Logical Gaps:** Advanced Method questions often test your ability to spot what's *missing*. If an argument jumps from evidence to a conclusion, ask: \"What must the author believe for this to make sense?\" That's the unstated assumption.\n*   **Distinguish Stated vs. Implicit Premises:** The LSAT makes a sharp distinction between what is written on the page (stated) and what is logically required but not written (implicit/unstated). An answer choice that says \"attacks a stated premise\" is fundamentally different from one that says \"attacks an unstated assumption.\"\n*   **The \"Out of Nowhere\" Signal:** In dialogues, when Speaker B introduces a fact that seems unrelated to Speaker A's stated evidence, that new fact is almost always the denial of a hidden assumption.\n*   **LSAT Vocabulary:** \"Presumption,\" \"presupposition,\" and \"assumption\" all mean the same thing — a hidden premise that the argument depends on but never states."
        }
      ],
    },
  },
};
