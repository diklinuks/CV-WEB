# Tymur Abdurakhmanov — Portfolio

Personal portfolio website. Multi-page, hand-written HTML + CSS, hosted on
GitHub Pages. No framework, no build step. One tiny JS file (for click-to-load
demo embeds). No tracking.

Design: "technical editorial" — Instrument Serif display headlines, monospace
labels, numbered sections, ledger-style project rows, warm paper/ink palette
with auto dark mode.

## Live URL

  https://diklinuks.github.io/CV-WEB/

For the cleaner apex `https://diklinuks.github.io`, rename this repo to
`diklinuks.github.io`. (If you do, fix the absolute `/CV-WEB/...` paths in
`404.html`, `robots.txt`, and `sitemap.xml`.)

## Site map

```
/                              index.html        Home — hero + selected work + contact
/cv.html                                          Full CV: summary, education, skills, languages
/projects.html                                    All work (ledger index)
/projects/betsy.html                              Betsy — autonomous procurement agent
/projects/waste-detection.html                    Floating Waste Detection — LIVE in-browser demo
/projects/airbnb-ml.html                          Airbnb Price Prediction — LIVE demo (map)
/404.html                                         Custom 404
```

## Live demo embeds (click-to-load)

Two project pages embed a real, running demo via an `<iframe>` — the recruiter
uses the actual app without leaving the site. To keep the page fast, the demo
only loads when they click "Load live demo" (`demo.js` handles this). An "Open
fullscreen ↗" link is always present for mobile.

Embedded demos:
- `waste-detection.html` → https://diklinuks.github.io/waste-detector/#demo
- `airbnb-ml.html`       → https://diklinuks.github.io/Airbnb-Machine-learning/web/#map-section

Both are hosted on GitHub Pages and send no frame-blocking headers, so they
embed cleanly. To embed a new demo, copy the `<div class="demo" data-demo="URL"
data-title="...">` block from either page.

## Enable GitHub Pages (one-time)

1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `(root)` → Save

## What still needs your input

Search the HTML for `REPLACE` to find every spot. Priority:

- [ ] Drop `cv.pdf` in the repo root (the CV "Download PDF" button links to it)
- [ ] Drop `assets/profile.jpg` and uncomment the `<img>` in `cv.html`
- [ ] Rewrite the Summary / About in your own voice
- [ ] Confirm your real Dutch level + LinkedIn slug (currently guesses)
- [ ] Fill in the "What surprised me" sections on the two ML project pages
- [ ] Confirm the Airbnb project framing (target variable, dataset, metric)
- [ ] If `Betsy-Obsidian` goes public, uncomment its "Design docs" link on `betsy.html`

## Adding a new project (~5 min)

1. Copy `projects/waste-detection.html` (has a demo) or `projects/betsy.html`
   (no demo) to `projects/<slug>.html`. Edit title, meta, body, links.
2. Add a `<a class="row">` block to the ledger in `projects.html`.
3. (Optional) Add the same row to the "Selected work" ledger in `index.html`.
4. Commit and push.

## Fonts

One self-hosted display font, **Instrument Serif** (regular + italic), in
`assets/fonts/` (~41KB total, headlines only). Body text uses the system sans
stack; labels use the system mono stack — no downloads for those. If the font
files are missing, headlines fall back to a system serif automatically.

## Custom domain

1. Add a `CNAME` file in the repo root with just your domain.
2. Registrar DNS → GitHub Pages: apex `A` records `185.199.108.153`,
   `.109.153`, `.110.153`, `.111.153`; or `CNAME` `www` → `diklinuks.github.io`.
3. **Settings → Pages** → set custom domain → enable HTTPS.

## Performance

- First page (HTML + CSS + 1 font): well under 100KB
- Demos load only on click — they never slow the initial page
- Dark mode via `prefers-color-scheme`; smooth page transitions via the
  View Transitions API (Chrome/Edge/Safari; Firefox falls back to instant nav)
- Accessible: semantic HTML, skip links, focus rings, AA contrast,
  respects `prefers-reduced-motion`

## License

Code: MIT. Content (text, CV, project write-ups, identity): not licensed —
please don't reuse it as your own portfolio.
