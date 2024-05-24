import { 
    Button,
    Container,
    DataTable,
    StatusText,
    Td,
    Th,
    Title,
    Tr
} from "./danh-sach-lich-kham.styles";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, fetchGetLichKham } from "../../redux/lich-kham/lich-kham.slice";


const DanhSachLichKham = () => {
    const dispatch = useDispatch();
    const { cacLichKham } = useSelector(state => state.lichKham);

    useEffect(() => {
        dispatch(fetchGetLichKham());
    }, []);

    const handleClickButton = (id) => {
        dispatch(updateStatus(id));
    }
    
    return (
        <Container>
            <Title>Danh Sách Lịch Khám</Title>
            {cacLichKham &&
                <DataTable id="data-table">
                    <thead>
                        <Tr>
                            <Th>STT</Th>
                            <Th>Thời gian</Th>
                            <Th>Họ tên bệnh nhân</Th>
                            <Th>Giới tính</Th>
                            <Th>Năm sinh</Th>
                            <Th>Số điện Thoại</Th>
                            <Th>Địa chỉ</Th>
                            <Th>Email</Th>
                            <Th>Trạng thái</Th>
                            <Th>Hành động</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        {cacLichKham.map(item =>
                            <Tr key={item.id}>
                                <Td>{item.id}</Td>
                                <Td>{item.thoiGian}</Td>
                                <Td>{item.fullName}</Td>
                                <Td>{item.gender}</Td>
                                <Td>{item.birthYear}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.address}</Td>
                                <Td>{item.email}</Td> 
                                <Td>
                                    {item.status === 'Đã xác nhận' 
                                        ? <StatusText>Đã xác nhận</StatusText>
                                        : item.status
                                    }
                                </Td> 
                                <Td>
                                    {item.status !== 'Đã xác nhận' 
                                        && <Button onClick={() => handleClickButton(item.id)}>Xác nhận</Button>
                                    }
                                </Td> 
                            </Tr>
                        )}
                    </tbody>
                </DataTable>
            }
        </Container>
    )
}

export default DanhSachLichKham;