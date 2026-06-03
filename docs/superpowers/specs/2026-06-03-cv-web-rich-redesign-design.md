# CV-WEB — Rich Redesign (Design Spec)

**Date:** 2026-06-03
**Project:** Personal portfolio for Tymur Abdurakhmanov — AI & ML student (Fontys, Eindhoven), seeking a September 2026 internship in the Netherlands.
**Audience:** Dutch tech recruiters / AI-ML hiring managers.
**Status:** Design approved in substance (pending written-spec review).

---

## 1. Goal & direction shift

Move the site from its current **minimal / monochrome** look to a **rich, animated, "cosmic" experience** — alive backgrounds, kinetic type, animated buttons, and far stronger animation on the CV and Work pages (the current versions feel too plain). A minimalist touch is retained only in *small pockets* (body copy, factual content) for legibility; richness lives in the frame, motion, and transitions.

This **overrides** prior "net learnings" from the handoff:
- "Keep it minimal/calm, monochrome" → **superseded.** Rich is the goal.
- "Custom cursor rejected" → that was specific to one iteration; a tasteful **cursor-reactive glow** is in scope (not a full replacement cursor).
- "Color disliked / monochrome + single shader line" → **superseded.** Color now derives from the chosen background components, not a strict per-section scheme.

## 2. Structure & flow

Multi-page (routed), **not** a single scroll page. Flow unchanged:

```
Splash (/)  →  Hub (/menu)  →  CV (/cv) · Work (/projects) · Contact (/contact)  →  ProjectDetail (/projects/:slug)
```

Each is a *big*, richly-animated page. The upgrade is **animated transitions between pages** via Framer Motion `AnimatePresence`: outgoing page fades/blurs out, the incoming page's background is already alive underneath, then content reveals in. Moving through the site should feel like moving between spaces, not reloading.

## 3. Backgrounds (built from the user's 21st.dev references)

| Page(s) | Background | Source component | Notes |
|---|---|---|---|
| Splash, Hub | **Starfield** (deep-space, mouse-parallax) | `aliimam/starfield-1` | Splash "Enter" triggers the **warp / hyperspace** burst as the transition into Hub. |
| CV, Work, Contact, ProjectDetail | **Cosmic mesh-gradient** shader | `@paper-design/shaders-react` `MeshGradient` (inspired by `thanh/animated-shader-background`) | One shared instance, recolored to the cool-cosmic palette, perf-gated. |
| (considered) Splash combo | Starfield + soft shader glow | `ravikatiyar/animated-shader-hero` | **Decision:** keep Splash pure starfield so the warp→Hub beat lands harder. Shader owns inner pages. Revisit if more front-page richness is wanted. |

All three referenced components were fetched and reviewed via the 21st.dev MCP:
- `animated-shader-hero` — raw WebGL2 + GLSL "cosmic clouds", mouse-reactive, **no deps**.
- `starfield-1` — canvas-2D 3D starfield with mouse-parallax + click warp, **no deps**.
- mesh-gradient route uses `@paper-design/shaders-react` (one new dependency — approved: "add anything if the design is better").

## 4. Palette — Cool Cosmic (chosen on user's "you pick" latitude)

Dark, unified "one universe" feel. RGB-per-section scheme is **dropped**.

| Token | Value (dark) | Use |
|---|---|---|
| `--bg` | `#06060a` | base (near-black indigo) |
| `--bg-elevated` | `#0e0e16` | cards / glass base |
| `--ink` | `#f5f5f7` | primary text |
| `--ink-soft` | `#a6a6ad` | secondary text |
| `--ink-muted` | `#6e6e77` | labels / meta |
| `--cyan` | `#46e0ff` | energy accent 1 |
| `--violet` | `#7c5cff` | energy accent 2 |
| `--magenta` | `#ff5ea8` | energy accent 3 |
| `--glow` | radial cyan→violet→magenta | background shaders, hover glow, focus |

Accents appear as gradient glows, hover energy, focus rings, and the shader/starfield coloring — not as flat fills. Exact stops finalized during build for cohesion.

## 5. Typography (user picked pairings #4 + #1, used in roles)

| Font | Role | Source | Hosting |
|---|---|---|---|
| **Fraunces** (serif display) | Name, big page titles — the "wow" editorial voice | Google Fonts | self-host woff2 |
| **Clash Display** | Section headings, nav, labels — structural | Fontshare | self-host woff2 |
| **Space Grotesk** | Body / UI | (already self-hosted) | existing |

All fonts **self-hosted** (no runtime CDN) to keep GH Pages fast and offline-safe. `font-display: swap`.

## 6. Motion system ("bold but tasteful")

- **Page transitions** — `AnimatePresence`, fade/blur cross-dissolve; background persists underneath.
- **Starfield warp** — "Enter" on Splash triggers hyperspace → routes to Hub.
- **Kinetic headings** — Fraunces titles reveal with staggered, blurred letter/line rise.
- **Magnetic buttons** — pointer-follow translate + fill-on-hover (approved in preview).
- **Scroll reveals** — CV & Work content animates in on scroll (the main fix for "too plain").
- **Cursor-reactive glow** — subtle pointer-following radial glow, site-wide (not a custom cursor).
- **All motion gated** behind `prefers-reduced-motion: reduce` → static fallbacks.

