import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchTehCard = createAsyncThunk(
    'tehCardFilter/fetchTehCardStatus',
    async (params) => {
        const { category } = params;
        const { data } = await $host.get(`api/specifications?${category}`);
        return data;
    });

const initialState = {
    categoryId: 0,
    categorySearch: '',
    items: [],
    status: 'loading', // loading | success | error
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
} = tehCardSlice.actions;

export default tehCardSlice.reducer;