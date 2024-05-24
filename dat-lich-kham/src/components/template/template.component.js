import {
  Main,
  Header,
  Footer,
  Care,
  Menu,
  Health,
  Logo,
  Text,
  Title,
  MenuItem,
  Support,
  LichHen,
  Info,
  IconBox,
  CompanyAddress,
  CompanyName,
  CompanyInfo,
  FooterItem,
  ItemBox,
  ItemName,
  FooterItemTitle,
  Icon,
  DangNhapText,
  LogoStyleLink,
  Hello,
  Popup,
  PopupText,
  Line,
  SignOut,
} from "./template.styles";

import {
  Outlet,
  useNavigate,
} from "react-router-dom";

import facebook from './icon-social/facebook.png';
import youtube from './icon-social/youtube.png';
import tiktok from './icon-social/tiktok.png';

import { StyleLink } from "../../pages/home/home.styles";
import MenuPopup from "../menu-popup/menu-popup.component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLogOut, fetchUserMe } from "../../redux/auth/auth.slice";

const Template = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, loading } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(fetchUserMe());
  }, []);

  const handleLogOut = async () =>{
    await dispatch(fetchLogOut());
    navigate('/');
  }

  const handleClick = () => {
    navigate(`/quan-ly-lich-hen/${currentUser.fullName}`);
  }

  return (
    <Main>
      <Header>
        <MenuPopup />
        <Logo>
          <LogoStyleLink to='/'>
            <Health>Health</Health> <Care>Care</Care>
          </LogoStyleLink>
        </Logo>
        
        <Menu>
          <StyleLink to='/danh-sach-chuyen-khoa'>
            <MenuItem>
              <Title>Chuyên khoa</Title>
              <Text>Tìm theo chuyên khoa</Text>
            </MenuItem>
          </StyleLink>
          <StyleLink to='/danh-sach-benh-vien'>
            <MenuItem>
              <Title>Cơ sở y tế</Title>
              <Text>Tìm bệnh viện khám</Text>
            </MenuItem>
          </StyleLink>
          <MenuItem>
            <Title>Bác sĩ</Title>
            <Text>Tìm bác sĩ riêng</Text>
          </MenuItem>
        </Menu>

        <Support>
          <LichHen>
            {!currentUser ? 
              <StyleLink to='/auth/dang-nhap'>
                <DangNhapText>Đăng nhập</DangNhapText>
              </StyleLink>
              : 
              <Hello>
                {currentUser.fullName}
                <Popup>
                  <PopupText onClick={handleClick}>Xem lịch hẹn</PopupText>
                  <Line></Line>
                  <SignOut
                    onClick={handleLogOut}
                  >
                    Đăng xuất
                  </SignOut>
                </Popup>
              </Hello>
            }
          </LichHen>
          
        </Support>
      </Header>

      {loading === false && <Outlet />}

      <Footer>
        <Info>
          <CompanyAddress>
            <CompanyName>Công ty TNHH HealthCare Việt Nam</CompanyName>
            <CompanyInfo>Địa chỉ: 891 Nguyễn Văn Quá, P. ĐHT, Q.12, TPHCM</CompanyInfo>
            <CompanyInfo>Holine: 19001234 (8:30 - 20:30 từ T2 đến T7)</CompanyInfo>
          </CompanyAddress>

          <FooterItem>
            <FooterItemTitle>Dịch vụ</FooterItemTitle>
            <ItemBox>
              <ItemName>Đặt khám chuyên khoa</ItemName>
              <ItemName>Đặt khám bệnh viện</ItemName>
              <ItemName>Đặt khám bác sĩ</ItemName>
            </ItemBox>
          </FooterItem>
          <FooterItem>
            <FooterItemTitle>Đối tác bảo trợ nội dung</FooterItemTitle>
            <ItemBox>
              <ItemName>Hello Doctor</ItemName>
              <ItemName>Hệ thống y khoa quốc tế Bernard</ItemName>
              <ItemName>Doctor check</ItemName>
            </ItemBox>
          </FooterItem>
        </Info>

        <IconBox>
          <Icon
            src={tiktok}
            alt="tiktok"
          />
          <Icon
            src={facebook}
            alt="facebook"
          />
          <Icon
            src={youtube}
            alt="youtube"
          />
        </IconBox>
      </Footer>
      {/* <BackToTop /> */}
    </Main>
  )
}

export default Template;