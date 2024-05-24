import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px 20px;
    background-color: #c8eff5;
`;

export const ListItem = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 15px 0;

    @media(max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 0;
    }

    @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

