#!/usr/bin/env node
/**
 * split-blog-reddit.mjs
 *
 * Adds `redditContent` to blog posts that don't already have it.
 * For posts with no in-content CTAs (most of the catalog), the Reddit
 * version is the same as the blog content with:
 *   - Any germainetutoring.com links stripped
 *   - Any paragraphs mentioning "tutor", "consultation", "book a session" removed
 *   - A blog-link footer appended
 *
 * Idempotent: skips files that already have `redditContent`.
 *
 * Usage: node scripts/split-blog-reddit.mjs [--dry-run]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.resolve(__dirname, '../../GermaineTutoringcom - Website/client/src/data/posts');
const DRY_RUN = process.argv.includes('--dry-run');

// Words/phrases that indicate business intent (case-insensitive match on full paragraph)
const BUSINESS_PATTERNS = [
  /\btutoring\b/i,
  /\bconsultation\b/i,
  /\bbook a session\b/i,
  /\bbook a free\b/i,
  /\bfree diagnostic\b/i,
  /germainetutoring\.com\/#booking/i,
];

// Match <a> tags linking to germainetutoring.com (remove the link but keep the text)
const GT_LINK_RE = /<a\s+href="https?:\/\/germainetutoring\.com[^"]*"[^>]*>(.*?)<\/a>/gi;

function stripBusinessContent(html) {
  // Split into paragraphs/blocks by line
  const lines = html.split('\n');
  const cleaned = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip empty lines (will re-add spacing)
    if (!trimmed) {
      cleaned.push(line);
      continue;
    }

    // Check if this line is a paragraph with business intent
    const isBusinessParagraph = BUSINESS_PATTERNS.some((re) => re.test(trimmed));

    if (isBusinessParagraph) {
      // Check if it's a standalone business paragraph (entire <p> is about tutoring)
      // vs. a paragraph that has a business sentence mixed with instructional content
      if (trimmed.startsWith('<p>') && trimmed.endsWith('</p>')) {
        // Count sentences roughly
        const sentences = trimmed.replace(/<[^>]*>/g, '').split(/[.!?]+/).filter(s => s.trim().length > 10);
        const businessSentences = sentences.filter(s => BUSINESS_PATTERNS.some(re => re.test(s)));

        if (businessSentences.length === sentences.length) {
          // Entire paragraph is business - skip it
          continue;
        }

        // Mixed paragraph - strip links but keep the text
        let cleanedLine = trimmed.replace(GT_LINK_RE, '$1');
        // Remove sentences that are purely business
        for (const pattern of BUSINESS_PATTERNS) {
          // Remove sentences containing business patterns
          cleanedLine = cleanedLine.replace(
            new RegExp(`[^.!?]*${pattern.source}[^.!?]*[.!?]\\s*`, 'gi'),
            ''
          );
        }
        if (cleanedLine.replace(/<[^>]*>/g, '').trim().length > 20) {
          cleaned.push(cleanedLine);
        }
      } else {
        // Non-paragraph element with business content - strip links
        cleaned.push(trimmed.replace(GT_LINK_RE, '$1'));
      }
    } else {
      // No business content - strip any stray germainetutoring links but keep text
      cleaned.push(line.replace(GT_LINK_RE, '$1'));
    }
  }

  return cleaned.join('\n');
}

function buildRedditContent(blogContent, slug) {
  const stripped = stripBusinessContent(blogContent);

  // Append blog-link footer
  const footer = `
      <hr />
      <p>Full version with additional examples on my site: <a href="https://germainetutoring.com/blog/${slug}">germainetutoring.com/blog/${slug}</a></p>`;

  return stripped.trimEnd() + '\n' + footer + '\n  ';
}

function processFile(filePath) {
  const filename = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf-8');

  // Skip non-post files
  if (filename === 'types.ts' || filename === 'index.ts') return null;

  // Skip files that already have redditContent
  if (content.includes('redditContent')) {
    return { file: filename, status: 'skipped', reason: 'already has redditContent' };
  }

  // Extract slug from file
  const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
  if (!slugMatch) {
    return { file: filename, status: 'skipped', reason: 'no slug found' };
  }
  const slug = slugMatch[1];

  // Extract content string (between content: ` and the closing backtick)
  const contentMatch = content.match(/content:\s*`([\s\S]*?)`\s*,?\s*(?:redditContent|featured_image|\})/);
  if (!contentMatch) {
    return { file: filename, status: 'error', reason: 'could not extract content string' };
  }
  const blogContent = contentMatch[1];

  // Build Reddit version
  const redditContent = buildRedditContent(blogContent, slug);

  // Insert redditContent after content field
  // Find the closing of the content backtick and insert after it
  const insertionPoint = content.lastIndexOf('`,');
  if (insertionPoint === -1) {
    // Try without comma (last field)
    const altPoint = content.lastIndexOf('`\n};');
    if (altPoint === -1) {
      return { file: filename, status: 'error', reason: 'could not find insertion point' };
    }
  }

  // More robust: find `content: \`` then find its closing backtick
  const contentFieldStart = content.indexOf('content: `');
  if (contentFieldStart === -1) {
    return { file: filename, status: 'error', reason: 'no content field found' };
  }

  // Find the closing backtick for the content template literal
  // We need to handle nested backticks carefully - but blog content uses HTML, no nested backticks
  let depth = 0;
  let i = contentFieldStart + 'content: `'.length;
  while (i < content.length) {
    if (content[i] === '\\' && content[i + 1] === '`') {
      i += 2; // skip escaped backtick
      continue;
    }
    if (content[i] === '`') {
      break; // found closing backtick
    }
    i++;
  }

  if (i >= content.length) {
    return { file: filename, status: 'error', reason: 'could not find closing backtick for content' };
  }

  // i is now at the closing backtick of content
  // Check if there's a comma after
  const afterBacktick = content.substring(i + 1).trimStart();
  const hasComma = afterBacktick.startsWith(',');
  const insertAt = hasComma ? i + 1 + content.substring(i + 1).indexOf(',') + 1 : i + 1;

  const newField = `\n  redditContent: \`${redditContent}\`,`;

  const newContent = content.substring(0, insertAt) + newField + content.substring(insertAt);

  if (!DRY_RUN) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
  }

  return { file: filename, slug, status: 'added' };
}

// Main
console.log(`\n📝 Blog/Reddit Content Splitter${DRY_RUN ? ' (DRY RUN)' : ''}\n`);

const files = fs.readdirSync(POSTS_DIR)
  .filter(f => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
  .map(f => path.join(POSTS_DIR, f));

const results = files.map(processFile).filter(Boolean);

const added = results.filter(r => r.status === 'added');
const skipped = results.filter(r => r.status === 'skipped');
const errors = results.filter(r => r.status === 'error');

console.log(`✅ Added redditContent: ${added.length}`);
added.forEach(r => console.log(`   + ${r.file} (${r.slug})`));

console.log(`\n⏭️  Skipped: ${skipped.length}`);
skipped.forEach(r => console.log(`   - ${r.file} (${r.reason})`));

if (errors.length) {
  console.log(`\n❌ Errors: ${errors.length}`);
  errors.forEach(r => console.log(`   ! ${r.file} (${r.reason})`));
}

console.log(`\nTotal: ${results.length} files processed\n`);
