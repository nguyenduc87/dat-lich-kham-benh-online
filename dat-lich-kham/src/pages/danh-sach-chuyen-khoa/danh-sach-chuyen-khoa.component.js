import { 
    ChuyenKhoaImg,
    ImgText,
    ItemImg,
    ItemTitleText,
    StyleLink
} from "../home/home.styles";

import { 
    Container, 
    ListItem
} from "./danh-sach-chuyen-khoa.styles";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListChuyenKhoa } from "../../redux/chuyen-khoa/chuyen-khoa.slice";


const ListChuyenKhoa = () => {
    const dispatch = useDispatch();
    const { cacChuyenKhoa } = useSelector(state => state.chuyenKhoa);

    useEffect(() => {
        dispatch(fetchListChuyenKhoa());
    }, [])

    return (
        <Container>
            <ItemTitleText>Các Chuyên Khoa</ItemTitleText>
            <ListItem>
                {cacChuyenKhoa.map(item => 
                <StyleLink to={`/chi-tiet-chuyen-khoa/${item.id}`}>
                    <ItemImg key={item.id}>
                        <ChuyenKhoaImg 
                            src={`http://localhost:3100/${item.image}`}
                            alt={item.name}
                        />
                        <ImgText>{item.name}</ImgText>
                    </ItemImg>
                </StyleLink>
                )}
            </ListItem>
        </Container>
    )
}

export default ListChuyenKhoa;