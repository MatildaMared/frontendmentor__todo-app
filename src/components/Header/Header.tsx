import React, { useContext } from "react";
import styled from "styled-components";
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../../assets/images/bg-mobile-light.jpg";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../models/Theme";

const Header = () => {
	const { theme } = useContext(ThemeContext);

	return <Container currentTheme={theme}></Container>;
};

interface HeaderProps {
	currentTheme: Theme;
}

const Container = styled.header<HeaderProps>`
	height: 12.5rem;
	width: 100%;
	max-width: ${(props) => props.theme.breakpoints.desktop};
	background-image: url(${(props) => props.currentTheme === Theme.light ? bgMobileLight : bgMobileDark});
	background-size: cover;
	background-position: center;

	@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
		height: 18.75rem;
		background-image: url(${(props) => props.currentTheme === Theme.light ? bgDesktopLight : bgDesktopDark});
	}
`;

export default Header;
