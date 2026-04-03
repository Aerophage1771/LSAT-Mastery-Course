import { Lesson } from '../../types';

export const Lesson5: Lesson = {
  id: '8-5',
  title: 'Lesson 2: Questioning the Data',
  content: [
    {
      "type": "h2",
      "text": "Lesson 2: Questioning the Data"
    },
    {
      "type": "h3",
      "text": "Concept Focus: Attacking the Evidence  Many LSAT arguments build a conclusion on a single piece of evidence, like the results of a study or survey. This creates a key vulnerability: if the evidence itself is unreliable, the entire argument collapses. One of the most effective ways to weaken such an argument is to attack the data itself. Instead of providing an alternative cause for the effect, this strategy shows that the correlation the author observed might not even be real, or is the result of a biased or flawed measurement."
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Author's Argument:** A study shows a correlation between A and B. Therefore, A causes B. *"
    },
    {
      "type": "paragraph",
      "text": "**Data-Attack Weakener:** The study was flawed. The way A and B were measured created a misleading correlation."
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Worked Example"
    },
    {
      "type": "blockquote",
      "text": "**Stimulus** > > In response to office workers’ worries about the health risks associated with using video display terminals (VDTs), researchers asked office workers to estimate both the amount of time they had spent using VDTs and how often they had suffered headaches over the previous year. According to the survey, frequent VDT users suffered from headaches more often than other office workers did, leading researchers to conclude that VDTs cause headaches. > > **Question** > > Which one of the following, if true, most undermines the researchers’ conclusion? > > *   (A) Few of the office workers surveyed participated in regular health programs during the year in question. > *   (B) In their study the researchers failed to ask the workers to distinguish between severe migraine headaches and mild headaches. > *   (C) Previous studies have shown that the glare from VDT screens causes some users to suffer eyestrain. > *   (D) Office workers who experienced frequent headaches were more likely than other workers to overestimate how much time they spent using VDTs. > *   (E) Office workers who regularly used VDTs experienced the same amount of job-related stress as workers who did not use VDTs."
    },
    {
      "type": "h4",
      "text": "Step 1: Deconstruct the Argument *"
    },
    {
      "type": "paragraph",
      "text": "**Premise:** A survey found a correlation between workers *estimating* they were \"frequent VDT users\" and also *reporting* they suffered from headaches often. *"
    },
    {
      "type": "paragraph",
      "text": "**Conclusion:** VDTs cause headaches. *"
    },
    {
      "type": "paragraph",
      "text": "**Simple Translation:** The argument moves from a reported correlation in a survey to a real-world causal conclusion."
    },
    {
      "type": "h4",
      "text": "Step 2: Identify the Logical Gap and Prephrase the Attack The argument has two major vulnerabilities. First, it's a classic correlation-causation flaw. Second, and more specifically, the evidence is based entirely on self-reported estimates. The data isn't about actual VDT usage, but about what people *remembered* or *thought* their usage was. This is a huge weak point. The correlation might not be between VDTs and headaches, but between headaches and the *perception* of high VDT use."
    },
    {
      "type": "paragraph",
      "text": "**Prephrase:** \"I need to show that the survey data is misleading. Maybe there's a reason people with headaches *think* they use VDTs a lot, even if they don't. This would show the correlation is an illusion.\""
    },
    {
      "type": "h4",
      "text": "Step 3 & 4: Evaluate Answer Choices & Eliminate Traps"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**(A) Few of the office workers surveyed participated in regular health programs during the year in question.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This factor likely applies to both groups (high and low VDT users) and doesn't explain the difference in headache rates between them. It's irrelevant.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Scope Shift)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(B) In their study the researchers failed to ask the workers to distinguish between severe migraine headaches and mild headaches.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** The conclusion is about \"headaches\" in general. The lack of detail about headache severity doesn't change the fact that one group reported more of them.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: Irrelevant Distinction)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(C) Previous studies have shown that the glare from VDT screens causes some users to suffer eyestrain.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This **strengthens** the argument by providing a plausible physical mechanism (eyestrain) through which VDTs could cause headaches.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Strengthener)\n*"
    },
    {
      "type": "paragraph",
      "text": "**(D) Office workers who experienced frequent headaches were more likely than other workers to overestimate how much time they spent using VDTs.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This is a perfect match for our prephrase. It attacks the data directly. It suggests a reversed causality of reporting: the headaches cause the *overestimation* of VDT use. This means the group of \"frequent VDT users\" in the survey was likely skewed with people who already had headaches. The correlation is an illusion created by biased self-reporting.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Correct.**\n*"
    },
    {
      "type": "paragraph",
      "text": "**(E) Office workers who regularly used VDTs experienced the same amount of job-related stress as workers who did not use VDTs.**"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Analysis:** This **strengthens** the argument. Stress is a plausible alternative cause for headaches. By stating that stress levels were the same for both groups, this answer choice eliminates a potential alternative cause, making it *more* likely that VDTs were the real cause.   \n*"
    },
    {
      "type": "paragraph",
      "text": "**Verdict: Incorrect.** (Trap: The Strengthener)"
    },
    {
      "type": "hr"
    },
    {
      "type": "h3",
      "text": "Key Takeaways"
    },
    {
      "type": "paragraph",
      "text": "*"
    },
    {
      "type": "paragraph",
      "text": "**Be Skeptical of Data:** When an argument relies on a study, survey, or statistic, always question the data's validity. Is the sample representative? Were the measurements accurate? *"
    },
    {
      "type": "paragraph",
      "text": "**Self-Reporting is a Weak Point:** Arguments based on what people \"report,\" \"claim,\" or \"estimate\" are especially vulnerable. The correct answer may show that these reports are biased or inaccurate. *"
    },
    {
      "type": "paragraph",
      "text": "**Look for Subtle Causal Reversals:** The cause might not be reversed in reality, but in perception. Here, the effect (headaches) caused the *reporting* of the cause (high VDT use), which is a sophisticated way to weaken the argument."
    }
  ],
};
