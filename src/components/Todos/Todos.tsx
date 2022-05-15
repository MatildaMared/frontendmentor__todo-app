import React from "react";
import styled from "styled-components";
import { Todo as ITodo } from "../../models/Todo";
import Todo from "../Todo/Todo";

const todos: ITodo[] = [
	{
		id: 1,
		title: "Mata katten",
		completed: false,
	},
	{
		id: 2,
		title: "Springa en runda",
		completed: true,
	},
	{
		id: 3,
		title: "Städa toaletten",
		completed: false,
	},
	{
		id: 4,
		title: "Skriva matlista",
		completed: true,
	},
];

const Todos = () => {
	return (
		<Wrapper>
			<TodosContainer>
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
	border-radius: 5px;
	box-shadow: ${(props) => props.theme.boxShadow};
`;

const TodosContainer = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export default Todos;
