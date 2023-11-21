import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchNavesCard = createAsyncThunk(
    'navesCardFilter/fetchNavesCardStatus',
    async () => {
        const { data } = await $host.get(`api/attachments`);
        return data;
    });

const initialState = {
    navesList: [],
    status: 'loading', // loading | success | error
}

export const navesCardSlice = createSlice({
    name: 'navesCardFilter',
    initialState,
    reducers: {
        setNavesList(state, action) {
            state.navesList = action.payload;
        },
    },
    extraReducers: {
        [fetchNavesCard.pending]: (state) => {
            state.status = 'loading';
            state.navesList = [];
        },
        [fetchNavesCard.fulfilled]: (state, action) => {
            state.navesList = action.payload;
            state.status = 'success';
        },
        [fetchNavesCard.rejected]: (state, action) => {
            state.status = 'error';
            state.navesList = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setNavesList
} = navesCardSlice.actions;

export default navesCardSlice.reducer;