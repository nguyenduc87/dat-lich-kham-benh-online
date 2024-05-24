import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./home/home.slice";
import chuyenKhoaReducer from "./chuyen-khoa/chuyen-khoa.slice";
import benhVienReducer from "./benh-vien/benh-vien.slice";
import authReducer from "./auth/auth.slice";
import lichHenReducer from "./lich-hen/lich-hen.slice";

const store = configureStore({
    reducer: {
        home: homeReducer,
        chuyenKhoa: chuyenKhoaReducer,
        benhVien: benhVienReducer,
        auth: authReducer,
        lichHen: lichHenReducer
    }
})

export default store;