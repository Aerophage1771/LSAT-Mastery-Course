#!/usr/bin/env npx tsx

/**
 * Supabase Content Backup
 *
 * Loads all registered modules, builds a canonical course payload,
 * and upserts the content into the existing course platform tables
 * defined by DataToolkit's 001_course_platform.sql migration.
 *
 * Flags:
 *   --dry-run   Print summary without writing to Supabase
 *   --init      Create course platform tables before backup (first-time setup)
 *
 * Outputs:
 *   docs/operations/audits/supabase-backup-receipt.json  (backup receipt)
 *
 * Run:  npx tsx scripts/backup-to-supabase.ts
 *   or: npm run backup:supabase
 *   or: npm run backup:supabase -- --dry-run
 *   or: npm run backup:supabase -- --init
 */

import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import crypto from 'crypto';
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { moduleRegistry, loadModule } from '../modules/registry.ts';
import { applyCanonicalNamesToModule } from '../utils/courseCatalog.ts';
import { buildCanonicalCoursePayload } from '../utils/export.ts';
import type { CanonicalCourseModule, CanonicalCoursePayload } from '../utils/courseExportSchemas.ts';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ROOT_DIR = join(import.meta.dirname, '..');
const AUDIT_DIR = join(ROOT_DIR, 'docs', 'operations', 'audits');
const isDryRun = process.argv.includes('--dry-run');
const shouldInit = process.argv.includes('--init');

const MIGRATION_SQL_PATH = join(ROOT_DIR, '..', 'DataToolkit', 'supabase', 'migrations', '001_course_platform.sql');
const MIGRATION_002_PATH = join(ROOT_DIR, '..', 'DataToolkit', 'supabase', 'migrations', '002_allow_passage_ref_course_materials.sql');

type CourseTrackKey = 'lr' | 'rc' | 'other';

interface TrackDefinition {
  id: CourseTrackKey;
  key: CourseTrackKey;
  title: string;
  description: string;
  route: string;
  sort_order: number;
}

const TRACK_DEFINITIONS: TrackDefinition[] = [
  { id: 'lr', key: 'lr', title: 'Logical Reasoning', description: 'LR curriculum', route: '/lr', sort_order: 0 },
  { id: 'rc', key: 'rc', title: 'Reading Comprehension', description: 'RC + Advanced curriculum', route: '/rc', sort_order: 1 },
  { id: 'other', key: 'other', title: 'Other', description: 'Reference and supplementary content', route: '/other', sort_order: 2 },
];

// ---------------------------------------------------------------------------
// .env reader (no dotenv dependency)
// ---------------------------------------------------------------------------

function parseEnvFile(): Map<string, string> {
  const envPath = join(ROOT_DIR, '.env');
  let envContent: string;
  try {
    envContent = readFileSync(envPath, 'utf-8');
  } catch {
    throw new Error(`.env file not found at ${envPath}`);
  }

  const vars = new Map<string, string>();
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex < 0) continue;
    const k = trimmed.slice(0, eqIndex).trim();
    const v = trimmed.slice(eqIndex + 1).trim();
    vars.set(k, v);
  }
  return vars;
}

function loadEnv(): { url: string; key: string; dbUrl?: string } {
  const vars = parseEnvFile();

  const url = vars.get('VITE_SUPABASE_URL') || vars.get('SUPABASE_URL');
  const key = vars.get('VITE_SUPABASE_ANON_KEY') || vars.get('SUPABASE_ANON_KEY');
  const dbUrl = vars.get('SUPABASE_DB_URL');

  if (!url || !key) {
    throw new Error('Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY in .env');
  }

  return { url, key, dbUrl };
}

// ---------------------------------------------------------------------------
// Table initialization (--init flag)
// ---------------------------------------------------------------------------

