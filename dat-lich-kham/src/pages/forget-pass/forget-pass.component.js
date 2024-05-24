import { 
    Block,
    Body,
    Button,
    Container,
    DangNhap, 
    DangKyNgay, 
    Error, 
    Footer, 
    FormDangNhap,
    Header,
    Img,
    Input,
    LabelText,
    SignIn,
    LineLogin,
} from "../signup/signup.styles";

import { TextForgetPass } from "./forget-pass.styles";

import img from '../signup/image.jpg';

import { useForm } from "react-hook-form";
import { StyleLink } from "../home/home.styles";


const ForgetPassword = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <Container>
            <FormDangNhap onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <DangNhap>
                        <TextForgetPass>Quên mật khẩu</TextForgetPass>
                        <LineLogin></LineLogin>
                    </DangNhap>
                </Header>

                <Body>
                    <Block>
                        <LabelText>Email</LabelText>
                        <Input 
                            type="text"
                            placeholder="Nhập Email"
                            {...register('email', { 
                                required : true,
                                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
                            })}
                        />
                        <Error>
                            {errors.email?.type === 'required' && "Cần nhập email."}
                            {errors.email?.type === 'pattern' && "Email chưa hợp lệ."}
                        </Error>
                        <p>Mật khẩu sẽ được gửi qua email này.</p>
                    </Block>

                    <SignIn>
                        <Button type="submit">Gửi</Button>
                    </SignIn>
                </Body>

                <Footer>
                    <p>Đã có tài khoản? 
                        <StyleLink to='/auth/dang-nhap'>
                            <DangKyNgay> Đăng nhập ngay</DangKyNgay>
                        </StyleLink>
                    </p>
                </Footer>
            </FormDangNhap>
            <Img 
                src={img}
            />
        </Container>
    )
}

export default ForgetPassword;