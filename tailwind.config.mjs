const plugin = require("tailwindcss/plugin")
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette")
const svgToDataUri = require("mini-svg-data-uri")

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		extend: {
			colors: {
				lightBg: '#E1E1E1',
				darkBg: '#0A0A0A',
				lightText: '#0A0A0A',
				darkText: '#E1E1E1',
			},
			fontFamily: {
				termina: 'Termina, sans-serif',
				dmSerif: 'DM Serif Text, serif',
				poppins: 'Poppins, sans-serif',
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="${value}" fill="none"><path d="M64 0H0V64"/></svg>`,
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: ["color"],
				},
			)

			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundSize: value,
					}),
				},
				{
					values: theme("spacing"),
					type: ["number", "length", "any"],
				},
			)
		}),
	],
}
