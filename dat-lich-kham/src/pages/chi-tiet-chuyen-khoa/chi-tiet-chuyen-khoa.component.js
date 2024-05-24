import { 
    Container, 
    Content, 
    ContentText, 
    LiInfo, 
    ListBacSi, 
    ReadMore, 
    Title, 
    UlInfo, 
    DivNoneInfo, 
    UlTitle,
    ListItem,
    ItemLeft,
    BacSiImage,
    BacSiName,
    Item,
    Img,
    Name,
    Text,
    ItemRight,
    KhungThoiGian,
    LichKham,
    ThoiGianKham,
    ChonThoiGian,
    ItemTime,
    DiaChiKhamText,
    TenPhongKham,
    DiaChiKham,
    GiaKham,
    TienKham,
    LinkItem
} from "./chi-tiet-chuyen-khoa.styles";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailChuyenKhoa} from "../../redux/chuyen-khoa/chuyen-khoa.slice";
import Loading from "../../components/loading/loading.component";
import ShowDatePopup from "../../components/show-date-popup/show-date-popup.component";

const DetailChuyenKhoa = () => {
    const dispatch = useDispatch();
    const { id : idParam } = useParams();
    const chuyenKhoa = useSelector(state => state.chuyenKhoa.chuyenKhoa);

    useEffect(() => {
        dispatch(fetchDetailChuyenKhoa(Number(idParam)));
    }, []) 

    // Read more, Read less
    const [show, setShow] = useState(false);
    const handleReadMoreClick = () => {
        setShow(prev => !prev);
    }

    return (
        <Container>
            {!chuyenKhoa ? <Loading /> : 
                <>
                <Content>
                    <Title>{chuyenKhoa.name}</Title>
                    <ContentText>
                        <UlTitle>{chuyenKhoa.info_benh.title}</UlTitle>
                        <UlInfo>
                            {chuyenKhoa.info_benh.content.map(item =>
                                <LiInfo key={item.id}>{item}</LiInfo> 
                            )}
                            
                        </UlInfo>
                        <DivNoneInfo show={show}>
                            <UlTitle>{chuyenKhoa.info_benh.tenKhoa}</UlTitle>
                            <UlInfo>
                                {chuyenKhoa.info_benh.list_benh.map(item =>
                                    <LiInfo key={item.id}>{item}</LiInfo>
                                )}
                            </UlInfo>
                        </DivNoneInfo>
                    </ContentText>
                    <ReadMore
                        onClick={handleReadMoreClick}
                    >
                        {show ? "Ẩn bớt" : "Xem thêm"}
                    </ReadMore>
                </Content>
        
                <ListBacSi>
                    {chuyenKhoa.info_BacSi.map(doctor =>
                        <ListItem key={doctor.id}>
                            <Item>
                                <ItemLeft>
                                    <BacSiImage>
                                        <Img 
                                            src={`http://localhost:3100/${doctor.image}`}
                                            alt={doctor.name}
                                        />
                                    </BacSiImage>
                                    <BacSiName>
                                        <Name>{doctor.name}</Name>
                                        <Text>{doctor.text}</Text>
                                    </BacSiName>
                                </ItemLeft>

                                <ItemRight>
                                    <KhungThoiGian>
                                        <ShowDatePopup />
                                        <LichKham>Lịch Khám</LichKham>
                                            <ThoiGianKham>
                                                {doctor.lichKham.map(time =>
                                                    <LinkItem 
                                                        to={`/chi-tiet-chuyen-khoa/${idParam}/dat-lich-kham?idDoctor=${doctor.id}&time=${time}`}
                                                    >
                                                        <ItemTime key={time.id}>{time}</ItemTime>
                                                    </LinkItem>
                                                )}
                                            </ThoiGianKham>
                                        <ChonThoiGian>Chọn thời gian và đặt lịch (phí đặt lịch: 0đ)</ChonThoiGian>
                                    </KhungThoiGian>
                                    <KhungThoiGian>
                                        <DiaChiKhamText>Địa Chỉ Khám:</DiaChiKhamText>
                                        <TenPhongKham>{doctor.diaChiKham.noiKham}</TenPhongKham>
                                        <DiaChiKham>{doctor.diaChiKham.diaChi}</DiaChiKham>
                                    </KhungThoiGian>
                                    <KhungThoiGian>
                                        <GiaKham>Giá Khám: </GiaKham>
                                        <TienKham>{doctor.tienKham}</TienKham>
                                    </KhungThoiGian>
                                </ItemRight>
                            </Item>
                        </ListItem>
                    )}
                </ListBacSi>
                </>
            }
        </Container>
    )
}

export default DetailChuyenKhoa;