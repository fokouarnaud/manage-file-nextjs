module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
