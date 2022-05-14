import { useState } from "react";
import { Theme } from "../models/Theme";

const useTheme = () => {
	const [theme, setTheme] = useState(Theme.dark);
	const themeToggler = () => {
		theme === Theme.dark ? setTheme(Theme.light) : setTheme(Theme.dark);
	};
    return [ theme, themeToggler ] as const;
};

export default useTheme;
