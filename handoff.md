# Goal

Personal portfolio website for **Tymur Abdurakhmanov** — AI & ML student
(Fontys, Eindhoven) hunting a **September 2026 internship in the Netherlands**.
Audience: Dutch tech recruiters / AI-ML hiring managers.

- **Stack:** React + Vite + Tailwind + Framer Motion. Self-hosted Space Grotesk font.
- **Hosting:** GitHub Pages. `main` = source, `gh-pages` = built output. Deploy with `npm run deploy`. Pages serves the `gh-pages` branch.
- **Repo:** https://github.com/diklinuks/CV-WEB · **Live:** https://diklinuks.github.io/CV-WEB/

## Current state

Working and deployed. Flow: **Splash (Enter) → Menu (choose) → section pages.**

- **Splash** (`/`) — name + short note + Enter button. White shader line.
- **Menu/Hub** (`/menu`) — clean horizontal links: CV / Work / Contact. Prism shader line (white → red→green→blue).
- **Inner pages** — CV (red line), Work/Projects (green), Contact (blue). `← Menu` back link (TopBar) + theme toggle, top-left.
- Palette is **monochrome** (black/white); the only colour is the shader line. Light/dark toggle works.
- **Two live demos embedded** (click-to-load iframes): Floating Waste (`waste-detector`) and Airbnb ML.
- Content reference docs in repo root: `WEBSITE-CONTENT.md` (clean) and `PORTFOLIO-CONTENT.md` (detailed).

## Files in flight

Nothing mid-edit. Next edits will touch:
- `src/data/projects.js` — Betsy entry (add live-demo URL + docs link).
- `src/pages/ProjectDetail.jsx` — render Betsy's demo button + docs button.
- `src/pages/CV.jsx` — pending: remove/merge the duplicate Contact block (user asked; not yet done).

## Changed (this session)

Rebuilt the whole site from scratch and iterated heavily.
- Migrated vanilla HTML/CSS → React/Vite/Tailwind/Framer Motion (deploy via `gh-pages` branch).
- Current components: `ShaderWave` (three.js, `mode` = white|prism), `ColorLine` (CSS per-section line), `TopBar`, `ThemeToggle`, `ContactList`, `ProjectRow`, `primitives` (Btn/Block/etc.).
- Current pages: `Splash`, `Hub`, `CV`, `Projects`, `ProjectDetail`, `Contact`, `NotFound`.
- Projects in `src/data/projects.js`: Betsy, waste-detection, airbnb-ml.
- Removed (do not resurrect unless asked): `Home.jsx`, `Menu.jsx`, `Footer.jsx`, `Hero.jsx`, `Cursor.jsx`, `LivingVine.jsx`, `StaggerCards.jsx`, the Instrument Serif font.

## Failed attempts (rejected, with why)

1. **Vanilla HTML/CSS multi-page** — too plain; user wanted richer/animated → moved to React.
2. **"Technical editorial" (Instrument Serif, warm paper)** — "looks the same / too blank."
3. **Black/white/colorful, big bold hub, custom cursor, WebGL shader hero** — "terrible"; cursor disliked, type too big, colours disliked.
4. **Splash → Hub with boxes** — "don't like the boxes, too blocky."
5. **Living-vine background + stagger carousel hub** (from 21st.dev refs) — rejected; user said "change it back."
6. **Custom cursor** — disliked, removed.

**Net learnings:** keep it minimal/calm, **monochrome + a single shader line accent**, **splash → hub → sections**, **horizontal links** (no boxes / no vine / no carousel / no cursor). Propose designs in chat and get approval BEFORE building.

## Next step

**Wire up Betsy** — blocked on the user for two inputs:
1. The **public** Betsy demo URL (`https://….onrender.com` — NOT the Render dashboard link, which is login-only) + whether it's free-tier (sleeps → use an "Open ↗" button) or always-on (can embed).
2. **Docs decision** for the private `Betsy-Obsidian` repo (currently 404/private): (A) make public + link, (B) publish via Quartz/Obsidian Publish + link, or (C) "available on request."

Once received: add `demo`/`docs` to the Betsy object in `src/data/projects.js`, render the buttons in `ProjectDetail.jsx`, `npm run deploy`, push.
