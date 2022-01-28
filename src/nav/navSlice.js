import { createSlice } from '@reduxjs/toolkit'

export const navSlice = createSlice({
    name: 'nav',
    initialState: {
        items: [
            { value: '글 목록', path: '/posts' }
        ]
    },
    reducers: {
        
    }
})

// export const {  } = navSlice.actions
export default navSlice.reducer