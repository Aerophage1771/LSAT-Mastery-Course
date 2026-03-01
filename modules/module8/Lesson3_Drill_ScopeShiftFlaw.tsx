
import { Lesson } from '../../types';

export const Lesson3_Drill_ScopeShiftFlaw: Lesson = {
  id: "8-3",
  title: "Drill: The Scope Shift Flaw (PT-101-S-2-Q-1)",
  content: [
    { type: 'h2', text: 'Drill: The Scope Shift Flaw' },

    { type: 'h3', text: "Understanding the Scope Shift" },
    { type: 'paragraph', text: "One of the most common flaws on the LSAT is the subtle separation between an argument's premise and its conclusion. Sometimes this is a massive leap, where an author switches from one concept to a completely different one. More often, however, the flaw is a subtle **Scope Shift**: the author provides evidence about a specific, narrow category and then draws a conclusion about a related but much broader one. This subtle difference in scope, often hidden in a single word, is a frequent source of error." },

    { type: 'paragraph', text: "The Scope Shift is especially dangerous because the premise and conclusion can *look* like they are about the same thing. The shift may be buried in a single word: \"heart\" to \"safe,\" \"cost\" to \"value,\" \"children\" to \"people.\" Your job is to catch that shift and understand why the evidence cannot support the broader claim." },

    { type: 'h3', text: 'Types of Scope Shifts' },
    { type: 'paragraph', text: "Scope shifts come in several varieties. Recognizing the specific type helps you prephrase the weakener more accurately." },

    { type: 'table', headers: ['Scope Shift Type', 'What Happens', 'Example'], rows: [
      ['**Part → Whole**', 'Evidence about one component is used to draw a conclusion about the entire system.', '"Coffee doesn\'t harm the heart" → "Coffee is safe" (heart ≠ whole body)'],
      ['**Narrow Group → Broad Group**', 'Evidence about a specific subset is used to conclude something about a larger population.', '"College students prefer X" → "Young people prefer X" (students ≠ all young people)'],
      ['**One Metric → Different Metric**', 'Evidence measures one thing, but the conclusion claims something about a different measure.', '"More tickets sold" → "More profitable" (revenue ≠ profit)'],
      ['**One Time Period → All Time**', 'Evidence from a specific moment is used to make a permanent or general claim.', '"Sales rose this quarter" → "The company is growing" (one quarter ≠ long-term trend)'],
    ]},

    { type: 'callout', variant: 'tip', title: 'Spotting the Shift', text: "Read the conclusion first, then go back and read the premises. Ask: *\"Is the conclusion about the exact same thing the premises are about?\"* If the conclusion uses even slightly broader or different language than the premises, you have found the scope shift. Circle or underline the mismatched terms." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Weaken a Scope Shift Argument' },
    { type: 'paragraph', text: "Once you see the shift from narrow evidence to a broader conclusion, there are two primary ways to exploit it:" },
    { type: 'breakdown', labels: { title: 'Strategy', text: 'How It Works' }, items: [
      { title: 'Point Out the Difference', text: 'The most direct approach: explicitly state that the narrow category (what the evidence proves) is not the same as the broad category (what the conclusion claims). This highlights the assumption and shows it is not necessarily true.', badge: 'Direct', badgeColor: 'blue' },
      { title: 'Provide a Counterexample', text: 'Show a specific case where the broader category includes something the narrow evidence does not cover — and that something is problematic. For instance, if the evidence is about heart safety and the conclusion is about general safety, show that coffee harms a different organ.', badge: 'Specific', badgeColor: 'blue' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: "Practice Problem" },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'question-card',
      id: 'PT-101-S-2-Q-1',
      questionType: 'Weaken',
      difficulty: 'medium',
      stimulus: "Press release: A comprehensive review evaluating the medical studies done up to the present time has found no reason to think that drinking coffee in normal amounts harms the coffee-drinker's heart. So coffee drinkers can relax and enjoy their beverage — it is safe to drink coffee.",
      question: "Which one of the following points to a weakness in the reasoning in the press release's argument?",
      options: [
        "(A) The review was only an evaluation of studies and did not itself undertake to study patients.",
        "(B) The health of the heart is not identical with the general health of the body. (Correct)",
        "(C) Coffee drinkers might choose to eat, along with their coffee, foods containing substances that harm the heart.",
        "(D) Other beverages besides coffee might contain stimulants that have some effect on the heart.",
        "(E) Drinking unusually large amounts of coffee could be caused by stress that itself directly harms the heart."
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: "Step-by-Step Analysis" },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: "Step 1: Find the Conclusion" },
    { type: 'paragraph', text: "Let's engage with the stimulus sentence by sentence to see how the author builds their case." },
    { 
      type: 'breakdown', 
      labels: { title: 'Quote', text: 'Analysis' }, 
      items: [
        { title: `"A comprehensive review...has found no reason to think that drinking coffee in normal amounts harms the coffee-drinker's **heart**."`, text: "This is the **premise**. It's a review of medical studies, which is a solid source. The key word is **\"heart.\"** The evidence is specifically, and only, about cardiovascular health.", badge: 'Premise', badgeColor: 'slate' },
        { title: `"So coffee drinkers can relax and enjoy their beverage — it is **safe** to drink coffee."`, text: "This is the **conclusion**, flagged by the word \"So.\" The author makes a broad, unqualified claim about general safety. The mismatch is clear: the evidence was about the \"heart,\" but the conclusion is about being \"safe\" in general.", badge: 'Conclusion', badgeColor: 'indigo' }
      ] 
    },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The author assumes that proving safety for one organ (the heart) proves safety for the entire body. This is a **Part → Whole** scope shift." },

    { type: 'h3', text: "Step 2: Identify the Gap" },
    { type: 'paragraph', text: "**What Method of Reasoning is the argument using?**\nThe author is using a form of **Part-to-Whole** reasoning. They have examined one part of a system (the heart) and, finding no problems there, have concluded that the entire system (the body's overall health and safety) is also fine." },
    { type: 'paragraph', text: "**What's the Problem?**\nThe flaw is the unjustified assumption that what is true for the part must be true for the whole. Safety for the heart does not equal overall safety. Even if the premise about the heart is true, coffee could still harm the liver, kidneys, nervous system, or cause other health problems. This is a classic **Scope Shift**." },

    { type: 'h3', text: "Step 3: Prephrase the Weakener" },
    { type: 'paragraph', text: "Since the core problem is the jump from a specific part to a general whole, you can attack the argument by focusing on that gap." },
    { type: 'paragraph', text: "Prephrase: *\"The argument would be undermined if the health of the heart is not the same as the general health of the body — or if coffee harms some other part of the body besides the heart.\"*" },
    { type: 'list', items: [
      "**Point Out the Difference:** Explicitly state that the part (heart health) and the whole (general safety) are not the same thing. This highlights the assumption and shows it's not necessarily true.",
      "**Introduce a Negative Effect on Another Part:** Provide a specific example of how coffee harms another part of the body. For instance, \"Studies show coffee causes stomach ulcers.\" This would prove the conclusion \"it is safe\" is false, even if the premise about the heart is true."
    ]},

    { type: 'h3', text: "Step 4: Match and Eliminate" },
    { type: 'paragraph', text: "You are looking for the answer that makes the author's broad conclusion about safety less likely by exploiting the narrowness of the evidence." },
    { 
      type: 'breakdown', 
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) The review was only an evaluation of studies and did not itself undertake to study patients.", text: "This is a minor criticism of the evidence's methodology rather than its substance. While the researchers used existing data rather than engaging directly with patients, this doesn't actually provide a reason to value the results any less. A meta-review of studies is a standard and respected research method. To make this a weakener, you would have to stack an additional assumption — that the original studies were flawed — but that assumption is unwarranted.", badge: "Methodology Trap", badgeColor: "red" },
        { title: "(B) The health of the heart is not identical with the general health of the body.", text: "This directly targets the scope shift. It explicitly states that the narrow category (heart health) and the broad category (general health/safety) are not identical. By pointing out this gap, it shows that the evidence provided is simply not sufficient for the broad conclusion. Even if coffee is perfectly safe for the heart, it could harm other organs or systems. This is the textbook \"Point Out the Difference\" weakener.", badge: "Correct", badgeColor: "green" },
        { title: "(C) Coffee drinkers might choose to eat, along with their coffee, foods containing substances that harm the heart.", text: "This introduces a potential danger, but it is about the **foods** people eat alongside coffee, not about coffee itself. The argument's conclusion is about whether **coffee** is safe. What people choose to eat alongside it is a separate issue that doesn't make the coffee itself unsafe. This commits the error of shifting blame to an external factor.", badge: "Wrong Target", badgeColor: "red" },
        { title: "(D) Other beverages besides coffee might contain stimulants that have some effect on the heart.", text: "This discusses beverages that are not coffee. The argument is exclusively about whether coffee is safe. Information about tea, energy drinks, or any other beverage is entirely outside the argument's scope. Additionally, the word \"effect\" is neutral — it doesn't specify a negative effect.", badge: "Wrong Scope", badgeColor: "red" },
        { title: "(E) Drinking unusually large amounts of coffee could be caused by stress that itself directly harms the heart.", text: "This is a clever distractor. It attempts to link coffee to heart harm, but the causal chain runs through **stress**, not coffee. The harm is attributed to stress, not to the coffee itself. Furthermore, the premise already specifies \"normal amounts,\" so the focus on \"unusually large amounts\" introduces a scenario the premise already accounts for.", badge: "Misdirected Causation", badgeColor: "red" }
      ]
    },

    { type: 'hr' },

    { type: 'h2', text: "Key Takeaways" },
    { type: 'paragraph', text: "The mistake here is a **Scope Shift**. The author uses a specific fact (heart health) to make a broad claim (general safety). To weaken this, you must show that proving one specific thing is okay isn't enough to prove the whole thing is safe." },

    { type: 'h4', text: "Avenues for Weakening Scope Shift Arguments" },
    { type: 'paragraph', text: "Once you see the jump from a specific part to a general conclusion, look for these three things:" },
    { type: 'list', ordered: true, items: [
      "**Break the Connection:** Look for the answer that points out the gap. In this case, it's the link between \"heart health\" and \"overall health.\" The correct answer will show that these two things are not the same.",
      "**Identify \"Not Enough Proof\":** Your goal is to find the answer that signals the evidence is \"not good enough.\" Even if you don't know what the specific danger is (like stomach or brain issues), the right answer will emphasize that the evidence provided is too narrow for such a big conclusion.",
      "**Avoid the \"How\" Trap:** Don't get distracted by answers like (A) that just talk about how the study was done (the methodology). They feel topical, but they aren't correct unless they flag a clear issue. Pointing out that a study was a \"review\" doesn't prove the logic is bad. A real weakener must explain **why** the evidence doesn't support the conclusion, not just describe the study's format."
    ]},

    { type: 'callout', variant: 'summary', title: 'Scope Shift Checklist', text: "**1. Spot the shift:** Compare the exact language in the premises to the exact language in the conclusion. If the conclusion is broader, you have a scope shift.\n\n**2. Name the gap:** \"The evidence is about [narrow X], but the conclusion is about [broad Y].\"\n\n**3. Prephrase:** Either (a) the correct answer will point out that X ≠ Y, or (b) it will provide a specific case within Y that X does not cover.\n\n**4. Eliminate traps:** Methodology criticisms, wrong-target answers, and misdirected causation are the most common traps on scope shift questions." },
  ]
};
