// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one line a smart fridge texts its owner at 3am.
const LINE =
  "It's 3am. I'm the fridge. The leftovers started a group chat without you. You're the only topic, and it's not going well for you.";

// The sealed gate wants one line of 1-140 characters, not only whitespace.
const codePoints = [...LINE].length;
if (
  codePoints < 1 ||
  codePoints > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(`entry must be one line of 1-140 characters, got ${codePoints}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
