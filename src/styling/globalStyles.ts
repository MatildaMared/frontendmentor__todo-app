import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../models/Theme";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    body {
        font-family: "Josefin Sans", sans-serif;
        font-size: var(--font-size-base);
        background-color: ${(props) => props.theme.background};
    }
`;