async function initTables(dbUrl: string) {
  console.log('Initializing course platform tables…');

  // Use the Supabase management API via the REST endpoint
  // Since we have the direct DB URL, we can use the pg protocol
  // But for simplicity, we'll use fetch against the Supabase SQL endpoint
  const env = parseEnvFile();
  const supabaseUrl = env.get('VITE_SUPABASE_URL') || env.get('SUPABASE_URL');

  // Read migration SQL files
  let sql: string;
  try {
    sql = readFileSync(MIGRATION_SQL_PATH, 'utf-8');
    const sql2 = readFileSync(MIGRATION_002_PATH, 'utf-8');
    sql += '\n' + sql2;
  } catch {
    throw new Error(`Migration files not found. Expected:\n  ${MIGRATION_SQL_PATH}\n  ${MIGRATION_002_PATH}`);
  }

  // Use the database URL directly with the Supabase REST SQL endpoint
  // The anon key can't run DDL, so we use the DB URL's embedded credentials
  // to call the PostgREST rpc endpoint via supabase's SQL editor API
  const dbPassword = dbUrl.match(/:([^@]+)@/)?.[1];
  const projectRef = supabaseUrl?.match(/https:\/\/([^.]+)/)?.[1];

  if (!projectRef || !dbPassword) {
    throw new Error('Could not extract project ref or DB password from .env');
  }

  // Use the Supabase Management API to run SQL
  // Alternative: use the pg module. But we can POST to the /rest/v1/rpc endpoint.
  // Simplest: use supabase-js with service role, but we don't have it.
  // Most portable: run psql or use pg library.

  // Let's try using the REST SQL API at /pg/query
  // This requires the postgres password which we have in the DB URL
  const response = await fetch(`${supabaseUrl}/pg/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${dbPassword}`,
    },
    body: JSON.stringify({ query: sql }),
  });

  if (!response.ok) {
    // Fallback: try running via psql command
    console.log('  REST SQL endpoint not available, trying psql…');
    const { execSync } = await import('child_process');
    try {
      execSync(`psql "${dbUrl}" -c "${sql.replace(/"/g, '\\"')}"`, {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 30000,
      });
      console.log('  Tables created via psql.');
      return;
    } catch (psqlError) {
      // Final fallback: write SQL to file and instruct user
      const sqlOutPath = join(AUDIT_DIR, 'init-course-tables.sql');
      mkdirSync(AUDIT_DIR, { recursive: true });
      writeFileSync(sqlOutPath, sql);
      console.log(`\n  Could not auto-create tables.`);
      console.log(`  Migration SQL written to: ${sqlOutPath}`);
      console.log(`  Please run this SQL in the Supabase dashboard SQL editor,`);
      console.log(`  then re-run: npm run backup:supabase`);
      process.exit(1);
    }
  }

  console.log('  Tables created successfully.');
}

// ---------------------------------------------------------------------------
// ID helpers (replicated from DataToolkit/server/courseStore.ts lines 299-318)
// ---------------------------------------------------------------------------

function inferTrackKey(module: CanonicalCourseModule): CourseTrackKey {
  const category = module.category.trim().toUpperCase();
  if (category.includes('RC') || module.title.toUpperCase().startsWith('RC')) return 'rc';
  if (category.includes('LR') || module.title.toUpperCase().startsWith('LR')) return 'lr';
  // Advanced passages belong to RC track (matching DataToolkit convention)
  if (category.includes('ADVANCED')) return 'rc';
  if (module.routeModuleId >= 21 && module.routeModuleId <= 54) return 'rc';
  if (module.routeModuleId >= 1 && module.routeModuleId <= 22) return 'lr';
  return 'other';
}

function buildModuleId(trackKey: CourseTrackKey, routeModuleId: number): string {
  return `${trackKey}/${routeModuleId}`;
}

function buildLessonId(trackKey: CourseTrackKey, lessonKey: string): string {
  return `${trackKey}/${lessonKey}`;
}

function hashContent(value: unknown): string {
  return crypto.createHash('sha256').update(JSON.stringify(value)).digest('hex');
}

// ---------------------------------------------------------------------------
// Supabase upsert helpers
// ---------------------------------------------------------------------------

