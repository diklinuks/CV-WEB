# Tymur Abdurakhmanov — Portfolio

Personal portfolio site. Hand-written HTML and CSS, hosted on GitHub Pages.
No framework, no build step, no JavaScript, no tracking.

## Live URL

After enabling GitHub Pages (see below), the site publishes at:

  https://diklinuks.github.io/CV-WEB/

For the cleaner apex URL `https://diklinuks.github.io`, rename this
repo to `diklinuks.github.io`. For a custom domain, see "Custom domain"
at the bottom.

## Enable GitHub Pages (one-time)

1. Open this repo on GitHub.
2. **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
4. Save. GitHub publishes within ~1 minute.

## What needs to happen before this site is "done"

The HTML has clearly marked `<!-- REPLACE: -->` comments wherever real
content needs to drop in. Search the file for `REPLACE` to find them.
Quick checklist:

- [ ] Drop `cv.pdf` in the repo root (the "Download CV" button links to it)
- [ ] Rewrite the About section in your own voice (currently a draft)
- [ ] Replace the Floating Waste description with a real 2-3 sentence summary
- [ ] Add the Floating Waste GitHub repo URL when ready
- [ ] Replace the LinkedIn URL (currently a guess: `/in/diklinuks/`)
- [ ] If `Betsy-Obsidian` becomes public, uncomment the "Design docs" link in the Betsy project block
- [ ] (Optional) Add a profile photo — drop `assets/profile.jpg` and add an `<img>` reference in the hero

## Updating content

Everything lives in `index.html`. Sections are marked with big comment
banners. Common edits:

| Want to change          | Edit this part of `index.html`                                                  |
| ----------------------- | ------------------------------------------------------------------------------- |
| Name, headline, dates   | `<section class="hero">`                                                        |
| About text              | `<section id="about">`                                                          |
| Add a new project       | Copy any `<li class="project">` block inside `<ol class="projects">`. A template is included as a comment at the bottom of that section. |
| Skills                  | `<section id="skills">`                                                         |
| Contact links           | `<section id="contact">`                                                        |

## Adding assets

Drop files into `assets/`:

| Path                          | What                                                |
| ----------------------------- | --------------------------------------------------- |
| `cv.pdf` (repo root)          | Your CV. Linked from the hero "Download CV" button. |
| `assets/profile.jpg`          | Square photo (~400×400, < 50KB, WebP preferred)     |
| `assets/floating-waste.png`   | Optional Floating Waste thumbnail (600×400, < 50KB) |

Optimize images before committing — aim for < 50KB each.
On macOS: `cwebp -q 80 input.jpg -o output.webp`.

## Custom domain

Once you own a domain (e.g., `tymurabdurakhmanov.com`):

1. Create a file called `CNAME` in the repo root containing only your
   domain (no `http://`, no trailing slash). Commit and push.
2. At your domain registrar, add DNS records pointing to GitHub Pages:
   - `A` records on the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or `CNAME` from `www`: `diklinuks.github.io`
3. In **Settings → Pages**, set the custom domain and enable HTTPS.
   (HTTPS becomes available ~15 minutes after DNS propagates.)

All asset paths in the site are relative, so the same code works at
both `diklinuks.github.io/CV-WEB/` and your custom domain — no code
change needed.

## Performance budget

Current targets:

- Total page weight: < 30KB (excluding any future images)
- Initial render: < 1s on 4G
- Lighthouse Performance: ≥ 95
- Lighthouse Accessibility: 100

Before committing any heavy asset (custom font, image, etc.), check
the budget. The site stays fast because it stays small.

## Tech notes

- No framework. No build step. No JavaScript at all in V1.
- Dark mode via `prefers-color-scheme` — follows OS setting automatically.
- System font stack — no web font download.
- Smooth scrolling via CSS only (`scroll-behavior: smooth`).
- Sticky header with backdrop blur.
- Accessible: semantic HTML, skip link, focus styles, AA contrast,
  respects `prefers-reduced-motion`.

## License

Code in this repository is MIT-licensed (do what you want with it).
The content (text, project descriptions, CV, identity) is not —
please don't lift it as your own portfolio.
