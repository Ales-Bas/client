import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isSetModel: (false),

    modelNameId: {},
    subTypePartId: {
        id: 0,
        name: "",
    },
    subTypePart: {
        id: 0,
        name: "",
    },
    partTypeList: {
        id: 0,
        name: "",
    },
    typePartId: {
        id: 0,
        name: '',
    },
    isSetSubTypePart: (false),
}

const modelSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setIsSetModel(state, action) {
            state.isSetModel = action.payload;
        },
        setModelNameId(state, action) {
            state.modelNameId = action.payload;
        },
        setSubTypePart(state, action) {
            state.subTypePart = action.payload;
        },
        setSubTypePartId(state, action) {
            state.subTypePartId = action.payload;
        },
        setPartTypeList(state, action) {
            state.partTypeList = action.payload;
        },
        setTypePartId(state, action) {
            state.typePartId = action.payload;
        },
        setIsSetSubTypePart(state, action) {
            state.isSetSubTypePart = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIsSetModel,
    setModelNameId,
    setSubTypePart,
    setSubTypePartId,
    setTypePartId,
    setPartTypeList,
    setIsSetTypePart,
    setIsSetSubTypePart } = modelSlice.actions;

export default modelSlice.reducer;