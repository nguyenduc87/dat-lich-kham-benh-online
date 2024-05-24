import {
    ListPopup,
    ListClose,
    ListContainer,
    ListPopupContent,
    ListPopupItem,
    ListPopupItemText,
    DanhMuc
    
} from "./menu-popup.styles";

import { 
    Logo,
    Health,
    Care,
    LogoStyleLink
 } 
from "../template/template.styles";

import { useState } from "react";

const MenuPopup = () => {
    const [show, setShow] = useState(false);

    const HideShowPopup = () => {
        setShow(prev => !prev);
    }

    return (
        <>
            <DanhMuc
                onClick={HideShowPopup}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </DanhMuc>
            <ListPopup
                show={show}
            >
                <ListClose onClick={HideShowPopup}>X</ListClose>
                <ListContainer
                    show={show}
                >
                    <ListPopupContent>
                        <Logo>
                            <LogoStyleLink 
                                to='/' 
                                onClick={HideShowPopup}
                            >
                                <Health>Health</Health> <Care>Care</Care>
                            </LogoStyleLink>
                        </Logo>
                        <ListPopupItem>
                            <ListPopupItemText>Tìm theo chuyên khoa</ListPopupItemText>
                            <ListPopupItemText>Tìm bệnh viện khám</ListPopupItemText>
                            <ListPopupItemText>Tìm bác sĩ riêng</ListPopupItemText>
                        </ListPopupItem>
                    </ListPopupContent>
                </ListContainer>
            </ListPopup>
        </>
    )
}

export default MenuPopup;