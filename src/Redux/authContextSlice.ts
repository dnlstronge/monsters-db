import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";

const authContextSlice = createSlice({
    name: "authentication",
    initialState: {
        userId: "",
        username: "",
        admin: false,
        isAuth: false 

        
    },
    reducers: {
        setUID (state, action) {
            state.userId = action.payload
        },
        setUN(state, action) {
            state.username = action.payload
        },
        setAdmin(state) {
            state.admin = true
        },
        setIsAuth(state) {
            state.isAuth = true
        },
        setLogout(state) {
            state.userId = ""
            state.username = ""
            state.admin = false
            state.isAuth = false
        }
    }

   
})

export const {setUID, setUN, setAdmin, setIsAuth, setLogout} = authContextSlice.actions
export default authContextSlice.reducer