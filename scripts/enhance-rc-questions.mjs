#!/usr/bin/env node

/**
 * Enhance RC question lessons with:
 * 1. An approach/prediction callout before the answer breakdown
 * 2. Trap type labels on incorrect answer badges
 * 3. A key takeaway callout at the end
 *
 * Run:  node scripts/enhance-rc-questions.mjs --dry-run
 *   or: node scripts/enhance-rc-questions.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const MODULES_DIR = join(ROOT, 'modules');
const isDryRun = process.argv.includes('--dry-run');

const PASSAGE_MODULE_DIRS = [
  'module39', 'module40', 'module41', 'module42',
  'module43', 'module44', 'module45', 'module46',
  'module50', 'module51', 'module52',
  'module54', 'module56', 'module57', 'module58',
];

// Map common RC question types to approach tips and trap patterns
const QUESTION_TYPE_TIPS = {
  'Main Idea': {
    approach: 'Synthesize each paragraph into one sentence, then chain them into the author\'s overall argument. The correct answer must cover ALL major components — reject anything that captures only part of the thesis.',
    trapTypes: { narrow: 'Too Narrow', hierarchy: 'False Hierarchy', extreme: 'Too Extreme', scope: 'Wrong Scope' },
    takeaway: 'Main Idea answers must be complete. If an answer accurately describes one piece of the argument but ignores another, it is a trap — not the main idea.',
  },
  'Main Point': {
    approach: 'Synthesize each paragraph into one sentence, then chain them into the author\'s overall argument. The correct answer must cover ALL major components.',
    trapTypes: { narrow: 'Too Narrow', hierarchy: 'False Hierarchy', extreme: 'Too Extreme', scope: 'Wrong Scope' },
    takeaway: 'The main point answer must be comprehensive. Partial truths are the most dangerous traps.',
  },
  'Inference': {
    approach: 'Run two stem checks: whose perspective does the question target, and what exact issue? Then treat each answer as a claim to verify — find direct textual proof before selecting.',
    trapTypes: { extreme: 'Too Extreme', scope: 'Out of Scope', misattribute: 'Misattribution', unsupported: 'Unsupported Leap' },
    takeaway: 'The correct inference requires the smallest logical leap from the text. If you cannot point to a specific line as evidence, the answer is not supported.',
  },
  'Author Attitude': {
    approach: 'Locate the specific sentences where the author discusses the subject. Hunt for charged language — revealing adjectives and adverbs. Then characterize both the direction (positive/negative/neutral) and intensity (strong/moderate).',
    trapTypes: { extreme: 'Too Extreme', opposite: 'Wrong Direction', misattribute: 'Misattribution', neutral: 'False Neutrality' },
    takeaway: 'Author Attitude answers must match both direction AND intensity. "Critical" is not the same as "dismissive" — precision in tone matters.',
  },
  'Author Viewpoint': {
    approach: 'Consolidate the author\'s main point, evidence, and tone into a summary of their perspective. For each answer choice, verify the supporting evidence reflects the author\'s own view — not one they are merely describing.',
    trapTypes: { misattribute: 'Misattribution', extreme: 'Too Extreme', scope: 'Out of Scope', partial: 'Partial Match' },
    takeaway: 'The most common trap is attributing a third party\'s view to the author. Always verify WHO holds the view the answer describes.',
  },
  'Third-Party Viewpoint': {
    approach: 'Locate the specific person or group named in the stem. Isolate the exact sentences where views are attributed to them. Report only what the text says they believe — not what the author believes about them.',
    trapTypes: { misattribute: 'Misattribution', merge: 'View Merge', extreme: 'Too Extreme', inference: 'Unsupported Inference' },
    takeaway: 'Keep strict attribution boundaries. The author\'s view and the third party\'s view are separate — never let them blur.',
  },
  'Passage Principle': {
    approach: 'Find the specific judgment or conclusion in the passage. Ask: what general rule would make this specific judgment logical? The correct answer expresses the abstract principle, not the concrete facts.',
    trapTypes: { specific: 'Too Specific', broad: 'Too Broad', irrelevant: 'Wrong Domain', partial: 'Partial Match' },
    takeaway: 'Principle answers must be abstract enough to generalize but specific enough to actually justify the passage\'s argument.',
  },
  'Phrase Meaning': {
    approach: 'Read the full sentence containing the phrase plus the sentences before and after. Look for contrasts, restatements, and examples. Predict the role the word plays, then test by mental substitution.',
    trapTypes: { dictionary: 'Dictionary Trap', partial: 'Partial Meaning', opposite: 'Wrong Connotation', scope: 'Wrong Context' },
    takeaway: 'Never pick the common dictionary definition when the author is using the word in a specialized, metaphorical, or ironic way.',
  },
  'Phrase Function': {
    approach: 'Identify the local argument around the phrase. Ask: what point is being made HERE, and what job does this phrase do for that point? Is it evidence, example, concession, or clarification?',
    trapTypes: { content: 'Content Dump', wrong_job: 'Wrong Function', scope: 'Wrong Scope', partial: 'Partial Role' },
    takeaway: 'Function questions ask WHY the author included something — not WHAT it says. An answer that restates content without identifying its logical job is always wrong.',
  },
  'Paragraph Function': {
    approach: 'Determine the paragraph\'s position (intro, middle, conclusion) and ask what it accomplishes relative to the paragraphs around it. First paragraphs introduce; middle paragraphs develop; final paragraphs conclude.',
    trapTypes: { detail: 'Focus on Detail', wrong_job: 'Wrong Function', scope: 'Wrong Paragraph', content: 'Content Dump' },
    takeaway: 'Paragraph Function asks about the paragraph\'s overall job — not about any single detail inside it.',
  },
  'Passage Function': {
    approach: 'Identify the author\'s thesis first. Then ask HOW the author supports it — what is their primary rhetorical move? Select the abstract verb (defending, explaining, critiquing) that best captures their method.',
    trapTypes: { wrong_verb: 'Wrong Verb', partial: 'Partial Scope', extreme: 'Too Extreme', content: 'Content Dump' },
    takeaway: 'The correct verb must match the author\'s actual method. "Evaluate" is not "defend" — precision in the action word is everything.',
  },
  'Analogy': {
    approach: 'Isolate the relationship in the passage and abstract it to a topic-neutral rule. Then test each answer choice\'s underlying logic against that abstract rule — ignore surface topic similarities.',
    trapTypes: { topic: 'Topic Match Trap', structure: 'Wrong Structure', partial: 'Partial Match', scope: 'Wrong Scope' },
    takeaway: 'Analogy answers that share the same TOPIC as the passage but have different logical structure are the most dangerous traps.',
  },
  'Application': {
    approach: 'Locate the specific rule or principle in the passage. Break it into a checklist of necessary conditions. Test each answer choice against every condition — the correct answer must satisfy all of them.',
    trapTypes: { partial: 'Missed Condition', scope: 'Wrong Domain', extreme: 'Over-Application', surface: 'Surface Match' },
    takeaway: 'Application answers that fit two out of three criteria but miss the third are designed to trap students who read quickly.',
  },
  'Relationship': {
    approach: 'Identify the two elements the question asks about. Map their logical connection: does one support, oppose, qualify, or exemplify the other? Match this relationship type to the answer choices.',
    trapTypes: { reverse: 'Reversed Relationship', partial: 'Partial Connection', scope: 'Wrong Elements', extreme: 'Too Strong' },
    takeaway: 'Pay attention to the direction of the relationship. "A supports B" is not the same as "B supports A."',
  },
  'Structure': {
    approach: 'Write a one-line summary of each paragraph\'s job. Chain them into a sequential blueprint. The correct answer describes this exact sequence of logical moves.',
    trapTypes: { order: 'Wrong Sequence', missing: 'Missing Step', extra: 'Added Step', partial: 'Partial Blueprint' },
    takeaway: 'Structure answers must match the passage\'s flow exactly. Getting even one step wrong disqualifies the answer.',
  },
  'Title': {
    approach: 'The correct title must capture both the main subject AND the scope of the passage. It should be specific enough to distinguish this passage from others on similar topics.',
    trapTypes: { narrow: 'Too Narrow', broad: 'Too Broad', misleading: 'Misleading Focus', partial: 'Partial Coverage' },
    takeaway: 'The best title captures the passage\'s scope — neither too broad to be meaningless nor too narrow to miss major sections.',
  },
  'Weaken-Strengthen': {
    approach: 'Isolate the targeted argument\'s evidence and conclusion. Find the gap (unstated assumption). For Weaken: find what attacks the assumption. For Strengthen: find what confirms it.',
    trapTypes: { irrelevant: 'Irrelevant Impact', opposite: 'Wrong Direction', side: 'Side Point', extreme: 'Too Extreme' },
    takeaway: 'The correct answer must impact the specific argument in question — not a side point or a different claim in the passage.',
  },
  'Complete the Passage': {
    approach: 'Read the passage up to the blank. Identify the logical trajectory — what point is the author building toward? The correct completion must follow from the preceding logic, not introduce new ideas.',
    trapTypes: { tangent: 'Tangent', opposite: 'Wrong Direction', extreme: 'Too Strong', scope: 'Out of Scope' },
    takeaway: 'The completion must be a logical consequence of what came before — it should feel inevitable, not surprising.',
  },
  'Approach': {
    approach: 'Identify the author\'s argumentative strategy. Ask: are they comparing, critiquing, proposing, defending, or analyzing? The correct answer describes the METHOD, not the content.',
    trapTypes: { content: 'Content Dump', wrong_method: 'Wrong Method', partial: 'Partial Description', scope: 'Wrong Scope' },
    takeaway: 'Approach questions ask about HOW the author argues — not WHAT they argue. Stay at the method level.',
  },
};

// Default for unrecognized types
const DEFAULT_TIP = {
  approach: 'Read the question stem carefully and identify exactly what is being asked. Return to the passage for direct evidence before evaluating answer choices.',
  trapTypes: { extreme: 'Too Extreme', scope: 'Out of Scope', partial: 'Partial Match', misread: 'Misreading' },
  takeaway: 'Always verify your answer against the passage text. The correct answer must have direct textual support.',
};

let updated = 0;
let skipped = 0;

for (const moduleDir of PASSAGE_MODULE_DIRS) {
  const dirPath = join(MODULES_DIR, moduleDir);
  const files = readdirSync(dirPath).filter((f) => f.endsWith('.tsx') && f.includes('Question')).sort();

  for (const file of files) {
    const filePath = join(dirPath, file);
    let content = readFileSync(filePath, 'utf-8');

    // Skip if already enhanced
    if (content.includes("variant: 'tip'") || content.includes("variant: 'summary'")) {
      skipped++;
      continue;
    }

    // Extract question type from title
    const titleMatch = content.match(/title:\s*["']Question\s+\d+:\s*([^"']+)["']/);
    const questionType = titleMatch?.[1]?.trim() || '';
    const tips = QUESTION_TYPE_TIPS[questionType] || DEFAULT_TIP;

    // 1. Add approach callout after the h3 "Question Breakdown" or "Question X Breakdown"
    const breakdownHeader = content.match(/\{\s*type:\s*'h3',\s*text:\s*["'][^"']*Breakdown[^"']*["']\s*\}/);
    if (breakdownHeader) {
      const approachBlock = `${breakdownHeader[0]}
    { type: 'callout', variant: 'tip', title: 'Approach: ${questionType.replace(/'/g, "\\'")}', text: '${tips.approach.replace(/'/g, "\\'")}' },`;
      content = content.replace(breakdownHeader[0], approachBlock);
    }

    // 2. Relabel incorrect answer badges with trap types
    // The badges currently just say "Incorrect" — replace with specific trap type names
    const incorrectBadges = [...content.matchAll(/badge:\s*["']Incorrect["']/g)];
    if (incorrectBadges.length > 0) {
      const trapNames = Object.values(tips.trapTypes);
      let trapIndex = 0;
      content = content.replace(/badge:\s*["']Incorrect["']/g, () => {
        const trap = trapNames[trapIndex % trapNames.length];
        trapIndex++;
        return `badge: '${trap}'`;
      });
    }

    // 3. Add takeaway callout before the closing ]
    // Find the last content block before the closing array
    const lastClosingBracket = content.lastIndexOf('    ]');
    if (lastClosingBracket > 0) {
      const takeawayBlock = `    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: '${tips.takeaway.replace(/'/g, "\\'")}' },\n`;
      content = content.slice(0, lastClosingBracket) + takeawayBlock + content.slice(lastClosingBracket);
    }

    updated++;
    if (!isDryRun) {
      writeFileSync(filePath, content);
    }
    console.log(`  ${isDryRun ? 'WOULD' : 'UPDATED'}: ${moduleDir}/${file} (${questionType || 'unknown type'})`);
  }
}

console.log(`\nRC Question Enhancement ${isDryRun ? '(DRY RUN)' : 'Complete'}`);
console.log(`──────────────────────────`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped: ${skipped} (already enhanced)`);
