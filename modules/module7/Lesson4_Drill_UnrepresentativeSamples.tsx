import { Lesson } from '../../types';

export const Lesson4_Drill_UnrepresentativeSamples: Lesson = {
  id: "7-4",
  title: "Drill: Unrepresentative Samples (PT-101-S-2-Q-16)",
  content: [
    { type: 'h2', text: 'Drill: The Unrepresentative Sample in Evaluate Questions' },
    { type: 'paragraph', text: "Many arguments on the LSAT try to prove a big, general point by using a small, specific example. This is a valid way to reason — but only if the example is a fair representation of the larger group. The **Unrepresentative Sample** flaw occurs when an author uses evidence from a biased or unique subgroup to draw a conclusion about a much broader category, assuming that what is true for the part must be true for the whole." },
    { type: 'paragraph', text: "In Evaluate the Argument questions, the unrepresentative sample is not just a flaw to identify — it becomes the **pivotal question**. Instead of pointing at the error, you must find the question whose answer would determine whether the sample actually represents the population. If the sample is representative, the argument holds; if not, it collapses. This makes sample quality the single most decisive evaluation target." },

    { type: 'hr' },

    { type: 'h3', text: 'Why Sample Quality Is the Pivotal Question' },
    { type: 'paragraph', text: "In Strengthen and Weaken questions, you either fix or exploit a sampling problem. In Evaluate questions, you must remain neutral — you are a detective, not an advocate. Your job is to find the one question that could swing the argument either way. When an argument generalizes from a sample, that question is almost always: **\"Is this sample representative of the larger group?\"**" },
    { type: 'paragraph', text: "This works because the answer to this question produces a clean split:" },
    { type: 'breakdown', labels: { title: 'Possible Answer', text: 'Effect on the Argument' }, items: [
      { title: '"Yes — the sample is representative"', text: 'The argument is **strongly supported**. If the sample faithfully mirrors the larger population, then the trend observed in the sample is likely true of the whole group. The generalization is justified.', badge: 'Strengthens', badgeColor: 'green' },
      { title: '"No — the sample is not representative"', text: 'The argument is **devastated**. If the sample is biased, too small, or drawn from the wrong group, then the trend observed in it tells us nothing about the larger population. The conclusion is completely unsupported.', badge: 'Weakens', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "This clean Yes/No split is the hallmark of a correct Evaluate answer. When you see an argument that generalizes from a sample, you should immediately expect the pivotal question to target the sample's quality." },

    { type: 'hr' },

    { type: 'h3', text: 'Types of Sample Problems' },
    { type: 'paragraph', text: "Unrepresentative samples come in several varieties. Recognizing the specific type helps you prephrase the pivotal question more accurately and avoid trap answers that target a different — irrelevant — aspect of the evidence." },
    { type: 'table', headers: ['Problem Type', 'What Goes Wrong', 'LSAT Example Pattern'], rows: [
      ['**Self-Selection Bias**', 'Participants choose themselves into the sample, so only people with strong opinions or motivation are counted — the silent majority is missed', 'A voluntary survey about a policy attracts only supporters → conclusion about "most people"'],
      ['**Too Small**', 'The sample is so tiny that a few unusual cases can dominate the result, making any generalization unreliable', 'Three patients improved after a treatment → conclusion about the treatment\'s general effectiveness'],
      ['**Wrong Population**', 'The sample is drawn from a group that differs from the target population in some relevant way — different species, region, age group, industry, etc.', 'Evidence about North American fish → conclusion about all animal species worldwide'],
      ['**Time Period Mismatch**', 'The sample is drawn from a time period that may not reflect current conditions, or the data spans an era in which key variables changed', 'Data from the 1950s → conclusion about modern behavior or trends'],
    ]},
    { type: 'callout', variant: 'default', title: 'The Key Distinction', text: "In Flaw questions, you would describe the sampling error directly (\"generalizes from an unrepresentative sample\"). In Evaluate questions, you must find the **question** that tests whether the sample is representative. The flaw becomes the diagnostic target, not the diagnosis itself." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Apply the Yes/No Test to Sample Questions' },
    { type: 'paragraph', text: "When you have identified a candidate answer choice that asks about the sample's quality, apply the Yes/No Test as follows:" },
    { type: 'process', title: 'The Yes/No Test for Sampling Arguments', steps: [
      '**Step 1 — Identify the Sample and the Population:** What specific group does the evidence describe? What broader group does the conclusion claim to be about?',
      '**Step 2 — Spot the Scope Shift:** How are the sample and the population different? Different species? Different geography? Different time period? Different motivation? The scope shift tells you where the sample might fail.',
      '**Step 3 — Test the Candidate Answer:** Imagine answering "Yes" and then "No" to the candidate question. If one answer makes the argument much stronger and the other makes it much weaker, the question targets the gap. If both answers push in the same direction — or neither changes anything — the question is irrelevant.',
      '**Step 4 — Verify the Split Is Decisive:** The strongest Evaluate answers produce a dramatic swing. A representative sample validates the argument; an unrepresentative one destroys it. If the swing is mild or uncertain, keep looking.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'question-card',
      id: 'EV-7-4-001',
      questionType: 'Evaluate the Argument',
      difficulty: 'medium',
      stimulus: "The authors of a recent article examined warnings of an impending wave of extinctions of animal species within the next 100 years. These authors say that no evidence exists to support the idea that the rate of extinction of animal species is now accelerating. They are wrong, however. Consider only the data on fishes: 40 species and subspecies of North American fishes have vanished in the twentieth century, 13 between 1900 and 1950, and 27 since 1950.",
      question: "The answer to which one of the following questions would contribute most to an evaluation of the argument?",
      options: [
        "(A) Were the fish species and subspecies that became extinct unrepresentative of animal species in general with regard to their pattern of extinction? (Correct)",
        "(B) How numerous were the populations in 1950 of the species and subspecies of North American fishes that have become extinct since 1950?",
        "(C) Did any of the species or subspecies of North American fishes that became extinct in the twentieth century originate in regions outside of North America?",
        "(D) What proportion of North American fish species and subspecies whose populations were endangered in 1950 are now thriving?",
        "(E) Were any of the species or subspecies of North American fishes that became extinct in the twentieth century commercially important?",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "Let's break down the argument sentence by sentence to identify the structure and spot the logical leap." },

    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: "\"The authors of a recent article examined warnings of an impending wave of extinctions of animal species within the next 100 years. These authors say that no evidence exists to support the idea that the rate of extinction of animal species is now accelerating.\"", text: "This is the **opposing viewpoint** — the position the author intends to disprove. The key terms are \"animal species\" (a very broad category covering all animals worldwide) and \"accelerating\" (the rate is speeding up, not just occurring).", badge: 'Opposing View', badgeColor: 'slate' },
      { title: "\"They are wrong, however.\"", text: "This is the **main conclusion** — a direct, unqualified refutation. The author believes the rate of extinction *is* accelerating. The word \"however\" is a classic conclusion indicator signaling a pivot from the opposing view.", badge: 'Conclusion', badgeColor: 'indigo' },
      { title: "\"Consider only the data on fishes: 40 species and subspecies of North American fishes have vanished in the twentieth century, 13 between 1900 and 1950, and 27 since 1950.\"", text: "This is the **premise** — the sole evidence. The author presents numbers showing that the rate of fish extinction in North America roughly doubled in the second half of the century (13 → 27). This specific data about one taxonomic group in one region is the only support for the sweeping conclusion about all animal species.", badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'h3', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The argument's conclusion is about **all animal species** worldwide. The evidence is about **North American fishes** only. This is a classic scope shift from a specific subgroup (the sample) to a much larger population (the target). The argument assumes, without any proof, that the extinction pattern for fish in North America is the same as the pattern for mammals in Africa, insects in Asia, birds in South America, and reptiles in Australia." },
    { type: 'paragraph', text: "This is a massive logical leap. Fish might be uniquely vulnerable to a specific regional threat — water pollution, dam construction, habitat loss from agricultural runoff — that does not affect other types of animals in the same way. The evidence could be entirely true and yet tell us nothing about whether the broader rate of animal extinction is accelerating." },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The argument assumes that North American fish are a **representative sample** of all animal species worldwide — that the extinction trend among fish mirrors the trend for animals generally." },

    { type: 'h3', text: 'Step 3: Prephrase the Pivotal Question' },
    { type: 'paragraph', text: "Since the entire argument rests on the assumption that North American fish are a good proxy for all animals, the most critical question we can ask is one that tests this assumption directly. We need to know if the sample is fair:" },
    { type: 'blockquote', text: '*"Are fish special? Is their extinction pattern different from that of other animals?"*' },
    { type: 'paragraph', text: "If fish are typical — their pattern matches other species — the evidence is strong. If fish are atypical — they are uniquely vulnerable to something that does not affect other animals — the evidence is useless for proving the general conclusion. This is the make-or-break question." },

    { type: 'h3', text: 'Step 4: Apply the Yes/No Test to Choice (A)' },
    { type: 'paragraph', text: "Choice (A) asks: *\"Were the fish species and subspecies that became extinct unrepresentative of animal species in general with regard to their pattern of extinction?\"*" },
    { type: 'paragraph', text: "This directly matches our prephrase. Let's apply the Yes/No Test:" },

    { type: 'breakdown', labels: { title: 'Possible Answer', text: 'Effect on the Argument' }, items: [
      { title: '"Yes — the fish were unrepresentative of animal species in general"', text: 'The argument is **devastated**. If fish are a special case — uniquely vulnerable to threats that do not affect other animals — then their accelerating extinction rate tells us nothing about the broader trend. The sample is biased, and the conclusion is completely unsupported.', badge: 'Destroys', badgeColor: 'red' },
      { title: '"No — the fish were representative of animal species in general"', text: 'The argument is **strongly supported**. If the extinction pattern seen in fish is typical of what is happening across all animal groups, then the doubling of the fish extinction rate is powerful evidence that the broader rate of animal extinction is also accelerating.', badge: 'Validates', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "The answer to this question makes the argument's validity swing dramatically. One response destroys the argument; the other validates it. This is a textbook pass of the Yes/No Test." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'paragraph', text: "Let's examine why each incorrect choice fails the Yes/No Test — and what trap each one represents." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) Were the fish species and subspecies that became extinct unrepresentative of animal species in general with regard to their pattern of extinction?", text: "This is the **correct answer**. It directly targets the unrepresentative sample gap — the logical leap from fish to all animals. The Yes/No Test produces a decisive split: \"Yes\" destroys the argument; \"No\" validates it. This question goes to the heart of whether the evidence can support the conclusion.", badge: 'Correct', badgeColor: 'green' },
      { title: "(B) How numerous were the populations in 1950 of the species and subspecies of North American fishes that have become extinct since 1950?", text: "This is the **Irrelevant Detail Trap**. The population sizes of the extinct fish species before they vanished is a detail *internal* to the sample. Whether a species had 50 remaining individuals or 50,000 before going extinct does not help us determine whether fish extinction patterns are representative of other animal groups. The argument is about the *rate* of extinction (accelerating or not), not the *size* of populations. **Fails the Yes/No Test:** Neither a large nor small pre-extinction population tells us anything about whether the fish-to-all-animals generalization is valid.", badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: "(C) Did any of the species or subspecies of North American fishes that became extinct in the twentieth century originate in regions outside of North America?", text: "This is another **Irrelevant Detail Trap**. The geographic origin of a species has no bearing on why its population in North America vanished or whether that extinction pattern applies to other types of animals. A fish species that originated in Asia but went extinct in North America is still a North American fish for purposes of this data. **Fails the Yes/No Test:** Whether the species originated elsewhere does not affect the representativeness of the sample.", badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: "(D) What proportion of North American fish species and subspecies whose populations were endangered in 1950 are now thriving?", text: "This is the **Wrong Subgroup Trap**. The argument's evidence is about fish species that **went extinct**. This question asks about a different group — species that were endangered but **survived**. Information about survivors does not help evaluate the conclusion about the rate at which species are *disappearing*. It shifts the focus from extinction to recovery, which is an entirely different topic. **Fails the Yes/No Test:** A high or low recovery rate among endangered species does not tell us whether the extinction rate is accelerating.", badge: 'Wrong Subgroup', badgeColor: 'red' },
      { title: "(E) Were any of the species or subspecies of North American fishes that became extinct in the twentieth century commercially important?", text: "This is a **Scope Shift Trap**. The economic value of a species has no logical connection to the biological question of whether the rate of extinction is accelerating. Commercial importance might explain *why* a species went extinct (overfishing, for example), but the argument's conclusion is about the *rate* of extinction across all animals, not the causes. **Fails the Yes/No Test:** A species being commercially important does not make it more or less representative of animals generally.", badge: 'Scope Shift', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Takeaway' },
    { type: 'paragraph', text: "The core mistake in the argument is a **Part-to-Whole Fallacy** based on an unrepresentative sample. The author uses a specific part (North American fish) to make a broad claim about the whole (all animal species). In an Evaluate question, the correct response targets this gap by asking whether the part truly represents the whole." },

    { type: 'callout', variant: 'summary', title: 'Sample Representativeness as an Evaluation Target', text: "**1. Spot the Scope Shift:** Identify the group in the evidence (the sample) and the group in the conclusion (the population). Here, it is \"North American fishes\" vs. \"animal species\" — a shift across both taxonomy and geography.\n\n**2. Prephrase the Representativeness Question:** The most powerful evaluation question for any sampling argument asks whether the sample is biased, special, or different from the general population. Formulate this before reading the answer choices.\n\n**3. Look for \"Representative\" Language:** Correct answers in sample-based Evaluate questions often use words like \"representative,\" \"unrepresentative,\" \"typical,\" or \"similar to\" — these terms directly address the core assumption that the sample mirrors the population.\n\n**4. Apply the Yes/No Test:** A representative sample validates the argument; an unrepresentative one destroys it. This decisive split confirms you have found the right answer.\n\n**5. Reject Internal Details:** Trap answers typically ask about details *within* the sample (population sizes, geographic origins, economic value) that do not help bridge the gap *between* the sample and the broader population. These fail the Yes/No Test because neither answer decisively swings the argument." },

    { type: 'h3', text: 'Connecting to the Big Picture' },
    { type: 'paragraph', text: "The Unrepresentative Sample is one of several common gap patterns in Evaluate the Argument questions. Each pattern generates its own type of pivotal question:" },
    { type: 'breakdown', labels: { title: 'Gap Pattern', text: 'Pivotal Question It Generates' }, items: [
      { title: 'Missing Baseline', text: 'What was the metric *before* the intervention? (Covered in Lesson 3)', badge: 'Lesson 7-3', badgeColor: 'slate' },
      { title: 'Unrepresentative Sample', text: 'Is the sample representative of the population the conclusion is about? (This lesson)', badge: 'This Lesson', badgeColor: 'green' },
      { title: 'Rank vs. Raw Number', text: 'What are the actual numbers behind the ranking? (Covered in Lesson 5)', badge: 'Lesson 7-5', badgeColor: 'slate' },
    ]},
    { type: 'paragraph', text: "Regardless of the specific pattern, the evaluation strategy is always the same: find the gap, formulate the question that targets it, and verify with the Yes/No Test. The better you become at recognizing these patterns, the faster you will identify the pivotal question — and the less tempted you will be by trap answers that ask about irrelevant details." },
  ]
};
