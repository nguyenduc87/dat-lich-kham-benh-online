import { 
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import Api from "../../helpers/api";

const initialState = {
    admin: null,
    loading: true
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    // extraReducers: builder => {
    //     builder

    // }
})

export default AuthSlice.reducer;

//thunk function
export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (admin) => {
        try {
            const response = await Api.post('/auth/admin/login', (admin));
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            return true;
        } catch(error){
            return false;
        }
    }
)