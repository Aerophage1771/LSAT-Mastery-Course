
import { Lesson } from '../../types';

export const Lesson5_Drill_AttackingTheData: Lesson = {
  id: "8-5",
  title: "Drill: Attacking the Data (PT-113-S-2-Q-14)",
  content: [
    { type: 'h2', text: 'Drill: Attacking the Data' },

    { type: 'h3', text: "Understanding Data-Based Weakening" },
    { type: 'paragraph', text: "The most common way to weaken a causal argument is to provide an **alternative cause**. An author sees a correlation between A and B and concludes A causes B; you weaken it by suggesting that an unmentioned factor, C, is the real cause. However, many causal arguments are vulnerable at a more fundamental stage. What happens when the evidence for the correlation itself is suspect?" },

    { type: 'paragraph', text: "This drill targets arguments where the evidence comes from **subjective sources like surveys, estimates, or memory**. In these cases, you aren't just looking for another cause for the effect; you are looking for a reason to doubt the numbers the author is using. A bias in the reporting of information can create a \"phantom correlation,\" making it seem like two things are linked when they are not." },

    { type: 'h3', text: 'Types of Data Attacks' },
    { type: 'paragraph', text: "When you suspect the data itself is the weak point, there are several specific ways to undermine it:" },

    { type: 'table', headers: ['Attack Type', 'What It Targets', 'Example'], rows: [
      ['**Reporting Bias**', 'Participants with certain characteristics systematically misreport information, creating a false correlation.', 'People with headaches overestimate how much time they spent on VDTs, inflating the apparent link between VDT use and headaches.'],
      ['**Selection Bias**', 'The sample is not representative of the population the conclusion is about.', 'A survey of gym members finds high exercise rates; this does not represent the general population.'],
      ['**Survivorship Bias**', 'Only successful or surviving cases are measured, ignoring those that failed or dropped out.', '"90% of companies that followed Strategy X are profitable" — but you only surveyed companies that still exist.'],
      ['**Measurement Error**', 'The instrument or method used to collect data is unreliable or inconsistent.', 'Self-reported diet surveys are notoriously inaccurate because people underestimate calorie intake.'],
      ['**Confounding Variable**', 'An unmeasured variable correlates with both the supposed cause and the effect, producing a spurious correlation.', 'Ice cream sales and drowning rates both rise in summer; heat is the confound, not ice cream.'],
    ]},

    { type: 'callout', variant: 'tip', title: 'The Key Question for Data Attacks', text: "Whenever a stimulus relies on self-reported data, estimates, surveys, or subjective assessments, ask: *\"Is there any reason why the data itself might be misleading?\"* If the people reporting the data have a systematic reason to over- or under-report, the correlation may be an artifact of the reporting process, not a reflection of reality." },

    { type: 'hr' },

    { type: 'h3', text: 'Reporting Bias: The Phantom Correlation' },
    { type: 'paragraph', text: "Reporting bias is one of the most powerful and frequently tested data attacks on the LSAT. It works by showing that the \"effect\" in the argument is actually causing the \"data\" that the author relies on. In other words, the perceived correlation is an illusion created by the way information was collected." },

    { type: 'paragraph', text: "Here is the logical chain:" },
    { type: 'process', title: 'How Reporting Bias Creates a Phantom Correlation', steps: [
      '**The author observes:** Group X (e.g., people with headaches) reports more of Behavior Y (e.g., VDT use) than Group Z (people without headaches).',
      '**The author concludes:** Behavior Y causes the condition in Group X (VDTs cause headaches).',
      '**The weakener reveals:** Group X has a systematic reason to *overestimate* their engagement in Behavior Y. Their condition (headaches) makes them more aware of or more likely to exaggerate their exposure to Y.',
      '**The result:** The correlation between Y and the condition is a **phantom** — it exists in the data but not in reality. The data is an artifact of biased reporting, not evidence of a causal relationship.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: "Practice Problem" },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },


    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: "Step-by-Step Analysis" },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: "Step 1: Find the Conclusion" },
    { type: 'paragraph', text: "Let's engage with the text sentence by sentence to see how the researchers build their causal case." },
    { 
      type: 'breakdown', 
      labels: { title: 'Quote', text: 'Analysis' },
      items: [
        { title: "\"In response to office workers' worries... researchers **asked** office workers to **estimate** both the amount of time they had spent using VDTs and how often they had suffered headaches...\"", text: "This is the **method** — the setup for the study. The crucial words are \"**asked**\" and \"**estimate**.\" This tells you the data is not based on objective measurement but on subjective memory and self-reporting. Estimates from a year ago are often inaccurate, and this should immediately trigger your critical radar.", badge: 'Method', badgeColor: 'slate' },
        { title: "\"According to the survey, frequent VDT users suffered from headaches more often than other office workers did...\"", text: "This is the **premise** — the correlation found in the self-reported data. Importantly, both variables (VDT use and headache frequency) were self-reported, not objectively measured.", badge: 'Premise', badgeColor: 'slate' },
        { title: "\"...leading researchers to conclude that VDTs cause headaches.\"", text: "This is the **conclusion** — a causal claim derived from a correlation found in survey data. The researchers leap from \"these two self-reported variables correlate\" to \"one causes the other.\"", badge: 'Conclusion', badgeColor: 'indigo' }
      ]
    },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The researchers assume that the correlation in the self-reported data reflects a real-world causal relationship — but the data is based entirely on subjective estimates that could be systematically biased." },

    { type: 'h3', text: "Step 2: Identify the Gap" },
    { type: 'paragraph', text: "**What Method of Reasoning is the argument using?**\nThe argument identifies a correlation from a survey and concludes causation. The logical chain is: self-reported VDT use correlates with self-reported headaches → VDTs cause headaches." },
    { type: 'paragraph', text: "**What's the Problem?**\nThere are two layers of vulnerability:" },
    { type: 'list', ordered: true, items: [
      "**Layer 1 — Correlation ≠ Causation:** Even if the correlation is real, it does not prove VDTs cause headaches. An alternative cause could explain both, or the causation could run in the opposite direction.",
      "**Layer 2 — The Data Itself May Be Flawed:** Because the data is self-reported, there may be a systematic bias in how people estimated their VDT usage. If people with headaches *think* they use VDTs more (even if they don't), the correlation is a phantom — an artifact of biased reporting, not evidence of a real relationship."
    ]},
    { type: 'paragraph', text: "Layer 2 is the deeper and more devastating attack. If the data itself is unreliable, the entire foundation of the argument collapses — you don't even get to the question of whether the correlation is causal." },

    { type: 'h3', text: "Step 3: Prephrase the Weakener" },
    { type: 'paragraph', text: "Prephrase: *\"The argument would be undermined if people with headaches systematically overestimated their VDT use — making the correlation an artifact of biased reporting rather than a reflection of reality.\"*" },
    { type: 'paragraph', text: "Alternative prephrase: *\"...if there is an alternative cause (like job stress) that explains both the VDT use and the headaches.\"*" },

    { type: 'h3', text: "Step 4: Match and Eliminate" },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) Few of the office workers surveyed participated in regular health programs during the year in question.", text: "This information is too vague and tangential. We don't know how health programs relate to VDT use or headaches, and the connection requires multiple additional assumptions to have any impact on the causal claim. **No clear impact on the argument's logic.**", badge: "Irrelevant", badgeColor: "red" },
        { title: "(B) In their study the researchers failed to ask the workers to distinguish between severe migraine headaches and mild headaches.", text: "The conclusion is about \"headaches\" in general — it does not specify severity. Differentiating between types of headaches does not undermine the core claim that VDTs cause headaches of any type. This is a methodology criticism that misses the central gap. **Targets the wrong detail.**", badge: "Wrong Gap", badgeColor: "red" },
        { title: "(C) Previous studies have shown that the glare from VDT screens causes some users to suffer eyestrain.", text: "This actually **strengthens** the argument. If VDT glare causes eyestrain, it provides a plausible physiological mechanism by which VDTs could also cause headaches (eyestrain often leads to headaches). An answer that supports the causal claim is the opposite of what you need. **Strengthener trap.**", badge: "Strengthener Trap", badgeColor: "red" },
        { title: "(D) Office workers who experienced frequent headaches were more likely than other workers to overestimate how much time they spent using VDTs.", text: "This is a direct attack on the integrity of the data. It reveals a **reporting bias**: workers with headaches systematically overreported their VDT usage. This means the group labeled \"frequent VDT users\" may not actually use VDTs more than anyone else — their headaches caused them to *think* they did. The correlation found in the survey is a **phantom correlation**, an artifact of biased self-reporting rather than evidence of a real causal link. This destroys the argument at its foundation.", badge: "Correct", badgeColor: "green" },
        { title: "(E) Office workers who regularly used VDTs experienced the same amount of job-related stress as workers who did not use VDTs.", text: "This actually **defends** the argument by ruling out a potential alternative cause. If VDT users have the same stress levels as non-users, then stress cannot be the hidden factor causing both VDT use and headaches. By eliminating an alternative explanation, this makes the VDT-headache link *more* plausible, not less. **Strengthener trap (subtle).**", badge: "Strengthener Trap", badgeColor: "red" }
      ]
    },

    { type: 'hr' },

    { type: 'h2', text: "Key Takeaways" },

    { type: 'h4', text: "Attacking the Data vs. Attacking the Causation" },
    { type: 'paragraph', text: "This question illustrates an important distinction between two levels of attack on a causal argument:" },
    { type: 'breakdown', labels: { title: 'Level of Attack', text: 'What It Does' }, items: [
      { title: 'Level 1: Attack the Causation', text: 'Accept the correlation as real but argue that it does not prove causation. Provide an alternative cause, show reverse causation, or argue coincidence. This is the standard approach for most causal arguments.', badge: 'Standard', badgeColor: 'blue' },
      { title: 'Level 2: Attack the Data', text: 'Show that the correlation itself is not real — it is an artifact of biased data collection, self-reporting errors, or measurement problems. If the data is unreliable, the correlation does not exist, and the causal claim has no foundation at all. This is a deeper and more devastating attack.', badge: 'Deeper', badgeColor: 'indigo' },
    ]},

    { type: 'h4', text: "Critical Thinking Habits for Data-Based Arguments" },
    { type: 'list', ordered: true, items: [
      "**Zoom in on the Qualifiers:** Whenever the evidence seems to match the conclusion perfectly, zoom in on the subtle details. Here, the words \"asked\" and \"estimate\" were the keys. Because the evidence was subjective, the easiest way to break the argument was to show that the subjectivity itself created the result.",
      "**Recognize the Reporting Bias Weakener:** A reporting bias answer explains why the data looks the way it does without the conclusion being true. It shows that the \"Effect\" (headaches) is actually causing the \"Evidence\" (the overestimation of VDT use). This is a frequent high-level way to destroy a survey-based argument.",
      "**Be Suspicious of Self-Reported Data:** On the LSAT, you are not a passive reader. Because you know a Weaken question requires a gap, you should actively search for any reason why the premises might be misleading. If the author uses estimates, memories, or subjective assessments, your primary avenue for weakening should be to question the accuracy of that data.",
      "**Watch for Strengthener Traps:** In this question, both (C) and (E) actually help the argument rather than hurt it. Under time pressure, (C) is especially dangerous because it mentions VDTs and a negative health outcome, which *feels* like a weakener. Always check direction: does this choice make the conclusion more or less likely?"
    ]},

    { type: 'callout', variant: 'summary', title: 'Data Attack Checklist', text: "**1. Identify the data source:** Is the evidence based on objective measurement or subjective reporting (surveys, estimates, memories)?\n\n**2. Look for systematic bias:** Is there a reason why one group would systematically over- or under-report? Would the condition being studied (the \"effect\") cause people to misperceive the \"cause\"?\n\n**3. Prephrase the phantom correlation:** *\"The correlation might not be real because the data collection method is biased in a way that creates the appearance of a link.\"*\n\n**4. Distinguish from alternative-cause weakeners:** An alternative cause says \"the correlation is real but has a different explanation.\" A data attack says \"the correlation itself is an illusion.\" The data attack is more devastating because it removes the argument's foundational evidence." },
  ]
};
