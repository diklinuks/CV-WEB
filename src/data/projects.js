
export const projects = [
  {
    slug: "betsy",
    name: "Betsy",
    tagline: "An AI agent that runs purchasing for a small manufacturer.",
    lead:
      "Betsy handles procurement across a 90-day simulation. She watches stock, reorders before things run out, picks suppliers, places orders, and asks a human before the big decisions.",
    tags: ["LangGraph", "MCP", "Gemini", "pgvector", "FastAPI", "Python"],
    repo: "https://github.com/diklinuks/Betsy-App",
    demo: "https://betsy-s4fe.onrender.com",
    demoEmbed: false,
    demoNote: "Free hosting, so the demo can take ~30 seconds to wake up.",
    docs: "https://github.com/diklinuks/Betsy-Obsidian",
    year: "2025",
    sections: [
      { type: "h", text: "What it does" },
      {
        type: "p",
        text:
          "Betsy runs the buying for a small manufacturer across a 90-day simulation. She tracks stock and reorders before items run out, scores suppliers on price, lead time and reliability, places orders with the best ones, follows deliveries and invoices, and pauses for a human on anything large or unusual.",
      },
      { type: "h", text: "How the demo works" },
      {
        type: "p",
        text:
          "There is a dashboard where you run the simulation day by day, approve or reject the decisions she flags, read the full audit log, tune how she scores suppliers, and see the final report. Rejecting a decision needs a reason, and that reason becomes a lesson she remembers next time. The full write-up and design notes live in the documentation.",
      },
      { type: "h", text: "Technical choices" },
      {
        type: "p",
        text:
          "Betsy is one LangGraph agent with its tools behind an MCP server. Gemini proposes the next move, but the real decisions, the spending caps and every database write live in code, not in the model. Structured data sits in PostgreSQL and her reasoning and past lessons sit in pgvector, so before a similar order she pulls up what she learned last time. The hard limits, like spend caps, blocked suppliers and an append-only audit log, are enforced in code, and she cannot work around them.",
      },
      { type: "h", text: "What's next" },
      {
        type: "p",
        text:
          "Wider scenarios beyond the 90-day run, a sharper supplier-scoring model, and a smoother approval flow for the person supervising her.",
      },
    ],
  },

  {
    slug: "waste-detection",
    name: "Floating Waste Detection",
    tagline: "A computer-vision model that finds floating waste in water.",
    lead:
      "I trained a model to spot floating waste in water. It runs live in your browser and scores video frame by frame, with nothing sent to a server.",
    tags: ["Python", "PyTorch", "YOLOv8", "OpenCV", "In-browser"],
    repo: "https://github.com/diklinuks/waste-detector",
    demo: "https://diklinuks.github.io/waste-detector/#demo",
    demoLabel: "diklinuks.github.io/waste-detector",
    year: "2025",
    sections: [
      { type: "h", text: "What it does" },
      {
        type: "p",
        text:
          "It finds floating waste like bottles, cans, cartons, plastic and paper in water, and draws a box around each piece it spots with a confidence score.",
      },
      { type: "h", text: "How the demo works" },
      {
        type: "p",
        text:
          "The trained model loads straight into the page and runs on your own machine. Give it an image or a video and it scores it frame by frame. Nothing is uploaded.",
      },
      { type: "h", text: "Technical choices" },
      {
        type: "p",
        text:
          "I built a custom dataset of about 9,000 images, then trained and compared seven models, from Random Forest and SVM up to YOLO, and kept the best (mAP@50 around 0.87). I augmented for glare and reflections so it holds up on real water, not just clean sample shots.",
      },
      { type: "h", text: "What's next" },
      {
        type: "p",
        text:
          "Better results on low-light and reflective water, faster in-browser inference, and an evaluation set built from real footage rather than curated images.",
      },
    ],
  },

  {
    slug: "airbnb-ml",
    name: "Amsterdam Airbnb",
    tagline: "Price and market analysis for Amsterdam short-stay listings.",
    lead:
      "I set out to predict nightly prices for Amsterdam listings, found the data could not carry it, and turned the project into a market-segmentation map instead.",
    tags: ["Python", "scikit-learn", "Pandas", "SHAP", "Leaflet"],
    repo: "https://github.com/diklinuks/Airbnb-Machine-learning",
    demo: "https://diklinuks.github.io/Airbnb-Machine-learning/web/#map-section",
    demoLabel: "diklinuks.github.io/Airbnb-Machine-learning",
    year: "2025",
    sections: [
      { type: "h", text: "What it does" },
      {
        type: "p",
        text:
          "It looks at about 7,800 Amsterdam listings, estimates a nightly price from their features, and shows the result on an interactive map.",
      },
      { type: "h", text: "How the demo works" },
      {
        type: "p",
        text:
          "A map in the browser reads the exported predictions and clusters and plots them, served as a static site on GitHub Pages.",
      },
      { type: "h", text: "Technical choices" },
      {
        type: "p",
        text:
          "I engineered the features in Pandas and compared several regression models. The best only reached an R² of about 0.23, so I used SHAP to show why the features fall short, then switched to clustering the listings into five market segments and put those on the map.",
      },
      { type: "h", text: "What's next" },
      {
        type: "p",
        text:
          "Richer features such as seasonality, events and finer location detail, a cleaner segmentation, or a target the data can actually support.",
      },
    ],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
