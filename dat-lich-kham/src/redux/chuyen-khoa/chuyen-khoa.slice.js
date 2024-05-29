import { 
    createSlice, 
    createAsyncThunk 
} from "@reduxjs/toolkit";
import Api from "../../helpers/api/api";

const initialState = {
    cacChuyenKhoa: [],
    chuyenKhoa: null,
    tenChuyenKhoa: null
}

const ChuyenKhoaSlice = createSlice({
    name: 'chuyenKhoa',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchListChuyenKhoa.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacChuyenKhoa = payload;
        })
        .addCase(fetchDetailChuyenKhoa.fulfilled, (state, action) => {
            const { payload } = action;
            state.chuyenKhoa = payload;
        })
        .addCase(fetchTenChuyenKhoa.fulfilled, (state, action) => {
            const { payload } = action;
            state.tenChuyenKhoa = payload;
        })
    }
})

export default ChuyenKhoaSlice.reducer;

//thunk function
// Load danh sách chuyên khoa
export const fetchListChuyenKhoa = createAsyncThunk (
    'chuyenKhoa/fetchListChuyenKhoa',
    async () => {
        //fetch
        // const response = await fetch('http://localhost:3100/chuyen-khoa/danh-sach');
        // const res = await response.json();
        // const { cacChuyenKhoa } = res.data;
        // return cacChuyenKhoa;

        //axios
        const response = await Api.get('chuyen-khoa/danh-sach');
        const { cacChuyenKhoa } = response.data.data;
        return cacChuyenKhoa;
    }
)
// Load chi tiết chuyên khoa theo id
export const fetchDetailChuyenKhoa = createAsyncThunk (
    'chuyenKhoa/fetchDetailChuyenKhoa',
    async (id) => {
        //fetch
        // const response = await fetch(`http://localhost:3100/chuyen-khoa/chi-tiet/${id}`);
        // const res = await response.json();
        // const { chuyenKhoa } = res.data;
        // return chuyenKhoa;

        //axios
        const response = await Api.get(`chuyen-khoa/chi-tiet/${id}`);
        const { chuyenKhoa } = response.data.data;
        return chuyenKhoa;
    }
)

export const fetchTenChuyenKhoa = createAsyncThunk (
    'chuyenKhoa/fetchTenChuyenKhoa',
    async (name) => {
        const response = await Api.get(`ten-chuyen-khoa?name=${name}`);
        const { chuyenKhoa } = response.data.data;
        return chuyenKhoa;
    }
)
