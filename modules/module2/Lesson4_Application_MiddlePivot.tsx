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
  ]
};
