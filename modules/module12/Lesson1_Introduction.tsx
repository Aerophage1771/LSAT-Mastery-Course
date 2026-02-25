import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "12-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 12: Principle-Strengthen' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify the general rule or broad principle that, if valid, provides the strongest support for the argument\'s conclusion.** You are looking for an abstract, universal statement — a "law" — that connects the specific facts of the case to the author\'s reasoning and makes the conclusion more defensible.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Principle-Strengthen questions are the **bridge between abstract rules and concrete cases**. Every argument makes an implicit appeal to some broader standard — a moral norm, a policy guideline, an efficiency rule, a definitional boundary. In everyday reasoning, these principles remain in the background; on the LSAT, you are asked to drag them into the spotlight and evaluate them explicitly." },
    { type: 'paragraph', text: "These questions appear roughly **1–2 times per scored Logical Reasoning section** and span the full difficulty range. They are especially common in the middle third of a section (questions 10–18), where the LSAT transitions from routine identification tasks to analytical evaluation. Because the correct answer is always a general rule — not a specific fact — students who rely on surface-level matching struggle here. The skill being tested is **abstraction**: can you strip away the details of a particular scenario and identify the universal logic underneath?" },
    { type: 'paragraph', text: "Mastering Principle-Strengthen also pays dividends on related question types. The ability to identify the implicit principle behind an argument is the same skill you need for Flaw questions (where the principle is *violated*), Parallel Reasoning questions (where the principle is *replicated*), and Sufficient Assumption questions (where the principle is *completed*). This module is not an isolated topic — it is a lens that sharpens your entire Logical Reasoning game." },
    { type: 'callout', variant: 'tip', title: 'Frequency & Difficulty', text: "Expect **1–2 Principle-Strengthen questions per scored section**. They tend to cluster in the medium-to-hard range. Because the correct answer is always more abstract than the argument itself, students who practice identifying the underlying principle before reading the answer choices consistently outperform those who evaluate each choice in isolation." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'Principle-Strengthen stems are distinctive because they combine the language of **principles** (or generalizations, propositions) with the language of **justification** (justify, conform to, support). The question asks you to find a general rule that makes the argument\'s reasoning more defensible — not a specific fact that adds evidence. Learn to distinguish these from regular Strengthen stems (which ask for helpful facts) and Sufficient Assumption stems (which ask for the exact missing logical piece).' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following principles, if valid, most helps to justify the argument\'s reasoning?"', '"**principles**" + "**justify**" — find the general rule that defends the logic'],
      ['"Which one of the following, if established, does most to justify the conclusion drawn above?"', '"**established**" + "**justify**" — the answer is a rule to be accepted as valid'],
      ['"The argument most closely conforms to which one of the following principles?"', '"**conforms to**" — the argument is an instance of a broader rule'],
      ['"Which one of the following generalizations, if true, most helps to justify the conclusion?"', '"**generalizations**" — abstract, not specific'],
      ['"Which one of the following most accurately expresses the principle underlying the argument?"', '"**principle underlying**" — the implicit rule the author relies on'],
      ['"Which one of the following propositions, if accepted, most helps to justify the reasoning above?"', '"**propositions**" + "**justify**" — a general claim that supports the logic'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'What Is a Principle?' },
    { type: 'paragraph', text: "A **principle** is an abstract, general rule that applies across situations — not just to the specific case in the argument. It strips away the particular details (\"the mayor,\" \"the tax,\" \"the river\") and replaces them with general categories (\"a public official,\" \"a policy,\" \"an environmental resource\"). Principles are universal: they apply to any case that fits their conditions, not just the one in the stimulus." },
    { type: 'paragraph', text: "On the LSAT, principles typically take a conditional or quasi-conditional form:" },
    { type: 'list', items: [
      '**The Condition ("If" Part):** Describes a general type of situation, evidence, or characteristic. This should match the *evidence* or *circumstances* in the stimulus.',
      '**The Result ("Then" Part):** States a general conclusion, judgment, or action that follows. This should match the *type of conclusion* the author draws.',
    ]},
    { type: 'paragraph', text: "**Example:**\n\n*Argument:* \"The proposed new factory will pollute the river. Therefore, the factory should not be built.\"\n\n*Blueprint:* A specific action (building the factory) has a specific negative consequence (pollution). The author concludes the action should not be taken.\n\n*Principle:* \"Any project that will cause significant environmental damage should not be undertaken.\"\n\nNotice how the principle replaces \"factory\" with \"project,\" \"pollute the river\" with \"cause significant environmental damage,\" and \"should not be built\" with \"should not be undertaken.\" The principle is broader than the argument — it covers *any* project with *any* environmental harm, not just this factory and this river." },

    { type: 'hr' },

    { type: 'h2', text: 'Principle-Strengthen vs. Regular Strengthen' },
    { type: 'paragraph', text: "Both question types ask you to support the argument, but the *type* of support they require is fundamentally different. Confusing them is one of the most common mistakes students make in the Principle family." },
    { type: 'table', headers: ['Feature', 'Regular Strengthen', 'Principle-Strengthen'], rows: [
      ['What you add', 'A **new fact** — specific, concrete evidence', 'A **general rule** — abstract, universal principle'],
      ['Scope', 'Narrow — applies only to this argument', 'Broad — applies to this argument and many others like it'],
      ['Language clue', '"most strengthens" / "most supports"', '"principle" / "generalization" / "justify" / "conforms to"'],
      ['Answer format', 'A factual claim about the specific situation', 'A conditional or universal rule (often "if...then" or "any X should Y")'],
      ['Example answer', '"The factory\'s pollution levels would exceed federal safety thresholds."', '"Any project that causes significant environmental damage should not be undertaken."'],
      ['How it works', 'Adds evidence that makes the conclusion more likely', 'Provides the logical backbone that connects the evidence to the conclusion'],
    ]},
    { type: 'paragraph', text: "Think of it this way: a **Regular Strengthen** answer is like presenting a new piece of evidence at trial. A **Principle-Strengthen** answer is like citing a law from the statute book. The evidence makes the case *stronger*; the law makes the verdict *justified*." },
    { type: 'callout', variant: 'default', title: 'The Critical Distinction', text: "On Regular Strengthen, you are looking for the most helpful *fact*. On Principle-Strengthen, you are looking for the most applicable *rule*. If you find yourself gravitating toward specific, concrete details in the answer choices of a Principle-Strengthen question, you are solving the wrong question type." },

    { type: 'hr' },

    { type: 'h2', text: 'Principle-Strengthen vs. Sufficient Assumption' },
    { type: 'paragraph', text: "These two question types are closely related — both ask you to add a new premise that supports the argument. However, they differ in the *nature* and *precision* of the premise they require." },
    { type: 'table', headers: ['Feature', 'Principle-Strengthen', 'Sufficient Assumption'], rows: [
      ['What you add', 'A **broad, general rule** that makes the reasoning more defensible', 'The **exact missing logical piece** that makes the conclusion 100% certain'],
      ['Degree of support', 'Significant — the principle makes the conclusion much more reasonable, but need not guarantee it', 'Complete — the conclusion must be logically airtight once you add the answer'],
      ['Answer scope', 'Deliberately **broader** than the argument — applies to many similar cases', 'Precisely **tailored** to the argument\'s specific gap — often narrow and technical'],
      ['Stem language', '"principle" / "justify" / "conforms to"', '"follows logically if assumed" / "enables the conclusion to be properly drawn"'],
      ['Key test', 'Does the principle make the reasoning more defensible?', 'Do the premises + answer = conclusion is 100% guaranteed?'],
      ['Common trap', 'Picking an answer that is too narrow or specific', 'Picking an answer that is necessary but not strong enough to guarantee the conclusion'],
    ]},
    { type: 'paragraph', text: "Think of it this way: a **Sufficient Assumption** is a custom-fitted key that opens exactly one lock. A **Principle-Strengthen** answer is a master key — it is broader and less precise, but it works on this lock and many others. The SA answer is *exactly* what the argument needs; the Principle answer is a *general rule* that *covers* what the argument needs." },
    { type: 'callout', variant: 'tip', title: 'When They Overlap', text: "Some Principle-Strengthen questions are close to Sufficient Assumption questions — the principle, if valid, essentially guarantees the conclusion. Other Principle-Strengthen questions have correct answers that strongly support but do not fully guarantee the conclusion. The distinguishing factor is always the stem: if it says \"principle\" + \"justify,\" treat it as Principle-Strengthen. If it says \"if assumed\" + \"follows logically,\" treat it as Sufficient Assumption." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Principle Types' },
    { type: 'paragraph', text: "While every Principle-Strengthen argument is unique, the types of principles tested fall into a small number of recurring categories. Recognizing these patterns gives you a head start on identifying the gap and predicting the correct answer." },
    { type: 'table', headers: ['Principle Type', 'What It Does', 'Example'], rows: [
      ['**Normative Bridge**', 'Connects a factual observation ("is") to a moral or value judgment ("ought"). Bridges the gap from descriptive evidence to a prescriptive conclusion.', '"If an action causes harm, then that action is morally wrong."'],
      ['**Efficiency Principle**', 'Justifies choosing a means or strategy based on its effectiveness at achieving a goal. Bridges the gap from a practical benefit to a recommended course of action.', '"When multiple strategies exist, one should choose the one most likely to achieve the desired outcome."'],
      ['**Accountability Principle**', 'Assigns responsibility or blame based on a role, relationship, or duty. Bridges the gap from a person\'s position to their obligation.', '"Those who have the authority to prevent harm have an obligation to do so."'],
      ['**Lesser-of-Two-Evils**', 'Justifies choosing a bad option over a worse one. Bridges the gap from a comparative evaluation to a conclusion about the best course of action.', '"When all available options have negative consequences, one should choose the option with the least harm."'],
      ['**Definitional Principle**', 'Establishes that something qualifies (or fails to qualify) as a member of a category based on its characteristics. Bridges the gap from features to classification.', '"Any action taken under duress does not constitute genuine consent."'],
    ]},
    { type: 'paragraph', text: "Each of these principle types is explored through worked drills in the lessons that follow. For now, recognize that the correct answer to a Principle-Strengthen question will almost always be one of these broad patterns — a general rule connecting the *type* of evidence to the *type* of conclusion." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Principle-Strengthen question." },

    { type: 'question-card',
      id: 'WE-12-1-001',
      questionType: 'Principle-Strengthen',
      difficulty: 'easy',
      stimulus: "A city council member argues that the city should not fund the proposed downtown mural project. She points out that the project was designed by an artist who has no connection to the community and that the mural's imagery does not reflect local history or culture. Public art, she contends, should serve the community in which it is placed.",
      question: "Which one of the following principles, if valid, most helps to justify the city council member's reasoning?",
      options: [
        "(A) Public art projects should be funded only if the majority of community members have voted in favor of them.",
        "(B) Public funding should not be allocated to art projects whose designs were created without input from community stakeholders.",
        "(C) A city should fund public art projects that reflect the identity of the community the art will serve. (Correct)",
        "(D) Artists who receive public funding should be required to live in the community where their art will be displayed.",
        "(E) Public art is more valuable to a community when it is created by a local artist than when it is created by an outsider.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "**Conclusion:** The city should not fund the proposed mural project.\n\n**Premises:**\n1. The artist has no connection to the community.\n2. The mural's imagery does not reflect local history or culture.\n3. Public art should serve the community in which it is placed.\n\nThe council member's reasoning: because the mural fails to reflect the community (evidence), it should not be funded (conclusion)." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The premises establish that the mural does not reflect local identity. The conclusion is that the mural should not be *funded*. The logical leap is from **\"does not reflect the community\"** to **\"should not receive public money.\"** The argument assumes a principle that connects community relevance to funding worthiness. What general rule would make this leap valid?" },

    { type: 'h4', text: 'Step 3: Pre-phrase the Principle' },
    { type: 'paragraph', text: "\"Public art should only be funded if it reflects the community it serves.\" This is the general rule that, if valid, would make the council member's conclusion follow from her evidence." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Public art projects should be funded only if the majority of community members have voted in favor of them.', text: 'The argument is about community *relevance* (imagery, history, culture), not community *voting*. The council member never mentions a vote or public approval process. This principle addresses a democratic process concern, not a cultural identity concern.', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(B) Public funding should not be allocated to art projects whose designs were created without input from community stakeholders.', text: 'This is tempting because it mentions community involvement. However, the argument is about whether the *final product* reflects the community — not whether community *input* was sought during the design process. An outsider artist could theoretically solicit community input and still produce imagery that does not reflect local culture. This principle does not bridge the specific gap.', badge: 'Wrong Criterion', badgeColor: 'red' },
      { title: '(C) A city should fund public art projects that reflect the identity of the community the art will serve.', text: 'This is the contrapositive match. If a city should fund art that *does* reflect community identity, then art that *does not* reflect community identity fails this standard. The council member\'s evidence (mural doesn\'t reflect local history/culture) directly triggers the principle\'s condition, and the conclusion (should not fund) follows. This principle provides the exact normative bridge between the evidence and the conclusion.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) Artists who receive public funding should be required to live in the community where their art will be displayed.', text: 'The argument mentions the artist\'s lack of community connection, but the *conclusion* is about funding the *project*, not about residency requirements for *artists*. This principle addresses a different policy question entirely — who is eligible to receive funding, not what kind of art deserves funding.', badge: 'Scope Shift', badgeColor: 'red' },
      { title: '(E) Public art is more valuable to a community when it is created by a local artist than when it is created by an outsider.', text: 'This is a comparative claim about the *value* of art, not about whether art should be *funded*. Even if outsider art is less valuable, it might still be worth funding. This principle does not support the conclusion that the project should not be funded at all.', badge: 'Partial Justification', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The correct answer is always more abstract and general than the argument itself.** Principle-Strengthen answers replace specific details with broad categories. If the answer uses the same proper nouns or specific facts as the stimulus, it is almost certainly wrong.\n\n**2. Identify the logical leap, then abstract it.** The gap between the evidence and the conclusion is the key. Your job is to find the general rule that bridges this gap — the \"law\" that the author is implicitly invoking.\n\n**3. Distinguish Principle-Strengthen from Regular Strengthen and Sufficient Assumption.** Regular Strengthen adds a *fact*. Principle-Strengthen adds a *rule*. Sufficient Assumption adds the *exact missing piece*. The stem language will always tell you which type you are dealing with.\n\n**4. Watch for scope shifts in wrong answers.** The most common trap is a principle that sounds relevant but applies to a different agent, concept, or situation than the one in the argument. Always check: does this principle address the *specific* logical leap in the argument?\n\n**5. Know the five common principle types.** Normative Bridge, Efficiency Principle, Accountability, Lesser-of-Two-Evils, and Definitional Principle cover the vast majority of Principle-Strengthen questions. Recognizing the pattern accelerates your gap identification and pre-phrasing.\n\n**6. The principle must bridge the evidence to the conclusion.** A principle that merely restates a premise or addresses a tangential concern does not justify the reasoning. The correct principle always connects *what the author knows* to *what the author concludes*." },
  ]
};
