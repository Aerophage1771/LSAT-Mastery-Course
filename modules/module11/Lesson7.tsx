import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '11-7',
  title: 'Lesson 4: The Plan-Works Proponent (Necessary Assumption)',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: The Plan-Works Proponent (Necessary Assumption)"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Ensuring Necessity"
    },
    {
      "type": "paragraph",
      "text": "This lesson focuses on a common type of argument: the process of elimination. The author considers a limited set of options, rules out all but one, and concludes that the remaining option *must* be the case. This structure is often used to justify a necessary course of action or a plan."
    },
    {
      "type": "paragraph",
      "text": "The central weakness of these arguments is the assumption that the initial set of options is complete. The **Plan-Works Proponent** assumption in this context functions to \"close the universe\" of possibilities, confirming that no other options exist outside the ones the author has considered. It ensures that the author's conclusion is truly necessary and not just one of several possibilities."
    },
    {
      "type": "list",
      "items": [
        "**Premise:** Options are A, B, and C.",
        "**Premise:** A is impossible.",
        "**Premise:** B is impossible.",
        "**Conclusion:** Therefore, C *must* be the case.",
        "**Logical Gap:** What if option D exists?",
        "**Necessary Assumption (Plan-Works Proponent):** There are no other options besides A, B, and C."
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
      "text": "**Stimulus** > > A reason Larson cannot do the assignment is that she has an unavoidable scheduling conflict. On the other hand, a reason Franks cannot do the assignment is that he does not quite have the assertiveness the task requires. So, the task must be assigned to Parker, the only supervisor in the shipping department other than Larson and Franks. > > **Question** > > The argument depends on assuming which one of the following? > > *   (A) Larson has the assertiveness the task requires. > *   (B) The task cannot be assigned to anyone other than a supervisor in the shipping department. > *   (C) Franks would be assigned the task if Franks had the assertiveness the task requires. > *   (D) The task cannot be assigned to anyone who has any kind of scheduling conflict. > *   (E) No one who is not a supervisor in the shipping department has the assertiveness this task requires."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument"
    },
    {
      "type": "list",
      "items": [
        "**Conclusion:** The task *must* be assigned to Parker.",
        "**Premise 1:** Larson cannot do the task (due to a scheduling conflict).",
        "**Premise 2:** Franks cannot do the task (due to a lack of assertiveness).",
        "**Premise 3:** Parker is the only other supervisor in the shipping department.",
        "**Core Argument:** The author rules out every supervisor in the shipping department except Parker, and therefore concludes that Parker is the only possible choice."
      ]
    },
    {
      "type": "h4",
      "text": "Step 2: Find the Logical Gap"
    },
    {
      "type": "paragraph",
      "text": "The argument's reasoning is confined to a single group: \"supervisors in the shipping department.\" It successfully proves that Parker is the only person *within that group* who can do the job. However, the conclusion is absolute: Parker *must* be assigned the task. This leap in logic assumes that the search for a candidate is restricted to only that specific group. What if someone from another department could do it?"
    },
    {
      "type": "h4",
      "text": "Step 3: Prephrase the Necessary Connection"
    },
    {
      "type": "paragraph",
      "text": "The argument must close the universe of possibilities to just the group it has considered."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** The author must assume that the assignment can only be given to a supervisor in the shipping department."
    },
    {
      "type": "h4",
      "text": "Step 4: Evaluate Answer Choices and Select a Contender"
    },
    {
      "type": "list",
      "items": [
        "(A) This is about Larson's other qualifications, but she's already eliminated.",
        "(B) This choice explicitly states that the pool of candidates is limited to \"a supervisor in the shipping department.\" This perfectly matches our prephrase.",
        "(C) This is a hypothetical about Franks that doesn't affect the current situation.",
        "(D) This is an overly strong rule about scheduling conflicts.",
        "(E) This is about the *qualifications* of outsiders, but the more fundamental issue is their *eligibility*."
      ]
    },
    {
      "type": "paragraph",
      "text": "Choice (B) is our strong contender."
    },
    {
      "type": "h4",
      "text": "Step 5: Confirm with the Negation Test"
    },
    {
      "type": "list",
      "items": [
        "**Original (B):** The task cannot be assigned to anyone other than a supervisor in the shipping department.",
        "**Negation:** The task **CAN** be assigned to someone other than a supervisor in the shipping department."
      ]
    },
    {
      "type": "paragraph",
      "text": "If the negation is true, the entire argument collapses. If the task can be assigned to, say, a supervisor in accounting or a non-supervisor, then eliminating Larson and Franks from the shipping department pool does not mean Parker is the only option left. The conclusion that the task *must* be assigned to Parker is no longer supported. The argument is destroyed. (B) is correct."
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
      "text": "**(A) Larson has the assertiveness the task requires.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is irrelevant. Larson has already been ruled out for a different, definitive reason (a scheduling conflict). Her other qualifications do not change the fact that she is unavailable."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(C) Franks would be assigned the task if Franks had the assertiveness the task requires.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Out of Scope Detour into a hypothetical scenario. The argument is concerned with the current reality, where Franks lacks assertiveness. What might happen if things were different is not a necessary part of the existing logic."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(D) The task cannot be assigned to anyone who has any kind of scheduling conflict.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is an Overly Strong Claim. The premise states Larson has an *unavoidable* conflict. The argument doesn't need to assume that *any* conflict, no matter how minor or avoidable, would be disqualifying."
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.**"
    },
    {
      "type": "paragraph",
      "text": "**(E) No one who is not a supervisor in the shipping department has the assertiveness this task requires.**"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This misses the core gap. The argument's flaw isn't about whether outsiders are *qualified*, but whether they are *eligible*. Even if a thousand assertive people work outside the department, they still can't be chosen if the rules limit the assignment to supervisors in shipping. Choice (B) addresses the more fundamental assumption of eligibility."
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
        "**Recognize Arguments by Elimination:** When an author rules out a few options and then declares the last one standing *must* be the answer, they are using a process of elimination.",
        "**Question the Universe of Options:** The key vulnerability in these arguments is the assumption that the author has considered all possible options. The necessary assumption often confirms that the universe of options is \"closed\" and no others exist.",
        "**\"Must\" is a Strong Word:** Conclusions that use absolute words like *must*, *will*, or *cannot* often rely on strong assumptions that eliminate all other possibilities."
      ]
    }
  ],
};
