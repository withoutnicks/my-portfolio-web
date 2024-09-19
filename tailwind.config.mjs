/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			animation: {
				meteor: 'meteor 5s linear infinite',
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(270deg) translateX(0)', opacity: 1 },
					'70%': { opacity: 1 },
					'100%': {
						transform: 'rotate(270deg) translateX(-500px)',
						opacity: 0,
					},
				},
			},
			colors: {
				'well-red': {
					50: '#fcf5f4',
					100: '#f9edea',
					200: '#f4dad7',
					300: '#eabdb7',
					400: '#de968e',
					500: '#ce6d65',
					600: '#b84946',
					700: '#aa3c3c',
					800: '#813032',
					900: '#6f2c30',
					950: '#3d1416',
				},
				emerald: {
					50: '#f1fcf5',
					100: '#dff9e8',
					200: '#c1f1d1',
					300: '#91e4ae',
					400: '#59cf82',
					500: '#36bf66',
					600: '#25944c',
					700: '#20753e',
					800: '#1e5d35',
					900: '#1b4c2d',
					950: '#092a16',
				},
			},
		},
		fontFamily: {
			sans: "'ui-sans-serif', 'system-ui'",
			serif: "'ui-serif', 'Georgia'",
			mono: "'ui-monospace', 'SFMono-Regular'",
			space: '"Space Grotesk", sans-serif',
		},
	},
	plugins: [require('tailwindcss-animate')],
};
