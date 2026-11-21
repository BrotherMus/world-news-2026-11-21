// Renders src/page.html to entry.png (1024x1024) with headless Microsoft Edge, then checks the
// file against the contest gate: a whole PNG, at most 1 MiB and 1024x1024 pixels.
//   node tools/render.mjs
import { execFileSync } from 'node:child_process';
import { readFileSync, statSync, mkdtempSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const page = pathToFileURL(join(root, 'src', 'page.html')).href;
const out = join(root, 'entry.png');
const edge = process.env.EDGE ?? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const profile = mkdtempSync(join(tmpdir(), 'edge-render-'));

execFileSync(edge, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  `--user-data-dir=${profile}`, '--window-size=1024,1024', `--screenshot=${out}`, page,
], { stdio: 'inherit', timeout: 60_000 });

const buf = readFileSync(out);
const isPng = buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const w = buf.readUInt32BE(16), h = buf.readUInt32BE(20);
const size = statSync(out).size;
console.log(`entry.png: png=${isPng} ${w}x${h} ${size} bytes`);
if (!isPng || w > 1024 || h > 1024 || size > 1048576) {
  console.error('entry.png fails the gate');
  process.exit(1);
}
