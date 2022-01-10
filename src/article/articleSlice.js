import { createSlice } from '@reduxjs/toolkit'

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        logined: false
    },
    reducers: {
        toggleLoginState: (state) => {
            state.logined = true ? false : true;
        }
    }
})

export const { toggleLoginState } = articleSlice.actions
export default articleSlice.reducer