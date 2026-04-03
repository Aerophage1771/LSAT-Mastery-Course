import { Lesson } from '../../types';

export const Lesson6_RefutationByParallelReasoning: Lesson = {
  id: "3-6",
  title: "Refutation by Parallel Reasoning",
  content: [
    { type: 'h3', text: "Lesson 6: Refutation by Parallel Reasoning" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** used to support the conclusion. This method is the aggressive cousin of the Argument by Analogy. While an analogy is used to *build* an argument, this method is used to *destroy* one. We call this **Refutation by Parallel Reasoning** (also known as the \"Absurd Parallel\")." },
    
    { 
      type: 'process', 
      title: "Plan of Attack",
      steps: [
        "Break down the argument into its parts",
        "Summarize the original argument",
        "Abstract that into a general method",
        "Look for that specific answer choice",
        "Confirm by selecting or removing answers based on our Fact Test"
      ] 
    },

    { type: 'h4', text: "Question ID: PT-107-S-3-Q-3" },
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "**Land developer:** By attempting to preserve endangered species that otherwise would become extinct during our lifetime, we are wasting money on species that will disappear over time regardless of our efforts. Paleontologists have established that extinction is the normal fate of species on the geological time scale of millions of years.\n\n**Environmentalist:** To claim that we should let species disappear because all species eventually die out makes about as much sense as arguing that we should not spend money to find a cure for cancer because all humans are inevitably mortal." },
    
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "The method the environmentalist uses to object to the land developer’s argument is to" },
    
    { type: 'h4', text: "Answer Choices" },
    { 
      type: 'options', 
      items: [
        "(A) clarify a dilemma that is embedded in the land developer’s argument",
        "(B) attack the character of the land developer rather than the position the land developer is taking",
        "(C) show that more evidence is needed to substantiate the land developer’s conclusion",
        "(D) show that the land developer’s line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
        "(E) argue that there are problems that money, however judiciously spent, cannot solve"
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with this conversation sentence by sentence to see how the logic is being attacked." },
    
    { 
      type: 'breakdown', 
      labels: { title: 'Speaker & Statement', text: 'Analysis' },
      items: [
        {
          title: "Developer: \"...wasting money on species that will disappear... regardless of our efforts.\"",
          text: "Claims conservation is a waste because the outcome (extinction) is inevitable on a long enough timeline.",
          badge: "Opponent Argument",
          badgeColor: "red"
        },
        {
          title: "Developer: \"Paleontologists have established that extinction is the normal fate...\"",
          text: "Supporting evidence using a geological timescale to justify a current short-term decision.",
          badge: "Opponent Logic",
          badgeColor: "red"
        },
        {
          title: "Environmentalist: \"...makes about as much sense as arguing... [no cancer cure] because all humans are inevitably mortal.\"",
          text: "Applies the developer's exact logic (\"don't delay the inevitable\") to a different topic (cancer) to show how ridiculous the result is.",
          badge: "Absurd Parallel",
          badgeColor: "indigo"
        }
      ] 
    },

    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "The developer says we shouldn't spend money to save species because they will all go extinct eventually anyway. The environmentalist responds by pointing out that if we used that same logic for people, we would stop trying to cure cancer because all people die eventually." },

    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "The author identifies the underlying **logic** of an opponent's argument. She then applies that same logic to a **different situation** to show that it leads to a **ridiculous or unacceptable conclusion**. This demonstrates that the original reasoning must be flawed." },
    { type: 'callout', title: "Method: Refutation by Parallel Reasoning", variant: "summary", text: "Undermining an opponent's position by showing that their logic, if applied to a different case, leads to an absurd or unacceptable result." },

    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option Analysis', text: 'Validation' },
      items: [
        {
          title: "(A) clarify a dilemma that is embedded in the argument",
          text: "There is no dilemma (choice between two bad options) presented. She is **attacking logic**, not clarifying a hidden choice.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) attack the character of the land developer",
          text: "She never calls him greedy or evil. She focuses entirely on the **structural failure** of his reasoning.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) show that more evidence is needed",
          text: "She doesn't ask for more data. She points out that the **form** of the argument is fundamentally broken.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(D) show that the land developer’s line of reasoning would lead to an unacceptable conclusion if applied to a different situation",
          text: "Identifies the logic (\"don't spend on the inevitable\"), applies it to a \"different situation\" (cancer), and reaches an \"unacceptable conclusion\" (stop research). **Perfect match.**",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(E) argue that there are problems that money... cannot solve",
          text: "She argues about whether we **should** spend money, not whether money would **actually work** if we did.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },

    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we saw, our 4-step plan worked flawlessly! We identified the parts of the stimulus, saw through the specific details of species and cancer, and found the abstract \"Absurd Parallel\" that the environmentalist was using. We were then able to pick apart the wrong answers by identifying specific words that just didn't happen in the text." },
    { type: 'blockquote', text: "**Library of Methods:**\n\n**1. Process of Elimination:** Establishing a list of possibilities and ruling them out one by one until only the correct answer remains.\n\n**2. Alternative Explanation:** Accepting the evidence but proposing a different cause or reason for that evidence.\n\n**3. Argument by Analogy:** Supporting a claim about one situation by comparing it to a different but similar situation.\n\n**4. Refutation by Parallel Reasoning:** Showing that an opponent's logic leads to a ridiculous conclusion when used in a different context." },
    { type: 'paragraph', text: "The only thing you need to work on now is improving your ability to recognize these patterns and becoming familiar with the different ways the LSAT phrases them. To help with that, let’s walk through a few of the other major types of methods you'll be encountering!" }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Lesson 3: Refutation by Counterexample (Method of Reasoning)"
        },
        {
          "type": "paragraph",
          "text": "Refutation by counterexample is the most direct and logically decisive way to disprove a general claim. This lesson teaches you how counterexamples work, how to spot them, and how to distinguish them from other refutation methods."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Concept Focus: Refutation by Counterexample"
        },
        {
          "type": "paragraph",
          "text": "This method is used to disprove a general or universal statement by providing a single, specific instance where that statement is false. One valid counterexample is logically sufficient to prove that a universal claim (e.g., \"All X are Y\" or \"Only X can Y\") is not true."
        },
        {
          "type": "paragraph",
          "text": "A counterexample argument always has two essential components:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Component",
            "text": "Description"
          },
          "items": [
            {
              "title": "1. A Universal Claim",
              "text": "The first speaker makes a statement using absolute language like \"all,\" \"every,\" \"only,\" \"never,\" or \"always.\" This creates a rule that claims to apply to *every* instance without exception.",
              "badge": "The Target",
              "badgeColor": "slate"
            },
            {
              "title": "2. A Specific Rebuttal",
              "text": "The second speaker responds with a concrete, real-world example that directly violates the universal claim. This single instance is enough to prove the rule is false.",
              "badge": "The Attack",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "The Counterexample Method — How It Works"
        },
        {
          "type": "process",
          "title": "Step-by-Step Logic",
          "steps": [
            "**Identify the universal claim:** Find the absolute statement. It must claim something is true of *all* cases, *every* instance, or is the *only* way.",
            "**Find the specific instance:** Locate the concrete example that violates the rule. It must be a real case within the *same category* being discussed.",
            "**Verify the violation:** Confirm that the example genuinely contradicts the universal claim. The example must be a member of the target category (e.g., if the claim is about \"all birds,\" the example must be a bird).",
            "**Conclude the universal claim is false:** Since one valid exception exists, the absolute rule cannot be true as stated."
          ]
        },
        {
          "type": "callout",
          "title": "Spotting Absolute Language",
          "variant": "tip",
          "text": "Counterexample arguments are always responses to **universal claims**. Train yourself to spot absolute language:\n\n• \"All X are Y\" / \"Every X is Y\"\n• \"No X is Y\" / \"X never Y\"\n• \"Only X can Y\" / \"The only way to Y is X\"\n• \"X always leads to Y\" / \"X is the sole cause of Y\"\n\nWhenever you see absolute language in the first speaker's argument, anticipate that the second speaker may provide a counterexample."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Counterexample vs. Other Refutation Methods"
        },
        {
          "type": "paragraph",
          "text": "Counterexample is frequently confused with analogy and alternative explanation. Understanding the differences is essential for accurate method identification:"
        },
        {
          "type": "table",
          "headers": [
            "Feature",
            "Counterexample",
            "Refutation by Analogy",
            "Alternative Explanation"
          ],
          "rows": [
            [
              "**What it attacks**",
              "The *truth* of a universal claim",
              "The *logical form* of an argument",
              "The *proposed cause* of an observation"
            ],
            [
              "**How it works**",
              "Provides one case within the same domain that violates the rule",
              "Applies the opponent's reasoning to a different domain where it yields an absurd result",
              "Offers a different cause for the same observed effect"
            ],
            [
              "**Domain**",
              "Same domain as the original claim",
              "Different domain (jumps to a new topic)",
              "Same domain — same effect, different cause"
            ],
            [
              "**What it proves**",
              "The universal claim is false",
              "The reasoning pattern is unreliable",
              "The original cause is not the best explanation"
            ],
            [
              "**Key signal**",
              "Absolute language (all, every, only, never) + specific exception",
              "\"By your logic...\" / \"That is like saying...\"",
              "\"Is better explained by...\" / \"Could instead be caused by...\""
            ],
            [
              "**LSAT language**",
              "\"presents a counterexample,\" \"cites an instance that contradicts\"",
              "\"likens X to Y,\" \"applies reasoning to a different situation\"",
              "\"offers an alternative explanation,\" \"suggests a different cause\""
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Critical Test",
          "variant": "default",
          "text": "Ask yourself: **Is the example a member of the same category being discussed?**\n\n• If YES → **Counterexample** (e.g., penguins disprove \"all birds can fly\" — penguins *are* birds)\n• If NO → **Analogy** (e.g., comparing birds to airplanes is a different category entirely)\n\nThis single test resolves the most common confusion between these two methods."
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
          "id": "PT-112-S-1-Q-1",
          "stimulus": "Joanna: The only way for a company to be successful, after emerging from bankruptcy, is to produce the same goods or services that it did before going bankrupt. It is futile for such a company to try to learn a whole new business.\nRuth: Wrong. The Kelton Company was a major mining operation that went into bankruptcy. On emerging from bankruptcy, Kelton turned its mines into landfills and is presently a highly successful waste-management concern.",
          "question": "Ruth uses which one of the following argumentative techniques in countering Joanna's argument?",
          "options": [
            "**(A)** She presents a counterexample to a claim. (Correct) [96%]",
            "**(B)** She offers an alternative explanation for a phenomenon.",
            "**(C)** She supports a claim by offering a developed and relevant analogy.",
            "**(D)** She undermines a claim by showing that it rests on an ambiguity.",
            "**(E)** She establishes a conclusion by excluding the only plausible alternative to that conclusion."
          ]
        },
        {
          "type": "h3",
          "text": "Step 1: Deconstruct the Argument"
        },
        {
          "type": "paragraph",
          "text": "Let's map both speakers' arguments:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Speaker",
            "text": "Argument Structure"
          },
          "items": [
            {
              "title": "Joanna",
              "text": "**Universal Claim:** \"The **only way**\" for a post-bankruptcy company to succeed is to stick with its original business.\n**Absolute Language:** \"only way\" — this creates a rule that claims to apply to *every* post-bankruptcy company without exception.\n**Implied Rule:** All successful post-bankruptcy companies produce the same goods/services as before.",
              "badge": "Target",
              "badgeColor": "slate"
            },
            {
              "title": "Ruth",
              "text": "**Specific Instance:** The Kelton Company — a mining operation that went bankrupt, switched to waste management, and became highly successful.\n**Why It Works:** Kelton is a member of the *exact category* Joanna discussed (post-bankruptcy companies). It violated Joanna's rule (changed its business entirely) and still succeeded.\n**Conclusion:** Joanna's universal claim is false.",
              "badge": "Counterexample",
              "badgeColor": "indigo"
            }
          ]
        },
        {
          "type": "h3",
          "text": "Step 2: Characterize the Method and Prephrase"
        },
        {
          "type": "paragraph",
          "text": "Joanna made a broad, absolute claim (\"the only way\"). Ruth disproved this by providing a specific, real company that did the opposite and still succeeded."
        },
        {
          "type": "callout",
          "title": "Prephrase",
          "variant": "tip",
          "text": "Ruth uses a specific example of a company within the category Joanna discussed to prove Joanna's universal rule is wrong."
        },
        {
          "type": "h3",
          "text": "Step 3: Evaluate the Answer Choices"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) She presents a counterexample to a claim.",
              "text": "This is a perfect match for our prephrase. Joanna's \"claim\" is her universal rule. Ruth presents the Kelton Company as a \"counterexample\" — a specific instance within the same category that violates the rule.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(B) She offers an alternative explanation for a phenomenon.",
              "text": "Ruth is not trying to *explain* why companies succeed or fail. She is trying to *disprove* a specific rule. There is no phenomenon being explained — there is a claim being refuted.",
              "badge": "Wrong Action",
              "badgeColor": "red"
            },
            {
              "title": "(C) She supports a claim by offering a developed and relevant analogy.",
              "text": "Ruth uses a direct example, not an analogy. The Kelton Company is a real-world instance of the *exact category* being discussed (post-bankruptcy companies), not a comparison to a different domain.",
              "badge": "Wrong Method",
              "badgeColor": "red"
            },
            {
              "title": "(D) She undermines a claim by showing that it rests on an ambiguity.",
              "text": "Ruth does not argue about the meaning of Joanna's words or identify any vagueness. She attacks the factual truth of the claim by providing a case that violates it.",
              "badge": "Wrong Action",
              "badgeColor": "red"
            },
            {
              "title": "(E) She establishes a conclusion by excluding the only plausible alternative.",
              "text": "This describes a Process of Elimination. Ruth does not list and reject alternatives — she provides a single example that directly contradicts the rule.",
              "badge": "Wrong Method",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Wrong Answer Analysis — Trap Types"
        },
        {
          "type": "paragraph",
          "text": "Understanding each trap helps you eliminate wrong answers faster in future questions:"
        },
        {
          "type": "table",
          "headers": [
            "Option",
            "Trap Type",
            "Why It Fails"
          ],
          "rows": [
            [
              "(B)",
              "**Wrong Action**",
              "Describes explaining a phenomenon — Ruth is disproving a rule, not explaining anything"
            ],
            [
              "(C)",
              "**Wrong Method (Analogy vs. Counterexample)**",
              "Kelton is an example *within the same category* (post-bankruptcy companies), not a comparison to a different domain. This is the most common trap for counterexample questions."
            ],
            [
              "(D)",
              "**Wrong Action**",
              "Describes an ambiguity attack — no language ambiguity is identified or exploited"
            ],
            [
              "(E)",
              "**Wrong Method (Elimination)**",
              "Describes Process of Elimination — Ruth does not list and reject options; she provides a single contradicting case"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The #1 Trap: Confusing Counterexample with Analogy",
          "variant": "tip",
          "text": "Choice (C) is the most tempting wrong answer on counterexample questions. The key test:\n\n• **Is the Kelton Company in the same category as what Joanna discussed (post-bankruptcy companies)?** → YES → Counterexample.\n• **Is the Kelton Company in a different category used for comparison?** → NO.\n\nIf the example is a member of the same category, it is a counterexample. If it is from a different category used to show the reasoning is flawed, it is an analogy."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Additional Counterexample Patterns"
        },
        {
          "type": "paragraph",
          "text": "Here are other common setups for counterexample arguments on the LSAT:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Pattern",
            "text": "Example"
          },
          "items": [
            {
              "title": "Disproving \"All X are Y\"",
              "text": "**Claim:** \"All successful CEOs have MBA degrees.\"\n**Counterexample:** \"Steve Jobs never completed college, yet he built one of the most successful companies in history.\"\n**Why it works:** Jobs is a CEO (same category) who lacks an MBA (violates the rule).",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Disproving \"No X can Y\"",
              "text": "**Claim:** \"No renewable energy source can power an entire city.\"\n**Counterexample:** \"Iceland runs almost entirely on geothermal and hydroelectric power.\"\n**Why it works:** Iceland uses renewable energy (same category) to power a whole country (violates the \"no X can\" claim).",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Disproving \"Only X leads to Y\"",
              "text": "**Claim:** \"Economic growth can only come from increased consumer spending.\"\n**Counterexample:** \"Germany's economy grew primarily through exports and manufacturing investment.\"\n**Why it works:** Germany achieved economic growth (same outcome) through a different path (violates the \"only\" claim).",
              "badge": "Common",
              "badgeColor": "blue"
            },
            {
              "title": "Disproving \"X always causes Y\"",
              "text": "**Claim:** \"Deforestation always leads to species extinction in the affected area.\"\n**Counterexample:** \"The forests of New England were almost entirely cleared in the 1800s, yet most native species have returned since reforestation.\"\n**Why it works:** Deforestation occurred (same cause) but permanent extinction did not follow (violates the \"always\" claim).",
              "badge": "Less Common",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Why One Is Enough"
        },
        {
          "type": "paragraph",
          "text": "A common intuition is that one example shouldn't be enough to disprove a claim. But for *universal* claims, one is all it takes. Here's why:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Claim Type",
            "text": "Effect of One Counterexample"
          },
          "items": [
            {
              "title": "\"All swans are white\"",
              "text": "Finding one black swan completely disproves this claim. The claim says *all* — and one exception makes \"all\" false.",
              "badge": "Disproved",
              "badgeColor": "green"
            },
            {
              "title": "\"Most swans are white\"",
              "text": "Finding one black swan does NOT disprove this claim. The claim says *most*, not *all*. One exception is consistent with \"most.\"",
              "badge": "Not Disproved",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "callout",
          "title": "When Counterexamples Don't Work",
          "variant": "default",
          "text": "Counterexamples are only decisive against **universal** claims. If the original claim uses hedged language like \"most,\" \"generally,\" \"tends to,\" or \"usually,\" a single counterexample does not disprove it — the speaker can simply say \"that's one of the exceptions.\" On the LSAT, counterexample Method of Reasoning questions almost always feature a universal claim with absolute language."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• **Counterexample = same domain, specific instance.** The example must be a member of the exact category being discussed.\n• **Spot the absolute language first.** Words like \"all,\" \"every,\" \"only,\" \"never,\" and \"always\" signal a universal claim that can be disproved by a single case.\n• **Distinguish from analogy:** Analogy = different domain, same reasoning pattern. Counterexample = same domain, specific factual instance.\n• **One is enough for universals.** A single valid counterexample completely disproves any universal claim.\n• **The #1 wrong-answer trap** on counterexample questions is an answer that calls the method an \"analogy.\" Apply the same-domain test: is the example in the same category? If yes, it's a counterexample."
        }
      ],
    },
  },
};
