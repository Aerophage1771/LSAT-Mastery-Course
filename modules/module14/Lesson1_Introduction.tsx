import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "14-1",
  title: "Introduction",
  content: [
    { type: 'h2', text: 'MODULE 14: Principle - Generalization' },
    { type: 'paragraph', text: '**Question Goal**\n\nYou are given a specific, concrete situation in the stimulus — an experiment, an anecdote, a natural phenomenon, or a policy outcome. Your job is to identify the **abstract, general rule or proposition** that this specific situation perfectly exemplifies. If the stimulus is treated as a case study, which answer choice provides the most accurate "lesson" or "moral of the story"?' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Principle-Generalization is the **reverse of Principle-Apply**. In Principle-Apply (Module 13), you receive a general rule and find the specific case that fits it — you move from abstract to concrete. In Principle-Generalization, you receive the specific case and must extract the general rule — you move from **concrete to abstract**. This reversal changes everything about how you approach the question." },
    { type: 'paragraph', text: "In Apply questions, precision is king: you decompose the rule into conditions, then check which answer satisfies each one. In Generalization questions, **abstraction** is king: you must strip away the specific details of the stimulus — the proper nouns, the particular context, the domain-specific language — and identify the universal pattern hiding underneath. The challenge is not in matching conditions but in *seeing through* the specifics to the underlying logic." },
    { type: 'paragraph', text: "These questions appear roughly **1–2 times per scored Logical Reasoning section** and span the full difficulty range. They are often found in the middle third of a section (questions 8–18). Students who rely on surface-level keyword matching struggle here because the correct answer is always phrased in abstract, general terms that look nothing like the stimulus on the surface — yet perfectly capture its logic at a deeper level." },
    { type: 'paragraph', text: "Mastering Principle-Generalization also strengthens your performance on Parallel Reasoning questions, where you must identify the same logical *structure* across two different arguments. The abstraction skill — seeing the universal form behind a specific instance — is the same in both question types. This module trains that skill directly." },
    { type: 'callout', variant: 'tip', title: 'Frequency & Difficulty', text: "Expect **1–2 Principle-Generalization questions per scored section**. They cluster in the medium-to-hard range. The difficulty comes not from complex logic but from the abstraction required: the correct answer uses general language that can feel disconnected from the stimulus unless you have practiced the concrete-to-abstract translation. Students who pre-phrase the \"moral of the story\" before reading the answer choices consistently outperform those who evaluate each choice in isolation." },

    { type: 'hr' },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "Principle-Generalization question stems are distinctive because the stimulus contains the *specific scenario* and the answer choices contain the *general rules*. The stem asks you to find the proposition, generalization, or principle that the passage \"illustrates,\" \"conforms to,\" or \"best exemplifies.\" The direction is always upward — from specific to general." },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"Which one of the following propositions is best illustrated by the situation above?"', '"**propositions**" + "**illustrated by**" — find the general rule the case exemplifies'],
      ['"The situation described most closely conforms to which one of the following principles?"', '"**conforms to**" + "**principles**" — the situation is an instance of a broader rule'],
      ['"Which one of the following principles is best illustrated by the information above?"', '"**principles**" + "**illustrated**" — extract the abstract lesson'],
      ['"The passage most precisely illustrates which one of the following propositions?"', '"**most precisely illustrates**" — precision matters; the rule must fit exactly'],
      ['"The situation as described above most closely conforms to which one of the following generalizations?"', '"**generalizations**" — the answer is broad and universal, not specific'],
    ]},
    { type: 'callout', variant: 'default', title: 'Direction Check', text: "If the stimulus is a **specific scenario** and the answer choices are **general rules**, you are doing Principle-Generalization. If the stimulus is a **general rule** and the answer choices are **specific scenarios**, you are doing Principle-Apply (Module 13). If the stimulus is a **specific argument** and the answer choices are **general rules that justify it**, you are doing Principle-Strengthen (Module 12). Always check the direction before you start solving." },

    { type: 'hr' },

    { type: 'h2', text: 'The Three Principle Question Types' },
    { type: 'paragraph', text: "Principle-Generalization is one of three principle question types on the LSAT. Each type tests a different direction of reasoning between abstract rules and concrete cases. Understanding all three prevents you from accidentally solving the wrong question type." },
    { type: 'table', headers: ['Feature', 'Principle-Strengthen (Module 12)', 'Principle-Apply (Module 13)', 'Principle-Generalization (This Module)'], rows: [
      ['What the stimulus contains', 'A **specific argument** (evidence → conclusion)', 'A **general principle** (the rule itself)', 'A **specific scenario** (a case study or anecdote)'],
      ['What the answer provides', 'A **general rule** that justifies the argument', 'A **specific scenario** that matches the rule', 'A **general rule** that the scenario exemplifies'],
      ['Direction of reasoning', '**Concrete → Abstract** (case to rule, to *strengthen*)', '**Abstract → Concrete** (rule to case)', '**Concrete → Abstract** (case to rule, to *describe*)'],
      ['Your primary task', 'Find the rule that bridges the logical gap', 'Check whether facts satisfy the rule\'s conditions', 'Strip away specifics to find the underlying pattern'],
      ['Key skill tested', 'Gap identification + abstraction', 'Precision — decomposing and matching conditions', 'Abstraction — seeing the universal in the particular'],
      ['The answer must...', '...make the conclusion more defensible', '...satisfy every condition of the principle', '...be true BECAUSE OF the stimulus, not just consistent with it'],
    ]},
    { type: 'paragraph', text: "The critical distinction between Principle-Strengthen and Principle-Generalization is subtle but important. Both move from concrete to abstract. However, in Strengthen, the stimulus is an *argument* (with a conclusion that needs support), and the principle must *justify the reasoning*. In Generalization, the stimulus is a *scenario* (often descriptive, without a formal conclusion), and the principle must *describe the pattern*. Strengthen asks \"What rule makes this argument work?\" Generalization asks \"What rule does this situation illustrate?\"" },

    { type: 'hr' },

    { type: 'h2', text: 'The Abstraction Skill' },
    { type: 'paragraph', text: "The core skill tested by Principle-Generalization is **abstraction** — the ability to strip specific details from a scenario and identify the universal pattern underneath. This is not guessing or paraphrasing. It is a precise, disciplined process of replacing particular nouns and verbs with their general categories while preserving the logical relationship between them." },

    { type: 'h3', text: 'How Abstraction Works' },
    { type: 'paragraph', text: "Consider this stimulus:" },
    { type: 'blockquote', text: '"Guppies with brightly colored spots attract more mates than dull-colored guppies, but they are also more visible to predators. In environments with few predators, brightly colored guppies thrive; in environments with many predators, dull-colored guppies predominate."' },
    { type: 'paragraph', text: "To abstract this, you replace the specifics with general categories:" },
    { type: 'table', headers: ['Specific Detail', 'Abstracted Category'], rows: [
      ['"Guppies"', '"Organisms" or "members of a species"'],
      ['"Brightly colored spots"', '"A trait" or "a characteristic"'],
      ['"Attracting mates"', '"An advantage in one context"'],
      ['"Being visible to predators"', '"A disadvantage in another context"'],
      ['"Environments with few/many predators"', '"Different environmental conditions"'],
    ]},
    { type: 'paragraph', text: "The abstracted principle: **A single trait in an organism can be advantageous in one environmental context and disadvantageous in another, and the prevalence of that trait depends on which context dominates.**" },
    { type: 'paragraph', text: "Notice what happened: the logical *structure* (a trait with dual effects, context-dependent prevalence) is preserved perfectly, but every *specific* detail (guppies, spots, mates, predators) has been replaced with a general category. This is the core of the abstraction skill." },

    { type: 'callout', variant: 'tip', title: 'The Replacement Test', text: "After you formulate your abstracted principle, check it with the **Replacement Test**: could you swap in a completely different specific example and have the principle still hold? If your principle says 'organisms with conspicuous traits face trade-offs between mating success and predation risk,' you could replace guppies with peacocks, deer, or any other species — and the principle would still apply. If the principle only works for guppies, it is not general enough." },

    { type: 'hr' },

    { type: 'h2', text: 'Common Generalization Categories' },
    { type: 'paragraph', text: "While every LSAT stimulus is unique, the principles they illustrate tend to fall into a small number of recurring categories. Recognizing these patterns gives you a head start on formulating your pre-phrase." },

    { type: 'table', headers: ['Category', 'What It Captures', 'Example Principle'], rows: [
      ['**Causal Principles**', 'A specific cause-effect relationship generalized to a pattern: X leads to Y under certain conditions.', '"A change in how a task is perceived can affect the quality of performance on that task."'],
      ['**Trade-off / Dual-Effect Patterns**', 'A single factor has both a positive and negative consequence, and the net effect depends on context.', '"A characteristic that is beneficial in one environment may be detrimental in a different environment."'],
      ['**Behavioral Patterns**', 'People (or organisms) react to certain conditions in predictable ways, often involving perception, motivation, or judgment.', '"People perform better when they do not believe their abilities are being evaluated."'],
      ['**Ethical / Normative Rules**', 'A moral judgment is generalized: certain types of actions are right or wrong under certain conditions.', '"An action that appears hostile may in fact be a rational response to an obstacle."'],
      ['**Definitional Truths**', 'Something qualifies (or fails to qualify) as a member of a category based on its characteristics.', '"A prediction\'s accuracy tends to increase as its specificity decreases."'],
      ['**Practical Wisdom**', 'A pragmatic observation about how things work in the real world — often counterintuitive.', '"Addressing one problem can sometimes create a new, unforeseen problem."'],
    ]},

    { type: 'paragraph', text: "These categories are not mutually exclusive — a single stimulus might illustrate both a causal principle and a trade-off pattern. The categories are a starting point for your pre-phrase, not a rigid classification system." },

    { type: 'hr' },

    { type: 'h2', text: 'The Stimulus as a Case Study' },
    { type: 'paragraph', text: "In Principle-Generalization questions, the stimulus acts as your evidence. Unlike many other Logical Reasoning questions, it is often a **descriptive passage** rather than a formal argument with a conclusion. There may be no explicit thesis, no indicator words, and no logical gap to identify. Instead, you are reading a mini case study and asking: *What general lesson does this case study teach?*" },
    { type: 'paragraph', text: "To find the principle, you must distill the **central dynamic** — the core relationship or mechanism that makes this case study interesting or noteworthy. Common dynamics include:" },
    { type: 'breakdown', labels: { title: 'Dynamic', text: 'Description' }, items: [
      { title: 'Trade-Offs', text: 'A trait, policy, or strategy provides a benefit in one context but a disadvantage in another. The stimulus describes both sides and shows how context determines which side dominates.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Unintended Consequences', text: 'A solution to one problem inadvertently creates a new, different problem. The stimulus describes an action taken for a good reason that produced a bad side effect.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Perception Effects', text: 'How something is perceived or framed — rather than its objective characteristics — determines the outcome. The stimulus shows that changing the framing changes the result.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Causal Explanations', text: 'The passage explains the hidden or non-obvious reason for a specific behavior, outcome, or phenomenon. The principle captures that causal mechanism in general terms.', badge: 'Moderate', badgeColor: 'slate' },
      { title: 'Contextual Value', text: 'Something\'s value, effectiveness, or desirability depends entirely on the context in which it is used or evaluated. What works in one setting fails in another.', badge: 'Moderate', badgeColor: 'slate' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Criteria for the Correct Principle' },
    { type: 'paragraph', text: "Not every general statement that is consistent with the stimulus is the correct answer. The correct principle must meet two strict criteria:" },

    { type: 'h3', text: '1. Strict Support — The Stimulus Must Prove the Principle' },
    { type: 'paragraph', text: "You must be able to prove the principle using *only* the facts provided in the stimulus. If a principle makes a claim about \"effectiveness\" but the stimulus only discusses \"intent,\" the principle is not supported. If a principle claims something \"always\" happens but the stimulus only shows one instance, the principle is too strong. The stimulus is your only evidence — treat it as the totality of what you know." },
    { type: 'callout', variant: 'default', title: 'The Key Rule', text: "**The correct answer must be true BECAUSE OF the stimulus, not just consistent with it.** Many wrong answers describe general truths that happen not to contradict the stimulus. The correct answer describes a general truth that the stimulus *specifically demonstrates*. Ask: \"Does this stimulus provide direct evidence for this principle?\" If the answer is \"yes, the stimulus is a textbook example of this principle,\" you have the right answer. If the answer is \"well, the stimulus doesn\'t contradict it,\" you have a trap." },

    { type: 'h3', text: '2. Proper Strength — Watch the Force of Language' },
    { type: 'paragraph', text: "Pay close attention to the force of the language in the answer choices. If the stimulus describes something that \"can\" or \"sometimes\" happens, an answer choice claiming it \"usually\" or \"always\" happens is too strong and therefore incorrect. Moderate language (\"can,\" \"may,\" \"sometimes,\" \"often\") is frequently found in correct Principle-Generalization answers because the stimulus typically presents a single instance — which supports the possibility of a pattern but cannot prove its universality." },
    { type: 'table', headers: ['Stimulus Shows', 'Acceptable Principle Language', 'Too Strong (Likely Wrong)'], rows: [
      ['One case where X led to Y', '"X can lead to Y" / "X sometimes leads to Y"', '"X always leads to Y" / "X necessarily leads to Y"'],
      ['A difference between two groups', '"Under certain conditions, A outperforms B"', '"A is inherently superior to B"'],
      ['An action that had a side effect', '"Actions of type X may have unintended consequences"', '"Actions of type X inevitably produce negative outcomes"'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Worked Example' },
    { type: 'paragraph', text: "Let's apply everything from this lesson to a complete Principle-Generalization question." },

    { type: 'question-card',
      id: 'WE-14-1-001',
      questionType: 'Principle - Generalization',
      difficulty: 'medium',
      stimulus: "A city introduced a congestion surcharge for driving into the downtown core during peak hours, framing it as a penalty for contributing to traffic. Compliance was low and public backlash was intense. The following year, the city rebranded the same fee as a \"congestion relief discount\" — drivers who avoided peak hours received a credit on their vehicle registration. The fee structure was identical, but compliance increased dramatically and public approval rose.",
      question: "The situation described above most closely conforms to which one of the following propositions?",
      options: [
        "(A) Financial incentives are more effective than financial penalties at changing behavior.",
        "(B) People are more likely to comply with a policy when the policy is presented as conferring a benefit rather than imposing a loss, even if the financial impact is the same. (Correct)",
        "(C) Public policy should always be framed in positive terms to maximize public support.",
        "(D) Congestion pricing is an effective tool for reducing urban traffic during peak hours.",
        "(E) People generally resist government policies that they perceive as punitive, regardless of the policies' actual effects.",
      ],
    },

    { type: 'h3', text: 'Walkthrough' },

    { type: 'h4', text: 'Step 1: Identify the Central Dynamic' },
    { type: 'paragraph', text: "The stimulus describes a situation where the *identical* fee was framed two different ways — as a \"penalty\" (surcharge) and as a \"benefit\" (discount). The financial reality was the same. But the framing changed the outcome: low compliance → high compliance, backlash → approval. The central dynamic is: **how a policy is framed affects people\'s response to it, even when the substance is unchanged.**" },

    { type: 'h4', text: 'Step 2: Abstract to General Terms' },
    { type: 'paragraph', text: "Replace specifics with general categories:" },
    { type: 'list', items: [
      '"Congestion surcharge" / "congestion relief discount" → a policy or measure',
      '"Framed as a penalty" vs. "framed as conferring a benefit" → the framing or presentation',
      '"Financial impact is the same" → identical substance',
      '"Compliance increased" → behavioral change or improved response',
    ]},
    { type: 'paragraph', text: "**Pre-phrase:** \"People respond differently to the same policy depending on whether it is framed as a penalty or a benefit.\"" },

    { type: 'h4', text: 'Step 3: Evaluate the Choices' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Financial incentives are more effective than financial penalties at changing behavior.', text: "This sounds relevant but misidentifies the variable. The stimulus does not compare an *incentive* to a *penalty* — it compares two *framings* of the same fee. The fee was not an incentive in the second year; it was the same charge presented differently. This principle is about substance; the stimulus is about framing.", badge: 'Misidentified Variable', badgeColor: 'red' },
      { title: '(B) People are more likely to comply with a policy when the policy is presented as conferring a benefit rather than imposing a loss, even if the financial impact is the same.', text: "This perfectly captures the central dynamic. It identifies the key variable (framing as benefit vs. loss), the key outcome (compliance), and the critical control (same financial impact). The stimulus is a textbook example of this proposition.", badge: 'Correct', badgeColor: 'green' },
      { title: '(C) Public policy should always be framed in positive terms to maximize public support.', text: "This is a prescriptive claim (\"should always\") but the stimulus is descriptive — it tells us what happened, not what ought to happen. Additionally, \"always\" is too strong; the stimulus provides one example, which cannot support a universal prescription. This is the Normative Leap trap.", badge: 'Normative Leap', badgeColor: 'red' },
      { title: '(D) Congestion pricing is an effective tool for reducing urban traffic during peak hours.', text: "This principle is about whether congestion pricing works. But the stimulus is not about the effectiveness of congestion pricing per se — it is about how framing affects compliance. The topic (congestion) is the same, but the lesson (framing matters) is completely different. This answer stays at the specific level instead of abstracting.", badge: 'Wrong Topic', badgeColor: 'red' },
      { title: '(E) People generally resist government policies that they perceive as punitive, regardless of the policies\' actual effects.', text: "This captures half the story (resistance to punitive framing) but ignores the other half (acceptance of benefit framing). The stimulus shows both the negative and positive reactions to framing. A principle that only captures the negative side is a partial match — it describes half the dynamic.", badge: 'Partial Match', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Principles' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Generalization is the reverse of Application.** Apply gives you the rule and asks for the case. Generalization gives you the case and asks for the rule. The direction change means you need abstraction skills, not condition-matching skills.\n\n**2. The correct answer must be true BECAUSE OF the stimulus, not just consistent with it.** Many wrong answers are true statements that the stimulus does not contradict. The correct answer is a statement that the stimulus directly and specifically demonstrates. Ask: \"Is this stimulus a textbook example of this principle?\"\n\n**3. Strip specifics, preserve structure.** Replace proper nouns with general categories, specific verbs with abstract ones, and particular contexts with universal ones — but preserve the logical relationships between them. The principle must capture the same *dynamic* as the stimulus, just at a higher level of abstraction.\n\n**4. Watch the force of language.** A single case study supports \"can\" and \"sometimes\" but not \"always\" and \"necessarily.\" Moderate language is a hallmark of correct Principle-Generalization answers.\n\n**5. Distinguish the three principle question types.** Strengthen: find the rule that helps the argument. Apply: find the case that matches the rule. Generalization: find the rule that matches the case. Check which direction you are solving before you begin.\n\n**6. Pre-phrase the \"moral of the story.\"** Before reading the answer choices, state the central dynamic of the stimulus in abstract terms. This pre-phrase is your most powerful tool against trap answers." },
  ]
};
