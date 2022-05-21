import React, { useContext } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "../../assets/images/bg-mobile-light.jpg";
import { selectTheme } from "../../features/theme/themeSlice";
import { Theme } from "../../models/Theme";

const Header = () => {
	const theme = useAppSelector(selectTheme);

	return <Container currentTheme={theme}></Container>;
};

interface HeaderProps {
	currentTheme: Theme;
}

const Container = styled.header<HeaderProps>`
	height: 200px;
	width: 100%;
	max-width: ${(props) => props.theme.breakpoints.desktop};
	background-image: url(${(props) => props.currentTheme === Theme.Light ? bgMobileLight : bgMobileDark});
	background-size: cover;
	background-position: center;

	@media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
		height: 300px;
		background-image: url(${(props) => props.currentTheme === Theme.Light ? bgDesktopLight : bgDesktopDark});
	}
`;

export default Header;
