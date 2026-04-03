import { Lesson } from '../../types';

export const Lesson6_Advanced_TraitsOfHighDifficulty: Lesson = {
  id: '8-6',
  title: 'Advanced: Traits of High-Difficulty Weaken Questions',
  questionPolicy: 'repository_required',
  content: [
    { type: 'h3', text: 'Advanced: Traits of High-Difficulty Weaken Questions' },
    {
      type: 'paragraph',
      text: 'At the highest difficulty levels, Weaken questions split into two demanding branches. Some are still causal and require precision about missing baselines, bad data, or reversed arrows. Others are non-causal and resist easy labels, forcing you to fall back on the exact gap in the argument rather than on a memorized template.',
    },
    {
      type: 'paragraph',
      text: 'Hard Weaken questions also require a non-causal fallback for arguments about scope, limited options, or whether a choice is actually worth it.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Two Advanced Branches' },
    {
      type: 'table',
      headers: ['Branch', 'What You Are Looking For', 'Core Pairings'],
      rows: [
        [
          '**Causal Application**',
          'Break the author\'s claimed cause with a missing baseline, flawed data, reverse causation, or a rival explanation.',
          '`PT-103-S-2-Q-5`, `PT-113-S-2-Q-14`, `PT-126-S-1-Q-22`',
        ],
        [
          '**Non-Causal Fallback**',
          'Identify the exact claim and ask what new fact would make it less complete, less worthwhile, or less supported.',
          '`PT-101-S-2-Q-1`, `PT-103-S-3-Q-24`, `PT-111-S-4-Q-20`, `PT-111-S-3-Q-23`',
        ],
      ],
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Do Not Force Causation',
      text: 'If the conclusion is causal, stay in the causal branch. If it is about whether something is safe, justified, complete, or worth choosing, switch to the non-causal fallback. A common advanced mistake is forcing every hard Weaken question into an alternative-cause pattern even when the argument is really about scope, accounting, or omitted options.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Three Difficulty Factors for Weaken' },
    {
      type: 'paragraph',
      text: 'Hard Weaken questions usually become difficult in one of three ways. Understanding which one you are facing helps you recover quickly under time pressure.',
    },
    {
      type: 'table',
      headers: ['Difficulty Factor', 'What It Does', 'Your Counter-Strategy'],
      rows: [
        [
          '**1. Subtle Gaps**',
          'The argument\'s vulnerability is hidden inside small shifts in scope, metrics, or descriptive language, so the gap does not feel obvious at first glance.',
          'Paraphrase the conclusion in stripped-down form and compare it word-by-word against the evidence.',
        ],
        [
          '**2. Strengthener Traps**',
          'A wrong answer supports the argument while sounding highly relevant to the subject matter.',
          'Run the Direction Check: ask whether the answer makes the conclusion MORE likely or LESS likely.',
        ],
        [
          '**3. Pattern Forcing**',
          'You try to impose a familiar weakening pattern on a stimulus that needs a different lens altogether.',
          'Return to the exact bridge in the argument and choose the lens that attacks that bridge directly.',
        ],
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'How the Difficulty Factors Show Up in This Module' },
    {
      type: 'breakdown',
      labels: { title: 'Factor', text: 'Module 8 Example' },
      items: [
        {
          title: 'Subtle Gaps — `PT-103-S-3-Q-24`',
          text: 'The argument looks statistically solid, but the real weakness is the silent shift from **all new-car sales** to **individual buyers**. On hard questions, the whole gap may be hiding inside one noun phrase.',
          badge: 'Composition',
          badgeColor: 'blue',
        },
        {
          title: 'Strengthener Traps — `PT-101-S-2-Q-19`',
          text: 'Weaken EXCEPT questions reverse the direction test. The credited answer is the one choice that helps the argument, so a strengthener becomes correct precisely because it does **not** weaken.',
          badge: 'EXCEPT',
          badgeColor: 'red',
        },
        {
          title: 'Pattern Forcing — `PT-111-S-4-Q-20`',
          text: 'If you force a causal reading onto the archaeologist\'s argument, you miss the real flaw. The attack is that the option set is incomplete, not that the stated cause has a rival cause.',
          badge: 'Fallback',
          badgeColor: 'indigo',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'The Non-Causal Fallback' },
    {
      type: 'paragraph',
      text: 'When a stimulus is not cleanly causal, your job is still the same: identify the bridge between evidence and conclusion and widen it. The difference is that the bridge may involve worth, completeness, scope, or comparison rather than cause.',
    },
    {
      type: 'process',
      title: 'Fallback Solve Order',
      steps: [
        '**State the conclusion in stripped-down form.** What, precisely, is the author trying to establish?',
        '**Name the bridge the author needs.** What must be true for these premises to justify that conclusion?',
        '**Pick the weakening lens that matches the bridge.** Scope shift? Misleading statistic? Omitted option? Cost-benefit / tradeoff?',
        '**Choose the answer that damages the bridge directly.** Reject answers that are merely topical, colorful, or generally negative.',
      ],
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'Keep It Gap-Based',
      text: 'The fallback method is not permission to improvise. A good weakener does not merely add a negative fact about the subject. It attacks the exact assumption that lets the author move from these premises to this conclusion.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Named Lens: Cost-Benefit / Tradeoff' },
    {
      type: 'paragraph',
      text: 'One of the most useful non-causal fallback lenses appears when the author claims that a policy, purchase, or choice is worth making. These arguments often compare two options, highlight an upside, and quietly assume that all relevant costs have already been counted.',
    },
    {
      type: 'table',
      headers: ['Signal', 'What the Author Assumes', 'Best Weakening Move'],
      rows: [
        [
          '**"Worth it" / recommendation language**',
          'The upside really survives full accounting',
          'Add a hidden cost, continuing burden, or side effect that undercuts the payoff',
        ],
        [
          '**Comparison between two options**',
          'The comparison counts all relevant costs on both sides',
          'Show that one side of the comparison omits maintenance, replacement, implementation, or opportunity costs',
        ],
        [
          '**Claimed long-term benefit**',
          'The future benefit is large and durable enough to justify the choice',
          'Show the benefit is small, short-lived, or wiped out by ongoing expenses',
        ],
      ],
    },
    {
      type: 'paragraph',
      text: 'This lens is still structural. You are not criticizing the topic of the plan or purchase. You are showing that the author\'s accounting is incomplete, one-sided, or based on a supposed benefit that may vanish once the missing burden is added.',
    },
    { type: 'hr' },

    { type: 'h3', text: 'Practice: Cost-Benefit / Tradeoff' },
    {
      type: 'paragraph',
      text: 'Use the tradeoff lens on the following validated question. Commit to an answer before scrolling to the analysis.',
    },
    { type: 'hr' },

    {
      type: 'question-card',
      id: 'PT-111-S-3-Q-23',
      stimulus:
        'Tony: A videocassette recorder costs about the same as hiring someone to record your favorite shows when you are away. But Anna insists on purchasing a videocassette recorder. If she had instead simply hired someone, she would have saved the time she will spend learning to program the machine.\n\nAnna: But Tony fails to consider the long-term savings. Once I learn to program my videocassette recorder, I can use it to record shows indefinitely at no additional cost.',
      question: 'Which one of the following, if true, most undermines Anna\'s response to Tony?',
      options: [
        '(A) Most people who purchase videocassette recorders eventually use them to watch rented movies as well as to record shows.',
        '(B) Hiring someone to record shows typically involves a one-time scheduling arrangement that requires very little of the employer\'s time.',
        '(C) The cost of hiring someone to record shows has been declining steadily over the past several years.',
        '(D) The cost savings Anna anticipates from using her videocassette recorder rather than hiring someone would be small or nonexistent, because a videocassette recorder typically requires expensive maintenance and tape replacements. (Correct)',
        '(E) Tony has never used a videocassette recorder and does not fully appreciate the convenience it offers.',
      ],
    },

    { type: 'h3', text: 'Full Analysis' },

    { type: 'h4', text: 'Step 1: Break Down the Exchange' },
    {
      type: 'breakdown',
      labels: { title: 'Statement', text: 'Role in the Argument' },
      items: [
        {
          title:
            'Tony: "A videocassette recorder costs about the same as hiring someone ... If she had instead simply hired someone, she would have saved the time she will spend learning to program the machine."',
          text: 'Tony\'s point is comparative. If the upfront money is roughly the same, hiring someone looks better because it avoids the learning-time cost.',
        },
        {
          title:
            'Anna: "Tony fails to consider the long-term savings. Once I learn to program my videocassette recorder, I can use it to record shows indefinitely at no additional cost."',
          text: 'Anna responds with a **cost-benefit / tradeoff** claim. She concedes the one-time learning cost but argues that long-term savings make ownership worthwhile.',
        },
      ],
    },

    { type: 'h4', text: 'Step 2: Identify the Gap' },
    {
      type: 'paragraph',
      text: 'Tony says the upfront cost is about the same and adds a time cost for learning the machine. Anna replies that ownership creates long-term savings. Her response only works if those long-term savings are real **after** you count the ordinary ongoing costs of owning the machine.',
    },
    {
      type: 'callout',
      variant: 'default',
      title: 'The Gap in One Sentence',
      text: 'Anna treats the VCR as if its relevant costs end after purchase and programming. If ownership carries continuing expenses that erase the promised savings, her response collapses.',
    },

    { type: 'h4', text: 'Step 3: Prephrase the Weakener' },
    {
      type: 'paragraph',
      text: 'Prephrase: *"Anna\'s response would be undermined if the VCR has continuing costs that make the supposed long-term savings tiny or nonexistent."*',
    },
    {
      type: 'list',
      items: [
        '**Hidden ongoing costs** would directly attack Anna\'s claim that ownership becomes effectively free after the learning phase.',
        '**A smaller-than-advertised future benefit** would also weaken, but only if it directly undercuts the savings Anna is relying on.',
      ],
    },

    { type: 'h4', text: 'Step 4: Evaluate the Choices' },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        {
          title:
            '(A) Most people who purchase videocassette recorders eventually use them to watch rented movies as well as to record shows.',
          text: 'This adds an extra benefit to VCR ownership. More uses make the purchase look better, not worse. **Strengthener.**',
          badge: 'Incorrect',
          badgeColor: 'red',
        },
        {
          title:
            '(B) Hiring someone to record shows typically involves a one-time scheduling arrangement that requires very little of the employer\'s time.',
          text: 'This helps Tony\'s original time-cost point, but it does not directly challenge Anna\'s claim about **long-term savings**. The best answer should hit Anna\'s accounting more directly.',
          badge: 'Partial',
          badgeColor: 'blue',
        },
        {
          title:
            '(C) The cost of hiring someone to record shows has been declining steadily over the past several years.',
          text: 'This does weaken somewhat, because cheaper hiring makes Anna\'s savings claim less impressive. But it still leaves open the possibility that owning the VCR saves substantial money in the long run. It is weaker than a choice showing the savings are effectively wiped out.',
          badge: 'Secondary',
          badgeColor: 'blue',
        },
        {
          title:
            '(D) The cost savings Anna anticipates from using her videocassette recorder rather than hiring someone would be small or nonexistent, because a videocassette recorder typically requires expensive maintenance and tape replacements.',
          text: 'This is the classic **cost-benefit / tradeoff** weakener. Anna\'s whole response depends on long-term savings. Choice (D) shows that once you include the missing ongoing costs, those savings disappear. The hidden burden destroys the claimed benefit.',
          badge: 'Correct',
          badgeColor: 'green',
        },
        {
          title:
            '(E) Tony has never used a videocassette recorder and does not fully appreciate the convenience it offers.',
          text: 'Tony\'s personal experience does not determine whether Anna\'s projected savings are real. Convenience is also a different standard from the one Anna actually invokes, which is money saved over time.',
          badge: 'Irrelevant',
          badgeColor: 'red',
        },
      ],
    },
    { type: 'hr' },

    { type: 'h3', text: 'Why This Is the Right Fallback Lens' },
    {
      type: 'table',
      headers: ['Element', 'In the Stimulus'],
      rows: [
        ['**Claimed benefit**', 'Long-term savings from owning the VCR'],
        ['**Missing burden**', 'Maintenance and tape-replacement costs'],
        ['**Winning attack**', 'Show the promised savings disappear once the missing burden is counted'],
      ],
    },
    {
      type: 'paragraph',
      text: 'That is exactly how the non-causal fallback should feel on test day. The argument is not primarily about causation. It is about whether one option remains worthwhile after all relevant costs are counted. Once you see that, the correct answer becomes a direct accounting attack rather than a general criticism of the product or of Tony\'s judgment.',
    },
    { type: 'hr' },

    {
      type: 'callout',
      variant: 'summary',
      title: 'Key Takeaways',
      text: '**1.** Hard Weaken questions split between precise causal applications and non-causal arguments that require a gap-first fallback.\n\n**2.** When no obvious pattern appears, state the conclusion in stripped-down form, name the bridge it needs, and choose the weakening lens that damages that bridge directly.\n\n**4.** The cost-benefit / tradeoff lens attacks incomplete accounting: hidden costs, continuing burdens, or missing downsides that wipe out the claimed benefit.\n\n**5.** Hard questions reward direction discipline. Even on tradeoff questions, reject answers that merely sound relevant and choose the one that actually makes the conclusion less warranted.',
    },
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Traits of High-Difficulty Weaken Questions"
        },
        {
          "type": "paragraph",
          "text": "As you progress, Weaken questions evolve. At the highest difficulty levels, the flaws are rarely simple alternative causes. Instead, the arguments become complex, hiding their weaknesses in subtle definitions, multi-step causal chains, flawed comparisons, or distorted statistics. To succeed on these questions, you must move beyond basic patterns and learn to spot the sophisticated ways an argument can fail."
        },
        {
          "type": "paragraph",
          "text": "This lesson analyzes the core traits that make high-difficulty Weaken questions so challenging and equips you with the advanced strategies needed to dismantle them."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Three Difficulty Factors for Weaken"
        },
        {
          "type": "paragraph",
          "text": "Every hard Weaken question employs one or more of three overarching **difficulty factors**. Understanding these factors lets you diagnose *why* a question feels hard, which is the first step to beating it."
        },
        {
          "type": "table",
          "headers": [
            "Difficulty Factor",
            "What It Does",
            "Your Counter-Strategy"
          ],
          "rows": [
            [
              "**1. Subtle Gaps**",
              "The argument's vulnerability is buried under layers of detail, complex sentence structure, or seemingly tight logic. The gap between evidence and conclusion is so narrow that it doesn't feel like a gap at all.",
              "Slow down and map the full argument structure before looking at answer choices. Paraphrase the conclusion in your own words and compare it word-by-word against the evidence."
            ],
            [
              "**2. Strengthener Traps**",
              "One or more wrong answers actually *support* the argument. Because you've been trained to look for weaknesses, a confident-sounding answer that feels relevant can trick you into selecting it without testing its direction.",
              "For every answer you're drawn to, explicitly ask: \"Does this make the conclusion MORE likely or LESS likely?\" If it makes it more likely, it's a strengthener — eliminate it immediately."
            ],
            [
              "**3. Conditional Weakeners**",
              "An answer choice only weakens the argument *if* you add an additional assumption that isn't stated. The answer seems devastating at first glance, but its force depends on something unstated being true.",
              "Test each candidate: \"Does this weaken the argument ON ITS OWN, or do I need to assume something extra?\" The correct answer weakens without requiring additional assumptions."
            ]
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Concrete Examples of Each Difficulty Factor"
        },
        {
          "type": "h4",
          "text": "Factor 1: Subtle Gaps"
        },
        {
          "type": "paragraph",
          "text": "Consider this argument: \"A study found that employees who work from home report higher job satisfaction than those who work in the office. Therefore, companies should implement remote work policies to improve overall employee satisfaction.\""
        },
        {
          "type": "paragraph",
          "text": "The gap is subtle: the evidence is about employees who *already* work from home (a self-selected group who likely chose remote work because it suits them). The conclusion is about *all* employees. People forced into remote work might not experience the same satisfaction boost. The subtle gap is between a self-selected sample and a general population."
        },
        {
          "type": "h4",
          "text": "Factor 2: Strengthener Traps"
        },
        {
          "type": "paragraph",
          "text": "Using the same argument, a strengthener trap might read: \"Remote workers tend to have fewer distractions during focused work periods than office workers do.\" This feels relevant and seems to support the idea that remote work is beneficial — but it *strengthens* the conclusion rather than weakening it. On a hard question, this would be one of the most selected wrong answers."
        },
        {
          "type": "h4",
          "text": "Factor 3: Conditional Weakeners"
        },
        {
          "type": "paragraph",
          "text": "A conditional weakener for the same argument: \"Some employees report feeling isolated when working from home.\" This *could* weaken the argument — but only if you assume isolation outweighs the satisfaction benefits. The answer doesn't establish that. A stronger weakener would be: \"Employees who are assigned to remote work without choosing it report lower satisfaction than office workers.\" This weakens directly, without requiring additional assumptions."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "The Strengthener Trap — The Most Common Wrong Answer Type"
        },
        {
          "type": "paragraph",
          "text": "On hard Weaken questions, the single most common wrong answer type is **the strengthener**. Test-makers know that under time pressure, you're focused on the argument's topic, and a confident, relevant-sounding answer that aligns with the argument's logic feels intuitively \"right.\" Your guard against weakening is lower than your guard against irrelevance."
        },
        {
          "type": "callout",
          "title": "The Direction Check",
          "variant": "tip",
          "text": "Before committing to any answer on a Weaken question, perform the **Direction Check**: mentally insert the answer into the argument and ask, \"Is the conclusion now MORE likely or LESS likely to be true?\" This 5-second check catches most strengthener traps."
        },
        {
          "type": "paragraph",
          "text": "Strengthener traps come in three forms:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Strengthener Type",
            "text": "How It Works"
          },
          "items": [
            {
              "title": "The Assumption Confirmer",
              "text": "Directly states something the argument assumes to be true. Example: if the argument assumes no confounding variable, this answer says \"no confounding variable existed.\"",
              "badge": "Very Common",
              "badgeColor": "red"
            },
            {
              "title": "The Alternative Eliminator",
              "text": "Rules out a competing explanation, thereby making the author's explanation the only one left standing. Example: \"No other factor changed during the study period.\"",
              "badge": "Common",
              "badgeColor": "red"
            },
            {
              "title": "The Additional Evidence Provider",
              "text": "Supplies new evidence that supports the same conclusion through a different path. Example: \"A separate study found similar results using a different methodology.\"",
              "badge": "Moderate",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Advanced Weakening Strategies"
        },
        {
          "type": "paragraph",
          "text": "Beyond the basic \"find an alternative cause\" approach, high-difficulty Weaken questions reward three advanced strategies."
        },
        {
          "type": "h4",
          "text": "Strategy 1: Breaking Causal Chains"
        },
        {
          "type": "paragraph",
          "text": "Many hard arguments present multi-step causal chains: A → B → C → D. The author concludes that A ultimately causes D. The most effective weakener often attacks a single link in the middle of the chain, severing the connection without needing to address A or D directly."
        },
        {
          "type": "paragraph",
          "text": "**Example:** \"Stress causes cortisol release, which suppresses the immune system, which leads to illness. Therefore, stress causes illness.\" A weakener might show that \"cortisol levels return to baseline within hours,\" breaking the B → C link. Without sustained immune suppression, the chain from stress to illness collapses."
        },
        {
          "type": "h4",
          "text": "Strategy 2: Attacking Hidden Assumptions"
        },
        {
          "type": "paragraph",
          "text": "Every argument rests on unstated assumptions. On easy questions, these assumptions are obvious. On hard questions, the assumption is deeply embedded and may not feel like an assumption at all."
        },
        {
          "type": "process",
          "title": "Finding the Hidden Assumption",
          "steps": [
            "**State the evidence in one sentence.** Strip away all modifiers and qualifications.",
            "**State the conclusion in one sentence.** Again, reduce it to its core claim.",
            "**Ask: \"What must be true for the evidence to support this conclusion?\"** The answer to this question is the hidden assumption.",
            "**Look for an answer choice that denies this assumption.** That is your weakener."
          ]
        },
        {
          "type": "h4",
          "text": "Strategy 3: Showing Alternative Explanations"
        },
        {
          "type": "paragraph",
          "text": "At the highest difficulty level, alternative explanations go beyond simple \"maybe C caused B instead of A.\" They involve:"
        },
        {
          "type": "list",
          "items": [
            "**Reverse causation** — showing the effect actually caused the supposed cause (covered in Lesson 7)",
            "**Selection effects** — showing the observed correlation exists because of how the sample was chosen, not because of a real causal link",
            "**Confounding variables** — identifying a third factor that drives both the supposed cause and effect, making the relationship an illusion",
            "**Scope displacement** — showing the effect is real but occurs in a different population, timeframe, or context than the conclusion claims"
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Practice: High-Difficulty Weaken Question"
        },
        {
          "type": "paragraph",
          "text": "Apply the traits and strategies from this lesson to the following question. Pay attention to multi-step reasoning and abstract language in the answer choices."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Answer Explanation"
        },
        {
          "type": "paragraph",
          "text": "**The argument's structure:** Congestion pricing was introduced → downtown traffic dropped 15% → therefore congestion pricing is effective at reducing urban traffic congestion."
        },
        {
          "type": "paragraph",
          "text": "**The hidden gap:** The conclusion is about reducing *urban traffic congestion*, but the evidence only measures *downtown* traffic volume. This is a **scope shift** — if drivers simply rerouted to streets outside the downtown zone, total congestion didn't decrease; it just moved."
        },
        {
          "type": "paragraph",
          "text": "**Which difficulty factor is at play?** This is a classic **Subtle Gap** — the shift from \"downtown traffic\" to \"urban traffic congestion\" is easy to miss because the two phrases sound nearly synonymous."
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Option",
            "text": "Analysis"
          },
          "items": [
            {
              "title": "(A) Some cities also invested in expanded public transit.",
              "text": "**Alternative cause** — but this weakens the claim that *pricing* specifically caused the drop, not that congestion wasn't reduced. A secondary weakener at best, and less devastating than (C).",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(B) The fees are too low to affect wealthier commuters.",
              "text": "Even if wealthier drivers are unaffected, the overall 15% reduction shows *some* drivers changed behavior. This doesn't break the argument.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(C) Total vehicle-miles traveled in the metro area increased by 10%.",
              "text": "This is the devastating weakener. It shows that while downtown traffic fell, driving actually *increased* across the wider urban area. Congestion pricing didn't reduce congestion — it displaced it. This directly attacks the conclusion's broader claim about \"urban traffic congestion.\" This is a **scope displacement** weakener.",
              "badge": "Correct",
              "badgeColor": "green"
            },
            {
              "title": "(D) Several cities decided against congestion pricing.",
              "text": "Completely irrelevant to whether the policy worked in cities that *did* implement it.",
              "badge": "Incorrect",
              "badgeColor": "red"
            },
            {
              "title": "(E) Traffic was already declining before pricing began.",
              "text": "A plausible alternative cause, but the premise says the reduction happened \"within two years\" of implementation — the pre-existing trend is a weaker attack than the direct evidence in (C).",
              "badge": "Incorrect",
              "badgeColor": "red"
            }
          ]
        },
        {
          "type": "paragraph",
          "text": "**Why this is hard:** The correct answer requires you to notice the scope shift between \"downtown traffic\" and \"urban traffic congestion.\" The abstract phrase \"total vehicle-miles traveled within the metropolitan area\" must be translated into stimulus-specific terms to see that it's showing displacement, not reduction."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Decoding Abstract Answer Language"
        },
        {
          "type": "paragraph",
          "text": "One hallmark of hard Weaken questions is that the correct answer uses language that feels unfamiliar or overly general compared to the stimulus. Here is a systematic decoder you can apply to any abstract answer choice:"
        },
        {
          "type": "process",
          "title": "The Translation Method",
          "steps": [
            "**Read the answer literally.** What claim is it actually making, stripped of jargon?",
            "**Substitute stimulus terms.** Replace the abstract nouns and verbs with the specific people, things, and actions from the stimulus.",
            "**Test the substituted version.** Does the concrete version break a link in the argument? If yes, the abstract answer is correct.",
            "**If the substitution doesn't connect,** the abstractness is hiding irrelevance — eliminate it."
          ]
        },
        {
          "type": "paragraph",
          "text": "**Example:** Stimulus discusses a new pesticide reducing crop damage. An abstract answer says, \"The metric used to assess the outcome was not calibrated to isolate the variable under study.\" Translated: \"The way they measured 'crop damage' didn't separate damage caused by the target pest from damage caused by other factors.\" Once translated, you can see it attacks the data — a powerful weakener."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "Elimination Strategies for Hard Weaken Questions"
        },
        {
          "type": "paragraph",
          "text": "When you're stuck between two or three answer choices on a hard Weaken question, use these tiebreaker strategies:"
        },
        {
          "type": "breakdown",
          "labels": {
            "title": "Strategy",
            "text": "How to Apply"
          },
          "items": [
            {
              "title": "1. Target the Conclusion, Not Just the Evidence",
              "text": "The strongest weakener attacks the *conclusion* specifically. If an answer only challenges a premise or provides background context, it's weaker. Ask: \"Does this make the conclusion less likely to be true?\"",
              "badge": "Primary",
              "badgeColor": "green"
            },
            {
              "title": "2. Prefer Structural Attacks Over Peripheral Ones",
              "text": "An answer that breaks the *logical link* between evidence and conclusion (e.g., showing the evidence doesn't support the conclusion) is stronger than one that merely adds a complication (e.g., providing a minor alternative cause).",
              "badge": "Primary",
              "badgeColor": "green"
            },
            {
              "title": "3. Check for Scope Match",
              "text": "The best weakener operates in the exact same scope as the conclusion. If the conclusion is about \"all cities\" and the answer talks about \"one specific city,\" it's weaker. Match the nouns, timeframe, and breadth.",
              "badge": "Tiebreaker",
              "badgeColor": "blue"
            },
            {
              "title": "4. Beware the \"True But Irrelevant\" Trap",
              "text": "An answer can be obviously, verifiably true and still be a wrong answer if it doesn't connect to the argument's gap. Hard questions exploit our tendency to select answers that \"feel\" right rather than ones that logically weaken.",
              "badge": "Tiebreaker",
              "badgeColor": "blue"
            },
            {
              "title": "5. Re-Read the Conclusion Word by Word",
              "text": "On hard questions, return to the conclusion and read each word carefully. Authors often use qualifying language (\"most,\" \"probably,\" \"primarily\") or scope-limiting terms (\"in urban areas,\" \"among adults\") that restrict what counts as a valid weakener.",
              "badge": "Last Resort",
              "badgeColor": "slate"
            }
          ]
        },
        {
          "type": "hr"
        },
        {
          "type": "callout",
          "title": "Key Takeaways",
          "variant": "summary",
          "text": "**1.** Hard Weaken questions employ three difficulty factors: subtle gaps, strengthener traps, and conditional weakeners.\n**2.** The strengthener trap is the most common wrong answer type — always perform the Direction Check before committing.\n**3.** Advanced weakening strategies include breaking causal chains, attacking hidden assumptions, and showing alternative explanations (reverse causation, selection effects, confounding variables, scope displacement).\n**4.** Use the Translation Method to decode abstract answer choices: read literally → substitute stimulus terms → test the concrete version.\n**5.** When eliminating, prioritize answers that attack the logical link between evidence and conclusion over those that merely add complications."
        }
      ],
    },
  },
};
