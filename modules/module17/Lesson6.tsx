import { Lesson } from '../../types';

export const Lesson6: Lesson = {
  id: '17-6',
  title: 'Lesson 3: The Numerical Reconciliation',
  content: [
    {
      "type": "h2",
      "text": "Lesson 3: The Numerical Reconciliation"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Numerical Reconciliation"
    },
    {
      "type": "paragraph",
      "text": "Sometimes, a Must Be True stimulus presents a set of numerical or statistical facts that seem to contradict each other. This creates a logical puzzle or paradox. The key to solving these questions is to understand the relationship between the numbers and find the one missing piece of information that is logically required to make all the statements true simultaneously."
    },
    {
      "type": "paragraph",
      "text": "A very common version of this pattern involves the relationship between a **total** and its **parts**."
    },
    {
      "type": "list",
      "items": [
        "**The Core Logic:** Total = Part A + Part B + Part C...",
        "**The Paradox:** The stimulus will often state that the **Total** changed in one direction (e.g., increased) while one of its main **Parts** changed in the opposite direction (e.g., decreased).",
        "**The Solution:** For this to be mathematically possible, another **Part** of the total must exist and must have changed enough to account for the overall result. Your task is to identify this necessary, unstated component."
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
      "text": "**Stimulus** > > **Sales manager:** Last year the total number of meals sold in our company's restaurants was much higher than it was the year before. Obviously consumers find our meals desirable. > **Accountant:** If you look at individual restaurants, however, you find that the number of meals sold actually decreased substantially at every one of our restaurants that was in operation both last year and the year before. > > **Question** > > If the sales figures cited by the accountant and the sales manager are both accurate, which one of the following must be true? > > *   (A) The company opened at least one new restaurant in the last two years. > *   (B) The company's meals are less competitive than they once were. > *   (C) The quality of the company's meals has not improved over the past two years. > *   (D) The prices of the company's meals have changed over the past two years. > *   (E) The market share captured by the company's restaurants fell last year."
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task and Set the Standard of Proof"
    },
    {
      "type": "paragraph",
      "text": "The stem asks what \"must be true\" if both sets of figures are \"accurate.\" This is a Must Be True question with a high standard of proof. We must find the one conclusion that is a 100% logical certainty, assuming both the manager and the accountant are correct."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct the Stimulus into Factual Components"
    },
    {
      "type": "paragraph",
      "text": "The stimulus presents a paradox about sales numbers. Let's break it down:"
    },
    {
      "type": "list",
      "items": [
        "**Fact 1 (Sales Manager):** Total company-wide sales increased last year. `Total Sales (Last Year) > Total Sales (Year Before)`",
        "**Fact 2 (Accountant):** Sales at every single existing restaurant decreased last year. `Sales from Existing Stores (Last Year) < Sales from Existing Stores (Year Before)` — The core puzzle is: How can the *total* go up if the sales from *every existing part* went down?"
      ]
    },
    {
      "type": "h4",
      "text": "Step 3: Synthesize and Predict the Deduction"
    },
    {
      "type": "paragraph",
      "text": "Let's use the logic of totals and parts to resolve this. The company's total sales are the sum of the sales from all its parts. The accountant's statement cleverly distinguishes between two types of parts: \"restaurants that were in operation both last year and the year before\" (Existing Restaurants) and, by implication, any that were not (New Restaurants)."
    },
    {
      "type": "list",
      "items": [
        "`Total Sales = (Sales from Existing Restaurants) + (Sales from New Restaurants)`"
      ]
    },
    {
      "type": "paragraph",
      "text": "Now let's apply this formula to the paradox:"
    },
    {
      "type": "list",
      "items": [
        "We know the `Total Sales` went up.",
        "We know the `Sales from Existing Restaurants` part went down.",
        "For the total to increase while a major component decreases, there must be another component that is not just positive, but large enough to more than make up for the loss."
      ]
    },
    {
      "type": "paragraph",
      "text": "This \"other component\" must be `Sales from New Restaurants`. For there to be sales from new restaurants, there must *be* new restaurants."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The only way to explain the numbers is if the company added new restaurants last year."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) The company opened at least one new restaurant in the last two years.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This perfectly matches our prephrase. The existence of new restaurants is the only way to logically reconcile the two accurate but seemingly contradictory sales figures. This must be true."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) The company's meals are less competitive than they once were.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a possible *explanation* for why sales at existing restaurants went down, but it is not a logically necessary *conclusion*. The decline could be due to other factors (new local competition, bad managers, etc.). The stimulus provides numbers, not reasons."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Plausible but Out of Scope Explanation)"
    },
    {
      "type": "paragraph",
      "text": "**(C) The quality of the company's meals has not improved over the past two years.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Similar to (B), this is another potential explanation that is not logically required. Maybe quality did improve, but prices went up even more, causing the sales drop."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Plausible but Out of Scope Explanation)"
    },
    {
      "type": "paragraph",
      "text": "**(D) The prices of the company's meals have changed over the past two years.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Again, a price change could explain a sales drop, but it's not the only possible reason. The stimulus provides no information about prices."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Plausible but Out of Scope Explanation)"
    },
    {
      "type": "paragraph",
      "text": "**(E) The market share captured by the company's restaurants fell last year.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** \"Market share\" is a new concept that compares the company's sales to the total sales of the entire market. The stimulus tells us nothing about the overall market. The market could have shrunk, meaning the company's increased sales gave it a much larger share."
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
        "**Identify the Paradox:** When you see seemingly contradictory facts, especially involving numbers or statistics, your first step is to pinpoint the exact nature of the contradiction (e.g., the total went up, but the parts went down).",
        "**Think in Formulas:** For questions involving totals, averages, or percentages, it can be helpful to think in terms of simple formulas (Total = Part A + Part B). This can make the logical relationships clear.",
        "**Distinguish Conclusion from Explanation:** A major trap in these questions is to offer a plausible *reason* for a fact in the stimulus. The correct answer must be a logical *consequence* of the facts, not a potential cause of them."
      ]
    }
  ],
};
