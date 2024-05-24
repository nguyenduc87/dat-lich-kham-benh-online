import { 
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import Api from "../../helpers/api/api";

const initialState = {
    cacChuyenKhoa: [],
    cacCoSoYTe: [],
    cacBacSi: [],
}

 const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        
    },
    //Dispatch -> lắng nghe từng trạng thái
    extraReducers: builder => {
        builder
        .addCase(fetchChuyenKhoa.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacChuyenKhoa = payload;
        })
        .addCase(fetchCoSoYTe.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacCoSoYTe = payload;
        })
        .addCase(fetchBacSi.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacBacSi = payload;
        })
    }
 })

 export default homeSlice.reducer;

//thunk function
//Load danh sách 4 chuyên khoa cho trang home
export const fetchChuyenKhoa = createAsyncThunk (
    'home/fetchChuyenKhoa',
    async () => {
        //fetch
        // const response = await fetch('http://localhost:3100/home/cac-chuyen-khoa');
        // const res = await response.json();
        // const { cacChuyenKhoa } = res.data;
        // return cacChuyenKhoa;

        //axios
        const response = await Api.get('home/cac-chuyen-khoa');
        const { cacChuyenKhoa } = response.data.data;
        return cacChuyenKhoa;
    }
)
//Load danh sách cơ sở y tế
export const fetchCoSoYTe = createAsyncThunk (
    'home/fetchCoSoYTe',
    async () => {
        //fetch
        // const response = await fetch('http://localhost:3100/home/cac-co-so-y-te');
        // const res = await response.json();
        // const { cacCoSoYTe } = res.data;
        // return cacCoSoYTe;

        //axios
        const response = await Api.get('home/cac-co-so-y-te');
        const { cacCoSoYTe } = response.data.data;
        return cacCoSoYTe;
    }
) 
// Load danh sách bác sĩ
export const fetchBacSi = createAsyncThunk (
    'home/fetchBacSi',
    async () => {
        //fetch
        // const response = await fetch('http://localhost:3100/home/cac-bac-si');
        // const res = await response.json();
        // const { cacBacSi } = res.data;
        // return cacBacSi;

        //axios
        const response = await Api.get('home/cac-bac-si');
        const { cacBacSi } = response.data.data;
        return cacBacSi;
    }
) 
