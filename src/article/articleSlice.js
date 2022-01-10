import { createSlice } from '@reduxjs/toolkit'

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        logined: false
    },
    reducers: {
        toggleLoginState: state => {
            state.logined = !state.logined;
        }
    }
})

export const { toggleLoginState } = articleSlice.actions
export default articleSlice.reducer