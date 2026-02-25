import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "11-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 11: Necessary Assumption' },
    { type: 'paragraph', text: '**Question Goal**\n\n**Identify an unstated premise that the author must believe for the argument to have a chance of being valid.** In other words, which statement is a belief so essential that if it were false, the entire argument would collapse? You are not looking for a statement that proves the conclusion — you are looking for a statement the argument cannot survive without.' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Necessary Assumption (NA) is one of the **highest-frequency question types** on the LSAT Logical Reasoning section. It appears roughly **2–3 times per scored section**, making it one of the most tested skills on the entire exam. NA questions also span the full difficulty range — you will see easy ones in the first quarter of a section and very hard ones in the final quarter." },
    { type: 'paragraph', text: "Beyond frequency, NA questions test **deep logical understanding**. They demand that you (1) identify the gap in an argument, (2) understand the difference between what is merely helpful and what is truly required, and (3) apply a rigorous verification tool — the Negation Test — to confirm your answer. These are the same skills that underpin Flaw, Weaken, Strengthen, and Sufficient Assumption questions. Mastering NA will raise your accuracy across the entire Logical Reasoning section." },
    { type: 'callout', variant: 'tip', title: 'Frequency & Difficulty', text: "Expect **2–3 Necessary Assumption questions per scored section**, appearing at all difficulty levels. Because NA rewards careful analysis over intuition, students who learn the Negation Test consistently outperform those who rely on gut feeling. This is one of the most learnable question types on the LSAT." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: 'NA stems are distinctive because they use language of **requirement** and **dependence**. The question asks what the argument *relies on*, *requires*, *depends on*, or *presupposes*. This language signals that you are looking for something the argument cannot function without — not something that would make the conclusion certain. Learn to distinguish these stems from Sufficient Assumption stems (which ask what would make the conclusion "follow logically") and Strengthen stems (which ask what would "most support" the conclusion).' },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The argument relies on which one of the following assumptions?"', '"**relies on**" — the argument needs this to work'],
      ['"The argument depends on assuming which one of the following?"', '"**depends on assuming**" — required belief'],
      ['"Which one of the following is an assumption required by the argument?"', '"**required by**" — without it, the argument fails'],
      ['"The conclusion above follows only if which one of the following is assumed?"', '"**only if**" — the assumption is necessary for the logic'],
      ['"The argument presupposes that..."', '"**presupposes**" — taken for granted, must be true'],
      ['"The argument is most vulnerable to criticism if which one of the following is NOT assumed?"', '"**NOT assumed**" — the assumption whose absence would be fatal'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Necessary vs. Sufficient Assumption' },
    { type: 'paragraph', text: "Students frequently confuse Necessary Assumption and Sufficient Assumption because both question types deal with unstated assumptions. However, the two question types ask fundamentally different things. Mixing them up is one of the most common — and most costly — mistakes in Logical Reasoning." },
    { type: 'table', headers: ['Feature', 'Necessary Assumption', 'Sufficient Assumption'], rows: [
      ['What you are looking for', 'A premise that is **REQUIRED** — without it, the argument falls apart', 'A premise that is **ENOUGH** — with it, the argument succeeds completely'],
      ['Degree of support', 'Minimal — the answer only needs to be something the argument cannot survive without', 'Complete — the conclusion must be logically guaranteed once you add the answer'],
      ['Answer strength', 'Often **modest or narrow** — just enough to keep the argument alive', 'Often **broad or strong** — a powerful rule that sweeps in the conclusion'],
      ['Defining test', '**Negation Test:** Deny the answer → argument collapses', '**SA Equation:** Premises + Answer → Conclusion is 100% guaranteed'],
      ['Stem language', '"depends on" / "requires" / "assumes" / "presupposes"', '"follows logically if assumed" / "enables the conclusion to be properly drawn"'],
      ['Common trap', 'Picking an answer that is sufficient but too strong — goes beyond what the argument requires', 'Picking an answer that is necessary but too weak to guarantee the conclusion'],
    ]},
    { type: 'paragraph', text: "Think of it this way: a **Necessary Assumption** is like one of several support cables holding up a bridge — if you remove it, the bridge collapses, but having it alone does not guarantee a safe crossing. A **Sufficient Assumption** is like a steel beam that fully bridges a canyon — once you place it, you can walk across with absolute certainty." },
    { type: 'callout', variant: 'default', title: 'The Critical Distinction', text: "A necessary assumption does **not** have to prove the conclusion. It just has to be something the argument cannot survive without. Many students get NA questions wrong because they look for the answer that \"best supports\" the conclusion. That is the Strengthen or Sufficient Assumption mindset. On NA, you want the answer whose denial would be *fatal* to the argument — even if the answer itself seems modest or obvious." },

    { type: 'hr' },

    { type: 'h2', text: 'The Negation Test' },
    { type: 'paragraph', text: "The Negation Test is the **single most powerful tool** for solving Necessary Assumption questions. It is a formal verification method — not a guess-and-check shortcut. The logic behind it is airtight: **if a statement is truly necessary, the argument cannot function without it.** Therefore, if you negate the statement (make it false) and the argument still works, the statement was not necessary." },
    { type: 'process', title: 'How to Apply the Negation Test', steps: [
      '**Take the answer choice** you want to test.',
      '**Logically negate it.** Turn the statement into its opposite. Be careful to negate the *logic*, not just the verb. "All X are Y" becomes "Some X are not Y" (not "No X are Y"). "The car is blue" becomes "The car is not blue."',
      '**Insert the negated statement** as a new fact in the argument. Treat it as true.',
      '**Evaluate the impact.** Ask: "Does the argument\'s conclusion still follow from its premises?" If the conclusion is destroyed or rendered nonsensical, the original statement was **necessary** — the argument *depends* on it being true. If the conclusion still holds (even if slightly weakened), the statement was **not necessary**.',
    ]},
    { type: 'paragraph', text: "The key word is **destroys**. Slight weakening is not enough. For the Negation Test to confirm a necessary assumption, the negation must make the argument\u2019s conclusion illogical, unsupported, or self-contradictory." },

    { type: 'h4', text: 'Negation Reference' },
    { type: 'breakdown', labels: { title: 'Original Statement', text: 'Logical Negation' }, items: [
      { title: '"All X are Y"', text: '"Some X are not Y" (not "No X are Y" — that is too strong)' },
      { title: '"Some X are Y"', text: '"No X are Y"' },
      { title: '"X always causes Y"', text: '"X does not always cause Y"' },
      { title: '"X is the only way to achieve Y"', text: '"X is not the only way to achieve Y"' },
      { title: '"No X are Y"', text: '"Some X are Y"' },
      { title: '"X can lead to Y"', text: '"X cannot lead to Y"' },
    ]},
    { type: 'callout', variant: 'tip', title: 'Common Negation Mistake', text: "The most common error is negating too strongly. The negation of \"All dogs are mammals\" is **\"Some dogs are not mammals\"** — not \"No dogs are mammals.\" Over-negating will make almost any answer choice seem necessary, which defeats the purpose of the test. Always use the **minimal logical opposite**." },

    { type: 'hr' },

    { type: 'h2', text: 'Common NA Patterns' },
    { type: 'paragraph', text: "While every NA question has a unique argument, the logical gaps tend to fall into a small number of recurring structural patterns. Learning to recognize these patterns gives you a head start on identifying the gap and prephrasing the correct answer." },
    { type: 'table', headers: ['Pattern', 'How It Works', 'What the Correct Answer Does'], rows: [
      ['**The Key Ingredient**', 'The premises establish an intermediate benefit, but the conclusion is about an ultimate goal. The argument never states that the intermediate benefit contributes to the ultimate goal.', 'States that the intermediate benefit is *valuable for* or *connected to* the ultimate goal.'],
      ['**The Definitional Gap**', 'The conclusion introduces a term or category that differs from the terms in the premises. The argument treats two different concepts as if they are incompatible or equivalent without stating why.', 'Provides the definitional bridge — states that the two concepts are incompatible, equivalent, or related in the way the argument assumes.'],
      ['**The Only Way (Blocking Alternatives)**', 'The argument identifies one factor as the cause of an effect, then concludes that removing that factor eliminates the effect entirely. No alternative causes are considered.', 'States that the identified factor is the *only effective* way to produce the effect — no alternatives exist.'],
      ['**The Closed Universe**', 'The argument eliminates candidates from a small group, then concludes the remaining candidate must be chosen. It never states that the candidates are the only options.', 'States that the pool of candidates is limited to the defined group — no outside options exist.'],
      ['**The Source Fallacy**', 'The argument dismisses a claim based on the source\'s bias or motives, rather than the claim\'s content. It assumes that a biased source cannot make valid arguments.', 'Establishes the general principle that arguments from biased sources are invalid — that motive determines quality.'],
    ]},
    { type: 'paragraph', text: "Each of these patterns is explored in depth in the drill lessons that follow. For now, notice that NA answers tend to be **modest, defensive statements** — they protect the argument from collapse rather than proving the conclusion. They block fatal objections, establish minimum connections, or close off alternatives that would destroy the logic." },

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Necessary Assumption question." },

    { type: 'question-card',
      id: 'WE-11-1-001',
      questionType: 'Necessary Assumption',
      difficulty: 'easy',
      stimulus: "A new city ordinance requires all restaurants to post calorie counts on their menus. The city council argues that this will reduce obesity rates, because studies show that when people are informed about calorie content, they tend to choose lower-calorie options.",
      question: "The argument depends on assuming which one of the following?",
      options: [
        "(A) The city council has the legal authority to impose menu labeling requirements on restaurants.",
        "(B) Choosing lower-calorie options at restaurants can contribute to a reduction in obesity rates. (Correct)",
        "(C) Most people who eat at restaurants are currently obese.",
        "(D) Calorie counts are the most important piece of nutritional information for consumers.",
        "(E) No restaurants in the city currently display calorie information on their menus.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Break Down the Argument' },
    { type: 'paragraph', text: "**Conclusion:** The calorie-posting ordinance will reduce obesity rates.\n\n**Premises:**\n1. The ordinance requires calorie counts on menus.\n2. Studies show that calorie information leads people to choose lower-calorie options.\n\nThe argument assumes a chain: calorie posting → people choose lower-calorie options → obesity rates drop." },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The premises establish that calorie posting leads to **lower-calorie choices**. But the conclusion is about **obesity reduction**. Are these the same thing? Not necessarily. The argument never states that choosing lower-calorie restaurant options actually contributes to reducing obesity. This is the classic \"Key Ingredient\" pattern: the evidence is about an intermediate benefit (lower-calorie choices) and the conclusion is about an ultimate goal (reduced obesity)." },

    { type: 'h4', text: 'Step 3: Apply the Negation Test' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Negation Test Analysis' }, items: [
      { title: '(A) The city council has the legal authority to impose menu labeling requirements.', text: '**Negation:** The city council does NOT have the legal authority. This might prevent the ordinance from being implemented, but the argument is about whether the ordinance *would work* if implemented. The logical connection between calorie posting and obesity reduction does not depend on the council\'s authority. **Argument survives → Not necessary.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(B) Choosing lower-calorie options at restaurants can contribute to a reduction in obesity rates.', text: '**Negation:** Choosing lower-calorie options CANNOT contribute to a reduction in obesity rates. If this is true, then the entire chain breaks: even if people choose lower-calorie options, it would not help reduce obesity. The conclusion becomes completely unsupported. **Argument collapses → Necessary.**', badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Most people who eat at restaurants are currently obese.', text: '**Negation:** Most restaurant diners are NOT currently obese. The argument only claims obesity *rates* will drop — it doesn\'t require that most diners be obese. Even if only some diners are obese, reducing their calorie intake could still reduce overall obesity rates. **Argument survives → Not necessary.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(D) Calorie counts are the most important piece of nutritional information for consumers.', text: '**Negation:** Calorie counts are NOT the most important nutritional information. The argument doesn\'t claim calories are the *most* important — only that knowing them leads to lower-calorie choices. Other information could be more important without affecting this specific argument. **Argument survives → Not necessary.**', badge: 'Incorrect', badgeColor: 'red' },
      { title: '(E) No restaurants in the city currently display calorie information.', text: '**Negation:** Some restaurants already display calorie information. Even if some already do, the ordinance requiring *all* restaurants to do so could still have an effect. The argument doesn\'t depend on this being entirely new. **Argument survives → Not necessary.**', badge: 'Incorrect', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. The NA doesn't have to PROVE the conclusion — it just has to be REQUIRED for the argument not to collapse.** Many students look for the strongest or most helpful answer. On NA, look for the answer whose denial is *fatal*.\n\n**2. The Negation Test is your definitive verification tool.** Negate the answer. If the argument falls apart, you have found a necessary assumption. If the argument merely weakens, you have not.\n\n**3. NA answers tend to be modest, not dramatic.** Sufficient Assumption answers are often sweeping rules or principles. Necessary Assumption answers are often narrow, defensive statements that prevent a specific objection. Don't reject an answer for being too obvious or too cautious.\n\n**4. Watch for the gap between intermediate benefits and ultimate goals.** Many NA arguments establish that a plan achieves effect A, then conclude that it will achieve goal B. The necessary assumption is always that A contributes to B.\n\n**5. Know the five common patterns.** Key Ingredient, Definitional Gap, Only Way, Closed Universe, and Source Fallacy cover the vast majority of NA questions. Recognizing the pattern accelerates your gap identification.\n\n**6. Distinguish NA from SA and Strengthen.** NA asks what the argument *needs*. SA asks what would *guarantee* the conclusion. Strengthen asks what would *help* the conclusion. The same argument could have different correct answers for each question type." },
  ]
};
