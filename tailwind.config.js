/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ensure all src files are checked
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Noto Sans", "sans-serif"],
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#f3f4f6',
        accent: '#10b981',
        textPrimary: '#111827',
        textSecondary: '#6b7280',
      },
    },
  },
  plugins: [],
}

