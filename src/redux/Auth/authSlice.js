import { createSlice } from "@reduxjs/toolkit";
import { authOperations } from "./authOperations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(authOperations.register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(authOperations.logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(authOperations.getCurrentUser.fulfilled, (state, action) => {
                state.user = { ...action.payload };
                state.isLoggedIn = true;
            });
    },
});
export const authReducer = authSlice.reducer;

