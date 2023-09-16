/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			padding: "20px",
			center: true
		},
		extend: {
			screens: {
				"2xl": "1536px",
				xl: "1280px",
				sxl: "1180px",
				"2lg": "1040px",
				lg: "992px",
				md: "768px",
				"2smd": "634px",
				smd: "534px",
				sm: "480px"
			},

			colors: {
				lightblack: "#3B3C40",
				lightwhite: "#F2F2F0",
				lightred: "#FF6D6D"
			},
			fontFamily: {
				Montserrat: "Montserrat",
				Sofia: "Sofia Sans",
				Rembank: "Rembank",
				Felidae: "Felidae"
			},

			fontSize: {
				sm: "1rem",
				lg: "3rem",
				base: "1.5rem",
				logo: "2.25rem",
				xl: "8rem",
				big: "215px",
				sbig: "164px",
				"2big": "286px",
				decor: "132px",
				"10px": "10px",
				"25px": "25px"
			},
			spacing: {
				"10px": "10px",
				"25px": "25px",
				"50px": "50px"
			},
			transitionDelay: {
				DEFAULT: "1000"
			},
			transitionTimingFunction: {
				DEFAULT: "ease-out"
			},
			borderRadius: {
				DEFAULT: "15px",
				btn: "7px"
			},
			borderColor: {
				DEFAULT: "#F2F2F0"
			},
			transitionProperty: {
				drop: "opacity, translate",
				spacing: "margin, padding"
			}
		}
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio")
	]
};
