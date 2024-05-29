import styled from "styled-components";

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
    border: 1px solid #555;
    background-color: #fff;
    border-radius: 5px;
    font-size: 17px;
    transition: 0.3s;

    &:focus {
        border: 1px solid blue;
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