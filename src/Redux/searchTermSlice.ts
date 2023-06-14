import { createSlice } from "@reduxjs/toolkit"

export const searchTermSlice = createSlice({
    name: "searchTerm", 
    initialState: {
        showSearch: false,
        searchQuery: "", },
        reducers: {
            setShowSearch(state, action) {
                state.showSearch = action.payload
            },
            setSearchTerm(state, action) {
                state.searchQuery = action.payload
            }
        }
    
})

export const {setShowSearch, setSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer