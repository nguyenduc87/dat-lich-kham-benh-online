import { 
    createSlice, 
    createAsyncThunk 
} from "@reduxjs/toolkit";

import Api from "../../helpers/api/api";

const initialState = {
    cacLichHen: []
}

const LichHenSlice = createSlice({
    name: 'lichHen',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchGetLichHen.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacLichHen = payload;
        })
    }
})

export default LichHenSlice.reducer;

// thunk function
export const fetchAddLichHen = createAsyncThunk(
    'lichHen/fetchAddLichHen',
    async (user) => {
        const response = await Api.post('/lich-hen', (user));
        const { status } = response.data;
        return status;
    }
)

export const fetchGetLichHen = createAsyncThunk(
    'lichHen/fetchGetLichHen',
    async () => {
        const response = await Api.get('/lich-hen');
        const { danhSachLichHen } = response.data.data;
        return danhSachLichHen
    }
)