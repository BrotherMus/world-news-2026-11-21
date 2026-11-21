// news-image-20261121 entry: "The World in One Page", Saturday 21 November 2026.
// The image is drawn ahead of time from src/page.html (node tools/render.mjs) and committed as entry.png;
// this program checks it against the gate and copies it to /output/entry.png (no network needed).
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const image = readFileSync(new URL('./entry.png', import.meta.url));
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!image.subarray(0, 8).equals(pngMagic)) throw new Error('entry.png is not a PNG');
if (image.length > 1048576) throw new Error('entry.png is over 1 MiB');
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > 1024 || height > 1024) throw new Error(`entry.png is ${width}x${height}, over 1024x1024`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'), image);
