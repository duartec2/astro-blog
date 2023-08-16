/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lato': ['Lato', ...defaultTheme.fontFamily.sans],
				'syne': ['Syne', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				blob: "blob 15s infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(150px, -40px) scale(1.2)",
					},
					"66%": {
						transform: "translate(-30px, 150px) scale(0.9)",
					},
					"100%": {
						transform: "translate(0px, 0px) scale(1)",
					}
				},
			}
		},
	},
	plugins: [],
}
