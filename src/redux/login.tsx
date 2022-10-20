import { createSlice } from "@reduxjs/toolkit"

export interface LoginStateInterface {
    login: {
        loggedIn: boolean,
        email: string
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loggedIn: false,
        email: null
    },
    reducers: {
        login: (state, action) => {
            state.loggedIn = true
            state.email = action.payload
        },

        logout: (state) => {
            state.loggedIn = false
            state.email = null
        }

    }
})

export const { 
    login,
    logout
} = loginSlice.actions

export default loginSlice.reducer