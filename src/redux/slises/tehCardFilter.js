import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchTehCard = createAsyncThunk(
    'tehCardFilter/fetchTehCardStatus',
    async (params) => {
        const { category, page } = params;
        const { data } = await $host.get(`api/specifications?${category}&${page}`);
        return data;
    });

const initialState = {
    categoryId: 0,
    categorySearch: '',
    items: [],
    status: 'loading', // loading | success | error
    currentPage: 1,
    limit: 9,

}

export const tehCardSlice = createSlice({
    name: 'tehCardFilter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setCategorySearch: (state, action) => {
            state.categorySearch = action.payload;
        },
        setItems(state, action) {
            state.items = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
    },
    extraReducers: {
        [fetchTehCard.pending]: (state) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchTehCard.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchTehCard.rejected]: (state, action) => {
            state.status = 'error';
            state.items = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setCategoryId,
    setCategorySearch,
    setItems,
    setCurrentPage,
    setLimit
} = tehCardSlice.actions;

export default tehCardSlice.reducer;