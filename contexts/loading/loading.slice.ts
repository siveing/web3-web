import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../rootStore";
import { deleteCookie, setCookie } from 'cookies-next';
import { getAuthCookie } from "@/lib/utils";

export type TLoading = {
    isLoading: boolean;
    // Draft option if needed
    option?: any
}

const initialState: TLoading = {
    isLoading: false,
    option: {}
}

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
            return state;
        }
    }
})

export const { setLoading } = loadingSlice.actions;
export const loadingSelector = (state: RootState) => state.loading;
export default loadingSlice.reducer;