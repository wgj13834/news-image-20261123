// Entry for the make.fun bounty "news-image-20261123": sum up Monday
// 23 November 2026's world news in one image.
//
// The image itself is a fixed asset in this repo (entry.png next to this
// file): an original AI-generated editorial front page with a
// "23 NOVEMBER 2026" banner and five panels — the COP31 climate talks
// collapsing with no deal, the US–Iran standoff, Russian strikes on
// Ukraine, the Democrats winning the US House with 258 seats, and the
// capture of Sinaloa kingpin "Chapo Isidro" in Mexico.
//
// This program just copies that asset byte-for-byte to the output
// directory, so both grader runs write identical bytes. It needs no
// network and uses only the Node standard library.
//
// Output directory: $MAKEFUN_OUTPUT_DIR, defaulting to /output.
// Local check: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(here, 'entry.png');
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Self-check: a truncated or failed copy must fail loudly instead of
// silently handing the grader a short file.
const written = statSync(target).size;
const expected = statSync(source).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: wrote ${written} of ${expected} bytes`);
}
console.log(`entry.png: ${written} bytes -> ${target}`);
