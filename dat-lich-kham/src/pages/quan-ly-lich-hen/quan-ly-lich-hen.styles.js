import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 30px;
`;

export const Title = styled.h2`
    font-size: 25px;
`;

export const Alert = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #0877c2;
    margin: 20px;
`;

export const Content = styled.section`

`;

export const MainTable = styled.table`
    border-collapse: collapse;
    color: #343a40;
`;

export const Tr = styled.tr`
    &:hover {
        background-color: rgba(36, 105, 92, 0.1);
    }
`;

export const Th = styled.th`
    text-align: center;
    padding: 5px;
    border: 1px solid #ccc;
    background-color: #0089ff;
    color: #fff;
`;

export const Td = styled.td`
    text-align: center;
    padding: 15px 4px;
    border: 1px solid #ccc;
    font-weight: 500;
`;