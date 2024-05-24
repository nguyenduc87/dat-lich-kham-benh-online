import { 
    Body, 
    Footer, 
    GiaKhamBenh, 
    Header, 
    InfoBacSi, 
    FormDatLich, 
    Main, 
    Title,
    DivImg,
    Img,
    DivInfo,
    TenBacSi,
    Text,
    Input,
    LabelCheck,
    Gender,
    TextArea,
    DivFormat,
    XacNhanBtn,
    HuyBtn,
    Container,
    LabelText,
    InputCheck,
    Span,
    DivLeft,
    DivRight
} from "./dat-lich-kham.styles";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { fetchAddLichHen, fetchGetLichHen } from "../../redux/lich-hen/lich-hen.slice";
import { fetchDetailChuyenKhoa } from "../../redux/chuyen-khoa/chuyen-khoa.slice";
import { Error } from "../signup/signup.styles";


const DatLichKhamInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id : idChuyenKhoa } = useParams();
    // get idDoctor and get time
    const [params] = useSearchParams(); // object params
    const idDoctor = params.get('idDoctor');
    const time = params.get('time');

    const { currentUser } = useSelector(state => state.auth);       // trong <Outlet /> 
    const { chuyenKhoa } = useSelector(state => state.chuyenKhoa);  // lấy từ chi tiết chuyên khoa

    const [doctor, setDoctor] = useState(null);

    useEffect(() => {
        if (!currentUser) {
            alert('Vui lòng đăng nhập!');
            navigate('/auth/dang-nhap');
        } 
        else if (!chuyenKhoa) {
            dispatch(fetchDetailChuyenKhoa(Number(idChuyenKhoa)));
        }
        else {
            setValue('chuyenKhoa', chuyenKhoa.name);
            setValue('fullName', currentUser.fullName);
            setValue('phone', currentUser.phone);
            setValue('email', currentUser.email);
            // get doctor from chuyenKhoa
            const doctor = chuyenKhoa.info_BacSi.find(item => item.id === Number(idDoctor));
            setValue('benhVien', doctor.diaChiKham.noiKham);
            setValue('bacSi', doctor.name);
            setValue('giaKham', doctor.tienKham);
            // setDoctor
            setDoctor(doctor);
        }
    }, [chuyenKhoa]);

    const { 
        register, 
        handleSubmit, 
        setValue,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (window.confirm('Bạn muốn đặt lịch hẹn với thông tin này!')) {
            const status = await dispatch(fetchAddLichHen({
                userName: currentUser.fullName,
                fullName: data.fullName,
                phone: data.phone,
                email: data.email,
                gender: "Nam",
                birthYear: data.birthYear,
                lyDoKham: data.lyDoKham,
                address: data.address,
                benhVien: data.benhVien,
                chuyenKhoa: data.chuyenKhoa,
                bacSi: data.bacSi,
                giaKham: data.giaKham,
                thoiGian: time,
                status: "Đang xử lý",
            }));

            if (status.payload === 'success') {
                const data = await dispatch(fetchGetLichHen());
                const cacLichHen = data.payload;
                cacLichHen.map(lichHen => {
                    navigate(`/quan-ly-lich-hen/${lichHen.userName}`);
                })
                
            } else {
                alert('Vui lòng thử lại!')
            }
        }
    }

    return(
        <Container>
            <Main>
                <Header>
                    <Title>Thông tin đặt lịch khám</Title>
                </Header>
            
                <Body>
                    {doctor && 
                    <>
                        <InfoBacSi>
                            <DivImg>
                                <Img 
                                    src={`http://localhost:3100/${doctor.image}`}
                                />
                            </DivImg>
                            <DivInfo>
                                <TenBacSi>{doctor.name}</TenBacSi>
                                <Text><strong>{time}</strong></Text>
                                <Text>Miễn phí đặt lịch</Text>
                            </DivInfo>
                        </InfoBacSi>
                        <GiaKhamBenh>
                            <Span>Giá khám: {doctor.tienKham}</Span>
                        </GiaKhamBenh>
                    </>
                    }
                    
                    <FormDatLich 
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <DivFormat>
                            <DivLeft>
                                <div>
                                    <LabelText>Họ tên bệnh nhân</LabelText>
                                    <Input 
                                        type="text"
                                        placeholder="Họ tên"
                                        {...register('fullName', { required : true })}
                                    />
                                    <Error>
                                        {errors.fullName?.type === 'required' && "Cần nhập họ và tên."}
                                    </Error>
                                </div>
                                <Gender>
                                    <div>
                                        <InputCheck 
                                            type="radio"
                                            name="check"
                                            id="male"
                                            checked
                                        />
                                        <LabelCheck htmlFor="male">Nam</LabelCheck>
                                    </div>
                                    <div>
                                        <InputCheck 
                                            type="radio"
                                            name="check"
                                            id="female"
                                        />
                                        <LabelCheck htmlFor="female">Nữ</LabelCheck>
                                    </div>
                                </Gender>
                                <div>
                                    <LabelText>Ngày tháng năm sinh</LabelText>
                                    <Input 
                                        type="text"
                                        placeholder="Ngày tháng năm sinh"
                                        {...register('birthYear', { required : true })}
                                    />
                                    <Error>
                                        {errors.birthYear?.type === 'required' && "Cần nhập ngày tháng năm sinh."}
                                    </Error>
                                </div>
                                <div>
                                    <LabelText>Số điện thoại</LabelText>
                                    <Input 
                                        type="text"
                                        placeholder="Số điện thoại"
                                        {...register('phone', { required : true })}
                                    />
                                    <Error>
                                        {errors.phone?.type === 'required' && "Cần nhập số điện thoại"}
                                    </Error>
                                </div>
                                <div>
                                    <LabelText>Email</LabelText>
                                    <Input 
                                        type="text"
                                        placeholder="Email"
                                        {...register('email', {required : true})}
                                    />
                                    <Error>
                                        {errors.email?.type === 'required' && "Cần nhập email"}
                                    </Error>
                                </div>
                                <div>
                                    <LabelText>Địa chỉ liên lạc</LabelText>
                                    <TextArea
                                        rows="2"
                                        placeholder="Nhập Địa chỉ"
                                        {...register('address', {required : true})}
                                    />
                                    <Error>
                                        {errors.address?.type === 'required' && "Cần nhập địa chỉ"}
                                    </Error>
                                </div>
                            </DivLeft>
                            
                            <DivRight>
                                <div>
                                    <LabelText>Lý do khám</LabelText>
                                    <Input 
                                        placeholder="Lý do Khám"
                                        {...register('lyDoKham', { required : true })}
                                    />
                                    <Error>
                                        {errors.lyDoKham?.type === 'required' && "Cần nhập lý do khám."}
                                    </Error>
                                </div>
                                <div>
                                    <LabelText>Bệnh viện</LabelText>
                                    <Input 
                                        placeholder="Tên bệnh viện khám"
                                        disabled
                                        {...register('benhVien', { required : true })}
                                    />
                                    <Error>
                                        {errors.benhVien?.type === 'required' && "Cần nhập tên bệnh viện khám."}
                                    </Error>
                                </div>
                                <div>
                                    <LabelText>Chuyên khoa</LabelText>
                                    <Input 
                                        placeholder="Tên chuyên khoa khám"
                                        disabled
                                        {...register('chuyenKhoa', { required : true })}
                                    />
                                    <Error>
                                        {errors.chuyenKhoa?.type === 'required' && "Cần nhập tên chuyên khoa khám."}
                                    </Error>
                                </div>
                            </DivRight>
                        </DivFormat>
                        <Footer>
                            <XacNhanBtn>Xác nhận đặt khám</XacNhanBtn>
                            <HuyBtn>Hủy</HuyBtn>
                        </Footer>
                    </FormDatLich>
                </Body>
            
            </Main>
        </Container>
    )
}

export default DatLichKhamInfo;