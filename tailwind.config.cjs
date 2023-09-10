/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				'open-menu': {
				  '0%': { transform: 'skaleY(0)' },
				  '80%': { transform: 'skaleY(1.2)' },
				  '100%': { transform: 'skaleY(1)' },
				},
			  },
			animation: {
				'open-menu': 'open-menu 0.5s ease-in-out forwards',
			  },
			bgGradientDeg: {
				50: '50deg',
				55: '55deg',
				65: '65deg',
				75: '75deg',
			},
			colors:{
				'theme-dark': '#000',
				'theme-light': '#fff',
				'black-dark': '#2f2f2f',
				'black-light': '#464545',
				'grey-light': '#e9e9e9',
				'grey-hover': '#e6e4e4',
				'pumpkin': '#ff7518',
				'freelancer': '#B7CAD9',
				'orange-light': '#fed7aa',
				'orange-dark': '#fdba74',
				'pantone': '#258ca8',
				'blue-dark': '#67e8f9',
				'blue-light': '#a5f3fc',
				'blue-link': '#0000ee',
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			height: {
				'0.5':'0.125rem',
			},
			maxHeight:{
				'124':'31rem',
			},
			maxWidth:{
				'70':'17.5rem',
			},
			screens: {
				'xl': '1188px',
			},
			width: {
				"container": "1150px",
				'37': '9.25rem',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, addComponents, addUtilities, theme }) {
			addComponents({
				// Firefox Browser for item list button choose sign 
				'.scrollbar': {
					scrollbarWidth: "thin",
					scrollbarColor: "#d4d4d4 #e9e9e9",
				},
				// Chrome, EDGE, Opera, Others for item list button choose sign
				'.scrollbar::-webkit-scrollbar': {
					width: "4px",
				},
				'.scrollbar::-webkit-scrollbar-track': {
					backgroundColor: "#fff",
					borderRadius: "100vh",
				},
				'.scrollbar::-webkit-scrollbar-thumb': {
					background: "#d4d4d4",
					borderRadius: "100vh",
				},
				// Chrome, EDGE, Safari, Browser for filter date news page
				'.scroll-hidden::-webkit-scrollbar': {
					display: "none",
				},
				// Firefox Browser for filter date news page
				".hide-scrollbar": {
					scrollbarWidth: "none",

				},
			})
		}),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities({
				'bg-gradient': (angle) => ({
					'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
				}),
			},
				{
					values: Object.assign(
						theme('bgGradientDeg', {}),
						{
							10: '10deg',
							15: '15deg',
							20: '20deg',
							25: '25deg',
							30: '30deg',
							45: '45deg',
							60: '60deg',
							90: '90deg',
							120: '120deg',
							135: '135deg',
							150: '150deg',
						}
					)
				}
			)
		}),
	],
}
