import { 
    Banner, 
    Container, 
    Content, 
    GeneralInfo, 
    GeneralText, 
    BannerImg, 
    ImgText, 
    Item, 
    ItemContent, 
    ItemImg, 
    ItemMoreInfo, 
    ItemTitle, 
    ItemTitleText, 
    BenhVienInfo,
    StyleLink,
    BenhVienImg,
    ChuyenKhoaImg,
    BacSiImg
 } from './home.styles';

import banner from './banner.jpg';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBacSi, fetchChuyenKhoa, fetchCoSoYTe } from '../../redux/home/home.slice';
import BackToTop from '../../components/back-to-top/back-to-top.component';
import SearchBox from '../../components/search-box/search-box.component';

const Home = () => {
    const dispatch = useDispatch();
    const { cacChuyenKhoa, cacCoSoYTe, cacBacSi } = useSelector(state => state.home);

    useEffect(() => {
        dispatch(fetchChuyenKhoa());
        dispatch(fetchCoSoYTe());
        dispatch(fetchBacSi());
    }, [])

    return (
        <Container>
            <BackToTop />
            <Banner>
                <BannerImg
                    src={banner}
                    alt='banner-dat-lich-kham-online'
                />
                <SearchBox />
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