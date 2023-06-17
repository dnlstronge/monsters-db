import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";

const authContextSlice = createSlice({
    name: "authentication",
    initialState: {
        user: {
            userID: "",
            username: "",
            adminPriv: false,
            isAuth: false

        }
        
    },
    reducers: {authUser(state, payload: {
        uid: string,
        username: string,
        adminPriv: boolean,
        isAuth: boolean
    }) {
        state.user.userID = payload.uid
        state.user.username = payload.username
        state.user.adminPriv = payload.adminPriv
        state.user.isAuth = payload.isAuth

    }}
})

export const {authUser} = authContextSlice.actions
export default authContextSlice.reducer