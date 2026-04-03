import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '13-6',
  title: 'Lesson 3: Applying Competing Principles',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: Applying Competing Principles"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Finding the Divergence"
    },
    {
      "type": "paragraph",
      "text": "This lesson addresses a common variation of Principle-Apply questions where the stimulus presents two different rules—for example, a current policy and a proposed new one. The task is not just to apply a single principle, but to find a specific scenario where the two principles lead to different outcomes."
    },
    {
      "type": "paragraph",
      "text": "The question stem itself will define the contrast you need to find. It will ask for a situation that is \"acceptable under the first rule but not the second,\" or, as in this case, where someone \"is liable under the current rule but should not be under the new one.\" Success depends on mapping both principles precisely and then testing the answer choices against both to find the one that creates the required divergence."
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
      "text": "**Stimulus** > > Currently, the city of Grimchester is liable for any injury incurred because of a city sidewalk in need of repair or maintenance. However, Grimchester's sidewalks are so extensive that it is impossible to hire enough employees to locate and eliminate every potential danger in its sidewalks. Governments should be liable for injuries incurred on public property only if they knew about the danger beforehand and negligently failed to eliminate it. > > **Question** > > Which one of the following describes an injury for which the city of Grimchester is now liable, but should not be according to the principle cited above? > > *   (A) A person is injured after tripping on a badly uneven city sidewalk, and the city administration had been repeatedly informed of the need to repair the sidewalk for several years. > *   (B) A person is injured after tripping over a shopping bag that someone had left lying in the middle of the sidewalk. > *   (C) A person is injured after stepping in a large hole in a city sidewalk, and the city administration had first learned of the need to repair that sidewalk minutes before. > *   (D) A person who is heavily intoxicated is injured after falling on a perfectly even city sidewalk with no visible defects. > *   (E) A person riding a bicycle on a city sidewalk is injured after swerving to avoid a pedestrian who had walked in front of the bicycle without looking."
    },
    {
      "type": "h4",
      "text": "Step 1: Map the Principles"
    },
    {
      "type": "paragraph",
      "text": "We have two distinct rules to map."
    },
    {
      "type": "paragraph",
      "text": "**Current Rule (Strict Liability):**"
    },
    {
      "type": "paragraph",
      "text": "**Trigger:** An injury occurs \"because of a city sidewalk in need of repair.\""
    },
    {
      "type": "paragraph",
      "text": "**Consequence:** The city is liable."
    },
    {
      "type": "list",
      "items": [
        "This rule is simple: if the sidewalk is bad and someone gets hurt, the city pays."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Proposed Principle (Negligence Standard):**"
    },
    {
      "type": "paragraph",
      "text": "The phrase \"only if\" introduces necessary conditions. For the city to be liable under this new rule, two things *must* be true:"
    },
    {
      "type": "list",
      "items": [
        "The city **knew about the danger** beforehand.",
        "The city **negligently failed** to eliminate it. (\"Negligently\" implies failing to act within a *reasonable timeframe*.)"
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Specific Task"
    },
    {
      "type": "paragraph",
      "text": "The stem asks us to find a scenario that meets two criteria:"
    },
    {
      "type": "list",
      "items": [
        "The city **is now liable** (meaning it fits the Current Rule).",
        "The city **should not be liable** (meaning it fails to meet the conditions of the Proposed Principle)."
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Solution"
    },
    {
      "type": "paragraph",
      "text": "We need a situation that meets the first rule but fails the second."
    },
    {
      "type": "list",
      "items": [
        "To meet the first rule, someone must be injured by a defective sidewalk (e.g., a hole, a crack).",
        "To fail the second rule, the city must either (a) not have known about the defect, or (b) not have been negligent. A perfect example of \"not negligent\" would be if the city learned of the danger but didn't have a reasonable amount of time to fix it before the injury occurred."
      ]
    },
    {
      "type": "paragraph",
      "text": "Our prephrase: \"I'm looking for an injury caused by a bad sidewalk, where the city only found out about the problem moments before the accident.\""
    },
    {
      "type": "h4",
      "text": "Step 4: Test Answer Choices Against Your Map"
    },
    {
      "type": "paragraph",
      "text": "Let's filter the choices based on the task."
    },
    {
      "type": "paragraph",
      "text": "**(A) A person is injured after tripping on a badly uneven city sidewalk, and the city administration had been repeatedly informed of the need to repair the sidewalk for several years.**"
    },
    {
      "type": "paragraph",
      "text": "**Liable Now?** Yes, the injury was caused by a defective sidewalk."
    },
    {
      "type": "paragraph",
      "text": "**Should Not Be Liable?** No. The city knew about the danger and failing to act for \"several years\" is a textbook case of a *negligent failure*. The city *would* be liable under the new rule, too. This fails our task."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) A person is injured after tripping over a shopping bag that someone had left lying in the middle of the sidewalk.**"
    },
    {
      "type": "paragraph",
      "text": "**Liable Now?** No. The injury was caused by a shopping bag, not a \"sidewalk in need of repair.\" This fails the first part of our task."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) A person is injured after stepping in a large hole in a city sidewalk, and the city administration had first learned of the need to repair that sidewalk minutes before.**"
    },
    {
      "type": "paragraph",
      "text": "**Liable Now?** Yes, the injury was caused by a \"large hole in a city sidewalk.\""
    },
    {
      "type": "paragraph",
      "text": "**Should Not Be Liable?** Yes. The city knew about the danger, but finding out \"minutes before\" means they did not have a reasonable timeframe to act. This is *not* a negligent failure. Since the second condition of the new principle is not met, the city should not be liable. This perfectly matches our prephrase."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) A person who is heavily intoxicated is injured after falling on a perfectly even city sidewalk with no visible defects.**"
    },
    {
      "type": "paragraph",
      "text": "**Liable Now?** No. The sidewalk was \"perfectly even with no visible defects.\" The cause was intoxication, not a sidewalk in need of repair."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) A person riding a bicycle on a city sidewalk is injured after swerving to avoid a pedestrian who had walked in front of the bicycle without looking.**"
    },
    {
      "type": "paragraph",
      "text": "**Liable Now?** No. The cause was the interaction between the cyclist and pedestrian, not a \"sidewalk in need of repair.\""
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
      "type": "paragraph",
      "text": "**Handle Competing Principles:** When a stimulus presents two rules, break them both down. The question stem will tell you how to compare their outcomes."
    },
    {
      "type": "paragraph",
      "text": "**Use a Two-Part Test:** For a question like this, evaluate each answer choice against both parts of the task. If a choice fails the first part (e.g., the city isn't liable now), you can eliminate it immediately without analyzing the second part."
    },
    {
      "type": "paragraph",
      "text": "**Pay Attention to Nuanced Language:** The entire question hinges on understanding the legal concept of \"negligently.\" It doesn't just mean \"failed to fix,\" it means \"failed to fix within a reasonable amount of time.\" This subtlety is what makes (C) correct and (A) incorrect."
    }
  ],
};
