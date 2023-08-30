import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";

export interface IMainNav {
    path: string;
    title: string;
    auth: boolean;
}

const nonAuthRoute = [
    { path: '/', title: "Home", auth: false },
    { path: '/login', title: "Login", auth: false },
    { path: '/register', title: "Register", auth: false },
];

const initialState = {
    mainNav: [
        ...nonAuthRoute,
        { path: '/', title: "Home", auth: true },
        { path: '/dashboard', title: "Dashboard", auth: true },
        { path: '/product', title: "Product", auth: true },
        { path: '/todo', title: "Todo", auth: true },
    ] as IMainNav[]
}

const navigatorSlice = createSlice({
    name: 'navigator',
    initialState,
    reducers: {

    }
});

export const { } = navigatorSlice.actions;
export const navigatorSelector = (state: RootState) => state.navigator;
export default navigatorSlice.reducer;