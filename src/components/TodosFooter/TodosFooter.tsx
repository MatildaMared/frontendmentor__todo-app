import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "../../models/Todo";
import { TodoFilterState } from "../../models/TodoFilterState";

interface Props {
	todos: Todo[];
}

const TodosFooter = ({ todos }: Props) => {
	const [activeState, setActiveState] = useState(TodoFilterState.All);

	const handleFilterStateChange = (state: TodoFilterState) => {
		setActiveState(state);
		// TODO - dispatch action to update filter state
	};

	const handleClearCompleted = () => {
		// TODO - dispatch action to clear completed todos
	};

	return (
		<Wrapper>
			<ItemsLeft>{todos.length} items left</ItemsLeft>
			<Filters>
				<StateButton
					onClick={() => handleFilterStateChange(TodoFilterState.All)}
					className={
						activeState === TodoFilterState.All ? "active" : ""
					}
				>
					All
				</StateButton>
				<StateButton
					onClick={() =>
						handleFilterStateChange(TodoFilterState.Active)
					}
					className={
						activeState === TodoFilterState.Active ? "active" : ""
					}
				>
					Active
				</StateButton>
				<StateButton
					onClick={() =>
						handleFilterStateChange(TodoFilterState.Completed)
					}
					className={
						activeState === TodoFilterState.Completed
							? "active"
							: ""
					}
				>
					Completed
				</StateButton>
			</Filters>
			<ClearCompletedWrapper>
				<Button onClick={handleClearCompleted}>Clear completed</Button>
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
	font-size: 0.875rem;

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
	color: ${(props) => props.theme.dimmedText};

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

const Button = styled.button`
	color: ${(props) => props.theme.dimmedText};
	border: none;
	background: transparent;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border-radius: 5px;

	&:focus {
		outline: ${(props) => props.theme.outline};
	}

	&.active {
		color: var(--color-blue);
	}

	&:hover, &:focus {
		color: ${(props) => props.theme.text};
	}
`;

const StateButton = styled(Button)`
	font-weight: bold;
`;

export default TodosFooter;
