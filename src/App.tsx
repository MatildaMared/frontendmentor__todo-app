import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styling/themes";
import { Theme } from "./models/Theme";
import Header from "./components/Header";
import { Variables } from "./styling/variables";
import { StylesReset } from "./styling/reset";
import { GlobalStyles } from "./styling/globalStyles";
import TodoHeader from "./components/TodoHeader";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosFooter from "./components/TodosFooter";
import { useAppSelector } from "./app/hooks";
import { selectTheme } from "./features/theme/themeSlice";

function App() {
	const theme = useAppSelector(selectTheme);
	const selectedTheme = theme === Theme.Light ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={selectedTheme}>
			<Container>
				<Header />
				<TodoContainer>
					<TodoHeader />
					<NewTodo />
					<Todos />
					<TodosFooter />
				</TodoContainer>
				<DragAndDrop>Drag and drop to reorder list</DragAndDrop>
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

const DragAndDrop = styled.p`
	margin-top: 2.5rem;
	text-align: center;
	color: ${(props) => props.theme.dimmedText};
	font-size: 0.875rem;
`;

export default App;
