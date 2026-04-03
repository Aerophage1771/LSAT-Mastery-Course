import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '6-6',
  title: 'Lesson 3: The Causal Flaw (Ignoring Alternatives)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: The Causal Flaw (Ignoring Alternatives)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Causal Flaw  Many arguments on the LSAT try to explain *why* something happened. A very common error in these arguments is to jump to a conclusion about the cause without considering other possibilities. This lesson focuses on a specific type of causal flaw: observing an effect, noting one possible cause for it, and then concluding that this *must* have been the cause, ignoring all other potential explanations."
    },
    {
      "type": "paragraph",
      "text": "The structure is similar to a Mistaken Reversal, but it's framed in terms of cause and effect:\n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule:** Cause `A` can lead to Effect `B`. *"
    },
    {
      "type": "paragraph",
      "text": "**Observation:** Effect `B` happened. *"
    },
    {
      "type": "paragraph",
      "text": "**Flawed Conclusion:** Therefore, Cause `A` must have been responsible."
    },
    {
      "type": "paragraph",
      "text": "This reasoning is flawed because Effect `B` might have been caused by `C`, `D`, or `E`. Ruling out alternatives is essential for a strong causal argument."
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
      "text": "**Stimulus** > > A local chemical plant produces pesticides that can cause sterility in small mammals such as otters. Soon after the plant began operating, the incidence of sterility among the otters that swim in a nearby river increased dramatically. Therefore, pesticides are definitely contaminating the river. > > **Question** > > Which one of the following arguments contains a flaw in reasoning that is similar to one in the argument above? > > *   (A) The bacteria that cause tetanus live in the digestive tract of horses. Tetanus is a highly infectious disease. Consequently it must be that horses contract tetanus more frequently than do most other animals. > *   (B) A diet low in calcium can cause a drop in egg production in poultry. When chickens on a local farm were let out in the spring to forage for food, their egg production dropped noticeably. So the food found and eaten by the chickens is undeniably low in calcium. > *   (C) Animals that are undernourished are very susceptible to infection. Animals in the largest metropolitan zoos are not undernourished, so they surely must not be very susceptible to disease. > *   (D) Apes are defined by having, among other characteristics, opposable thumbs and no external tail. Recently, fossil remains of a previously unknown animal were found. Because this animal had opposable thumbs, it must have been an ape. > *   (E) The only animal that could have produced a track similar to this one is a bear. But there are no bears in this area of the country, so this animal track is a fake."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton First, we'll diagnose the specific causal error in the stimulus."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Diagnose the Flaw:** The argument identifies a potential cause (`pesticides`) for an effect (`sterility`). It then observes the effect (`sterility increased`). It immediately concludes that the potential cause must be the actual cause. This is a **Causal Flaw** that **ignores alternative explanations**. The increased sterility could have been caused by something else entirely, such as a new disease, changes in water temperature, or a different pollutant.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Abstract the Structure (The Blueprint):** A flawed argument that reasons: `X can cause Y`. `Y occurred`. Therefore, `X must have been the cause`.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Characterize the Conclusion:** The conclusion is a definite, factual claim (\"pesticides are definitely contaminating...\")."
    },
    {
      "type": "h4",
      "text": "Step 2: Apply the Skeleton to Eliminate Choices Now we look for another argument that observes an effect and wrongly concludes a specific cause must be responsible, ignoring other options."
    },
    {
      "type": "h4",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) The bacteria that cause tetanus live in the digestive tract of horses. Tetanus is a highly infectious disease. Consequently it must be that horses contract tetanus more frequently than do most other animals.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument reasons from a potential cause to a predicted effect. It does not observe an effect and work backward to a cause. The structure is different.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) A diet low in calcium can cause a drop in egg production in poultry. When chickens on a local farm were let out in the spring to forage for food, their egg production dropped noticeably. So the food found and eaten by the chickens is undeniably low in calcium.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our blueprint.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule:** Low-calcium diet (`X`) can cause a drop in egg production (`Y`).       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Observation:** Egg production dropped (`Y occurred`).       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The food must be low in calcium (`X must have been the cause`)."
    },
    {
      "type": "list",
      "items": [
        "This makes the exact same error of ignoring other possible causes for the drop in egg production (e.g., stress, illness, change in weather)."
      ]
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) Animals that are undernourished are very susceptible to infection. Animals in the largest metropolitan zoos are not undernourished, so they surely must not be very susceptible to disease.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a **Mistaken Negation**. The rule is `Undernourished → Susceptible`. The argument reasons `Not Undernourished → Not Susceptible`. This is a different flaw from the stimulus.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Different Flaw)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) Apes are defined by having, among other characteristics, opposable thumbs and no external tail. Recently, fossil remains of a previously unknown animal were found. Because this animal had opposable thumbs, it must have been an ape.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a flaw of classification, not causation. It's structurally similar (a form of Mistaken Reversal), but choice (B) is a much closer parallel because it deals specifically with a *cause* producing an *effect*, just like the stimulus.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) The only animal that could have produced a track similar to this one is a bear. But there are no bears in this area of the country, so this animal track is a fake.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument uses a **process of elimination**. It rules out the only known natural cause (a bear) and concludes the track must be artificial (fake). This is a different, and potentially valid, line of reasoning.   \n*"
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
        "Be skeptical of arguments that jump from an effect to a single cause. The real world is complex, and many effects have multiple possible causes. *   The flaw of ignoring alternative explanations is one of the most common causal errors on the LSAT. *   The structure `X can cause Y; Y happened; ∴ X is the cause` is almost always flawed. The conclusion is only justified if X is the *only possible* cause of Y."
      ]
    }
  ],
};
