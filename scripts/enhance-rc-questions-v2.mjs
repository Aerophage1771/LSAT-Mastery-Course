#!/usr/bin/env node

/**
 * Enhance RC question lessons by inserting new content blocks
 * at precise line positions — no regex replacement on content.
 *
 * Strategy: find exact line numbers for insertion points, then
 * splice new lines into the file. Never modify existing lines.
 *
 * Run:  node scripts/enhance-rc-questions-v2.mjs --dry-run
 *   or: node scripts/enhance-rc-questions-v2.mjs
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

const TIPS = {
  'Main Idea': { approach: 'Synthesize each paragraph into one sentence, then chain them into the overall argument. The correct answer must cover ALL major components.', takeaway: 'Main Idea answers must be complete. If an answer captures only part of the thesis, it is a trap.' },
  'Main Point': { approach: 'Synthesize each paragraph, then identify the single overarching claim. Reject anything that covers only part of the argument.', takeaway: 'The main point must be comprehensive. Partial truths are the most dangerous traps.' },
  'Inference': { approach: 'Run two stem checks: whose perspective and what exact issue? Treat each answer as a claim to verify — find direct textual proof.', takeaway: 'The correct inference requires the smallest logical leap. If you cannot point to a specific line as evidence, the answer is unsupported.' },
  'Author Attitude': { approach: 'Locate where the author discusses the subject. Hunt for charged language — adjectives and adverbs. Characterize both direction and intensity.', takeaway: 'Author Attitude answers must match both direction AND intensity. Precision in tone matters.' },
  'Author Viewpoint': { approach: 'Consolidate the author\\u0027s main point, evidence, and tone. Verify the supporting evidence reflects the author\\u0027s own view, not one they merely describe.', takeaway: 'The most common trap is attributing a third party\\u0027s view to the author. Always verify WHO holds the view.' },
  'Third-Party Viewpoint': { approach: 'Locate the named person or group. Isolate the exact sentences where views are attributed to them. Report only what the text says they believe.', takeaway: 'Keep strict attribution boundaries. The author\\u0027s view and the third party\\u0027s view are separate.' },
  'Passage Principle': { approach: 'Find the specific judgment in the passage. Ask: what general rule would make this judgment logical? The correct answer expresses the abstract principle.', takeaway: 'Principle answers must be abstract enough to generalize but specific enough to justify the passage\\u0027s argument.' },
  'Phrase Meaning': { approach: 'Read the full sentence plus sentences before and after. Look for contrasts, restatements, and examples. Test by mental substitution.', takeaway: 'Never pick the common dictionary definition when the author uses the word in a specialized or ironic way.' },
  'Phrase Function': { approach: 'Identify the local argument. Ask: what job does this phrase do for that point? Is it evidence, example, concession, or clarification?', takeaway: 'Function questions ask WHY the author included something — not WHAT it says.' },
  'Paragraph Function': { approach: 'Determine the paragraph\\u0027s position and ask what it accomplishes relative to surrounding paragraphs.', takeaway: 'Paragraph Function asks about the paragraph\\u0027s overall job — not about any single detail inside it.' },
  'Passage Function': { approach: 'Identify the thesis, then ask HOW the author supports it. Select the abstract verb that best captures their method.', takeaway: 'The correct verb must match the author\\u0027s actual method. Precision in the action word is everything.' },
  'Analogy': { approach: 'Abstract the passage relationship to a topic-neutral rule. Test each answer\\u0027s underlying logic against that rule — ignore surface similarities.', takeaway: 'Answers sharing the same TOPIC but different logical structure are the most dangerous traps.' },
  'Application': { approach: 'Locate the specific rule. Break it into a checklist of conditions. The correct answer must satisfy every condition.', takeaway: 'Answers that fit two of three criteria but miss one are designed to trap fast readers.' },
  'Relationship': { approach: 'Identify the two elements and map their logical connection: support, oppose, qualify, or exemplify.', takeaway: 'Pay attention to direction. A supports B is not the same as B supports A.' },
  'Structure': { approach: 'Write a one-line summary of each paragraph\\u0027s job. Chain them sequentially. The correct answer describes this exact flow.', takeaway: 'Structure answers must match the passage\\u0027s flow exactly. One wrong step disqualifies the answer.' },
  'Title': { approach: 'The correct title must capture both the main subject AND scope. Specific enough to distinguish this passage from similar ones.', takeaway: 'The best title is neither too broad to be meaningless nor too narrow to miss major sections.' },
  'Weaken-Strengthen': { approach: 'Isolate the argument\\u0027s evidence, conclusion, and gap. For Weaken: attack the assumption. For Strengthen: confirm it.', takeaway: 'The correct answer must impact the specific argument — not a side point or different claim.' },
  'Complete the Passage': { approach: 'Read up to the blank. Identify the logical trajectory. The correct completion must follow from preceding logic.', takeaway: 'The completion should feel inevitable — a logical consequence of what came before.' },
  'Approach': { approach: 'Identify the author\\u0027s argumentative strategy: comparing, critiquing, proposing, defending, or analyzing.', takeaway: 'Approach questions ask HOW the author argues — not WHAT they argue.' },
};

const DEFAULT_TIP = {
  approach: 'Read the question stem carefully. Return to the passage for direct evidence before evaluating answer choices.',
  takeaway: 'Always verify your answer against the passage text. The correct answer must have direct textual support.',
};

let updated = 0;
let skipped = 0;

for (const moduleDir of PASSAGE_MODULE_DIRS) {
  const dirPath = join(MODULES_DIR, moduleDir);
  const files = readdirSync(dirPath).filter((f) => f.endsWith('.tsx') && f.includes('Question')).sort();

  for (const file of files) {
    const filePath = join(dirPath, file);
    const content = readFileSync(filePath, 'utf-8');

    // Skip if already enhanced
    if (content.includes('Key Takeaway')) {
      skipped++;
      continue;
    }

    // Extract question type from title
    const titleMatch = content.match(/title:\s*["']Question\s+\d+:\s*([^"']+)["']/);
    const questionType = titleMatch?.[1]?.trim() || '';
    const tips = TIPS[questionType] || DEFAULT_TIP;

    const lines = content.split('\n');
    const newLines = [];

    // Find insertion points by scanning lines
    let insertedApproach = false;
    let lastContentLine = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Track the last line before the content array closes
      // (the line with just `  ]` that closes the content array)
      if (line.match(/^\s{2}\]/) && i > 10) {
        lastContentLine = newLines.length;
      }

      // Insert approach callout AFTER the "Question Breakdown" h3 line
      if (!insertedApproach && line.includes('Breakdown') && line.includes("type: 'h3'")) {
        // Ensure the h3 line has a trailing comma
        const trimmed = line.trimEnd();
        if (trimmed.endsWith('},')) {
          newLines.push(line);
        } else if (trimmed.endsWith('}')) {
          newLines.push(trimmed + ',');
        } else {
          newLines.push(line);
        }
        // Insert approach callout on next line
        const escaped = tips.approach.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
        newLines.push(`    { type: 'callout', variant: 'tip', title: 'Approach: ${questionType.replace(/'/g, "\\'")}', text: '${escaped}' },`);
        insertedApproach = true;
        continue;
      }

      newLines.push(line);
    }

    // Insert takeaway callout before the content array closing ]
    if (lastContentLine > 0) {
      const escaped = tips.takeaway.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
      const takeawayLine = `    { type: 'callout', variant: 'summary', title: 'Key Takeaway', text: '${escaped}' },`;
      newLines.splice(lastContentLine, 0, takeawayLine);
    }

    // Final pass: ensure every } followed by { type: on the next line has a comma
    // Only within the content array (lines indented with 4+ spaces)
    for (let i = 0; i < newLines.length - 1; i++) {
      const cur = newLines[i].trimEnd();
      const next = newLines[i + 1].trimStart();
      if (cur.endsWith('}') && !cur.endsWith('},') && next.startsWith("{ type:") && newLines[i].match(/^\s{4}/)) {
        newLines[i] = newLines[i].trimEnd() + ',';
      }
    }

    const result = newLines.join('\n');

    updated++;
    if (!isDryRun) {
      writeFileSync(filePath, result);
    }
    console.log(`  ${isDryRun ? 'WOULD' : 'UPDATED'}: ${moduleDir}/${file} (${questionType || 'unknown'})`);
  }
}

console.log(`\nRC Enhancement ${isDryRun ? '(DRY RUN)' : 'Complete'}`);
console.log(`  Updated: ${updated}`);
console.log(`  Skipped: ${skipped}`);
