/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Space Grotesk Variable', 'sans-serif'],
				serif: ['DM Sans Variable', 'sans-serif'],
				display: ['Epilogue Variable', 'sans-serif']
			},
			colors: {
				primary: '#0C0C0C',
				accent: '#9747FF'
			}
		}
	},
	plugins: []
};
