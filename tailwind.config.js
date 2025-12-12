
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        
        signature: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}