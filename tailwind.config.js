/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['Space Grotesk Variable', 'sans-serif'],
				serif: ['DM Sans Variable', 'sans-serif']
			},
			colors: {
				primary: '#0C0C0C',
				accent: '#9747FF'
			}
		}
	},
	plugins: []
};
