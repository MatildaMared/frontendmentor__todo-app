import React from "react";
import styled from "styled-components";
import { Todo as ITodo } from "../../models/Todo";
import CheckMarkIcon from "../../assets/images/icon-check.svg";
import CrossIcon from "../../assets/images/icon-cross.svg";
import { useAppDispatch } from "../../app/hooks";
import { toggleTodo, removeTodo } from "../../features/todos/todosSlice";

interface Props {
	todo: ITodo;
}

const Todo = ({ todo }: Props) => {
	const { completed, title } = todo;
	const dispatch = useAppDispatch();

	const toggleCompleted = () => {
		dispatch(toggleTodo(todo.id));
	};

	const handleRemove = () => {
		dispatch(removeTodo(todo.id));
	};

	return (
		<Container>
			<CheckButton
				onClick={toggleCompleted}
				className={completed ? "completed" : ""}
			>
				{completed && <CheckMarkIcon />}
			</CheckButton>
			<Title className={completed ? "completed" : ""}>{title}</Title>
			<RemoveButton onClick={handleRemove}>
				<CrossIcon />
			</RemoveButton>
		</Container>
	);
};

const Container = styled.li`
	padding: 1rem 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	border-bottom: 1px solid ${(props) => props.theme.todoDivider};
`;

const ButtonBase = styled.button`
	border: none;
	background: transparent;
	cursor: pointer;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.checkCircle};
	position: relative;
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;

	&:hover {
		border: none;

		&::before {
			content: "";
			position: absolute;
			left: -5px;
			top: -5px;
			right: -5px;
			bottom: -5px;
			border: 1px solid ${(props) => props.theme.checkCircle};
			border-radius: 50%;
			animation: animate 1s ease-in-out infinite;
		}
	}

	&:focus {
		outline: ${(props) => props.theme.outline};
		outline-offset: 4px;
	}
`;

const CheckButton = styled(ButtonBase)`
	&:hover {
		background: var(--gradient);

		&::after {
			content: "";
			position: absolute;
			top: 1px;
			left: 1px;
			width: calc(100% - 2px);
			height: calc(100% - 2px);
			border-radius: 50%;
			background-color: ${(props) => props.theme.todoBackground};
		}
	}

	&.completed {
		background: var(--gradient);
		border: 1px solid transparent;
		background-origin: border-box;

		&::after {
			display: none;
		}
	}
`;

const Title = styled.span`
	flex: 1;

	&.completed {
		color: ${(props) => props.theme.dimmedText};
		text-decoration: line-through;
	}
`;

const RemoveButton = styled(ButtonBase)`
	border: none;

	&:hover {
		border: none;
	}
`;

export default Todo;
