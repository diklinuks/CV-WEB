/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        elevated: "var(--bg-elevated)",
        sunken: "var(--bg-sunken)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-muted": "var(--ink-muted)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        cyan: "var(--cyan)",
        violet: "var(--violet)",
        magenta: "var(--magenta)",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        clash: ['"Clash Display"', '"Space Grotesk"', "ui-sans-serif", "sans-serif"],
        fraunces: ['"Fraunces Variable"', "ui-serif", "Georgia", "serif"],
        mono: ["ui-monospace", "SF Mono", "JetBrains Mono", "Menlo", "Consolas", "monospace"],
      },
      maxWidth: { content: "60rem", wide: "75rem" },
      transitionTimingFunction: { fluid: "cubic-bezier(0.32,0.72,0,1)" },
      keyframes: {
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "0%": { backgroundPosition: "200% 50%" }, "100%": { backgroundPosition: "-200% 50%" } },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-560px)", opacity: "0" },
        },
      },
      animation: {
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        meteor: "meteor 6s linear infinite",
      },
    },
  },
  plugins: [],
};
