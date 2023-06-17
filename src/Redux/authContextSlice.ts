import { createSlice } from "@reduxjs/toolkit";

const authContextSlice = createSlice({
    name: "authentication",
    initialState: {
        user: {
            userID: "",
            userName: "",
            adminPriv: false
        }
        
    },
    reducers: {}
})

export const {} = authContextSlice.actions
export default authContextSlice.reducer