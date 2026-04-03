import { Lesson } from '../../types';

export const Lesson2_StepByStepApproach: Lesson = {
  id: "32-2",
  title: "Step-by-Step: Third-Party Viewpoint",
  content: [
    { type: 'h3', text: "Step-by-Step: Third-Party Viewpoint" },
    { type: 'process', steps: [
      "Identify the exact target voice",
      "Build a speaker ledger from the passage",
      "Separate attributed claims from author commentary",
      "Match the answer to the target voice and force",
      "Use special checks for agreement and comparative questions"
    ]},
    { type: 'h4', text: "Step 1: Identify the Exact Target Voice" },
    { type: 'paragraph', text: "Read the stem slowly enough to identify the precise speaker. In this pool, the target might be a named scholar, a group of critics, the scientists who use one method, the historians mentioned in one sentence, or the author of Passage B. The first job is to know exactly whose view you are tracking." },
    { type: 'list', items: [
      "Circle the label in your head: **who is the stem really asking about?**",
      "If the stem names two parties, split them immediately into separate lanes before thinking about agreement or disagreement.",
      "If the stem uses a descriptive label, return to the passage and locate where that label is introduced."
    ]},
    { type: 'paragraph', text: "Then ask the second stem question: **what exact issue is this speaker being asked about?** The same speaker may hold several claims in the same passage. You need the right person and the right issue." },
    { type: 'h4', text: "Step 2: Build a Speaker Ledger" },
    { type: 'paragraph', text: "Do not rely on memory alone. Build a simple running ledger of the relevant voices and what belongs to each of them." },
    {
      type: 'table',
      headers: ['Speaker', "What They Claim", "Author's Attitude"],
      rows: [
        ['Research team / critic / historian', 'What idea is directly attributed to them?', 'Approved, criticized, qualified, or left neutral?'],
        ['Author', 'What does the author explicitly endorse or reject?', 'This is the view students most often confuse with the target voice.'],
        ['Competing camp', 'What position is contrasted with the target?', 'Hard questions often hide the wrong answer here.']
      ]
    },
    { type: 'paragraph', text: "On debate-heavy passages, expand that ledger mentally to include **key reasons**. If one camp supports a view for reason A and another criticizes it for reason B, many hard answer choices will test whether you can keep those reasons attached to the right owner." },
    { type: 'h4', text: "Step 3: Separate the Voice from the Commentary" },
    { type: 'paragraph', text: "Many hard Other Viewpoint questions turn on a clean distinction between a speaker's view and the passage's reaction to it. When you locate the target voice, stop and ask whether the sentence is reporting the position itself or evaluating that position." },
    {
      type: 'breakdown',
      labels: { title: 'Signal', text: 'How To Use It' },
      items: [
        {
          title: "Attribution Language",
          text: "Words like **argues, claims, suggests, according to, maintains, proponents hold** usually mark the position itself.",
          badge: "View",
          badgeColor: "indigo"
        },
        {
          title: "Evaluation Language",
          text: "Words like **however, but, mistaken, incomplete, persuasive, implausible** usually mark the author's response to that position.",
          badge: "Commentary",
          badgeColor: "red"
        },
        {
          title: "Comparative Framing",
          text: "In comparative passages, keep Passage A and Passage B in separate mental columns. Similar vocabulary does not mean identical positions.",
          badge: "Comparative",
          badgeColor: "blue"
        }
      ]
    },
    { type: 'h4', text: "Step 4: Match the Answer to Both the Speaker and the Force" },
    { type: 'paragraph', text: "A correct answer must fit not just the right speaker, but also the right degree of commitment. Hard questions often tempt you with an answer that belongs to the right person but overstates or understates what that person would actually endorse." },
    { type: 'list', items: [
      "**Speaker check:** Would the target voice say this, not just the passage in general?",
      "**Issue check:** Is the answer about the exact claim the stem targets, or about some other claim attached to the same speaker?",
      "**Force check:** Is the answer at the right strength level: agree, object, likely endorse, or reject?",
      "**Scope check:** Is the answer about the exact issue the speaker addresses, or does it drift to a nearby issue?"
    ]},
    { type: 'h4', text: "Step 5: Use the Right Method for Agreement and Comparative Questions" },
    { type: 'paragraph', text: "For agreement or disagreement stems, do not compare answer choices first. Compare speakers first. Write down each speaker's position separately and only then ask where the overlap or conflict lies. In comparative passages, do the same thing passage by passage." },
    { type: 'hr' },
    { type: 'h3', text: "If You Get Stuck Between Two Choices..." },
    { type: 'h4', text: "Tie-Breaker #1: The \"Could This Speaker Actually Say It?\" Test" },
    { type: 'paragraph', text: "Read the answer choice as if the target speaker were saying it aloud. Does it sound like their actual position, or like the author's gloss on that position? If the sentence sounds like commentary rather than ownership, it is probably wrong." },
    { type: 'h4', text: "Tie-Breaker #2: The Double-Ledger Test for Agreement Questions" },
    { type: 'paragraph', text: "When the stem asks what two speakers would agree on, test each finalist twice: once against Speaker A and once against Speaker B. The correct answer must survive both checks. Many trap answers are true of one speaker and only loosely compatible with the other." }
  ],
  alternates: {
    diff: {
      label: 'Diff-Highlighted',
      content: [
        {
          "type": "h3",
          "text": "Step-by-Step Approach"
        },
        {
          "type": "h4",
          "text": "Step 1: Identify the Specific Person or Group"
        },
        {
          "type": "paragraph",
          "text": "Read the question stem carefully to identify the exact third party whose viewpoint you need to find. This could be a named individual (\"According to Ellis...\"), a named group (\"The research team believes...\"), or a described group (\"The historians mentioned in the third sentence...\")."
        },
        {
          "type": "h4",
          "text": "Step 2: Locate All Mentions and Attributions"
        },
        {
          "type": "paragraph",
          "text": "Scan the passage for the name or description of the party from Step 1. Your goal is to find the specific sentences where the author explicitly attributes a belief, argument, or claim to them. Look for key attribution phrases like:"
        },
        {
          "type": "list",
          "items": [
            "\"Smith argues that...\"",
            "\"According to the critics...\"",
            "\"Proponents of this view claim...\""
          ]
        },
        {
          "type": "h4",
          "text": "Step 3: Isolate and Paraphrase Their Viewpoint"
        },
        {
          "type": "paragraph",
          "text": "Focus only on the text directly linked to the third party. Carefully read what the passage says they think, believe, or argue. Paraphrase this viewpoint in your own words to ensure you understand it. Crucially, ignore what the author thinks about their view and what other groups might think. Your only job is to accurately report on the specified party's position."
        },
        {
          "type": "h4",
          "text": "Step 4: Match Your Paraphrase to the Answer Choices"
        },
        {
          "type": "paragraph",
          "text": "Compare your understanding of the third party's viewpoint to each answer choice. The correct answer will be a direct restatement or a logical inference that is provably true based only on the information attributed to that specific person or group. Eliminate any choice that represents the author's opinion, another group's opinion, or goes beyond the information provided."
        },
        {
          "type": "hr"
        },
        {
          "type": "h3",
          "text": "If You Get Stuck Between Two Choices..."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #1: The Strict Attribution Check"
        },
        {
          "type": "paragraph",
          "text": "The most common trap is confusing the third party's view with the author's commentary on it. Reread the sentences around your textual proof. Is the statement you're looking at something the third party actually believes, or is it the author's interpretation or criticism of their belief? The correct answer must be something the passage directly assigns to the third party."
        },
        {
          "type": "h4",
          "text": "Tie-Breaker #2: The \"Who Said What?\" Test"
        },
        {
          "type": "paragraph",
          "text": "If multiple viewpoints are presented, it's easy to misattribute a claim. For your final two choices, go back to the text and ask for each one: \"Who, specifically, is this statement about?\" One of the options may accurately reflect a view from the passage, but it's attributed to the wrong person or group. The correct answer must belong to the party named in the question stem."
        }
      ],
    },
    playbook: {
      label: 'Playbook',
      content: [
        { type: 'h2', text: 'Third-Party Viewpoint — Playbook' },
        { type: 'callout', variant: 'tip', title: 'Timing Target', text: 'Budget about 90 seconds per Third-Party Viewpoint question. Spend 30 seconds identifying the target voice and building the speaker ledger, 30 seconds matching the answer to voice and force, and 30 seconds on elimination. If a comparative or agreement stem is involved, allow an extra 20 seconds for the double-check.' },
        {
          type: 'process',
          steps: [
            'Read the stem and circle the exact target voice: named scholar, critics, research team, Passage A author, or Passage B author.',
            'Return to the passage and build a speaker ledger: collect every claim attributed to the target voice, noting the reasons they give and how the author reacts.',
            'Separate attribution language ("argues," "maintains," "according to") from evaluation language ("however," "mistaken," "incomplete") -- only the first belongs to the target.',
            'Test each answer against three filters: correct speaker, correct issue, and correct strength (agree vs. likely endorse vs. would reject).',
            'For agreement/disagreement stems, run the double-ledger test: evaluate each finalist against Speaker A and Speaker B independently before deciding.'
          ]
        },
        {
          type: 'table',
          headers: ['If You See...', 'Do This'],
          rows: [
            ['A stem naming one specific speaker', 'Locate every claim the passage attributes to that speaker. Ignore the author\'s commentary on the view.'],
            ['A stem asking what two speakers agree on', 'Write down each speaker\'s position separately first. Only then test which answer survives both checks.'],
            ['An answer that sounds right but uses the passage author\'s evaluation language', 'Reject it. The trap is confusing the author\'s gloss with the target speaker\'s own position.'],
            ['Two answers that assign the same claim to different speakers', 'Return to the passage and verify the attribution signal word. "X argues" assigns the claim to X, not to the author.'],
            ['A comparative passage with overlapping vocabulary in both passages', 'Keep strict Passage A / Passage B columns. Similar words do not mean identical positions.']
          ]
        },
        { type: 'callout', variant: 'summary', title: 'Method Chain', text: 'Identify target voice --> Build speaker ledger --> Separate attribution from commentary --> Match answer to speaker + issue + force --> Double-ledger test for agreement stems. Every step narrows the field: skip one, and a trap answer survives.' }
      ]
    }
  }
};
