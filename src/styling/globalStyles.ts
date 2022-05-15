import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../models/Theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    html {
        font-size: var(--font-size-base);
    }

    body {
        font-family: "Josefin Sans", sans-serif;
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};
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
