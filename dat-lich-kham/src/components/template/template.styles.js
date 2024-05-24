import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.section`
    margin: auto;
    // background-color: #e1ebf9;
`;

// Style <Link>
export const LogoStyleLink = styled(Link)`
    text-decoration: none;
`;

// Header
export const Header = styled.header`
    height: 80px;
    background-color: #e1ebf9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    

    @media (max-width: 425px) {
        padding: 10px;
    }
`;
// Logo
export const Logo = styled.div`
    flex: 1;
    font-size: 25px;

    @media (max-width: 1024px) {
        font-size: 17px;
    }

    @media (max-width: 375px) {
        font-size: 14px;
    }
`;

export const BlockLogo = styled.div`
    
`;

export const Health = styled.h2`
    display: inline;
    color: orange;
`;

export const Care = styled.h2`
    display: inline;
    color: blue;
`;
// Menu
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 2;

    @media (max-width: 600px) {
        display: none;
    }
`;
// MenuItem
export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
    }
`;

export const Title = styled.h3`
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Text = styled.p`
    font-size: 15px;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;
// Lịch hẹn, hỗ trợ
export const Support = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    flex: 1;
`;

export const LichHen = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.3s;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const DangNhapText = styled.label`
    font-size: 20px;
    font-weight: 700;
    color: #0956b9;
    cursor: pointer;

    @media (max-width: 1024px) {
        font-size: 17px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;
// End Header

// Footer
export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
`;
// Infomation
export const Info = styled.section`
    display: flex;
    gap: 10px;
    background-color: #f2f2f2;
    padding: 50px 20px;

    @media (max-width: 425px) {
        padding: 30px 10px;
    }
`;

export const CompanyAddress = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    flex: 2;
`;

export const CompanyInfo = styled.p`
    color: #333;

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const CompanyName = styled.p`
    font-size: 19px;
    font-weight: 600;
    color: #4c4a4a;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`;

export const FooterItemTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #4c4a4a;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ItemName = styled.p`
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: #0956b9;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;


// Tiktok, face, youtube
export const IconBox = styled.section`
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    background-color: #3399ff;
    padding: 0 70px;

    @media (max-width: 425px) {
        height: 50px;
        padding: 0 30px;
    }
`;

export const Icon = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 5px;

    @media (max-width: 600px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 425px) {
        width: 25px;
        height: 25px;
    }
`;

export const Popup = styled.section`
    font-weight: 500;
    width: 150px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 39px;
    right: 0;
    z-index: 999;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-20px);
    transition: 0.3s
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 10px 0;
`;

export const PopupText = styled.p`
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
        color: #0877c2;
    }
`;

export const SignOut = styled(PopupText)`
    cursor: pointer;
    color: #dd472d;
    &:hover {
        color: #dd472d;
    }
`;

export const Hello = styled.p`
    padding: 10px;
    color: #0877c2;
    font-size: 15px;
    font-weight: 700;
    position: relative;

    &:hover ${Popup} {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
    }
`;