import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    partItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPartItems(state, action) {
            // state.partItems.push(action.payload);
            const findPartItem = state.partItems.find((obj) => obj.id === action.payload.id);

            if (findPartItem) {
                findPartItem.count++;
            } else {
                state.partItems.push({
                    ...action.payload,
                    count: 1,
                });
            }
        },
        minusItem(state, action) {
            const findPartItem = state.partItems.find((obj) => obj.id === action.payload);

            if (findPartItem) {
                findPartItem.count--;
            }
        },
        removePartItems(state, action) {
            state.partItems = state.partItems.filter(obj => obj.id !== action.payload);
        },
        clearPartItems(state) {
            state.partItems = [];
        },

    },
});

// Action creators are generated for each case reducer function
export const { addPartItems,
    removePartItems,
    clearPartItems,
    minusItem,
} = cartSlice.actions;

export default cartSlice.reducer;