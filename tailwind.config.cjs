/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				sixty: 'white',
				thirty: '#f3f4f6',
				ten: '#fdd308',
			},
			screens: {
				ultraxs: '1px',
				xxs: '360px',
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
}
