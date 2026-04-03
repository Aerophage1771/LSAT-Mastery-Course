/**
 * Exports the current Mastery Course content as a WebsiteCourseReleaseV1 JSON artifact.
 *
 * Uses Vite's SSR module loading to import Module files (same pipeline as dev mode),
 * ensuring the same compilation and content handling as the running app.
 *
 * Usage: node scripts/export-website-release.mjs [output-path]
 */

import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const MODULES_DIR = path.join(ROOT_DIR, "modules");
const OUTPUT_DEFAULT = path.resolve(ROOT_DIR, "..", "output", "website-course-release.json");

// ── Step 0: Parse registry metadata ──────────────────────────

const registrySource = fs.readFileSync(path.join(MODULES_DIR, "registry.ts"), "utf8");

function parseRegistryEntries() {
  const entries = [];
  const re =
    /entry\(\{\s*id:\s*(\d+),\s*title:\s*(['"])(.*?)\2,\s*category:\s*(['"])(.*?)\4,\s*description:\s*(['"])(.*?)\6,\s*unit:\s*(['"])(.*?)\8,\s*lessonCount:\s*(\d+)\s*\},\s*\(\)\s*=>\s*import\(['"]\.\/Module(\d+)['"]\)\)/g;
  let m;
  while ((m = re.exec(registrySource)) !== null) {
    entries.push({
      routeId: Number(m[1]),
      title: m[3],
      category: m[5],
      description: m[7],
      unit: m[9],
      lessonCount: Number(m[10]),
      contentModuleId: Number(m[11]),
    });
  }
  return entries;
}

const registryEntries = parseRegistryEntries();
console.log(`Parsed ${registryEntries.length} registry entries`);

if (registryEntries.length === 0) {
  console.error("FATAL: Could not parse any entries from registry.ts");
  process.exit(1);
}

// ── Step 1: Create Vite SSR server and load modules ──────────

console.log("Starting Vite SSR server...");
const vite = await createServer({
  root: ROOT_DIR,
  logLevel: "warn",
  server: { middlewareMode: true },
  appType: "custom",
});

const allModules = {};
let loadErrors = 0;

for (const entry of registryEntries) {
  const modulePath = `/modules/Module${entry.contentModuleId}.tsx`;
  try {
    const loaded = await vite.ssrLoadModule(modulePath);
    // Module files export as named: export const Module1 = {...}
    // or default export
    const modKey = Object.keys(loaded).find(
      (k) => k.startsWith("Module") || k === "default"
    );
    const moduleData = modKey === "default" ? loaded.default : loaded[modKey];
    if (moduleData && moduleData.lessons) {
      allModules[entry.contentModuleId] = moduleData;
    } else {
      console.warn(`WARNING: Module ${entry.contentModuleId} loaded but has no lessons`);
      loadErrors++;
    }
  } catch (err) {
    console.warn(
      `WARNING: Failed to load Module${entry.contentModuleId}: ${err.message?.split("\n")[0]}`
    );
    loadErrors++;
  }
}

await vite.close();

console.log(
  `Loaded ${Object.keys(allModules).length} modules (${loadErrors} errors)`
);

if (Object.keys(allModules).length === 0) {
  console.error("FATAL: No modules loaded");
  process.exit(1);
}

// ── Step 2: Build the release artifact ───────────────────────

function extractMaterials(lesson) {
  const materials = [];
  if (!Array.isArray(lesson.content)) return materials;

  let materialIndex = 0;
  for (const block of lesson.content) {
    if (
      (block.type === "question-card" ||
        block.type === "question-passage-card") &&
      block.id
    ) {
      const ptMatch = block.id.match(/PT-\d+-S-\d+-Q-\d+/);
      if (ptMatch) {
        materialIndex++;
        materials.push({
          id: `${lesson.id}--material-${materialIndex}`,
          title: "Question Reference",
          type: "question_ref",
          content: ptMatch[0],
        });
      }
    }
  }
  return materials;
}

function cleanContent(content) {
  if (!Array.isArray(content)) return [];
  // Strip diff-note blocks (mastery-only) and ensure clean serialization
  return content
    .filter((b) => b.type !== "diff-note")
    .map((block) => {
      const cleaned = { ...block };
      // Ensure passage-card genre is always present (Website schema requires it)
      if (cleaned.type === "passage-card" && !cleaned.genre) {
        cleaned.genre = "";
      }
      // Normalize smart quotes in text content
      for (const key of ["text", "title", "stimulus", "question", "passage", "passageTitle"]) {
        if (typeof cleaned[key] === "string") {
          cleaned[key] = cleaned[key]
            .replace(/[\u201C\u201D]/g, '"')
            .replace(/[\u2018\u2019]/g, "'");
        }
      }
      // Clean items arrays
      if (Array.isArray(cleaned.items)) {
        cleaned.items = cleaned.items.map((item) => {
          if (typeof item === "string") {
            return item.replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'");
          }
          if (typeof item === "object" && item !== null) {
            const c = { ...item };
            if (typeof c.text === "string") c.text = c.text.replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'");
            if (typeof c.title === "string") c.title = c.title.replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'");
            return c;
          }
          return item;
        });
      }
      if (Array.isArray(cleaned.steps)) {
        cleaned.steps = cleaned.steps.map((s) =>
          typeof s === "string" ? s.replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'") : s
        );
      }
      if (Array.isArray(cleaned.options)) {
        cleaned.options = cleaned.options.map((o) =>
          typeof o === "string" ? o.replace(/[\u201C\u201D]/g, '"').replace(/[\u2018\u2019]/g, "'") : o
        );
      }
      // Handle nested accordion content
      if (cleaned.type === "accordion" && Array.isArray(cleaned.content)) {
        cleaned.content = cleanContent(cleaned.content);
      }
      return cleaned;
    });
}

function buildTrack(key, title, description, route, entries) {
  const modules = [];

  for (const entry of entries) {
    const moduleData = allModules[entry.contentModuleId];
    if (!moduleData) continue;

    const lessons = (moduleData.lessons || []).map((lesson) => {
      const lessonId = lesson.id;
      const materials = extractMaterials(lesson);
      const content = cleanContent(lesson.content);

      return {
        id: `${key}/${lessonId}`,
        lessonKey: lessonId,
        routePath: `${route}/module/${entry.routeId}/lesson/${lessonId}`,
        sourceRoutePath: `/module/${entry.routeId}/lesson/${lessonId}`,
        title: lesson.title,
        questionPolicy: lesson.questionPolicy || undefined,
        materials,
        content,
      };
    });

    modules.push({
      id: entry.routeId,
      moduleKey: `${key}/${entry.routeId}`,
      title: entry.title,
      category: entry.category,
      unit: entry.unit || moduleData.unit || "",
      description: entry.description || moduleData.description || "",
      lessons,
    });
  }

  return { key, title, description, route, modules };
}

const lrEntries = registryEntries
  .filter((e) => e.category === "LR")
  .sort((a, b) => a.routeId - b.routeId);

const rcEntries = registryEntries
  .filter((e) => e.category === "RC")
  .sort((a, b) => a.routeId - b.routeId);

console.log(`LR entries: ${lrEntries.length}, RC entries: ${rcEntries.length}`);

const lrTrack = buildTrack(
  "lr",
  "Logical Reasoning",
  "Master every Logical Reasoning question type with structured lessons and real LSAT questions.",
  "/logical-reasoning",
  lrEntries
);

const rcTrack = buildTrack(
  "rc",
  "Reading Comprehension",
  "Build passage analysis skills and question-type mastery for Reading Comprehension.",
  "/reading-comprehension",
  rcEntries
);

const totalLessons =
  lrTrack.modules.reduce((s, m) => s + m.lessons.length, 0) +
  rcTrack.modules.reduce((s, m) => s + m.lessons.length, 0);

const releaseId = `release-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}`;
const payload = {
  artifactType: "website-course-release",
  version: "v1",
  generatedAt: new Date().toISOString(),
  releaseId,
  checksum: "",
  tracks: [lrTrack, rcTrack],
};

payload.checksum = crypto
  .createHash("sha256")
  .update(JSON.stringify(payload.tracks))
  .digest("hex");

// ── Step 3: Write output ─────────────────────────────────────

const outputPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : OUTPUT_DEFAULT;
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), "utf8");

console.log(`\nRelease artifact written to: ${outputPath}`);
console.log(
  `  LR: ${lrTrack.modules.length} modules, ${lrTrack.modules.reduce((s, m) => s + m.lessons.length, 0)} lessons`
);
console.log(
  `  RC: ${rcTrack.modules.length} modules, ${rcTrack.modules.reduce((s, m) => s + m.lessons.length, 0)} lessons`
);
console.log(`  Total: ${totalLessons} lessons`);
console.log(`  Checksum: ${payload.checksum.slice(0, 16)}...`);
console.log("\nDone.");
