import React, { useState } from "react";
import styled from "styled-components";

const NewTodo = () => {
	const [newTodo, setNewTodo] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewTodo(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(newTodo);
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
`;

const Input = styled.input`
	width: 100%;
	height: 48px;
	border-radius: 5px;
	border: none;
	background: ${(props) => props.theme.todoBackground};
	font-size: var(--font-size-base);
	padding: 0.5rem 1rem 0.5rem calc(1rem + 48px);
	color: ${(props) => props.theme.text};
	outline-offset: 4px;

	&::placeholder {
		color: ${(props) => props.theme.grayMedium};
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
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.grayMedium};
`;

export default NewTodo;
