/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        primary: '#fbbf24', // amarelo
        'primary-foreground': '#000000',
        muted: '#27272a',
        'muted-foreground': '#a1a1aa',
        border: '#3f3f46',
      },
    },
  },
  plugins: [],
}