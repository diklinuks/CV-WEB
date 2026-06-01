// Single source of truth for projects.
// Add a project: append an object here. It automatically appears on the
// homepage teaser, the /projects index, and gets its own /projects/<slug> page.
//
// section types: { type: "p", text } | { type: "h", text } |
//                { type: "ul", items: [...] } | { type: "code", text }

export const projects = [
  {
    slug: "betsy",
    name: "Betsy",
    tagline: "Autonomous procurement agent for a small manufacturer.",
    lead:
      "A single ReAct agent that monitors inventory, evaluates suppliers, places purchase orders, and learns from outcomes over a 90-day simulation — pausing for human approval on high-value decisions.",
    tags: ["LangGraph", "MCP", "Gemini 2.5 Flash", "pgvector", "FastAPI", "Python 3.12"],
    repo: "https://github.com/diklinuks/Betsy-App",
    demo: null,
    year: "2025",
    sections: [
      { type: "h", text: "What Betsy does" },
      {
        type: "p",
        text:
          "Betsy runs the procurement function for a small manufacturer. Each simulated day she watches inventory, decides when to reorder, weighs suppliers on price, lead-time, and reliability, places purchase orders, tracks deliveries, reconciles invoices, and reflects on each decision. High-value or unusual decisions pause for human approval instead of executing autonomously.",
      },
      { type: "h", text: "Architecture" },
      {
        type: "p",
        text:
          "The agent is a LangGraph create_react_agent with tools exposed through an MCP (Model Context Protocol) server, consumed via langchain-mcp-adapters. Gemini 2.5 Flash proposes actions; the actual decisions, caps, and writes are enforced in code, not by the model.",
      },
      { type: "h", text: "The split between LLM and code" },
      {
        type: "ul",
        items: [
          "LLM proposes — which supplier, how much, when.",
          "Code decides and enforces — caps, blocked-supplier lists, database writes, append-only audit log.",
          "LLM reflects — after an outcome it writes a lesson, embedded into the vector store.",
        ],
      },
      { type: "h", text: "Memory" },
      {
        type: "p",
        text:
          "Two layers. Structured data (suppliers, orders, deliveries, invoices) lives in PostgreSQL. Rationale and learned lessons live in pgvector. Before a similar reorder, Betsy retrieves relevant past lessons so she doesn't repeat mistakes.",
      },
      { type: "h", text: "The Jenny dashboard" },
      {
        type: "p",
        text:
          "A FastAPI web app where the human operator runs the simulation, watches it tick, approves or rejects flagged decisions, inspects the audit log, tunes scoring weights, and reads the final report. Rejections require a reason — and that reason becomes a learned lesson.",
      },
      { type: "h", text: "Ethics & safety" },
      {
        type: "p",
        text:
          "Hard guardrails enforced in code, not by the LLM: spending caps, blocked-supplier lists, an append-only audit log, and privacy projections on what the agent sees. The agent cannot bypass these regardless of what it proposes.",
      },
      { type: "h", text: "How to run it" },
      {
        type: "code",
        text:
          "docker compose up -d\npython3.12 -m venv .venv && source .venv/bin/activate\npip install -r requirements.txt\ncp .env.example .env  # paste your GEMINI_API_KEY\npython -m app.main load\nuvicorn app.web.main:app --reload --port 8000",
      },
    ],
  },

  {
    slug: "waste-detection",
    name: "Floating Waste Detection",
    tagline: "Computer-vision model that detects floating waste in water.",
    lead:
      "A YOLO-family model that finds floating waste in surface water — and runs live, right in your browser. No server: inference happens on your machine.",
    tags: ["Python", "PyTorch", "YOLO", "OpenCV", "In-browser inference"],
    repo: "https://github.com/diklinuks/waste-detector",
    demo: "https://diklinuks.github.io/waste-detector/#demo",
    demoLabel: "diklinuks.github.io/waste-detector",
    year: "2025",
    sections: [
      { type: "h", text: "What it does" },
      {
        type: "p",
        text:
          "An object-detection model from the YOLO family identifies floating waste — bottles, plastic fragments, larger debris — in images of surface water. The demo above loads the model into your browser and runs inference locally, with no server involved.",
      },
      { type: "h", text: "How the demo works" },
      {
        type: "p",
        text:
          "The trained model is exported to a web-friendly format and loaded in the browser. You give it an image, it runs a forward pass on your machine, and draws bounding boxes around detected waste with confidence scores. Nothing is uploaded — the inference is local.",
      },
      { type: "h", text: "Technical choices" },
      {
        type: "p",
        text:
          "YOLO over two-stage detectors because inference speed matters for footage and the accuracy trade-off is small. Training used augmentation for lighting and water-reflection variation, since real footage spans bright midday water, overcast afternoons, and glare — the cases that break models trained only on clean data.",
      },
      { type: "h", text: "What surprised me" },
      {
        type: "p",
        text:
          "REPLACE: one concrete thing you learned building this — a dataset gotcha, a class of false positives, or a quirk getting the model to run in the browser. Recruiters test for engineers who can articulate what they actually learned.",
      },
      { type: "h", text: "What's next" },
      {
        type: "p",
        text:
          "Better performance on low-light and reflective water, faster in-browser inference, and an evaluation set from real partner-organisation footage rather than curated data.",
      },
    ],
  },

  {
    slug: "airbnb-ml",
    name: "Airbnb Price Prediction",
    tagline: "ML model predicting short-stay listing prices, with a live map.",
    lead:
      "A machine-learning model that predicts short-stay listing prices from listing features and location, paired with an interactive map — live in your browser.",
    tags: ["Python", "scikit-learn", "Pandas", "Leaflet / map", "JavaScript"],
    repo: "https://github.com/diklinuks/Airbnb-Machine-learning",
    demo: "https://diklinuks.github.io/Airbnb-Machine-learning/web/#map-section",
    demoLabel: "diklinuks.github.io/Airbnb-Machine-learning",
    year: "2025",
    sections: [
      { type: "h", text: "What it does" },
      {
        type: "p",
        text:
          "REPLACE / confirm: the model estimates a listing's price from features such as location, room type, capacity, and availability. The interactive map plots listings geographically so you can see how predicted price varies across the area.",
      },
      { type: "h", text: "Data & model" },
      {
        type: "p",
        text:
          "REPLACE: which dataset, how it was cleaned, which model performed best, and the metric you evaluated on (RMSE / MAE / R²). Features were engineered in Pandas; several regression models were compared, with the best chosen on held-out error.",
      },
      { type: "h", text: "The map" },
      {
        type: "p",
        text:
          "REPLACE: how the front-end works — a static map library reading exported predictions, served on GitHub Pages.",
      },
      { type: "h", text: "What surprised me" },
      {
        type: "p",
        text:
          "REPLACE: one concrete learning — a feature that mattered more than expected, a data-quality problem, or a modelling trade-off.",
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
