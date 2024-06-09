import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: "'ui-sans-serif', 'system-ui'",
      serif: "'ui-serif', 'Georgia'",
      mono: "'ui-monospace', 'SFMono-Regular'",
      space: '"Space Grotesk", sans-serif'
    },
    extend: {
      animation: {
        meteor: 'meteor 5s linear infinite'
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0
          }
        }
      }
    }
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ['emerald', 'dracula']
  }
}
