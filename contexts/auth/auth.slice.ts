import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";
import { deleteCookie, setCookie } from 'cookies-next';
import { getAuthCookie, getUserCookie } from "@/lib/utils";

export type TAuth = {
    auth: boolean;
    user?: TUser
}

export type TUser = {
    username: string | never;
    phone: string;
    email: string;
    role?: string
    password?: string | undefined;
    address?: string
}

const initialState: TAuth = {
    auth: getAuthCookie,
    user: getUserCookie
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.auth = true;
            state.user = action.payload;
            setCookie('isLoggedIn', true);
            setCookie('userCookie', action.payload);
            return state;
        },
        logout(state, action) {
            state.auth = false;
            state.user = action.payload;
            deleteCookie('isLoggedIn');
            deleteCookie('userCookie');
            return state;
        }
    }
})

export const { setCurrentUser, logout } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export default authSlice.reducer;