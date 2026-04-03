import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '6-10',
  title: 'Advanced Lesson 2: The Irrelevant Counterexample',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: The Irrelevant Counterexample"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Disproving Universal Claims & The Valid Argument Trap  Advanced Parallel Flaw questions are masters of disguise. They often hide a simple logical error within a complex-sounding argument and then offer a perfectly *valid* argument as a trap. This lesson focuses on a subtle flaw related to disproving a universal claim, and how to spot the tempting \"Valid Argument Trap\" that often accompanies it."
    },
    {
      "type": "paragraph",
      "text": "To disprove a universal claim like \"**All** `A`'s are `B`'s\" (`A → B`), you need one specific thing: a **valid counterexample**. A valid counterexample is an `A` that is **not** a `B`. Any other example is logically irrelevant. The flaw in this stimulus is using an **irrelevant counterexample** to attack the rule."
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
      "text": "**Stimulus** > > My father likes turnips, but not potatoes, which he says are tasteless. So it is not true that whoever likes potatoes likes turnips. > > **Question** > > The flawed reasoning in the argument above most closely resembles that in which one of the following? > > *   (A) This book is not a paperback, but it is expensive. So it is not true that some paperbacks are expensive. > *   (B) Although this recently published work of fiction has more than 75 pages, it is not a novel. Thus, it is not the case that all novels have more than 75 pages. > *   (C) All ornate buildings were constructed before the twentieth century. This house is ornate, so it must be true that it was built before the twentieth century. > *   (D) Erica enjoys studying physics, but not pure mathematics, which she says is boring. So it is not true that whoever enjoys studying physics enjoys studying pure mathematics. > *   (E) People who do their own oil changes are car fanatics. My next-door neighbors are car fanatics, so it follows that they do their own oil changes."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton (Flaw-Focused) Let's diagnose the specific error in the stimulus."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Diagnose the Flaw:**"
    },
    {
      "type": "paragraph",
      "text": "1."
    },
    {
      "type": "paragraph",
      "text": "**The Rule Being Attacked:** \"whoever likes potatoes likes turnips.\" This is a universal claim: `Likes Potatoes (A) → Likes Turnips (B)`.   \n2."
    },
    {
      "type": "paragraph",
      "text": "**The Evidence Used:** \"My father likes turnips (`B`), but not potatoes (`Not A`).\"   \n3."
    },
    {
      "type": "paragraph",
      "text": "**The Error:** To disprove `A → B`, you need an `A` that is `Not B` (someone who likes potatoes but not turnips). The argument provides a `B` that is `Not A`. This is an **irrelevant counterexample**. The father's preferences tell us nothing about the preferences of potato-lovers.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Abstract the Structure (The Blueprint):** A flawed argument that attempts to disprove a universal rule (`All A are B`) by presenting an example of something that is `B` but `Not A`."
    },
    {
      "type": "h4",
      "text": "Step 2: Apply the Skeleton to Eliminate Choices  We are looking for an answer choice that makes the exact same mistake. Crucially, we must also eliminate any choice that provides a *valid* counterexample."
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
      "text": "**(A) This book is not a paperback, but it is expensive. So it is not true that some paperbacks are expensive.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The conclusion attacks a \"some\" statement, not an \"all\" statement. The structure doesn't match.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) Although this recently published work of fiction has more than 75 pages, it is not a novel. Thus, it is not the case that all novels have more than 75 pages.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's map this to our blueprint.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule Attacked:** `All Novels (A) → Have >75 Pages (B)`.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Evidence:** A work of fiction that `Has >75 Pages (B)` but is `Not a Novel (Not A)`."
    },
    {
      "type": "list",
      "items": [
        "This is a perfect match for our blueprint. It uses a `B` that is `Not A` to try to disprove the rule `A → B`."
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
      "text": "**(C) All ornate buildings were constructed before the twentieth century. This house is ornate, so it must be true that it was built before the twentieth century.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a **valid** application of a rule (Modus Ponens). It does not try to disprove anything.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) Erica enjoys studying physics, but not pure mathematics, which she says is boring. So it is not true that whoever enjoys studying physics enjoys studying pure mathematics.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the most dangerous trap, selected by nearly half of test-takers.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule Attacked:** `Enjoys Physics (A) → Enjoys Math (B)`.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Evidence:** Erica `Enjoys Physics (A)` but `Does Not Enjoy Math (Not B)`."
    },
    {
      "type": "list",
      "items": [
        "This is a **valid counterexample**. Because the reasoning is sound, it cannot be parallel to the *flawed* reasoning in the stimulus."
      ]
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) People who do their own oil changes are car fanatics. My next-door neighbors are car fanatics, so it follows that they do their own oil changes.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument's rule is `Oil Change (A) → Car Fanatic (B)`. The evidence is that the neighbors are car fanatics (`B`). The conclusion is that they do their own oil changes (`A`). This is a **Mistaken Reversal**. The stimulus flaw is an Irrelevant Counterexample.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Different Flaw)"
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
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Know Your Counterexamples:** To disprove a rule `All A are B`, you need an `A` that is `Not B`. Any other combination is irrelevant. *"
    },
    {
      "type": "paragraph",
      "text": "**Beware the Valid Argument Trap:** On Parallel Flaw questions, an answer choice that uses valid reasoning is *always* wrong. Test-makers love to create a valid version of the stimulus argument to tempt you. If you don't spot the flaw in the original, you'll fall for the valid trap. *"
    },
    {
      "type": "paragraph",
      "text": "**Precision is Everything:** The difference between the flawed stimulus (providing a `B` that is `Not A`) and the valid trap in (D) (providing an `A` that is `Not B`) is subtle but absolute. Meticulous structural analysis is required."
    }
  ],
};
