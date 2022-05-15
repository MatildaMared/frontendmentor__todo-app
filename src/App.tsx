import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styling/themes";
import { Theme } from "./models/Theme";
import Header from "./components/Header";
import { ThemeContext } from "./context/ThemeContext";
import { Variables } from "./styling/variables";
import { StylesReset } from "./styling/reset";
import { GlobalStyles } from "./styling/globalStyles";
import TodoHeader from "./components/TodoHeader";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

function App() {
	const { theme } = useContext(ThemeContext);
	const selectedTheme = theme === Theme.light ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={selectedTheme}>
			<Container>
				<Header />
				<TodoContainer>
					<TodoHeader />
					<NewTodo />
					<Todos />
				</TodoContainer>
			</Container>
			<Variables />
			<StylesReset />
			<GlobalStyles />
		</ThemeProvider>
	);
}

const Container = styled.div`
	margin-inline: auto;
	max-width: ${(props) => props.theme.breakpoints.desktop};
	height: 100%;
	background-color: ${(props) => props.theme.background};
`;

const TodoContainer = styled.main`
	width: 100%;
	margin-inline: auto;
	max-width: ${(props) => props.theme.maxContentWidth};
	margin-top: -9.5rem;
	padding: 0 24px;

	@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
		margin-top: -14rem;
	}
`;

export default App;
