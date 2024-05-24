import { useState } from "react";
import { Container, IconSvg } from "./back-to-top.styles";


const BackToTop = () => {
    // const [show, setShow] = useState(false);
    // window.addEventListener('scroll', () => {
    //     const scrollValue = window.scrollY;
    //     if (scrollValue > 1300) {
    //         setShow(prev => !prev);
    //     }
    // })
    
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Container 
            onClick={handleBackToTop}
            // show={show}
        >
            <IconSvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </IconSvg>
        </Container>
    )
}

export default BackToTop;