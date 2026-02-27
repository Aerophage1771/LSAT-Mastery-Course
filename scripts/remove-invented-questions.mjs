#!/usr/bin/env node

/**
 * Remove invented question-card blocks from Lessons 4+ in LR modules.
 * Preserves all other content (text, tables, callouts, etc.)
 * Only removes the { type: 'question-card', ... } objects.
 * 
 * Run: node scripts/remove-invented-questions.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const inventory = JSON.parse(readFileSync(join(import.meta.dirname, '..', 'docs', 'invented-questions-inventory.json'), 'utf-8'));

// Filter to Lessons 4+ only (LR modules)
const toRemove = inventory.filter(q => {
  const lessonMatch = q.file.match(/Lesson(\d+)/);
  if (!lessonMatch) return false;
  const lessonNum = Number(lessonMatch[1]);
  return lessonNum >= 4;
});

console.log(`Found ${toRemove.length} invented question-cards to remove from Lessons 4+`);

// Group by file
const byFile = {};
toRemove.forEach(q => {
  const filepath = join(import.meta.dirname, '..', 'modules', q.file);
  if (!byFile[filepath]) byFile[filepath] = [];
  byFile[filepath].push(q);
});

let totalRemoved = 0;
let filesModified = 0;

for (const [filepath, questions] of Object.entries(byFile)) {
  let content = readFileSync(filepath, 'utf-8');
  let modified = false;

  for (const q of questions) {
    // Find and remove question-card blocks
    // Pattern: { type: 'question-card', ... }, or the whole object
    // We need to find the start of the question-card object and its closing }
    
    const cardId = q.cardId;
    
    // Strategy: find the line with the card ID or 'question-card' near the reported line
    // Then remove from the opening { to the closing }, including trailing comma
    
    const lines = content.split('\n');
    let startLine = -1;
    let endLine = -1;
    let braceDepth = 0;
    let inCard = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Find the start of a question-card block
      if (line.includes("type: 'question-card'") && !inCard) {
        // Check if this card has the ID we're looking for, or is near the expected line
        const nearbyLines = lines.slice(i, Math.min(i + 8, lines.length)).join('\n');
        if (nearbyLines.includes(cardId) || nearbyLines.includes('illustrative')) {
          // Find the opening brace
          for (let j = i; j >= Math.max(0, i - 3); j--) {
            if (lines[j].trim().startsWith('{') || lines[j].includes('{ type:') || lines[j].includes('{')) {
              // Check if this line has the opening brace for this object
              if (lines[j].includes('{')) {
                startLine = j;
                braceDepth = 0;
                inCard = true;
                // Count braces from startLine
                for (let k = startLine; k <= i; k++) {
                  for (const ch of lines[k]) {
                    if (ch === '{') braceDepth++;
                    if (ch === '}') braceDepth--;
                  }
                }
                break;
              }
            }
          }
          if (startLine === -1) {
            startLine = i;
            inCard = true;
            braceDepth = 0;
            for (const ch of line) {
              if (ch === '{') braceDepth++;
              if (ch === '}') braceDepth--;
            }
          }
        }
      } else if (inCard) {
        for (const ch of line) {
          if (ch === '{') braceDepth++;
          if (ch === '}') braceDepth--;
        }
        if (braceDepth <= 0) {
          endLine = i;
          inCard = false;
          break;
        }
      }
    }
    
    if (startLine >= 0 && endLine >= 0) {
      // Remove the lines, plus any trailing comma on the next line
      // Also check for a preceding comma
      const removedLines = lines.splice(startLine, endLine - startLine + 1);
      
      // Clean up: if the line after removal starts with a comma, or the previous line ends with comma before another comma
      if (startLine < lines.length && lines[startLine].trim() === ',') {
        lines.splice(startLine, 1);
      }
      
      content = lines.join('\n');
      totalRemoved++;
      modified = true;
    }
  }
  
  if (modified) {
    writeFileSync(filepath, content);
    filesModified++;
    console.log(`  Modified: ${questions[0].file} (removed ${questions.length} card(s))`);
  }
}

console.log(`\nDone: Removed ${totalRemoved} question-cards from ${filesModified} files`);
console.log(`Remaining: ${toRemove.length - totalRemoved} could not be automatically removed (check manually)`);
