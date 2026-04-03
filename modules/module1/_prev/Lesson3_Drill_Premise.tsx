import { Lesson } from '../../types';

export const Lesson3_Drill_Premise: Lesson = {
  id: "1-3",
  title: "Drill: Premise (PT-111-S-4-Q-2)",
  content: [
    { type: 'h3', text: "Practice Drill: Identifying an Argument Part (PT-111-S-4-Q-2)" },
    { type: 'paragraph', text: "This drill focuses on identifying the specific structural role a highlighted sentence plays within an argument. We're starting with a question that targets the most fundamental building block of any logical argument." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-111-S-4-Q-2',
      stimulus: "**Economist:** Many analysts predict that the new tariff policy will increase domestic manufacturing jobs. However, this outcome is unlikely. **Domestic manufacturers rely heavily on imported raw materials, which will become significantly more expensive under the new policy.** Consequently, production costs will rise, forcing manufacturers to cut labor costs to remain competitive.",
      question: "The statement that *domestic manufacturers rely heavily on imported raw materials* figures in the economist's argument in which one of the following ways?",
      options: [
      "**(A)** It is the main conclusion of the argument.",
      "**(B)** It is a claim that the argument seeks to refute.",
      "**(C)** It is a premise offered in support of the claim that production costs will rise.",
      "**(D)** It is a background fact used to set the context for the debate.",
      "**(E)** It is an intermediate conclusion supported by the claim that labor costs must be cut."
    ]
    },
    
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    
    { type: 'h3', text: "1. Find the Target" },
    { type: 'paragraph', text: "The target is the bolded sentence: *\"Domestic manufacturers rely heavily on imported raw materials...\"*" },
    
    { type: 'h3', text: "2. Break Down the Content Line-by-Line" },
    { type: 'paragraph', text: "First, let's paraphrase each sentence to ensure we understand its meaning before analyzing its function." },
    
    { type: 'breakdown', labels: { title: 'Quote', text: 'Meaning' }, items: [
      { 
        title: "\"Many analysts predict that the new tariff policy will increase domestic manufacturing jobs.\"",
        text: "Someone else's opinion is that the policy will be good for jobs."
      },
      { 
        title: "\"However, this outcome is unlikely.\"",
        text: "The author disagrees and thinks jobs will *not* increase. This is the author's main stance."
      },
      { 
        title: "\"**Domestic manufacturers rely heavily on imported raw materials, which will become significantly more expensive under the new policy.**\" (Target)",
        text: "The author presents a fact: companies need foreign materials, and the policy will make those materials cost more."
      },
      { 
        title: "\"Consequently, production costs will rise, forcing manufacturers to cut labor costs to remain competitive.\"",
        text: "The author outlines a chain reaction: higher material costs lead to higher overall business costs, which will force companies to spend less on employees (i.e., fire people or lower wages)."
      }
    ]},

    { type: 'h3', text: "3. Map the Argument's Logical Structure" },
    { type: 'paragraph', text: "Now, using our understanding of the content, we can determine the logical role of each piece." },
    
    { type: 'breakdown', labels: { title: 'Text / Quote', text: 'Role Analysis' }, items: [
      { 
        title: "\"Many analysts predict that the new tariff policy will increase domestic manufacturing jobs.\"",
        text: "Presents a viewpoint the author intends to debunk.",
        badge: "Opposing View",
        badgeColor: "indigo"
      },
      { 
        title: "\"However, this outcome is unlikely.\"",
        text: "The author's central claim, which the rest of the argument is built to prove.",
        badge: "Main Conclusion",
        badgeColor: "indigo"
      },
      { 
        title: "\"**Domestic manufacturers rely heavily on imported raw materials...**\" (Target)",
        text: "A factual claim used as the foundational reason for the author's argument. It doesn't receive support from any other statement.",
        badge: "Premise",
        badgeColor: "indigo"
      },
      { 
        title: "\"Consequently, production costs will rise...\"",
        text: "Follows logically from the premise. The claim that \"production costs will rise\" is a direct result of the premise. It then supports the final proof.",
        badge: "Sub-conclusion",
        badgeColor: "indigo"
      }
    ]},

    { type: 'h3', text: "4. Pinpoint Role & Predict" },
    { type: 'paragraph', text: "The target statement is a foundational piece of evidence. It initiates the author's entire chain of reasoning and is not supported by any other statement." },
    { type: 'callout', title: "Prediction", variant: "tip", text: "Therefore, our prediction is: **The target statement is a premise that functions as the evidence for the subsequent claim that production costs will rise.**" },
    
    { type: 'h3', text: "5. Evaluate Answer Choices" },
    
    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
       {
         title: "(A) It is the main conclusion of the argument.",
         text: "The main conclusion is the author's central opinion, which is that the predicted job increase is \"unlikely.\" The target statement is a factual claim presented as a *reason* for this conclusion, not the conclusion itself.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(B) It is a claim that the argument seeks to refute.",
         text: "The argument seeks to refute the analysts' prediction that jobs will increase. The author presents the target statement as a true and undisputed fact to *build* their own case.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(C) It is a premise offered in support of the claim that production costs will rise.",
         text: "This perfectly describes the target statement's function. It directly answers the question, \"Why will production costs rise?\" Because raw materials will become more expensive. This is a classic premise-conclusion relationship.",
         badge: "Correct",
         badgeColor: "green"
       },
       {
         title: "(D) It is a background fact used to set the context for the debate.",
         text: "This statement is not neutral context; it is an active and essential piece of the author's reasoning. The entire argument hinges on this fact. Without it, the claim that costs will rise is unsupported.",
         badge: "Incorrect",
         badgeColor: "red"
       },
       {
         title: "(E) It is an intermediate conclusion supported by the claim that labor costs must be cut.",
         text: "This choice reverses the direction of support. The argument's logic flows from the target statement *to* the labor cuts, not the other way around. The fact that materials will get more expensive is not proven *by* the need to cut labor costs; rather, it is the *cause* of it.",
         badge: "Incorrect",
         badgeColor: "red"
       }
    ]},

    { type: 'callout', title: "Summary & Key Takeaways", variant: "summary", text: "This question tests your ability to identify a core **premise**. A premise is the evidence or reason an author provides to support another claim.\n\nTo distinguish roles, ask yourself these key questions:\n* **Does it GIVE support or RECEIVE support?** A premise only *gives* support. A conclusion *receives* it. The target statement gives support to the idea that costs will rise.\n* **Is it an ACTIVE part of the reasoning or PASSIVE context?** A premise is an active link in the logical chain. Background info is not. The target statement is crucial to proving the conclusion.\n* **What is the DIRECTION of the logic?** Does A lead to B, or does B lead to A? Incorrect choices often reverse this flow. Here, expensive materials (target) lead to higher costs, not the other way around." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "Argument Part — Common Roles & Patterns"
        },
        {
          "type": "paragraph",
          "text": "While the function of a statement can be unique, most roles tested on Argument Part questions fall into a few common categories. This lesson maps every role you will encounter, shows you what each one looks like in a real stimulus, and teaches you to recognize argument structures at a glance."
        },
        {
          "type": "callout",
          "title": "The 80/20 Rule",
          "variant": "tip",
          "text": "Approximately **78% of all Argument Part questions** target just three roles: **Premise (53.5%)**, **Main Conclusion (13.2%)**, and **Intermediate Conclusion (11.1%)**. Master these three first, and you will have a strong hypothesis for the vast majority of questions you encounter."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Role Frequency Summary"
        },
        {
          "type": "paragraph",
          "text": "The table below shows every role that appears in Argument Part questions, ordered by frequency. Use this as your probability-based starting point when forming hypotheses in Step 2 of the method."
        },
        {
          "type": "table",
          "headers": [
            "Role",
            "Frequency",
            "In Plain English",
            "Key Indicator Words"
          ],
          "rows": [
            [
              "**Premise / Evidence**",
              "53.5%",
              "A fact or reason offered to support a conclusion",
              "*because, since, for, after all, given that*"
            ],
            [
              "**Main Conclusion**",
              "13.2%",
              "The ultimate point the argument is trying to prove",
              "*therefore, thus, so, hence, consequently*"
            ],
            [
              "**Intermediate Conclusion**",
              "11.1%",
              "A bridge: supported by evidence AND supports the main conclusion",
              "*so [mid-argument], this shows that, it follows*"
            ],
            [
              "**Context / Background**",
              "9.0%",
              "Undisputed facts that set the stage",
              "*It is well known, Historically, Generally*"
            ],
            [
              "**Opposing Viewpoint**",
              "8.3%",
              "A claim the author intends to argue against",
              "*Some argue, Critics claim, It is believed*"
            ],
            [
              "**Concession**",
              "4.9%",
              "A point the author grants to the other side",
              "*Although, While it is true, Granted, Despite*"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Core Argument Components"
        },
        {
          "type": "h3",
          "text": "1. Premise / Evidence (53.5% of questions)"
        },
        {
          "type": "paragraph",
          "text": "A fact, finding, or reason offered in support of a conclusion. Over half of all Argument Part questions target a statement functioning as evidence. Premises are the building blocks of every argument — their truth is taken for granted, and the argument uses them as foundation."
        },
        {
          "type": "paragraph",
          "text": "**How to Spot It:** Premises often present factual claims, study results, general principles, or specific examples. They are frequently introduced by indicator words like *because, since, for, after all, given that, as evidenced by*."
        },
        {
          "type": "h4",
          "text": "What a Premise Looks Like"
        },
        {
          "type": "blockquote",
          "text": "\"A recent study of 10,000 patients found that those who exercised for 30 minutes daily had a 35% lower incidence of heart disease. This demonstrates that regular physical activity is an effective preventive measure against cardiovascular illness.\""
        },
        {
          "type": "paragraph",
          "text": "The first sentence is the **premise**: a factual study result offered as evidence. The second sentence (\"This demonstrates that...\") is the conclusion it supports."
        },
        {
          "type": "callout",
          "title": "Premise Sub-Types",
          "variant": "tip",
          "text": "Not all premises look the same. They can appear as: **statistical data** (\"a 35% reduction\"), **expert testimony** (\"researchers have found\"), **analogies** (\"just as X, so too Y\"), **examples** (\"for instance\"), or **general principles** (\"all living organisms require water\"). The common thread is that they all provide **support** for another claim."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "2. Main Conclusion (13.2% of questions)"
        },
        {
          "type": "paragraph",
          "text": "The ultimate point the author is trying to prove — the central claim that all other evidence is structured to support. It receives support from other statements but does not itself support any other claim in the argument. It is the \"Ultimate Therefore\" of the stimulus."
        },
        {
          "type": "paragraph",
          "text": "**How to Spot It:** Look for recommendations (*should, ought to*), predictions (*will, is likely to*), or judgments (*unreasonable, mistaken, overstated*). Conclusion indicator words include *therefore, thus, so, hence, consequently, it follows that*."
        },
        {
          "type": "h4",
          "text": "What a Main Conclusion Looks Like"
        },
        {
          "type": "blockquote",
          "text": "\"Because hybrid vehicles produce significantly fewer emissions per mile than conventional cars, and because their fuel efficiency reduces long-term ownership costs, consumers who are both environmentally and financially conscious should seriously consider purchasing a hybrid.\""
        },
        {
          "type": "paragraph",
          "text": "The recommendation (\"consumers... should seriously consider purchasing a hybrid\") is the **Main Conclusion**. The two \"because\" clauses are premises supporting it."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "3. Intermediate / Subsidiary Conclusion (11.1% of questions)"
        },
        {
          "type": "paragraph",
          "text": "A claim that acts as both a conclusion and a premise. It is supported by evidence (making it a conclusion), and it then serves as evidence for the main conclusion (making it a premise). This dual role is what makes it \"intermediate\" — it sits in the middle of the support chain."
        },
        {
          "type": "paragraph",
          "text": "**How to Spot It:** Find a statement that has a \"because\" or \"since\" clause supporting it, but is then used to support a further claim. It often appears mid-argument, bridging a factual finding to a broader recommendation or judgment."
        },
        {
          "type": "h4",
          "text": "What an Intermediate Conclusion Looks Like"
        },
        {
          "type": "blockquote",
          "text": "\"Since the new software reduces processing time by 60%, it significantly improves office productivity. Management should therefore approve the department-wide upgrade.\""
        },
        {
          "type": "paragraph",
          "text": "\"It significantly improves office productivity\" is the **Intermediate Conclusion**. It is *supported by* the processing time data (a premise) and it *supports* the recommendation to approve the upgrade (the Main Conclusion)."
        },
        {
          "type": "process",
          "title": "Chain of Support",
          "steps": [
            "**Premise:** The software reduces processing time by 60%.",
            "**Intermediate Conclusion:** It significantly improves office productivity.",
            "**Main Conclusion:** Management should approve the department-wide upgrade."
          ]
        },
        {
          "type": "callout",
          "title": "The Most Misidentified Role",
          "variant": "tip",
          "text": "Intermediate Conclusions are the most commonly misidentified role because they look like premises (they support something) AND like conclusions (they are supported by something). Always check **both directions**: does the statement receive support? Does it also give support? If yes to both, it is intermediate."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Contextual and Counter-Argument Roles"
        },
        {
          "type": "h3",
          "text": "4. Context / Framing (9.0% of questions)"
        },
        {
          "type": "paragraph",
          "text": "Not every sentence is a piece of logical proof. Some statements simply set the stage by providing undisputed facts that the argument is built upon. Context statements neither support nor are supported by other claims — they frame the discussion."
        },
        {
          "type": "paragraph",
          "text": "This category includes several distinct but related functions:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Role Type",
            "text": "Function & Example"
          },
          "items": [
            {
              "title": "Background Info",
              "text": "**Function:** Provides undisputed facts to frame the argument.\n**Example:** *\"Landfills are generally designed to hold ten years' worth of waste...\"* The author doesn't prove this; it's a starting fact."
            },
            {
              "title": "Phenomenon",
              "text": "**Function:** Identifies an observation or puzzle the argument seeks to explain.\n**Example:** *\"The rate of psychological problems is higher among children of divorced parents...\"* The argument then debates the *cause* of this observation."
            },
            {
              "title": "Bridge/Connection",
              "text": "**Function:** Establishes the relevance of evidence to the conclusion, often within an analogy.\n**Example:** *\"Recent scientific research...also can be described in esoteric language...\"* This connects the Newton analogy to the modern day."
            },
            {
              "title": "Constraint/Limitation",
              "text": "**Function:** Narrows the scope of the argument's conclusion.\n**Example:** *\"To the extent that homelessness arises from a lack of available housing...\"* The argument that follows only applies to this specific case."
            },
            {
              "title": "Common Ground",
              "text": "**Function:** States a point of agreement between two opposing sides.\n**Example:** *\"The second group grants that there are paintings that are not works of art...\"* The author uses this agreement to analyze the nature of the dispute."
            }
          ]
        },
        {
          "type": "h4",
          "text": "What Context Looks Like in a Stimulus"
        },
        {
          "type": "blockquote",
          "text": "\"The average American generates approximately 4.4 pounds of waste per day. Environmental advocates argue that mandatory composting programs would significantly reduce landfill usage. However, the infrastructure costs of such programs would far exceed their environmental benefits.\""
        },
        {
          "type": "paragraph",
          "text": "The first sentence (\"The average American generates...\") is pure **background context**. It sets the stage but is neither supported by nor supports any other claim. The argument proper begins with the second sentence."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "5. Opposing Viewpoint / Target of Argument (8.3% of questions)"
        },
        {
          "type": "paragraph",
          "text": "Many arguments are structured as rebuttals. The opposing viewpoint is a claim, hypothesis, or belief — often attributed to others — that the author's main conclusion is designed to challenge, refute, or cast doubt upon."
        },
        {
          "type": "paragraph",
          "text": "**How to Spot It:** Introduced by attribution phrases: *\"Some people argue that...\", \"It has been claimed that...\", \"A common belief is that...\", \"Critics contend that...\"*. The author will then pivot with *But, However, Yet, Nevertheless* to introduce their own argument."
        },
        {
          "type": "h4",
          "text": "What an Opposing Viewpoint Looks Like"
        },
        {
          "type": "blockquote",
          "text": "\"Many educators believe that standardized testing is the most reliable measure of student achievement. However, a growing body of research suggests that such tests primarily measure test-taking ability rather than genuine understanding of the material.\""
        },
        {
          "type": "paragraph",
          "text": "The first sentence is the **Opposing Viewpoint** — a claim attributed to \"many educators\" that the author proceeds to challenge. The pivot word \"However\" signals the shift to the author's own position."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "6. Concession (4.9% of questions)"
        },
        {
          "type": "paragraph",
          "text": "To make their argument seem more reasonable, an author may grant a point that seems to favor an opposing view before showing why it doesn't ultimately change their conclusion. A concession is an acknowledgment of a fact or point that runs counter to the author's main argument."
        },
        {
          "type": "paragraph",
          "text": "**How to Spot It:** Flagged by words like *Although..., While it is true that..., Granted..., Despite..., Admittedly...*. The author admits this point is true but then argues that it is outweighed by other considerations."
        },
        {
          "type": "h4",
          "text": "What a Concession Looks Like"
        },
        {
          "type": "blockquote",
          "text": "\"Although solar panels require a significant initial investment, their long-term energy savings and environmental benefits make them a sound financial decision for most homeowners.\""
        },
        {
          "type": "paragraph",
          "text": "\"Although solar panels require a significant initial investment\" is the **Concession**. The author admits the cost is real, then pivots to argue that the benefits outweigh it."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Quick Recognition Guide"
        },
        {
          "type": "paragraph",
          "text": "Use this table as a quick-reference cheat sheet. When you encounter a sentence in a stimulus, look for these indicator words to rapidly identify the most likely role."
        },
        {
          "type": "table",
          "headers": [
            "Indicator Words / Phrases",
            "Most Likely Role"
          ],
          "rows": [
            [
              "*because, since, for, after all, given that, as evidenced by*",
              "**Premise**"
            ],
            [
              "*therefore, thus, so, hence, consequently, it follows that*",
              "**Conclusion** (Main or Intermediate)"
            ],
            [
              "*for instance, for example, such as, to illustrate, consider*",
              "**Premise** (example type)"
            ],
            [
              "*Some argue, Critics claim, It is believed, Many hold that*",
              "**Opposing Viewpoint**"
            ],
            [
              "*Although, While it is true, Granted, Admittedly, Despite*",
              "**Concession**"
            ],
            [
              "*But, However, Yet, Nevertheless, On the contrary*",
              "**Pivot** (next sentence is usually the author's conclusion)"
            ],
            [
              "*It is well known, Historically, Generally, In recent years*",
              "**Context / Background**"
            ],
            [
              "*Surprisingly, Paradoxically, It is puzzling that*",
              "**Phenomenon** (context sub-type)"
            ],
            [
              "*should, ought to, must, is likely, will probably*",
              "**Conclusion** (recommendation/prediction)"
            ],
            [
              "*This shows that, This demonstrates, This suggests*",
              "**Conclusion** (inference drawn from evidence)"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Pattern Recognition: The 3 Most Common Argument Structures"
        },
        {
          "type": "paragraph",
          "text": "Most LSAT arguments follow one of three structural patterns. Recognizing the pattern instantly tells you what roles to expect and where to find them."
        },
        {
          "type": "h3",
          "text": "Pattern 1: Simple Argument"
        },
        {
          "type": "paragraph",
          "text": "One or more premises directly support a single main conclusion. No intermediate steps, no opposing views."
        },
        {
          "type": "process",
          "title": "Structure",
          "steps": [
            "**Premise(s):** One or more facts, observations, or reasons.",
            "**→ Main Conclusion:** The claim these facts support."
          ]
        },
        {
          "type": "blockquote",
          "text": "\"The city's air quality index has improved by 30% since the ban on coal-fired power plants. The ban has been effective at reducing air pollution.\""
        },
        {
          "type": "paragraph",
          "text": "Premise (air quality improved 30%) → Conclusion (ban was effective). This is the most basic and most common structure."
        },
        {
          "type": "h3",
          "text": "Pattern 2: Chain Argument"
        },
        {
          "type": "paragraph",
          "text": "A premise supports an intermediate conclusion, which in turn supports the main conclusion. The intermediate conclusion acts as a bridge in a multi-step reasoning chain."
        },
        {
          "type": "process",
          "title": "Structure",
          "steps": [
            "**Premise:** A fact or finding.",
            "**→ Intermediate Conclusion:** A claim supported by the premise.",
            "**→ Main Conclusion:** The ultimate claim supported by the intermediate conclusion."
          ]
        },
        {
          "type": "blockquote",
          "text": "\"Since the new filtration system removes 99% of contaminants, the facility's water output now meets federal safety standards. The board should therefore approve continued operation of the plant.\""
        },
        {
          "type": "paragraph",
          "text": "Premise (removes 99%) → Intermediate Conclusion (meets standards) → Main Conclusion (approve operation)."
        },
        {
          "type": "h3",
          "text": "Pattern 3: Rebuttal"
        },
        {
          "type": "paragraph",
          "text": "The author presents someone else's position, then argues against it using their own evidence. The opposing viewpoint is the \"target\" and the author's conclusion is the rebuttal."
        },
        {
          "type": "process",
          "title": "Structure",
          "steps": [
            "**Opposing Viewpoint:** A claim attributed to others (\"Some argue...\").",
            "**Pivot:** A contrast word (\"But\", \"However\").",
            "**Premise(s):** Evidence supporting the author's position.",
            "**→ Main Conclusion:** The author's counter-claim."
          ]
        },
        {
          "type": "blockquote",
          "text": "\"Some nutritionists recommend eliminating all dietary fats. However, research consistently shows that unsaturated fats are essential for brain function and hormone regulation. A balanced diet should include moderate amounts of healthy fats.\""
        },
        {
          "type": "paragraph",
          "text": "Opposing View (eliminate all fats) → Pivot (\"However\") → Premise (unsaturated fats are essential) → Main Conclusion (diet should include healthy fats)."
        },
        {
          "type": "callout",
          "title": "Pattern Matching Saves Time",
          "variant": "tip",
          "text": "When you recognize a pattern, you immediately know what roles to expect. In a Rebuttal, the first sentence is almost always the Opposing Viewpoint. In a Chain Argument, look for the bridge sentence — that is the Intermediate Conclusion. Pattern recognition turns a 90-second analysis into a 30-second one."
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaway",
          "variant": "summary",
          "text": "While you should be flexible and ready for any role, knowing these common patterns is a powerful advantage. The vast majority of the time, you will be identifying a **Premise**, a **Conclusion** (main or intermediate), a piece of **Context**, or an **Opposing Viewpoint**.\n\nRemember the 80/20 rule: ~78% of questions target just Premise, Conclusion, or Intermediate Conclusion. Master these three roles first, learn the indicator words, and practice recognizing the three common argument structures. This combination will make you fast and accurate on the overwhelming majority of Argument Part questions."
        }
      ],
    },
  },
};