async function upsertTracks(supabase: SupabaseClient, tracks: TrackDefinition[]) {
  const { error } = await supabase.from('course_tracks').upsert(tracks, { onConflict: 'id' });
  if (error) throw new Error(`Failed to upsert tracks: ${error.message}`);
}

interface ModuleRow {
  id: string;
  track_key: string;
  route_module_id: number;
  source_module_id: number;
  title: string;
  category: string;
  unit: string;
  description: string;
  sort_order: number;
}

async function upsertModules(supabase: SupabaseClient, rows: ModuleRow[]) {
  // Batch in chunks to avoid request size limits
  const CHUNK = 20;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    const { error } = await supabase.from('course_modules').upsert(chunk, { onConflict: 'id' });
    if (error) throw new Error(`Failed to upsert modules (batch ${i}): ${error.message}`);
  }
}

interface LessonRow {
  id: string;
  lesson_key: string;
  module_id: string;
  track_key: string;
  route_module_id: number;
  source_module_id: number;
  source_route_path: string;
  title: string;
  sort_order: number;
  body_kind: 'markdown' | 'blocks';
  content: unknown;
  question_policy: string | null;
  latest_version_number: number;
}

async function upsertLessons(supabase: SupabaseClient, rows: LessonRow[]) {
  // Lessons contain full JSONB content — use small batches to avoid payload limits
  const CHUNK = 3;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    const { error } = await supabase.from('course_lessons').upsert(chunk, { onConflict: 'id' });
    if (error) throw new Error(`Failed to upsert lessons (batch ${i}): ${error.message}`);
  }
}

interface VersionRow {
  id: string;
  lesson_id: string;
  version_number: number;
  source: 'import';
  checksum: string;
  snapshot: unknown;
}

