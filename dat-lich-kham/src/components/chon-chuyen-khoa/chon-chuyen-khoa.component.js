import { useState } from "react";
import { 
    Address,
    Body,
    ChonChuyenKhoaBtn,
    Container,
    DatLichKhamBtn,
    DivImg,
    DivInfo,
    Header,
    HeaderTitle,
    Img,
    InfoTitle,
    InputSearch,
    ListChuyenKhoa,
    QuayLaiText,
    Section
} from "./chon-chuyen-khoa.styles";

import img from './choRay.jpg';


const ChonChuyenKhoa = () => {
    const [show, setShow] = useState(false);

    const HideShowPopup = () => {
        setShow(prev => !prev);
    }

    return (
        <>
            <ChonChuyenKhoaBtn
                id="chon-chuyen-khoa"
                onClick={HideShowPopup}
            >
                Chọn chuyên khoa
            </ChonChuyenKhoaBtn>
            <Container show={show}>
                <Header>
                    <HeaderTitle>Chọn Chuyên Khoa</HeaderTitle>
                    <InputSearch 
                        placeholder="Tìm chuyên khoa"
                    />
                </Header>

                <Body>
                    <ListChuyenKhoa>
                        <QuayLaiText onClick={HideShowPopup}>Quay lại</QuayLaiText>
                        <Section>
                            <DivImg>
                                <Img 
                                    src={img}
                                />
                            </DivImg>
                            <DivInfo>
                                <InfoTitle>Cơ Xương Khớp, bệnh viện Chợ Rẫy.</InfoTitle>
                                <Address>201 Nguyễn Chí Thanh, Quận 5.</Address>
                                <DatLichKhamBtn>Đặt lịch khám</DatLichKhamBtn>
                            </DivInfo>
                        </Section>
                        <Section>
                            <DivImg>
                                <Img 
                                    src={img}
                                />
                            </DivImg>
                            <DivInfo>
                                <InfoTitle>Cơ Xương Khớp, bệnh viện Chợ Rẫy.</InfoTitle>
                                <Address>201 Nguyễn Chí Thanh, Quận 5.</Address>
                                <DatLichKhamBtn>Đặt lịch khám</DatLichKhamBtn>
                            </DivInfo>
                        </Section>
                        <Section>
                            <DivImg>
                                <Img 
                                    src={img}
                                />
                            </DivImg>
                            <DivInfo>
                                <InfoTitle>Cơ Xương Khớp, bệnh viện Chợ Rẫy.</InfoTitle>
                                <Address>201 Nguyễn Chí Thanh, Quận 5.</Address>
                                <DatLichKhamBtn>Đặt lịch khám</DatLichKhamBtn>
                            </DivInfo>
                        </Section>
                        <Section>
                            <DivImg>
                                <Img 
                                    src={img}
                                />
                            </DivImg>
                            <DivInfo>
                                <InfoTitle>Cơ Xương Khớp, bệnh viện Chợ Rẫy.</InfoTitle>
                                <Address>201 Nguyễn Chí Thanh, Quận 5.</Address>
                                <DatLichKhamBtn>Đặt lịch khám</DatLichKhamBtn>
                            </DivInfo>
                        </Section>
                    </ListChuyenKhoa>
                </Body>
            </Container>
        </>
        
    )
}

export default ChonChuyenKhoa;