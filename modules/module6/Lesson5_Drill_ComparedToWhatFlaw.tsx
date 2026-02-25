import { Lesson } from '../../types';

export const Lesson5_Drill_ComparedToWhatFlaw: Lesson = {
  id: "6-5",
  title: "Drill: The \"Compared to What?\" Flaw",
  content: [
    { type: 'h2', text: 'Drill: The "Compared to What?" Flaw' },

    { type: 'h3', text: 'Concept Focus: The Missing Comparison' },
    { type: 'paragraph', text: "Statistics on the LSAT are dangerous. They look like hard facts while hiding massive logical holes. One of the most common statistical traps is the **False Comparison** — drawing a comparative conclusion from data about only one group." },
    { type: 'paragraph', text: "The core of this flaw is simple: the argument tells you something about Group A and then concludes that Group A is *better*, *worse*, or *different* from Group B — without ever providing data about Group B. The question you must always ask is: **\"Compared to what?\"**" },
    { type: 'paragraph', text: "Consider this example: \"90% of people who exercise regularly live past 70. Therefore, exercise increases your lifespan.\" Sounds convincing — until you ask: what percentage of people who *don't* exercise live past 70? If the answer is 95%, then exercise actually *decreases* lifespan. Without the comparison data, the 90% figure is meaningless for drawing causal or comparative conclusions." },

    { type: 'hr' },

    { type: 'h3', text: 'Types of Compared-to-What Errors' },
    { type: 'paragraph', text: "The Missing Comparison flaw appears in several recognizable patterns. Each involves drawing a conclusion that requires comparing two groups while only providing evidence about one:" },
    { type: 'table', headers: ['Subtype', 'What\'s Missing', 'Example'], rows: [
      ['**Missing Baseline**', 'Data about the comparison group is entirely absent', '"80% of vegetarians are healthy. Therefore, vegetarianism improves health." (What % of non-vegetarians are healthy?)'],
      ['**Self-Selected Comparison**', 'The groups differ in ways beyond the variable being tested', '"People who take vitamin C report fewer colds. Vitamin C prevents colds." (People who take vitamins may also exercise, eat well, and sleep more.)'],
      ['**Incomplete Data**', 'Only one metric is reported when multiple are needed', '"City A has more robberies than City B. City A is more dangerous." (City A may be 10× larger — the *rate* per capita might be lower.)'],
      ['**Temporal Gap**', 'Comparison across time periods without controlling for other changes', '"Crime dropped after the new policy. The policy reduced crime." (Crime was already declining before the policy.)'],
    ]},
    { type: 'callout', variant: 'tip', title: 'The One-Group Red Flag', text: "Whenever an LSAT argument presents data about **only one group** and then draws a conclusion about whether that group is better, worse, or different from another group, you are almost certainly looking at a Compared-to-What flaw. The absence of baseline data is the gap." },

    { type: 'hr' },

    { type: 'h3', text: 'How This Flaw Appears in Parallel Structures' },
    { type: 'paragraph', text: "In Parallel Flaw questions, the Compared-to-What flaw follows a predictable three-part structure:" },
    { type: 'process', title: 'The Pattern', steps: [
      '**Statistic about one group:** "X% of Group A experience Outcome Y." The argument provides a data point for a single population.',
      '**Causal or comparative leap:** "Therefore, being in Group A causes/improves/increases Outcome Y." The argument draws a conclusion that *compares* Group A to an unmentioned baseline — implying Group A is better off.',
      '**Recommendation (often):** "Therefore, you should join Group A / do what Group A does." The argument makes a practical recommendation based on the unsupported causal claim.',
    ]},
    { type: 'paragraph', text: "When matching this flaw in answer choices, look for all three elements: single-group data, a comparative/causal conclusion, and (often) a recommendation. Be especially wary of answer choices that **include** the comparison data — they fix the flaw rather than replicating it." },

    { type: 'hr' },

    { type: 'h3', text: 'Common Traps in Compared-to-What Questions' },
    { type: 'paragraph', text: "The LSAT uses specific trap designs when the stimulus contains a Missing Comparison flaw:" },
    { type: 'breakdown', labels: { title: 'Trap Type', text: 'How It Works' }, items: [
      { title: 'The "Fixed" Answer', text: 'An answer choice that discusses the same type of reasoning but **includes** the comparison data (e.g., "Group A has a higher rate than Group B"). By providing the baseline, this choice avoids the flaw entirely. It is logically *stronger* than the stimulus, not parallel to it.', badge: 'Very Common', badgeColor: 'red' },
      { title: 'The Causal Argument', text: 'An answer choice that presents a correlation between two variables and concludes causation — but uses *two-group* comparative data rather than single-group data. The flaw is causal confusion, not a missing comparison. Different flaw type.', badge: 'Common', badgeColor: 'red' },
      { title: 'The Policy Mismatch', text: 'An answer choice that makes a policy recommendation based on different logical grounds (e.g., an appeal to authority or a moral argument rather than a statistical claim). The recommendation may sound similar, but the underlying reasoning differs.', badge: 'Occasional', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Question' },

    { type: 'question-card',
      id: 'PF-6-5-001',
      questionType: 'Parallel Flaw',
      difficulty: 'medium',
      stimulus: "Several carefully conducted studies showed that 75 percent of strict vegetarians reached age 50 without developing serious heart disease. We can conclude from this that avoiding meat increases one's chances of avoiding serious heart disease. Therefore, people who want to reduce the risk of serious heart disease should not eat meat.",
      question: "The flawed pattern of reasoning exhibited by which one of the following is most similar to that exhibited by the argument above?",
      options: [
        "(A) The majority of people who regularly drive over the speed limit will become involved in traffic accidents. To avoid harm to people who do not drive over the speed limit, we should hire more police officers to enforce the speed laws.",
        "(B) Studies have shown that cigarette smokers have a greater chance of incurring heart disease than people who do not smoke. Since cigarette smoking increases one's chances of incurring heart disease, people who want to try to avoid heart disease should give up cigarette smoking.",
        "(C) The majority of people who regularly drink coffee experience dental problems in the latter part of their lives. Since there is this correlation between drinking coffee and incurring dental problems, the government should make coffee less accessible to the general public.",
        "(D) Studies show that people who do not exercise regularly have a shorter life expectancy than those who exercise regularly. To help increase their patients' life expectancy, doctors should recommend regular exercise to their patients.",
        "(E) Most people who exercise regularly are able to handle stress. This shows that exercising regularly decreases one's chances of being overwhelmed by stress. So people who want to be able to handle stress should regularly engage in exercise. (Correct)",
      ],
    },

    { type: 'hr' },

    { type: 'h2', text: 'Full Step-by-Step Analysis' },

    { type: 'h3', text: 'Step 1: Identify the Flaw' },
    { type: 'paragraph', text: "Let's map the stimulus argument:" },
    { type: 'list', items: [
      '**Evidence:** 75% of strict vegetarians reached age 50 without serious heart disease. (Statistic about *one group* only.)',
      '**Intermediate Conclusion:** Avoiding meat increases one\'s chances of avoiding heart disease. (Comparative/causal claim.)',
      '**Final Conclusion:** People who want to reduce heart disease risk should not eat meat. (Recommendation.)',
    ]},
    { type: 'paragraph', text: "The critical question: **Compared to what?**" },
    { type: 'paragraph', text: "What if 90% of meat-eaters also reach age 50 without serious heart disease? If that were true, then being a vegetarian would actually *decrease* your chances of avoiding heart disease (75% vs. 90%). The argument only provides data about vegetarians. It never tells us the rate for non-vegetarians. Without this baseline comparison, the claim that \"avoiding meat *increases* one's chances\" is completely unsupported." },
    { type: 'paragraph', text: "This is the **Compared-to-What Flaw**: drawing a comparative conclusion (\"increases one's chances\") from non-comparative data (one group's success rate)." },

    { type: 'h3', text: 'Step 2: Abstract the Pattern' },
    { type: 'callout', title: 'Blueprint', variant: 'tip', text: "Statistic: X% of Group A experience [Good Outcome].\nConclusion: Being in Group A causes / increases [Good Outcome]. (No data about non-A group.)\nRecommendation: Therefore, everyone should do what Group A does." },

    { type: 'h3', text: 'Step 3: Match the Error' },
    { type: 'paragraph', text: "We need an argument that:\n1. Reports a success rate for a **single group** (no comparison group data)\n2. Concludes that the group's behavior **causes** the good outcome\n3. Makes a **recommendation** based on this unsupported causal claim" },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'breakdown', labels: { title: 'Option', text: 'Analysis' }, items: [
      {
        title: '(A) Majority of speeders will have accidents → hire more police',
        text: "This argument makes a recommendation about **public policy** (hiring police) to protect *other people* (those who don't speed). The structure is different: it doesn't claim that speeding *causes* accidents based on single-group data — it states a fact about speeders and makes a policy recommendation about enforcement. The logical architecture does not match.",
        badge: 'Incorrect — Different Structure',
        badgeColor: 'red'
      },
      {
        title: '(B) Smokers have a greater chance of heart disease THAN people who do not smoke',
        text: "This is the **\"Fixed\" trap.** Notice the crucial phrase: \"a greater chance... **than people who do not smoke**.\" This argument *includes the comparison data*. By comparing smokers to non-smokers, it avoids the Compared-to-What flaw entirely. The conclusion is actually well-supported by the evidence. This answer is incorrect *because* it is logically sound where the stimulus is not.",
        badge: 'Incorrect — Includes Baseline',
        badgeColor: 'red'
      },
      {
        title: '(C) Majority of coffee drinkers experience dental problems → government should restrict coffee',
        text: "This reports a one-group statistic (coffee drinkers) and makes a recommendation. However, note that it reports a *negative* outcome (dental problems) and recommends *restriction* (making coffee less accessible). The stimulus reports a *positive* outcome (avoiding heart disease) and recommends *adoption* (not eating meat). More importantly, the conclusion labels the finding as a \"correlation,\" which is a subtly different logical claim than the stimulus's causal assertion. The structural match is imperfect.",
        badge: 'Incorrect — Structural Mismatch',
        badgeColor: 'red'
      },
      {
        title: '(D) Non-exercisers have shorter life expectancy THAN exercisers → doctors should recommend exercise',
        text: "Like choice (B), this argument **includes the comparison**: \"shorter life expectancy **than those who exercise regularly**.\" By providing data for both groups (exercisers vs. non-exercisers), the argument avoids the Missing Comparison flaw. The reasoning is logically much stronger than the stimulus.",
        badge: 'Incorrect — Includes Baseline',
        badgeColor: 'red'
      },
      {
        title: '(E) Most people who exercise regularly handle stress → exercise decreases stress risk → exercise recommended',
        text: "Perfect match on all three elements:\n• **Single-group statistic:** \"Most people who exercise regularly are able to handle stress.\" (No data about non-exercisers.)\n• **Causal leap:** \"This shows that exercising regularly decreases one's chances of being overwhelmed by stress.\" (Compared to what? What if 99% of non-exercisers also handle stress?)\n• **Recommendation:** \"People who want to handle stress should exercise.\" (Based on the unsupported causal claim.)\n\nThe logical mechanism is identical: one-group success rate → unsupported causal claim → recommendation.",
        badge: 'Correct',
        badgeColor: 'green'
      },
    ]},

    { type: 'hr' },

    { type: 'h3', text: 'Trap Analysis: The "Fixed" Answers' },
    { type: 'paragraph', text: "The most instructive feature of this question is the design of choices **(B)** and **(D)**. Both discuss similar topics (health behaviors and outcomes) and reach similar conclusions (recommendations to change behavior). They *sound* like the stimulus. But they are incorrect precisely **because** they are logically sound:" },
    { type: 'table', headers: ['Element', 'Stimulus (Flawed)', 'Choice B (Sound)', 'Choice E (Flawed)'], rows: [
      ['**Data provided**', 'One group only (vegetarians)', 'Two groups compared (smokers vs. non-smokers)', 'One group only (exercisers)'],
      ['**Comparison baseline?**', 'No', 'Yes — "greater chance than"', 'No'],
      ['**Causal claim supported?**', 'No — no baseline', 'Better supported — comparative data provided', 'No — no baseline'],
      ['**Is the reasoning flawed?**', 'Yes', 'No — this is how epidemiology works', 'Yes — same flaw as stimulus'],
    ]},
    { type: 'paragraph', text: "In Parallel Flaw questions, you are **hunting for broken reasoning**, not valid reasoning. Choices that \"fix\" the flaw by adding the missing data are traps — they are incorrect *because* they are too good. The correct answer must be broken in the same way as the stimulus." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaways', text: "• The **Compared-to-What Flaw** draws a comparative or causal conclusion from data about only one group. The critical question is always: **\"What is the rate for the other group?\"**\n• The flaw has a predictable structure: **single-group statistic → causal/comparative conclusion → recommendation.**\n• There are four subtypes: **Missing Baseline** (no comparison group data at all), **Self-Selected Comparison** (groups differ in uncontrolled ways), **Incomplete Data** (wrong metric — counts vs. rates), and **Temporal Gap** (before/after without controls).\n• The most common trap is the **\"Fixed\" answer** — a choice that includes the comparison data and is therefore logically *sound*. Remember: you are looking for the broken argument, not the valid one.\n• To match this flaw in Parallel Flaw questions, verify three elements: (1) one-group data only, (2) causal or comparative leap, (3) recommendation. All three must be present." },
  ]
};
