import { configureStore } from '@reduxjs/toolkit';
import models from './slises/modelSlice';
import cart from './slises/cartSlice';

export const store = configureStore({
    reducer: {
        models,
        cart,
    },
});