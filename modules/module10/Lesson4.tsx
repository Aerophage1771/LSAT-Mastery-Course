import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '10-4',
  title: 'Lesson 1: The Conditional Bridge',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Conditional Bridge"
    },
    {
      "type": "paragraph",
      "text": "**Concept Focus: The Conditional Bridge**"
    },
    {
      "type": "paragraph",
      "text": "This is the most common and classic pattern for Sufficient Assumption questions. The argument presents premises that form parts of a logical chain, but a crucial link is missing. The conclusion then connects the beginning of the chain to the end, as if the chain were complete."
    },
    {
      "type": "paragraph",
      "text": "The correct answer will be a conditional statement (If A, then B) that fills the gap, ensuring the conclusion must be true based on the premises."
    },
    {
      "type": "paragraph",
      "text": "**Worked Example**"
    },
    {
      "type": "paragraph",
      "text": "**Stimulus**"
    },
    {
      "type": "paragraph",
      "text": "Obviously, we cannot in any real sense mistreat plants. Plants do not have nervous systems, and having a nervous system is necessary to experience pain."
    },
    {
      "type": "paragraph",
      "text": "**Question**"
    },
    {
      "type": "paragraph",
      "text": "The conclusion above follows logically if which one of the following is assumed?\n*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Any organism that can experience pain can be mistreated.** *"
    },
    {
      "type": "paragraph",
      "text": "**(B) Only organisms that have nervous systems can experience pain.** *"
    },
    {
      "type": "paragraph",
      "text": "**(C) Any organism that has a nervous system can experience pain.** *"
    },
    {
      "type": "paragraph",
      "text": "**(D) Only organisms that can experience pain can be mistreated.** *"
    },
    {
      "type": "paragraph",
      "text": "**(E) Any organism that has a nervous system can be mistreated.**"
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Break Down the Argument**"
    },
    {
      "type": "paragraph",
      "text": "Before looking for the answer, clearly identify the parts of the argument."
    },
    {
      "type": "paragraph",
      "text": "**Find the Conclusion:** Ask, \"What is the main point the author is trying to prove?\" Look for opinion indicators or strong assertions. *"
    },
    {
      "type": "paragraph",
      "text": "**In this argument:** The word \"Obviously\" signals the author's main claim: **We cannot mistreat plants.**"
    },
    {
      "type": "paragraph",
      "text": "**Find the Premises:** Ask, \"What evidence is provided to support that point?\" Look for facts or definitions that answer \"Why?\" *"
    },
    {
      "type": "paragraph",
      "text": "**In this argument:**"
    },
    {
      "type": "paragraph",
      "text": "1."
    },
    {
      "type": "paragraph",
      "text": "**Plants do not have nervous systems.** (Fact about plants)   \n2."
    },
    {
      "type": "paragraph",
      "text": "**Having a nervous system is necessary to experience pain.** (Definition/Rule regarding pain)"
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Convert to a Method of Reasoning**"
    },
    {
      "type": "paragraph",
      "text": "Translate the argument into a workable format and diagram the conditional logic to see the flow.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Plant → ~Mistreat *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** Plant → ~NS (No Nervous System) *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** Pain → NS (If Pain, then Nervous System)"
    },
    {
      "type": "paragraph",
      "text": "**Diagramming the Chain:** We can take the contrapositive of Premise 2 (~NS → ~Pain) to link it with Premise 1.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Current Chain:** Plant → ~NS → ~Pain *"
    },
    {
      "type": "paragraph",
      "text": "**Meaning:** Plants don't have nervous systems, so they can't feel pain."
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "Pinpoint the disconnect. Ask: \"What new idea appears in the conclusion that wasn't fully accounted for in the premises?\"\n*"
    },
    {
      "type": "paragraph",
      "text": "**End of Premise Chain:** ~Pain (Can't feel pain) *"
    },
    {
      "type": "paragraph",
      "text": "**New Term in Conclusion:** ~Mistreat (Can't be mistreated)"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument assumes that if something *cannot feel pain*, it *cannot be mistreated*. The term \"Mistreat\" is the \"New Term\" in the conclusion that hasn't been connected to the concept of \"Pain.\""
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** We need a bridge that says: **~Pain → ~Mistreat**."
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Apply the Sufficient Assumption Equation (Premise + Answer = Conclusion)**"
    },
    {
      "type": "paragraph",
      "text": "Test the prephrase. Does adding it make the conclusion 100% certain?\n*"
    },
    {
      "type": "paragraph",
      "text": "**Premises:** Plant → ~NS → ~Pain *"
    },
    {
      "type": "paragraph",
      "text": "**Add Answer:** ~Pain → ~Mistreat *"
    },
    {
      "type": "paragraph",
      "text": "**Result:** Plant → ~NS → ~Pain → ~Mistreat  The chain is complete. The conclusion (Plant → ~Mistreat) is now 100% certain. We look for the choice equivalent to ~Pain → ~Mistreat."
    },
    {
      "type": "paragraph",
      "text": "**Step 5: Systematically Eliminate Traps**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Any organism that can experience pain can be mistreated. (Pain → Mistreat)**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Trap: Mistaken Negation/Reversal.** This connects the right terms but in a way that doesn't bridge our specific gap (~Pain to ~Mistreat). It tells us about things that can feel pain, not plants. *"
    },
    {
      "type": "paragraph",
      "text": "**(B) Only organisms that have nervous systems can experience pain. (Pain → NS)**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Trap: The Restatement.** This is just a repetition of Premise 2. It adds no new logical power. *"
    },
    {
      "type": "paragraph",
      "text": "**(C) Any organism that has a nervous system can experience pain. (NS → Pain)**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Trap: Mistaken Reversal.** This reverses Premise 2. Even if true, it doesn't connect to \"Mistreatment.\" *"
    },
    {
      "type": "paragraph",
      "text": "**(D) Only organisms that can experience pain can be mistreated. (Mistreat → Pain)**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Correct.** \"Only\" introduces a necessary condition. This diagram is **Mistreat → Pain**. This is the **contrapositive** of our prephrase (~Pain → ~Mistreat). Since a statement and its contrapositive are identical in logic, this fits the equation perfectly. *"
    },
    {
      "type": "paragraph",
      "text": "**(E) Any organism that has a nervous system can be mistreated. (NS → Mistreat)**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Trap: Out of Scope / Invalid Chain.** This connects NS to Mistreat, but our subject (Plants) are ~NS. This rule doesn't apply to them."
    }
  ],
};
