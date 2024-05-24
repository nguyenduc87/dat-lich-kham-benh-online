import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Template from './components/template/template.component';
import Home from './pages/home/home.component';

import ListChuyenKhoa from './pages/danh-sach-chuyen-khoa/danh-sach-chuyen-khoa.component';
import DetailChuyenKhoa from './pages/chi-tiet-chuyen-khoa/chi-tiet-chuyen-khoa.component';
import ListBenhVien from './pages/danh-sach-benh-vien/danh-sach-benh-vien.component';
import DetailBenhVien from './pages/chi-tiet-benh-vien/chi-tiet-benh-vien.component';
import Login from './pages/login/login.component';
import SignUP from './pages/signup/signup.component';
import ForgetPassword from './pages/forget-pass/forget-pass.component';
import DatLichKhamInfo from './pages/dat-lich-kham/dat-lich-kham.component';
import QuanLyLichHen from './pages/quan-ly-lich-hen/quan-ly-lich-hen.component';
import AuthTemplate from './components/auth-template/auth-template.component';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/danh-sach-chuyen-khoa',
        element: <ListChuyenKhoa />
      },
      {
        path: '/chi-tiet-chuyen-khoa/:id',
        element: <DetailChuyenKhoa />
      },
      {
        path: '/danh-sach-benh-vien',
        element: <ListBenhVien />
      },
      {
        path: '/chi-tiet-benh-vien/:id',
        element: <DetailBenhVien />
      },
      {
        path: '/chi-tiet-chuyen-khoa/:id/dat-lich-kham',
        element: <DatLichKhamInfo />
      },
      {
        path: '/quan-ly-lich-hen/:userName',
        element: <QuanLyLichHen />
      }
    ]
  },
  {
    element: <AuthTemplate />,
    children: [
      {
        path: '/auth/dang-nhap',
        element: <Login />
      },
      {
        path: '/auth/dang-ky',
        element: <SignUP />
      },
      {
        path: '/auth/quen-mat-khau',
        element: <ForgetPassword />
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


