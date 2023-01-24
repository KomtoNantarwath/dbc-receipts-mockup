import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface AuthState {
    token: string
}

// Define the initial state using that type
const initialState: AuthState = {
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setTokenStore: (state, action) => {
            state.token = action.payload
        },
    },
})

export const { setTokenStore } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auther

export default authSlice.reducer