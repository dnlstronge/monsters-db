import { configureStore } from '@reduxjs/toolkit'
import searchTermReducer from "./searchTermSlice"
import authContextSliceReducer from './authContextSlice'

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    authentication: authContextSliceReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch