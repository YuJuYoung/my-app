import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        value: '쇼핑몰 프로젝트'
    },
    reducers: {
        setTitle: (state, action) => {
            state.value = action.payload.value
        }
    }
})

export const { setTitle } = titleSlice.actions
export default titleSlice.reducer