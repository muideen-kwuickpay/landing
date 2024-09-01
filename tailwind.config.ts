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
        bgColor: '#fafafa',
        primary: '#1d3208', // green-dark
        primaryLight: '#65da7c',
        primaryGrey: 'hsla(0, 0%, 40%, 1)',
        textLight: 'rgba(255,255,255,0.75)',
        bgHover: '#383838',
        gridGuide: 'hsla(0, 0%, 92%, 1)',
        brand: '#054f31'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      maxWidth: {
        'standard': '100rem',
        'heroW': '38.75rem'
      },
      borderRadius: {
        normal: '120px',
        large: '128px',
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
};
export default config;
