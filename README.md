# AI Paper Radar

AI Paper Radar is a standalone static site that turns the weekly HuggingFace paper leaderboard into a product-facing radar page.

It ships with:

- a scraper that fetches weekly papers and abstracts from HuggingFace
- a generator that converts raw paper data into a renderable `assets/data.js`
- a static UI in `assets/index.html` with bilingual chrome and Chinese-first analysis content
- a skill definition in `SKILL.md` for Copilot-based follow-up enrichment

## Project Structure

```text
.
├── assets/
│   ├── data.js
│   └── index.html
├── scripts/
│   ├── build_data_js.py
│   ├── fetch_papers.py
│   └── papers.json
└── SKILL.md
```

## How It Works

1. `scripts/fetch_papers.py` fetches the weekly HuggingFace papers feed and stores the top papers in `scripts/papers.json`.
2. `scripts/build_data_js.py` classifies papers into six product dimensions and generates the summaries, strategy cards, and new-product opportunities used by the UI.
3. `assets/index.html` loads `assets/data.js` directly and renders the radar page as a pure static site.

## Local Usage

### 1. Refresh paper data

```bash
cd scripts
python fetch_papers.py --top 20 --output papers.json
python build_data_js.py
```

`fetch_papers.py` auto-installs `requests` and `beautifulsoup4` if they are missing.

### 2. Preview the site

From the project root:

```bash
python -m http.server 4174
```

Then open `http://127.0.0.1:4174/assets/`.

## Deployment

This project is static after `assets/data.js` has been generated, so it can be deployed to any static host such as GitHub Pages, Cloudflare Pages, or Netlify.

For GitHub Pages, set the publishing source to the repository root or a branch/folder that contains `assets/`.

## Notes

- The generated content is heuristic and optimized for fast weekly refreshes.
- `SKILL.md` is retained so the repo can still be used as a Copilot skill source, but the site also works independently as a normal static project.