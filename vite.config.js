import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must match the GitHub Pages project path.
// Repo "CV-WEB" -> served at /CV-WEB/. If you later rename the repo to
// "diklinuks.github.io", change base to "/".
export default defineConfig({
  base: "/CV-WEB/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
