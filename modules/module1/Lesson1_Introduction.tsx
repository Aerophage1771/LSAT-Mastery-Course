import { Lesson } from '../../types';

export const Lesson1_Introduction: Lesson = {
  id: "1-1",
  title: "Introduction to Argument Parts",
  content: [
    { type: 'h2', text: 'MODULE 1: Argument Part' },
    { type: 'paragraph', text: '**Question Goal:** Define the specific logical function a particular sentence serves within the argument. Is the statement the main conclusion, a supporting premise, an intermediate step, or a concession to an opposing view?' },

    { type: 'hr' },

    { type: 'h3', text: 'Why This Matters' },
    { type: 'paragraph', text: "Argument Part is the single most important foundational skill in Logical Reasoning. Every other question type builds on your ability to identify the structural role of each sentence in an argument. If you cannot tell a premise from a conclusion, you will struggle with Flaw, Weaken, Strengthen, and Assumption questions." },
    { type: 'callout', variant: 'tip', title: 'Frequency', text: "Argument Part questions appear on virtually every scored Logical Reasoning section. Combined with Main Conclusion (Module 2), identification questions account for roughly **15% of all LR questions**. More importantly, the skill itself is a prerequisite for the other 85%." },

    { type: 'h3', text: 'What Makes This Question Type Unique' },
    { type: 'paragraph', text: "Unlike most LR questions, Argument Part questions are not asking you to evaluate whether the argument is good or bad. You are not looking for flaws, gaps, or assumptions. You are simply being asked to **describe what a specific sentence does** within the argument's logical structure." },
    { type: 'paragraph', text: "The question stem will always quote or reference a particular sentence from the stimulus, then ask you to identify its role. Your job is to read the entire argument, map its structure, and then determine the function of the highlighted sentence." },

    { type: 'h3', text: 'Recognizing the Question' },
    { type: 'paragraph', text: "You can identify an Argument Part question because the stem will cite a specific phrase or sentence and ask you to describe its role. Look for these patterns:" },
    { type: 'table', headers: ['Question Stem Pattern', 'Key Signal'], rows: [
      ['"The statement that [X] plays which one of the following roles in the argument?"', 'Asks for the **role** of a quoted claim'],
      ['"The claim that [X] figures in the argument in which one of the following ways?"', 'Asks how a claim **figures in** the argument'],
      ['"Which one of the following most accurately describes the relationship between..."', 'Asks about the **relationship** between two claims'],
      ['"The statement [X] serves which one of the following functions?"', 'Asks about the **function** of a statement'],
    ]},

    { type: 'hr' },

    { type: 'h2', text: 'The Anatomy of an Argument' },
    { type: 'paragraph', text: "An LSAT argument is a structured claim where some statements provide support for other statements. To master Argument Part questions, you need to see every argument as a machine with identifiable moving parts." },

    { type: 'paragraph', text: "Consider this everyday argument:" },
    { type: 'blockquote', text: '"We should go to the movies tonight. It\'s raining outside, and we can\'t do much else when it rains."' },

    { type: 'paragraph', text: "This simple argument has three parts working together:" },
    { type: 'breakdown', labels: { title: 'Sentence', text: 'Structural Role' }, items: [
      { title: '"We should go to the movies tonight."', text: 'This is the speaker\'s final recommendation. Everything else is designed to justify this claim. Nothing in the argument supports any other point beyond this one.', badge: 'Main Conclusion', badgeColor: 'indigo' },
      { title: '"It\'s raining outside."', text: 'This is a factual observation offered as evidence. The speaker presents it as an established fact to justify the conclusion. It supports the next claim.', badge: 'Premise', badgeColor: 'slate' },
      { title: '"We can\'t do much else when it rains."', text: 'This is a bridge. It is supported by the fact that it\'s raining (premise), and it in turn supports the recommendation to go to the movies (conclusion). It plays a dual role.', badge: 'Intermediate Conclusion', badgeColor: 'blue' },
    ]},

    { type: 'h3', text: 'The Flow of Support' },
    { type: 'paragraph', text: "Every argument has a direction: evidence flows toward conclusions. The key insight is that support always moves **upward** toward the main conclusion. Premises support intermediate conclusions, which support the main conclusion." },
    { type: 'process', title: 'Support Flow', steps: [
      '**Premise** (It\'s raining) supports...',
      '**Intermediate Conclusion** (We can\'t do much else) which supports...',
      '**Main Conclusion** (We should go to the movies)',
    ]},
    { type: 'callout', variant: 'default', title: 'The Why Test', text: "To identify the main conclusion, ask **\"Why?\"** of each statement. The statement whose \"Why?\" is answered by the other statements is the conclusion. Ask \"Why should we go to the movies?\" and the argument answers: \"Because it\'s raining and we can\'t do much else.\" Ask \"Why is it raining?\" and the argument provides no answer, confirming it\'s a premise." },

    { type: 'hr' },

    { type: 'h2', text: 'The Six Roles You Must Know' },
    { type: 'paragraph', text: "On the LSAT, every sentence in an argument plays one of the following roles. Memorize these. You will encounter all of them." },

    { type: 'h3', text: '1. Main Conclusion' },
    { type: 'paragraph', text: "The ultimate point the entire argument is trying to prove. Every other sentence in the stimulus exists to support this claim. It receives support but does not itself support any other claim." },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "Look for recommendations (*should, ought to*), predictions (*will, is likely to*), or judgments (*unreasonable, mistaken*). It is the \"Ultimate Therefore\" of the argument." },

    { type: 'h3', text: '2. Premise' },
    { type: 'paragraph', text: "A fact, finding, or reason offered in support of a conclusion. Premises are the building blocks of every argument. Their truth is taken for granted; the argument assumes they are true and uses them as foundation." },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "Premises often follow indicator words: *because, since, for, after all, given that, as evidenced by*. They present facts, study results, or generally accepted truths." },

    { type: 'h3', text: '3. Intermediate (Subsidiary) Conclusion' },
    { type: 'paragraph', text: "A statement that acts as both a conclusion and a premise. It is supported by evidence (making it a conclusion), and it then serves as evidence for the main conclusion (making it a premise). This dual role is what makes it \"intermediate.\"" },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "Find a statement that has a \"because\" clause supporting it, but is then used to support a further claim. It sits in the middle of the support chain." },

    { type: 'h3', text: '4. Opposing Viewpoint' },
    { type: 'paragraph', text: "A claim made by someone other than the author that the author intends to challenge, refute, or cast doubt upon. Many LSAT arguments are structured as rebuttals where the author first presents someone else's position, then argues against it." },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "Introduced by: *Some people argue that..., It has been claimed that..., Many believe that..., Critics contend that...*. The author will then pivot with *But, However, Yet, Nevertheless*." },

    { type: 'h3', text: '5. Concession' },
    { type: 'paragraph', text: "A point the author admits is true, even though it seems to favor the opposing side. The author grants this point to appear reasonable, then explains why it doesn't change their conclusion." },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "Flagged by: *Although..., While it is true that..., Granted..., Despite..., Admittedly...*. The author acknowledges the point, then pivots to their main argument." },

    { type: 'h3', text: '6. Background / Context' },
    { type: 'paragraph', text: "Not every sentence is a logical building block. Some statements simply set the stage by providing undisputed facts, introducing a topic, or describing a phenomenon that the argument will then analyze. Background statements neither support nor are supported by other claims." },
    { type: 'callout', variant: 'tip', title: 'Spotting It', text: "These often appear at the very beginning of the stimulus and present general facts without argumentative force: *\"Landfills are generally designed to hold ten years' worth of waste...\"*" },

    { type: 'hr' },

    { type: 'h2', text: 'Indicator Words Reference' },
    { type: 'paragraph', text: "Indicator words are your most reliable tool for identifying argument structure. These words signal whether a statement is a conclusion or a premise." },

    { type: 'table', headers: ['Conclusion Indicators', 'Premise Indicators', 'Contrast/Pivot Indicators'], rows: [
      ['Therefore', 'Because', 'But'],
      ['Thus', 'Since', 'However'],
      ['So', 'For', 'Yet'],
      ['Hence', 'After all', 'Although'],
      ['Consequently', 'Given that', 'While'],
      ['It follows that', 'As evidenced by', 'Nevertheless'],
      ['This shows that', 'Due to the fact that', 'Despite'],
      ['We can conclude that', 'On the grounds that', 'On the other hand'],
    ]},

    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: "Argument Part is a **descriptive** question type. You are not evaluating whether the argument is good or bad. You are mapping its structure and labeling the function of a specific sentence. Master the six roles, learn the indicator words, and practice the Why Test. These three tools will carry you through every Argument Part question you encounter." },
  ]
};
