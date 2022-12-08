import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAuth : false,
    user : null,
    token : null,
    search : ''
}

const AuthSlicer = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        loginReducer : (state,action) => {
            localStorage.setItem("token",action.payload.token)
            state.isAuth = true
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logoutReducer : (state) => {
            localStorage.removeItem("token")
            state.isAuth = false
            state.user = null
            state.token = null
        },
        putSearch : (state,action) => {
            state.search = action.payload
        }
    }
})

export const {loginReducer,logoutReducer,putSearch} =  AuthSlicer.actions
export default AuthSlicer.reducer