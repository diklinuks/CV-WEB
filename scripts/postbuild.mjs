// Post-build step for GitHub Pages.
//
// GH Pages knows nothing about SPA routes: a direct hit on /CV-WEB/cv used to
// fall through to 404.html (HTTP 404 — bad for SEO and link previews). Writing
// a real dist/<route>/index.html per route makes every deep link a proper 200,
// and lets each page carry its own <title>/description/canonical.
// The route list below is the single source of truth for both the HTML copies
// and sitemap.xml.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";

const ORIGIN = "https://diklinuks.github.io";
const BASE = "/CV-WEB/";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const routes = [
  {
    path: "cv",
    title: "Tymur Abdurakhmanov — CV",
    desc: "CV of Tymur Abdurakhmanov — second-year AI & ML student at Fontys, Eindhoven, focused on generative AI and LLM agents. Available for an internship Sep 2026 – Feb 2027 in the Netherlands.",
    priority: "0.9",
  },
  {
    path: "projects",
    title: "Projects — Tymur Abdurakhmanov",
    desc: "Projects by Tymur Abdurakhmanov: an autonomous procurement agent, a multi-agent marketing team, floating-waste computer vision, and Amsterdam Airbnb market analysis — each with a live demo.",
    priority: "0.9",
  },
  ...projects.map((p) => ({
    path: `projects/${p.slug}`,
    title: `${p.name} — Tymur Abdurakhmanov`,
    desc: p.tagline,
    priority: "0.7",
  })),
  {
    path: "contact",
    title: "Contact — Tymur Abdurakhmanov",
    desc: "Get in touch with Tymur Abdurakhmanov — email, LinkedIn, GitHub. Looking for a September 2026 internship in the Netherlands.",
    priority: "0.5",
  },
  {
    path: "menu",
    title: "Menu — Tymur Abdurakhmanov",
    desc: "Choose a section: CV, projects with live demos, or contact.",
    sitemap: false,
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

const template = readFileSync(join(dist, "index.html"), "utf8");

// 404.html keeps the untouched template: it answers for unknown URLs and must
// not claim any canonical.
writeFileSync(join(dist, "404.html"), template);

const pageHtml = ({ title, desc, url }) =>
  template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(
      "</head>",
      `  <link rel="canonical" href="${url}" />\n    <meta property="og:url" content="${url}" />\n  </head>`
    );

for (const r of routes) {
  const url = `${ORIGIN}${BASE}${r.path}/`;
  const dir = join(dist, ...r.path.split("/"));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pageHtml({ ...r, url }));
}

// Root page: same template plus canonical/og:url.
writeFileSync(
  join(dist, "index.html"),
  template.replace(
    "</head>",
    `  <link rel="canonical" href="${ORIGIN}${BASE}" />\n    <meta property="og:url" content="${ORIGIN}${BASE}" />\n  </head>`
  )
);

const sitemapEntries = [
  `  <url><loc>${ORIGIN}${BASE}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>`,
  ...routes
    .filter((r) => r.sitemap !== false)
    .map(
      (r) =>
        `  <url><loc>${ORIGIN}${BASE}${r.path}/</loc><changefreq>monthly</changefreq><priority>${r.priority}</priority></url>`
    ),
];
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join("\n")}\n</urlset>\n`
);

console.log(`postbuild: ${routes.length} route pages, 404.html, sitemap.xml`);
