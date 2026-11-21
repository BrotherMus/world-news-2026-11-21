# The World in One Page — Saturday 21 November 2026

Entry for make.fun's `news-image-20261121` bounty: one 1024×1024 front page summing up the day's world news
(27 stories across seven regions: COP31 overtime, Geneva "killer robot" rules, Hormuz drone claims, and more).

- `src/page.html` — the page, HTML with inline SVG drawings
- `tools/render.mjs` — renders it to `entry.png` with headless Edge and checks the gate (PNG, ≤1 MiB, ≤1024×1024)
- `main.ts` — the entry program (Node 22, stdlib only): checks `entry.png` and copies it to `/output/entry.png`

```sh
node tools/render.mjs
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
