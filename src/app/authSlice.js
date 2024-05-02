import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.username = action.payload.username
        }
    },
})

export const { setUserInfo } = authSlice.actions

export default authSlice.reducer