/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "max-xxl": { max: "1399px" },
      "max-xl": { max: "1199px" },
      "max-lg": { max: "991px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "575px" },
      "max-xs": { max: "400px" },
    },
    extend: {
      fontFamily: {
        sora: ['Sora', 'serif']
      },
      colors: {
        'custom-black': '#111111',
        'custom-white': '#fff',
        'custom-green': '#179800',
        'custom-ass': '#EFEBE3',
      },
      animation: {
        slideIn: 'slideIn 1s ease-out forwards', // Runs once and stays at the final position
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' }, // Start off-screen to the left
          '100%': { transform: 'translateX(0)' },    // End at the original position
        },
      },
    },
  },
  plugins: [],
};
