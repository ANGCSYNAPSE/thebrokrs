import { configureStore } from "@reduxjs/toolkit"
import authReducer from "@/store/slices/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
