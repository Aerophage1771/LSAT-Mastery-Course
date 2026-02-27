import { Lesson } from '../../types';

export const Lesson6_ThePrincipleApplication: Lesson = {
  id: "4-6",
  title: "Lesson 3: The Principle Application",
  content: [
    { type: 'h2', text: 'Lesson 3: The Principle Application (Parallel Reasoning)' },
    { type: 'paragraph', text: "This lesson focuses on a distinctive Parallel Reasoning variant: **Principle Application** questions. Instead of matching the abstract logical form of an argument, you must first **extract a general principle** from the stimulus and then find the answer choice that **applies the same principle** to a completely different situation." },

    { type: 'callout', variant: 'tip', title: 'Why This Pattern Matters', text: "Principle Application questions account for approximately **12% of Parallel Reasoning questions**. They are distinctive because they test your ability to identify the **underlying rule** that justifies a conclusion, not just the argument's formal structure. The principle is the abstract bridge between the evidence and the judgment." },

    { type: 'hr' },

    { type: 'h2', text: 'The Principle Application Pattern' },
    { type: 'paragraph', text: "A principle application argument moves from a general rule to a specific case. The argument establishes (or implies) a principle, shows that a specific situation meets the principle's conditions, and draws a conclusion — usually a judgment about what is right, wrong, justified, or unjustified." },

    { type: 'h3', text: 'The Core Structure' },
    { type: 'table', headers: ['Component', 'Abstract Form', 'Role'], rows: [
      ['Premise 1 (The Rule)', 'General Principle: If conditions C are met, then judgment J applies', 'Establishes the abstract rule'],
      ['Premise 2 (The Case)', 'Specific situation X meets conditions C', 'Shows the rule\'s conditions are satisfied'],
      ['Conclusion (The Verdict)', 'Therefore, judgment J applies to X', 'Applies the rule to the specific case'],
    ]},

    { type: 'h3', text: 'The Process Diagram' },
    { type: 'process', title: 'How to Solve Principle Application Questions', steps: [
      '**Identify the judgment.** What conclusion does the argument reach? Is it an evaluative claim (justified, unjustified, unwise, reckless)?',
      '**Identify the conditions.** What specific facts led to that judgment? What did the relevant parties do?',
      '**Extract the principle.** State the abstract rule that connects the conditions to the judgment. Strip out all specific details.',
      '**Test each answer choice.** Does the answer\'s situation meet the **same conditions** as the stimulus? Does it reach the **same type of judgment**?',
      '**Verify the match.** The correct answer must apply the **exact same principle** — not a related-but-different principle like hypocrisy, retaliation, or consistency.',
    ]},

    { type: 'callout', variant: 'default', title: 'Recognizing These Questions', text: "You can recognize Principle Application questions by their distinctive stems:\n\n• \"Which one of the following **judgments best illustrates the principle** illustrated by the argument above?\"\n• \"Which one of the following **conforms most closely to the principle** underlying the argument?\"\n• \"Which one of the following arguments **most closely parallels the reasoning** in the argument above?\"\n\nThe key signal is language about a **principle**, **judgment**, or **illustration** rather than pure \"reasoning\" or \"logical structure.\"" },

    { type: 'hr' },

    { type: 'h2', text: 'How Principle-Based Arguments Work' },
    { type: 'paragraph', text: "The principle is the invisible rule that makes the argument work. It is often unstated — you must infer it from the relationship between the evidence and the conclusion. Think of the principle as the \"if…then\" rule that the argument relies on." },

    { type: 'h4', text: 'Extracting the Principle: A Worked Example' },
    { type: 'blockquote', text: '"A doctor lies to a patient about a diagnosis in order to spare the patient\'s feelings. This was wrong."' },
    { type: 'paragraph', text: "To extract the principle, ask: **Why** does the argument conclude this was wrong? The lie was well-intentioned, but the conclusion still condemns it. The implicit principle must be:" },
    { type: 'breakdown', labels: { title: 'Layer', text: 'Analysis' }, items: [
      { title: 'Specific Facts', text: 'A doctor lied to a patient. The lie was intended to spare feelings.', badge: 'Content', badgeColor: 'slate' },
      { title: 'Judgment', text: '"This was wrong."', badge: 'Verdict', badgeColor: 'indigo' },
      { title: 'Extracted Principle', text: '**It is wrong to lie, regardless of the liar\'s good intentions.** The principle makes the intention irrelevant — the act of lying itself is what matters.', badge: 'Rule', badgeColor: 'blue' },
    ]},
    { type: 'paragraph', text: "A correct answer would apply this same principle to a different situation — for example, a lawyer who misrepresents evidence to protect a client, judged as wrong despite the protective intention." },

    { type: 'hr' },

    { type: 'h2', text: 'Principle vs. Causal Reasoning' },
    { type: 'paragraph', text: "Principle application arguments are sometimes confused with causal reasoning. Both draw conclusions from evidence, but they operate differently:" },
    { type: 'table', headers: ['Feature', 'Principle Application', 'Causal Reasoning'], rows: [
      ['**What it does**', 'Applies a general rule to a specific case to render a judgment', 'Proposes a cause for an observed effect'],
      ['**Conclusion type**', 'Evaluative: should, ought, justified, wrong, unwise', 'Explanatory: causes, leads to, is the result of'],
      ['**Core question**', '"Is this action right or wrong / justified or unjustified?"', '"Why did this happen?"'],
      ['**The rule**', 'A moral, legal, or practical standard', 'A causal mechanism or law'],
      ['**Example**', '"Selling defective products is wrong; Acme did it; Acme is wrong"', '"Hot weather causes ice cream sales to rise; it was hot; sales rose"'],
      ['**Key signal words**', 'should, justified, unwise, fair, liable, reckless', 'causes, leads to, results from, is explained by'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Quick Test', text: "If the conclusion is a **value judgment** (right/wrong, justified/unjustified, wise/unwise), you are likely dealing with a principle application. If the conclusion is a **causal claim** (X causes Y, X is explained by Y), you are dealing with causal reasoning. This distinction is critical because a principle-based argument cannot parallel a causal argument, even if the topics overlap." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Principle Types' },
    { type: 'paragraph', text: "The LSAT tends to test a small set of recurring principle categories. Learning to recognize these accelerates your ability to extract and match principles:" },

    { type: 'table', headers: ['Principle Type', 'Abstract Rule', 'Example Judgment'], rows: [
      ['**Procedural Misconduct**', 'An authority cannot justifiably punish X if the authority committed wrongdoing in discovering X\'s misdeed', '"The officer trespassed to find the evidence, so cannot punish the landowner"'],
      ['**Hypocrisy (Tu Quoque)**', 'A person cannot credibly criticize an action they themselves commit', '"The senator who pollutes cannot credibly attack the factory for polluting"'],
      ['**Cost-Benefit**', 'An action whose long-term costs outweigh its short-term benefits is unwise', '"The marketing campaign costs more than it generates, so it\'s unwise"'],
      ['**Consistency**', 'Like cases should be treated alike; inconsistent treatment is unjust', '"If employees A and B committed the same offense, punishing only B is unfair"'],
      ['**Proportionality**', 'A response must be proportionate to the offense', '"A minor infraction should not receive a severe punishment"'],
      ['**Qualification**', 'Only those with relevant expertise or credentials should perform certain actions', '"A person without medical training should not prescribe medication"'],
    ]},

    { type: 'callout', variant: 'default', title: 'The Critical Distinction', text: "Wrong answers often present a **related but different principle**. For example, if the stimulus uses a **procedural misconduct** principle (the authority broke rules in discovering the misdeed), wrong answers may present:\n\n• **Hypocrisy** — the authority did the same thing as the wrongdoer (different: timing and connection to discovery)\n• **Retaliation** — the victim struck back (different: the wrongdoer retaliates, not the authority)\n• **Inconsistency** — the authority punished some but not others (different: about equal treatment, not procedural integrity)\n\nYour job is to match the **exact principle**, not just the general category of \"authority doing something wrong.\"" },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply the full method to a principle application question." },


    { type: 'h3', text: 'Step-by-Step Solution' },

    { type: 'process', title: 'Extracting and Matching the Principle', steps: [
      '**Step 1 — Identify the judgment:** "The company cannot justifiably take punitive measures against Ellison." The conclusion is that punishment is not justified.',
      '**Step 2 — Identify the conditions:** (1) Ellison committed a wrongdoing (illegal transactions). (2) The company is the authority with power to punish. (3) The company committed its own wrongdoing (illegal recording) **in the process of discovering** Ellison\'s misdeed.',
      '**Step 3 — Extract the principle:** An authority is not justified in punishing a wrongdoer if the authority committed its own wrongdoing **in the process of discovering** the person\'s misdeed. The key feature is the **procedural connection** — the authority\'s wrongdoing is tied to the act of discovery.',
      '**Step 4 — Test each answer choice against the principle:** Which answer has an authority whose own wrongdoing was committed during the discovery process?',
      '**Step 5 — Verify (D):** The conservation officer (authority) was trespassing (wrongdoing) when she discovered (process of discovery) the illegal traps (Kuttner\'s misdeed). Therefore, the officer cannot justifiably punish Kuttner. The principle matches exactly.',
    ]},

    { type: 'h3', text: 'Wrong-Answer Analysis' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Why It Fails' }, items: [
      { title: '(A) Long steals from Price after discovering Price stole from him', text: 'This illustrates a **retaliation** principle ("two wrongs don\'t make a right"). Long\'s wrongdoing (stealing back) occurred **after** discovering Price\'s theft — it was an act of revenge, not a procedural violation during discovery. Different principle.', badge: 'Retaliation', badgeColor: 'red' },
      { title: '(B) Shakila once did the same thing as her secretary', text: 'This illustrates a **hypocrisy (tu quoque)** principle. Shakila\'s past wrongdoing (receiving cable illegally) is a **separate, unrelated act** that happened at a different time. It was not part of how she discovered her secretary\'s current misdeed. Different principle.', badge: 'Hypocrisy', badgeColor: 'red' },
      { title: '(C) Takashi violated curfew on Monday; reported Sarah on Tuesday', text: 'Two problems: (1) The punishing authority (Sarah\'s parents) is **not the same entity** as the one who committed a wrongdoing (Takashi). The stimulus requires the **authority itself** to have committed the procedural wrong. (2) Takashi\'s curfew violation on Monday was **unrelated** to his act of seeing Sarah at the movies on Tuesday.', badge: 'Wrong Authority', badgeColor: 'red' },
      { title: '(D) Conservation officer was trespassing when she discovered the illegal traps', text: 'The **authority** (officer) committed a **wrongdoing** (trespassing) **in the process of discovering** Kuttner\'s misdeed (illegal traps). Therefore, the officer cannot justifiably punish Kuttner. Every element of the principle is present.', badge: 'Correct', badgeColor: 'green' },
      { title: '(E) Board pardoned others for similar offenses in the past', text: 'This illustrates a **consistency / precedent** principle. The board cannot punish Ramirez because it pardoned others for the same thing — the issue is **inconsistent treatment**, not procedural misconduct during discovery. Different principle entirely.', badge: 'Consistency', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Common Traps in Principle Application Questions' },
    { type: 'paragraph', text: "The wrong answers in principle application questions are designed to present **related but distinct principles**. Here are the most common trap patterns:" },

    { type: 'table', headers: ['Trap Label', 'What It Presents', 'How to Distinguish It'], rows: [
      ['**The Hypocrisy Trap**', 'The authority did the same thing as the wrongdoer (tu quoque)', 'Ask: Did the authority\'s wrongdoing happen during discovery, or is it a separate past act?'],
      ['**The Retaliation Trap**', 'The victim struck back after being wronged', 'Ask: Is this about an authority punishing, or about a victim retaliating?'],
      ['**The Consistency Trap**', 'Others were treated differently for the same offense', 'Ask: Is the issue procedural misconduct, or unequal treatment of similar cases?'],
      ['**The Wrong-Authority Trap**', 'Someone other than the punishing authority committed the wrongdoing', 'Ask: Is the same entity both the wrongdoer and the would-be punisher?'],
      ['**The Unrelated-Wrongdoing Trap**', 'The authority did something wrong, but it was unconnected to the discovery', 'Ask: Was the authority\'s wrongdoing specifically tied to the process of discovering the misdeed?'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Precision Requirement', text: "Principle application questions demand more **precision** than most Parallel Reasoning questions. It is not enough to find an answer where \"someone did something wrong\" — you must match the **specific relationship** between the authority, the wrongdoer, the wrongdoing, and the process of discovery. The more precisely you state the principle, the more easily you can eliminate wrong answers." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• **Principle Application** questions ask you to extract an abstract rule from the stimulus and find an answer that applies the **same rule** to a new situation.\n• The process is: Identify the judgment → Identify the conditions → Extract the principle → Match to answer choices.\n• The principle is the **invisible rule** connecting the evidence to the conclusion. State it as precisely as possible.\n• Don't confuse principle application with causal reasoning: principle arguments yield **value judgments** (justified, wrong, unwise); causal arguments yield **explanatory claims** (causes, results from).\n• Wrong answers present **related but different principles** — hypocrisy, retaliation, consistency, and proportionality are common decoys.\n• The key to accuracy is **precision**: match the exact relationship between the authority, the wrongdoer, and the process that connects them." },
  ]
};
