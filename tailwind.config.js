/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        smartlime: {
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
        },
        smartteal: {
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        smartcyan: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        navy: {
          800: '#0f2b33',
          850: '#0a2027',
          900: '#06181e',
          950: '#030f14',
        },
        accent: {
          lime: '#84CC16',
          emerald: '#10B981',
          teal: '#0D9488',
          cyan: '#06B6D4',
          blue: '#0284C7',
          amber: '#F59E0B',
          coral: '#F43F5E',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          muted: '#F4F7FA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 14px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        'dropdown': '0 10px 38px -10px rgba(14, 23, 38, 0.18), 0 10px 20px -15px rgba(14, 23, 38, 0.1)',
        'glass': '0 8px 32px 0 rgba(14, 30, 60, 0.08)',
        'glow': '0 0 25px -5px rgba(14, 142, 233, 0.3)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      maxWidth: {
        'site': '1280px',
      }
    },
  },
  plugins: [],
}
