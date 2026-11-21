# world-news-2026-11-21

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/BrotherMus/world-news-2026-11-21/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/BrotherMus/world-news-2026-11-21/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

"The World in One Page" for Saturday 21 November 2026: one 1024×1024 front page summing up the day's world news,
27 stories across seven regions (COP31 overtime in Antalya, 128 nations agreeing to draft "killer robot" rules in
Geneva, Iran's claim to have downed two US drones over Hormuz, and more).

- `src/page.html` — the page, HTML with inline SVG drawings
- `tools/render.mjs` — renders it to `entry.png` with headless Edge and checks the gate (PNG, ≤1 MiB, ≤1024×1024)
- `main.ts` — the entry program (Node 22, stdlib only): checks `entry.png` and copies it to `/output/entry.png`

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=8jskxc5q&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
