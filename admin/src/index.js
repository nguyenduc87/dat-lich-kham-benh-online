import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import Template from './components/template/template.component';
import Login from './pages/login/login.component';
import DanhSachLichKham from './pages/danh-sach-lich-kham/danh-sach-lich-kham.component';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/danh-sach-lich-kham',
        element: <DanhSachLichKham />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);


