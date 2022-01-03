import { createSlice } from '@reduxjs/toolkit'

export const titleSlice = createSlice({
    name: 'title',
    initialState: {
        value: '메신저 프로젝트'
    },
    reducers: {
        setTitle: (state, action) => {
            state.value = action.value
        }
    }
})

export const { setTitle } = titleSlice.actions
export default titleSlice.reducer