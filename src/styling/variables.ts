import { createGlobalStyle } from "styled-components";

export const Variables = createGlobalStyle`
    :root {
        --color-gray-light-1: hsl(0, 0%, 98%);
        --color-gray-light-2: hsl(236, 33%, 92%);
        --color-gray-light-3: hsl(233, 11%, 84%);
        --color-gray-light-4: hsl(234, 39%, 85%);
        --color-gray-1: hsl(236, 9%, 61%);
        --color-gray-2:hsl(235, 11%, 52%);
        --color-gray-dark-1: hsl(233, 14%, 35%);
        --color-gray-dark-2: hsl(237, 14%, 26%);
        --color-gray-dark-3: hsl(235, 19%, 35%);
        --color-gray-dark-4: hsl(235, 24%, 22%);
        --color-black: hsl(235, 21%, 11%);

        --color-blue: hsl(220, 98%, 61%);
        --gradient: linear-gradient(146deg, hsl(192, 100%, 67%) 0%, hsl(280, 87%, 65%) 100%);
    }
`;
