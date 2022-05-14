import { darkTheme, lightTheme } from "../styling/themes";

export enum Theme {
	light = "light",
	dark = "dark",
}

export type ThemeType = typeof lightTheme | typeof darkTheme;