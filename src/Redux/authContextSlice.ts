import { createSlice } from "@reduxjs/toolkit";
import { CaseReducer } from "@reduxjs/toolkit";

const authContextSlice = createSlice({
    name: "authentication",
    initialState: {
        userId: "",
        admin: false,
        isAuth: false 

        
    },
    reducers: {
        setUID() {},
        setAdmin() {},
        setIsAuth() {},
        setLogout(state) {
            state.userId = ""
            state.admin = false
            state.isAuth = false
        }
    }

   
})

export const {setUID, setAdmin, setIsAuth, setLogout} = authContextSlice.actions
export default authContextSlice.reducer