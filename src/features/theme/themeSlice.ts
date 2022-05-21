import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { Theme } from "../../models/Theme";

interface ThemeState {
	theme: Theme;
}

const initialState: ThemeState = {
	theme: Theme.Dark,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
