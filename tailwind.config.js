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
    extend: {}
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ['emerald', 'dracula']
  }
}
