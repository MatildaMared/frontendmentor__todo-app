const base = {
	breakpoints: {
		mobile: "23.43rem",
		desktop: "90rem",
	},
	maxContentWidth: "540px",
};

export const lightTheme = {
	...base,
	background: "#FAFAFA",
	todoBackground: "#FFF",
	grayMedium: "#9495A5",
	text: "#393A4B",
	boxShadow: "0 35px 50px rgba(194, 195, 214, 0.5)",
	outline: "2px solid #E6E6F2"
};

export const darkTheme = {
	...base,
	background: "#171823",
	todoBackground: "#25273D",
	grayMedium: "#767992",
	text: "#C8CBE7",
	boxShadow: "0px 35px 50px rgba(0, 0, 0, 0.5)",
	outline: "2px solid #C8CBE7",
};
