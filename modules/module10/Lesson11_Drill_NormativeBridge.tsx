import { Lesson } from '../../types';

export const Lesson11_Drill_NormativeBridge: Lesson = {
  id: "10-11",
  title: "Drill: The Normative Bridge (PT-140-S-3-Q-14)",
  content: [
    { type: 'h2', text: 'The Normative Bridge Pattern' },
    { type: 'paragraph', text: "The Normative Bridge pattern occurs when an argument moves from **descriptive facts** (what *is* the case) to a **normative conclusion** (what *should* be the case). The premises establish that something is impossible, impractical, or limited. The conclusion then makes a value judgment — declaring that a goal is wrong, a practice is inappropriate, or a standard should be abandoned." },
    { type: 'paragraph', text: "The logical gap is the missing rule that connects the factual limitation to the normative judgment. Without this bridge, the argument commits a classic logical leap: inferring \"ought\" from \"is.\" The correct answer will explicitly state the principle that justifies moving from a fact about possibility to a judgment about appropriateness." },

    { type: 'callout', variant: 'tip', title: 'Fact → Judgment = Normative Bridge', text: "Whenever you see an argument that says \"X is impossible, therefore X is a bad goal\" or \"Y cannot be done perfectly, therefore Y should not be attempted,\" you are looking at a Normative Bridge gap. The missing assumption is always the rule that links impossibility to inappropriateness." },

    { type: 'table', headers: ['Component', 'Example'], rows: [
      ['Descriptive Fact (Premise)', 'Complete value-neutrality is impossible'],
      ['Normative Conclusion', 'Value-neutrality is a mistaken goal'],
      ['**Gap (Missing Rule)**', '**If a goal is impossible, it is mistaken to pursue it**']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'question-card',
      id: 'SA-10-11-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "Some theorists argue that literary critics should strive to be value-neutral in their literary criticism. These theorists maintain that by exposing the meaning of literary works without evaluating them, critics will enable readers to make their own judgments about the works' merits. But literary criticism cannot be completely value-neutral. Thus, some theorists are mistaken about what is an appropriate goal for literary criticism.",
      question: "The argument's conclusion follows logically if which one of the following is assumed?",
      options: [
        "(A) Any critic who is able to help readers make their own judgments about literary works' merits should strive to produce value-neutral criticism.",
        "(B) If it is impossible to produce completely value-neutral literary criticism, then critics should not even try to be value-neutral. (Correct)",
        "(C) Critics are more likely to provide criticisms of the works they like than to provide criticisms of the works they dislike.",
        "(D) The less readers understand the meaning of a literary work, the less capable they will be of evaluating that work's merits.",
        "(E) Critics who try to avoid rendering value judgments about the works they consider tend to influence readers' judgments less than other critics do."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "Separate the descriptive claims from the normative conclusion to expose the logical leap." },
    { type: 'breakdown', labels: { title: "Statement", text: "Analysis" }, items: [
      { title: "Some theorists argue that literary critics should strive to be value-neutral in their literary criticism.", text: "The position under attack. Certain theorists hold a *normative* view: critics *should* be value-neutral." },
      { title: "These theorists maintain that by exposing the meaning of literary works without evaluating them, critics will enable readers to make their own judgments about the works' merits.", text: "The theorists' reasoning. This explains *why* they hold their view — it gives their justification." },
      { title: "But literary criticism cannot be completely value-neutral.", text: "**Key evidence (descriptive fact).** The author states that the goal is *impossible* to fully achieve." },
      { title: "Thus, some theorists are mistaken about what is an appropriate goal for literary criticism.", text: "**Conclusion (normative judgment).** The author uses the impossibility to declare the goal *inappropriate* — a value judgment about what critics should aim for." }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The author moves from a **fact** (value-neutrality is impossible) to a **judgment** (pursuing value-neutrality is a mistake). This is a classic is-ought gap.\n\nIs the leap justified? Not without an additional rule. Many people hold goals they can never perfectly achieve — \"be perfectly honest,\" \"eliminate all waste,\" \"treat everyone fairly.\" The impossibility of perfection does not automatically make the goal inappropriate. The argument assumes that any unattainable goal is a bad goal, but this principle is never stated." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "We need a rule that explicitly connects impossibility to inappropriateness:" },
    { type: 'list', items: [
      "**\"If a goal is impossible to achieve, then it is not an appropriate goal.\"**",
      "Applied to this argument: value-neutrality is impossible → value-neutrality is not an appropriate goal → the theorists are mistaken."
    ]},

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) Any critic who is able to help readers make their own judgments about literary works' merits should strive to produce value-neutral criticism.", text: "This *supports* the theorists — it says critics should be value-neutral. The author is trying to *refute* the theorists, so an answer that agrees with them goes in the wrong direction entirely.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) If it is impossible to produce completely value-neutral literary criticism, then critics should not even try to be value-neutral.", text: "This is the exact Normative Bridge: **Impossible → Should not try.**\n\n**Logic Check:** The author established that complete value-neutrality is impossible. This rule says that if it is impossible, critics should not even try. Therefore, the theorists (who say critics *should* try) are mistaken about what is an appropriate goal. The conclusion follows with certainty.", badge: "Correct", badgeColor: "green" },
      { title: "(C) Critics are more likely to provide criticisms of the works they like than to provide criticisms of the works they dislike.", text: "This gives more detail about *why* critics cannot be neutral, but it does not bridge the gap between \"cannot be neutral\" and \"should not try to be neutral.\" It adds facts without providing the normative rule.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) The less readers understand the meaning of a literary work, the less capable they will be of evaluating that work's merits.", text: "This actually supports the theorists' rationale (critics should help readers understand, which helps readers evaluate). It gives a reason in favor of the goal, not against it.", badge: "Incorrect", badgeColor: "red" },
      { title: "(E) Critics who try to avoid rendering value judgments about the works they consider tend to influence readers' judgments less than other critics do.", text: "This compares different types of critics but does not address whether the goal of value-neutrality is *appropriate* or *mistaken*. It is an interesting observation that does not fix the logical gap.", badge: "Incorrect", badgeColor: "red" }
    ]},

    { type: 'callout', title: "Key Takeaway", variant: "summary", text: "**The Normative Bridge** closes the gap between descriptive facts and normative conclusions. When the evidence says \"X is impossible\" and the conclusion says \"X is a bad goal,\" the missing assumption must explicitly state: \"If X is impossible, then X is not an appropriate goal.\"\n\n**Why this pattern is tricky:** The leap from \"is\" to \"ought\" feels natural, so students often overlook it. But on the LSAT, no normative conclusion follows from purely descriptive premises without an explicit principle connecting them.\n\n**Common trap:** Answers that explain *why* the goal is hard to achieve (C) rather than providing the rule that *impossible goals are inappropriate goals* (B). More facts do not substitute for the missing logical bridge." }
  ]
};
