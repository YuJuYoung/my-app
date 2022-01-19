import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [
            { value: '글 목록', path: '/posts' },
            { value: '유저 목록', path: '/users' }
        ]
    },
    reducers: {
        
    }
})

// export const {  } = navSlice.actions
export default navSlice.reducer