## 7. Page-by-page

- **Splash** — starfield + parallax, Fraunces name (kinetic reveal), short intro, magnetic **Enter** → warp transition.
- **Hub** — starfield continues; section links (CV / Work / Contact) as large animated entries with hover energy + cursor glow. No boxes (per standing preference).
- **CV** — cosmic mesh-gradient bg; content as **scroll-revealed sections**: education, skills (animated skill groups), languages, **CV PDF download** + photo. Resolve the duplicate Contact block (carry-over TODO). Printable stylesheet retained.
- **Work** — cosmic bg + **project picker** (see §8). The headline interaction of the site.
- **ProjectDetail** — per-project page: summary, stack, **live demo embeds** (click-to-load iframes — Floating Waste, Airbnb), code links, and **Betsy** demo/docs buttons once inputs arrive (see §11).
- **Contact** — cosmic bg; email / LinkedIn / GitHub as animated, glow-on-hover rows.
- **NotFound** — on-theme starfield 404.

## 8. Work page = project picker (from the testimonials-carousel reference)

Repurpose the **stagger / testimonials carousel** (`vaib215/stagger-testimonials` / `ravikatiyar/testimonials`) as a **project showcase**: Betsy / Floating-Waste / Airbnb as large cards; the active card sits forward, others stagger behind; cycling brings the next forward; clicking a card opens its **ProjectDetail**. Keyboard + reduced-motion accessible. This is the primary remedy for "Work looks too simple."

## 9. Component architecture

**New / extracted**
- `Starfield.jsx` — ported from `starfield-1` (JSX, cool palette, warp-on-enter, perf-gated).
- `CosmicBackground.jsx` — `@paper-design/shaders-react` `MeshGradient` wrapper, recolored, perf-gated.
- `PageTransition.jsx` — `AnimatePresence` route wrapper.
- `ProjectCarousel.jsx` — stagger project picker.
- `MagneticButton.jsx` — magnetic + fill button primitive.
- `KineticHeading.jsx` — staggered reveal for Fraunces titles.

**Updated** — `TopBar`, `primitives`, all pages, `index.css`/`tailwind.config.js` (new tokens + fonts).

**Removed** — `ShaderWave.jsx` (three.js) and `ColorLine.jsx` (RGB line). **`three` dependency dropped** (the new backgrounds use raw canvas/WebGL + paper-design), shrinking the bundle.

## 10. Technical plan & risks

- **Porting** — referenced components are TSX/Next; convert to plain JSX, strip `"use client"` / `style jsx` / TS types. Low risk.
- **Performance** (primary risk — multiple full-screen animated canvases are GPU-heavy, esp. mobile):
  - Only **one** background instance active per page; pause via `requestAnimationFrame` stop when `document.hidden` or page off-screen.
  - Cap devicePixelRatio; throttle particle counts on small screens.
  - **Static gradient fallback** for `prefers-reduced-motion` and low-power devices.
  - Keep demo iframes **click-to-load** (already the case).
- **Dependencies** — add `@paper-design/shaders-react`; remove `three`. Net bundle impact verified during build.
- **Fonts** — self-host Fraunces + Clash Display woff2 alongside Space Grotesk.
- **Deploy** — unchanged: `main` = source, `npm run deploy` → `gh-pages` branch.
- **Theme toggle decision** — current light/dark toggle is awkward against a cosmic starfield. **Proposal: ship dark-only**, drop the toggle, retain a clean **print stylesheet** for the CV. (Flagged for review — §12.)

## 11. Content (unchanged source: `WEBSITE-CONTENT.md`)

Name, internship target, CV (study/skills/languages), three projects (Betsy, Floating-Waste, Airbnb), contact links — all carried over verbatim. Still to add: `cv.pdf`, profile photo.

## 12. Open items / inputs needed

1. **Betsy wiring (carry-over, blocked on user):** public demo URL (`*.onrender.com`, not the dashboard) + free-tier (→ "Open ↗" button) vs always-on (→ embeddable); and docs decision for the private `Betsy-Obsidian` repo (A: make public, B: publish via Quartz/Obsidian Publish, C: "available on request").
2. **CV duplicate Contact block** — remove/merge (carry-over TODO).
3. **Theme toggle** — confirm dark-only (recommended) vs keep light mode.
4. `cv.pdf` + photo assets.

## 13. Non-goals

- No single-page/scroll-jacked site (multi-page stays).
- No return of removed concepts: boxes, living-vine, stagger *hub* carousel, Instrument Serif, the old custom cursor.
- No rigid per-section red/green/blue scheme.
- No CMS/backend — static site on GH Pages.

## 14. Scratch artifact

`design-preview.html` at repo root is a throwaway font/color preview — **delete before deploy** (it is not part of the Vite build, so harmless if left, but should be removed).
