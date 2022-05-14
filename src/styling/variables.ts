import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --font-size-s: clamp(0.8rem, 0.07vw + 0.78rem, 0.84rem);
        --font-size-base: clamp(1rem, 0.21vw + 0.94rem, 1.13rem);
        --font-size-md: clamp(1.25rem, 0.41vw + 1.13rem, 1.5rem);
        --font-size-lg: clamp(1.56rem, 0.72vw + 1.35rem, 2rem);

        --desktop-breakpoint: 90rem;
        /* --mobile-breakpoint: 31.25rem; */
        --mobile-breakpoint: 500px;

        --color-red: #ff0000;
    }
`;
