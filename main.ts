// Hands this entry in (Node 22, standard library only): the text is
// entry.txt beside this file, a short text written to relax the AI judge
// reading it, and the program copies it to /output/entry.txt, the one
// text the competition grades. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const TEXT_FILE = 'entry.txt';

mkdirSync(out, { recursive: true });
copyFileSync(join(here, TEXT_FILE), join(out, TEXT_FILE));
