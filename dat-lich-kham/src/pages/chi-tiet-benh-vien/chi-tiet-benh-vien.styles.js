import styled from "styled-components";

export const Container = styled.main`
    background-color: #fff;
    padding: 0 0 10px;
`;

export const BenhVienImage = styled.section`
    position: relative;
    height: 280px;
    margin-bottom: 27px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BlockName = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    max-width: 1200px;
    margin: auto;
    background-color: #fff;
    padding: 20px 0 3px;
    margin-top: -100px; 
`;

export const BlockLogo = styled.div`
    max-width: 1200px;
    display: flex;
    gap: 20px;
`;

export const LogoSection = styled.div`
    width: 150px;
`;

export const LogoImg = styled.img`
    width: 100%;

    @media(max-width: 425px){
        width: 120px;
    }

    @media(max-width: 375px){
        width: 100px;
    }
`;

export const TenBv = styled.p`
    font-size: 20px;
    font-weight: 600;

    @media(max-width: 375px){
        font-size: 17px;
    }
`;

export const DiaChi = styled.p`
    font-size: 20px;
    margin: 20px 0;

    @media(max-width: 700px){
        font-size: 17px;
    }

    @media(max-width: 375px){
        font-size: 13px;
    }
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    font-size: 17px;
    font-weight: 600;
    max-width: 1200px;
    margin: 0px auto;
    padding: 10px 0;
    background-color: #e1e1e1;
    position: sticky;
    top: 0px;

    @media(max-width: 700px){
        font-size: 15px;
        text-align: center;
    }

    @media(max-width: 375px){
        font-size: 13px;
    }
`;

export const LiMenu = styled.li`
    list-style: none;
    padding: 0 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #b5820d;
    }

    @media(max-width: 700px){
        padding: 0 10px;
    }

    @media(max-width: 555px){
        padding: 0 5px;
    }
`;

export const BenhVienInfo = styled.section`
    max-width: 1200px;
    margin: auto;
`;

export const Status = styled.div`
    background-color: #cfeef7;
    color: #444444;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 18px;
    gap: 15px;
    line-height: 1.6;
    margin-bottom: 40px;
`;

export const StatusLiText = styled.li`
    margin: 0 30px;
`;

export const GioiThieu = styled.div`
    margin-bottom: 40px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #444444;
    font-weight: 500;
    scroll-margin-top: 50px;
`;

export const H3TieuDe = styled.h3`
    color: #0956b9;
`;

export const PTieuDe = styled.p`
    font-weight: 600;
    font-size: 18px;
    color: #000;
`;

export const BanDoImg = styled.img`
    max-width: 650px;
    margin: 50px auto;

    @media(max-width: 600px){
        max-width: 420px;
    }

    @media(max-width: 375px){
        max-width: 350px;
    }

    @media(max-width: 320px){
        max-width: 300px;
    }
`;

export const TheManh = styled.div`
    margin-bottom: 40px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #444444;
    font-weight: 500;
    scroll-margin-top: 50px;
`;

export const LiChuyenMon = styled.li`
    list-style-type: number;
    margin: 0 30px;
`;

export const QuyTrinhKham = styled.div`
    margin-bottom: 40px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #444444;
    font-weight: 500;
    scroll-margin-top: 50px;
`;

export const TextCacBuoc = styled.p`
    font-size: 14px;
    margin-bottom: 5px;
`;

export const KhuKhamBenh = styled.img`
    width: 650px;
    margin: 20px auto;

    @media(max-width: 600px){
        max-width: 420px;
    }

    @media(max-width: 375px){
        max-width: 350px;
    }

    @media(max-width: 320px){
        max-width: 300px;
    }
`;

export const GiaKham = styled.div`
    margin-bottom: 40px;
    padding: 0 20px;
    font-size: 18px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    gap: 15px;
    color: #444444;
    font-weight: 500;
    scroll-margin-top: 50px;
`;

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
    &:active {
        opacity: 0.7;
    }
`;

