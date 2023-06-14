import { createSlice } from "@reduxjs/toolkit"

export const searchTermSlice = createSlice({
    name: "searchTerm", 
    initialState: {
        showSearch: false,
        searchQuery: "", },
        reducers: {
            setShowSearch() {},
            setSearchTerm() {}
        }
    
})

export const {setShowSearch, setSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer