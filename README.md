# Tymur Abdurakhmanov — Portfolio

Personal portfolio website. Multi-page, hand-written HTML and CSS,
hosted on GitHub Pages. No framework, no build step, no JavaScript,
no tracking.

## Live URL

After enabling GitHub Pages, the site publishes at:

  https://diklinuks.github.io/CV-WEB/

For the cleaner apex URL `https://diklinuks.github.io`, rename this
repo to `diklinuks.github.io`. For a custom domain, see "Custom
domain" at the bottom.

## Site map

```
/                          (index.html)       Main landing — short, points outward
/cv.html                                       Full CV: summary, education, skills, languages
/projects.html                                 Index of all projects
/projects/betsy.html                           Betsy detail page
/projects/floating-waste.html                  Floating Waste detail page
/404.html                                      Custom 404
```

## Enable GitHub Pages (one-time)

1. Open this repo on GitHub.
2. **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
4. Save. GitHub publishes within ~1 minute.

## What needs to happen before this site is "done"

The HTML files have `<!-- REPLACE: -->` comments wherever real content
needs to drop in. Search across files for `REPLACE` to find every spot.
Quick wins:

- [ ] Drop `cv.pdf` in the repo root (the "Download PDF" button on /cv.html links to it)
- [ ] Drop `assets/profile.jpg` (square, ~400×400, < 50KB). Then uncomment the `<img>` tag in `cv.html`.
- [ ] Rewrite the About/Summary in your own voice (currently a draft)
- [ ] Confirm your real Dutch level on `cv.html` (currently a guess)
- [ ] Confirm your real LinkedIn URL slug everywhere (currently a guess: `/in/diklinuks/`)
- [ ] Add real content to `/projects/floating-waste.html` — it's currently mostly placeholder text
- [ ] Add the Floating Waste GitHub repo URL when ready
- [ ] If `Betsy-Obsidian` becomes public, uncomment the "Design docs" link on `/projects/betsy.html`

## Adding a new project

The site is set up so this takes about 5 minutes.

1. **Create a detail page.** Copy `/projects/floating-waste.html` to
   `/projects/your-project-slug.html` and edit:
   - `<title>` and meta tags
   - The page head (breadcrumb, title, sub)
   - Tech tags
   - The article body
   - The repo link button

2. **Add a card to the index.** Open `/projects.html`, find the
   `<!-- NEW PROJECT TEMPLATE -->` comment, copy the block above it,
   paste a new `<li>` with the right name, tagline, tags, and href.

3. **(Optional) Add a card to the homepage teaser.** Open
   `/index.html`, find the `<ul class="project-cards">` block in the
   "Currently building" section, add a new `<li>` if you want this
   project featured on the landing page.

4. Commit and push.

## Updating other content

| Want to change                | Where                                                    |
| ----------------------------- | -------------------------------------------------------- |
| Name, headline, availability  | `index.html` → `<section class="hero">`                  |
| Featured projects on homepage | `index.html` → `<section ... aria-labelledby="featured-title">` |
| CV summary text               | `cv.html` → `<section ... aria-labelledby="summary-label">` |
| Education entries             | `cv.html` → `<section ... aria-labelledby="edu-label">`  |
| Skills                        | `cv.html` AND `index.html`                               |
| Languages spoken              | `cv.html` → `<section ... aria-labelledby="lang-label">` |
| Contact links                 | `index.html` AND `cv.html` (both have a contacts list)   |
| Site nav                      | `<nav class="site-nav">` block in every HTML file (manual sync — no templating without a build) |

## Assets

Drop files in `assets/`:

| Path                          | What                                                   |
| ----------------------------- | ------------------------------------------------------ |
| `cv.pdf` (repo root)          | Your CV. Linked from the "Download PDF" button.        |
| `assets/profile.jpg`          | Square photo (~400×400, < 50KB, WebP preferred)        |
| `assets/floating-waste.png`   | Optional Floating Waste thumbnail                      |

Optimize images before committing — aim for < 50KB each.

## Page transitions

The site uses the modern **View Transitions API** for smooth fades
between pages. One CSS rule does it all:

```css
@view-transition { navigation: auto; }
```

Supported in Chrome 126+, Edge 126+, Safari 18.2+. Firefox falls back
to instant navigation — no error, no broken state, just no animation.
This is intentional progressive enhancement: the site works for
everyone, looks slick for most.

## Custom domain

Once you own a domain (e.g., `tymurabdurakhmanov.com`):

1. Create a `CNAME` file in the repo root containing only your domain
   (no `http://`, no trailing slash). Commit and push.
2. At your domain registrar, add DNS records pointing to GitHub Pages:
   - `A` records on the apex: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` from `www`: `diklinuks.github.io`
3. In **Settings → Pages**, set the custom domain and enable HTTPS.

All asset paths in the site are relative, so the same code works at
`diklinuks.github.io/CV-WEB/` and at your custom domain — no code
changes needed.

**Note on `404.html`:** the 404 uses absolute paths (`/CV-WEB/...`)
because GitHub Pages serves it from the domain root when a path is
not found. If you switch to a custom domain at the root (no subpath),
update those `/CV-WEB/` references to `/`.

## Performance budget

- Each page weight (HTML+CSS): < 30 KB
- Initial render: < 1s on 4G
- Lighthouse Performance: ≥ 95
- Lighthouse Accessibility: 100
- Shared CSS file is cached after the first page load

## Tech notes

- **No framework.** No build step. No JavaScript at all in V1.
- **Multi-page architecture.** Each section is its own `.html` file.
  Shared `style.css` linked from every page.
- **Page transitions** via the View Transitions API (CSS only).
- **Dark mode** via `prefers-color-scheme` — follows OS setting.
- **System font stack** — no web font download.
- **Smooth scrolling** via CSS only.
- **Sticky header** with backdrop blur.
- **Accessible:** semantic HTML, skip links on every page, focus
  styles, AA contrast, respects `prefers-reduced-motion`.

## License

Code in this repository is MIT-licensed (do what you want with it).
The content (text, project descriptions, CV, identity) is not —
please don't lift it as your own portfolio.
