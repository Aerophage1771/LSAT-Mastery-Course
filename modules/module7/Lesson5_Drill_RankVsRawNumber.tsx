import { Lesson } from '../../types';

export const Lesson5_Drill_RankVsRawNumber: Lesson = {
  id: "7-5",
  title: "Drill: Rank vs. Raw Number (PT-112-S-1-Q-24)",
  content: [
    { type: 'h2', text: 'Drill: The Rank vs. Raw Number Confusion' },
    { type: 'paragraph', text: "Arguments that confuse **relative position** with **absolute quantity** are among the most deceptive on the LSAT. An author might present a high ranking — \"second place,\" \"top 10%,\" \"the leading cause\" — as evidence of a large number, but this inference is logically invalid. Without knowing the distribution of the underlying data, a high rank can correspond to an impressively large number or a trivially small one." },
    { type: 'paragraph', text: "This confusion is especially dangerous in Evaluate the Argument questions because it is subtle. The ranking *feels* meaningful — \"second place\" sounds important. But a ranking is only a relative measure: it tells you where something stands compared to other things, not how large it actually is. The pivotal evaluation question for these arguments is always: **\"What are the actual numbers behind the ranking?\"**" },

    { type: 'hr' },

    { type: 'h3', text: 'How Rankings Can Be Misleading' },
    { type: 'paragraph', text: "A rank tells you order. It does not tell you magnitude. Consider the difference between these two scenarios:" },
    { type: 'breakdown', labels: { title: 'Scenario', text: 'What "Second Place" Means' }, items: [
      { title: 'Scenario A: Even Distribution', text: 'Out of 1,000 votes, the Bible gets 200, *1984* gets 180, and 620 votes are spread across dozens of books. Here, "second place" means *1984* received 18% of all votes — a substantial share. The ranking reflects a genuinely large number.', badge: 'Rank = Large Number', badgeColor: 'green' },
      { title: 'Scenario B: Extreme Skew', text: 'Out of 1,000 votes, the Bible gets 990, *1984* gets 3, and 7 votes go to other books. Here, "second place" means *1984* received 0.3% of all votes — essentially nothing. The ranking masks a trivially small number.', badge: 'Rank = Tiny Number', badgeColor: 'red' },
    ]},
    { type: 'paragraph', text: "In both scenarios, *1984* is in \"second place.\" But the rank means something completely different depending on the distribution. The argument becomes valid or invalid based on information the author never provides." },

    { type: 'callout', variant: 'default', title: 'The Core Insight', text: "A rank is an **ordinal** measure (first, second, third). A raw number is a **cardinal** measure (3, 180, 990). You cannot derive a cardinal value from an ordinal value without additional information about the distribution. Any argument that attempts to do so has a logical gap." },

    { type: 'hr' },

    { type: 'h3', text: 'Common Rank/Number Confusion Patterns' },
    { type: 'paragraph', text: "The LSAT presents rank-vs-number confusion in several recurring forms. Learning to spot these patterns helps you prephrase the pivotal question before reading the answer choices." },

    { type: 'table', headers: ['Pattern', 'What the Argument Does', 'Why It Fails'], rows: [
      ['**High Rank → Large Quantity**', 'Concludes that something exists in large numbers because it holds a high rank (e.g., "the #2 cause of X")', 'The #2 cause could account for 40% of cases or 0.5% of cases — the rank alone does not tell you'],
      ['**Rank Improvement → Actual Improvement**', 'Concludes that performance improved because the rank went up (e.g., "moved from 5th to 3rd")', 'The rank could improve because competitors got worse, not because the subject got better; absolute performance may have even declined'],
      ['**Top Percentage → Large Number**', 'Concludes that a quantity is large because it is in the top X% (e.g., "in the top 5% of earners")', 'If the total population is very small, "top 5%" could be just a handful of individuals'],
      ['**"Most Common" → Common**', 'Concludes that something is widespread because it is the most common of its kind', 'The most common cause of a rare disease is still rare; being #1 in a small category does not imply being large in absolute terms'],
    ]},

    { type: 'h3', text: 'How to Evaluate Rank-Based Arguments' },
    { type: 'paragraph', text: "When you identify a rank-vs-number confusion, your evaluation strategy has three parts:" },
    { type: 'process', title: 'Evaluation Strategy', steps: [
      '**Step 1 — Identify the Rank:** What is the ranking or relative position cited in the evidence? ("second place," "the leading cause," "in the top 10%")',
      '**Step 2 — Identify the Quantity Claim:** What does the conclusion claim about an absolute number or amount? ("a great number," "is widespread," "has improved significantly")',
      '**Step 3 — Find the Distribution Question:** The pivotal question will ask about the distribution of the data — how the votes, cases, or values are spread across categories. The answer to this question determines whether the rank actually corresponds to the claimed quantity.',
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Practice Problem' },
    { type: 'paragraph', text: "**Instructions:** Read the stimulus, question, and answer choices below. This is a high-difficulty question — only 36% of test-takers answered correctly. Commit to an answer before scrolling down to the step-by-step analysis." },

    { type: 'question-card',
      id: 'EV-7-5-001',
      questionType: 'Evaluate the Argument',
      difficulty: 'hard',
      stimulus: "Columnist: George Orwell's book 1984 has exercised much influence on a great number of this newspaper's readers. One thousand readers were surveyed and asked to name the one book that had the most influence on their lives. The book chosen most often was the Bible; 1984 was second.",
      question: "The answer to which one of the following questions would most help in evaluating the columnist's argument?",
      options: [
        "(A) How many books had each person surveyed read?",
        "(B) How many people chose books other than 1984? (Correct)",
        "(C) How many people read the columnist's newspaper?",
        "(D) How many books by George Orwell other than 1984 were chosen?",
        "(E) How many of those surveyed had actually read the books they chose?",
      ],
    },

    { type: 'paragraph', text: "<br/><br/><br/>" },
    { type: 'hr' },

    { type: 'h2', text: 'Step-by-Step Analysis' },
    { type: 'paragraph', text: "*(Scroll down only after committing to an answer.)*" },
    { type: 'hr' },

    { type: 'h3', text: 'Step 1: Find the Conclusion' },
    { type: 'paragraph', text: "Let's break down the argument sentence by sentence." },

    { type: 'breakdown', labels: { title: 'Quote', text: 'Analysis' }, items: [
      { title: "\"George Orwell's book 1984 has exercised much influence on a great number of this newspaper's readers.\"", text: "This is the **main conclusion**. The columnist makes a claim about an **absolute quantity** — that a \"great number\" of people were influenced. This is a claim about how many, not about relative ranking.", badge: 'Conclusion', badgeColor: 'indigo' },
      { title: "\"One thousand readers were surveyed and asked to name the one book that had the most influence on their lives.\"", text: "This is **background** — it describes the methodology. The total pool is 1,000 readers. Each person named exactly one book.", badge: 'Background', badgeColor: 'slate' },
      { title: "\"The book chosen most often was the Bible; 1984 was second.\"", text: "This is the **premise** — the evidence. The support for the conclusion is entirely based on *1984*'s **second-place ranking** in the survey. The author uses this relative position as proof of a large absolute number.", badge: 'Premise', badgeColor: 'slate' },
    ]},

    { type: 'h3', text: 'Step 2: Identify the Gap' },
    { type: 'paragraph', text: "The conclusion claims a \"great number\" of readers were influenced (a statement about **absolute quantity**). The evidence is that *1984* finished in \"second\" place (a statement about **relative rank**). The argument assumes that a high ranking means a high number of votes — but this is not necessarily true." },
    { type: 'paragraph', text: "The flaw is the assumption that \"second place\" must mean a lot of votes. But the distribution of votes could be extremely skewed. Consider this hypothetical:" },

    { type: 'table', headers: ['Book', 'Votes', 'Rank'], rows: [
      ['The Bible', '990', '#1'],
      ['*1984*', '3', '#2'],
      ['*The Great Gatsby*', '2', '#3'],
      ['5 other books', '1 each', '#4–#8'],
    ]},

    { type: 'paragraph', text: "In this scenario, *1984* is still in second place — but it received only 3 votes out of 1,000. Is 3 \"a great number\"? Clearly not. The ranking of \"second\" is mathematically compatible with anything from 3 votes to nearly 500 votes. Without knowing the distribution, the rank is uninterpretable." },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The argument assumes that *1984*'s second-place **rank** corresponds to a large **raw number** of votes — but the rank alone cannot establish the actual vote count." },

    { type: 'h3', text: 'Step 3: Prephrase the Pivotal Question' },
    { type: 'paragraph', text: "Since the gap is between rank and raw number, the pivotal question must help us determine the actual number of votes *1984* received. The most direct question would be: *\"How many people chose 1984?\"* But LSAT answer choices often approach this indirectly. Since we know the total is 1,000, knowing how many chose *other* books would let us calculate *1984*'s total by subtraction." },
    { type: 'blockquote', text: '*"How were the votes distributed? How many people chose books other than 1984?"*' },
    { type: 'paragraph', text: "If a high number chose other books, then very few chose *1984* and the conclusion fails. If a low number chose other books, then many must have chosen *1984* and the conclusion is supported." },

    { type: 'h3', text: 'Step 4: Apply the Yes/No Test to Choice (B)' },
    { type: 'paragraph', text: "Choice (B) asks: *\"How many people chose books other than 1984?\"*" },
    { type: 'paragraph', text: "This seems indirect — it asks about *other* books, not about *1984*. But mathematically, it is decisive. Because the total number of voters is fixed at 1,000, knowing how many chose other books tells us exactly how many chose *1984*." },

    { type: 'breakdown', labels: { title: 'Possible Answer', text: 'Effect on the Argument' }, items: [
      { title: '"A very high number" — e.g., 997 people chose books other than 1984', text: 'Then at most **3 people** chose *1984*. The conclusion that *1984* influenced "a great number" of readers is **devastated**. Three out of a thousand is not a "great number" by any measure.', badge: 'Destroys', badgeColor: 'red' },
      { title: '"A lower number" — e.g., 600 people chose books other than 1984', text: 'Then **400 people** chose *1984*. This means 40% of surveyed readers named *1984* as the most influential book in their lives. The conclusion that it influenced "a great number" is **powerfully supported**.', badge: 'Validates', badgeColor: 'green' },
    ]},
    { type: 'paragraph', text: "The answer to this question forces a specific raw number for *1984* and makes the argument's validity swing dramatically. It passes the Yes/No Test decisively." },

    { type: 'hr' },

    { type: 'h3', text: 'Answer Choice Breakdown' },
    { type: 'paragraph', text: "Let's examine why each incorrect choice fails the Yes/No Test — and what trap each one represents. This question's difficulty (only 36% correct) means the traps are especially well-designed." },

    { type: 'breakdown', labels: { title: 'Option', text: 'Evaluation' }, items: [
      { title: "(A) How many books had each person surveyed read?", text: "This is the **Irrelevant Detail Trap** (chosen by 19% of test-takers). The survey asked for the *one most influential* book. How many books a person has read does not change which single book they named. A voracious reader and a casual reader each cast exactly one vote. **Fails the Yes/No Test:** Whether respondents read 5 books or 500 does not affect *1984*'s vote total or the validity of the rank-to-number inference.", badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: "(B) How many people chose books other than 1984?", text: "This is the **correct answer**. It indirectly but precisely reveals the raw number of votes for *1984*. Because the total is fixed at 1,000, subtracting the number who chose other books gives us *1984*'s count. The Yes/No Test produces a decisive split: a high number of \"other\" voters devastates the argument; a low number validates it.", badge: 'Correct', badgeColor: 'green' },
      { title: "(C) How many people read the columnist's newspaper?", text: "This is the **Scope Trap** (chosen by 23% of test-takers). The conclusion is about the survey respondents — 1,000 readers who were surveyed. Whether the newspaper has 5,000 or 5 million total readers does not change the interpretation of the survey results. The argument is about *this sample*, not about the total readership. **Fails the Yes/No Test:** A large total readership does not make *1984*'s second-place rank correspond to a greater number of votes within the 1,000-person survey.", badge: 'Scope Trap', badgeColor: 'red' },
      { title: "(D) How many books by George Orwell other than 1984 were chosen?", text: "This is an **Irrelevant Detail Trap**. The survey asked each person to name *one* book. Votes for other Orwell books (like *Animal Farm*) were cast by different people and do not affect *1984*'s vote total. Even if many Orwell books were chosen, that does not tell us how many chose *1984* specifically. **Fails the Yes/No Test:** The number of votes for other Orwell books does not resolve the rank-to-number gap for *1984*.", badge: 'Irrelevant Detail', badgeColor: 'red' },
      { title: "(E) How many of those surveyed had actually read the books they chose?", text: "This is the **\"Attack the Premise\" Trap** (chosen by 20% of test-takers). The LSAT requires you to accept the premises as true. We must assume the survey results are what they are — people chose the books they chose. The argument's flaw is about the *interpretation* of the survey results (rank vs. number), not about whether respondents were honest or well-read. **Fails the Yes/No Test:** Even if some respondents had not read their chosen book, the survey still shows *1984* in second place — the rank-to-number gap remains unchanged.", badge: 'Attack the Premise', badgeColor: 'red' },
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'Key Takeaway' },
    { type: 'paragraph', text: "The critical mistake in this argument is equating a **relative rank** with an **absolute number**. A high rank is only meaningful if you understand the distribution of the data. \"Second place\" in a survey of 1,000 people could mean 400 votes or 3 votes — the rank itself is silent on this question." },

    { type: 'callout', variant: 'summary', title: 'Handling Rank vs. Raw Number Arguments', text: "**1. Spot the Rank-to-Number Leap:** When the evidence is a ranking (\"second place,\" \"the leading cause,\" \"top 10%\") and the conclusion is about a quantity (\"a great number,\" \"is widespread,\" \"has improved\"), you have found the gap.\n\n**2. Ask \"What Are the Real Numbers?\"** The core of your evaluation should question the underlying numbers. How many votes, cases, or instances did it take to achieve that rank?\n\n**3. Imagine Extreme Scenarios:** To test the logic, invent numbers that fit the premises but challenge the conclusion. If the #1 choice gets nearly all the votes, the #2 choice could have a trivially small number. This reveals the argument's vulnerability.\n\n**4. Focus on Distribution:** The correct evaluation question will almost always be about the *distribution* of the data — how votes, cases, or values are divided across categories. The answer to this question converts the rank into a raw number.\n\n**5. Watch for Indirect Questions:** The correct answer may not ask about *1984*'s votes directly. It may ask about \"other books\" or \"the total.\" As long as the answer lets you calculate the relevant raw number (because the total is known), the question targets the gap." },

    { type: 'h3', text: 'Why This Question Is Hard' },
    { type: 'paragraph', text: "This question has one of the lowest correct-answer rates for Evaluate questions on any PrepTest. Three features make it difficult:" },
    { type: 'breakdown', labels: { title: 'Difficulty Factor', text: 'How It Misleads' }, items: [
      { title: 'The correct answer is indirect', text: 'Choice (B) asks about books *other than* 1984. Students who are looking for a question that directly asks about *1984* skip over it. But because the total is fixed at 1,000, the indirect question is mathematically equivalent to the direct one.', badge: 'Indirection', badgeColor: 'blue' },
      { title: 'The traps feel relevant', text: 'Choice (C) — the total readership — and choice (E) — whether respondents read their books — both feel like they matter. They touch on real concerns about surveys (sample size, response validity) but miss the specific gap in *this* argument.', badge: 'Plausible Traps', badgeColor: 'blue' },
      { title: 'The gap is numerical, not conceptual', text: 'Most LSAT gaps are conceptual (unrepresentative sample, missing baseline). This gap is mathematical — it requires understanding that a rank does not entail a quantity. Students trained to look for conceptual flaws may not recognize the numerical gap.', badge: 'Math Reasoning', badgeColor: 'blue' },
    ]},
  ]
};
