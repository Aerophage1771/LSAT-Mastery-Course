import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '18-6',
  title: 'Lesson 3: The Impossible Combination',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: The Impossible Combination"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Contradiction by Mutual Exclusivity"
    },
    {
      "type": "paragraph",
      "text": "Sometimes, a contradiction isn't about breaking a single rule, but about describing a scenario that combines two things the stimulus proves cannot exist together. This pattern tests your ability to synthesize multiple facts. The stimulus will give you two or more separate pieces of information that, when put together, create a hidden rule of mutual exclusivity."
    },
    {
      "type": "paragraph",
      "text": "**Fact 1:** Establishes a defining characteristic of a group (e.g., \"All members of Group X have Trait Y\")."
    },
    {
      "type": "paragraph",
      "text": "**Fact 2:** Establishes a condition of a situation (e.g., \"In Situation Z, Trait Y is impossible\")."
    },
    {
      "type": "paragraph",
      "text": "**The Hidden Rule (Your Inference):** Therefore, it is impossible for any member of Group X to be in Situation Z."
    },
    {
      "type": "paragraph",
      "text": "Your job is to spot this impossible combination, and the correct answer will be the one that forces it to occur."
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
      "text": "**Stimulus** > > The southern half of a certain region of the earth was covered entirely by water during the Cretaceous period, the last 75 million years of the Mesozoic era, the era when dinosaurs roamed the earth. Dinosaurs lived only on land. Thus, plesiosaurs—swimming reptiles that lived during the Cretaceous period exclusively—were not dinosaurs. No single species of dinosaur lived throughout the entire Mesozoic era. > > **Question** > > If the statements in the passage are true, each of the following could be true EXCEPT: > > *   (A) Dinosaurs inhabited the northern half of the region throughout the entire Mesozoic era. > *   (B) Plesiosaurs did not inhabit the southern half of the region during the Cretaceous period. > *   (C) Plesiosaurs did not inhabit the southern half of the region before the Cretaceous period. > *   (D) Dinosaurs did not inhabit the northern half of the region during the Cretaceous period. > *   (E) Dinosaurs inhabited the southern half of the region throughout the entire Mesozoic era."
    },
    {
      "type": "h4",
      "text": "Step 1: Analyze the Stimulus and Identify the Rules"
    },
    {
      "type": "paragraph",
      "text": "Let's extract the key facts that define the \"rules\" of this scenario:"
    },
    {
      "type": "paragraph",
      "text": "**Rule 1 (The Situation):** During the Cretaceous period, the southern half of the region was **100% water**."
    },
    {
      "type": "paragraph",
      "text": "**Rule 2 (The Group):** Dinosaurs lived **only on land**."
    },
    {
      "type": "paragraph",
      "text": "The other sentences provide context but are less critical for finding the core contradiction."
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize the Rules and Prephrase a Contradiction"
    },
    {
      "type": "paragraph",
      "text": "Now, we combine our two key rules to find the impossible combination:"
    },
    {
      "type": "list",
      "items": [
        "If a creature is a dinosaur, it must live on land.",
        "During the Cretaceous period, the southern half of the region had no land; it was all water."
      ]
    },
    {
      "type": "paragraph",
      "text": "Therefore, we can make a necessary inference: **It was impossible for a dinosaur to live in the southern half of the region during the Cretaceous period.** The characteristics of \"being a dinosaur\" and \"living in the southern region during the Cretaceous\" are mutually exclusive."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase (The \"Anti-Rule\"):** No dinosaur could have been in the southern region during the Cretaceous period."
    },
    {
      "type": "h4",
      "text": "Step 3: Methodically Scan the Answer Choices for a Direct Conflict"
    },
    {
      "type": "paragraph",
      "text": "We will now look for an answer choice that forces this impossible combination to happen."
    },
    {
      "type": "h4",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "**(A) Dinosaurs inhabited the northern half of the region throughout the entire Mesozoic era.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus tells us nothing about the *northern* half. It could have been land the whole time, making this statement possible."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*; it's out of scope)."
    },
    {
      "type": "paragraph",
      "text": "**(B) Plesiosaurs did not inhabit the southern half of the region during the Cretaceous period.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The southern half was water, and plesiosaurs were swimming reptiles. While they *could* have lived there, the stimulus doesn't say they *had* to. It's possible they lived in other oceans."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*)."
    },
    {
      "type": "paragraph",
      "text": "**(C) Plesiosaurs did not inhabit the southern half of the region before the Cretaceous period.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus says plesiosaurs lived *exclusively* during the Cretaceous. This means they didn't exist before it. This statement is not just possible; it *must be true*."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This is a \"Must Be True\" trap)."
    },
    {
      "type": "paragraph",
      "text": "**(D) Dinosaurs did not inhabit the northern half of the region during the Cretaceous period.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Again, we know nothing about the northern half. It could have been land, but it's possible no dinosaurs lived there for other reasons. This statement is possible."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (This *could be true*; it's out of scope)."
    },
    {
      "type": "paragraph",
      "text": "**(E) Dinosaurs inhabited the southern half of the region throughout the entire Mesozoic era.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This statement forces the impossible combination. For dinosaurs to live there for the *entire* Mesozoic era, they would have had to live there during the Cretaceous period. But we proved that was impossible. This statement directly contradicts our inference."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** (This *must be false*)."
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
      "text": "**Combine the Facts:** Look for two separate facts—one that defines a group and one that defines a situation—that can be combined to create a contradiction."
    },
    {
      "type": "paragraph",
      "text": "**Identify Mutual Exclusivity:** The core skill is spotting that two characteristics cannot exist together at the same time or place based on the rules."
    },
    {
      "type": "paragraph",
      "text": "**Watch for Broad Language:** The correct answer often uses broad terms like \"entire,\" \"all,\" or \"always\" to force the impossible combination. Choice (E) works because \"entire Mesozoic era\" necessarily includes the \"Cretaceous period.\""
    }
  ],
};
