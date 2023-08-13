/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
			},
			maxWidth:{
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
