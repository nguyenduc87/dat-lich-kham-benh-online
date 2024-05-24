import { Link } from "react-router-dom";
import styled from "styled-components";


// style Link Xem Thêm
export const StyleLink = styled(Link)`
    text-decoration: none;
    color: #000;
`;

export const Container = styled.div`
    
`;
// Banner
export const Banner = styled.section`
    position: relative;
`;

export const BannerImg = styled.img`
    width: 100%;
    display: block;
`;

export const BannerContentForm = styled.form`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;

    @media (max-width: 425px) {
        left: 10px;
    }
`;

export const Text = styled.p`
    color: blue;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;

    @media (max-width: 1024px) {
        font-size: 25px;
    }

    @media (max-width: 600px) {
        font-size: 17px;
    }

    @media (max-width: 425px) {
        font-size: 13px;
        margin-bottom: 7px;
    }
`;

export const InputBox = styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    border: 2px solid #555;
    background-color: #fff;
    border-radius: 5px;
    font-size: 17px;
    transition: 0.3s;

    &:focus {
        border: 2px solid blue;
    }

    @media (max-width: 768px) {
        padding: 7px;
        font-size: 12px;
    }

    @media (max-width: 425px) {
        padding: 5px;
        font-size: 9px;
    }
`;
// End Banner

// Content
export const Content = styled.section`
    background-color: #e1ebf9;
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 20px;

    @media (max-width: 425px) {
        padding: 10px;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ItemTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

export const ItemTitleText = styled.h3`
    font-size: 28px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 22px;
    }

    @media (max-width: 320px) {
        font-size: 17px;
    }
`;

export const ItemMoreInfo = styled.label`
    background-color: #abd4f0;
    color: #0877c2;
    font-size: 17px;
    font-weight: 600;
    border-radius: 10px;
    padding: 8px;
    transition: 0.3s;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        font-size: 15px;
        padding: 7px;
    }

    @media (max-width: 320px) {
        font-size: 12px;
    }
`;

export const ItemContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

export const ItemImg = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    padding: 10px;
    transition: 0.3s;
    &:hover {
        box-shadow: 1px 3px 15px 5px rgb(0, 0, 0, 0.1);
        cursor: pointer;
    }

    @media (max-width: 1024px) {
        width: 215px;
    }

    @media (max-width: 768px) {
        width: 190px;
        margin-bottom: 30px;
    }

    @media (max-width: 425px) {
        width: 180px;
    }

    @media (max-width: 375px) {
        width: 160px;
    }

        @media (max-width: 375px) {
        width: 130px;
    }
`;

export const ChuyenKhoaImg = styled.img`
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
`;

export const BacSiImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
`;

export const BenhVienImg = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
    // border: 1px solid #555;
    box-shadow: 0px 2px 6px 1px rgb(0, 0, 0, 0.3);
`;

export const ImgText = styled.label`
    font-size: 17px;
    font-weight: 600;
    color: #444;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 375px) {
        font-size: 12px;
    }
`;

export const BenhVienInfo = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 320px) {
        align-items: flex-start;
    }
`;

export const GeneralInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width: 320px) {
        align-items: flex-start;
    }
`;

export const GeneralText = styled.p`
    font-size: 15px;
    color: #444;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`;