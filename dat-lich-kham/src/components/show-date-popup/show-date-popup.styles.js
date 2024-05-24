import styled from "styled-components";

export const Main = styled.main`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    visibility: ${({show}) => show ? 'visible' : 'hidden'};
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    transition: 0.3s;
    opacity: ${({show}) => show ? '0.7' : '0'};
    visibility: ${({show}) => show ? 'visible' : 'hidden'};
`;

export const Container = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 60%;
    transition: 0.3s;
    background-color: #fff;
    transform: ${({show}) => show ? 'translateY(0%)' : 'translateY(100%)'};
`;

export const UlPopup = styled.ul`
    padding: 10px;
`;

export const LiPopup = styled.li`
    list-style: none;
    font-size: 17px;
    font-weight: 500;
    color: #464545;
    padding: 15px;
    cursor: pointer;
    &:hover {
        color: #0956b9;
    }
`;

export const BlockNgayKham = styled.div`
    display: inline-block;
    border-bottom: 2px solid #777;
    padding-bottom: 5px;
`;

export const FlexNgayKham = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const NgayKham = styled.span`
    font-weight: 500;
    font-size: 15px;
    color: #0956b9;
    margin-right: 5px;
`;

export const ArrowSvg = styled.svg`
    width: 17px;
    color: #0956b9;
`;
