import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { $host } from '../../http/index';

export const fetchModelTypeList = createAsyncThunk(
    'modelSideBar/fetchModelTypeListStatus',
    async () => {
        const { data } = await $host.get(`api/modeltype`);
        return data;
    });

export const fetchModelList = createAsyncThunk(
    'modelSideBar/fetchModelListStatus',
    async (params) => {
        const { typeId } = params;
        const { data } = await $host.get(`api/modelname?${typeId}`);
        return data;
    });


const initialState = {
    modelTypeList: [],
    modelTypeId: 0,
    modelList: [],
    status: 'loading', // loading | success | error
}

const modelFilterSlice = createSlice({
    name: 'modelSideBar',
    initialState,
    reducers: {
        setModelTypeList(state, action) {
            state.modelTypeList = action.payload;
        },
        setModelTypeId(state, action) {
            state.modelTypeId = action.payload;
        },
        setModelList(state, action) {
            state.modelList = action.payload;
        },
    },
    extraReducers: {
        [fetchModelTypeList.pending]: (state) => {
            state.status = 'loading';
            state.modelTypeList = [];
        },
        [fetchModelTypeList.fulfilled]: (state, action) => {
            state.modelTypeList = action.payload;
            state.status = 'success';
        },
        [fetchModelTypeList.rejected]: (state, action) => {
            state.status = 'error';
            state.modelTypeList = [];
        },
        [fetchModelList.pending]: (state) => {
            state.status = 'loading';
            state.modelList = [];
        },
        [fetchModelList.fulfilled]: (state, action) => {
            state.modelList = action.payload;
            state.status = 'success';
        },
        [fetchModelList.rejected]: (state, action) => {
            state.status = 'error';
            state.modelList = [];
        },
    }
});

// Action creators are generated for each case reducer function
export const {
    setModelTypeList,
    setModelTypeId,
    setModelList,
} = modelFilterSlice.actions;

export default modelFilterSlice.reducer;