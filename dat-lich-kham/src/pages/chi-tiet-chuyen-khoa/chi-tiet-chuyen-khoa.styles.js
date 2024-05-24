import { Link } from "react-router-dom";
import { styled, css } from "styled-components";

export const Container = styled.main`
    background-color: #fff;
`;

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 50px 50px 0;
`;

export const Title = styled.h3`
    font-size: 20px;
`;

export const ContentText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

`;

export const UlInfo = styled.ul`
    margin-left: 40px;
    margin-bottom: 15px;
`;

export const DivNoneInfo = styled.div`
    transition: 0.3s;
    overflow: hidden;
    max-height: ${({show}) => show ? "500px" : "0"};
    visibility: ${({show}) => show ? "visible" : "hidden"};
`;

export const UlTitle = styled.p`
    font-weight: 600;
`;

export const LiInfo = styled.li`
    padding: 1px;
`;

export const ReadMore = styled.label`
    color: blue;
    background-color: #e8ebec;
    padding: 7px;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 20px;
`;


export const ListBacSi = styled.section`
    background-color: #dfdede;
    padding: 20px 50px;
`;

export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Item = styled.div`
    display: flex;
    background-color: #fff;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 0 1px 5px 1px rgb(0, 0, 0, 0.2);
    margin-bottom: 15px;
`;

export const ItemLeft = styled.div`
    display: flex;
    flex: 2;
    padding: 20px 10px;

    @media(max-width: 1024px) {
        flex-direction: column;
        gap: 5px;
    }
`;

export const BacSiImage = styled.div`
    max-width: 130px;
    padding-right: 10px;

    @media(max-width: 1024px) {
        margin: 0 auto;
        max-width: 100px;
    }
`;

export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const BacSiName = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 5px;
`;

export const Name = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: #20b4c5;
`;

export const Text = styled.p`
    line-height: 1.6;
`;

export const ItemRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-left: 1px solid #e9e6e6;
    padding: 20px 10px;
`;

export const KhungThoiGian = styled.div`
    padding: 5px 0;
`;

export const LichKham = styled.p`
    margin: 20px 0;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    color: #333;
`;

export const ThoiGianKham = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 7px;

    @media(max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        padding-right: 0px;
    }

    @media(max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const LinkItem = styled(Link)`
    display:flex;
    text-decoration: none;
    color: #000;
`;

export const ItemTime = styled.span`
    width: 120px;
    padding: 8px;
    text-align: center;
    background-color: #dfdede;
    font-weight: 600;
    cursor: pointer;
    border: 2px solid transparent;

    &:hover {
        border: 2px solid #20b4c5;
    }
`;

export const ChonThoiGian = styled.p`
    margin-top: 10px;
    border-bottom: 1px solid #e9e6e6;
    padding: 10px 0;
`;

export const DiaChiKhamText = styled.p`
    text-transform: uppercase;
    font-weight: 600;
    color: #333;

`;

export const TenPhongKham = styled.p`
    font-weight: 700;
    margin: 5px 0;
`;

export const DiaChiKham = styled.p`
    border-bottom: 1px solid #e9e6e6;
    padding-bottom: 10px;
`;

export const GiaKham = styled.span`
    text-transform: uppercase;
    font-weight: 600;
    color: #333;
    margin: 20px 0;
`;

export const TienKham = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #333;
`;
