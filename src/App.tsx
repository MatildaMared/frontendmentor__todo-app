import { useState } from "react";
import logo from "./logo.svg";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styling/themes";
import useTheme from "./hooks/useTheme";
import { Theme } from "./models/Theme";

function App() {
	const [theme, toggleTheme] = useTheme();
	const selectedTheme = theme === Theme.light ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={selectedTheme}>
			<Container className="App">
				<button onClick={toggleTheme} style={{backgroundColor: "var(--color-red)"}}>Toggle Theme</button>
			</Container>
		</ThemeProvider>
	);
}

const Container = styled.div`
	background-color: ${(props) => props.theme.background};
`;

export default App;
