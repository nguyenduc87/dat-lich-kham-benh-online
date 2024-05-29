import { 
    createSlice,
    createAsyncThunk 
} from "@reduxjs/toolkit";

import Api from "../../helpers/api/api";
import { apiNoAuth } from "../../helpers/api/api";

const initialState = {
    currentUser: null,
    loading: true,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchUserMe.fulfilled, (state, action) => {
            const { payload } = action;
            state.currentUser = payload;
            state.loading = false;
        })
        .addCase(fetchLogOut.fulfilled, (state) => {
            state.currentUser = null;
        })
    }
})

export default AuthSlice.reducer;


//thunk function
export const fetchSignUp = createAsyncThunk(
    'auth/fetchSignUp',
    async (user) => {
        const response = await Api.post('/auth/signup', (user));
        const { status } = response.data;
        return status;
    }
)

export const fetchLogin = createAsyncThunk(
    'auth/fetchLogin',
    async (user) => {
        try {
            await apiNoAuth.post('/auth/login', (user)); // bỏ qua check 401
            const response = await Api.post('/auth/login', (user));
            const { token } = response.data.data;
            localStorage.setItem('token', token);
            return true;
        } catch(error) {
            return false;
        }
    }
)

export const fetchLogOut = createAsyncThunk(
    'auth/fetchLogOut',
    async () => {
        localStorage.removeItem("token");
    }
)

// Get currentUser
export const fetchUserMe = createAsyncThunk(
    'auth/fetchUserMe',
    async () => {
        const token = localStorage.getItem('token');
        let currentUser = null;
        if (token) {
            const response = await Api.get('/users/me');
            currentUser = response.data.data.user;
        } 
        return currentUser;
    }
)