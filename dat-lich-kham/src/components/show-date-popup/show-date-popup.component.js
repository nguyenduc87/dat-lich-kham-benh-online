import { 
    Container, 
    LiPopup, 
    Main, 
    Overlay, 
    UlPopup,
    ArrowSvg, 
    FlexNgayKham, 
    NgayKham,
    BlockNgayKham
} from "./show-date-popup.styles"

import { useState } from "react";

const ShowDatePopup = () => {
    const [show, setShow] = useState(false);

    const HideShowPopup = () => {
        setShow(prev => !prev);
    }

    const d = new Date();
    const homNay = d.getDay() + 1;  // Thứ
    const ngayHienTai = d.getDate(); // Ngày
    const thangHienTai = d.getMonth() + 1;  // Tháng

    return (
        <>
            <BlockNgayKham>
                <FlexNgayKham onClick={HideShowPopup}>
                    <NgayKham>{`Thứ ${homNay} - ${ngayHienTai}/${thangHienTai}`}</NgayKham>
                    <ArrowSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </ArrowSvg>
                </FlexNgayKham>
            </BlockNgayKham>
            
            <Main show={show}>
                <Overlay 
                    show={show} 
                    onClick={HideShowPopup}    
                />
                <Container show={show}>
                    <UlPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai}/${thangHienTai}`}</LiPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai+1}/${thangHienTai}`}</LiPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai+2}/${thangHienTai}`}</LiPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai+3}/${thangHienTai}`}</LiPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai+4}/${thangHienTai}`}</LiPopup>
                        <LiPopup>{`Thứ ${homNay} - ${ngayHienTai+5}/${thangHienTai}`}</LiPopup>
                        <LiPopup 
                            onClick={HideShowPopup}
                        >
                            Bỏ Qua
                        </LiPopup>
                    </UlPopup>
                </Container>
            </Main>
        </>
    )
}

export default ShowDatePopup;