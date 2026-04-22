/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jl-navy': 'oklch(0.22 0.07 245)',
        'jl-navy-dark': 'oklch(0.15 0.06 245)',
        'jl-navy-light': 'oklch(0.32 0.07 245)',
        'jl-orange': '#7db8ff',
        'jl-orange-dark': '#5792e6',
        'jl-orange-light': '#c4e0ff',
        'jl-cream': '#ffffff',
        'jl-cream-dark': '#f5fbff',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'source-sans': ['Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
