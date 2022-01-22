import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        list: null,
        selected_post: null
    },
    reducers: {
        setPostList: (state, action) => {
            state.list = action.payload.list
        },
        setSelectedPost: (state, action) => {
            state.selected_post = action.payload.post
        }
    }
})

export const { setPostList, setSelectedPost } = postSlice.actions
export default postSlice.reducer