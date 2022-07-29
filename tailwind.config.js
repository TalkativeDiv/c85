/** @type {import('tailwindcss').Config} */
let flowbite = require("flowbite/plugin");
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
	plugins: [flowbite],
};
