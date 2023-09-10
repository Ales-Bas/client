import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchSearchParts = createAsyncThunk(
    'partSearchSlice/fetchSearchPartsStatus',
    async (params) => {
        const { partnumber } = params;
        const { data } = await $host.get(`api/part?${partnumber}`);
        return data;
    });

const initialState = {
    parts: [],
    status: 'loading', // loading | success | error
}
export const partSearchSlice = createSlice({
    name: 'partSearchSlice',
    initialState,
    reducers: {
        setParts(state, action) {
            state.parts = action.payload;
        },
    },
    extraReducers: {
        [fetchSearchParts.pending]: (state) => {
            state.status = 'loading';
            state.parts = [];
        },
        [fetchSearchParts.fulfilled]: (state, action) => {
            state.parts = action.payload;
            state.status = 'success';
        },
        [fetchSearchParts.rejected]: (state, action) => {
            state.status = 'error';
            state.parts = [];
        },
    }
});

export const {
    setParts,
} = partSearchSlice.actions;

export default partSearchSlice.reducer;