
import { Lesson } from '../../types';

export const Lesson4_Drill_BaselineFlaw: Lesson = {
  id: "8-4",
  title: "Drill: The Baseline Flaw (PT-103-S-2-Q-5)",
  content: [
    { type: 'h2', text: 'Drill: The Baseline Flaw' },

    { type: 'h3', text: "Understanding the Baseline Flaw" },
    { type: 'paragraph', text: "Many arguments on the LSAT try to prove that a program, treatment, or action is effective by pointing to the successful outcomes of the people who participated in it. These arguments are often flawed because they ignore a crucial piece of information: the **baseline**. The baseline is the starting point of the participants. To prove value, an argument must show that the program *caused an improvement* from that baseline, not just that the participants ended up in a good place." },

    { type: 'paragraph', text: "The Baseline Flaw is a specific type of causal error. The author sees a positive outcome and attributes it to a cause without establishing that the outcome is actually different from what would have happened anyway. It is closely related to the **Missing Baseline** pattern covered in Module 7 (Evaluate the Argument), but here you are asked to provide a new fact that exploits the missing baseline rather than identify the question that would probe it." },

    { type: 'h3', text: 'How the Baseline Flaw Works' },
    { type: 'paragraph', text: "Consider this everyday example:" },
    { type: 'blockquote', text: '"After completing the speed-reading course, 80% of participants could read at least 300 words per minute. The course is clearly effective at improving reading speed."' },
    { type: 'paragraph', text: "This sounds impressive — until you ask: *\"What was their reading speed before the course?\"* If 85% of participants could already read 300+ words per minute before they enrolled, the course actually made things *worse*. The 80% figure is meaningless without a baseline for comparison." },

    { type: 'h3', text: 'Recognizing the Pattern' },
    { type: 'paragraph', text: "Baseline Flaw arguments have telltale features. When you see these signals, immediately ask: *\"What were things like before?\"*" },
    { type: 'breakdown', labels: { title: 'Signal', text: 'What to Watch For' }, items: [
      { title: 'Post-intervention data only', text: 'The argument presents results measured *after* some program, treatment, or event — but never mentions what things were like before. Words like "after completing," "graduates of," or "participants who" introduce the post-intervention snapshot.', badge: 'Very Common', badgeColor: 'blue' },
      { title: 'Success attributed to a program', text: 'The argument credits a program, school, treatment, or intervention for a positive outcome without establishing that the outcome represents a *change* from the starting point.', badge: 'Very Common', badgeColor: 'blue' },
      { title: 'No comparison group', text: 'There is no mention of a control group, an untreated group, or a before/after comparison. The positive outcome is presented as if it speaks for itself.', badge: 'Common', badgeColor: 'slate' },
      { title: 'Self-selected participants', text: 'The people in the program chose to be there (rather than being randomly assigned). Self-selected groups often have prior characteristics that explain the outcome independently of the program.', badge: 'Common', badgeColor: 'slate' },
    ]},

    { type: 'callout', variant: 'tip', title: 'The Baseline Prephrase', text: "When you spot a missing baseline, your prephrase almost writes itself: *\"The argument would be undermined if the participants were already [successful/qualified/healthy] before the program began.\"* This directly attacks the causal claim by showing the program added no value." },

    { type: 'hr' },

    { type: 'h3', text: 'How to Weaken a Baseline Flaw Argument' },
    { type: 'paragraph', text: "Since the core problem is the assumption that the program caused the success, you need to find an answer that breaks that causal chain:" },
    { type: 'breakdown', labels: { title: 'Strategy', text: 'How It Works' }, items: [
      { title: 'Attack the Baseline (Selection Bias)', text: 'Show that the participants were already successful or destined for success before the program began. If they already had the positive outcome, the program did not cause it. This is the most direct and common weakener for this pattern.', badge: 'Most Common', badgeColor: 'blue' },
      { title: 'Provide an Alternative Cause', text: 'Show that something else — not the program — was the real reason for the successful outcome. For example, a booming economy, not a job-training program, explains the high employment rate.', badge: 'Common', badgeColor: 'blue' },
      { title: 'Show the Comparison Group Did Better', text: 'Introduce data about a control or comparison group that achieved the same or better results without the program. If non-participants did equally well, the program added nothing.', badge: 'Less Common', badgeColor: 'slate' },
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
    { type: 'paragraph', text: "Let's engage with the stimulus sentence by sentence to see how the dean builds their case." },
    { 
      type: 'breakdown', 
      labels: { title: 'Quote', text: 'Analysis' }, 
      items: [
        { title: '"In defending the Hyperion School of Journalism from charges that its program is of little or no value to its students..."', text: 'This is the **context**. The dean is responding to criticism. The central issue is whether the school\'s program has "value" — meaning, does it improve students\' career outcomes?', badge: 'Context', badgeColor: 'slate' },
        { title: '"...the dean of the school pointed to its recent success in placing students: 65 percent of its graduates went on to internships or jobs in print or broadcast journalism."', text: 'This is both the **premise** and the **conclusion**. The premise is the 65% statistic. The implied conclusion is that the program is valuable *because* it produces this placement rate. The dean is asserting a causal link: the program → job placements.', badge: 'Premise + Conclusion', badgeColor: 'indigo' }
      ]
    },

    { type: 'callout', variant: 'default', title: 'The Gap in One Sentence', text: "The dean assumes the program *caused* the 65% job placement rate. But if students already had journalism jobs before enrolling, the program did not \"place\" them — they placed themselves." },

    { type: 'h3', text: "Step 2: Identify the Gap" },
    { type: 'paragraph', text: "**What Method of Reasoning is the argument using?**\nThe argument presents a positive outcome for a group of people (65% job placement) and concludes that the program they participated in was the cause of that outcome, and therefore valuable." },
    { type: 'paragraph', text: "**What's the Problem?**\nThe dean assumes a causal link between the program and the job placements without considering the students' situation *before* they enrolled. The argument completely ignores the students' baseline qualifications and career status. This is a textbook Baseline Flaw — the \"after\" picture is presented as proof of value, but there is no \"before\" picture to compare it against." },

    { type: 'h3', text: "Step 3: Prephrase the Weakener" },
    { type: 'paragraph', text: "Prephrase: *\"The argument would be undermined if the students were already working in journalism before they enrolled — meaning the program did not get them their jobs.\"*" },

    { type: 'h3', text: "Step 4: Match and Eliminate" },
    { type: 'paragraph', text: "You are looking for the answer that suggests the 65% job placement rate would have occurred even without the Hyperion program." },
    {
      type: 'breakdown',
      labels: { title: 'Option', text: 'Analysis' },
      items: [
        { title: "(A) More than half of the school's students came from jobs in journalism to improve their skills.", text: "This directly attacks the baseline assumption. If most students were *already* working journalists who enrolled to improve their skills, then the fact that they had jobs after graduating is not a sign of the school's \"placement success.\" The program didn't get them their jobs; they came in with them. The 65% figure is an illusion — it reflects the students' pre-existing career status, not the program's value-added. This is the textbook Baseline/Selection Bias weakener.", badge: 'Correct', badgeColor: 'green' },
        { title: "(B) Some newspaper editors do not regard journalism school as a necessary part of the training of a journalist.", text: "This is an **irrelevant opinion**. The views of \"some\" editors about journalism education in general do not undermine the dean's specific statistical evidence about the 65% placement rate. It's an external opinion, not a fact that changes the internal logic of the dean's argument.", badge: 'Irrelevant Opinion', badgeColor: 'red' },
        { title: "(C) The number of cities with more than one major newspaper has declined sharply over the last 25 years.", text: "This provides context about the journalism industry but doesn't clearly weaken the dean's argument. A shrinking job market could actually make the 65% placement rate seem *more* impressive, potentially strengthening the argument. At best, the impact is ambiguous.", badge: 'Ambiguous / Potential Strengthener', badgeColor: 'red' },
        { title: "(D) The program offered by the Hyperion School of Journalism is similar in quality and content to those offered by its peer institutions.", text: "This is an **irrelevant comparison**. Comparing Hyperion to other schools tells us nothing about whether Hyperion's program itself provides value to *its* students. It could be that all journalism schools are valuable, or that all are worthless. This comparison does not undermine the dean's specific evidence.", badge: 'Irrelevant Comparison', badgeColor: 'red' },
        { title: "(E) The proportion of applicants to the Hyperion School of Journalism that are admitted is lower than it was ten years ago.", text: "This is a **neutral detail**. It tells us the school is more selective now, but selectivity does not undermine the claim that the program is valuable. If anything, a more selective school might have *better* outcomes, which could strengthen the dean's position.", badge: 'Neutral / Potential Strengthener', badgeColor: 'red' }
      ]
    },

    { type: 'hr' },

    { type: 'h2', text: "Key Takeaways" },
    { type: 'paragraph', text: "This question is a masterclass in the **Baseline Flaw**. When an argument uses the success of participants to prove the value of a program, service, or treatment, your first instinct should be to question their starting point." },

    { type: 'h4', text: "The Baseline Flaw Checklist" },
    {
      type: 'list',
      ordered: true,
      items: [
        "**Always Ask \"Compared to What?\":** A 65% success rate sounds good in a vacuum, but its value is entirely dependent on the baseline. If 0% of students had jobs before, 65% is amazing. If 80% of students had jobs before, 65% is a disaster. The number alone is meaningless without a reference point.",
        "**Distinguish Outcome from Value-Added:** The LSAT frequently tests your ability to separate the final *outcome* from the *value added* by a process. The dean presents an outcome (jobs) as proof of value. The correct answer shows that the value added was likely zero because the outcome was already achieved before the program began.",
        "**Spot Self-Selection Weakeners:** This is a form of selection bias. The people who \"selected\" this program were not a blank slate; they were a pre-selected group of already-employed professionals. This makes them an unrepresentative sample for proving the program can get people jobs. Whenever participants chose to enter a program (rather than being randomly assigned), be suspicious of the baseline."
      ]
    },

    { type: 'callout', variant: 'summary', title: 'Connecting to the Big Picture', text: "The Baseline Flaw is a specific instance of the Gap Model. The gap is: *the program is assumed to have caused the positive outcome, but the participants may have had the positive outcome before the program started.* Whether you are asked to weaken (provide evidence that the baseline was already high), strengthen (provide evidence that the baseline was low), or evaluate (ask what the baseline was), the underlying logic is identical. Mastering this pattern pays dividends across all gap-based question types." },
  ]
};
