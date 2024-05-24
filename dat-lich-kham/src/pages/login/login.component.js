import { 
    Block,
    Body,
    Container,
    DangKy,
    DangNhap,
    Error,
    Footer,
    ForgetPass,
    FormDangNhap,
    Header,
    Img,
    Input,
    LabelCheck,
    LabelText,
    DivRememberPass,
    DangKyNgay,
    SignIn,
    Button,
    LineLogin
} from '../signup/signup.styles';

import { TextLogin, TextSignUp} from './login.styles';


import img from '../signup/image.jpg';

import { useForm } from "react-hook-form";
import { StyleLink } from "../home/home.styles";
import { useDispatch } from 'react-redux';
import { fetchLogin, fetchUserMe } from "../../redux/auth/auth.slice";
import HideShowPass from "../../components/hide-show-pass/hide-show-pass.component";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = async (data) => {
        const result = await dispatch(fetchLogin({
            phone: data.phone,
            password: data.password
        }));
        // payload return true
        if (result.payload === true) {
            alert('Đăng nhập thành công!');
            // call api user/me
            // await dispatch(fetchUserMe()); khi qua trang home thì có gọi fetchUserMe()
            navigate('/');
        } else {
            alert('Số điện thoại hoặc mật khẩu chưa đúng!')
        }
    }

    return(
        <Container>
            <FormDangNhap onSubmit={handleSubmit(onSubmit)}>
                <Header>
                    <DangNhap>
                        <TextLogin>Đăng Nhập</TextLogin>
                        <LineLogin></LineLogin>
                    </DangNhap>
                    <DangKy>
                        <StyleLink to='/auth/dang-ky'> 
                            <TextSignUp>Đăng Ký</TextSignUp>
                        </StyleLink>
                    </DangKy>
                </Header>

                <Body>
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
                            />
                            <LabelCheck for="check">Ghi nhớ mật khẩu</LabelCheck>
                        </DivRememberPass>
                        <StyleLink to='/auth/quen-mat-khau'>
                            <DangKyNgay>Quên mật khẩu?</DangKyNgay>
                        </StyleLink>
                    </ForgetPass>

                    <SignIn>
                        <Button type="submit">Đăng nhập</Button>
                    </SignIn>
                </Body>

                <Footer>
                    <p>Chưa có tài khoản?
                        <StyleLink to='/auth/dang-ky'>
                            <DangKyNgay> Đăng ký ngay</DangKyNgay>
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

export default Login;