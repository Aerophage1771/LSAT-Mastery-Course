import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '20-11',
  title: 'Advanced Lesson 3: The Abstraction Gauntlet',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: The Abstraction Gauntlet"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Translating Formal Logic in Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "The final frontier of difficulty in Agree/Disagree questions is not the stimulus, but the answer choices themselves. You may perfectly understand that \"Speaker A wants to fund basic science, and Speaker B only wants to fund practical tech.\" However, the test-makers will obscure this simple conflict using dense, formal language."
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on how to handle answer choices that use:"
    },
    {
      "type": "list",
      "items": [
        "**Formal Logical Terms:** Words like \"sufficient condition,\" \"necessary condition,\" \"precludes,\" or \"implies.\"",
        "**Complex Negations:** Sentences with multiple \"nots\" or \"nevers\" that require careful untangling.",
        "**Conditional Framing:** Statements framed as \"If X, then Y,\" or \"Unless X, Y.\""
      ]
    },
    {
      "type": "paragraph",
      "text": "Your task is to be a translator. You must break these abstract sentences down into simple English and then map the speakers' concrete positions onto them."
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
      "text": "**Stimulus** > > **Cynthia:** Corporations amply fund research that generates marketable new technologies. But the fundamental goal of science is to achieve a comprehensive knowledge of the workings of the universe. The government should help fund those basic scientific research projects that seek to further our theoretical knowledge of nature. > **Luis:** The basic goal of government support of scientific research is to generate technological advances that will benefit society as a whole. So only research that is expected to yield practical applications in fields such as agriculture and medicine ought to be funded. > > **Question** > > Cynthia’s and Luis’s statements provide the most support for the contention that they would disagree with each other about the truth of which one of the following statements? > > *   (A) The government should help fund pure theoretical research because such research might have unforeseen practical applications in fields such as agriculture and medicine. > *   (B) A proposed study of the effects of chemical fertilizers on crops, for the purpose of developing more-resistant and higher-yielding breeds, should not receive government funding. > *   (C) Although some research projects in theoretical science yield practical benefits, most do not, and so no research projects in theoretical science should be funded by the government. > *   (D) Research for the sole purpose of developing new technologies ought to be financed exclusively by corporations. > *   (E) Knowledge gained through basic scientific research need not be expected to lead to new and useful technologies in order for the research to merit government funding"
    },
    {
      "type": "h4",
      "text": "Step 1: Identify the Task"
    },
    {
      "type": "paragraph",
      "text": "We are looking for a Point of Disagreement that passes the Yes/No Test."
    },
    {
      "type": "h4",
      "text": "Step 2: Deconstruct Speaker 1's Argument"
    },
    {
      "type": "paragraph",
      "text": "**Cynthia's Goal:** Further theoretical knowledge."
    },
    {
      "type": "paragraph",
      "text": "**Cynthia's Policy:** Government should fund basic research *regardless* of marketability (since corporations already cover marketable tech)."
    },
    {
      "type": "paragraph",
      "text": "**Cynthia's Implied Rule:** Practical application is **not required** for funding."
    },
    {
      "type": "h4",
      "text": "Step 3: Analyze Speaker 2's Response in Relation to Speaker 1"
    },
    {
      "type": "paragraph",
      "text": "**Luis's Goal:** Generate technological advances for society."
    },
    {
      "type": "paragraph",
      "text": "**Luis's Policy:** **Only** research with expected practical applications should be funded."
    },
    {
      "type": "paragraph",
      "text": "**Luis's Explicit Rule:** Practical application is **required** (necessary) for funding."
    },
    {
      "type": "h4",
      "text": "Step 4: Pinpoint the Core Issue and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The conflict is about the *requirements* for government funding."
    },
    {
      "type": "list",
      "items": [
        "Cynthia says practical application is not necessary.",
        "Luis says practical application is necessary."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** \"Is the expectation of practical application a necessary condition for government funding?\""
    },
    {
      "type": "h3",
      "text": "Answer Analysis"
    },
    {
      "type": "paragraph",
      "text": "**(A) The government should help fund pure theoretical research because such research might have unforeseen practical applications...**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This offers a practical *reason* to fund theory. Luis loves practical reasons, so he might agree this is a valid justification *if* the applications are expected. Cynthia would also agree with funding theory. This blurs the line rather than sharpening the conflict."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Plausible Agreement)"
    },
    {
      "type": "paragraph",
      "text": "**(B) A proposed study of the effects of chemical fertilizers... should not receive government funding.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a specific example of practical research. Luis would say it *should* (or could) receive funding. Cynthia focuses on what *should* be funded (basic science), not what *should not*. Her view on this specific practical study is unknown."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Unilateral Position)"
    },
    {
      "type": "paragraph",
      "text": "**(C) Although some research projects in theoretical science yield practical benefits... no research projects in theoretical science should be funded by the government.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an extreme \"No\" statement. Cynthia would disagree. Luis would likely disagree too; he says \"only research that is expected to yield practical applications\" should be funded. Theoretical research *with* expected applications would pass his test."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Extreme Language)"
    },
    {
      "type": "paragraph",
      "text": "**(D) Research for the sole purpose of developing new technologies ought to be financed exclusively by corporations.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Luis wants the government to fund practical research, so he would disagree. Cynthia says corporations \"amply fund\" it, but doesn't say they should be the *exclusive* funders. Her view is not strong enough to confirm agreement or disagreement."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Unilateral Position)"
    },
    {
      "type": "paragraph",
      "text": "**(E) Knowledge gained through basic scientific research need not be expected to lead to new and useful technologies in order for the research to merit government funding.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a dense, abstract sentence. Let's translate it:"
    },
    {
      "type": "list",
      "items": [
        "\"need not be expected\" = **Not Necessary**.",
        "\"merit government funding\" = **Be Funded**."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Translation:** \"Practical expectation is **not a necessary condition** for funding.\""
    },
    {
      "type": "paragraph",
      "text": "**Apply the Test:**"
    },
    {
      "type": "paragraph",
      "text": "**Cynthia:** She wants to fund research for \"theoretical knowledge,\" implying practical use is not required. She agrees with the \"not necessary\" claim. She answers **YES**."
    },
    {
      "type": "paragraph",
      "text": "**Luis:** He says \"only\" practical research should be funded. This means practical use *is* required. He disagrees with the \"not necessary\" claim. He answers **NO**."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
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
      "text": "**Spot the Logical Operator:** In answer choices, words like \"need not,\" \"only,\" \"unless,\" and \"required\" define the logical relationship. Identify these words first."
    },
    {
      "type": "paragraph",
      "text": "**Translate to \"Necessary\" or \"Sufficient\":** Rewrite the dense sentence in your head. Does it mean \"X is required for Y\"? Or \"X guarantees Y\"?"
    },
    {
      "type": "paragraph",
      "text": "**Map the Speakers to the Logic:** Once you have the simplified logical statement, ask: Does Speaker A think this condition is required? Does Speaker B think it's not? The disagreement will often be a direct clash over a necessary condition."
    }
  ],
};
