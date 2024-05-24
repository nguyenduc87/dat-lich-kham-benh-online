import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth.slice";
import lichKhamReducer from "./lich-kham/lich-kham.slice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        lichKham: lichKhamReducer
    }
})

export default store;