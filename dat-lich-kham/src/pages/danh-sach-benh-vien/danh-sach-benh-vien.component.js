import { 
    BenhVienImg,
    ImgText,
    ItemImg,
    ItemTitleText,
    StyleLink
} from "../home/home.styles";

import { 
    Container,
    ListItem
} from "../danh-sach-chuyen-khoa/danh-sach-chuyen-khoa.styles";

import { 
    Address
} from "./danh-sach-benh-vien.styles";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchListCoSoYTe } from "../../redux/benh-vien/benh-vien.slice";


const ListBenhVien = () => {
    const dispatch = useDispatch();
    const { cacCoSoYTe } = useSelector(state => state.benhVien);

    useEffect(() => {
        dispatch(fetchListCoSoYTe());
    }, [])

    return (
        <Container>
            <ItemTitleText>Các Cơ Sở Y Tế</ItemTitleText>
            <ListItem>
                {cacCoSoYTe.map(item => 
                <StyleLink to={`/chi-tiet-benh-vien/${item.id}`}>
                    <ItemImg key={item.id}>
                        <BenhVienImg 
                            src={`http://localhost:3100/${item.image}`}
                            alt={item.name}
                        />
                        <ImgText>{item.name}</ImgText>
                        <Address>{item.address}</Address>
                    </ItemImg>
                </StyleLink>
                )}
            </ListItem>
        </Container>
    )
}

export default ListBenhVien;