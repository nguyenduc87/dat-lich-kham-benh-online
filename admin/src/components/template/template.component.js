import { Outlet } from "react-router-dom";
import { Container } from "./template.styles";



const Template = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    )
}

export default Template;