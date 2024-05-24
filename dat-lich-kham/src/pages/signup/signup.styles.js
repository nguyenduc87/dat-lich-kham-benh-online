import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #fff;
    height: 100vh;
`;

export const Img = styled.img`
    width: 60%;
    height: 100%;
    object-fit: cover;
    
`;

export const FormDangNhap = styled.form`
    width: 40%;
    max-height: 650px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 60px;
    background-color: #fff;
`;

export const Header = styled.div`
width: 400px;
    display: flex;
    justify-content: center;
`;

export const LineSignUp = styled.div`
    width: 100%;
    height: 2px;
    background-color: #0956b9;
    position: absolute;
    bottom: 0;
`;

export const LineLogin = styled.div`
    width: 100%;
    height: 2px;
    background-color: #0956b9;
    position: absolute;
    bottom: 0;
`;

export const TextLogin = styled.label`
    color: #000;
    font-weight: 600;
    cursor: pointer;
`;

export const TextSignUp = styled.label`
    color: #0956b9;
    font-weight: 600;
    cursor: pointer;
`;

export const DangNhap = styled.div`
    padding: 10px 0;
    width: 100%;
    text-align: center;
    position: relative;
`;

export const DangKy = styled.div`
    padding: 10px 0;
    width: 100%;
    text-align: center;
    position: relative;
`;

export const LabelText = styled.label`
    color: #000;
    font-weight: 600;
`;

export const LabelCheck = styled.label`
    color: #000;
    font-weight: 500;
    cursor: pointer;
`;

export const Body = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: relative;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 13px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: 0.5s;

    &:focus {
        border: 2px solid #0956b9
    }
`;

export const ForgetPass = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const DivRememberPass = styled.div`
    display: flex;
    gap: 7px;
`;

export const SignIn = styled.div`
    
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0956b9;
    font-size: 15px;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const Footer = styled.div`
width: 400px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    text-align: center;
`;

export const DangKyNgay = styled.span`
    color: #0956b9;
    font-weight: 600;
    cursor: pointer;
`;

export const Error = styled.p`
    color: red;
    font-weight: 600;
`;



