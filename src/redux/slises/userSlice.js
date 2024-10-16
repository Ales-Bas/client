import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: null,
    login: null,
    token: null,
    role: null,
    isAuth: (false),
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.isAuth = (true);
        },
        removeUser(state) {
            state.id = null;
            state.login = null;
            state.token = null;
            state.role = null;
            state.isAuth = (false);
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;