module.exports = {
	content: ["./*.html"],
	theme: {
		extend: {
			colors: {
				"brand-purple": "#2c2235",
				"brand-pink": "#d3bebd",
				"light-pink": "#f8f3f0",
				"brand-indigo": "#72569d",
			},
			fontFamily: {
				pacifico: "Pacifico, cursive",
				"open-sans": "'Open Sans', sans-serif",
				poppins: "'Poppins', sans-serif",
				"luckiest-guy": "'Luckiest Guy', cursive",
				mulish: "'Mulish', sans-serif",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
