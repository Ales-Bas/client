import { configureStore } from '@reduxjs/toolkit';
import models from './slises/modelSlice';
import cart from './slises/cartSlice';
import modelSideBar from './slises/modelFilterSlice';
import tehCardFilter from './slises/tehCardFilter';
import infoPageSlice from './slises/infoPageSlice';
import user from './slises/userSlice';
import partSearchSlice from './slises/partSearchSlice';
import navesCardSlice from './slises/navesCardSlice';
import navesInfoSlice from './slises/navesInfoSlice';

export const store = configureStore({
    reducer: {
        models,
        cart,
        modelSideBar,
        tehCardFilter,
        infoPageSlice,
        user,
        partSearchSlice,
        navesCardSlice,
        navesInfoSlice
    },
});