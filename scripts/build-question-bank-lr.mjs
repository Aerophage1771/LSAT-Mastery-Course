#!/usr/bin/env node
/**
 * Builds questionBankLR.json from "LSAT Course Content - Questions Used.tsv".
 * TSV columns: Module, Name, Question IDs, Question 1 … Question 12.
 * Each "Question N" cell: "Question ID: PT-N-S-N-Q-N  Stimulus  <text>  Question  <text>  Answer Choices  (A) ... (B) ... (E) ..."
 * Output: data/questionBankLR.json with shape { topics: [{ moduleNum, name, questionIds, questions: [{ id, stimulus, question, options }] }] }
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TSV_PATH = path.join(ROOT, 'LSAT Course Content - Questions Used.tsv');
const OUT_PATH = path.join(ROOT, 'data', 'questionBankLR.json');

const PT_ID_REGEX = /PT-\d+-S-\d+-Q-\d+/;

function parseOneQuestionCell(cell) {
  if (!cell || typeof cell !== 'string' || !cell.includes('Question ID:')) return null;
  const idMatch = cell.match(/Question ID:\s*(PT-\d+-S-\d+-Q-\d+)/);
  const id = idMatch ? idMatch[1] : null;
  if (!id) return null;

  const stimulusSep = '  Stimulus  ';
  const questionSep = '  Question  ';
  const choicesSep = '  Answer Choices  ';

  const stimIdx = cell.indexOf(stimulusSep);
  const questIdx = cell.indexOf(questionSep);
  const choicesIdx = cell.indexOf(choicesSep);
  if (stimIdx === -1 || questIdx === -1 || choicesIdx === -1) {
    return { id, stimulus: '', question: '', options: [] };
  }

  const stimulus = cell.slice(stimIdx + stimulusSep.length, questIdx).trim();
  const question = cell.slice(questIdx + questionSep.length, choicesIdx).trim();
  const choicesStr = cell.slice(choicesIdx + choicesSep.length).trim();

  const options = [];
  const optionRegex = /\(([A-E])\)\s*([\s\S]*?)(?=\s*\([A-E]\)\s*|$)/g;
  let m;
  while ((m = optionRegex.exec(choicesStr)) !== null) {
    options.push(m[2].trim());
  }
  if (options.length === 0 && choicesStr.length > 0) {
    options.push(choicesStr);
  }

  return { id, stimulus, question, options };
}

function parseTsvRows(content) {
  const lines = content.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length < 2) return { header: null, rows: [] };
  const headerLine = lines[0];
  const header = headerLine.split('\t').map((c) => c.trim());
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split('\t');
    rows.push(row);
  }
  return { header, rows };
}

function main() {
  if (!fs.existsSync(TSV_PATH)) {
    console.error('TSV not found:', TSV_PATH);
    process.exit(1);
  }
  const raw = fs.readFileSync(TSV_PATH, 'utf8');
  const { header, rows } = parseTsvRows(raw);
  if (!header || rows.length === 0) {
    console.error('No header or data rows');
    process.exit(1);
  }

  const moduleIdx = header.findIndex((h) => /Module/i.test(h));
  const nameIdx = header.findIndex((h) => /^Name$/i.test(h));
  const questionIdsIdx = header.findIndex((h) => /Question IDs/i.test(h));
  const questionColStart = header.findIndex((h) => /Question 1/i.test(h));
  if (moduleIdx === -1 || nameIdx === -1 || questionColStart === -1) {
    console.error('Required columns not found. Header:', header);
    process.exit(1);
  }

  const topics = [];
  for (const row of rows) {
    const moduleNum = parseInt(row[moduleIdx], 10);
    if (Number.isNaN(moduleNum)) continue;
    const name = (row[nameIdx] || '').trim() || `Module ${moduleNum}`;
    const questionIdsRaw = row[questionIdsIdx] != null ? row[questionIdsIdx] : '';
    const questions = [];
    for (let q = 0; q < 12; q++) {
      const colIdx = questionColStart + q;
      if (colIdx >= row.length) break;
      const parsed = parseOneQuestionCell(row[colIdx]);
      if (parsed && parsed.id) questions.push(parsed);
    }
    topics.push({
      moduleNum,
      name,
      questionIds: questionIdsRaw.trim(),
      questions,
    });
  }

  const outDir = path.dirname(OUT_PATH);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify({ topics }, null, 2), 'utf8');
  const totalQuestions = topics.reduce((acc, t) => acc + t.questions.length, 0);
  console.log(`Wrote ${OUT_PATH}: ${topics.length} topics, ${totalQuestions} questions.`);
}

main();
