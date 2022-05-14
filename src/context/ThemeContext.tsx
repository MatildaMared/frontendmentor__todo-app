import React, { createContext } from "react";
import { Theme } from "../models/Theme";

const ThemeContext = createContext({
	theme: Theme.dark,
	toggleTheme: () => {},
});

interface Props {
	children: React.ReactNode;
}

// Provider
const ThemeProvider = (props: Props) => {
	const [theme, setTheme] = React.useState(Theme.dark);
	const toggleTheme = () => {
		setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
