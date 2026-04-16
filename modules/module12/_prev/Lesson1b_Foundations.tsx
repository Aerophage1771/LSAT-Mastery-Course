import { Lesson } from '../../types';

export const Lesson1b_Foundations: Lesson = {
  id: '12-1b',
  title: 'Foundations',
  questionPolicy: 'none',
  content: [
    { type: 'h2', text: 'What Is a Principle?' },
    {
      type: 'paragraph',
      text: 'A **principle** is an abstract, general rule that applies across situations — not just to the specific case in the argument. It strips away the particular details ("the mayor," "the tax," "the river") and replaces them with general categories ("a public official," "a policy," "an environmental resource"). Principles are universal: they apply to any case that fits their conditions, not just the one in the stimulus.',
    },
    { type: 'paragraph', text: 'On the LSAT, principles typically take a conditional or quasi-conditional form:' },
    {
      type: 'list',
      items: [
        '**The Condition ("If" Part):** Describes a general type of situation, evidence, or characteristic. This should match the *evidence* or *circumstances* in the stimulus.',
        '**The Result ("Then" Part):** States a general conclusion, judgment, or action that follows. This should match the *type of conclusion* the author draws.',
      ],
    },
    {
      type: 'paragraph',
      text: '**Example:**\n\n*Argument:* "The proposed new factory will pollute the river. Therefore, the factory should not be built."\n\n*Blueprint:* A specific action (building the factory) has a specific negative consequence (pollution). The author concludes the action should not be taken.\n\n*Principle:* "Any project that will cause significant environmental damage should not be undertaken."\n\nNotice how the principle replaces "factory" with "project," "pollute the river" with "cause significant environmental damage," and "should not be built" with "should not be undertaken." The principle is broader than the argument — it covers *any* project with *any* environmental harm, not just this factory and this river.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Principle: Strengthen vs. Regular Strengthen' },
    {
      type: 'paragraph',
      text: 'Both question types ask you to support the argument, but the *type* of support they require is fundamentally different. Confusing them is one of the most common mistakes students make in the Principle family.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Regular Strengthen', 'Principle: Strengthen'],
      rows: [
        [
          'What you add',
          'A **new fact** — specific, concrete evidence',
          'A **general rule** — abstract, universal principle',
        ],
        ['Scope', 'Narrow — applies only to this argument', 'Broad — applies to this argument and many others like it'],
        [
          'Language clue',
          '"most strengthens" / "most supports"',
          '"principle" / "generalization" / "justify" / "conforms to"',
        ],
        [
          'Answer format',
          'A factual claim about the specific situation',
          'A conditional or universal rule (often "if...then" or "any X should Y")',
        ],
        [
          'Example answer',
          '"The factory\'s pollution levels would exceed federal safety thresholds."',
          '"Any project that causes significant environmental damage should not be undertaken."',
        ],
        [
          'How it works',
          'Adds evidence that makes the conclusion more likely',
          'Provides the logical backbone that connects the evidence to the conclusion',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: a **Regular Strengthen** answer is like presenting a new piece of evidence at trial. A **Principle: Strengthen** answer is like citing a law from the statute book. The evidence makes the case *stronger*; the law makes the verdict *justified*.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Critical Distinction',
      text: 'On Regular Strengthen, you are looking for the most helpful *fact*. On Principle: Strengthen, you are looking for the most applicable *rule*. If you find yourself gravitating toward specific, concrete details in the answer choices of a Principle: Strengthen question, you are solving the wrong question type.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Principle: Strengthen vs. Sufficient Assumption' },
    {
      type: 'paragraph',
      text: 'These two question types are closely related — both ask you to add a new premise that supports the argument. However, they differ in the *nature* and *precision* of the premise they require.',
    },
    {
      type: 'table',
      headers: ['Feature', 'Principle: Strengthen', 'Sufficient Assumption'],
      rows: [
        [
          'What you add',
          'A **broad, general rule** that makes the reasoning more defensible',
          'The **exact missing logical piece** that makes the conclusion 100% certain',
        ],
        [
          'Degree of support',
          'Significant — the principle makes the conclusion much more reasonable, but need not guarantee it',
          'Complete — the conclusion must be logically airtight once you add the answer',
        ],
        [
          'Answer scope',
          'Deliberately **broader** than the argument — applies to many similar cases',
          "Precisely **tailored** to the argument's specific gap — often narrow and technical",
        ],
        [
          'Stem language',
          '"principle" / "justify" / "conforms to"',
          '"follows logically if assumed" / "enables the conclusion to be properly drawn"',
        ],
        [
          'Key test',
          'Does the principle make the reasoning more defensible?',
          'Do the premises + answer = conclusion is 100% guaranteed?',
        ],
        [
          'Common trap',
          'Picking an answer that is too narrow or specific',
          'Picking an answer that is necessary but not strong enough to guarantee the conclusion',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Think of it this way: a **Sufficient Assumption** is a custom-fitted key that opens exactly one lock. A **Principle: Strengthen** answer is a master key - it is broader and less precise, but it works on this lock and many others. The SA answer is *exactly* what the argument needs; the Principle answer is a *general rule* that *covers* what the argument needs.',
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'When They Overlap',
      text: 'Some Principle: Strengthen questions live in the **pseudo-sufficient** zone: the principle, once applied, comes very close to completing the reasoning. Other questions merely make the conclusion much more defensible. The distinguishing factor is still the task. If the stem asks for a **principle** that helps justify or that the argument conforms to, stay in Module 13 mode: broad rule + complete the application. If the stem asks what, **if assumed**, makes the conclusion **follow logically**, move to Module 11 mode: exact guarantee.',
    },

    {
      type: 'table',
      headers: ['Question Type', 'What You Are Given', 'What You Must Supply', 'How Strong the Bridge Must Be'],
      rows: [
        [
          '**Sufficient Assumption**',
          'Specific premises and conclusion',
          'The exact missing premise',
          'Strong enough that the conclusion is guaranteed',
        ],
        [
          '**Principle: Strengthen**',
          'Specific premises and conclusion',
          'A broad governing rule, then its application to this case',
          'Strong enough to justify or strongly support the reasoning, but not custom-built by default',
        ],
        [
          '**Principle-Apply**',
          'The governing rule itself',
          'A matching case',
          'No new bridge invention; you test whether the case facts already satisfy the trigger',
        ],
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Common Principle Types' },
    {
      type: 'paragraph',
      text: 'While every Principle: Strengthen argument is unique, the types of principles tested fall into a small number of recurring categories. Recognizing these patterns gives you a head start on identifying the gap and predicting the correct answer.',
    },
    {
      type: 'table',
      headers: ['Principle Type', 'What It Does', 'Example'],
      rows: [
        [
          '**Normative Bridge**',
          'Connects a factual observation ("is") to a moral or value judgment ("ought"). Bridges the gap from descriptive evidence to a prescriptive conclusion.',
          '"If an action causes harm, then that action is morally wrong."',
        ],
        [
          '**Efficiency Principle**',
          'Justifies choosing a means or strategy based on its effectiveness at achieving a goal. Bridges the gap from a practical benefit to a recommended course of action.',
          '"When multiple strategies exist, one should choose the one most likely to achieve the desired outcome."',
        ],
        [
          '**Accountability Principle**',
          "Assigns responsibility or blame based on a role, relationship, or duty. Bridges the gap from a person's position to their obligation.",
          '"Those who have the authority to prevent harm have an obligation to do so."',
        ],
        [
          '**Lesser-of-Two-Evils**',
          'Justifies choosing a bad option over a worse one. Bridges the gap from a comparative evaluation to a conclusion about the best course of action.',
          '"When all available options have negative consequences, one should choose the option with the least harm."',
        ],
        [
          '**Definitional Principle**',
          'Establishes that something qualifies (or fails to qualify) as a member of a category based on its characteristics. Bridges the gap from features to classification.',
          '"Any action taken under duress does not constitute genuine consent."',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'Each of these principle types is explored through worked drills in the lessons that follow. For now, recognize that the correct answer to a Principle: Strengthen question will almost always be one of these broad patterns — a general rule connecting the *type* of evidence to the *type* of conclusion.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Principle: Strengthen question." },
    { type: 'paragraph', text: 'Consider this illustrative argument:' },
    {
      type: 'blockquote',
      text: '"A city council member argues that the city should not fund the proposed downtown mural project. She points out that the project was designed by an artist who has no connection to the community and that the mural\'s imagery does not reflect local history or culture. Public art, she contends, should serve the community in which it is placed."',
    },
    {
      type: 'paragraph',
      text: 'This is a useful Principle: Strengthen example because the evidence already points toward a value judgment, but the argument still needs a general funding rule to turn that value into a conclusion.',
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    {
      type: 'paragraph',
      text: "**Conclusion:** The city should not fund the proposed mural project.\n\n**Premises:**\n1. The artist has no connection to the community.\n2. The mural's imagery does not reflect local history or culture.\n3. Public art should serve the community in which it is placed.\n\nThe council member's reasoning: because the mural fails to reflect the community (evidence), it should not be funded (conclusion).",
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'The premises establish that the mural does not reflect local identity. The conclusion is that the mural should not be *funded*. The logical leap is from **"does not reflect the community"** to **"should not receive public money."** The argument assumes a principle that connects community relevance to funding worthiness. What general rule would make this leap valid?',
    },

    { type: 'h4', text: 'Step 3: Pre-phrase the Principle' },
    {
      type: 'paragraph',
      text: '"Public art should only be funded if it reflects the community it serves." This is the general rule that, if valid, would make the council member\'s conclusion follow from her evidence.',
    },

    { type: 'h4', text: 'Step 4: Complete the Application' },
    {
      type: 'table',
      headers: ['Part', 'How It Works Here'],
      rows: [
        ['**Trigger**', 'Public art does **not** reflect the community it is supposed to serve.'],
        ['**Case Facts**', 'The artist has no connection to the community, and the imagery does not reflect local history or culture.'],
        ['**Bridge**', 'Those facts satisfy the trigger because they show the mural fails the community-reflection standard.'],
        ['**Verdict**', 'Public funding is not justified for the mural project.'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The needed principle is straightforward: public art that receives city funding should reflect the identity of the community it serves. Once you complete the application, the council member\'s facts clearly satisfy that trigger, so the verdict follows. That is the Module 13 move: identify the broad rule, then show exactly how the current case activates it. Principles about voting, artist residency, or general artistic value all drift away from the actual leap in the argument.',
    },

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1. The correct answer is always more abstract and general than the argument itself.** Principle: Strengthen answers replace specific details with broad categories. If the answer uses the same proper nouns or specific facts as the stimulus, it is almost certainly wrong.\n\n**2. This module owns the pseudo-sufficient zone.** Some Principle: Strengthen questions feel almost airtight once the right rule is applied, but the answer is still a broad governing standard rather than a custom one-off bridge.\n\n**3. Complete the application after you pre-phrase.** Identify the trigger in the rule, the case facts in the stimulus, the bridge between them, and the verdict the rule produces. This keeps Module 13 distinct from both Module 11 and Module 14.\n\n**4. Distinguish Principle: Strengthen from Regular Strengthen and Sufficient Assumption.** Regular Strengthen adds a *fact*. Principle: Strengthen adds a *rule*. Sufficient Assumption adds the *exact missing piece*. The stem language will always tell you which type you are dealing with.\n\n**5. Know the five common principle types.** Normative Bridge, Efficiency Principle, Accountability, Lesser-of-Two-Evils, and Definitional Principle cover the vast majority of Principle: Strengthen questions. Recognizing the pattern accelerates your gap identification and pre-phrasing.\n\n**6. The principle must bridge the evidence to the conclusion.** A principle that merely restates a premise or addresses a tangential concern does not justify the reasoning. The correct principle always connects *what the author knows* to *what the author concludes*.',
    },
  ],
  alternates: {
    glance: {
      label: 'At a Glance',
      content: [
        { type: 'h3', text: 'Principle: Strengthen Foundations — At a Glance' },
        {
          type: 'table',
          headers: ['Concept', 'Key Distinction'],
          rows: [
            ['**Principle: Strengthen vs Regular Strengthen**', 'Regular Strengthen adds a *fact*; Principle: Strengthen adds a *rule*. The answer to P-Strengthen is always more abstract than the argument.'],
            ['**Principle: Strengthen vs Sufficient Assumption**', 'SA adds the *exact* missing piece to guarantee the conclusion. P-Strengthen adds a *broad governing rule* that justifies the reasoning without custom-fitting every detail.'],
            ['**The Negation Test Does Not Apply**', 'The negation test is for Necessary Assumption. Here, you verify by plugging the stimulus facts into the general rule and checking whether the conclusion follows.'],
          ],
        },
        { type: 'h4', text: 'Five Principle Types' },
        {
          type: 'table',
          headers: ['Type', 'Core Gap', 'Template'],
          rows: [
            ['**Normative Bridge**', 'Fact -> Value judgment', '"If [fact type], then [value judgment] is warranted."'],
            ['**Efficiency**', 'Means -> Recommended action', '"Choose the option most likely to achieve the desired outcome."'],
            ['**Accountability**', 'Role -> Duty', '"Anyone in [role] who fails [duty] is blameworthy."'],
            ['**Lesser of Two Evils**', 'Concession -> Best-available choice', '"Better to err on the side of [A] than [B]."'],
            ['**Definitional**', 'Features -> Category membership', '"Anything with [features] qualifies as [category]."'],
          ],
        },
        {
          type: 'blockquote',
          text: '"A city council member argues the city should not fund a mural because the artist has no community ties and the imagery does not reflect local culture."',
        },
        {
          type: 'paragraph',
          text: 'The gap is from "does not reflect the community" to "should not be funded." The principle needed: "Public art should only receive funding if it reflects the community it serves." This is a Normative Bridge — connecting a factual observation to a funding judgment.',
        },
        {
          type: 'callout',
          variant: 'summary',
          title: 'Three Things to Remember',
          text: '1. The correct answer is always more abstract and general than the argument itself.\n2. Five principle types cover the vast majority of questions — learn to recognize the gap pattern.\n3. Complete the application: identify the trigger, case facts, bridge, and verdict before checking answer choices.',
        },
      ],
    },
  },
};
