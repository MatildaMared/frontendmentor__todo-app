const base = {
	breakpoints: {
		mobile: "23.43rem",
		desktop: "90rem",
	},
	maxContentWidth: "540px",
};

export const lightTheme = {
	...base,
	background: "var(--color-gray-light-1)",
	todoBackground: "#FFF",
	placeholder: "var(--color-gray-1)",
	text: "var(--color-gray-dark-2)",
	boxShadow: "0 35px 50px rgba(194, 195, 214, 0.5)",
	outline: "2px solid var(--color-gray-light-2)",
	checkCircle: "var(--color-gray-light-2)",
	todoDivider: "var(--color-gray-light-3)",
};

export const darkTheme = {
	...base,
	background: "var(--color-black)",
	todoBackground: "var(--color-gray-dark-4)",
	placeholder: "var(--color-gray-2)",
	text: "var(--color-gray-light-4)",
	boxShadow: "0px 35px 50px rgba(0, 0, 0, 0.5)",
	outline: "2px solid var(--color-gray-light-4)",
	checkCircle: "var(--color-gray-dark-1)",
	todoDivider: "var(--color-gray-dark-1)",
};
