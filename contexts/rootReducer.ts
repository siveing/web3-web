import { combineReducers } from '@reduxjs/toolkit'
import navigatorSlice from './navigator/navigator.slice';
import authSlice from './auth/auth.slice';
import loadingSlice from './loading/loading.slice';

const rootReducer = combineReducers({
    navigator: navigatorSlice,
    auth: authSlice,
    loading: loadingSlice
});

export default rootReducer;