import { Lesson } from '../../types';

export const Lesson5_Drill_BinaryAssumption: Lesson = {
  id: "10-5",
  title: "Drill: The Binary Assumption (PT-123-S-2-Q-23)",
  content: [
    { type: 'h2', text: 'The Binary Assumption' },
    { type: 'paragraph', text: "The Binary Assumption pattern appears when an argument establishes that something is \"not X\" and then concludes it must be \"Y.\" The logical leap is the assumption that X and Y are the only two possibilities — that there is no third option, no middle ground, no gray area. The argument treats a spectrum as if it were a binary switch." },
    { type: 'paragraph', text: "This pattern is especially common in arguments involving definitions, moral categories, or classifications. The premises define what makes something \"X\" and what makes something \"Y,\" and then the argument identifies a case that clearly falls outside \"X.\" The conclusion claims this case must therefore be \"Y\" — but this only follows if X and Y are exhaustive categories that together cover every possibility." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Spot a Binary Gap' },
    { type: 'paragraph', text: "Use this checklist:" },
    { type: 'list', items: [
      '**Look for two defined categories.** The premises will define or describe Category X and Category Y — often moral terms (right/wrong), quality judgments (good/bad), or classifications (fiction/nonfiction).',
      '**Look for a negation in the reasoning.** The argument will show that the item in question is **not** in one category ("not X").',
      '**Look for a positive conclusion.** The conclusion will assert the item **is** in the other category ("must be Y").',
      '**Ask: is there a third option?** If you can imagine a state that is neither X nor Y (e.g., "morally neutral," "average," "unclassified"), the argument has a binary gap.',
    ]},
    { type: 'table', headers: ['Premise Structure', 'Conclusion', 'Gap (Third Option?)'], rows: [
      ['Defines "wrong" + shows item is not wrong', 'Item must be "right"', 'Could it be morally neutral?'],
      ['Defines "failure" + shows item is not a failure', 'Item is a "success"', 'Could it be neither success nor failure?'],
      ['Defines "fiction" + shows item is not fiction', 'Item is "nonfiction"', 'Could it be in a hybrid genre?'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Hidden Third Category', text: "The binary gap exploits a common cognitive shortcut. In everyday language, we often treat pairs like \"right/wrong\" or \"success/failure\" as if they are the only two options. But logically, most categories are not true binaries — there can be a neutral zone, a middle ground, or a third classification. The sufficient assumption eliminates this middle ground by declaring that the two stated categories are exhaustive: if something is not one, it *must* be the other." },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: The Binary Assumption (PT-123-S-2-Q-23)' },

    { type: 'h4', text: 'The Problem' },


    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "This argument is dense with definitions. Let's deconstruct each statement into formal logic to see the structure clearly." },
    { type: 'breakdown', labels: { title: 'Statement', text: 'Analysis' }, items: [
      { title: '"An action is morally right if it would be reasonably expected to increase the aggregate well-being of the people affected by it."', text: "This defines one path to being \"morally right\" — but it is a **one-way** definition.\n\n**Logic:** Increases Well-Being → Morally Right (IWB → MR)\n\n*Critical nuance:* \"If\" establishes a sufficient condition. Increasing well-being is *sufficient* for being right, but it may not be *necessary*. There could be other ways to be morally right that don't involve increasing well-being. The arrow only goes one direction." },
      { title: '"An action is morally wrong if and only if it would be reasonably expected to reduce the aggregate well-being of the people affected by it."', text: "This is a **two-way** definition of \"morally wrong\" — the phrase \"if and only if\" creates a biconditional.\n\n**Logic:** Morally Wrong ↔ Reduces Well-Being\n\nThis gives us two usable rules:\n• MW → RWB (If wrong, then reduces well-being)\n• RWB → MW (If reduces well-being, then wrong)\n\nAnd by contrapositive:\n• ~RWB → ~MW (If does NOT reduce well-being, then NOT wrong)" },
      { title: '"Thus, actions that would be reasonably expected to leave unchanged the aggregate well-being of the people affected by them are also right."', text: "This is the conclusion. It introduces a third category of action: those with **unchanged well-being** (neutral actions). The philosopher concludes that these neutral actions are also \"morally right.\"\n\n**Logic:** Unchanged Well-Being → Morally Right (UWB → MR)" },
    ]},

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "**Let's trace the logic for a \"neutral\" action (one with unchanged well-being):**" },
    { type: 'process', title: 'Logical Chain', steps: [
      'A neutral action does NOT reduce well-being (by definition — unchanged ≠ reduced).',
      'From the biconditional: if an action does not reduce well-being → it is NOT morally wrong. (~RWB → ~MW)',
      'So we can prove: **Unchanged Well-Being → Not Morally Wrong.**',
      'But the conclusion needs: **Unchanged Well-Being → Morally Right.**',
      '**The gap: Not Morally Wrong ≠ Morally Right** (unless we assume it does).',
    ]},
    { type: 'paragraph', text: "The argument gets us to \"not wrong\" but then jumps to \"right.\" The hidden assumption is that these are the only two categories — that there is no third option like \"morally neutral\" or \"morally indeterminate.\" If a third category exists, an action could be \"not wrong\" without being \"right,\" and the conclusion would fail." },
    { type: 'callout', variant: 'tip', title: 'Diagramming Reveals the Gap', text: "Notice how diagramming the conditionals made the gap crystal clear. We can trace the chain from UWB → ~RWB → ~MW, but there is no arrow from ~MW → MR. The correct answer must supply this missing arrow to complete the chain all the way to MR." },

    { type: 'h4', text: 'Step 3: Prephrase the Bridge' },
    { type: 'paragraph', text: "To guarantee the conclusion, we need a rule that eliminates the possibility of a \"morally neutral\" middle ground. We need:" },
    { type: 'paragraph', text: "***\"To make the conclusion guaranteed, I need: If an action is not morally wrong, then it is morally right. (~MW → MR)\"***" },
    { type: 'paragraph', text: "This creates a strict binary: every action is either right or wrong, with no third option. Once we have this rule, the chain becomes: UWB → ~RWB → ~MW → MR. The conclusion follows with certainty." },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    { type: 'paragraph', text: "We are looking for the answer that establishes the strict \"Right vs. Wrong\" binary — the rule that ~MW → MR." },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      { title: '(A) Only wrong actions would be reasonably expected to reduce the aggregate well-being of the people affected by them.', text: "\"Only wrong actions reduce well-being\" translates to: RWB → MW (If reduces well-being, then wrong). But we already have this — it is one half of the biconditional from Premise 2. This answer **restates a premise** rather than bridging the gap. It tells us nothing about the relationship between \"not wrong\" and \"right.\" **Redundant — adds nothing new.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) No action is both right and wrong.', text: "This tells us the categories don't *overlap* — you can't be in both at once. But non-overlapping categories can still leave gaps. Imagine three buckets: Right, Wrong, and Neutral. \"No action is both right and wrong\" would be true, but actions could still fall into the Neutral bucket. This does not eliminate the third option. **Prevents overlap but doesn't prevent gaps.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(C) Any action that is not morally wrong is morally right.', text: "This is the exact binary assumption we predicted: **~MW → MR.** It declares that there is no middle ground — if an action is not wrong, it must be right. No third category is possible.\n\n**Logic Check (complete chain):**\n1. A neutral action does not reduce well-being. (Definition)\n2. Does not reduce well-being → Not morally wrong. (Contrapositive of Premise 2)\n3. Not morally wrong → Morally right. (Answer C)\n4. **Therefore: neutral action → Morally right. ✓**\n\nThe conclusion is now 100% guaranteed.", badge: 'Correct', badgeColor: 'green' },
      { title: '(D) There are actions that would be reasonably expected to leave unchanged the aggregate well-being of the people affected by them.', text: "This confirms that the category of \"neutral actions\" discussed in the conclusion actually *exists* — that there are real-world examples of such actions. But proving that a category exists tells us nothing about the *moral status* of actions in that category. We need to know whether neutral actions are right, not whether they exist. **Existence ≠ classification.**", badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) Only right actions have good consequences.', text: "The argument is precisely defined in terms of increasing, reducing, or leaving unchanged \"aggregate well-being.\" The broader concept of \"good consequences\" is vague and outside the philosopher's carefully constructed definitional framework. This answer shifts to a different conceptual vocabulary. **Out of scope.**", badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'The Binary Structure Visualized' },
    { type: 'paragraph', text: "Here is the logical landscape before and after the sufficient assumption:" },
    { type: 'table', headers: ['', 'Without Answer (C)', 'With Answer (C)'], rows: [
      ['Increases well-being', 'Morally Right (proven)', 'Morally Right (proven)'],
      ['Reduces well-being', 'Morally Wrong (proven)', 'Morally Wrong (proven)'],
      ['Unchanged well-being', 'Not Wrong (proven) — but **status unknown**', 'Not Wrong → **Morally Right** ✓'],
    ]},
    { type: 'paragraph', text: "Without Answer (C), neutral actions land in a logical limbo — proven to be \"not wrong\" but not proven to be \"right.\" Answer (C) eliminates this limbo by collapsing the moral universe into a strict binary." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "When an argument defines categories like \"right\" and \"wrong\" (or \"success\" and \"failure,\" or any two opposing labels) and then reaches a conclusion about a case that falls outside one category, **be alert for the hidden third option**. The argument assumes a strict binary, but logically there may be a middle ground — a neutral zone between the two defined categories.\n\nThe correct sufficient assumption will **eliminate the middle ground** by declaring: \"If it's not one, it must be the other.\" This forces the binary and closes the gap.\n\n**Diagramming is especially valuable** on Binary Assumption questions because it lets you trace the logical chain from premises to conclusion and pinpoint exactly where the arrow is missing. If you can get to ~MW but need MR, the missing arrow is ~MW → MR." },
  ]
};