async function insertVersions(supabase: SupabaseClient, rows: VersionRow[]) {
  // Versions contain full JSONB snapshots — use small batches
  const CHUNK = 3;
  for (let i = 0; i < rows.length; i += CHUNK) {
    const chunk = rows.slice(i, i + CHUNK);
    // Use upsert with unique (lesson_id, version_number) to be idempotent
    const { error } = await supabase.from('course_lesson_versions').upsert(chunk, {
      onConflict: 'lesson_id,version_number',
    });
    if (error) throw new Error(`Failed to insert versions (batch ${i}): ${error.message}`);
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(isDryRun ? 'Supabase Backup (DRY RUN)' : 'Supabase Backup');
  console.log('─────────────────────────');

  // 0. Initialize tables if requested
  if (shouldInit) {
    const { dbUrl } = loadEnv();
    if (!dbUrl) {
      throw new Error('--init requires SUPABASE_DB_URL in .env');
    }
    await initTables(dbUrl);
  }

  // 1. Load all modules
  console.log('Loading modules…');
  const modules = await Promise.all(
    moduleRegistry.map(async (entry) => {
      const raw = await loadModule(entry.meta.id);
      return applyCanonicalNamesToModule(raw, entry.meta.id);
    }),
  );
  console.log(`  Loaded ${modules.length} modules`);

  // 2. Build canonical payload
  console.log('Building canonical payload…');
  const payload: CanonicalCoursePayload = buildCanonicalCoursePayload(modules);
  const totalLessons = payload.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  console.log(`  ${payload.modules.length} modules, ${totalLessons} lessons`);

  // 3. Map to Supabase rows
  console.log('Mapping to Supabase schema…');
  const now = new Date().toISOString();

  const usedTrackKeys = new Set<CourseTrackKey>();
  const moduleRows: ModuleRow[] = [];
  const lessonRows: LessonRow[] = [];
  const versionRows: VersionRow[] = [];

  for (const [moduleIndex, module] of payload.modules.entries()) {
    const trackKey = inferTrackKey(module);
    usedTrackKeys.add(trackKey);
    const moduleId = buildModuleId(trackKey, module.routeModuleId);

    moduleRows.push({
      id: moduleId,
      track_key: trackKey,
      route_module_id: module.routeModuleId,
      source_module_id: module.sourceModuleId,
      title: module.title,
      category: module.category,
      unit: module.unit,
      description: module.description,
      sort_order: moduleIndex,
    });

    for (const [lessonIndex, lesson] of module.lessons.entries()) {
      const lessonId = buildLessonId(trackKey, lesson.lessonId);
      const checksum = hashContent(lesson.content);
      const versionId = crypto.randomUUID();

      lessonRows.push({
        id: lessonId,
        lesson_key: lesson.lessonId,
        module_id: moduleId,
        track_key: trackKey,
        route_module_id: module.routeModuleId,
        source_module_id: module.sourceModuleId,
        source_route_path: lesson.routePath,
        title: lesson.title,
        sort_order: lessonIndex,
        body_kind: lesson.bodyKind,
        content: lesson.content,
        question_policy: lesson.questionPolicy ?? null,
        latest_version_number: 1,
      });

      versionRows.push({
        id: versionId,
        lesson_id: lessonId,
        version_number: 1,
        source: 'import',
        checksum,
        snapshot: {
          lessonId,
          moduleId,
          trackKey,
          routeModuleId: module.routeModuleId,
          title: lesson.title,
          bodyKind: lesson.bodyKind,
          content: lesson.content,
          questionPolicy: lesson.questionPolicy ?? null,
          importedAt: now,
        },
      });
    }
  }

  const trackRows = TRACK_DEFINITIONS.filter((t) => usedTrackKeys.has(t.id));

  console.log(`  Tracks: ${trackRows.length}`);
  console.log(`  Modules: ${moduleRows.length}`);
  console.log(`  Lessons: ${lessonRows.length}`);
  console.log(`  Versions: ${versionRows.length}`);

  // Track distribution
  const trackDist: Record<string, number> = {};
  for (const m of moduleRows) {
    trackDist[m.track_key] = (trackDist[m.track_key] || 0) + 1;
  }
  for (const [track, count] of Object.entries(trackDist)) {
    console.log(`    ${track}: ${count} modules`);
  }

  // 4. Dry run or live
  if (isDryRun) {
    console.log('\n  DRY RUN — no data written to Supabase.');
    const dryRunPath = join(AUDIT_DIR, 'supabase-backup-dry-run.json');
    mkdirSync(AUDIT_DIR, { recursive: true });
    writeFileSync(
      dryRunPath,
      JSON.stringify(
        {
          generatedAt: now,
          isDryRun: true,
          trackCount: trackRows.length,
          moduleCount: moduleRows.length,
          lessonCount: lessonRows.length,
          versionCount: versionRows.length,
          trackDistribution: trackDist,
          moduleIds: moduleRows.map((m) => m.id),
        },
        null,
        2,
      ),
    );
    console.log(`  Dry-run manifest → ${dryRunPath}`);
    return;
  }

  // Live mode — connect to Supabase
  const env = loadEnv();
  const supabase = createClient(env.url, env.key);

  console.log('\nUpserting to Supabase…');

  console.log('  → tracks');
  await upsertTracks(supabase, trackRows);

  console.log('  → modules');
  await upsertModules(supabase, moduleRows);

  console.log('  → lessons');
  await upsertLessons(supabase, lessonRows);

  console.log('  → lesson versions');
  await insertVersions(supabase, versionRows);

  console.log('\nBackup complete.');

  // Write receipt
  mkdirSync(AUDIT_DIR, { recursive: true });
  const receiptPath = join(AUDIT_DIR, 'supabase-backup-receipt.json');
  writeFileSync(
    receiptPath,
    JSON.stringify(
      {
        generatedAt: now,
        isDryRun: false,
        supabaseUrl: env.url,
        trackCount: trackRows.length,
        moduleCount: moduleRows.length,
        lessonCount: lessonRows.length,
        versionCount: versionRows.length,
        trackDistribution: trackDist,
        payloadChecksum: hashContent(payload),
      },
      null,
      2,
    ),
  );
  console.log(`  Receipt → ${receiptPath}`);
}

main().catch((err) => {
  console.error('Backup failed:', err);
  process.exit(1);
});
