import styled from "styled-components";


export const ChonChuyenKhoaBtn = styled.div`
    color: #fff;
    margin: auto;
    max-width: 1200px;
    border-radius: 7px;
    background-color: #0956b9;
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    text-align: center;
    cursor: pointer;
`;

export const Container = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    margin-top: 79px;

    max-height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }

    transition: 0.3s;
    opacity: ${({show}) => show ? '1' : '0'};
    visibility: ${({show}) => show ? 'visible' : 'hidden'};
`;

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #cfeef7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`;

export const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #28313f;

`;

export const InputSearch = styled.input`
    width: 300px;
    padding: 10px 15px;
    font-size: 15px;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 20px;
    transition: 0.3s;

    &:focus {
        border: 1px solid #0956b9;
    }
`;

export const Body = styled.section`
    height: 100vh;
`;

export const ListChuyenKhoa = styled.div`

`;

export const QuayLaiText = styled.p`
    display: inline-block;
    font-size: 17px;
    font-weight: 500;
    margin-left: 20px;
    margin-top: 10px;
    cursor: pointer;
    border-bottom: 1px solid #0956b9;
    color: #0956b9;
`;

export const Section = styled.section`
    display: flex;
    gap: 20px;
    padding: 20px 60px;
`;

export const DivImg = styled.div`
    max-width: 170px;
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 2px 6px 1px rgb(0, 0, 0, 0.3);
`;

export const DivInfo = styled.div`

`;

export const InfoTitle = styled.h3`
    font-size: 25px;
`;

export const Address = styled.p`
    font-size: 20px;
`;

export const DatLichKhamBtn = styled.button`
    outline: none;
    border: none;
    padding: 5px;
    background-color: #cfeef7;
    font-size: 15px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-top: 30px;
    cursor: pointer;
`;
