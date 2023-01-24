import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import purchaseReducer from "../features/purchaser/purchaseSlice"
import authReducer from "../features/auth/authSlice"
import { setupListeners } from '@reduxjs/toolkit/query'
import { useDispatch } from 'react-redux'
// ...

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        purchaser: purchaseReducer,
        auther: authReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export default store