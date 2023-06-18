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
        setUsername(state, action) {
            console.log("state has been updated with username")
            console.log(action.payload)
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

export const {setUID, setUsername, setAdmin, setIsAuth, setLogout} = authContextSlice.actions
export default authContextSlice.reducer