import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchInfoPage = createAsyncThunk(
    'infoPageSlice/fetchInfoPageStatus',
    async (params) => {
        const { infoPageId } = params;
        const { data } = await $host.get(`api/specifications/${infoPageId}`);
        return data;
    });

const initialState = {
    item: [],
    status: 'loading', // loading | success | error
}

export const infoPageSlice = createSlice({
    name: 'infoPageSlice',
    initialState,
    reducers: {
        setItem(state, action) {
            state.item = action.payload;
        },
    },
    extraReducers: {
        [fetchInfoPage.pending]: (state) => {
            state.status = 'loading';
            state.item = [];
        },
        [fetchInfoPage.fulfilled]: (state, action) => {
            state.item = action.payload;
            state.status = 'success';
        },
        [fetchInfoPage.rejected]: (state, action) => {
            state.status = 'error';
            state.item = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setItem,
} = infoPageSlice.actions;

export default infoPageSlice.reducer;