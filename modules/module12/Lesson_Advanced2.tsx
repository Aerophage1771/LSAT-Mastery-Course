import { Lesson } from '../../types';

export const Lesson_Advanced2: Lesson = {
  id: '12-10',
  title: 'Advanced Lesson 2: Navigating Constraints',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 2: Navigating Constraints"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The \"Least Restrictive\" Constraint"
    },
    {
      "type": "paragraph",
      "text": "Sometimes, the question stem adds a second condition. You need a principle that strengthens the argument *and* meets another specific criterion—in this case, placing the \"least restriction\" on someone's actions."
    },
    {
      "type": "paragraph",
      "text": "This requires a two-step evaluation process. First, identify which principles successfully bridge the logical gap. Then, among the successful bridges, determine which one is the most specific or narrowly tailored to the situation at hand, avoiding unnecessary overreach. This tests your ability to find a rule that is strong enough to work but precise enough to avoid being heavy-handed."
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
      "text": "**Stimulus** > > When the Pinecrest Animal Shelter, a charitable organization, was in danger of closing because it could not pay for important repairs, its directors appealed to the townspeople to donate money that would be earmarked to pay for those repairs. Since more funds were ultimately donated than were used for the repairs, the directors plan to donate the surplus funds to other animal shelters. But before doing so, the directors should obtain permission from those who made the donations. > > **Question** > > Which one of the following principles, if valid, most helps to justify the position advocated above and yet places the least restriction on the allocation of funds by directors of charitable organizations? > > *   (A) The directors of charitable organizations cannot allocate publicly solicited funds to any purposes for which the directors had not specifically earmarked the funds in advance. > *   (B) People who solicit charitable donations from the public for a specific cause should spend the funds only on that cause or, if that becomes impossible, should dispose of the funds according to the express wishes of the donors. > *   (C) Directors of charitable organizations who solicit money from the public must return all the money received from an appeal if more money is received than can practicably be used for the purposes specified in the appeal. > *   (D) Donors of money to charitable organizations cannot delegate to the directors of those organizations the responsibility of allocating the funds received to various purposes consonant with the purposes of the organization as the directors of the organization see fit. > *   (E) People who contribute money to charitable organizations should be considered to be placing their trust in the directors of those organizations to use the money wisely according to whatever circumstance might arise."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Situation:** A charity solicited donations *specifically earmarked* for repairs. They now have surplus funds."
    },
    {
      "type": "paragraph",
      "text": "**Plan:** Directors want to give the surplus to other shelters."
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Before doing so, directors *should obtain permission* from the donors."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Leap"
    },
    {
      "type": "paragraph",
      "text": "The argument assumes that when money is donated for a specific purpose, the directors' discretion over that money is limited. Specifically, if the original purpose is fulfilled, they can't just do whatever they want with the leftovers; they must consult the donors. We need a principle that establishes this obligation."
    },
    {
      "type": "h4",
      "text": "Step 3: Evaluate for Justification AND Constraint"
    },
    {
      "type": "paragraph",
      "text": "We need a principle that says: \"You must get permission.\" But we also need the one that is the \"least restrictive\" generally."
    },
    {
      "type": "paragraph",
      "text": "**(A) The directors of charitable organizations cannot allocate publicly solicited funds to any purposes for which the directors had not specifically earmarked the funds in advance.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This justifies the conclusion (donating to other shelters wasn't earmarked, so they can't do it). But it's extremely restrictive. It forbids *any* deviation, potentially paralyzing a charity if needs change. It doesn't even offer the \"get permission\" escape hatch."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Too restrictive)"
    },
    {
      "type": "paragraph",
      "text": "**(B) People who solicit... for a specific cause should spend the funds only on that cause or, if that becomes impossible, should dispose of the funds according to the express wishes of the donors.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** **Justification:** Does it support the conclusion? Yes. Spending on repairs is now \"impossible\" (because they are done). The rule says they must then follow the \"express wishes of the donors,\" which justifies the need to get permission (to find out those wishes). **Restriction:** Is it the least restrictive? It only applies to funds for a *specific cause*. It allows for an alternative (following donor wishes). It is narrowly tailored to the exact problem in the stimulus without banning all reallocation."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) Directors... must return all the money...**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This supports a *different* conclusion (returning the money), not the one in the stimulus (getting permission to reallocate). It's also very restrictive (forcing a refund)."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) Donors... cannot delegate...**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a negative constraint on *donors*, saying they can't give directors power. It doesn't tell directors what to do in this specific surplus scenario. It's confusing and doesn't directly justify the \"get permission\" conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) People who contribute... should be considered to be placing their trust in the directors...**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This would allow the directors to do whatever they want without permission. It *weakens* the argument by removing the obligation to consult donors."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Opposite effect)"
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
      "text": "**Read the Stem Carefully:** If the question asks for the \"least restrictive\" or \"most narrow\" principle, you might find two answers that justify the conclusion. You must choose the one that applies to the fewest situations or imposes the lightest burden while still getting the job done."
    },
    {
      "type": "paragraph",
      "text": "**Narrow is Good:** In these cases, a principle that says \"In this specific situation X, do Y\" is better than \"Always do Y.\""
    },
    {
      "type": "paragraph",
      "text": "**Check the \"Or\":** Principles with an \"or\" clause (do X *or* Y) often offer the flexibility needed to be the \"least restrictive\" option."
    }
  ],
};
