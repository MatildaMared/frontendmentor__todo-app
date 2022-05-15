import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --font-size-s: clamp(0.8rem, 0.07vw + 0.78rem, 0.84rem);
        --font-size-base: clamp(1rem, 0.21vw + 0.94rem, 1.13rem);
        --font-size-md: clamp(1.25rem, 0.41vw + 1.13rem, 1.5rem);
        --font-size-lg: clamp(1.56rem, 0.72vw + 1.35rem, 2rem);

        --color-gray-light-1: hsl(0, 0%, 98%);
        --color-gray-light-2: hsl(236, 33%, 92%);
        --color-gray-light-3: hsl(233, 11%, 84%);
        --color-gray-light-4: hsl(234, 39%, 85%);
        --color-gray-1: hsl(236, 9%, 61%);
        --color-gray-2:hsl(234, 11%, 52%);
        --color-gray-dark-1: hsl(233, 14%, 35%);
        --color-gray-dark-2: hsl(237, 14%, 26%);
        --color-gray-dark-3: hsl(235, 19%, 35%);
        --color-gray-dark-4: hsl(235, 24%, 19%);
        --color-black: hsl(235, 21%, 11%);

        --color-blue: hsl(220, 98%, 61%);
        --gradient: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);
    }
`;
