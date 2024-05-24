import styled from "styled-components";

// Danh mục cho di động
export const DanhMuc = styled.svg`
    width: 40px;
    margin-right: 10px;
    cursor: pointer;

    &:active {
        opacity: 0.5;
    }

    @media (min-width: 600px) {
        display: none;
    }

    @media (max-width: 600px) {
        display: block;
    }

    @media (max-width: 375px) {
        width: 30px;
    }
`;
// Popup Danh Mục
export const ListPopup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    visibility: ${({show}) => show ? 'visible' : 'hidden'};

    @media (min-width: 601px) {
        visibility: hidden;
    }
`;

export const ListContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    transition: 0.3s;
    background-color: #fff;
    transform: ${({show}) => show ? 'translateX(0%)' : 'translateX(-100%)'};
`;

export const ListClose = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    background-color: #ebebeb;
    z-index: 20;
    cursor: pointer;
    &:active {
        background-color: #ccc;
    }
`;

export const ListPopupContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 70px;
`;

export const ListPopupItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`;

export const ListPopupItemText = styled.span`
    font-size: 20px;
    background-color: #0a5fa5;
    color: #fff;
    padding: 10px;
    cursor: pointer;
    &:active {
        opacity: 0.7;
    }

    @media (max-width: 320px) {
        font-size: 15px;
    }
`;