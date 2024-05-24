import { 
    Block,
    Body,
    Button,
    Container,
    DangNhap, 
    DangKy, 
    DangKyNgay, 
    DivRememberPass, 
    Error, 
    Footer, 
    ForgetPass, 
    FormDangNhap,
    Header,
    Img,
    Input,
    LabelText,
    SignIn,
    LabelCheck,
    LineSignUp,
    TextLogin,
    TextSignUp,
    Shape,
} from "./signup.styles";

import img from './image.jpg';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { StyleLink } from "../home/home.styles";
import { useDispatch } from 'react-redux';
import { fetchSignUp } from "../../redux/auth/auth.slice";
import HideShowPass from "../../components/hide-show-pass/hide-show-pass.component";


const SignUP = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = async (data) => {
        const status = await dispatch(fetchSignUp({
            fullName: data.fullName.trim(),
            phone: data.phone,
            email: data.email,
            password: data.password
        }));

        if (status.payload === 'success') {
            alert('Đăng ký thành công!');
            navigate('/auth/dang-nhap');
        } else {
            alert('Vui lòng thử lại!');
        }
    }

    return(
        <Container>
            
            <FormDangNhap onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <DangNhap>
                        <StyleLink to='/auth/dang-nhap'>
                            <TextLogin>Đăng Nhập</TextLogin>
                        </StyleLink>
                    </DangNhap>
                    <DangKy>
                        <TextSignUp>Đăng Ký</TextSignUp>
                        <LineSignUp></LineSignUp>
                    </DangKy>
                </Header>

                <Body>
                    <Block>
                        <LabelText>Họ và tên</LabelText>
                        <Input 
                            type="text"
                            placeholder="Nhập họ và tên"
                            {...register('fullName', { required : true })}
                        />
                        <Error>
                            {errors.fullName?.type === 'required' && "Cần nhập họ và tên."}
                        </Error>
                    </Block>

                    <Block>
                        <LabelText>Số điện thoại</LabelText>
                        <Input 
                            type="number"
                            placeholder="Nhập số điện thoại"
                            {...register('phone', { required : true })}
                        />
                        <Error>
                            {errors.phone?.type === 'required' && "Cần nhập số điện thoại."}
                        </Error>
                    </Block>

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
                    </Block>

                    <Block>
                        <LabelText>Mật khẩu</LabelText>
                        <Input
                            id='password'
                            type='password'
                            placeholder="Nhập mật khẩu"
                            {...register("password", {
                                required: true,
                              })}
                        />

                        <HideShowPass />
                        
                        <Error>
                            {errors.password?.type === 'required' && "Cần nhập password."}
                        </Error>
                    </Block>
                        
                    <ForgetPass>
                        <DivRememberPass>
                            <Input 
                                id="check"
                                type="checkbox"
                                checked
                            />
                            <LabelCheck for="check">Tôi đã đọc và đồng ý các điều khoản và điều kiện sử dụng.</LabelCheck>
                        </DivRememberPass>                        
                    </ForgetPass>

                    <SignIn>
                        <Button type="submit">Đăng Ký</Button>
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

export default SignUP;