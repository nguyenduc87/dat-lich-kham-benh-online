import { styled, keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const IconLoading = styled.div`
    margin: 50px auto;
    border: 6px solid hsl(0, 0%, 95%);
    /* Light grey */
    border-top: 6px solid #24695C;
    /* Blue */
    border-radius: 50%;
    width: 35px;
    height: 35px;
    animation: ${rotate} 2s linear infinite;
`;

