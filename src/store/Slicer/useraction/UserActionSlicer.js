import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    sidebar : false
}

const UserActionSlice = createSlice({
    name : "useraction",
    initialState,
    reducers : {
        toggle : (state) =>  {state.sidebar = !state.sidebar}   
    }
})

export const {toggle} = UserActionSlice.actions
export default UserActionSlice.reducer