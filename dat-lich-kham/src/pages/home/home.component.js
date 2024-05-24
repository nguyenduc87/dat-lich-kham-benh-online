import { 
    Banner, 
    BannerContentForm, 
    Container, 
    Content, 
    GeneralInfo, 
    GeneralText, 
    BannerImg, 
    ImgText, 
    InputBox, 
    Item, 
    ItemContent, 
    ItemImg, 
    ItemMoreInfo, 
    ItemTitle, 
    ItemTitleText, 
    Text,
    BenhVienInfo,
    StyleLink,
    BenhVienImg,
    ChuyenKhoaImg,
    BacSiImg
 } from './home.styles';

import banner from './banner.jpg';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBacSi, fetchChuyenKhoa, fetchCoSoYTe } from '../../redux/home/home.slice';
import BackToTop from '../../components/back-to-top/back-to-top.component';
import { fetchListChuyenKhoa } from '../../redux/chuyen-khoa/chuyen-khoa.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cacChuyenKhoa, cacCoSoYTe, cacBacSi } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchChuyenKhoa());
        dispatch(fetchCoSoYTe());
        dispatch(fetchBacSi());
    }, [])

    const [search, setSearch] = useState('');
    const hanldeOnSubmit = async (event) => {
        event.preventDefault();
        const result = await dispatch(fetchListChuyenKhoa());
        const listChuyenKhoa = result.payload;
        const target = listChuyenKhoa.find(
            item => item.name.toLowerCase().includes(search.toLowerCase())
        );
        if (target) {
            navigate(`/chi-tiet-chuyen-khoa/${target.id}`)
        } else {
            alert('Vui lòng thử lại.')
        }
    }

    return (
        <Container>
            <BackToTop />
            <Banner>
                <BannerImg
                    src={banner}
                    alt='banner-dat-lich-kham-online'
                />
                <BannerContentForm 
                    onSubmit={hanldeOnSubmit}
                >
                    <Text>Đặt khám với bác sĩ chuyên khoa và bệnh viện danh tiếng</Text>
                    <InputBox 
                        placeholder='Tìm chuyên khoa' 
                        value={search}
                        onChange={event => setSearch(event.target.value)}
                    />
                </BannerContentForm>
            </Banner>
            
            <Content>
                {/* Chuyên Khoa */}
                <Item>
                    <ItemTitle>
                        <ItemTitleText>Chuyên khoa</ItemTitleText>
                        <StyleLink to='/danh-sach-chuyen-khoa'>
                            <ItemMoreInfo>Xem thêm</ItemMoreInfo>
                        </StyleLink>
                    </ItemTitle>
                    <ItemContent>
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
                    </ItemContent>
                </Item>
                {/* Cơ sở y tế */}
                <Item>
                    <ItemTitle>
                        <ItemTitleText>Cơ sở y tế</ItemTitleText>
                        <StyleLink to='/danh-sach-benh-vien'>
                            <ItemMoreInfo>Xem thêm</ItemMoreInfo>
                        </StyleLink>
                    </ItemTitle>
                    <ItemContent>
                        {cacCoSoYTe.map(item => 
                        <StyleLink to={`/chi-tiet-benh-vien/${item.id}`}>
                            <ItemImg key={item.id}>
                                <BenhVienImg 
                                    src={`http://localhost:3100/${item.image}`}
                                    alt={item.name}
                                />
                                
                                <BenhVienInfo>
                                    <ImgText>{item.name}</ImgText>
                                    <GeneralText>{item.address}</GeneralText>
                                </BenhVienInfo>
                            </ItemImg>
                        </StyleLink>
                        )}
                    </ItemContent>
                </Item>
                {/* Bác sĩ */}
                <Item>
                    <ItemTitle>
                        <ItemTitleText>Bác sĩ</ItemTitleText>
                        <ItemMoreInfo>Xem thêm</ItemMoreInfo>
                    </ItemTitle>
                    <ItemContent>
                        {cacBacSi.map(item => 
                            <ItemImg key={item.id}>
                                <BacSiImg 
                                    src={`http://localhost:3100/${item.image}`}
                                    alt={`Bác sĩ ${item.chuyenKhoa}`}
                                />
                                <ImgText>{item.name}</ImgText>
                                <GeneralInfo>
                                    <GeneralText>{item.chuyenKhoa}</GeneralText>
                                    <GeneralText>{item.workplace}</GeneralText>
                                </GeneralInfo>
                            </ItemImg>
                        )}
                    </ItemContent>
                </Item>
            </Content>
        </Container>

    )
}

export default Home;