/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"ZCOOL XiaoWei"', '"Noto Serif SC"', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
        },
        paper: '#f5f2eb', // Warm rice paper color
        ink: '#2c2c2c',   // Soft ink black
        festive: '#c12c1f', // Traditional red
        earth: '#8c7b75', // Earthy brown/grey
      }
    },
  },
  plugins: [],
}
