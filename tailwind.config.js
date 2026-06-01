/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "media", // auto-follow prefers-color-scheme
  theme: {
    extend: {
      colors: {
        paper: "var(--bg)",
        elevated: "var(--bg-elevated)",
        sunken: "var(--bg-sunken)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-muted": "var(--ink-muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        serif: ["Instrument Serif", "Iowan Old Style", "Palatino", "Georgia", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: {
        content: "60rem",
        wide: "72rem",
      },
    },
  },
  plugins: [],
};
