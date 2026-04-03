import { Lesson } from '../../types';

export const Lesson4: Lesson = {
  id: '6-4',
  title: 'Lesson 1: The Mistaken Reversal',
  content: [
    {
      "type": "h2",
      "text": "Lesson 1: The Mistaken Reversal"
    },
    {
      "type": "h3",
      "text": "Concept Focus: The Mistaken Reversal (Affirming the Consequent)  This lesson focuses on one of the most fundamental and frequently tested errors in conditional reasoning: the Mistaken Reversal. An argument commits this flaw when it establishes a rule like \"If A happens, then B will result,\" observes that B (the result) happened, and then wrongly concludes that A must have been the cause."
    },
    {
      "type": "paragraph",
      "text": "The flaw is in treating a sufficient condition as if it were a necessary one. Just because A is *enough* to cause B, it doesn't mean A is the *only* way to cause B.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Rule:** If it is raining (`A`), then the ground is wet (`B`). *"
    },
    {
      "type": "paragraph",
      "text": "**Observation:** The ground is wet (`B`). *"
    },
    {
      "type": "paragraph",
      "text": "**Flawed Conclusion:** Therefore, it must be raining (`A`). (This ignores other causes, like a sprinkler)."
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
      "text": "**Stimulus** > > Whenever a company loses a major product-liability lawsuit, the value of the company’s stocks falls significantly within hours after the announcement. Cotoy has long been involved in a major product-liability lawsuit, and its stocks fell significantly in value today. Therefore, we can be sure that an unfavorable judgment against Cotoy in that lawsuit was announced earlier today. > > **Question** > > Which one of the following contains flawed reasoning that most closely parallels the flawed reasoning in the argument above? > > *   (A) Whenever a business treats its customers discourteously, its customers begin to shop elsewhere. Shopwell wants to keep all of its customers; therefore, its employees will never treat customers discourteously. > *   (B) Whenever the large airlines decrease fares, the financial stability of smaller competing airlines is adversely affected. Therefore, the smaller competing airlines’ financial stability must be seriously threatened when the large airlines announce a large price decrease. > *   (C) Whenever a country shows a lack of leadership on international issues, respect for the country’s policies begins to decline. Therefore, to gain respect for its policies, a country should show leadership on international issues. > *   (D) Whenever an entering student at Cashman College wins the Performance Fellowship, he or she receives $10,000. Therefore, Eula, a student who has enrolled at Cashman, must have won the Performance Fellowship, because she just received $10,000 from the college. > *   (E) Whenever a company advertises its products effectively, the company’s sales increase. Oroco’s sales have not increased; therefore, it is likely that the company did not advertise its products effectively."
    },
    {
      "type": "h4",
      "text": "Step 1: Create the Reasoning Skeleton First, we diagnose the flaw in the stimulus and abstract its structure."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Diagnose the Flaw:** The argument establishes a rule: `If a company loses a lawsuit (A), then its stock falls (B)`. It then observes that Cotoy's stock fell (`B`) and concludes that Cotoy must have lost its lawsuit (`A`). This is a classic **Mistaken Reversal**. The stock could have fallen for many other reasons (e.g., a bad earnings report, a market crash).\n*"
    },
    {
      "type": "paragraph",
      "text": "**Abstract the Structure (The Blueprint):** A flawed argument that presents a rule (`If A → B`), observes that the result (`B`) occurred, and invalidly concludes that the trigger (`A`) must have occurred.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Characterize the Conclusion:** The conclusion is a definite, factual claim (\"we can be sure that...\")."
    },
    {
      "type": "h4",
      "text": "Step 2: Apply the Skeleton to Eliminate Choices  With our \"Mistaken Reversal\" blueprint (`If A → B; B, ∴ A`), we can now scan the answer choices to find the one that commits the same error. Remember, any choice that presents a logically valid argument is an incorrect trap."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Whenever a business treats its customers discourteously, its customers begin to shop elsewhere. Shopwell wants to keep all of its customers; therefore, its employees will never treat customers discourteously.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This argument's rule is `Discourtesy (A) → Customers Leave (B)`. The second premise is that Shopwell does not want customers to leave (`Not B`). The conclusion is that employees will not be discourteous (`Not A`). The structure is `A → B. Not B. ∴ Not A.` This is a **valid** contrapositive.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) Whenever the large airlines decrease fares, the financial stability of smaller competing airlines is adversely affected. Therefore, the smaller competing airlines’ financial stability must be seriously threatened when the large airlines announce a large price decrease.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The rule is `Decrease Fares (A) → Stability Affected (B)`. The conclusion reasons that when the airlines decrease fares (`A`), stability will be affected (`B`). The structure is `A → B. A happens. ∴ B happens.` This is a **valid** application of the rule (Modus Ponens).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) Whenever a country shows a lack of leadership on international issues, respect for the country’s policies begins to decline. Therefore, to gain respect for its policies, a country should show leadership on international issues.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The rule is `Lack of Leadership (A) → Decline in Respect (B)`. The conclusion recommends showing leadership (`Not A`) to gain respect (`Not B`). This is a recommendation based on the **valid** contrapositive (`If you want Not B, then do Not A`).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) Whenever an entering student at Cashman College wins the Performance Fellowship, he or she receives $10,000. Therefore, Eula, a student who has enrolled at Cashman, must have won the Performance Fellowship, because she just received $10,000 from the college.**"
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
      "text": "**Rule:** If a student wins the fellowship (`A`), they receive $10,000 (`B`).       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Observation:** Eula received $10,000 (`B`).       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Therefore, she must have won the fellowship (`A`)."
    },
    {
      "type": "list",
      "items": [
        "This is a perfect match for our **Mistaken Reversal** blueprint. Eula could have received the money from a different scholarship, a grant, or a loan."
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
      "text": "**(E) Whenever a company advertises its products effectively, the company’s sales increase. Oroco’s sales have not increased; therefore, it is likely that the company did not advertise its products effectively.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The rule is `Effective Ads (A) → Sales Increase (B)`. The premise is that sales have not increased (`Not B`). The conclusion is that the ads were likely not effective (`Not A`). The structure is `A → B. Not B. ∴ Not A.` This is a **valid** contrapositive argument.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Valid Argument)"
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
        "The **Mistaken Reversal** is a foundational flaw. Master its structure: `If A → B`. `B` is observed. Therefore, `A` must have happened. *   The most common trap for Parallel Flaw questions is a **Valid Argument**. Four of the five answer choices in this example were logically sound. If you don't precisely identify the flaw in the stimulus, you will be tempted by these correct-looking arguments. *   Always abstract the flaw into a general blueprint (`A`s and `B`s) before evaluating the choices. This prevents you from being distracted by the topic and focuses you on the pure logical structure."
      ]
    }
  ],
};
