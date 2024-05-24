import styled from "styled-components";

export const Container = styled.div`
    background-color: #c2c2c2;
    padding: 20px;
`;

export const Main = styled.main`
    background-color: #fff;
    max-width: 800px;
    margin: auto;
    border-radius: 10px;
    box-shadow: 2px 4px 10px 0px rgb(0,0,0,0.3);
`;

export const Header = styled.header`
    border-bottom: 2px solid #0956b9;
`;

export const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    padding: 20px;
`;

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const InfoBacSi = styled.section`
    display: flex;
    gap: 20px;
    background-color: #f1f1f1;
    padding: 10px 30px;
`;

export const DivImg = styled.div`
    max-width: 150px;
`;

export const Img = styled.img`
    width: 110px;
    height: 120px;
    object-fit: cover;
    display: block;
    border-radius: 50%;
`;

export const DivInfo = styled.div`

`;

export const TenBacSi = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #0956b9;
    margin-bottom: 15px;
`;

export const Text = styled.p`
    margin-bottom: 10px;
`;

export const GiaKhamBenh = styled.div`
    padding: 10px 30px;
`;

export const Span = styled.span`
    font-weight: 500;
    padding: 10px;
    border: 1px solid #b99309;
    border-radius: 3px;
`;

export const FormDatLich =styled.form`
    padding: 0 30px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


export const DivFormat = styled.section`
    max-width: 800px;
    display: flex;
    gap: 30px;
`;

export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 400px;
`;

export const DivRight = styled(DivLeft)``;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 15px;
    border: 2px solid #ccc;
    border-radius: 5px;
    outline: none;
    transition: 0.5s;
    &::placeholder {
        color: #ccc;
    }

    &:focus {
        border: 2px solid #0956b9
    }
`;

export const InputCheck = styled.input`
    cursor: pointer;
`;

export const TextArea = styled.textarea`
    width: 100%;
    outline: none;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 7px;
    font-size: 15px;
    transition: 0.5s;
    &::placeholder {
        color: #ccc;
    }

    &:focus {
        border: 2px solid #0956b9
    }
`;

export const LabelCheck = styled.label`
    margin-left: 5px;
    cursor: pointer;
`;

export const LabelText = styled.label`
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
`;

export const Gender = styled.div`
    display: flex;
    gap: 20px;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    padding: 20px;
    border-top: 2px solid #0956b9;
`;

export const XacNhanBtn = styled.button`
    width: 200px;
    outline: none;
    border: none;
    font-size: 17px;
    font-weight: 600;
    background-color: #0956b9;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const HuyBtn = styled(XacNhanBtn)`
    width: 100px;
    background-color: #f00;
`;