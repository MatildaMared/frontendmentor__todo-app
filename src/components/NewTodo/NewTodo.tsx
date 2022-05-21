import React, { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "../../features/todos/todosSlice";

const NewTodo = () => {
	const [newTodo, setNewTodo] = useState("");
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const todoToAdd = {
			id: nanoid(),
			title: newTodo,
			completed: false,
		};
		dispatch(addTodo(todoToAdd));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Circle />
			<Input
				value={newTodo}
				onChange={handleChange}
				type="text"
				placeholder="Create a new todo..."
			/>
		</Form>
	);
};

const Form = styled.form`
	width: 100%;
	position: relative;
	box-shadow: ${(props) => props.theme.boxShadow};
	margin-bottom: 24px;
`;

const Input = styled.input`
	width: 100%;
	border-radius: 5px;
	border: none;
	background: ${(props) => props.theme.todoBackground};
	padding: 1rem 1rem 1rem calc(1rem + 48px);
	color: ${(props) => props.theme.text};
	outline-offset: 4px;

	&::placeholder {
		color: ${(props) => props.theme.placeholder};
	}

	&:focus {
		outline: ${(props) => props.theme.outline};
	}
`;

const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: 24px;
	transform: translateY(-50%);
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.checkCircle};
`;

export default NewTodo;
