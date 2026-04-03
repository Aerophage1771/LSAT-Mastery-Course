import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '11-9',
  title: 'Advanced Lesson 1: Hidden Scope Shifts',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Hidden Scope Shifts"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Narrow Premise & The Broad Conclusion"
    },
    {
      "type": "paragraph",
      "text": "Difficult Necessary Assumption questions often hinge on a subtle but powerful logical flaw: a scope shift. The author will build a case using premises that apply to a narrow, specific category but then draw a sweeping conclusion about a much broader category."
    },
    {
      "type": "paragraph",
      "text": "The argument feels convincing because the internal logic is sound. However, the author implicitly assumes that what is true of the narrow category is all that needs to be considered for the broad category. The necessary assumption in these cases is often a **Defender** that rules out other factors, possibilities, or sub-categories that exist within the broader scope of the conclusion but outside the narrow scope of the premises."
    },
    {
      "type": "list",
      "items": [
        "**Premises:** All my evidence is about Category A.",
        "**Conclusion:** Therefore, here is a conclusion about Category Z (which contains A, but also B, C, D...).",
        "**Logical Gap:** The author assumes nothing about B, C, or D would change the conclusion.",
        "**Necessary Assumption:** Considerations related to B, C, and D do not contradict the conclusion."
      ]
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
      "text": "**Stimulus** > > Editorialist: Some people argue that we have an obligation not to cut down trees. However, there can be no obligation to an entity unless that entity has a corresponding right. So if we have an obligation toward trees, then trees have rights. But trees are not the sort of things that can have rights. Therefore, we have no obligation not to cut down trees. > > **Question** > > The editorialist's argument depends on assuming which one of the following? > > *   (A) If an entity has a right to certain treatment, we have an obligation to treat it that way. > *   (B) Any entity that has rights also has obligations. > *   (C) Only conscious entities are the sort of things that can have rights. > *   (D) Avoiding cutting down trees is not an obligation owed to some entity other than trees. > *   (E) One does not always have the right to cut down the trees on one's own property."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "list",
      "items": [
        "**Conclusion:** We have *no obligation* not to cut down trees. (This is an absolute, all-encompassing claim).",
        "**Premise 1:** An obligation *to an entity* requires that entity to have a right.",
        "**Premise 2:** Trees cannot have rights.",
        "**Intermediate Conclusion:** Therefore, we have no obligation *to trees*.",
        "**Core Argument:** The author proves that we have no obligation *to the trees themselves*, and from this, concludes that we have *no obligation whatsoever* regarding the cutting of trees."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The scope shift is subtle but powerful. The premises are exclusively about the relationship between humans and trees (i.e., obligations owed *to trees*). The conclusion, however, is an absolute statement about *any and all* obligations not to cut down trees, regardless of their source. The author assumes that trees are the only possible source of such an obligation, ignoring other possibilities. What if we have an obligation *to other people* (e.g., to preserve the environment for future generations) that requires us not to cut down trees?"
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Necessary Connection"
    },
    {
      "type": "paragraph",
      "text": "The argument must rule out any other potential source for an obligation not to cut down trees."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The author must assume that the only possible obligation not to cut trees would be an obligation owed *to the trees themselves*."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate Answer Choices and Select a Contender"
    },
    {
      "type": "list",
      "items": [
        "(A) This is a Mistaken Reversal of a premise. The argument needs `Obligation → Right`, not `Right → Obligation`.",
        "(B) This is out of scope. The argument is about rights, not the relationship between rights and obligations.",
        "(C) This gives a possible *reason* why trees can't have rights, but the argument just takes it as a premise. It doesn't need to assume the reason.",
        "(D) This choice states that there is no obligation owed to \"some entity other than trees.\" This perfectly matches our prephrase by ruling out all other possible sources of the obligation.",
        "(E) This is about our *rights*, but the argument is about our *obligations*. These are different concepts."
      ]
    },
    {
      "type": "paragraph",
      "text": "Choice (D) is our strong contender."
    },
    {
      "type": "h4",
      "text": "Step 5: Confirm with the Negation Test"
    },
    {
      "type": "list",
      "items": [
        "**Original (D):** Avoiding cutting down trees is not an obligation owed to some entity other than trees.",
        "**Negation:** Avoiding cutting down trees **IS** an obligation owed to some entity other than trees."
      ]
    },
    {
      "type": "paragraph",
      "text": "If the negation is true, the argument is destroyed. The author's entire case is built on disproving an obligation *to trees*. If a separate obligation exists that is owed to, for example, other people or future generations, then the conclusion (\"we have no obligation not to cut down trees\") is proven false. Because the negation shatters the argument, (D) is the necessary assumption."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Analysis of Incorrect Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) If an entity has a right to certain treatment, we have an obligation to treat it that way.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a Mistaken Reversal. The argument uses the premise `Obligation → Right` to conclude `No Right → No Obligation`. It does not need to assume the converse, `Right → Obligation`."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) Any entity that has rights also has obligations.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Out of Scope Detour. The connection between rights and obligations is not part of the argument's logic, which focuses only on whether trees can have rights."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) Only conscious entities are the sort of things that can have rights.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This provides a potential reason for the premise that \"trees are not the sort of things that can have rights,\" but it is not necessary. The argument works as long as you accept the premise itself, regardless of the underlying reason. The author could believe trees lack rights for some other reason."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) One does not always have the right to cut down the trees on one's own property.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The argument is about a moral *obligation*, not a legal *right*. These are separate issues. The conclusion about obligation can hold true regardless of what property rights people have."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "list",
      "items": [
        "**Watch for Scope Shifts:** Pay close attention when an argument uses premises about a narrow category (obligations *to trees*) to make a conclusion about a much broader one (obligations in general).",
        "**Assumptions Often Rule Out Other Possibilities:** When an author builds a case based on one specific line of reasoning, the necessary assumption often takes the form of \"And there are no other relevant factors/possibilities.\"",
        "**The Negation Test Excels with Scope Shifts:** The Negation Test is highly effective at exposing scope shifts. Negating the correct answer introduces a possibility from the broader category that the author ignored, causing the conclusion to fail."
      ]
    }
  ],
};
