import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050816",
        panel: "rgba(12, 18, 35, 0.72)",
        cyan: "#5eead4",
        violet: "#8b5cf6",
        signal: "#38bdf8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Space Grotesk", "JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(94, 234, 212, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.28)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(94, 234, 212, 0.16), transparent 28%), radial-gradient(circle at 78% 10%, rgba(139, 92, 246, 0.17), transparent 25%), radial-gradient(circle at 50% 80%, rgba(56, 189, 248, 0.12), transparent 28%)"
      }
    }
  },
  plugins: []
};

export default config;
