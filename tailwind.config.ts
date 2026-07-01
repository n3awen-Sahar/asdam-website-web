import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050A1A",
        "midnight-deep": "#020712",
        "glass-white": "rgba(255,255,255,0.08)",
        silver: "#C0C8D8",
        chrome: "#A8B4C8",
        cyan: "#7ECFEA",
        "cyan-glow": "#00E5FF",
        graphite: "#1A1F2E",
        "graphite-light": "#252B3A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 50% 50%, #0A1628 0%, #050A1A 60%, #020712 100%)",
        "cyan-glow":
          "radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,229,255,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,229,255,0.6)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
