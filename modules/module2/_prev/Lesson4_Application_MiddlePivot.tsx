import { Lesson } from '../../types';

export const Lesson4_Application_MiddlePivot: Lesson = {
  id: "2-4",
  title: "Application - The Middle Pivot",
  content: [
    { type: 'h3', text: "Lesson 4: Application - The Middle Pivot" },
    { type: 'paragraph', text: "In the last lesson, we saw how an author can state their conclusion in the very first sentence. Now, we will examine another extremely common structure: **The Middle Pivot**." },
    { type: 'paragraph', text: "In this pattern, the author doesn't start with their main point. Instead, they begin with background information, context, or a common viewpoint that they are *not* arguing for. Then, using a crucial pivot word, they turn the argument in a new direction and state their main conclusion. The rest of the stimulus provides evidence for this pivoted claim." },
    { type: 'hr' },
    { type: 'h3', text: "Worked Example" },
    { type: 'paragraph', text: "Before reading the analysis, attempt the following question. Pay close attention to the argument's flow and any transition words." },
    { type: 'blockquote', text: "**Stimulus:**\n\nCamera manufacturers typically advertise their products by citing the resolution of their cameras’ lenses, the resolution of a lens being the degree of detail the lens is capable of reproducing in the image it projects onto the film. Differences between cameras in this respect are irrelevant for practical photography, however, since all modern lenses are so excellent that they project far more detail onto the film than any photographic film is capable of reproducing in a developed image." },
    { type: 'paragraph', text: "**Question:**\n\nWhich one of the following most accurately states the main point of the argument?" },
    { type: 'options', items: [
      "(A) Camera manufacturers ought to concentrate on building other desirable qualities into their cameras’ lenses, rather than concentrating only on the lenses’ resolution.",
      "(B) Apart from differences in resolution, there is no practical difference among modern cameras in the quality of the images that they produce.",
      "(C) Advertised differences among cameras in the resolution of their lenses have no practical bearing on the cameras’ relative quality as photographic tools.",
      "(D) In concentrating their advertising on the issue of image quality, manufacturers are making a mistake about the interests of potential purchasers of cameras.",
      "(E) Differences among photographic films in the amount of detail they reproduce have a more significant effect on the quality of the developed image than do differences in the resolution of camera lenses."
    ]},
    { type: 'hr' },
    { type: 'h3', text: "Step-by-Step Deconstruction" },
    { type: 'h4', text: "Step 1: Read the Question Stem" },
    { type: 'paragraph', text: "The stem asks for the \"main point,\" which is a classic Main Conclusion question. Our goal is to find the author's central claim." },
    { type: 'h4', text: "Step 2: Deconstruct the Argument & Look for Signposts" },
    { type: 'paragraph', text: "This argument is packed into just two sentences. Let's break down their roles." },
    { type: 'list', items: [
      "**Sentence 1:** \"Camera manufacturers typically advertise their products by citing the resolution of their cameras’ lenses...\"\n    *   This sentence is purely descriptive. It sets the stage by telling us about a common industry practice. This is **Background Information**. It's what the argument is *about*, but it's not the author's main point.",
      "**Sentence 2:** \"Differences between cameras in this respect are irrelevant for practical photography, **however**, **since** all modern lenses are so excellent that they project far more detail onto the film than any photographic film is capable of reproducing in a developed image.\"\n    *   This sentence does all the argumentative work. It contains three key components:\n        1.  **The Pivot Word:** \"**however**\" signals a turn away from the background information. This is where the author's own view will be introduced.\n        2.  **The Author's Claim:** Immediately after the pivot, we get the author's main point: \"Differences between cameras in this respect are **irrelevant** for practical photography.\" This is our candidate conclusion.\n        3.  **The Premise Indicator:** \"**since**\" introduces the reason *why* the differences are irrelevant: modern lenses already outperform any film."
    ]},
    { type: 'h4', text: "Step 3: Isolate a Candidate and Apply the \"Why Test\"" },
    { type: 'paragraph', text: "Our candidate conclusion is the claim that follows the pivot: \"Differences between cameras in [resolution] are irrelevant for practical photography.\"" },
    { type: 'list', items: [
      "**Ask \"Why?\":** *Why* are the differences in lens resolution irrelevant?",
      "**Answer from Stimulus:** **Because** (\"since\") all modern lenses are so good that they already provide more detail than any film can capture."
    ]},
    { type: 'paragraph', text: "The final clause of the stimulus provides the \"Why\" for the claim in the middle. This confirms that the middle claim is the **Main Conclusion**." },
    { type: 'h4', text: "Step 4: Pre-phrase the Conclusion" },
    { type: 'paragraph', text: "Our summary of the author’s point: \"The differences in lens resolution that companies advertise don't actually matter for taking pictures.\"" },
    { type: 'h4', text: "Step 5: Evaluate the Answer Choices by Eliminating Traps" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: "(A) Camera manufacturers ought to concentrate on building other desirable qualities into their cameras’ lenses...",
        text: "Trap Type: Out of Scope. This is a recommendation for what manufacturers \"ought to do.\" The author's argument is descriptive (stating that a difference is irrelevant), not prescriptive.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) Apart from differences in resolution, there is no practical difference among modern cameras in the quality of the images...",
        text: "Trap Type: Distortion. This is an overstatement. The author claims that differences in *resolution* are irrelevant, not that there are no other practical differences at all.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) Advertised differences among cameras in the resolution of their lenses have no practical bearing on the cameras’ relative quality as photographic tools.",
        text: "Analysis: This is a perfect match for our pre-phrase. \"Have no practical bearing\" is an excellent paraphrase for \"are irrelevant for practical photography.\"",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(D) In concentrating their advertising on the issue of image quality, manufacturers are making a mistake about the interests of potential purchasers...",
        text: "Trap Type: Out of Scope. The author never discusses the \"interests of potential purchasers\" or whether manufacturers are making a \"mistake\" in strategy.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(E) Differences among photographic films... have a more significant effect... than do differences in the resolution of camera lenses.",
        text: "Trap Type: Out of Scope / Premise Trap. While this might be a reasonable inference from the premise, it is not the main point. The information about film is used as *evidence* to support the conclusion about lenses.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ]},
    { type: 'hr' },
    { type: 'callout', title: "Summary of the Middle Pivot", variant: "summary", text: "In this common structure, the author uses the first sentence(s) to provide context before using a pivot word like \"but\" or \"however\" to introduce their main point. The material following the main point then serves as the evidence. This structure is highly predictable. When you see background information followed by a pivot word, the claim that immediately follows that pivot is almost always the main conclusion." },
    { type: 'paragraph', text: "**Next Up:** In Lesson 5, we'll examine arguments that build toward a final, culminating conclusion at the end of the stimulus." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "The Rebuttal — Deep Dive"
        },
        {
          "type": "paragraph",
          "text": "The Rebuttal is the most common argument structure in Main Conclusion questions (~45%). The author's primary goal is not to build a new case from scratch, but to **tear down an existing one**. Mastering this pattern gives you an instant advantage on nearly half of all Main Conclusion questions."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Rebuttal Structure"
        },
        {
          "type": "paragraph",
          "text": "Every Rebuttal argument follows the same \"They Say / I Say\" framework. The author introduces someone else's viewpoint, then pivots to reject it. Understanding this framework lets you identify the conclusion before you've finished reading."
        },
        {
          "type": "process",
          "title": "The Rebuttal Framework",
          "steps": [
            "**They Say (The Setup):** The author introduces a viewpoint held by others — \"Some people claim X,\" \"It is commonly believed that Y,\" or \"Critics argue that Z.\" This is the **opposing viewpoint**.",
            "**The Pivot:** A strong contrast word — `But`, `However`, `Yet`, `In fact` — signals the author is about to disagree.",
            "**I Say (The Conclusion):** The author states their rejection. This sentence is the **main conclusion**. It typically contains rejection language: *mistaken, unfounded, dubious, not the case, unconvincing*.",
            "**Because (The Evidence):** The author provides reasons or evidence to support their rejection. These are the **premises**."
          ]
        },
        {
          "type": "callout",
          "title": "The Two-Second Shortcut",
          "variant": "tip",
          "text": "When you see the \"They Say / Pivot / I Say\" pattern, the main conclusion is the sentence that immediately follows the pivot word. This shortcut works on the vast majority of Rebuttal questions. Confirm with the Why Test, but start here."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Identifying the Author's Voice"
        },
        {
          "type": "paragraph",
          "text": "The biggest challenge in Rebuttal arguments is distinguishing the **author's voice** from the **opposing voice**. The LSAT deliberately makes this confusing by attributing views to unnamed groups and burying the pivot in long sentences."
        },
        {
          "type": "h4",
          "text": "Attribution Markers"
        },
        {
          "type": "paragraph",
          "text": "These phrases signal that a viewpoint belongs to someone other than the author:"
        },
        {
          "type": "table",
          "headers": [
            "Attribution Phrase",
            "What It Signals"
          ],
          "rows": [
            [
              "\"Some people argue that...\"",
              "View belongs to an unnamed group — **not the author**"
            ],
            [
              "\"It is commonly believed that...\"",
              "Widespread belief the author will likely challenge"
            ],
            [
              "\"Critics contend that...\"",
              "Position of critics — the author will likely disagree"
            ],
            [
              "\"Many scientists claim...\"",
              "Scientific consensus the author may dispute"
            ],
            [
              "\"According to the traditional view...\"",
              "Established position being set up for rebuttal"
            ],
            [
              "\"Proponents of X maintain that...\"",
              "A specific camp's view — watch for the author's pivot"
            ]
          ]
        },
        {
          "type": "callout",
          "title": "Key Insight: Track the Speaker",
          "variant": "default",
          "text": "As you read, mentally label each sentence with its speaker: **\"Their claim\"** or **\"Author's claim.\"** The main conclusion is always in the author's voice. A common trap answer restates the opposing view as if it were the author's conclusion."
        },
        {
          "type": "h4",
          "text": "Pivot Word Reference"
        },
        {
          "type": "table",
          "headers": [
            "Pivot Word",
            "Strength",
            "Example"
          ],
          "rows": [
            [
              "**But**",
              "Strong — direct rejection",
              "\"Some argue X. **But** X is mistaken.\""
            ],
            [
              "**However**",
              "Strong — formal rejection",
              "\"Critics claim Y. **However**, the evidence shows otherwise.\""
            ],
            [
              "**Yet**",
              "Moderate — unexpected contrast",
              "\"Many believe Z. **Yet** recent data contradicts this.\""
            ],
            [
              "**In fact**",
              "Corrective — asserts the truth",
              "\"It seems that A. **In fact**, B is the case.\""
            ],
            [
              "**Actually**",
              "Corrective — overrides prior claim",
              "\"People assume C. **Actually**, D is true.\""
            ],
            [
              "**On the contrary**",
              "Direct opposition",
              "\"X has been claimed. **On the contrary**, Y.\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example 1: The Tennyson Argument"
        },
        {
          "type": "question-card",
          "id": "PT-105-S-1-Q-1",
          "stimulus": "Tennyson's line of poetry \"nature, red in tooth and claw\" is misconstrued by many evolutionists as a reference to Darwin's theory of evolution. The poem in which the line appears was published in 1850, but Darwin kept his theory closely held until publishing it in 1859. In addition, in view of the context provided by the rest of the poem, the line was clearly meant to refer to the dominant biological theory of the early nineteenth century, which was a creationist theory.",
          "question": "Which one of the following most accurately expresses the main point of the argument?",
          "options": [
            "**(A)** The line of Tennyson's poetry cannot now be construed as an apt description of Darwin's theory of evolution.",
            "**(B)** The dominant biological theory in the early nineteenth century was a creationist theory.",
            "**(C)** Tennyson's line of poetry was written well before Darwin had published his theory of evolution.",
            "**(D)** Darwin's theory of evolution was not the dominant biological theory in the early nineteenth century.",
            "**(E)** Tennyson's line of poetry was not a reference to Darwin's theory of evolution. (Correct) [96%]"
          ]
        },
        {
          "type": "h3",
          "text": "Step-by-Step Analysis"
        },
        {
          "type": "h4",
          "text": "Step 1: Identify the Rebuttal Structure"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Sentence",
            "text": "Structural Role"
          },
          "items": [
            {
              "title": "\"Tennyson's line... is misconstrued by many evolutionists as a reference to Darwin's theory.\"",
              "text": "The author opens with a judgment: the evolutionists are wrong. The word **\"misconstrued\"** is a rejection word — this is the author's **main conclusion**, presented first.",
              "badge": "Main Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "\"The poem... was published in 1850, but Darwin... published in 1859.\"",
              "text": "A chronological fact offered as the first reason the interpretation is wrong. This is **Premise 1** (the timing argument).",
              "badge": "Premise 1",
              "badgeColor": "slate"
            },
            {
              "title": "\"In view of the context provided by the rest of the poem, the line was clearly meant to refer to... a creationist theory.\"",
              "text": "A contextual argument about what the poem actually references. This is **Premise 2** (the context argument). Introduced by \"In addition.\"",
              "badge": "Premise 2",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "h4",
          "text": "Step 2: Apply the Why Test"
        },
        {
          "type": "paragraph",
          "text": "**Candidate:** \"The evolutionists' interpretation is a misconstruction.\"\n\n**Ask:** Why is their interpretation wrong?\n**Answer:** Because the poem (1850) predates Darwin's publication (1859), and the poem's context points to creationist theory, not evolution.\n\n✓ The argument answers the \"Why?\" — confirmed as the main conclusion."
        },
        {
          "type": "h4",
          "text": "Step 3: Prephrase"
        },
        {
          "type": "paragraph",
          "text": "**Prephrase:** \"People are wrong to think Tennyson's line is about Darwin's theory.\""
        },
        {
          "type": "h4",
          "text": "Step 4: Evaluate Answer Choices"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) The line cannot now be construed as an apt description of Darwin's theory.",
              "text": "Subtle distortion. The argument is about historical **reference** (what Tennyson meant), not whether the line is an **apt description** today. Shifts the scope from intent to applicability.",
              "badge": "Trap: Distortion",
              "badgeColor": "red"
            },
            {
              "title": "(B) The dominant biological theory in the early nineteenth century was a creationist theory.",
              "text": "This is a direct restatement of **Premise 2** — it provides supporting context but is not the main point.",
              "badge": "Trap: Premise",
              "badgeColor": "red"
            },
            {
              "title": "(C) Tennyson's line was written well before Darwin had published his theory.",
              "text": "This is a restatement of **Premise 1** — the timing fact used as evidence.",
              "badge": "Trap: Premise",
              "badgeColor": "red"
            },
            {
              "title": "(D) Darwin's theory was not the dominant biological theory in the early nineteenth century.",
              "text": "This is implied by the premises but is background information, not the central claim about the poem's meaning.",
              "badge": "Trap: Background",
              "badgeColor": "red"
            },
            {
              "title": "(E) Tennyson's line was not a reference to Darwin's theory of evolution.",
              "text": "Perfect match for our prephrase. The author's claim that the line is \"misconstrued\" is logically equivalent to saying it was \"not a reference.\" This is an **expansion** — it fills in what \"misconstrued\" means.",
              "badge": "Correct",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "callout",
          "title": "Notice the Answer Type",
          "variant": "default",
          "text": "The correct answer **(E)** is an **expansion**. The stimulus says the line is \"misconstrued,\" and the answer expands this into a specific claim: the line \"was not a reference.\" This is the most common correct answer pattern (~39% of Main Conclusion questions)."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Worked Example 2: A Simpler Rebuttal"
        },
        {
          "type": "paragraph",
          "text": "Here is a simpler example to reinforce the pattern recognition:"
        },
        {
          "type": "h4",
          "text": "Quick Analysis"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Step",
            "text": "Application"
          },
          "items": [
            {
              "title": "Spot the pattern",
              "text": "**\"Some economists predict...\"** → Opposing view.\n**\"But this prediction ignores...\"** → Pivot + rejection.\nThis is a textbook Rebuttal.",
              "badge": "Pattern",
              "badgeColor": "blue"
            },
            {
              "title": "Find the conclusion",
              "text": "The sentence after \"But\" — \"this prediction ignores the historical pattern\" — is the main conclusion. The author is saying the prediction is wrong.",
              "badge": "Conclusion",
              "badgeColor": "indigo"
            },
            {
              "title": "Apply the Why Test",
              "text": "**Why** is the prediction wrong? Because every technological shift has created more jobs (historical pattern + industrial revolution example). ✓ Confirmed.",
              "badge": "Confirmed",
              "badgeColor": "green"
            },
            {
              "title": "Evaluate",
              "text": "**(A)** and **(E)** are premises (historical evidence). **(B)** is an unsupported inference. **(C)** is the opposing viewpoint. **(D)** matches our prephrase — the prediction is unfounded.",
              "badge": "Answer: D",
              "badgeColor": "green"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Wrong Answer Deep Dive: Trap Types in Rebuttal Questions"
        },
        {
          "type": "paragraph",
          "text": "Rebuttal questions have their own characteristic traps. Understanding these trap types will help you eliminate wrong answers faster:"
        },
        {
          "type": "table",
          "headers": [
            "Trap Type",
            "What It Does",
            "Example from the Tennyson Question"
          ],
          "rows": [
            [
              "**The Premise Trap**",
              "Restates a fact the author uses as evidence, not the point being argued.",
              "(B) and (C) restate the two premises (timing and context)."
            ],
            [
              "**The Opposing View Trap**",
              "States the position the author is arguing *against*, as if it were the author's own view.",
              "Would look like: \"Tennyson's line is about Darwin's theory.\""
            ],
            [
              "**The Scope Shift Trap**",
              "Close to the conclusion but subtly changes the topic, scope, or framing.",
              "(A) shifts from \"historical reference\" to \"apt description\" — a different question entirely."
            ],
            [
              "**The Background Trap**",
              "States a contextual fact that supports the evidence but isn't the main claim.",
              "(D) states that Darwin's theory wasn't dominant — true but tangential."
            ]
          ]
        },
        {
          "type": "callout",
          "title": "The Opposing View Trap Is Most Dangerous",
          "variant": "tip",
          "text": "In Rebuttal questions, the single most dangerous trap is an answer choice that restates the **opposing viewpoint**. Students who rush through the stimulus often confuse whose voice is speaking. Always track attribution: if the choice states what \"some people\" or \"critics\" believe, it is the opposing view, not the conclusion."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• **Recognize the Rebuttal Pattern:** \"They Say / Pivot / I Say / Because.\" The conclusion is the author's rejection of someone else's claim.\n• **Track the Speaker:** Label each sentence as \"their claim\" or \"author's claim.\" The conclusion is always in the author's voice.\n• **The Pivot Is Your Compass:** The conclusion almost always follows the pivot word (*But, However, Yet*). Start there.\n• **The Conclusion Can Be First:** Don't assume the conclusion is at the end. In Rebuttal arguments, the rejection often appears in the first sentence.\n• **Watch for the Premise Trap:** The most common wrong answers restate premises. Use the Why Test to confirm you've picked the claim, not the proof."
        }
      ],
    },
  },
};
