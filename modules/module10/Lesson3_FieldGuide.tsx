import { Lesson } from '../../types';

export const Lesson3_FieldGuide: Lesson = {
  id: '10-3',
  title: 'Section 3: Sufficient Assumption — Answer Types',
  content: [
    {
      "type": "h2",
      "text": "Section 3: Sufficient Assumption — Answer Types"
    },
    {
      "type": "paragraph",
      "text": "The correct answer to a Sufficient Assumption question is the one that flawlessly bridges the argument's logical gap. While the topics of the arguments vary wildly, the function of the correct answer is always the same. This guide helps you spot the common patterns correct answers use to make the argument valid."
    },
    {
      "type": "paragraph",
      "text": "**1. The Conditional Bridge**"
    },
    {
      "type": "paragraph",
      "text": "**Function:** Connects a piece of evidence to the conclusion using an \"If... then...\" statement. It acts as the classic \"missing link\" that ties everything together."
    },
    {
      "type": "paragraph",
      "text": "**How it Works:** *"
    },
    {
      "type": "paragraph",
      "text": "**Completing the Chain:** Think of the argument as a chain with a missing middle link. If the evidence says \"A leads to B\" and the conclusion says \"A leads to C,\" the correct answer fills the gap by saying \"B leads to C.\" *"
    },
    {
      "type": "paragraph",
      "text": "**Applying a Rule:** If the evidence states a fact (like \"The traffic light is red\") and the conclusion makes a claim (like \"You must stop\"), the answer provides the rule that connects them (\"If the traffic light is red, you must stop\")."
    },
    {
      "type": "paragraph",
      "text": "**Example:** *"
    },
    {
      "type": "paragraph",
      "text": "**Argument:** \"If I miss the bus, I will be late for work. Therefore, if I miss the bus, I will lose my job.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument assumes being late leads to firing, but hasn't proven it. *"
    },
    {
      "type": "paragraph",
      "text": "**The Bridge:** \"If I am late for work, I will lose my job.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Complete Chain:** Miss Bus → Late for Work → Lose Job."
    },
    {
      "type": "paragraph",
      "text": "**Clues to Look For:** The answer often uses words like if...then, any, all, no, or none. It connects a concept from the evidence straight to a concept in the conclusion. **Frequency:** Very High (Approx. 40-50%)"
    },
    {
      "type": "paragraph",
      "text": "**2. The Rule-Setter / Definitional Bridge**"
    },
    {
      "type": "paragraph",
      "text": "**Function:** Gives a general rule or definition that explains why the argument can jump from one idea to another. It basically says, \"If you have Concept A, count it as Concept B.\" **How it Works:** The argument often jumps from stating a fact to making a judgment (like calling something \"good\" or \"unethical\"), or moves from one category to a totally different one. The answer provides the rule that allows this jump to happen."
    },
    {
      "type": "paragraph",
      "text": "**Example:** *"
    },
    {
      "type": "paragraph",
      "text": "**Argument:** \"Sarah completed the project ahead of schedule. Therefore, Sarah is a great employee.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument jumps from \"completed ahead of schedule\" (Fact) to \"great employee\" (Judgment/New Category). *"
    },
    {
      "type": "paragraph",
      "text": "**The Bridge:** \"Anyone who completes a project ahead of schedule is a great employee.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Complete Chain:** Sarah completed ahead of schedule + (Rule: Ahead of schedule = Great employee) → Sarah is a great employee."
    },
    {
      "type": "paragraph",
      "text": "**Clues to Look For:** The answer often sounds like a definition or a general principle. It links the main term from the evidence directly to the main term in the conclusion. **Frequency:** High (Approx. 30-35%)"
    },
    {
      "type": "paragraph",
      "text": "**3. The Alternative Eliminator**"
    },
    {
      "type": "paragraph",
      "text": "**Function:** Proves the conclusion is true by destroying every other possibility. It basically says, \"It has to be this, because it can't be anything else.\" **How it Works:** The argument assumes there are only a few options (like \"If it's not A, it must be B\"). But maybe there's an Option C? The correct answer blocks Option C, forcing the conclusion to be the only path left."
    },
    {
      "type": "paragraph",
      "text": "**Example:** *"
    },
    {
      "type": "paragraph",
      "text": "**Argument:** \"The car wouldn't start. Since the battery is new, the starter must be broken.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The author assumes the problem *must* be the starter if it's not the battery, ignoring other possibilities (no gas, bad alternator). *"
    },
    {
      "type": "paragraph",
      "text": "**The Bridge:** \"The only reasons the car would not start are a dead battery or a broken starter.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Complete Chain:** Car won't start + Battery is working + (Only options: Battery or Starter) → Must be Starter."
    },
    {
      "type": "paragraph",
      "text": "**Clues to Look For:** The answer often uses strong words like \"only,\" \"no other,\" or \"solely.\" It works by narrowing the choices down to the one the author wants. **Frequency:** Common (Approx. 15%)"
    },
    {
      "type": "paragraph",
      "text": "**4. The Fact Provider (Often Quantitative)**"
    },
    {
      "type": "paragraph",
      "text": "**Function:** Supplies a specific missing fact (usually a number) that the argument needs to be valid. **How it Works:** Unlike the other types that give you a general rule, this one gives you a hard fact. You see this most often when the argument relies on math, percentages, or words like \"most.\""
    },
    {
      "type": "paragraph",
      "text": "**Example:** *"
    },
    {
      "type": "paragraph",
      "text": "**Argument:** \"If a candidate gets more than 500 votes, they will win the election. Candidate X has the votes of the entire local union. Therefore, Candidate X will win.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** The argument assumes the union is big enough to guarantee the win, but doesn't state it. *"
    },
    {
      "type": "paragraph",
      "text": "**The Bridge:** \"The local union has more than 500 members.\" *"
    },
    {
      "type": "paragraph",
      "text": "**The Complete Chain:** >500 votes to win + Candidate has Union votes + (Union >500 members) → Candidate has >500 votes → Candidate will win."
    },
    {
      "type": "paragraph",
      "text": "**Clues to Look For:** The argument will likely mention numbers, ratios, or \"majority.\" The correct answer fills in the missing variable to make the math work out (like the total size of a group). **Frequency:** Less Common (Approx. 5-10%)"
    },
    {
      "type": "paragraph",
      "text": "**5. The Contrapositive**"
    },
    {
      "type": "paragraph",
      "text": "**Function:** Hides the logical chain behind a negative statement. You have to \"translate\" the negative statement into its positive version (the contrapositive) to see the gap."
    },
    {
      "type": "paragraph",
      "text": "**How it Works:** *"
    },
    {
      "type": "paragraph",
      "text": "**The Structure:** The evidence says Not B → Not A. The conclusion says A → C. *"
    },
    {
      "type": "paragraph",
      "text": "**The Translation:** Not B → Not A is logically the same as A → B. *"
    },
    {
      "type": "paragraph",
      "text": "**The Prediction:** You have A → B, but you need A → C. The missing bridge is B → C."
    },
    {
      "type": "paragraph",
      "text": "**Example:** *"
    },
    {
      "type": "paragraph",
      "text": "**Argument:** \"If a creature is not a mammal (~B), it is not a tiger (~A). Therefore, if a creature is a tiger (A), it has warm blood (C).\" *"
    },
    {
      "type": "paragraph",
      "text": "**Contrapositive:** The premise allows us to infer \"Tiger → Mammal\" (A → B). *"
    },
    {
      "type": "paragraph",
      "text": "**The Gap:** We need to bridge Mammal (B) to Warm Blood (C). *"
    },
    {
      "type": "paragraph",
      "text": "**The Bridge:** \"All mammals have warm blood\" (B → C). *"
    },
    {
      "type": "paragraph",
      "text": "**The Complete Chain:** Tiger → Mammal → Warm Blood."
    },
    {
      "type": "paragraph",
      "text": "**Clues to Look For:** Watch for a \"negation difference\" between the evidence and the conclusion (one uses \"not,\" the other doesn't). Translate the negative statement immediately."
    }
  ],
};
