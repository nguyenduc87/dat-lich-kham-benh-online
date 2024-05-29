import { 
    BannerContentForm, 
    InputBox,
    Text
} from "./search-box.styles";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTenChuyenKhoa } from "../../redux/chuyen-khoa/chuyen-khoa.slice";
import { useState } from "react";


const SearchBox = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (search) {
            const result = await dispatch(fetchTenChuyenKhoa(search));
            const chuyenKhoa = result.payload;
            if (chuyenKhoa) {
                navigate(`/chi-tiet-chuyen-khoa/${chuyenKhoa.id}`)
            } else {
                alert('Tên chuyên khoa chưa đúng.');
            }
        } else {
            alert('Vui lòng nhập tên chuyên khoa.')
        }
        
        
        // const result = await dispatch(fetchListChuyenKhoa());
        // const listChuyenKhoa = result.payload;
        // const target = listChuyenKhoa.find(
        //     item => item.name.toLowerCase().includes(search.toLowerCase())
        // );
        // if (target) {
        //     navigate(`/chi-tiet-chuyen-khoa/${target.id}`)
        // } else {
        //     alert('Vui lòng thử lại.');
        // }
    }

    return(
        <BannerContentForm 
            onSubmit={handleSubmit}
        >
            <Text>Đặt khám với bác sĩ chuyên khoa và bệnh viện danh tiếng</Text>
            <InputBox 
                placeholder='Tìm chuyên khoa' 
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
        </BannerContentForm>
    )
}

export default SearchBox;