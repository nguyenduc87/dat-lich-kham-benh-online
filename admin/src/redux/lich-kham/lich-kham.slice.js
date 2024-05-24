import { 
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import Api from "../../helpers/api";

const initialState = {
    cacLichKham : [],
}

const LichKhamSlice = createSlice({
    name: 'lichKham',
    initialState,
    reducers: {
        
    },
    extraReducers: builder => {
        builder
        .addCase(fetchGetLichKham.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacLichKham = payload;
        })
        .addCase(updateStatus.fulfilled, (state, action) => {
            const { payload } = action;
            const target = state.cacLichKham.find(item => item.id === payload.id);
            if (target) {
                target.status = payload.status;
            }
        })
    }
});

export default LichKhamSlice.reducer;

//thunk function
export const fetchGetLichKham = createAsyncThunk(
    'lichKham/fetchGetLichKham',
    async () => {
        const response = await Api.get('/admin/lich-kham');
        const { cacLichHen } = response.data.data;
        return cacLichHen;
    }
)

export const updateStatus = createAsyncThunk(
    'lichKham/updateStatus',
    async (id) => {
        const response = await Api.post(`/admin/lich-kham/${id}`);
        const { lichKham } = response.data.data;
        return lichKham;
    }
)