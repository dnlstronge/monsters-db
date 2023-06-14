import { configureStore } from '@reduxjs/toolkit'
import searchTermReducer from "./searchTermSlice"

export const store = configureStore({
  reducer: {
    searchTerm: searchTermReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch