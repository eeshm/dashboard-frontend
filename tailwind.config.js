// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: { xl: '20px' },
      colors: {
        primary: '#4F46E5',
        pink: '#FEE2E2',
        orange: '#FEF3C7',
        green: '#DCFCE7',
        purple: '#EDE9FE',
      },
      fontFamily: { inter: ['Inter', 'sans-serif'] }
    },
  },
  plugins: [],
}
