import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchModelList = createAsyncThunk(
    'modelSideBar/fetchModelListStatus',
    async () => {
        const { data } = await $host.get(`api/modelname`);
        return data;
    });


const initialState = {
    modelList: [],
    status: 'loading', // loading | success | error
}

const modelFilterSlice = createSlice({
    name: 'modelSideBar',
    initialState,
    reducers: {
        setModelList(state, action) {
            state.modelList = action.payload;
        },
    },
    extraReducers: {
        [fetchModelList.pending]: (state) => {
            state.status = 'loading';
            state.modelList = [];
        },
        [fetchModelList.fulfilled]: (state, action) => {
            state.modelList = action.payload;
            state.status = 'success';
        },
        [fetchModelList.rejected]: (state) => {
            state.status = 'error';
            state.modelList = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setModelList,
} = modelFilterSlice.actions;

export default modelFilterSlice.reducer;