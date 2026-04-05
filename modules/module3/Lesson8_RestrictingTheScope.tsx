import { Lesson } from '../../types';

export const Lesson8_RestrictingTheScope: Lesson = {
  id: "3-8",
  title: "Restricting the Scope",
  content: [
    { type: 'h3', text: "Restricting the Scope" },
    { type: 'paragraph', text: "Our goal here is to identify the **argumentative strategy** used to support the conclusion. This is a difficult question because the answer choices use very abstract, academic vocabulary, but the underlying move is a clever defensive strategy called **Restricting the Scope**." },
    { type: 'paragraph', text: "Here is our plan of attack:" },
    { type: 'paragraph', text: "**Break down the argument into its parts → Summarize the original argument → Abstract that into a general method → Look for that specific answer choice → Confirm by selecting or removing answers based on our Fact Test.**" },
    { type: 'paragraph', text: "Let’s apply this method to the following question." },
    { type: 'h4', text: "Question ID: PT-104-S-4-Q-21" },
    { type: 'h4', text: "Stimulus" },
    { type: 'blockquote', text: "Words like “employee,” “payee,” and “detainee” support the generalization, crudely stated, that words with the ending -ee designate the person affected in the specified way by an action performed by someone else. The word “absentee” seems to be a direct counterexample: it ends in -ee, yet, if it makes sense here to speak of an action at all—that of absenting oneself, perhaps—the word can refer to the person who actually performs that action. Clearly, however, putting forward the following resolves the impasse: if a word with the ending -ee refers to one party in a two-party transaction, it refers to the party at which the other party’s action is directed." },
    { type: 'h4', text: "Question" },
    { type: 'paragraph', text: "The argument does which one of the following in dealing with the counterexample it offers?" },
    { type: 'h4', text: "Answer Choices" },
    { type: 'options', items: [
      "(A) provides additional support for the original generalization in part by showing that the supposed force of the counterexample derives from a misanalysis of that example",
      "(B) dismisses the counterexample on the grounds that its force, compared to the weight of the supporting evidence, is insignificant",
      "(C) concedes that the proposed counterexample is an exception to the generalization but maintains the generalization on the grounds that all generalizations have exceptions",
      "(D) narrows the scope of the generalization at issue in such a way that the putative counterexample is no longer relevant",
      "(E) shows how replacing the notion of being affected in the specified way by an action with that of having someone’s action directed at oneself reveals the counterexample to be spurious"
    ] },
    { type: 'hr' },
    { type: 'h3', text: "Step 1: Break Down the Argument" },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the author handles a logical problem." },
    { type: 'list', items: [
      "**\"Words like “employee,” “payee,” and “detainee” support the generalization...\"**\n*   **Reaction:** The author is setting up a **General Rule**. The idea is that \"-ee\" words refer to the person who receives an action (like a \"detainee\" is someone who is detained).",
      "**\"The word “absentee” seems to be a direct counterexample...\"**\n*   **Reaction:** Here is a significant hurdle for the author. An \"absentee\" is the one *doing* the action of being absent. This word breaks the rule because the person is the performer, not the receiver.",
      "**\"Clearly, however, putting forward the following resolves the impasse...\"**\n*   **Reaction:** This is the conclusion. The author \"resolves\" the problem by rewriting the rule. The **New Rule** only applies to \"two-party transactions.\" Since being an \"absentee\" is just one person being gone (a one-party situation), the rule no longer applies to it. The author has saved the generalization by making it smaller."
    ] },
    { type: 'h3', text: "Step 2: Summarize the Logic (Concrete)" },
    { type: 'paragraph', text: "The author proposes a rule about \"-ee\" words being passive, then identifies a word (\"absentee\") that breaks that rule. To save the rule, the author adds a specific requirement: the rule only applies to words involving two people in a transaction. Because \"absentee\" doesn't involve two people, it no longer counts as a violation of the rule." },
    { type: 'h3', text: "Step 3: Abstract the Logic (The Method)" },
    { type: 'paragraph', text: "What is the abstract structure here?\n\nThe author identifies a **Generalization** that is threatened by a **Counterexample**. To protect the rule, the author **Narrows the Scope** of that generalization. By shrinking the rule's definition, the author makes the counterexample irrelevant." },
    { type: 'h3', text: "Step 4: Apply the Fact Test" },
    { type: 'paragraph', text: "Now we evaluate the answer choices by breaking each one down into individual components." },
    { type: 'breakdown', labels: { title: 'Option Evaluation', text: 'Validation' }, items: [
      {
        title: "(A) provides additional support...",
        text: "**Component 1:** Does the author support the *original* generalization?\n**Validation:** No. The author admits the original version had an \"impasse\" and needed to be modified.\n**Component 2:** Does the author say \"absentee\" was misanalyzed?\n**Validation:** No. The author agrees that an absentee is someone who performs an action. The author changes the rule, not the meaning of the word.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(B) dismisses the counterexample...",
        text: "**Component 1:** Does the author dismiss the counterexample?\n**Validation:** No. The author takes it seriously enough to offer a resolution.\n**Component 2:** Does the author claim it is \"insignificant\"?\n**Validation:** No. The author calls it a direct \"impasse.\"",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(C) concedes that the proposed counterexample...",
        text: "**Component 1:** Does the author argue that \"all generalizations have exceptions\"?\n**Validation:** No. The author doesn't try to excuse the mistake; the author tries to *fix* the mistake by redefining the rule.",
        badge: "Incorrect",
        badgeColor: "red"
      },
      {
        title: "(D) narrows the scope of the generalization...",
        text: "**Component 1:** Does the author \"narrow the scope\" (make the rule apply to fewer things)?\n**Validation:** Yes. He went from *all* \"-ee\" words to only those in *two-party transactions*.\n**Component 2:** Does this make the \"putative\" (supposed) counterexample no longer relevant?\n**Validation:** Yes. \"Absentee\" is no longer relevant because it isn't a two-party transaction, so the new rule simply doesn't cover it.",
        badge: "Correct",
        badgeColor: "green"
      },
      {
        title: "(E) shows how replacing the notion of being affected...",
        text: "**Component 1:** Does the author replace those two notions?\n**Validation:** No. Those two phrases describe the same concept. The real change was adding the \"two-party\" requirement.\n**Component 2:** Does the author say the counterexample is \"spurious\" (fake or false)?\n**Validation:** No. The author accepts \"absentee\" as a real, correctly understood word.",
        badge: "Incorrect",
        badgeColor: "red"
      }
    ] },
    { type: 'hr' },
    { type: 'h3', text: "Summary" },
    { type: 'paragraph', text: "As we just saw, this 4-step plan allowed us to cut through the dense academic jargon of the answer choices. We figured out each of the parts of the stimulus, converted those to a concrete description of how the author saved their rule, and successfully translated that into an abstraction. We then used the Fact Test to remove every wrong answer for a specific reason." },
    { type: 'paragraph', text: "Next, we’ll look at another very common way arguments are built: **Offering an Alternative Explanation via a Third Factor**." }
  ]
};
