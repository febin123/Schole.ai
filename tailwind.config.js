/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        completed: '#10B981',
        ongoing: '#F59E0B',
        recommended: '#3B82F6',
      }
    },
  },
  plugins: [],
}