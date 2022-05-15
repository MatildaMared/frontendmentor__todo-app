import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --font-size-sm: clamp(0.6rem, 0.37vw + 0.51rem, 0.84rem);
        --font-size-base: clamp(0.75rem, 0.56vw + 0.62rem, 1.13rem);
        --font-size-md: clamp(0.94rem, 0.84vw + 0.74rem, 1.5rem);
        --font-size-lg: clamp(1.17rem, 1.24vw + 0.88rem, 2rem);
        --font-size-xl: clamp(1.46rem, 1.8vw + 1.04rem, 2.66rem);
        --font-size-xxl: clamp(1.83rem, 2.59vw + 1.23rem, 3.55rem);
        --font-size-xxxl: clamp(2.29rem, 3.67vw + 1.43rem, 4.73rem);

        --color-gray-light-1: hsl(0, 0%, 98%);
        --color-gray-light-2: hsl(236, 33%, 92%);
        --color-gray-light-3: hsl(233, 11%, 84%);
        --color-gray-light-4: hsl(234, 39%, 85%);
        --color-gray-1: hsl(236, 9%, 61%);
        --color-gray-2:hsl(234, 11%, 52%);
        --color-gray-dark-1: hsl(233, 14%, 35%);
        --color-gray-dark-2: hsl(237, 14%, 26%);
        --color-gray-dark-3: hsl(235, 19%, 35%);
        --color-gray-dark-4: hsl(235, 24%, 22%);
        --color-black: hsl(235, 21%, 11%);

        --color-blue: hsl(220, 98%, 61%);
        --gradient: linear-gradient(146deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);
    }
`;
