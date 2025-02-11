import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mb: "780px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        "70-b": [
          "70px",
          {
            fontWeight: 800,
            lineHeight: "85px",
            letterSpacing: "-0.8px",
          },
        ],
        "40-b": [
          "40px",
          {
            fontWeight: 800,
            lineHeight: "55px",
            letterSpacing: "-0.8px",
          },
        ],
        "30-b": [
          "30px",
          {
            fontWeight: 800,
            lineHeight: "40px",
            letterSpacing: "-0.8px",
          },
        ],
        "20-b": [
          "20px",
          {
            fontWeight: 800,
            lineHeight: "40px",
            letterSpacing: "-0.8px",
          },
        ],
        "20-l": [
          "20px",
          {
            fontWeight: 400,
            lineHeight: "40px",
            letterSpacing: "-0.8px",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
