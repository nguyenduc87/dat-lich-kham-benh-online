import {
    BenhVienImage,
    BenhVienInfo,
    Img,
    BlockName,
    BlockLogo,
    LogoImg,
    TenBv,
    DiaChi,
    Menu,
    LiMenu,
    Status,
    StatusLiText,
    Container,
    GioiThieu,
    H3TieuDe,
    PTieuDe,
    TheManh,
    LiChuyenMon,
    QuyTrinhKham,
    TextCacBuoc,
    GiaKham,
    LogoSection,
} from "./chi-tiet-benh-vien.styles";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDetailCoSoYTe } from "../../redux/benh-vien/benh-vien.slice";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/loading.component";
import ChonChuyenKhoa from "../../components/chon-chuyen-khoa/chon-chuyen-khoa.component";

const DetailBenhVien = () => {
    const dispatch = useDispatch();
    const { id : idParam } = useParams();
    const coSoYTe = useSelector(state => state.benhVien.coSoYTe);   // render lần 1: -> null

    useEffect(() => {
        dispatch(fetchDetailCoSoYTe(Number(idParam)));
    }, [])

    const handleClickScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <Container>
            {!coSoYTe ? <Loading /> : 
            <>
                <BenhVienImage>
                    <Img
                        src={`http://localhost:3100/${coSoYTe.image}`}
                        alt={coSoYTe.name}
                    />
                    <BlockName>
                        <BlockLogo>
                            <LogoSection>
                                <LogoImg
                                    src={`http://localhost:3100/${coSoYTe.logo}`}
                                />
                            </LogoSection>
                            
                            <div>
                                <TenBv>{coSoYTe.name}</TenBv>
                                <DiaChi>{coSoYTe.address}</DiaChi>
                            </div>
                            
                        </BlockLogo>

                    </BlockName>
                </BenhVienImage>

                <Menu>
                    <LiMenu onClick={() => handleClickScroll("gioi-thieu")}>Giới Thiệu</LiMenu>
                    <LiMenu onClick={() => handleClickScroll("the-manh")}>Dịch Vụ Y Khoa</LiMenu>
                    <LiMenu onClick={() => handleClickScroll("quy-trinh-kham")}>Quy trình khám</LiMenu>
                    <LiMenu onClick={() => handleClickScroll("gia-kham")}>Giá khám bệnh</LiMenu>
                    <LiMenu onClick={() => handleClickScroll("chon-chuyen-khoa")}>Chọn Chuyên Khoa</LiMenu>
                </Menu>

                <BenhVienInfo>
                    <Status>
                        <p>Hàng nghìn người bệnh đến khám tại {coSoYTe.name} mỗi ngày. Nhằm nâng cao chất lượng dịch vụ và hỗ trợ người bệnh tốt hơn, {coSoYTe.name} triển khai đặt khám online thông qua Nền tảng Đặt khám HeathyCare. </p>
                        <p>Để giảm thời gian chờ đợi và nhận được hướng dẫn đi khám tại {coSoYTe.name}, người bệnh vui lòng:</p>
                        <ul>
                            <StatusLiText>Chọn chuyên khoa phù hợp cần đi khám</StatusLiText>
                            <StatusLiText>Chọn thời gian đặt khám</StatusLiText>
                            <StatusLiText>Đặt hẹn online trước khi đến khám. </StatusLiText>
                        </ul>
                    </Status>

                    <GioiThieu id="gioi-thieu">
                        <H3TieuDe>GIỚI THIỆU</H3TieuDe>
                        <p>{coSoYTe.gioiThieu.lichSu}</p>
                        <p>{coSoYTe.gioiThieu.text}</p>
                        <PTieuDe>Địa chỉ bệnh viện:</PTieuDe>
                        <p>{coSoYTe.address}</p>
                        <PTieuDe>Thời gian làm việc:</PTieuDe>
                        <p>Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:</p>
                        <StatusLiText>{coSoYTe.thoiGian.ngayThuong}</StatusLiText>
                        <StatusLiText>{coSoYTe.thoiGian.cuoiTuan}</StatusLiText>
                    </GioiThieu>
                    
                    <TheManh id="the-manh">
                        <H3TieuDe>Dịch Vụ Y Khoa</H3TieuDe>
                        <PTieuDe>{coSoYTe.dichVu.khoaNoi.title}</PTieuDe>
                        {coSoYTe.dichVu.khoaNoi.chuyenKhoa.map(item => 
                            <LiChuyenMon key={item.id}>{item}</LiChuyenMon>
                        )}

                        <PTieuDe>{coSoYTe.dichVu.khoaNgoai.title}</PTieuDe>
                        {coSoYTe.dichVu.khoaNgoai.chuyenKhoa.map(item =>
                            <StatusLiText key={item.id}>{item}</StatusLiText>
                        )}

                        <PTieuDe>{coSoYTe.dichVu.hoTro.title}</PTieuDe>
                        {coSoYTe.dichVu.hoTro.chuyenKhoa.map(item =>
                            <StatusLiText key={item.id}>{item}</StatusLiText>
                        )}
                    </TheManh>

                    <QuyTrinhKham  id="quy-trinh-kham">
                        <H3TieuDe>QUY TRÌNH ĐI KHÁM</H3TieuDe>
                        <ul>
                            <TextCacBuoc>Bước 1. Đặt khám qua Nền tảng HealthCare</TextCacBuoc>
                            <StatusLiText>Chọn "{coSoYTe.name}"</StatusLiText>
                            <StatusLiText>Chọn chuyên khoa khám</StatusLiText>
                            <StatusLiText>Đặt khám & làm theo hướng dẫn</StatusLiText>
                        </ul>
                        <ul>
                            <TextCacBuoc>Bước 2. Đến quầy tiếp nhận tại Khoa khám bệnh</TextCacBuoc>
                            <StatusLiText>Đến tầng trệt nhà A, ĐẾN TRƯỚC GIỜ HẸN 30 phút (Khoa khám bệnh, {coSoYTe.address}) </StatusLiText>
                            <StatusLiText>Vào "Khu nhận bệnh" (tầng trệt, nhà A) để được hướng dẫn</StatusLiText>
                        </ul>
                        <ul>
                            <TextCacBuoc>Bước 3. Vào phòng khám gặp bác sĩ khám</TextCacBuoc>
                            <StatusLiText>Lên lầu 1 Khoa khám bệnh (tầng trên, Nhà A)</StatusLiText>
                            <StatusLiText>Chờ đến lượt, vào phòng khám đã đăng ký gặp bác sĩ khám</StatusLiText>
                        </ul>
                    </QuyTrinhKham>

                    <GiaKham id="gia-kham">
                        <H3TieuDe>GIÁ KHÁM BỆNH</H3TieuDe>
                        <PTieuDe>Chi phí khám thường:</PTieuDe>
                        <StatusLiText>Bệnh nhân không có BHYT: Đóng {coSoYTe.giaKham.khamThuong} VNĐ/ lượt khám</StatusLiText>
                        <StatusLiText>Chi phí khám tại Bệnh viện theo qui định chung của Bộ Y tế</StatusLiText>
                        <PTieuDe>Một số giấy tờ nên mang theo khi đi khám:</PTieuDe>
                        <StatusLiText>Thẻ bảo hiểm y tế còn hạn sử dụng</StatusLiText>
                        <StatusLiText>Chứng minh thư nhân dân hoặc giấy khai sinh (trẻ em)</StatusLiText>
                        <StatusLiText>Giấy chuyển viện đến Bệnh viện Chợ Rẫy (nếu có)</StatusLiText>
                    </GiaKham>
                </BenhVienInfo>
                <ChonChuyenKhoa />
            </>
            }
        </Container>
    )
}

export default DetailBenhVien;