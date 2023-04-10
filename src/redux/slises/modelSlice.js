import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    isSetModel: (false),

    modelNameId: {
        id: 0,
        name: "",
    },
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
    },
});

// Action creators are generated for each case reducer function
export const { setIsSetModel,
    setModelNameId,
    setSubTypePart,
    setSubTypePartId,
    setTypePartId,
    setPartTypeList,
    setIsSetTypePart } = modelSlice.actions;

export default modelSlice.reducer;