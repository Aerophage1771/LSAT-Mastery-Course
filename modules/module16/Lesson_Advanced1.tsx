import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '16-8',
  title: 'Advanced Lesson 1: Formal Logic & The Contrapositive',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Formal Logic & The Contrapositive"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Contrapositive Inference"
    },
    {
      "type": "paragraph",
      "text": "Welcome to the next level. Difficult \"Most Strongly Supported\" questions often move beyond simple causal links and test your ability to handle more formal, abstract logic. The most common and powerful tool in this category is the contrapositive."
    },
    {
      "type": "paragraph",
      "text": "A contrapositive is a 100% logically valid inference derived from a conditional (\"if-then\") statement. It is created by flipping the terms and negating them both."
    },
    {
      "type": "list",
      "items": [
        "**Original Statement:** If A, then B. ( `A → B` )",
        "**Contrapositive (Logically Equivalent):** If not B, then not A. ( `~B → ~A` )"
      ]
    },
    {
      "type": "paragraph",
      "text": "For example, if a stimulus states, \"Any society that embraces technology will experience social change,\" the contrapositive is, \"Any society that does *not* experience social change must *not* have embraced technology.\" Recognizing this pattern is key to solving some of the hardest questions."
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
      "text": "**Stimulus** > > All social systems are based upon a division of economic roles. The values of a social system are embodied in the prestige accorded persons who fill various economic roles. It is therefore unsurprising that, for any social system, the introduction of labor-saving technology that makes certain economic roles obsolete will tend to undermine the values in that social system. > > **Question** > > Which one of the following can most reasonably be concluded on the basis of the information above? > > *   (A) Social systems will have unchanging values if they are shielded from technological advancement. > *   (B) No type of technology will fail to undermine the values in a social system. > *   (C) A social system whose values are not susceptible to change would not be one in which technology can eliminate economic roles. > *   (D) A technologically advanced society will place little value on the prestige associated with an economic role. > *   (E) A technological innovation that is implemented in a social system foreign to the one in which it was developed will tend to undermine the foreign social system."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Stimulus"
    },
    {
      "type": "paragraph",
      "text": "The core of this stimulus is a dense conditional statement disguised in complex language. Let's isolate it: \"...the introduction of labor-saving technology that makes certain economic roles obsolete will tend to undermine the values in that social system.\""
    },
    {
      "type": "paragraph",
      "text": "Let's simplify this into a conditional rule:"
    },
    {
      "type": "list",
      "items": [
        "**If** technology eliminates economic roles (A), **then** the system's values will be undermined (B).",
        "**Formal Representation:** `A → B`"
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Synthesize and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The stimulus gives us a clear `A → B` relationship. The most powerful, 100% valid inference we can make from this is its contrapositive: `~B → ~A`."
    },
    {
      "type": "paragraph",
      "text": "Let's translate that back into the language of the stimulus:"
    },
    {
      "type": "paragraph",
      "text": "**If** a social system's values are *not* undermined (i.e., not susceptible to change), **then** it must be a system where technology does *not* eliminate economic roles."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** If a society's values are immune to change, it must also be a society where technology can't get rid of jobs."
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices and Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "**(A) Social systems will have unchanging values if they are shielded from technological advancement.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a Mistaken Reversal (`~A → ~B`). It assumes technology is the *only* thing that can change values. Other factors (war, cultural shifts, etc.) could still cause change."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Flawed Causal Reasoning)"
    },
    {
      "type": "paragraph",
      "text": "**(B) No type of technology will fail to undermine the values in a social system.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a \"Too Strong\" trap. The stimulus specifies \"labor-saving technology that makes...roles obsolete.\" It does not apply to *all* types of technology."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Too Strong)"
    },
    {
      "type": "paragraph",
      "text": "**(C) A social system whose values are not susceptible to change would not be one in which technology can eliminate economic roles.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrased contrapositive."
    },
    {
      "type": "list",
      "items": [
        "\"values are not susceptible to change\" = *not undermined* (`~B`)",
        "\"would not be one in which technology can eliminate economic roles\" = *tech cannot eliminate roles* (`~A`)"
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) A technologically advanced society will place little value on the prestige associated with an economic role.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a distortion. The stimulus says values tied to *obsolete* roles will be undermined. It says nothing about the prestige of *current* or *new* roles in a technologically advanced society."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Distortion)"
    },
    {
      "type": "paragraph",
      "text": "**(E) A technological innovation that is implemented in a social system foreign to the one in which it was developed will tend to undermine the foreign social system.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The stimulus says nothing about the origin of the technology (\"foreign\"). This is a new detail."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Out of Scope)"
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
        "**Translate to Formal Logic:** When a stimulus presents a clear rule, translate it into \"if-then\" form to clarify the logic.",
        "**Master the Contrapositive:** The contrapositive (`~B → ~A`) is the most powerful inference you can draw from a conditional statement (`A → B`). On hard questions, it's often the correct answer.",
        "**Avoid Common Flaws:** Be on high alert for trap answers that commit classic conditional logic errors like the Mistaken Reversal (`B → A`) or the Mistaken Negation (`~A → ~B`)."
      ]
    }
  ],
};
