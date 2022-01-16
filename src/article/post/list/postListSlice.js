import { createSlice } from '@reduxjs/toolkit'

export const postListSlice = createSlice({
    name: 'postList',
    initialState: {
        list: null
    },
    reducers: {
        setPostList: (state, action) => {
            state.list = action.payload.list
        }
    }
})

export const { setPostList } = postListSlice.actions
export default postListSlice.reducer