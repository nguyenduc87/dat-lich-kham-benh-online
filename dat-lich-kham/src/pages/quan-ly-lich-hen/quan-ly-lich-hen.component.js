import { 
    Alert,
    Container,
    Content,
    MainTable,
    Td,
    Th,
    Title,
    Tr
} from "./quan-ly-lich-hen.styles";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetLichHen } from "../../redux/lich-hen/lich-hen.slice";
import { useParams } from "react-router-dom";



const QuanLyLichHen = () => {
    const dispatch = useDispatch();
    const { userName } = useParams();
    const { cacLichHen } = useSelector(state => state.lichHen);
    const lichHen = cacLichHen.filter(item => item.userName === userName);
    let value = lichHen.length;
    useEffect(() => {
        dispatch(fetchGetLichHen());
    }, [])

    return(
        <Container>
            <Title>Quản Lý Lịch Hẹn</Title>
            {value = value === 0 ? <Alert>Chưa có lịch hẹn nào !</Alert> 
                : 
                <Content>
                    <MainTable>
                        <thead>
                            <Tr>
                                <Th>STT</Th>
                                <Th>Thời gian</Th>
                                <Th>Họ tên</Th>
                                <Th>Giới tính</Th>
                                <Th>Năm sinh</Th>
                                <Th>Số điện Thoại</Th>
                                <Th>Địa chỉ</Th>
                                <Th>Email</Th>
                                <Th>Lý do khám</Th>
                                <Th>Bệnh viện khám</Th>
                                <Th>Chuyên khoa khám</Th>
                                <Th>Bác sĩ khám</Th>
                                <Th>Giá khám</Th>
                                <Th>Trạng thái</Th>
                            </Tr>
                        </thead>
                        <tbody>
                            {lichHen.map(item =>
                                <Tr key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.thoiGian}</Td>
                                    <Td>{item.fullName}</Td>
                                    <Td>{item.gender}</Td>
                                    <Td>{item.birthYear}</Td>
                                    <Td>{item.phone}</Td>
                                    <Td>{item.address}</Td>
                                    <Td>{item.email}</Td>
                                    <Td>{item.lyDoKham}</Td>
                                    <Td>{item.benhVien}</Td>
                                    <Td>{item.chuyenKhoa}</Td>
                                    <Td>{item.bacSi}</Td>
                                    <Td>{item.giaKham}</Td>
                                    <Td>{item.status}</Td>
                                </Tr>
                            )}
                        </tbody>
                    </MainTable>
                </Content>
            }
            
        </Container>
    )
}

export default QuanLyLichHen;