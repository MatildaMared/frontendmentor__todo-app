import React, { useContext } from "react";
import styled from "styled-components";
import IconSun from "../../assets/images/icon-sun.svg";
import IconMoon from "../../assets/images/icon-moon.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../models/Theme";

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<Button onClick={toggleTheme}>
			{theme === Theme.dark ? <IconSun /> : <IconMoon />}
		</Button>
	);
};

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	outline: none;
	transition: all 0.2s;
	position: relative;
	padding: 4px;
	opacity: 0.8;
	border-radius: 50%;

	&:focus {
		outline-offset: 4px;
		outline: ${(props) => props.theme.outline};
	}

	&:hover {
		opacity: 1;

		&::before,
		&::after {
			content: "";
			position: absolute;
			left: -5px;
			top: -5px;
			right: -5px;
			bottom: -5px;
			background-color: rgba(255, 255, 255, 0.1);
			border-radius: 50%;
			animation: animate 1s ease-in-out infinite;
		}

		@keyframes animate {
			0% {
				transform: scale(1.2);
			}

			100% {
				transform: scale(1);
			}
		}
	}
`;

export default ThemeToggleButton;
