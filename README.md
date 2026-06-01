# Tymur Abdurakhmanov — Portfolio (React)

Personal portfolio. **React + Vite + Tailwind + Framer Motion.** Multi-page,
animated, deployed to GitHub Pages.

Design: "technical editorial" — Instrument Serif display headlines, monospace
labels, numbered sections, ledger-style project rows, warm paper/ink palette
with auto dark mode, and Framer Motion page transitions.

## Live URL

  https://diklinuks.github.io/CV-WEB/

## How deployment works (read this)

The repo has two branches with different jobs:

- **`main`** — the React **source code** (what you edit).
- **`gh-pages`** — the **built site** (auto-generated, don't edit by hand).

GitHub Pages serves the `gh-pages` branch.

### One-time setup (do this once in the GitHub UI)

1. Repo → **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `(root)` → Save

### Every time you change something

```bash
npm install      # first time only
npm run dev      # local preview at http://localhost:5173/CV-WEB/
npm run deploy   # builds and publishes to gh-pages → live in ~1 min
```

Then commit your source changes to main:

```bash
git add -A && git commit -m "..." && git push origin main
```

## Editing content

| What | Where |
| --- | --- |
| Projects (add/edit/reorder) | `src/data/projects.js` — single source of truth |
| Hero text, name, headline | `src/components/Hero.jsx` |
| CV (summary, education, skills, languages) | `src/pages/CV.jsx` |
| Contact links | `src/pages/Home.jsx` → `ContactList` |
| Colors / fonts | `src/index.css` (CSS variables) + `tailwind.config.js` |
| Nav / footer | `src/components/Nav.jsx`, `src/components/Footer.jsx` |

### Add a new project (≈2 min)

Append one object to the `projects` array in `src/data/projects.js`. It
automatically appears on the homepage, the Work index, and gets its own
`/projects/<slug>` page with optional live-demo embed. Fields:

```js
{
  slug: "my-project",
  name: "My Project",
  tagline: "One line.",
  lead: "2-3 sentence intro shown at the top of the page.",
  tags: ["Python", "PyTorch"],
  repo: "https://github.com/diklinuks/my-project",  // or null
  demo: "https://.../#demo",                          // or null — embeds live
  demoLabel: "diklinuks.github.io/my-project",
  sections: [
    { type: "h", text: "Heading" },
    { type: "p", text: "Paragraph." },
    { type: "ul", items: ["a", "b"] },
    { type: "code", text: "console.log('hi')" },
  ],
}
```

## Live demo embeds

Set a project's `demo` field to any URL. The project page renders a
click-to-load `<iframe>` — the demo only loads when the visitor clicks, so the
page stays fast. Currently embedded:

- Floating Waste Detection → `https://diklinuks.github.io/waste-detector/#demo`
- Airbnb Price Prediction → `https://diklinuks.github.io/Airbnb-Machine-learning/web/#map-section`

## Still needs your input (search `REPLACE` in `src/`)

- [ ] Drop `cv.pdf` in `public/` (CV "Download PDF" button → `/CV-WEB/cv.pdf`)
- [ ] Drop `public/assets/profile.jpg` and swap the `TA` placeholder in `src/pages/CV.jsx`
- [ ] Rewrite the Summary in your own voice
- [ ] Confirm Dutch level + LinkedIn slug (currently guesses)
- [ ] Fill the "What surprised me" sections + the Airbnb framing in `src/data/projects.js`

## Routing on GitHub Pages

Uses `BrowserRouter` with `basename="/CV-WEB"`. The build copies `index.html`
to `404.html` so deep links (e.g. `/CV-WEB/projects/betsy`) load the app
instead of a hard 404. If you rename the repo to `diklinuks.github.io`, change
`base` in `vite.config.js` and `basename` in `src/main.jsx` to `/`.

## Tech

- React 18, Vite 5, Tailwind 3, Framer Motion 11, React Router 6
- Self-hosted Instrument Serif (display); system sans + mono otherwise
- Auto dark mode via `prefers-color-scheme`
- ~100KB gzipped JS, accessible, mobile-first

## License

Code: MIT. Content (text, CV, project write-ups, identity): not licensed.
