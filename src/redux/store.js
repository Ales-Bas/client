import { configureStore } from '@reduxjs/toolkit';
import models from './slises/modelSlice';
import cart from './slises/cartSlice';
import modelSideBar from './slises/modelFilterSlice';

export const store = configureStore({
    reducer: {
        models,
        cart,
        modelSideBar,
    },
});