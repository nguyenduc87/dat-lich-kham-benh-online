import axios from 'axios';
import { router } from '../../index';

export const apiNoAuth = axios.create({
  baseURL: 'http://localhost:3100',
});

apiNoAuth.interceptors.request.use(
  (config) => {
    return config;
  }, 
  (error) => Promise.reject(error)
);

apiNoAuth.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  return Promise.reject(error);
});



const Api = axios.create({
  baseURL: 'http://localhost:3100',
});

// Add a request interceptor
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } 
    return config;
  },
  (error) => Promise.reject(error)
);

// Xử lý khi đóng gói lại việc 1 nội dung cho các màn hình
// Add a response interceptor
Api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  const status = error.response.status
  console.log(status);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (status === 401) {
    alert('Vui lòng đăng nhập!');
    router.navigate('/auth/dang-nhap');
  }
  return Promise.reject(error);
});


export default Api;