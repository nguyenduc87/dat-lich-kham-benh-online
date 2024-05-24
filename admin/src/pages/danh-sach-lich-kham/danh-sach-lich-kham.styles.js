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

export const DataTable = styled.table`
    border-collapse: collapse;
`;

export const Tr = styled.tr`
    &:hover {
        background-color: rgba(36, 105, 92, 0.1);
    }
`;

export const Th = styled.th`
    text-align: center;
    padding: 12px;
    border: 1px solid #ccc;
    background-color: #135791;
    color: #fff;
`;

export const Td = styled.td`
    text-align: center;
    padding: 15px 5px;
    border: 1px solid #ccc;
    font-weight: 500;
`;

export const StatusText = styled.p`
    font-weight: 700;
    color: #DB7F0B;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: translateY(-3px);
    }
`;



