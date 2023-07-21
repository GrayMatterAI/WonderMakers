/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				WMBG: {
					DEFAULT: '#F4C69B'
				}
			}
		},
		fontFamily: {
			body: ['Luckiest Guy', 'Potta One']
		}
	},
	plugins: []
};
