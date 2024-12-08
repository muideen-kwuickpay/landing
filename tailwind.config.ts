import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#151515",
        foreground: "#332f37",
        primary: "#0f0f0f",
        secondary: "#e9ebdf",
        tertiary: "#f2f2f2",
        quaternary: "#9a9eaa33",
        accentRed: "#ff552a",
        muted: "#cbccc4",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      maxWidth: {
        standard: "75.5rem",
      }
    },
  },
  plugins: [],
};
export default config;
