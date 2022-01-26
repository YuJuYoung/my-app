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
            var payload = action.payload;
            var type = payload.type;

            if (type === 'INIT_POST') {
                state.selected_post = payload.post
            } else if (type === 'UPDATE_TITLE') {
                state.selected_post.title = payload.value
            } else if (type === 'UPDATE_DESC') {
                state.selected_post.desc = payload.value
            } else if (type === 'UPDATE_PRODUCT_NAME') {
                state.selected_post.product_name = payload.value
            } else if (type === 'UPDATE_PRICE') {
                state.selected_post.price = payload.value
            }
        }
    }
})

export const { setPostList, setSelectedPost } = postSlice.actions
export default postSlice.reducer