import { configureStore } from '@reduxjs/toolkit';
import models from './slises/modelSlice';
import cart from './slises/cartSlice';
import modelSideBar from './slises/modelFilterSlice';
import tehCardFilter from './slises/tehCardFilter';
import infoPageSlice from './slises/infoPageSlice';
import userSlice from './slises/userSlice'

export const store = configureStore({
    reducer: {
        models,
        cart,
        modelSideBar,
        tehCardFilter,
        infoPageSlice,
        userSlice
    },
});