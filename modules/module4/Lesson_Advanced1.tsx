import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '4-9',
  title: 'Advanced Lesson 1: Advanced Conditional Chains (Parallel Reasoning)',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Advanced Conditional Chains (Parallel Reasoning)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Chains with \"And\" / \"Or\""
    },
    {
      "type": "paragraph",
      "text": "Advanced Parallel Reasoning questions often move beyond simple `A → B → C` chains. They test your ability to navigate more complex logical structures that combine different operators, most commonly \"AND\" (a conjunction) and \"OR\" (a disjunction). These arguments require a higher level of precision in your diagramming and blueprinting. The core task remains the same, but the blueprint itself becomes more detailed and sophisticated."
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
      "text": "**Stimulus** > > To get the free dessert, one must order an entree and a salad. But anyone who orders either an entree or a salad can receive a free soft drink. Thus, anyone who is not eligible for a free soft drink is not eligible for a free dessert. > > **Question** > > The reasoning in the argument above is most similar to the reasoning in which one of the following arguments? > > *   (A) To get an executive position at Teltech, one needs a university diploma and sales experience. But anyone who has worked at Teltech for more than six months who does not have sales experience has a university diploma. Thus, one cannot get an executive position at Teltech unless one has worked there for six months. > *   (B) To be elected class president, one must be well liked and well known. Anyone who is well liked or well known has something better to do than run for class president. Therefore, no one who has something better to do will be elected class president. > *   (C) To grow good azaleas, one needs soil that is both rich in humus and low in acidity. Anyone who has soil that is rich in humus or low in acidity can grow blueberries. So, anyone who cannot grow blueberries cannot grow good azaleas. > *   (D) To drive to Weller, one must take the highway or take Old Mill Road. Anyone who drives to Weller on the highway will miss the beautiful scenery. Thus, one cannot see the beautiful scenery without taking Old Mill Road to Weller. > *   (E) To get a discount on ice cream, one must buy frozen raspberries and ice cream together. Anyone who buys ice cream or raspberries will get a coupon for a later purchase. So, anyone who does not get the discount on ice cream will not get a coupon for a later purchase."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton"
    },
    {
      "type": "paragraph",
      "text": "This argument is dense with conditional logic. Let's diagram it precisely. *   Let FD = Get Free Dessert *   Let E = Order an Entree *   Let S = Order a Salad *   Let FSD = Receive a Free Soft Drink"
    },
    {
      "type": "paragraph",
      "text": "The argument maps as follows: *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** `FD → E and S` *"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** `E or S → FSD` These two premises link to form a longer chain: `FD → (E and S) → (E or S) → FSD`, which simplifies to `FD → FSD`. *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The conclusion, \"anyone who is not eligible for a free soft drink is not eligible for a free dessert,\" is the **contrapositive** of this derived chain: `~FSD → ~FD`."
    },
    {
      "type": "paragraph",
      "text": "**Blueprint:** A **valid** argument where: *   Premise 1 has the form: `A → (B and C)` *   Premise 2 has the form: `(B or C) → D` *   The conclusion is the **contrapositive** of the derived chain: `~D → ~A`"
    },
    {
      "type": "h4",
      "text": "Step 2: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "We are looking for an answer choice that perfectly replicates this structure."
    },
    {
      "type": "paragraph",
      "text": "**(A) To get an executive position at Teltech, one needs a university diploma and sales experience. But anyone who has worked at Teltech for more than six months who does not have sales experience has a university diploma. Thus, one cannot get an executive position at Teltech unless one has worked there for six months.** *"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The second premise has the structure `(Worked > 6 mo. AND Not Sales Exp.) → Diploma`. This does not match the `(B or C) → D` structure from our blueprint. The argument introduces several new conditions that do not create the clean chain seen in the stimulus. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Structural Mismatch)"
    },
    {
      "type": "paragraph",
      "text": "**(B) To be elected class president, one must be well liked and well known. Anyone who is well liked or well known has something better to do than run for class president. Therefore, no one who has something better to do will be elected class president.** *"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's diagram this. `Elected → (Liked AND Known)`. `(Liked OR Known) → Something Better`. This creates the chain `Elected → Something Better`. The conclusion is `Something Better → Not Elected`. This is a **Mistaken Reversal** of the derived chain. The stimulus argument is valid, while this one is flawed. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Validity Mismatch)"
    },
    {
      "type": "paragraph",
      "text": "**(C) To grow good azaleas, one needs soil that is both rich in humus and low in acidity. Anyone who has soil that is rich in humus or low in acidity can grow blueberries. So, anyone who cannot grow blueberries cannot grow good azaleas.** *"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's check this against our blueprint.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**A:** Grow good azaleas. **B:** Rich humus. **C:** Low acidity. **D:** Grow blueberries."
    },
    {
      "type": "list",
      "items": [
        "Premise 1: `A → (B and C)`. Check.",
        "Premise 2: `(B or C) → D`. Check.",
        "Conclusion: \"cannot grow blueberries (~D) cannot grow good azaleas (~A).\" `~D → ~A`. Check.     This is a perfect structural match. *"
      ]
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) To drive to Weller, one must take the highway or take Old Mill Road. Anyone who drives to Weller on the highway will miss the beautiful scenery. Thus, one cannot see the beautiful scenery without taking Old Mill Road to Weller.** *"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The first premise is `Drive to Weller → (Highway OR Old Mill Road)`. The necessary condition is an \"OR\" statement. Our blueprint requires an \"AND\" statement in the first premise. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Structural Mismatch)"
    },
    {
      "type": "paragraph",
      "text": "**(E) To get a discount on ice cream, one must buy frozen raspberries and ice cream together. Anyone who buys ice cream or raspberries will get a coupon for a later purchase. So, anyone who does not get the discount on ice cream will not get a coupon for a later purchase.** *"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Let's diagram this. `Discount → (Raspberries AND Ice Cream)`. `(Ice Cream OR Raspberries) → Coupon`. This creates the chain `Discount → Coupon`. The conclusion is `Not Discount → Not Coupon`. This is a **Mistaken Negation** of the derived chain. The stimulus is valid, while this one is flawed. *"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Validity Mismatch)"
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
        "For complex conditional arguments, **precise diagramming is essential**. *   Pay close attention to logical operators like **AND** and **OR**. They are not interchangeable and are a common way the test-makers create tempting but incorrect answer choices. *   Be ready to link premises to form a longer chain of reasoning and then evaluate the conclusion based on that derived chain (e.g., by checking for a valid contrapositive, as in this case)."
      ]
    }
  ],
};
