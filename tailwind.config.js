/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./pages/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'tri-ink': '#0b0b0d',
        'tri-graphite': '#1f1f23',
        'tri-slate-1': '#2b2f35',
        'tri-slate-2': '#3b4046',
        'tri-cool-blue': '#6b7b89'
      }
    }
  },
  plugins: []
}