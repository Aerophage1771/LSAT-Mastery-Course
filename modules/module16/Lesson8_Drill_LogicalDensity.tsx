import { Lesson } from '../../types';

export const Lesson8_Drill_LogicalDensity: Lesson = {
  id: "16-8",
  title: "Drill: Navigating Logical Density",
  content: [
    { type: 'h2', text: 'Logical Density' },
    { type: 'paragraph', text: "A **Logical Density** question presents a stimulus packed with interrelated facts that use different levels of certainty \u2014 quantifiers like \"most\" and \"all,\" conditional triggers like \"when\" and \"if,\" and probabilistic language like \"typically.\" The challenge is not merely to understand each fact in isolation, but to synthesize them with extreme precision, honoring every qualifier. A single misread of \"most\" as \"all\" or \"typically\" as \"always\" will lead you to an incorrect answer." },

    { type: 'paragraph', text: "These stimuli are deliberately constructed to feel overwhelming. The antidote is systematic deconstruction: tag each fact with its certainty level (absolute, probabilistic, or conditional), then build the inference by combining only what the facts jointly support \u2014 nothing more." },

    { type: 'h3', text: 'What Makes Logical Density Distinctive' },
    { type: 'list', ordered: true, items: [
      '**Mixed quantifiers demand precision.** A stimulus may contain "most," "all," and "some" in adjacent sentences. Each word carries a different logical weight, and the correct answer must reflect the weakest link in the chain.',
      '**Conditional triggers create hypothetical scope.** Phrases like "when temperatures rise" or "if carbon levels increase" limit the inference to specific conditions. The correct answer will preserve these conditions rather than generalizing.',
      '**The correct answer mirrors the stimulus\'s uncertainty.** If the stimulus uses probabilistic language ("typical," "generally"), the correct answer will too. Answers that upgrade uncertainty to certainty are traps.',
    ]},

    { type: 'callout', variant: 'default', title: 'The Qualifier Matching Rule', text: "In dense stimuli, the correct answer will match the precision of the source material. If the stimulus says \"most\" species do X, the correct answer cannot conclude that \"all\" species do X. If the stimulus says a condition is \"typical,\" the answer should say \"generally\" \u2014 not \"always.\"" },

    { type: 'hr' },

    { type: 'h3', text: 'Drill: Navigating Logical Density' },
    { type: 'paragraph', text: "This drill demonstrates how to navigate a stimulus with multiple interrelated facts at different certainty levels. Read the stimulus, commit to an answer, then review the full analysis below." },

    { type: 'hr' },

    { type: 'h4', text: 'The Problem' },

    { type: 'question-card',
      id: '16-8-drill',
      questionType: 'Most Strongly Supported',
      difficulty: 'hard',
      stimulus: "On their way from their nest to a food source, ants of most species leave a trail of chemicals called pheromones. The ants use the scent of the pheromones to guide themselves between the food and their nest. All pheromones evaporate without a trace almost immediately when temperatures rise above 45 degrees Celsius (113 degrees Fahrenheit), as is typical during afternoons in places such as the Sahara Desert.",
      question: "The statements above, if true, most strongly support which one of the following?",
      options: [
        "(A) Most ants forage for food either only in the morning or only during the night.",
        "(B) Most ants that do not use pheromones to mark the paths they take between their nest and food live in the Sahara Desert.",
        "(C) If any ants live in the Sahara Desert and forage for food at no time but in the afternoon, those ants generally do not use pheromones to guide themselves between food and their nest. (Correct)",
        "(D) If any ants do not use pheromones to navigate between food and their nest, those ants use a different substance that does not evaporate in temperatures above 45 degrees Celsius.",
        "(E) If any Saharan ants forage for food in the afternoon, those ants forage for food less efficiently when temperatures are above 45 degrees Celsius than they do when temperatures are lower.",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Tag Each Fact by Certainty Level' },
    { type: 'paragraph', text: "The stimulus contains three facts, each with a different level of certainty. Tagging them is the essential first step:" },
    { type: 'breakdown', labels: { title: 'Fact', text: 'Details' }, items: [
      { title: 'Fact 1 (Probabilistic)', text: '"**Most** ant species" use pheromones for guidance. This is not universal \u2014 some species do not use pheromones at all.', badge: 'MOST', badgeColor: 'blue' },
      { title: 'Fact 2 (Absolute)', text: '"**All** pheromones" evaporate when the temperature exceeds 45\u00B0C. This is a universal law with no exceptions.', badge: 'ALL', badgeColor: 'indigo' },
      { title: 'Fact 3 (Probabilistic)', text: 'It is "**typical**" for Sahara afternoons to exceed 45\u00B0C. This is not guaranteed \u2014 some afternoons may be cooler.', badge: 'TYPICAL', badgeColor: 'blue' },
    ]},

    { type: 'h4', text: 'Step 2: Build the Inference Chain' },
    { type: 'paragraph', text: "Now combine the facts, respecting each qualifier:" },
    { type: 'list', items: [
      'Most ant species rely on pheromones (Fact 1 \u2014 probabilistic).',
      'All pheromones evaporate above 45\u00B0C (Fact 2 \u2014 absolute).',
      'Sahara afternoons are typically above 45\u00B0C (Fact 3 \u2014 probabilistic).',
      'Therefore: if ants in the Sahara forage only in the afternoon, pheromones would **generally** be unavailable to them (combining the absolute destruction of pheromones with the probabilistic frequency of extreme heat).',
    ]},
    { type: 'paragraph', text: "Notice that the inference uses \"generally\" rather than \"always\" because the heat is only \"typical,\" not guaranteed. The correct answer must reflect this uncertainty." },

    { type: 'h4', text: 'Step 3: Evaluate Each Answer' },
    { type: 'paragraph', text: "Apply the Qualifier Matching Rule: does the answer respect every qualifier in the stimulus?" },
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: '(A) Most ants forage for food either only in the morning or only during the night.', text: 'This describes a plausible behavioral adaptation to heat, but the stimulus provides no evidence about when ants actually choose to forage. It speculates about ant behavior beyond what the facts support.', badge: 'Unwarranted Adaptation', badgeColor: 'red' },
      { title: '(B) Most ants that do not use pheromones... live in the Sahara Desert.', text: 'This reverses the direction of the inference. We can deduce that Saharan afternoon-foraging ants probably cannot rely on pheromones. We cannot deduce the reverse \u2014 that most pheromone-free ants live in the Sahara. Many species may skip pheromones for entirely different reasons.', badge: 'Reversal Trap', badgeColor: 'red' },
      { title: '(C) If any ants live in the Sahara... forage... in the afternoon, those ants generally do not use pheromones...', text: 'This answer is constructed with careful precision. "If" preserves the hypothetical scope. "Generally" reflects the probabilistic nature of the heat being only "typical." The reasoning chain is valid: afternoon heat typically destroys all pheromones, so ants foraging only then generally cannot rely on them.', badge: 'Correct', badgeColor: 'green' },
      { title: '(D) If any ants do not use pheromones... those ants use a different substance...', text: 'The stimulus says nothing about alternative navigation methods. This introduces entirely new information about a "different substance" that is never mentioned or implied.', badge: 'New Information Trap', badgeColor: 'red' },
      { title: '(E) ...those ants forage for food less efficiently...', text: 'The stimulus tells us pheromones would be unavailable, but it says nothing about the impact on foraging efficiency. Perhaps these ants have other navigation methods that work just as well.', badge: 'Unwarranted Consequence', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Key Lessons from This Drill' },
    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "**1. Tag every qualifier before reasoning.** Before you combine facts, label each one as absolute, probabilistic, or conditional. The weakest qualifier in the chain determines the strength of the conclusion.\n\n**2. The correct answer mirrors the stimulus\\'s hedging.** If the stimulus says \"most\" and \"typically,\" the correct answer will use conditional and hedged language like \"if\" and \"generally.\" Reject any answer that upgrades uncertainty to certainty.\n\n**3. Do not infer behavioral adaptations.** The stimulus tells you what would happen to pheromones under certain conditions. It does not tell you how ants respond to that problem. Answers that describe how ants adapt (changing foraging times, using alternative substances) go beyond the evidence." },
  ]
};
