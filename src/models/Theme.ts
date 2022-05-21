import { darkTheme, lightTheme } from "../styling/themes";

export enum Theme {
	Light = "light",
	Dark = "dark",
}

export type ThemeType = typeof lightTheme | typeof darkTheme;
