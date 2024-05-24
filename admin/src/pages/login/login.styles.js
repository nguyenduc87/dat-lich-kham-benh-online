import styled from "styled-components";


export const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items: center;
    gap: 15px;
    height: 100vh;
    background-color: #299fe5;
`;

export const LoginText = styled.p`
    color: #222;
    font-size: 30px;
    font-weight: 700;
`;

export const Form = styled.form`
    width: 380px;
    border: 2px solid #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    color: #222;
    font-weight: 600;
`;

export const Input = styled.input`
    outline: none;
    border: 2px solid #fff;
    padding: 10px;
    font-size: 15px;
    transition: 0.3s;

    &:focus {
        border: 2px solid #0956b9;
    }
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
`;

export const SignInBtn = styled.button`
    outline: none;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid #fff;
    color: #222;
    background-color: unset;
    transition: 0.3s;

    &:hover {
        color: #fff;
        border: 1px solid #0956b9;
        background-color: #0956b9;
    }
`;

export const Error = styled.p`
    color: #f00;
    font-weight: 600;
`;