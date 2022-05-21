import React from "react";
import styled from "styled-components";
import { Todo as ITodo } from "../../models/Todo";
import CheckMarkIcon from "../../assets/images/icon-check.svg";
import CrossIcon from "../../assets/images/icon-cross.svg";

interface Props {
	todo: ITodo;
}

const Todo = ({ todo }: Props) => {
	const { completed, title } = todo;

	const toggleCompleted = () => {
		console.log("toggleCompleted");
	};

	const handleRemove = () => {
		console.log("handleRemove");
	};

	return (
		<Container>
			<CheckButton
				onClick={toggleCompleted}
				className={completed ? "completed" : ""}
			>
				{completed && <CheckMarkIcon />}
			</CheckButton>
			<Title>{title}</Title>
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

const CheckButton = styled.button`
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

	&:focus {
		outline: ${(props) => props.theme.outline};
		outline-offset: 4px;
	}

	&:hover {
		border: none;
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
`;

const RemoveButton = styled(CheckButton)`
	border: none;

	&:hover {
		border: none;
	}
`;

export default Todo;
