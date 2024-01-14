/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'green': 'rgb(51, 75, 53)',
        'orange': 'rgb(255, 168, 6)',
        'cream': 'rgb(246, 238, 225)',
        'd-orange': 'rgb(254, 94, 50)',
      },
      fontFamily: {
        'times': "Georgia, 'Times New Roman', Times, serif"
      },
    },
  },
  plugins: [],
}
