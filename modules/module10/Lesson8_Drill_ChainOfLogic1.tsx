import { Lesson } from '../../types';

export const Lesson8_Drill_ChainOfLogic1: Lesson = {
  id: "10-8",
  title: "Drill: The Chain of Logic (PT-135-S-2-Q-15)",
  content: [
    { type: 'h2', text: 'The Chain of Logic Pattern' },
    { type: 'paragraph', text: "Chain of Logic sufficient assumptions require you to **complete a broken conditional chain**. The argument presents a series of \"If A then B\" relationships but leaves out one crucial link. Your task is to identify the missing step that allows the chain to flow uninterrupted from the starting condition to the conclusion." },
    { type: 'paragraph', text: "The underlying structure is transitive logic. If you know A → B and B → C, you can conclude A → C. When an SA argument gives you part of a chain and draws a conclusion that requires the full chain, the correct answer supplies the missing link." },
    { type: 'callout', variant: 'tip', title: 'The Diagramming Advantage', text: "Chain of Logic questions are the most diagram-friendly SA pattern. Write out each conditional relationship as you read. Then compare your chain to the conclusion. The gap will be visible as a missing arrow in the chain. On contrapositive chains, remember: if the conclusion uses negated terms, you may need to work with the contrapositive of your premises." },

    { type: 'table', headers: ['Structure', 'Example'], rows: [
      ['Premise 1', 'A → B'],
      ['Premise 2', 'B → C'],
      ['Conclusion', 'A → D'],
      ['**Missing Link**', '**C → D**']
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Practice Question' },

    { type: 'question-card',
      id: 'SA-10-8-001',
      questionType: 'Sufficient Assumption',
      difficulty: 'medium',
      stimulus: "Economist: A country's rapid emergence from an economic recession requires substantial new investment in that country's economy. Since people's confidence in the economic policies of their country is a precondition for any new investment, countries that put collective goals before individuals' goals cannot emerge quickly from an economic recession.",
      question: "Which one of the following, if assumed, enables the economist's conclusion to be properly drawn?",
      options: [
        "(A) No new investment occurs in any country that does not emerge quickly from an economic recession.",
        "(B) Recessions in countries that put collective goals before individuals' goals tend not to affect the country's people's support for their government's policies.",
        "(C) If the people in a country that puts individuals' goals first are willing to make new investments in their country's economy, their country will emerge quickly from an economic recession.",
        "(D) People in countries that put collective goals before individuals' goals lack confidence in the economic policies of their countries. (Correct)",
        "(E) A country's economic policies are the most significant factor determining whether that country's economy will experience a recession."
      ]
    },

    { type: 'hr' },

    { type: 'h3', text: 'Step-by-Step Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument is purely structural. Map each conditional statement clearly." },
    { type: 'breakdown', labels: { title: "Statement", text: "Logic" }, items: [
      { title: "A country's rapid emergence from an economic recession requires substantial new investment in that country's economy.", text: "**Rapid Emergence → New Investment** (RE → NI)\n\nNew investment is a *necessary* condition for rapid emergence." },
      { title: "People's confidence in the economic policies of their country is a precondition for any new investment.", text: "**New Investment → Confidence** (NI → C)\n\n*Combined chain so far:* RE → NI → C\n*Contrapositive:* ~C → ~NI → ~RE" },
      { title: "Countries that put collective goals before individuals' goals cannot emerge quickly from an economic recession.", text: "**Conclusion:** Collective Goals → ~RE\n\nThe conclusion introduces a new subject (\"collective goals\") and links it to the negated end of our chain." }
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The conclusion claims: **Collective Goals → No Rapid Emergence.**\n\nFrom the contrapositive chain, we already know: **~C → ~NI → ~RE.** So if we can establish \"No Confidence,\" we automatically get \"No Rapid Emergence.\"\n\n**The missing link:** We need to connect the new subject in the conclusion (\"Collective Goals\") to the trigger of our existing contrapositive chain (\"No Confidence\")." },
    { type: 'code', text: "Existing chain (contrapositive):  ~C → ~NI → ~RE\nConclusion needs:                 Coll → ~RE\nMissing link:                     Coll → ~C\n\nFull chain with link:             Coll → ~C → ~NI → ~RE  ✓" },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "We need a premise that says:\n\n**\"If a country puts Collective Goals first → The people lack Confidence in economic policies.\"** (Coll → ~C)\n\nThis single link completes the chain and guarantees the conclusion." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: "Option", text: "Analysis" }, items: [
      { title: "(A) No new investment occurs in any country that does not emerge quickly from an economic recession.", text: "This says ~RE → ~NI, which is the **Mistaken Negation** of Premise 1 (RE → NI). It reverses cause and effect and does not connect \"Collective Goals\" to anything in the chain.", badge: "Incorrect", badgeColor: "red" },
      { title: "(B) Recessions in countries that put collective goals before individuals' goals tend not to affect the country's people's support for their government's policies.", text: "\"Support\" ≠ \"Confidence\" (the term in the argument). Additionally, saying recessions *don't* affect support actually undermines the idea that there is a problem. The word \"tend\" also makes this too weak for sufficiency.", badge: "Incorrect", badgeColor: "red" },
      { title: "(C) If the people in a country that puts individuals' goals first are willing to make new investments in their country's economy, their country will emerge quickly from an economic recession.", text: "This talks about countries that put *individuals'* goals first — the opposite group. What happens to Group A tells us nothing about Group B unless we know they are logically complementary, which we do not.", badge: "Incorrect", badgeColor: "red" },
      { title: "(D) People in countries that put collective goals before individuals' goals lack confidence in the economic policies of their countries.", text: "This is the exact bridge we predicted: **Coll → ~C.**\n\n**Full chain:** Coll → ~C → ~NI → ~RE.\n\nCountries that put collective goals first → people lack confidence → no new investment → no rapid emergence. The conclusion follows with certainty.", badge: "Correct", badgeColor: "green" },
      { title: "(E) A country's economic policies are the most significant factor determining whether that country's economy will experience a recession.", text: "The argument is about *emerging from* a recession, not entering one. Causes of the recession are irrelevant to the recovery logic.", badge: "Incorrect", badgeColor: "red" }
    ]},

    { type: 'callout', title: "Key Takeaway", variant: "summary", text: "**The Chain of Logic pattern** has a signature structure: premises give you part of a conditional chain, and the conclusion requires the full chain. Diagram every conditional as you read — the missing arrow is your answer.\n\n**The contrapositive shortcut:** When the conclusion uses negated terms (~RE), work with the contrapositive of your premises. The missing link often connects a new subject to the negated end of the chain.\n\n**Formula:** If the premises give you A → B → C and the conclusion is X → ~A, then the missing link is X → ~C (which chains through the contrapositive ~C → ~B → ~A)." }
  ]
};
