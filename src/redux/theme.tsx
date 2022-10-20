import { createSlice } from "@reduxjs/toolkit"

export interface ThemeStateInterface {
    theme: {
        theme: string,
        primaryColor: string,
        secondaryColor: string,
        backgroundColor: string
    }
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'default',
        primaryColor: '#011627',
        secondaryColor: '#5890FF',
        backgroundColor: '#F6F7F8',
    },
    reducers: {
        setThemeToDefault: (state) => {
            state.theme = 'default'
            state.primaryColor = '#011627'
            state.secondaryColor = '#246eb9'
            state.backgroundColor = '#F6F7F8'
        },

        setThemeToDark: (state) => {
            state.theme = 'dark'
            state.primaryColor = '#edf2f4'
            state.secondaryColor = '#00a8e8'
            state.backgroundColor = '#2B2D42'
        },

        setThemeToLight: (state) => {
            state.theme = 'light'
            state.primaryColor = '#011627'
            state.secondaryColor = '#246eb9'
            state.backgroundColor = '#FDFFFC'
        },


    }
})

export const { 
    setThemeToDefault, 
    setThemeToDark, 
    setThemeToLight 
} = themeSlice.actions

export default themeSlice.reducer