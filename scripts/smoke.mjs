import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const frontendUrl = "http://localhost:8002";

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const response = await fetch(frontendUrl);
assert(response.ok, `${frontendUrl} returned HTTP ${response.status}.`);
const html = await response.text();
assert(html.includes("LSAT Mastery Course"), "Mastery HTML title did not render.");

const appSource = fs.readFileSync(path.join(appRoot, "App.tsx"), "utf8");
assert(appSource.includes('path="/question-bank"'), "Question Bank route is missing from the Mastery shell.");
assert(appSource.includes("DashboardPage"), "DashboardPage is missing from the Mastery shell.");

console.log("LSAT Mastery smoke passed.");
