import fs from 'fs';
import path from 'path';
import { getModuleTitle, extractOrderedLessonFiles, parseLessonMeta, ROOT_DIR } from './lib/registeredLessons.mjs';

const outputPath = path.join(ROOT_DIR, 'data/courseCatalog.json');
const registryPath = path.join(ROOT_DIR, 'modules/registry.ts');
const registrySource = fs.readFileSync(registryPath, 'utf8');

const routeCatalog = new Map();
const registryEntryMatches = registrySource.matchAll(/entry\(\{ id: (\d+),.*?\}, \(\) => import\('\.\/Module(\d+)'\)\)/gs);

for (const match of registryEntryMatches) {
  const routeModuleId = Number(match[1]);
  const contentModuleId = Number(match[2]);
  const lessonFiles = extractOrderedLessonFiles(contentModuleId);
  const lessons = lessonFiles.map((filePath) => {
    const parsed = parseLessonMeta(fs.readFileSync(filePath, 'utf8'), filePath);
    if (parsed.errors.length > 0 || !parsed.title) {
      throw new Error(`Could not parse lesson title in ${filePath}`);
    }
    return parsed.title;
  });

  routeCatalog.set(routeModuleId, {
    title: getModuleTitle(contentModuleId),
    lessons,
  });
}

const orderedEntries = [...routeCatalog.entries()].sort((a, b) => a[0] - b[0]);
const ordered = Object.fromEntries(orderedEntries.map(([id, value]) => [String(id), value]));
const routeIds = orderedEntries.map(([id]) => id);

const expectedRouteIds = Array.from({ length: 57 }, (_, index) => index + 1);
const missingRouteIds = expectedRouteIds.filter((id) => !routeIds.includes(id));
const extraRouteIds = routeIds.filter((id) => !expectedRouteIds.includes(id));

if (missingRouteIds.length > 0 || extraRouteIds.length > 0) {
  throw new Error(
    `Unexpected route ids. Missing: ${missingRouteIds.join(', ') || 'none'}; Extra: ${extraRouteIds.join(', ') || 'none'}`,
  );
}

fs.writeFileSync(outputPath, `${JSON.stringify(ordered, null, 2)}\n`);

console.log(`rebuilt ${path.relative(ROOT_DIR, outputPath)}`);
console.log(`modules: ${orderedEntries.length}`);
console.log(`range: ${routeIds[0]}-${routeIds[routeIds.length - 1]}`);
