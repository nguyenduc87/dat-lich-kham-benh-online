import { Outlet } from "react-router-dom";
import { Container } from "./auth-template.styles";


const AuthTemplate = () => {
    return(
        <Container>

            <Outlet />
            
        </Container>
    )
}

export default AuthTemplate;