import { Lesson } from '../../types';

export const Lesson_ReferenceGuide: Lesson = {
  id: '11-ref',
  title: 'MODULE 11: Necessary Assumption Reference Guide',
  content: [
    {
      "type": "h2",
      "text": "MODULE 11: Necessary Assumption Reference Guide"
    },
    {
      "type": "h3",
      "text": "The Goal: Identify the Argument's Foundation"
    },
    {
      "type": "paragraph",
      "text": "Your task is to identify the unstated premise that the author must believe for the argument to have a chance of being valid. You are looking for a statement so essential that if it were false, the entire argument would collapse."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "The 5-Step Method: Quick Guide"
    },
    {
      "type": "list",
      "items": [
        "**Deconstruct the Argument:** Identify the Main Conclusion and the Premises. Summarize the core reasoning.",
        "**Find the Logical Gap:** Spot the leap in logic. Where did the author jump from evidence about A to a conclusion about B? Did they ignore an alternative cause?",
        "**Prephrase the Assumption:** Articulate the missing link in your own words. What must be true to bridge the gap or defend the conclusion?",
        "**Select a Contender:** Use your prephrase to scan the choices. Eliminate choices that are out of scope, overly strong, or irrelevant.",
        "**Confirm with the Negation Test:** Logically negate your top contender. If the negated statement destroys the argument, it is the correct answer."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Field Guide to Necessary Assumption Patterns"
    },
    {
      "type": "table",
      "headers": [
        "Pattern Name",
        "Function/Logic",
        "Key Clues"
      ],
      "rows": [
        [
          "**The Linker**",
          "Connects a concept in the premise to a *different* concept in the conclusion (A → B).",
          "**Term Shift:** The premise discusses \"morale,\" but the conclusion is about \"production.\""
        ],
        [
          "**The Defender**",
          "Protects a causal argument by ruling out an alternative cause or reverse causation.",
          "**Causal Conclusion:** \"X causes Y.\" The assumption will often be negative: \"Z did *not* cause Y.\""
        ],
        [
          "**The Shield**",
          "Protects a generalization by confirming that the evidence (sample/part) is representative of the conclusion (whole).",
          "**Scope Mismatch:** Evidence is about a small group (e.g., \"nesting turtles\"), but the conclusion is about a large group (\"the species\")."
        ],
        [
          "**The Plan-Works Proponent**",
          "Confirms a necessary condition for a plan to be feasible or necessary.",
          "**Recommendation:** \"We should do X.\" The assumption ensures X is possible and won't backfire."
        ],
        [
          "**The Analogy Guardian**",
          "Validates a comparison between two different things.",
          "**Comparison:** \"A is like B.\" The assumption states the relevant similarities hold true."
        ]
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Common Traps & How to Avoid Them"
    },
    {
      "type": "paragraph",
      "text": "**The Overly Strong Claim:** Uses words like `all`, `only`, `never`, `always`."
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It strengthens the argument significantly.",
        "*How to Avoid:* Use the Negation Test. The negation of \"All\" is \"Not all,\" which is weak and rarely destroys an argument. Necessary assumptions are usually minimal."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Mistaken Reversal/Negation:** Flips the logic of a conditional premise."
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It uses the right terms but in the wrong relationship.",
        "*How to Avoid:* Map the logic. If the premise is `A → B`, the assumption `B → A` is invalid."
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Out of Scope Detour:** Introduces an irrelevant comparison or concept."
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It discusses the same general topic.",
        "*How to Avoid:* Check the specific link between premise and conclusion. Does this new concept bridge that specific gap?"
      ]
    },
    {
      "type": "paragraph",
      "text": "**The Opposite Role (Strengthener):** A statement that helps the argument but isn't *necessary*."
    },
    {
      "type": "list",
      "items": [
        "*Why it's tempting:* It makes the conclusion more likely to be true.",
        "*How to Avoid:* Negate it. If the negation merely weakens the argument but doesn't destroy it, the choice is incorrect."
      ]
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Final Tip for Hard Questions: Use the Negation Test Aggressively"
    },
    {
      "type": "paragraph",
      "text": "On difficult questions, the correct answer will often be abstract or phrased negatively (\"The wind will not exceed 100mph\"). It won't look like a helpful bridge. Trust the Negation Test. If negating a weird-sounding choice makes the argument impossible or absurd, you have found the linchpin. Don't look for what helps; look for what the argument *cannot survive without*."
    }
  ],
};
