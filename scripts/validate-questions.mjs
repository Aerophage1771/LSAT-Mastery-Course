#!/usr/bin/env node

/**
 * Question Bank Validation Script
 * 
 * Checks all question repository files for:
 * - PT ID in every accordion title
 * - Exactly 5 answer choices per question
 * - At least one (Correct) marker per question
 * - No stale percentage stats
 * - No duplicate PT IDs
 * - No typos in common patterns
 * 
 * Run: node scripts/validate-questions.mjs
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const REPO_DIR = join(import.meta.dirname, '..', 'modules', 'module48');
const PT_REGEX = /PT-\d+-S-\d+-Q-\d+/g;
const CORRECT_REGEX = /\(Correct\)/;
const PERCENT_REGEX = /\[\d+(\.\d+)?%\]/;
const MISSING_ID_REGEX = /\[Missing ID\]/;
const TYPO_PATTERNS = [
  { pattern: /one of ahe following/i, fix: 'one of the following' },
  { pattern: /one of a following/i, fix: 'one of the following' },
];

let totalQuestions = 0;
let totalIssues = 0;
const allPtIds = new Map();

const files = readdirSync(REPO_DIR).filter(f => f.endsWith('.tsx')).sort();

console.log('Question Bank Validation Report');
console.log('='.repeat(60));
console.log('');

for (const file of files) {
  const filepath = join(REPO_DIR, file);
  const content = readFileSync(filepath, 'utf-8');
  const issues = [];

  // Count accordions
  const accordions = (content.match(/type:\s*'accordion'/g) || []).length;
  totalQuestions += accordions;

  // Check PT IDs
  const ptIds = [...new Set(content.match(PT_REGEX) || [])];

  // Check for Missing ID
  if (MISSING_ID_REGEX.test(content)) {
    issues.push('Has [Missing ID] in accordion title');
  }

  // Check PT ID count vs accordion count
  if (ptIds.length !== accordions) {
    issues.push(`PT ID count (${ptIds.length}) != accordion count (${accordions})`);
  }

  // Check for duplicates across files
  for (const id of ptIds) {
    if (allPtIds.has(id)) {
      issues.push(`Duplicate PT ID ${id} (also in ${allPtIds.get(id)})`);
    }
    allPtIds.set(id, file);
  }

  // Check (Correct) markers - count how many accordions have one
  const accordionBlocks = content.split(/type:\s*'accordion'/).slice(1);
  let correctCount = 0;
  let optionCountIssues = 0;
  let stalePercentCount = 0;

  for (const block of accordionBlocks) {
    const optionsMatch = block.match(/items:\s*\[([\s\S]*?)\]/);
    if (optionsMatch) {
      const optionsStr = optionsMatch[1];
      const options = optionsStr.split(/'\s*,\s*'/).filter(o => o.trim().length > 5);

      if (options.length !== 5) {
        optionCountIssues++;
      }

      if (CORRECT_REGEX.test(optionsStr)) {
        correctCount++;
      }

      if (PERCENT_REGEX.test(optionsStr)) {
        stalePercentCount++;
      }
    }
  }

  if (correctCount < accordions) {
    issues.push(`Only ${correctCount}/${accordions} questions have (Correct) marker`);
  }

  if (stalePercentCount > 0) {
    issues.push(`${stalePercentCount} questions still have percentage stats (should be removed)`);
  }

  if (optionCountIssues > 0) {
    issues.push(`${optionCountIssues} questions don't have exactly 5 options`);
  }

  // Check typos
  for (const { pattern, fix } of TYPO_PATTERNS) {
    if (pattern.test(content)) {
      issues.push(`Typo found: should be "${fix}"`);
    }
  }

  // Report
  const status = issues.length === 0 ? 'PASS' : 'FAIL';
  const icon = status === 'PASS' ? '✅' : '❌';
  console.log(`${icon} ${file} (${accordions} questions)`);
  if (issues.length > 0) {
    totalIssues += issues.length;
    for (const issue of issues) {
      console.log(`   ⚠️  ${issue}`);
    }
  }
}

console.log('');
console.log('='.repeat(60));
console.log(`Total: ${totalQuestions} questions across ${files.length} files`);
console.log(`Unique PT IDs: ${allPtIds.size}`);
console.log(`Issues found: ${totalIssues}`);
console.log(totalIssues === 0 ? '✅ All checks passed!' : `❌ ${totalIssues} issues need attention`);
