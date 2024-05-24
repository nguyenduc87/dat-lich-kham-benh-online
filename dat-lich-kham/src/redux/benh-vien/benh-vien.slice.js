import { 
    createSlice, 
    createAsyncThunk
} from "@reduxjs/toolkit";
import Api from "../../helpers/api/api";

const initialState = {
    cacCoSoYTe: [],
    coSoYTe: null
}

const BenhVienSlice = createSlice({
    name: 'coSoYTe',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        .addCase(fetchListCoSoYTe.fulfilled, (state, action) => {
            const { payload } = action;
            state.cacCoSoYTe = payload;
        })
        .addCase(fetchDetailCoSoYTe.fulfilled, (state, action) => {
            const { payload } = action;
            state.coSoYTe = payload;
        })
    }
})

export default BenhVienSlice.reducer;

//thunk function
// Load danh sách Benh Vien
export const fetchListCoSoYTe = createAsyncThunk(
    'coSoYTe/fetchListCoSoYTe',
    async () => {
        // fetch
        // const response = await fetch('http://localhost:3100/co-so-y-te/danh-sach');
        // const res = await response.json();
        // const { cacCoSoYTe } = res.data;
        // return cacCoSoYTe;

        //axios
        const response = await Api.get('/co-so-y-te/danh-sach');
        const { cacCoSoYTe } = response.data.data;
        return cacCoSoYTe;
    }
)
// Load chi tiết bệnh viện
export const fetchDetailCoSoYTe = createAsyncThunk(
    'coSoYTe/fetchDetailCoSoYTe',
    async (id) => {
        //fetch
        // const response = await fetch(`http://localhost:3100/co-so-y-te/chi-tiet/${id}`);
        // const res = await response.json();
        // const { coSoYTe } = res.data;
        // return coSoYTe;

        //axios
        const response = await Api.get(`co-so-y-te/chi-tiet/${id}`);
        const { coSoYTe } = response.data.data;
        return coSoYTe;
    }
)