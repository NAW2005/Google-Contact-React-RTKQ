import { configureStore } from "@reduxjs/toolkit";
import AuthApi from "./service/AuthApi";
import UserActionSlicer from "./Slicer/useraction/UserActionSlicer";
import AuthSlicer from "./Slicer/auth/AuthSlicer";


const store = configureStore({
    reducer : {
        [AuthApi.reducerPath] : AuthApi.reducer,
        userAction : UserActionSlicer,
        authed : AuthSlicer
    },
    middleware : (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(AuthApi.middleware)
    )
})

export default store