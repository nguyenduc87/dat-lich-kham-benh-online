import { 
    Container,
    Div,
    Error,
    Footer,
    Form,
    Input,
    Label,
    LoginText,
    SignInBtn
} from "./login.styles";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchLogin } from "../../redux/auth/auth.slice";
import { useNavigate } from "react-router-dom";

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
            userName: data.userName,
            password: data.password
        }))

        if (result.payload === true) {
            alert('Đăng nhập thành công!')
            navigate('/danh-sach-lich-kham');
        } else {
            alert('Vui lòng thử lại');
        }
    }

    return (
        <Container>
            <LoginText>Login</LoginText>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Div>
                    <Label>UserName</Label>
                    <Input 
                        placeholder="Nhập user name"
                        {...register('userName', { required : true})}
                    />
                    <Error>
                        {errors.userName?.type === 'required' && 'Cần nhập user name.'}
                    </Error>
                </Div>
                <Div>
                    <Label>Password</Label>
                    <Input 
                        type="password"
                        placeholder="Nhập password"
                        {...register('password', { required : true })}
                    />
                    <Error>
                        {errors.password?.type === 'required' && 'Cần nhập password.'}
                    </Error>
                </Div>
                <Footer>
                    <SignInBtn>Sign in</SignInBtn>
                </Footer>
            </Form>
        </Container>
    )
}

export default Login;