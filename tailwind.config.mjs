/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(270deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(270deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      colors: {},
    },
    fontFamily: {
      sans: "'ui-sans-serif', 'system-ui'",
      serif: "'ui-serif', 'Georgia'",
      mono: "'ui-monospace', 'SFMono-Regular'",
      asimovian: "'Asimovian', 'sans-serif'",
      zilla: "'Zilla Slab', serif",
      space: "'Space Grotesk', sans-serif",
      varela: "'Varela', sans-serif",
    },
  },
};
