import React from "react";
import styled from "styled-components";
import { Todo } from "../../models/Todo";

interface Props {
	todos: Todo[];
}

const TodosFooter = ({ todos }: Props) => {
	return (
		<Wrapper>
			<ItemsLeft>{todos.length} items left</ItemsLeft>
			<Filters>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</Filters>
			<ClearCompletedWrapper>
				<ClearCompleted>Clear completed</ClearCompleted>
			</ClearCompletedWrapper>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	position: relative;
	font-size: var(--font-size-s);

	@media (min-width: ${(props) => props.theme.breakpoints.footer}) {
		background-color: ${(props) => props.theme.todoBackground};
		border-radius: 0 0 5px 5px;
		box-shadow: ${(props) => props.theme.boxShadow};
		grid-template-columns: repeat(3, 1fr);
		padding: 1rem;
	}
`;

const ItemsLeft = styled.p`
	position: relative;
	grid-row: 1;
	background-color: ${(props) => props.theme.todoBackground};
	border-radius: 0 0 0 5px;
	padding: 1rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	@media (min-width: ${(props) => props.theme.breakpoints.footer}) {
		grid-row: auto;
		background-color: transparent;
		box-shadow: none;
		border-radius: 0;
		padding: 0;
	}
`;

const Filters = styled.div`
	position: relative;
	z-index: 4;
	grid-column: span 2;
	width: 100%;
	background-color: ${(props) => props.theme.todoBackground};
	border-radius: 5px;
	box-shadow: ${(props) => props.theme.boxShadow};
	margin-block: 1rem;
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: ${(props) => props.theme.breakpoints.footer}) {
		box-shadow: none;
		grid-column: auto;
		background-color: transparent;
		border-radius: 0;
		margin: 0;
		padding: 0;
		justify-content: space-between;
	}
`;

const ClearCompletedWrapper = styled.div`
	position: relative;
	grid-row: 1;
	background-color: ${(props) => props.theme.todoBackground};
	border-radius: 0 0 5px 0;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;

	@media (min-width: ${(props) => props.theme.breakpoints.footer}) {
		grid-row: auto;
		background-color: transparent;
		box-shadow: none;
		padding: 0;
	}
`;

const ClearCompleted = styled.button``;

export default TodosFooter;
