import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
export const searchTermSlice = createSlice({
    name: "searchTerm", 
    initialState: {
        showSearch: false,
        searchQuery: "", 
    },
        reducers: {
            setShowSearch(state, action) {
                state.showSearch = action.payload
            },
            setSearchTerm(state, action: PayloadAction<string>) {
                state.searchQuery = action.payload
            }
           
        }   
    
})

export const {setShowSearch, setSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer