import { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styling/themes";
import { Theme } from "./models/Theme";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const selectedTheme = theme === Theme.light ? lightTheme : darkTheme;
	console.log("Selected theme from APP is: ", theme);

	return (
		<ThemeProvider theme={selectedTheme}>
			<Container>
				<Header />
				<button onClick={toggleTheme}>Toggle Theme</button>
			</Container>
		</ThemeProvider>
	);
}

const Container = styled.div`
	height: 100%;
	background-color: ${(props) => props.theme.background};
`;

export default App;
