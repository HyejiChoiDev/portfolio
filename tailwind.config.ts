import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",
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
          },
        ],
        "50-b": [
          "50px",
          {
            fontWeight: 800,
          },
        ],
        "40-b": [
          "40px",
          {
            fontWeight: 800,
          },
        ],
        "40-l": [
          "40px",
          {
            fontWeight: 400,
          },
        ],
        "30-b": [
          "30px",
          {
            fontWeight: 800,
          },
        ],
        "20-b": [
          "20px",
          {
            fontWeight: 800,
          },
        ],
        "20-l": [
          "20px",
          {
            fontWeight: 400,
          },
        ],
        "18-l": [
          "18px",
          {
            fontWeight: 300,
          },
        ],
        "16-b": [
          "16px",
          {
            fontWeight: 800,
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
