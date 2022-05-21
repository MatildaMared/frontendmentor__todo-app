import React from "react";
import styled from "styled-components";
import Todo from "../Todo/Todo";
import { selectFilteredTodos } from "../../features/todos/todosSlice";
import { useAppSelector } from "../../app/hooks";

const Todos = () => {
	const todos = useAppSelector(selectFilteredTodos);

	return (
		<Wrapper>
			<TodosContainer>
				{todos.length === 0 && (
					<NoTodos>Nothing left to do! 🥳</NoTodos>
				)}
				{todos.map((todo) => (
					<Todo key={todo.id} todo={todo} />
				))}
			</TodosContainer>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	width: 100%;
	background-color: ${(props) => props.theme.todoBackground};
	border-radius: 5px 5px 0 0;
	box-shadow: ${(props) => props.theme.boxShadow};
`;

const TodosContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const NoTodos = styled.li`
	text-align: center;
	padding: 1rem 20px 1rem;
	color: ${(props) => props.theme.placeholder};
`;

export default Todos;
