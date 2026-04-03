import { Lesson } from '../../types';

export const Lesson3_Drill_SourceAttack: Lesson = {
  id: "5-3",
  title: "Drill: Source Attack (PT-102-S-3-Q-14)",
  content: [
    { type: 'h3', text: "Practice Drill: Flaw (PT-102-S-3-Q-14)" },
    { type: 'paragraph', text: "This drill will walk you through a classic and common flaw type: the **Source Attack**, also known as an **Ad Hominem** fallacy. In this type of flawed argument, the author attacks the person or group making a claim, rather than the claim itself." },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },
    { type: 'hr' },
    {
      type: 'question-card',
      id: 'PT-102-S-3-Q-14',
      stimulus: "**Herbalist:** Many of my customers find that their physical coordination improves after drinking juice containing certain herbs. A few doctors assert that the herbs are potentially harmful, but doctors are always trying to maintain a monopoly over medical therapies. So there is no reason not to try my herb juice.",
      question: "The reasoning in the herbalist’s argument is flawed because the argument",
      options: [
        "**(A)** attempts to force acceptance of a claim by inducing fear of the consequences of rejecting that claim",
        "**(B)** bases a conclusion on claims that are inconsistent with each other",
        "**(C)** rejects a claim by attacking the proponents of the claim rather than addressing the claim itself",
        "**(D)** relies on evidence presented in terms that presuppose the truth of the claim for which the evidence is offered",
        "**(E)** mistakes the observation that one thing happens after another for proof that the second thing is the result of the first"
      ]
    },
    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },
    { type: 'h3', text: "Analysis & Explanation" },
    { type: 'paragraph', text: "*(Scroll down only after attempting the question)*" },
    { type: 'hr' },
    { type: 'h3', text: "1. Identify the Conclusion and Premises" },
    { 
      type: 'breakdown', 
      labels: { title: 'Quote', text: 'Role Analysis' }, 
      items: [
        {
          title: "\"Many of my customers find that their physical coordination improves...\"",
          text: "**Premise 1:** Anecdotal evidence for a benefit.",
          badge: "Evidence",
          badgeColor: "indigo"
        },
        {
          title: "\"A few doctors assert that the herbs are potentially harmful...\"",
          text: "**Counterpoint:** The opposing argument/potential risk.",
          badge: "Opposing View",
          badgeColor: "slate"
        },
        {
          title: "\"...but doctors are always trying to maintain a monopoly over medical therapies.\"",
          text: "**Premise 2:** An attack on the doctors' motives.",
          badge: "Attack",
          badgeColor: "indigo"
        },
        {
          title: "\"So there is no reason not to try my herb juice.\"",
          text: "**Conclusion:** The main recommendation.",
          badge: "Conclusion",
          badgeColor: "indigo"
        }
      ] 
    },
    { type: 'h3', text: "2. Find the Logical Gap" },
    { type: 'paragraph', text: "The herbalist’s argument structure is: \"My product might be beneficial. A group of experts warns it might be harmful. But those experts have bad motives, so you can ignore their warning. Therefore, you should try my product.\"" },
    { type: 'paragraph', text: "The critical leap occurs when the herbalist dismisses the doctors' warning. Instead of providing evidence that the herbs are actually safe, the herbalist attacks the *doctors' motives* (\"they want a monopoly\"). The argument jumps from \"the source of the warning is biased\" to \"the warning itself is invalid.\" This is a classic reasoning error. A biased source can still tell the truth. The potential harm of the herbs remains unaddressed." },
    { type: 'h3', text: "3. Consult Your Mental Flaw Checklist" },
    { 
      type: 'list', 
      items: [
        "**Causation?** Yes, there's a weak causal claim in the first sentence, but it's not the main flaw. The argument's conclusion rests on dismissing the *doctors' claim*, not on proving the juice works.",
        "**Conditional Logic?** No \"if...then\" structure here.",
        "**Sampling?** The evidence from \"many customers\" is weak, but not the central flaw.",
        "**Source Attack?** **Yes.** This is the primary flaw. The argument explicitly attacks the doctors' motives as the sole reason for rejecting their warning."
      ] 
    },
    { type: 'h3', text: "4. Formulate an Abstract Prediction" },
    { type: 'paragraph', text: "The argument dismisses a claim (that the herbs are harmful) by attacking the motives of the people making the claim (the doctors), instead of addressing the substance of the claim itself (the actual safety of the herbs)." },
    { type: 'h3', text: "5. Evaluate the Answer Choices" },
    { 
      type: 'breakdown', 
      labels: { title: 'Option', text: 'Evaluation' }, 
      items: [
        {
          title: "(A) attempts to force acceptance... by inducing fear...",
          text: "The argument does the opposite; it tries to *reduce* fear by dismissing a warning about potential harm.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(B) bases a conclusion on claims that are inconsistent...",
          text: "The claims are not inconsistent. The herbalist acknowledges the doctors' position (\"A few doctors assert...\") and then attempts to refute it. This is a standard argumentative structure, even if the refutation is flawed.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(C) rejects a claim by attacking the proponents...",
          text: "This is a perfect, abstract description of the flaw we identified. \"Rejects a claim\" = dismisses the assertion of harm. \"Attacking the proponents\" = claims doctors want a monopoly. \"Rather than addressing the claim\" = provides no safety evidence.",
          badge: "Correct",
          badgeColor: "green"
        },
        {
          title: "(D) relies on evidence presented in terms that presuppose the truth...",
          text: "This describes circular reasoning. The argument is not circular; it provides (flawed) evidence to reach its conclusion.",
          badge: "Incorrect",
          badgeColor: "red"
        },
        {
          title: "(E) mistakes the observation that one thing happens after another...",
          text: "This describes the potential causal flaw in the first sentence. While this is a minor flaw in the evidence, it is not the *main* structural flaw on which the conclusion rests. The conclusion hinges entirely on dismissing the warning via the source attack.",
          badge: "Incorrect",
          badgeColor: "red"
        }
      ] 
    },
    { 
      type: 'callout', 
      title: "Summary & Key Takeaways", 
      variant: "summary", 
      text: "This question is a textbook example of a **Source Attack (Ad Hominem)** flaw. The structure is simple and direct:\n1. Acknowledge an opposing claim.\n2. Attack the motives/character of the people who make that claim.\n3. Conclude that the opposing claim can be ignored.\n\n**Key Takeaway:** An argument's validity depends on the logical connection between its premises and conclusion, not on the character or motives of the people involved in the debate. You cannot prove a claim is false by showing that the person who made it is biased or has something to gain." 
    }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h2",
          "text": "A Field Guide to Common Error Types"
        },
        {
          "type": "paragraph",
          "text": "While every flawed argument is unique in its topic, the logical errors they commit fall into **predictable categories**. The correct answer choice will be an abstract description of one of these errors. Think of this section as a spotter's guide for every major species of logical flaw tested on the LSAT."
        },
        {
          "type": "paragraph",
          "text": "Mastering this taxonomy is the single most powerful thing you can do for Flaw questions. When you can name the flaw category on sight, you can prephrase the answer with surgical precision."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Master Flaw Taxonomy"
        },
        {
          "type": "paragraph",
          "text": "The table below summarizes every major flaw type, organized by frequency. Study this table until you can recite the categories from memory."
        },
        {
          "type": "table",
          "headers": [
            "Category",
            "Flaw Type",
            "Core Error",
            "Freq."
          ],
          "rows": [
            [
              "**Causal**",
              "Correlation → Causation",
              "Assumes co-occurrence proves a cause-and-effect relationship",
              "~10%"
            ],
            [
              "**Causal**",
              "Reverse Causation",
              "Gets the causal direction backward (effect treated as cause)",
              "~5%"
            ],
            [
              "**Causal**",
              "Third Factor / Common Cause",
              "Ignores a third factor that could explain both observations",
              "~5%"
            ],
            [
              "**Conditional**",
              "Mistaken Reversal (Affirming the Consequent)",
              "From \"If A then B\" and \"B,\" concludes \"A\"",
              "~5%"
            ],
            [
              "**Conditional**",
              "Mistaken Negation (Denying the Antecedent)",
              "From \"If A then B\" and \"not A,\" concludes \"not B\"",
              "~5%"
            ],
            [
              "**Conditional**",
              "Necessary vs. Sufficient Confusion",
              "Treats a necessary condition as sufficient, or vice versa",
              "~5%"
            ],
            [
              "**Statistical**",
              "Unrepresentative Sample",
              "Generalizes from a biased, too-small, or self-selected sample",
              "~5%"
            ],
            [
              "**Statistical**",
              "Numbers vs. Percentages",
              "Confuses raw numbers with rates, proportions, or percentages",
              "~4%"
            ],
            [
              "**Statistical**",
              "Base Rate Neglect",
              "Ignores the overall frequency when interpreting a statistic",
              "~3%"
            ],
            [
              "**Scope Shift**",
              "Part → Whole (Composition)",
              "Assumes what is true of parts must be true of the whole",
              "~3%"
            ],
            [
              "**Scope Shift**",
              "Whole → Part (Division)",
              "Assumes what is true of the whole must be true of each part",
              "~3%"
            ],
            [
              "**Scope Shift**",
              "Some → All (Hasty Generalization)",
              "Jumps from evidence about some cases to a universal conclusion",
              "~4%"
            ],
            [
              "**Other**",
              "Ad Hominem / Source Attack",
              "Attacks the person instead of the argument",
              "~5%"
            ],
            [
              "**Other**",
              "Straw Man",
              "Misrepresents an opponent's position to make it easier to attack",
              "~3%"
            ],
            [
              "**Other**",
              "Appeal to Ignorance",
              "Treats absence of evidence as evidence of absence (or vice versa)",
              "~4%"
            ],
            [
              "**Other**",
              "False Dichotomy",
              "Presents only two options when more exist",
              "~3%"
            ],
            [
              "**Other**",
              "Circular Reasoning",
              "Restates the conclusion as a premise (begging the question)",
              "~3%"
            ],
            [
              "**Other**",
              "Equivocation",
              "Uses a key term in two different senses",
              "~3%"
            ],
            [
              "**Other**",
              "Appeal to Authority",
              "Relies on an unqualified or irrelevant authority",
              "~2%"
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "CATEGORY 1: Causal Flaws"
        },
        {
          "type": "paragraph",
          "text": "Causal flaws are the **most common and most predictable** flaw type on the LSAT. The argument observes that two things happen together and leaps to the conclusion that one causes the other. There are three sub-types."
        },
        {
          "type": "h3",
          "text": "1A. Correlation → Causation"
        },
        {
          "type": "paragraph",
          "text": "The argument assumes that because X and Y happen together (or in sequence), X must cause Y. This is the classic causal fallacy."
        },
        {
          "type": "blockquote",
          "text": "*\"Cities with more police officers per capita tend to have higher crime rates. Therefore, the presence of police officers encourages criminal activity.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The evidence shows a correlation (more police and more crime co-occur), but the conclusion claims causation (police *encourage* crime). A far more plausible explanation: cities with higher crime rates hire more police *in response to* the crime."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"infers a causal relationship from a mere correlation\"",
            "\"confuses a correlation with a causal connection\"",
            "\"fails to establish that the observed association is causal rather than coincidental\""
          ]
        },
        {
          "type": "h3",
          "text": "1B. Reverse Causation"
        },
        {
          "type": "paragraph",
          "text": "The argument correctly identifies a causal relationship but gets the direction wrong — it treats the effect as the cause."
        },
        {
          "type": "blockquote",
          "text": "*\"People who have positive attitudes tend to be more successful in their careers. Therefore, having a positive attitude causes career success.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The causal arrow might be reversed. Career success might cause people to develop positive attitudes, not the other way around."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"fails to consider that the cause and effect may be reversed\"",
            "\"overlooks the possibility that the presumed cause is actually an effect\""
          ]
        },
        {
          "type": "h3",
          "text": "1C. Third Factor / Common Cause"
        },
        {
          "type": "paragraph",
          "text": "The argument overlooks the possibility that a third, unstated factor is the real cause of both X and Y."
        },
        {
          "type": "blockquote",
          "text": "*\"Students who receive tutoring tend to have lower grades than students who do not receive tutoring. Therefore, tutoring harms academic performance.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** A third factor — struggling academically in the first place — likely causes both the need for tutoring AND the low grades. Tutoring doesn't cause the low grades; the underlying difficulty does."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"fails to consider that the phenomena interpreted as cause and effect may both be effects of some other factor\"",
            "\"overlooks a common cause that could explain both observations\""
          ]
        },
        {
          "type": "callout",
          "title": "Causal Flaw Recognition Shortcut",
          "variant": "tip",
          "text": "Whenever you see causal language in the conclusion — **causes, leads to, results in, stimulates, is responsible for, produces** — immediately check whether the premise only shows a correlation. If so, you are almost certainly looking at a causal flaw. Then determine which sub-type: correlation→causation, reverse causation, or third factor."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "CATEGORY 2: Conditional Logic Flaws"
        },
        {
          "type": "paragraph",
          "text": "These flaws involve misapplying \"if…then\" rules. They are **formal** errors — the reasoning is structurally invalid regardless of the subject matter."
        },
        {
          "type": "h3",
          "text": "2A. Mistaken Reversal (Affirming the Consequent)"
        },
        {
          "type": "paragraph",
          "text": "From \"If A, then B,\" the argument wrongly concludes \"If B, then A.\" It reverses the conditional."
        },
        {
          "type": "blockquote",
          "text": "*\"All dogs are mammals. Fido is a mammal. Therefore, Fido must be a dog.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Knowing that all dogs are mammals and that Fido is a mammal does NOT prove Fido is a dog — Fido could be a cat, a whale, or any other mammal."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"confuses a sufficient condition for a necessary condition\"",
            "\"treats a condition that is sufficient for a result as a condition that is necessary for that result\"",
            "\"infers that because a sufficient condition is met, a necessary condition must also be met\""
          ]
        },
        {
          "type": "h3",
          "text": "2B. Mistaken Negation (Denying the Antecedent)"
        },
        {
          "type": "paragraph",
          "text": "From \"If A, then B,\" the argument wrongly concludes \"If not A, then not B.\" It negates both sides without reversing."
        },
        {
          "type": "blockquote",
          "text": "*\"If it rains, the ground is wet. It is not raining. Therefore, the ground is not wet.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Rain is a *sufficient* cause of wet ground, but not the *only* cause. The ground could be wet from a sprinkler, a hose, or melting snow."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"treats the absence of a sufficient condition as if it were the absence of a necessary condition\"",
            "\"assumes that because a sufficient condition is absent, the result must also be absent\""
          ]
        },
        {
          "type": "h3",
          "text": "2C. Necessary vs. Sufficient Confusion"
        },
        {
          "type": "paragraph",
          "text": "The argument treats a required condition (necessary) as if it were a guarantee (sufficient), or vice versa."
        },
        {
          "type": "blockquote",
          "text": "*\"To get an A in this course, you must submit all homework assignments. I submitted all homework assignments, so I will get an A.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Submitting homework is *necessary* for an A, but not *sufficient*. You might also need to pass exams and write a paper."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"takes a condition that is necessary for a result to occur as a condition that is sufficient for that result to occur\"",
            "\"confuses a prerequisite with a guarantee\""
          ]
        },
        {
          "type": "callout",
          "title": "Necessary vs. Sufficient — Quick Reference",
          "variant": "default",
          "text": "**Necessary condition:** Must be present for the result, but doesn't guarantee it. (Oxygen is necessary for fire, but oxygen alone doesn't start a fire.)\n\n**Sufficient condition:** Guarantees the result by itself. (Dropping a lit match in gasoline is sufficient for fire.)\n\nThe most common error: treating a necessary condition as if it were sufficient (\"I met the requirement, so I'm guaranteed the result\")."
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "CATEGORY 3: Statistical / Sampling Flaws"
        },
        {
          "type": "paragraph",
          "text": "These flaws involve misusing data, surveys, or statistics. The argument draws a conclusion about a large group based on evidence that doesn't properly represent that group."
        },
        {
          "type": "h3",
          "text": "3A. Unrepresentative Sample"
        },
        {
          "type": "paragraph",
          "text": "The argument generalizes from a sample that is too small, self-selected, or otherwise biased."
        },
        {
          "type": "blockquote",
          "text": "*\"A survey of people leaving a vegetarian restaurant found that 90% prefer plant-based diets. Therefore, 90% of the general public prefers plant-based diets.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The sample (people leaving a vegetarian restaurant) is drastically unrepresentative of the general public — it self-selects for people who already prefer vegetarian food."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"generalizes from a sample that is unlikely to be representative\"",
            "\"draws a conclusion about a population based on a biased sample\"",
            "\"bases a broad claim on evidence from an unrepresentative group\""
          ]
        },
        {
          "type": "h3",
          "text": "3B. Numbers vs. Percentages"
        },
        {
          "type": "paragraph",
          "text": "The argument uses a raw number to support a conclusion about a rate (or vice versa), ignoring the size of the reference group."
        },
        {
          "type": "blockquote",
          "text": "*\"More car accidents happen within 25 miles of home than anywhere else. Therefore, it is safer to drive far from home.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The raw number of accidents near home is higher because people do *most* of their driving near home. The *rate* of accidents per mile driven might actually be higher far from home."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"fails to account for the possibility that the total number of events is a function of the total opportunity for those events to occur\"",
            "\"confuses absolute numbers with proportional rates\"",
            "\"ignores the base rates of the relevant groups\""
          ]
        },
        {
          "type": "h3",
          "text": "3C. Base Rate Neglect"
        },
        {
          "type": "paragraph",
          "text": "The argument ignores the overall frequency of a phenomenon when interpreting a specific statistic."
        },
        {
          "type": "blockquote",
          "text": "*\"This medical test is 99% accurate. The test came back positive for Disease X. Therefore, you almost certainly have Disease X.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** If Disease X affects only 1 in 10,000 people, then even with a 99% accurate test, most positive results will be false positives. The base rate of the disease is so low that accuracy alone is insufficient."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"fails to consider the overall incidence of the condition in the population\"",
            "\"neglects the base rate of the relevant phenomenon\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "CATEGORY 4: Scope Shift Flaws"
        },
        {
          "type": "paragraph",
          "text": "These flaws occur when the conclusion's scope goes beyond what the evidence supports — in quantity, time, group, or domain."
        },
        {
          "type": "h3",
          "text": "4A. Part → Whole (Composition Fallacy)"
        },
        {
          "type": "paragraph",
          "text": "Assumes that because the individual parts have a property, the whole must also have that property."
        },
        {
          "type": "blockquote",
          "text": "*\"Every player on this team is an all-star. Therefore, this must be the best team in the league.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Individual talent doesn't guarantee team success. The players might not work well together, or the coaching might be poor."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"assumes that what is true of each member of a group is true of the group as a whole\"",
            "\"infers a property of the whole from properties of its parts\""
          ]
        },
        {
          "type": "h3",
          "text": "4B. Whole → Part (Division Fallacy)"
        },
        {
          "type": "paragraph",
          "text": "Assumes that because the whole has a property, each individual part must also have that property."
        },
        {
          "type": "blockquote",
          "text": "*\"This company is highly profitable. Therefore, every division of the company must be highly profitable.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Overall profitability could be driven by one or two strong divisions while others lose money."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"assumes that what is true of the whole is true of each of its parts\"",
            "\"infers a property of individual members from a property of the group\""
          ]
        },
        {
          "type": "h3",
          "text": "4C. Some → All (Hasty Generalization)"
        },
        {
          "type": "paragraph",
          "text": "Jumps from evidence about some cases to a universal or near-universal conclusion."
        },
        {
          "type": "blockquote",
          "text": "*\"Three patients in the trial experienced side effects. Therefore, this medication causes side effects in all patients.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Three patients is far too few to conclude the medication affects *all* patients. The side effects could be idiosyncratic."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"generalizes on the basis of what could be exceptional cases\"",
            "\"draws a universal conclusion from evidence about a limited number of cases\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "CATEGORY 5: Other Common Flaws"
        },
        {
          "type": "paragraph",
          "text": "These flaw types don't fit neatly into the categories above but appear regularly on the LSAT."
        },
        {
          "type": "h3",
          "text": "5A. Ad Hominem / Source Attack"
        },
        {
          "type": "paragraph",
          "text": "The argument attacks the person making a claim rather than the claim itself."
        },
        {
          "type": "blockquote",
          "text": "*\"Senator Green says we should invest in renewable energy. But Senator Green owns stock in a solar company. Therefore, we should ignore this advice.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The senator's financial interest may create a conflict of interest, but it doesn't make the *argument* for renewable energy wrong. The proposal should be evaluated on its merits."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"rejects a claim by attacking the person who made it rather than the claim itself\"",
            "\"dismisses an argument based on the source's perceived bias rather than the argument's merits\""
          ]
        },
        {
          "type": "h3",
          "text": "5B. Straw Man"
        },
        {
          "type": "paragraph",
          "text": "The argument misrepresents or exaggerates an opponent's position to make it easier to attack."
        },
        {
          "type": "blockquote",
          "text": "*\"My opponent wants to reduce military spending by 10%. So she wants to leave our country completely defenseless.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The opponent wants a modest reduction, not the elimination of all military capacity. The argument distorts the original position."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"distorts the position of those it disagrees with\"",
            "\"misrepresents the claim it seeks to refute\""
          ]
        },
        {
          "type": "h3",
          "text": "5C. Appeal to Ignorance (Argument from Ignorance)"
        },
        {
          "type": "paragraph",
          "text": "The argument treats the absence of evidence as evidence of absence (or vice versa)."
        },
        {
          "type": "blockquote",
          "text": "*\"No one has ever proven that ghosts do NOT exist. Therefore, ghosts must exist.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** The lack of disproof is not proof. The claim has not been established; it simply hasn't been refuted."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"takes the absence of evidence against a claim as evidence for that claim\"",
            "\"confuses a lack of proof that something is the case with proof that it is not the case\""
          ]
        },
        {
          "type": "h3",
          "text": "5D. False Dichotomy"
        },
        {
          "type": "paragraph",
          "text": "The argument presents only two options when more exist, then eliminates one to force a conclusion."
        },
        {
          "type": "blockquote",
          "text": "*\"Either we ban all cars from the city center or air pollution will continue to worsen. Since we cannot let pollution worsen, we must ban all cars.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** There are alternatives beyond a total ban — electric vehicles, congestion charges, improved public transit, etc."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"presents a false dilemma by treating two options as the only possibilities\"",
            "\"fails to consider alternatives to the two positions presented\""
          ]
        },
        {
          "type": "h3",
          "text": "5E. Circular Reasoning"
        },
        {
          "type": "paragraph",
          "text": "The argument uses its own conclusion as a premise, reasoning in a circle."
        },
        {
          "type": "blockquote",
          "text": "*\"This book is a bestseller because it is the most popular book on the market.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** \"Bestseller\" and \"most popular\" mean the same thing. The argument restates the conclusion rather than supporting it."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"assumes what it sets out to prove\"",
            "\"its conclusion is merely a restatement of a claim made in its premises\""
          ]
        },
        {
          "type": "h3",
          "text": "5F. Equivocation"
        },
        {
          "type": "paragraph",
          "text": "The argument's validity depends on a key word or phrase being used in two different senses."
        },
        {
          "type": "blockquote",
          "text": "*\"The law says that everyone has the right to a fair trial. I just bought tickets to the county fair. Therefore, my trial should be held at the county fair.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** \"Fair\" means \"just and impartial\" in the first sentence and \"an outdoor event\" in the second. The argument conflates two different meanings."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"relies on an ambiguity in a key term\"",
            "\"uses a key term in two different senses\"",
            "\"trades on an equivocation\""
          ]
        },
        {
          "type": "h3",
          "text": "5G. Appeal to Inappropriate Authority"
        },
        {
          "type": "paragraph",
          "text": "The argument relies on an authority figure whose expertise is irrelevant to the topic at hand."
        },
        {
          "type": "blockquote",
          "text": "*\"Dr. Smith, a renowned physicist, says we should invest in cryptocurrency. Therefore, cryptocurrency is a good investment.\"*"
        },
        {
          "type": "paragraph",
          "text": "**Why it's flawed:** Dr. Smith's expertise in physics does not make her qualified to give financial advice."
        },
        {
          "type": "paragraph",
          "text": "**How answer choices describe it:**"
        },
        {
          "type": "list",
          "items": [
            "\"cites an authority whose expertise is not relevant to the issue\"",
            "\"appeals to an authority in a field unrelated to the topic at hand\""
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "LSAT Language Translation Table"
        },
        {
          "type": "paragraph",
          "text": "One of the biggest challenges of Flaw questions is that the LSAT describes flaws in abstract, formal language rather than plain English. This table maps common flaw names to the language the LSAT actually uses in answer choices:"
        },
        {
          "type": "table",
          "headers": [
            "Common Name",
            "How the LSAT Describes It"
          ],
          "rows": [
            [
              "Correlation → Causation",
              "\"infers a causal relationship from a mere correlation\""
            ],
            [
              "Reverse Causation",
              "\"fails to consider that the cause and effect may be reversed\""
            ],
            [
              "Third Factor",
              "\"fails to establish that the phenomena are not both effects of some other factor\""
            ],
            [
              "Mistaken Reversal",
              "\"confuses a sufficient condition with a necessary condition\""
            ],
            [
              "Mistaken Negation",
              "\"assumes the absence of a sufficient condition guarantees the absence of the result\""
            ],
            [
              "Nec. vs. Suff.",
              "\"takes a necessary condition to be a sufficient condition\""
            ],
            [
              "Unrepresentative Sample",
              "\"generalizes from a sample that is unlikely to be representative\""
            ],
            [
              "Numbers vs. Percentages",
              "\"fails to consider that a change in total numbers may not reflect a change in proportions\""
            ],
            [
              "Part → Whole",
              "\"assumes what is true of each member of a group is true of the group as a whole\""
            ],
            [
              "Whole → Part",
              "\"assumes what is true of the whole is true of each part\""
            ],
            [
              "Ad Hominem",
              "\"rejects a claim by attacking the person who made it\""
            ],
            [
              "Straw Man",
              "\"distorts the position it seeks to criticize\""
            ],
            [
              "Appeal to Ignorance",
              "\"takes the absence of evidence as evidence of absence\""
            ],
            [
              "False Dichotomy",
              "\"treats two options as if they are the only possibilities\""
            ],
            [
              "Circular Reasoning",
              "\"assumes what it sets out to prove\" or \"its conclusion is a restatement of a premise\""
            ],
            [
              "Equivocation",
              "\"relies on an ambiguity in a key term\""
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h2",
          "text": "Quick Identification Flowchart"
        },
        {
          "type": "paragraph",
          "text": "Use this decision process to quickly narrow down the flaw type when reading a stimulus:"
        },
        {
          "type": "process",
          "title": "Flaw Identification Steps",
          "steps": [
            "**Does the conclusion claim CAUSATION?** (causes, leads to, results in, stimulates) → Check for **Causal Flaw** (correlation→causation, reverse causation, third factor).",
            "**Does the argument contain IF/THEN, ALL, or ONLY IF language?** → Check for **Conditional Logic Flaw** (mistaken reversal, mistaken negation, necessary vs. sufficient).",
            "**Does the argument cite a STUDY, SURVEY, or STATISTIC?** → Check for **Statistical Flaw** (unrepresentative sample, numbers vs. percentages, base rate neglect).",
            "**Does the conclusion's scope EXCEED the evidence's scope?** (some→all, part→whole, past→future) → Check for **Scope Shift Flaw**.",
            "**Does the argument ATTACK A PERSON rather than address a claim?** → Check for **Ad Hominem** or **Straw Man**.",
            "**Does the argument claim something must be true because it HASN'T BEEN DISPROVEN?** → Check for **Appeal to Ignorance**.",
            "**Does the argument present ONLY TWO OPTIONS?** → Check for **False Dichotomy**.",
            "**Does a KEY TERM seem to shift meaning?** → Check for **Equivocation**.",
            "**Does the argument seem to RESTATE its conclusion as evidence?** → Check for **Circular Reasoning**."
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "• The LSAT tests a **finite set of flaw types**. Learning them gives you a massive advantage because you can prephrase answers before reading the choices.\n• The **Big Three** — causal flaws, conditional logic flaws, and overlooking alternatives — account for roughly half of all Flaw questions.\n• Each flaw type has **characteristic LSAT language**. Learn the translation table so you can match your prephrase to the formal answer choice wording.\n• Use the **Quick Identification Flowchart** to rapidly categorize any stimulus: start with the conclusion's language and work outward.\n• For each flaw, understand three things: (1) the **abstract pattern** of the error, (2) a **concrete example**, and (3) the **answer choice language** the LSAT uses to describe it.\n• The upcoming drill lessons will give you focused practice on individual flaw types. Use this Field Guide as your reference whenever you need to identify or review a specific flaw category."
        }
      ],
    },
  },
};
