import { Lesson } from '../../types';

export const Lesson_Advanced1: Lesson = {
  id: '12-9',
  title: 'Advanced Lesson 1: Justifying a Risk-Averse Choice',
  content: [
    {
      "type": "h2",
      "text": "Advanced Lesson 1: Justifying a Risk-Averse Choice"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Weighing Competing Considerations"
    },
    {
      "type": "paragraph",
      "text": "This question exemplifies a common advanced structure where the author's conclusion is a choice between two imperfect options. The argument acknowledges a downside to its own recommendation (a concession) but implicitly argues that the alternative is even worse."
    },
    {
      "type": "paragraph",
      "text": "Your task is to identify the unstated **value judgment** that justifies this trade-off. The correct principle won't be a simple rule but a statement of priority: it will explain *why* one type of risk or error is considered more important to avoid than another."
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
      "text": "**Stimulus** > > Political theorist: Many people believe that the punishment of those who commit even the most heinous crimes should be mitigated to some extent if the crime was motivated by a sincere desire to achieve some larger good. Granted, some criminals with admirable motives deserve mitigated punishments. Nonetheless, judges should never mitigate punishment on the basis of motives, since motives are essentially a matter of conjecture and even vicious motives can easily be presented as altruistic. > > **Question** > > Which one of the following principles, if valid, most helps to justify the political theorist’s reasoning? > > *   (A) Laws that prohibit or permit actions solely on the basis of psychological states should not be part of a legal system. > *   (B) It is better to err on the side of overly severe punishment than to err on the side of overly lenient punishment. > *   (C) The legal permissibility of actions should depend on the perceivable consequences of those actions. > *   (D) No law that cannot be enforced should be enacted. > *   (E) A legal system that, if adopted, would have disastrous consequences ought not be adopted."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** Judges should **never** mitigate punishment based on motives."
    },
    {
      "type": "paragraph",
      "text": "**Premise:** Motives are unknowable (\"conjecture\") and can be faked (\"vicious motives can easily be presented as altruistic\")."
    },
    {
      "type": "paragraph",
      "text": "**Concession:** The theorist admits that \"some criminals with admirable motives **deserve** mitigated punishments.\" This is a key point; the theorist knows their recommended policy will lead to some unfair outcomes."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Leap"
    },
    {
      "type": "paragraph",
      "text": "The argument sets up a choice between two types of errors:"
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        "**The Error of Leniency:** Mistakenly giving a lighter sentence to a vicious criminal who successfully fakes a good motive.",
        "**The Error of Severity:** *Intentionally* giving a harsher-than-deserved sentence to a genuinely well-motivated criminal by refusing to consider their motives at all."
      ]
    },
    {
      "type": "paragraph",
      "text": "The theorist's conclusion—to never consider motives—is a decision to accept the Error of Severity in order to completely eliminate any risk of the Error of Leniency. The logical leap is the unstated value judgment that avoiding accidental leniency is more important than ensuring fairness for the well-motivated."
    },
    {
      "type": "h4",
      "text": "Step 3: Pre-phrase the Justifying Principle"
    },
    {
      "type": "paragraph",
      "text": "We need a principle that prioritizes one type of error over the other. The rule should state something like: \"When dealing with punishment, it's better to be too harsh than to be too lenient.\""
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate the Answer Choices"
    },
    {
      "type": "paragraph",
      "text": "**(A) Laws that prohibit or permit actions solely on the basis of psychological states should not be part of a legal system.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a very tempting trap. The argument is about motives (\"psychological states\"). However, the conclusion is about **punishment/sentencing**, not about laws that \"prohibit or permit actions\" (i.e., what makes something a crime in the first place). This is a subtle but critical scope shift."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Scope Shift)"
    },
    {
      "type": "paragraph",
      "text": "**(B) It is better to err on the side of overly severe punishment than to err on the side of overly lenient punishment.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our pre-phrase. It explicitly states the value judgment that the theorist's argument relies on. By choosing a policy that guarantees some overly severe punishments to avoid any overly lenient ones, the theorist is acting in perfect accordance with this principle."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) The legal permissibility of actions should depend on the perceivable consequences of those actions.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is another scope shift trap, similar to (A). It focuses on \"legal permissibility\" (what is a crime) rather than punishment. It also shifts the topic from \"motives\" to \"consequences,\" which is not the focus of the theorist's argument."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) No law that cannot be enforced should be enacted.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The problem identified by the theorist is not that a law about motives is unenforceable. The problem is that it would be enforced *unreliably* and *inaccurately*. The issue is verifiability, not enforceability."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) A legal system that, if adopted, would have disastrous consequences ought not be adopted.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This principle is too broad and vague. The theorist doesn't argue that considering motives would be \"disastrous.\" The focus is on a specific trade-off between two types of errors, not on a systemic catastrophe. This principle doesn't capture the specific logic of the trade-off."
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
      "text": "**Look for Concessions:** When an author says \"Granted...\" or \"Although...\", they are acknowledging a weakness in their position. The justifying principle often explains why they proceed *despite* that weakness."
    },
    {
      "type": "paragraph",
      "text": "**Identify the Trade-Off:** Harder questions often involve a choice between two imperfect outcomes. The core reasoning is a judgment about which outcome is the \"lesser of two evils.\" The correct principle will state this priority."
    },
    {
      "type": "paragraph",
      "text": "**Beware of Scope Shifts:** Watch for traps that sound relevant but apply to a different concept (e.g., the legality of an act vs. the severity of its punishment)."
    }
  ],
};
