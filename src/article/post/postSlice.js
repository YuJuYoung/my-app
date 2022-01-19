import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: null
    },
    reducers: {
        setPostList: (state, action) => {
            state.list = action.payload.list
        }
    }
})

export const { setPostList } = postSlice.actions
export default postSlice.reducer