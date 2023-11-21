import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchNavesInfo = createAsyncThunk(
    'navesInfoSlice/fetchNavesInfoStatus',
    async (params) => {
        const { infoId } = params;
        const { data } = await $host.get(`api/attachments/${infoId}`);
        return data;
    });

const initialState = {
    navesItem: [],
    status: 'loading', // loading | success | error
}

export const navesInfoSlice = createSlice({
    name: 'navesInfoSlice',
    initialState,
    reducers: {
        setNavesItem(state, action) {
            state.navesItem = action.payload;
        },
    },
    extraReducers: {
        [fetchNavesInfo.pending]: (state) => {
            state.status = 'loading';
            state.navesItem = [];
        },
        [fetchNavesInfo.fulfilled]: (state, action) => {
            state.navesItem = action.payload;
            state.status = 'success';
        },
        [fetchNavesInfo.rejected]: (state, action) => {
            state.status = 'error';
            state.navesItem = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setNavesItem,
} = navesInfoSlice.actions;

export default navesInfoSlice.reducer;