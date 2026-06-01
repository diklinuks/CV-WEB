# Portfolio Content — Tymur Abdurakhmanov

Single source of truth for everything that goes on the portfolio site.
Reusable across chats: paste this in when you want an AI to know who you are
and what to put where. Sections map to the site: Identity → CV → Work → Contact.

> Legend: ✅ confirmed · ⚠️ NEEDS CONFIRMATION (I inferred this — fix or verify) ·
> ✍️ PLACEHOLDER (write this yourself)

---

## 0. The one-liner (positioning)

> AI & Machine Learning student at Fontys (Eindhoven), focused on generative AI.
> Looking for a September 2026 internship in the Netherlands.

**Why anyone reading this should care:** builds real, working AI — LLM agents,
computer-vision models, and ML pipelines — not just coursework. Two projects
have live in-browser demos.

---

## 1. Identity / Hero

| Field | Value |
| --- | --- |
| Name | Tymur Abdurakhmanov ✅ |
| Role | AI & Machine Learning student · focused on Generative AI ✅ |
| Location | Eindhoven, Netherlands ✅ |
| Availability | Internship from **September 2026** ✅ |
| Work eligibility | **Nuffic-eligible**, comfortable working in English ✅ |
| Open to | Amsterdam / Rotterdam / Eindhoven corridor ✅ |

Hero headline options (pick one voice):
- "Building with generative AI."
- "AI & Machine Learning student, focused on generative AI."
- "I build LLM agents, RAG systems, and computer-vision pipelines." ✍️ choose

---

## 2. About / Summary

> AI & ML student at Fontys University of Applied Sciences (Eindhoven), focused
> on generative AI: LLM agents, retrieval-augmented systems, and the engineering
> around them. Currently building an autonomous procurement agent (Betsy), a
> browser-based floating-waste detection model, and an Airbnb price-prediction
> model with an interactive map.
>
> Looking for a September 2026 internship in the Netherlands, ideally on a team
> doing applied generative AI. Nuffic-eligible, English-fluent.

✍️ Rewrite this in your own voice eventually — it's a solid draft, not final.

---

## 3. CV

### Education
- **BSc Applied AI & Machine Learning** — Fontys University of Applied Sciences, Eindhoven ⚠️ confirm exact program name
- Dates: 2024 – 2028 (expected) ⚠️ confirm
- Relevant coursework: machine learning, deep learning, computer vision, generative AI, software engineering, data engineering ⚠️ confirm/trim

### Experience
- First internship: September 2026 (upcoming). Until then, the Work section is the evidence. ✍️ add anything real (part-time, freelance, hackathons, teaching)

### Skills
- **AI & ML:** PyTorch, LangChain, LangGraph, RAG, YOLO, OpenCV, scikit-learn, pgvector, MCP ✅
- **Languages (code):** Python, SQL, JavaScript ✅
- **Tools:** Git, Linux, Docker, FastAPI, PostgreSQL ✅

### Spoken languages
- English — professional working proficiency ⚠️ confirm level
- Dutch — A2 / learning ⚠️ confirm (NL recruiters check)
- Russian — native ⚠️ confirm

### Files
- `cv.pdf` — ✍️ drop into the site so the "Download CV/PDF" button works
- Profile photo — ✍️ square, clean background

---

## 4. Work / Projects

### 4a. Betsy — Autonomous procurement agent
- **What:** A single ReAct LLM agent that runs procurement for a small
  manufacturer over a 90-day simulation — monitors inventory, evaluates
  suppliers on price/lead-time/reliability, places purchase orders, reconciles
  invoices, learns from outcomes, and pauses for human approval on high-value
  decisions.
- **How it's built:** LangGraph `create_react_agent`; tools exposed via an MCP
  server; Gemini 2.5 Flash *proposes*, code *enforces* (caps, blocked suppliers,
  append-only audit log, DB writes); memory in PostgreSQL + pgvector (learned
  lessons embedded so it doesn't repeat mistakes); FastAPI "Jenny" dashboard for
  the human operator.
- **Tech:** LangGraph · MCP · Gemini 2.5 Flash · PostgreSQL/pgvector · FastAPI · Python 3.12 · Docker ✅
- **Code:** https://github.com/diklinuks/Betsy-App ✅
- **Design docs:** https://github.com/diklinuks/Betsy-Obsidian ⚠️ currently PRIVATE — make public to link
- **Demo:** none (LLM backend) — use a screen-recording video if you want ✍️

### 4b. Floating Waste Detection
- **What:** A YOLO-family computer-vision model that detects floating waste
  (bottles, plastic, debris) in surface water. Runs **live in the browser** —
  inference happens on the visitor's machine, no server.
- **Tech:** Python · PyTorch · YOLO · OpenCV · in-browser inference ✅
- **Code:** https://github.com/diklinuks/waste-detector ✅
- **Live demo:** https://diklinuks.github.io/waste-detector/#demo ✅
- ✍️ "What surprised me" — one concrete thing you learned (dataset gotcha,
  false-positive class, browser-export quirk)

### 4c. Airbnb Price Prediction
- **What:** A machine-learning model that predicts short-stay listing prices
  from listing features + location, with an interactive map. ⚠️ confirm exact
  target/dataset/city
- **Tech:** Python · scikit-learn · Pandas · Leaflet/map · JavaScript ✅ (⚠️ confirm)
- **Code:** https://github.com/diklinuks/Airbnb-Machine-learning ✅
- **Live demo:** https://diklinuks.github.io/Airbnb-Machine-learning/web/#map-section ✅
- ✍️ Data source, cleaning, best model + metric (RMSE/MAE/R²), what surprised you

### (cut for now) Brunel — job-posting predictor
- Held back: data may be confidential to the company. ✅ decision made

---

## 5. Contact

| Channel | Value |
| --- | --- |
| Email | abdurakhmanovtimur472@gmail.com ✅ (⚠️ or timurchikonelove0@gmail.com — pick one) |
| LinkedIn | https://www.linkedin.com/in/diklinuks/ ⚠️ confirm the real slug |
| GitHub | https://github.com/diklinuks ✅ |

---

## 6. Site facts (for whoever builds/edits it)

- **Repo:** https://github.com/diklinuks/CV-WEB
- **Live:** https://diklinuks.github.io/CV-WEB/
- **Stack:** React + Vite + Tailwind + Framer Motion; deploys to GitHub Pages
  (`main` = source, `gh-pages` = built site, `npm run deploy`)
- **Audience:** Dutch tech recruiters + AI/ML hiring managers (Booking, Adyen,
  ING, Philips, ASML, Amsterdam AI scaleups)
- **Sections:** Identity/Hero · Work (with live demos) · CV · Contact
- **Tone:** direct, technical, no marketing fluff, no buzzwords, no exclamation
  marks, no emoji. Show the work, don't claim traits.

---

## 7. Open to-dos (verify before sending the link to recruiters)
- [ ] Add `cv.pdf` and a profile photo
- [ ] Confirm: program name + dates, Dutch level, LinkedIn slug, which email
- [ ] Confirm the Airbnb project framing (target, dataset, metric)
- [ ] Write the "what surprised me" notes for the two ML projects
- [ ] Make Betsy-Obsidian public (if you want to link the design docs)
