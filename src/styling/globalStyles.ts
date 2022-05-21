import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../models/Theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`

    body {
        font-family: "Josefin Sans", sans-serif;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
        font-size: 0.875rem;

        @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
            font-size: 1.125rem;
        }
    }

    @keyframes animate {
        0% {
            transform: scale(1.2);
        }

        100% {
            transform: scale(1);
        }
    }
`;
