import React from "react";
import styled from "styled-components";
import ThemeToggleButton from "../ThemeToggleButton";

const TodoHeader = () => {
	return (
		<Container>
			<Heading>Todo</Heading>
			<ThemeToggleButton />
		</Container>
	);
};

const Container = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 25px;

	@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
		margin-bottom: 40px;
	}
`;

const Heading = styled.h1`
	margin: 0;
	padding: 0;
	line-height: 1;
	color: white;
	text-transform: uppercase;
	letter-spacing: 8px;
	font-size: 1.8rem;
	transform: translateY(4px);

	@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
		font-size: 2.5rem;
	}
`;

export default TodoHeader;
