import { Lesson } from '../../types';

export const Lesson3_CommonRolesAndPatterns: Lesson = {
  id: "1-3",
  title: "Common Roles & Patterns",
  content: [
    { type: 'h2', text: 'Argument Part — Common Roles & Patterns' },
    { type: 'paragraph', text: "While the function of a statement can be unique, most roles tested on Argument Part questions fall into a few common categories. This lesson maps every role you will encounter, shows you what each one looks like in a real stimulus, and teaches you to recognize argument structures at a glance." },

    { type: 'callout', variant: 'tip', title: 'The 80/20 Rule', text: "Approximately **78% of all Argument Part questions** target just three roles: **Premise (53.5%)**, **Main Conclusion (13.2%)**, and **Intermediate Conclusion (11.1%)**. Master these three first, and you will have a strong hypothesis for the vast majority of questions you encounter." },

    { type: 'hr' },

    { type: 'h3', text: 'Role Frequency Summary' },
    { type: 'paragraph', text: "The table below shows every role that appears in Argument Part questions, ordered by frequency. Use this as your probability-based starting point when forming hypotheses in Step 2 of the method." },

    { type: 'table', headers: ['Role', 'Frequency', 'In Plain English', 'Key Indicator Words'], rows: [
      ['**Premise / Evidence**', '53.5%', 'A fact or reason offered to support a conclusion', '*because, since, for, after all, given that*'],
      ['**Main Conclusion**', '13.2%', 'The ultimate point the argument is trying to prove', '*therefore, thus, so, hence, consequently*'],
      ['**Intermediate Conclusion**', '11.1%', 'A bridge: supported by evidence AND supports the main conclusion', '*so [mid-argument], this shows that, it follows*'],
      ['**Context / Background**', '9.0%', 'Undisputed facts that set the stage', '*It is well known, Historically, Generally*'],
      ['**Opposing Viewpoint**', '8.3%', 'A claim the author intends to argue against', '*Some argue, Critics claim, It is believed*'],
      ['**Concession**', '4.9%', 'A point the author grants to the other side', '*Although, While it is true, Granted, Despite*'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Core Argument Components' },

    { type: 'h3', text: '1. Premise / Evidence (53.5% of questions)' },
    { type: 'paragraph', text: "A fact, finding, or reason offered in support of a conclusion. Over half of all Argument Part questions target a statement functioning as evidence. Premises are the building blocks of every argument — their truth is taken for granted, and the argument uses them as foundation." },
    { type: 'paragraph', text: "**How to Spot It:** Premises often present factual claims, study results, general principles, or specific examples. They are frequently introduced by indicator words like *because, since, for, after all, given that, as evidenced by*." },

    { type: 'h4', text: 'What a Premise Looks Like' },
    { type: 'blockquote', text: '"A recent study of 10,000 patients found that those who exercised for 30 minutes daily had a 35% lower incidence of heart disease. This demonstrates that regular physical activity is an effective preventive measure against cardiovascular illness."' },
    { type: 'paragraph', text: "The first sentence is the **premise**: a factual study result offered as evidence. The second sentence (\"This demonstrates that...\") is the conclusion it supports." },

    { type: 'callout', variant: 'tip', title: 'Premise Sub-Types', text: "Not all premises look the same. They can appear as: **statistical data** (\"a 35% reduction\"), **expert testimony** (\"researchers have found\"), **analogies** (\"just as X, so too Y\"), **examples** (\"for instance\"), or **general principles** (\"all living organisms require water\"). The common thread is that they all provide **support** for another claim." },

    { type: 'hr' },

    { type: 'h3', text: '2. Main Conclusion (13.2% of questions)' },
    { type: 'paragraph', text: "The ultimate point the author is trying to prove — the central claim that all other evidence is structured to support. It receives support from other statements but does not itself support any other claim in the argument. It is the \"Ultimate Therefore\" of the stimulus." },
    { type: 'paragraph', text: "**How to Spot It:** Look for recommendations (*should, ought to*), predictions (*will, is likely to*), or judgments (*unreasonable, mistaken, overstated*). Conclusion indicator words include *therefore, thus, so, hence, consequently, it follows that*." },

    { type: 'h4', text: 'What a Main Conclusion Looks Like' },
    { type: 'blockquote', text: '"Because hybrid vehicles produce significantly fewer emissions per mile than conventional cars, and because their fuel efficiency reduces long-term ownership costs, consumers who are both environmentally and financially conscious should seriously consider purchasing a hybrid."' },
    { type: 'paragraph', text: "The recommendation (\"consumers... should seriously consider purchasing a hybrid\") is the **Main Conclusion**. The two \"because\" clauses are premises supporting it." },

    { type: 'hr' },

    { type: 'h3', text: '3. Intermediate / Subsidiary Conclusion (11.1% of questions)' },
    { type: 'paragraph', text: "A claim that acts as both a conclusion and a premise. It is supported by evidence (making it a conclusion), and it then serves as evidence for the main conclusion (making it a premise). This dual role is what makes it \"intermediate\" — it sits in the middle of the support chain." },
    { type: 'paragraph', text: "**How to Spot It:** Find a statement that has a \"because\" or \"since\" clause supporting it, but is then used to support a further claim. It often appears mid-argument, bridging a factual finding to a broader recommendation or judgment." },

    { type: 'h4', text: 'What an Intermediate Conclusion Looks Like' },
    { type: 'blockquote', text: '"Since the new software reduces processing time by 60%, it significantly improves office productivity. Management should therefore approve the department-wide upgrade."' },
    { type: 'paragraph', text: "\"It significantly improves office productivity\" is the **Intermediate Conclusion**. It is *supported by* the processing time data (a premise) and it *supports* the recommendation to approve the upgrade (the Main Conclusion)." },

    { type: 'process', title: 'Chain of Support', steps: [
      '**Premise:** The software reduces processing time by 60%.',
      '**Intermediate Conclusion:** It significantly improves office productivity.',
      '**Main Conclusion:** Management should approve the department-wide upgrade.',
    ]},

    { type: 'callout', variant: 'tip', title: 'The Most Misidentified Role', text: "Intermediate Conclusions are the most commonly misidentified role because they look like premises (they support something) AND like conclusions (they are supported by something). Always check **both directions**: does the statement receive support? Does it also give support? If yes to both, it is intermediate." },

    { type: 'hr' },

    { type: 'h2', text: 'Contextual and Counter-Argument Roles' },

    { type: 'h3', text: '4. Context / Framing (9.0% of questions)' },
    { type: 'paragraph', text: "Not every sentence is a piece of logical proof. Some statements simply set the stage by providing undisputed facts that the argument is built upon. Context statements neither support nor are supported by other claims — they frame the discussion." },
    { type: 'paragraph', text: "This category includes several distinct but related functions:" },

    { type: 'breakdown', labels: { title: 'Role Type', text: 'Function & Example' }, items: [
      { title: 'Background Info', text: '**Function:** Provides undisputed facts to frame the argument.\n**Example:** *"Landfills are generally designed to hold ten years\' worth of waste..."* The author doesn\'t prove this; it\'s a starting fact.' },
      { title: 'Phenomenon', text: '**Function:** Identifies an observation or puzzle the argument seeks to explain.\n**Example:** *"The rate of psychological problems is higher among children of divorced parents..."* The argument then debates the *cause* of this observation.' },
      { title: 'Bridge/Connection', text: '**Function:** Establishes the relevance of evidence to the conclusion, often within an analogy.\n**Example:** *"Recent scientific research...also can be described in esoteric language..."* This connects the Newton analogy to the modern day.' },
      { title: 'Constraint/Limitation', text: '**Function:** Narrows the scope of the argument\'s conclusion.\n**Example:** *"To the extent that homelessness arises from a lack of available housing..."* The argument that follows only applies to this specific case.' },
      { title: 'Common Ground', text: '**Function:** States a point of agreement between two opposing sides.\n**Example:** *"The second group grants that there are paintings that are not works of art..."* The author uses this agreement to analyze the nature of the dispute.' },
    ]},

    { type: 'h4', text: 'What Context Looks Like in a Stimulus' },
    { type: 'blockquote', text: '"The average American generates approximately 4.4 pounds of waste per day. Environmental advocates argue that mandatory composting programs would significantly reduce landfill usage. However, the infrastructure costs of such programs would far exceed their environmental benefits."' },
    { type: 'paragraph', text: "The first sentence (\"The average American generates...\") is pure **background context**. It sets the stage but is neither supported by nor supports any other claim. The argument proper begins with the second sentence." },

    { type: 'hr' },

    { type: 'h3', text: '5. Opposing Viewpoint / Target of Argument (8.3% of questions)' },
    { type: 'paragraph', text: "Many arguments are structured as rebuttals. The opposing viewpoint is a claim, hypothesis, or belief — often attributed to others — that the author's main conclusion is designed to challenge, refute, or cast doubt upon." },
    { type: 'paragraph', text: "**How to Spot It:** Introduced by attribution phrases: *\"Some people argue that...\", \"It has been claimed that...\", \"A common belief is that...\", \"Critics contend that...\"*. The author will then pivot with *But, However, Yet, Nevertheless* to introduce their own argument." },

    { type: 'h4', text: 'What an Opposing Viewpoint Looks Like' },
    { type: 'blockquote', text: '"Many educators believe that standardized testing is the most reliable measure of student achievement. However, a growing body of research suggests that such tests primarily measure test-taking ability rather than genuine understanding of the material."' },
    { type: 'paragraph', text: "The first sentence is the **Opposing Viewpoint** — a claim attributed to \"many educators\" that the author proceeds to challenge. The pivot word \"However\" signals the shift to the author's own position." },

    { type: 'hr' },

    { type: 'h3', text: '6. Concession (4.9% of questions)' },
    { type: 'paragraph', text: "To make their argument seem more reasonable, an author may grant a point that seems to favor an opposing view before showing why it doesn't ultimately change their conclusion. A concession is an acknowledgment of a fact or point that runs counter to the author's main argument." },
    { type: 'paragraph', text: "**How to Spot It:** Flagged by words like *Although..., While it is true that..., Granted..., Despite..., Admittedly...*. The author admits this point is true but then argues that it is outweighed by other considerations." },

    { type: 'h4', text: 'What a Concession Looks Like' },
    { type: 'blockquote', text: '"Although solar panels require a significant initial investment, their long-term energy savings and environmental benefits make them a sound financial decision for most homeowners."' },
    { type: 'paragraph', text: "\"Although solar panels require a significant initial investment\" is the **Concession**. The author admits the cost is real, then pivots to argue that the benefits outweigh it." },

    { type: 'hr' },

    { type: 'h2', text: 'Quick Recognition Guide' },
    { type: 'paragraph', text: "Use this table as a quick-reference cheat sheet. When you encounter a sentence in a stimulus, look for these indicator words to rapidly identify the most likely role." },

    { type: 'table', headers: ['Indicator Words / Phrases', 'Most Likely Role'], rows: [
      ['*because, since, for, after all, given that, as evidenced by*', '**Premise**'],
      ['*therefore, thus, so, hence, consequently, it follows that*', '**Conclusion** (Main or Intermediate)'],
      ['*for instance, for example, such as, to illustrate, consider*', '**Premise** (example type)'],
      ['*Some argue, Critics claim, It is believed, Many hold that*', '**Opposing Viewpoint**'],
      ['*Although, While it is true, Granted, Admittedly, Despite*', '**Concession**'],
      ['*But, However, Yet, Nevertheless, On the contrary*', '**Pivot** (next sentence is usually the author\'s conclusion)'],
      ['*It is well known, Historically, Generally, In recent years*', '**Context / Background**'],
      ['*Surprisingly, Paradoxically, It is puzzling that*', '**Phenomenon** (context sub-type)'],
      ['*should, ought to, must, is likely, will probably*', '**Conclusion** (recommendation/prediction)'],
      ['*This shows that, This demonstrates, This suggests*', '**Conclusion** (inference drawn from evidence)'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Pattern Recognition: The 3 Most Common Argument Structures' },
    { type: 'paragraph', text: "Most LSAT arguments follow one of three structural patterns. Recognizing the pattern instantly tells you what roles to expect and where to find them." },

    { type: 'h3', text: 'Pattern 1: Simple Argument' },
    { type: 'paragraph', text: "One or more premises directly support a single main conclusion. No intermediate steps, no opposing views." },
    { type: 'process', title: 'Structure', steps: [
      '**Premise(s):** One or more facts, observations, or reasons.',
      '**→ Main Conclusion:** The claim these facts support.',
    ]},
    { type: 'blockquote', text: '"The city\'s air quality index has improved by 30% since the ban on coal-fired power plants. The ban has been effective at reducing air pollution."' },
    { type: 'paragraph', text: "Premise (air quality improved 30%) → Conclusion (ban was effective). This is the most basic and most common structure." },

    { type: 'h3', text: 'Pattern 2: Chain Argument' },
    { type: 'paragraph', text: "A premise supports an intermediate conclusion, which in turn supports the main conclusion. The intermediate conclusion acts as a bridge in a multi-step reasoning chain." },
    { type: 'process', title: 'Structure', steps: [
      '**Premise:** A fact or finding.',
      '**→ Intermediate Conclusion:** A claim supported by the premise.',
      '**→ Main Conclusion:** The ultimate claim supported by the intermediate conclusion.',
    ]},
    { type: 'blockquote', text: '"Since the new filtration system removes 99% of contaminants, the facility\'s water output now meets federal safety standards. The board should therefore approve continued operation of the plant."' },
    { type: 'paragraph', text: "Premise (removes 99%) → Intermediate Conclusion (meets standards) → Main Conclusion (approve operation)." },

    { type: 'h3', text: 'Pattern 3: Rebuttal' },
    { type: 'paragraph', text: "The author presents someone else's position, then argues against it using their own evidence. The opposing viewpoint is the \"target\" and the author's conclusion is the rebuttal." },
    { type: 'process', title: 'Structure', steps: [
      "**Opposing Viewpoint:** A claim attributed to others (\"Some argue...\").",
      "**Pivot:** A contrast word (\"But\", \"However\").",
      '**Premise(s):** Evidence supporting the author\'s position.',
      '**→ Main Conclusion:** The author\'s counter-claim.',
    ]},
    { type: 'blockquote', text: '"Some nutritionists recommend eliminating all dietary fats. However, research consistently shows that unsaturated fats are essential for brain function and hormone regulation. A balanced diet should include moderate amounts of healthy fats."' },
    { type: 'paragraph', text: "Opposing View (eliminate all fats) → Pivot (\"However\") → Premise (unsaturated fats are essential) → Main Conclusion (diet should include healthy fats)." },

    { type: 'callout', variant: 'tip', title: 'Pattern Matching Saves Time', text: "When you recognize a pattern, you immediately know what roles to expect. In a Rebuttal, the first sentence is almost always the Opposing Viewpoint. In a Chain Argument, look for the bridge sentence — that is the Intermediate Conclusion. Pattern recognition turns a 90-second analysis into a 30-second one." },

    { type: 'hr' },

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "While you should be flexible and ready for any role, knowing these common patterns is a powerful advantage. The vast majority of the time, you will be identifying a **Premise**, a **Conclusion** (main or intermediate), a piece of **Context**, or an **Opposing Viewpoint**.\n\nRemember the 80/20 rule: ~78% of questions target just Premise, Conclusion, or Intermediate Conclusion. Master these three roles first, learn the indicator words, and practice recognizing the three common argument structures. This combination will make you fast and accurate on the overwhelming majority of Argument Part questions." },
  ]
};
