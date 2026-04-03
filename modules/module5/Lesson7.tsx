import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '5-7',
  title: 'Lesson 4: The Conditional Logic Flaw (Flaw)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: The Conditional Logic Flaw (Flaw)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Errors of Conditional Logic"
    },
    {
      "type": "paragraph",
      "text": "This lesson covers a fundamental error in formal reasoning: confusing a necessary condition with a sufficient condition. Many arguments are built on \"if-then\" rules, and a common flaw is to misread or misapply these rules."
    },
    {
      "type": "paragraph",
      "text": "**Sufficient Condition:** A condition that, if met, is *enough* to guarantee a result. (If A, then B)."
    },
    {
      "type": "paragraph",
      "text": "**Necessary Condition:** A condition that is *required* for a result to occur. You cannot have the result without it. (Only if B, then A; or If A, then B)."
    },
    {
      "type": "paragraph",
      "text": "The classic error, a **Mistaken Reversal**, occurs when an argument is given a sufficient condition and incorrectly treats it as a necessary one. The structure is:"
    },
    {
      "type": "list",
      "items": [
        "**Rule:** If A happens, then B will result. (`A → B`)",
        "**Observation:** B has resulted.",
        "**Flawed Conclusion:** Therefore, A must have happened."
      ]
    },
    {
      "type": "paragraph",
      "text": "This is flawed because something other than A could have caused B."
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
      "text": "**Stimulus** > > Unplugging a peripheral component such as a “mouse” from a personal computer renders all of the software programs that require that component unusable on that computer. On Fred’s personal computer, a software program that requires a mouse has become unusable. So it must be that the mouse for Fred’s computer became unplugged. > > **Question** > > The argument is most vulnerable to which one of the following criticisms? > > *   (A) It contains a shift in the meaning of “unusable” from “permanently unusable” to “temporarily unusable.” > *   (B) It treats an event that can cause a certain result as though that event is necessary to bring about that result. > *   (C) It introduces information unrelated to its conclusion as evidence in support of that conclusion. > *   (D) It attempts to support its conclusion by citing a generalization that is too broad. > *   (E) It overlooks the possibility that some programs do not require a peripheral component such as a mouse."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** The mouse for Fred’s computer must be unplugged."
    },
    {
      "type": "paragraph",
      "text": "**Premise 1 (The Rule):** Unplugging a mouse makes the software unusable. (This is our \"If A, then B\" rule: If the mouse is unplugged, the software becomes unusable)."
    },
    {
      "type": "paragraph",
      "text": "**Premise 2 (The Observation):** The software on Fred's computer is unusable. (B has happened)."
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The argument perfectly matches the flawed structure of a Mistaken Reversal. It establishes that an unplugged mouse is *one way* (a sufficient cause) for the software to become unusable. It then observes that the software is unusable and leaps to the conclusion that this *must be* the reason."
    },
    {
      "type": "paragraph",
      "text": "**Ask \"What if?\":** What if the software is unusable for another reason?"
    },
    {
      "type": "paragraph",
      "text": "**The Flaw:** The argument fails to consider alternative causes. The mouse could be broken, the software could have crashed, the computer's USB port could be faulty, or the program could have a bug. The argument wrongly treats one possible cause as the only possible cause."
    },
    {
      "type": "h4",
      "text": "Step 3: Articulate the Flaw and Prephrase"
    },
    {
      "type": "paragraph",
      "text": "The argument confuses something that is enough to cause a problem with something that is required to cause it. It treats a sufficient condition (unplugging the mouse) as if it were a necessary one."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The argument assumes that because an unplugged mouse is one way to cause the problem, it must be the only way."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) It contains a shift in the meaning of “unusable” from “permanently unusable” to “temporarily unusable.”**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This describes an equivocation flaw. The term \"unusable\" is used consistently. The duration of the problem isn't relevant to the logical error."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Accurate Description of the Wrong Flaw)"
    },
    {
      "type": "paragraph",
      "text": "**(B) It treats an event that can cause a certain result as though that event is necessary to bring about that result.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect, abstract description of our prephrase. The \"event that can cause a certain result\" is unplugging the mouse (a sufficient condition). The argument wrongly treats this event as \"necessary,\" meaning it must have happened for the result to occur."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) It introduces information unrelated to its conclusion as evidence in support of that conclusion.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** All the information is relevant. The rule about unplugging mice and the fact that Fred's software is unusable are directly related to the conclusion about Fred's mouse."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) It attempts to support its conclusion by citing a generalization that is too broad.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The generalization (\"Unplugging a peripheral...\") seems like a reasonable technical fact, not an overly broad one. The flaw is in how this rule is applied, not in the rule itself."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) It overlooks the possibility that some programs do not require a peripheral component such as a mouse.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is out of scope. The argument is specifically about a program that *does* require a mouse. The existence of other programs is irrelevant."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Out of Scope)"
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
      "text": "**Recognize Conditional Language:** Be alert for arguments that establish a rule or a cause-and-effect relationship. They are prime candidates for this type of flaw."
    },
    {
      "type": "paragraph",
      "text": "**Sufficient vs. Necessary:** The core of the flaw is confusing what is *enough* with what is *required*. Just because one thing is sufficient to cause another doesn't mean it's the only way."
    },
    {
      "type": "paragraph",
      "text": "**Look for Alternative Causes:** The easiest way to spot this flaw is to brainstorm other potential causes for the observed effect. If other causes are possible, the argument is flawed."
    }
  ],
};
