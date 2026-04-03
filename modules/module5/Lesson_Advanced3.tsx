import { Lesson } from '../../types';

export const Lesson_Advanced3: Lesson = {
  id: '5-11',
  title: 'Advanced Lesson 3: The Quantitative-Conditional Translation (Flaw)',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 3: The Quantitative-Conditional Translation (Flaw)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Translating \"Logic to Numbers\""
    },
    {
      "type": "paragraph",
      "text": "This lesson addresses a subtle and dangerous flaw: misinterpreting formal logic statements when they are used to describe groups of people in a survey or poll."
    },
    {
      "type": "paragraph",
      "text": "The flaw occurs when an argument tries to compare the *sizes* of two groups based on conditional descriptions (if/then rules) of their beliefs. The trap is assuming that the conditional words used (\"if\" vs. \"only if\") are interchangeable or mean the same thing, when in fact they describe totally different sets of people."
    },
    {
      "type": "paragraph",
      "text": "**Group A (Sufficient):** Believes officials should resign **if** convicted. (Convicted → Resign). This group believes conviction is *enough* reason to resign."
    },
    {
      "type": "paragraph",
      "text": "**Group B (Necessary):** Believes officials should resign **only if** convicted. (Resign → Convicted). This group believes conviction is *required* before resigning."
    },
    {
      "type": "paragraph",
      "text": "These are two different beliefs. Someone in Group A might also believe resigning is appropriate *before* conviction. Someone in Group B thinks resigning *before* conviction is wrong. The argument fails when it treats these distinct logical groups as if they are the same."
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
      "text": "**Stimulus** > > A recent survey showed that 50 percent of people polled believe that elected officials should resign if indicted for a crime, whereas 35 percent believe that elected officials should resign only if they are convicted of a crime. Therefore, more people believe that elected officials should resign if indicted than believe that they should resign if convicted. > > **Question** > > The reasoning above is flawed because it > > *   (A) draws a conclusion about the population in general based only on a sample of that population > *   (B) confuses a sufficient condition with a required condition > *   (C) is based on an ambiguity of one of its terms > *   (D) draws a conclusion about a specific belief based on responses to queries about two different specific beliefs > *   (E) contains premises that cannot all be true"
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** 50% believe officials should resign **if** indicted. (Sufficient condition)."
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** 35% believe officials should resign **only if** convicted. (Necessary condition)."
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** More people believe officials should resign **if** indicted than believe they should resign **if** convicted."
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The conclusion compares two groups based on \"if\" statements:"
    },
    {
      "type": "list",
      "items": [
        "People who believe Resign **IF** Indicted (50%).",
        "People who believe Resign **IF** Convicted (The conclusion claims this group is smaller)."
      ]
    },
    {
      "type": "paragraph",
      "text": "However, the second premise doesn't tell us about the \"IF convicted\" group. It tells us about the \"ONLY IF convicted\" group (35%)."
    },
    {
      "type": "paragraph",
      "text": "**The Mismatch:** The argument takes the 35% who believe conviction is *required* (\"only if\") and treats them as the total number of people who believe conviction is *sufficient* (\"if\")."
    },
    {
      "type": "paragraph",
      "text": "**The Reality:** Many people in the 50% group (who resign if indicted) would *also* agree that one should resign if convicted. In fact, almost everyone probably agrees one should resign *if* convicted. The \"IF convicted\" group is likely huge (maybe 90%+), making the conclusion false."
    },
    {
      "type": "h4",
      "text": "Step 3: Articulate the Flaw and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The argument confuses a necessary condition (\"only if\") with a sufficient condition (\"if\"). It treats the group that sees conviction as a *minimum requirement* as if it's the same as the group that sees conviction as a *good reason*."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The argument mistakes the \"only if convicted\" group for the \"if convicted\" group."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) draws a conclusion about the population in general based only on a sample of that population**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes a sampling flaw. While sampling flaws are common, the error here is in the interpretation of the survey's logical terms, not the act of sampling itself."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(B) confuses a sufficient condition with a required condition**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the correct answer. The phrase \"only if they are convicted\" establishes a **required** condition. The conclusion treats this group as if they are the people who believe \"if they are convicted\" (a **sufficient** condition). This misinterpretation is the reason the comparison fails."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) is based on an ambiguity of one of its terms**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The terms \"indicted\" and \"convicted\" are clear legal terms. The ambiguity isn't in the definitions, but in the logical structure of the statements."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) draws a conclusion about a specific belief based on responses to queries about two different specific beliefs**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes *what* the argument does, but it doesn't explain *why* it's flawed. Using two beliefs to draw a conclusion isn't inherently wrong; misinterpreting the logical relationship between them is."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) contains premises that cannot all be true**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** There is no contradiction. It is perfectly possible for 50% to believe one thing and 35% to believe another."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
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
      "text": "**Logic Words Matter in Polls:** When a survey question uses \"if\" or \"only if,\" treat it as a formal logic statement. These words define the group being counted."
    },
    {
      "type": "paragraph",
      "text": "**\"Only If\" vs. \"If\":** Remember that \"A only if B\" means B is necessary. \"A if B\" means B is sufficient. These are not the same belief."
    },
    {
      "type": "paragraph",
      "text": "**Watch for Comparisons:** When an argument compares the sizes of two groups, ensure the definitions of those groups haven't shifted from the premises to the conclusion. A shift from \"required\" to \"sufficient\" invalidates the comparison."
    }
  ],
};
