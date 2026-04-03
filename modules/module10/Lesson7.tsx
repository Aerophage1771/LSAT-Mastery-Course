import { Lesson } from '../../types';

export const Lesson7: Lesson = {
  id: '10-7',
  title: 'Lesson 4: Completing the Conditional Chain',
  content: [
    {
      "type": "h2",
      "text": "Lesson 4: Completing the Conditional Chain"
    },
    {
      "type": "paragraph",
      "text": "**Concept Focus: Membership & Classification**"
    },
    {
      "type": "paragraph",
      "text": "Sufficient Assumption questions often present a **Membership** or **Classification** problem. In these arguments, the author attempts to place a specific person, item, or subgroup into another category based on an incomplete chain of rules."
    },
    {
      "type": "paragraph",
      "text": "**The Anatomy of Membership:**\n1."
    },
    {
      "type": "paragraph",
      "text": "**The Specific Case:** The argument introduces a specific subject. 2."
    },
    {
      "type": "paragraph",
      "text": "**The Classification Chain:** The subject is placed into a general group (Group A), which is then connected to another group (Group B).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Logic:** Subject → Group A → Group B. 3."
    },
    {
      "type": "paragraph",
      "text": "**The Leap:** The conclusion claims the subject belongs to a **Final Group (Group C)** that has not yet been connected to the chain."
    },
    {
      "type": "paragraph",
      "text": "**The Task:** You must find the \"Membership Rule\" that connects the last established group (Group B) to the final group (Group C). Without this rule, the specific subject remains stuck in Group B and cannot cross over to the conclusion."
    },
    {
      "type": "paragraph",
      "text": "**Worked Example**"
    },
    {
      "type": "paragraph",
      "text": "**Stimulus** Marian Anderson, the famous contralto, did not take success for granted. We know this because Anderson had to struggle early in life, and anyone who has to struggle early in life is able to keep a good perspective on the world."
    },
    {
      "type": "paragraph",
      "text": "**Question** The conclusion of the argument follows logically if which one of the following is assumed?"
    },
    {
      "type": "list",
      "items": [
        "(A) Anyone who succeeds takes success for granted. *   (B) Anyone who is able to keep a good perspective on the world does not take success for granted. *   (C) Anyone who is able to keep a good perspective on the world has to struggle early in life. *   (D) Anyone who does not take success for granted has to struggle early in life. *   (E) Anyone who does not take success for granted is able to keep a good perspective on the world."
      ]
    },
    {
      "type": "paragraph",
      "text": "**Step 1: Track the Membership (Identify Premises & Conclusion)**"
    },
    {
      "type": "paragraph",
      "text": "Before mapping the logic, we must separate the evidence from the final claim using indicator words.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Identify the Conclusion:** The phrase \"We know this because\" acts as a pointer. It points *backward* to the statement that is being supported. Therefore, the conclusion is the first sentence: \"Marian Anderson... did not take success for granted.\"   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Logic:** Anderson → ~TSFG *"
    },
    {
      "type": "paragraph",
      "text": "**Identify the Premises:** The text following \"because\" provides the chain of evidence.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 1:** \"Anderson had to struggle early in life.\"       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Logic:** Anderson → SEL (Anderson is a member of the \"Struggle Early\" group).   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Premise 2:** \"Anyone who has to struggle early in life is able to keep a good perspective.\" The word \"Anyone\" indicates a universal rule connecting two groups.       \n*"
    },
    {
      "type": "paragraph",
      "text": "**Logic:** SEL → KGP (All members of \"Struggle Early\" are members of \"Good Perspective\"). *"
    },
    {
      "type": "paragraph",
      "text": "**Current Status:** By chaining the premises (Anderson → SEL → KGP), we know for certain that Anderson is inside the \"Good Perspective\" group."
    },
    {
      "type": "paragraph",
      "text": "**Step 2: Identify the Logical Gap**"
    },
    {
      "type": "paragraph",
      "text": "The argument assumes that membership in the \"Good Perspective\" group automatically grants membership in the \"Not Taking Success for Granted\" group. But that rule hasn't been stated yet.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Current Chain:** Anderson → SEL → KGP *"
    },
    {
      "type": "paragraph",
      "text": "**Desired Destination:** ~TSFG  The gap is the link between the last established group (**KGP**) and the final conclusion group (**~TSFG**)."
    },
    {
      "type": "paragraph",
      "text": "**Step 3: Apply the Assumption Test**"
    },
    {
      "type": "paragraph",
      "text": "We need a universal rule that moves *anyone* from the KGP group to the ~TSFG group.\n*"
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** \"Anyone who Keeps a Good Perspective does not Take Success for Granted.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Logic:** KGP → ~TSFG"
    },
    {
      "type": "paragraph",
      "text": "**Step 4: Evaluate the Answer Choices**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Anyone who succeeds takes success for granted.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** Irrelevant to the specific groups Anderson is in. It does not provide a link between her current classification and the conclusion.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect. *"
    },
    {
      "type": "paragraph",
      "text": "**(B) Anyone who is able to keep a good perspective on the world does not take success for granted.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This connects the groups perfectly. If Anderson is in KGP, and all KGP are in ~TSFG, then Anderson **must** be in ~TSFG.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.** *"
    },
    {
      "type": "paragraph",
      "text": "**(C) Anyone who is able to keep a good perspective on the world has to struggle early in life.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This reverses the flow between groups (KGP → SEL). We already know she is in both; we need to move her *forward* to the new group, not backward.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect. *"
    },
    {
      "type": "paragraph",
      "text": "**(D) Anyone who does not take success for granted has to struggle early in life.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This makes the conclusion a condition for the premise (~TSFG → SEL). This doesn't help prove she *is* in the ~TSFG group.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect. *"
    },
    {
      "type": "paragraph",
      "text": "**(E) Anyone who does not take success for granted is able to keep a good perspective on the world.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is the Reverse (~TSFG → KGP). It says if you are in the conclusion group, you are in the perspective group. We need the opposite rule to prove she gets *into* the conclusion group.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict:** Incorrect."
    },
    {
      "type": "paragraph",
      "text": "**Key Takeaways**\n1."
    },
    {
      "type": "paragraph",
      "text": "**Track the Subject:** In Membership questions, watch where the specific person or item \"lands\" at the end of the premises. 2."
    },
    {
      "type": "paragraph",
      "text": "**Find the Disconnect:** Identify the new group introduced in the conclusion that the subject hasn't been connected to yet. 3."
    },
    {
      "type": "paragraph",
      "text": "**Bridge the Groups:** The correct answer is always a universal rule connecting the group the subject is currently in (from the premises) to the group they need to be in (the conclusion)."
    }
  ],
};
