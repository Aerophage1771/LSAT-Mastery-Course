import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: '17-3',
  title: 'Section 3: Must Be True — A Field Guide to Correct Answer Types',
  content: [
    {
      "type": "h2",
      "text": "Section 3: Must Be True — A Field Guide to Correct Answer Types"
    },
    {
      "type": "paragraph",
      "text": "The correct answer to a Must Be True question is a logically necessary consequence of the information in the stimulus. While the topics vary, the logical patterns of these correct answers are predictable. This guide will help you recognize the five most common types of valid deductions."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "1. The Chain Deduction"
    },
    {
      "type": "paragraph",
      "text": "**Description:** This is a very common answer type for questions built on conditional logic. The correct answer is a new \"if-then\" statement created by linking two or more conditional rules from the stimulus. This pattern follows the transitive property of logic: if A leads to B, and B leads to C, then A must lead to C."
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:**"
    },
    {
      "type": "list",
      "items": [
        "**The Stimulus:** Will contain multiple conditional statements, often using keywords like `if`, `all`, `any`, `no`, `only if`, or `unless`.",
        "**The Task:** Look for a common term that serves as the necessary condition of one rule and the sufficient condition of another. You may need to use the contrapositive of a rule to make the connection.",
        "**The Correct Answer:** Will be a new conditional statement that connects the beginning of the logical chain to its end."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "2. The Quantifier Combination"
    },
    {
      "type": "paragraph",
      "text": "**Description:** This pattern combines a statement about a particular group (\"some,\" \"most\") with a statement about a universal group (\"all,\" \"none\"). The universal rule is applied to the specific members of the particular group to prove a new \"some\" or \"most\" statement."
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:**"
    },
    {
      "type": "list",
      "items": [
        "**The Stimulus:** Will contain a mix of quantifier keywords, such as `some`, `most`, `many`, `few`, `all`, `every`, `no`, or `none`.",
        "**The Task:** Identify the group guaranteed to exist by the \"some\" or \"most\" statement. Then, apply the \"all\" or \"none\" rule to every member of that group.",
        "**The Correct Answer:** Will be a new \"some\" or \"most\" statement that logically follows from the combination."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "3. The Inevitable Consequence"
    },
    {
      "type": "paragraph",
      "text": "**Description:** This answer type is common in stimuli that are more descriptive, causal, or definitional. The correct answer is not the result of formal diagramming but is rather the one unavoidable implication of the scenario described. It is the statement that *must* be true for the facts in the stimulus to coexist without contradiction."
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:**"
    },
    {
      "type": "list",
      "items": [
        "**The Stimulus:** Often presents a scientific explanation, a timeline of events, a paradox, or a contrast between two things.",
        "**The Task:** Understand the relationships and constraints described. Ask yourself, \"Given these facts, what is the one outcome or condition that is absolutely unavoidable?\"",
        "**The Correct Answer:** Will state this unavoidable outcome."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "4. The Direct Restatement"
    },
    {
      "type": "paragraph",
      "text": "**Description:** This is the simplest deduction type. The correct answer is a logically equivalent rephrasing of a single statement from the stimulus. It does not require combining multiple premises. The two most common forms are a direct paraphrase or a contrapositive."
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:**"
    },
    {
      "type": "list",
      "items": [
        "**The Stimulus:** Contains a clear rule or fact.",
        "**The Task:** Check if any answer choice is simply another way of saying one of the stimulus sentences. For conditional rules, always check if an answer choice is the contrapositive.",
        "**The Correct Answer:** Will match a single premise in logical meaning, even if the wording is different."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "5. The Numerical Reconciliation"
    },
    {
      "type": "paragraph",
      "text": "**Description:** The correct answer is the logical result of reconciling numerical, proportional, or statistical information. This often involves resolving an apparent paradox or applying a basic mathematical concept (like averages or inequalities)."
    },
    {
      "type": "paragraph",
      "text": "**How to Spot It:**"
    },
    {
      "type": "list",
      "items": [
        "**The Stimulus:** Will use numerical or statistical language, such as `percentage`, `most (>50%)`, `fraction`, `average`, `total`, `increase/decrease`.",
        "**The Task:** Treat the problem like a simple logic or math puzzle. Set up the relationships and solve for the necessary outcome.",
        "**The Correct Answer:** Will be the conclusion that is mathematically required by the premises."
      ]
    }
  ],
};
